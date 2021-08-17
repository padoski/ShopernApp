import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 700,
    resizeMode: 'contain',
    alignItems: 'center',
  },
  title: {
    marginTop: 30,
    marginRight: 100,
    fontSize: 60,
    fontWeight: 'bold',
    color: 'white',
  },
  description: {
    fontSize: 35,
    position: 'absolute',
    bottom: 170,
    color: 'white',
    fontWeight: '700',
  },
  button: {
    width: 300,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  buttonText: {
    marginLeft: 20,
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
  buttonContainer: {
    bottom: 110,
    position: 'absolute',
    justifyContent: 'center',
    marginTop: 30,
  },
});
export default styles;
