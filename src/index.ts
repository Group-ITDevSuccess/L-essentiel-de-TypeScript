interface Personne {
    nom: string;
    position: string;
    age?: number;

}

const personne: Personne = {
    nom: "Muriel",
    position: "Dev",
    age: 15,
  
}

console.log(personne)