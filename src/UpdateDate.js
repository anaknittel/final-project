import React from "react";
import "./UpdateDate.css";

export default function updateTime(props) {
  let date = new Date(props.updateTime.dt * 1000);
  let pcDate = new Date();
  let timeDiff = Math.round((pcDate - date) / (1000 * 60));

  return (
    <div className="string">
      <strong>Last update:</strong> {""}
      {timeDiff} minutes ago
    </div>
  );
}
