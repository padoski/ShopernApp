import React from 'react';
import {View, Text, Image, Pressable, Alert} from 'react-native';
import styles from './styles.js';
import {useNavigation} from '@react-navigation/native';

const Post = props => {
  const post = props.post;

  const navigation = useNavigation();
  //   const goToPostPage = () => {
  //     // navigation.navigate('Post', {postId: post.id});
  //     navigation.navigate('Post', {post: post});
  //   };
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
    <Pressable onPress={driverAlert} style={styles.container}>
      <View style={styles.info}>
        <Text style={styles.price}>{post.price} zł</Text>
        <Text style={styles.time}>{post.time}</Text>
      </View>
      <Text style={styles.request} numberOfLines={6}>
        {post.request}
      </Text>
    </Pressable>
  );
};
export default Post;
