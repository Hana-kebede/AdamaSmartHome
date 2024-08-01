import LocationRow from "./LocationRow";
import PropTypes from "prop-types";
import "./NearbyLocations.css";

const NearbyLocations = ({ className = "" }) => {
  return (
    <div className={`nearby-locations ${className}`}>
      <div className="location-grid">
        <img
          className="location-grid-child"
          loading="lazy"
          alt=""
          src="/group-12465.svg"
        />
        <LocationRow mapsAndFlags1="/mapsandflags-11.svg" />
      </div>
    </div>
  );
};

NearbyLocations.propTypes = {
  className: PropTypes.string,
};

export default NearbyLocations;
