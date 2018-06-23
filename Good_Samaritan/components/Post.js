import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import firebase from 'firebase';
import CardSection from './login/CardSection';
import { withNavigation } from 'react-navigation';
class Post extends Component {
  render() {
    const lng = -74.006;
    const lat = 40.7128;
    const staticmap =
      'https://maps.googleapis.com/maps/api/staticmap?center=' +
      lat +
      ',' +
      lng +
      '&zoom=15&size=1920x1080&&markers=color:red%7C' +
      lat +
      ',' +
      lng +
      '&maptype=roadmap&key=AIzaSyDKrWzEk1gBDDyBI0zSQgD5TPiHvXd1UHQ';
    return (
      <TouchableOpacity
        style={styles.containerStyle}
        onPress={() =>
          this.props.navigation.navigate('chatscreen', {
            requesterid: this.props.requesterId,
            userid: firebase.auth().currentUser.uid,
            postid: this.props.postid
          })
        }
      >
        <View style={{ margin: 4, borderRadius: 5 }}>
          {/* Title Type Location Description Photo? */}
          <Image source={{ uri: staticmap }} style={styles.imageStyle} />
        </View>

        <CardSection>
          <View style={styles.textContainer}>
            <Text style={{ fontSize: 18 }}>{this.props.title}</Text>
            <Text style={{ fontSize: 12 }}>{this.props.category}</Text>
            <Text style={{ fontSize: 12 }}>{this.props.description}</Text>
          </View>
        </CardSection>
      </TouchableOpacity>
      // <View style={{ margin: 4, borderRadius: 5 }}>
      //   {/* Title Type Location Description Photo? */}
      //   <Image
      //     source={{ uri: staticmap }}
      //     style={{
      //       width: '100%',
      //       height: 60,
      //       borderTopLeftRadius: 3,
      //       borderTopRightRadius: 3
      //     }}
      //   />
      //   <View style={{ padding: 8 }}>
      //     <Text style={{ fontSize: 16 }}>Post Title</Text>
      //     <Text style={{ fontSize: 12 }}>Post Date</Text>
      //     <Text style={{ fontSize: 12 }}>Post Type</Text>
      //   </View>
      // </View>
    );
  }
}
export default withNavigation(Post);

const styles = {
  imageStyle: {
    height: 150,
    width: null,
    flex: 1
  },
  textContainer: {
    justifyContent: 'space-around',
    padding: 8
  },
  containerStyle: {
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    //width means left or right, height is top and bottom
    shadowOpacity: 0.1,
    shadowRadius: 2, //same purpose as borderRadius
    elevation: 1,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 1 //same margin property as CSS
  }
};
