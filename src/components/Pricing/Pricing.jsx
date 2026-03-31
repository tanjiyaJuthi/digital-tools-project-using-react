import React, { use } from 'react';
import PricingCard from '../PricingCard/PricingCard';

const getPricings = async () => {
    const pricings = await fetch('/pricing.json');

    return pricings.json();
};

const pricingPromise = getPricings();

const Pricing = () => {
    const pricings = use(pricingPromise);

    return (
        <div className="max-w-300 mx-auto py-10 lg:py-21.25 px-5 lg:px-0">
            <div className="text-center">
                <h4 className="font-extrabold text-[30px] lg:text-[48px]">Simple, Transparent Pricing</h4>
                <p className="gray-color text-sm lg:text-normal">Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-10 space-y-4">
                {
                    pricings.map(pricing => 
                        <PricingCard 
                            key={pricing.id}
                            pricing={pricing}
                        />
                    )
                }
            </div>
        </div>
    );
};

export default Pricing;