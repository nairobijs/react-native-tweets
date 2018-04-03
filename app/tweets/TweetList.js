import React from 'react'
import { ScrollView, Text, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'

const styles = StyleSheet.create({
  scrollview: {
    paddingBottom: 100,
    justifyContent: 'flex-start'
  },
  tweet: {
    fontSize: 25,
    padding: 10,
    borderBottomWidth: 2,
    borderColor: '#fff'
  },
  message: {
    fontSize: 20,
    padding: 10
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
    <ScrollView contentContainerStyle={styles.scrollview} className='TweetList'>
      {
        props.isSearching
          ? <Text style={styles.message}>Searching...</Text>
          : renderTweets(props.tweets)
      }
    </ScrollView>
  )
}

TweetList.propTypes = propTypes
TweetList.defaultProps = defaultProps

export default TweetList
