# HorrorHouse

Responsiv hjemmeside til et fiktivt Halloween-event, udviklet som skoleprojekt på Multimediedesigneruddannelsen hos Zealand.

## Åbn projektet

Åbn `index.html` direkte i en moderne browser. Projektet bruger kun HTML5, CSS3 og vanilla JavaScript og kræver ingen installation eller build-proces.

## Sider

- `index.html` – forside
- `om-festen.html` – eventbeskrivelse, praktiske oplysninger og program
- `dresscode.html` – gothic dresscode og inspiration
- `tilmelding.html` – billetter og simuleret tilmelding
- `kontakt.html` – simuleret kontaktformular og FAQ

## Vigtigt

HorrorHouse, adressen og eventoplysningerne er fiktive. Formularerne sender ikke data, reserverer ikke billetter og gennemfører ikke betaling. JSON-LD ligger direkte i `<head>`: `Event` og `WebSite` på `index.html` og `FAQPage` på `kontakt.html` (FAQ-teksten skal holdes ens i HTML og JSON-LD). `docs/event-jsonld-example.json` er det oprindelige undervisningseksempel og indlæses ikke. `og:url` og `og:image` bruger pladsholderen `https://example.com/horrorhouse/` og skal erstattes, hvis siden får en rigtig URL.

## Manuel kvalitetssikring

Projektet bør efterfølgende kontrolleres med W3C HTML/CSS Validator, Lighthouse, VoiceOver, komplet tastaturnavigation, kontrastkontrol og protanopi-simulering.
