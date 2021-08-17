import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: 300,
    flexDirection: 'row',
  },
  image: {
    width: '15%',
    aspectRatio: 2 / 2,
    resizeMode: 'cover',
    borderRadius: 60,
  },
  price: {
    textDecorationLine: 'underline',
    fontWeight: 'bold',
  },
  time: {
    marginTop: 10,
  },
  contact: {marginTop: 10},
  request: {
    marginTop: 10,
    width: '70%',
  },
  info: {
    marginLeft: 15,
  },
});
export default styles;
