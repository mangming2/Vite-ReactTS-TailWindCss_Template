import { useState } from "react";
import { Link } from "react-router-dom";

function NavBar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <header className="flex  items-center">
      <div className="block md:hidden fixed top-5 right-5 ">
        <button
          className="flex items-center px-3 py-2 border rounded text-gray-200 border-gray-400 hover:text-white hover:border-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 3h20v2H0zm0 6h20v2H0zm0 6h20v2H0z" />
          </svg>
        </button>
      </div>
      <div className={`flex md:flex  ${mobileMenuOpen ? "block" : "hidden"}`}>
        <div className="flex flex-col md:flex-row max-md:fixed max-md:bg-white max-md:top-20 max-md:right-5 justify-between ">
          <Link
            to="/"
            className="flex mt-4 md:inline-block md:mt-0 text-gray-200 hover:text-white mr-4"
            onClick={() => setMobileMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/about"
            className="flex mt-4 md:inline-block md:mt-0 text-gray-200 hover:text-white mr-4"
            onClick={() => setMobileMenuOpen(false)}
          >
            About
          </Link>
          <Link
            to="/contact"
            className="flex mt-4 md:inline-block md:mt-0 text-gray-200 hover:text-white mr-4"
            onClick={() => setMobileMenuOpen(false)}
          >
            Contact
          </Link>
        </div>
      </div>
    </header>
  );
}

export default NavBar;
