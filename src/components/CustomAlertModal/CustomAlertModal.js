import React from 'react';
import { Modal, Text, TouchableOpacity, View } from 'react-native';
import {CustomAlertModalStyle as styles} from '../../styles/components';

const CustomAlertModal = ({ visible, title, message, onNoPress, onYesPress }) => {
  return (
    <Modal animationType="fade" transparent={true} visible={visible}>
      <View style={styles.modalContainer}>
        <View style={styles.contentContainer}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.message}>{message}</Text>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={onNoPress}>
              <Text style={styles.buttonText}>No</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={onYesPress}>
              <Text style={[styles.buttonText, styles.buttonYesText]}>Yes</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default CustomAlertModal;