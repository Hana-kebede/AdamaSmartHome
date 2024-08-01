import { useMemo } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import PropTypes from "prop-types";
import "./Footer.css";

const Footer = ({
  className = "",
  group12445,
  readMoreButtonWidth,
  readMoreButtonHeight,
}) => {
  const readMoreButtonStyle = useMemo(() => {
    return {
      width: readMoreButtonWidth,
      height: readMoreButtonHeight,
    };
  }, [readMoreButtonWidth, readMoreButtonHeight]);

  return (
    <section className={`footer2 ${className}`}>
      <div className="footer-columns2">
        <img
          className="footer-columns-child"
          loading="lazy"
          alt=""
          src={group12445}
        />
        <div className="footer-location" />
        <h1 className="about-us4">About Us</h1>
        <div className="welcome-to-adama">
          Welcome to Adama Homes, your go-to real estate partner in Adama. We
          specialize in helping you find your dream home, whether you're looking
          to buy or rent. Our dedicated team is committed to making your home
          search seamless and enjoyable.
        </div>
        <Button
          className="read-more-button"
          variant="outline-primary"
          style={readMoreButtonStyle}
        >
          Read More
        </Button>
      </div>
      <div className="footer-columns3">
        <div className="footer-columns-item" />
        <div className="location-placeholder-parent">
          <div className="location-placeholder">
            <div className="div2">40+</div>
          </div>
          <div className="location-title">
            <div className="locations">Locations</div>
          </div>
          <div className="luxury-villas-and">
            luxury villas and private holiday homes, from all across
          </div>
        </div>
        <div className="help-placeholder-parent">
          <div className="location-placeholder">
            <div className="div3">24/7</div>
          </div>
          <div className="location-title">
            <div className="help">Help</div>
          </div>
          <div className="luxury-villas-and">
            24/7 Help service for all customers to guide and support
          </div>
        </div>
      </div>
    </section>
  );
};

Footer.propTypes = {
  className: PropTypes.string,
  group12445: PropTypes.string,

  /** Style props */
  readMoreButtonWidth: PropTypes.any,
  readMoreButtonHeight: PropTypes.any,
};

export default Footer;
