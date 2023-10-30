import React, { useState } from "react";
import Sidebar from "../find_a_co_founder/Sidebar";
import { Link } from "react-router-dom";

const Track = () => {
    // State to track whether the user is actively working on a startup
    const [activelyWorking, setActivelyWorking] = useState(false);

    // Function to handle the user's response
    const handleWorkingStatusChange = (status) => {
        setActivelyWorking(status);
    };

    return (
        <div className="flex">
            <Sidebar />
            <div className="py-20 px-8">
                <div className="bg-orange-100 w-[1000px]">
                    <h1 className="text-red-500 text-[30px] ">Have a startup?</h1>
                </div>
                <hr />

                <div className="mt-4">
                    <h2 className="text-black text-[20px]">Startup School Benefits:</h2>
                    <ul className="list-disc ml-6">
                        <li>Startup School curriculum</li>
                        <li>Co-founder matching</li>
                    </ul>
                </div>

                <div className="mt-4">
                    <h2 className="text-black text-[20px]">
                        For founders actively working on a startup:
                    </h2>
                    <p className="text-black">
                        "Actively" means 10+ hours a week (and 20+ is better).
                    </p>
                    <label className="block text-black font-bold mt-2">
                        Are you actively working on a startup?
                    </label>
                    <div className="mt-2">
                        <label className="block text-black">
                            <input
                                type="radio"
                                value="Yes"
                                checked={activelyWorking}
                                onChange={() => handleWorkingStatusChange(true)}
                            />
                            Yes
                        </label>
                        <label className="block text-black">
                            <input
                                type="radio"
                                value="No"
                                checked={!activelyWorking}
                                onChange={() => handleWorkingStatusChange(false)}
                            />
                            No
                        </label>
                    </div>
                </div>

                {/* Conditionally render the Save button when "Yes" is selected */}
                {activelyWorking && (
                    <Link to="../company_info">
                        <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded">
                            Save
                        </button>
                    </Link>
                )}

            </div>
        </div>
    );
};

export default Track;
