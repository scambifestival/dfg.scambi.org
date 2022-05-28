import React, { Component } from "react";
import "./Footer.css";

class Footer extends Component {
  render() {
    return (
      <div className="footer-background">
        <div className="footer-main">
          <div className="footer-top">
            <div className="footer-logo">Scambi</div>
            <div className="footer-cta">
              <div className="footer-cta-text">
                <div className="cta-text">Ready to join us?</div>
              </div>
              <div className="footer-cta-button">
                <div className="cta-button">
                  <div className="cta-button-text">Get Tickets</div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-middle">
            <div className="footer-middle-left">
              <div className="subscribe-blob">
                <div className="subscribe-frame1">
                  <div className="frame1-text">
                    Subscribe to our Newsletter!
                  </div>
                  <div className="frame1-inputfield">
                    <div className="frame1-icons"></div>

                    <div className="frame1-placeholder">Enter your email</div>
                  </div>
                  <div className="frame1-button">
                    <div className="frame1-button-text">Subscribe</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
