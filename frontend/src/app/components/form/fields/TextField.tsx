"use client";
import React from "react";

type Props = {
    label: string;
    name: string;
    required?: boolean;
    placeholder?: string;
};

function TextField({ label, name, required, placeholder }: Props) {
    return (
        <div>
            <p className="font-thin mb-2 text-sm">
                {label}{" "}
                {required && <span className="text-red-600 text-xs"> *</span>}
            </p>
            <input
                type="text"
                name={name}
                id=""
                className="bg-white p-2 w-full outline outline-[#e7e5e4] rounded-md"
                placeholder={placeholder || "Enter your text here"}
            />
        </div>
    );
}

export const TextFieldWithoutLabel = ({
    placeholder,
    name,
}: {
    placeholder?: string;
    setFunction?: (value: string, name: string) => void;
    value?: string;
    name: string;
}) => {
    return (
        <input
            type="text"
            name={name}
            className="w-full bg-white p-2  outline outline-[#e7e5e4] rounded-md"
            placeholder={placeholder || "Enter your text here"}
        />
    );
};

export default TextField;
