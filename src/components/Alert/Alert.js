/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState, useEffect } from "react";
import "./alert.css";

const Alert = ({ type, text }) => {
  const [alertType, setAlertType] = useState("danger");
  const [isClose, setIsClose] = useState(null);

  useEffect(() => {
    switch (type) {
      case "success":
        setAlertType("success");
        break;
      case "danger":
        setAlertType("danger");
        break;
      default:
        setAlertType("danger");
        break;
    }

    setTimeout(() => {
      setIsClose("close");
    }, 3000);
  }, [type]);

  return (
    <div
      className={`custom-alert custom-alert--${alertType} custom-alert--${isClose}`}
    >
      <h1 className="custom-alert__text">{text}</h1>
    </div>
  );
};

export default Alert;
