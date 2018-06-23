import React from 'react';
import { StyleSheet } from 'react-native';
import firebase from 'firebase';
import WelcomeScreen from '../screens/WelcomeScreen';
import { AppLoading } from 'expo';
import RegisterScreen from '../screens/RegisterScreen';
import LoginScreen from '../screens/LoginScreen';
import ProfileScreen from '../screens/ProfileScreen'
import {
  createBottomTabNavigator,
  createStackNavigator
} from 'react-navigation';
import MainScreen from '../screens/MainScreen'
/*
  Login Status:
    -1 firebase auth loading.
    0 no user signed in.
    1 user account found
*/

const MainNavigator2 = createStackNavigator(
  {
    welcome: { screen: MainScreen },
    profile: {
      screen: ProfileScreen
    },
  },
  {
      headerMode: 'none'
  }
);

const MainNavigator = createStackNavigator(
  {
    welcome: { screen: WelcomeScreen },
    reg: {
      screen: RegisterScreen
    },
    login: {
      screen: LoginScreen
    },
  },
  {
      headerMode: 'none'
  }
);



export default class AuthCheck extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      login_status: -1,
      displayName: null
    };
  }

  async componentDidMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyD2L4nLnnoGsIdkFS9q1oE6fxG8QAIA-vY',
      authDomain: 'good-samaritan-e3105.firebaseapp.com',
      databaseURL: 'https://good-samaritan-e3105.firebaseio.com',
      projectId: 'good-samaritan-e3105',
      storageBucket: 'good-samaritan-e3105.appspot.com',
      messagingSenderId: '698386890442'
    });

    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        if (this.state.login_status != 1) {
          this.setState({
            login_status: 1,
            displayname: user.displayName
          });
        }
      } else {
        console.log('No User Signed In');
        this.setState({
          login_status: 0,
          displayname: null
        });
      }
    });
  }

  setNewDisplayName = name => {
    firebase.auth().currentUser.updateProfile({ displayname: name });
  };

  render() {
    if (this.state.login_status == 0) {
      return <MainNavigator screenProps={{ setName: name => this.setNewDisplayName(name) }}/>;
    } else if (this.state.login_status == 1) {
      return (
        <MainNavigator2/>
      );
    } else {
      return <AppLoading />;
    }
  }
}
