import { useCallback, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Hero from "../components/Hero";
import ActionsWrapper from "../components/ActionsWrapper";
import Footer from "../components/Footer";
import "./HomeRent.css";

const HomeRent = () => {
  const navigate = useNavigate();

  const onHomeTextClick = useCallback(() => {
    navigate("/home-buy");
  }, [navigate]);

  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add("animate");
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      }
    );

    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }

    return () => {
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.unobserve(scrollAnimElements[i]);
      }
    };
  }, []);
  return (
    <div className="home-rent">
      <Hero
        rectangle1="/feature-rect@2x.png"
        bihouseDoor="/bihousedoor.svg"
        onHomeTextClick={onHomeTextClick}
      />
      <div className="content-wrapper">
        <iframe
          className="screenshot-49-11"
          src="https://www.google.com/maps/@8.551378,39.2829899,13z?entry=ttu"
        />
        <div className="maps-and-flags-3">
          <img className="group-icon" alt="" src="/group.svg" />
          <img
            className="icoutline-school-icon"
            alt=""
            src="/icoutlineschool.svg"
          />
        </div>
      </div>
      <img className="home-rent-child" alt="" src="/hero-deco.svg" />
      <ActionsWrapper />
      <img className="subtract-icon1" alt="" src="/subtract.svg" />
      <Footer group12445="/group-124451@2x.png" />
      <section className="contact-form" />
      <section className="form-container">
        <div className="form-inner-container">
          <div className="form-content1">
            <div className="form-heading">
              <div className="find-home-heading">
                <h1 className="did-you-find-container1">
                  <span>{`Did You Find Your `}</span>
                  <span className="dream-home2">Dream Home?</span>
                </h1>
                <h1 className="thank-you-for1">
                  Thank you for getting in touch! if you find your dream home
                  connect with us
                </h1>
              </div>
            </div>
            <div className="form-inputs">
              <div className="name-phone-inputs">
                <div className="name-phone-container">
                  <div className="name-phone-fields1">
                    <div className="name-phone-inputs">
                      <Form className="your-name1" data-animate-on-scroll>
                        <Form.Label>Your Name</Form.Label>
                        <Form.Control type="text" />
                      </Form>
                      <img
                        className="message-label-icon"
                        alt=""
                        src="/name-phone-icons.svg"
                      />
                    </div>
                    <div className="name-phone-inputs">
                      <Form className="phone-number3">
                        <Form.Label>Phone Number</Form.Label>
                        <Form.Control type="text" />
                      </Form>
                      <img
                        className="message-label-icon"
                        alt=""
                        src="/name-phone-icons.svg"
                      />
                    </div>
                    <Form.Group className="message-formgroup">
                      <Form.Label>Message</Form.Label>
                      <Form.Control as="textarea" defaultValue="" />
                    </Form.Group>
                  </div>
                  <div className="name-phone-fields1">
                    <div className="name-phone-inputs">
                      <Form className="your-email1">
                        <Form.Label>Your Email</Form.Label>
                        <Form.Control type="text" />
                      </Form>
                      <img
                        className="message-label-icon"
                        alt=""
                        src="/email-icon.svg"
                      />
                    </div>
                    <a className="interested-label">
                      <select className="dropdown-label" />
                      <img
                        className="message-label-icon"
                        alt=""
                        src="/email-icon.svg"
                      />
                    </a>
                  </div>
                </div>
                <img className="home-icon1" alt="" src="/submit-icon.svg" />
              </div>
              <Button className="dream-home-title" variant="outline-primary">
                Submit
              </Button>
            </div>
          </div>
        </div>
        <footer className="contact-info">
          <div className="contact-details1">
            <div className="phone-info">
              <div className="phone-number4">
                <div className="call-icon">
                  <img
                    className="bihouse-door-icon5"
                    loading="lazy"
                    alt=""
                    src="/bihousedoor-1.svg"
                  />
                </div>
                <div className="dream-home3">{`Dream Home `}</div>
              </div>
              <div className="at-adama-homes1">
                At Adama Homes, we offer a wide range of properties to fit every
                lifestyle and budget. Our experienced professionals work closely
                with sellers to showcase their properties and assist buyers in
                finding the perfect match.
              </div>
            </div>
            <div className="follow-info">
              <h2 className="contact-us2">Contact Us</h2>
              <div className="buyrentsell-homes-in1">
                Buy/Rent/Sell Homes in Adama, Oromia
              </div>
              <div className="social-media-container">
                <div className="language-selector">
                  <div className="globe-icon">
                    <img
                      className="call-calling-icon2"
                      loading="lazy"
                      alt=""
                      src="/callcalling.svg"
                    />
                  </div>
                  <div className="div1">091-111-1111</div>
                </div>
                <div className="footer-divider1">
                  <img
                    className="darkicon2"
                    loading="lazy"
                    alt=""
                    src="/darkicon.svg"
                  />
                  <div className="adhomesgmailcom1">adhomes@gmail.com</div>
                </div>
              </div>
            </div>
            <div className="footer-info">
              <div className="contact-us-title">
                <h2 className="follow-us1">Follow Us</h2>
                <div className="contact-icons">
                  <div className="globe-container-parent">
                    <div className="globe-container" />
                    <img
                      className="akar-iconsinstagram-fill1"
                      loading="lazy"
                      alt=""
                      src="/akariconsinstagramfill.svg"
                    />
                  </div>
                  <div className="globe-container-parent">
                    <div className="globe-container" />
                    <img
                      className="ant-designyoutube-outlined-icon1"
                      loading="lazy"
                      alt=""
                      src="/antdesignyoutubeoutlined.svg"
                    />
                  </div>
                  <div className="globe-container-parent">
                    <div className="globe-container" />
                    <img
                      className="akar-iconsinstagram-fill1"
                      loading="lazy"
                      alt=""
                      src="/simplelineiconssocialtwitter.svg"
                    />
                  </div>
                </div>
              </div>
              <button className="divider2">
                <img
                  className="android-globe-icon1"
                  alt=""
                  src="/androidglobe2@2x.png"
                />
                <Form.Select
                  className="english-en-group"
                  name="English - En"
                  value="English - En"
                >
                  <option>English - En</option>
                  <option value="Amharic">Amharic</option>
                </Form.Select>
              </button>
            </div>
          </div>
        </footer>
        <div className="divider3" />
        <div className="alyeska-resor-wrapper">
          <div className="alyeska-resor2">
            © 2024 Adama Homes | All Rights Reserved
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeRent;
