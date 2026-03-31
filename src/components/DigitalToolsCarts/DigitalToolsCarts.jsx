import React from 'react';
import DigitalToolsCartsCard from '../DigitalToolsCartsCard/DigitalToolsCartsCard';
import { toast } from 'react-toastify';

const DigitalToolsCarts = ({ carts = [], setCarts }) => {
    const totalPrice = carts.reduce((sum, item) => sum + item.price, 0);

    const handleRemove = (id) => {
        const removedItem = carts.find(item => item.id === id);
        const updatedCart = carts.filter(item => item.id !== id);

        setCarts(updatedCart);

        toast(`${removedItem?.name} Has Been Removed From Cart!`);
    };

    const handlePayment = () => {
        setCarts([]);

        toast('Proceed To Checkout!');
    };

    return (
        <div className="max-w-300 mx-auto mt-10 mb-10 lg:mb-30 px-5 lg:px-0 border-2 border-[#F2F2F2] rounded-2xl">
            <div className="p-10">
                { carts.length === 0 ? (
                    <div className="min-h-50 text-center flex items-center justify-center">
                        <p className="gray-color text-xl">No Tools Has Added Yet!</p>
                    </div>
                ) : (
                    <>
                        <div>
                            <p className="font-bold text-[24px] mb-6">Your Cart</p>

                            {carts.map((cart) => (
                                <DigitalToolsCartsCard
                                    key={cart.id}
                                    cart={cart}
                                    handleRemove={handleRemove}
                                />
                            ))}
                        </div>
                        <div className="flex items-center justify-between my-8">
                            <p className="gray-color">Total</p>
                            <p className="font-bold text-[24px]">${totalPrice}</p>
                        </div>

                        <button
                            onClick={handlePayment}
                            className="cursor-pointer primary-btn rounded-4xl p-4 text-center w-full"
                        >
                            Proceed to Checkout
                        </button>
                    </>
                )}
            </div>
        </div>
    );
};

export default DigitalToolsCarts;