import React from "react";

const Footer = () => {
  return (
    <footer className="flex flex-col md:flex-row items-center gap-4 bg-gradient-to-r from-cyan-900 via-cyan-800 to-cyan-700 py-6 px-10">
      <h1 className="text-xl text-white sm:border-r-2 sm:border-gray-200">
        Monuments Trip
      </h1>

      <p className="text-md text-gray-500 mt-1">© 2023 Monuments Trip |</p>
      <p className="mt-1 text-gray-500 text-md">All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;
