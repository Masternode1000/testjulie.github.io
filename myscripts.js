// navbar hamburger menu
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}


// navbar hamburger on other pages
function myFunction_2() {
  var x = document.getElementsByClassName("not-index-nav");
  for(var i = 0; i < x.length; i++) {
    if (x[i].className === "not-index-nav") {
      x[i].className += " responsive";
    } else {
      x[i].className = "not-index-nav";
    }
  }
}



// Translation

var translations = {
    'en': {
        "welcome": 'Welcome to the vineyards',
        "home": "Home",
        "gallery": "Photo Gallery",
        "price-list-nav":"Price List",
        "map":"Map",
        "contact":"Contact Us",
        "intro":"Welcome to our delightful studio nestled in the heart of Stadtbredimus, Luxembourg. Our cozy and inviting space offers a tranquil retreat surrounded by the natural beauty of the vineyards, while being conveniently located near the Mosel River. Experience the perfect blend of comfort and serenity as you immerse yourself in the charm of this idyllic setting.",
        "bed-linen":"Bed Linen",
        "heating":"Heating",
        "terrace":"Terrace",
        "parking":"Parking",
        "wifi":"Wifi",
        "tv":"Television",
        "washing-machine":"Washing Machine",
        "electricity":"Electricity Included",
        "phone":"Phone: +352 23 69 93 66",
        "phone-2":"",
        "cell-2":"",
        "cell":"Cell: +352 621 791 566",
        "rental":"Studio for 1 or 2 people in Stadtbredimus, Luxemburg.",
        "day":"Price per day",
        "60":"€60 (cleaning included).",
        "week":"Price per week",
        "300":"€300 + €50 cleaning fee.",
        "longer":"If rented for a longer period: cleaning every 2nd week and at the end of your stay.",
        "cash":"Rent to be paid cash upon arrival.",
        "wish":"We wish you an enjoyable stay.",
        "name":"Name:",
        "email":"Email:",
        "message":"Message:",
        "submit":"Submit",
    },
    'de': {
        "welcome": 'Willkommen in den Weinbergen',
        "home": "Startseite",
        "gallery": "Fotogalerie",
        "price-list-nav":"Preisliste",
        "map":"Karte",
        "contact":"Kontakt",
        "intro":"Herzlich willkommen in unserem bezaubernden Studio, das im Herzen von Stadtbredimus, Luxemburg, liegt. Unser gemütlicher und einladender Raum bietet einen ruhigen Rückzugsort umgeben von der natürlichen Schönheit der Weinberge und liegt dabei in günstiger Lage in der Nähe der Mosel. Erleben Sie die perfekte Mischung aus Komfort und Gelassenheit, während Sie sich in den Charme dieses idyllischen Ortes eintauchen.",
        "bed-linen":"Bettwäsche",
        "heating":"Heizung",
        "terrace":"Terrasse",
        "parking":"Parkplatz",
        "wifi":"Wifi",
        "tv":"Fernsehen",
        "washing-machine":"Waschmaschine",
        "electricity":"Strom inklusive",
        "phone":"Telefon: +352 23 69 93 66",
        "cell":"Handy: +352 621 791 566",
        "phone-2":"Telefon",
        "cell-2":"Handy",
        "rental":"Studio für 1 oder 2 Personen in Stadtbredimus, Luxemburg.",
        "day":"Preis pro Tag",
        "60":"60 € (Reinigung inklusive).",
        "week":"Preis pro Woche",
        "300":"300 € + 50 € Reinigungsgebühr.",
        "longer":"Bei längerer Mietdauer: Reinigung alle 2 Wochen und am Ende Ihres Aufenthalts.",
        "cash":"Der Mietpreis ist bar bei Anreise zu begleichen.",
        "wish":"Wir wünschen Ihnen einen schönen Aufenthalt.",
        "name":"Name:",
        "email":"Email:",
        "message":"Nachricht:",
        "submit":"Absenden",
    },
    'fr': {
        "welcome": 'Bienvenue dans les vignobles',
        "home": "Accueil",
        "gallery": "Galerie",
        "price-list-nav":"Liste Des Prix",
        "map":"Carte",
        "contact":"Contactez-Nous",
        "intro":"Bienvenue dans notre charmant studio niché au cœur de Stadtbredimus, au Luxembourg. Notre espace confortable et accueillant offre une retraite paisible entourée par la beauté naturelle des vignobles, tout en étant idéalement situé près de la Moselle. Vivez le mélange parfait de confort et de sérénité en vous immergeant dans le charme de ce cadre idyllique.",
        "bed-linen":"Linge De Lit",
        "heating":"Chauffage",
        "terrace":"Terrasse",
        "parking":"Stationement",
        "wifi":"Wifi",
        "tv":"Télévision",
        "washing-machine":"Machine à laver",
        "electricity":"Électricité Incluse",
        "phone":"Téléphone: +352 23 69 93 66",
        "cell":"Portable: +352 621 791 566",
        "phone-2":"Téléphone",
        "cell-2":"Portable",
        "rental":"Studio pour 1 ou 2 personnes à Stadtbredimus, Luxembourg.",
        "day":"Prix par jour",
        "60":"60 € (ménage inclus).",
        "week":"Prix par semaine",
        "300":"300 € + frais de ménage de 50 €.",
        "longer":"En cas de location pour une période plus longue : ménage toutes les 2 semaines et à la fin de votre séjour.",
        "cash":"La location se paye cash à l'arrivée.",
        "wish":"Nous vous souhaitons un bon séjour.",
        "name":"Nom:",
        "email":"Email:",
        "message":"Message:",
        "submit":"Soumettre",
    },
    'nl': {
        "welcome": 'Welkom in de wijngaarden',
        "home": "Startpagina",
        "gallery": "Fotogalerij",
        "price-list-nav":"Prijslijst",
        "map":"Kaart",
        "contact":"Contacteer Ons",
        "intro":"Welkom in onze heerlijke studio, verscholen in het hart van Stadtbredimus, Luxemburg. Onze gezellige en uitnodigende ruimte biedt een rustig toevluchtsoord, omgeven door de natuurlijke schoonheid van de wijngaarden, terwijl het zich op een gunstige locatie bevindt vlakbij de Moezel. Ervaar de perfecte combinatie van comfort en sereniteit terwijl u zich onderdompelt in de charme van deze idyllische omgeving.",
        "bed-linen":"Beddengoed",
        "heating":"Verwarming",
        "terrace":"Terras",
        "parking":"Parkeerplaats",
        "wifi":"Wifi",
        "tv":"Televisie",
        "washing-machine":"Wasmachine",
        "electricity":"Elektriciteit inbegrepen",
        "phone":"Telefoon: +352 23 69 93 66",
        "cell":"GSM: +352 621 791 566",
        "phone-2":"Telefoon",
        "cell-2":"GSM",
        "rental":"Studio voor 1 of 2 personen in Stadtbredimus, Luxemburg.",
        "day":"Prijs per dag",
        "60":"€60 (inclusief schoonmaak).",
        "week":"Prijs per week",
        "300":"€300 + €50 schoonmaakkosten.",
        "longer":"Indien gehuurd voor een langere periode: schoonmaak om de 2 weken en aan het einde van uw verblijf.",
        "cash":"De huur wordt contant betaald bij aankomst.",
        "wish":"Wij wensen u een aangenaam verblijf.",
        "name":"Naam:",
        "email":"Email:",
        "message":"Bericht:",
        "submit":"Verzenden",
    }
};

function changeLanguage(language) {
    var elements = document.getElementsByClassName('translate');
    for (var i = 0; i < elements.length; i++) {
      if (elements[i].tagName === 'INPUT') {
          elements[i].value = translations[language][elements[i].dataset.key];
      } else {
          elements[i].textContent = translations[language][elements[i].dataset.key];
      }
  }

    // Store the user's language preference in local storage.
    localStorage.setItem('language', language);
}

// Load the user's language preference when the page loads.
window.addEventListener('DOMContentLoaded', (event) => {
    var preferredLanguage = localStorage.getItem('language');
    if (preferredLanguage) {
        changeLanguage(preferredLanguage);
    }
});

/// Attach event listener to flag images
var flags = document.getElementsByClassName('flag');
for (var i = 0; i < flags.length; i++) {
    flags[i].addEventListener('click', function(event) {
        console.log('Flag clicked: ' + event.target.id);
        changeLanguage(event.target.id);
        window.scrollTo(0, 0); // This line makes the page jump back to the top.
    });
}
