import React from 'react';
import NavigationBar from '../components/NavigationBar'
import ActionBar from '../components/ActionBar';
import Content from "../components/Content";

class ProfilePage extends React.Component {
    render() {
        const greeting = 'Hello, user';
        return (
            <div id = 'main'>
                <NavigationBar />
                <div id = 'section'>
                    <ActionBar section = 'profile'/>
                    <Content content = {greeting}/>
                </div>
            </div>
        )
    }
}

export default ProfilePage