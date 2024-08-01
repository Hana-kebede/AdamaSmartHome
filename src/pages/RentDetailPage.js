import { useCallback } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import FrameComponent3 from "../components/FrameComponent3";
import PropertyFeatures from "../components/PropertyFeatures";
import FrameComponent1 from "../components/FrameComponent1";
import FrameComponent2 from "../components/FrameComponent2";
import "./RentDetailPage.css";

const RentDetailPage = () => {
  const navigate = useNavigate();

  const onHomeTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className="rent-detail-page">
      <div className="header">
        <div className="bihouse-door-parent">
          <img className="bihouse-door-icon1" alt="" src="/bihousedoor.svg" />
          <div className="adama-homes">Adama Homes</div>
        </div>
        <div className="home-parent">
          <div className="home">Home</div>
          <div className="about-us">About Us</div>
          <div className="view-homes-parent">
            <div className="view-homes">View Homes</div>
            <img
              className="riarrow-drop-down-line-icon1"
              alt=""
              src="/riarrowdropdownline.svg"
            />
          </div>
          <div className="login-wrapper">
            <div className="login">Login</div>
          </div>
        </div>
      </div>
      <div className="rent-detail-page-child" />
      <header className="header1">
        <div className="bihouse-door-parent">
          <img className="bihouse-door-icon1" alt="" src="/bihousedoor.svg" />
          <div className="adama-homes1">Adama Homes</div>
        </div>
        <div className="home-group">
          <Button
            className="home1"
            variant="outline-primary"
            size="sm"
            onClick={onHomeTextClick}
          >
            Home
          </Button>
          <Button className="about-us1" variant="outline-primary" size="sm">
            About
          </Button>
          <Button className="frame-inner" variant="outline-primary" size="sm">
            ViewHomes
          </Button>
          <Button className="frame-button" variant="outline-primary">
            LogIn
          </Button>
        </div>
      </header>
      <img className="rent-detail-page-item" alt="" src="/hero-deco.svg" />
      <FrameComponent3 />
      <section className="property-features-wrapper">
        <PropertyFeatures />
      </section>
      <section className="footer">
        <div className="footer-content1">
          <div className="footer-columns1">
            <FrameComponent1 />
            <div className="contact-us-parent">
              <h2 className="contact-us1">Contact Us</h2>
              <div className="address-wrapper">
                <div className="address">
                  <div className="deam-home-villas">
                    Buy/Rent/Sell Homes in Adama, Oromia
                  </div>
                  <div className="phone">
                    <div className="phone-icon1">
                      <img
                        className="call-calling-icon1"
                        alt=""
                        src="/callcalling.svg"
                      />
                    </div>
                    <div className="phone-number2">091-111-1111</div>
                  </div>
                  <div className="email1">
                    <div className="infodreamhomecom">adamahomes@gmail.com</div>
                    <div className="email-icon1">
                      <img
                        className="darkicon1"
                        loading="lazy"
                        alt=""
                        src="/darkicon.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <FrameComponent2 languageHeight="52px" />
          </div>
        </div>
        <footer className="footer-divider">
          <div className="divider1" />
          <div className="copyright1">
            <div className="alyeska-resor1">
              © 2024 Adama Homes | All Rights Reserved
            </div>
          </div>
        </footer>
      </section>
    </div>
  );
};

export default RentDetailPage;
