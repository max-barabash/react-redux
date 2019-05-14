import React from 'react';
import NavigationBar from '../components/NavigationBar'
import ActionBar from '../components/ActionBar';
import Content from "../components/Content";

class TweetPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            section: 'tweet'
        }
    };
    render() {
        return (
            <div id = 'main'>
                <NavigationBar />
                <div id = 'section'>
                    <ActionBar section = {this.state.section}/>
                    <Content />
                </div>
            </div>
        )
    }
}

export default TweetPage