import mongoose from "mongoose";
// import mysql from "mysql";
import dotenv from "dotenv";
dotenv.config();

const ConnectMongo = async () => {
    try {
        const connection = await mongoose.connect("mongodb+srv://dogukantopcu35:Hu76vo16d1pGTu9F@usermetricsv1.ka9zrip.mongodb.net/Emails?retryWrites=true&w=majority", {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        mongoose.set('strictQuery', true);
        console.log(`MongoDB Connected: ${connection.connection.host}`)
    } catch (error) {
        console.log(`Error: ${error.message}`);
        process.exit();
    }
}

// const ConnectMysql = async () => {
//     let db;
//     if (process.env.NODE_ENV === "development") {
//         db = mysql.createConnection({
//             host: 'localhost',
//             user: 'root',
//             password: '',
//             database: 'usermetrics',
//             // port: 3306,
//             // ssl: true
//         });
//     }
//     else {
//         db = mysql.createConnection({
//             host: process.env.DATABASE_HOSTNAME,
//             user: process.env.DATABASE_USERNAME,
//             password: process.env.DATABASE_PASSWORD,
//             database: process.env.DATABASE_NAME,
//             port: process.env.DATABASE_PORT,
//             ssl: true
//         });
//     }

//     db.connect((err) => {
//       if (err) {
//           throw err;
//       }
//       console.log('Connected to database');
//     });
// }

export {ConnectMongo 
    // ConnectMysql
};