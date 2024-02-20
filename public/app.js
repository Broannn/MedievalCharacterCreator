document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('generate').addEventListener('click', () => {
    fetch('/generate-character')
      .then(response => response.json())
      .then(character => {
        document.getElementById('name').value = character.prenom;
        document.getElementById('familyName').value = character.nom;
        document.getElementById('race').value = character.race;
        document.getElementById('job').value = character.metier;

        // Parse les compétences si elles sont dans une chaîne de caractères formatée comme "Force: 5, Agilité: 4, ..."
        if (character.competences) {
          const stats = character.competences.split(', ').map(stat => stat.split(': ')[1]);
          document.getElementById('strength').value = stats[0];
          document.getElementById('agility').value = stats[1];
          document.getElementById('constitution').value = stats[2];
          document.getElementById('intelligence').value = stats[3];
        }
      })
      .catch(error => console.error('Erreur lors de la génération du personnage:', error));
  });
});
