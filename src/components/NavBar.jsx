import jsonData from "../assets/data.json";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
import Logo from "/images/shared/logo.svg";

function NavBar() {
    const [isOpen, setIsOpen] = useState(false);
    const navItemsNames = Object.keys(jsonData);

  return (  
    <>
        <header className="flex items-center justify-between relative p-4 md:p-8">
              {/* Logo */}
              <Link to="/home" className="w-8 md:w-16">
                  <img src={Logo} alt="Logo" className="w-full"/>
              </Link>

              {/* Line (visible on larger screens) */}
              <span className="hidden md:block flex-grow h-[2px] bg-white/30 ml-28"></span>

              {/* Menu Button (visible on smaller screens) */}
              <button
                  onClick={() => setIsOpen((open) => !open)}
                  className="z-50 md:hidden"
              >
                  <img
                      src={`/images/shared/icon-${isOpen ? "close" : "hamburger"}.svg`}
                      alt="Menu"
                  />
              </button>

              {/* Overlay (visible when menu is open) */}
              {isOpen && (
                  <span
                      onClick={() => ((open) => setIsOpen(false))}
                      className="fixed top-0 left-0 w-full h-full bg-black/30 z-40"
                  ></span>
              )}

              {/* Navigation */}
              <nav
                  className={`navbar-bg-color fixed top-0 right-0 h-screen w-full bg-white/10 backdrop-blur-md transition-transform transform ${
                      isOpen ? "translate-x-0" : "translate-x-full"
                  } z-50 md:static md:h-auto md:w-auto md:bg-transparent md:backdrop-blur-none md:translate-x-0`}
              >
                  <ul className="flex flex-col mt-20 space-y-4 pl-8 uppercase md:flex-row md:mt-0 md:space-y-0 md:space-x-8 md:pl-0">
                      <li>
                          <NavLink
                              to="/home"
                              className={({ isActive }) => 
                                  `flex gap-2 border-b-2 pb-1 ${isActive ? "border-white" : "border-transparent"} hover:border-white/30`
                            }
                              onClick={() => setIsOpen(false)}
                          >
                              <span>00</span> <span>Home</span>
                          </NavLink>
                      </li>
                      {navItemsNames.map((item, i) => (
                          <li key={item}>
                              <NavLink
                                  to={`${item}`}
                                  className={({ isActive }) =>
                                      `flex gap-2 border-b-2 pb-1 ${isActive ? "border-white" : "border-transparent"} hover:border-white/30`
                                }
                                  onClick={() => setIsOpen(false)}
                              >
                                  <span>0{i + 1}</span> <span>{item}</span>
                              </NavLink>
                          </li>
                      ))}
                  </ul>
              </nav>
        </header>
    </>
  );
}

export default NavBar;
