import React from 'react';
import {View, Text} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import styles from './styles';

const SuggestionRow = ({item}) => {
  console.log(item);
  const createIcon = item => {
    switch (item.description) {
      case 'Dom':
        return <Entypo name="home" size={20} color="black" />;
      case 'Praca':
        return <Entypo name="classic-computer" size={20} color="black" />;
      default:
        return <Entypo name="location-pin" size={20} color="black" />;
    }
  };
  return (
    <View style={styles.row}>
      <View style={styles.iconContainer}>{createIcon(item)}</View>
      <Text style={styles.locationText}>
        {item.description || item.vicinity}
      </Text>
    </View>
  );
};

export default SuggestionRow;
