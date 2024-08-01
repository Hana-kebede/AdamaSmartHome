import PropTypes from "prop-types";
import "./MapColumn.css";

const MapColumn = ({
  className = "",
  mapsAndFlags5,
  mapsAndFlags1,
  icoutlineSchool,
  pinShape,
  mapsAndFlags11,
  claritydollarLine,
  markerBackground,
}) => {
  return (
    <div className={`map-column ${className}`}>
      <div className="map-cell">
        <div className="map-sub-cell">
          <div className="map-pin-container">
            <div className="maps-and-flags-5-parent">
              <img
                className="maps-and-flags-5-icon"
                loading="lazy"
                alt=""
                src={mapsAndFlags5}
              />
              <div className="map-icon">
                <img
                  className="maps-and-flags-1-icon4"
                  loading="lazy"
                  alt=""
                  src={mapsAndFlags1}
                />
              </div>
            </div>
          </div>
          <div className="map-cell1">
            <div className="map-sub-cell1">
              <div className="maps-and-flags-21">
                <img className="group-icon6" alt="" src="/group.svg" />
                <img
                  className="icoutline-school-icon6"
                  alt=""
                  src={icoutlineSchool}
                />
              </div>
            </div>
            <img
              className="pin-shape-icon"
              loading="lazy"
              alt=""
              src={pinShape}
            />
          </div>
        </div>
        <div className="map-cell2">
          <div className="price-marker">
            <div className="price-icon">
              <img
                className="maps-and-flags-1-icon4"
                loading="lazy"
                alt=""
                src={mapsAndFlags11}
              />
            </div>
            <div className="price-label-container1">
              <div className="separator">
                <img
                  className="claritydollar-line-icon1"
                  alt=""
                  src={claritydollarLine}
                />
              </div>
              <div className="separator1">10,750</div>
              <div className="marker-shape">
                <img
                  className="marker-background-icon"
                  alt=""
                  src={markerBackground}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

MapColumn.propTypes = {
  className: PropTypes.string,
  mapsAndFlags5: PropTypes.string,
  mapsAndFlags1: PropTypes.string,
  icoutlineSchool: PropTypes.string,
  pinShape: PropTypes.string,
  mapsAndFlags11: PropTypes.string,
  claritydollarLine: PropTypes.string,
  markerBackground: PropTypes.string,
};

export default MapColumn;
