import React from 'react';

const DigitalToolsCartsCard = ({
    cart,
    handleRemove
 }) => {
    return (
        <div className="flex items-center justify-between bg-[#F9FAFC] p-5.5 rounded-2xl mb-5">
            <div className="flex items-center gap-3">
                <img src={cart.img} alt={cart.name} />

                <div>
                    <p className="font-semibold text-[20px] mb-2">{cart.name}</p>
                    <p className="gray-color">${cart.price}</p>
                </div>
            </div>

            <button
                onClick={() => handleRemove(cart.id)}
                className="text-[#FF3980]! cursor-pointer"
            >
                Remove
            </button>
        </div>
    );
};

export default DigitalToolsCartsCard;