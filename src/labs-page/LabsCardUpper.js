import React, { Component } from 'react';
import './LabsCardUpper.css';
import laboratoriImage from '../images/laboratoriImage.png';
import videoImage from '../images/videoImage.png';

class LabsCardUpper extends Component {
  render() {
    return (
      <div className='main-container'>
        <div className='up-container'>
          <div className='up-left-container'>
            <div className='upper-title'>Labs</div>
            <div className='uptext-container'>
              <div className='main-content'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Maecenas vitae vehicula mauris. Fusce consectetur bibendum nisl,
                placerat congue felis dictum id. Vestibulum faucibus sed enim
                vitae lacinia.
              </div>
              <div className='button'>
                <div className='button-label'>Get Tickets</div>
              </div>
            </div>
          </div>
          <div className='up-right-container'>
            <div className='right-image'>
              <img src={videoImage}></img>
            </div>
            <div className='play-button'></div>
          </div>
        </div>
        <div className='middle-container'>
          <div className='inner-container'>
            <div className='left-image'>
              <img src={laboratoriImage}></img>
            </div>
            <div className='rightmid-container'>
              <div className='lower-title'>What are Labs?</div>
              <div className='main-content'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur.
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LabsCardUpper;
