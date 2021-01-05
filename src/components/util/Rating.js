import React from "react";
import propTypes from "prop-types";

const Rating = ({ value, total, color }) => {
  return (
    <div className="rating">
      <div className="rating__stars">
        {[1, 2, 3, 4, 5].map((num) => (
          <span className="rating__stars--icon" key={num}>
            <i
              style={{ color }}
              className={
                value >= num
                  ? "fas fa-star"
                  : value >= num - 0.5
                  ? "fas fa-star-half-alt"
                  : "fas fa-star"
              }
            />
          </span>
        ))}
      </div>
      <div className="rating__total">
        <p>({total})</p>
      </div>
    </div>
  );
};

Rating.defaultProps = {
  color: "#FFA800",
};

Rating.propTypes = {
  value: propTypes.number.isRequired,
  name: propTypes.string.isRequired,
  total: propTypes.number.isRequired,
  color: propTypes.string,
};

export default Rating;
