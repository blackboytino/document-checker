import React from "react";
import "../index.css";
export default function Home() {
  return (
    <div className="bg-white">
      <div className="navbar  text-black">
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
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-slate-400 rounded-box w-52"
            >
              <li>
                <a>Home</a>
              </li>
              <li>
                <a>Login</a>
                <ul className="p-2">
                  <li>
                    <a>As Researcher</a>
                  </li>
                  <li>
                    <a>As Reviewer</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>About</a>
              </li>
            </ul>
          </div>
          <div className="flex">
            <img src="/images/babcockLogo.png" alt=""  className="h-[80px]"/>
          <a className="btn btn-ghost text-xl pt-[29px] text-blue-600">BUREC</a>
          </div>
          
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 ">
            <li>
              <a>Home</a>
            </li>
            <li>
              <details>
                <summary>Login</summary>
                <ul className="p-2">
                  <li>
                    <a className="text-white">As Researcher</a>
                  </li>
                  <li>
                    <a className="text-white">As Reviewer</a>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <a>About</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn text-white bg-blue-600 hover:bg-blue-500 border-none">Submit a proposal</a>
        </div>
      </div>
      {/* Section */}
      <div>
       <h1></h1>
      </div>
    </div>
  );
}
