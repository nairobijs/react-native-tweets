import React, { Component } from 'react';

import { 
  View, 
  Text, 
  StyleSheet,
  Button } from 'react-native';


export default class Testing extends Component {
  static navigationOptions = ({ navigation }) => {
    const { params } = navigation.state || {};
    
    return {
      title: params ? params.title + ' ' + params.count : 'Testing Screen ',
      // title: params.title + ' ' + params.count,
      // headerTitle: <LogoTitle />,
      // headerRight: (
        // <Button onPress={params.increaseCount} title="+1" color="green" />
      // ),
    }
  }

  state = {
    showOthers: false,
    count: 0,
  }
  componentWillMount() {
    this.props.navigation.setParams({ increaseCount: this._increaseCount });
    
  }
  componentWillUpdate(){
  }
  _increaseCount = () => {
    this.props.navigation.setParams({ count: this.state.count + 1 });
    this.setState({ count: this.state.count + 1 });
  }
  showOthers = () => {
    this.setState({ showOthers: !this.state.showOthers })
  }
  render() {

    const { showOthers } = this.state
    const { navigation } = this.props

    return (
        <View style={s.container}>

          {showOthers && 
            <View>
              <Text>One</Text>
              <Text>Two</Text>
            </View>
          }
          
          <Text>Three</Text>
          <Text>Four</Text>

          {showOthers && 
            <Text>Five</Text>
          }

          <Button onPress={this.showOthers} title={showOthers ? 'Hide Others' : 'Show Others' } />
          <View style={s.linebreak}></View>
          <Button onPress={() => { navigation.navigate('MyModal')}} title="Show modal" />
          <View style={s.linebreak}></View>
          <Button onPress={() => {alert('Are you sure!')}} title="Show alert" />

      </View>
    );
  }
}


const s = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  linebreak: {
    height: 20,
  },
})