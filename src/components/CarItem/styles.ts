import {StyleSheet, Dimensions, StatusBar} from 'react-native';

const styles = StyleSheet.create({
  carContainer: {
    width: '100%',
    height: Dimensions.get('window').height + (StatusBar.currentHeight || 0),
  },

  titles: {
    marginTop: '30%',
    width: '100%',
    alignItems: 'center',
  },

  title: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#000',
  },

  subtitle: {
    fontSize: 16,
    color: '#5c5e62',
  },

  subtitleCta: {
    textDecorationLine: 'underline',
  },

  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    position: 'absolute',
  },

  buttonsContainer: {
    position: 'absolute',
    bottom: 50,
    width: '100%',
  },
});

export default styles;
