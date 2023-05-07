import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, Linking, ScrollView } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';

// styles
import { UniversalContainerStyle as styles1 } from '../../styles/index';
import LinearGradient from 'react-native-linear-gradient';
import colors from '../../utils/colors';

const ContactUsScreen = () => {
  const [subject, setSubject] = useState('');
  const [body, setBody] = useState('');
  const [formFilled, setFormFilled] = useState(false);
  const [showWarning, setShowWarning] = useState(false);

  useEffect(() => {
    if (subject.trim() !== '' && body.trim() !== '') {
      setFormFilled(true);
    } else {
      setFormFilled(false);
    }
  }, [subject, body]);

  const handleEmailSubmit = () => {
    if (formFilled) {
      const email = `mailto:codinglabs183@gmail.com?subject=${subject}&body=${body}`;
      Linking.openURL(email);
    } else {
      setShowWarning(true);
    }
  };

  return (
    <LinearGradient colors={[colors.linear1, colors.linear2]} style={styles1.container}>
      <ScrollView style={styles.container} showsHorizontalScrollIndicator={false}>
      <Text style={styles.heading}>We love hearing from you! Reach out anytime</Text>
        <View style={styles.inputContainer}>
          <Entypo name="email" size={24} color={colors.plusButton} />
          <TextInput
            style={styles.input}
            placeholder="Subject"
            value={subject}
            onChangeText={(text) => setSubject(text)}
            placeholderTextColor={colors.label}
          />
        </View>
        <View style={styles.inputContainer}>
          <MaterialIcons name="message" size={24} color={colors.plusButton} />
          <TextInput
            style={styles.textArea}
            placeholder="Message"
            value={body}
            onChangeText={(text) => setBody(text)}
            placeholderTextColor={colors.label}
            multiline
          />
        </View>
        {showWarning && (!subject.trim() || !body.trim()) && (
          <Text style={styles.warningText}>Please fill in all fields</Text>
        )}
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={handleEmailSubmit}
          // disabled={!formFilled}
        >
          <Text style={styles.buttonText}>Submit</Text>
          <AntDesign name="arrowright" size={24} color={colors.background} />
        </TouchableOpacity>
      </ScrollView>
    </LinearGradient>
  );
};

const styles = {
  container: {
    marginHorizontal: '5%',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.plusButton,
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  input: {
    flex: 1,
    paddingHorizontal: 10,
    height: 50,
    fontSize: 18,
    color: colors.text,
  },
  textArea: {
    flex: 1,
    paddingHorizontal: 10,
    paddingTop: 10,
    fontSize: 18,
    color: colors.text,
    height: 200,
    textAlignVertical: 'top',
  },
  buttonContainer: {
    marginTop: '15%',
    backgroundColor: colors.plusButton,
    paddingVertical: '3%',
    width: '50%',
    alignItems: 'center',
    borderRadius: 30,
    alignSelf:'center',
    flexDirection:'row',
    paddingHorizontal:'5%',
    justifyContent:'space-between'
  },
  buttonText: {
    color: colors.background,
    fontSize: 18,
    marginLeft: '5%',
  },

  warningText: {
    fontSize: 14,
    color: colors.failure,
    marginTop: '2%',
  },

  heading:{
    fontSize:15,
    fontWeight:'bold',
    marginBottom:'5%',
    alignSelf:'center',
    color:colors.text
  }

};

export default ContactUsScreen;
