import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import Main from "../components/Main";
import "./SignIn.css";

const SignIn = () => {
  return (
    <div className="signin">
      <Main />
      <div className="account-options">
        <div className="account-management">
          <div className="account-actions">
            <div className="account-creation">
              <div className="dont-have-an">{`don’t have an account? `}</div>
            </div>
            <Button
              className="create-a-account"
              variant="outline-primary"
              size="lg"
            >
              Create account
            </Button>
          </div>
          <div className="password-reset">
            <Button className="forgot-password" variant="outline-primary">
              Forgot-Password
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
