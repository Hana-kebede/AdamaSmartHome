import Password from "../components/Password";
import "./ResetPassword.css";

const ResetPassword = () => {
  return (
    <div className="reset-password">
      <div className="reset-password-wrapper">
        <h1 className="reset-password1">Reset Password</h1>
      </div>
      <Password />
    </div>
  );
};

export default ResetPassword;
