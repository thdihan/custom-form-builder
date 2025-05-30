import React from "react";

type Props = { text: string };

function GroupHeader({ text }: Props) {
    return (
        <h3 className="text-xl font-bold border-b pb-2 border-[#e7e5e4] mb-6">
            {text}
        </h3>
    );
}

export default GroupHeader;
