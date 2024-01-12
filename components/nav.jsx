import Link from "next/link";
import React from "react";

const links = [
  {
    path: "/",
    pathname: "home",
  },
  {
    path: "/",
    pathname: "Find Hotel",
  },
  {
    path: "/",
    pathname: "About Us",
  },
  {
    path: "/",
    pathname: "Contact Us",
  },
];

export default function Nav({ containerStyles, listStyles }) {
  return (
    <nav className={`${containerStyles}`}>
      <ul className={`${listStyles}`}>
        {links.map((link, index) => {
          return (
            <li key={index}>
              <Link href={link.path}>{link.pathname}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
