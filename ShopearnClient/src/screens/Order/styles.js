import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: '100%',
    resizeMode: 'contain',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    marginVertical: 15,
    width: 300,
    borderColor: 'black',
    borderWidth: 2,
    borderRadius: 20,
    padding: 10,
    fontSize: 18,
  },
  time: {
    backgroundColor: '#f15354',
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    marginHorizontal: 20,
    borderRadius: 10,
    marginVertical: 15,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,

    elevation: 24,
  },
  dateReady: {
    padding: 20,
  },
  confirm: {
    backgroundColor: '#f15354',
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    marginVertical: 40,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,

    elevation: 24,
  },
});
export default styles;
