import React, { useState } from 'react';
import {app} from '../../db/Firebase';
import { getDatabase } from 'firebase/database';
import { useAuth0 } from '@auth0/auth0-react';


const CompanyInfo = () => {
    const db = getDatabase(app);


    const [companyName, setCompanyName] = useState('');
    const [companyURL, setCompanyURL] = useState('');
    const [companyDescription, setCompanyDescription] = useState('');
    const [companyCategory, setCompanyCategory] = useState('');
    const [startupStatus, setStartupStatus] = useState('');
    const [companyStage, setCompanyStage] = useState('');
    const [incorporated, setIncorporated] = useState('');
    const [progress, setProgress] = useState('');
    const [fundingInfo, setFundingInfo] = useState('');
    const {user} = useAuth0();
    
    const handleFormSubmit = (e) => {
        e.preventDefault();
        console.log({
            companyName,
            companyURL,
            companyDescription,
            companyCategory,
            startupStatus,
            companyStage,
            incorporated,
            progress,
            fundingInfo,
        });
    };

    return (
        <div className='py-20 px-10'>
            <h1 className='text-[30px] text-red-500'>Company Profile</h1>
            <form onSubmit={handleFormSubmit}>
                <h1 className='text-[30px]'>Public Information</h1>
                <div>
                    <label htmlFor="companyName">Company Name*</label>
                    <input
                        type="text"
                        id="companyName"
                        value={companyName}
                        onChange={(e) => setCompanyName(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="companyURL">Company URL</label>
                    <input
                        type="url"
                        id="companyURL"
                        value={companyURL}
                        onChange={(e) => setCompanyURL(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="companyDescription">Describe your company in a few sentences*</label>
                    <textarea
                        id="companyDescription"
                        value={companyDescription}
                        onChange={(e) => setCompanyDescription(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="companyCategory">Company Category*</label>
                    <input
                        type="text"
                        id="companyCategory"
                        value={companyCategory}
                        onChange={(e) => setCompanyCategory(e.target.value)}
                    />
                </div>
                <h1 className='text-[30px]'>Other Fields</h1>
                <div>
                    <label htmlFor="startupStatus">Are you currently part-time or full-time on this startup?*</label>
                    <select
                        id="startupStatus"
                        value={startupStatus}
                        onChange={(e) => setStartupStatus(e.target.value)}
                    >
                        <option value="part-time">Part-time</option>
                        <option value="full-time">Full-time</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="companyStage">Company Stage*</label>
                    <select
                        id="companyStage"
                        value={companyStage}
                        onChange={(e) => setCompanyStage(e.target.value)}
                    >
                        <option value="Stage 1">Stage 1:You are in the process of validating your idea and building an initial product. You are talking to potential users about your idea.</option>
                        <option value="Stage 2">Stage 2: You have built an MVP and are talking to early customers. You may have some users. Getting feedback from customers. Iterating.</option>
                        <option value="Stage 3">Stage 3: You have a product with many active users. You are working on growing revenue/users/sales.</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="incorporated">Have you incorporated your company?*</label>
                    <p>Incorporating means forming an LLC, C Corporation, or other similar legal structure for your business. If you're not sure, choose 'No'.</p>
                    <select
                        id="incorporated"
                        value={incorporated}
                        onChange={(e) => setIncorporated(e.target.value)}
                    >
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="progress">How long have you been working on this and what progress have you made on your company?</label>
                    <textarea
                        id="progress"
                        value={progress}
                        onChange={(e) => setProgress(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="fundingInfo">
                        If you've already raised funding for this startup, who invested and how much have you raised?
                    </label>
                    <textarea
                        id="fundingInfo"
                        value={fundingInfo}
                        onChange={(e) => setFundingInfo(e.target.value)}
                    />
                </div>
                <div>
                    <button type="submit">Submit</button>
                </div>
                <h1 className='text-[30px]'>Manage Co-Founders</h1>
                <p>Co-founders are people who are working on the startup with you. You can add co-founders to your company profile. If you are the only founder, you can skip this section.</p>
                <div>
                    <label htmlFor="coFounderEmail">Co-Founder Email</label>
                    <input
                        type="email"
                        id="coFounderEmail"
                    />
                </div>
                <div>
                    <button type="submit">Add Co-Founder</button>
                </div>
                {/* <div>
                    <h1 className='text-[30px]'>Manage Investors</h1>
                    <p>Investors are people who have invested in your startup. You can add investors to your company profile. If you don't have any investors yet, you can skip this section.</p>
                    <div>
                        <label htmlFor="investorEmail">Investor Email</label>
                        <input
                            type="email"
                            id="investorEmail"
                        />
                    </div>
                    <div>
                        <button type="submit">Add Investor</button>
                    </div>
                </div> */}

            </form>
        </div>
    );
};

export default CompanyInfo;
