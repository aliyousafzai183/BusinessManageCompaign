import React from 'react';
import {View, Text, ScrollView} from 'react-native';

// styles
import {UniversalContainerStyle as styles} from '../../styles/index';

const HomeScreeen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
      <ScrollView>
      <Text>HomeScreeen</Text>
      </ScrollView>
    </View>
    </View>
  )
}

export default HomeScreeen;