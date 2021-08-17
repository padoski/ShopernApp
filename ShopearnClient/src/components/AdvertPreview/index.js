import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './styles';
import Feather from 'react-native-vector-icons/Feather';

const AdvertPreview = props => {
  const {contact, image, price, request, time} = props;
  console.log(contact);
  console.log(image);
  console.log(price);
  console.log(request);
  console.log(time);
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri: image,
        }}
      />
      <View style={styles.info}>
        <Text style={styles.price}>{price} zł</Text>
        <Text style={styles.time}>{time}</Text>
        <Text style={styles.contact}>
          <Feather name="phone-call" size={25} color="black" />
          {'   ' + contact}
        </Text>
        <Text style={styles.request} numberOfLines={6}>
          {request}
        </Text>
      </View>
    </View>
  );
};
export default AdvertPreview;
