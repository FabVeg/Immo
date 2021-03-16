const UserEntity = require('../entity/User');
const UserRepository = require('../repository/UserRepository');
module.exports = class User {
    
    print(request, response) {
        response.render('user/form.pug');
    }

    process(request, response) {
       
        let user = new UserEntity();
        user.civility = request.body.civility; 
        user.lastname = request.body.lastname; 
        user.firstname = request.body.firstname;
        user.adress = request.body.adress; 
        user.city = request.body.city; 
        user.zip = request.body.zip; 
        user.phone = request.body.phone; 
        user.email = request.body.email; 
        user.password = request.body.password;
 
        (new UserRepository).add(user).then((result) => {
            // @todo redirection vers l'accueil avec flashbag
            response.render('user/form.pug');
        }, (message) => {
            // @todo flashbag avec message d'erreur
            response.redirect('inscription');
        });   
    }

}
