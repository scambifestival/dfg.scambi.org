import './Home.scss';
import React, { Component } from 'react';
import UserTest from './UserTest';
import NLSubscribe from './NLSubscribe';

class Home extends Component {
    render() {
        return <div className='mainhome-container'>
            <div>Home</div>
            <UserTest />
            <div>
                <NLSubscribe />
            </div>
        </div>
    }
}

export default Home;