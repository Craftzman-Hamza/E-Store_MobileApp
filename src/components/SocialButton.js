import React from 'react';
import { Text, StyleSheet, TouchableOpacity, View } from 'react-native';

//importing Dimensions
import { windowHeight, windowWidth } from '../Utils/Dimensions';

//importing vector-icons/FontAwesome
import FontAwesome from 'react-native-vector-icons/FontAwesome';

////main function "SocialButton"
const SocialButton = ({
  buttonTitle,
  btnType,
  color,
  backgroundColor,
  ...rest
}) => {
  let bgColor = backgroundColor;

  return (
    <TouchableOpacity
      style={[styles.buttonContainer, { backgroundColor: bgColor }]}
      {...rest}>
      <View style={styles.iconWrapper}>
        <FontAwesome
          name={btnType}
          size={22}
          color={color}
          style={styles.icon}
        />
      </View>
      <View style={styles.btnTxtWrapper}>
        <Text style={[styles.buttonText, { color: color }]}>{buttonTitle}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default SocialButton;

const styles = StyleSheet.create({
  buttonContainer: {
    marginTop: 10,
    width: '95%',
    height: windowHeight / 15,
    backgroundColor: '#2e64e5',
    padding: 10,
    flexDirection: 'row',
    borderRadius: 10,
  },
  iconWrapper: {
    width: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    fontWeight: 'bold',
  },
  btnTxtWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'Lato-Regular',
  },
});
