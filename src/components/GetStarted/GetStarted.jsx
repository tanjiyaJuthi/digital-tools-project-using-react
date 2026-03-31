import React from 'react';
import user from "../../assets/user.png";
import box from "../../assets/box.png";
import rocket from "../../assets/rocket.png";

const GetStarted = () => {
    return (
        <div className="bg-[#F9FAFC]">
            <div className="max-w-300 mx-auto py-10 px-5 lg:px-0">
                <div className="text-center">
                    <h4 className="font-extrabold text-[30px] lg:text-[48px]">Get Started in 3 Steps</h4>
                    <p className="gray-color text-sm lg:text-normal">Start using premium digital tools in minutes, not hours.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-10 space-y-4 text-center">
                    <div className="border-3 border-[#F2F2F2] p-6 rounded-2xl space-y-4 py-12 lg:py-22">
                        <div className="flex justify-center">
                            <img className="rounded-4xl bg-[#f4e8fe] p-5" src={user} alt="Create Account" />
                        </div>
                        <p className="font-bold text-[24px]">Create Account</p>
                        <p className="gray-color">Sign up for free in seconds. No credit card required to get started.</p>
                    </div>

                    <div className="border-3 border-[#F2F2F2] p-6 rounded-2xl space-y-4 py-12 lg:py-22">
                        <div className="flex justify-center">
                            <img className="rounded-4xl bg-[#f4e8fe] p-5" src={box} alt="Create Account" />
                        </div>
                        <p className="font-bold text-[24px]">Choose Products</p>
                        <p className="gray-color">Browse our catalog and select the tools that fit your needs.</p>
                    </div>

                    <div className="border-3 border-[#F2F2F2] p-6 rounded-2xl space-y-4 py-12 lg:py-22">
                        <div className="flex justify-center">
                            <img className="rounded-4xl bg-[#f4e8fe] p-5" src={rocket} alt="Create Account" />
                        </div>
                        <p className="font-bold text-[24px]">Start Creating</p>
                        <p className="gray-color">Download and start using your premium tools immediately.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GetStarted;