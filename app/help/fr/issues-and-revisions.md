---
title: Émissions, révisions et journal des modifications du dessin
summary: Gardez un seul historique des émissions avec la maquette de l'architecte : lisez les émissions, enregistrez les instructions de chantier, les plans d'atelier et les maquettes liées par rapport à une émission, et consultez le journal des modifications du dessin.
keywords: émission, révision, révisions, journal des modifications, journal du dessin, registre des plans, instruction de chantier, plan d'atelier, maquette liée, appel d'offres, construction, historique des émissions, bordereau des quantités, métré
from: 8d8f6e68
---

## Ce que vous allez faire

Travaillez à partir du même historique des émissions que le reste de l'équipe. Voyez quelles feuilles sont parties à quelle révision, et rattachez ce qui se passe sur le chantier à l'émission correspondante.

## Étapes

1. Ouvrez **Émissions et révisions**.
2. Choisissez **Lire un historique des émissions**, puis sélectionnez le fichier `.issues.json` enregistré depuis BimCraft ou une autre application. Ses émissions et ses enregistrements sont ajoutés aux vôtres. Rien n'est remplacé.
3. Choisissez **Ajouter un enregistrement** pour une instruction de chantier, un plan d'atelier, un jeu d'annotations, une maquette liée ou une note. Sélectionnez l'émission concernée et son statut. Un fichier que vous choisissez est enregistré par son nom, sa taille et son SHA-256 ; le fichier reste à son emplacement.
4. **Journal des modifications du dessin** affiche une ligne par feuille et une colonne par émission. Une révision entre crochets a été émise de nouveau sans modification.
5. **Télécharger le journal des modifications (CSV)** enregistre les émissions, le tableau des feuilles et les enregistrements. **Enregistrer l'historique des émissions** écrit un fichier que les autres applications peuvent lire.

## Bon à savoir

- **Enregistrer une émission** émet vos feuilles métrées, par exemple avec un bordereau des quantités. **Modifications depuis** indique ensuite quelles feuilles ont été métrées de nouveau après cette émission.
- L'historique est enregistré dans le fichier de métré. Chaque modification correspond à une seule annulation.
- Lire deux fois le même fichier n'ajoute rien en double. Lorsque deux copies contiennent le même enregistrement, la plus récente est conservée.
