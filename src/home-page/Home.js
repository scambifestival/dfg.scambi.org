import React, { Component } from 'react';
import UserTest from './UserTest';
import NLSubscribe from './NLSubscribe';

class Home extends Component {
    render() {
        return <div>
            <div>Home</div>
            <UserTest />
            <NLSubscribe />
        </div>
    }
}

export default Home;