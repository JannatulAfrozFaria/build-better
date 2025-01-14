import React from "react";

const Navbar = () => {
  const navOptions = (
    <>
      <li>
              <a>Home</a>
            </li>
            <li>
              <details>
                <summary>About</summary>
                <ul className="p-2 bg-green-100">
                  <li>
                    <a>Company Overview</a>
                  </li>
                  <li>
                    <a>Objectives and commitment</a>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <details>
                <summary>Services & Solutions</summary>
                <ul className="p-2 bg-green-100">
                  <li>
                    <a>Our Services</a>
                  </li>
                  <li>
                    <a>Our Strengths</a>
                  </li>
                  <li>
                    <a>Environmental Health and Safety</a>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <details>
                <summary>Projects</summary>
                <ul className="p-2 bg-green-100">
                  <li>
                    <a>Completed Projects</a>
                  </li>
                  <li>
                    <a>Ongoing Projects</a>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <a>Blog</a>
            </li>
            {/* <li>
              <a>Contact Us</a>
            </li> */}
    </>
  );
  return (
    <>
      <div className="navbar fixed z-10 bg-white  ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
                {navOptions}
            </ul>
            
          </div>
          <a className="btn btn-ghost text-xl"> <img className="w-48" src="https://i.postimg.cc/WbxSxQfJ/bb-logo.png" alt="Logo" /> </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-base md:text-lg font-semibold">
            {navOptions}
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn btn-outline">Contact Us</a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
