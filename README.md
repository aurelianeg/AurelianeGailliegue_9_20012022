# Site web "Billed"

***
## Mission

### Fonctionnalité “note de frais”

La fonctionnalité "note de frais" est très attendue sur le marché et le top management a mis la priorité dessus. L’objectif est de la lancer officiellement auprès des clients d’ici 2 semaines.
Sa description est disponible ici : https://s3.eu-west-1.amazonaws.com/course.oc-static.com/projects/DA+JSR_P9/Billed+-+Description+des+fonctionnalite%CC%81s.pdf

Pour fiabiliser et améliorer le parcours employé, la description pratique des besoins pour la mise en place de la fonctionnalité est disponible sur ce document : https://course.oc-static.com/projects/DA+JSR_P9/Billed+-+Description+pratique+des+besoins.pdf
Le rapport avec les bugs identifiés (Kanban Notion) ainsi qu’un exemple de plan de tests End-to-End y sont disponibles.

Il y a deux parcours utilisateurs : un administrateur RH et un employé.

- Le back-end des deux parcours est prêt en version alpha. 
- Côté front-end :
↳ Parcours administrateur : il a été testé, il faut désormais le débugger.
↳ Parcours employé : il faut entièrement le tester et le débugger.

Le debugging devra se faire avec Chrome Debugger.

### 1. Installation du back-end

Le back-end est disponible sur ce repo : https://github.com/OpenClassrooms-Student-Center/Billed-app-FR-back
Le service API back-end doit être lancé en local (voir README sur le repo).

### 2. Lancement du front-end

Cloner le repo :
```
$ git clone https://github.com/aurelianeg/AurelianeGailliegue_9_20012022.git
```

Installer les packages npm (décrits dans `package.json`) :
```
$ npm install
```

Installer live-server pour lancer un serveur local :
```
$ npm install -g live-server
```

Lancer l'application :
```
$ live-server
```

Puis aller à l'adresse : `http://127.0.0.1:8080/`

***
## Tests

### Lancement des tests en local avec Jest

```
$ npm run test
```

### Lancer un seul test

Installer jest-cli :
```
$ npm i -g jest-cli
$ jest src/__tests__/your_test_file.js
```

### Voir la couverture de test

`http://127.0.0.1:8080/coverage/lcov-report/`

***
## Comptes et utilisateurs

La connexin peut être faite en utilisant les comptes:

### Administrateur

```
Utilisateur : admin@test.tld 
Mot de passe : admin
```

### Employé

```
Utilisateur : employee@test.tld
Mot de passe : employee
```

***
## Livrables

Pour ce projet, les livrables à fournir sont :
- Un lien vers la codebase à jour sur un repo GitHub public
- Un screenshot avec le rapport de tests Jest sur l’ensemble des fichiers d’UI (src/views) et des fichiers d’UX (src/containers).
- Un screenshot du rapport de couverture Jest.
- Un document au format PDF du plan End-To-End pour le parcours employé.

***
## Compétences évaluées

- Ecrire des tests unitaires avec JavaScript
- Débugger une application web avec le Chrome Debugger
- Rédiger un plan de test end-to-end manuel
- Ecrire des tests d'intégration avec JavaScript
