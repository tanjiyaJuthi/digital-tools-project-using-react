import React from 'react';
import banner from '../../assets/banner.png';
import { CiPlay1 } from "react-icons/ci";
import circle from '../../assets/circle.png';

const HeroContainer = () => {
    return (
        <div className="max-w-300 mx-auto py-10 lg:py-21.25  px-5 lg:px-0 flex justify-between gap-15 flex-col-reverse  md:flex-row md:items-center">
            <div className="hero-right space-y-4">
                <div className="bg-[#E1E7FF] px-4 py-2 rounded-3xl inline-block">
                    <div className="flex items-center gap-2 text-[12px] lg:text-[16px]">
                        <img src={circle} alt="Circle" />
                        <span className="primary-text">New: AI-Powered Tools Available</span>
                    </div>
                </div>

                <h1 className="font-extrabold text-[40px] lg:text-[72px]">Supercharge Your Digital Workflow</h1>

                <div className="text-[12px] lg:text-[18px]">
                    <p className="gray-color">Access premium AI tools, design assets, templates, and productivity</p>

                    <p className="gray-color">software—all in one place. Start creating faster today.</p>

                    <p className="gray-color">Explore Products</p>
                </div>

                <div className="flex gap-3 items-center">
                    <button className="btn rounded-4xl font-normal primary-btn">
                        Explore Products
                    </button>
                    
                    <button className="btn items-center gap-2 rounded-4xl font-normal text-[#9514FA] border-[#9514FA] primary-text">
                        <CiPlay1 className="primary-text" /> Watch Demo
                    </button>
                </div>
            </div>

            <div className="hero-left">
                <img src={banner} alt="Hero banner" className="block w-full shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 rounded-lg" />
            </div>
        </div>
    );
};

export default HeroContainer;