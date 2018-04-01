import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'

const styles = StyleSheet.create({
  tweets: {
    height: '100%'
  },
  tweet: {
    fontSize: 30,
    paddingTop: 10,
    paddingBottom: 10
  }
})

const propTypes = {
  tweets: PropTypes.array.isRequired,
  isSearching: PropTypes.bool.isRequired
}

const defaultProps = {
  tweets: []
}

function renderTweets (tweets) {
  return tweets.map(tweet => <Text key={tweet.id} style={styles.tweet}>{tweet.text}</Text>)
}

function TweetList (props) {
  return (
    <View className='TweetList' style={styles.tweets}>
      {
        props.isSearching
          ? <Text>Searching...</Text>
          : renderTweets(props.tweets)
      }
    </View>
  )
}

TweetList.propTypes = propTypes
TweetList.defaultProps = defaultProps

export default TweetList
