class FindMember{
    constructor(
        public nom: string, 
        private position: string, 
        readonly age: number
    ){}

    afficherMemberEnCours = (cours: string) => `${this.nom} ${this.position} suit le cours de ${cours}`;
}

class MemberAdmin extends FindMember{
    constructor(nom: string, position: string, age: number){
        super(nom, position, age)
    }

    creerUnCours = (cours: string) => `Il (elle) bosse sur ${cours}`
}


const membre = new MemberAdmin('Murieil', 'Dev', 21)

console.log(membre.afficherMemberEnCours('Typescript'))
console.log(membre.creerUnCours('Typescript'))