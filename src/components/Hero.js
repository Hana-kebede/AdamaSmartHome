import { useMemo, useCallback } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Avatar from "./Avatar";
import PropTypes from "prop-types";
import "./Hero.css";

const Hero = ({
  className = "",
  rectangle1,
  bihouseDoor,
  navContainerHeight,
  navWrapperFlex,
  onHomeTextClick,
}) => {
  const navContainerStyle = useMemo(() => {
    return {
      height: navContainerHeight,
    };
  }, [navContainerHeight]);

  const navWrapperStyle = useMemo(() => {
    return {
      flex: navWrapperFlex,
    };
  }, [navWrapperFlex]);

  const navigate = useNavigate();

  const onHomeTextClick1 = useCallback(() => {
    navigate("/home-buy");
  }, [navigate]);

  return (
    <section className={`hero ${className}`}>
      <img className="hero-child" alt="" src={rectangle1} />
      <div className="header-wrapper">
        <header className="header4">
          <div className="logo-container">
            <div className="logo-wrapper">
              <img
                className="bihouse-door-icon7"
                loading="lazy"
                alt=""
                src={bihouseDoor}
              />
            </div>
            <div className="adama-homes4">Adama Homes</div>
          </div>
          <div className="nav-container" style={navContainerStyle}>
            <nav className="nav-wrapper" style={navWrapperStyle}>
              <div className="home-link-wrapper">
                <div className="logo-container">
                  <Button
                    className="home3"
                    variant="outline-primary"
                    size="sm"
                    onClick={onHomeTextClick}
                  >
                    Home
                  </Button>
                  <div className="home-link-container-inner">
                    <div className="frame-child26" />
                  </div>
                </div>
              </div>
              <div className="home-link-wrapper">
                <Button
                  className="about-us3"
                  variant="outline-primary"
                  size="sm"
                >
                  About
                </Button>
              </div>
              <div className="home-link-wrapper">
                <Button
                  className="sell-your-house"
                  variant="outline-primary"
                  size="sm"
                >
                  Sell Your House
                </Button>
              </div>
              <Avatar />
            </nav>
          </div>
        </header>
      </div>
      <div className="hero-item" />
      <div className="find-your-dream-house-in-adama-wrapper">
        <h1 className="find-your-dream-container">
          <p className="find-your-dream-house">
            <span className="find-your">{`Find Your `}</span>
            <span>{`Dream House `}</span>
          </p>
          <p className="in-adama">{`in Adama `}</p>
        </h1>
      </div>
      <div className="hero-inner" />
      <div className="hero-child1" />
    </section>
  );
};

Hero.propTypes = {
  className: PropTypes.string,
  rectangle1: PropTypes.string,
  bihouseDoor: PropTypes.string,

  /** Style props */
  navContainerHeight: PropTypes.any,
  navWrapperFlex: PropTypes.any,

  /** Action props */
  onHomeTextClick: PropTypes.func,
};

export default Hero;
