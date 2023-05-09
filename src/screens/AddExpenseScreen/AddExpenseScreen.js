import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Keyboard, ScrollView, ToastAndroid } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import colors from '../../utils/colors';
import { RadioButton } from '../../components';
import RouteName from '../../routes/RouteName';
import { AddExpenseScreenStyle as styles } from '../../styles/index';
import db from '../../db/data/db';

const AddExpenseScreen = ({ navigation }) => {
  const [date, setDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [vendorName, setVendorName] = useState('');
  const [totalExpense, setTotalExpense] = useState();
  const [reason, setReason] = useState('');
  const [paid, setPaid] = useState(true);

  // for styling purpose
  const [vendorNameFocused, setVendorNameFocused] = useState(false);
  const [totalExpenseFocused, setTotalExpenseFocused] = useState(false);
  const [reasonFocused, setReasonFocused] = useState(false);

  const handleDone = () => {
    // dismiss keyboard
    Keyboard.dismiss();
  }

  const handleDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShowDatePicker(false);
    setDate(currentDate);
  };

  const handleCancel = () => {
    setShowDatePicker(false);
  };

  const handleSubmit = () => {
    if (!vendorName.trim() || !totalExpense.trim()) {
      ToastAndroid.show("Please fill necessary fields", ToastAndroid.LONG);
      return;
    }
    try {

      db.executeSql(
        'CREATE TABLE IF NOT EXISTS reports (id INTEGER PRIMARY KEY AUTOINCREMENT, incomeReport BOOLEAN, vendorName TEXT, description TEXT, paid BOOLEAN, date TEXT, ordersReceived INTEGER, itemName TEXT, previousCustomer INTEGER, totalIncome INTEGER, costOfSale INTEGER)',
        [],
        () => console.log('Table created'),
        error => console.log('Error creating table: ', error)
      );
      
      db.transaction(tx => {
        tx.executeSql(
          'INSERT INTO reports (incomeReport, vendorName, description, paid, date, ordersReceived, itemName, previousCustomer, totalIncome, costOfSale) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
          [false, vendorName, reason, paid, date.toLocaleDateString(), 0, 'Ali', 0, totalExpense, 0],
          () => {
            ToastAndroid.show("Added Report", ToastAndroid.LONG);
            navigation.navigate(RouteName.ACTIVITY_SCREEN);
          },
          error => console.log((error))
        );
      });
      setVendorName('');
      setTotalExpense();
      setReason('');
    } catch (error) {
      ToastAndroid.show("Error Adding Report", ToastAndroid.LONG);
    }
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
        placeholderTextColor={colors.label}
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
        onSubmitEditing={handleDone} // called when done button is pressed
        returnKeyType="done" // set return key type to done
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
        placeholderTextColor={colors.label}
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
        onSubmitEditing={handleDone} // called when done button is pressed
        returnKeyType="done" // set return key type to done
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
        placeholderTextColor={colors.label}
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
        onSubmitEditing={handleDone} // called when done button is pressed
        returnKeyType="done" // set return key type to done
      />

      <View style={styles.radioContainer}>
        <Text style={styles.inputButtonLabel}>Has this been paid?</Text>

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