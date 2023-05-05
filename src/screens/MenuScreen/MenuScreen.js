import React from 'react';
import { View, Text } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import colors from '../../utils/colors';

// styles
import { UniversalContainerStyle as styles } from '../../styles/index';

const MenuScreen = () => {
  return (
    <LinearGradient colors={[colors.linear1, colors.linear2]} style={styles.container}>
      <Text style={{color:'black'}}>MenuScreen</Text>
    </LinearGradient>
  )
}

export default MenuScreen;