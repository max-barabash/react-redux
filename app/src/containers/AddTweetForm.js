import React from 'react';

class AddTweetForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            tweetName: '',
            tweetText: ''
        };
    };

    handleSubmit = (event) => {
        event.preventDefault();
    };

    onChangeTweetName = (event) => {
        const {target: {value}} = event;
        this.setState({tweetName: value});
    };

    onChangeTweetText = (event) => {
        const {target: {value} } = event;
        this.setState({tweetText: value});
    };

    render() {
        const {tweetName, tweetText} = this.state;
        return (
            <div id = 'add-tweet-form'>
                <div id = 'add-tweet-form-wrapper'>
                    <div id = 'tweet-name-input-wrapper'>
                        <input id = 'tweet-name-input' type = 'text' placeholder = 'Tweet name' value = {tweetName} onChange={this.onChangeTweetName}></input>
                    </div>
                    <div id = 'tweet-text-input-wrapper'>
                        <textarea id = 'tweet-text-input' type = 'text' rows = '6' cols = '40' placeholder = 'Tweet text' value = {tweetText} onChange={this.onChangeTweetText}></textarea>
                    </div>
                    <button id="add-tweet-form-btn">
                        Add tweet
                    </button>
                </div>
            </div>
        )
    }
}

export default AddTweetForm;