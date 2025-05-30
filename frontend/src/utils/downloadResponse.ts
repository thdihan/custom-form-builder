/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import JSZip from "jszip";
import { saveAs } from "file-saver";

type TResponse = {
    [key: string]: any;
};

export async function generateHotelsPDFZip(hotelArray: TResponse[]) {
    const zip = new JSZip();

    for (const hotel of hotelArray) {
        const doc = new jsPDF();

        // Add hotel name as H1-style text
        const hotelName = hotel["Hotel Name"] || "Unnamed Hotel";
        doc.setFontSize(18);
        doc.setFont("helvetica", "bold");
        doc.text(hotelName, 14, 20);

        const hotelInfo: any[] = [];

        hotelInfo.push(["Address", hotel["Address"] || ""]);
        hotelInfo.push(["Phone", hotel["Phone  "] || ""]);
        hotelInfo.push(["Email", hotel["Email"] || ""]);
        hotelInfo.push(["Website", hotel["Website"] || ""]);
        hotelInfo.push(["Check-in Time", hotel["Check-in Time"] || ""]);
        hotelInfo.push(["Check-out Time", hotel["Check-out Time"] || ""]);
        hotelInfo.push(["Contact Name", hotel["Contact Name * "] || ""]);

        // Facilities in new lines
        const facilities = Object.entries(hotel)
            .filter(([key, value]) => value === "on")
            .map(([key]) => key)
            .join("\n");

        hotelInfo.push(["Facilities", facilities]);

        // Cancellation policy
        if (hotel["Cancellation Policy "]) {
            hotelInfo.push([
                "Cancellation Policy",
                hotel["Cancellation Policy "],
            ]);
        }

        // Add hotel info table
        autoTable(doc, {
            startY: 28,
            head: [["Field", "Value"]],
            body: hotelInfo,
            theme: "plain",
            styles: { fontSize: 10, cellPadding: 2 },
            columnStyles: {
                0: { fontStyle: "bold", cellWidth: 50 },
            },
        });

        // Add room info table
        const validRooms =
            hotel.roomType?.filter(
                (r: any) => r["Number of Rooms"] && r["Number of Rooms"] !== "0"
            ) || [];

        if (validRooms.length > 0) {
            autoTable(doc, {
                startY: (doc as any).lastAutoTable?.finalY + 10 || 40,
                head: [
                    [
                        "Type",
                        "Custom Name",
                        "Guests",
                        "Rooms",
                        "Published Rate",
                        "Agency Rate",
                    ],
                ],
                body: validRooms.map((room: any) => [
                    room["type"] || "",
                    room["Custom Room Name"] || "",
                    room["Allowed Guests"] || "",
                    room["Number of Rooms"] || "",
                    room["Published Rate (excl. VAT)"] || "",
                    room["Agency Rate (excl. VAT)"] || "",
                ]),
                theme: "plain",
                styles: { fontSize: 10, cellPadding: 2 },
            });
        }

        const pdfBlob = doc.output("blob");
        const filename = hotelName.replace(/[^a-zA-Z0-9]/g, "_") + ".pdf";
        zip.file(filename, pdfBlob);
    }

    const zipBlob = await zip.generateAsync({ type: "blob" });
    saveAs(zipBlob, "hotel_pdfs.zip");
}
