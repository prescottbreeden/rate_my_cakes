var controller = require('./controllers')

module.exports = function(app) {

    app.get('/', function(req, res) {
        controller.root(req, res);
    })

}