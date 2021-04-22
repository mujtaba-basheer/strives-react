import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Slider from "@material-ui/core/Slider";

import "./style.css";

const useStyles = makeStyles({
  root: {
    width: "90%",
  },
});

function valuetext(value) {
  return `${value}°C`;
}

export default function RangeSlider({ setProductslidervalue }) {
  const classes = useStyles();
  const [value, setValue] = React.useState([100, 200000]);

  setProductslidervalue(value);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Slider
        value={value}
        step={1}
        min={100}
        max={10000}
        onChange={handleChange}
        valueLabelDisplay="auto"
        aria-labelledby="range-slider"
        getAriaValueText={valuetext}
      />

      <div className="productslider-details">
        <div className="min">
          <p className="min__value">{value[0]}</p>
          <p className="min__heading">Min</p>
        </div>

        <div className="max">
          <p className="max__value">{value[1]}</p>
          <p className="max__heading">Max</p>
        </div>
      </div>
    </div>
  );
}
