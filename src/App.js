import "./App.css";
import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Description from "./components/Description";
import Shoes from "./components/Shoes";

function MyNavbar() {
  const navItems = [
    { text: "SHOP ALL", link: "/ShopAll" },
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

function MyDescription() {
  return <Description />;
}

function MyShoes() {
  const shoeData = [
    {
      image:
        "https://titan22.com/cdn/shop/files/FQ3389-301-A.png?v=1706672351&width=480",
      brand: "NIKE",
      model: "Wmns Nike Sabrina 1 EP 'BKLYN's Finest'",
      price: "₱6,895.00",
    },
    {
      image:
        "https://titan22.com/cdn/shop/files/553558-140-A.png?v=1703039830&width=480",
      brand: "JORDAN",
      model: "Air Jordan 1 Low 'Royal Toe'",
      price: "₱6,195.00",
    },
    {
      image:
        "https://titan22.com/cdn/shop/files/FB9927-200-A.png?v=1700798590&width=480",
      brand: "JORDAN",
      model: "Air Jordan 4 Retro Craft 'Olive'",
      price: "₱11,295.00",
    },
    {
      image:
        "https://titan22.com/cdn/shop/files/DJ6013-006-A.png?v=1688702598&width=200",
      brand: "NIKE",
      model: "Nike Air Zoom G.T. Cut 2 EP 'Black and White'",
      price: "₱9,095.00",
    },
    {
      image:
        "https://titan22.com/cdn/shop/files/DR8786-002-A.png?v=1696476552&width=480",
      brand: "NIKE",
      model: "Nike Ja 1 EP 'Smoke'",
      price: "₱6,195.00",
    },
    {
      image:
        "https://titan22.com/cdn/shop/files/FB9893-101-A_1df921de-42fb-4588-b840-d46a35cab1a7.png?v=1701152112&width=480",
      brand: "JORDAN",
      model: "Wmns Air Jordan 1 Low SE 'Sail and Black'",
      price: "₱7,095.00",
    },
    {
      image:
        "https://titan22.com/cdn/shop/files/FJ1567-501-A.png?v=1706672483&width=480",
      brand: "NIKE",
      model: "Nike LeBron NXXT Gen AMPD EP 'I Promise'",
      price: "₱8,895.00",
    },
    {
      image:
        "https://titan22.com/cdn/shop/files/CZ0790-161-A_f82f5e19-171e-4439-bfbb-544153ff79ba.png?v=1697083682&width=480",
      brand: "JORDAN",
      model: "Air Jordan 1 Low OG 'White and University Red'",
      price: "₱7,895.00",
    },
    {
      image:
        "https://titan22.com/cdn/shop/files/FB9933-141-1_7f50dd32-c182-47fb-8e47-cfd7bb392e97.png?v=1706672233&width=480",
      brand: "JORDAN",
      model: "Air Jordan 1 Low '85 'White and Navy'",
      price: "₱9,395.00",
    },
    {
      image:
        "https://titan22.com/cdn/shop/files/FB9933-100-1.png?v=1700188867&width=480",
      brand: "JORDAN",
      model: "Air Jordan 1 Low '85 'Neutral Grey'",
      price: "₱9,395.00",
    },
    {
      image:
        "https://titan22.com/cdn/shop/files/CT8532-140-A.png?v=1702627402&width=480",
      brand: "JORDAN",
      model: "Air Jordan 3 Retro 'Midnight Navy'",
      price: "₱11,295.00",
    },
    {
      image:
        "https://titan22.com/cdn/shop/files/FQ1154-100-A.png?v=1688102357&width=480",
      brand: "JORDAN",
      model: "Jordan Luka 2 PF 'Quai 54'",
      price: "₱7,395.00",
    },
  ];

  return (
    <div>
      <Shoes shoeData={shoeData} />
    </div>
  );
}

function MyFooter() {
  const firstColFooterTitles = [
    { text: "Contact Us", link: "/" },
    { text: "About", link: "/" },
    { text: "Store Locator", link: "/" },
    { text: "Barbershop", link: "/" },
    { text: "Careers", link: "/" },
  ];

  const secondColFooterTitles = [
    { text: "Track your order", link: "/" },
    { text: "Size chart", link: "/" },
    { text: "FAQs", link: "/" },
    { text: "Returns & Exchanges", link: "/" },
    { text: "Terms of Service", link: "/" },
    { text: "Privacy Policy", link: "/" },
    { text: "Shipping Policy", link: "/" },
  ];
  return (
    <div>
      <Footer
        firstColFooterTitles={firstColFooterTitles}
        secondColFooterTitles={secondColFooterTitles}
      />
    </div>
  );
}

export default function MyApp() {
  return (
    <div>
      <MyNavbar />
      <MyDescription />
      <MyShoes />
      <MyFooter />
    </div>
  );
}
