import React from "react";
import "./MapStyles.css";

export default function MapLocation(props) {
  return (
    <circle
      className="location"
      cx={props.position.x}
      cy={props.position.y}
      onClick={props.userSelected}
      r="12"
    />
  );
}
