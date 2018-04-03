import React from 'react'
import { View, Text } from 'react-native'
import PropTypes from 'prop-types'

const propTypes = {
  searches: PropTypes.array.isRequired,
  lastSearch: PropTypes.string,
  onClickTab: PropTypes.func.isRequired
}

function SearchTabs (props) {
  return (
    <View style={styles.tags}>
      {props.searches.reverse().map(search => {
        let tagStyle = styles.tag
        if (search === props.lastSearch) {
          tagStyle = Object.assign({...styles.tag}, styles.active)
        }
        return (<Text key={search} onClick={() => props.onClickTab(search)} style={tagStyle}>{search}</Text>)
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
    marginTop: 5,
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
