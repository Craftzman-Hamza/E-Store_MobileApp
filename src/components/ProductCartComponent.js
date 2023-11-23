import React, { useState } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';

const ProductCartComponent = ({ item, pressHandler }) => {
  return (
    <View style={styles.container} onPress={() => pressHandler(item.key)}>
      <View style={styles.subContainer}>
        <View style={styles.imgContainer}>
          <Image source={item.image} style={{ width: 100, height: 100 }} />
        </View>

        <View style={styles.detailsContainer}>
          <Text style={styles.nameText}>{item.name}</Text>
          <Text style={styles.priceText}>{item.price}.00$</Text>
        </View>

        <TouchableOpacity style={styles.sizeContainer}>
          <Image
            source={require('../assets/icons/bin.png')}
            style={{ height: 35, width: 35 }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProductCartComponent;

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
  },
  subContainer: {
    flexDirection: 'row',
    borderBottomWidth: 0.2,
  },
  imgContainer: {
    padding: 10,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  detailsContainer: {
    flex: 1,
    padding: 10,
    justifyContent: 'center',
  },
  nameText: {
    fontWeight: '900',
    fontSize: 15,
  },
  priceText: {
    marginTop: 7,
    fontWeight: 'bold',
  },
  sizeContainer: {
    justifyContent: 'center',
  },
});
