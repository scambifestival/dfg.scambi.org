import './Home.scss';
import React, { Component } from 'react';
import NLSubscribe from './NLSubscribe';
import Purpose from './Purpose';
import NavbarGlobal from '../global-components/NavbarGlobal';

class Home extends Component {
    render() {
        return <div>
            <NavbarGlobal/>
            <div className='mainhome-container'>
                <Purpose />
                <NLSubscribe />
            </div>
            
        </div>
    }
}

export default Home;