import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  logout: {
    width: 100,
    height: 20,
    backgroundColor: '#c3c3c3',
  },
  header: {
    backgroundColor: 'black',
    padding: 20,
  },
  headerText: {
    color: '#dddddd',
    paddingVertical: 5,
    fontSize: 15,
  },
  messages: {
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#353535',
    paddingVertical: 10,
  },
  image: {
    width: '20%',
    // height: 100,
    aspectRatio: 2 / 2,
    resizeMode: 'cover',
    borderRadius: 60,
    marginRight: 20,
  },
  rowContainer: {
    marginVertical: 5,
  },
});
export default styles;
