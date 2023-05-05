import React from 'react';
import { View, Text, ScrollView } from 'react-native';

// styles
import { UniversalContainerStyle as styles } from '../../styles/index';
import LinearGradient from 'react-native-linear-gradient';
import colors from '../../utils/colors';

const HomeScreeen = () => {
  return (
      <LinearGradient colors={[colors.linear1, colors.linear2]} style={styles.container}>
        <ScrollView>
          <Text style={{color:'black'}}>HomeScreeen</Text>
        </ScrollView>
      </LinearGradient>
  )
}

export default HomeScreeen;