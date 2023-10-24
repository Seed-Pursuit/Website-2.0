import React from 'react'
import Sidebar from './Sidebar'
import avatar1 from '../../assets/avatar1.png';
import avatar2 from '../../assets/avatar2.png';
import avatar3 from '../../assets/avatar3.png';
import Search from '../../assets/Search.png';
import { Link } from 'react-router-dom';

const StartupSchool = () => {
    return (
        <div className='flex'>
            <Sidebar />
            <div>
                <p className="text-[45px] text-left text-black p-20">Co-founder Matching Dashboard</p>
                <div>
                    <div className="w-[389px] h-[511px]">
                        <div className="w-[389px] h-[511px] absolute left-[342.5px] top-[295.5px] rounded-[10px] bg-[#f5f5ee] border border-black" />
                        <div className="w-[273px] h-[98px]">
                            <img
                                className="w-[76px] h-[98px] absolute left-[400.5px] top-[376.5px] rounded-lg"
                                src={avatar1}
                                alt=''
                            />
                            <img
                                className="w-[77px] h-[98px] absolute left-[498.5px] top-[376.5px] rounded-lg"
                                src={avatar2}
                                alt=''
                            />
                            <img
                                className="w-[76px] h-[98px] absolute left-[597.5px] top-[376.5px] rounded-lg"
                                src={avatar3}
                                alt=''
                            />
                        </div>

                        <p className="absolute left-[524px] top-[508px] text-[45px] text-left text-black">3</p>
                        <p className="absolute left-[428px] top-[564px] text-[35px] text-left text-black">
                            Pending requests
                        </p>
                        <p className="absolute left-[429px] top-[613px] text-lg text-left text-black">
                            awaiting your response
                        </p>
                        <div className="w-[216px] h-[61px] absolute left-[427px] top-[676px]">
                            <div className="w-[216px] h-[61px] absolute left-[-1px] top-[-1px] rounded-tl-[20px] rounded-br-[20px] bg-[#fb7a5a]" />
                        </div>
                        <div className="w-[216px] h-[61px] absolute left-[427px] top-[676px]">
                            <div className="w-[216px] h-[61px] absolute left-[-1px] top-[-1px] rounded-tl-[20px] rounded-br-[20px] bg-[#fb7a5a]" />
                        </div>
                        <Link to="/inbox">
                            <p className="absolute left-[513px] top-[693px] text-lg font-bold text-left text-white">View</p>
                        </Link>
                    </div>
                    <div className="w-[389px] h-[511px]">
                        <div className="w-[389px] h-[511px] absolute left-[776.5px] top-[295.5px] rounded-[10px] bg-[#f5f5ee] border border-black" />
                        <img
                            className="w-[77px] h-[98px] absolute left-[932.5px] top-[376.5px] rounded-lg"
                            src={avatar1} alt=''
                        />
                        <p className="absolute left-[958px] top-[508px] text-[45px] text-left text-black">1</p>
                        <p className="absolute left-[862px] top-[564px] text-[35px] text-left text-black">
                            Unread message
                        </p>
                        <p className="absolute left-[863px] top-[613px] text-lg text-left text-black">
                            awaiting your response
                        </p>
                        <div className="w-[216px] h-[61px] absolute left-[861px] top-[676px]">
                            <div className="w-[216px] h-[61px] absolute left-[-1px] top-[-1px] rounded-tl-[20px] rounded-br-[20px] bg-[#fb7a5a]" />
                        </div>
                        <Link to="/inbox">
                            <p className="absolute left-[947px] top-[693px] text-lg font-bold text-left text-white">View</p>
                        </Link>
                    </div>
                    <div className="w-[823px] h-[247px]">
                        <div className="w-[823px] h-[247px] absolute left-[342.5px] top-[844.5px] rounded-[10px] bg-[#f9fbf2] border border-black" />
                        <p className="absolute left-[447px] top-[896px] text-[35px] text-left text-black">
                            5000 founders in your queue meet your requirement!
                        </p>
                        <img
                            src={Search}
                            alt=''
                            className="w-[79px] h-[68px] absolute left-[376.5px] top-[890.5px] object-contain"
                        />
                        <div className="w-[216px] h-[61px] absolute left-[624px] top-[998px]">
                            <div className="w-[216px] h-[61px] absolute left-[-1px] top-[-1px] rounded-tl-[20px] rounded-br-[20px] bg-[#fb7a5a]" />
                        </div>
                        <Link to="/inbox">
                            <p className="absolute left-[673px] top-[1010px] text-lg font-bold text-left text-white">
                                View Profiles
                            </p>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StartupSchool