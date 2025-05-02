"use client";
import FormGroup from "./components/form/sections/FormGroup";
import FormHeader from "./components/form/sections/FormHeader";
import { demoForm } from "./components/form/demo";
import { useState } from "react";
import { roomTypeConst } from "./components/form/sections/roomType.const";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function Home() {
    const groups = demoForm.groups;
    const router = useRouter();

    const [roomType, setRoomType] = useState(roomTypeConst);
    const [loading, setLoading] = useState(false);
    const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData.entries());

        const allData = {
            ...data,
            roomType: JSON.stringify(roomType),
        };
        data["roomType"] = JSON.stringify(roomType);
        console.log(allData);

        try {
            setLoading(true);
            console.log("Trying to send data");
            axios
                .post("https://api.genusbd.com/api/response", allData)
                .then(function (response) {
                    console.log(response);
                })
                .catch(function (error) {
                    console.log(error);
                });
            setLoading(false);
            console.log("Data sent successfully");
            router.push("/success");
            // redirect to success page
        } catch (error) {
            console.log("Error in sending data", error);
            setLoading(false);
        }
    };
    return (
        <div className="flex justify-center">
            <div className="w-2/3 my-10 rounded-lg">
                <form onSubmit={handleFormSubmit}>
                    <FormHeader />
                    <div className="bg-white">
                        {groups.map((group, index) => {
                            return (
                                <FormGroup
                                    key={index}
                                    group={group}
                                    roomType={roomType}
                                    setRoomType={setRoomType}
                                    // isLastGroup={index === totalGroups - 1}
                                />
                            );
                        })}
                        {/* <FormGroup /> */}
                    </div>
                    <div className="text-center mt-10">
                        <button
                            disabled={loading}
                            className={`px-4 text-sm py-3  text-white rounded-md cursor-pointer font-bold ${
                                loading
                                    ? "bg-gray-400"
                                    : "bg-orange-500 hover:bg-orange-600"
                            }`}
                            type="submit"
                        >
                            {loading
                                ? "Submitting Data.. Please Wait"
                                : "Submit Data"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
