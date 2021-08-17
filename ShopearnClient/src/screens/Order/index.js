import React, {useState} from 'react';
import {
  View,
  Text,
  ImageBackground,
  TextInput,
  Platform,
  Pressable,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import styles from './styles';
import DateTimePicker from '@react-native-community/datetimepicker';
import {useNavigation} from '@react-navigation/native';

const OrderScreen = () => {
  const navigation = useNavigation();

  const [image, setImage] = useState(
    'https://www.meissner.com.pl/wp-content/uploads/2020/04/avatar-1577909_640-300x300-1.png',
  );
  const [request, setRequest] = useState('');
  const [type, setType] = useState('');
  const [price, setPrice] = useState(0.0);
  const [contact, setContact] = useState(0);
  const [dateReady, setDateReady] = useState('Nie wybrano daty...');

  const [date, setDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
    setDateReady(currentDate.toString().substring(0, 24));
    console.log(dateReady);
  };

  const showMode = currentMode => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  const showTimepicker = () => {
    showMode('time');
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.container}>
        <ImageBackground
          source={require('../../assets/images/orderbackground.png')}
          style={styles.image}>
          <TextInput
            style={styles.input}
            onChangeText={title => setType(title)}
            onSubmitEditing={() => {}}
            placeholder="Podaj tytuł ogłoszenia..."
          />
          <TextInput
            style={styles.input}
            onChangeText={phone => setContact(phone)}
            onSubmitEditing={() => {}}
            placeholder="Numer telefonu..."
            keyboardType="phone-pad"
          />
          <View style={{flexDirection: 'row'}}>
            <View>
              <Pressable style={styles.time} onPress={showDatepicker}>
                <Text
                  style={{fontSize: 20, color: 'white', fontWeight: 'bold'}}>
                  {' '}
                  Wybierz date
                </Text>
              </Pressable>
            </View>
            <View>
              <Pressable style={styles.time} onPress={showTimepicker}>
                <Text
                  style={{fontSize: 20, color: 'white', fontWeight: 'bold'}}>
                  {' '}
                  Wybierz godzinę
                </Text>
              </Pressable>
            </View>
            {show && (
              <DateTimePicker
                locale="pl-PL"
                testID="dateTimePicker"
                value={date}
                mode={mode}
                is24Hour={true}
                display="default"
                onChange={onChange}
              />
            )}
          </View>
          <View style={styles.dateReady}>
            <Text style={{fontSize: 25}}>{dateReady}</Text>
          </View>
          <TextInput
            style={styles.input}
            onChangeText={price => setPrice(price)}
            onSubmitEditing={() => {}}
            placeholder="Płacę..."
            keyboardType="decimal-pad"
          />
          <TextInput
            style={styles.input}
            onChangeText={request => setRequest(request)}
            onSubmitEditing={() => {}}
            multiline
            placeholder="Krotki opis"
          />
          <Pressable
            onPress={() => {
              navigation.navigate('DestinationSearchOrder', {
                contact: contact,
                price: price,
                request: request,
                time: dateReady,
                type: type,
              });
              //   console.warn('Pressable działa');
            }}
            style={styles.confirm}>
            <Text style={{fontSize: 20, color: 'white', fontWeight: 'bold'}}>
              {' '}
              Gdzie dostawa?
            </Text>
          </Pressable>
        </ImageBackground>
      </ScrollView>
    </SafeAreaView>
  );
};
export default OrderScreen;
