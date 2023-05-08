import db from './db';

// Retrieve data from reports table
const getReports = () => {
  return new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        'SELECT * FROM reports',
        [],
        (tx, results) => {
          const len = results.rows.length;
          let reports = [];
          for (let i = 0; i < len; i++) {
            let row = results.rows.item(i);
            reports.push(row);
          }
          resolve(reports);
        },
        (error) => {
          console.log(error);
          reject(error);
        },
      );
    });
  });
};

export default getReports;