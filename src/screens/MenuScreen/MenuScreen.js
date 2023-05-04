import React from 'react';
import { View, Text } from 'react-native';

// styles
import { UniversalContainerStyle as styles } from '../../styles/index';

const MenuScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Text>MenuScreen</Text>
      </View>
    </View>
  )
}

export default MenuScreen;