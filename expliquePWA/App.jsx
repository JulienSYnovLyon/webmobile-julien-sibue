// Si on voulais se composant en react (ne contient pas la partie 2) : 

import React from "react";
import "./styles.css";

function App() {
  return (
    <div>
      <header>
        <h1>Installer notre PWA</h1>
      </header>
      <main>
        <section className="section">
          <h2>Pourquoi installer une PWA ?</h2>
          <p>Les PWA sont des applications web qui offrent une expérience utilisateur similaire à celle d'une application native. Elles sont conçues pour être rapides, réactives et accessibles sur n'importe quel appareil avec un navigateur web moderne. Voici quelques-uns des avantages d'utiliser une PWA :</p>
          <ul>
            <li>Elle ne nécessite pas de téléchargement depuis un app store, elle est donc plus légère et ne prend pas d'espace de stockage sur votre appareil.</li>
            <li>Elle peut être facilement mise à jour sans avoir à passer par l'app store.</li>
            <li>Elle est souvent plus rapide et plus réactive que les applications natives.</li>
            <li>Elle est accessible même sur des connexions réseau lentes.</li>
          </ul>
        </section>
        <section className="section">
          <h2>Comment installer notre PWA ?</h2>
          <p>Voici les étapes pour installer notre PWA :</p>
          <ol>
            <li>Ouvrez notre site dans un navigateur web compatible avec les PWA, tel que Google Chrome ou Microsoft Edge.</li>
            <li>Cliquez sur l'icône de menu (trois points verticaux) dans le coin supérieur droit du navigateur.</li>
            <li>Cliquez sur "Installer [nom de l'application]".</li>
            <li>Suivez les instructions pour installer la PWA.</li>
          </ol>
        </section>
        <section className="section">
          <h2>Navigateurs compatibles</h2>
          <p>Les PWA sont compatibles avec plusieurs navigateurs web modernes, notamment :</p>
          <ul>
            <li>Google Chrome pour ordinateurs et mobiles</li>
            <li>Microsoft Edge pour ordinateurs et mobiles</li>
            <li>Apple Safari pour mobiles (iOS 11.3 ou version ultérieure)</li>
            <li>Mozilla Firefox pour ordinateurs et mobiles</li>
          </ul>
        </section>
        <section className="section">
          <h2>Compatibilité des appareils</h2>
          <p>Les PWA sont compatibles avec la plupart des appareils modernes, tels que les ordinateurs de bureau, les ordinateurs portables, les tablettes et les smartphones. Cependant, certains appareils plus anciens ou moins puissants peuvent avoir des problèmes de performance avec les PWA.</p>
        </section>
        <section className="section">
          <h2>Capacités supplémentaires</h2>
          <p>Les PWA ont plusieurs capacités supplémentaires qui les distinguent des sites web traditionnels :</p>
          <ul>
            <li>Icône de l'application : Vous pouvez ajouter une icône de l'application à l'écran d'accueil de votre appareil, pour un accès facile à la PWA.</li>
<li>Notifications push : Les PWA peuvent envoyer des notifications push, même lorsque l'application n'est pas ouverte.</li>
<li>Fonctionnement hors ligne : Les PWA peuvent fonctionner hors ligne, ce qui signifie que vous pouvez continuer à utiliser l'application même si vous n'êtes pas connecté à Internet.</li>
<li>Accès à l'appareil : Les PWA peuvent accéder aux fonctionnalités de l'appareil, telles que l'appareil photo ou la géolocalisation, pour offrir des fonctionnalités plus avancées.</li>
</ul>
</section>
</main>
</div>
);
}

export default App;
