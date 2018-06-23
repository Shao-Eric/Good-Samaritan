import React, {Component} from 'react'
import {View,Text,TouchableOpacity} from 'react-native'
import FreeStuffScreen from './FreeStuffScreen';
import ServicesScreen from './ServicesScreen';
import MessageScreen from './MessageScreen';
import ProfileScreen from './ProfileScreen';
import FormScreen from './FormScreen';
import {Constants} from 'expo'
import {createStackNavigator, } from 'react-navigation'
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs'
import { MaterialIcons, Entypo, FontAwesome } from '@expo/vector-icons'

const StackNavigator = createStackNavigator({
  contentView: {
    screen: createMaterialBottomTabNavigator({
      "Stuff": {
        screen: FreeStuffScreen,
        navigationOptions: {
          tabBarLabel: 'Stuff',
          tabBarIcon: <MaterialIcons name="shopping-basket" size={24} color='white'/>
        }
      },
      "Services": {
        screen: ServicesScreen,
        navigationOptions: {
          tabBarLabel: 'Services',
          tabBarIcon: <Entypo name="tools" size={24} color='white'/>
        }
      }
    },{
      labled: true,
      activeTintColor: 'white',
      inactiveTintColor: 'white',
      barStyle:{backgroundColor: '#9ECBC8'},
      initialRouteName: 'Stuff',
    })},
    chatscreen: { screen: MessageScreen },
    form: { screen: FormScreen }
   },{
    headerMode: 'none'
});

export default class MainScreen extends Component{


  render() {
    return (
      <View style={{flex:1, }}>
        <View style={{backgroundColor: '#9ECBC8', paddingTop: Constants.statusBarHeight, flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={{color: 'white',padding:12, fontSize: 18}}>RobinGood</Text>
          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity
              onPress={()=>  this.props.navigation.navigate('form')}
            >
              <MaterialIcons name="add-circle-outline" size={30} color='white' style={{padding:12}}/>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={()=>  this.props.navigation.navigate('profile')}
            >
              <FontAwesome name="user-circle" size={24} color='white' style={{padding:12}}/>
            </TouchableOpacity>
          </View>
        </View>
        <StackNavigator style={{flex:1}}/>
      </View>
    );
  }
}
