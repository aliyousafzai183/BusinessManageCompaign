import React from 'react';
import { StyleSheet, ToastAndroid } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import colors from '../../utils/colors';
import RouteName from '../../routes/RouteName';
import { ReportComponent } from '../../components/index';

const MenuScreen = () => {

  return (
    <LinearGradient colors={[colors.linear1, colors.linear2]} style={styles.container}>
      <ReportComponent
        icon="account-circle"
        title="Profile"
        description="All details about your profile"
        route={RouteName.PROFILE_SCREEN}
        background="#007BFF"
        />
      <ReportComponent
        icon="email"
        title="Contact Us"
        description="Ask any question any time"
        route={RouteName.CONTACT_US_SCREEN}
        background="#17A2B8"
        />
      <ReportComponent
        icon="frequently-asked-questions"
        title="FAQs"
        description="Application usage guide"
        route={RouteName.FAQS_SCREEN}
        background="#6C757D"
        />
      <ReportComponent
        icon="logout"
        title="Logout"
        description="We will be waiting for you"
        route={RouteName.LOGOUT_SCREEN}
        background="#FFC107"
      />
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop:'3%'
  },
});

export default MenuScreen;