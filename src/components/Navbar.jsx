import React, { useContext, useEffect, useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
import toast from 'react-hot-toast';

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate();

  const logOutUser = () => {
    logOut();
    toast.success('Sign-Out Successfully');
    navigate('/signup');
  };

  const links = (
    <>
      <li>
        <NavLink to={'/'}>Home</NavLink>
      </li>
      <li>
        <NavLink to={'/allMovies'}>All Movies</NavLink>
      </li>

      <li>
        <NavLink to={'/addMovie'}>Add Movie</NavLink>
      </li>
      <li>
        <NavLink to={'/myFavorite'}>My Favorite</NavLink>
      </li>

      <li>
        <NavLink to={'/about'}>About us</NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar sticky top-0 z-10 shadow-sm nav">
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
            {links}
          </ul>
        </div>
        <a className=" text-xl">Movie Portal</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end ">
        {user ? (
          <div className="flex flex-row items-center gap-2 relative group">
            <img
              className="w-12 h-12 rounded-full mr-2 "
              src={user && user?.photoURL}
              alt=""
            />

            <p className="group-hover:opacity-100 opacity-0 transition-opacity duration-300 absolute right-40 text-base font-bold bg-gray-300 shadow-sm p-1">
              {user && user?.displayName}
            </p>

            <button onClick={logOutUser} className="px-3 py-1 shadow-md">
              Sign-Out
            </button>
          </div>
        ) : (
          <div>
            <Link to={'/signin'} className="px-3 py-1 ">
              Sign in
            </Link>
            <Link to={'/signup'} className="px-3 py-1 ">
              Sign up
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
