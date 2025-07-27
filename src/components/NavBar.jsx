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
              <StyledNav isOpen={isOpen}>
                  <StyledNavList>
                      <li>
                          <StyledNavLink
                              to="/home"
                              onClick={() => setIsOpen(false)}
                          >
                              <span>00</span> <span>Home</span>
                          </StyledNavLink>
                      </li>
                      {navItemsNames.map((item, i) => (
                          <li key={item}>
                              <StyledNavLink
                                  to={`${item}`}
                                  onClick={() => setIsOpen(false)}
                              >
                                  <span>0{i + 1}</span> <span>{item}</span>
                              </StyledNavLink>
                          </li>
                      ))}
                  </StyledNavList>
              </StyledNav>
        </header>
    </>
  );
}

const StyledNav = styled.nav.withConfig({
  shouldForwardProp: (prop) => "isOpen" !== prop,
})`
  /* Mobile styles */
  position: fixed;
  top: 0;
  right: 0;
  height: 100vh;
  width: 100%;
  z-index: 50;
  transition: transform 0.3s ease;
  transform: ${props => props.isOpen ? 'translateX(0)' : 'translateX(100%)'};

  /* Dark Reader resistant background */
  background-color: rgba(135, 143, 158, 0.21) !important;
  backdrop-filter: blur(16px) saturate(150%) !important;
  -webkit-backdrop-filter: blur(16px) saturate(150%) !important;

  /* Force visibility */
  visibility: visible !important;
  opacity: 1 !important;
  display: block !important;

  /* Desktop styles */
  @media screen and (min-width: 768px) {
    position: static;
    height: auto;
    width: auto;
    transform: translateX(0) !important;

    /* Add backdrop blur for desktop */
    background-color: rgba(135, 143, 158, 0.15) !important;
    backdrop-filter: blur(40px) saturate(150%) !important;
    -webkit-backdrop-filter: blur(40px) saturate(150%) !important;

    /* Ensure desktop nav is always visible */
    visibility: visible !important;
    opacity: 1 !important;
    display: block !important;

    /* Add padding and rounded corners like in screenshot */
    padding: 2rem 3rem !important;
    border-radius: 0 0 0 0 !important;
  }
`;

const StyledNavList = styled.ul`
  display: flex !important;
  flex-direction: column;
  margin-top: 5rem;
  gap: 1rem;
  padding-left: 2rem;
  text-transform: uppercase;
  list-style: none;

  /* Force visibility */
  visibility: visible !important;
  opacity: 1 !important;
  color: white !important;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    margin-top: 0;
    gap: 2rem;
    padding-left: 0;
  }
`;

const StyledNavLink = styled(NavLink)`
  display: flex !important;
  gap: 0.5rem;
  border-bottom: 2px solid transparent;
  padding-bottom: 0.25rem;
  color: white !important;
  text-decoration: none !important;

  /* Force visibility */
  visibility: visible !important;
  opacity: 1 !important;

  &:hover {
    border-bottom-color: rgba(255, 255, 255, 0.3) !important;
  }

  &.active {
    border-bottom-color: white !important;
  }
`;

export default NavBar;
