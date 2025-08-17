import React from "react";

const Header = () => (
  <header className="bg-white shadow-md p-4 flex justify-between items-center">
    <div className="text-xl font-bold">ListingApp</div>
    <div className="flex gap-4">
      <button className="px-3 py-1 bg-blue-500 text-white rounded">Sign In</button>
      <button className="px-3 py-1 border border-blue-500 text-blue-500 rounded">Sign Up</button>
    </div>
  </header>
);

export default Header;
