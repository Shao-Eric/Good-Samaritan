import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  Keyboard,
  TextInput,
  ScrollView,
  TouchableHighlight,
  Picker,
  Button
} from 'react-native';
import firebase from 'firebase';
import t from 'tcomb-form-native'

const Form = t.form.Form;

const newUser = t.struct({
  title: t.String,
  location: t.String,
  description: t.String
});

const options = {
  fields: {
    title: {
      autoCapitalize: 'words',
      autoCorrect: false
    },
    location: {
      autoCapitalize: 'none',
      autoCorrect: false
    },
    description: {
      autoCapitalize: 'none',
      description: true,
      autoCorrect: false
    }
  }
};

export default class FormScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: {
        title: '',
        location: '',
        description: ''
      }
    };
  }

  componentWillUnmount() {
    this.setState = {
      value: {
        title: '',
        location: '',
        description: null
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
        title: value.title,
        location: value.location,
        description: value.description
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
        <Picker selectedValue={this.state.choices}
          style={[styles.container]}
          onValueChange={(itemValue, itemIndex) => this.setState({choices: itemValue})}>
          <Picker.Item label="Service" value="service" />
          <Picker.Item label="Giveaway" value="giveaway" />
          <Picker.Item label="Exchange" value="exchange" />
        </Picker>
        <TouchableHighlight onPress={this._handleAdd}>
          <Text style={[styles.submitButton, styles.submitButtonText]}>
            Submit
          </Text>
        </TouchableHighlight>
      </ScrollView>
    );
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
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
  descInput: {
    padding: 8,
    width: '100%',
    height: '40%',
    margin: 4,
    backgroundColor: '#444',
    borderColor: '#000',
    color: 'white',
    borderWidth: 1
  },
  submitButton: {
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
