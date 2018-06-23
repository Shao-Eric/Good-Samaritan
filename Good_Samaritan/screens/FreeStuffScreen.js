import React from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';

export default class FreeStuffScreen extends React.Component {
  render() {
    return (
      <View>
        <Text onPress={() => firebase.auth().signOut()}>
          FreeStuffMapScreen
        </Text>
        <Text>{firebase.auth().currentUser.displayName}</Text>
        <Text>FreeStuffMapScreen</Text>
        <Text>FreeStuffMapScreen</Text>
        <Text>FreeStuffMapScreen</Text>
      </View>
    );
  }
}
