import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import colors from '../../utils/colors';
import { RadioButton } from '../../components';
import RouteName from '../../routes/RouteName';

const AddExpenseScreen = ({navigation}) => {
  const [date, setDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [vendorName, setVendorName] = useState('');
  const [totalExpense, setTotalExpense] = useState('');
  const [reason, setReason] = useState('');
  const [paid, setPaid] = useState(true);

  // for styling purpose
  const [vendorNameFocused, setVendorNameFocused] = useState(false);
  const [totalExpenseFocused, setTotalExpenseFocused] = useState(false);
  const [reasonFocused, setReasonFocused] = useState(false);


  const handleDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShowDatePicker(false);
    setDate(currentDate);
  };

  const handleCancel = () => {
    setShowDatePicker(false);
  };

  const handleSubmit = () => {
    setVendorName('');
    setTotalExpense('');
    setReason('');
    navigation.navigate(RouteName.HOME_SCREEN);
  };

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
    >
      <TouchableOpacity
        style={styles.datePickerButton}
        onPress={() => setShowDatePicker(true)}>
        <Text style={styles.datePickerText}>Date: {date.toLocaleDateString()}</Text>
      </TouchableOpacity>

      {showDatePicker && (
        <DateTimePicker
          value={date}
          mode="date"
          display="default"
          onChange={handleDateChange}
          onCancel={handleCancel}
        />
      )}

      {
        vendorNameFocused
          ?
          <Text style={styles.label}>Vendor Name</Text>
          :
          <></>
      }
      <TextInput
        style={[
          styles.textInput,
          vendorNameFocused && { borderColor: colors.primary }
        ]}
        placeholder={
          vendorNameFocused
            ?
            ''
            :
            "Vendor Name"
        }
        value={vendorName}
        onChangeText={setVendorName}
        onFocus={() => setVendorNameFocused(true)}
        onBlur={() => setVendorNameFocused(false)}
      />

      {
        totalExpenseFocused
          ?
          <Text style={styles.label}>How much was the expense?</Text>
          :
          <></>
      }
      <TextInput
        style={[
          styles.textInput,
          totalExpenseFocused && { borderColor: colors.primary }
        ]}
        placeholder={
          totalExpenseFocused
            ?
            ''
            :
            "How much was the expense?"
        }
        value={totalExpense}
        onChangeText={setTotalExpense}
        onFocus={() => setTotalExpenseFocused(true)}
        onBlur={() => setTotalExpenseFocused(false)}
        keyboardType='numeric'
      />

      {
        reasonFocused
          ?
          <Text style={styles.label}>Description</Text>
          :
          <></>
      }
      <TextInput
        style={[
          styles.textInput,
          reasonFocused && { borderColor: colors.primary }
        ]}
        placeholder={
          reasonFocused
            ?
            ''
            :
            "Description"
        }
        value={reason}
        onChangeText={setReason}
        onFocus={() => setReasonFocused(true)}
        onBlur={() => setReasonFocused(false)}
      />

      <View style={styles.radioContainer}>
        <Text style={styles.inputButtonLabel}>Has this been received?</Text>

        <TouchableOpacity
          style={{ flexDirection: 'row', alignItems: 'center' }}
          onPress={() => setPaid(true)}
        >
          <RadioButton selected={paid} />
          <Text style={styles.radioText}>Yes</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{ flexDirection: 'row', alignItems: 'center' }}
          onPress={() => setPaid(false)}
        >
          <RadioButton selected={!paid} />
          <Text style={styles.radioText}>No</Text>
        </TouchableOpacity>

      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={handleSubmit}>
        <Text
          style={styles.buttonText}
        >Submit</Text>
      </TouchableOpacity>

    </ScrollView>
  )
}

export default AddExpenseScreen;

const styles = StyleSheet.create({
  datePickerButton: {
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
    width: '40%',
    alignSelf: 'center',
    backgroundColor: colors.primary,
    marginBottom: '5%'
  },
  textInput: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 10,
    padding: 10,
    marginBottom: '5%',
  },
  textInputCost: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 10,
    padding: 10,
  },
  button: {
    backgroundColor: colors.primary,
    borderRadius: 10,
    padding: 10,
    marginBottom: '50%'
  },
  datePickerText: {
    textAlign: 'center',
    color: colors.background
  },
  buttonText: {
    textAlign: 'center',
    color: colors.background,
    fontSize: 20
  },
  costOfSaleContainer: {
    flexDirection: 'column',
    marginBottom: '3%'
  },

  radioText: {
    marginRight: 10,
    marginLeft: 5,
    color: colors.label
  },

  inputButtonLabel: {
    color: colors.text,
    fontSize: 15,
    fontWeight: 'bold',
    marginRight: '5%'
  },

  radioContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: '10%',
    marginBottom: '40%'
  },

  label: {
    color: colors.primary,
    fontSize: 15
  }
});