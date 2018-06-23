import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  KeyboardAvoidingView
} from 'react-native';
import firebase from 'firebase';
import RegistrationForm from './RegistrationForm';
//onPress={() => firebase.auth().signOut()
export default class Registration extends React.Component {
  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <View style={styles.logoContainer}>
          <Image
            style={styles.logo}
            source={require('../../images/RobinHood.png')}
          />
          <Text style={styles.title}>The Robin Good App</Text>
        </View>
        <View style={styles.formContainer}>
          <RegistrationForm setName={name => this.props.setName(name)} />
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#3498db',
    opacity: 0.9
  },
  logoContainer: {
    alignItems: 'center',
    flexGrow: 1,
    justifyContent: 'center',
    marginTop: 35
  },
  logo: {
    width: 150,
    height: 150
  },
  title: {
    color: '#FFF',
    marginTop: 30,
    width: 160,
    textAlign: 'center',
    opacity: 0.8
  },
  joinContainer: {
    paddingVertical: 12,
    marginBottom: 15
  }
};
