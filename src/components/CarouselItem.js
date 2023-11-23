import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';

//importing Dimensions
import { windowHeight, windowWidth } from '../Utils/Dimensions';

//mian function "CarouselItem"
const CarouselItem = ({ item }) => {
  return (
    <View style={styles.cardView}>
      <Image style={styles.image} source={{ uri: item.url }} />
      <View style={styles.textView}>
        <Text style={styles.itemTitle}> {item.title}</Text>
        <Text style={styles.itemDescription}>{item.description}</Text>
      </View>
    </View>
  );
};

export default CarouselItem;

const styles = StyleSheet.create({
  cardView: {
    width: windowWidth - 40,
    height: windowHeight / 3.2,
    borderRadius: 10,
  },
  image: {
    borderRadius: 10,
    width: windowWidth - 40,
    height: windowHeight / 3.2,
  },
  textView: {
    position: 'absolute',
    bottom: 10,
    margin: 10,
    marginLeft: 20,
    marginRight: 20,
    left: 5,
  },
  itemTitle: {
    color: 'white',
    fontSize: 22,
    shadowColor: '#000',
    shadowOffset: { windowWidth: 0.8, windowHeight: 0.8 },
    shadowOpacity: 1,
    shadowRadius: 3,
    marginBottom: 5,
    fontWeight: 'bold',
    elevation: 5,
  },
  itemDescription: {
    color: 'white',
    fontSize: 12,
    shadowColor: '#000',
    shadowOffset: { windowWidth: 0.8, windowHeight: 0.8 },
    shadowOpacity: 1,
    shadowRadius: 3,
    elevation: 5,
  },
});
