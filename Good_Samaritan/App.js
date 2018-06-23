import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import firebase from 'firebase';
import AuthScreen from './nav/AuthScreen';
export default class App extends React.Component {
  render() {
    return(
      <AuthScreen/>
    )

  }
    // const MainNavigator = createBottomTabNavigator({
    //   main: {
    //     screen: createBottomTabNavigator({
    //           service: { screen: ServiceMapScreen },
    //           freestuff: { screen: FreeStuffMapScreen },
    //     })
    //   }
    // });
    // return (
    //     <MainNavigator style={styles.container}/>
    // );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  }
});
