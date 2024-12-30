import { useState } from 'react';
import { Link } from 'react-router-dom';

import headings from '../data/pages.json';

export default function Navbar() {

  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);
  
  const homeName = "Hannah Dell";

  const headingNames = (
    <ul className={`sm:flex ${isHamburgerOpen ? "block" : "hidden"}`}>
      {headings.map(heading => (
        <li key={heading.id} className="pr-4 py-2">
          <Link 
            to={`${heading.name.toLowerCase()}`}
            className="text-headingYellow no-underline hover:text-hoverYellow transition duration-300"
          >
            {heading.name}
          </Link>
        </li>
      ))}
    </ul>
  )

  return (
    <nav className="w-full bg-navbarBackground shadow-md py-2">
      <div className="body-container mx-auto flex items-center justify-between sm:justify-start">
          <Link
            to="/"
            className="text-xl text-headingYellow no-underline hover:text-hoverYellow transition duration-300 pr-4 py-2"
          >
            {homeName}
          </Link>

        {/* Hamburger */}
        <div className="sm:hidden flex items-center">
          <button 
            className="text-headingYellow hover:text-hoverYellow transition duration-300"
            onClick={() => setIsHamburgerOpen(!isHamburgerOpen)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Headings without hamburger */}
        <div className="hidden sm:block">
          {headingNames}
        </div>
      </div>

      {/* Headings with hamburger */}
      <div
        className={`body-container sm:hidden overflow-hidden transition-all duration-500 ease-in-out ${isHamburgerOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        {headingNames}
      </div>

    </nav>
  )
}