import React from 'react';
import AddTweetBtn from "../components/AddTweetBtn";



const ActionBar = (props) => {
    return (
        <div id = 'action-bar'>
            {(props.section === 'tweet') ? <AddTweetBtn /> : null}
        </div>
    )
};

export default ActionBar;