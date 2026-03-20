# Guide til Michael: Tilføj nyt til "Nyt i appen"

Hej Michael,

Denne guide viser dig, trin for trin, hvordan du selv tilføjer nye beskeder til sektionen "Nyt i appen" i TRE-MMN. Du behøver ingen teknisk viden -- det hele foregår direkte på GitHub.com i din browser.

---

## Hvad er notifications.json?

Filen `notifications.json` er den fil, der styrer, hvad brugerne ser under "Nyt i appen". Hver gang du tilføjer en ny besked til den fil, dukker den op i appen for alle brugere.

---

## Sådan redigerer du filen på GitHub

1. Gå til: **https://github.com/nklasfff/TRE-MMN**

2. Klik på filen **`notifications.json`** i listen over filer (den ligger øverst i mappen).

3. Klik på **blyantikonet** (det lille redigeringsikon) oppe til højre i filvisningen. Det er det ikon, der ligner en blyant.

4. Nu åbner en editor direkte i browseren, og du kan redigere filen.

5. Når du er færdig, scroll ned til bunden af siden og klik på den grønne knap **"Commit changes"**. Du kan bare lade felterne stå som de er -- klik blot på knappen.

6. Appen henter automatisk den opdaterede fil. Brugerne vil se din nye besked næste gang de åbner appen.

---

## Sådan ser en enkelt besked ud

Hver besked i filen har denne opbygning:

```json
{
  "id": "et-unikt-navn",
  "date": "2026-03-20",
  "da": {
    "title": "Overskrift på dansk",
    "text": "Brødtekst på dansk -- skriv hvad du vil her."
  },
  "en": {
    "title": "Heading in English",
    "text": "Body text in English."
  },
  "de": {
    "title": "Überschrift auf Deutsch",
    "text": "Fließtext auf Deutsch."
  }
}
```

### Forklaring af felterne

- **id** -- Et kort, unikt navn uden mellemrum. Brug bindestreger i stedet for mellemrum, f.eks. `ny-oevelse-april`. Det er bare et internt navn og vises ikke til brugerne.
- **date** -- Datoen for beskeden i formatet `ÅÅÅÅ-MM-DD`, f.eks. `2026-04-01`.
- **da / en / de** -- De tre sprogversioner: dansk, engelsk og tysk. Skriv den samme besked på alle tre sprog.
- **title** -- Overskriften på beskeden.
- **text** -- Selve teksten i beskeden.

---

## Konkret eksempel: Tilføj en ny øvelsesbesked

Forestil dig, at du vil fortælle brugerne om en ny øvelse der hedder "Skulderfrigørelse". Sådan tilføjer du den.

### Hvad filen ser ud som nu (forkortet):

```json
[
  {
    "id": "welcome-2026",
    "date": "2026-03-19",
    "da": {
      "title": "Velkommen til notifikationer",
      "text": "Du modtager nu besked, når der tilføjes nyt indhold til appen."
    },
    "en": {
      "title": "Welcome to notifications",
      "text": "You will now be notified when new content is added to the app."
    },
    "de": {
      "title": "Willkommen bei den Benachrichtigungen",
      "text": "Du wirst jetzt benachrichtigt, wenn neue Inhalte zur App hinzugefügt werden."
    }
  }
]
```

### Hvad du skriver for at tilføje den nye besked:

Placer et komma efter den afsluttende `}` fra den forrige besked, og skriv derefter den nye besked. Resultatet ser sådan ud:

```json
[
  {
    "id": "welcome-2026",
    "date": "2026-03-19",
    "da": {
      "title": "Velkommen til notifikationer",
      "text": "Du modtager nu besked, når der tilføjes nyt indhold til appen."
    },
    "en": {
      "title": "Welcome to notifications",
      "text": "You will now be notified when new content is added to the app."
    },
    "de": {
      "title": "Willkommen bei den Benachrichtigungen",
      "text": "Du wirst jetzt benachrichtigt, wenn neue Inhalte zur App hinzugefügt werden."
    }
  },
  {
    "id": "ny-oevelse-skulderfrigorelse",
    "date": "2026-04-01",
    "da": {
      "title": "Ny øvelse: Skulderfrigørelse",
      "text": "Vi har tilføjet en ny øvelse, der hjælper dig med at frigøre spændinger i skuldrene. Find den under øvelserne i appen."
    },
    "en": {
      "title": "New exercise: Shoulder Release",
      "text": "We have added a new exercise to help you release tension in the shoulders. Find it in the exercises section of the app."
    },
    "de": {
      "title": "Neue Übung: Schulterbefreiung",
      "text": "Wir haben eine neue Übung hinzugefügt, die hilft, Spannungen in den Schultern zu lösen. Du findest sie im Übungsbereich der App."
    }
  }
]
```

### Det vigtige at huske:

- Der skal altid stå et **komma** efter `}` for den foregående besked, inden du starter en ny.
- Den allersidste besked i listen må **ikke** have et komma efter sin afsluttende `}`.
- Hele listen starter med `[` og slutter med `]` -- dem rør du ikke.
- Brug altid `"` (gåseøjne) og ikke `'` (apostrof) rundt om tekst.

---

## Hvis noget ser forkert ud

Hvis appen viser fejl, eller den nye besked ikke dukker op, er der sandsynligvis en lille skrivefejl i formateringen. Den hyppigste fejl er et manglende eller for meget komma. Du er altid velkommen til at række ud, så kigger vi på det sammen.

---

God fornøjelse, Michael!
