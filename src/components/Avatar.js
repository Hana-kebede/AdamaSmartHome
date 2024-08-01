import { useMemo } from "react";
import PropTypes from "prop-types";
import "./Avatar.css";

const Avatar = ({
  className = "",
  propBackgroundImage,
  avatarIconAlignSelf,
  avatarIconHeight,
}) => {
  const avatarIconStyle = useMemo(() => {
    return {
      backgroundImage: propBackgroundImage,
      alignSelf: avatarIconAlignSelf,
      height: avatarIconHeight,
    };
  }, [propBackgroundImage, avatarIconAlignSelf, avatarIconHeight]);

  return <img className={`avatar-icon ${className}`} style={avatarIconStyle} />;
};

Avatar.propTypes = {
  className: PropTypes.string,

  /** Style props */
  propBackgroundImage: PropTypes.any,
  avatarIconAlignSelf: PropTypes.any,
  avatarIconHeight: PropTypes.any,
};

export default Avatar;
