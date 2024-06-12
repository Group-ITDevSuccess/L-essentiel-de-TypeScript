"use strict";
class FindMember {
    constructor(nom, position, age) {
        this.nom = nom;
        this.position = position;
        this.age = age;
        this.afficherMemberEnCours = (cours) => `${this.nom} ${this.position} suit le cours de ${cours}`;
    }
}
class MemberAdmin extends FindMember {
    constructor(nom, position, age) {
        super(nom, position, age);
        this.creerUnCours = (cours) => `Il (elle) bosse sur ${cours}`;
    }
}
const membre = new MemberAdmin('Murieil', 'Dev', 21);
console.log(membre.afficherMemberEnCours('Typescript'));
console.log(membre.creerUnCours('Typescript'));
