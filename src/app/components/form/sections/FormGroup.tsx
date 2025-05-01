"use client";
import React from "react";
import GroupHeader from "../fields/GroupHeader";
import TextField from "../fields/TextField";
import Checkbox from "../fields/Checkbox";
import _ from "lodash";

type Tfields = {
    label: string;
    fieldName: string;
    type: string;
    required: boolean;
    order: number;
    options?: {
        label: string;
        value: string;
    }[];
    tableHeaders?: {
        name: string;
        size: string;
    }[];
    tableData?: {
        type: string;
        label: string;
    }[][];
};
type props = {
    group: {
        name: string;
        order: number;
        fields: Tfields[];
    };
    roomType: {
        type: string;
        "Custom Room Name": string;
        "Allowed Guests": number;
        "Number of Rooms": number;
        "Published Rate (excl. VAT)": number;
        "Agency Rate (excl. VAT)": number;
    }[];
    setRoomType: React.Dispatch<
        React.SetStateAction<
            {
                type: string;
                "Custom Room Name": string;
                "Allowed Guests": number;
                "Number of Rooms": number;
                "Published Rate (excl. VAT)": number;
                "Agency Rate (excl. VAT)": number;
            }[]
        >
    >;
};

function splitFieldsByTypeBlocks(fields: Tfields[]) {
    const groups: {
        groupType: string;
        fields: Tfields[];
    }[] = [];
    let currentGroup: Tfields[] = [];
    let currentType = "";

    for (const field of fields) {
        if (field.type !== currentType) {
            // If type changed, push the previous group (if any) and start a new one
            if (currentGroup.length > 0) {
                const temp = {
                    groupType: currentType,
                    fields: currentGroup,
                };
                groups.push(temp);
            }
            currentGroup = [field];
            currentType = field.type;
        } else {
            // Same type, continue accumulating
            currentGroup.push(field);
        }
    }

    // Push the final group
    if (currentGroup.length > 0) {
        const temp = {
            groupType: currentType,
            fields: currentGroup,
        };
        groups.push(temp);
    }

    return groups;
}

const FormGroup = ({ group, roomType, setRoomType }: props) => {
    const groupName = group.name;

    const groupFields =
        group.fields.length > 0
            ? group.fields.sort((a, b) => a.order - b.order)
            : [];

    const groupedFields = splitFieldsByTypeBlocks(groupFields);
    console.log(groupedFields);

    // const [roomType, setRoomType] = React.useState(roomTypeConst);

    const updateRoomType = (index: number, label: string, value: string) => {
        const temp = {
            ...roomType[index],
            [label]: value,
        };
        const newRoomType = [...roomType];
        newRoomType[index] = temp;
        setRoomType(newRoomType);
        console.log(newRoomType);
        console.log(roomType);
    };

    return (
        <div className="p-8 text-gray-800">
            <div className="border border-[#e7e5e4] p-6 bg-[#F9FAFB] rounded-md">
                <GroupHeader text={groupName} />

                {groupedFields.map((group, index) => (
                    <div key={index}>
                        {group.groupType === "checkbox" ? (
                            <div className="my-6">
                                <div className="">
                                    {group.fields.map((field, index) => (
                                        <div key={index}>
                                            <p className="font-semibold mt-4">
                                                {field.label}
                                            </p>
                                            <div
                                                className="grid grid-cols-3 gap-4 mt-2"
                                                key={index}
                                            >
                                                {field?.options!.map(
                                                    (option, index) => (
                                                        <Checkbox
                                                            key={index}
                                                            name={option.label}
                                                            label={option.label}
                                                        />
                                                    )
                                                )}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ) : group.groupType === "table" ? (
                            <div>
                                {group.fields.map((field, index) => (
                                    <table
                                        key={index}
                                        className="w-full border border-[#e7e5e4] px-4 py-6 text-sm"
                                    >
                                        <thead>
                                            <tr className="text-left">
                                                {field.tableHeaders?.map(
                                                    (header, index) => (
                                                        <th
                                                            key={index}
                                                            className={`w-[${header.size}] font-semibold bg-[#F3F4F6] px-4 py-6 text-sm`}
                                                        >
                                                            {header.name}
                                                        </th>
                                                    )
                                                )}
                                            </tr>
                                        </thead>

                                        <tbody>
                                            {roomType.map((item, index) => (
                                                <tr key={index}>
                                                    <td className={`px-4 py-6`}>
                                                        {_.capitalize(
                                                            item.type
                                                        )}
                                                    </td>
                                                    <td>
                                                        <input
                                                            type="text"
                                                            // name={
                                                            //     "Custom Room Name"
                                                            // }
                                                            className="w-full bg-white p-2  outline outline-[#e7e5e4] rounded-md"
                                                            placeholder={
                                                                "Custom Room Name"
                                                            }
                                                            value={
                                                                item[
                                                                    "Custom Room Name"
                                                                ]
                                                            }
                                                            onChange={(e) =>
                                                                updateRoomType(
                                                                    index,
                                                                    "Custom Room Name",
                                                                    e.target
                                                                        .value
                                                                )
                                                            }
                                                        />
                                                    </td>
                                                    <td className={`px-4 py-6`}>
                                                        <input
                                                            type="number"
                                                            // name={
                                                            //     "Allowed Guests"
                                                            // }
                                                            className="w-full bg-white p-2  outline outline-[#e7e5e4] rounded-md"
                                                            placeholder={
                                                                "Allowed Guests"
                                                            }
                                                            value={
                                                                item[
                                                                    "Allowed Guests"
                                                                ]
                                                            }
                                                            onChange={(e) =>
                                                                updateRoomType(
                                                                    index,
                                                                    "Allowed Guests",
                                                                    e.target
                                                                        .value
                                                                )
                                                            }
                                                        />
                                                    </td>
                                                    <td className={`px-4 py-6`}>
                                                        <input
                                                            type="number"
                                                            // name={
                                                            //     "Number of Rooms"
                                                            // }
                                                            className="w-full bg-white p-2  outline outline-[#e7e5e4] rounded-md"
                                                            placeholder={
                                                                "Number of Rooms"
                                                            }
                                                            value={
                                                                item[
                                                                    "Number of Rooms"
                                                                ]
                                                            }
                                                            onChange={(e) =>
                                                                updateRoomType(
                                                                    index,
                                                                    "Number of Rooms",
                                                                    e.target
                                                                        .value
                                                                )
                                                            }
                                                        />
                                                    </td>
                                                    <td className={`px-4 py-6`}>
                                                        <input
                                                            type="number"
                                                            // name={
                                                            //     "Published Rate (excl. VAT)"
                                                            // }
                                                            className="w-full bg-white p-2  outline outline-[#e7e5e4] rounded-md"
                                                            placeholder={
                                                                "Published Rate (excl. VAT)"
                                                            }
                                                            value={
                                                                item[
                                                                    "Published Rate (excl. VAT)"
                                                                ]
                                                            }
                                                            onChange={(e) =>
                                                                updateRoomType(
                                                                    index,
                                                                    "Published Rate (excl. VAT)",
                                                                    e.target
                                                                        .value
                                                                )
                                                            }
                                                        />
                                                    </td>
                                                    <td className={`px-4 py-6`}>
                                                        <input
                                                            type="number"
                                                            // name={
                                                            //     "Agency Rate (excl. VAT)"
                                                            // }
                                                            className="w-full bg-white p-2  outline outline-[#e7e5e4] rounded-md"
                                                            placeholder={
                                                                "Agency Rate (excl. VAT)"
                                                            }
                                                            value={
                                                                item[
                                                                    "Agency Rate (excl. VAT)"
                                                                ]
                                                            }
                                                            onChange={(e) =>
                                                                updateRoomType(
                                                                    index,
                                                                    "Agency Rate (excl. VAT)",
                                                                    e.target
                                                                        .value
                                                                )
                                                            }
                                                        />
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                ))}
                            </div>
                        ) : (
                            <div className="mt-6 grid grid-cols-2 gap-6">
                                {group.fields.map((field, index) => (
                                    <TextField
                                        key={index}
                                        label={field.label}
                                        name={field.fieldName}
                                        required={field.required}
                                    />
                                ))}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FormGroup;
