import { useMemo } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form } from "react-bootstrap";
import PropTypes from "prop-types";
import "./FrameComponent4.css";

const FrameComponent4 = ({
  className = "",
  propWidth,
  propFlex,
  name1,
  propMinWidth,
  name2,
  propMinWidth1,
}) => {
  const frameDivStyle = useMemo(() => {
    return {
      width: propWidth,
      flex: propFlex,
    };
  }, [propWidth, propFlex]);

  const nameStyle = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  return (
    <div className={`frame-parent13 ${className}`} style={frameDivStyle}>
      <div className="name-wrapper">
        <div className="name" style={nameStyle}>
          {name1}
        </div>
      </div>
      <Form className="wrapper">
        <Form.Control type="password" name="password" id="password" />
      </Form>
    </div>
  );
};

FrameComponent4.propTypes = {
  className: PropTypes.string,
  name1: PropTypes.string,
  name2: PropTypes.string,

  /** Style props */
  propWidth: PropTypes.any,
  propFlex: PropTypes.any,
  propMinWidth: PropTypes.any,
  propMinWidth1: PropTypes.any,
};

export default FrameComponent4;
