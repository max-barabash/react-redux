import React from 'react';
import LinkButton from '../components/NavigationLink'

const NavigationBar = () => {
    return (
        <div id = 'navigation-bar'>
            <div id = 'logo-container'></div>
            <LinkButton to="/profile" label={'Profile'} />
            <LinkButton to="/tweets" label={'Tweets'} />
        </div>
    )
};

export default NavigationBar;