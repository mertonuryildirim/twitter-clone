import React from 'react';
import './TweetBox.css';
import { Avatar, Button } from '@material-ui/core';
import { useState } from 'react';
import db from '../firebase';

const TweetBox = () => {
    const [tweetMessage, setTweetMessage] = useState('');
    const [tweetImage, setTweetImage] = useState('');

    const sendTweet = (e) => {
        e.preventDefault();
        db.collection('posts').add({
            displayName: 'Mert Yıldırım',
            userName: 'mertyildirim',
            verified: true,
            avatar: 'https://media-exp1.licdn.com/dms/image/C5603AQF2BDzzXrGO3g/profile-displayphoto-shrink_200_200/0/1583690736472?e=1628121600&v=beta&t=fO35ZbDeUAENOk2QwM2paK7LC87xjeokHswl9LztR0Q',
            image: tweetImage,
            text: tweetMessage,
        });

        setTweetImage('');
        setTweetMessage('');
    };

    return (
        <div className="tweetbox">
            <form>
                <div className="tweetbox-input">
                    <Avatar src="https://media-exp1.licdn.com/dms/image/C5603AQF2BDzzXrGO3g/profile-displayphoto-shrink_200_200/0/1583690736472?e=1628121600&v=beta&t=fO35ZbDeUAENOk2QwM2paK7LC87xjeokHswl9LztR0Q" />
                    <input
                        onChange={(e) => setTweetMessage(e.target.value)}
                        value={tweetMessage}
                        placeholder="What's happening ?"
                        type="text"
                    />
                </div>
                <input
                    onChange={(e) => setTweetImage(e.target.value)}
                    value={tweetImage}
                    className="tweetbox-image-input"
                    placeholder="Optional: Enter image URL"
                    type="text"
                />
                <Button
                    onClick={sendTweet}
                    type="submit"
                    className="tweetbox-tweet-button"
                >
                    Tweet
                </Button>
            </form>
        </div>
    );
};

export default TweetBox;
