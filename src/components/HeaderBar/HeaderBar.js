import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, StatusBar } from 'react-native';
import colors from '../../utils/colors';
import Ionicons from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import RouteName from '../../routes/RouteName';
import {HeaderBarStyle as styles} from '../../styles/components';

const HeaderBar = ({ title }) => {
  const navigation = useNavigation();

  const onHelpPress = () => {
    navigation.navigate(RouteName.FAQS_SCREEN);
  };
  
  return (
    <LinearGradient colors={[colors.linear1, colors.linear1]} style={styles.mainContainer}>
      <StatusBar backgroundColor={colors.linear1} barStyle="light-content" />
      <View style={styles.secondContainer}>
        <Text style={styles.title}>{title}</Text>
        <TouchableOpacity onPress={onHelpPress} style={styles.button}>
          <Ionicons name="ios-help-circle-outline" size={25} color={colors.helpColor} />
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};

export default HeaderBar;
