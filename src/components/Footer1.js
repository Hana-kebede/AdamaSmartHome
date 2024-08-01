import FrameComponent1 from "./FrameComponent1";
import FrameComponent2 from "./FrameComponent2";
import PropTypes from "prop-types";
import "./Footer1.css";

const Footer1 = ({ className = "" }) => {
  return (
    <footer className={`footer1 ${className}`}>
      <div className="footer-content2">
        <div className="frame-parent12">
          <FrameComponent1 />
          <div className="contact-us-group">
            <h2 className="contact-us3">Contact Us</h2>
            <div className="contact-info-wrapper">
              <div className="contact-info1">
                <div className="deam-home-villas1">
                  Buy/Rent/Sell Homes in Adama, Oromia
                </div>
                <div className="phone1">
                  <img
                    className="call-calling-icon3"
                    loading="lazy"
                    alt=""
                    src="/callcalling.svg"
                  />
                  <h2 className="phone-number5">091-111-1111</h2>
                </div>
                <div className="email2">
                  <img
                    className="darkicon3"
                    loading="lazy"
                    alt=""
                    src="/darkicon.svg"
                  />
                  <h2 className="phone-number5">adamahomes@gmail.com</h2>
                </div>
              </div>
            </div>
          </div>
          <FrameComponent2 />
        </div>
      </div>
      <div className="divider-parent">
        <div className="divider4" />
        <div className="copyright2">
          <div className="alyeska-resor3">
            © 2024 Adama Homes | All Rights Reserved
          </div>
        </div>
      </div>
    </footer>
  );
};

Footer1.propTypes = {
  className: PropTypes.string,
};

export default Footer1;
