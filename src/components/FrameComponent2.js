import { useMemo } from "react";
import PropTypes from "prop-types";
import "./FrameComponent2.css";

const FrameComponent2 = ({ className = "", languageHeight }) => {
  const languageStyle = useMemo(() => {
    return {
      height: languageHeight,
    };
  }, [languageHeight]);

  return (
    <div className={`social-info-parent ${className}`}>
      <div className="social-info">
        <h2 className="follow-us2">Follow Us</h2>
        <div className="social-links">
          <div className="rectangle-parent8">
            <div className="frame-child23" />
            <a className="akar-iconsinstagram-fill2">
              <img
                className="akar-iconsinstagram-fill3"
                alt=""
                loading="lazy"
                src="/akariconsinstagramfill.svg"
              />
            </a>
          </div>
          <div className="rectangle-parent8">
            <div className="frame-child23" />
            <a className="ant-designyoutube-outlined">
              <img
                className="akar-iconsinstagram-fill3"
                alt=""
                loading="lazy"
                src="/antdesignyoutubeoutlined.svg"
              />
            </a>
          </div>
          <div className="rectangle-parent8">
            <div className="frame-child23" />
            <a className="akar-iconsinstagram-fill2">
              <img
                className="akar-iconsinstagram-fill3"
                alt=""
                loading="lazy"
                src="/simplelineiconssocialtwitter.svg"
              />
            </a>
          </div>
        </div>
      </div>
      <div className="language1" style={languageStyle}>
        <img
          className="android-globe-icon2"
          alt=""
          src="/androidglobe1@2x.png"
        />
        <div className="language-select">
          <div className="english-en1">English - En</div>
          <img className="arrowleft-icon5" alt="" src="/arrowleft@2x.png" />
        </div>
      </div>
    </div>
  );
};

FrameComponent2.propTypes = {
  className: PropTypes.string,

  /** Style props */
  languageHeight: PropTypes.any,
};

export default FrameComponent2;
