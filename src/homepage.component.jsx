import React from 'react';
import './homepage.styles.scss';

const HomePage = () => (
    <div className='homepage'>
        <div className='directory-menu'>
            <div className='menu-item'>
                <div className='content'>
                    <h1 className='title'>Chapeaux</h1>
                    <span className='subtitle'>ACHETER</span>
                </div>
            </div>
            <div className='menu-item'>
                <div className='content'>
                    <h1 className='title'>CHAPEAUX</h1>
                    <span className='subtitle'>ACHETER</span>
                </div>
            </div>
            <div className='menu-item'>
                <div className='content'>
                    <h1 className='title'>VESTES</h1>
                    <span className='subtitle'>ACHETER</span>
                </div>
            </div>
            <div className='menu-item'>
                <div className='content'>
                    <h1 className='title'>FEMMES</h1>
                    <span className='subtitle'>ACHETER</span>
                </div>
            </div>
            <div className='menu-item'>
                <div className='content'>
                    <h1 className='title'>HOMMES</h1>
                    <span className='subtitle'>ACHETER</span>
                </div>
            </div>
        </div>
    </div>
)

export default HomePage;