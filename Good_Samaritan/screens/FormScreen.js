import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  Keyboard,
  TextInput,
  ScrollView,
  TouchableHighlight
} from 'react-native';
import * as firebase from 'firebase';

const t = require('tcomb-form-native');

const Form = t.form.Form;

const newUser = t.struct({
  firstname: t.String,
  lastname: t.String,
  email: t.String,
  password: t.String
});

const options = {
  fields: {
    firstname: {
      autoCapitalize: 'words',
      autoCorrect: false
    },
    lastname: {
      autoCapitalize: 'words',
      autoCorrect: false
    },
    email: {
      autoCapitalize: 'none',
      autoCorrect: false
    },
    password: {
      autoCapitalize: 'none',
      password: true,
      autoCorrect: false
    }
  }
};

export default class FormScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: {
        firstname: '',
        lastname: '',
        email: '',
        password: ''
      }
    };
  }

  componentWillUnmount() {
    this.setState = {
      value: {
        firstname: '',
        lastname: '',
        email: '',
        password: null
      }
    };
  }

  _onChange = value => {
    this.setState({
      value
    });
  };

  _handleAdd = () => {
    const value = this.refs.form.getValue();
    if (value) {
      const data = {
        firstname: value.firstname,
        lastname: value.lastname,
        email: value.email,
        password: value.password
      };
      /*
... soon to be updated
*/
    }
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <Form
          ref="form"
          type={newUser}
          options={options}
          value={this.state.value}
          onChange={this._onChange}
        />
        <TouchableHighlight onPress={this._handleAdd}>
          <Text style={[styles.submitButton, styles.submitButtonText]}>
            Create account
          </Text>
        </TouchableHighlight>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    backgroundColor: '#222',
    padding: 40
  },
  input: {
    padding: 8,
    width: '100%',
    margin: 4,
    backgroundColor: '#444',
    borderColor: '#000',
    color: 'white',
    borderWidth: 1
  },
  submitButton: {
    // background-image: linear-gradient(to right, #314755 0%, #26a0da 51%, #314755 100%),
    backgroundColor: '#2352a3',
    padding: 10,
    margin: 4,
    width: '100%'
  },
  submitButtonText: {
    textAlign: 'center',
    color: 'white'
  }
});
