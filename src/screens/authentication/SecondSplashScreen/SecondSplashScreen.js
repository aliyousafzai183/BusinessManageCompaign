import React, { useEffect } from 'react';
import { View, Image, Text, StyleSheet, ActivityIndicator } from 'react-native';
import RouteName from '../../../routes/RouteName';
import colors from '../../../utils/colors';
import LinearGradient from 'react-native-linear-gradient';

const SecondSplashScreen = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace(RouteName.MAIN_SCREEN);
    }, 1800);
  }, []);

  return (
    <LinearGradient colors={[colors.linear1, colors.linear2]} style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={require('../../../images/SplashLogo.png')} style={styles.logo} resizeMode='contain'/>
        <View style={styles.textContainer}>
          <Text style={styles.title}>Business</Text>
          <Text style={styles.title}>Manage</Text>
          <Text style={styles.title}>Campaign</Text>
        </View>
      </View>
    </LinearGradient>
  );
};

export default SecondSplashScreen;

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent:'center'
  },

  logoContainer: {
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    flexDirection:'row',
  },

  logo: {
    height: '35%',
    width: '35%',
  },
  
  textContainer: {
    textAlign:'center',
  },

  title: {
    color: colors.text,
    fontSize:20,
    fontWeight:'bold'
  },
})
