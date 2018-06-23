import React from 'react';
import { View, Text } from 'react-native';
import {Constants} from 'expo'
import PostingsList from '../components/PostingsListProfile'
export default class FreeStuffScreen extends React.Component {
  render() {
    return (
      <View style={{flex:1}}>
        <PostingsList style={{flex:1}}/>
      </View>
    );
  }
}
