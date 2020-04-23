import React from "react";

const Footer = () => {
  return (
    <div
      style={{
        height: 150,
        backgroundColor: "#7c4f4f",
        display: "flex",
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 20,
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <text className="font" style={{ fontSize: 30 }}>
          Qpid Course
        </text>
        <text className="font" style={{ fontSize: 25 }}>
          คิวปิด คอร์ส
        </text>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <text className="font">By PIMWIPA SAKULKHAM</text>
        <text className="font">ID : 5935512010</text>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <text className="font">240-311</text>
        <text className="font">DISTRIBUTED COMPUTING</text>
        <text className="font">AND WEB TECHNOLOGIES</text>
      </div>
    </div>
  );
};

export default Footer;
