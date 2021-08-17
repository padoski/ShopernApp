import React, {useState, useEffect} from 'react';
import {View, Image, FlatList} from 'react-native';
//import styles from './styles';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
// import cars from '../../assets/data/cars';
import {API, graphqlOperation} from 'aws-amplify';
import {listCars} from '../../graphql/queries';

const HomeMap = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const response = await API.graphql(graphqlOperation(listCars));
        console.log(response);
        setCars(response.data.listCars.items);
      } catch (e) {
        console.log(e);
      }
    };
    fetchCars();
  }, []);
  return (
    <View>
      <MapView
        style={{height: '100%', width: '100%'}}
        provider={PROVIDER_GOOGLE}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}>
        {cars.map(car => (
          <Marker
            coordinate={{latitude: car.latitude, longitude: car.longitude}}>
            <Image
              style={{
                width: 60,
                height: 60,
                resizeMode: 'contain',
                transform: [{rotate: `${car.heading}deg`}],
              }}
              source={require('../../assets/images/car.png')}
            />
          </Marker>
        ))}
      </MapView>
    </View>
  );
};

export default HomeMap;
