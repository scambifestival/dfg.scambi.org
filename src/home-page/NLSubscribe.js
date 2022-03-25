import React, { Component } from 'react';
import './NLSubscribe.css';
import SubscribeImage from '../images/SubscribeImage.png';
import {TextField, Button} from 'monday-ui-react-core';

class NLSubscribe extends Component {
    render() {
        return <div className='main-container'>
            <div className='left-container'>
                <img src={SubscribeImage} />
            </div>
            <div className='right-container'> 
                <div>exchanges of letters, our newsletter</div>
                <h2>Scambi Epistolari</h2>
                <div>Join the conversation - sign up now to receive updates on Scambi activities.</div>
                <div>
                    <TextField placeholder="Email" size={TextField.sizes.LARGE} />
                    <Button className='submit-button'>Submit</Button>
                </div>
            </div>
        </div>
    }
}

export default NLSubscribe;