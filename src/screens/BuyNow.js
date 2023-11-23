import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
  KeyboardAvoidingView,
} from 'react-native';

import firestore from '@react-native-firebase/firestore';
import CheckBox from '@react-native-community/checkbox';

//importing Dimensions
import { windowHeight, windowWidth } from '../Utils/Dimensions';

import { useNavigation } from '@react-navigation/native';
import { add } from 'react-native-reanimated';

const BuyNow = ({ route }) => {
  const navigation = useNavigation();

  const [toggleCheckBox0, setToggleCheckBox0] = useState(true);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [payment, setPayment] = useState('Cash on Delivery');

  const { productTag } = route.params;
  const { Brand } = route.params;
  const { size } = route.params;
  const { quantity } = route.params;

  const createUser = (
    name,
    email,
    phone,
    address,
    productTag,
    Brand,
    size,
    quantity,
    payment,
  ) => {
    return firestore()
      .collection('orders')
      .doc()
      .set({
        name,
        email,
        phone,
        address,
        productTag,
        Brand,
        size,
        quantity,
        paymentMethod: payment,
        Date: Date().toLocaleString(),
      })
      .then(() => {
        Alert.alert('Success ✅', 'Order Placed Successfully');
      });
  };

  const check = () => {
    if (name == '' || email == '' || phone == '' || address == '') {
      Alert.alert('Message', 'Please Provide Complete Detail');
    } else
      createUser(
        name,
        email,
        phone,
        address,
        productTag,
        Brand,
        size,
        quantity,
        payment,
      );
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={'height'}
      keyboardVerticalOffset={-220}>
      <View style={styles.head}>
        <Text style={styles.title}>Shipment Details!</Text>
      </View>

      <TextInput
        style={styles.pym}
        placeholder="Full Name"
        labelValue={name}
        onChangeText={(e) => {
          setName(e);
        }}
      />

      <TextInput
        style={styles.pym}
        placeholder="Email"
        keyboardType="email-address"
        labelValue={email}
        onChangeText={(e) => {
          setEmail(e);
        }}
      />

      <TextInput
        style={styles.pym}
        placeholder="Phone"
        labelValue={phone}
        onChangeText={(e) => {
          setPhone(e);
        }}
      />

      <TextInput
        style={styles.pym}
        placeholder="Address"
        labelValue={address}
        onChangeText={(e) => {
          setAddress(e);
        }}
      />

      <View style={styles.pym}>
        <CheckBox
          disabled={true}
          value={toggleCheckBox0}
          style={styles.check}
          tintColors={{ true: 'green', false: 'black' }}
          onValueChange={(newValue) => setToggleCheckBox0(newValue)}
        />
        <Text style={styles.text}>Cash on Delivery</Text>
      </View>

      <View style={styles.btnView}>
        <TouchableOpacity style={styles.buttonContainer} onPress={check}>
          <Text style={styles.buttonText}> Confirm Order </Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

export default BuyNow;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f9fafd',
    padding: 20,
  },
  head: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 50,
    marginBottom: 50,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 25,
  },
  pym: {
    flexDirection: 'row',
    height: 50,
    width: '100%',
    marginBottom: 20,
    borderRadius: 10,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    shadowOpacity: 30,
    elevation: 15,
    alignSelf: 'center',
    paddingLeft: 10,
  },
  check: {
    marginLeft: 15,
  },
  text: {
    marginLeft: 15,
    fontSize: 18,
  },
  btnView: {
    paddingTop: 30,
    width: '100%',
  },

  buttonContainer: {
    marginTop: 10,
    width: '100%',
    height: windowHeight / 15,
    backgroundColor: '#2e64e5',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ffffff',
    fontFamily: 'Lato-Regular',
  },
});
