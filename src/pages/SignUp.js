import FullNameField from "../components/FullNameField";
import "./SignUp.css";

const SignUp = () => {
  return (
    <div className="sign-up">
      <div className="enter-your-credentials">
        Enter your Credentials to access your account
      </div>
      <div className="sign-up-child" />
      <img
        className="chris-lee-70l1tdai6rm-unsplash-icon"
        loading="lazy"
        alt=""
        src="/chrislee70l1tdai6rmunsplash-1@2x.png"
      />
      <div className="header3">
        <div className="company-logo">
          <div className="logo">
            <div className="home-icon">
              <img
                className="bihouse-door-icon4"
                loading="lazy"
                alt=""
                src="/bihousedoor.svg"
              />
            </div>
            <div className="adama-homes3">Adama Homes</div>
          </div>
          <div className="slogan">
            <h1 className="find-your-dream">Find Your Dream House Now</h1>
          </div>
        </div>
        <div className="form">
          <FullNameField />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
