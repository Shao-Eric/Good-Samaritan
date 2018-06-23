import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {
  createBottomTabNavigator,
  createStackNavigator
} from 'react-navigation';
import AuthScreen from './screens/AuthScreen';
import FormScreen from './screens/FormScreen';
import FreeStuffMapScreen from './screens/FreeStuffMapScreen';
import ListScreen from './screens/ListScreen';
import MessageScreen from './screens/MessageScreen';
import PersonalInfoScreen from './screens/PersonalInfoScreen';
import RegisterScreen from './screens/RegisterScreen';
import ServiceMapScreen from './screens/ServiceMapScreen';
import WelcomeScreen from './screens/WelcomeScreen';

export default class App extends React.Component {
  render() {
    const MainNavigator = createBottomTabNavigator({
      welcome: { screen: WelcomeScreen },
      auth: { screen: AuthScreen },
      reg: { screen: RegisterScreen },
      main: {
        screen: createBottomTabNavigator({
          map: {
            screen: createStackNavigator({
              service: { screen: ServiceMapScreen },
              freestuff: { screen: FreeStuffMapScreen }
            })
          },
          list: {
            screen: createStackNavigator({
              list: { screen: ListScreen },
              message: { screen: MessageScreen }
            })
          },
          form: { screen: FormScreen },
          personal: { screen: PersonalInfoScreen }
        })
      }
    });
    return (
      <View style={styles.container}>
        <MainNavigator />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  }
});
