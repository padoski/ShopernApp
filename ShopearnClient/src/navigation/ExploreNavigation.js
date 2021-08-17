import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/Home';

const Stack = createStackNavigator();

const ExploreNavigator = props => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={'Welcome'}
        component={HomeScreen}
        // component={OrderScreen}
        options={{
          headerShown: false,
        }}
      />
      {/* <Stack.Screen
        name={'Adverts'}
        component={SearchResultsTabNavigator}
        options={{title: 'Zlecenia'}}
      /> */}
    </Stack.Navigator>
  );
};
export default ExploreNavigator;
