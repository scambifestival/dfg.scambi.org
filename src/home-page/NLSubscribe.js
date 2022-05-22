import React, { Component } from 'react';
import './NLSubscribe.scss';
import SubscribeImage from '../images/SubscribeImage.png';
import {TextField, Button} from 'monday-ui-react-core';
import Grid from '@mui/material/Grid';
// import Item from '@mui/material/Item';

class NLSubscribe extends Component {
    render() {
        return <div>
            <div className='main-container'>
                <div className='left-container'>
                    <img className="left-image" src={SubscribeImage} />
                </div>
                <div className='right-container'> 
                    <div className='inner-container'>
                            <div className='upper-subtitle'>exchanges of letters, our newsletter</div>
                            <div className='title'>Scambi Epistolari</div>
                            <div className='lower-subtitle'>Join the conversation - sign up now to receive updates on Scambi activities.</div>
                            <div className='email-fields'>
                                <input className='text-field' type="text" placeholder="Email" />
                                <button className='submit-button'>Submit</button>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
    }
}

export default NLSubscribe;