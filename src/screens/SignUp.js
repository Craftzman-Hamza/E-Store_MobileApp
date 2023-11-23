import React, { useState } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  Alert,
  KeyboardAvoidingView,
} from 'react-native';

import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import { GoogleSignin } from '@react-native-community/google-signin';

//import Componenets
import FormButton from '../components/FormButton';
import FormInput from '../components/FormInput';
import SocialButton from '../components/SocialButton';

const SignupScreen = ({ navigation }) => {
  const [fullName, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const validate = (text) => {
    console.log(text);
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (reg.test(text) === false) {
      return false;
    } else {
      return true;
    }
  };

  const createUser = (uid, fullName, email) => {
    return firestore().collection('users').doc(uid).set({
      uid,
      fullName,
      email,
    });
  };

  const signUp = () => {
    return auth()
      .createUserWithEmailAndPassword(email, password)
      .then((cred) => {
        const { uid } = cred.user;

        auth().currentUser.updateProfile({
          displayName: fullName,
        });

        return uid;
      })
      .then((uid) => createUser(uid, fullName, email))
      .then(() => {
        Alert.alert('Success ✅', 'Account created successfully');
      })
      .catch((error) => {
        if (error.code === 'auth/email-already-in-use') {
          Alert.alert('Message', 'That email address is already in use!');
        }

        if (error.code === 'auth/invalid-email') {
          Alert.alert('Message', 'That email address is invalid!');
        }
      });
  };

  GoogleSignin.configure({
    webClientId:
      '216906221268-sq94tcl1hfbukf7pj1df3cuolju50vfg.apps.googleusercontent.com',
  });

  async function onGoogleButtonPress() {
    const { idToken } = await GoogleSignin.signIn();

    const googleCredential = auth.GoogleAuthProvider.credential(idToken);

    return auth().signInWithCredential(googleCredential);
  }

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={'height'}
      keyboardVerticalOffset={-200}>
      <Text style={styles.text}>Create an account</Text>

      <FormInput
        labelValue={fullName}
        placeholderText="Full Name"
        iconType="user"
        autoCorrect={false}
        onChangeText={(userName) => {
          setName(userName);
        }}
      />

      <FormInput
        labelValue={email}
        placeholderText="Email"
        iconType="user"
        keyboardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}
        onChangeText={(userEmail) => {
          setEmail(userEmail);
        }}
      />

      <FormInput
        labelValue={password}
        placeholderText="Password"
        iconType="lock"
        secureTextEntry={true}
        onChangeText={(userPassword) => {
          setPassword(userPassword);
        }}
      />

      <FormInput
        labelValue={confirmPassword}
        placeholderText="Confirm Password"
        iconType="lock"
        secureTextEntry={true}
        onChangeText={(userPassword) => {
          setConfirmPassword(userPassword);
        }}
      />

      <FormButton
        buttonTitle="Sign Up"
        onPress={() => {
          if (fullName == '') {
            Alert.alert('Require Name', 'Please fill all Fields', [
              {
                text: 'Cancel',
                onPress: () => console.log('Cancel Pressed'),
                style: 'cancel',
              },
              { text: 'OK', onPress: () => console.log('OK Pressed') },
            ]);
          } else if (!validate(email)) {
            Alert.alert('Invalid Email', 'Enter valid Email', [
              {
                text: 'Cancel',
                onPress: () => console.log('Cancel Pressed'),
                style: 'cancel',
              },
              { text: 'OK', onPress: () => console.log('OK Pressed') },
            ]);
          } else if (password != confirmPassword) {
            Alert.alert('Password Miss Match', 'Enter Same Password', [
              {
                text: 'Cancel',
                onPress: () => console.log('Cancel Pressed'),
                style: 'cancel',
              },
              { text: 'OK', onPress: () => console.log('OK Pressed') },
            ]);
          } else if (password == '' || confirmPassword == '') {
            Alert.alert('Require Password', 'Please fill all Fields', [
              {
                text: 'Cancel',
                onPress: () => console.log('Cancel Pressed'),
                style: 'cancel',
              },
              { text: 'OK', onPress: () => console.log('OK Pressed') },
            ]);
          } else {
            signUp(), console.log('Signup Done');
          }
        }}
      />

      <View style={styles.textPrivate}>
        <Text style={styles.color_textPrivate}>
          By registering you confirm that you accept our
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate('Policy')}>
          <Text style={[styles.color_textPrivate, { color: '#e88832' }]}>
            Terms of service
          </Text>
        </TouchableOpacity>
        <Text style={styles.color_textPrivate}> and </Text>
        <TouchableOpacity onPress={() => navigation.navigate('Policy')}>
          <Text style={[styles.color_textPrivate, { color: '#e88832' }]}>
            Privacy Policy
          </Text>
        </TouchableOpacity>
      </View>

      {Platform.OS === 'android' ? (
        <View>
          <SocialButton
            buttonTitle="Sign up with Google"
            btnType="google"
            color="#de4d41"
            backgroundColor="#f5e7ea"
            onPress={() =>
              onGoogleButtonPress().then(() =>
                console.log('Signed in with Google!'),
              )
            }
          />
        </View>
      ) : null}

      <TouchableOpacity
        style={styles.navButton}
        onPress={() => navigation.navigate('SignIn')}>
        <Text style={styles.navButtonText}>
          Already have an account? Sign In
        </Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
};

export default SignupScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f9fafd',
    padding: 20,
  },
  text: {
    fontFamily: 'Kufam-SemiBoldItalic',
    fontSize: 28,
    marginBottom: 20,
    color: '#051d5f',
  },
  navButton: {
    marginTop: 15,
  },
  navButtonText: {
    fontSize: 18,
    fontWeight: '500',
    color: '#2e64e5',
    fontFamily: 'Lato-Regular',
  },
  textPrivate: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginVertical: 35,
    justifyContent: 'center',
  },
  color_textPrivate: {
    fontSize: 13,
    fontWeight: '400',
    fontFamily: 'Lato-Regular',
    color: 'grey',
  },
});
