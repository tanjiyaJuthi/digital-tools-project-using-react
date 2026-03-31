import React from 'react';

const UserRating = () => {
    return (
        <div className="primary-btn text-white py-16">
            <div className="max-w-300 mx-auto flex items-center justify-between">
                <div className="flex-1 text-center">
                    <p className="text-2xl font-extrabold text-[30px] lg:text-[60px] text-white!">50k+</p>
                    <p className="font-medium text-6 text-white!">Active Users</p>
                </div>

                <div className="w-px bg-white mx-8 h-16"></div>

                <div className="flex-1 text-center">
                    <p className="text-2xl font-extrabold text-[30px] lg:text-[60px] text-white!">200+</p>
                    <p className="font-medium text-6 text-white!">Premium Tools</p>
                </div>

                <div className="w-px bg-white mx-8 h-16"></div>

                <div className="flex-1 text-center">
                    <p className="text-2xl font-extrabold text-[30px] lg:text-[60px] text-white!">4.9</p>
                    <p className="font-medium text-6 text-white!">Rating</p>
                </div>
            </div>
        </div>
    );
};

export default UserRating;