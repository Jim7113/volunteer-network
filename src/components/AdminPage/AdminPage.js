import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import RegisteredVolunteer from "../RegisteredVolunteer/RegisteredVolunteer";
import Sidebar from "../Sidebar/Sidebar";

const AdminPage = () => {
  const [registerData, setRegisterData] = useState([]);

  let history = useHistory();
  useEffect(() => {
    fetch("https://gentle-plateau-71404.herokuapp.com/admin/volunteer-list")
      .then((response) => response.json())
      .then((data) => setRegisterData(data));
  }, []);

  const redirectHome = () => {
    history.push("/");
  };

  return (
    <div
      className="container"
      style={{ backgroundColor: "#f5f5f5", height: "100vh" }}
    >
      <div className="row">
        <Sidebar />
        <div className="col-md-9 text-center mr-auto">
          <h3 style={{ backgroundColor: "White", padding: 25 }}>
            Volunteer List
          </h3>
          <div
            className="d-flex justify-content-start mt-4 p-3"
            style={{ borderRadius: 12, backgroundColor: "white" }}
          >
            <div className="col-md-2">
              {" "}
              <h6>Name</h6>{" "}
            </div>
            <div className="col-md-4">
              {" "}
              <h6>Email ID</h6>{" "}
            </div>
            <div className="col-md-2">
              {" "}
              <h6>Date</h6>{" "}
            </div>
            <div className="col-md-3">
              {" "}
              <h6>Event Name</h6>{" "}
            </div>
            <div className="col-md-1">
              {" "}
              <h6>Action</h6>
            </div>
          </div>
          {registerData.map((data) => (
            <RegisteredVolunteer data={data} key={data._id} />
          ))}
          {!registerData.length && (
            <h5 className="text-warning mt-5">List is currently empty.</h5>
          )}
          <button className="btn btn-primary my-5" onClick={redirectHome}>
            Back to Homepage
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
