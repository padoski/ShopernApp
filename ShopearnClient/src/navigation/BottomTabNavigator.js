import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/Home';
import Fontisto from 'react-native-vector-icons/Fontisto';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import ExploreNavigator from './ExploreNavigation';
import ProfileScreen from '../screens/Profile';
import HomeMapScreen from '../screens/HomeMap';
import SearchResultsTabNavigator from './SearchResultTabNavigator';
const Tab = createBottomTabNavigator();
const BottomTabNavigator = props => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: '#f15454',
      }}>
      <Tab.Screen
        name={'Odkrywaj'}
        //
        component={ExploreNavigator}
        options={{
          tabBarIcon: ({color}) => (
            <Fontisto name="search" size={25} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name={'Kierowcy'}
        component={HomeMapScreen}
        options={{
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="bike" size={25} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name={'Zlecenia'}
        component={SearchResultsTabNavigator}
        options={{
          tabBarIcon: ({color}) => (
            <Fontisto name="map" size={25} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name={'Profil'}
        component={ProfileScreen}
        options={{
          tabBarIcon: ({color}) => (
            <EvilIcons name="user" size={25} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
export default BottomTabNavigator;
