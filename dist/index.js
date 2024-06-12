"use strict";
var RoleUtilisateur;
(function (RoleUtilisateur) {
    RoleUtilisateur[RoleUtilisateur["ADMIN"] = 0] = "ADMIN";
    RoleUtilisateur[RoleUtilisateur["EDITOR"] = 1] = "EDITOR";
    RoleUtilisateur[RoleUtilisateur["USER"] = 2] = "USER";
    RoleUtilisateur[RoleUtilisateur["VIEWER"] = 3] = "VIEWER";
})(RoleUtilisateur || (RoleUtilisateur = {}));
const personne = {
    nom: "Muriel",
    position: "Developpeur",
    age: 15,
    role: RoleUtilisateur.ADMIN
};
console.log(personne);
