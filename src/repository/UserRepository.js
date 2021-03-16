const AbstractRepository = require('./AbstractRepository.js');
 
module.exports = class UserRepository extends AbstractRepository {
    
    add(user, forceDisconnect = true) {
        return new Promise((resolve, reject) => {
            this.connect().query(
                'INSERT INTO users SET ?', this.insertEntity(user),
                function (error, results, fields) {
                    if (error) throw error;
                    resolve(results);
                }
            );
            // Déconnexion de MySql
            if(forceDisconnect) this.disconnect();
        });
    }

    process(request, response) {
        let user = new UserEntity();
        user.civility = request.body.civility; 
        user.lastname = request.body.lastname; 
        user.firstname = request.body.firstname; 
        user.phone = request.body.phone; 
        user.email = request.body.email; 
        user.password = request.body.password;
 
        (new UserRepository).add(user).then((result) => {
            // @todo redirection vers l'accueil avec flashbag
            response.render('templates/home.pug');
        }, (message) => {
            // @todo flashbag avec message d'erreur
            response.redirect('inscription');
        });   
    }

}