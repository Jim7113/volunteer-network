import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import NavbarTop from "../Navbar/NavbarTop";
import RegisteredEvent from "../RegisteredEvent/RegisteredEvent";

const VolunteerProfile = () => {
  const [regEventData, setRegEventData] = useState([]);
  let history = useHistory();

  useEffect(() => {
    fetch("https://gentle-plateau-71404.herokuapp.com/volunteer-registered", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        authorization: `Bearer ${sessionStorage.getItem("token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        const { eventDetails, regData } = data;
        const rtnArr = [];
        eventDetails.forEach((event) => {
          let found = regData.find((data) => data.eventName === event.type);
          if (found) {
            found.imgUrl = event.imgUrl;
            rtnArr.push(found);
          }
        });
        setRegEventData(rtnArr);
      })
      .catch((error) => {
        console.log(error.errMsg);
      });
  }, []);

  const redirectToHome = () => {
    history.push("/");
  };

  return (
    <div style={{ backgroundColor: "#f5f5f5", height: "100vh" }}>
      <NavbarTop />
      <div className="container">
        <div className="row d-flex justify-content-center my-5">
          {regEventData.map((eventData) => (
            <RegisteredEvent eventData={eventData} key={eventData._id} />
          ))}
        </div>
        <div className="d-flex flex-column align-items-center">
          {!regEventData.length && (
            <h5 className="text-warning mt-3">List is currently empty.</h5>
          )}
          <button className="btn btn-primary my-5" onClick={redirectToHome}>
            Back to Homepage
          </button>
        </div>
      </div>
    </div>
  );
};

export default VolunteerProfile;
