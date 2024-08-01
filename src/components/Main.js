import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import EmailPassword from "./EmailPassword";
import PropTypes from "prop-types";
import "./Main.css";

const Main = ({ className = "" }) => {
  return (
    <form className={`main ${className}`}>
      <div className="sign-in-form">
        <h1 className="sign-in1">Sign In.</h1>
      </div>
      <div className="input-fields1">
        <a className="google-sign-in">
          <div className="google-sign-in-child" />
          <img className="google-logo-icon" alt="" src="/google-logo.svg" />
          <div className="continue-with-google">Continue with Google</div>
        </a>
        <div className="separator2">
          <div className="or1">or</div>
        </div>
        <EmailPassword />
        <EmailPassword emailPasswordInputsMinWidth="unset" />
      </div>
      <div className="sign-in-button">
        <Button className="sign-in-action" variant="outline-primary" size="lg">
          SignIn
        </Button>
      </div>
    </form>
  );
};

Main.propTypes = {
  className: PropTypes.string,
};

export default Main;
