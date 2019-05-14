import React from 'react';
import AddTweetForm from "../containers/AddTweetForm";


class AddTweetBtn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isRendered: false
        }
    };
    showTweetForm = (event) => {
        event.preventDefault();
        this.setState({
            isRendered: true
        });
    };
    render() {
        return (
            <div>
                <div id='btn-wrapper'>
                    <button id="add-tweet-btn" onClick={this.showTweetForm}>
                        Add tweet
                    </button>
                </div>
                {this.state.isRendered ? <AddTweetForm /> : null}
            </div>
        )
    };
}
export default AddTweetBtn;