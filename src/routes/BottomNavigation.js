import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

// screens
import {
  HomeScreen, ActivityScreen, MenuScreen,
  AddReportScreen, ReportListScreen,
} from '../screens/index';
import RouteName from './RouteName';

// colors
import colors from '../utils/colors';

const Tab = createBottomTabNavigator();

const CustomTabBarButton = ({ children, onpress }) => {
  return (
    <TouchableOpacity onPress={onpress} style={styles.plusButton}>
      <View style={[styles.plusContainer, styles.shadow]}>
        {children}
      </View>
    </TouchableOpacity>
  )
}

function BottomNavigation() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: {
          position: 'absolute',
          bottom: 25,
          left: 20,
          right: 20,
          elevation: 0,
          backgroundColor: colors.background,
          borderRadius: 15,
          height: 70,
          ...styles.shadow
        }
      }}
    >
      <Tab.Screen
        name={RouteName.HOME_SCREEN}
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.iconContainer}>
              <AntDesign name="home" size={25} color={focused ? colors.primary : '#C1BCCC'} />
              <Text style={{ color: focused ? '#7F5DF0' : '#C1BCCC', fontSize: 12 }}>HOME</Text>
            </View>
          )
        }}
      />

      <Tab.Screen
        name={RouteName.ACTIVITY_SCREEN}
        component={ActivityScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.iconContainer}>
              <Feather name="activity" size={25} color={focused ? '#7F5DF0' : '#C1BCCC'} />
              <Text style={{ color: focused ? '#7F5DF0' : '#C1BCCC', fontSize: 12 }}>ACTIVITY</Text>
            </View>
          )
        }}
      />

      <Tab.Screen
        name={RouteName.ADD_REPORT_SCREEN}
        component={AddReportScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <AntDesign name="plus" size={25} color={colors.background} />
          ),
          tabBarButton: (props) => (
            <CustomTabBarButton {...props} />
          )
        }}
      />

      <Tab.Screen
        name={RouteName.REPORT_LIST_SCREEN}
        component={ReportListScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.iconContainer}>
              <Ionicons name="document-text-outline" size={25} color={focused ? '#7F5DF0' : '#C1BCCC'} />
              <Text style={{ color: focused ? '#7F5DF0' : '#C1BCCC', fontSize: 12 }}>REPORT</Text>
            </View>
          )
        }}
      />

      <Tab.Screen
        name={RouteName.MENU_SCREEN}
        component={MenuScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.iconContainer}>
              <FontAwesome5 name="bars" size={25} color={focused ? '#7F5DF0' : '#C1BCCC'} />
              <Text style={{ color: focused ? '#7F5DF0' : '#C1BCCC', fontSize: 12 }}>MENU</Text>
            </View>
          )
        }}
      />
    </Tab.Navigator>
  );
}

export default BottomNavigation;

const styles = StyleSheet.create({
  shadow: {
    shadowColor: colors.primary,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5
  },

  iconContainer: {
    alignItems: 'center'
  },

  plusButton: {
    top: -30,
    justifyContent: 'center',
    alignItems: 'center',
  },

  plusContainer: {
    width: 60,
    height: 60,
    borderRadius: 35,
    backgroundColor: colors.primary
  }
})