import React, { useEffect, useState } from "react";
import EventCard from "../EventCard/EventCard";

const EventContainer = () => {
  const [eventsArray, setEventsArray] = useState([]);

  useEffect(() => {
    fetch("https://gentle-plateau-71404.herokuapp.com/all-events")
      .then((response) => response.json())
      .then((data) => setEventsArray(data));
  }, []);

  return (
    <div className="container">
      <div className="row d-flex justify-content-center">
        {eventsArray.map((event) => (
          <EventCard key={event._id} eventData={event} />
        ))}
      </div>
    </div>
  );
};

export default EventContainer;
