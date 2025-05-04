import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

type TResponse = {
    [key: string]: any;
};

export function generateHotelPDF(hotelArray: TResponse[]) {
    const doc = new jsPDF();

    hotelArray.forEach((hotel, index) => {
        if (index > 0) doc.addPage();

        const hotelInfo = [];

        hotelInfo.push(["Hotel Name", hotel["Hotel Name"] || ""]);
        hotelInfo.push(["Address", hotel["Address"] || ""]);
        hotelInfo.push(["Phone", hotel["Phone  "] || ""]);
        hotelInfo.push(["Email", hotel["Email"] || ""]);
        hotelInfo.push(["Website", hotel["Website"] || ""]);
        hotelInfo.push(["Check-in Time", hotel["Check-in Time"] || ""]);
        hotelInfo.push(["Check-out Time", hotel["Check-out Time"] || ""]);
        hotelInfo.push(["Contact Name", hotel["Contact Name * "] || ""]);

        // Collect facilities
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

        autoTable(doc, {
            startY: 14,
            head: [["Field", "Value"]],
            body: hotelInfo,
            theme: "plain",
            styles: { fontSize: 10, cellPadding: 2 },
            columnStyles: {
                0: { fontStyle: "bold", cellWidth: 50 },
            },
        });

        const validRooms =
            hotel.roomType?.filter(
                (r: any) => r["Number of Rooms"] && r["Number of Rooms"] !== "0"
            ) || [];

        if (validRooms.length > 0) {
            autoTable(doc, {
                startY: (doc as any).lastAutoTable?.finalY + 10 || 20,
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
    });

    doc.save("hotel-list.pdf");
}

export function downloadHotelsAsCSV(hotelData: TResponse[]) {
    const allRoomTypes = [
        "single-room",
        "double-room",
        "suite",
        "family-room",
        "deluxe-room",
        "superior-room",
    ];

    const csvRows = [];

    // Prepare headers
    const hotelLevelKeys = Object.keys(hotelData[0]).filter(
        (k) => k !== "roomType"
    );
    const roomLevelKeys = [
        "type",
        "Custom Room Name",
        "Allowed Guests",
        "Number of Rooms",
        "Published Rate (excl. VAT)",
        "Agency Rate (excl. VAT)",
    ];

    const headers = [...hotelLevelKeys, ...roomLevelKeys];
    csvRows.push(headers.map(escapeCSV).join(","));

    // Process each hotel
    hotelData.forEach((hotel) => {
        allRoomTypes.forEach((roomType) => {
            const room =
                hotel.roomType.find((r: any) => r.type === roomType) || {};

            const row = [
                ...hotelLevelKeys.map((key) => hotel[key] ?? ""),
                ...roomLevelKeys.map((key) => room[key] ?? ""),
            ];

            csvRows.push(row.map(escapeCSV).join(","));
        });
    });

    // Convert to CSV string
    const csvString = csvRows.join("\n");

    // Trigger download
    const blob = new Blob([csvString], { type: "text/csv;charset=utf-8;" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.setAttribute("download", "hotels.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

// Escapes commas and quotes in CSV fields
function escapeCSV(value: any) {
    const str = String(value ?? "");
    if (str.includes(",") || str.includes('"') || str.includes("\n")) {
        return `"${str.replace(/"/g, '""')}"`;
    }
    return str;
}
