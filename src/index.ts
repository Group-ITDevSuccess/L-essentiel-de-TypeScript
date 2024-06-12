type Chaine = string;
type Position = "dev" | "admin" | "users"


type Personne  = {
    nom: Chaine;
    position: Position;
    age?: number;

}


const personne: Personne = {
    nom: "Muriel",
    position: "dev",
    age: 15,
  
}

console.log(personne)