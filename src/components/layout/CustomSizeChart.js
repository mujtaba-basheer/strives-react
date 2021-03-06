
import React, { useEffect, useState } from "react";
import { sizeInfo } from "./customsizemodaldata";

const CustomSizeChart = ({
  setShowCustomSizeChart,
  productCustomSizeInfo,
  onCustomFormSubmit,
}) => {
  const [sizeChartInputs, setSizeChartInputs] = useState([]);
  const [sizeChartValues, setSizeChartValues] = useState({});

  function hideCustomSizeChart() {
    setShowCustomSizeChart("false");
    document.getElementsByTagName("body")[0].style.overflow = "auto";
  }

  function escFunction(e) {
    if (e.keyCode === 27) hideCustomSizeChart();
  }

  function handleClickOutside(e) {
    if (e.target.className === "customsizechartmodal") {
      hideCustomSizeChart();
    }
  }

  useEffect(() => {
    document.addEventListener("keydown", escFunction, false);
    document.addEventListener("click", handleClickOutside, true);
    if (document.getElementById("customsizechartmodal").display === "flex") {
      document.getElementsByTagName("body")[0].style.overflow = "hidden";
    }

    const set = new Set();

    for (let size of productCustomSizeInfo) {
      for (let field of sizeInfo[size]) {
        set.add(field);
      }
    }

    const fields_arr = Array.from(set);
    setSizeChartInputs(fields_arr);

    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, []);

  function setValue(e) {
    setSizeChartValues({
      ...sizeChartValues,
      [e.target.name]: Number(e.target.value),
    });
  }

  function onSubmit(e) {
    e.preventDefault();
    onCustomFormSubmit(sizeChartValues);
    hideCustomSizeChart();
  }

  return (
    <div id="customsizechartmodal" className="customsizechartmodal">
      <div className="customsizechartmodal__content flex">
        <span
          onClick={hideCustomSizeChart}
          className="customsizechartmodal__close"
        >
          &times;
        </span>

        <div className="customsizechart__container flex">
          <p className="heading">Custom Size Enquiry</p>
          <form
            onSubmit={(e) => {
              onSubmit(e);
            }}
          >
            <div className="inputarea">
              {sizeChartInputs.map((sizeChartInput) => (
                <div key={sizeChartInput} className="input">
                  <label className="label">Enter {sizeChartInput}:</label>
                  <input
                    type="number"
                    id={sizeChartInput}
                    name={sizeChartInput}
                    onChange={(e) => setValue(e)}
                    required
                  />{" "}
                  inches
                </div>
              ))}
            </div>
            <input type="submit" className="submit" value="Submit" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default CustomSizeChart;
