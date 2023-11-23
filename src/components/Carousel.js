import React, { useState, useEffect } from 'react';
import { View, StyleSheet, FlatList, Animated } from 'react-native';

//importing Dimensions
import { windowHeight, windowWidth } from '../Utils/Dimensions';

import CarouselItem from './CarouselItem';

let flatList;

function infiniteScroll(dataList) {
  const numberOfData = dataList.length;
  let scrollValue = 0,
    scrolled = 0;

  setInterval(function () {
    scrolled++;
    if (scrolled < numberOfData) {
      scrollValue = scrollValue + windowWidth;
    } else {
      scrollValue = 0;
      scrolled = 0;
    }

    this.flatList.scrollToOffset({ animated: true, offset: scrollValue });
  }, 4000);
}

//mian function "Carousel"
const Carousel = ({ data }) => {
  const scrollX = new Animated.Value(0);
  let position = Animated.divide(scrollX, windowWidth);
  const [dataList, setDataList] = useState(data);

  useEffect(() => {
    setDataList(data);
    infiniteScroll(dataList);
  });

  if (data && data.length) {
    return (
      <View style={{ position: 'absolute' }}>
        <View>
          <FlatList
            data={data}
            ref={(flatList) => {
              this.flatList = flatList;
            }}
            keyExtractor={(item, index) => 'key' + index}
            horizontal
            pagingEnabled
            scrollEnabled
            snapToAlignment="center"
            scrollEventThrottle={36}
            decelerationRate={'fast'}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => {
              return <CarouselItem item={item} />;
            }}
            onScroll={Animated.event([
              { nativeEvent: { contentOffset: { x: scrollX } } },
            ])}
          />

          <View style={styles.dotView}>
            {data.map((_, i) => {
              let opacity = position.interpolate({
                inputRange: [i - 1, i, i + 1],
                outputRange: [0.3, 1, 0.3],
                extrapolate: 'clamp',
              });
              return <Animated.View key={i} />;
            })}
          </View>
        </View>
      </View>
    );
  }

  console.log('Images not Provided');
  return null;
};

export default Carousel;

const styles = StyleSheet.create({
  dotView: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
});
