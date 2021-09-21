import React from 'react';
import './Widgets.css';
import {
    TwitterTimelineEmbed,
    TwitterShareButton,
    TwitterTweetEmbed,
} from 'react-twitter-embed';
import SearchIcon from '@material-ui/icons/Search';

const Widgets = () => {
    return (
        <div className="widgets">
            <div className="widgets-input">
                <SearchIcon className="widgets-search-icon" />
                <input placeholder="Search Twitter" type="text" />
            </div>
            <div className="widgets-widget-container">
                <h2>What's happening ?</h2>
                <TwitterTweetEmbed tweetId={'1405597886826512386'} />
                <TwitterTimelineEmbed
                    sourceType="profile"
                    screenName="elonmusk"
                    options={{ height: 400 }}
                />
                <TwitterShareButton
                    url={'https://twitter.com/elonmusk'}
                    options={{ text: 'Tesla tesla tesla', via: 'elonmusk' }}
                />
            </div>
        </div>
    );
};

export default Widgets;
