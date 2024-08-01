import "bootstrap/dist/css/bootstrap.min.css";
import { Form } from "react-bootstrap";
import FrameComponent4 from "./FrameComponent4";
import PropTypes from "prop-types";
import "./FullNameField.css";

const FullNameField = ({ className = "" }) => {
  return (
    <form className={`full-name-field ${className}`}>
      <div className="full-name-input">
        <div className="full-name-label">
          <div className="full-name">Full Name</div>
        </div>
        <Form className="name-input">
          <Form.Control type="text" />
        </Form>
      </div>
      <div className="name-fields">
        <div className="phone-number-field">
          <FrameComponent4
            propWidth="unset"
            propFlex="1"
            name1="Email address"
            propMinWidth="100px"
          />
        </div>
        <div className="terms-and-policy">
          <div className="phone-number6">Phone Number</div>
          <Form className="policy-link">
            <Form.Control type="number" />
          </Form>
        </div>
        <FrameComponent4
          propWidth="404px"
          propFlex="unset"
          name1="Password"
          propMinWidth="69px"
        />
        <FrameComponent4 name1="Confirm Password" />
      </div>
      <div className="submission">
        <div className="agreement-elements-parent">
          <div className="agreement-elements">
            <div className="agreement-checkbox-wrapper">
              <Form.Check className="agreement-checkbox-formcheck" label />
            </div>
            <div className="i-agree-to-container">
              {`I agree to the `}
              <span className="terms-policy">{`terms & policy`}</span>
            </div>
          </div>
          <div className="agreement-elements1">
            <div className="agreement-checkbox-wrapper">
              <Form.Check className="agreement-checkbox-formcheck" label />
            </div>
            <div className="privacy-policy">Privacy Policy</div>
          </div>
        </div>
      </div>
      <div className="alternative-signup">
        <div className="google-signup">
          <div className="google-button" />
          <div className="google-option">
            <div className="google-info">
              <div className="google-label">
                <div className="or-wrapper">
                  <div className="or">Or</div>
                </div>
              </div>
              <div className="google-login">
                <div className="google-call-to-action">
                  <img
                    className="icons8-google-1"
                    alt=""
                    src="/icons8google-1.svg"
                  />
                  <div className="google-action">
                    <a className="sign-up-with">Sign UP with Google</a>
                  </div>
                </div>
                <div className="existing-account">
                  <div className="have-an-account-container">
                    <span className="have-an-account">Have an account?</span>
                    <span className="span">{`  `}</span>
                    <span className="sign-in">Sign In</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

FullNameField.propTypes = {
  className: PropTypes.string,
};

export default FullNameField;
