import db from './db';

const getReportById = (id) => {
    return new Promise((resolve, reject) => {
        db.transaction((tx) => {
            tx.executeSql(
                'SELECT * FROM reports WHERE id = ?',
                [id],
                (tx, results) => {
                    const len = results.rows.length;
                    if (len === 1) {
                        const report = results.rows.item(0);
                        resolve(report);
                    } else {
                        reject(new Error("Report with ID ${ id } not found"));
                    }
                },
                (error) => {
                    console.log(error);
                    reject(error);
                },
            );
        });
    });
};

export default getReportById;