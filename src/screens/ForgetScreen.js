import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Alert } from 'react-native';
import auth from '@react-native-firebase/auth';

import FormInput from '../components/FormInput';
import FormButton from '../components/FormButton';

const ForgetScreen = () => {
  const [email, setEmail] = useState('');

  const forgetPassword = (email) => {
    return auth()
      .sendPasswordResetEmail(email)
      .then(() => { })
      .catch((error) => {
        if (error.code === 'auth/user-not-found') {
          Alert.alert('Message', 'This email address is not registered');
        }
      });
  };

  return (
    <ScrollView style={styles.ContainerStyle} justifyContent="center">
      <View style={styles.HeaderStyle}>
        <Text style={styles.nameStyle}>Fashion Shop</Text>
      </View>

      <View style={styles.InputContainer}>
        <FormInput
          labelValue={email}
          placeholderText="Enter Email"
          iconType="user"
          autoCapitalize="none"
          onChangeText={(userEmail) => setEmail(userEmail)}
        />
      </View>

      <View style={styles.ButtonContainer}>
        <FormButton
          buttonTitle="Forget Password"
          onPress={() => {
            if (email == '') {
              Alert.alert('Input Error', 'Enter Email Address', [
                {
                  text: 'Cancel',
                  onPress: () => console.log('Cancel Pressed'),
                  style: 'cancel',
                },
                { text: 'OK', onPress: () => console.log('OK Pressed') },
              ]);
            } else {
              forgetPassword();
            }
          }}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  ContainerStyle: {
    flex: 1,
    backgroundColor: 'white',
  },
  HeaderStyle: {
    alignItems: 'center',
  },
  nameStyle: {
    fontSize: 30,
    fontFamily: 'notoserif',
  },
  TagStyle: {
    fontSize: 13,
    color: '#C0C0C0',
    marginTop: -5,
  },
  InputContainer: {
    marginHorizontal: 15,
    paddingTop: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  ButtonContainer: {
    paddingTop: 30,
    marginHorizontal: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ForgetScreen;
