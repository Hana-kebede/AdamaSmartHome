import { useMemo } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form } from "react-bootstrap";
import PropTypes from "prop-types";
import "./EmailPassword.css";

const EmailPassword = ({
  className = "",
  eMail,
  propMinWidth,
  emailPasswordInputsMinWidth,
}) => {
  const emailPasswordInputsStyle = useMemo(() => {
    return {
      minWidth: emailPasswordInputsMinWidth,
    };
  }, [emailPasswordInputsMinWidth]);

  return (
    <div className={`email-password ${className}`}>
      <Form className="email-password-inputs" style={emailPasswordInputsStyle}>
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" />
      </Form>
    </div>
  );
};

EmailPassword.propTypes = {
  className: PropTypes.string,
  eMail: PropTypes.string,

  /** Style props */
  propMinWidth: PropTypes.any,
  emailPasswordInputsMinWidth: PropTypes.any,
};

export default EmailPassword;
