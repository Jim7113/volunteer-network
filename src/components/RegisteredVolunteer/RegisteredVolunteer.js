import React, { useRef } from "react";

const RegisteredVolunteer = ({ data }) => {
  const emailRef = useRef(null);
  const eventRef = useRef(null);
  const componentRef = useRef(null);

  const handleDelete = () => {
    fetch(
      `https://gentle-plateau-71404.herokuapp.com/admin/delete?eventName=${eventRef.current.textContent}&email=${emailRef.current.textContent}`
    )
      .then((response) => response.json())
      .then((data) => {
        componentRef.current.style.display = "none";
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div
      className="mt-4 p-3"
      style={{ borderRadius: 12, backgroundColor: "white" }}
      ref={componentRef}
    >
      <div className="row d-flex justify-content-start" ref={componentRef}>
        <div className="col-md-2">
          {" "}
          <p>{data.fullName}</p>{" "}
        </div>
        <div className="col-md-4">
          {" "}
          <p ref={emailRef}>{data.email}</p>{" "}
        </div>
        <div className="col-md-2">
          {" "}
          <p>{data.date}</p>{" "}
        </div>
        <div className="col-md-3">
          {" "}
          <p ref={eventRef}>{data.eventName}</p>{" "}
        </div>
        <div className="col-md-1">
          {" "}
          <button className="btn btn-danger" onClick={handleDelete}>
            <img
              src="https://i.ibb.co/Vx2rrd7/trash-2-9.png"
              alt="trash-2-9"
              style={{ width: 20 }}
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default RegisteredVolunteer;
