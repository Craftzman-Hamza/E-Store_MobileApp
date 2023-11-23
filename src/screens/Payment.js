import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import CheckBox from '@react-native-community/checkbox';

import FormButton from '../components/FormButton';

const Payment = () => {
  const [toggleCheckBox0, setToggleCheckBox0] = useState(true);
  const [toggleCheckBox1, setToggleCheckBox1] = useState(false);
  const [toggleCheckBox2, setToggleCheckBox2] = useState(false);
  const [toggleCheckBox3, setToggleCheckBox3] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.head}>
        <Text style={styles.title}>Payment Methods</Text>
      </View>

      <View style={styles.pym}>
        <CheckBox
          disabled={false}
          value={toggleCheckBox0}
          style={styles.check}
          tintColors={{ true: 'green', false: 'black' }}
          onValueChange={(newValue) => setToggleCheckBox0(newValue)}
        />
        <Text style={styles.text}>Cash on Delivery</Text>
      </View>

      <View style={styles.pym}>
        <CheckBox
          disabled={true}
          value={toggleCheckBox1}
          style={styles.check}
          tintColors={{ true: 'green', false: 'black' }}
          onValueChange={(newValue) => setToggleCheckBox1(newValue)}
        />
        <Text style={styles.text}>JazzCash</Text>
      </View>

      <View style={styles.pym}>
        <CheckBox
          disabled={true}
          value={toggleCheckBox2}
          style={styles.check}
          tintColors={{ true: 'green', false: 'black' }}
          onValueChange={(newValue) => setToggleCheckBox2(newValue)}
        />
        <Text style={styles.text}>EasyPaisa</Text>
      </View>

      <View style={styles.pym}>
        <CheckBox
          disabled={true}
          value={toggleCheckBox3}
          style={styles.check}
          tintColors={{ true: 'green', false: 'black' }}
          onValueChange={(newValue) => setToggleCheckBox3(newValue)}
        />
        <Text style={styles.text}>HBL Konnect</Text>
      </View>

      <View style={styles.btnView}>
        <FormButton buttonTitle="Confirm" />
      </View>
    </View>
  );
};

export default Payment;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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
    width: '90%',
    marginBottom: 20,
    borderRadius: 10,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    shadowOpacity: 80,
    elevation: 15,
    alignSelf: 'center',
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
    width: '90%',
  },
});
