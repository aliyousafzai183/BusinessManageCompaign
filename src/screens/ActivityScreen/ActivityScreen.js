import React, { useState, useEffect } from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet, ScrollView, Modal, Text } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome';
import colors from '../../utils/colors';
import { ActivityListComponent } from '../../components/index';
import { useRoute } from '@react-navigation/native';
import {ActivityScreenStyle as styles} from '../../styles/index';

const ActivityScreen = () => {
  const route = useRoute();
  const { title } = route.params || {};
  
  const checkFilterType = () => {
    if (title && title.includes("Income")) {
       return "Income Report";
    } else if (title && title.includes("Expense")) {
      return "Expense Report";
    }
    return "All Reports"
  }

  const [filtered, setFiltered] = useState(checkFilterType);
  const [data, setData] = useState([
    {
      icon: 'icon',
      price: 234,
      date: '12/04/2023',
      paid: true,
      type: 'Income Report'
    },
    {
      icon: 'icon',
      price: 100,
      date: '12/04/2023',
      paid: false,
      type: 'Expense Report'
    },
    {
      icon: 'icon',
      price: 300,
      date: '12/05/2023',
      paid: true,
      type: 'Income Report'
    },
    {
      icon: 'icon',
      price: 50,
      date: '12/05/2023',
      paid: false,
      type: 'Expense Report'
    },
  ]);

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

  const filteredData = data.filter(entry => filtered === "All Reports" || entry.type === filtered);

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

      <ScrollView style={{ width: '100%', flex: 1, height: '100%', paddingTop: '5%' }}>
        {filteredData.map((entry, index) => (
          <ActivityListComponent
            key={index}
            icon={entry.icon}
            price={entry.price}
            date={entry.date}
            paid={entry.paid}
            type={entry.type}
          />
        ))}
      </ScrollView>

      <Modal
        visible={modalVisible}
        animationType="slide"
        transparent={true}
      >
        <TouchableOpacity
          style={styles.modalContainer}
          onPress={()=>setModalVisible(false)}
        >
          <View style={styles.modalView}>
            <TouchableOpacity style={styles.modalButton} onPress={() => handleFilter("All Reports")}>
              <Text style={styles.modalButtonText}>All Reports</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.modalButton} onPress={() => handleFilter("Income Report")}>
              <Text style={styles.modalButtonText}>Income Report</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.modalButton} onPress={() => handleFilter("Expense Report")}>
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