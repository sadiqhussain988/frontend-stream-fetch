import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import logo from "../../assets/sfplogo.png";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="bg-[#060145]/95 backdrop-blur-md shadow-md fixed top-0 left-0 w-full z-50 transition-all duration-300">
      <div className="mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

          {/* === Logo Section (Hover to Show Image) === */}
          <div className="relative w-[35%] sm:w-[15%] group overflow-hidden">
            <div className="absolute inset-0 w-0 flex items-center justify-center transition-all ease-in duration-500 group-hover:w-full group-hover:h-full">
              <a href="/" data-discover="true">
                <img
                  alt="Codes Thinker Logo"
                  className="h-20 w-full"
                  src={logo}
                />
              </a>
            </div>
            <div className="flex flex-col group-hover:translate-x-[120%] transition-all ease-in justify-center duration-400">
              <h1 className="text-amber-400 text-3xl md:text-[4rem] leading-none">
                SFP
              </h1>
              
            </div>
          </div>

          {/* === Desktop Navigation === */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  `relative text-lg font-medium transition-all duration-300 ${
                    isActive
                      ? "text-[#01b5e8]"
                      : "text-white hover:text-[#01b5e8]"
                  }`
                }
              >
                {item.name}
                <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-[#01b5e8] transition-all duration-300 group-hover:w-full" />
              </NavLink>
            ))}
          </div>

          {/* === Login Button (Desktop) === */}
          <div className="hidden md:block">
            <NavLink
              to="/login"
              className="text-white px-6 py-2 rounded-full font-semibold 
              border border-[#f3f7f9]/50 shadow-md
              bg-gradient-to-r from-[#0a00b5] to-[#01b5e8]
              hover:from-[#01b5e8] hover:to-[#0a00b5]
              transition-all duration-500"
            >
              Login
            </NavLink>
          </div>

          {/* === Mobile Menu Toggle === */}
          <button
            className="md:hidden text-white hover:text-[#01b5e8] focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* === Mobile Menu === */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#060145]/95 border-t border-[#ffffff1a] shadow-lg animate-slide-down">
          <div className="flex flex-col space-y-1 px-4 py-3">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `block px-3 py-2 rounded-md text-base font-medium transition-all duration-300 ${
                    isActive
                      ? "bg-[#0a0270] text-[#01b5e8]"
                      : "text-white hover:text-[#01b5e8] hover:bg-[#0a0270]"
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
            <NavLink
              to="/login"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-[#01b5e8] hover:bg-[#0a0270] transition-all duration-300"
            >
              Login
            </NavLink>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
