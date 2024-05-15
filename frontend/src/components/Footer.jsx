import React from "react";

const Footer = () => {
  return (
    <div className="bottom">
      <hr />
      <section className="footer">
        <div className="footer-container container">
          <h2>
            <br />
            <br />
            Style.lk
            <br />
            <span className="tagline">Beauty with Style</span>
          </h2>
          <div className="footer-box">
            <h3>
              <br />
              <br />
              Rates
            </h3>
            <a href="#">
              Rates <i className="bx bxs-star"></i><i className="bx bxs-star"></i><i className="bx bxs-star"></i><i className="bx bxs-star"></i><i className="bx bxs-star-half"></i>
            </a>
          </div>
          <div className="footer-box">
            <h3>
              <br />
              <br />
              Locations
            </h3>
            <a href="#"><i className="bx bx-location-plus"></i> Kottawa</a>
            <a href="#"><i className="bx bx-location-plus"></i> Maharagama</a>
            <a href="#"><i className="bx bx-location-plus"></i> Colombo7</a>
          </div>
          <div className="footer-box">
            <h3>
              <br />
              <br />
              Contacts
            </h3>
            <a href="#"><i className="bx bx-phone-call"></i> +94 114 802 697</a>
            <a href="https://mail.google.com/mail/u/0/?pli=1#inbox?compose=CllgCJfrLfwMrDLmwnPbrFlthmVCwdxMblVGvLnnHwMgfMQkBtmsRndqqmGXtNHwCZJWFhHRrcL"><i className="bx bx-envelope"></i> style.lk@gmail.com</a>
            <div className="social">
              <a href="https://www.facebook.com"><i className="bx bxl-facebook"></i></a>
              <a href="https://twitter.com/i/flow/login"><i className="bx bxl-twitter"></i></a>
              <a href="https://www.instagram.com/accounts/login/"><i className="bx bxl-instagram"></i></a>
              <a href="#"><i className="bx bx-qr"></i></a>
            </div>
          </div>
        </div>
      </section>
      <div className="copyright">
        <p>&#169; Style.lk All Right Reserved 2023</p>
      </div>
    </div>
  );
};

export default Footer;
