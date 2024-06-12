type Chaine = string;
type Position = "Developpeur" | "IT Support" | "Utilisateur"

enum RoleUtilisateur {
    ADMIN,
    EDITOR,
    USER,
    VIEWER
}

type Personne  = {
    nom: Chaine;
    position: Position;
    age?: number;
    role: RoleUtilisateur
}

const personne: Personne = {
    nom: "Muriel",
    position: "Developpeur",
    age: 15,
    role: RoleUtilisateur.ADMIN
}

console.log(personne)