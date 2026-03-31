import React, { use } from 'react';
import DigitalToolsProducts from '../DigitalToolsProducts/DigitalToolsProducts';
import DigitalToolsCarts from '../DigitalToolsCarts/DigitalToolsCarts';
import DigitalToolsTab from '../DigitalToolsTab/DigitalToolsTab';

const DigitalTools = ({
    productsPromise, 
    activeTab, 
    setActiveTab, 
    carts, 
    setCarts 
}) => {

    const products = use(productsPromise);

    return (
        <div className="max-w-300 mx-auto pt-10 lg:pt-30 px-5 lg:px-0">
            <div className="text-center">
                <h2 className="font-extrabold text-[30px] lg:text-[48px]">Premium Digital Tools</h2>
                <p className="gray-color text-sm  lg:text-normal">Choose from our curated collection of premium digital products designed to boost your productivity and creativity.</p>
            </div>

            <DigitalToolsTab
                activeTab={activeTab}
                setActiveTab={setActiveTab}
                carts={carts}
            />

            {
                activeTab === "products"
                ? <DigitalToolsProducts
                    products={products}
                    carts={carts}
                    setCarts={setCarts}
                />
                : <DigitalToolsCarts
                    carts={carts}
                    setCarts={setCarts}
                />
            }
        </div>
    );
};

export default DigitalTools;