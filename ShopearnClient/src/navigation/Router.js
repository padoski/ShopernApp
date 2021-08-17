import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import BottomTabNavigator from './BottomTabNavigator';
import OrderScreen from '../screens/Order';
import DestinationSearchOrderScreen from '../screens/DestinationSearchOrder';

const Stack = createStackNavigator();
const Router = props => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={BottomTabNavigator}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Order"
          component={OrderScreen}
          options={{
            headerTitleStyle: {alignSelf: 'center'},
            title: 'Stwórz ogłoszenie',
          }}
        />
        <Stack.Screen
          name="DestinationSearchOrder"
          component={DestinationSearchOrderScreen}
          options={{
            headerTitleStyle: {alignSelf: 'center'},
            title: 'Wybierz miejsce dostawy',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default Router;
