import React from 'react';
import check from "../../assets/check.png";

const PricingCard = ({ pricing }) => {
    return (
        <div className={`border-3  p-6 rounded-2xl space-y-6 flex flex-col h-full relative ${pricing.tag ? 'primary-btn border-0' : 'bg-[#F9FAFC] border-[#F2F2F2]'}`}>
            {
                pricing.tag
                ? <div className="flex justify-center items-center absolute -top-5 left-33">
                    <p
                        className="py-2 px-3 rounded-4xl text-sm"
                        style={{ 
                            backgroundColor: "#FEF3C6", 
                            color: "#BB4D00" 
                        }}
                    >
                        {pricing.tag}
                    </p>
                </div>
                : ''
            }

            <div>
                <p className={`font-bold text-[24px] ${pricing.tag !== null ? 'text-white!' : 'text-black'}`}>
                    {pricing.name}
                </p>

                <p className={`gray-color ${pricing.tag !== null ? 'text-white!' : 'text-black'}`}>
                    {pricing.description}
                </p>
            </div>

            <p className={`gray-color ${pricing.tag !== null ? 'text-white!' : 'text-black'}`}>
                <span className={`font-bold text-[24px] ${pricing.tag !== null ? 'text-white!' : 'text-black'}`}>${pricing.price}</span>/{pricing.period}
            </p>

            <ul>
                {pricing.features.map((feature, index) => (
                    <li 
                    key={index} 
                    className="flex items-center gap-2"
                    >
                        <img src={check} alt="Check Icon" />
                        <span className={`${pricing.tag !== null ? 'text-white!' : 'text-black'}`}>{feature}</span>
                    </li>
                ))}
            </ul>

            <button className={`py-4 w-full rounded-4xl mt-auto ${pricing.tag !== null ? 'bg-white text-[#4F39F6]' : 'primary-btn'}`}>{pricing.buttonText}</button>
        </div>
    );
};

export default PricingCard;