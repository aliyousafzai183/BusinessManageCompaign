import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, StatusBar } from 'react-native';
import colors from '../../utils/colors';
import Ionicons from 'react-native-vector-icons/Ionicons';

const HeaderBar = ({ title, onPress }) => {
  return (
    <View style={styles.mainContainer}>
      <StatusBar backgroundColor={colors.primary} barStyle="light-content" />
      <View style={styles.secondContainer}>
        <Text style={styles.title}>{title}</Text>
        <TouchableOpacity onPress={onPress} style={styles.button}>
          <Ionicons name="ios-help-circle-outline" size={25} color={colors.helpColor} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HeaderBar;

const styles = StyleSheet.create({
  mainContainer: {
    height: 90,
    backgroundColor: colors.primary,
    justifyContent: 'center',
  },

  secondContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 16,
  },

  title: {
    flex: 1,
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.background,
    textAlign: 'center',
  },

  button: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
