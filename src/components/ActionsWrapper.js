import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import Button from "./Button";
import MapColumn from "./MapColumn";
import FrameComponent from "./FrameComponent";
import PropTypes from "prop-types";
import "./ActionsWrapper.css";

const ActionsWrapper = ({ className = "" }) => {
  return (
    <section className={`actions-wrapper ${className}`}>
      <div className="actions-wrapper-inner">
        <div className="button-parent">
          <Button
            hasIconEnd={false}
            hasIconStart={false}
            label="Buy"
            propBackground="linear-gradient(#fff, #fff), #2c2c2c"
            star="/star.svg"
            propMinWidth="27px"
            x="/x.svg"
            buttonBackgroundColor="transparent"
          />
          <Button
            hasIconEnd
            hasIconStart
            label="Rent"
            star="/star.svg"
            x="/x.svg"
          />
        </div>
      </div>
      <div className="house1">
        <div className="filter1">
          <div className="dropdown-container">
            <Button className="dropdown-options" variant="primary" />
            <Button className="dropdown-options1" variant="outline-primary">
              Studio
            </Button>
            <Button className="dropdown-options2" variant="outline-primary">
              1 Bed Room
            </Button>
            <Button className="dropdown-options2" variant="outline-primary">
              2 Bed Room
            </Button>
          </div>
          <Button
            className="dropdown-input"
            variant="outline-primary"
          >{`Filters `}</Button>
        </div>
        <div className="arrowleft8" />
        <div className="arrowleft8" />
        <div className="arrowleft8" />
        <div className="listing-wrapper">
          <div className="list-container">
            <div className="list-header">
              <img
                className="list-header-child"
                loading="lazy"
                alt=""
                src="/rectangle-20961@2x.png"
              />
              <div className="header-labels-container">
                <div className="header-labels-container-child" />
                <div className="header-item-container">
                  <div className="birr-month-wrapper">
                    <div className="birr-month">100,000 Birr /Month</div>
                  </div>
                  <Button
                    className="details-button-container"
                    variant="outline-primary"
                  >
                    View Details
                  </Button>
                </div>
                <div className="frame-parent14">
                  <img
                    className="frame-child27"
                    alt=""
                    src="/group-12458.svg"
                  />
                  <div className="bedroom-icon-container">
                    <div className="bed-icon-wrapper">
                      <img
                        className="fluentbed-20-regular-icon7"
                        loading="lazy"
                        alt=""
                        src="/fluentbed20regular.svg"
                      />
                    </div>
                    <div className="bedrooms8">4 Bedrooms</div>
                  </div>
                  <div className="bathroom-icon-container">
                    <div className="bed-icon-wrapper">
                      <img
                        className="fluentbed-20-regular-icon7"
                        loading="lazy"
                        alt=""
                        src="/cilbath.svg"
                      />
                    </div>
                    <div className="bath8">3 Bath</div>
                  </div>
                  <div className="sq-m8"> 535 sq m</div>
                </div>
              </div>
            </div>
            <div className="list-header">
              <img
                className="list-header-child"
                loading="lazy"
                alt=""
                src="/rectangle-2096-11@2x.png"
              />
              <div className="header-labels-container">
                <div className="header-labels-container-child" />
                <div className="header-item-container">
                  <div className="birr-month-wrapper">
                    <div className="birr-month">120,000 Birr /Month</div>
                  </div>
                  <Button
                    className="details-button-container"
                    variant="outline-primary"
                  >
                    View Details
                  </Button>
                </div>
                <div className="frame-parent16">
                  <img
                    className="frame-child27"
                    alt=""
                    src="/group-12458.svg"
                  />
                  <div className="bedroom-icon-container">
                    <img className="fluentbed-20-regular-frame" />
                    <div className="bedrooms9">5 Bedrooms</div>
                  </div>
                  <div className="bedroom-icon-container">
                    <img className="fluentbed-20-regular-frame" />
                    <div className="bath9">4 Bath</div>
                  </div>
                  <div className="sq-m9"> 1000 sq m</div>
                </div>
              </div>
            </div>
          </div>
          <form className="listing-item-wrapper">
            <div className="listing-item-container">
              <div className="item-content-wrapper">
                <img
                  className="item-image-icon"
                  loading="lazy"
                  alt=""
                  src="/rectangle-2096-21@2x.png"
                />
                <div className="arrowleft11" />
              </div>
              <div className="item-info-wrapper">
                <div className="info-container">
                  <div className="birr-month-wrapper">
                    <div className="birr-month2">20,000 Birr /Month</div>
                  </div>
                  <Button
                    className="details-button-container"
                    variant="outline-primary"
                  >
                    View Details
                  </Button>
                </div>
              </div>
              <div className="listing-item-wrapper1">
                <div className="listing-item-container1">
                  <div className="item-image" />
                  <div className="listing-item-container-inner">
                    <img
                      className="frame-child33"
                      loading="lazy"
                      alt=""
                      src="/rectangle-2096-31@2x.png"
                    />
                  </div>
                  <div className="arrowleft12" />
                </div>
                <div className="item-info-wrapper1">
                  <div className="frame-parent19">
                    <img
                      className="frame-child27"
                      alt=""
                      src="/group-12458.svg"
                    />
                    <div className="bedroom-icon-container">
                      <div className="bed-icon-wrapper">
                        <img
                          className="fluentbed-20-regular-icon7"
                          loading="lazy"
                          alt=""
                          src="/fluentbed20regular.svg"
                        />
                      </div>
                      <div className="bedrooms10">1 Bedrooms</div>
                    </div>
                    <div className="icon-label-container1">
                      <div className="bed-icon-wrapper">
                        <img
                          className="fluentbed-20-regular-icon7"
                          loading="lazy"
                          alt=""
                          src="/cilbath-2.svg"
                        />
                      </div>
                      <div className="bath10">1 Bath</div>
                    </div>
                    <div className="sq-m10"> 250 sq m</div>
                  </div>
                  <div className="price-details-wrapper">
                    <div className="price-container2">
                      <div className="birr-month2">60,000 Birr /Month</div>
                      <Button
                        className="details-button-container"
                        variant="outline-primary"
                      >
                        View Details
                      </Button>
                    </div>
                    <div className="image-placeholder-parent">
                      <div className="image-placeholder" />
                      <img
                        className="frame-child35"
                        alt=""
                        src="/group-12458.svg"
                      />
                      <img
                        className="fluentbed-20-regular-icon9"
                        loading="lazy"
                        alt=""
                        src="/fluentbed20regular.svg"
                      />
                      <div className="bedrooms11">2 Bedrooms</div>
                      <img
                        className="cilbath-icon9"
                        loading="lazy"
                        alt=""
                        src="/cilbath-2.svg"
                      />
                      <div className="bath11">1 Bath</div>
                      <div className="sq-m11"> 350 sq m</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="listing-item-container">
              <div className="item-content-wrapper">
                <img
                  className="item-image-icon1"
                  loading="lazy"
                  alt=""
                  src="/rectangle-2096-41@2x.png"
                />
                <div className="arrowleft13" />
              </div>
              <div className="item-info-wrapper">
                <div className="price-details1">
                  <div className="birr-month2">200,000 Birr /Month</div>
                  <Button
                    className="details-button-container"
                    variant="outline-primary"
                  >
                    View Details
                  </Button>
                </div>
              </div>
              <div className="house-info">
                <div className="info-container1">
                  <div className="image-placeholder1" />
                  <div className="navigation1">
                    <div className="rectangle-parent12">
                      <img
                        className="frame-child36"
                        alt=""
                        src="/rectangle-20962@2x.png"
                      />
                      <div className="arrowleft14" />
                      <div className="arrowleft15" />
                    </div>
                  </div>
                </div>
                <div className="info-details">
                  <div className="info-summary">
                    <div className="frame-parent20">
                      <img
                        className="frame-child35"
                        alt=""
                        src="/group-12458.svg"
                      />
                      <img
                        className="fluentbed-20-regular-icon9"
                        alt=""
                        src="/fluentbed20regular.svg"
                      />
                      <div className="bedrooms12">8 Bedrooms</div>
                      <img
                        className="cilbath-icon10"
                        alt=""
                        src="/cilbath.svg"
                      />
                      <div className="bath12">5 Bath</div>
                      <div className="sq-m12"> 1000 sq m</div>
                    </div>
                  </div>
                  <div className="header-labels-container">
                    <div className="header-labels-container-child" />
                    <div className="price-details2">
                      <div className="birr-month-wrapper">
                        <div className="birr-month2">10,000 Birr /Month</div>
                      </div>
                      <Button
                        className="details-button-container"
                        variant="outline-primary"
                      >
                        View Details
                      </Button>
                    </div>
                    <div className="frame-parent21">
                      <img
                        className="frame-child27"
                        alt=""
                        src="/group-12458.svg"
                      />
                      <div className="bedroom-icon-container">
                        <div className="fluentbed-20-regular-frame">
                          <img
                            className="fluentbed-20-regular-icon7"
                            loading="lazy"
                            alt=""
                            src="/fluentbed20regular.svg"
                          />
                        </div>
                        <div className="bedrooms10">1 Bedrooms</div>
                      </div>
                      <div className="bedroom-icon-container">
                        <div className="fluentbed-20-regular-frame">
                          <img
                            className="fluentbed-20-regular-icon7"
                            loading="lazy"
                            alt=""
                            src="/cilbath-2.svg"
                          />
                        </div>
                        <div className="bath10">1 Bath</div>
                      </div>
                      <div className="sq-m13">200 sq m</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
        <div className="view-more-container1">
          <div className="view-more-button1">
            <div className="view-more-content">
              <img
                className="akar-iconscircle-chevron-down1"
                loading="lazy"
                alt=""
                src="/akariconscirclechevrondownfill.svg"
              />
            </div>
            <div className="view-more1">View More</div>
          </div>
        </div>
      </div>
      <div className="neighborhood-container-container">
        <div className="neighborhood-container1">
          <div className="neighborhood-header1">
            <h1 className="neighborhood3">Neighborhood</h1>
            <div className="dream-homes-around3">Dream Homes around Adama</div>
          </div>
          <div className="neighborhood-map1">
            <div className="map-container1">
              <div className="map-row">
                <div className="map-column1">
                  <div className="map-cell3">
                    <img
                      className="maps-and-flags-1-icon6"
                      loading="lazy"
                      alt=""
                      src="/mapsandflags-1.svg"
                    />
                  </div>
                  <img
                    className="maps-and-flags-1-icon7"
                    loading="lazy"
                    alt=""
                    src="/mapsandflags-1.svg"
                  />
                </div>
                <img
                  className="maps-and-flags-1-icon8"
                  loading="lazy"
                  alt=""
                  src="/mapsandflags-1.svg"
                />
                <MapColumn
                  mapsAndFlags5="/mapsandflags-5.svg"
                  mapsAndFlags1="/mapsandflags-1.svg"
                  icoutlineSchool="/icoutlineschool.svg"
                  pinShape="/vector.svg"
                  mapsAndFlags11="/mapsandflags-1-4.svg"
                  claritydollarLine="/claritydollarline.svg"
                  markerBackground="/vector-1.svg"
                />
              </div>
              <div className="map-column2">
                <div className="map-cell4">
                  <div className="location-pin-container">
                    <img
                      className="location-pin-container-child"
                      loading="lazy"
                      alt=""
                      src="/group-12465.svg"
                    />
                    <div className="pin-icon">
                      <div className="pin-image">
                        <img
                          className="pin-background-icon"
                          alt=""
                          src="/vector-1.svg"
                        />
                        <div className="location-marker">
                          <div className="maps-and-flags-42">
                            <img
                              className="group-icon7"
                              alt=""
                              src="/group.svg"
                            />
                            <img
                              className="icoutline-school-icon8"
                              alt=""
                              src="/icoutlineschool.svg"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="shadow">
                    <img
                      className="map-shadow-icon"
                      alt=""
                      src="/vector-1.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FrameComponent
        icoutlineSchool="/icoutlineschool.svg"
        cilhospital="/cilhospital.svg"
        vector54="/vector-54.svg"
        fluentfood16Regular="/fluentfood16regular.svg"
        vector55="/vector-54.svg"
        carbonshoppingCart="/carbonshoppingcart.svg"
        vector56="/vector-54.svg"
        carbonpiggyBank="/carbonpiggybank.svg"
        vector57="/vector-54.svg"
        gggym="/gggym.svg"
        policeStationIcon="/vector-54.svg"
        materialSymbolslocalPolic="/materialsymbolslocalpoliceoutline.svg"
        vector59="/vector-54.svg"
        cilbusAlt="/cilbusalt.svg"
      />
    </section>
  );
};

ActionsWrapper.propTypes = {
  className: PropTypes.string,
};

export default ActionsWrapper;
