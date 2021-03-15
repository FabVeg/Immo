module.exports = (app) => {
    app.get('/', (req, res) => {
        let Home = require('../src/controllers/Home.js');
        (new Home).print(req, res);
    });
    app.get('/form', (req, res) => {
        let Form = require('../src/controllers/Form.js');
        (new Form).print(req, res);
    });
};
