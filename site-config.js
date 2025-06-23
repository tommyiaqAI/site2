export default {
  siteId: "site2",
  storeName: "Terre Rosa - Azienda Agricola Biologica",
  aboutText: "Terre Rosa è un'azienda agricola che si dedica alla produzione di prodotti freschi e genuini, coltivati con passione e rispetto per la natura. Offriamo un olio extravergine d'oliva di alta qualità e in diversi formati.",
  aboutImage: "img/about.png", // Immagine di copertina per la sezione Chi siamo
  aboutQuote: "La qualità nasce dal rispetto per la terra.", // Frase evidenziata
  aboutCEO: "Tommaso Rosa - Titolare", // Nome del CEO/titolare (opzionale)
  socials: [
    // { icon: "facebook", url: "https://facebook.com/lasalinella" },
    // { icon: "instagram", url: "https://instagram.com/lasalinella" },
    { icon: "whatsapp", url: "https://wa.me/393289253527" }
  ],
  features: [
    { icon: 'shield-flash', title: 'Marchi di qualità', text: 'Solo i migliori brand selezionati.' },
    { icon: 'earth', title: 'Spedizione in tutta Italia', text: 'Consegna rapida e sicura.' },
    { icon: 'open-arm', title: 'Clienti soddisfatti', text: 'Assistenza e supporto dedicati.' }
  ],
  contact: {
    email: "tommasorosa2009@gmail.com",
    phone: "+39 3289253527",
    address: "Azienda Agricola Terre Rosa - Via Papa Pio XII, 88835 Roccabernarda (KR), Italia",
    mapPlaceId: "ChIJWfpL3dxrQBMRGpYTKJwhv88", // Esempio Place ID Google Maps
    iban: "IT36S0760104400001069474987",
  },
  firebaseConfig: {
    apiKey: "AIzaSyAdFeVtKdb5oczNANmYPOeTkf2WbP_ruqg",
    authDomain: "store-products-ed162.firebaseapp.com",
    projectId: "store-products-ed162",
    storageBucket: "store-products-ed162.firebasestorage.app",
    messagingSenderId: "844599226880",
    appId: "1:844599226880:web:241eeb3accf826a7005ee5"
  }
};
