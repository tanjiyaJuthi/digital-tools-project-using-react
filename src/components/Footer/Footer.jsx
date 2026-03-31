import React from 'react';
import footerLogo from '../../assets/footerLogo.png';
import './Footer.css';
import { FaInstagramSquare, FaFacebookSquare, FaTwitter } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="footer-container bg-[#1E1E1E]">
            <div className="max-w-300 mx-auto pt-21.25 pb-5 px-5 lg:px-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-5 lg:mb-20">
                    <div>
                        <img src={footerLogo} alt="DigiTools" />
                        <p className=" pt-4">Premium digital tools for creators, professionals, and businesses. Work smarter with our suite of powerful tools.</p>
                    </div>

                    <div>
                        <p className="font-medium text-[20px]">Product</p>
                        <ul>
                            <li>Features</li>
                            <li>Pricing</li>
                            <li>Templates</li>
                            <li>Integrations</li>
                        </ul>
                    </div>

                    <div>
                        <p className="font-medium text-[20px]">Company</p>
                        <ul>
                            <li>About</li>
                            <li>Blog</li>
                            <li>Careers</li>
                            <li>Press</li>
                        </ul>
                    </div>

                    <div>
                        <p className="font-medium text-[20px]">Resources</p>
                        <ul>
                            <li>Documentation</li>
                            <li>Help Center</li>
                            <li>Community</li>
                            <li>Contact</li>
                        </ul>
                    </div>

                    <div>
                        <p className="font-medium text-[20px] mb-2">Social Links</p>
                        
                        <div className="flex gap-2 items-center">
                            <FaInstagramSquare className="bg-white text-[#E1306C] p-2 rounded-full w-8 h-8" />
                            <FaFacebookSquare className="bg-white text-[#1877F2] p-2 rounded-full w-8 h-8" />
                            <FaTwitter className="bg-white text-[#1DA1F2] p-2 rounded-full w-8 h-8" />
                        </div>
                    </div>
                </div>

                <div className="border-t border-[#627382] my-4"></div>

                <div className="copyright flex items-center justify-between flex-col lg:flex-row">
                    <p>© 2026 Digitools. All rights reserved.</p>
                    
                    <ul className="flex items-center justify-between gap-5">
                        <li>Privacy Policy</li>
                        <li>Terms of Service</li>
                        <li>Cookies</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Footer;