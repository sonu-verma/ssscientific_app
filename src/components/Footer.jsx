const Footer = () => {
    return (
        <>
          <footer className="page_footer  text-center c-gutter-100 text-sm-left  ds">
              <div className="container">
                  <div className="row justify-content-center">
                      <div className="col-lg-4 col-md-6 order-1 order-lg-1  animate" data-animation="fadeInUp">
                          <div className="fw-divider-space divider-xl-160 divider-lg-130 divider-md-90 divider-60">
                          </div>
                          <a href="./" className="logo">
                              <img src="assets/images/logo.png" alt="" />
                              <span className="d-flex flex-column">
                                  <span className="logo-text color-darkgrey">SS Scientific</span>
                              </span>
                          </a>
                          <p>
                              SS Scientific based in Mumbai has its focus on Petroleum and Petrochemical Industries.<br/> We are the distributor for NORMALAB FRANCE SAS, manufacturer of Petroleum testing instruments and glassware.<br/> Our main objective is to provide Quality and Reliable services to our customers.
                          </p>
                          <div className="fw-divider-space divider-xl-160 divider-lg-130 divider-md-60 divider-30"></div>
                      </div>
                      <div className="col-lg-4 col-md-12 ls order-3 order-lg-2 footer-special-column text-center animate" data-animation="fadeInUp">
                          <img src="assets/images/logo.png" alt="" />
                          <h6 className="fs-12 text-uppercase">&copy; Copyright 
                            <span className="copyright_year">2019</span> All Rights Reserved
                            </h6>
                      </div>
                      <div className="col-lg-4 col-md-6 order-2 order-lg-3 animate" data-animation="fadeInUp">
                          <div className="fw-divider-space divider-xl-160 divider-lg-130 divider-md-90"></div>
                          <div className="widget widget_icons_list">
                              <ul>
                                  <li className="icon-inline ">
                                      <div className="icon-styled icon-top  bordered round fs-16">
                                          <i className="fas fa-phone"></i>
                                      </div>
                                      <p><a href="https://wa.me/919833241875" target="_blank">+91 98332 41875</a>/<a href="https://wa.me/919833241875" target="_blank">+91 98332 41875</a></p>
                                  </li>
                                  <li className="icon-inline">
                                      <div className="icon-styled icon-top bordered round  fs-16">
                                          <i className="fas fa-envelope"></i>
                                      </div>
                                      <p><a href="#">sales@ssscientific.net</a></p>
                                  </li>
                                  <li className="icon-inline">
                                      <div className="icon-styled icon-top bordered round  fs-16">
                                          <i className="fas fa-map-marker-alt"></i>
                                      </div>
                                      <p>
                                          SS Scientific<br />
                                          Jamal Mansion, Dr. Meisheri Road,<br />
                                          Dongri, Mumbai-400 009,<br />
                                          Maharashtra, India<br />
                                      </p>
                                  </li>
                                  <li className="icon-inline">
                                      <div className="icon-styled icon-top bordered round  fs-16">
                                          <i className="fas fa-clock"></i>
                                      </div>
                                      <p>
                                          Mon-Fri: 8am - 6pm<br />
                                          Sat: 10am - 4pm<br />
                                      </p>
                                  </li>
                              </ul>
                          </div>
                          <div className="fw-divider-space divider-xl-160 divider-lg-130 divider-md-60 divider-30"></div>
                      </div>
                  </div>
              </div>
          </footer>
        </>
    );
}

export default Footer