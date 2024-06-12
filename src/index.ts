abstract class FindMember{
    constructor(
        public nom: string, 
        private position: string, 
        readonly age: number
    ){}

    abstract afficherMemberEnCours(cours: string) :string;
}

class MemberAdmin extends FindMember{
    constructor(nom: string, position: string, age: number){
        super(nom, position, age)
    }
    afficherMemberEnCours(cours: string): string {
        return `${this.nom} suit le cours de ${cours}`
    };


    creerUnCours = (cours: string) => `Il (elle) bosse sur ${cours}`
}



const membre = new MemberAdmin('Murieil', 'Dev', 21)

console.log(membre.afficherMemberEnCours('Typescript'))
console.log(membre.creerUnCours('Typescript'))