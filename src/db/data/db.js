import SQLite from 'react-native-sqlite-storage';

const db = SQLite.openDatabase(
    {
        name: 'database.db',
        location: 'default',
    },
    () => console.log('Database opened'),
    error => console.log('Error opening database: ', error)
);

db.executeSql(
    'CREATE TABLE IF NOT EXISTS reports (id INTEGER PRIMARY KEY AUTOINCREMENT, incomeReport BOOLEAN, vendorName TEXT, description TEXT, paid BOOLEAN, date TEXT, ordersReceived INTEGER, itemName TEXT, previousCustomer INTEGER, totalIncome INTEGER, costOfSale INTEGER)',
    [],
    () => console.log('Table created'),
    error => console.log('Error creating table: ', error)
  );

export default db;
