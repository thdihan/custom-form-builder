import React from "react";

type Props = { name: string; label: string };

function Checkbox({ label, name }: Props) {
    return (
        <div className="flex items-center gap-x-4 ">
            <input
                type="checkbox"
                name={name}
                id="a"
                className="w-4 h-4 checked:bg-amber-500 rounded-lg"
            />{" "}
            <label className="align-middle text-sm font-thin" htmlFor="a">
                {label}
            </label>
        </div>
    );
}

export default Checkbox;
