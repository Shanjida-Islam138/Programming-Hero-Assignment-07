// src/components/Footer.jsx
import React from "react";

const Footer = () => {
  return (
    <footer className="mt-12 bg-gray-900 text-gray-200 py-8">
      <div className="container mx-auto px-4 grid md:grid-cols-4 gap-6">
        <div>
          <h4 className="font-bold text-white mb-2">CS — Ticket System</h4>
          <p className="text-sm text-gray-400">Simple ticket management demo inspired by a Figma design.</p>
        </div>

        <div>
          <h5 className="font-semibold">Company</h5>
          <ul className="text-sm text-gray-400 mt-2 space-y-1">
            <li>About us</li>
            <li>Careers</li>
            <li>Blog</li>
          </ul>
        </div>

        <div>
          <h5 className="font-semibold">Services</h5>
          <ul className="text-sm text-gray-400 mt-2 space-y-1">
            <li>Support</li>
            <li>Billing</li>
            <li>API</li>
          </ul>
        </div>

        <div>
          <h5 className="font-semibold">Contact</h5>
          <ul className="text-sm text-gray-400 mt-2 space-y-1">
            <li>support@cs-tickets.example</li>
            <li>+1 234 567 890</li>
          </ul>
        </div>
      </div>

      <div className="mt-6 border-t border-gray-800 pt-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} CS — Ticket System. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
