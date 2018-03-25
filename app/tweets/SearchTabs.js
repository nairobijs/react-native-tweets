import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

const propTypes = {
  searches: PropTypes.array.isRequired,
  activeSearch: PropTypes.string,
  onClickTab: PropTypes.func.isRequired
};

function SearchTabs(props) {
  return (
    <View>
      {props.searches.reverse().map(search => {
        let tagStyle = s.tag
        if (search === props.activeSearch) {
          tagStyle = Object.assign({...s.tag}, s.active)
        }
        return (<Text key={search} onClick={()=> props.onClickTab(search)} style={tagStyle}>{search}</Text>);
      })}
    </View>
  );
}

const s = {
  tag: {
    padding: 5,
    borderRadius: 5,
    backgroundColor: 'gray',
    color: '#fff',
    fontSize: 16,
    marginTop: 5
  },
  active: {
    backgroundColor: '#E46350',
  },
}
SearchTabs.propTypes = propTypes;

export default SearchTabs;
