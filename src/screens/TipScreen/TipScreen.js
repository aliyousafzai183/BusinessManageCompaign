import React, { useState, useEffect } from 'react';
import { Text, ScrollView, TouchableOpacity, LayoutAnimation, BackHandler, View, TextInput } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

// styles
import { UniversalContainerStyle as styles1 } from '../../styles/index';
import LinearGradient from 'react-native-linear-gradient';
import colors from '../../utils/colors';
import { FaqScreenStyle as styles, ActivityScreenStyle as styles2 } from '../../styles/index';
import { Tips } from '../../db/data/Tips';

const TipScreen = ({ navigation }) => {
  const [selectedQuestionIndex, setSelectedQuestionIndex] = useState(-1);
  const [data, setData] = useState(Tips);
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

  const [searchValue, setSearchValue] = useState('');

  const handleFilterPress = () => {
    setSearchValue('');
  }

  const filteredData = data.filter(entry =>
    entry.title.toString().toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())
  );

  const handleQuestionPress = (index) => {
    if (index === selectedQuestionIndex) {
      LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
      setSelectedQuestionIndex(-1);
    } else {
      LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
      setSelectedQuestionIndex(index);
    }
  };

  return (
    <LinearGradient colors={[colors.linear1, colors.linear2]} style={styles1.container}>
      <View style={styles2.topContainer}>
        <View style={styles2.searchContainer}>
          <Ionicons name="search" size={20} color={colors.background} style={styles2.searchIcon} />
          <TextInput
            style={styles2.textInput}
            placeholder="Search"
            placeholderTextColor={colors.background}
            onChangeText={(value) => setSearchValue(value)}
            value={searchValue}
          />
        </View>
        <TouchableOpacity style={styles2.filterButton} onPress={handleFilterPress}>
          <Icon name="reload" size={20} color={colors.background} />
        </TouchableOpacity>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {filteredData.map((item, index) => (
          <React.Fragment key={index}>
            <TouchableOpacity
              style={[styles.questionContainer, selectedQuestionIndex === index && {
                borderBottomLeftRadius: 0,
                borderBottomRightRadius: 0,
              }]}
              onPress={() => handleQuestionPress(index)}
            >
              <Text style={styles.questionText}>{item.title}</Text>
              <Ionicons
                name={selectedQuestionIndex === index ? 'ios-remove-circle' : 'ios-add-circle'}
                size={24}
                color={colors.plusButton}
              />
            </TouchableOpacity>
            {selectedQuestionIndex === index && (
              <Text key={`${index}_answer`} style={styles.answerText}>
                {item.description}
              </Text>
            )}
          </React.Fragment>
        ))}
        <View style={{ marginBottom: '50%' }}></View>
      </ScrollView>

    </LinearGradient>
  );

};

export default TipScreen;