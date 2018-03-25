import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';

const propTypes = {
  tweets: PropTypes.array.isRequired,
  isSearching: PropTypes.bool.isRequired,
};

const defaultProps = {
  tweets: []
};

function renderTweets(tweets) {
  return tweets.map(tweet => <Text>{tweet.id + ' ' +tweet} </Text>);
}

function TweetList(props) {

  return (
    <View className="TweetList">
      {
        props.isSearching ?
        <Text>Searching...</Text> :
        renderTweets(props.tweets)
      }
    </View>
  );
}

TweetList.propTypes = propTypes;
TweetList.defaultProps = defaultProps;

export default TweetList;
