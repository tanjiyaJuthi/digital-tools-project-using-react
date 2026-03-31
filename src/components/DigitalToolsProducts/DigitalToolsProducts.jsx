import React from "react";
//inernal imports
import DigitalToolsProductsCard from '../DigitalToolsProductsCard/DigitalToolsProductsCard';

const DigitalToolsProducts = ({ products, carts, setCarts }) => {
  return (
    <div className="max-w-300 mx-auto pb-10 lg:pb-30 px-5 lg:px-0">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {
                products.map(product =>
                    <DigitalToolsProductsCard
                        key={product.id}
                        product={product}
                        carts={carts}
                        setCarts={setCarts}
                    />)
            }
        </div>
    </div>
  );
};

export default DigitalToolsProducts;
