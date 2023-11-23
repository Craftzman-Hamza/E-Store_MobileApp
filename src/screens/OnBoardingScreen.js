import React from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';

//importing Onboarding package
import Onboarding from 'react-native-onboarding-swiper';

//Custom Components for OnBoarding Screen UI
const Skip = ({ ...props }) => {
  return (
    <TouchableOpacity style={{ marginHorizontal: 15 }} {...props}>
      <Text style={{ fontSize: 16 }}>Skip</Text>
    </TouchableOpacity>
  );
};

//Next custome function
const Next = ({ ...props }) => {
  return (
    <TouchableOpacity style={{ marginHorizontal: 15 }} {...props}>
      <Text style={{ fontSize: 16 }}>Next</Text>
    </TouchableOpacity>
  );
};

//Done custome function
const Done = ({ ...props }) => {
  return (
    <TouchableOpacity style={{ marginHorizontal: 15 }} {...props}>
      <Text style={{ fontSize: 16 }}>Done</Text>
    </TouchableOpacity>
  );
};

//Dots custome function
const Dots = ({ selected }) => {
  let backgroundColor;

  backgroundColor = selected ? 'rgba(0,0,0,0.8)' : 'rgba(0,0,0,0.3)';

  return (
    <View
      style={{
        width: 5,
        height: 5,
        marginHorizontal: 3,
        backgroundColor,
        borderRadius: 10,
      }}
    />
  );
};

//Main fnction "OnBoardingScreen"
const OnBoardingScreen = ({ navigation }) => {
  return (
    <Onboarding
      SkipButtonComponent={Skip}
      NextButtonComponent={Next}
      DoneButtonComponent={Done}
      DotComponent={Dots}
      onSkip={() => navigation.replace('SignIn')}
      onDone={() => navigation.navigate('SignIn')}
      pages={[
        {
          backgroundColor: '#fff',
          image: (
            <Image
              source={require('../assets/onboardingImages/onboarding1.png')}
            />
          ),
          title: 'Explore Fashion',
          subtitle: 'Explore 2021 latest fashion, trends and more...',
        },
        {
          backgroundColor: '#fff',
          image: (
            <Image
              source={require('../assets/onboardingImages/onboarding2.png')}
            />
          ),
          title: 'Select What You Love',
          subtitle:
            'Exclusively curated selection of top brands in the palm of your hand...',
        },
        {
          backgroundColor: '#fff',
          image: (
            <Image
              source={require('../assets/onboardingImages/onboarding3.png')}
            />
          ),
          title: 'Be The Real You',
          subtitle:
            'Bring you the latest trends and products around the world...',
        },
      ]}
    />
  );
};

export default OnBoardingScreen;
