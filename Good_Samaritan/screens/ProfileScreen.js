import React from 'react';
import { View, Text, Platform, Image, TouchableOpacity } from 'react-native';
import {Constants} from 'expo'
import PostingsList from '../components/PostingsListProfile'
import firebase from 'firebase'
export default class ProfileScreen extends React.Component {
  render() {
    return (
      <View style={{flex:1}}>
        <View style={{backgroundColor: '#9ECBC8', paddingTop: Constants.statusBarHeight, paddingHorizontal: 8, minHeight: 60}}>
          <TouchableOpacity
            style={{ flexDirection: 'row', alignItems: 'center' }}
            onPress={()=>this.props.navigation.goBack()}
          >
            <Image
              resizeMode="contain"
              style={{width: 24, height: 24, marginTop: 16, marginHorizontal:8}}
              source={Platform.OS === 'ios' ?  require('../images/navigation/ic_action_chevron_left.png') : require('../images/navigation/ic_action_arrow_back.png')}
            />
            <Text style={{color: 'white', fontSize: 16, alignItems: 'center', marginTop:16}}>RobinGood</Text>

          </TouchableOpacity>

          {/* To Be Replaced With displayName */}

          <Text style={{padding: 8, fontSize: 18, color: 'white'}}>davidmargolin (HelperScore: 18)</Text>
        </View>

        <PostingsList style={{flex:1}} header={<Text style={{padding: 8, fontSize: 18}}>Your Posts</Text>}/>
      </View>
    );
  }
}
