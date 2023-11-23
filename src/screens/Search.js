import React, { useState } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import FormInput from '../components/FormInput';

const Search = () => {
  const navigation = useNavigation();
  const [serachText, setSearchText] = useState('');
  return (
    <View style={styles.container}>
      <FormInput
        labelValue={serachText}
        placeholderText="Type here to search ..."
        iconType="search1"
        onChangeText={(text) => {
          setSearchText(text);
        }}
      />

      <View style={styles.body}>
        <Image
          style={styles.img}
          source={require('../assets/icons/search.png')}
        />
        <Text style={styles.titleText}>What are</Text>
        <Text style={styles.titleText}>you searching for</Text>
        <Text style={styles.subTitleText}>
          search for favourite thing or find
        </Text>
        <Text style={styles.subTitleText}>find similar results</Text>
      </View>
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  body: {
    paddingTop: 50,
    justifyContent: 'center',
    alignItems: 'center',
    opacity: 0.5,
  },
  img: {
    height: 100,
    width: 100,
  },
  titleText: {
    fontWeight: 'bold',
    fontSize: 23,
  },
  subTitleText: {
    fontSize: 15,
    color: '#7f8c8d',
  },
});
