"use strict";
class FindMember {
    constructor(nom, position, age) {
        this.nom = nom;
        this.position = position;
        this.age = age;
    }
}
class MemberAdmin extends FindMember {
    constructor(nom, position, age) {
        super(nom, position, age);
        this.creerUnCours = (cours) => `Il (elle) bosse sur ${cours}`;
    }
    afficherMemberEnCours(cours) {
        return `${this.nom} suit le cours de ${cours}`;
    }
    ;
}
const membre = new MemberAdmin('Murieil', 'Dev', 21);
console.log(membre.afficherMemberEnCours('Typescript'));
console.log(membre.creerUnCours('Typescript'));
