import React from "react";
import { Link } from "react-router-dom";
import { NavMenu } from "../constants/Constant.jsx";
const Navbar = () => {
  return (
    <>
      <nav className="sticky top-0 z-10 w-full m-auto py-4 bg-white/10 backdrop-blur-lg px-[3rem]">
        <div className="flex justify-between items-center max-w-[1200px] m-auto">
          <div>
            <Link to="/">
              <h1 className="text-white text-bold text-2xl">CryptoScope</h1>
            </Link>
          </div>
          <div>
            <ul className="flex space-x-6">
              {NavMenu.map((item) => (
                <li key={item.id} className="tracking-wider px-4">
                  <a
                    href={item.link}
                    className="text-white hover:text-[#6528F7]"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
