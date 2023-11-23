import React, { useState } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';

import { useNavigation } from '@react-navigation/native';

const ProductsComponent = ({ item }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('ProductDetailScreen', {
          productName: item.productName,
          productPrice: item.productPrice,
          productImage: item.image_url,
          Tag: item.productTag,
          storeName: item.storeName,
          productDescription: item.productDes,
        });
      }}
      style={styles.productcontainer}>
      <View>
        <Text style={styles.title}>{item.productName}</Text>
        <Text style={styles.subTitle}>{item.productPrice}$</Text>
        <View style={styles.imgContainer}>
          <Image
            source={{ uri: item.image_url }}
            style={{ width: 130, height: 130 }}
          />
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  productcontainer: {
    flex: 1,
    padding: 10,
    margin: 5,
    borderRadius: 10,
    backgroundColor: '#d5d5d7',
    // backgroundColor:'#ffdbee',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 15,
    color: '#000000',
  },
  subTitle: {
    fontSize: 15,
    color: '#000000',
  },
  imgContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default ProductsComponent;
