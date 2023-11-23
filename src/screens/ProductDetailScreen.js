import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Alert,
  TouchableOpacity,
  Dimensions,
  ScrollView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Icon from 'react-native-vector-icons/MaterialIcons';

const ProductDetailScreen = ({ route }) => {
  const navigation = useNavigation();

  const [sizes, setSize] = useState('?');
  const [count, setCount] = useState(0);

  const dif = () => {
    if (count > 0) {
      var dec = count - 1;
      setCount(dec);
    } else {
      setCount(0);
    }
  };
  const add = () => {
    var inc = count + 1;
    setCount(inc);
  };

  const { productName } = route.params;
  const { productPrice } = route.params;
  const { productImage } = route.params;
  const { productDescription } = route.params;
  const { Tag } = route.params;
  const { storeName } = route.params;

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}>
            <Icon name="keyboard-arrow-left" size={50} />
          </TouchableOpacity>
        </View>

        {/* Body */}
        <View style={styles.imgContainer}>
          <Image
            source={{ uri: productImage }}
            style={{ width: 280, height: 280 }}
          />
        </View>

        {/* Sub Body */}
        <ScrollView style={styles.detailsContainer}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <View style={styles.sizesContainer}>
              <TouchableOpacity
                style={[styles.sizeCircleContainer]}
                onPress={() => setSize('Small (36-38 inch)')}>
                <Text style={{ fontSize: 18 }}>S</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.sizeCircleContainer}
                onPress={() => setSize('Medium (38-40 inch)')}>
                <Text style={{ fontSize: 18 }}>M</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.sizeCircleContainer}
                onPress={() => setSize('Large (40-42 inch)')}>
                <Text style={{ fontSize: 18 }}>L</Text>
              </TouchableOpacity>
            </View>
            <Text style={styles.priceText}>{productPrice}$</Text>
          </View>

          <View>
            <Text
              style={[
                styles.descriptionText,
                { fontWeight: 'bold', marginTop: 15 },
              ]}>
              Select Size = {sizes}
            </Text>
          </View>

          <View
            style={{
              marginTop: 15,
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Text style={{ fontWeight: 'bold', fontSize: 18 }}>
              Quantity = {count}
            </Text>

            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <TouchableOpacity
                style={styles.sizeCircleContainer}
                onPress={() => dif()}>
                <Text style={{ fontSize: 20 }}>-</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.sizeCircleContainer}
                onPress={() => add()}>
                <Text style={{ fontSize: 20 }}>+</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={{ flexDirection: 'column', marginTop: 15 }}>
            <Text style={[styles.descriptionText, { fontWeight: 'bold' }]}>
              Product Description:
            </Text>
            <Text>{productDescription}</Text>
          </View>
        </ScrollView>

        {/* Footer */}
        <View style={styles.footerContainer}>
          <TouchableOpacity
            style={[styles.btnContainer, { marginRight: 10 }]}
            onPress={() => {
              navigation.navigate('AR', {
                name: productName,
                img: productImage,
              });
            }}>
            <Icon name="camera-alt" size={30} />
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.btnContainer,
              {
                flex: 1,
              },
            ]}
            onPress={() => {
              if (count == 0 && sizes == '?') {
                {
                  Alert.alert('Message', 'Please Select Size and Quantity');
                }
              } else if (count == 0) {
                {
                  Alert.alert('Message', 'Please Select Quantity');
                }
              } else if (sizes == '?') {
                Alert.alert('Message', 'Please Select Size');
              } else {
                navigation.navigate('BuyNow', {
                  productTag: Tag,
                  Brand: storeName,
                  size: sizes,
                  quantity: count,
                });
              }
            }}>
            <Text style={styles.btnText}>BuyNow</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: 50,
    paddingLeft: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#d5d5d7',
  },
  imgContainer: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#d5d5d7',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  detailsContainer: {
    flex: 1,
    padding: 20,
    paddingTop: 30,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  sizesContainer: {
    flexDirection: 'row',
  },
  sizeCircleContainer: {
    marginRight: 10,
    borderRadius: 30,
    borderWidth: 1.5,
    height: 35,
    width: 35,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#d5d5d7',
  },
  priceText: {
    fontWeight: 'bold',
    fontSize: 28,
  },
  descriptionText: {
    fontWeight: '900',
    fontSize: 18,
  },
  footerContainer: {
    padding: 20,
    flexDirection: 'row',
  },
  btnContainer: {
    padding: 15,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    backgroundColor: '#d5d5d7',
  },
  btnText: {
    fontWeight: 'bold',
    fontSize: 20,
  },
});

export default ProductDetailScreen;
