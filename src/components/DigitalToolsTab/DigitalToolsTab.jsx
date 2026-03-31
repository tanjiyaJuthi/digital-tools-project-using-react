const DigitalToolsTab = ({
  activeTab,
  setActiveTab,
  carts
}) => {
  return (
    <div className="tabs mt-5 mb-11 flex justify-center gap-0">
      <div className="shadow-lg rounded-full flex gap-2">
        <input
          onClick={() => setActiveTab('products')}
          type="radio"
          name="my_tabs_1"
          className={`tab rounded-4xl w-25 ${activeTab === 'products' ? 'primary-btn' : ''}`}
          aria-label="Products"
          defaultChecked
        />

        <input 
          onClick={() => setActiveTab('carts')}
          type="radio" 
          name="my_tabs_1" 
          className={`tab rounded-4xl w-25 ${activeTab === 'carts' ? 'primary-btn' : ''}`}
          aria-label={`Carts(${carts.length})`} 
        />  
      </div>  
    </div>
  );
};

export default DigitalToolsTab;
