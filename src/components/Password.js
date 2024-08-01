import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Button } from "react-bootstrap";
import PropTypes from "prop-types";
import "./Password.css";

const Password = ({ className = "" }) => {
  return (
    <div className={`password-01 ${className}`}>
      <h1 className="forgot-password1">Forgot password</h1>
      <div className="enter-your-email">
        Enter your email to reset your password
      </div>
      <div className="frame-parent20">
        <Form className="container">
          <Form.Control type="email" />
        </Form>
        <Button className="button2" variant="outline-primary" size="lg">
          CONTINUE
        </Button>
      </div>
    </div>
  );
};

Password.propTypes = {
  className: PropTypes.string,
};

export default Password;
