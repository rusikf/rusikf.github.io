import React from "react";
import { useLinkClickHandler, useLocation } from "react-router-dom";
import { NavbarLink } from "flowbite-react";

export interface AppNavLinkProps {
  to: string;
  text: string;
}

export default function AppNavLink(props: AppNavLinkProps) {
  const location = useLocation();
  const clickHandler = useLinkClickHandler(props.to);
  const isActive = location.pathname === props.to;

  return (
    <span
      onClick={clickHandler}
      className={`block w-full md:block md:w-auto ${isActive ? 'bg-purple-50 md:bg-transparent' : 'hover:bg-purple-50 md:hover:bg-transparent'} transition-colors duration-200`}
    >
      <NavbarLink
        href={props.to}
        active={isActive}
        className={`${isActive ? 'text-purple-600 font-medium' : 'text-gray-700 hover:text-purple-600'} transition-colors duration-200 !bg-transparent`}
      >
        {props.text}
      </NavbarLink>
    </span>
  );
}
