import { Sequelize } from "sequelize-typescript";

export default class DatabaseConnection {
    private db : Sequelize;

    constructor() {
        this.db = new Sequelize({
            url: process.env.DATABASE_URL,
            dialect: "postgres",
            dialectOptions : {
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