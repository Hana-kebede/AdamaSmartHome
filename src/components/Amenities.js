import AmenityIcons from "./AmenityIcons";
import Fireplace from "./Fireplace";
import PropTypes from "prop-types";
import "./Amenities.css";

const Amenities = ({ className = "" }) => {
  return (
    <div className={`amenities ${className}`}>
      <div className="amenities-row">
        <AmenityIcons laundryFacilities="Laundry Facilities" />
        <AmenityIcons
          propPadding="10px 0px 0px"
          laundryFacilities="Walk In Closet"
          propTextAlign="center"
          propMinWidth="109px"
          propWidth="109px"
        />
        <Fireplace firePlace="Fire Place" />
        <div className="balcony">
          <div className="balcony-icon">
            <img
              className="icbaseline-balcony-icon"
              loading="lazy"
              alt=""
              src="/icoutlinelocallaundryservice2.svg"
            />
          </div>
          <div className="balcony1">Balcony</div>
        </div>
        <Fireplace firePlace="Garden" propMinWidth="61px" />
      </div>
    </div>
  );
};

Amenities.propTypes = {
  className: PropTypes.string,
};

export default Amenities;
