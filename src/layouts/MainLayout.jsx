import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../componentes/Pages/Home/Navbar";
import Footer from "../componentes/Pages/Home/Footer";
import FooterBottom from "../componentes/Pages/Home/FooterBottom";

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <div className="pt-44">
        {" "}
        {/* Adjust the padding to match the height of the navbar */}
        <Outlet />
      </div>

      <Footer />
      <FooterBottom />
    </>
  );
};

export default MainLayout;
