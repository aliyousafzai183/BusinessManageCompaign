import React, { useEffect } from 'react';
import { View, Image, Text} from 'react-native';
import RouteName from '../../../routes/RouteName';
import colors from '../../../utils/colors';
import LinearGradient from 'react-native-linear-gradient';
import {UniversalContainerStyle as styles1} from '../../../styles/index';
import {SecondSplashScreenStyle as styles} from '../../../styles/SecondSplashScreenStyle';

const SecondSplashScreen = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace(RouteName.MAIN_SCREEN);
    }, 1800);
  }, []);

  return (
    <LinearGradient colors={[colors.linear1, colors.linear2]} style={styles1.container}>
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