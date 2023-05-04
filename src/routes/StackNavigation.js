import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import BottomNavigator from './BottomNavigation';
import RouteName from './RouteName';

// screens
import {
    SplashScreen, ForgotPassword,
    SigninScreen, SignupScreen,
    ContactUsScreen, FaqScreen,
    ProfileScreen, RateUsScreen,
    AddExpenseScreen, AddIncomeScreen,
} from '../screens/index';


const Stack = createStackNavigator();

const StackNavigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false
                }}
            >
                <Stack.Screen name={RouteName.MAIN_SCREEN} component={BottomNavigator} />
                <Stack.Screen name={RouteName.SPLASH_SCREEN} component={SplashScreen} />
                <Stack.Screen name={RouteName.SIGNIN_SCREEN} component={SigninScreen} />
                <Stack.Screen name={RouteName.SIGNUP_SCREEN} component={SignupScreen} />
                <Stack.Screen name={RouteName.FORGOT_PASSWORD_SCREEN} component={ForgotPassword} />
                <Stack.Screen name={RouteName.FAQS_SCREEN} component={FaqScreen} />
                <Stack.Screen name={RouteName.CONTACT_US_SCREEN} component={ContactUsScreen} />
                <Stack.Screen name={RouteName.ADD_INCOME_SCREEN} component={AddIncomeScreen} />
                <Stack.Screen name={RouteName.ADD_EXPENSE_SCREEN} component={AddExpenseScreen} />
                <Stack.Screen name={RouteName.PROFILE_SCREEN} component={ProfileScreen} />
                <Stack.Screen name={RouteName.RATE_US_SCREEN} component={RateUsScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default StackNavigation;