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

    existsEmail(email) {
        return new Promise((resolve, reject) => {
            this.connect().query('SELECT count(id) AS count FROM users WHERE ?', {email}, function (error, results, fields) {
                if (error) { reject(error.message);}
                // n'existe pas
                if(results[0].count == 0) resolve(false);
                // existe
                else resolve(true);
            });
        });
    }

   
    findByEmail(email) {
        return new Promise((resolve, reject) => {
            this.connect().query('SELECT * FROM users WHERE ?', {email}, function (error, results, fields) {
                if (error) { reject(error.message); }
                else resolve(results[0]);
            });
        });
    }

}