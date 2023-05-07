import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import BottomNavigator from './BottomNavigation';
import RouteName from './RouteName';
import colors from '../utils/colors';

// screens
import {
    SplashScreen,
    ContactUsScreen, FaqScreen,
    ProfileScreen,
    AddExpenseScreen, AddIncomeScreen,
    SecondSplashScreen, ProfitLossReportScreen
} from '../screens/index';


const Stack = createStackNavigator();

const StackNavigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
            screenOptions={{
                headerStyle:{
                    backgroundColor: colors.linear1
                },
                headerTintColor:colors.plusButton
            }}
            >
                <Stack.Screen name={RouteName.SPLASH_SCREEN} component={SplashScreen} options={{ headerShown: false }} />
                <Stack.Screen name={RouteName.SECOND_SPLASH_SCREEN} component={SecondSplashScreen} options={{ headerShown: false }} />
                <Stack.Screen name={RouteName.MAIN_SCREEN} component={BottomNavigator} options={{ headerShown: false }} />
                <Stack.Screen name={RouteName.FAQS_SCREEN} component={FaqScreen} options={{ headerTitle: 'FAQs' }}/>
                <Stack.Screen name={RouteName.CONTACT_US_SCREEN} component={ContactUsScreen}  options={{ headerTitle: 'Contact Us' }}/>
                <Stack.Screen name={RouteName.ADD_INCOME_SCREEN} component={AddIncomeScreen} options={{ headerShown: false }} />
                <Stack.Screen name={RouteName.ADD_EXPENSE_SCREEN} component={AddExpenseScreen} options={{ headerShown: false }} />
                <Stack.Screen name={RouteName.PROFILE_SCREEN} component={ProfileScreen}  options={{ headerTitle: 'Profile' }}/>
                <Stack.Screen name={RouteName.PROFIT_LOSS_REPORT_SCREEN} component={ProfitLossReportScreen}  options={{ headerTitle: 'Profit & Loss Report' }}/>

            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default StackNavigation;