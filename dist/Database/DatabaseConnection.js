"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_typescript_1 = require("sequelize-typescript");
class DatabaseConnection {
    constructor() {
        this.db = new sequelize_typescript_1.Sequelize({
            url: process.env.DATABASE_URL,
            dialect: "postgres",
            dialectOptions: {
                ssl: true
            },
            pool: {
                max: 20,
                min: 1,
                acquire: 30000,
                idle: 10000
            },
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
exports.default = DatabaseConnection;
//# sourceMappingURL=DatabaseConnection.js.map