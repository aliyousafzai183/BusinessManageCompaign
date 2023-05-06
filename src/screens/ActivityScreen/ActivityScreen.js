import React from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome';
import colors from '../../utils/colors';
import { ActivityListComponent } from '../../components/index';

const ActivityScreen = () => {
  return (
    <LinearGradient colors={[colors.linear1, colors.linear2]} style={styles.container}>
      <View style={styles.topContainer}>
        <View style={styles.searchContainer}>
          <Icon name="search" size={20} color={colors.background} style={styles.searchIcon} />
          <TextInput
            style={styles.textInput}
            placeholder="Search"
            placeholderTextColor={colors.background}
          />
        </View>
        <TouchableOpacity style={styles.filterButton}>
          <Icon name="filter" size={20} color={colors.background} />
        </TouchableOpacity>
      </View>

      <ScrollView style={{ width: '100%', flex: 1, height: '100%', paddingTop: '5%' }}>
        <ActivityListComponent
          icon="icon"
          price={234}
          date="12/04/2023"
          paid={true}
          type="Income"
        />
        <ActivityListComponent
          icon="icon"
          price={100}
          date="12/04/2023"
          paid={false}
          type="Expense"
        />

      </ScrollView>

    </LinearGradient>
  )
}

export default ActivityScreen;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: '5%',
    paddingHorizontal: '5%'
  },
  topContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 10,
    backgroundColor: colors.white,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.plusButton,
    borderRadius: 30,
    paddingHorizontal: '5%',
    flex: 1,
    marginRight: '5%',
  },
  searchIcon: {
    marginHorizontal: '3%'
  },
  textInput: {
    flex: 1,
    fontSize: 16,
    color: colors.black,
    borderRadius: 10,
    color: colors.background
  },
  filterButton: {
    width: 45,
    height: 45,
    borderRadius: 45,
    backgroundColor: colors.plusButton,
    alignItems: 'center',
    justifyContent: 'center',
  },
});