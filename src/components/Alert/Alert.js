/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState, useEffect } from "react";
import "./alert.css";

const Alert = ({ type, text, background, timer }) => {
  const [alertType, setAlertType] = useState("danger");
  const [isClose, setIsClose] = useState(null);

  useEffect(() => {
    console.log(type)
    switch (type) {
      case "success":
        if (background === "true") {
          setAlertType("success-bg");
        } else {
          setAlertType("success");
        }
        break;
      case "danger":
        if (background === "true") {
          setAlertType("danger-bg");
        } else {
          setAlertType("danger");
        }
        break;
      default:
        setAlertType("danger");
        break;
    }

    console.log(timer);

    if (timer > 0) {
      setTimeout(() => {
        setIsClose("close");
      }, timer);
    }
  }, [type, background]);

  return (
    <div
      className={`custom-alert custom-alert--${alertType} custom-alert--${isClose} flex`}
    >
      <h1 className="custom-alert__text">{text}</h1>
      {timer === 0 && <span className="closeicon-alert">&times;</span>}
    </div>
  );
};

export default Alert;
