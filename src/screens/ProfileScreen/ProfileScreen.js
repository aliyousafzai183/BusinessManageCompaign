import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, BackHandler, Keyboard } from 'react-native';
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
  const [currency, setCurrency] = useState('');

  // for styling purpose
  const [businessNameFocused, setBusinessNameFocused] = useState(false);
  const [currencyFocused, setCurrencyFocused] = useState(false);

  const handleSave = () => {
    if (isEditing) {
      setIsEditing(!isEditing);
      SetData(businessName, currency);
    }
    setIsEditing(!isEditing);
  };

  useEffect(() => {
    const fetchData = async () => {
      const data = await GetProfileData();
      if (data != null) {
        setBusinessName(data.businessName);
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

  const handleDone = () => {
    // dismiss keyboard
    Keyboard.dismiss();
  }

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
            onSubmitEditing={handleDone} // called when done button is pressed
            returnKeyType="done" // set return key type to done
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
            onSubmitEditing={handleDone} // called when done button is pressed
            returnKeyType="done" // set return key type to done
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