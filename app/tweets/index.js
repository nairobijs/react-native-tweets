import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { log } from '../utilities'
import Search from './Search'
import SearchTabs from './SearchTabs'
import TweetList from './TweetList'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { searchForTweetsRequested, setActiveSearch } from '../actions'

class App extends Component {
  renderError () {
    return (
      <Text className='error'>{this.props.error}</Text>
    )
  }

  renderSearchResults () {
    if (this.props.lastSearch) {
      return (
        <TweetList
          tweets={this.props.tweets}
          isSearching={this.props.isSearching}
        />
      )
    } else {
      return (
        <Text >Nothing to show yet, try a search</Text>
      )
    }
  }

  render () {
    return (
      <View style={s.content}>

        <Search
          onSearch={this.props.searchForTweetsRequested}
          searchText={this.props.activeSearch}
        />

        <SearchTabs
          searches={this.props.searches}
          lastSearch={this.props.lastSearch}
          onClickTab={this.props.setActiveSearch}
        />

        <View>
          {this.props.error ? this.renderError() : this.renderSearchResults()}
        </View>

      </View>
    )
  }
}

const s = StyleSheet.create({
  content: {
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    padding: 10,
    borderRadius: 5
  },
  validation: {
    color: 'red',
    fontSize: 10
  }
})

const mapStateToProps = (state, ownProps) => {
  const searches = Object.keys(state.searches)
  const lastSearch = searches[searches.length - 1]
  const search = state.searches[lastSearch]

  return {
    tweets: state.tweets[lastSearch],
    activeSearch: state.activeSearch,
    lastSearch: lastSearch,
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
