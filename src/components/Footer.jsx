// src/components/Footer.jsx
import React from 'react';

const Footer = () => {
    // Footer background color is set to black (#000000)
    return (
        <footer 
            className="bg-black text-white py-12" 
            style={{ fontFamily: 'Inter, sans-serif' }}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Main Content Grid */}
                <div className="grid grid-cols-2 md:grid-cols-5 gap-8 border-b border-gray-800 pb-10">
                    
                    {/* 1. CS - Ticket System (Description) */}
                    <div className="col-span-2 md:col-span-2">
                        <h3 className="text-xl font-bold mb-4">CS — Ticket System</h3>
                        <p className="text-sm text-gray-400 leading-relaxed">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        </p>
                    </div>

                    {/* 2. Company */}
                    <div>
                        <h4 className="text-base font-semibold mb-4">Company</h4>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li><a href="#" className="hover:text-white transition">About Us</a></li>
                            <li><a href="#" className="hover:text-white transition">Our Mission</a></li>
                            <li><a href="#" className="hover:text-white transition">Contact Saled</a></li>
                        </ul>
                    </div>

                    {/* 3. Services */}
                    <div>
                        <h4 className="text-base font-semibold mb-4">Services</h4>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li><a href="#" className="hover:text-white transition">Products & Services</a></li>
                            <li><a href="#" className="hover:text-white transition">Customer Stories</a></li>
                            <li><a href="#" className="hover:text-white transition">Download Apps</a></li>
                        </ul>
                    </div>

                    {/* 4. Information and Social Links */}
                    <div>
                        {/* Information Section */}
                        <h4 className="text-base font-semibold mb-4">Information</h4>
                        <ul className="space-y-2 text-sm text-gray-400 mb-6">
                            <li><a href="#" className="hover:text-white transition">Privacy Policy</a></li>
                            <li><a href="#" className="hover:text-white transition">Terms & Conditions</a></li>
                            <li><a href="#" className="hover:text-white transition">Join Us</a></li>
                        </ul>
                        
                        {/* Social Links Section (Added for better alignment with image structure) */}
                        <h4 className="text-base font-semibold mb-4">Social Links</h4>
                        <ul className="space-y-2 text-sm text-gray-400">
                            {/* Note: Placeholder for social icons/text. Using text here. */}
                            <li><a href="#" className="hover:text-white transition">𝕏 @CS — Ticket System</a></li>
                            <li><a href="#" className="hover:text-white transition">in @CS — Ticket System</a></li>
                            <li><a href="#" className="hover:text-white transition">f @CS — Ticket System</a></li>
                            <li><a href="mailto:support@cst.com" className="hover:text-white transition">support@cst.com</a></li>
                        </ul>
                    </div>
                </div>

                {/* Copyright Section */}
                <div className="pt-6 text-center text-sm text-gray-500">
                    &copy; 2025 CS — Ticket System. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;