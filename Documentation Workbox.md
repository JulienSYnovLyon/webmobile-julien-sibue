# Liste des fonctionnalitées disponible :

- Stratégies de mise en cache prédéfinies
- Système de routage des requêtes
- API conviviale pour manipuler les caches
- Préchargement des ressources et gestion des mises à jour
- Intégration avec les frameworks et les outils de build
- Fonctionnalités de débogage et journalisation

# Méthodes de cache et utilisations possibles

- Cache First
- Network First
- Stale While Revalidate
- Network Only
- Cache Only

#### Cache First

Cache First va vérifier dans un premier temps si une réponse est disponible dans le cache. Si il trouve une réponse alors il la revnvoie sinon il essaye de la truver via le réseau. Dès qu'il obtiens une nouvelle réponse il va la remettre automatiquement en cache. Par défaut ca le fait uniquement pour tout ce qui est JS CSS Images en gros les fichier qui ne changent pas trop souvent.

#### Network First

Network First va faire l'inverse de cache first car lui va d'abord chercher une réponse en faisant directement une requête réseau. Dès qu'il a sa réponse il va la mettre en cache cependant si il n'a pas de réponse il ca vérifier si il y'a une réponse dans le cache et la renvoyer si présente. Cette stratégie est très utile pour tout ce qui est flux d'actualités tableau dynamique etc en gros toutes les ressources qui ont tendance a être mis à jour souvent

#### Stale While Revalidate

Cette stratégie est un peu une sorte de mix des 2 autres d'abord on recherche une réponse dans le cache et en même temps on fait la même recherche sur le résau pour mettre à jour le cache. Cela permet un confort côté expérience utilisateur car ca garanti vitesse et fiabilité des ressources

#### Network Only

Avec cette stratégie on ignore totalement le cache on se base uniquement sur les requêtes réseau. On l'utilise pour ce qui ne peut pas être mis en cache comme par exemple l'authentification ou transaction sensible

#### Cache Only

Et enfin cache only est l'inverse de network only on va se baser uniquement sur ce qui est dispo en cache et ignorer le réseau. On l'utilise surtout pour le mode hors ligne

# Use Case Projet doctoliberal

Pour notre projet cela pouvais nous pour permettre de gagner du temps sur les services workers mais aussi d'intégrer plus facilement les frameworks et outils de build . On pouvais aussi l'utiliser pour le routage des requetes ou encore pour le préchargement des ressources.
Ca permettait aussi d'avoir un projet plus robuste

Et niveau utilisateur on pouvais aussi permettre à l'utilisateur de voir ses RDV hors connexion même chose pour les docteurs.