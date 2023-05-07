import React, { useState, useEffect } from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet, ScrollView, Modal, Text } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome';
import colors from '../../utils/colors';
import { ActivityListComponent } from '../../components/index';
import { useRoute } from '@react-navigation/native';

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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: '5%',
    paddingHorizontal: '5%',
  },
  topContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 10,
    backgroundColor: colors.white,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.plusButton,
    borderRadius: 30,
    paddingHorizontal: '5%',
    flex: 1,
    marginRight: '5%',
  },
  searchIcon: {
    marginHorizontal: '3%',
  },
  textInput: {
    flex: 1,
    fontSize: 16,
    color: colors.black,
    borderRadius: 10,
    color: colors.background,
  },
  filterButton: {
    width: 45,
    height: 45,
    borderRadius: 45,
    backgroundColor: colors.plusButton,
    alignItems: 'center',
    justifyContent: 'center',
  },

  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    backgroundColor: colors.linear1,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    height: '33%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalButton: {
    backgroundColor: colors.linear2,
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginVertical: 5,
  },
  modalButtonText: {
    color: colors.text,
    fontSize: 16,
  },

  modalCloseButton: {
    backgroundColor: colors.failure,
    padding: 10,
    borderRadius: 5,
    alignSelf: 'center',
    marginTop: 20,
  },
  modalCloseButtonText: {
    color: colors.background,
    fontWeight: 'bold',
    textAlign: 'center',
  }
  
});