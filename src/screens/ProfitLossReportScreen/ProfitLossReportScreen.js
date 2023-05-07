import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import colors from '../../utils/colors';

const ProfitLossReportScreen = () => {
  return (
    <LinearGradient colors={[colors.linear1, colors.linear2]} style={styles.container}>
      <View style={styles.invoice}>
        <Text style={styles.invoiceTitle}>REPORT</Text>
        <View style={styles.borderTop}></View>
        <View style={styles.row}>
          <Text style={styles.label}>Total Income:</Text>
          <Text style={styles.value}>$10,000</Text>
        </View>
        <View style={styles.borderBottom}></View>
        <View style={styles.row}>
          <Text style={styles.label}>Cost of Sales:</Text>
          <Text style={styles.value}>$2,500</Text>
        </View>
        <View style={styles.borderBottom}></View>
        <View style={styles.row}>
          <Text style={styles.label}>Gross Profit:</Text>
          <Text style={styles.value}>$7,500</Text>
        </View>
        <View style={styles.borderBottom}></View>
        <View style={styles.row}>
          <Text style={styles.label}>Payroll:</Text>
          <Text style={styles.value}>$3,000</Text>
        </View>
        <View style={styles.borderBottom}></View>
        <View style={styles.row}>
          <Text style={styles.label}>Operating Expenses:</Text>
          <Text style={styles.value}>$2,000</Text>
        </View>
        <View style={styles.borderBottom}></View>
        <View style={styles.row}>
          <Text style={styles.label}>Net Profit:</Text>
          <Text style={styles.value}>$2,500</Text>
        </View>
        <View style={styles.borderTop}></View>
      </View>
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  invoice: {
    margin: 20,
    backgroundColor: colors.linear1,
    borderRadius: 10,
    padding: 20,
    elevation: 5,
  },
  invoiceTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: colors.primary,
    textAlign: 'center',
  },
  borderTop: {
    borderTopWidth: 1,
    borderTopColor: colors.linear2,
    marginTop: 10,
    marginBottom: 20,
  },
  borderBottom: {
    borderBottomWidth: 1,
    borderBottomColor: colors.linear2,
    marginTop: 20,
    marginBottom: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  label: {
    fontSize: 18,
    color: colors.text,
    fontWeight: 'bold',
  },
  value: {
    fontSize: 18,
    color: colors.primary,
    fontWeight: 'bold',
  },
});

export default ProfitLossReportScreen;