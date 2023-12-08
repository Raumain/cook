import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { useState } from "react";
import LoginButton from "../Components/LoginButton";
import LogoutButton from "../Components/LogoutButton";
import { useAuth0 } from "@auth0/auth0-react";

export default function Header() {
  const { user, isAuthenticated } = useAuth0();
  const [isHovered, setIsHovered] = useState(false);
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(
    scrollYProgress,
    [0, 1],
    [1, isHovered ? 1 : 0.1]
  );
  return (
    <motion.div
      style={{ opacity }}
      className="fixed navbar bg-base-200 py-3 transition"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex-1">
        <Link to="/" className="btn text-xl">
          Cook
        </Link>
      </div>
      <div className="flex-none">
        <div className="form-control">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered w-44 md:w-96"
          />
        </div>
        <button className="btn btn-ghost btn-circle">
          <div className="indicator">
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
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
              />
            </svg>
            <span className="badge badge-xs badge-primary indicator-item"></span>
          </div>
        </button>
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img alt="Tailwind CSS Navbar component" src={user?.picture} />
            </div>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-4 z-[1] p-2 shadow bg-base-200 rounded-lg w-52"
          >
            {isAuthenticated ? (
              <>
                <li>
                  <Link to="profile">Profile</Link>
                </li>
                <li>
                  <Link to="settings">Settings</Link>
                </li>
                <li>
                  <LogoutButton />
                </li>
              </>
            ) : (
              <li>
                <LoginButton />
              </li>
            )}
          </ul>
        </div>
      </div>
    </motion.div>
  );
}
