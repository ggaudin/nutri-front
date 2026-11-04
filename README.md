# Nutri Front

Interface web React de **Nutri**, une application qui permet à des diététiciens de créer et gérer des plans alimentaires pour leurs patients.

Ce frontend consomme l'API REST [nutri-api](<https://github.com/ggaudin/nutri-api>).

## Fonctionnalités

- Inscription avec des champs propres à chaque profil :
  - patient : date de naissance, genre ;
  - diététicien : numéro RPPS.
- Connexion par JWT et redirection vers l'espace correspondant au rôle
- Routes protégées selon le rôle (`PATIENT`, `DIETETICIEN`)
- Espace diététicien :
  - liste des patients qui lui sont rattachés ;
  - fiche détaillée d'un patient (informations personnelles, âge, mensurations, NAP, plans alimentaires) ;
  - consultation d'un plan alimentaire : repas, composants et apports nutritionnels totaux.

## Technologies

- React 19
- Vite
- React Router 7
- Axios

## Architecture

```
src/
├── api/         # instance axios et appels à l'API, regroupés par domaine
├── context/     # AuthContext : utilisateur connecté, connexion / déconnexion
├── routes/      # AppRouter et ProtectedRoute (contrôle du rôle)
├── layouts/     # mise en page de l'espace diététicien
├── components/  # composants partagés (navigation)
├── pages/       # pages par espace : auth, dieteticien, patient, plansalimentaires
└── utils/       # fonctions utilitaires (dates, calcul de l'âge)
```

### Authentification

- Le token JWT renvoyé à la connexion est stocké dans le `localStorage`.
- Un intercepteur axios l'ajoute à chaque requête (`Authorization: Bearer <token>`).
- Si l'API répond `401` (token invalide ou expiré), le token est supprimé et l'utilisateur est redirigé vers la page de connexion.
- Au chargement de l'application, `AuthContext` récupère l'utilisateur connecté via `/auth/me`.
- `ProtectedRoute` redirige vers `/connexion` si l'utilisateur n'est pas connecté, et vers `/acces-interdit` si son rôle ne correspond pas à la page demandée.

## Exécution en local

L'API [nutri-api](<https://github.com/ggaudin/nutri-api>) doit être lancée sur `http://localhost:8080`.

```bash
npm install
npm run dev      # http://localhost:5173
```

## Statut et évolutions prévues

Projet personnel en cours de développement. Évolutions prévues :

- création et modification de plans alimentaires, avec recherche d'aliments
- gestion des modèles de plans
- affichage des besoins nutritionnels du patient
- page de profil du diététicien
- espace patient : consultation de ses plans alimentaires
- mise en forme de l'interface
