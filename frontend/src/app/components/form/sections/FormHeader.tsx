import Image from "next/image";
import React from "react";
import logo from "@/media/logo.png";

const FormHeader = () => {
    return (
        <div className="bg-orange-500 text-white px-8 py-6 flex justify-between rounded-t-lg">
            <div className="flex gap-x-2 items-center">
                <div className="font-bold text-orange-500 bg-white size-16 flex items-center justify-center rounded-full">
                    <Image src={logo} alt="GENUS Tours & Travels" />
                </div>
                <div className="flex flex-col justify-center">
                    <p className="font-semibold text-xl">
                        GENUS Tours & Travels
                    </p>
                    <p className="font-light text-sm">Your Travel Partner</p>
                </div>
            </div>
            <div className="flex flex-col items-center gap-y-2 justify-center">
                <p className="font-semibold text-xl">
                    Hotel Data Collection Form
                </p>
                <p className="font-light text-sm">
                    Submit your hotel details for listing on our platform
                </p>
            </div>
            <div className="flex flex-col text-right gap-y-2">
                <p className="font-light text-sm">info@genustravels.com</p>
                <p className="font-light text-sm">+8801897778777</p>
                <p className="font-light text-sm">www.genustravels.com</p>
            </div>
        </div>
    );
};

export default FormHeader;
