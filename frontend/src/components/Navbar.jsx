import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = ({ userRef, servicesRef, pricingRef, contactRef }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    setMenuOpen(false); // Close mobile menu after clicking
  };

  return (
    <>
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full bg-gray-700 text-white shadow-md z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
        <img src="nav.png" alt="icon" className="w-5 h-5" />
        <h1 className="text-2xl font-semibold">Meow</h1>
        </div>


          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-6 text-lg">
            <li className="cursor-pointer hover:text-gray-300" onClick={() => scrollToSection(userRef)}>Users</li>
            <li className="cursor-pointer hover:text-gray-300" onClick={() => scrollToSection(servicesRef)}>Services</li>
            <li className="cursor-pointer hover:text-gray-300" onClick={() => scrollToSection(pricingRef)}>Pricing</li>
            <li className="cursor-pointer hover:text-gray-300" onClick={() => scrollToSection(contactRef)}>Contact</li>
          </ul>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <ul className="md:hidden flex flex-col space-y-4 bg-gray-700 py-4 text-center">
            <li className="cursor-pointer hover:text-gray-300" onClick={() => scrollToSection(userRef)}>Users</li>
            <li className="cursor-pointer hover:text-gray-300" onClick={() => scrollToSection(servicesRef)}>Services</li>
            <li className="cursor-pointer hover:text-gray-300" onClick={() => scrollToSection(pricingRef)}>Pricing</li>
            <li className="cursor-pointer hover:text-gray-300" onClick={() => scrollToSection(contactRef)}>Contact</li>
          </ul>
        )}
      </nav>
    </>
  );
};

export default Navbar;
