import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import PropTypes from "prop-types";
import "./FrameComponent3.css";

const FrameComponent3 = ({ className = "" }) => {
  return (
    <section className={`frame-section ${className}`}>
      <div className="rectangle-parent2">
        <div className="frame-child11" />
        <div className="carousel-image-parent">
          <img
            className="carousel-image-icon"
            alt=""
            src="/carousel-image@2x.png"
          />
          <div className="image-caption-parent">
            <img
              className="image-caption-icon"
              alt=""
              src="/image-caption@2x.png"
            />
            <img
              className="image-caption-icon1"
              loading="lazy"
              alt=""
              src="/rectangle-2114@2x.png"
            />
          </div>
        </div>
        <img
          className="carousel-image-icon1"
          loading="lazy"
          alt=""
          src="/rectangle-2115@2x.png"
        />
        <div className="image-caption-group">
          <img
            className="image-caption-icon2"
            loading="lazy"
            alt=""
            src="/rectangle-2116@2x.png"
          />
          <img
            className="image-caption-icon3"
            alt=""
            src="/image-caption1@2x.png"
          />
        </div>
        <div className="frame-parent8">
          <img
            className="frame-child12"
            loading="lazy"
            alt=""
            src="/group-12459@2x.png"
          />
          <div className="rectangle-parent3">
            <div className="frame-child13" />
            <img
              className="arrowleft-icon1"
              loading="lazy"
              alt=""
              src="/arrowleft.svg"
            />
          </div>
        </div>
      </div>
      <div className="carousel-indicators-wrapper">
        <div className="carousel-indicators">
          <div className="indicators" />
          <div className="active-indicator" />
          <div className="indicators" />
          <div className="indicators" />
          <div className="indicators" />
          <div className="indicators" />
        </div>
      </div>
      <div className="frame-wrapper">
        <div className="frame-parent9">
          <div className="frame-parent10">
            <div className="price-highlight-wrapper">
              <div className="price-highlight" />
            </div>
            <div className="frame-parent11">
              <div className="frame-wrapper1">
                <div className="birrmonth-parent">
                  <div className="birrmonth">60,000 Birr/Month</div>
                  <div className="property-details-wrapper">
                    <div className="property-details">
                      <div className="sq-m6">350 sq m</div>
                      <h2 className="living-rooms">2 Living Rooms</h2>
                      <div className="fluentbed-20-regular-parent">
                        <img
                          className="fluentbed-20-regular-icon5"
                          loading="lazy"
                          alt=""
                          src="/fluentbed20regular1.svg"
                        />
                        <h2 className="bedrooms6">2 Bedrooms</h2>
                      </div>
                      <div className="fluentbed-20-regular-parent">
                        <img
                          className="fluentbed-20-regular-icon5"
                          loading="lazy"
                          alt=""
                          src="/cilbath1.svg"
                        />
                        <h2 className="bath6">1 Bath</h2>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="ant-designshare-alt-outlined-wrapper">
                <img
                  className="ant-designshare-alt-outlined-icon"
                  loading="lazy"
                  alt=""
                  src="/antdesignsharealtoutlined.svg"
                />
              </div>
            </div>
          </div>
          <div className="frame-wrapper2">
            <Button
              className="frame-child14"
              variant="outline-primary"
              size="lg"
            >
              RENT
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

FrameComponent3.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent3;
