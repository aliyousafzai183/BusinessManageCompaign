import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import Fontisto from 'react-native-vector-icons/FontAwesome5';

// styles
import colors from '../../utils/colors';

const {width} = Dimensions.get('window');

const FourthHomeComponent = ({ price, others }) => {

  const formatPrice = (price) => {
    if (price >= 1000000) {
      return (price / 1000000).toFixed(1) + 'M';
    } else if (price >= 1000) {
      return (price / 1000).toFixed(1) + 'K';
    } else {
      return price.toFixed(1);
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.rollContainer}>
        <Text style={styles.price}>{formatPrice(price)}</Text>
        <Text style={styles.title}>Total</Text>
      </View>

      <View style={styles.detailsContainer}>
        <View style={styles.titleContainer}>
          <View style={[styles.box, {
            backgroundColor: '#FFD700',
          }]}></View>
          <Text style={styles.title}>Payroll</Text>
        </View>
        <Text style={styles.title}>{formatPrice(price)}</Text>
      </View>

      <View style={styles.detailsContainer}>
        <View style={styles.titleContainer}>
          <View style={[styles.box, {
            backgroundColor: '#FF5733',
          }]}></View>
          <Text style={styles.title}>Others</Text>
        </View>
        <Text style={styles.title}>{formatPrice(others)}</Text>
      </View>

    </View>
  )
}

export default FourthHomeComponent;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },

  title: {
    fontSize: 10,
    color: colors.text,
    marginVertical: '2%'
  },

  price: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.text,
    marginVertical: '2%'
  },

  rollContainer: {
    borderWidth: 10,
    borderColor: '#FFD700',
    borderRadius: 100,
    paddingHorizontal: '12%',
    paddingVertical: '12%',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:'10%'
  },

  detailsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width:width/3
  },

  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },

  box: {
    width: '15%',
    height: '60%',
    marginRight: '10%'
  }
})
