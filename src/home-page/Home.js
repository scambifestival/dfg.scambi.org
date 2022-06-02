import './Home.scss';
import React, { Component } from 'react';
import NLSubscribe from './NLSubscribe';
import Purpose from './Purpose';
import NavbarGlobal from '../global-components/NavbarGlobal';
import UserTestimonials from './UserTestimonials';

class Home extends Component {
    render() {
        return <div>
            <NavbarGlobal/>
            <div className='mainhome-container'>
                <UserTestimonials />
                <Purpose />
                <NLSubscribe />
            </div>
            
        </div>
    }
}

export default Home;