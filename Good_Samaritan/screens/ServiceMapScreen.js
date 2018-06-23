import React from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-elements';

export default class ServiceMapScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Service Map',
      headerRight: (
        <Button
          title="Toggle Map"
          onPress={() => navigation.navigate('freestuff')}
          backgroundColor="rgba(0,0,0,0)"
          color="rgba(0,122,255,1)"
        />
      )
    };
  };
  render() {
    return (
      <View>
        <Text>ServiceMapScreen</Text>
        <Text>ServiceMapScreen</Text>
        <Text>ServiceMapScreen</Text>
        <Text>ServiceMapScreen</Text>
        <Text>ServiceMapScreen</Text>
      </View>
    );
  }
}
