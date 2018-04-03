import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Search from './Search'
import SearchTabs from './SearchTabs'
import TweetList from './TweetList'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { searchForTweetsRequested, setActiveSearch } from '../actions'

class App extends Component {
  renderError () {
    return (
      <Text className='error' style={styles.message}>{this.props.error}</Text>
    )
  }

  renderSearchResults () {
    if (this.props.activeSearch) {
      return (
        <TweetList
          tweets={this.props.tweets}
          isSearching={this.props.isSearching}
        />
      )
    } else {
      return (
        <Text style={styles.message}>Nothing to show yet, try a search</Text>
      )
    }
  }

  render () {
    return (
      <View style={styles.container}>

        <Search
          onSearch={this.props.searchForTweetsRequested}
        />
        <SearchTabs
          searches={this.props.searches}
          activeSearch={this.props.activeSearch}
          onClickTab={this.props.setActiveSearch}
        />

        <View style={styles.content}>
          {this.props.error ? this.renderError() : this.renderSearchResults()}
        </View>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    padding: 10,
    borderRadius: 5,
    height: '100%'
  },
  content: {
    backgroundColor: 'aqua',
    flex: 1
  },
  message: {
    fontSize: 20,
    padding: 10
  }
})

const mapStateToProps = (state, ownProps) => {
  const searches = Object.keys(state.searches)
  const search = state.searches[state.activeSearch]

  return {
    tweets: state.tweets[state.activeSearch],
    activeSearch: state.activeSearch,
    isSearching: search && search.isSearching,
    error: search && search.error,
    searches: searches
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return bindActionCreators(
    { searchForTweetsRequested, setActiveSearch },
    dispatch
  )
}

const AppConnected = connect(mapStateToProps, mapDispatchToProps)(App)

export default AppConnected
