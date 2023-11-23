import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

// import clothes from products
import * as Products from '../constants/products';

// import product cart component
import ProductCartComponent from '../components/ProductCartComponent';

// import {useNavigation} from '@react-navigation/native';

const CartScreen = ({ navigation, item }) => {
  // const navigation = useNavigation();
  const pressHandler = (key) => {
    setItem((prevItem) => {
      return prevItem.filter((item) => todo.key != key);
    });
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View>
          <Text style={styles.headerTitle}>Your Bag</Text>
          <Text style={styles.headerSubTitle}>ITEMS</Text>
        </View>
        <View>
          <TouchableOpacity
            style={styles.btnContainer}
            onPress={() => navigation.navigate('BuyNow')}>
            <Text style={styles.btnText}>BUY NOW</Text>
            <Icon name="shopping-bag" size={30} color={'#000000'} />
          </TouchableOpacity>
        </View>
      </View>

      {/* Body */}
      <View style={styles.bodyContainer}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={Products.clothes}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => {
            return (
              <ProductCartComponent item={item} pressHandler={pressHandler} />
            );
          }}
        />
      </View>
    </View>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    height: 80,
    paddingLeft: 20,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headerTitle: {
    fontWeight: 'bold',
    fontSize: 28,
  },
  headerSubTitle: {
    fontSize: 15,
    color: '#7f8c8d',
  },
  bodyContainer: {
    flex: 1,
    paddingLeft: 20,
    paddingRight: 20,
    marginBottom: 20,
  },
  btnContainer: {
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  btnText: {
    fontWeight: 'bold',
    fontSize: 19,
  },
});
