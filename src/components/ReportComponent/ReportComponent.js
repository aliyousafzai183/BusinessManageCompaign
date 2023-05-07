import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ToastAndroid } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon1 from 'react-native-vector-icons/MaterialIcons';
import colors from '../../utils/colors';
import RouteName from '../../routes/RouteName';
import {CustomAlertModal} from '../index';

const ReportComponent = ({ icon, title, description, route, background }) => {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);

  const handleLogoutPress = () => {
    setModalVisible(true);
  };

  const handleLogoutConfirm = () => {
    ToastAndroid.show('Logged out successfully', ToastAndroid.SHORT);
    navigation.navigate(RouteName.HOME_SCREEN);
    setModalVisible(false);
  };

  const handleLogoutCancel = () => {
    setModalVisible(false);
  };

  const handlePress = () => {
    if (route === RouteName.LOGOUT_SCREEN) {
      handleLogoutPress();
    } else {
      navigation.navigate(route, { title: title });
    }
  };

  return (
    <TouchableOpacity onPress={handlePress}>
      <View style={styles.itemContainer}>
      <View style={[styles.iconContainer, {backgroundColor: background}]}>
          <Icon name={icon} size={24} color={colors.background} />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.description}>{description}</Text>
        </View>
        <View style={styles.arrowContainer}>
          <Icon1 name="arrow-forward-ios" size={20} color={colors.primary} />
        </View>
      </View>
      <CustomAlertModal
        visible={modalVisible}
        title="Hang On!"
        message="Are you sure you want to logout?"
        onNoPress={handleLogoutCancel}
        onYesPress={handleLogoutConfirm}
      />
    </TouchableOpacity>
  );
};

export default ReportComponent;

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderRadius: 8,
    marginHorizontal: 16,
    marginVertical: 8,
    backgroundColor: colors.linear1,
    borderRadius: 20,

    shadowColor: colors.text,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05, // Change the shadowOpacity to 0.05 for a lighter shadow
    shadowRadius: 2, // Change the shadowRadius to 2 for a softer shadow
    elevation: 4,
  },

  iconContainer: {
    // backgroundColor: colors.plusButton,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    height: 48,
    width: 48,
    marginRight: 16,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
    color: colors.text,
  },
  description: {
    fontSize: 14,
    color: colors.label,
  },
  arrowContainer: {
    marginLeft: 16,
  },
});