import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";

const AddEvent = () => {
  const [eventData, setEventData] = useState({
    type: "",
    imgUrl: "",
  });

  let history = useHistory();

  const [error, setError] = useState("");

  const onAddEvent = (e) => {
    e.preventDefault();
    if (error === "") {
      fetch("https://gentle-plateau-71404.herokuapp.com/admin/add-event", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(eventData),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.successMsg) {
            history.push("/");
          }
        });
    }
  };

  const handleBlur = (e) => {
    if (e.target.value !== "") {
      let newEventData = { ...eventData };
      newEventData[e.target.id] = e.target.value;
      setEventData(newEventData);
      setError("");
    } else {
      setError("All fields are required");
    }
  };

  return (
    <div className="container">
      <div className="row">
        <Sidebar />
        <div className="col-md-9">
          <h4 className="mt-2 py-4">Add event</h4>
          <div
            style={{
              backgroundColor: "#F5F5F5",
              height: "100%",
              border: "1px solid #f5f5f5",
            }}
          >
            <form
              className="m-5 p-5 border-rounded"
              style={{ backgroundColor: "white", borderRadius: 12 }}
              onSubmit={(e) => {
                onAddEvent(e);
              }}
            >
              <div className="form-group">
                <label htmlFor="type">Event title</label>
                <input
                  type="text"
                  className="form-control"
                  id="type"
                  placeholder="Event title"
                  onBlur={(e) => handleBlur(e)}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="imgUrl">Image link</label>
                <input
                  type="url"
                  className="form-control"
                  id="imgUrl"
                  placeholder="image url"
                  onBlur={(e) => handleBlur(e)}
                />
              </div>
              <p className="text-danger my-2">{error}</p>
              <button type="submit" className="btn btn-primary m-2">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddEvent;
