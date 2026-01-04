import { useState } from "react";
import train from '../assets/train.png'
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
export default function Navbar() {
  const [open, setOpen] = useState(false);
const navigate = useNavigate();
  return (
    <nav className="bg-[#F4F1EB] text-[#E94927] px-6 md:px-20 py-4">
      <div className="flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center" onClick={()=>navigate("/")}>
          <img src={train} alt="Logo" className="h-10 " />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10 uppercase font-semibold  font-[Fredoka]">
          <Link className="cursor-pointer hover:scale-95" to='/' >Home</Link>
          <a className="cursor-pointer hover:scale-95" href="#programs">Program</a>
          <Link className="cursor-pointer hover:scale-95" to="/mentor">Mentor</Link>
          <a className="cursor-pointer hover:scale-95" href="https://wa.me/919686434225?text=Hello%20Jazz%20Montessori%2C%20I%20would%20like%20to%20enquire%20about%20admissions." >Contact</a>
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
        <div className="md:hidden mt-4 flex flex-col gap-5 uppercase font-semibold font-[Fredoka]">
          <Link className="cursor-pointer hover:scale-95" to='/' >Home</Link>
        <a className="cursor-pointer hover:scale-95" href="#programs">Program</a>
         <Link className="cursor-pointer hover:scale-95" to="/mentor">Mentor</Link>
          <a className="cursor-pointer " href="https://wa.me/919686434225?text=Hello%20Jazz%20Montessori%2C%20I%20would%20like%20to%20enquire%20about%20admissions.">Contact</a>
        </div>
      )}
    </nav>
  );
}
