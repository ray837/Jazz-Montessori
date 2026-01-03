import { useState } from "react";
import train from '../assets/train.png'
export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-[#F4F1EB] text-[#E94927] px-6 md:px-20 py-4">
      <div className="flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center">
          <img src={train} alt="Logo" className="h-10 " />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10 uppercase font-semibold">
          <span className="cursor-pointer">Home</span>
          <span className="cursor-pointer">Program</span>
          <span className="cursor-pointer">Staff</span>
          <span className="cursor-pointer">Contact</span>
        </div>

        {/* Hamburger (Mobile) */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setOpen(!open)}
        >
          <svg
            className="w-7 h-7"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden mt-4 flex flex-col gap-5 uppercase font-semibold">
          <span className="cursor-pointer">Home</span>
          <span className="cursor-pointer">Program</span>
          <span className="cursor-pointer">Staff</span>
          <span className="cursor-pointer">Contact</span>
        </div>
      )}
    </nav>
  );
}
