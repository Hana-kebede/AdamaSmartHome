import Hero from "../components/Hero";
import Content from "../components/Content";
import Footer from "../components/Footer";
import "./HomeBuy.css";

const HomeBuy = () => {
  return (
    <div className="home-buy">
      <Hero
        rectangle1="/feature-rect@2x.png"
        bihouseDoor="/bihousedoor.svg"
        navContainerHeight="unset"
        navWrapperFlex="unset"
      />
      <img className="hero-deco-icon" alt="" src="/hero-deco.svg" />
      <Content />
      <img className="subtract-icon" alt="" src="/subtract.svg" />
      <Footer
        group12445="/group-12445@2x.png"
        readMoreButtonWidth="unset"
        readMoreButtonHeight="unset"
      />
      <section className="contact-background" />
      <section className="contact-us-form">
        <div className="form-content">
          <div className="form-fields">
            <div className="form-input-fields">
              <div className="form-title">
                <h1 className="did-you-find-container">
                  <span>{`Did You Find Your `}</span>
                  <span className="dream-home">Dream Home?</span>
                </h1>
                <h1 className="thank-you-for">
                  Thank you for getting in touch! if you find your dream home
                  connect with us
                </h1>
              </div>
            </div>
            <div className="input-fields">
              <div className="name-phone">
                <div className="name-phone-input">
                  <div className="name-phone-fields">
                    <div className="name-phone">
                      <input className="your-name" type="text" />
                      <img
                        className="name-phone-icons"
                        alt=""
                        src="/name-phone-icons.svg"
                      />
                    </div>
                    <div className="name-phone">
                      <input className="phone-number" type="text" />
                      <img
                        className="name-phone-icons"
                        alt=""
                        src="/name-phone-icons.svg"
                      />
                    </div>
                    <textarea className="message" />
                  </div>
                  <div className="name-phone-fields">
                    <div className="name-phone">
                      <input className="your-email" type="text" />
                      <img
                        className="name-phone-icons"
                        alt=""
                        src="/email-icon.svg"
                      />
                    </div>
                    <a className="interested-field">
                      <div className="interested-input">
                        <div className="interested-in-wrapper">
                          <div className="interested-in">Interested in</div>
                        </div>
                        <img
                          className="riarrow-drop-down-line-icon"
                          alt=""
                          src="/riarrowdropdownline.svg"
                        />
                      </div>
                      <img
                        className="name-phone-icons"
                        alt=""
                        src="/email-icon.svg"
                      />
                    </a>
                  </div>
                </div>
                <img className="submit-icon" alt="" src="/submit-icon.svg" />
              </div>
              <div className="submit-button">
                <div className="submit">Submit</div>
              </div>
            </div>
          </div>
        </div>
        <footer className="footer-content-wrapper">
          <div className="footer-content">
            <div className="footer-columns">
              <div className="dream-home-column">
                <div className="dream-home-title-icon">
                  <img
                    className="bihouse-door-icon"
                    loading="lazy"
                    alt=""
                    src="/bihousedoor-1.svg"
                  />
                </div>
                <div className="dream-home1">{`Dream Home `}</div>
              </div>
              <div className="at-adama-homes">
                At Adama Homes, we offer a wide range of properties to fit every
                lifestyle and budget. Our experienced professionals work closely
                with sellers to showcase their properties and assist buyers in
                finding the perfect match.
              </div>
            </div>
            <div className="contact-column">
              <h2 className="contact-us">Contact Us</h2>
              <div className="buyrentsell-homes-in">
                Buy/Rent/Sell Homes in Adama, Oromia
              </div>
              <div className="contact-details">
                <div className="phone-number1">
                  <div className="phone-icon">
                    <img
                      className="call-calling-icon"
                      loading="lazy"
                      alt=""
                      src="/callcalling.svg"
                    />
                  </div>
                  <div className="div">091-111-1111</div>
                </div>
                <div className="email">
                  <img
                    className="darkicon"
                    loading="lazy"
                    alt=""
                    src="/darkicon.svg"
                  />
                  <div className="adhomesgmailcom">adhomes@gmail.com</div>
                </div>
              </div>
            </div>
            <div className="follow-us-column">
              <div className="follow-us-content">
                <h2 className="follow-us">Follow Us</h2>
                <div className="social-media">
                  <div className="social-media-backgrounds-parent">
                    <div className="social-media-backgrounds" />
                    <img
                      className="akar-iconsinstagram-fill"
                      loading="lazy"
                      alt=""
                      src="/akariconsinstagramfill.svg"
                    />
                  </div>
                  <div className="social-media-backgrounds-parent">
                    <div className="social-media-backgrounds" />
                    <img
                      className="ant-designyoutube-outlined-icon"
                      loading="lazy"
                      alt=""
                      src="/antdesignyoutubeoutlined.svg"
                    />
                  </div>
                  <div className="social-media-backgrounds-parent">
                    <div className="social-media-backgrounds" />
                    <img
                      className="akar-iconsinstagram-fill"
                      loading="lazy"
                      alt=""
                      src="/simplelineiconssocialtwitter.svg"
                    />
                  </div>
                </div>
              </div>
              <button className="language">
                <img
                  className="android-globe-icon"
                  alt=""
                  src="/androidglobe@2x.png"
                />
                <div className="english-en-parent">
                  <div className="english-en">English - En</div>
                  <img
                    className="arrowleft-icon"
                    alt=""
                    src="/arrowleft@2x.png"
                  />
                </div>
              </button>
            </div>
          </div>
        </footer>
        <div className="divider" />
        <div className="copyright">
          <div className="alyeska-resor">
            © 2024 Adama Homes | All Rights Reserved
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeBuy;
