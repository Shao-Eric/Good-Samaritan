import React from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-elements';
import PostingsList from '../components/PostingsListProfile'
export default class ServicesScreen extends React.Component {
  render() {
    return (
      <View style={{flex:1}}>
        <PostingsList style={{flex:1}}/>
      </View>
    );
  }
}
