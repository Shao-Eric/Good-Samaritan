import React, { Component } from 'react';
import { View, Text, FlatList } from 'react-native';
import Post from './Post';
export default class PostingsList extends Component {
  render() {
    console.log(this.props.posts);
    return (
      <View style={{ flex: 1 }}>
        <FlatList
          data={this.props.posts}
          renderItem={item => (
            <Post
              title={item.item.postinginfo.title}
              location={item.item.postinginfo.location}
              description={item.item.postinginfo.description}
              category={this.props.category}
            />
          )}
          ListHeaderComponent={this.props.header}
        />
      </View>
    );
  }
}
