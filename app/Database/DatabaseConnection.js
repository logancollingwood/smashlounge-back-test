const Sequelize = require('sequelize');


module.exports = class DatabaseConnection {
    constructor() {
        if (!process.env.database_username || !process.env.database_password) {
            throw new Error("database_username and database_password must be set in a .env file");
        }
        this.db = new Sequelize('smashlounge', process.env.database_username, process.env.database_password, {
            host: 'localhost:3306',
            dialect: 'mysql',
          
            pool: {
              max: 5,
              min: 0,
              acquire: 30000,
              idle: 10000
            },
          
            // http://docs.sequelizejs.com/manual/tutorial/querying.html#operators
            operatorsAliases: false
        });
        this.testConnection();
    }

    testConnection() {
        this.db
        .authenticate()
        .then(() => {
            console.log('Connection has been established successfully.');
        })
        .catch(err => {
            console.error('Unable to connect to the database:', err);
        });
    }
}