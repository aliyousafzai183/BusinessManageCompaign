import React from 'react';
import {View, Text} from 'react-native';

// styles
import { UniversalContainerStyle as styles1 } from '../../styles/index';
import LinearGradient from 'react-native-linear-gradient';
import colors from '../../utils/colors';

const GuideScreen1 = () => {
  return (
    <LinearGradient colors={[colors.linear1, colors.linear2]} style={styles1.container}>
      <Text>GuideScreen1</Text>
    </LinearGradient>
  )
}

export default GuideScreen1;