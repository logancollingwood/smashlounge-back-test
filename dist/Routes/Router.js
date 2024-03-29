"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CharController = require('../Controller/CharController.js');
const TechController = require('../Controller/CharController.js');
const HomeController = require('../Controller/HomeController.js');
const DatabaseConnection_1 = require("../Database/DatabaseConnection");
module.exports = class Router {
    constructor() {
        this.db = new DatabaseConnection_1.default();
    }
    init(app) {
        const home = new HomeController(this.db);
        const char = new CharController(this.db);
        const tech = new TechController(this.db);
        app.get('/home', function (req, res) {
            res.json(home.get());
        });
        app.get('/tech', function (req, res) {
            res.json(tech.getAll());
        });
        app.get('/tech/{id}', function (req, res) {
            const techData = tech.get(req.params.id);
            if (!techData) {
                res.json({
                    error: "no data"
                });
            }
            res.json(techData);
        });
        app.get('/chars', function (req, res) {
            res.json(char.getAll());
        });
        console.log("Initializing routes!");
    }
};
//# sourceMappingURL=Router.js.map