import React, { useRef } from "react";

const RegisteredEvent = ({ eventData }) => {
  const { eventName, date, imgUrl } = eventData;

  const regRef = useRef(null);

  const eventRef = useRef(null);

  const handleDelete = () => {
    let event = eventRef.current.innerText;
    const url = `https://gentle-plateau-71404.herokuapp.com/delete-registration?eventName=${event}`;
    fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        authorization: `Bearer ${sessionStorage.getItem("token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.successMsg) {
          regRef.current.style.display = "none";
        } else {
          console.log("Could not delete the document");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div
      className="col-md-5 col-sm-10 my-2 mx-2"
      style={{ backgroundColor: "white", borderRadius: 12 }}
      ref={regRef}
    >
      <div className="row">
        <div className="col-md-5">
          <img
            src={imgUrl}
            alt={eventName}
            style={{ width: "100%", borderRadius: 12 }}
            className="m-2"
          />
        </div>
        <div className="col-md-6 d-flex flex-column justify-content-around">
          <h4 ref={eventRef} style={{ fontSize: 25, marginTop: 10 }}>
            {eventName}
          </h4>
          <p className="text-muted">{date}</p>
          <button className="btn btn-danger my-1" onClick={handleDelete}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default RegisteredEvent;
