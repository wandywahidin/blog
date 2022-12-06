import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [togle, settogle] = useState(false);

  const buttonTogle = () => {
    settogle(!togle);
    console.log('togle', togle)
  };

  return (
    <div className=" flex justify-between md:items-center">
      <Link to="/">
        <img src={logo} alt="logo" className="w-2/3" />
      </Link>
      {togle ? (
        <div className="flex items-end z-10 flex-col absolute top-0 pt-6 min-h-screen right-0 bg-yellowGood" onClick={buttonTogle}>
          <div className="md:hidden mx-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-8 h-8"
            >
              <path
                fillRule="evenodd"
                d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="md:hidden text-end mx-6 mt-6">
            <Link
              to="/?cat=art"
              className=" text-base font-semibold hover:text-lightGreen"
            >
              <h6>ART</h6>
            </Link>
            <Link
              to="/?cat=technology"
              className=" text-base font-semibold hover:text-lightGreen"
            >
              <h6>TECHNOLOGY</h6>
            </Link>
            <Link
              to="/?cat=science"
              className=" text-base font-semibold hover:text-lightGreen"
            >
              <h6>SCIENCE</h6>
            </Link>
            <Link
              to="/?cat=design"
              className=" text-base font-semibold hover:text-lightGreen"
            >
              <h6>DESIGN</h6>
            </Link>
            <Link
              to="/?cat=food"
              className=" text-base font-semibold hover:text-lightGreen"
            >
              <h6>FOOD</h6>
            </Link>
          </div>
        </div>
      ) : (
        <div className="md:hidden mx-6 pt-6" onClick={buttonTogle}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-8 h-8"
          >
            <path
              fillRule="evenodd"
              d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      )}

      <div className="md:flex gap-3 hidden">
        <Link
          to="/?cat=art"
          className=" text-base font-semibold hover:text-lightGreen"
        >
          <h6>ART</h6>
        </Link>
        <Link
          to="/?cat=technology"
          className=" text-base font-semibold hover:text-lightGreen"
        >
          <h6>TECHNOLOGY</h6>
        </Link>
        <Link
          to="/?cat=science"
          className=" text-base font-semibold hover:text-lightGreen"
        >
          <h6>SCIENCE</h6>
        </Link>
        <Link
          to="/?cat=design"
          className=" text-base font-semibold hover:text-lightGreen"
        >
          <h6>DESIGN</h6>
        </Link>
        <Link
          to="/?cat=food"
          className=" text-base font-semibold hover:text-lightGreen"
        >
          <h6>FOOD</h6>
        </Link>
      </div>
      <div className="md:flex gap-3 items-center hidden">
        <Link to="/profile" className=" text-base font-semibold">
          <h6>Wandy</h6>
        </Link>
        <h6 className="text-base font-semibold">Logout</h6>
        <Link
          to="/write"
          className=" text-base font-semibold px-2 py-1 bg-lightGreen rounded-xl border-white text-white flex items-center justify-center hover:text-lightGreen hover:bg-white border hover:border-lightGreen"
        >
          <h6>Write</h6>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
