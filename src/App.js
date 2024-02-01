import "./App.css";
import React from "react";
import Navbar from "./components/Navbar";

function MyNavbar() {
  const navItems = [
    { text: "SHOP ALL", link: "/" },
    { text: "FOOTWEAR", link: "/footwear" },
    { text: "APPAREL", link: "/apparel" },
    { text: "ACCESSORIES", link: "/accessories" },
    { text: "BRANDS", link: "/brands" },
    { text: "BLOGS", link: "/blogs" },
  ];

  return (
    <div className="Navbar-Items">
      <Navbar items={navItems} />
    </div>
  );
}

function MyFooter() {
  const navItems = [
    { text: "SHOP ALL", link: "/" },
    { text: "FOOTWEAR", link: "/footwear" },
    { text: "APPAREL", link: "/apparel" },
    { text: "ACCESSORIES", link: "/accessories" },
    { text: "BRANDS", link: "/brands" },
    { text: "BLOGS", link: "/blogs" },
  ];

  return (
    <div className="Navbar-Items">
      <Navbar items={navItems} />
    </div>
  );
}

export default function MyApp() {
  return (
    <div>
      <MyNavbar />
      <MyFooter />
    </div>
  );
}
