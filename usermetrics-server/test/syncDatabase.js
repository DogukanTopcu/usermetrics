import sequelize from "../configs/sequelize.js";

const syncDatabase = async () => {
    await sequelize.sync();
};

export default syncDatabase;