import React from "react";
import "./UTC.css";

export default function UTC(props) {
  let realUTC = props.UTC;
  if (realUTC > 0) {
    realUTC = `+${realUTC}`;
  }

  return <div className="utc">UTC {realUTC}</div>;
}
