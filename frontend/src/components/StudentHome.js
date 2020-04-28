import React from "react";
import "../App.css";
import Footer from "./Footer";
import MyCarousel from "./MyCarousel";

const StudentHome = (props) => {
  return (
    <div className="bg">
      <MyCarousel />

      <Footer />
    </div>
  );
};
export default StudentHome;
