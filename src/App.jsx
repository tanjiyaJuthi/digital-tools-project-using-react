import './App.css';
import Navbar from './components/Navbar/Navbar';
import HeroContainer from './components/HeroContainer/HeroContainer';
import UserRating from './components/UserRating/UserRating';
import DigitalTools from './components/DigitalTools/DigitalTools';
import GetStarted from './components/GetStarted/GetStarted';
import Pricing from './components/Pricing/Pricing';
import TransformWorkflow from './components/TransformWorkflow/TransformWorkflow';
import Footer from './components/Footer/Footer';
import { useState } from 'react';

const getProducts = async () => {
  const products = await fetch('/digitalTools.json');

  return products.json();
};

const productsPromise = getProducts();

function App() {
  const [activeTab, setActiveTab] = useState('products');
  const [carts, setCarts] = useState([]);

  return (
    <>
      <Navbar
        carts={carts}
        setActiveTab={setActiveTab}
      />
      <HeroContainer />
      <UserRating />

      <DigitalTools
        productsPromise={productsPromise}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        carts={carts}
        setCarts={setCarts}
      />

      <GetStarted />
      <Pricing />
      <TransformWorkflow />
      <Footer />
    </>
  )
}

export default App
