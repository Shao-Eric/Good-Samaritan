import React from 'react';
import { View, Text, Button } from 'react-native';
import { Constants } from 'expo';
import PostingsList from '../components/PostingsListProfile';
import firebase from 'firebase';
export default class FreeStuffScreen extends React.Component {
  state = {
    posts: []
  };
  componentDidMount = () => {
    let ref = firebase
      .database()
      .ref('giveaway/posts')
      .ref.on('value', dataSnapshot => {
        if (dataSnapshot.val() != null) {
          let result = dataSnapshot.val();
          let postList = [];
          for (let post of Object.keys(result)) {
            postList.push(result[post]);
          }
          this.setState({ posts: postList });
        }
      });
  };
  render() {
    return (
      <View style={{ flex: 1 }}>
        <PostingsList
          posts={this.state.posts}
          category="Free Stuff"
          style={{ flex: 1 }}
        />
      </View>
    );
  }
}
