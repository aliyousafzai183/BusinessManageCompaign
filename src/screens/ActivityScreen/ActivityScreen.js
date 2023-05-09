import React, { useState, useEffect } from 'react';
import { View, TextInput, TouchableOpacity, ScrollView, Modal, Text } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome';
import colors from '../../utils/colors';
import { ActivityListComponent } from '../../components/index';
import { useRoute, useFocusEffect } from '@react-navigation/native';
import { ActivityScreenStyle as styles } from '../../styles/index';
import GetData from '../../db/data/GetData';
import { ToastAndroid } from 'react-native';

const ActivityScreen = () => {

  const route = useRoute();
  const { title } = route.params || {};

  const checkFilterType = () => {
    if (title && title.includes("Income")) {
      return "Income";
    } else if (title && title.includes("Expense")) {
      return "Expense";
    }
    return "All Reports"
  }

  const [filtered, setFiltered] = useState(checkFilterType);

  const [data, setData] = useState([]);

  const [modalVisible, setModalVisible] = useState(false);

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const handleFilter = (type) => {
    setFiltered(type);
    closeModal();
  };

  const filteredData = data.filter(entry =>
    filtered === "All Reports" ||
    (entry.incomeReport && filtered === "Income") ||
    (!entry.incomeReport && filtered === "Expense")
  );

  useFocusEffect(
    React.useCallback(() => {
      GetData().then(reports => {
        setData(reports);
      }).catch(error => {
        ToastAndroid.show("No Report Found! \n Add a Report", ToastAndroid.SHORT);
        setData([]);
      });
    }, [])
  );

  useEffect(() => {
    const newFiltered = checkFilterType();
    setFiltered(newFiltered);
  }, [title]);


  return (
    <LinearGradient colors={[colors.linear1, colors.linear2]} style={styles.container}>
      <View style={styles.topContainer}>
        <View style={styles.searchContainer}>
          <Icon name="search" size={20} color={colors.background} style={styles.searchIcon} />
          <TextInput
            style={styles.textInput}
            placeholder="Search"
            placeholderTextColor={colors.background}
          />
        </View>
        <TouchableOpacity style={styles.filterButton} onPress={openModal}>
          <Icon name="filter" size={20} color={colors.background} />
        </TouchableOpacity>
      </View>

      <ScrollView style={{ width: '100%', flex: 1, height: '100%', paddingTop: '5%' }} showsVerticalScrollIndicator={false}>
        {filteredData.map((entry, index) => (
          <ActivityListComponent
            key={index}
            id={entry.id}
            price={entry.totalIncome}
            date={entry.date}
            paid={entry.paid === 1 ? true : false}
            type={entry.incomeReport ? "Income" : "Expense"}
          />
        ))}
        <View style={{ marginBottom: '50%' }}></View>
      </ScrollView>

      <Modal
        visible={modalVisible}
        animationType="slide"
        transparent={true}
      >
        <TouchableOpacity
          style={styles.modalContainer}
          onPress={() => setModalVisible(false)}
        >
          <View style={styles.modalView}>
            <TouchableOpacity style={styles.modalButton} onPress={() => handleFilter("All Reports")}>
              <Text style={styles.modalButtonText}>All Reports</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.modalButton} onPress={() => handleFilter("Income")}>
              <Text style={styles.modalButtonText}>Income Report</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.modalButton} onPress={() => handleFilter("Expense")}>
              <Text style={styles.modalButtonText}>Expense Report</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.modalCloseButton} onPress={() => setModalVisible(false)}>
              <Text style={styles.modalCloseButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      </Modal>

    </LinearGradient>
  )
}

export default ActivityScreen;