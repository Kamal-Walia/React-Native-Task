import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  circleImageWithText: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  imgCircle: {
    height: 40,
    width: 40,
  },
  circleImage: {
    borderRadius: 50,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    zIndex: 5,
    elevation: 5,
    padding: 12,
    marginHorizontal: 6,
    margin: 4,
  },
});
export default styles;
