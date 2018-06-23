import React from 'react';
import { View, Text } from 'react-native';
import Login from '../components/login/Login';

export default class AuthScreen extends React.Component {
  render() {
    return (
      <View style={styles.viewContainer}>
        <Login />
      </View>
    );
  }
}

const styles = {
  viewContainer: {
    flex: 1
  }
};
