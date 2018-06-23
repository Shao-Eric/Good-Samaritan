import React from 'react';
import { View, Text } from 'react-native';
import Registration from '../components/login/Registration';

export default class RegisterScreen extends React.Component {
  render() {
    return (
        <Registration style={{flex:1}} />
    );
  }
}

const styles = {
  viewContainer: {
    flex: 1
  }
};
