import React, {useState} from 'react';
import {View, Text, Pressable, Image, Switch} from 'react-native';
import {Auth} from 'aws-amplify';
import styles from './styles';
import AntDesign from 'react-native-vector-icons/AntDesign';

const ProfileScreen = props => {
  const [image, setImage] = useState(
    'https://www.meissner.com.pl/wp-content/uploads/2020/04/avatar-1577909_640-300x300-1.png',
  );
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  const logout = () => {
    Auth.signOut();
  };
  return (
    <View>
      <View style={styles.header}>
        {/*  User*/}
        <View style={{flexDirection: 'row', marginBottom: 20}}>
          <Image
            style={styles.image}
            source={{
              uri: image,
            }}
          />
          <View>
            <Text style={{color: 'white', fontSize: 26, paddingVertical: 5}}>
              Gładysz Paweł
            </Text>
            <Text style={{color: '#dddddd'}}>5.00 *</Text>
          </View>
        </View>

        {/* Messages */}
        <View style={styles.messages}>
          <Pressable
            onPress={() => {
              console.warn('Zarządzaj kontem');
            }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <Text style={[styles.headerText, {fontSize: 20}]}>
                Wiadomości
              </Text>
              <AntDesign
                name="message1"
                size={25}
                color="white"
                style={{marginRight: 50}}
              />
            </View>
          </Pressable>
        </View>
        {/* Zlecenia */}
        <View style={styles.rowContainer}>
          <Pressable
            onPress={() => {
              console.warn('Zarządzaj kontem');
            }}>
            <Text style={styles.headerText}>Historia zleceń</Text>
          </Pressable>
        </View>

        {/* Zarzadzaj kontem */}
        <View style={styles.rowContainer}>
          <Pressable
            onPress={() => {
              console.warn('Historia zleceń');
            }}>
            <Text style={styles.headerText}>Zarządzaj swoim kontem</Text>
          </Pressable>
        </View>
        <View style={styles.rowContainer}>
          {/* Zarzadzaj kontem */}
          <Pressable
            onPress={() => {
              console.warn('Historia zleceń');
            }}>
            <Text style={styles.headerText}>Mój portfel</Text>
          </Pressable>
        </View>

        {/* Wyloguj */}
        <View style={styles.rowContainer}>
          <Pressable onPress={logout}>
            <Text style={styles.headerText}>Wyloguj</Text>
          </Pressable>
        </View>
        {/* Dark mode */}
        <View style={{flexDirection: 'row', marginVertical: 5}}>
          <Text style={styles.headerText}>Tryb ciemny</Text>
          <Switch
            trackColor={{false: '#767577', true: '#81b0ff'}}
            thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </View>
      </View>
    </View>
  );
};
export default ProfileScreen;
