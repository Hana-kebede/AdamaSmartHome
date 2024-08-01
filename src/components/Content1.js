import PropTypes from "prop-types";
import "./Content1.css";

const Content1 = ({ className = "" }) => {
  return (
    <section className={`content1 ${className}`}>
      <div className="image-slider">
        <div className="image-slider-child" />
        <div className="slider-navigation">
          <img
            className="active-slide-icon"
            alt=""
            src="/carousel-image@2x.png"
          />
          <div className="slide-indicators">
            <img
              className="slide-indicator-icon"
              alt=""
              src="/image-caption@2x.png"
            />
            <img
              className="slide-indicator-icon1"
              loading="lazy"
              alt=""
              src="/rectangle-2114@2x.png"
            />
          </div>
        </div>
        <img
          className="next-slide-icon"
          loading="lazy"
          alt=""
          src="/rectangle-2115@2x.png"
        />
        <div className="slide-indicators1">
          <img
            className="slide-indicator-icon2"
            alt=""
            src="/rectangle-2116@2x.png"
          />
          <img
            className="slide-indicator-icon3"
            loading="lazy"
            alt=""
            src="/image-caption1@2x.png"
          />
        </div>
        <div className="previous-slide">
          <img
            className="previous-slide-child"
            loading="lazy"
            alt=""
            src="/group-124591@2x.png"
          />
          <div className="rectangle-parent7">
            <div className="frame-child22" />
            <img
              className="arrowleft-icon4"
              loading="lazy"
              alt=""
              src="/arrowleft1.svg"
            />
          </div>
        </div>
      </div>
      <div className="image-counter">
        <div className="image-dots">
          <div className="image-dot" />
          <div className="active-dot" />
          <div className="image-dot" />
          <div className="image-dot" />
          <div className="image-dot" />
          <div className="image-dot" />
        </div>
      </div>
      <div className="property-info1">
        <div className="property-details1">
          <div className="price-wrapper">
            <div className="price" />
          </div>
          <div className="property-features1">
            <div className="features-row">
              <div className="bedroom-info">
                <div className="birr6">30,000,000 Birr</div>
                <div className="bedroom-bathroom-area">
                  <div className="bedroom-bathroom">
                    <div className="sq-m7">350 sq m</div>
                    <div className="bedroom-bathroom-icons">
                      <img
                        className="fluentbed-20-regular-icon6"
                        loading="lazy"
                        alt=""
                        src="/fluentbed20regular1.svg"
                      />
                      <h2 className="bedrooms7">2 Bedrooms</h2>
                    </div>
                    <div className="bedroom-bathroom-icons">
                      <img
                        className="fluentbed-20-regular-icon6"
                        loading="lazy"
                        alt=""
                        src="/cilbath1.svg"
                      />
                      <h2 className="bath7">1 Bath</h2>
                    </div>
                  </div>
                </div>
              </div>
              <div className="action">
                <b className="buy">BUY</b>
              </div>
            </div>
            <div className="share">
              <img
                className="ant-designshare-alt-outlined-icon1"
                loading="lazy"
                alt=""
                src="/antdesignsharealtoutlined.svg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

Content1.propTypes = {
  className: PropTypes.string,
};

export default Content1;
