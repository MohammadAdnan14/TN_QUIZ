import React from 'react';
import Image from 'next/image';
import Logo from "../../public/assets/logo.svg";
import CreateQuizLogo from "../../public/assets/add.jpg"; // Add the create quiz logo path

function Navbar(props) {
  return (
    <header className="bg-[var(--background)]">
      <div className="mx-auto flex h-16 max-w-screen-xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <a className="block" href="#">
          <span className="sr-only">Home</span>
          <Image className="h-14 w-20" src={Logo} alt="Logo" />
        </a>

        {/* Navigation Links */}
        <nav aria-label="Global" className="flex-1">
          <ul className="flex justify-center items-center gap-10 text-base">
            {["Home", "About Us"].map((item) => (
              <li key={item}>
                <a className="text-[var(--foreground)] transition hover:text-[#6b00b6] whitespace-nowrap" href="#">
                  {item}
                </a>
              </li>
            ))}
            <li>
              <a className="text-[var(--foreground)] transition hover:text-[#6b00b6] whitespace-nowrap" href="#">
                Quizzes
              </a>
              {/* Create Quiz Logo */}
              <Image
                
                className="inline-block h-10 w-10 ml-10" // Changed ml-1 to ml-3
                src={CreateQuizLogo}
                alt="Create Quiz Logo"
              />
              
               
              
            </li>
            {/* <li>
              <a className="text-[var(--foreground)] transition hover:text-[#6b00b6] whitespace-nowrap" href="#">
                Register
              </a>
            </li> */}
          </ul>
        </nav>

        {/* Login/Register and Mobile Menu */}
        <div className="flex items-center gap-4 justify-end">
          <div className="sm:flex sm:gap-4">
            <a
              className="block rounded-md bg-[#6b00b6] px-5 py-2.5 text-sm font-medium text-white transition hover:bg-[#a29bfe]"
              href="#"
            >
              Login
            </a>

            <a
              className="hidden rounded-md bg-[var(--background)] px-5 py-2.5 text-sm font-medium text-[#6b00b6] transition hover:text-[#a29bfe] sm:block"
              href="#"
            >
              Register
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="block rounded bg-[var(--background)] p-2.5 text-[var(--foreground)] transition hover:text-[#6b00b6] md:hidden"
          >
            <span className="sr-only">Toggle menu</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
