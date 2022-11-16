import React from "react";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/footer";
import { Outlet } from "react-router-dom";
import Faq from "../faq/faq";

function MainLayout() {
  return (
    <>
      <div className="container">
        <Navbar />
        <Outlet />
      </div>
      <Faq />
      <Footer />
    </>
  );
}

export default MainLayout;
