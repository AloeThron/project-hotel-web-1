import React from "react";
import Link from "next/link";

import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

export default function Socials({ containerStyles }) {
  return (
    <ul className={`${containerStyles}`}>
      <li>
        <Link href={"/"}>
          <FaInstagramSquare />
        </Link>
      </li>
      <li>
        <Link href={"/"}>
          <FaFacebookSquare />
        </Link>
      </li>
      <li>
        <Link href={"/"}>
          <FaSquareXTwitter />
        </Link>
      </li>
    </ul>
  );
}
