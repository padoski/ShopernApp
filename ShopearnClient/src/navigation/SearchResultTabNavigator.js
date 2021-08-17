import React, {useState, useEffect} from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import AdvertsScreen from '../screens/Adverts';
import ResultsMap from '../screens/ResultsMap';
import {useRoute} from '@react-navigation/native';
import {API, graphqlOperation} from 'aws-amplify';
import {listAdverts} from '../graphql/queries';

const Tab = createMaterialTopTabNavigator();

const SearchResultsTabNavigator = props => {
  const route = useRoute();

  console.log(route);
  // const {distance, viewport} = route.params;
  const [adverts, setAdverts] = useState([]);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const postResult = await API.graphql(
          graphqlOperation(
            listAdverts,
            //     filter: {
            //       and: {
            //         latitude: {
            //           between: [
            //             viewport.southwest.lat - distance * 0.009,
            //             viewport.northeast.lat + distance * 0.009,
            //           ],
            //         },
            //         longitude: {
            //           between: [
            //             viewport.southwest.lng - distance * 0.009,
            //             viewport.northeast.lng + distance * 0.009,
            //           ],
            //         },
            //       },
            //     },
            //   }
          ),
        );

        setAdverts(postResult.data.listAdverts.items);
      } catch (e) {
        console.log(e);
      }
    };
    fetchPost();
  }, []);

  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: '#f15454',
        indicatorStyle: {
          backgroundColor: '#f15454',
        },
      }}>
      <Tab.Screen name={'list'} options={{title: 'Lista'}}>
        {() => <AdvertsScreen adverts={adverts} />}
      </Tab.Screen>
      <Tab.Screen name={'map'} options={{title: 'Mapa'}}>
        {() => <ResultsMap adverts={adverts} />}
      </Tab.Screen>
    </Tab.Navigator>
  );
};
export default SearchResultsTabNavigator;
