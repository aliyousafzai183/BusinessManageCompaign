import React from 'react';
import { StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import colors from '../../utils/colors';
import RouteName from '../../routes/RouteName';
import { ReportComponent } from '../../components/index';

const ReportListScreen = () => {
  return (
    <LinearGradient colors={[colors.linear1, colors.linear2]} style={styles.container}>
      <ReportComponent
        icon="chart-pie"
        title="Profit & Loss Report"
        description="Report of profit and loss statement"
        route={RouteName.ACTIVITY_SCREEN}
        />
      <ReportComponent
        icon="chart-areaspline-variant"
        title="Income Report"
        description="Report of your business incomes"
        route={RouteName.ACTIVITY_SCREEN}
        />
      <ReportComponent
        icon="chart-histogram"
        title="Expense Report"
        description="Report of your business expenses"
        route={RouteName.ACTIVITY_SCREEN}
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

export default ReportListScreen;
