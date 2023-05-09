import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ToastAndroid, ScrollView, Keyboard } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import colors from '../../utils/colors';
import { RadioButton } from '../../components';
import RouteName from '../../routes/RouteName';
import { AddIncomeScreenStyle as styles } from '../../styles/index';
import db from '../../db/data/db';

const AddIncomeScreen = ({ navigation }) => {
  const [date, setDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [ordersReceived, setOrdersReceived] = useState();
  const [itemName, setItemName] = useState('');
  const [repeatOrders, setRepeatOrders] = useState();
  const [totalIncome, setTotalIncome] = useState();
  const [costOfSale, setCostOfSale] = useState();
  const [description, setDescription] = useState('');
  const [received, setReceived] = useState(true);

  // for styling purpose
  const [ordersReceivedFocused, setOrdersReceivedFocused] = useState(false);
  const [itemNameFocused, setItemNameFocused] = useState(false);
  const [repeatOrdersFocused, setRepeatOrdersFocused] = useState(false);
  const [totalIncomeFocused, setTotalIncomeFocused] = useState(false);
  const [costOfSaleFocused, setCostOfSaleFocused] = useState(false);
  const [descriptionFocused, setDescriptionFocused] = useState(false);


  const handleDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShowDatePicker(false);
    setDate(currentDate);
  };

  const handleDone = () => {
    // dismiss keyboard
    Keyboard.dismiss();
  }

  const handleCancel = () => {
    setShowDatePicker(false);
  };

  const handleSubmit = () => {
    if (!ordersReceived.trim() || !repeatOrders.trim() || !totalIncome.trim() || !costOfSale.trim()) {
      ToastAndroid.show("Please fill necessary fields", ToastAndroid.LONG);
      return;
    }
    setOrdersReceived();
    setItemName('');
    setRepeatOrders();
    setTotalIncome();
    setCostOfSale();
    setDescription('');
    setReceived(true);

    try {

      db.executeSql(
        'CREATE TABLE IF NOT EXISTS reports (id INTEGER PRIMARY KEY AUTOINCREMENT, incomeReport BOOLEAN, vendorName TEXT, description TEXT, paid BOOLEAN, date TEXT, ordersReceived INTEGER, itemName TEXT, previousCustomer INTEGER, totalIncome INTEGER, costOfSale INTEGER)',
        [],
        () => console.log('Table created'),
        error => console.log('Error creating table: ', error)
      );
      
      // inserting to db
      db.transaction(tx => {
        tx.executeSql(
          'INSERT INTO reports (incomeReport, vendorName, description, paid, date, ordersReceived, itemName, previousCustomer, totalIncome, costOfSale) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
          [true, 'Ali', description, received, date.toLocaleDateString(), ordersReceived, itemName, repeatOrders, totalIncome, costOfSale],
          () => {
            ToastAndroid.show("Added Report", ToastAndroid.LONG);
            navigation.navigate(RouteName.ACTIVITY_SCREEN);
          },
          error => console.log('Error inserting data: ', error)
        );
      });
    } catch (error) {
      ToastAndroid.show(error, ToastAndroid.LONG);
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
        ordersReceivedFocused
          ?
          <Text style={styles.label}>How many Orders did you receive?</Text>
          :
          <></>
      }
      <TextInput
        style={[
          styles.textInput,
          ordersReceivedFocused && { borderColor: colors.primary }
        ]}
        placeholder={
          ordersReceivedFocused
            ?
            ''
            :
            "Orders received"
        }
        placeholderTextColor={colors.label}
        keyboardType='numeric'
        value={ordersReceived}
        onChangeText={setOrdersReceived}
        onFocus={() => setOrdersReceivedFocused(true)}
        onBlur={() => setOrdersReceivedFocused(false)}
        onSubmitEditing={handleDone} // called when done button is pressed
        returnKeyType="done" // set return key type to done
      />

      {
        itemNameFocused
          ?
          <Text style={styles.label}>Item name (optional)</Text>
          :
          <></>
      }
      <TextInput
        style={[
          styles.textInput,
          itemNameFocused && { borderColor: colors.primary }
        ]}
        placeholderTextColor={colors.label}
        placeholder={
          itemNameFocused
            ?
            ''
            :
            "Item name (optional)"
        }
        value={itemName}
        onChangeText={setItemName}
        onFocus={() => setItemNameFocused(true)}
        onBlur={() => setItemNameFocused(false)}
        onSubmitEditing={handleDone} // called when done button is pressed
        returnKeyType="done" // set return key type to done
      />

      {
        repeatOrdersFocused
          ?
          <Text style={styles.label}>How many orders from repeated customers?</Text>
          :
          <></>
      }
      <TextInput
        style={[
          styles.textInput,
          repeatOrdersFocused && { borderColor: colors.primary }
        ]}
        placeholderTextColor={colors.label}
        placeholder={
          repeatOrdersFocused
            ?
            ''
            :
            "How many orders from repeated customers?"
        }
        value={repeatOrders}
        keyboardType='numeric'
        onChangeText={setRepeatOrders}
        onFocus={() => setRepeatOrdersFocused(true)}
        onBlur={() => setRepeatOrdersFocused(false)}
        onSubmitEditing={handleDone} // called when done button is pressed
        returnKeyType="done" // set return key type to done
      />

      {
        totalIncomeFocused
          ?
          <Text style={styles.label}>Total income of these orders?</Text>
          :
          <></>
      }
      <TextInput
        style={[
          styles.textInput,
          totalIncomeFocused && { borderColor: colors.primary }
        ]}
        placeholderTextColor={colors.label}
        placeholder={
          totalIncomeFocused
            ?
            ''
            :
            "Total income of these orders?"
        }
        keyboardType='numeric'
        value={totalIncome}
        onChangeText={setTotalIncome}
        onFocus={() => setTotalIncomeFocused(true)}
        onBlur={() => setTotalIncomeFocused(false)}
        onSubmitEditing={handleDone} // called when done button is pressed
        returnKeyType="done" // set return key type to done
      />

      {
        costOfSaleFocused
          ?
          <Text style={styles.label}>What was the cost of sale?</Text>
          :
          <></>
      }
      <View style={styles.costOfSaleContainer}>
        <TextInput
          style={[
            styles.textInputCost,
            costOfSaleFocused && { borderColor: colors.primary }
          ]}
          placeholderTextColor={colors.label}
          placeholder={
            costOfSaleFocused
              ?
              ''
              :
              "What was the cost of sale?"
          }
          value={costOfSale}
          keyboardType='numeric'
          onChangeText={setCostOfSale}
          onFocus={() => setCostOfSaleFocused(true)}
          onBlur={() => setCostOfSaleFocused(false)}
          onSubmitEditing={handleDone} // called when done button is pressed
          returnKeyType="done" // set return key type to done
        />

        <TouchableOpacity onPress={() => {
          navigation.navigate(RouteName.FAQS_SCREEN);
        }}>
          <Text style={{ color: 'blue' }}>What is cost of sale?</Text>
        </TouchableOpacity>

      </View>

      {
        descriptionFocused
          ?
          <Text style={styles.label}>Description</Text>
          :
          <></>
      }
      <TextInput
        style={[
          styles.textInput,
          descriptionFocused && { borderColor: colors.primary }
        ]}
        placeholderTextColor={colors.label}
        placeholder={
          descriptionFocused
            ?
            ''
            :
            "Description"
        }
        value={description}
        onChangeText={setDescription}
        onFocus={() => setDescriptionFocused(true)}
        onBlur={() => setDescriptionFocused(false)}
        onSubmitEditing={handleDone} // called when done button is pressed
        returnKeyType="done" // set return key type to done
      />

      <View style={styles.radioContainer}>
        <Text style={styles.inputButtonLabel}>Has this been received?</Text>

        <TouchableOpacity
          style={{ flexDirection: 'row', alignItems: 'center' }}
          onPress={() => setReceived(true)}
        >
          <RadioButton selected={received} />
          <Text style={styles.radioText}>Yes</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{ flexDirection: 'row', alignItems: 'center' }}
          onPress={() => setReceived(false)}
        >
          <RadioButton selected={!received} />
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

export default AddIncomeScreen;