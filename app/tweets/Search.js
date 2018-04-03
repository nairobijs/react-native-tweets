import React, { Component } from 'react'
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Keyboard } from 'react-native'
import PropTypes from 'prop-types'

const propTypes = {
  searchText: PropTypes.string.isRequired,
  onSearch: PropTypes.func.isRequired
}

const defaultProps = {
  searchText: ''
}

class Search extends Component {
  constructor (props) {
    super(props)

    this.state = {
      searchText: props.searchText
    }
    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  onChange (value) {
    this.setState({searchText: value})
  }

  onSubmit () {
    Keyboard.dismiss()
    if (this.state.searchText) {
      this.props.onSearch(this.state.searchText)
    }
    // clear search input
    this.setState({
      searchText: ''
    })
  }

  render () {
    return (
      <View>
        <TextInput
          underlineColorAndroid='green'
          onChangeText={this.onChange}
          placeholder='Search for Tweets...'
          placeholderTextColor='#aaa'
          value={this.state.searchText}
          autoCapitalize='none'
        />
        <TouchableOpacity onPress={this.onSubmit} style={s.button}>
          <Text style={s.buttonText}>Search</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const s = StyleSheet.create({
  textInput: {
    backgroundColor: '#E46350',
    color: '#fff',
    fontSize: 16,
    width: '100%',
    height: 50,
    marginTop: 5,
    padding: 10,
    borderRadius: 5
  },
  validation: {
    color: 'red',
    fontSize: 10
  },
  button: {
    width: '100%',
    height: 50,
    marginBottom: 5,
    alignItems: 'center',
    backgroundColor: '#33acc1',
    padding: 11,
    borderRadius: 5
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold'
  }
})

Search.propTypes = propTypes
Search.defaultProps = defaultProps

export default Search
