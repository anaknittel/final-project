import React from "react";

export default function Date(props) {
  let day = props.date.getDay();
  return <div>{day}, 14th June, 19:50</div>;
}
