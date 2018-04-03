import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import PropTypes from 'prop-types'

const propTypes = {
  searches: PropTypes.array.isRequired,
  activeSearch: PropTypes.string,
  onClickTab: PropTypes.func.isRequired
}

function SearchTabs (props) {
  return (
    <View style={styles.tags}>
      {props.searches.reverse().map(query => {
        let tagStyle = styles.tag
        if (query === props.activeSearch) {
          tagStyle = Object.assign({...styles.tag}, styles.active)
        }
        return (
          <TouchableOpacity key={query} onPress={() => props.onClickTab(query)}>
            <Text style={tagStyle}>{query}</Text>
          </TouchableOpacity>
        )
      })}
    </View>
  )
}

const styles = {
  tags: {
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  tag: {
    padding: 5,
    marginRight: 5,
    marginBottom: 5,
    borderRadius: 5,
    backgroundColor: 'gray',
    color: '#fff',
    fontSize: 16
  },
  active: {
    backgroundColor: '#E46350'
  }
}
SearchTabs.propTypes = propTypes

export default SearchTabs
