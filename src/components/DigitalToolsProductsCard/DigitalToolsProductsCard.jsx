import { toast } from "react-toastify";
import check from "/assets/check.png";

const DigitalToolsProductsCard = ({ 
  product,
  carts,
  setCarts
}) => {
  const tagColorMap = {
      "best-seller": { bg: "#FEF3C6", text: "#BB4D00" },
      "popular"    : { bg: "#E1E7FF", text: "#4F39F6" },
      "new"        : { bg: "#DBFCE7", text: "#0A883E" }
  };

  const tagStyle = tagColorMap[product.tagType] || {};

  const boughtProduct = carts.some(item => item.id === product.id);

  const handleBuyNow = () => {
    if (boughtProduct) {
      const updatedProduct = carts.filter(item => item.id !== product.id);

      setCarts(updatedProduct);

      toast(`${product.name} Has Removed From Cart!`);
    } else { 
      setCarts([...carts, product]);

      toast(`${product.name} Has Added To Cart!`);
    }
  };

  return (
    <div className="border-3 border-[#F2F2F2] p-6 rounded-2xl space-y-4 flex flex-col h-full">
      <div className="flex justify-between items-center">
        <img
        src={product.img}
        alt={product.title}
        className="border-2 border-[#F2F2F2] p-3 rounded-4xl"
        />
        <p>
          <span
            className="text-xs py-2 px-3 rounded-full -mt-10 -mr-2 block"
            style={{
              backgroundColor: tagStyle.bg,
              color: tagStyle.text
            }}
          >
            {product.tag}
          </span>
        </p>
      </div>

      <h4 className="font-bold text-[24px]">{product.name}</h4>

      <p className="gray-color ">{product.description}</p>

      <p>
        <span className="font-bold text-[24px]">${product.price}</span>
        <span className="gray-color">/{product.period}</span>
      </p>

      <div className="">
        <ul>
          {product.features.map((feature, index) => (
            <li key={index} className="flex items-center gap-2 gray-color">
              <img src={check} alt="Check Icon" /> {feature}
            </li>
          ))}
        </ul>
      </div>

      <button 
        onClick={handleBuyNow}
        className={`btn w-full rounded-4xl py-3.75 mt-auto ${boughtProduct ? '' : 'primary-btn'}`}
      >
        {
          boughtProduct ? 'Added to cart' : 'Buy Now'
        }
      </button>
    </div>
  );
};

export default DigitalToolsProductsCard;
