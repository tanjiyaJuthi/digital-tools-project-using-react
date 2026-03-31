import React from 'react';
import { CiShoppingCart } from "react-icons/ci";
import './Navbar.css';

const Navbar = ({ 
    carts, 
    setActiveTab 
}) => {
    return (
        <div className="border-b border-b-[#F2F2F2]">
            <div className="navbar max-w-300 mx-auto py-6.5 px-5 lg:px-0">
                <div className="navbar-start">
                    <div className="dropdown mr-2 lg:mr-0">
                        <div tabIndex={0} role="button" className="btn lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>

                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
                        >
                            <li>
                                <a href="#">Products</a>
                            </li>
                            <li>
                                <a href="#">Features</a>
                            </li>
                            <li>
                                <a href="#">Pricing</a>
                            </li>
                            <li>
                                <a href="#">Testimonials</a>
                            </li>
                            <li>
                                <a href="#">FAQ</a>
                            </li>
                        </ul>
                    </div>

                    <a className="text-4xl font-bold primary-text">
                        DigiTools
                    </a>
                </div>

                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li>
                            <a href="#">Products</a>
                            </li>
                        <li>
                            <a href="#">Features</a>
                        </li>
                        <li>
                            <a href="#">Pricing</a>
                        </li>
                        <li>
                            <a href="#">Testimonials</a>
                        </li>
                        <li>
                            <a href="#">FAQ</a>
                        </li>
                    </ul>
                </div>

                <div className="navbar-end flex items-center gap-4">                    
                    <button
                        onClick={() => setActiveTab('carts')}
                        className="text-2xl relative cursor-pointer"
                    >
                        <span className="text-[#FF3980]! text-sm absolute -top-3 -right-2.5">
                            ({carts.length})
                        </span>
                        <CiShoppingCart />
                    </button>

                    <a href="#" className="font-medium">
                        Login
                    </a>

                    <a
                        href="#"
                        className="btn rounded-4xl font-normal primary-btn"
                    >
                        Get Started
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;