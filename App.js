import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator ,createAppContainer } from 'react-navigation';
import {RoutesNoAuths} from './Components/NoAuth/RoutesNoAuth';
import RoutesAuths from './Components/Auth/RoutesAuth';
export default class App extends React.Component {
  render() {
    return (
        <RoutesAuths/>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
