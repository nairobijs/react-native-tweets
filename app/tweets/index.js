import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { log } from '../utilities';
import Search from './Search';
import SearchTabs from './SearchTabs';
import TweetList from './TweetList';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { searchForTweetsRequested, setActiveSearch } from '../actions';
import { searchedTweets, searchesAsArray } from '../selectors';

class App extends Component {

  renderError() {
    return (
      <Text className="error">{this.props.error}</Text>
    );
  }

  renderSearchResults() {
    if (this.props.activeSearch) {
      return (
        <TweetList
          tweets={this.props.tweets}
          isSearching={this.props.isSearching}
        />
      );
    } else {
      return (
        <Text >Nothing to show yet, try a search</Text>
      );
    }
  }

  render() {
    return (
      <View style={s.content}>

        <Search
          onSearch={this.props.searchForTweetsRequested}
          searchText={this.props.activeSearch}
        />

        <SearchTabs
          searches={this.props.searches}
          activeSearch={this.props.activeSearch}
          onClickTab={this.props.setActiveSearch}
        />

        <View>
          {this.props.error ? this.renderError() : this.renderSearchResults()}
        </View>

      </View>
    );
  }
}

const s = StyleSheet.create({
  content: {
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    padding: 10,
    borderRadius: 5,
  },
  validation: {
    // height: 0,
    color: 'red',
    fontSize: 10,
    // textAlign: 'right',
  },
});

const mapStateToProps = (state, ownProps) => {
  const search = state.searches.searches[state.searches.activeSearch];

  return {
    // tweets: searchedTweets(state),
    tweets: state.tweets[state.activeSearch],
    activeSearch: state.activeSearch,
    // error: state.searches.error,
    isSearching: search && search.isSearching,
    error: search && search.error,
    searches: searchesAsArray(state),
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return bindActionCreators(
    { searchForTweetsRequested, setActiveSearch },
    dispatch
  );
}

const AppConnected = connect(mapStateToProps, mapDispatchToProps)(App);


export default AppConnected;
