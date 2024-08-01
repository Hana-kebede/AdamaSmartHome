import { useMemo } from "react";
import PropTypes from "prop-types";
import "./Button.css";

const Button = ({
  className = "",
  hasIconEnd = false,
  hasIconStart = false,
  label = "Rent",
  propBackground,
  star,
  propMinWidth,
  x,
  buttonBackgroundColor,
}) => {
  const buttonStyle = useMemo(() => {
    return {
      background: propBackground,
      backgroundColor: buttonBackgroundColor,
    };
  }, [propBackground, buttonBackgroundColor]);

  const button1Style = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  return (
    <button className={`button ${className}`} style={buttonStyle}>
      {hasIconStart && <img className="star-icon" alt="" src={star} />}
      <div className="button1" style={button1Style}>
        {label}
      </div>
      {hasIconEnd && <img className="star-icon" alt="" src={x} />}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  hasIconEnd: PropTypes.bool,
  hasIconStart: PropTypes.bool,
  label: PropTypes.string,
  star: PropTypes.string,
  x: PropTypes.string,

  /** Style props */
  propBackground: PropTypes.any,
  propMinWidth: PropTypes.any,
  buttonBackgroundColor: PropTypes.any,
};

export default Button;
