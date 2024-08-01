import { useMemo } from "react";
import PropTypes from "prop-types";
import "./AmenityIcons.css";

const AmenityIcons = ({
  className = "",
  propPadding,
  laundryFacilities,
  propTextAlign,
  propMinWidth,
  propWidth,
}) => {
  const amenityIconsStyle = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const laundryFacilitiesStyle = useMemo(() => {
    return {
      textAlign: propTextAlign,
      minWidth: propMinWidth,
      width: propWidth,
    };
  }, [propTextAlign, propMinWidth, propWidth]);

  return (
    <div className={`amenity-icons ${className}`} style={amenityIconsStyle}>
      <div className="amenity-pair">
        <div className="amenity-icon">
          <img
            className="icoutline-local-laundry-servi-icon"
            loading="lazy"
            alt=""
            src="/icoutlinelocallaundryservice.svg"
          />
        </div>
        <div className="laundry-facilities" style={laundryFacilitiesStyle}>
          {laundryFacilities}
        </div>
      </div>
    </div>
  );
};

AmenityIcons.propTypes = {
  className: PropTypes.string,
  laundryFacilities: PropTypes.string,

  /** Style props */
  propPadding: PropTypes.any,
  propTextAlign: PropTypes.any,
  propMinWidth: PropTypes.any,
  propWidth: PropTypes.any,
};

export default AmenityIcons;
