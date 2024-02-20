const express = require('express');
const fs = require('fs');
const app = express();
const PORT = 3000;

// Middleware pour servir des fichiers statiques (comme votre fichier HTML et CSS)
app.use(express.static('public'));

// Route pour générer un personnage
app.get('/generate-character', (req, res) => {
    const prenoms = fs.readFileSync('data/prenoms.txt', 'utf-8').split('\n');
    const noms = fs.readFileSync('data/noms.txt', 'utf-8').split('\n');
    const races = fs.readFileSync('data/races.txt', 'utf-8').split('\n');
    const metiers = fs.readFileSync('data/metier.txt', 'utf-8').split('\n');
    const competences = fs.readFileSync('data/combinaisons_stats.txt', 'utf-8').split('\n');

    // Fonction pour obtenir un élément aléatoire d'un tableau
    function getRandomElement(array) {
      const randomIndex = Math.floor(Math.random() * array.length);
      return array[randomIndex];
    }

    const character = {
      prenom: getRandomElement(prenoms),
      nom: getRandomElement(noms),
      race: getRandomElement(races),
      metier: getRandomElement(metiers),
      competences: getRandomElement(competences)
    };

    res.json(character);
});

app.listen(PORT, () => {
    console.log(`Serveur en écoute sur http://localhost:${PORT}`);
});
