# Portfolio — Amos Clegbaza

Site personnel statique. **HTML / CSS / JS purs, aucun framework, aucun build.**

```
portfolio/
  index.html        Page unique (Hero, Trajectoire, Compétences, Projets, Certifs, Contact)
  css/style.css     Thème sombre, dégradés bleu → violet subtils
  js/main.js        Menu mobile, onglets compétences, filtre projets (vanilla)
  netlify.toml      Config de déploiement Netlify
```

## Déploiement Netlify

- **Glisser-déposer** : déposer le dossier `portfolio/` sur app.netlify.com/drop.
- **Depuis Git** : connecter le repo, régler *Base directory* = `portfolio`,
  *Build command* = (vide), *Publish directory* = `portfolio` (ou `.` si base directory est déjà `portfolio`).

### `_redirects` ?

**Non nécessaire.** Le site est une page unique ; la navigation se fait par ancres
(`#projets`, `#contact`…), il n'y a pas de sous-pages ni de routage client.
Un fichier `_redirects` (règle SPA `/*  /index.html  200`) ne servirait qu'avec
un routeur JS et plusieurs URL — ce n'est pas le cas ici.

## À compléter / vérifier

Renseigné avec des valeurs par défaut à confirmer :

| Élément | Valeur actuelle | Action |
|---|---|---|
| Liens démo | aucun | Ajouter si des instances sont en ligne |

Projets affichés : **GameQuest**, **DevOps Lab**, **NEOMART**.
GameQuest et NEOMART pointent vers les sous-dossiers du monorepo
`Python-Django-CLEGBAZA-Amos`, DevOps Lab vers `github.com/Emperor-Lobo/devops-lab`.
Toutes les descriptions viennent des contenus réels fournis.
ImmoScope a été retiré (non inclus pour l'instant).
