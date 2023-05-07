import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { UniversalContainerStyle as styles1 } from '../../styles/index';
import LinearGradient from 'react-native-linear-gradient';
import colors from '../../utils/colors';

const ProfileScreen = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [businessName, setBusinessName] = useState('Fiver Freelance');
  const [founderName, setFounderName] = useState('Mobile Developer');
  const [phoneNumber, setPhoneNumber] = useState('+923473766183');
  const [email, setEmail] = useState('codinglabs183@gmail.com');
  const [currency, setCurrency] = useState('Pkr');

  // for styling purpose
  const [businessNameFocused, setBusinessNameFocused] = useState(false);
  const [founderNameFocused, setFounderNameFocused] = useState(false);
  const [phoneNumberFocused, setPhoneNumberFocused] = useState(false);
  const [emailFocused, setEmailFocused] = useState(false);
  const [currencyFocused, setCurrencyFocused] = useState(false);

  const handleSave = () => {
    setIsEditing(!isEditing);
    // Save all data in state
  };

  return (
    <LinearGradient colors={[colors.linear1, colors.linear2]} style={styles1.container}>
      <ScrollView style={styles.contentContainer} showsHorizontalScrollIndicator={false}>
        <View style={styles.avatarContainer}>
          <FontAwesome name="user-circle-o" size={100} color={colors.plusButton} />
        </View>
        <View style={styles.inputContainer}>

          {
            businessNameFocused
              ?
              <Text style={styles.label}>Business Name</Text>
              :
              <></>
          }
          <TextInput
            style={[
              styles.textInput,
              businessNameFocused && { borderColor: colors.primary },
              { color: isEditing ? colors.text : colors.label }
            ]}
            placeholderTextColor={colors.label}
            placeholder={
              businessNameFocused
                ?
                ''
                :
                "Business Name"
            }
            value={businessName}
            onChangeText={setBusinessName}
            editable={isEditing}
            onFocus={() => setBusinessNameFocused(true)}
            onBlur={() => setBusinessNameFocused(false)}
          />

          {
            founderNameFocused
              ?
              <Text style={styles.label}>Founder`s Name</Text>
              :
              <></>
          }
          <TextInput
            style={[
              styles.textInput,
              founderNameFocused && { borderColor: colors.primary },
              { color: isEditing ? colors.text : colors.label }
            ]}
            placeholderTextColor={colors.label}
            placeholder={
              founderNameFocused
                ?
                ''
                :
                "Founder Name"
            }
            value={founderName}
            onChangeText={setFounderName}
            editable={isEditing}
            onFocus={() => setFounderNameFocused(true)}
            onBlur={() => setFounderNameFocused(false)}
          />

          {
            phoneNumberFocused
              ?
              <Text style={styles.label}>Phone Number</Text>
              :
              <></>
          }
          <TextInput
            style={[
              styles.textInput,
              phoneNumberFocused && { borderColor: colors.primary },
              { color: isEditing ? colors.text : colors.label }
            ]}
            placeholderTextColor={colors.label}
            placeholder={
              phoneNumberFocused
                ?
                ''
                :
                "Phone Number"
            }
            value={phoneNumber}
            onChangeText={setPhoneNumber}
            editable={isEditing}
            onFocus={() => setPhoneNumberFocused(true)}
            onBlur={() => setPhoneNumberFocused(false)}
          />

          {
            emailFocused
              ?
              <Text style={styles.label}>Email Address</Text>
              :
              <></>
          }
          <TextInput
            style={[
              styles.textInput,
              emailFocused && { borderColor: colors.primary },
              { color: isEditing ? colors.text : colors.label }
            ]}
            placeholderTextColor={colors.label}
            placeholder={
              emailFocused
                ?
                ''
                :
                "Email Address"
            }
            value={email}
            onChangeText={setEmail}
            editable={isEditing}
            onFocus={() => setEmailFocused(true)}
            onBlur={() => setEmailFocused(false)}
          />

{
            currencyFocused
              ?
              <Text style={styles.label}>Currency</Text>
              :
              <></>
          }
          <TextInput
            style={[
              styles.textInput,
              currencyFocused && { borderColor: colors.primary },
              { color: isEditing ? colors.text : colors.label }
            ]}
            placeholderTextColor={colors.label}
            placeholder={
              currencyFocused
                ?
                ''
                :
                "Currency"
            }
            value={currency}
            onChangeText={setCurrency}
            editable={isEditing}
            onFocus={() => setCurrencyFocused(true)}
            onBlur={() => setCurrencyFocused(false)}
          />

          <TouchableOpacity onPress={handleSave} style={styles.header}>
            {isEditing ? (
              <Text style={styles.headerButton}>Save</Text>
            ) : (
              <Text style={styles.headerButton}>Edit</Text>
            )}
          </TouchableOpacity>
        </View>

      </ScrollView>
    </LinearGradient>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    marginTop: 50,
    marginHorizontal: 20,
    backgroundColor: colors.plusButton,
    paddingVertical: '3%',
    width: '50%',
    alignItems: 'center',
    borderRadius: 30,
    marginBottom:'30%'
  },
  headerButton: {
    color: colors.background,
    fontWeight: 'bold',
    fontSize: 16,
  },
  contentContainer: {
    flex: 1,
    marginTop: 30,
  },
  avatarContainer: {
    alignItems: 'center',
    marginBottom: 30,
  },
  inputContainer: {
    marginTop: 10,
    alignItems: 'center'
  },
  textInput: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 10,
    padding: 10,
    marginBottom: '5%',
    width: '70%',
    textAlign: 'center'
  },

  label: {
    color: colors.primary,
    fontSize: 15
  }
});