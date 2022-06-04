import React, { Component } from 'react';
import './SupportUs.css';

class SupportUs extends Component {
  render() {
    return (
      <div className='outside-container'>
        <div className='main-container'>
          <div className='title'>Support us today</div>
          <div className='box-container'>
            <div className='left-container'>
              <div className='left-outer'>
                <div className='left-inner'>
                  <div className='left-main'>
                    <div className='volunteer'>Volunteer with us</div>
                    <div className='volunteer-content'>
                      Join us in the festivities and help from the inside!
                    </div>
                  </div>
                  <div className='hand-image'></div>
                </div>
                <div className='volunteer-button'>
                  <div className='volunteer-label'>Volunteer</div>
                </div>
              </div>
            </div>

            <div className='middle-container'>
              <div className='middle-outer'>
                <div className='middle-inner'>
                  <div className='middle-main'>
                    <div className='join'>Join us Aug 25 - 28, 2022</div>
                    <div className='join-content'>
                      Celebrate with us this year, tickets are free of charge.
                    </div>
                  </div>
                  <div className='meetinghand-image'></div>
                </div>
                <div className='tickets-button'>
                  <div className='tickets-label'>Get Tickets</div>
                </div>
              </div>
            </div>

            <div className='right-container'>
              <div className='right-outer'>
                <div className='right-inner'>
                  <div className='right-main'>
                    <div className='donate'>Donate Securely</div>
                    <div className='donate-content'>
                      Make a one-time or monthly donation to help run Scambi
                      Festival.
                    </div>
                  </div>
                  <div className='hearty-image'></div>
                </div>
                <div className='donate-button'>
                  <div className='donate-label'>Donate</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SupportUs;
