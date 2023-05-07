import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon1 from 'react-native-vector-icons/MaterialIcons';
import colors from '../../utils/colors';
import RouteName from '../../routes/RouteName';
import {CustomAlertModal} from '../index';
import {ReportComponentStyle as styles} from '../../styles/components';
import DeleteData from '../../db/profile/DeleteData';

const ReportComponent = ({ icon, title, description, route, background }) => {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);

  const handleLogoutPress = () => {
    setModalVisible(true);
  };

  const handleLogoutConfirm = () => {
    DeleteData();
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
        message="Are you sure, all data will be reset from app?"
        onNoPress={handleLogoutCancel}
        onYesPress={handleLogoutConfirm}
      />
    </TouchableOpacity>
  );
};

export default ReportComponent;