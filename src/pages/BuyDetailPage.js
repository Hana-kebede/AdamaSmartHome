import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import Content1 from "../components/Content1";
import Amenities from "../components/Amenities";
import NearbyLocations from "../components/NearbyLocations";
import FrameComponent from "../components/FrameComponent";
import Footer1 from "../components/Footer1";
import "./BuyDetailPage.css";

const BuyDetailPage = () => {
  return (
    <div className="buy-detail-page">
      <header className="header2">
        <div className="brand-container">
          <img className="bihouse-door-icon3" alt="" src="/bihousedoor.svg" />
          <div className="adama-homes2">Adama Homes</div>
        </div>
        <div className="navigation">
          <div className="home2">Home</div>
          <div className="about-us2">About Us</div>
          <Button variant="outline-primary">ViewHomes</Button>
          <Button variant="outline-primary" size="sm">
            LogIn
          </Button>
        </div>
      </header>
      <div className="buy-detail-page-child" />
      <Content1 />
      <img className="screenshot-49-1" alt="" src="/screenshot-49-1@3x.png" />
      <img className="divider-graphic-icon" alt="" src="/hero-deco.svg" />
      <section className="features-parent">
        <h1 className="features">Features</h1>
        <Amenities />
        <div className="neighborhood-info-wrapper">
          <div className="neighborhood-info">
            <h1 className="features">Neighborhood</h1>
            <div className="dream-homes-around">Dream Homes around Adama</div>
          </div>
        </div>
        <NearbyLocations />
        <FrameComponent
          propAlignSelf="unset"
          propHeight="unset"
          propWidth="1172px"
          propAlignSelf1="unset"
          propOverflowX="unset"
          propFlex="1"
          propFlex1="1"
          propMinWidth="107px"
          propAlignSelf2="stretch"
          icoutlineSchool="/icoutlineschool.svg"
          cilhospital="/cilhospital.svg"
          propAlignSelf3="unset"
          propHeight1="80px"
          vector54="/vector-54.svg"
          fluentfood16Regular="/fluentfood16regular.svg"
          propAlignSelf4="unset"
          propHeight2="80px"
          vector55="/vector-54.svg"
          carbonshoppingCart="/carbonshoppingcart.svg"
          propAlignSelf5="unset"
          propHeight3="80px"
          vector56="/vector-54.svg"
          carbonpiggyBank="/carbonpiggybank.svg"
          propAlignSelf6="unset"
          propHeight4="80px"
          vector57="/vector-54.svg"
          gggym="/gggym.svg"
          policeStationIcon="/vector-54.svg"
          materialSymbolslocalPolic="/materialsymbolslocalpoliceoutline.svg"
          propAlignSelf7="unset"
          propHeight5="80px"
          vector59="/vector-54.svg"
          cilbusAlt="/cilbusalt.svg"
        />
      </section>
      <Footer1 />
    </div>
  );
};

export default BuyDetailPage;
