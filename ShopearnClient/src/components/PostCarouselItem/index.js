import React from 'react';
import {View, Text, Image, Pressable, Alert} from 'react-native';
import useWindowDimensions from 'react-native/Libraries/Utilities/useWindowDimensions';
import styles from './styles.js';
import {useNavigation} from '@react-navigation/native';

const PostCarouselItem = props => {
  const post = props.post;
  const navigation = useNavigation();
  //   const goToPostPage = () => {
  //     navigation.navigate('Post', {post: post});
  //   };
  const width = useWindowDimensions().width;
  const driverAlert = () => {
    Alert.alert(
      'Brak dostępu!',
      'Aby zobaczyć szczegóły, przyjąć zamówienie i móc zarabiać, pobierz aplikację ShopEarnDriver',
      [
        {
          text: 'Ok',
          // onPress: () => navigation.navigate('Zlecenia'),
        },
      ],
    );
  };
  return (
    <Pressable
      onPress={driverAlert}
      style={[styles.container, {width: width - 60}]}>
      <View style={styles.innerContainer}>
        {/* <Image
          style={styles.image}
          source={{
            uri: post.image,
          }}
        /> */}
        <View style={styles.info}>
          <Text style={styles.price}>{post.price} zł</Text>
          <Text style={styles.time}>{post.time}</Text>
          <Text style={styles.type}>{post.typ}</Text>
        </View>
      </View>
    </Pressable>
  );
};
export default PostCarouselItem;
