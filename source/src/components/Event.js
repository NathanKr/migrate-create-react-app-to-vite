import React from "react";
import "./Event.css";
import eventPagePic from "../images/eventPage-pic.jpg";

const Event = ({ startDt,  title, desc, location }) => {
  const dateTime = startDt;
  
  return (
    <div className="Event">
      <div className="Event-img-container">
        <img src={eventPagePic} alt="event" className="Event-img" />
        <div className="Event-img-inner-container">
          <h5 className="Event-date">{ dateTime }</h5>
        </div>
      </div>

      <div className="Event-desc-container">
        <h4 className="Event-name">{title}</h4>
        <p className="Event-desc">{desc}</p>
        <small>Location : {location}</small>
      </div>
    </div>
  );
};

export default Event;

