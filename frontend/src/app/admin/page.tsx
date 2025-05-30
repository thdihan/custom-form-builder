/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import axios from "axios";
import React from "react";
import { formatResponseToDownloadable } from "@/utils/formatResponse";
import { generateHotelsPDFZip } from "@/utils/downloadResponse";

function pages() {
    const handleDownload = async () => {
        // Logic to download data
        console.log("Downloading data...");
        try {
            // Use axios to fetch the data and console,log
            const response = await axios.get(
                "https://api.genusbd.com/api/response"
            );
            const jsonData = response.data;
            console.log("Data downloaded successfully", jsonData?.data);

            // Step 2: Extract only the 'responses' field
            const extractedData = jsonData?.data?.map((item: any) =>
                formatResponseToDownloadable(item.responses)
            );

            console.log("Extracted Data", extractedData);

            generateHotelsPDFZip(extractedData);
            // generateHotelPDF(extractedData);
            // extractedData.roomType = JSON.stringify(extractedData.roomType);

            // // Step 3: Convert to CSV
            // const csv = Papa.unparse(extractedData);

            // // Step 4: Trigger download
            // const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
            // const url = URL.createObjectURL(blob);

            // const link = document.createElement("a");
            // link.href = url;
            // link.setAttribute("download", "responses.csv");
            // document.body.appendChild(link);
            // link.click();
            // document.body.removeChild(link);

            // URL.revokeObjectURL(url);
        } catch (error) {
            console.error("Error in downloading data", error);
        }
    };
    return (
        <div className="flex justify-center items-center">
            <button
                onClick={handleDownload}
                className="bg-orange-500 px-4 py-2 rounded-lg my-8 text-white cursor-pointer"
            >
                Download Data
            </button>
        </div>
    );
}

export default pages;
