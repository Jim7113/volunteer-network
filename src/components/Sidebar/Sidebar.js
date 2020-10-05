import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div
      className="col-md-3"
      style={{ backgroundColor: "white", height: "100vh" }}
    >
      <img
        src="https://i.ibb.co/ckQkMZ2/Group-1329.png"
        alt="logo"
        style={{ width: 200, marginTop: 25 }}
      />
      <div className="mt-5 ml-2">
        <Link to="/admin/volunteer-list">
          {" "}
          <img
            src="https://i.ibb.co/TLpxt6z/users-alt-1.png"
            alt="users-alt-1"
            style={{ width: 20 }}
          />{" "}
          Registered volunteer list
        </Link>
      </div>
      <div className="mt-3 ml-2">
        <Link to="/admin/add-event">
          {" "}
          <img
            src="https://i.ibb.co/CWk14nF/plus-1.png"
            alt="plus-1"
            style={{ width: 20 }}
          />{" "}
          Add event
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
