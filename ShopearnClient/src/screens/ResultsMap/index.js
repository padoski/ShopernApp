import React from 'react';
import {useRef} from 'react';
import {useEffect} from 'react';
import {useState} from 'react';
import {Text, View} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import useWindowDimensions from 'react-native/Libraries/Utilities/useWindowDimensions';
import CustomMarker from '../../components/CustomMarker';
import PostCarouselItem from '../../components/PostCarouselItem';

const ResultsMap = props => {
  const [selectedPlaceId, setSelectedPlaceId] = useState(null);
  const {adverts} = props;

  const flatlist = useRef();
  const map = useRef();

  const viewConfig = useRef({
    itemVisiblePercentThreshold: 70,
    minimumViewTime: 400,
  });
  const onViewChanged = useRef(({viewableItems}) => {
    if (viewableItems.length > 0) {
      const selectedPlace = viewableItems[0].item;
      setSelectedPlaceId(selectedPlace.id);
    }
  });
  const width = useWindowDimensions().width;

  useEffect(() => {
    if (!selectedPlaceId || !flatlist) {
      return;
    }
    const index = adverts.findIndex(place => place.id === selectedPlaceId);
    flatlist.current.scrollToIndex({index});
    const selectedPlace = adverts[index];
    const region = {
      latitude: selectedPlace.latitude,
      longitude: selectedPlace.longitude,
      latitudeDelta: 0.8,
      longitudeDelta: 0.8,
    };
    map.current.animateToRegion(region);
  }, [selectedPlaceId]);
  return (
    <View style={{width: '100%', height: '100%'}}>
      <MapView
        ref={map}
        style={{width: '100%', height: '100%'}}
        provider={PROVIDER_GOOGLE}
        showsUserLocation={true}
        initialRegion={{
          latitude: 50.48831,
          longitude: 19.33903,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}>
        {adverts.map(place => (
          <CustomMarker
            coordinate={{latitude: place.latitude, longitude: place.longitude}}
            price={place.price}
            isSelected={place.id === selectedPlaceId}
            onPress={() => setSelectedPlaceId(place.id)}
          />
        ))}
      </MapView>
      <View style={{position: 'absolute', bottom: 10}}>
        <FlatList
          ref={flatlist}
          data={adverts}
          renderItem={({item}) => <PostCarouselItem post={item} />}
          horizontal
          showsHorizontalScrollIndicator={false}
          snapToInterval={width - 60}
          snapToAlignment={'center'}
          decelerationRate={'fast'}
          pagingEnabled
          viewabilityConfig={viewConfig.current}
          onViewableItemsChanged={onViewChanged.current}
        />
      </View>
    </View>
  );
};
export default ResultsMap;
