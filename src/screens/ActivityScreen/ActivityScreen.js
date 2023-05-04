import React from 'react';
import { View, Text } from 'react-native';

// styles
import { UniversalContainerStyle as styles } from '../../styles/index';

const ActivityScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Text>ActivityScreen</Text>
      </View>
    </View>
  )
}

export default ActivityScreen;