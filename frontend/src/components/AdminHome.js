import React, { useEffect } from "react";
import "../App.css";
import axios from "axios";
import { useDispatch } from "react-redux";
import Footer from "./Footer";
import MyCarousel from "./MyCarousel";

const AdminHome = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get("https://miniproject-client.herokuapp.com/admin/profile", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .catch((error) => {
        localStorage.removeItem("token");
        dispatch({ type: "LOGOUT" });
      });
  }, []);

  return (
    <div className="bg">
      <MyCarousel />
      <Footer />
    </div>
  );
};

export default AdminHome;
