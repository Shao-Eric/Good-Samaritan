import React from 'react';
import { View, Text, Image, TextInput, StyleSheet, Button } from 'react-native';
import firebase from 'firebase';

export default class MessageScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      postTitle: 'Free Kittens',
      sender: '',
      receiver: 'David',
      messages: []
    };
    this.onSend = this.onSend.bind(this);
  }
  componentDidMount = () => {
    let sender = firebase.auth().currentUser.uid;
    firebase
      .database()
      .ref('message/0')
      .set({ test: 'test' });
    this.setState({ sender });

    this.loadingMessages();
  };

  onSend() {
    let inputValue = this.state.text;
    let sender = this.state.sender;
    let title = this.state.title;
    // 'posts/postID/chats/requesterId/Date'
    firebase
      .database()
      .ref('post/123/chats/321/' + Date.now())
      .set({
        text: inputValue,
        sender: 'Eric'
      });
  }

  loadingMessages() {
    let ref = firebase.database().ref('post/123/chats/321');
    ref.on('value', dataSnapshot => {
      if (dataSnapshot.val() != null) {
        let result = dataSnapshot.val();
        let messageList = [];
        for (let message of Object.keys(result)) {
          result[message]['date'] = message;
          messageList.push(result[message]);
        }
        this.setState({ messages: messageList });
      }
    });
  }

  render() {
    console.log(this.state);
    let msgs = this.state.messages;
    return (
      <View
        style={{
          margin: 20,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between'
        }}
      >
        <Button
          title="Go Back"
          onPress={() => this.props.navigation.goBack()}
        />
        <Text
          style={{
            fontSize: 24,
            fontWeight: 'bold',
            marginBottom: 5,
            marginTop: 15
          }}
        >
          Chat with {this.state.receiver}
        </Text>
        {this.state.messages.map(
          message =>
            message.sender !== this.state.sender ? (
              <Text
                style={{
                  textAlign: 'left',
                  backgroundColor: 'lawngreen',
                  padding: 5,
                  borderRadius: 10,
                  marginBottom: 10
                }}
              >
                <Text style={{ fontWeight: 'bold' }}>{message.sender}</Text>:{
                  message.text
                }
              </Text>
            ) : (
              <Text
                style={{
                  textAlign: 'right',
                  backgroundColor: 'yellow',
                  padding: 5,
                  borderRadius: 10,
                  marginBottom: 10
                }}
              >
                <Text style={{ fontWeight: 'bold' }}>{message.sender}</Text>:{
                  message.text
                }
              </Text>
            )
        )}
        <TextInput
          style={{
            marginTop: 20,
            padding: 20,
            borderRadius: 10,
            backgroundColor: '#66FFFF',
            justifyContent: 'space-between'
          }}
          placeholder="Type your text"
          onChangeText={text => this.setState({ text })}
          onSubmitEditing={() => this.onSend()}
        />
      </View>
    );
  }
}
