import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    margin: 10,
    marginTop: 30,
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: 'grey',
    paddingBottom: 10,
  },
  image: {
    width: '30%',
    // height: 100,
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
    marginLeft: 20,
    width: '30%',
  },
  info: {
    marginLeft: 15,
  },
});
export default styles;
