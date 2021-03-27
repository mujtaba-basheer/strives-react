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

    /* console.log(productCustomSizeInfo); */
    /* const sizes = ["garara", "blouse"]; */
    const set = new Set();

    for (let size of productCustomSizeInfo) {
      for (let field of sizeInfo[size]) {
        set.add(field);
      }
    }

    const fields_arr = Array.from(set);
    /* console.log(fields_arr); */
    setSizeChartInputs(fields_arr);

    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, []);

  function setValue(e) {
    /* console.log(e.target.value); */
    setSizeChartValues({
      ...sizeChartValues,
      [e.target.name]: Number(e.target.value),
    });
  }

  function onSubmit(e) {
    e.preventDefault();
    console.log(sizeChartValues);
    onCustomFormSubmit(sizeChartValues);
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
                  />
                  cm
                </div>
              ))}

              {/* <div className="input">
                <p className="label">Enter Length: </p>
                <input type="number" required />
                cm
              </div>

              <div className="input">
                <p className="label">Enter Length: </p>
                <input type="number" required />
                cm
              </div>

              <div className="input">
                <p className="label">Enter Length: </p>
                <input type="number" required />
                cm
              </div>

              <div className="input">
                <p className="label">Enter Length: </p>
                <input type="number" required />
                cm
              </div> */}
            </div>
            <input type="submit" className="submit" value="Submit" />
          </form>

          <p className="disclaimer">
            Disclaimer: Lorem Ipsum is simply dummy text of the printing and
            typesetting industry. Lorem Ipsum has been the industry's standard
            dummy text ever since the 1500s
          </p>
        </div>
      </div>
    </div>
  );
};

export default CustomSizeChart;
