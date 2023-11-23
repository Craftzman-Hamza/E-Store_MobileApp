import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';

import firestore from '@react-native-firebase/firestore';
import ProductsComponent from '../components/ProductsComponent';

import { useNavigation } from '@react-navigation/native';

import Carousel from '../components/Carousel';
import { carouselData } from '../constants/carouselData';

// const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Home = () => {
  const navigation = useNavigation();
  const [dat, setData] = useState([]);
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    firestore()
      .collection('products')
      .get()
      .then((snap) => {
        const list = [];
        snap.forEach((pro) => {
          list.push({ ...pro.data() });
        });
        setData(list);
      });
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.container}>
        {/* Header */}
        <View style={styles.headerContainer}>
          <View>
            <Text style={styles.titleText}>Do your shopping online</Text>
            <Text style={styles.subTitleText}>
              find the best choices for you
            </Text>
          </View>
          <View>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Search');
              }}>
              <Image
                style={{ height: 35, width: 35 }}
                source={require('../assets/icons/search.png')}
              />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.cardView}>
          <Carousel data={carouselData} />
        </View>

        {/* Body */}
        <View style={styles.bodyContainer}>
          <FlatList
            showsVerticalScrollIndicator={false}
            data={dat}
            numColumns={2}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => {
              return <ProductsComponent item={item} />;
            }}
          />
        </View>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: '#ffffff',
  },
  headerContainer: {
    paddingTop: 10,
    paddingBottom: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  titleText: {
    fontWeight: 'bold',
    fontSize: 23,
  },
  subTitleText: {
    fontSize: 15,
    color: '#7f8c8d',
  },
  cardView: {
    height: windowHeight / 3.2,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0.5, windowHeight: 0.5 },
    shadowOpacity: 0.3,
    shadowRadius: 1,
    elevation: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bodyContainer: {
    flex: 1,
    paddingTop: 5,
    marginBottom: 75,
  },
});
