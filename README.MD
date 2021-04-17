# Welcome to Drone Automation

## Notes

Quand l'user mets fonction dans console
ça l'ajoute dans l'objet "window"

Donc au lancement du programme il suffit d'écouter window
et de mettre les function ajoutés dans localStorage

Ensuite tu fais `eval(localStorage.<nom fonction>)()` pour lancer
la fonction. Ou plutot, utiliser eval pour réaffecter a la window
les fonctions utilisateurs.
Qu'il puisse les utiliser a nouveau.

## Canvas

Canvas :

- Terrain (ground, water)
- Resources (Mineral, trees)
- Moving entities (Drone)
- UI
