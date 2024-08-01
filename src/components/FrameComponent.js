import { useMemo } from "react";
import PropTypes from "prop-types";
import "./FrameComponent.css";

const FrameComponent = ({
  className = "",
  propAlignSelf,
  propHeight,
  propWidth,
  propAlignSelf1,
  propOverflowX,
  propFlex,
  propFlex1,
  propMinWidth,
  propAlignSelf2,
  icoutlineSchool,
  cilhospital,
  propAlignSelf3,
  propHeight1,
  vector54,
  fluentfood16Regular,
  propAlignSelf4,
  propHeight2,
  vector55,
  carbonshoppingCart,
  propAlignSelf5,
  propHeight3,
  vector56,
  carbonpiggyBank,
  propAlignSelf6,
  propHeight4,
  vector57,
  gggym,
  policeStationIcon,
  materialSymbolslocalPolic,
  propAlignSelf7,
  propHeight5,
  vector59,
  cilbusAlt,
}) => {
  const frameDiv1Style = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
      height: propHeight,
      width: propWidth,
    };
  }, [propAlignSelf, propHeight, propWidth]);

  const amenitiesContainerStyle = useMemo(() => {
    return {
      alignSelf: propAlignSelf1,
      overflowX: propOverflowX,
      flex: propFlex,
    };
  }, [propAlignSelf1, propOverflowX, propFlex]);

  const schoolAmenityStyle = useMemo(() => {
    return {
      flex: propFlex1,
      minWidth: propMinWidth,
    };
  }, [propFlex1, propMinWidth]);

  const schoolIconContainerStyle = useMemo(() => {
    return {
      alignSelf: propAlignSelf2,
    };
  }, [propAlignSelf2]);

  const amenitiesListStyle = useMemo(() => {
    return {
      alignSelf: propAlignSelf3,
      height: propHeight1,
    };
  }, [propAlignSelf3, propHeight1]);

  const amenitiesList1Style = useMemo(() => {
    return {
      alignSelf: propAlignSelf4,
      height: propHeight2,
    };
  }, [propAlignSelf4, propHeight2]);

  const amenitiesList2Style = useMemo(() => {
    return {
      alignSelf: propAlignSelf5,
      height: propHeight3,
    };
  }, [propAlignSelf5, propHeight3]);

  const amenitiesList3Style = useMemo(() => {
    return {
      alignSelf: propAlignSelf6,
      height: propHeight4,
    };
  }, [propAlignSelf6, propHeight4]);

  const amenitiesList4Style = useMemo(() => {
    return {
      alignSelf: propAlignSelf7,
      height: propHeight5,
    };
  }, [propAlignSelf7, propHeight5]);

  return (
    <div
      className={`amenities-container-wrapper ${className}`}
      style={frameDiv1Style}
    >
      <div className="amenities-container" style={amenitiesContainerStyle}>
        <div className="amenities-container-child" />
        <div className="school-amenity" style={schoolAmenityStyle}>
          <div
            className="school-icon-container"
            style={schoolIconContainerStyle}
          >
            <div className="school-icon-container-child" />
            <img
              className="icoutline-school-icon7"
              alt=""
              src={icoutlineSchool}
            />
            <div className="school-label-container">
              <b className="school">School</b>
            </div>
          </div>
        </div>
        <div className="amenities-list">
          <div className="amenity-items">
            <img className="cilhospital-icon" alt="" src={cilhospital} />
            <div className="school-label-container">
              <div className="hospital">Hospital</div>
            </div>
          </div>
        </div>
        <div className="amenities-list1" style={amenitiesListStyle}>
          <img className="amenities-list-child" alt="" src={vector54} />
        </div>
        <div className="amenities-list2">
          <div className="amenity-items">
            <img
              className="cilhospital-icon"
              alt=""
              src={fluentfood16Regular}
            />
            <div className="school-label-container">
              <div className="restaurants">Restaurants</div>
            </div>
          </div>
        </div>
        <div className="amenities-list3" style={amenitiesList1Style}>
          <img className="amenities-list-child" alt="" src={vector55} />
        </div>
        <div className="amenities-list">
          <div className="amenity-items">
            <img className="cilhospital-icon" alt="" src={carbonshoppingCart} />
            <div className="school-label-container">
              <div className="groceries">Groceries</div>
            </div>
          </div>
        </div>
        <div className="amenities-list5" style={amenitiesList2Style}>
          <img className="amenities-list-child" alt="" src={vector56} />
        </div>
        <div className="amenities-list6">
          <div className="amenity-items">
            <img className="cilhospital-icon" alt="" src={carbonpiggyBank} />
            <div className="school-label-container">
              <div className="bank">Bank</div>
            </div>
          </div>
        </div>
        <div className="amenities-list7" style={amenitiesList3Style}>
          <img className="amenities-list-child" alt="" src={vector57} />
        </div>
        <div className="amenities-list8">
          <div className="amenity-items">
            <img className="cilhospital-icon" alt="" src={gggym} />
            <div className="school-label-container">
              <div className="gym">Gym</div>
            </div>
          </div>
        </div>
        <div className="police-station-amenity">
          <img className="police-station-icon" alt="" src={policeStationIcon} />
          <div className="police-station-container">
            <img
              className="material-symbolslocal-police-icon"
              alt=""
              src={materialSymbolslocalPolic}
            />
          </div>
          <div className="police-station-label-container">
            <div className="police-station">Police Station</div>
          </div>
        </div>
        <div className="amenities-list9" style={amenitiesList4Style}>
          <img className="amenities-list-child" alt="" src={vector59} />
        </div>
        <div className="police-station-container">
          <div className="amenity-items">
            <img className="cilhospital-icon" alt="" src={cilbusAlt} />
            <div className="school-label-container">
              <div className="bus-stop">Bus Stop</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
  icoutlineSchool: PropTypes.string,
  cilhospital: PropTypes.string,
  vector54: PropTypes.string,
  fluentfood16Regular: PropTypes.string,
  vector55: PropTypes.string,
  carbonshoppingCart: PropTypes.string,
  vector56: PropTypes.string,
  carbonpiggyBank: PropTypes.string,
  vector57: PropTypes.string,
  gggym: PropTypes.string,
  policeStationIcon: PropTypes.string,
  materialSymbolslocalPolic: PropTypes.string,
  vector59: PropTypes.string,
  cilbusAlt: PropTypes.string,

  /** Style props */
  propAlignSelf: PropTypes.any,
  propHeight: PropTypes.any,
  propWidth: PropTypes.any,
  propAlignSelf1: PropTypes.any,
  propOverflowX: PropTypes.any,
  propFlex: PropTypes.any,
  propFlex1: PropTypes.any,
  propMinWidth: PropTypes.any,
  propAlignSelf2: PropTypes.any,
  propAlignSelf3: PropTypes.any,
  propHeight1: PropTypes.any,
  propAlignSelf4: PropTypes.any,
  propHeight2: PropTypes.any,
  propAlignSelf5: PropTypes.any,
  propHeight3: PropTypes.any,
  propAlignSelf6: PropTypes.any,
  propHeight4: PropTypes.any,
  propAlignSelf7: PropTypes.any,
  propHeight5: PropTypes.any,
};

export default FrameComponent;
