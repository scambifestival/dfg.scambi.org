import './Home.scss';
import React, { Component } from 'react';
import UserTest from './UserTest';
import NLSubscribe from './NLSubscribe';
import NavbarGlobal from '../global-components/NavbarGlobal';

class Home extends Component {
    render() {
        return <div className='mainhome-container'>
            <NavbarGlobal/>
            <div>Home</div>
            <UserTest />
            <div>
                <NLSubscribe />
            </div>
        </div>
    }
}

export default Home;