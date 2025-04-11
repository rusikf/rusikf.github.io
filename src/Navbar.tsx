import React from "react";
import { useLocation, useLinkClickHandler } from "react-router-dom";
import { Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from "flowbite-react";
import AppNavLink from "./components/AppNavLink";

export const NavbarComponent = () => {
  const { pathname } = useLocation();
  const homeClickHandler = useLinkClickHandler("/");

  return (
    <div className="relative">
      <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-b-lg blur-lg opacity-30"></div>
      <Navbar fluid rounded className="bg-gray-50 relative border-b border-gray-200 shadow-sm">
        <NavbarBrand href="/" onClick={(e) => { e.preventDefault(); homeClickHandler(e); }}>
          <span className="self-center whitespace-nowrap text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600">
            Ruslan Coroliov
          </span>
        </NavbarBrand>
        <NavbarToggle />
        <NavbarCollapse>
          <AppNavLink to="/" text="About me" />
          <AppNavLink to="/portfolio" text="Portfolio" />
          <AppNavLink to="/experience" text="Work experience & Education" />
          <AppNavLink to="/contacts" text="Contacts" />
        </NavbarCollapse>
      </Navbar>
    </div>
  );
}
