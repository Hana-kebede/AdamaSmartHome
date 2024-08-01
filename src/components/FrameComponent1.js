import PropTypes from "prop-types";
import "./FrameComponent1.css";

const FrameComponent1 = ({ className = "" }) => {
  return (
    <div className={`company-info-parent ${className}`}>
      <div className="company-info">
        <div className="company-logo-name">
          <img className="bihouse-door-icon6" alt="" src="/bihousedoor-1.svg" />
        </div>
        <div className="dream-home4">{`Dream Home `}</div>
      </div>
      <div className="dream-home-is">
        At Adama Homes, we offer a wide range of properties to fit every
        lifestyle and budget. Our experienced professionals work closely with
        sellers to showcase their properties and assist buyers in finding the
        perfect match.
      </div>
    </div>
  );
};

FrameComponent1.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent1;
