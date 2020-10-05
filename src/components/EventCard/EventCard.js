import React from "react";
import { Card } from "react-bootstrap";
import { useHistory } from "react-router-dom";

const EventCard = ({ eventData }) => {
  let history = useHistory();

  let colorArray = [
    "bg-info",
    "bg-warning",
    "bg-primary",
    "bg-danger",
    "bg-success",
  ];

  const onClickHandler = () => {
    history.push(`/register-event/${eventData.type}`);
  };

  return (
    <div className="col-lg-3 col-md-5 col-sm-8 m-3">
      <Card
        style={{
          color: "white",
          textAlign: "center",
          borderRadius: 10,
          cursor: "pointer",
        }}
        className={colorArray[Math.round(Math.random() * 4)]}
        onClick={onClickHandler}
      >
        <Card.Img variant="top" src={eventData.imgUrl} />
        <Card.Body>
          <h5 style={{ fontSize: 21 }}>{eventData.type}</h5>
        </Card.Body>
      </Card>
    </div>
  );
};

export default EventCard;
