import { Sequelize } from "sequelize";
import * as fs from 'fs';
import path from "path";


let sequelize;
if (process.env.NODE_ENV == "development") {
  sequelize = new Sequelize(
      "usermetrics",
      "root",
      "",
      {
        host: 'localhost',
        dialect: 'mysql',
        operatorsAliases: false,
  
        pool: {
          max: 5,
          min: 0,
          acquire: 30000,
          idle: 10000,
        }
      }
  );
  
}
else {
  sequelize = new Sequelize(
    "usermetrics_test",
    "usermetrics_test_database",
    "9Na40I+jL,",
    {
      host: 'usermetrics-test.mysql.database.azure.com',
      dialect: 'mysql',
      dialectOptions: {
        ssl: {
          ca: fs.readFileSync(path.resolve('./ssl/usermetrics_test.crt.pem'))
        }
      },
      operatorsAliases: false,
      ssl: true,
  
      pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000,
      }
    }
  );
}


sequelize.authenticate().then(() => {
   console.log('Connection has been established successfully.');
}).catch((error) => {
   console.error('Unable to connect to the database: ', error);
});

(async () => {
    await sequelize.sync();
})();

export default sequelize;