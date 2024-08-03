import React from "react";
import Image from "next/image";

const Navbar: React.FC = () => {
  return (
    <nav className="w-full flex justify-between items-center p-4  text-blue-950">
      <div className="flex items-center">
        {/* Logo */}
        {/* <Image src="/CVCraft.png" alt="Logo" width={40} height={40} /> */}
        <span className="ml-2 text-xl font-extrabold">CVCraft</span>
      </div>

      {/* Links */}
      <div className="flex space-x-4">
        <a href="#" className="hover:text-gray-400">
          Home
        </a>
        <a href="#" className="hover:text-gray-400">
          About
        </a>
        <a href="#" className="hover:text-gray-400">
          Contact
        </a>
      </div>

      {/* User Image in acse we manage users*/}
      <div className="relative w-10 h-10">
        {/* <Image
          src="/user.jpg" // Replace with your user image path
          alt="User"
          layout="fill"
          className="rounded-full"
        /> */}
      </div>
    </nav>
  );
};

export default Navbar;
