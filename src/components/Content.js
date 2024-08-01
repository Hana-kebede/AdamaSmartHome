import Button from "./Button";
import MapColumn from "./MapColumn";
import FrameComponent from "./FrameComponent";
import PropTypes from "prop-types";
import "./Content.css";

const Content = ({ className = "" }) => {
  return (
    <section className={`content ${className}`}>
      <div className="filters-and-listings">
        <div className="filters-and-buttons">
          <Button
            hasIconEnd={false}
            hasIconStart={false}
            label="Buy"
            propBackground="linear-gradient(#ff9505, #ff9505), #2c2c2c"
            star="/star.svg"
            propMinWidth="27px"
            x="/x.svg"
            buttonBackgroundColor="unset"
          />
          <Button
            hasIconEnd={false}
            hasIconStart={false}
            label="Rent"
            propBackground="linear-gradient(#fff, #fff), #2c2c2c"
            star="/star.svg"
            propMinWidth="32px"
            x="/x.svg"
            buttonBackgroundColor="unset"
          />
        </div>
      </div>
      <div className="house">
        <div className="filter">
          <div className="filter-dropdown">
            <div className="dropdown-items">
              <div className="all">All</div>
            </div>
            <div className="dropdown-items1">
              <div className="studio">Studio</div>
            </div>
            <div className="dropdown-items2">
              <div className="bed-room">1 Bed Room</div>
            </div>
            <div className="dropdown-items2">
              <div className="bed-room1">2 Bed Room</div>
            </div>
          </div>
          <div className="filter-label">
            <div className="filters">Filters</div>
            <img className="mifilter-icon" alt="" src="/mifilter.svg" />
          </div>
        </div>
        <div className="arrowleft" />
        <div className="arrowleft" />
        <div className="arrowleft" />
        <div className="listings-container">
          <div className="listings">
            <div className="listing-items">
              <img
                className="listing-image-icon"
                loading="lazy"
                alt=""
                src="/rectangle-2096@2x.png"
              />
              <div className="listing-details">
                <div className="listing-details-child" />
                <div className="price-and-button">
                  <div className="price-row">
                    <div className="birr">{`50,000,000 Birr `}</div>
                  </div>
                  <div className="button-row">
                    <div className="view-details">View Details</div>
                  </div>
                </div>
                <div className="frame-parent">
                  <img className="frame-child2" alt="" src="/group-12458.svg" />
                  <div className="bedroom-icon-row">
                    <div className="fluentbed-20-regular-wrapper">
                      <img
                        className="fluentbed-20-regular-icon"
                        loading="lazy"
                        alt=""
                        src="/fluentbed20regular.svg"
                      />
                    </div>
                    <div className="bedrooms">4 Bedrooms</div>
                  </div>
                  <div className="bath-icon-row">
                    <div className="fluentbed-20-regular-wrapper">
                      <img
                        className="fluentbed-20-regular-icon"
                        loading="lazy"
                        alt=""
                        src="/cilbath.svg"
                      />
                    </div>
                    <div className="bath">3 Bath</div>
                  </div>
                  <div className="sq-m"> 535 sq m</div>
                </div>
              </div>
            </div>
            <div className="listing-items">
              <img
                className="listing-image-icon"
                loading="lazy"
                alt=""
                src="/rectangle-2096-1@2x.png"
              />
              <div className="listing-details">
                <div className="listing-details-child" />
                <div className="price-and-button">
                  <div className="price-row">
                    <div className="birr">80,000,000 Birr</div>
                  </div>
                  <div className="button-row">
                    <div className="view-details">View Details</div>
                  </div>
                </div>
                <div className="frame-container">
                  <img className="frame-child2" alt="" src="/group-12458.svg" />
                  <div className="bedroom-icon-row">
                    <img className="frame-icon" />
                    <div className="bedrooms1">5 Bedrooms</div>
                  </div>
                  <div className="bedroom-icon-row">
                    <img className="frame-icon" />
                    <div className="bath1">4 Bath</div>
                  </div>
                  <div className="sq-m1"> 1000 sq m</div>
                </div>
              </div>
            </div>
          </div>
          <form className="listing-card">
            <div className="card-details">
              <div className="card-price-button">
                <img
                  className="card-image-icon"
                  loading="lazy"
                  alt=""
                  src="/rectangle-2096-2@2x.png"
                />
                <div className="arrowleft3" />
              </div>
              <div className="card-action">
                <div className="card-button">
                  <div className="price-row">
                    <div className="birr2">13,000,000 Birr</div>
                  </div>
                  <div className="button-action">
                    <div className="view-details2">View Details</div>
                  </div>
                </div>
              </div>
              <div className="listing-card1">
                <div className="card-details1">
                  <div className="card-image" />
                  <div className="image-overlay">
                    <img
                      className="overlay-rect-icon"
                      loading="lazy"
                      alt=""
                      src="/rectangle-2096-3@2x.png"
                    />
                  </div>
                  <div className="arrowleft4" />
                </div>
                <div className="card-info">
                  <div className="frame-parent3">
                    <img
                      className="frame-child2"
                      alt=""
                      src="/group-12458.svg"
                    />
                    <div className="bedroom-icon-row">
                      <div className="fluentbed-20-regular-wrapper">
                        <img
                          className="fluentbed-20-regular-icon"
                          loading="lazy"
                          alt=""
                          src="/fluentbed20regular.svg"
                        />
                      </div>
                      <div className="bedrooms2">1 Bedrooms</div>
                    </div>
                    <div className="icon-row1">
                      <div className="fluentbed-20-regular-wrapper">
                        <img
                          className="fluentbed-20-regular-icon"
                          loading="lazy"
                          alt=""
                          src="/cilbath-2.svg"
                        />
                      </div>
                      <div className="bath2">1 Bath</div>
                    </div>
                    <div className="sq-m2"> 250 sq m</div>
                  </div>
                  <div className="card-price-button1">
                    <div className="button-content">
                      <div className="birr2">30,000,000 Birr</div>
                      <div className="button-action1">
                        <div className="view-details2">View Details</div>
                      </div>
                    </div>
                    <div className="background-parent">
                      <div className="background" />
                      <img
                        className="frame-child7"
                        alt=""
                        src="/group-12458.svg"
                      />
                      <img
                        className="fluentbed-20-regular-icon2"
                        loading="lazy"
                        alt=""
                        src="/fluentbed20regular.svg"
                      />
                      <div className="bedrooms3">2 Bedrooms</div>
                      <img
                        className="cilbath-icon2"
                        loading="lazy"
                        alt=""
                        src="/cilbath-2.svg"
                      />
                      <div className="bath3">1 Bath</div>
                      <div className="sq-m3"> 350 sq m</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-details">
              <div className="card-price-button">
                <img
                  className="card-image-icon1"
                  loading="lazy"
                  alt=""
                  src="/rectangle-2096-4@2x.png"
                />
                <div className="arrowleft5" />
              </div>
              <div className="card-action">
                <div className="card-button1">
                  <div className="birr2">100,000,000 Birr</div>
                  <div className="button-action1">
                    <div className="view-details2">View Details</div>
                  </div>
                </div>
              </div>
              <div className="property-card">
                <div className="property-card-image">
                  <div className="property-image-container" />
                  <div className="image-navigation">
                    <div className="rectangle-parent1">
                      <img
                        className="rectangle-icon"
                        alt=""
                        src="/rectangle-20961@2x.png"
                      />
                      <div className="arrowleft6" />
                      <div className="arrowleft7" />
                    </div>
                  </div>
                </div>
                <div className="property-info">
                  <div className="property-info-inner">
                    <div className="frame-parent4">
                      <img
                        className="frame-child7"
                        alt=""
                        src="/group-12458.svg"
                      />
                      <img
                        className="fluentbed-20-regular-icon2"
                        alt=""
                        src="/fluentbed20regular.svg"
                      />
                      <div className="bedrooms4">8 Bedrooms</div>
                      <img
                        className="cilbath-icon3"
                        alt=""
                        src="/cilbath.svg"
                      />
                      <div className="bath4">5 Bath</div>
                      <div className="sq-m4"> 1000 sq m</div>
                    </div>
                  </div>
                  <div className="listing-details">
                    <div className="listing-details-child" />
                    <div className="price-and-button">
                      <div className="price-row">
                        <div className="birr2">10,000,000 Birr</div>
                      </div>
                      <div className="button-action">
                        <div className="view-details2">View Details</div>
                      </div>
                    </div>
                    <div className="frame-parent5">
                      <img
                        className="frame-child2"
                        alt=""
                        src="/group-12458.svg"
                      />
                      <div className="bedroom-icon-row">
                        <div className="frame-icon">
                          <img
                            className="fluentbed-20-regular-icon"
                            loading="lazy"
                            alt=""
                            src="/fluentbed20regular.svg"
                          />
                        </div>
                        <div className="bedrooms2">1 Bedrooms</div>
                      </div>
                      <div className="bedroom-icon-row">
                        <div className="frame-icon">
                          <img
                            className="fluentbed-20-regular-icon"
                            loading="lazy"
                            alt=""
                            src="/cilbath-2.svg"
                          />
                        </div>
                        <div className="bath2">1 Bath</div>
                      </div>
                      <div className="sq-m5">200 sq m</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
        <div className="view-more-container">
          <div className="view-more-button">
            <div className="view-more-label">
              <img
                className="akar-iconscircle-chevron-down"
                loading="lazy"
                alt=""
                src="/akariconscirclechevrondownfill.svg"
              />
            </div>
            <div className="view-more">View More</div>
          </div>
        </div>
      </div>
      <div className="neighborhood-container-wrapper">
        <div className="neighborhood-container">
          <div className="neighborhood-header">
            <h1 className="neighborhood1">Neighborhood</h1>
            <div className="dream-homes-around1">Dream Homes around Adama</div>
          </div>
          <div className="neighborhood-map">
            <div className="map-container">
              <div className="map-wrapper-parent">
                <div className="map-wrapper">
                  <div className="map-canvas">
                    <div className="map-markers">
                      <img
                        className="maps-and-flags-1-icon"
                        loading="lazy"
                        alt=""
                        src="/mapsandflags-1.svg"
                      />
                      <div className="maps-and-flags-31">
                        <img className="group-icon1" alt="" src="/group.svg" />
                        <img
                          className="icoutline-school-icon1"
                          alt=""
                          src="/icoutlineschool.svg"
                        />
                      </div>
                    </div>
                  </div>
                  <img
                    className="maps-and-flags-1-icon"
                    loading="lazy"
                    alt=""
                    src="/mapsandflags-1.svg"
                  />
                </div>
                <img
                  className="maps-and-flags-1-icon2"
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
              <div className="map-container-inner">
                <div className="frame-parent6">
                  <div className="frame-parent7">
                    <img
                      className="frame-child10"
                      loading="lazy"
                      alt=""
                      src="/group-12465.svg"
                    />
                    <div className="screenshot-container-wrapper">
                      <div className="screenshot-container">
                        <img
                          className="vector-icon"
                          alt=""
                          src="/vector-1.svg"
                        />
                        <div className="image-wrapper-wrapper">
                          <div className="image-wrapper">
                            <img
                              className="screenshot-49-12"
                              alt=""
                              src="/screenshot-49-1@2x.png"
                            />
                            <div className="maps-and-flags-4">
                              <img
                                className="group-icon1"
                                alt=""
                                src="/group.svg"
                              />
                              <img
                                className="icoutline-school-icon1"
                                alt=""
                                src="/icoutlineschool.svg"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="vector-wrapper">
                    <img className="vector-icon" alt="" src="/vector-1.svg" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FrameComponent
        propAlignSelf="stretch"
        propHeight="80px"
        propWidth="unset"
        propAlignSelf1="stretch"
        propOverflowX="auto"
        propFlex="unset"
        propFlex1="unset"
        propMinWidth="unset"
        propAlignSelf2="unset"
        icoutlineSchool="/icoutlineschool.svg"
        cilhospital="/cilhospital.svg"
        propAlignSelf3="stretch"
        propHeight1="unset"
        vector54="/vector-54.svg"
        fluentfood16Regular="/fluentfood16regular.svg"
        propAlignSelf4="stretch"
        propHeight2="unset"
        vector55="/vector-54.svg"
        carbonshoppingCart="/carbonshoppingcart.svg"
        propAlignSelf5="stretch"
        propHeight3="unset"
        vector56="/vector-54.svg"
        carbonpiggyBank="/carbonpiggybank.svg"
        propAlignSelf6="stretch"
        propHeight4="unset"
        vector57="/vector-54.svg"
        gggym="/gggym.svg"
        policeStationIcon="/vector-54.svg"
        materialSymbolslocalPolic="/materialsymbolslocalpoliceoutline.svg"
        propAlignSelf7="stretch"
        propHeight5="unset"
        vector59="/vector-54.svg"
        cilbusAlt="/cilbusalt.svg"
      />
    </section>
  );
};

Content.propTypes = {
  className: PropTypes.string,
};

export default Content;
