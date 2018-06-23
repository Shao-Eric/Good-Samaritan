import React from 'react';
import { View, Text, Platform, Image, TouchableOpacity } from 'react-native';
import { Constants } from 'expo';
import PostingsList from '../components/PostingsListProfile';
import firebase from 'firebase';
export default class ProfileScreen extends React.Component {
  render() {
    return (
      <View style={styles.viewContainer}>
        <View
          style={{
            backgroundColor: '#9ECBC8',
            paddingTop: Constants.statusBarHeight,
            paddingHorizontal: 8
          }}
        >
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              alignItems: 'center'
            }}
          >
            <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
              <Image
                resizeMode="contain"
                style={{
                  width: 24,
                  height: 24,
                  marginTop: 16,
                  marginHorizontal: 8
                }}
                source={
                  Platform.OS === 'ios'
                    ? require('../images/navigation/ic_action_chevron_left.png')
                    : require('../images/navigation/ic_action_arrow_back.png')
                }
              />
            </TouchableOpacity>
            <View
              style={{
                alignItems: 'center',
                textAlign: 'center',
                flexGrow: 1,
                paddingTop: 10
              }}
            >
              <Text
                onPress={() => this.props.navigation.goBack()}
                style={{ flex: 1, fontSize: 20, color: 'white' }}
              >
                Robin Good
              </Text>
            </View>
            <View style={{ height: 24, width: 40 }} />
          </View>
          {/* To Be Replaced With displayName */}

          <Text style={{ padding: 8, fontSize: 18, color: 'white' }}>
            davidmargolin (HelperScore: 18)
          </Text>
        </View>

        <PostingsList
          style={{ flex: 1 }}
          header={<Text style={{ padding: 8, fontSize: 18 }}>Your Posts</Text>}
        />
      </View>
    );
  }
}

const styles = {
  viewContainer: {
    flex: 1
  }
};
