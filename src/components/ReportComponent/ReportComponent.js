import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../../utils/colors';

const ReportComponent = ({ icon, title, description, route }) => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate(route);
  };

  return (
    <TouchableOpacity onPress={handlePress}>
      <View style={styles.itemContainer}>
        <View style={styles.iconContainer}>
          <Icon name={icon} size={24} color={colors.background} />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.description}>{description}</Text>
        </View>
        <View style={styles.arrowContainer}>
          <Icon name="arrow-forward-ios" size={20} color={colors.primary} />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ReportComponent;

const styles =StyleSheet.create({
    itemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 16,
        paddingHorizontal: 24,
        borderRadius: 8,
        marginHorizontal: 16,
        marginVertical: 8,
        backgroundColor: colors.linear1,
        borderRadius:20,
      
        shadowColor: colors.text,
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.05, // Change the shadowOpacity to 0.05 for a lighter shadow
        shadowRadius: 2, // Change the shadowRadius to 2 for a softer shadow
        elevation: 4,
      },
      
      iconContainer: {
        backgroundColor: colors.plusButton,
        borderRadius: 24,
        alignItems: 'center',
        justifyContent: 'center',
        height: 48,
        width: 48,
        marginRight: 16,
      },
      textContainer: {
        flex: 1,
      },
      title: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 4,
        color: colors.text,
      },
      description: {
        fontSize: 14,
        color: colors.text,
      },
      arrowContainer: {
        marginLeft: 16,
      },
})