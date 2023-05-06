import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { HeaderBar } from '../components/index';

// screens
import {
  HomeScreen, ActivityScreen, MenuScreen,
  AddReportScreen, ReportListScreen,
} from '../screens/index';
import RouteName from './RouteName';

// colors
import colors from '../utils/colors';

const Tab = createBottomTabNavigator();

const CustomTabBarButton = ({ children, onPress }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={styles.plusButton}
      activeOpacity={1}
    >
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
        tabBarStyle: {
          position: 'absolute',
          bottom: 25,
          left: 20,
          right: 20,
          elevation: 0,
          backgroundColor: colors.linear1,
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
              <AntDesign name="home" size={25} color={focused ? colors.primary : colors.linear2} />
              <Text style={{ color: focused ? colors.primary : colors.linear2, fontSize: 12 }}>HOME</Text>
            </View>
          ),
          header: () => <HeaderBar title="Dashboard" />
        }}
      />

      <Tab.Screen
        name={RouteName.ACTIVITY_SCREEN}
        component={ActivityScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.iconContainer}>
              <Feather name="activity" size={25} color={focused ? colors.primary : colors.linear2} />
              <Text style={{ color: focused ? colors.primary : colors.linear2, fontSize: 12 }}>ACTIVITY</Text>
            </View>
          ),
          header: () => <HeaderBar title="Activity" />
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
          ),
          header: () => <HeaderBar title="Add Report" />
        }}
      />

      <Tab.Screen
        name={RouteName.REPORT_LIST_SCREEN}
        component={ReportListScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.iconContainer}>
              <Ionicons name="document-text-outline" size={25} color={focused ? colors.primary : colors.linear2} />
              <Text style={{ color: focused ? colors.primary : colors.linear2, fontSize: 12 }}>REPORT</Text>
            </View>
          ),
          header: () => <HeaderBar title="Reports" />
        }}
      />

      <Tab.Screen
        name={RouteName.MENU_SCREEN}
        component={MenuScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.iconContainer}>
              <FontAwesome5 name="bars" size={25} color={focused ? colors.primary : colors.linear2} />
              <Text style={{ color: focused ? colors.primary : colors.linear2, fontSize: 12 }}>MENU</Text>
            </View>
          ),
          header: () => <HeaderBar title="Menu" />
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
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: colors.plusButton
  }
})