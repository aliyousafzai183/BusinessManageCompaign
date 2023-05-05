import React, { useRef, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import colors from '../../utils/colors';
import Swiper from 'react-native-swiper';

// screens
import { AddExpenseScreen, AddIncomeScreen } from './../index';

// styles
import { UniversalContainerStyle as customStyles } from '../../styles/index';
import LinearGradient from 'react-native-linear-gradient';


const SliderButton = ({ onPress, label, isActive, first }) => {
  return (
    <TouchableOpacity
      style={[
        styles.sliderButtonContainer, isActive ?
          styles.activeSliderButtonContainer
          :
          styles.inActiveSliderButtonContainer,
        first ?
          styles.firstButton :
          styles.secondButton
      ]}
      onPress={onPress}>
      <Text style={[styles.sliderButtonLabel, isActive ? styles.activeSliderButtonLabel : styles.inActiveSliderButtonLabel]}>{label}</Text>
    </TouchableOpacity>
  );
};

const AddReportScreen = ({ navigation }) => {
  const swiperRef = useRef(null);
  const [activeScreenIndex, setActiveScreenIndex] = useState(0);

  const handleScreen1Press = () => {
    swiperRef.current.scrollBy(-1, true);
    setActiveScreenIndex(0);
  };

  const handleScreen2Press = () => {
    swiperRef.current.scrollBy(1, true);
    setActiveScreenIndex(1);
  };

  return (
    <LinearGradient colors={[colors.linear1, colors.linear2]} style={customStyles.container}>
      <View style={{ flex: 1 }}>
        <View style={styles.buttonContainer}>
          <SliderButton label="Income" onPress={handleScreen1Press} isActive={activeScreenIndex === 0} first={true} />
          <SliderButton label="Expense" onPress={handleScreen2Press} isActive={activeScreenIndex === 1} first={false} />
        </View>

        <Swiper
          ref={swiperRef}
          loop={false}
          showsPagination={false}
          index={0}
          onIndexChanged={index => setActiveScreenIndex(index)}
        >
          <AddIncomeScreen navigation={navigation} />
          <AddExpenseScreen navigation={navigation} />
        </Swiper>
      </View>
    </LinearGradient>
  )
}

export default AddReportScreen;

const styles = StyleSheet.create({
  sliderButtonContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sliderButtonLabel: {
    fontSize: 15,
    fontWeight: 'bold',
    color: colors.primary,
  },
  activeSliderButtonContainer: {
    backgroundColor: colors.linear2,
    padding: 10,
    borderWidth: 1,
    borderColor: colors.linear2,
  },
  inActiveSliderButtonContainer: {
    backgroundColor: colors.linear1,
    padding: 10,
    borderWidth: 1,
    borderColor: colors.linear2,
  },
  activeSliderButtonLabel: {
    color: colors.background,
  },
  inActiveSliderButtonLabel: {
    color: colors.label,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginBottom: '5%'
  },

  secondButton: {
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10
  },

  firstButton: {
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10
  },
});