const { urlencoded } = require('body-parser');

module.exports = (app) => {
    app.get('/', (req, res) => {
        let Home = require('../src/controllers/Home.js');
        (new Home).print(req, res);
    });

    app.get('/form', (req, res) => {
        let Form = require('../src/controllers/Form.js');
        (new Form).print(req, res);
    });
    app.post('/form', (req, res) => {
        let User = require('../src/controllers/User.js');
        (new User).process(req, res);
    });

    app.get('/login', (req, res) => {
        let Form = require('../src/controllers/Login.js');
        (new Form).print(req, res);
    });

    app.post('/login', (req, res) => {
        let Form = require('../src/controllers/Login.js');
        (new Form).process(req, res);
    });

    app.get('/deconnexion', (req, res) => {
        let Authenticate = require('../src/controllers/Login.js');
        (new Authenticate).disconnect(req, res);
     });
     
    app.get('/homeback', (req, res) => {
        let HomeBack = require('../src/controllers/backoffice/HomeBack.js');
        (new HomeBack).print(req, res);
    });

    app.get('/formBack', (req, res) => {
        let FormBack = require('../src/controllers/backoffice/formBack.js');
        (new FormBack).print(req, res);
    });

    app.post('/formBack', (req, res) => {
        let FormBack = require('../src/controllers/backoffice/formBack.js');
        (new FormBack).process(req, res);
    });
};
