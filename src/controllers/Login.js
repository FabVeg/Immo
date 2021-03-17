const UserEntity = require('../entity/User');
const UserRepository = require('../repository/UserRepository');


module.exports = class Login {
    print(request, response) {
        response.render('login');  
        
    }

    process(request, response) {
        // on doit recevoir les champs email et password
        if(request.body.email != undefined && request.body.password != undefined) {
            (new UserRepository).findByEmail(request.body.email).then((result) => {
                if( typeof result.password != 'undefined'){
                    let bcrypt = require('bcryptjs');
                    if(bcrypt.compareSync(request.body.password, result.password)) {
                        request.session.user = result;
                        request.flash('notify', 'Vous êtes maintenant connecté.');
                        response.redirect('/');
                    } 
                }
                    request.flash('error', `Erreur d'identification`);
                    response.redirect('/login');
                
            }, (message) => {
                request.flash('error', `Erreur d'identification`);
                response.redirect('/login');
            });
        } else {
            request.flash('error', `Petit malin ^^`);
            response.redirect('/login');
        }
    }

    disconnect(request, response) {
        if(typeof request.session.user !== 'undefined') {
            delete request.session.user;
        }
        response.redirect('/');
    }

};
