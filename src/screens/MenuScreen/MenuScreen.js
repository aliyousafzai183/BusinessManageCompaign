import React from 'react';
import { ScrollView, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import colors from '../../utils/colors';
import RouteName from '../../routes/RouteName';
import { ReportComponent } from '../../components/index';
import {MenuScreenStyle as styles} from '../../styles/index';

const MenuScreen = () => {

  return (
    <LinearGradient colors={[colors.linear1, colors.linear2]} style={styles.container}>
      <ScrollView>
      <ReportComponent
        icon="comment-quote-outline"
        title="Get a Quote"
        description="Get a quote for your business"
        route={RouteName.QUOTE_SCREEN}
        background={colors.plusButton}
        />
      <ReportComponent
        icon="account-circle"
        title="Profile"
        description="All details about your profile"
        route={RouteName.PROFILE_SCREEN}
        background="#007BFF"
        />
      <ReportComponent
        icon="email"
        title="Email Us"
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
        icon="notification-clear-all"
        title="Clear All Data"
        description="Remove all data from app"
        route={RouteName.LOGOUT_SCREEN}
        background={colors.failure}
      />
      <View style={{marginBottom:'15%'}}></View>
      </ScrollView>
    </LinearGradient>
  );
};

export default MenuScreen;