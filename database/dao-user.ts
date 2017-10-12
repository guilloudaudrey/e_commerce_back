import {createConnection} from "typeorm";
import {User} from "../entity/user"

createConnection().then(connection => {

    let user = new User();
    user.nom = "Guilloud";
    user.prenom = "Audrey";
    user.email = "audreyguilloud@yahoo.fr";
    user.mdp = "simplon";
    user.dateinscription = new Date();

    return connection.manager
            .save(user)
            .then(user => {
                console.log("user has been saved. user id is", user.id);
            });

}).catch(error => console.log(error));