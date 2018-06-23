import React, { Component } from 'react';
import { View, Text,Image } from 'react-native';
import ElevatedView from 'react-native-elevated-view'

export default class Post extends Component {
  render() {
    const lng = -74.0060
    const lat = 40.7128
    const staticmap = "https://maps.googleapis.com/maps/api/staticmap?center="+lat+","+lng+"&zoom=15&size=1920x1080&&markers=color:red%7C"+lat+","+lng+"&maptype=roadmap&key=AIzaSyDKrWzEk1gBDDyBI0zSQgD5TPiHvXd1UHQ"
    return (
      <ElevatedView elevation={2} style={{margin: 4, borderRadius: 5}}>
        {/* Title Type Location Description Photo? */}
        <Image source={{uri:staticmap}} style={{width: '100%', height: 60, borderTopLeftRadius:3, borderTopRightRadius: 3}}/>
        <View style={{padding:8}}>
          <Text style={{fontSize: 16}}>Post Title</Text>
          <Text style={{fontSize: 12}}>Post Date</Text>
          <Text style={{fontSize: 12}}>Post Type</Text>
        </View>
      </ElevatedView>
    );
  }
}
