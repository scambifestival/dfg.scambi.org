import React, { Component } from 'react';
import UserTest from './UserTest';
//import NLSubscribe from './NLSubscribe';
import LabsCardUpper from '../labs-page/LabsCardUpper';
//import SupportUs from '../support-us/SupportUs';

class Home extends Component {
  render() {
    return (
      <div>
        <div>Home</div>
        <UserTest />
        {/* <NLSubscribe /> */}
        <LabsCardUpper />
        {/* <SupportUs /> */}
      </div>
    );
  }
}

export default Home;
