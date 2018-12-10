const CharController = require('../Controller/CharController.js');
const TechController = require('../Controller/CharController.js');
const HomeController = require('../Controller/HomeController.js');

module.exports = class Router {
    constructor() {

    }
    init(app) {
        const home = new HomeController();
        const char = new CharController();
        const tech = new TechController();

        app.get('/home', function(req, res) {
            res.json(home.get());
        });

        
        app.get('/tech', function(req, res) {
            res.json(tech.getAll());
        });

        app.get('/tech/{id}', function(req, res) {
            const techData = tech.get(req.params.id);
            if (!techData) {
                res.json({
                    error: "no data"
                });
            }
            res.json(techData);
        });

        
        app.get('/chars', function(req, res) {
            res.json(char.getAll());
        });


        console.log("Initializing routes!");
    }
}
