interface Utilisateur<T> {
    nom: string;
    age?: number;
    competences: T
}

const utilisateur1: Utilisateur<object> = {
    nom: 'Muriel',
    age: 23,
    competences: {
        experience: "1 ans",
        domaine: "Python"
    }
}

const utilisateur2: Utilisateur<string> = {
    nom: 'Muriel',
    age: 23,
    competences: "Typescript"
}

const utilisateur3: Utilisateur<string[]> = {
    nom: 'Muriel',
    age: 23,
    competences: ["Typescript", "Python"]
}


const utilisateur4: Utilisateur<Array<number>> = {
    nom: 'Muriel',
    age: 23,
    competences: [2]
}