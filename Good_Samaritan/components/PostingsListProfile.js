import React, { Component } from 'react';
import { View, Text, FlatList } from 'react-native';
import Post from './Post'
export default class PostingsList extends Component {
  render() {
    return (
      <View style={{flex:1}}>
        <FlatList
          data={[1,2,3,4,5]}
          renderItem={(item)=> <Post/>}
          ListHeaderComponent={this.props.header}
        />
      </View>
    );
  }
}
