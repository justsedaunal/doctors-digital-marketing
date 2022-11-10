import React from "react";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/footer";
import { Outlet } from "react-router-dom";

function MainLayout() {
  return (
    <>
      <div className="container">
        <Navbar />
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default MainLayout;
