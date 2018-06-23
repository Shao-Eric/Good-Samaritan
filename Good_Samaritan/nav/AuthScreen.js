import React from 'react';
import { StyleSheet } from 'react-native';
import firebase from 'firebase';
import WelcomeScreen from '../screens/WelcomeScreen'
import {AppLoading} from 'expo';
import RegisterScreen from '../screens/RegisterScreen';
import LoginScreen from '../screens/LoginScreen';
import {createBottomTabNavigator,createStackNavigator} from 'react-navigation'
import FreeStuffScreen from '../screens/FreeStuffScreen'
import ServicesScreen from '../screens/ServicesScreen'
import MessageScreen from '../screens/MessageScreen'
import ProfileScreen from '../screens/ProfileScreen'
import FormScreen from '../screens/FormScreen'
/*
  Login Status:
    -1 firebase auth loading.
    0 no user signed in.
    1 user account found
*/

  const MainNavigator = createStackNavigator({
    welcome: { screen: WelcomeScreen },
    reg: { screen: RegisterScreen },
    login: {screen: LoginScreen}
  })

  const StackNavigator =   createStackNavigator({
    contentView: {
      screen: createBottomTabNavigator({
        stuff: { screen: FreeStuffScreen },
        services: { screen: ServicesScreen },
      }),
    },
    chatscreen: {screen: MessageScreen},
    profile: {screen: ProfileScreen},
    form: {screen: FormScreen}
  })

export default class AuthCheck extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      login_status: -1,
      displayName: null
    }
  }

  async componentDidMount() {

    firebase.initializeApp({
      apiKey: 'AIzaSyD2L4nLnnoGsIdkFS9q1oE6fxG8QAIA-vY',
      authDomain: 'good-samaritan-e3105.firebaseapp.com',
      databaseURL: 'https://good-samaritan-e3105.firebaseio.com',
      projectId: 'good-samaritan-e3105',
      storageBucket: 'good-samaritan-e3105.appspot.com',
      messagingSenderId: '698386890442'    });

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        if (this.state.login_status!= 1){
          this.setState({
            login_status: 1,
            displayname: user.displayName
          })
        }
      } else {
        console.log("No User Signed In")
        this.setState({
          login_status: 0,
          displayname: null
        })
      }
    });

  }

  setNewDisplayName(name){
    this.setState({displayname: name, new_registration: true})
  }


  render(){
    if (this.state.login_status == 0){
      return(
        <MainNavigator/>
      )
    }else if (this.state.login_status == 1){
      return(
        <MessageScreen/>
      )
    }else{
      return(
        <AppLoading/>
      )
    }
  }
}
