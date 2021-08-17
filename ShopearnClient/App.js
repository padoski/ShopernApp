import React from 'react';
import 'react-native-gesture-handler';
import Router from './src/navigation/Router';
import {PermissionsAndroid, Platform} from 'react-native';
import Geolocation from '@react-native-community/geolocation';
navigator.geolocation = require('@react-native-community/geolocation');
import {useEffect} from 'react';
import Amplify from 'aws-amplify';
import config from './src/aws-exports';
import {withAuthenticator} from 'aws-amplify-react-native';

Amplify.configure(config);

const App = () => {
  const androidPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'Pozwolenie na lokalizacje',
          message:
            'Shopearn potrzebuje pozwolenia na Twoja lokalizacje ' +
            'abys mogl z niej korzystac.',
          buttonNeutral: 'Zapytaj mnie pozniej',
          buttonNegative: 'Nie pozwalam',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('You can use the location');
      } else {
        console.log('Camera permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  };
  useEffect(() => {
    if (Platform.OS === 'android') {
      androidPermission();
      console.log('SIEMAAA');
    } else {
      //ios permission
      Geolocation.requestAuthorization();
    }
  }, []);

  return <Router />;
  // return <HomeMap />;
};

export default withAuthenticator(App);
