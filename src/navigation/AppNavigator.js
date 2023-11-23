import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';

//Packages
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

//App Screens
import Home from '../screens/Home';
import Profile from '../screens/Profile';
import Payment from '../screens/Payment';
import ProductDetailScreen from '../screens/ProductDetailScreen';
import BuyNow from '../screens/BuyNow';
import Search from '../screens/Search';
import CartScreen from '../screens/CartScreen';
import AR from '../screens/AR';

//Naviagation Constants
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function HomeTabs() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        showLabel: false,
        style: {
          position: 'absolute',
          bottom: 10,
          left: 10,
          right: 10,
          elevation: 0,
          backgroundColor: '#ffffff',
          borderRadius: 15,
          height: 55,
          ...styles.shadow,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.viewStyle}>
              <Image
                source={require('../assets/icons/home.png')}
                resizeMode="contain"
                style={{
                  height: 24,
                  width: 24,
                  tintColor: focused ? '#de4d41' : '#748c94',
                }}
              />
              <Text
                style={{
                  color: focused ? '#de4d41' : '#748c94',
                  fontSize: 12,
                }}>
                Home
              </Text>
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.viewStyle}>
              <Image
                source={require('../assets/icons/profile.png')}
                resizeMode="contain"
                style={{
                  height: 28,
                  width: 28,
                  tintColor: focused ? '#de4d41' : '#748c94',
                }}
              />
              <Text
                style={{
                  color: focused ? '#de4d41' : '#748c94',
                  fontSize: 12,
                }}>
                Profile
              </Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const AppNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: null }}
      initialRouteName="HomeTabs">
      <Stack.Screen name="HomeTabs" component={HomeTabs} />
      <Stack.Screen name="AR" component={AR} />
      <Stack.Screen name="Search" component={Search} />
      <Stack.Screen name="BuyNow" component={BuyNow} />
      <Stack.Screen name="CartScreen" component={CartScreen} />
      <Stack.Screen
        name="ProductDetailScreen"
        component={ProductDetailScreen}
      />
      <Stack.Screen name="Payment" component={Payment} />
    </Stack.Navigator>
  );
};

export default AppNavigator;

const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#7F5DF0',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
  viewStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    top: 1,
  },
});
