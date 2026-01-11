import React from "react";

const Navbar = () => {
  return (
    <>
      <nav className="bg-slate-800 text-white px-80 py-4 flex items-center justify-between">
        <div className="text-2xl font-bold text-sky-400">ShopNex</div>

        <ul className="hidden md:flex gap-8 text-sm">
          <li className="hover:text-sky-400 cursor-pointer">Home</li>
          <li className="hover:text-sky-400 cursor-pointer">Shop</li>
          <li className="hover:text-sky-400 cursor-pointer">About</li>
          <li className="hover:text-sky-400 cursor-pointer">Contact</li>
        </ul>

        <div className="flex items-center gap-4">
          <button className="bg-sky-500 px-4 py-2 rounded-md shadow-md hover:bg-sky-600 active:translate-y-px transition">
            Login
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
