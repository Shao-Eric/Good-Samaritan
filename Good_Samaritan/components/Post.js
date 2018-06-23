import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';

import Card from './Card';
import CardSection from './login/CardSection';

export default class Post extends Component {
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
      <Card>
        <View style={{ margin: 4, borderRadius: 5 }}>
          {/* Title Type Location Description Photo? */}
          <Image source={{ uri: staticmap }} style={styles.imageStyle} />
        </View>

        <CardSection>
          <View style={styles.textContainer}>
            <Text style={{ fontSize: 18 }}>Post Title</Text>
            <Text style={{ fontSize: 12 }}>Category</Text>
            <Text style={{ fontSize: 12 }}>Date Posted</Text>
          </View>
        </CardSection>
      </Card>
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

const styles = {
  imageStyle: {
    height: 150,
    width: null,
    flex: 1
  },
  textContainer: {
    justifyContent: 'space-around',
    padding: 8
  }
};
