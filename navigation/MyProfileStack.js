import React from 'react';
import { Image, TouchableHighlight } from 'react-native';
import { createStackNavigator } from 'react-navigation';

import ProfileScreen from '../screens/ProfileScreen';
import ItemDetailScreen from '../screens/ItemDetailScreen';

export default createStackNavigator(
  {
    ProfileScreen,
    ItemDetailScreen
  },
  {
    headerMode: 'float',
    headerBackTitleVisible: true,
    navigationOptions: ({ navigation }) => ({
      headerStyle: { backgroundColor: '#6F6E6C' },
      title: 'TINDER FOR COOL SHIT',
      headerTintColor: 'white',
      headerLeft: (
        <TouchableHighlight onPress={() => navigation.toggleDrawer()}>
          <Image
            source={require('./hamburger-icon.png')}
            style={{ width: 30, height: 30, marginLeft: 10 }}
          />
        </TouchableHighlight>
      )
    })
  }
);
