import LocationRow from "./LocationRow";
import FrameComponent from "./FrameComponent";
import PropTypes from "prop-types";
import "./PropertyFeatures.css";

const PropertyFeatures = ({ className = "" }) => {
  return (
    <div className={`property-features ${className}`}>
      <div className="features-wrapper">
        <h1 className="testimonies">Features</h1>
      </div>
      <div className="feature-list">
        <h2 className="full-kitchen-cabinet-container">
          <ul className="full-kitchen-cabinet">
            <li>Full Kitchen Cabinet</li>
          </ul>
        </h2>
      </div>
      <div className="feature-list1">
        <h2 className="full-kitchen-cabinet-container">
          <ul className="full-kitchen-cabinet">
            <li>{`Laundry Room `}</li>
          </ul>
        </h2>
      </div>
      <div className="feature-list">
        <h2 className="full-kitchen-cabinet-container">
          <ul className="full-kitchen-cabinet">
            <li>{`10 Mbs WiFi `}</li>
          </ul>
        </h2>
      </div>
      <div className="feature-list1">
        <h2 className="full-kitchen-cabinet-container">
          <ul className="full-kitchen-cabinet">
            <li>2 Car Parking</li>
          </ul>
        </h2>
      </div>
      <div className="feature-list">
        <h2 className="full-kitchen-cabinet-container">
          <ul className="full-kitchen-cabinet">
            <li>Security Cameras</li>
          </ul>
        </h2>
      </div>
      <div className="rules-wrapper">
        <h1 className="rules">Rules</h1>
      </div>
      <div className="feature-list5">
        <h2 className="minimum-lease-period-container">
          <ul className="full-kitchen-cabinet">
            <li>Minimum lease period: 3 Months</li>
          </ul>
        </h2>
      </div>
      <div className="feature-list6">
        <h2 className="minimum-lease-period-container">
          <ul className="full-kitchen-cabinet">
            <li>No Pets Allowed</li>
          </ul>
        </h2>
      </div>
      <div className="neighborhood-wrapper">
        <h1 className="testimonies">Neighborhood</h1>
      </div>
      <div className="dream-homes-around-adama-parent">
        <div className="dream-homes-around2">Dream Homes around Adama</div>
        <iframe
          className="screenshot-49-13"
          src="https://www.google.com/maps/@8.5285456,39.2501586,15.27z?entry=ttu"
        />
      </div>
      <div className="property-features-inner">
        <img
          className="frame-child15"
          loading="lazy"
          alt=""
          src="/group-12465.svg"
        />
      </div>
      <LocationRow
        propFlex="unset"
        propWidth="1050.7px"
        mapsAndFlags1="/mapsandflags-11.svg"
      />
      <FrameComponent
        propAlignSelf="stretch"
        propHeight="unset"
        propWidth="unset"
        propAlignSelf1="unset"
        propOverflowX="unset"
        propFlex="unset"
        propFlex1="unset"
        propMinWidth="unset"
        propAlignSelf2="unset"
        icoutlineSchool="/icoutlineschool.svg"
        cilhospital="/cilhospital.svg"
        propAlignSelf3="unset"
        propHeight1="80px"
        vector54="/vector-54.svg"
        fluentfood16Regular="/fluentfood16regular.svg"
        propAlignSelf4="unset"
        propHeight2="80px"
        vector55="/vector-54.svg"
        carbonshoppingCart="/carbonshoppingcart.svg"
        propAlignSelf5="unset"
        propHeight3="80px"
        vector56="/vector-54.svg"
        carbonpiggyBank="/carbonpiggybank.svg"
        propAlignSelf6="unset"
        propHeight4="80px"
        vector57="/vector-54.svg"
        gggym="/gggym.svg"
        policeStationIcon="/vector-54.svg"
        materialSymbolslocalPolic="/materialsymbolslocalpoliceoutline.svg"
        propAlignSelf7="unset"
        propHeight5="80px"
        vector59="/vector-54.svg"
        cilbusAlt="/cilbusalt.svg"
      />
      <div className="testimonies-wrapper">
        <h1 className="testimonies">Testimonies</h1>
      </div>
      <div className="testimonial-carousel">
        <div className="testimonial-cards">
          <div className="aman-parent">
            <h3 className="aman">Aman</h3>
            <div className="rectangle-parent4">
              <div className="frame-child16" />
              <div className="ellipse-wrapper">
                <img
                  className="ellipse-icon"
                  loading="lazy"
                  alt=""
                  src="/ellipse-10@2x.png"
                />
              </div>
              <h3 className="the-house-was-container">
                <p className="the-house-was">
                  “The house was clean, spacious, and well-maintained. The owner
                  was very responsive and helpful throughout the process. I
                  loved my stay in this home!"
                </p>
              </h3>
            </div>
          </div>
        </div>
        <div className="testimonial-cards1">
          <div className="arrowleft-parent">
            <img className="arrowleft-icon2" alt="" src="/arrowleft-1.svg" />
            <div className="ellipse-div" />
          </div>
        </div>
        <div className="testimonial-cards2">
          <div className="arrowleft-parent">
            <div className="frame-child17" />
            <img className="arrowleft-icon3" alt="" src="/arrowleft-2.svg" />
          </div>
        </div>
        <div className="testimonial-cards3">
          <div className="hana-wrapper">
            <h3 className="hana">Hana</h3>
          </div>
          <div className="rectangle-parent5">
            <div className="frame-child18" />
            <img className="frame-child19" alt="" src="/ellipse-10-1@2x.png" />
          </div>
          <blockquote className="the-house-is">
            “The house is in a fantastic location and has all the amenities I
            needed. The owner was very professional. I’m very satisfied with my
            rental.”
          </blockquote>
        </div>
        <div className="rectangle-parent6">
          <div className="frame-child16" />
          <div className="ellipse-group">
            <img
              className="frame-child21"
              loading="lazy"
              alt=""
              src="/ellipse-11@2x.png"
            />
            <div className="ananiya-wrapper">
              <h3 className="ananiya">Ananiya</h3>
            </div>
          </div>
          <div className="fantastic-house-and-friendly-n-wrapper">
            <blockquote className="fantastic-house-and">
              "Fantastic house and friendly neighborhood. Easy rental process!"
            </blockquote>
          </div>
        </div>
      </div>
    </div>
  );
};

PropertyFeatures.propTypes = {
  className: PropTypes.string,
};

export default PropertyFeatures;
