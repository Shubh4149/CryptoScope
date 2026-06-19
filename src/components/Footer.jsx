import React from "react";

const Footer = () => {
  return (
    <div>
      <div className="grid grid-cols-1 border-t border-gray-800 lg:grid-cols-3 gap-10 w-[90%] m-auto pb-15 pt-8">
        <div>
          Company
          <ul className="footer-menu">
            <li>About Us</li>
            <li>Careers</li>
            <li>Press</li>
          </ul>
        </div>
        <div>
          Resources
          <ul className="footer-menu">
            <li>Blog</li>
            <li>Documentation</li>
            <li>Support</li>
          </ul>
        </div>
        <div>
          Subscribe
          <ul className="footer-menu">
            <li>Newsletter</li>
            <li>Updates</li>
          </ul>
        </div>
      </div>
      <div className="w-full m-auto py-4 bg-white/10 backdrop-blur-lg">
        <div className="w-[90%] items-center m-auto grid grid-cols-1 lg:grid-cols-2">
          <div>
            <h3 className="text-3xl text-bold">CryptoScope</h3>
          </div>
          <div className="text-right">
            <p className="text-sm">@2026 All Rights Reserved By CryptoScope</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
