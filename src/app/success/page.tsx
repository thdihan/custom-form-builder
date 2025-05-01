"use client";
import Link from "next/link";
import React from "react";

const page = () => {
    return (
        <div className="flex flex-col justify-center items-center h-[100vh]">
            <h1 className="text-2xl text-orange-600 font-bold">
                Thanks for your submission
            </h1>
            <p className="flex flex-col items-center text-center mt-5">
                <span>For assistance, please contact us:</span>
                <span className="text-orange-600 font-bold">
                    Email: info@genustravels.com
                </span>
                <span>or</span>
                <span>genustravelsbd@gmail.com</span>
                <span>
                    Website:{" "}
                    <Link
                        className="text-orange-500 font-bold"
                        href="https://genustravels.com/"
                    >
                        https://genustravels.com/
                    </Link>
                </span>
            </p>
        </div>
    );
};

export default page;
