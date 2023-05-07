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
    'CREATE TABLE IF NOT EXISTS reports (id INTEGER PRIMARY KEY AUTOINCREMENT,incomeReport BOOLEAN, vendorName TEXT,  description TEXT, paid BOOLEAN, date TEXT, ordersReceived TEXT, itemName TEXT, previousCustomer TEXT, totalIncome TEXT, costOfSale TEXT)',
    [],
    () => console.log('Table created'),
    error => console.log('Error creating table: ', error)
);

export default db;
