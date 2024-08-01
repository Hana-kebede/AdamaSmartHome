import { useMemo } from "react";
import PropTypes from "prop-types";
import "./Fireplace.css";

const Fireplace = ({ className = "", firePlace, propMinWidth }) => {
  const firePlaceStyle = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  return (
    <div className={`fireplace ${className}`}>
      <div className="fireplace-icon">
        <div className="fireplace-symbol">
          <img
            className="akar-iconsfire"
            loading="lazy"
            alt=""
            src="/akariconsfire.svg"
          />
        </div>
        <div className="fire-place" style={firePlaceStyle}>
          {firePlace}
        </div>
      </div>
    </div>
  );
};

Fireplace.propTypes = {
  className: PropTypes.string,
  firePlace: PropTypes.string,

  /** Style props */
  propMinWidth: PropTypes.any,
};

export default Fireplace;
