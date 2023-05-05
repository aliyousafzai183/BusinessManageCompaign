import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import colors from '../../utils/colors';
import { RadioButton } from '../../components';
import RouteName from '../../routes/RouteName';


const AddIncomeScreen = ({navigation}) => {
  const [date, setDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [ordersReceived, setOrdersReceived] = useState('');
  const [itemName, setItemName] = useState('');
  const [repeatOrders, setRepeatOrders] = useState('');
  const [totalIncome, setTotalIncome] = useState('');
  const [costOfSale, setCostOfSale] = useState('');
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

  const handleCancel = () => {
    setShowDatePicker(false);
  };

  const handleSubmit = () => {
    setOrdersReceived('');
    setItemName('');
    setRepeatOrders('');
    setTotalIncome('');
    setCostOfSale('');
    setDescription('');
    setReceived(true);
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
        value={ordersReceived}
        onChangeText={setOrdersReceived}
        onFocus={() => setOrdersReceivedFocused(true)}
        onBlur={() => setOrdersReceivedFocused(false)}
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
        onChangeText={setRepeatOrders}
        onFocus={() => setRepeatOrdersFocused(true)}
        onBlur={() => setRepeatOrdersFocused(false)}
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
        value={totalIncome}
        onChangeText={setTotalIncome}
        onFocus={() => setTotalIncomeFocused(true)}
        onBlur={() => setTotalIncomeFocused(false)}
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
          onChangeText={setCostOfSale}
          onFocus={() => setCostOfSaleFocused(true)}
          onBlur={() => setCostOfSaleFocused(false)}
        />

        <TouchableOpacity onPress={() => {
          // Navigate to cost of sale website
          console.log('Navigating to cost of sale website');
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

const styles = StyleSheet.create({
  datePickerButton: {
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
    width: '40%',
    alignSelf: 'center',
    backgroundColor: colors.linear2,
    marginBottom: '5%'
  },
  textInput: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 10,
    padding: 10,
    marginBottom: '5%',
    color:colors.text
  },
  textInputCost: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 10,
    padding: 10,
  },
  button: {
    backgroundColor: colors.linear1,
    borderRadius: 10,
    padding: 10,
    marginBottom: '40%'
  },
  datePickerText: {
    textAlign: 'center',
    color: colors.background
  },
  buttonText: {
    textAlign: 'center',
    color: colors.label,
    fontSize: 20,
    fontWeight:'bold'
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
    marginVertical: '10%',
  },

  label: {
    color: colors.primary,
    fontSize: 15
  }
});