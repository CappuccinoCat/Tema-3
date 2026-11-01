# AGENTS.md — HorrorHouse

## 1. Projektbeskrivelse

HorrorHouse er et skoleprojekt på Multimediedesigneruddannelsen hos Zealand.

Projektet omfatter udvikling af en responsiv hjemmeside til et fiktivt Halloween-event i København.

Hjemmesiden skal informere om eventet, præsentere dresscode og billetmuligheder samt gøre det muligt at gennemføre en simuleret tilmelding.

Målgruppen er unge voksne i alderen 18–30 år. Projektet har særligt fokus på tilgængelighed for personer med protanopi (rød-grøn farveblindhed).

Hjemmesiden skal implementeres på baggrund af den godkendte high-fidelity prototype i Figma.

## 2. Teknologier

Brug udelukkende:

- HTML5
- CSS3
- Vanilla JavaScript

Ingen React, Vue, Angular, Tailwind, Bootstrap eller andre frameworks.

Ingen backend, databaser eller build tools, medmindre brugeren udtrykkeligt anmoder om det.

Projektet skal kunne åbnes lokalt i en browser. Funktioner, der kræver en server, må ikke simuleres som reelle serverhandlinger.

## 3. Projektstruktur

Anvend som udgangspunkt følgende struktur:

- index.html
- om-festen.html
- dresscode.html
- tilmelding.html
- kontakt.html
- css/style.css
- js/script.js
- assets/images/
- assets/icons/
- assets/fonts/
- AGENTS.md
- README.md

Eksisterende filer og struktur skal respekteres. Opret ikke unødvendige filer.

## 4. Figma og design

Figma er den primære designreference:

[https://www.figma.com/design/oYmK2YQtfUTZkJ61IzbTOM/Projekt-3?node-id=405-1106&t=ybQEslL1Ibc8Yv80-1](https://www.figma.com/design/oYmK2YQtfUTZkJ61IzbTOM/Projekt-3?node-id=405-1106\&t=ybQEslL1Ibc8Yv80-1)

Følg prototypens:

- Layout og spacing
- Typografi
- Farver og kontraster
- Billeder og ikoner
- Navigation
- Responsivitet
- CTA-elementer
- Formularer
- Interaktioner
- Components

Anvend eksisterende assets og designværdier fra Figma, når de kan verificeres.

Designretningen er mørk, gotisk og minimalistisk med tydelige typografiske kontraster og en gul accentfarve.

Undgå at improvisere nye designsektioner eller erstatte eksisterende design uden brugerens godkendelse.

Brug mobile-first CSS, hvor det er hensigtsmæssigt.

## 5. Sider og funktionalitet

Implementér følgende sider:

1. Forside
2. Om festen
3. Dresscode
4. Tilmelding
5. Kontakt

Hjemmesiden skal som minimum understøtte:

- Responsiv desktop- og mobilnavigation
- Funktionel hamburgermenu
- Interne navigationslinks
- Klikbare CTA-knapper
- FAQ-accordions
- Dropdown til billettype
- Dropdown til antal billetter
- Formularer med korrekt validering
- Bekræftelsesdialog ved simuleret tilmelding

FAQ skal kunne åbnes og lukkes med både mus og tastatur.

Billetter, der er markeret som udsolgt, må ikke kunne vælges.

Formularen skal vise forståelige fejlbeskeder (Som designet i style-tile).

En simuleret tilmelding må ikke give indtryk af, at der er oprettet en reel reservation eller gennemført en betaling.

## 6. Tilgængelighed — WCAG 2.2 AA

Tilgængelighed er et centralt projektkrav.

Følg WCAG 2.2 niveau AA, hvor det er relevant.

Prioritér:

- Semantisk HTML
- Korrekt overskriftshierarki
- Synlige fokusindikatorer
- Tastaturnavigation
- Tilstrækkelig tekstkontrast
- Formularlabels
- Tydelige fejlbeskeder
- Tilgængelige dialoger
- Meningsfulde alt-tekster
- Korrekt brug af ARIA

Anvend native HTML-elementer frem for specialudviklede komponenter, når det er muligt.

Sørg for kompatibilitet med Apples VoiceOver.

Undgå unødvendige ARIA-attributter.

Respektér `prefers-reduced-motion`.

## 7. Protanopi

Hjemmesiden skal tage særligt hensyn til brugere med protanopi.

Derfor gælder følgende regler:

- Farve må aldrig være den eneste indikator for status eller handling.
- Billetstatus skal også kommunikeres gennem tekst.
- Formularfejl skal forklares med tekst.
- Fokusindikatorer skal være synlige.
- Interaktive elementer skal kunne identificeres uden farvesyn.
- Vigtige oplysninger skal være forståelige uden visuelle effekter.

Bevar HorrorHouse-designet, men prioritér tilgængelighed ved dokumenterede konflikter.

## 8. SEO

Implementér teknisk SEO med:

- Unikke sidetitler
- Relevante meta descriptions
- Én logisk hovedoverskrift pr. side
- Semantisk HTML
- Beskrivende interne links
- Korrekt billedhåndtering
- Alt-tekster til informative billeder
- Canonical-links, når en endelig offentlig URL er kendt
- XML-sitemap og robots.txt ved offentliggørelse, hvis relevant

Undgå keyword stuffing og unødvendige SEO-elementer.

## 9. GEO og strukturerede data

Indholdet skal være let at forstå for både mennesker, søgemaskiner og AI-baserede søgesystemer.

Prioritér:

- Klart og faktuelt indhold
- Tydelige oplysninger om eventet
- Logisk informationsstruktur
- Beskrivende overskrifter
- Forståelige FAQ-svar
- Konsistens mellem sidernes informationer

Anvend JSON-LD med relevante Schema.org-typer, især `Event`, når oplysningerne kan repræsenteres korrekt.

HorrorHouse er et fiktivt skoleprojekt.

Fiktive adresser og eventoplysninger må ikke præsenteres som verificerede virkelige arrangementer i offentligt indekserbare strukturerede data.

Undlad eller tilpas Event-markup ved offentliggørelse, hvis indholdet kan vildlede søgemaskiner.

## 10. JavaScript og interaktioner

JavaScript skal være enkelt og vedligeholdelsesvenligt.

Prioritér:

- Event listeners frem for inline JavaScript
- Genanvendelige funktioner
- Forståelige variabelnavne
- Minimal DOM-manipulation
- Korrekt håndtering af tastatur og fokus
- Ingen unødvendige biblioteker
- Ingen fejl i browserkonsollen

Ved interaktive dialoger skal fokus flyttes korrekt ind i dialogen og tilbage til udløseren ved lukning.

## 11. Test og kvalitetssikring

Hjemmesiden skal forberedes til test med:

- W3C HTML Validator
- W3C CSS Validator
- Lighthouse / PageSpeed Insights
- VoiceOver
- Tastaturnavigation
- Mobil- og desktoptest
- Kontrastkontrol
- Protanopi-simulering

Codex må ikke hævde, at en test er bestået, medmindre den faktisk er gennemført.

Dokumentér kendte begrænsninger og fejl ærligt.

## 13. Arbejdsmetode

Før større ændringer skal Codex:

1. Undersøge projektets eksisterende filer.
2. Læse AGENTS.md.
3. Identificere relevante Figma-referencer og assets.
4. Lave en kort implementeringsplan.
5. Implementere ændringer systematisk.
6. Kontrollere funktionaliteten, hvor det er muligt.
7. Opsummere ændrede filer og eventuelle mangler.

Prioritér først korrekt funktionalitet og tilgængelighed, derefter visuel præcision og optimering.

Hvis vigtig information mangler, skal Codex tydeligt oplyse det frem for at opfinde indhold.

## 14. Kommunikationsregler

Kommunikér på dansk.

Vær konkret og kortfattet.

Forklar:

- Hvad der er implementeret
- Hvilke filer der er ændret
- Hvad der er testet
- Hvad der eventuelt mangler

Undgå at beskrive ufærdige funktioner som færdige.

---

Målet er en visuelt sammenhængende, responsiv, tilgængelig og teknisk velstruktureret hjemmeside, der følger HorrorHouse-prototypen og kan dokumenteres i Tema 3-rapporten.
## 15. Arbejdsform og vigtige regler

Codex skal arbejde systematisk, forsigtigt og med respekt for eksisterende kode.

Følg altid disse regler:

1. **Undersøg eksisterende kode først.** Læs relevante filer og AGENTS.md, før ændringer foretages.
2. **Lav færrest mulige ændringer.** Ret kun det, der er nødvendigt for at løse den konkrete opgave.
3. **Følg projektstrukturen.** Respektér eksisterende filnavne, mapper, designkomponenter og kodestandarder.
4. **Gæt ikke ved vigtig manglende information.** Stil et konkret spørgsmål, hvis en afgørende oplysning mangler.
5. **Tilføj ikke frameworks.** Brug kun HTML5, CSS3 og vanilla JavaScript.
6. **Ændr ikke fungerende kode uden grund.** Bevar eksisterende funktionalitet og undgå utilsigtede ændringer.
7. **Forklar kort, hvad der er ændret.** Afslut hver opgave med en overskuelig opsummering.
8. Undgå unødvendige filer, afhængigheder og omskrivninger.
9. Genbrug eksisterende komponenter og funktioner, når det er muligt
10. Følg Figma-prototypen frem for at improvisere nye løsninger.
11. Prioritér tilgængelighed, funktionalitet og kodekvalitet.

### Arbejdsproces

Ved større opgaver skal Codex:

1. Læse AGENTS.md og undersøge projektets relevante filer.
2. Identificere eksisterende kode, Figma-referencer og assets.
3. Udarbejde en kort implementeringsplan.
4. Implementere løsningen med mindst mulige nødvendige ændringer.
5. Kontrollere, at eksisterende funktionalitet fortsat virker.
6. Gennemføre relevante tests, hvor det er muligt.
7. Opsummere ændringer, testresultater og eventuelle begrænsninger.

## 16. Begrænsninger

- Ingen frameworks, backend eller databaser.
- Ingen unødvendige installationer eller eksterne afhængigheder.
- Ingen ændringer af fungerende kode uden en konkret begrundelse.
- Ingen opdigtede oplysninger, funktioner eller testresultater.
- Ingen ændringer af Figma-designet uden en relevant begrundelse.
- Ingen påstande om gennemført tilgængeligheds- eller kvalitetstest uden reel verificering.

## 17. Kommunikation og svarformat.

Efter hver implementeringsopgave skal Codex svare kort og præcist med følgende struktur:

**Implementeret:**

- Hvad der er ændret eller tilføjet.

**Ændrede filer:**

- Hvilke filer der er oprettet eller ændret.

**Test og kvalitet:**

- Hvilke kontroller der faktisk er gennemført.
- Om der blev fundet fejl.

**Eventuelle mangler:**

- Hvad der endnu ikke er færdigt eller kræver brugerens opmærksomhed.

Undgå lange, unødvendige forklaringer og gentagelser.

Codex må aldrig beskrive en funktion som færdig, hvis den ikke er implementeret eller verificeret.
