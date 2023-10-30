import React, { useState } from 'react';

const CompanyInfo = () => {
    const [companyName, setCompanyName] = useState('');
    const [companyURL, setCompanyURL] = useState('');
    const [companyDescription, setCompanyDescription] = useState('');
    const [companyCategory, setCompanyCategory] = useState('');
    const [startupStatus, setStartupStatus] = useState('');
    const [companyStage, setCompanyStage] = useState('');
    const [incorporated, setIncorporated] = useState('');
    const [progress, setProgress] = useState('');
    const [fundingInfo, setFundingInfo] = useState('');

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
            <h1 className='text-[30px]'>Company Profile</h1>
            <form onSubmit={handleFormSubmit}>
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
                        <option value="Stage 1">Stage 1</option>
                        <option value="Stage 2">Stage 2</option>
                        <option value="Stage 3">Stage 3</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="incorporated">Have you incorporated your company?*</label>
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
            </form>
        </div>
    );
};

export default CompanyInfo;
