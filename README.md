# TechBurger Ordering App

TechBurger Ordering App on moderni hampurilaisten tilaussovellus, joka on rakennettu Reactilla ja TypeScriptillä. Sovelluksen tarkoituksena on tarjota käyttäjälle selkeä ja helppokäyttöinen tapa selata tuotteita, tarkastella tuotteiden lisätietoja, lisätä tuotteita ostoskoriin ja siirtyä kohti tilausta.

Sovellus on toteutettu osana web-kehityksen opintoja. Projektissa harjoitellaan modernin frontend-sovelluksen rakentamista komponenttipohjaisesti sekä tiimityöskentelyä GitHubin avulla.

## Live-versio

Sovelluksen julkaistu versio löytyy täältä:

[TechBurger Live App](https://techburger-beige.vercel.app/)

## Käytetyt teknologiat

Projektissa on käytetty seuraavia teknologioita:

- React
- TypeScript
- Tailwind CSS
- Zustand
- React Router
- Vite

## Sovelluksen kuvaus

TechBurger on yksinkertainen mutta toimiva tilaussovellus, jossa käyttäjä voi selata hampurilaisia ja muita tuotteita. Tuotteet näytetään selkeinä kortteina, ja käyttäjä voi avata tuotteen tarkemmat tiedot modaalinäkymässä.

Käyttäjä voi lisätä tuotteita ostoskoriin. Ostoskorissa näkyvät lisätyt tuotteet, niiden hinnat sekä kokonaissumma. Käyttäjä voi myös poistaa tuotteita ostoskorista ja jatkaa ostoksia takaisin tuotelistaan. Sovelluksessa on lisäksi kassalle siirtymisen painike, joka toimii käyttöliittymän seuraavana toimintakehotuksena.

## Ominaisuudet

Sovelluksessa käyttäjä voi:

- selata tuotteita etusivulla
- avata tuotteen lisätiedot modaalissa
- lisätä tuotteen ostoskoriin
- tarkastella ostoskorin sisältöä
- poistaa tuotteita ostoskorista
- nähdä ostoskorin kokonaishinnan
- siirtyä kassalle -painikkeen avulla seuraavaan vaiheeseen
- liikkua eri näkymien välillä React Routerin avulla

## Projektin rakenne

Projektin lähdekoodi sijaitsee `src`-kansiossa.

src/
├── components/ # Uudelleenkäytettävät käyttöliittymäkomponentit
│ ├── Footer.tsx
│ ├── Header.tsx
│ ├── Modal.tsx
│ ├── ProductCard.tsx
│ └── ProductList.tsx
├── store/ # Zustand-tilanhallinta
│ └── useCartStore.ts
├── views/ # Sovelluksen päänäkymät
│ ├── CartView.tsx
│ └── HomeView.tsx
├── App.tsx # Sovelluksen reititys ja pääkomponentti
├── index.css # Tailwind CSS ja yleiset tyylit
├── main.tsx # Sovelluksen käynnistyspiste
└── types.ts # TypeScript-tyypit
