import React from "react";

const NotFound = () => {
  return (
    <div
      className="d-flex flex-column justify-content-start align-items-center text-muted text-center"
      style={{ height: "100vh", backgroundColor: "#f5f5f5" }}
    >
      <img
        src="https://i.ibb.co/ckQkMZ2/Group-1329.png"
        alt="logo"
        style={{ width: 300, marginTop: 150 }}
      />
      <h1 style={{ fontSize: 75, marginTop: 35 }}>404</h1>
      <p>-Page Not Found-</p>
    </div>
  );
};

export default NotFound;
