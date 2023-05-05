import React, { useEffect, useRef } from 'react';
import { View, Image, Text, StyleSheet, ActivityIndicator, Animated, Easing } from 'react-native';
import RouteName from '../../../routes/RouteName';
import colors from '../../../utils/colors';
import LinearGradient from 'react-native-linear-gradient';

const SplashScreen = ({ navigation }) => {
  const spinValue = useRef(new Animated.Value(0)).current;
  const shakeValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.timing(
        spinValue,
        {
          toValue: 1,
          duration: 1500,
          easing: Easing.linear,
          useNativeDriver: true
        }
      )
    ).start();

    Animated.loop(
      Animated.spring(shakeValue, {
        toValue: 1,
        friction: 1,
        useNativeDriver: true
      })
    ).start();

    setTimeout(() => {
      navigation.replace(RouteName.SECOND_SPLASH_SCREEN);
    }, 800);
  }, []);

  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg']
  });

  const shake = shakeValue.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: ['0deg', '-5deg', '0deg']
  });

  return (
    <LinearGradient colors={[colors.linear1, colors.linear2]} style={styles.container}>
        <Animated.Image 
          source={require('../../../images/SplashLogo.png')} 
          style={[
            styles.logo, 
            {transform: [{rotate: spin}, {translateX: -5}, {translateY: -5}, {rotate: shake}]},
          ]} 
          resizeMode='contain'/>
    </LinearGradient>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex:1,
    padding:20,
    justifyContent:'center',
    alignItems:'center'
  },

  logo: {
    height: '35%',
    width: '35%',
  },

  text: {
    color: colors.white,
    fontSize: 16,
    marginTop: 10
  }
});
