import React from 'react';
import {View, Text, ImageBackground, Pressable} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();
  return (
    <View>
      <ImageBackground
        source={require('../../assets/images/clienthomebackground.png')}
        style={styles.image}>
        <Text style={styles.title}>ShopEarn</Text>
        <Text style={[styles.description, {fontSize: 18, bottom: 280}]}>
          Robienie zakupów, drobne usługi
        </Text>
        <Text style={[styles.description, {fontSize: 18, bottom: 250}]}>
          kradną ok. 2h Twojego dnia
        </Text>
        <Text style={styles.description}>Nie trać czasu, zlecaj!</Text>
        <View style={styles.buttonContainer}>
          <Pressable
            style={[styles.button, {backgroundColor: '#b5e7a0'}]}
            onPress={() => navigation.navigate('Order')}>
            <Feather name="shopping-cart" size={25} color="black" />
            <Text style={styles.buttonText}> Chcę zlecić</Text>
          </Pressable>
        </View>
      </ImageBackground>
    </View>
  );
};

export default HomeScreen;
