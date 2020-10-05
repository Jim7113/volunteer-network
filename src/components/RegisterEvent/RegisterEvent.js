import React, { useState, useContext } from "react";
import { useHistory, useParams } from "react-router-dom";
import { UserContext } from "../../App";

const RegisterEvent = () => {
  let { eventName } = useParams();
  let history = useHistory();
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

  const [regData, setRegData] = useState({
    description: "",
    date: "",
  });

  const [error, setError] = useState("");

  const handleBlur = (e) => {
    if (e.target.value !== "") {
      let newRegData = { ...regData };
      newRegData[e.target.id] = e.target.value;
      setRegData(newRegData);
      setError("");
    } else {
      setError("All fields are required");
    }
  };

  const redirectToHome = () => {
    history.push("/");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (error === "") {
      let finalRegData = { ...regData };
      finalRegData.fullName = finalRegData.fullName || loggedInUser.name;
      finalRegData.email = finalRegData.email || loggedInUser.email;
      finalRegData.eventName = finalRegData.eventName || eventName;
      setRegData(finalRegData);
      fetch("https://gentle-plateau-71404.herokuapp.com/register-event", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          authorization: `Bearer ${sessionStorage.getItem("token")}`,
        },
        body: JSON.stringify(finalRegData),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.successMsg) {
            history.push(`/volunteers/${finalRegData.email}`);
          } else {
            console.log(data.errMsg);
          }
        });
    }
  };

  return (
    <div
      className="container d-flex flex-column justify-content-center align-items-center"
      style={{ backgroundColor: "#f5f5f5", height: "100%" }}
    >
      <img
        src="https://i.ibb.co/ckQkMZ2/Group-1329.png"
        alt="logo"
        style={{ width: 300, margin: "15px 0px" }}
      />
      <div className="col-md-7">
        <form
          className="mt-3 mb-5 mx-1 p-5"
          style={{
            backgroundColor: "white",
            borderRadius: 12,
            border: "2px solid lightgray",
          }}
          onSubmit={(e) => {
            handleSubmit(e);
          }}
        >
          <div className="form-group">
            <label htmlFor="fullName">Full Name</label>
            <input
              type="text"
              className="form-control"
              id="fullName"
              defaultValue={loggedInUser.name}
              onBlur={(e) => {
                handleBlur(e);
              }}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              className="form-control"
              id="email"
              defaultValue={loggedInUser.email}
              onBlur={(e) => {
                handleBlur(e);
              }}
            />
          </div>
          <div className="form-group">
            <label htmlFor="date">Date</label>
            <input
              type="date"
              className="form-control"
              id="date"
              onBlur={(e) => {
                handleBlur(e);
              }}
            />
          </div>
          <div className="form-group">
            <label htmlFor="description">Description</label>
            <input
              type="text"
              className="form-control"
              id="description"
              placeholder="Description"
              onBlur={(e) => {
                handleBlur(e);
              }}
            />
          </div>
          <div className="form-group">
            <label htmlFor="eventName">Event Name</label>
            <input
              type="text"
              className="form-control"
              id="eventName"
              defaultValue={eventName}
              onBlur={(e) => {
                handleBlur(e);
              }}
            />
          </div>
          <p className="text-danger">{error}</p>
          <button type="submit" className="btn btn-primary m-2">
            Submit
          </button>
          <button className="btn btn-warning my-4" onClick={redirectToHome}>
            Back To Home
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegisterEvent;
