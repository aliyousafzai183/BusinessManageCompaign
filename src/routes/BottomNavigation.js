import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// screens
import {
  HomeScreen, ActivityScreen, MenuScreen,
  AddReportScreen, ReportListScreen,
} from '../screens/index';
import RouteName from './RouteName';

const Tab = createBottomTabNavigator();

function BottomNavigation() {
  return (
    <Tab.Navigator
      screenOptions={{
        // headerShown: false,
        // tabBarStyle: { display: 'none' },
      }}
    >
      <Tab.Screen name={RouteName.HOME_SCREEN} component={HomeScreen} />
      <Tab.Screen name={RouteName.ACTIVITY_SCREEN} component={ActivityScreen} />
      <Tab.Screen name={RouteName.ADD_REPORT_SCREEN} component={AddReportScreen} />
      <Tab.Screen name={RouteName.MENU_SCREEN} component={MenuScreen} />
      <Tab.Screen name={RouteName.REPORT_LIST_SCREEN} component={ReportListScreen} />
    </Tab.Navigator>
  );
}

export default BottomNavigation;