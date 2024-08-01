import { useMemo } from "react";
import PropTypes from "prop-types";
import "./LocationRow.css";

const LocationRow = ({
  className = "",
  propFlex,
  propWidth,
  mapsAndFlags1,
}) => {
  const locationColumnStyle = useMemo(() => {
    return {
      flex: propFlex,
      width: propWidth,
    };
  }, [propFlex, propWidth]);

  return (
    <div className={`location-row ${className}`}>
      <div className="location-column" style={locationColumnStyle}>
        <div className="location">
          <div className="maps-and-flags-32">
            <img className="group-icon3" alt="" src="/group.svg" />
            <img
              className="icoutline-school-icon3"
              loading="lazy"
              alt=""
              src="/icoutlineschool.svg"
            />
          </div>
        </div>
        <div className="school-location">
          <div className="maps-and-flags-2">
            <img className="group-icon3" alt="" src="/group.svg" />
            <img
              className="icoutline-school-icon3"
              alt=""
              src="/icoutlineschool.svg"
            />
          </div>
        </div>
        <div className="financial-location">
          <div className="financial-marker">
            <div className="financial-icon">
              <img
                className="maps-and-flags-1-icon3"
                loading="lazy"
                alt=""
                src={mapsAndFlags1}
              />
            </div>
            <div className="financial-label">
              <div className="financial-name">
                <img
                  className="claritydollar-line-icon"
                  loading="lazy"
                  alt=""
                  src="/claritydollarline.svg"
                />
              </div>
              <div className="financial-placeholder">10,750</div>
            </div>
          </div>
        </div>
        <div className="maps-and-flags-1-icon3">
          <img className="group-icon3" alt="" src="/group.svg" />
          <img
            className="icoutline-school-icon3"
            alt=""
            src="/icoutlineschool.svg"
          />
        </div>
      </div>
    </div>
  );
};

LocationRow.propTypes = {
  className: PropTypes.string,
  mapsAndFlags1: PropTypes.string,

  /** Style props */
  propFlex: PropTypes.any,
  propWidth: PropTypes.any,
};

export default LocationRow;
