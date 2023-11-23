import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';

import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

const Profile = ({ navigation }) => {
  const [user, setUser] = useState([]);
  const email = auth().currentUser.email;

  useEffect(() => {
    firestore()
      .collection('users')
      .where('email', '==', email)
      .onSnapshot((snap) => {
        const list = [];

        snap.forEach((pro) => {
          list.push({ ...pro.data() });
        });
        setUser(list);
      });
  }, []);

  const signOut = () => {
    return auth().signOut();
  };

  return (
    <ScrollView style={{ backgroundColor: '#ffffff' }}>
      <View style={styles.head}></View>

      <View style={styles.avator_containor}>
        <Image
          source={require('../assets/icons/avator.png')}
          style={styles.avator}></Image>

        {user &&
          user.map((data, index) => (
            <View key={index} style={styles.avator_containor}>
              <Text style={styles.title}>{data.fullName}</Text>
              <Text style={styles.subtitle}>{data.email}</Text>
            </View>
          ))}
      </View>

      <View style={styles.btn}>
        {/* <TouchableOpacity style={styles.pym}>
          <Image
            source={require('../assets/icons/profile.png')}
            style={styles.pro_icon}></Image>
          <View>
            <Text style={styles.pym_btn}>User Detail</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.pym}
          onPress={() => {
            navigation.navigate('CartScreen');
          }}>
          <Image
            source={require('../assets/icons/profile.png')}
            style={styles.pro_icon}></Image>
          <View>
            <Text style={styles.pym_btn}>Cart</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.pym}
          onPress={() => {
            navigation.navigate('BuyNow');
          }}>
          <Image
            source={require('../assets/icons/profile.png')}
            style={styles.pro_icon}></Image>
          <View>
            <Text style={styles.pym_btn}>Buy Now</Text>
          </View>
        </TouchableOpacity> */}

        <TouchableOpacity
          style={styles.pym}
          onPress={() => {
            navigation.navigate('Payment');
          }}>
          <Image
            source={require('../assets/icons/card.png')}
            style={styles.pym_icon}></Image>
          <View>
            <Text style={styles.pym_btn}>Payment Method</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.sign_out} onPress={signOut}>
          <Text style={styles.sign_out_text}>Log Out</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  head: {
    width: '100%',
    height: 150,
    backgroundColor: '#000',
  },
  avator_containor: {
    alignItems: 'center',
  },
  avator: {
    width: 130,
    height: 130,
    marginTop: -70,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'grey',
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
  pro_icon: {
    width: 30,
    height: 30,
    marginLeft: 18,
    marginBottom: 9,
  },
  pym_icon: {
    width: 30,
    height: 30,
    marginLeft: 18,
  },
  pym_btn: {
    marginLeft: 22,
    fontSize: 18,
    fontWeight: 'bold',
    color: 'grey',
  },
  btn: {
    marginTop: 50,
  },
  sign_out: {
    height: 50,
    width: '90%',
    marginBottom: 20,
    borderRadius: 10,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
    shadowOpacity: 80,
    elevation: 10,
    alignSelf: 'center',
  },
  sign_out_text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'grey',
  },
});
