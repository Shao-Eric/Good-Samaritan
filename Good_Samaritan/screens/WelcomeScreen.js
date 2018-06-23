import React, { Component } from 'react';
import { View, Text, AsyncStorage } from 'react-native';
import { AppLoading } from 'expo';
import Slides from '../components/Slides';

const SLIDE_DATA = [
  { text: 'Welcome to the Robin Good', color: '#03A9F4' },
  { text: 'Use this app to help each other locally', color: '#009688' },
  { text: 'Set your location, and start Robin Good', color: '#03A9F4' }
];

class WelcomeScreen extends Component {
  //state = { token: null };

  // async componentWillMount() {
  //   let token = await AsyncStorage.getItem('fb_token');
  //   if (token) {
  //     this.props.navigation.navigate('map');
  //     this.setState({ token });
  //   } else {
  //     this.setState({ token: false });
  //   }
  // }

  onLogin = () => {
    this.props.navigation.navigate('auth');
  };

  onRegister = () => {
    this.props.navigation.navigate('reg');
  };
  render() {
    // if (this.state.token === null) {
    //   return <AppLoading />;
    // }
    return (
      <Slides
        data={SLIDE_DATA}
        onLogin={this.onLogin.bind(this)}
        onRegister={this.onRegister.bind(this)}
      />
    );
  }
}

export default WelcomeScreen;
