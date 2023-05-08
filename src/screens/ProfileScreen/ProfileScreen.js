import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, BackHandler } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { UniversalContainerStyle as styles1 } from '../../styles/index';
import LinearGradient from 'react-native-linear-gradient';
import colors from '../../utils/colors';
import { ProfileScreenStyle as styles } from '../../styles/index';
import SetData from '../../db/profile/SetData';
import GetProfileData from '../../db/profile/GetProfileData';

const ProfileScreen = ({navigation}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [businessName, setBusinessName] = useState('');
  const [founderName, setFounderName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [currency, setCurrency] = useState('');

  // for styling purpose
  const [businessNameFocused, setBusinessNameFocused] = useState(false);
  const [founderNameFocused, setFounderNameFocused] = useState(false);
  const [phoneNumberFocused, setPhoneNumberFocused] = useState(false);
  const [emailFocused, setEmailFocused] = useState(false);
  const [currencyFocused, setCurrencyFocused] = useState(false);

  const handleSave = () => {
    if (isEditing) {
      setIsEditing(!isEditing);
      SetData(businessName, founderName, phoneNumber, email, currency);
    }
    setIsEditing(!isEditing);
  };

  useEffect(() => {
    const fetchData = async () => {
      const data = await GetProfileData();
      if (data != null) {
        setBusinessName(data.businessName);
        setFounderName(data.founderName);
        setPhoneNumber(data.phoneNumber);
        setEmail(data.email);
        setCurrency(data.currency);
      }
    };

    fetchData();
  }, [isEditing]);

  useEffect(() => {
    const backAction = () => {
      navigation.goBack();
      return true;
    };

    const backHandler = BackHandler.addEventListener('hardwareBackPress', backAction);

    return () => {
      if (backHandler) {
        backHandler.remove();
      }
    };
  }, []);

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
            keyboardType='numeric'
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