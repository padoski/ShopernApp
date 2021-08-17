import React, {useEffect, useState} from 'react';
import {View, FlatList} from 'react-native';

import Post from '../../components/Post';

const AdvertsScreen = props => {
  const {adverts} = props;

  return (
    <View>
      <FlatList data={adverts} renderItem={({item}) => <Post post={item} />} />
    </View>
  );
};
export default AdvertsScreen;
