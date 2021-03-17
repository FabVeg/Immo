const UserEntity = require('../entity/User');
const UserRepository = require('../repository/UserRepository');

module.exports = class User {
    
    print(request, response) {
        response.render('form.pug');
    }

    process(request, response) {
       
        let user = new UserEntity();
        let bcrypt = require('bcryptjs');
      
        user.civility = request.body.civility; 
        user.lastname = request.body.lastname; 
        user.firstname = request.body.firstname;
        user.adress = request.body.adress; 
        user.city = request.body.city; 
        user.zip = request.body.zip; 
        user.phone = request.body.phone; 
        user.email = request.body.email; 
        user.password = bcrypt.hashSync(
            request.body.password, 
            bcrypt.genSaltSync(10)
        );

        (new UserRepository).add(user).then((result) => {
            request.flash('notify', 'Votre compte a bien été créé.'); 
            response.render('form.pug');
        }, (message) => {
            request.flash('error', message); 
            response.redirect('home.pug');
        });   


        (new UserRepository).existsEmail(user).then((result) => {
            request.flash('notify', 'email déjà existant'); 
            response.render('form.pug');
        }, (message) => {
            request.flash('error', message); 
            response.redirect('home.pug');
        })   

        
    }

    

}
