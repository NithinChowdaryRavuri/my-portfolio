"use client";

import React from "react";
import { navigationItems } from "./Navbar";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="my-12">
      <ul className="flex flex-wrap justify-center">
        {navigationItems.map((item, index) => (
          <div key={index} className="px-5 py-2">
            <Link href={item.href} className="text-muted-foreground">
              {item.name}
            </Link>
          </div>
        ))}
      </ul>

      <p className="mt-2 text-center  text-muted-foreground">
        &copy; 2024 Nithin Chowdary Ravuri. All Rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
