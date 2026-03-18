// Language state
let currentLang = localStorage.getItem('tre-language') || 'da';

// Danish content backup (stored on first load)
const content_da = {};

// UI strings for both languages
const uiStrings = {
    da: {
        pageTitle: 'TRE - Interaktiv Forståelsesmodel',
        headerTitle: 'TRE - Dynamisk Forståelsesmodel',
        subtitle: 'Klik på cirklerne for at udforske',
        searchPlaceholder: 'Søg i alt indhold...',
        searchLabel: 'Søg',
        menuBack: '\u2190 Tilbage',
        resetOnboarding: 'Vis onboarding igen',
        modeLabels: { klient: 'Til klienter', fusion: 'Body Fusion Work', videnskab: 'Videnskabeligt', sclerose: 'Til mennesker med sclerose', oevelser: 'Øvelser' },
        menuItems: { om: 'Om Michael Morin Nissen', 'tre-info': 'Om TRE', 'sclerose-info': 'TRE & Sclerose', 'tre-uddannelse': 'TRE Uddannelse', privatlivspolitik: 'Privatlivspolitik', kontakt: 'Kontakt' },
        circleLabels: {
            polyvagal: ['Polyvagal', 'teori'],
            kropspsykoterapi: ['Kropsorienteret', 'Psykoterapi'],
            trauma: ['Trauma &', 'Stress'],
            kronisksygdom: ['Sclerose', '&', 'Kronisk', 'Sygdom'],
            bioenergetik: ['Bioenergetik'],
            psykologi: ['Klinisk', 'Psykologi']
        },
        welcomeDefault: { title: 'Velkommen til TRE Forståelsesmodellen', howTo: 'Sådan bruger du modellen:', li1: 'Klik på cirklerne for at lære om hvert perspektiv', li2: 'Skift mellem de fem perspektiver med knapperne ovenfor' },
        backToOverview: '\u2190 Tilbage til oversigt',
        readMore: '\u25B6 Læs uddybende',
        readMoreOpen: '\u25BC Læs uddybende',
        backToTop: '\u2191 Tilbage til toppen',
        connections: 'Sammenhænge',
        copyText: '\uD83D\uDCCB Kopiér tekst',
        shareText: '\uD83D\uDCE4 Del',
        copied: '\u2713 Kopieret',
        searchPopular: 'Populære emner',
        searchExplore: 'Udforsk efter perspektiv',
        searchNoResults: 'Ingen resultater for',
        searchTryAnother: 'Prøv et andet søgeord eller udforsk emnerne nedenfor',
        resultSuffix: { one: 'resultat', other: 'resultater' },
        onboardingWelcome: 'Velkommen til TRE',
        onboardingDesc: 'Udforsk hvordan TRE virker gennem en interaktiv model med seks perspektiver — tilpasset dine behov.',
        onboardingBtn: 'Kom i gang',
        onboardingStep2Title: 'Vælg dit perspektiv',
        onboardingStep2Desc: 'Hvordan vil du udforske TRE?',
        obModes: {
            klient: { title: 'Til klienter', desc: 'Forstå TRE på en enkel og tilgængelig måde' },
            fusion: { title: 'Body Fusion Work', desc: 'Michaels fysisk krævende holdpraksis' },
            videnskab: { title: 'Videnskabeligt', desc: 'Neurobiologi og forskningsgrundlag bag TRE' },
            sclerose: { title: 'Til mennesker med sclerose', desc: 'TRE tilpasset kronisk neurologisk sygdom' },
            oevelser: { title: 'Øvelser', desc: 'Konkrete øvelser og praktisk vejledning' }
        },
        langSwitch: 'English',
        langLabel: 'Sprog / Language',
        readMoreInApp: 'Læs mere i TRE-appen',
        connectionNotFound: 'Forbindelse ikke fundet',
        backTo: 'Tilbage til'
    },
    en: {
        pageTitle: 'TRE - Interactive Understanding Model',
        headerTitle: 'TRE - Dynamic Understanding Model',
        subtitle: 'Click on the circles to explore',
        searchPlaceholder: 'Search all content...',
        searchLabel: 'Search',
        menuBack: '\u2190 Back',
        resetOnboarding: 'Show onboarding again',
        modeLabels: { klient: 'For Clients', fusion: 'Body Fusion Work', videnskab: 'Scientific', sclerose: 'For People with MS', oevelser: 'Exercises' },
        menuItems: { om: 'About Michael Morin Nissen', 'tre-info': 'About TRE', 'sclerose-info': 'TRE & Multiple Sclerosis', 'tre-uddannelse': 'TRE Training', privatlivspolitik: 'Privacy Policy', kontakt: 'Contact' },
        circleLabels: {
            polyvagal: ['Polyvagal', 'Theory'],
            kropspsykoterapi: ['Body-Oriented', 'Psychotherapy'],
            trauma: ['Trauma &', 'Stress'],
            kronisksygdom: ['MS &', 'Chronic', 'Illness'],
            bioenergetik: ['Bioenergetics'],
            psykologi: ['Clinical', 'Psychology']
        },
        welcomeDefault: { title: 'Welcome to the TRE Understanding Model', howTo: 'How to use the model:', li1: 'Click on the circles to learn about each perspective', li2: 'Switch between the five perspectives using the buttons above' },
        backToOverview: '\u2190 Back to overview',
        readMore: '\u25B6 Read more',
        readMoreOpen: '\u25BC Read more',
        backToTop: '\u2191 Back to top',
        connections: 'See how',
        connectsWith: 'connects with',
        copyText: '\uD83D\uDCCB Copy text',
        shareText: '\uD83D\uDCE4 Share',
        copied: '\u2713 Copied',
        searchPopular: 'Popular Topics',
        searchExplore: 'Explore by Perspective',
        searchNoResults: 'No results for',
        searchTryAnother: 'Try a different search term or explore the topics below',
        resultSuffix: { one: 'result', other: 'results' },
        onboardingWelcome: 'Welcome to TRE',
        onboardingDesc: 'Explore how TRE works through an interactive model with six perspectives \u2014 tailored to your needs.',
        onboardingBtn: 'Get Started',
        onboardingStep2Title: 'Choose Your Perspective',
        onboardingStep2Desc: 'How would you like to explore TRE?',
        obModes: {
            klient: { title: 'For Clients', desc: 'Understand TRE in a simple and accessible way' },
            fusion: { title: 'Body Fusion Work', desc: 'Michael\'s physically demanding group practice' },
            videnskab: { title: 'Scientific', desc: 'Neurobiology and the research foundation behind TRE' },
            sclerose: { title: 'For People with MS', desc: 'TRE adapted for chronic neurological conditions' },
            oevelser: { title: 'Exercises', desc: 'Practical exercises and hands-on guidance' }
        },
        langSwitch: 'Dansk',
        langLabel: 'Language / Sprog',
        readMoreInApp: 'Read more in the TRE app',
        connectionNotFound: 'Connection not found',
        backTo: 'Back to'
    }
};

// Content database - TRE altid stort, nu med sclerose-mode
// Alle tekster: 80-100 ord, opdelt i 2 afsnit
let content = {
    circles: {
        tre: {
            klient: {
                title: "TRE - Tension & Trauma Releasing Exercises",
                text: "TRE er en metode udviklet af Dr. David Berceli, hvor du gennem 7 enkle øvelser trættes specifikke muskelgrupper — særligt psoas-musklen dybt i hoften. Når musklerne er tilstrækkeligt trætte, aktiveres kroppens naturlige rystemekanisme: en neurogen tremor der starter i benene og kan brede sig til hele kroppen.\n\nDet er den samme mekanisme du ser når dyr ryster efter en farlig situation. Tremoren hjælper nervesystemet med at frigøre ophobet spænding og vende tilbage til ro og balance. Mange oplever dyb afslapning, bedre søvn og mindre kropslig uro allerede efter første session."
            },
            fusion: {
                title: "TRE i Body Fusion Work — Michaels Integrerede Metode",
                text: "I Body Fusion Work er TRE kernekomponenten i en fysisk krævende, integreret tilgang. Michael Morin Nissen, certificeret TRE Trainer under David Berceli 2009-2013, blander TRE med bioenergetik (Lowen), elementer fra yoga, tai chi og qi gong til en sammenhængende metode der styrker kroppens struktur og kapacitet til at rumme energi og følelser.\n\nBody Fusion Work er noget mere hårdt end almindelig TRE. Holdet arbejder med at styrke core, opbygge energiflow, rumme og udtrykke følelser, samt styrke kontakt og tilstedeværelse. Når kroppen har strukturen til at bære det, kan dybere følelsesmæssig forløsning ske sikkert — en integration der afspejler over 25 års klinisk erfaring."
            },
            videnskab: {
                title: "TRE - Neurobiologisk Mekanisme",
                text: "TRE inducerer neurogen tremor via muskelspindel-aktivering og proprioceptiv feedback fra systematisk muskeltrætning af primært psoas major og iliacus. Tremor faciliterer polyvagal regulering gennem afferent vagal signalering, completion af incomplete defensive responses, og reorganisering af sensomotoriske mønstre associeret med traumatisk stress.\n\nDokumenteret effekt inkluderer nedregulering af HPA-akse aktivering med reduceret cortisol, øget heart rate variability indikerende parasympatisk dominans, og forbedret respiratory sinus arrhythmia. Et randomiseret kontrolleret studie ved MS viste signifikant reduktion af spasticitet og smerte. Central pattern generators i hjernestammen medierer den rhythmiske tremor-aktivitet."
            },
            sclerose: {
                title: "TRE for Mennesker med Sclerose",
                text: "TRE kan hjælpe med at reducere muskelspasticitet og kronisk spænding der ofte følger med sclerose. Tremoren arbejder mildt med nervesystemet uden at udmatte kroppen — en afgørende fordel når energi er begrænset. Øvelserne kan tilpasses fuldstændigt: liggende, siddende eller stående, afhængig af din tilstand den dag.\n\nOver 1000 mennesker med sclerose har brugt TRE gennem Scleroseforeningen i Danmark, med dokumenterede forbedringer i søvn, smerteniveau og energi. To videnskabelige studier bekræfter metodens effekt. Autoriseret psykolog Michael Morin Nissen har faciliteret TRE for scleroseramte i over 13 år."
            },
            oevelser: {
                title: "TRE - De 7 Øvelser",
                text: "TRE består af 7 øvelser der systematisk trætter muskelgrupper fra ankler til hofter. Du starter med ankelrotationer og tåhævninger, derefter bøjninger og stræk af lår og inderlår. Øvelse 6 er vægstøtte — en kontrolleret squat mod væggen i 3-5 minutter der trætter quadriceps og adduktorer dybt. Øvelse 7 er rygleje med bøjede knæer og hoftløft, hvorefter du slapper af og lader tremoren komme.\n\nHele sekvensen tager ca. 25 minutter. De første 5 øvelser er opvarmning og trætning, de sidste 2 aktiverer selve tremoren. Tremoren starter typisk i benene og breder sig til bækken og overkrop. Du styrer selv intensiteten ved at åbne eller lukke knæene."
            }
        },
        polyvagal: {
            klient: {
                title: "Polyvagal Teori - Dit Nervesystem",
                text: "Din krop har tre forskellige 'gear' ifølge Stephen Porges' polyvagale teori: Ro og forbindelse (grøn zone), hvor du føler dig sikker og social. Alarm og kamp/flugt (gul zone), hvor kroppen mobiliserer energi til at forsvare sig. Og nedlukning (rød zone), hvor kroppen lukker ned og bliver følelsesløs for at overleve.\n\nNår du tremorer med TRE, sender kroppen et signal til nervesystemet om at faren er overstået. Vagusnerven — kroppens hovedforbindelse mellem hjerne og krop — aktiveres, og nervesystemet kan skifte fra alarm eller nedlukning tilbage til det grønne gear, hvor healing og genopladning sker."
            },
            fusion: {
                title: "Polyvagal Teori i Body Fusion Work",
                text: "Polyvagal teori fungerer som det neurobiologiske kompas i Body Fusion Work. Michael Morin Nissen bruger Stephen Porges' autonome hierarki — ventral vagal, sympatisk og dorsal vagal — til løbende at aflæse deltagernes nervesystemtilstand og tilpasse intensiteten i det fysisk krævende arbejde. Denne aflæsning sikrer at kroppens struktur styrkes uden at nervesystemet overbelastes.\n\nBody Fusion Work blander bioenergetik (Lowen), TRE (Berceli) og elementer fra yoga, tai chi og qi gong i en intens praksis. Polyvagal forståelse guider hvornår der kan presses hårdere med core-styrkelse og energiflow, og hvornår der skal fokuseres på kontakt og tilstedeværelse. Denne autonome aflæsning gør den intensive træning sikker og responsiv."
            },
            videnskab: {
                title: "Polyvagal Teori - Neurofysiologi",
                text: "Vagalt modulerede kardiale og respiratoriske mønstre reflekterer autonomt nervesystem-tilstand via den myeliniserede ventral vagale pathway. Tremor aktiverer afferent vagal signalering gennem mechanoreceptor-stimulation, hvilket nedregulerer amygdala-respons og faciliterer præfrontal korteks engagement via nucleus tractus solitarius.\n\nRespiratory sinus arrhythmia (RSA) forbedres som markør for øget vagal tone. Heart rate variability (HRV) øges, indikerende forbedret autonom fleksibilitet. Den polyvagale model forklarer hvorfor TRE-induceret tremor kan facilitere skift fra ergotrop defensive tilstande til trofotrop restitution — tremor signalerer motorisk completion og nedregulerer den sympatiske beredskabsrespons."
            },
            sclerose: {
                title: "Nervesystem-Regulering ved Sclerose",
                text: "Sclerose påvirker nervesystemet på to niveauer: sygdommens fysiske skade på nerveceller (demyelinisering) og den kroniske psykologiske stress ved at leve med en uforudsigelig sygdom. Begge dele holder nervesystemet i en vedvarende alarm- eller nedlukningstilstand der forværrer symptomerne.\n\nPolyvagal teori forklarer hvorfor stress-reduktion er så afgørende ved sclerose: når nervesystemet finder ro-tilstanden, reduceres inflammation, immunfunktionen forbedres, og kroppens selvhelingsmekanismer fungerer bedre. TRE hjælper nervesystemet med at skifte gear fra kronisk alarm til genopladning — dokumenteret gennem forbedret heart rate variability hos scleroseramte."
            },
            oevelser: {
                title: "Øvelser for Nervesystem-Regulering",
                text: "Vagusnerven aktiveres effektivt gennem langsomme udåndinger, summende lyde og blid strækbevægelse af nakke og bryst. Prøv at ånde ind i 4 tæl, ud i 8 tæl — den forlængede udånding aktiverer direkte den parasympatiske gren. Sumning og nynnelyde vibrerer i struben tæt på vagusnerven og stimulerer den mekanisk.\n\nI TRE-sekvensen er det særligt øvelse 7 — rygleje med knæene faldende udad — der faciliterer det polyvagale skift fra alarm til ro. Når tremoren breder sig fra ben til bækken, registrerer nervesystemet motorisk completion og skifter til ventral vagal tilstand. Kombiner med bevidst langsom udånding for optimal effekt."
            }
        },
        kropspsykoterapi: {
            klient: {
                title: "Kropsorienteret Psykoterapi - Krop og Sind",
                text: "Din krop og din psyke hænger uløseligt sammen. Når livet gør ondt — gennem tab, stress eller overgreb — spænder kroppen som beskyttelse. De spændinger bliver ofte siddende i årevis som kronisk hovedpine, ondt i ryggen, anspændte skuldre eller knude i maven. Traditionel samtaleterapi arbejder oppefra og ned, men mange problemer sidder dybere end ordene kan nå.\n\nKropsorienteret psykoterapi arbejder nedefra og op: gennem dybere vejrtrækning, kropsøvelser, vibration og berøring forløses det der sidder fast i musklerne. Du behøver ikke nødvendigvis forstå eller tale om det — kroppen kan slippe direkte. Når kroppen slipper, følger sindet med."
            },
            fusion: {
                title: "Kropsorienteret Psykoterapi i Body Fusion Work",
                text: "Michaels uddannelse som certificeret bioenergetisk psykoterapeut fra Norddeutsches Institut für Bioenergetische Analyse udgør det kropslige fundament i Body Fusion Work. Bioenergetikken (Lowen) leverer forståelsen af kroppens energetiske flow, spændingsmønstre og strukturelle kapacitet — alt sammen centralt for holdets intense arbejde med at styrke kroppen.\n\nBody Fusion Work blander bioenergetik med TRE (Berceli) og elementer fra yoga, tai chi og qi gong i en fysisk krævende praksis. Fokus er på at opbygge kroppens struktur så den kan rumme den energi og de følelser der frigøres. Core-styrkelse, grounding og vejrtrækningsarbejde forbereder kroppen til at udtrykke følelser og styrke kontakt og tilstedeværelse."
            },
            videnskab: {
                title: "Kropsorienteret Psykoterapi - Neurobiologisk Grundlag",
                text: "Somatisk psykoterapi modulerer autonomt nervesystem gennem proprioceptiv og interoceptiv stimulation. Vejrtrækningsøvelser påvirker vagal tone direkte via respiratorisk sinus arrhytmi — langsomme udåndinger øger parasympatisk aktivitet. Vibration og bevægelsesøvelser aktiverer mechanoreceptorer i fascia og muskler, hvilket modulerer afferent signalering til insula og somatosensorisk korteks.\n\nInteroceptiv awareness — evnen til at mærke kroppens indre tilstande — korrelerer med emotionel reguleringskapacitet og er et centralt terapeutisk mål. Bottom-up interventioner omgår præfrontal kognitiv processing og arbejder direkte med subkortikale autonome reguleringsmekanismer, hvilket er særligt effektivt ved somatisk lagret traumatisk materiale."
            },
            sclerose: {
                title: "Kropsarbejde Tilpasset Sclerose",
                text: "Med sclerose er kroppen ofte forbundet med frustration — spasticitet, træthed, smerter og tab af funktioner. Kropsorienteret psykoterapi tilbyder en vej til at genetablere et positivt forhold til kroppen. Skånsomme vejrtrækningsøvelser, blid vibration og tilpassede kropsøvelser hjælper med at reducere spænding uden at udmatte.\n\nMichael Morin Nissen har arbejdet med scleroseramte i Scleroseforeningen siden 2002 og udviklet tilpassede kropsterapeutiske metoder. Du lærer at lytte til kroppens signaler og arbejde med den i stedet for mod den. Mange oplever at spasticiteten mildnes, energiniveauet forbedres, og kroppen igen kan opleves som en ressource."
            },
            oevelser: {
                title: "Øvelser fra Kropsorienteret Psykoterapi",
                text: "Kropsorienteret psykoterapi bruger vejrtrækning, vibration og kropslig kontakt som primære redskaber. Dyb diafragmatisk vejrtrækning åbner brystet og løsner den spænding der holder følelser tilbage. Vibrationsøvelser — at stå med bøjede knæ og lade benene vibrere — aktiverer kroppens naturlige rystefunktion og forbereder det neurogene tremorsvar.\n\nBody Fusion Work, udviklet af Michael Morin Nissen, kombinerer disse elementer med TRE og yogainspirerede stillinger. En typisk session inkluderer grounding i stående stilling, åbning af vejrtrækningen, vibrationsarbejde og afsluttende tremor i rygleje. Intensiteten tilpasses altid den enkeltes kapacitet — øvelserne kan udføres stående, siddende eller liggende."
            }
        },
        trauma: {
            klient: {
                title: "Trauma & Stress - Når Kroppen Husker",
                text: "Når noget overvældende sker — en ulykke, et tab, langvarig stress eller overgreb — forbereder kroppen sig på at kæmpe eller flygte. Hvis den reaktion bliver afbrudt eller undertrykt, sidder energien fast i kroppen som spænding, uro, følelsesløshed eller kronisk smerte. Kroppen 'husker' traumet selvom du måske ikke tænker på det.\n\nTRE hjælper kroppen med at fuldføre den afbrudte forsvarsreaktion og frigøre den fastlåste energi. De 7 øvelser aktiverer kroppens naturlige tremor uden at du behøver tale om det svære. Mange oplever lettelse, varme og dyb afslapning når kroppen endelig får lov at slippe det den har holdt fast i."
            },
            fusion: {
                title: "Trauma & Stress i Body Fusion Work",
                text: "Body Fusion Work adresserer trauma og stress gennem en fysisk krævende tilgang der styrker kroppens evne til at rumme og udtrykke følelser. Michael Morin Nissen, autoriseret psykolog og certificeret TRE Trainer, blander bioenergetik (Lowen), TRE (Berceli) og elementer fra yoga, tai chi og qi gong til en intens praksis der bygger kroppens struktur op.\n\nFor mange er det problematisk at løsne følelser og energi hvis kroppen ikke har strukturen til at rumme arbejdet. Body Fusion Work styrker core, opbygger energiflow og træner kroppen i at holde og udtrykke det der frigøres. Denne strukturelle tilgang gør det muligt at arbejde trygt med traumatisk stress på et dybt kropsligt niveau."
            },
            videnskab: {
                title: "Trauma & Stress - Neurobiologiske Mekanismer",
                text: "Traumatisk stress aktiverer HPA-aksen med forhøjet cortisol og adrenalin, samt amygdala-medieret frygtrespons med nedsat præfrontal inhibering. Kronisk stress medfører hippocampal atrofi (nedsat kontekstualisering af frygt), præfrontal hypoaktivitet og dysreguleret autonomt nervesystem med forhøjet sympatisk baseline.\n\nIncomplete defensive responses vedligeholdes via periaqueductal gray (PAG) og brainstem-medierede reflexer. TRE aktiverer central pattern generators der faciliterer motorisk completion og efterfølgende autonomt shift fra defensiv til eksplorativ tilstand. Somatisk lagret trauma er primært subkortikalt og utilgængeligt for top-down kognitiv processing — bottom-up intervention via tremor adresserer dette direkte."
            },
            sclerose: {
                title: "Stress og Trauma ved Sclerose",
                text: "At få en sclerose-diagnose er i sig selv traumatisk — pludselig usikkerhed, tab af kontrol over kroppen, frygt for fremtiden. Dertil kommer den kroniske stress ved at leve med en uforudsigelig sygdom: attakker, symptomforværring, bivirkninger af medicin, og de daglige begrænsninger. Denne vedvarende stress belaster nervesystemet og kan direkte forværre symptomerne.\n\nTRE hjælper med at forløse den ophobede stress og de afbrudte forsvarsreaktioner fra diagnosetidspunkt og tilbageslag. Kroppen kan bevæge sig fra kronisk alarm til ro — hvilket er afgørende for immunfunktion, inflammation og symptomhåndtering. Forskning viser at stress-reduktion kan bremse sygdomsaktivitet."
            },
            oevelser: {
                title: "Øvelser til Stress- og Traumeforløsning",
                text: "TRE's kernemekanisme er completion af afbrudte forsvarsreaktioner. Øvelse 5 — stående med hænderne på lænden, hofterne presset fremad — åbner den forreste kropsside og strækker psoas-musklen, hvor frygt og flugtrespons lagres. Øvelse 6, vægstøtten, trætter de store benmuskelgrupper der aktiveres ved kamp og flugt. Når disse muskler trætter, slipper den fastlåste energi.\n\nI tremorfasen (øvelse 7) observeres ofte spontane bevægelser: sparkende ben, roterende bækken, vibrerende mave. Dette er kroppen der fuldender de forsvarsreaktioner der aldrig blev afsluttet. Lad bevægelserne komme uden at kontrollere dem — din krop ved præcis hvad den har brug for at forløse."
            }
        },
        kronisksygdom: {
            klient: {
                title: "Sclerose & Kronisk Sygdom - TRE som Selvhjælp",
                text: "Når du lever med en kronisk sygdom som sclerose, er kroppen under konstant pres — både fra sygdommen selv og fra den stress det er at leve med den. TRE tilbyder en skånsom metode til selvregulering som du kan bruge hjemme, i dit eget tempo. Metoden tilpasses altid din aktuelle tilstand — på dårlige dage kan øvelserne gøres liggende.\n\nOver 1000 mennesker med sclerose har haft gavn af TRE gennem den danske Scleroseforening. Mange oplever reduceret spasticitet, bedre søvn, mindre træthed og færre smerter. To videnskabelige studier bekræfter forbedret livskvalitet. TRE erstatter ikke medicin, men giver dig et redskab til selv at påvirke din tilstand."
            },
            fusion: {
                title: "Sclerose & Kronisk Sygdom i Body Fusion Work",
                text: "Gennem 13 års arbejde i Scleroseforeningen har Michael Morin Nissen tilpasset Body Fusion Work til mennesker med multipel sclerose og andre kroniske sygdomme. Over 1000 MS-patienter har bidraget til en dyb forståelse af hvordan den normalt intensive metode tilpasses når energi er begrænset og nervesystemet er kompromitteret.\n\nBody Fusion Work blander bioenergetik (Lowen), TRE (Berceli) og elementer fra yoga, tai chi og qi gong. Ved kronisk sygdom doseres intensiteten omhyggeligt — core-styrkelse tilpasses, energiflow-øvelser forenkles, og kroppens struktur opbygges gradvist. Metoden adresserer både spasticitet og det autonome forsvar, med forbedringer i livskvalitet dokumenteret i to videnskabelige studier."
            },
            videnskab: {
                title: "Sclerose & Kronisk Sygdom - Forskningsgrundlag",
                text: "Multipel sklerose involverer neuroinflammation og demyelinisering af centralnervesystemet. Autonomt nervesystem-dysregulering er dokumenteret komorbiditet ved MS med reduceret heart rate variability og forhøjet sympatisk tonus. TRE-induceret tremor modulerer autonomt nervesystem mod parasympatisk dominans, hvilket potentielt reducerer neuroinflammation via den cholinerge antiinflammatoriske pathway.\n\nEt randomiseret kontrolleret studie viste signifikant reduktion af spasticitet og smerte efter TRE-intervention, samt gradvis forbedring i gangfunktion. Et pilotstudie dokumenterede signifikant reduktion af fatigue målt med MFIS. Spasticitet reduceres gennem nedregulering af defensiv muskeltonus medieret af autonomt nervesystem — den autonom-refleksive komponent snarere end den neurologiske."
            },
            sclerose: {
                title: "Din Vej med TRE og Sclerose",
                text: "Du er ikke alene. Over 1000 mennesker med sclerose har brugt TRE og oplevet forbedringer i deres hverdag — mindre spasticitet, bedre søvn, mere energi, mindre smerte. TRE erstatter ikke din medicinske behandling, men det giver dig et redskab til selv at påvirke din tilstand. Øvelserne tilpasses altid dig: siddende, liggende eller stående.\n\nStart langsomt med korte sessioner på 10-15 minutter, mærk efter bagefter, og byg langsomt op. Din krop ved hvad den har brug for — TRE giver den et sprog til at udtrykke det. To videnskabelige studier fra den danske Scleroseforening bekræfter at TRE forbedrer livskvaliteten for mennesker med sclerose."
            },
            oevelser: {
                title: "Tilpassede Øvelser ved Kronisk Sygdom",
                text: "Ved sclerose og kronisk sygdom tilpasses TRE-øvelserne radikalt. Alle 7 øvelser kan udføres siddende i en stol eller liggende på en måtte. Ankelrotationer og tåhævninger laves siddende med fødderne på gulvet. I stedet for vægstøtte bruges siddende knæpres mod hinanden i 2-3 minutter. Tremorfasen foregår altid liggende med fuld støtte under knæer og hoved.\n\nDosering er afgørende: start med 10-15 minutters sessioner og mærk efter i 24 timer. Hvis du er mere træt dagen efter, var sessionen for lang. Body Fusion Work — Michael Morin Nissens tilpassede format — kombinerer skånsom bioenergetik, TRE og yogaelementer i sessioner der aldrig overstiger din energikapacitet."
            }
        },
        bioenergetik: {
            klient: {
                title: "Bioenergetik - Muskulært Panser",
                text: "Når livet er hårdt, spænder vi ubevidst kroppen som beskyttelse — anspændte skuldre, låst kæbe, tilbageholdt vejrtrækning, sammenkneben mave. Over tid glemmer vi at slippe igen, og spændingerne bliver permanente. Alexander Lowen kaldte dette 'muskulært panser': mønstre i musklerne der holder følelser og livskraft tilbage.\n\nBioenergetik arbejder med at opløse dette panser gennem dybere vejrtrækning, grounding-øvelser der styrker kontakten med kroppen og jorden, og bevægelser der hjælper med at udtrykke tilbageholdte følelser. TRE's tremor supplerer ved at aktivere kroppens egen evne til at ryste panseret af. Når musklerne slipper, vender energi, følelser og livskraft tilbage."
            },
            fusion: {
                title: "Bioenergetik i Body Fusion Work",
                text: "Alexander Lowens bioenergetiske analyse er et bærende element i Body Fusion Work. Michael Morin Nissens certificering fra Norddeutsches Institut für Bioenergetische Analyse forankrer hans praksis i denne tradition — forståelsen af kroppens energetiske flow, segmentelle spændingsmønstre og den strukturelle kapacitet til at rumme følelser og energi.\n\nI Body Fusion Work bruges bioenergetik sammen med TRE (Berceli) og elementer fra yoga, tai chi og qi gong i en fysisk krævende praksis. Fokus er at styrke kroppens struktur — særligt core — så den kan bære den energi der frigøres. Bioenergetisk grounding, vejrtrækningsarbejde og ekspressive teknikker bygger den kapacitet der gør det muligt at udtrykke følelser og styrke kontakt og tilstedeværelse."
            },
            videnskab: {
                title: "Bioenergetik - Fascial og Muskulær Reorganisering",
                text: "Kronisk muskelspænding modificerer fasciale viscoelastiske egenskaber gennem kollagen-remodellering og fibroblast-medieret matrix-stiffening. Proprioceptiv signalering ændres, hvilket vedligeholder central sensibilisering og forhøjet gamma-motorisk neuron-aktivitet. Reichian 'armor' har således målbart strukturelt og neuralt substrat.\n\nTRE-induceret tremor reorganiserer myofasciale holding patterns gennem rhythmisk mekanisk stimulation der aktiverer Ruffini-corpuskler og interstitielle receptorer i fascia. Oscillation faciliterer thixotropisk tilstandsændring i grundsubstansen og aktiverer matrix metalloproteinaser. Samtidig nedreguleres central gamma-motorisk drive. Effekten er både strukturel fascial reorganisering og neural omprogrammering af baseline muskeltonus."
            },
            sclerose: {
                title: "Spasticitet og Muskulært Panser ved Sclerose",
                text: "Sclerose skaber spasticitet gennem neurologisk skade på nervecellernes myelinskeder, men oveni ligger ofte ekstra muskelspænding fra psykologisk forsvar og kompensation — et 'panser' af kronisk kontraktion. Du holder sammen, kæmper videre, og kroppen bærer spændingen. Disse to lag forstærker hinanden.\n\nTRE arbejder med begge lag: den autonome komponent af spasticiteten mildnes gennem nervesystem-regulering, og det psykologiske panser får lov til at slippe. Bioenergetiske grounding-øvelser styrker kroppens stabilitet og kontakt med jorden. Når begge typer spænding reduceres, forbedres mobilitet, smerte og energiniveau markant. Mange scleroseramte beskriver det som at kroppen 'puster ud' for første gang i år."
            },
            oevelser: {
                title: "Bioenergetiske Øvelser og Grounding",
                text: "Grounding er bioenergetikkens kerneøvelse: stå med let bøjede knæ, fødderne i hoftebredde, og mærk kontakten med gulvet. Lad vægten synke ned i fødderne. Hold stillingen i 2-3 minutter og læg mærke til den naturlige vibration der opstår i benene — dette er den bioenergetiske 'vibrancy' som Alexander Lowen beskrev.\n\nVejrtrækningsøvelser åbner brystet og løsner diafragma: lig på ryggen over en sammenrullet håndklæde placeret under skulderbladene, og ånde dybt med åben mund. Bioenergetiske bueøvelser — stående med hænderne på lænden og let bagudlæning — strækker hele forsiden og aktiverer energiflow. Disse øvelser forbereder kroppen optimalt til TRE-tremor."
            }
        },
        psykologi: {
            klient: {
                title: "Klinisk Psykologi - Sikkerhed og Relation",
                text: "For at din krop kan turde ryste og slippe, må du føle dig tryg. En kvalificeret terapeut eller psykolog skaber det sikre rum hvor tremor kan ske. Det handler ikke kun om at lære de 7 øvelser — det handler om at du føler dig set, hørt og accepteret som den du er, med alt det du bærer.\n\nHealing sker i relationer, ikke i isolation. Terapeutens rolige tilstedeværelse smitter direkte til dit nervesystem — det kaldes co-regulering. Når terapeuten er afslappet og til stede i sin egen krop, hjælper det din krop med at finde ro. Derfor er den terapeutiske relation lige så vigtig som selve TRE-teknikken."
            },
            fusion: {
                title: "Klinisk Psykologi i Body Fusion Work",
                text: "Som autoriseret psykolog og certificeret TRE Trainer bringer Michael Morin Nissen klinisk psykologisk kompetence til Body Fusion Work. Hans forståelse af psykopatologi og reguleringskapacitet sikrer at den fysisk krævende praksis tilpasses den enkelte deltagers behov — særligt vigtigt fordi holdet arbejder intensivt med at styrke kroppens struktur og rumme energi.\n\nBody Fusion Work blander bioenergetik (Lowen), TRE (Berceli) og elementer fra yoga, tai chi og qi gong. Den psykologiske forankring sikrer at core-styrkelse, energiflow og følelsesmæssigt udtryk sker inden for en tryg ramme. Co-regulering og kontakt er centrale elementer — klinisk psykologi og det intensive kropsarbejde er uadskillelige i denne tilgang."
            },
            videnskab: {
                title: "Klinisk Psykologi - Interpersonal Neurobiology",
                text: "Terapeutisk relation modificerer klientens autonome nervesystem via social engagement system og ventral vagal pathway. Terapeuts egen regulerede autonome tilstand co-regulerer klient gennem mirror neuron-aktivering, interbrain synchrony og autonomic entrainment — dokumenteret via simultane EEG- og HRV-målinger.\n\nAttachment security i den terapeutiske relation modulerer amygdala-reaktivitet og udvider præfrontal inhibitorisk kapacitet, hvilket øger window of tolerance for somatisk processing under TRE. Therapeutic alliance quality korrelerer signifikant med behandlingsoutcome målt på HRV-forbedring og symptomreduktion. Interpersonel neurobiologi etablerer at co-regulering er en fysiologisk mekanisme, ikke blot psykologisk komfort."
            },
            sclerose: {
                title: "Terapeutisk Relation ved Sclerose",
                text: "Med sclerose er kroppen ofte forbundet med svigt, smerte og frygt. At turde tremor — at turde slippe kontrollen over en krop der allerede føles upålidelig — kræver dyb sikkerhed. En terapeut der forstår både sclerose og TRE, som selv er rolig og til stede i kroppen, skaber det containment der gør transformation mulig.\n\nRelationel sikkerhed er ikke 'nice to have' men fysiologisk nødvendigt: terapeutens regulerede nervesystem co-regulerer klientens gennem tilstedeværelse og anerkendelse. Michael Morin Nissen har arbejdet med denne målgruppe i over 13 år og forstår de særlige udfordringer ved at turde slippe i en krop med kronisk sygdom."
            },
            oevelser: {
                title: "Øvelser i Terapeutisk Kontekst",
                text: "I en terapeutisk ramme guides TRE-øvelserne med fokus på titrering og sikkerhed. Terapeuten hjælper dig med at dosere: hvor meget tremor er nok for i dag? Øvelsen 'butterfly' — liggende med samlede fodsåler og knæene faldende udad — åbner bækkenet gradvist. Terapeuten guider dig i at lukke knæene lidt sammen for at dæmpe, eller åbne mere for at intensivere.\n\nCo-reguleringsøvelser supplerer TRE: synkroniseret vejrtrækning med terapeuten, øjenkontakt under tremor, og verbal check-in undervejs. Disse elementer aktiverer det sociale engagementsystem og skaber den tryghed der tillader dybere forløsning. Afslutningsvis integreres oplevelsen gennem kort samtale om hvad kroppen mærkede."
            }
        }
    },
    connections: {
        'tre-polyvagal': {
            klient: "Når du tremorer, sender din krop et signal til nervesystemet om at faren er overstået. Stephen Porges' polyvagale teori beskriver tre tilstande: ro og sikkerhed, alarm og kamp/flugt, og nedlukning. TRE's rystelser aktiverer vagusnerven, som er kroppens hovedvej fra alarm til ro.\n\nDerfor oplever mange dyb afslapning, varmefornemmelse og lettelse efter en TRE-session — nervesystemet skifter gear fra overlevelse til genopladning. Kroppen kan endelig begynde at hele, fordi den ikke længere bruger al sin energi på at være i beredskab.",
            fusion: "I Body Fusion Work er TRE-tremoren integreret i en fysisk krævende praksis der også trækker på bioenergetik (Lowen), yoga, tai chi og qi gong. Michael Morin Nissen bruger polyvagal aflæsning til at tilpasse intensiteten i realtid — en afgørende færdighed fordi holdet er noget mere hårdt end almindelig TRE. Nervesystemets tilstand afgør hvornår der kan presses med core-styrkelse og hvornår der skal fokuseres på kontakt.\n\nPolyvagal forståelse sikrer at den intensive træning opbygger kroppens struktur uden at overbelaste nervesystemet. Aflæsningen guider hvornår energiflow kan intensiveres, og hvornår tilstedeværelse og grounding prioriteres — en præcision der gør Body Fusion Work sikker og effektiv som strukturopbyggende praksis.",
            videnskab: "Neurogen tremor modulerer vagal efferens via brainstem circuits der involverer nucleus tractus solitarius og dorsal motor nucleus. Afferent mekanoreceptor-signalering fra muskelspindler og Golgi-seneorganer under tremor aktiverer vagale feedback-loops der nedregulerer amygdala-medieret frygtrespons.\n\nMålbar effekt inkluderer øget respiratory sinus arrhythmia, forbedret heart rate variability og reduceret sympatisk hudrespons. Tremor-induceret parasympatisk dominans faciliterer skift fra ergotrop til trofotrop tilstand, hvilket understøtter immunologisk homeostase og præfrontal korteks engagement. Reducerede inflammatoriske biomarkører er observeret ved regelmæssig TRE-praksis.",
            sclerose: "Ved sclerose er nervesystemet ofte i kronisk stress-tilstand — både fra sygdommens neurologiske påvirkning og den psykologiske belastning ved at leve med uforudsigelighed. Denne vedvarende alarm forværrer inflammation, spasticitet og træthed direkte.\n\nTRE's tremor-mekanisme hjælper nervesystemet tilbage til ro-tilstand via vagusnerve-aktivering. Når nervesystemet finder ro, reduceres den autonome komponent af spasticiteten, immunfunktionen forbedres, og kroppens selvhelingskapacitet øges. Forskning viser at parasympatisk dominans reducerer neuroinflammation via den cholinerge antiinflammatoriske pathway — kritisk for symptomkontrol ved sclerose.",
            oevelser: "Under TRE-tremoren kan du aktivt understøtte det polyvagale skift med vejrtrækning. Ånde ind i 4 tæl, ud i 8 tæl mens tremoren arbejder i benene. Den forlængede udånding aktiverer vagusnerven og forstærker tremorens effekt på nervesystemet. Læg mærke til hvornår vejrtrækningen spontant bliver dybere — det er tegn på ventral vagal aktivering.\n\nEn konkret øvelse: læg hænderne på maven under tremor og mærk bevægelsen indefra. Når tremoren breder sig til bækkenet, begynder diafragma ofte at slippe spontant. Summende lyde på udåndingen vibrerer i struben tæt på vagusnerven og forstærker den parasympatiske aktivering."
        },
        'tre-bioenergetik': {
            klient: "Når vi oplever smerte eller stress, spænder vi ubevidst musklerne — som et panser der beskytter os. Over tid bliver panseret permanent og holder følelser, energi og livskraft indespærret. Alexander Lowen kaldte dette 'character armor' i sin bioenergetiske analyse.\n\nTRE's tremor arbejder direkte med disse dybe muskelspændinger. Musklerne begynder at vibrere og slippe lag for lag, uden at du behøver forstå eller tale om hvad der sidder fast. Mange oplever at følelser, varme og bevægelsesfrihed vender tilbage efterhånden som panseret opløses. Kroppen genfinder sin naturlige vibration og livskraft.",
            fusion: "Body Fusion Work forener TRE (Berceli) med bioenergetik (Lowen) i en fysisk krævende praksis der også integrerer elementer fra yoga, tai chi og qi gong. Den bioenergetiske forståelse af energetisk flow og kroppens segmentelle spændingsmønstre guider hvordan TRE-tremoren bruges til at frigøre blokeret energi efter at kroppens struktur er styrket.\n\nDenne kombination er kernen i Body Fusion Work: bioenergetisk core-styrkelse og grounding opbygger den kropslige kapacitet der er nødvendig for at rumme den energi TRE-tremoren frigør. Holdet er noget mere hårdt netop fordi der arbejdes intensivt med at styrke strukturen før følelsesmæssig forløsning faciliteres.",
            videnskab: "Neurogen tremor reorganiserer myofasciale holding patterns gennem rhythmisk mekanisk stimulation af muskelspindler, fasciale mechanoreceptorer og proprioceptive feedback-loops. Kronisk muskelspænding modificerer fasciale viscoelastiske egenskaber gennem kollagenremodellering og fibroblast-medieret stiffening.\n\nTRE-induceret oscillation reverserer denne proces via mekanisk stimulation der aktiverer matrix metalloproteinaser og reducerer fascial densitet. Samtidig nedreguleres gamma-motorisk neuron-aktivering gennem centralnervesystemets processing af rhythmisk proprioceptiv input. Effekten er både strukturel fascial reorganisering og neural omprogrammering af baseline muskeltonus — det bioenergetikken beskriver som armor-dissolution.",
            sclerose: "Ved sclerose er der både neurologisk spasticitet fra demyelinisering og psykologisk muskulært panser fra årelang kompensation og forsvar. Kroppen holder sammen, kæmper videre, og bærer lag på lag af spænding. Disse to typer spænding forstærker hinanden i en ond cirkel.\n\nTRE arbejder med begge lag: mildner den autonome komponent af spasticiteten gennem nervesystem-regulering og løsner det kompensatoriske panser. Bioenergetiske grounding-øvelser styrker kroppens kontakt med jorden. Når begge lag adresseres, forbedres mobilitet og smerte markant — mange beskriver det som at kroppen puster ud for første gang i år.",
            oevelser: "Start med bioenergetisk grounding: stå med bøjede knæ i 2-3 minutter og mærk den naturlige vibration i benene. Denne vibration er forløberen til TRE-tremoren. Gå derefter direkte til vægstøtte (øvelse 6) — den trætter de samme muskelgrupper som grounding aktiverer, og tremoren kommer hurtigere og dybere.\n\nI tremorfasen (øvelse 7) kan du tilføje bioenergetisk vejrtrækning: åbn munden og lad udåndingen komme som et blidt 'ahhh'. Dette løsner diafragma-segmentet og lader tremoren brede sig fra ben og bækken op gennem mave og bryst. Kombinationen af tremor og åben vejrtrækning opløser panser på flere niveauer samtidigt."
        },
        'tre-psykologi': {
            klient: "For at kroppen kan turde ryste og slippe, skal du føle dig tryg. En kvalificeret TRE-terapeut eller psykolog skaber det sikre rum hvor din krop kan give slip. Terapeuten er rolig, til stede og opmærksom — og det smitter direkte til dit nervesystem.\n\nDet handler ikke kun om at lære en teknik, men om at opleve accept og forståelse. Healing sker i relationer — terapeutens trygge tilstedeværelse er forudsætningen for at tremor kan gå dybt nok til at gøre en varig forskel. Dit nervesystem opfanger terapeutens ro og begynder selv at regulere sig ned.",
            fusion: "I Body Fusion Work er den psykologiske forankring afgørende fordi holdet er fysisk krævende. Som autoriseret psykolog og certificeret TRE Trainer skaber Michael Morin Nissen den tryghed der er nødvendig for at deltagerne kan arbejde intensivt med at styrke kroppens struktur og udtrykke følelser. Klinisk kompetence sikrer at det hårde arbejde tilpasses den enkeltes kapacitet.\n\nBody Fusion Work blander bioenergetik (Lowen), TRE (Berceli) og elementer fra yoga, tai chi og qi gong. Den psykologiske dimension sikrer at core-styrkelse, energiflow og følelsesmæssigt udtryk foregår i en tryg ramme. Co-regulering og kontakt er bærende elementer — psykologi og intensivt kropsarbejde er uadskillelige i denne praksis.",
            videnskab: "Terapeutens regulerede autonome tilstand co-regulerer klientens via det sociale engagementsystem og ventral vagal pathway. Mirror neuron-aktivering og interbrain synchrony faciliterer neural entrainment der stabiliserer klientens autonome regulering under tremor.\n\nAttachment security i den terapeutiske relation modulerer amygdala-reaktivitet og udvider præfrontal inhibitorisk kapacitet, hvilket øger window of tolerance for somatisk processing. Therapeutic alliance quality korrelerer med HRV-forbedring og cortisol-reduktion under TRE-sessioner. Interpersonel neurobiologi bekræfter at co-regulering er en fysiologisk nødvendighed, ikke blot en psykologisk komfortfaktor.",
            sclerose: "Med sclerose er kroppen ofte forbundet med svigt og frygt. At turde tremor — at turde slippe kontrol over en krop der allerede føles upålidelig — kræver dyb sikkerhed. En terapeut der forstår både sclerose og TRE skaber det containment der gør transformation mulig.\n\nMichael Morin Nissen har over 13 års erfaring med denne målgruppe og forstår de særlige udfordringer. Relationel sikkerhed er fysiologisk nødvendigt: terapeutens regulerede nervesystem co-regulerer klientens gennem tilstedeværelse og anerkendelse. Først når du føler dig tryg, kan kroppen turde give slip.",
            oevelser: "I terapeutisk kontekst guides TRE med løbende check-in: 'Hvad mærker du nu?' Terapeuten hjælper dig med at dosere tremoren — lukke knæene lidt for at dæmpe, åbne mere for at intensivere. Denne titrering sikrer at du forbliver inden for dit window of tolerance og ikke bliver overvældet.\n\nCo-reguleringsøvelser inden TRE skaber tryghed: synkroniseret vejrtrækning med terapeuten, kort øjenkontakt, og verbal orientering i rummet. Under tremor kan terapeuten placere en hånd på din skulder eller fod som et anker. Afslutningsvis integreres oplevelsen: 'Hvad lagde din krop mærke til?' Denne kombination af teknik og relation gør tremoren dybere og mere tryg."
        },
        'polyvagal-bioenergetik': {
            klient: "Når nervesystemet er i alarm, spænder musklerne automatisk — klar til kamp eller flugt. Hvis alarmen aldrig slukkes, bliver spændingen permanent og danner det bioenergetikken kalder et 'muskulært panser'. Dette panser er nervesystemets fysiske udtryk for kronisk utryghed.\n\nPolyvagal teori forklarer mekanismen: sympatisk hyperaktivering holder musklerne kontraherede, mens dorsal vagal nedlukning skaber stivhed og følelsesløshed. Når TRE bringer nervesystemet tilbage til ro-tilstand, kan musklerne endelig slippe det panser de har holdt i årevis. Nervesystem-regulering og muskulær frigivelse går hånd i hånd.",
            fusion: "Body Fusion Work forbinder polyvagal forståelse med bioenergetik (Lowen) i en fysisk krævende praksis. Michael Morin Nissen aflæser deltagernes autonome tilstand og muskulære mønstre som to sider af samme mønt — nervesystemets tilstand bestemmer kroppens evne til at arbejde intensivt med struktur og energiflow.\n\nDenne dobbelte aflæsning guider det hårde arbejde: polyvagal regulering sikrer at core-styrkelse og bioenergetiske øvelser sker i et tempo nervesystemet kan håndtere. Body Fusion Work blander også TRE (Berceli), yoga, tai chi og qi gong. Polyvagal teori leverer det autonome kort, bioenergetikken det kropslige — sammen gør de den intensive træning sikker og strukturopbyggende.",
            videnskab: "Reichian armor er somatisk manifestation af dysreguleret autonomt nervesystem — kronisk sympatisk aktivering manifesterer som muskulær hypertonus via forhøjet gamma-motorisk neuron drive, mens dorsal vagal dominans producerer hypoton kollaps og fascial densifikation.\n\nPolyvagal teori leverer det neurofysiologiske substrat: neuroception af fare vedligeholder defensiv autonom tilstand som fastholder myofasciale holding patterns. TRE-induceret tremor modulerer den autonome tilstand mod ventral vagal regulering, hvilket sekundært faciliterer myofascial release og armor-dissolution. Denne mekanisme forklarer klinisk observeret sammenhæng mellem autonom re-regulering og muskulær frigivelse.",
            sclerose: "Spasticitet ved sclerose har to komponenter: en neurologisk fra demyelinisering og en autonom fra kronisk nervesystem-dysregulering. Polyvagal teori forklarer den autonome komponent: vedvarende neuroception af fare holder musklerne i defensiv kontraktion ovenpå den neurologiske spasticitet.\n\nNår TRE bringer nervesystemet i ro via vagal aktivering, reduceres den autonome komponent markant. Bioenergetisk forståelse af grounding og containment hjælper desuden med at genetablere kropslig stabilitet. Denne dobbelte tilgang — polyvagal regulering plus bioenergetisk grounding — er særligt effektiv ved sclerose-relateret spasticitet.",
            oevelser: "Kombiner grounding med vejrtrækning for dobbelt effekt: stå med bøjede knæ i grounding-position og ånde langsomt ud i 8 tæl. Grounding aktiverer proprioceptive sikkerhedssignaler mens den forlængede udånding stimulerer vagusnerven. Denne kombination adresserer både det bioenergetiske panser og den polyvagale dysregulering.\n\nEfter grounding gå direkte til TRE-tremor i rygleje. Vibrationerne fra grounding-øvelsen forbereder musklerne, og den vagale aktivering fra vejrtrækningen gør nervesystemet klar til at modtage tremoren. Læg mærke til forskellen: tremoren kommer typisk hurtigere og breder sig mere naturligt efter kombineret grounding og vejrtrækning."
        },
        'polyvagal-psykologi': {
            klient: "En rolig terapeut hjælper dit nervesystem med at finde ro — det er ikke bare en følelse, men en målbar fysiologisk proces. Når din terapeut er afslappet og til stede, opfanger dit nervesystem den ro og begynder selv at regulere sig ned. Det kaldes co-regulering.\n\nPolyvagal teori forklarer hvorfor: dit sociale engagementsystem scanner konstant andre mennesker for signaler om sikkerhed eller fare. Terapeutens rolige stemme, afslappede ansigt og stabile vejrtrækning sender sikkerhedssignaler der hjælper dit nervesystem med at skifte fra alarm til ro.",
            fusion: "I Body Fusion Work informerer polyvagal teori den psykologiske praksis på et fysiologisk niveau. Michael Morin Nissen, autoriseret psykolog og certificeret TRE Trainer, bruger sin co-regulering aktivt — hans nervesystems ro stabiliserer deltagerne via tilstedeværelse og kontakt, særligt vigtigt fordi holdet er fysisk krævende og arbejder intensivt med følelsesmæssigt udtryk.\n\nPolyvagal forståelse og klinisk psykologi sikrer sammen at Body Fusion Works hårde arbejde med core-styrkelse, energiflow og rumning af energi sker trygt. Bioenergetik (Lowen), TRE (Berceli) og elementer fra yoga, tai chi og qi gong kræver at deltagerne føler sig sikre nok til at presse kroppen — kontakt og tilstedeværelse er forudsætningen.",
            videnskab: "Provider's autonome tilstand modulerer klientens via ventral vagale pathways og det sociale engagementsystem. Interbrain synchrony — dokumenteret via simultane EEG-målinger — viser neural entrainment mellem terapeut og klient der korrelerer med terapeutisk outcome.\n\nAutonom co-regulering opererer via spejlneuroner, prosodisk signalering og respiratorisk entrainment. Terapeutens HRV-mønster influerer klientens via autonomic synchrony. Ved polyvagalt dysregulerede klienter fungerer terapeutens regulerede autonome tilstand som ekstern ventral vagal modulator der stabiliserer klientens window of tolerance for somatisk processing.",
            sclerose: "Ved sclerose er nervesystemet ofte kronisk dysreguleret — både fra sygdommens neurologiske effekt og den vedvarende stress. Co-regulering gennem den terapeutiske relation bliver derfor særligt vigtig: terapeutens rolige, regulerede nervesystem fungerer som en 'ekstern regulator' klienten kan låne fra.\n\nDette er ikke blot en psykologisk komfort — det er polyvagal neurofysiologi i praksis. Terapeutens tilstedeværelse sender neuroceptive sikkerhedssignaler der hjælper klientens nervesystem med at finde ro. For mennesker med sclerose, hvis egen reguleringskapacitet er belastet, er denne co-regulering ofte afgørende for at TRE kan virke.",
            oevelser: "Synkroniseret vejrtrækning er en konkret co-reguleringsøvelse: terapeut og klient ånder sammen — ind i 4 tæl, ud i 8 tæl. Terapeutens rolige rytme fungerer som pacemaker for klientens nervesystem via autonomisk synkronisering. Denne øvelse aktiverer vagusnerven og etablerer den polyvagale sikkerhed der er forudsætning for dybere kropsarbejde.\n\nØjenkontaktøvelsen bygger videre: hold blød øjenkontakt med terapeuten i 30 sekunder mens I ånder sammen. Dit sociale engagementsystem aktiveres og sender sikkerhedssignaler til hjernestammen. Mange oplever en umiddelbar fornemmelse af ro og forbindelse der gør den efterfølgende TRE-tremor dybere og mere tryg."
        },
        'bioenergetik-psykologi': {
            klient: "Terapeuten skal selv være afslappet og til stede i sin egen krop for at kunne hjælpe dig med at slippe dit panser. Bioenergetik kalder dette 'embodiment' — terapeuten har selv arbejdet med sin krop og kender processen indefra. Det er ikke nok at vide hvad der skal ske.\n\nNår terapeuten er grounded og vibrerende til stede, mærker du det intuitivt. Dit nervesystem opfanger terapeutens kropslige ro og begynder selv at slappe af. Spejlneuroner og autonomisk synkronisering betyder at terapeutens kropslige tilstand direkte påvirker din — embodiment er et terapeutisk redskab.",
            fusion: "Body Fusion Work forener bioenergetisk kropsforståelse med klinisk psykologisk kompetence i en fysisk krævende praksis. Michael Morin Nissens egen kropslige tilstedeværelse — grounding, vibration og åben vejrtrækning — er et aktivt redskab der skaber den tryghed deltagerne behøver for at arbejde hårdt med kroppens struktur.\n\nSom autoriseret psykolog og certificeret TRE Trainer med bioenergetisk uddannelse bringer Michael en sjælden dobbelt kompetence. Denne integration sikrer at core-styrkelse, energiflow og følelsesmæssigt udtryk sker trygt. Body Fusion Work blander bioenergetik (Lowen), TRE (Berceli), yoga, tai chi og qi gong — kontakt og tilstedeværelse er fundamentet for den intensive praksis.",
            videnskab: "Provider's somatiske tilstand modulerer klientens via mirror neurons, autonomic synchrony og interbrain entrainment. Bioenergetisk 'embodiment' — terapeutens egen kropslige regulering og vibratoriske tilstand — har neurofysiologisk substrat i spejlneuron-systemet og vagal co-regulering.\n\nSimultane fysiologiske målinger viser at terapeutens HRV, respirationsmønster og muskeltonus influerer klientens tilsvarende parametre via autonomisk synkronisering. Ved bioenergetisk arbejde med character armor er denne co-regulering særligt kritisk: klientens defensive muskelspænding mildnes hurtigere når terapeutens egen krop er reguleret og vibratorisk til stede.",
            sclerose: "Med sclerose er kroppen spastisk, spændt og ofte forbundet med frustration og tab. Terapeutens embodied afslappethed bliver en særligt kraftfuld intervention — ikke bare psykologisk tryghed, men direkte fysiologisk påvirkning via spejlneuroner og autonomisk synkronisering.\n\nTerapeutens ro påvirker direkte klientens nervesystem og kan hjælpe spastiske muskler med at slippe. En bioenergetisk trænet terapeut der selv er grounded og vibrerende til stede, tilbyder klientens krop en model for afslapning. For scleroseramte, hvis krop sjældent oplever dyb ro, kan denne co-regulering være transformativ.",
            oevelser: "Terapeuten demonstrerer grounding-øvelsen i sin egen krop først: bøjede knæ, afslappede skuldre, dyb vejrtrækning. Du observerer og mærker terapeutens kropslige ro. Derefter guider terapeuten dig ind i din egen grounding — tilpasset dit udgangspunkt — mens terapeutens spejlende tilstedeværelse understøtter processen.\n\nEn bioenergetisk embodiment-øvelse: sid overfor terapeuten med fødderne på gulvet. Terapeuten placerer hænderne under dine fødder som støtte. Pres let ned mod terapeutens hænder mens du ånder ud. Denne øvelse kombinerer grounding, kontakt og co-regulering — du mærker terapeutens stabilitet direkte gennem berøringen og din krop begynder at matche den ro."
        },
        'tre-kropspsykoterapi': {
            klient: "TRE er en del af den kropsorienterede psykoterapeutiske tradition. Tremor er en af de mest direkte veje til at forløse spændinger i kroppen — enklere end mange andre kropsøvelser og tilgængelig for næsten alle. Sammen med vejrtrækning, grounding og bevægelse giver det kroppen flere redskaber.\n\nKropsorienteret psykoterapi ser kroppen som indgang til healing, ikke bare som et redskab. TRE passer perfekt ind i denne forståelse ved at aktivere kroppens egen intelligens. Du behøver ikke analysere eller forstå — kroppen ved hvad den skal slippe, og tremoren giver den lov.",
            fusion: "Body Fusion Work integrerer TRE (Berceli) med kropsorienteret psykoterapeutisk tradition i en fysisk krævende praksis. Michael Morin Nissen blander bioenergetik (Lowen), TRE og elementer fra yoga, tai chi og qi gong for at styrke kroppens struktur og kapacitet til at rumme følelser og energi. Vejrtrækning, grounding og core-styrkelse forbereder kroppen til dybere arbejde.\n\nDenne strukturopbygning sikrer at kroppen er klar til at slippe snarere end at holde imod. Kropsorienteret psykoterapi leverer den somatiske forståelse, TRE den neurogene mekanisme. Body Fusion Work er noget mere hårdt end almindelig TRE — netop fordi der arbejdes intensivt med at opbygge den struktur der kan rumme energiflow, følelsesudtryk og tilstedeværelse.",
            videnskab: "TRE-induceret tremor og kropsorienterede interventioner — vejrtrækning, vibration, bevægelse — aktiverer overlappende neurofysiologiske pathways: vagal afferens, proprioceptiv feedback og interoceptiv processing. Kombineret effekt på autonomt nervesystem overstiger individuelle interventioners effekt via synergistisk bottom-up regulering.\n\nKropsorienteret psykoterapi leverer den kliniske ramme for sikker tremor-facilitering: titrering, pendulering og interoceptiv awareness-træning. TRE leverer den specifikke somatiske intervention. Integrationen giver bidirektionel potensering: kropsarbejde øger tremor-respons, og tremor uddyber efterfølgende kropsarbejde. Neuroimaging-studier viser øget insula-aktivering ved kombineret intervention.",
            sclerose: "For mennesker med sclerose er kropsorienteret psykoterapi den overordnede ramme, og TRE er et af de mest tilgængelige redskaber inden for den ramme. Tremor kan udføres liggende eller siddende og kræver minimal energi — en afgørende fordel ved kronisk træthed.\n\nKropsorienteret psykoterapi tilbyder desuden vejrtrækning, blid vibration og tilpassede bevægelser der supplerer TRE. Michael Morin Nissen har udviklet Body Fusion Work specifikt til mennesker med kronisk sygdom — en integration af bioenergetik, TRE og yoga-elementer tilpasset begrænset energi og mobilitet.",
            oevelser: "En typisk Body Fusion Work-session starter med stående grounding og vejrtrækning, fortsætter med vibrationsøvelser for benene og overgår til TRE-trætningsøvelser. Hele sekvensen bygger op mod tremor i rygleje. Fordi kroppen er varmet op og nervesystemet forberedt, kommer tremoren ofte dybere end ved TRE alene.\n\nPrøv selv en mini-sekvens: stå med bøjede knæ i 2 minutter (grounding), ånde dybt med åben mund i 1 minut (vejrtrækning), gør 10 tåhævninger og 10 knæbøjninger (trætning), og læg dig derefter ned med bøjede knæ og fodsåler samlet (tremor). Denne kombination af kropsorienterede teknikker og TRE giver en mere komplet oplevelse end én teknik alene."
        },
        'tre-trauma': {
            klient: "TRE er udviklet specifikt til at hjælpe kroppen med at slippe traumer og stress. Når noget overvældende sker, forbereder kroppen en forsvarsreaktion — men ofte bliver den afbrudt. Den uforløste energi sidder fast som kronisk spænding, uro eller følelsesløshed.\n\nDe 7 TRE-øvelser aktiverer kroppens naturlige evne til at ryste den fastlåste spænding fri, uden at du behøver tale om det svære. Tremoren hjælper kroppen med at fuldføre den afbrudte reaktion. Mange oplever lettelse, varme og frihed når kroppen endelig slipper det den har holdt fast i årevis.",
            fusion: "I Body Fusion Work adresserer Michael Morin Nissen trauma og stress ved at styrke kroppens struktur først. Holdet blander TRE (Berceli) med bioenergetik (Lowen) og elementer fra yoga, tai chi og qi gong i en fysisk krævende praksis. For mange er det problematisk at løsne følelser og energi hvis kroppen ikke har strukturen til at rumme dette arbejde.\n\nDenne tilgang er særligt kraftfuld ved stress og trauma: core-styrkelse og energiflow-øvelser opbygger den kropslige kapacitet der er nødvendig for tryg forløsning. TRE-tremoren fuldender afbrudte forsvarsreaktioner, mens bioenergetisk udtryksarbejde giver kroppen mulighed for at udtrykke det der har været tilbageholdt — alt inden for en struktur der kan bære det.",
            videnskab: "TRE adresserer traumatisk stress på neurobiologisk niveau: tremor faciliterer motorisk completion via central pattern generators i hjernestammen, nedregulerer HPA-akse aktivering med reduktion af cortisol og adrenalin, og modulerer amygdala-medieret frygtrespons gennem afferent proprioceptiv signalering.\n\nSærligt effektiv ved somatisk lagret trauma der er primært subkortikalt og utilgængeligt for kognitiv top-down processing. Incomplete defensive responses vedligeholdt via periaqueductal gray og brainstem reflexer adresseres direkte af tremor-induceret motorisk activation. Efterfølgende autonomt shift fra defensiv til eksplorativ tilstand faciliterer reconsolidation af traumatisk hukommelse.",
            sclerose: "Sclerose-forløbet indeholder ofte multiple traumatiske oplevelser: det initiale diagnosechok, hvert nyt attak, tab af funktioner, bivirkninger af behandling, og den kroniske usikkerhed om fremtiden. Disse oplevelser ophober stress i kroppen og holder nervesystemet i alarm.\n\nTRE giver kroppen mulighed for at forløse den ophobede stress uden at kræve energikrævende samtaleprocesser — en afgørende fordel når energi er begrænset. Tremoren arbejder direkte med de afbrudte forsvarsreaktioner fra diagnosetidspunkt og tilbageslag, så kroppen kan bevæge sig fra kronisk alarm til ro.",
            oevelser: "TRE-øvelse 5 — stående med hænderne på lænden og hofterne presset fremad — strækker psoas-musklen der ofte holder fastlåst frygt og flugtrespons. Hold stillingen i 1-2 minutter og mærk strækket dybt i hoften. Øvelse 6, vægstøtten, trætter de store benmuskelgrupper der mobiliseres ved kamp og flugt.\n\nI tremorfasen kan kroppen spontant lave bevægelser der ligner sparkende ben, roterende bækken eller vibrerende mave — dette er completion af afbrudte forsvarsreaktioner. Lad bevægelserne komme uden at kontrollere dem. En vigtig øvelse efter tremor er orientering: åbn øjnene, kig rundt i rummet, og registrer at du er her og i sikkerhed. Denne simple handling signalerer til nervesystemet at faren er overstået."
        },
        'tre-kronisksygdom': {
            klient: "TRE er blevet brugt med over 1000 mennesker med sclerose gennem den danske Scleroseforening over 13 år. Metoden tilpasses altid din aktuelle tilstand og kan udføres siddende, liggende eller stående. Intensiteten reguleres efter dit energiniveau den dag.\n\nMange oplever mindre spasticitet, bedre søvn, mere energi og færre smerter allerede efter få sessioner. To videnskabelige studier fra Scleroseforeningen bekræfter forbedret livskvalitet. TRE er ikke en kur, men et kraftfuldt redskab til selvregulering — noget du kan gøre hjemme, i dit eget tempo.",
            fusion: "Body Fusion Work ved sclerose og kronisk sygdom repræsenterer Michaels mest tilpassede integration. Over 13 års erfaring i Scleroseforeningen har formet en skånsom version af den normalt fysisk krævende praksis, hvor intensiteten afstemmes med energikapacitet og sygdomsaktivitet.\n\nBody Fusion Work blander bioenergetik (Lowen), TRE (Berceli) og elementer fra yoga, tai chi og qi gong. Ved kronisk sygdom tilpasses core-styrkelse og energiflow-øvelser, og kroppens struktur opbygges gradvist. Energiforvaltning er centralt princip. Denne specialisering har gjort Body Fusion Work til en anerkendt tilgang for over 1000 mennesker med sclerose — dokumenteret i to videnskabelige studier.",
            videnskab: "TRE ved kronisk sygdom adresserer autonomt nervesystem-dysregulering som dokumenteret komorbid faktor ved MS. Reduceret HRV og forhøjet sympatisk baseline er karakteristisk. TRE modulerer autonom balance mod parasympatisk dominans, hvilket reducerer defensiv muskeltonus og potentielt neuroinflammation via den cholinerge antiinflammatoriske pathway.\n\nEt randomiseret kontrolleret studie viste signifikant reduktion af spasticitet og smerte samt gradvis forbedring i gangfunktion (5 U-turn test). Et pilotstudie dokumenterede signifikant reduktion af fatigue (MFIS score fra 43.7 til 22.0). Disse resultater understøtter TRE som komplementær intervention ved MS.",
            sclerose: "TRE er ikke en kur mod sclerose, men det er et kraftfuldt redskab til at forbedre din hverdag. Over 1000 mennesker med sclerose har allerede brugt metoden med gode resultater. Øvelserne tilpasses altid din aktuelle tilstand — du bestemmer tempo og intensitet.\n\nStart med korte sessioner på 10-15 minutter, mærk efter bagefter, og byg langsomt op. Din krop ved hvad den har brug for — TRE giver den et sprog til at udtrykke det. To videnskabelige studier fra den danske Scleroseforening bekræfter at TRE forbedrer livskvaliteten for mennesker med sclerose.",
            oevelser: "Tilpassede TRE-øvelser ved sclerose: siddende i en stol med fødderne fladt på gulvet, lav ankelrotationer (øvelse 1) og tåhævninger (øvelse 2) uden at rejse dig. I stedet for vægstøtte, pres knæene mod hinanden med en pude imellem i 2-3 minutter — dette trætter adduktorerne skånsomt.\n\nTremorfasen foregår liggende med fuld støtte: pude under hovedet, eventuelt under knæene. Start med knæene bøjet op mod loftet, saml fodsålerne og lad knæene falde langsomt udad. Tremor begynder typisk i lårene. Hold sessionen kort — 10-15 minutter totalt — og mærk efter dagen efter. Hvis du er mere træt, var det for meget. Byg langsomt op over uger."
        },
        'polyvagal-kropspsykoterapi': {
            klient: "Når dit nervesystem er i alarm, er kroppen spændt og låst — det er svært at mærke følelser, slappe af eller være til stede. Polyvagal teori forklarer denne tilstand som sympatisk hyperaktivering. Kropsorienteret psykoterapi bruger vejrtrækning, øvelser og vibration til at hjælpe nervesystemet tilbage til ro.\n\nDet er polyvagal teori omsat til praksis: langsomme udåndinger aktiverer vagusnerven, grounding-øvelser signalerer sikkerhed, og blid vibration stimulerer det parasympatiske system. Når nervesystemet finder ro, kan kroppen slippe og healing kan begynde — præcis der hvor teorien viser det er muligt.",
            fusion: "I Body Fusion Work forbinder polyvagal teori og kropsorienteret psykoterapi sig i forståelsen af hvornår kroppen kan presses og hvornår den skal støttes. Michael Morin Nissen aflæser deltagernes autonome tilstand og tilpasser den fysisk krævende praksis — bioenergetik (Lowen), TRE (Berceli), yoga, tai chi og qi gong — efter nervesystemets kapacitet.\n\nGrounding og vejrtrækning etablerer den polyvagale sikkerhed der er nødvendig for intensivt strukturarbejde. Core-styrkelse og energiflow-øvelser kræver at nervesystemet er i en tilstand der kan håndtere hård træning. Polyvagal teori forklarer hvorfor Body Fusion Works kropsorienterede tilgang virker — og guider dens præcise dosering mellem kontakt, tilstedeværelse og fysisk udfordring.",
            videnskab: "Kropsorienterede interventioner modulerer det polyvagale hierarki direkte: langsomme udåndinger med forlænget eksspiration øger RSA og vagal tone, proprioceptiv stimulation via grounding-øvelser påvirker neuroception af sikkerhed, og vibration aktiverer lavtærskel mechanoreceptorer der signalerer sikkerhed via afferent vagal pathway.\n\nDenne multimodale somatiske stimulation producerer målbar autonom re-regulering: øget HRV, reduceret sympatisk hudrespons og forbedret vagal tone. Interoceptiv awareness — faciliteret gennem kropsorienterede øvelser — korrelerer med præfrontal korteks-aktivering og emotionel reguleringskapacitet, hvilket udgør en bottom-up pathway til kognitiv integration.",
            sclerose: "Ved sclerose er nervesystemet ofte fastkørt i alarm- eller nedlukningstilstand — polyvagal dysregulering er dokumenteret komorbiditet. Kropsorienteret psykoterapis redskaber giver konkrete måder at hjælpe nervesystemet mod ro-tilstanden: blid vejrtrækning, tilpassede grounding-øvelser og skånsom vibration.\n\nDet er polyvagal teori omsat til praksis i en krop der har brug for skånsom tilgang. Alle interventioner tilpasses energiniveau og aktuel tilstand. Når nervesystemet finder ro, reduceres spasticitet, træthed og smerte — fordi den autonome komponent af disse symptomer er direkte polyvagalt medieret.",
            oevelser: "Polyvagal vejrtrækning kombineret med kropsorienterede øvelser: lig på ryggen og placer én hånd på brystet, én på maven. Ånde ind i 4 tæl — mærk maven hæve sig først, derefter brystet. Ånde ud i 8 tæl med let sammenknebne læber. Gentag 10 gange. Denne øvelse aktiverer vagusnerven og skifter nervesystemet mod ro.\n\nTilføj derefter blid vibration: stadig liggende, bøj knæene op og lad dem vibrere let fra side til side i 1-2 minutter. Denne bevægelse kombinerer polyvagal aktivering med kropsorienteret vibration og forbereder bækkenet til TRE-tremor. Afslut med butterfly-position for at lade tremoren komme naturligt."
        },
        'polyvagal-trauma': {
            klient: "Polyvagal teorien forklarer hvorfor traumer sidder fast i kroppen: nervesystemet er låst i alarm eller nedlukning og kan ikke finde vej tilbage til sikkerhed af sig selv. Forståelsen af de tre 'gear' — ro, alarm og nedlukning — hjælper dig med at genkende hvor du befinder dig.\n\nNår du forstår at din uro, angst eller følelsesløshed er nervesystemets forsøg på at beskytte dig, ændrer det perspektivet. Det er ikke noget galt med dig — dit nervesystem gør sit arbejde. Med den forståelse kan du begynde at finde vejen tilbage til sikkerhed og ro.",
            fusion: "Body Fusion Work bruger polyvagal teori som sikkerhedsramme for det intensive kropsarbejde med stress og trauma. Michael Morin Nissen, autoriseret psykolog og certificeret TRE Trainer, monitorerer deltagernes autonome tilstand og tilpasser den fysisk krævende praksis — bioenergetik (Lowen), TRE (Berceli), yoga, tai chi og qi gong — til nervesystemets kapacitet.\n\nPolyvagal forståelse sikrer at kroppens struktur styrkes i et tempo der ikke overbelaster. Core-styrkelse og energiflow opbygger den kapacitet kroppen behøver for at rumme frigjort energi og følelser. Ved tegn på overwhelm skiftes til grounding og kontakt. Princippet er at struktur altid opbygges før intensiv følelsesmæssig forløsning.",
            videnskab: "Traumatisk stress manifesterer sig som polyvagal dysregulering: forhøjet sympatisk tonus, reduceret vagal bremse, og dysreguleret neuroception der vedligeholder defensive autonome tilstande. Amygdala-hyperreaktivitet og præfrontal hypoaktivitet reflekterer tab af ventral vagal modulering af frygtkredsløbet.\n\nTraumebehandling kræver genoprettelse af polyvagal fleksibilitet — evnen til adaptivt at skifte mellem autonome tilstande. TRE adresserer dette direkte ved at facilitere motorisk completion af incomplete defensive responses, hvilket signalerer til periaqueductal gray og hjernestamme at mobiliseringsresponsen er afsluttet. Efterfølgende ventral vagal re-engagement dokumenteres via forbedret HRV.",
            sclerose: "Sclerose skaber en dobbelt polyvagal belastning: sygdommen selv stresser nervesystemet gennem neuroinflammation og demyelinisering, og traumet ved at leve med kronisk sygdom holder det i alarm. Denne dobbelte dysregulering forværrer symptomerne direkte.\n\nPolyvagal forståelse hjælper med at se hvorfor symptomerne forværres under stress: neuroception af fare intensiverer spasticitet, træthed og smerte via den autonome komponent. Og hvorfor ro-tilstanden er så afgørende: ventral vagal regulering reducerer inflammation og forbedrer immunfunktion. At bringe nervesystemet i ro er ikke luksus — det er aktiv symptombehandling.",
            oevelser: "Pendulering er en kerneøvelse der forbinder polyvagal regulering med traumeforløsning: mærk et sted i kroppen der føles neutralt eller behageligt (en ressource), og skift derefter opmærksomheden til et sted med spænding eller ubehag. Bliv der kort, og pendul derefter tilbage til ressourcen. Denne oscillering træner nervesystemets fleksibilitet.\n\nKombiner med TRE: under tremor, hvis intensiteten bliver for høj, luk knæene sammen (dæmp tremor) og find din ressource — fødderne mod gulvet, hænderne på maven, vejrtrækningen. Når du er klar, åbn knæene igen. Denne aktive titrering er polyvagal selvregulering i praksis og bygger gradvist nervesystemets kapacitet til at håndtere mere intensitet."
        },
        'polyvagal-kronisksygdom': {
            klient: "Når du har en kronisk sygdom som sclerose, er dit nervesystem ofte i konstant alarmberedskab — klar til den næste forværring, det næste attak, det næste tab. Polyvagal teorien forklarer hvorfor denne vedvarende alarm direkte forværrer dine symptomer.\n\nNår nervesystemet er i kronisk stress, øges inflammation, spasticitet tilspidses, og energien bruges på beredskab i stedet for genopladning. At finde ro er ikke bare rart — det er medicinsk vigtigt. TRE giver dig et konkret redskab til at hjælpe nervesystemet med at skifte fra alarm til healing.",
            fusion: "Ved sclerose er polyvagal forståelse afgørende for Body Fusion Works tilpassede tilgang. Michael Morin Nissen aflæser det kompromitterede nervesystems autonome tilstand og justerer den normalt fysisk krævende praksis — bioenergetik (Lowen), TRE (Berceli), yoga, tai chi og qi gong — til den enkeltes kapacitet.\n\nPolyvagal regulering guider den tilpassede strukturopbygning: core-styrkelse doseres, energiflow-øvelser forenkles, og kroppens evne til at rumme energi opbygges gradvist. Spasticitet, fatigue og smerte forværres af kronisk sympatisk aktivering, og Body Fusion Works polyvagalt informerede tilgang adresserer netop denne autonome komponent — det nervesystemet selv kan regulere.",
            videnskab: "MS-patienter udviser signifikant reduceret heart rate variability og parasympatisk tonus sammenlignet med raske kontroller. Kronisk autonom dysregulering accelererer potentielt neuroinflammation via manglende aktivering af den cholinerge antiinflammatoriske pathway — vagal efferens til milt reducerer TNF-alpha produktion.\n\nVagal nerve stimulation — mekanisk via TRE-induceret tremor eller elektrisk via implanterede devices — er undersøgt som antiinflammatorisk intervention. TRE tilbyder en non-invasiv tilgang til vagal modulering. Pilotstudier viser forbedret autonom balance efter TRE-intervention hos MS-patienter, målt via spektralanalyse af HRV.",
            sclerose: "Dit nervesystem arbejder overarbejde med sclerose. Polyvagal teorien viser at når nervesystemet er i kronisk alarm, forværres inflammation, spasticitet intensiveres, og energien bruges på beredskab i stedet for genopladning. Det er en ond cirkel der kan bryde med de rigtige redskaber.\n\nAt lære at bringe nervesystemet i ro er ikke luksus — det er en aktiv del af din sundhedsindsats. TRE giver dig et konkret, skånsomt redskab til at skifte nervesystemets gear fra alarm til ro. Mange scleroseramte oplever at regelmæssig TRE-praksis reducerer både spasticitet og træthed.",
            oevelser: "En daglig nervesystem-reguleringsøvelse for scleroseramte: lig ned med bøjede knæ og placer hænderne på maven. Ånde ind i 4 tæl, ud i 8 tæl i 3 minutter. Denne simple øvelse aktiverer vagusnerven og skifter nervesystemet fra alarm til ro. Gør den fast — morgen og aften — for kumulativ effekt.\n\nTilføj TRE 2-3 gange ugentligt: efter vejrtrækningsøvelsen, saml fodsålerne og lad knæene falde udad. Start med kun 5 minutters tremor og byg op. Kombiner med siddende grounding på dage med lav energi — blot fødderne fladt på gulvet, mærk kontakten, og ånde langsomt. Konsistens er vigtigere end intensitet ved kronisk sygdom."
        },
        'kropspsykoterapi-trauma': {
            klient: "Traumer sidder i kroppen, ikke kun i hovedet. Derfor er kropsarbejde så vigtigt i traumebehandling — du kan ikke tale dig ud af noget der sidder som spænding i musklerne, knuder i maven eller konstant uro. Kropsorienteret psykoterapi giver kroppen lov til at forløse det den holder fast i.\n\nGennem vejrtrækning, bevægelse, vibration og TRE arbejder du direkte med det kropslige. Mange oplever at følelser og erindringer dukker op spontant når kroppen slipper — integration sker naturligt når kroppen er klar. Det er healing nedefra og op.",
            fusion: "I Body Fusion Work mødes kropsorienteret psykoterapi og traumeforståelse i en fysisk krævende praksis. Bioenergetisk kropsaflæsning (Lowen) identificerer hvor traumatisk materiale sidder som muskelspænding og tilbageholdt udtryk. For mange er det problematisk at løsne følelser og energi hvis kroppen ikke har strukturen til at rumme arbejdet.\n\nMichael Morin Nissen blander bioenergetik, TRE (Berceli), yoga, tai chi og qi gong i en intens praksis der styrker core og opbygger kroppens kapacitet. Udtryksarbejde — vejrtrækning, lyd, bevægelse — giver kroppen mulighed for at udtrykke tilbageholdte følelser inden for en stærk struktur. Deltagerne lærer at rumme energi og styrke kontakt og tilstedeværelse.",
            videnskab: "Traumatisk materiale lagres primært subkortikalt som sensomotoriske og autonome mønstre i amygdala, periaqueductal gray og hjernestamme — utilgængeligt for ren top-down kognitiv processing. Kropsorienterede interventioner aktiverer bottom-up pathways direkte.\n\nProprioceptiv stimulation, interoceptiv awareness-træning og motorisk completion via tremor faciliterer reconsolidation af traumatisk hukommelse: det implicit lagrede materiale gøres tilgængeligt for præfrontal processing og narrativ integration. Neuroimaging viser øget insula-aktivering og præfrontal-amygdala connectivity efter somatisk intervention, indikerende forbedret interoceptiv-kognitiv integration.",
            sclerose: "Mennesker med sclerose bærer ofte på multiple traumer: det initiale diagnosechok, hvert nyt attak med tab af funktion, invasive medicinske procedurer, og den kroniske usikkerhed om fremtiden. Disse oplevelser lagres i kroppen som spænding, forsvar og alarm.\n\nKropsorienteret psykoterapi tilbyder en skånsom måde at arbejde med dette ophobede trauma — gennem kroppen, i et tempo der respekterer din energi og dine begrænsninger. TRE, tilpasset vejrtrækning og blid bevægelse giver mulighed for forløsning uden at kræve de energireserver som samtalebaseret traumebehandling kræver.",
            oevelser: "En kropslig scanning er grundøvelsen: lig ned, luk øjnene og scan langsomt fra fødderne til hovedet. Læg mærke til hvor der er spænding, varme, kulde eller følelsesløshed — uden at ændre noget. Denne interoceptive awareness-øvelse træner forbindelsen mellem krop og bevidsthed og afslører hvor traumatisk stress sidder.\n\nEfter scanningen vælg det område med mest spænding og ånde bevidst ind i det i 5 vejrtrækninger. Derefter gå til TRE-tremor og læg mærke til om tremoren bevæger sig mod netop det område. Kropsorienteret psykoterapis princip om at følge kroppen kombineret med TRE's tremor giver en præcis og skånsom traumeforløsning der arbejder der hvor kroppen er klar."
        },
        'kropspsykoterapi-kronisksygdom': {
            klient: "Kropsorienteret psykoterapi tilpasses din kroniske sygdom. Det handler om at genetablere kontakt med kroppen som en ressource — ikke som en fjende der svigter dig. Skånsomme øvelser, vejrtrækning og vibration kan gøre en stor forskel for spasticitet, smerte og energi.\n\nMichael Morin Nissen har udviklet Body Fusion Work specifikt til mennesker med kronisk sygdom — en blanding af bioenergetik, TRE og yoga-elementer tilpasset begrænset energi. Øvelserne kan gøres siddende eller liggende, og intensiteten justeres altid efter din tilstand den dag.",
            fusion: "Body Fusion Work ved sclerose bygger på en tilpasset version af den normalt fysisk krævende praksis. Michael Morin Nissen har gennem 13 års erfaring i Scleroseforeningen tilpasset blandingen af bioenergetik (Lowen), TRE (Berceli), yoga, tai chi og qi gong til mennesker med begrænset energi og kompromitteret nervesystem.\n\nDen tilpassede Body Fusion Work fokuserer stadig på at styrke kroppens struktur, men i et skånsomt tempo. Core-styrkelse doseres, energiflow-øvelser forenkles, og kroppens evne til at rumme følelser opbygges gradvist. For scleroseramte handler det om at genetablere kroppen som ressource — at opbygge struktur og kontakt i stedet for kun at opleve symptomer og begrænsninger.",
            videnskab: "Kropsorienterede interventioner ved kronisk sygdom adresserer den autonome dysregulering der er komorbid med somatisk sygdom. Tilpasset somatisk stimulation — doseret vejrtrækning, mild vibration, skånsom bevægelse — modulerer autonom balance uden at overskride den begrænsede energikapacitet.\n\nVed MS er dette særligt kritisk: for intensiv intervention kan trigge fatigue-forværring og symptom-flare. Optimal dosering kræver klinisk erfaring med populationen. Studier viser at tilpassede body-mind interventioner forbedrer livskvalitet, reducerer fatigue og mildner spasticitet — men kun ved korrekt dosering der respekterer den neurologiske sårbarhed.",
            sclerose: "Kropsorienteret psykoterapi kan tilpasses præcis din situation med sclerose. Alle øvelser kan gøres siddende eller liggende, og intensiteten justeres efter din energi den dag. Det handler om at give kroppen gode oplevelser — at mærke at den kan slappe af, at den kan finde ro.\n\nBody Fusion Work er udviklet specifikt til dig: en blanding af blid bioenergetik, TRE og yoga-elementer der respekterer din energi. Mange scleroseramte oplever at kroppen langsomt kan genetableres som en ressource i stedet for kun at være et sted fyldt med symptomer og begrænsninger.",
            oevelser: "Body Fusion Work tilpasset sclerose: start siddende i en stol. Placer fødderne fladt på gulvet og mærk kontakten (grounding). Ånde dybt med hænderne på maven i 2 minutter (vejrtrækning). Lav siddende tåhævninger og ankelbevægelser i 2 minutter (trætning). Læg dig derefter ned med støtte under hoved og knæ.\n\nI liggende stilling: bøj knæene op, pres dem let mod hinanden med en pude imellem i 2 minutter (adduktor-trætning). Slap af, saml fodsålerne og lad knæene falde udad for tremor. Hold sessionen på 10-15 minutter totalt. Denne tilpassede Body Fusion Work-sekvens giver den fulde integration af kropsøvelser og TRE uden at overskride begrænset energi."
        },
        'kropspsykoterapi-bioenergetik': {
            klient: "Bioenergetik er det historiske fundament for den kropsorienterede tilgang. Alexander Lowens arbejde med muskulært panser, grounding og energiflow — inspireret af hans terapeut Wilhelm Reich — er kernen i at forstå hvordan kroppen holder fast, og hvordan den kan slippe.\n\nGrounding handler om at mærke kontakten med jorden og kroppen — at stå solidt. Energiflow handler om at lade følelser og livskraft bevæge sig frit. Når panseret slipper gennem øvelser, vejrtrækning og tremor, vender denne naturlige flow tilbage. Bioenergetik er ikke bare teori — det er en levende praksis med over 60 års erfaring.",
            fusion: "Body Fusion Work er dybt forankret i den bioenergetiske tradition fra Lowen. Michael Morin Nissens uddannelse fra Norddeutsches Institut für Bioenergetische Analyse giver ham den kropslige forståelse af energetisk flow, strukturel kapacitet og kroppens iboende pulsation der er fundamental for den fysisk krævende praksis.\n\nI Body Fusion Work suppleres bioenergetik med TRE (Berceli) og elementer fra yoga, tai chi og qi gong. Fokus er på at styrke kroppens struktur — særligt core — så den kan rumme den energi og de følelser der frigøres. Denne tilgang er noget mere hårdt end traditionel kropspsykoterapi, netop fordi der arbejdes intensivt med at opbygge strukturel kapacitet, energiflow og tilstedeværelse.",
            videnskab: "Bioenergetisk analyse og kropsorienteret psykoterapi deler neurobiologisk grundlag: kroniske muskelspændingsmønstre (armor) reflekterer dysreguleret autonomt nervesystem medieret via gamma-motorisk neuron overaktivering og fascial remodellering. Begge tilgange adresserer dette somatiske substrat.\n\nInterventioner der simultant adresserer myofascial holding og autonom regulering viser stærkere effekt end unimodale tilgange i kliniske studier. Bioenergetiske grounding-øvelser modulerer proprioceptiv signalering og stabiliserer autonom regulering, mens tremor-baserede interventioner faciliterer fascial reorganisering. Integration af begge mekanismer forklarer den øgede effektivitet ved kombineret kropsorienteret tilgang.",
            sclerose: "Bioenergetikkens fokus på grounding — kontakten med kroppen og jorden — er særligt vigtigt ved sclerose, hvor kroppen kan føles utryg og upålidelig. At mærke fødderne mod gulvet, at stå (eller sidde) solidt, giver en basal tryghed som mange scleroseramte savner.\n\nAlexander Lowens begreb om 'vibrancy' — en levende, vibrerende krop — er terapeutisk mål også ved kronisk sygdom. At arbejde med grounding og energiflow i et tilpasset tempo hjælper med at genetablere et positivt forhold til kroppen. Bioenergetik blev brugt med scleroseramte allerede før TRE blev integreret.",
            oevelser: "Grounding som forberedelse til kropsarbejde: stå (eller sid) med fødderne i hoftebredde og mærk kontakten med gulvet. Bøj knæene let og lad vægten synke ned. Hold i 2 minutter og mærk den naturlige vibration i benene — Lowens 'vibrancy'. Denne bioenergetiske grundøvelse stabiliserer nervesystemet og forbereder kroppen.\n\nTilføj bioenergetisk bueøvelse: stående med hænderne på lænden, pres hofterne let fremad og læn dig en anelse tilbage. Hold i 1 minut — dette åbner brystet og strækker hele forsiden. Kombiner med kropspsykoterapeutisk vejrtrækning: dyb indånding der fylder maven, lang udånding med åben mund. Denne sekvens fra bioenergetik til kropsorienteret psykoterapi bygger bro mellem de to traditioner."
        },
        'kropspsykoterapi-psykologi': {
            klient: "Kropsorienteret psykoterapi forbinder krop og sind i terapien. Du taler om det der er svært og mærker det i kroppen samtidig — spændinger, vejrtrækning, mavefornemmelser, uro. En psykolog der også arbejder med kroppen kan hjælpe dig på begge niveauer.\n\nNår du forstår dine reaktioner psykologisk og samtidig forløser dem kropsligt, sker der en dybere integration. Det er ikke nok bare at tale om det, og det er heller ikke nok bare at lave kropsøvelser — kombinationen giver varig forandring. Krop og sind healer sammen.",
            fusion: "I Body Fusion Work er kropsorienteret psykoterapi og klinisk psykologi integreret i en fysisk krævende praksis. Michael Morin Nissens dobbelte kompetence — autoriseret psykolog og certificeret TRE Trainer med bioenergetisk uddannelse — sikrer at den intensive blanding af bioenergetik (Lowen), TRE (Berceli), yoga, tai chi og qi gong tilpasses den enkeltes kapacitet.\n\nKontakt og tilstedeværelse er fundamentet for det hårde strukturarbejde: deltagernes oplevelse af sikkerhed bestemmer hvor intensivt der kan arbejdes med core-styrkelse, energiflow og følelsesmæssigt udtryk. Psykologisk forståelse guider doseringen, og co-regulering gennem Michaels tilstedeværelse forbinder det relationelle og det kropslige i en uadskillelig helhed.",
            videnskab: "Top-down processer (kognitiv psykoterapi, narrativ integration) og bottom-up processer (somatisk intervention, tremor, vejrtrækning) er komplementære reguleringsmekanismer. Præfrontal modulering af amygdala (top-down) og vagal afferens til præfrontal korteks via insula (bottom-up) udgør en bidirektionel reguleringsloop.\n\nOptimal terapeutisk effekt opnås ved integration af begge tilgange: bottom-up intervention faciliterer autonom re-regulering og affektiv tilgængelighed, top-down processing faciliterer narrativ integration og meningsdannelse. Neuroimaging viser at kombineret intervention producerer stærkere og mere varig ændring i amygdala-præfrontal connectivity end enten approach alene.",
            sclerose: "Med sclerose er der brug for begge dele: psykologisk støtte til at håndtere sygdommens følelsesmæssige belastning — sorg, frygt, frustration, identitetstab — og kropsarbejde til at hjælpe med de fysiske symptomer som spasticitet, smerte og træthed.\n\nEn terapeut der mestrer begge tilgange kan møde dig som et helt menneske — ikke bare en diagnose. Michael Morin Nissen har denne dobbelte kompetence og har arbejdet med scleroseramte i over 13 år. Samtale og kropsarbejde integreres i samme session, tilpasset din energi og dit behov den dag.",
            oevelser: "En integreret session kombinerer samtale og kropsøvelser: start med kort check-in om hvordan du har det (psykologisk kontakt), gå derefter til kropslig scanning — hvad mærker du? Hvor sidder spændingen? Terapeuten guider dig fra samtale til krop og tilbage igen, så begge niveauer integreres.\n\nEn konkret kombination: tal om det der fylder, og læg mærke til hvad der sker i kroppen mens du taler — strammer maven sig? Holder du vejret? Gå derefter til vejrtrækning og blid vibration rettet mod det kropslige. Afslut med kort refleksion: hvad ændrede sig? Denne vekslen mellem psykologisk forståelse og kropslig øvelse er kernen i integreret praksis."
        },
        'trauma-kronisksygdom': {
            klient: "Kronisk sygdom og trauma hænger tæt sammen på måder de fleste ikke tænker over. Selve diagnosen er traumatisk — pludselig usikkerhed, tab af kontrol, frygt for fremtiden. Hvert nyt attak, hvert tab af funktion, tilføjer lag af trauma. Og den vedvarende stress holder nervesystemet i alarmberedskab.\n\nDenne kroniske alarm forværrer direkte symptomerne: mere spasticitet, mere træthed, mere smerte. At arbejde med traumet er derfor ikke 'nice to have' — det er en vigtig del af at håndtere sygdommen. Når traumet forløses, kan nervesystemet finde ro, og symptomerne mildnes.",
            fusion: "Body Fusion Works tilpassede tilgang ved sclerose adresserer den dobbelte belastning: sygdommens traumatiske aspekter — diagnosechok, attakker, tab af funktioner — og den kroniske stress ved at leve med uforudsigelighed. Michael Morin Nissen, autoriseret psykolog og certificeret TRE Trainer, har tilpasset den normalt intensive praksis til det kompromitterede nervesystems kapacitet.\n\nBody Fusion Work blander bioenergetik (Lowen), TRE (Berceli), yoga, tai chi og qi gong. Ved sclerose doseres intensiteten omhyggeligt: core-styrkelse tilpasses, energiflow-øvelser forenkles, og kroppens struktur opbygges gradvist. Fokus er på at rumme energi og styrke kontakt — en forsigtig men effektiv tilgang der anerkender den dobbelte belastning af sygdom og trauma.",
            videnskab: "Traumatisk stress og kronisk sygdom deler neurobiologisk substrat: HPA-akse dysregulering med forhøjet cortisol, autonom ubalance med reduceret vagal tone, og neuroinflammation med forhøjede proinflammatoriske cytokiner. Ved MS forværrer kronisk stress neuroinflammation via forhøjet cortisol og nedsat vagal antiinflammatorisk aktivitet.\n\nTraumebehandling — herunder TRE — har potentiale til at reducere sygdomsaktivitet gennem autonom re-regulering og genaktivering af den cholinerge antiinflammatoriske pathway. Pilotstudier viser at body-mind interventioner der adresserer traumerelateret autonom dysregulering forbedrer MS-specifikke outcomes udover hvad ren symptombehandling opnår.",
            sclerose: "Din sclerose og din stress er tæt forbundne i en cirkel der forstærker sig selv. Stress fra sygdommen forværrer symptomerne, og forværrede symptomer skaber mere stress. Hvert attak, hvert tab, lægger et nyt lag af trauma ovenpå.\n\nAt arbejde med de traumatiske oplevelser forbundet med sygdommen kan bryde denne cirkel. Når de ophobede forsvarsreaktioner fra diagnosetidspunkt, attakker og tab forløses, kan nervesystemet finde mere ro. Og når nervesystemet er i ro, mildnes symptomerne og kroppen har bedre mulighed for genopladning og healing.",
            oevelser: "Ressource-øvelsen er central ved kronisk sygdom og trauma: find et sted i kroppen der føles neutralt eller behageligt — måske fødderne mod gulvet, hænderne i skødet, eller en varm fornemmelse i maven. Dvæl ved denne ressource og ånde roligt. Denne øvelse styrker nervesystemets kapacitet og giver et sikkert udgangspunkt.\n\nFra ressourcen kan du lade TRE-tremoren komme i korte doser: 3-5 minutters tremor, derefter pause og check-in med din ressource. Denne doserede tilgang respekterer energibegrænsninger og sikrer at traumeforløsningen sker i et tempo kroppen kan håndtere. Over tid øges kapaciteten, og tremor-sessionerne kan gradvist forlænges."
        },
        'trauma-bioenergetik': {
            klient: "Når traumer sidder fast i kroppen, bliver de til kronisk muskelspænding — et 'panser' der beskytter dig mod at mærke det svære, men som også begrænser din bevægelsesfrihed, dit åndedræt og din livskraft. Bioenergetik har i over 60 år forstået denne sammenhæng.\n\nAlexander Lowen viste hvordan specifikke muskelgrupper holder specifikke følelser: tilbageholdt vrede i kæben, undertrykt gråd i brystet, fastlåst frygt i hoften. TRE's tremor og bioenergetiske øvelser arbejder sammen med at forløse dette panser, lag for lag, så du gradvist genvinder frihed og følelse.",
            fusion: "I Body Fusion Work konvergerer traumeforståelse og bioenergetisk analyse (Lowen) i en fysisk krævende praksis. Michael Morin Nissen ser kroniske spændingsmønstre som somatiserede traumatiske reaktioner — freeze, flight og fight fastholdt i muskulaturen. For mange er det problematisk at løsne disse mønstre hvis kroppen ikke har strukturen til at rumme det der frigøres.\n\nDerfor styrker Body Fusion Work kroppens struktur først: core-styrkelse, energiflow og grounding opbygger den kapacitet der er nødvendig for tryg forløsning. TRE (Berceli), yoga, tai chi og qi gong supplerer bioenergetisk udtryksarbejde der faciliterer completion af de defensive responser. Denne tilgang ophæver den kunstige adskillelse mellem strukturopbygning og traumeforløsning.",
            videnskab: "Traumatisk stress inducerer kronisk muskelspænding via vedvarende sympatisk aktivering og motorisk inhibering af defensive responses. Reichian armor og traumerelaterede myofasciale holding patterns deler neurobiologisk substrat: persisterende gamma-motorisk neuron-aktivering, fascial remodellering og central sensibilisering.\n\nBioenergetisk intervention via direkte engagement med armor-segmenter og TRE via neurogen tremor adresserer begge dette substrat fra forskellige vinkler. Bioenergetik arbejder segmentelt og specifikt, TRE arbejder globalt via central pattern generators. Kombineret intervention viser klinisk stærkere effekt, formodentlig via synergi mellem segmentel og global myofascial reorganisering.",
            sclerose: "Ved sclerose er der et komplekst samspil mellem tre lag af spænding: neurologisk spasticitet fra demyelinisering, traumerelateret muskelspænding fra diagnosechok og gentagne tab, og bioenergetisk panser fra årelang kompensation og kontrol.\n\nAt skelne mellem og arbejde med alle tre lag kræver en integreret tilgang. TRE adresserer den autonome komponent, bioenergetisk arbejde adresserer det segmentelle panser, og traumeforståelse sikrer at forløsningen sker i et sikkert tempo. Michael Morin Nissen har over 13 års erfaring med denne kompleksitet hos scleroseramte.",
            oevelser: "Kæbeøvelsen forbinder trauma og bioenergetik: åbn munden bredt, hold i 10 sekunder, og slap af. Gentag 5 gange. Kæben holder ofte tilbageholdt vrede og skrig — følelser der er relevante ved sygdomsfrustration og traumatisk stress. Når kæben slipper, kan tremoren lettere brede sig til overkroppen.\n\nBrystøvelsen: lig på ryggen med en sammenrullet håndklæde under skulderbladene. Ånde dybt med åben mund i 2 minutter. Brystet holder undertrykt gråd og sorg — følelser der er centrale ved tab og trauma. Kombiner med TRE-tremor: fjern håndklædet, gå til butterfly-position, og lad tremoren komme. Mange oplever at tremoren breder sig til bryst og skuldre efter disse forberedende øvelser."
        },
        'trauma-psykologi': {
            klient: "At bearbejde traumer kræver et trygt rum og en tryg relation. Du kan ikke slippe noget du ikke føler dig sikker nok til at mærke. En psykolog hjælper dig med at forstå dine reaktioner — at uro, angst eller følelsesløshed er nervesystemets forsøg på at beskytte dig, ikke tegn på svaghed.\n\nDen terapeutiske relation giver den sikkerhed der er nødvendig for at kroppen kan slippe. Når du føler dig set og accepteret, kan nervesystemet skifte fra forsvar til åbenhed. Det er derfor kombinationen af psykologisk forståelse og kropsligt arbejde er så kraftfuld i traumebehandling.",
            fusion: "Body Fusion Work integrerer traumeforståelse med klinisk psykologisk kompetence i en fysisk krævende praksis. Michael Morin Nissens autorisation som psykolog sikrer at den intensive blanding af bioenergetik (Lowen), TRE (Berceli), yoga, tai chi og qi gong tilpasses deltagere der bærer på trauma og stress.\n\nDen psykologiske forankring er særligt vigtig fordi holdet arbejder intensivt med at styrke kroppens struktur og udtrykke følelser. Kontakt og tilstedeværelse skaber den tryghed der er nødvendig for at rumme energi og følelsesmæssig forløsning. Klinisk psykologi og det hårde kropsarbejde er gensidigt afhængige — struktur og sikkerhed gør dybere traumeforløsning mulig.",
            videnskab: "Terapeutisk relation modulerer klientens neuroception og autonome tilstand via social engagement system. Ved traumebehandling er dette særligt kritisk: co-regulering gennem terapeutisk alliance etablerer den ventral vagale platform der er forudsætning for sikker processing af traumatisk materiale.\n\nUden sufficient relationel sikkerhed resulterer somatisk aktivering i re-traumatisering snarere end integration. Attachment security medierer præfrontal inhibering af amygdala under affektiv aktivering — den terapeutiske relations kvalitet bestemmer direkte klientens kapacitet for somatisk processing. Therapeutic alliance quality er den stærkeste prædiktor for behandlingsoutcome ved traumebehandling.",
            sclerose: "Traumet ved at leve med sclerose er komplekst og vedvarende — det er ikke én hændelse men en kronisk belastning med gentagne tab, usikkerhed og medicinsk intervention. En psykolog der forstår kronisk sygdom kan hjælpe dig med at bearbejde diagnosechok, sorg over tab og angst for fremtiden.\n\nI et trygt terapeutisk rum kan du integrere kropslige metoder som TRE med psykologisk bearbejdning. Det handler om at finde mening og mestring i en situation der ofte føles overvældende, og at give nervesystemet den sikkerhed det behøver for at kunne slippe den kroniske alarm.",
            oevelser: "Containment-øvelsen forbinder terapeutisk sikkerhed med traumeforløsning: sid komfortabelt, placer hænderne over krydsede arme på brystet (sommerfuglekram). Hold dig selv fast mens du ånder roligt. Denne selvberørende øvelse skaber kropslig containment og signalerer sikkerhed til nervesystemet.\n\nI terapeutisk kontekst bruges containment som ramme for TRE: efter sommerfuglekram og verbal tryghedsetablering guider terapeuten til tremorfasen. Hvis følelser eller minder dukker op under tremor, kan du vende tilbage til kram-positionen og orientere dig i rummet. Terapeuten hjælper med at sætte ord på oplevelsen efterfølgende — denne integration af kropslig forløsning og psykologisk forståelse er kernen i tryg traumebehandling."
        },
        'kronisksygdom-bioenergetik': {
            klient: "Bioenergetikkens fokus på grounding — at mærke kontakten med kroppen og jorden — er særligt vigtigt når du lever med kronisk sygdom. Når kroppen føles ustabil og uforudsigelig, giver grounding en basal tryghed: du er her, du står (eller sidder) solidt, du har et fundament.\n\nAlexander Lowens begreb 'vibrancy' — en vibrerende, levende krop — er terapeutisk mål også ved sclerose. Bioenergetiske øvelser tilpasses din tilstand: vibrationsøvelser mildner spasticitet, vejrtrækning åbner brystet, grounding styrker stabilitet. Alt doseres efter din energi den dag.",
            fusion: "Body Fusion Work ved sclerose integrerer bioenergetik (Lowen) med den specialiserede viden om kronisk sygdom som Michael Morin Nissen har opbygget gennem 13 års klinisk erfaring. Spændingsmønstre hos scleroseramte er komplekse — kompensatorisk spænding ovenpå neurologisk spasticitet kræver en tilpasset version af den normalt hårde praksis.\n\nDen tilpassede Body Fusion Work blander bioenergetik med TRE (Berceli), yoga, tai chi og qi gong i doseret intensitet. Grounding styrker kroppens stabilitet, vejrtrækning åbner energiflow, og tilpasset core-styrkelse opbygger den struktur der kan rumme frigjort energi. Intensiteten afstemmes altid med energikapaciteten — denne tilpassede strukturopbygning er et af Body Fusion Works mest originale bidrag.",
            videnskab: "Bioenergetisk intervention ved kronisk sygdom adresserer den autonome komponent af somatiske symptomer. Grounding-øvelser modulerer proprioceptiv feedback via mekanoreceptor-stimulation i fødder og ben, hvilket stabiliserer autonom regulering via afferent signalering til cerebellum og vestibulært system.\n\nVibration stimulerer lavtærskel mechanoreceptorer og faciliterer myofascial release via thixotropisk tilstandsændring. Doseret bioenergetisk arbejde forbedrer energiforvaltning ved fatigue-domineret sygdom — kortere, hyppigere sessioner med lavere intensitet producerer bedre outcomes end traditionel dosering. Lowens 'vibrancy' korrelerer med forbedret HRV og parasympatisk tonus.",
            sclerose: "Bioenergetik blev allerede brugt med scleroseramte før TRE blev integreret i arbejdet. Grounding-øvelser hjælper med balance og stabilitet — at mærke fødderne mod gulvet, at stå eller sidde solidt. Vibrationsarbejde mildner spasticitet ved at løsne de muskulære lag. Vejrtrækningsøvelser åbner brystet og giver mere energi.\n\nAlt tilpasses din dag: nogle dage er der energi til stående øvelser, andre dage arbejdes der liggende med blid vejrtrækning og vibration. Over tid lærer kroppen at finde sin naturlige vibrancy — en levende, vibrerende tilstand der er mulig selv med sclerose.",
            oevelser: "Siddende grounding for scleroseramte: sid med fødderne fladt på gulvet og pres let ned — mærk kontakten. Lad vægten synke ned gennem bækkenet. Hold i 2-3 minutter. Denne tilpassede grounding-øvelse giver kropslig stabilitet uden at kræve stående balance.\n\nBioenergetisk vibrationsøvelse tilpasset sclerose: siddende, løft hælene hurtigt op og ned i 1 minut — dette skaber vibration i benene der mildner spasticitet. Eller liggende: bøj knæene op og lad dem vibrere fra side til side i 2 minutter. Afslut med TRE-tremor i butterfly-position. Denne sekvens — grounding, vibration, tremor — er kernen i Body Fusion Work tilpasset kronisk sygdom."
        },
        'kronisksygdom-psykologi': {
            klient: "At leve med kronisk sygdom påvirker hele dit liv — relationer ændres, arbejdslivet udfordres, dit selvbillede ryster, og fremtiden føles usikker. Det er normalt at opleve sorg, vrede, angst og frustration. Du fortjener støtte med alt det, ikke bare de fysiske symptomer.\n\nEn psykolog kan hjælpe dig med at navigere de følelsesmæssige udfordringer, mens kropsligt arbejde hjælper med spasticitet, smerte og træthed. Du fortjener støtte på begge niveauer — krop og sind. Kombineret behandling giver dig redskaber til at håndtere hele din situation, ikke bare dele af den.",
            fusion: "Den psykologiske forankring er særligt vigtig i Body Fusion Work med scleroseramte. At turde arbejde intensivt med en krop der allerede opleves som upålidelig kræver dyb tryghed. Michael Morin Nissens 13 års erfaring som autoriseret psykolog og certificeret TRE Trainer med denne målgruppe har skabt en unik forståelse af kronisk sygdoms udfordringer.\n\nBody Fusion Work blander bioenergetik (Lowen), TRE (Berceli), yoga, tai chi og qi gong — ved sclerose tilpasses denne normalt hårde praksis omhyggeligt. Psykologisk kompetence sikrer at strukturopbygning, energiflow og følelsesudtryk doseres efter kapacitet. Kontakt og tilstedeværelse er det sikre fundament hvorfra kroppen kan styrkes og følelser kan rummes.",
            videnskab: "Psykologisk intervention ved kronisk sygdom modulerer stress-respons og autonomt nervesystem via top-down regulering: kognitiv reappraisal reducerer amygdala-aktivering, og meningsdannelse faciliterer præfrontal modulering af autonome tilstande. Kombineret med bottom-up somatisk intervention (TRE, kropsarbejde) opnås bidirektionel regulering.\n\nTerapeutisk alliance quality korrelerer signifikant med behandlingsoutcome ved kronisk sygdom — stærkere end ved akutte tilstande. Dette forklares ved at kronisk sygdom reducerer selvregulerings-kapacitet, hvilket øger afhængighed af interpersonel co-regulering. Integreret psykologisk-somatisk intervention producerer bedre outcomes end unimodal tilgang på livskvalitet, fatigue og sygdomsmestring.",
            sclerose: "Sclerose påvirker ikke kun kroppen men hele dit liv — relationer, arbejde, identitet, fremtidsplaner. En psykolog der forstår sygdommen kan hjælpe med sorg over tab af funktioner, angst for fremtiden, frustration over begrænsninger, og de relationelle udfordringer der uundgåeligt følger med kronisk sygdom.\n\nKombineret med TRE og kropsarbejde får du støtte til hele dig — krop, sind og relationer. Michael Morin Nissen har over 13 års erfaring med denne kombination i Scleroseforeningen. Du fortjener en terapeut der ser hele dig, ikke bare din diagnose.",
            oevelser: "En integreret session ved sclerose starter med psykologisk check-in: hvordan har du det i dag? Hvad fylder? Derefter kropslig scanning: hvor mærker du det i kroppen? Terapeuten hjælper med at oversætte mellem krop og sind — angst der sidder i maven, sorg i brystet, frustration i kæben.\n\nDerefter tilpasset kropsarbejde: siddende grounding, blid vejrtrækning, og kort TRE-tremor — alt doseret efter din energi. Afslut med refleksion: hvad ændrede sig kropsligt? Hvad betød det følelsesmæssigt? Denne kombination af psykologisk forståelse og tilpassede kropsøvelser giver helhedsorienteret støtte til mennesker med kronisk sygdom."
        }
    }
};

// Mapping til cirkel navne
let circleNames = {
    tre: 'TRE',
    polyvagal: 'Polyvagal teori',
    kropspsykoterapi: 'Kropsorienteret Psykoterapi',
    trauma: 'Trauma & Stress',
    kronisksygdom: 'Sclerose & Kronisk Sygdom',
    bioenergetik: 'Bioenergetik',
    psykologi: 'Klinisk Psykologi'
};

// State management
let currentMode = 'klient';
let currentView = 'welcome'; // 'welcome', 'circle', 'connection'
let currentCircle = null;
let currentConnection = null;

// Onboarding
function setupOnboarding() {
    const overlay = document.getElementById('onboarding-overlay');
    const panel = document.getElementById('onboarding-panel');

    if (localStorage.getItem('tre-onboarding-done')) {
        overlay.style.display = 'none';
        return;
    }

    // Step 1: Velkomst
    showOnboardingStep1();

    function showOnboardingStep1() {
        const ui = getUI();
        panel.innerHTML = `
            <img src="tre_logo.png" alt="TRE logo" style="width: 75%; max-width: 275px; margin: 0 auto 25px; display: block; border: 2px solid #000; border-radius: 8px;">
            <h1>${ui.onboardingWelcome}</h1>
            <p>${ui.onboardingDesc}</p>
            <button id="onboarding-next" style="
                font-family: 'Times New Roman', Times, serif;
                padding: 14px 40px;
                background: #6c82a9;
                color: white;
                border: none;
                border-radius: 8px;
                font-size: 1.1rem;
                cursor: pointer;
                transition: background 0.2s;
            ">${ui.onboardingBtn}</button>
        `;
        document.getElementById('onboarding-next').addEventListener('click', showOnboardingStep2);
    }

    function showOnboardingStep2() {
        const ui = getUI();
        const modes = ['klient', 'fusion', 'videnskab', 'sclerose', 'oevelser'];
        const modeBtns = modes.map(m => `
            <button class="onboarding-mode-btn" data-mode="${m}">
                <div class="ob-title">${ui.obModes[m].title}</div>
                <div class="ob-desc">${ui.obModes[m].desc}</div>
            </button>
        `).join('');
        panel.innerHTML = `
            <h1>${ui.onboardingStep2Title}</h1>
            <p>${ui.onboardingStep2Desc}</p>
            <div class="onboarding-modes">
                ${modeBtns}
            </div>
        `;

        panel.querySelectorAll('.onboarding-mode-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const mode = btn.dataset.mode;
                finishOnboarding(mode);
            });
        });
    }

    function finishOnboarding(mode) {
        localStorage.setItem('tre-onboarding-done', 'true');

        // Sæt valgt mode
        currentMode = mode;
        document.querySelectorAll('.mode-btn').forEach(b => {
            b.classList.toggle('active', b.dataset.mode === mode);
        });

        // Fade out overlay
        overlay.style.transition = 'opacity 0.4s ease';
        overlay.style.opacity = '0';
        setTimeout(() => {
            overlay.style.display = 'none';
            showWelcome();

            // Pulse-hint på en cirkel
            const firstCircle = document.querySelector('.outer-circle');
            if (firstCircle) {
                firstCircle.classList.add('circle-hint');
                setTimeout(() => {
                    firstCircle.classList.remove('circle-hint');
                }, 6000);
            }
        }, 400);
    }
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    setupModeButtons();
    setupCircleClicks();
    setupConnectionClicks();
    setupMenu();
    setupSearch();

    // Initialize language before onboarding
    if (currentLang === 'en' && window.i18n_en) {
        setLanguage('en');
    }

    setupOnboarding();

    // Vis welcome kun hvis onboarding allerede er gennemført
    if (localStorage.getItem('tre-onboarding-done')) {
        showWelcome();
    }
});

// Mode selector - VISUELT TYDELIGT
function setupModeButtons() {
    const buttons = document.querySelectorAll('.mode-btn');
    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            // Visual feedback
            buttons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const oldMode = currentMode;
            currentMode = btn.dataset.mode;

            // Flash effekt for at vise noget skete
            const infoPanel = document.getElementById('info-content');
            infoPanel.style.opacity = '0.3';
            setTimeout(() => {
                infoPanel.style.opacity = '1';
            }, 150);

            // Nulstil altid til velkomst ved mode-skift, scroll til tekst
            showWelcome(true);

        });
    });
}

// Scroll helper - scroller så info-panel fylder hele skærmen
function scrollToElement(id) {
    const el = document.getElementById(id);
    if (el) {
        setTimeout(() => {
            const rect = el.getBoundingClientRect();
            // Scroll til elementets top minus en lille smule så diagrammet er helt væk
            const offset = window.scrollY + rect.top - 5;
            window.scrollTo({ top: offset, behavior: 'smooth' });
        }, 50);
    }
}

// Welcome screen
let welcomeTexts = {
    klient: {
        title: 'Velkommen til TRE Forståelsesmodellen',
        body: `<p>Denne interaktive model hjælper dig med at forstå, hvordan TRE virker på din krop og dit nervesystem. TRE er en enkel, kropsbaseret metode der kan hjælpe med stress, spænding og uro — uden at du behøver tale om det svære.</p>
        <p>Modellen viser seks perspektiver der tilsammen forklarer, hvorfor tremor virker. Hvert perspektiv belyser en vigtig del af forståelsen, og forbindelserne mellem dem viser hvordan alt hænger sammen.</p>
        <p><strong>Kom i gang:</strong></p>
        <ul>
            <li>Tryk på en cirkel for at lære om det perspektiv</li>
            <li>Brug knapperne øverst til at skifte mellem niveauer</li>
        </ul>`
    },
    fusion: {
        title: 'Body Fusion Work — Michaels Integrerede Metode',
        body: `<p>Velkommen til Body Fusion Work-perspektivet. Her præsenteres Michael Morin Nissens fysisk krævende holdpraksis der blander bioenergetik (Lowen), TRE (Berceli) og elementer fra yoga, tai chi og qi gong — en integration udviklet gennem over 25 års klinisk erfaring som autoriseret psykolog og certificeret TRE Trainer.</p>
        <p>Body Fusion Work er noget mere hårdt end almindelig TRE, fordi der arbejdes intensivt med at styrke kroppens struktur. For mange kan det være problematisk at løsne følelser og energi hvis kroppen ikke har strukturen til at rumme dette arbejde. Holdet fokuserer på core-styrkelse, energiflow, rumme energi, udtrykke følelser, kontakt og tilstedeværelse.</p>
        <p><strong>Udforsk modellen:</strong></p>
        <ul>
            <li>Klik på en cirkel for at se hvordan det perspektiv indgår i Body Fusion Work</li>
        </ul>`
    },
    videnskab: {
        title: 'TRE — Videnskabeligt Perspektiv',
        body: `<p>Denne visning præsenterer TRE gennem et neurobiologisk og fysiologisk forskningsperspektiv. Her beskrives de dokumenterede mekanismer bag neurogen tremor — fra muskelspindel-aktivering og vagal afferens til HPA-akse regulering og fascial reorganisering.</p>
        <p>Modellen sammenfatter evidens fra polyvagal teori, traumeforskning, interpersonel neurobiologi og fascial videnskab. Hvert perspektiv understøttes af målbare fysiologiske markører som heart rate variability, cortisol-niveauer og respiratory sinus arrhythmia.</p>
        <p><strong>Navigation:</strong></p>
        <ul>
            <li>Klik på en cirkel for neurobiologisk dybde i det perspektiv</li>
        </ul>`
    },
    sclerose: {
        title: 'TRE for Mennesker med Sclerose',
        body: `<p>Velkommen. Denne visning er skabt specifikt til dig der lever med sclerose. Her finder du viden om hvordan TRE kan hjælpe med spasticitet, træthed, smerte og stress — tilpasset de særlige udfordringer ved at leve med en kronisk neurologisk sygdom.</p>
        <p>Over 1000 mennesker med sclerose har brugt TRE i Danmark, og to videnskabelige studier dokumenterer forbedret livskvalitet. Autoriseret psykolog Michael Morin Nissen har arbejdet med TRE og sclerose i over 13 år gennem Scleroseforeningen.</p>
        <p><strong>Udforsk:</strong></p>
        <ul>
            <li>Klik på en cirkel for at se perspektivet i forhold til sclerose</li>
            <li>Alle øvelser og tilgange er tilpasset kronisk sygdom</li>
        </ul>`
    },
    oevelser: {
        title: 'TRE — Øvelser og Praksis',
        body: `<p>Her finder du konkrete øvelser fra TRE og de tilgange der informerer metoden. Hvert perspektiv indeholder praktiske øvelser du kan bruge — fra de 7 TRE-øvelser til bioenergetisk grounding, vagusnerve-stimulering og kropsbevidsthedstræning.</p>
        <p>Øvelserne er beskrevet så du kan prøve dem selv, men vi anbefaler altid at starte med en certificeret TRE-provider eller autoriseret psykolog der kan guide dig de første gange. Alle øvelser kan tilpasses dit niveau og din krops behov.</p>
        <p><strong>Kom i gang:</strong></p>
        <ul>
            <li>Klik på en cirkel for øvelser relateret til det perspektiv</li>
        </ul>`
    }
};

// Uddybende tekster for hver mode (ca. 400 ord, 3 underoverskrifter)
let deepDiveTexts = {
    klient: `
        <h3>Hvad sker der i kroppen under TRE?</h3>
        <p>Når du udfører de 7 TRE-øvelser, trætter du systematisk de dybe muskelgrupper i ben, hofter og bækken — især psoas-musklen, som forbinder rygsøjlen med benene og er den første muskel der reagerer på fare. Når musklerne er tilstrækkeligt trætte, udløses en naturlig, neurogen tremor: en rystebevægelse der starter i benene og kan brede sig til hele kroppen. Denne tremor er kroppens medfødte mekanisme til at forløse spænding — den samme mekanisme dyr bruger instinktivt efter farlige situationer. Vi mennesker har ofte lært at undertrykke den, men TRE genopretter denne naturlige evne og giver nervesystemet mulighed for at vende tilbage til ro og balance.</p>

        <h3>Hvem kan have gavn af TRE?</h3>
        <p>TRE er udviklet til at kunne bruges af alle — uanset alder, fysisk form eller baggrund. Metoden er særligt gavnlig for mennesker der oplever kronisk stress, søvnproblemer, muskelspændinger, uro i kroppen eller følelsesmæssig overbelastning. Den bruges af veteraner med PTSD, mennesker med kronisk sygdom som sclerose, idrætsudøvere der vil optimere restitution, og helt almindelige mennesker der ønsker bedre kontakt med deres krop. Øvelserne kan tilpasses fuldstændigt: de kan udføres stående, siddende eller liggende, og intensiteten styres af dig selv. Du behøver ikke tale om det der er svært — kroppen arbejder selv med det den har brug for at slippe.</p>

        <h3>Nervesystemet og de tre tilstande</h3>
        <p>Ifølge Stephen Porges' polyvagale teori har dit nervesystem tre grundtilstande: ro og forbindelse (hvor du føler dig tryg og social), alarm og kamp/flugt (hvor kroppen mobiliserer energi til forsvar), og nedlukning (hvor kroppen lukker ned for at overleve). Kronisk stress eller uforarbejdede oplevelser kan fastlåse nervesystemet i alarm- eller nedlukningstilstand. TRE's tremor sender et kraftfuldt signal til vagusnerven — kroppens hovedforbindelse mellem hjerne og krop — om at faren er overstået. Nervesystemet kan skifte gear fra overlevelse til genopladning, og healing kan begynde.</p>

        <h3>TRE som selvhjælpsredskab</h3>
        <p>En af TRE's største styrker er at metoden kan læres og praktiseres selvstændigt. Efter introduktion med en certificeret TRE-provider eller autoriseret psykolog kan du bruge øvelserne derhjemme som en del af din daglige selvregulering. Det kræver ingen udstyr, ingen bestemt tro og ingen særlig fysisk kapacitet. En session tager typisk 20-30 minutter. Regelmæssig praksis — 2-3 gange om ugen — opbygger kroppens evne til at regulere sig selv. Over tid oplever mange at søvn forbedres, smerter reduceres og den generelle livskvalitet øges markant. TRE erstatter ikke terapi eller medicinsk behandling, men giver dig et aktivt redskab til at påvirke din egen kropslige og mentale tilstand.</p>

        <h3>Forskning og dokumentation</h3>
        <p>TRE er udviklet af Dr. David Berceli, Ph.D., international ekspert i traumeintervention og konfliktløsning. Metoden er dokumenteret gennem en voksende forskningsbase. Et randomiseret kontrolleret studie fra 2025 viste signifikant reduktion af spasticitet og smerte hos mennesker med multipel sklerose. Et studie fra 2024 dokumenterede positiv effekt på traumesymptomer hos østafrikanske flygtninge. Forskning fra Beijing viste forbedring af både psykologiske og somatiske symptomer. Berceli har samlet 24 forfattere fra 12 lande i bogen 'Shake it Off Naturally', der udforsker den teoretiske og fysiologiske forståelse af kroppens rystemekanisme. TRE praktiseres i dag i over 60 lande verden over.</p>
    `,
    fusion: `
        <h3>En fysisk krævende praksis med dybe rødder</h3>
        <p>Body Fusion Work er Michael Morin Nissens unikke holdpraksis, udviklet gennem over 25 års erfaring som autoriseret psykolog, certificeret TRE Trainer (under David Berceli 2009-2013) og bioenergetisk psykoterapeut uddannet fra Norddeutsches Institut für Bioenergetische Analyse. Metoden blander bioenergetik (Alexander Lowen), TRE (David Berceli) og elementer fra yoga, tai chi og qi gong i en integreret, fysisk krævende praksis. Holdet er noget mere hårdt end almindelig TRE, fordi der arbejdes intensivt med at styrke kroppens struktur. Grundtanken er dyb: for mange af os kan det være problematisk at løsne følelser og energi, hvis kroppen ikke har den strukturelle kapacitet til at rumme det der frigøres.</p>

        <h3>De fem søjler i Body Fusion Work</h3>
        <p>Body Fusion Work hviler på fem integrerede søjler. Fra bioenergetikken (Lowen) kommer grounding-øvelser, vejrtrækningsarbejde og forståelsen af kroppens energetiske blokader og spændingsmønstre — det Lowen kaldte 'character armor'. Fra TRE (Berceli) kommer den neurogene tremor der forløser dybtliggende muskelspænding via systematisk trætning af psoas og de dybe hoftemuskler. Yoga bidrager med fleksibilitet, balance og kropsbevidsthed. Tai chi tilfører langsom, meditativ bevægelse der styrker energiflow og proprioceptiv opmærksomhed. Qi gong bringer åndedrætsbaseret energiarbejde og indre ro. Sammen skaber disse fem traditioner en helhedspraksis der er mere end summen af dens dele.</p>

        <h3>Hvad arbejdes der med på holdet?</h3>
        <p>I Body Fusion Work arbejdes der bl.a. med at styrke core, energiflow, evnen til at rumme energi, udtrykke følelser, kontakt og tilstedeværelse. En typisk session kan begynde med tai chi-inspirerede opvarmningsbevægelser der skaber flow og tilstedeværelse. Derefter følger bioenergetisk grounding og core-arbejde der opbygger strukturel styrke. TRE-øvelserne trætter de dybe muskelgrupper og aktiverer tremor, mens yogainspirerede stillinger åbner og strækker. Qi gong-elementer integreres som vejrtrækning og energiledning. Sessionen afsluttes med tremor i rygleje og stille integration. Alt tilpasses gruppens kapacitet — men forvent at blive udfordret fysisk.</p>

        <h3>Strukturel kapacitet som fundament for forandring</h3>
        <p>Det der adskiller Body Fusion Work fra andre tilgange er forståelsen af at kroppen har brug for struktur for at kunne rumme transformation. Mange mennesker oplever at følelsesmæssigt eller energetisk arbejde bliver overvældende — de kan få det værre i stedet for bedre, fordi kroppen ikke har kapaciteten til at holde det der frigøres. Body Fusion Work adresserer dette ved først at opbygge styrke, stabilitet og forankring. Core-arbejde, grounding og vejrtrækning skaber den kropslige container som tillader dybere processer at udfolde sig sikkert. Når kroppen er stærk nok til at rumme energien, kan følelser og spænding forløses uden at det bliver overvældende.</p>

        <h3>Praktisk information</h3>
        <p>Body Fusion Work afholdes som holdtræning på Roskildevej 46, Frederiksberg, i Michaels praksis. Holdene kører i serier af 5 sessioner, og deltagerne tilmelder sig hele forløbet. Prisen er 900 kr. for 5 sessioner. Holdet henvender sig til mennesker der ønsker en dybere og mere fysisk krævende praksis end standard TRE-grupper. Det er ikke nødvendigt at have erfaring med TRE, bioenergetik, yoga eller qi gong — men du skal være klar til at arbejde kropsligt med intensitet. Michael guider processen med sin unikke kombination af psykologisk faglig viden og over 25 års erfaring med kroppen som omdrejningspunkt for forandring.</p>
    `,
    videnskab: `
        <h3>Neurogen tremor: mekanisme og evidens</h3>
        <p>TRE aktiverer neurogen tremor gennem systematisk trætning af muskelspindler i primært psoas major og iliacus. Når proprioceptiv feedback fra de overbelastede muskler når brainstem via afferente nervebaner, aktiveres central pattern generators der producerer rhythmisk oscillation. Denne tremor er ikke patologisk men en fylogenetisk konserveret stressrespons dokumenteret hos alle pattedyr. Tremoren modulerer autonom nervesystem-aktivitet via afferent vagal signalering: mekanoreceptorer i muskler og fascia sender signaler via nucleus tractus solitarius til dorsal motor nucleus, hvilket øger parasympatisk tonus. Målbare effekter inkluderer øget heart rate variability (HRV), forbedret respiratory sinus arrhythmia (RSA) og reduceret cortisol.</p>

        <h3>Polyvagal teori og autonom regulering</h3>
        <p>Stephen Porges' polyvagale model beskriver tre hierarkiske autonome tilstande: ventral vagal (social engagement, ro), sympatisk (kamp/flugt) og dorsal vagal (immobilisering, shutdown). Myeliniserede vagale motorbaner bremser hjertet, inhiberer sympatisk fight-flight-aktivering, dæmper HPA-aksens stressrespons og reducerer inflammation. Traumatisk stress fastlåser nervesystemet i defensive tilstande med nedsat vagal bremse og forhøjet sympatisk baseline. TRE-induceret tremor faciliterer neuroception af sikkerhed gennem muskulær completion af afbrudte forsvarsreaktioner — organismen signalerer at faren er overstået. Dette skift fra ergotrop til trofotrop tilstand dokumenteres via forbedret HRV og normaliseret respiratorisk mønster.</p>

        <h3>HPA-akse og stresshormon-regulering</h3>
        <p>Kronisk stress medfører vedvarende aktivering af hypothalamus-hypofyse-binyre-aksen (HPA-aksen) med forhøjet cortisol, adrenalin og noradrenalin. Dette resulterer i hippocampal atrofi (nedsat kontekstualisering af frygt), præfrontal hypoaktivitet og dysreguleret autonomt nervesystem. TRE-tremor nedregulerer HPA-akse-aktivering via afferent vagal signalering der modulerer hypothalamisk CRH-frigivelse. Reduceret cortisol forbedrer hippocampal neurogenese og præfrontal inhibitorisk kapacitet, hvilket udvider window of tolerance for somatisk og emotionel processing. Dokumenteret er også reduktion af pro-inflammatoriske cytokiner via den cholinerge antiinflammatoriske pathway — vagal aktivering hæmmer TNF-alpha og IL-6 produktion i makrofager.</p>

        <h3>Fascial reorganisering og somatisk hukommelse</h3>
        <p>Kronisk stress modificerer fasciale viscoelastiske egenskaber gennem kollagen-remodellering og fibroblast-medieret matrix-stiffening. Proprioceptiv signalering ændres, vedligeholder central sensibilisering og forhøjet gamma-motorisk neuron-aktivitet. TRE-tremor reorganiserer myofasciale holding patterns via rhythmisk mekanisk stimulation der aktiverer Ruffini-corpuskler og interstitielle receptorer i fascia. Oscillation faciliterer thixotropisk tilstandsændring i grundsubstansen. Somatisk lagret traumatisk materiale er primært subkortikalt — lagret i procedurel hukommelse via amygdala, cerebellum og periaqueductal gray — og utilgængeligt for top-down kognitiv processing. Bottom-up tremor-intervention adresserer dette direkte via sensomotorisk reorganisering.</p>

        <h3>Aktuel forskningsbase</h3>
        <p>TRE's evidensbase vokser. Et randomiseret kontrolleret studie (Skovgaard et al. 2025, Advances in Mind Body Medicine) dokumenterede signifikant reduktion af spasticitet og smerte ved multipel sklerose. Parker et al. (2024) viste effekt på traumesymptomer hos østafrikanske flygtninge. Et pilotstudie dokumenterede signifikant reduktion af fatigue målt med Modified Fatigue Impact Scale (MFIS), fra 43.7 til 22.0. Forskning fra Beijing (2025) undersøgte effekt på psykologiske og somatiske symptomer. David Bercelis seneste kapitel 'Body Tremors: The Natural Restorative Mechanism of the Human Body' (2025) sammenfatter den neurobiologiske og fysiologiske forståelse fra et polyvagalt og embodiment-perspektiv. Feltet bevæger sig mod større randomiserede studier og neuroimaging-dokumentation.</p>
    `,
    sclerose: `
        <h3>Hvorfor TRE virker ved sclerose</h3>
        <p>Multipel sklerose påvirker nervesystemet på to niveauer: sygdommens fysiske skade på nervecellernes myelinskeder (demyelinisering) og den kroniske psykologiske stress ved at leve med en uforudsigelig sygdom. Begge dele holder nervesystemet i vedvarende alarm- eller nedlukningstilstand, hvilket direkte forværrer symptomer som spasticitet, træthed og smerte. TRE's neurogene tremor hjælper nervesystemet med at finde ro-tilstand via vagusnerve-aktivering. Når nervesystemet finder balance, reduceres den autonome komponent af spasticiteten — den ekstra muskelspænding der ligger ovenpå den neurologiske skade. Inflammation dæmpes, immunfunktionen stabiliseres, og kroppens selvhelingsmekanismer fungerer bedre.</p>

        <h3>Dokumenteret effekt: to videnskabelige studier</h3>
        <p>To videnskabelige studier dokumenterer TRE's effekt ved multipel sklerose. Et randomiseret kontrolleret studie (Skovgaard, Trénel, Hanehøj og Lynning, publiceret i Advances in Mind Body Medicine, 2025) viste signifikant reduktion af spasticitet og smerte samt gradvis forbedring i gangfunktion. Et eksplorativt pilotstudie dokumenterede signifikant reduktion af fatigue — fra en MFIS-score på 43.7 til 22.0. Klinisk rapporterer Michael Morin Nissen at nogle mennesker med sclerose oplever fuldstændig forsvinden af spasticitet, idet TRE hjælper musklerne med at slippe den autonome spænding der ligger ovenpå den neurologiske skade. Den europæiske MS-platform EMSP har fremhævet den danske Scleroseforenings TRE-tilbud som innovativt.</p>

        <h3>Over 1000 mennesker med sclerose har brugt TRE</h3>
        <p>Siden 2002 har autoriseret psykolog Michael Morin Nissen arbejdet med TRE og sclerose gennem den danske Scleroseforening. Over 1000 mennesker med sclerose har deltaget i TRE-forløb. Michael startede oprindeligt med reichianske og bioenergetiske metoder, men fandt at TRE var lettere at lære scleroseramte som en selvhjælpspraksis de kunne tage med hjem. Øvelserne tilpasses fuldstændigt til den enkeltes kapacitet — alle 7 øvelser kan udføres siddende i en stol eller liggende på en måtte. Mange oplever at spasticiteten mildnes, søvnen forbedres, energiniveauet stiger og den generelle livskvalitet øges markant.</p>

        <h3>Tilpassede øvelser og dosering</h3>
        <p>Ved sclerose er dosering afgørende. Start med korte sessioner på 10-15 minutter og mærk efter i 24 timer. Hvis du er mere træt dagen efter, var sessionen for lang. Ankelrotationer og tåhævninger laves siddende med fødderne på gulvet. I stedet for vægstøtte bruges siddende knæpres mod hinanden i 2-3 minutter. Tremorfasen foregår altid liggende med fuld støtte under knæer og hoved. Energiforvaltning prioriteres — det handler ikke om at presse kroppen men om at give nervesystemet mulighed for at finde ro. Over tid opbygges kapaciteten gradvist, og mange kan øge sessionernes længde og intensitet.</p>

        <h3>At genfinde kroppen som ressource</h3>
        <p>Med sclerose bliver kroppen ofte forbundet med frustration, svigt og frygt. Den krop der engang var pålidelig, opleves nu som uforudsigelig og begrænsende. TRE tilbyder en vej til at genetablere et positivt forhold til kroppen — du lærer at lytte til dens signaler og arbejde med den i stedet for mod den. At turde tremor — at turde slippe kontrollen over en krop der allerede føles upålidelig — kræver dyb sikkerhed og tillid. Michael Morin Nissens 13 års erfaring med denne målgruppe skaber det fundament af tryghed der gør forandring mulig. Kroppen kan igen opleves som en ressource, ikke kun en kilde til begrænsning.</p>
    `,
    oevelser: `
        <h3>De 7 TRE-øvelser i detaljer</h3>
        <p>TRE består af 7 øvelser der systematisk trætter muskelgrupper fra ankler til hofter. Øvelse 1 er ankelrotationer — stående med let bøjede knæ, rul fødderne fra hæl til tå i 30 sekunder. Øvelse 2 er tåhævninger der løfter hælene og holder i 30 sekunder, gentaget 3 gange. Øvelse 3-4 er bøjninger og stræk af lår og inderlår: brede udfaldsskridt der holdes 5 sekunder på hver side, 6 gentagelser. Øvelse 5 åbner den forreste kropsside med hænderne på lænden og hofterne presset fremad — dette strækker psoas-musklen dybt. Øvelse 6, vægstøtten, er en kontrolleret squat mod væggen med 45 graders knævinkel i 3-5 minutter. Øvelse 7 er rygleje med bøjede knæ og hoftløft, pulserende 20 gange, derefter hold i 60 sekunder.</p>

        <h3>Psoas-musklen: kroppens stressmuskel</h3>
        <p>Psoas major er nøglen til at forstå TRE. Denne dybe muskel udspringer fra lænderyggens hvirvler og forbinder overkrop med underkrop via hofteleddet. Den er den første muskel der kontraherer ved fare — den trækker kroppen sammen i fosterstilling som beskyttelse. Når faren er overstået, slapper psoas af igen. Men ved kronisk stress eller uforarbejdet traume forbliver psoas kontraheret, hvilket fører til lændesmerter, bækkenspænding, overfladisk vejrtrækning og en vedvarende fornemmelse af uro. TRE's systematiske trætning af psoas og de omkringliggende muskler tillader den at slippe og udløser den neurogene tremor der er kroppens naturlige nulstilling af stressresponsen.</p>

        <h3>Tremorfasen: hvad du kan forvente</h3>
        <p>Når du sænker bækkenet i øvelse 7 med bøjede knæ og fødderne i gulvet, begynder tremoren typisk i benene — en naturlig vibration der kan føles som summen, bølger eller pulsering. Du styrer intensiteten ved at åbne knæene (mere tremor) eller lukke dem sammen (mindre tremor). 7/10-reglen er nyttig: stop hver øvelse når muskeltræthed når 7 på en skala fra 0-10, det er den optimale zone for aktivering. Over tid kan tremoren brede sig til bækken, mave, bryst og skuldre. Du kan opleve spontane bevægelser, varmefornemmelse, følelsesmæssig forløsning eller dyb afslapning. Tremoren er selvbegrænsende — du kan altid stoppe ved at strække benene eller rulle om på siden.</p>

        <h3>Dosering og regelmæssig praksis</h3>
        <p>Dosering er nøglen til god TRE-praksis. Tremorfasen bør vare 10-15 minutter — ikke længere i begyndelsen. Mærk efter i 24 timer: hvis du føler dig mere urolig, træt eller følelsesmæssigt oversvømmet dagen efter, var sessionen for lang eller intens. Skru ned næste gang. Regelmæssig praksis 2-3 gange om ugen er langt mere effektiv end sjældne lange sessioner. En fuld session med opvarmningsøvelser og tremor tager 30-45 minutter. Over tid opbygger kroppen kapacitet til at håndtere længere og dybere tremor. Start altid med en certificeret TRE-provider der kan guide de første 3-5 sessioner og sikre korrekt dosering.</p>

        <h3>Vejrtrækning og supplerende øvelser</h3>
        <p>Vejrtrækning forstærker TRE's virkning markant. Forlænget udånding — ind i 4 tæl, ud i 8 tæl — aktiverer direkte vagusnerven og den parasympatiske gren. Under tremorfasen kan du kombinere med bevidst langsom udånding for at understøtte nervesystemets skift til ro. Summende lyde på udåndingen vibrerer i struben tæt på vagusnerven og forstærker aktiveringen. Bioenergetisk grounding — stående med let bøjede knæ, mærk kontakten med gulvet, lad vægten synke ned — er en optimal forberedelse til TRE. Alexander Lowens bueøvelse, stående med hænderne på lænden og let bagudlæning, åbner hele forsiden og strækker psoas. Disse supplerende øvelser kan bruges selvstændigt til daglig selvregulering.</p>
    `
};

function showWelcome(scrollToInfo = false) {
    currentView = 'welcome';
    currentCircle = null;
    currentConnection = null;
    clearAllActive();

    const welcome = welcomeTexts[currentMode] || welcomeTexts.klient;
    const deepDive = deepDiveTexts[currentMode] || deepDiveTexts.klient;

    const fusionImg = currentMode === 'fusion' ? '<img src="body_fusion_work_illu.png" alt="Body Fusion Work" style="width: 100%; max-width: 400px; display: block; margin: 0 auto 20px;">' : '';

    document.getElementById('info-content').innerHTML = `
        ${fusionImg}
        <h2>${welcome.title}</h2>
        ${welcome.body}
        <div style="margin-top: 25px; border-top: 2px solid #e2e8f0; padding-top: 20px; text-align: center;">
            <button id="deep-dive-toggle" onclick="toggleDeepDive()" style="background: none; border: none; color: #6c82a9; font-size: 1.15rem; cursor: pointer; font-family: 'Times New Roman', Times, serif; font-weight: bold;">
                ${getUI().readMore}
            </button>
            <div id="deep-dive-content" style="display: none; margin-top: 15px; text-align: left;">
                <img src="mmn_ikon.png" alt="MMN ikon" style="width: 50%; max-width: 250px; display: block; margin: 0 auto 20px;">
                ${deepDive}
                ${getShareButtons(welcome.title + ' — Uddybende', deepDive)}
                <div style="margin-top: 15px; text-align: center;">
                    <button onclick="window.scrollTo({top:0,behavior:'smooth'})" style="background: none; border: none; color: #6c82a9; font-size: 1rem; cursor: pointer; font-family: 'Times New Roman', Times, serif;">${getUI().backToTop}</button>
                </div>
            </div>
        </div>
        <img src="tre_logo.png" alt="TRE logo" style="width: 100%; max-width: 300px; display: block; margin: 25px auto 0;">
    `;

    if (scrollToInfo) {
        scrollToElement('info-panel');
    } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}

// Circle clicks
function setupCircleClicks() {
    const circles = document.querySelectorAll('.circle');
    circles.forEach(circle => {
        circle.addEventListener('click', () => {
            const id = circle.dataset.id;
            showCircleView(id);
        });
    });
}

// Format text with paragraph breaks (converts \n\n to <p> tags)
function formatText(text) {
    return text.split('\n\n').map(p => `<p>${p.trim()}</p>`).join('');
}

// Vis cirkel view - KUN denne cirkel, liste af forbindelser
function showCircleView(circleId, doScroll = true) {
    currentView = 'circle';
    currentCircle = circleId;
    currentConnection = null;
    clearAllActive();

    // Aktiver KUN denne cirkel (ikke TRE hvis det ikke er TRE)
    const circle = document.querySelector(`[data-id="${circleId}"]`);
    if (circle && circleId !== 'tre') {
        circle.classList.add('active');
    }

    // Vis info
    const data = content.circles[circleId][currentMode];
    const connectedCircles = getConnectedCircles(circleId);

    let connectionsHTML = '';
    if (connectedCircles.length > 0) {
        connectionsHTML = `
            <div class="connection-list">
                <p><strong>${currentLang === 'en' ? `${getUI().connections} ${circleNames[circleId]} ${getUI().connectsWith}:` : `${getUI().connections} — ${circleNames[circleId]}:`}</strong></p>
                ${connectedCircles.map(targetId => {
                    const targetName = circleNames[targetId];
                    const key1 = `${circleId}-${targetId}`;
                    const key2 = `${targetId}-${circleId}`;
                    const connectionData = content.connections[key1] || content.connections[key2];
                    const connectionText = connectionData ? connectionData[currentMode] : '';
                    return `
                        <div class="connection-accordion">
                            <div class="connection-accordion-header" onclick="toggleConnection(this)">
                                <span class="connection-chevron">▶</span>
                                <span class="connection-accordion-title">${circleNames[circleId]} ↔ ${targetName}</span>
                            </div>
                            <div class="connection-accordion-body">
                                ${formatText(connectionText)}
                            </div>
                        </div>
                    `;
                }).join('')}
            </div>
        `;
    }

    const birdImg = currentMode === 'oevelser' ? '<img src="tre_fugl.png" alt="TRE fugl" style="width: 100%; max-width: 200px; display: block; margin: 0 auto 20px;">' : '';

    document.getElementById('info-content').innerHTML = `
        <div onclick="scrollToDiagram()" style="margin-bottom: 20px; text-align: center; cursor: pointer;">
            <button onclick="scrollToDiagram()" style="background: none; border: none; color: #6c82a9; font-size: 1.1rem; cursor: pointer; font-family: 'Times New Roman', Times, serif; padding: 12px 24px;">${getUI().backToOverview}</button>
        </div>
        ${birdImg}
        <h2>${data.title}</h2>
        ${formatText(data.text)}
        ${getShareButtons(data.title, data.text)}
        ${connectionsHTML}
    `;

    if (doScroll) {
        scrollToElement('info-panel');
    }
}

// Connection view
function showConnectionView(from, to, fromCircle, doScroll = true) {
    currentView = 'connection';
    currentConnection = { from, to, fromCircle };
    clearAllActive();

    // Aktiver de to cirkler og linjen (men ikke TRE cirkel)
    if (from !== 'tre') {
        const circle1 = document.querySelector(`[data-id="${from}"]`);
        if (circle1) circle1.classList.add('active');
    }
    if (to !== 'tre') {
        const circle2 = document.querySelector(`[data-id="${to}"]`);
        if (circle2) circle2.classList.add('active');
    }

    // Find og aktiver linjen
    let line = document.querySelector(`[data-from="${from}"][data-to="${to}"]`);
    if (!line) {
        line = document.querySelector(`[data-from="${to}"][data-to="${from}"]`);
    }
    if (line) {
        line.classList.add('active');
    }

    // Vis connection info
    const key1 = `${from}-${to}`;
    const key2 = `${to}-${from}`;
    const connectionData = content.connections[key1] || content.connections[key2];

    if (!connectionData) {
        document.getElementById('info-content').innerHTML = `
            <div style="margin-bottom: 20px;">
                <button onclick="showCircleView('${fromCircle}')" style="background: none; border: none; color: #6c82a9; font-size: 1rem; cursor: pointer; font-family: 'Times New Roman', Times, serif;">\u2190 ${getUI().backTo} ${circleNames[fromCircle]}</button>
            </div>
            <h2>${getUI().connectionNotFound}</h2>
        `;
        return;
    }

    const text = connectionData[currentMode];
    const fromName = circleNames[from];
    const toName = circleNames[to];

    const birdImgConn = currentMode === 'oevelser' ? '<img src="tre_fugl.png" alt="TRE fugl" style="width: 100%; max-width: 200px; display: block; margin: 0 auto 20px;">' : '';

    document.getElementById('info-content').innerHTML = `
        <div style="margin-bottom: 20px; text-align: center;">
            <button onclick="showCircleView('${fromCircle}')" style="background: none; border: none; color: #6c82a9; font-size: 1rem; cursor: pointer; font-family: 'Times New Roman', Times, serif;">\u2190 ${getUI().backTo} ${circleNames[fromCircle]}</button>
        </div>
        ${birdImgConn}
        <h2>${fromName} \u2194 ${toName}</h2>
        ${formatText(text)}
    `;

    if (doScroll) {
        scrollToElement('info-panel');
    }
}

// Toggle uddybende tekst
function toggleDeepDive() {
    const content = document.getElementById('deep-dive-content');
    const toggle = document.getElementById('deep-dive-toggle');
    if (content.style.display === 'none') {
        content.style.display = 'block';
        toggle.textContent = getUI().readMoreOpen;
        setTimeout(() => {
            const rect = content.getBoundingClientRect();
            const offset = window.scrollY + rect.top - 80;
            window.scrollTo({ top: Math.max(0, offset), behavior: 'smooth' });
        }, 50);
    } else {
        content.style.display = 'none';
        toggle.textContent = getUI().readMore;
    }
}

// Toggle connection akkordeon
function toggleConnection(header) {
    const accordion = header.parentElement;
    const body = accordion.querySelector('.connection-accordion-body');
    const chevron = header.querySelector('.connection-chevron');
    const isOpen = accordion.classList.contains('open');

    if (isOpen) {
        accordion.classList.remove('open');
        body.style.maxHeight = '0';
        chevron.textContent = '▶';
    } else {
        accordion.classList.add('open');
        body.style.maxHeight = body.scrollHeight + 'px';
        chevron.textContent = '▼';
        setTimeout(() => {
            header.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }, 50);
    }
}

// Scroll til diagrammet (figuren) - med offset for top-bar
function scrollToDiagram() {
    clearAllActive();
    const diagram = document.getElementById('diagram');
    if (diagram) {
        const rect = diagram.getBoundingClientRect();
        const offset = window.scrollY + rect.top - 60;
        window.scrollTo({ top: Math.max(0, offset), behavior: 'smooth' });
    }
}

// Del og kopiér — gemmer tekst i et registry så vi undgår inline escaping
const shareRegistry = {};
let shareCounter = 0;

function registerShareContent(title, text) {
    const id = 'share-' + (++shareCounter);
    shareRegistry[id] = { title, text };
    return id;
}

function getShareButtons(title, text) {
    const id = registerShareContent(title, text);
    const ui = getUI();
    return `
        <div class="share-buttons">
            <button class="share-btn" data-share-id="${id}" data-action="copy">${ui.copyText}</button>
            <button class="share-btn" data-share-id="${id}" data-action="share">${ui.shareText}</button>
        </div>
    `;
}

function stripHtml(html) {
    const tmp = document.createElement('div');
    tmp.innerHTML = html;
    return tmp.textContent || tmp.innerText || '';
}

document.addEventListener('click', (e) => {
    const btn = e.target.closest('.share-btn');
    if (!btn) return;
    const id = btn.dataset.shareId;
    const action = btn.dataset.action;
    const data = shareRegistry[id];
    if (!data) return;

    const cleanText = stripHtml(data.text);

    if (action === 'copy') {
        navigator.clipboard.writeText(data.title + '\n\n' + cleanText).then(() => {
            const orig = btn.textContent;
            btn.textContent = getUI().copied;
            setTimeout(() => { btn.textContent = orig; }, 1500);
        });
    } else if (action === 'share') {
        if (navigator.share) {
            navigator.share({ title: data.title, text: cleanText.substring(0, 500) + '...\n\n' + getUI().readMoreInApp });
        } else {
            navigator.clipboard.writeText(data.title + '\n\n' + cleanText).then(() => {
                const orig = btn.textContent;
                btn.textContent = getUI().copied;
                setTimeout(() => { btn.textContent = orig; }, 1500);
            });
        }
    }
});

// Globale funktioner
window.showWelcome = showWelcome;
window.showCircleView = showCircleView;
window.showConnectionView = showConnectionView;
window.toggleConnection = toggleConnection;
window.toggleDeepDive = toggleDeepDive;
window.scrollToDiagram = scrollToDiagram;

// Find forbundne cirkler
function getConnectedCircles(circleId) {
    const allCircles = ['tre', 'polyvagal', 'kropspsykoterapi', 'trauma', 'kronisksygdom', 'bioenergetik', 'psykologi'];
    return allCircles.filter(id => {
        if (id === circleId) return false;
        const key1 = `${circleId}-${id}`;
        const key2 = `${id}-${circleId}`;
        return content.connections[key1] || content.connections[key2];
    });
}

// Connection clicks deaktiveret — linjer er for små til mobil
function setupConnectionClicks() {
    // Ingen klik-handlers på SVG-linjer
}

// Clear all active - TRE forbliver GRÅ
function clearAllActive() {
    document.querySelectorAll('.circle:not([data-id="tre"])').forEach(c => c.classList.remove('active'));
    document.querySelectorAll('.connection').forEach(c => c.classList.remove('active'));
}

// ===== MENU =====
let menuSections = {
    'om': {
        title: 'Om Michael Morin Nissen',
        html: `
            <h2>Michael Morin Nissen</h2>
            <p><strong>Autoriseret psykolog (aut. nr. 201134), certificeret bioenergetisk psykoterapeut og TRE Trainer</strong></p>
            <p>Michael Morin Nissen er cand.psych. fra Københavns Universitet og certificeret bioenergetisk psykoterapeut fra Norddeutsches Institut für Bioenergetische Analyse i Tyskland. Han er TRE Trainer, uddannet 2009-2013 under Dr. David Berceli i Tyskland, Danmark og Polen.</p>
            <p>Fra 2007 til 2020 arbejdede Michael som psykolog ved Scleroseforeningen, hvor han varetog terapi, gruppeforløb, workshops og TRE-forskning. Han har faciliteret TRE for over 1000 mennesker med sclerose og har bidraget til to videnskabelige studier om TRE og multipel sclerose.</p>
            <p>Michael driver i dag privat praksis på Frederiksberg, hvor han tilbyder individuel terapi, gruppeterapi og TRE-sessioner. Han underviser i TRE internationalt i bl.a. Skandinavien, Tyskland, England, Sydafrika, Israel og Australien.</p>
            <p>Hans tilgang integrerer bioenergetisk analyse, Somatic Experiencing, TRE, neuro-affektiv psykoterapi og reichianske metoder i en sammenhængende krops- og traumeorienteret praksis.</p>
            <p>Læs mere på <a href="https://morin-nissen.com" target="_blank" style="color: #6c82a9;">morin-nissen.com</a></p>
        `
    },
    'tre-info': {
        title: 'Om TRE',
        html: `
            <h2>Om TRE</h2>
            <p><strong>Tension & Trauma Releasing Exercises</strong></p>
            <p>TRE er en metode udviklet af Dr. David Berceli, der aktiverer kroppens naturlige mekanisme til at frigøre dyb muskelspænding og stress. Metoden består af 7 enkle øvelser, der trætter specifikke muskelgrupper og udløser en naturlig rystemekanisme — neurogen tremor.</p>
            <p>Tremoren er en medfødt refleks, der ses hos alle pattedyr efter stressende oplevelser. Den hjælper nervesystemet med at vende tilbage til balance. TRE praktiseres i over 60 lande af mere end 1000 certificerede providers.</p>
            <p>Denne app præsenterer TRE gennem seks videnskabelige perspektiver, der tilsammen giver en dybdegående forståelse af metodens virkningsmekanismer.</p>
        `
    },
    'sclerose-info': {
        title: 'TRE & Sclerose',
        html: `
            <h2>TRE & Sclerose</h2>
            <p>TRE har vist særlig lovende resultater for mennesker med multipel sclerose. Scleroseforeningen i Danmark har støttet TRE-programmer siden 2007, hvor over 1000 mennesker med sclerose har deltaget.</p>
            <p><strong>Videnskabelige publikationer:</strong></p>
            <ul>
                <li>2012: Publikation i BMC Complementary and Alternative Medicine om multidisciplinær MS-rehabilitering</li>
                <li>2021: Studie i Journal of Traditional and Complementary Medicine om TRE's effekter for MS-patienter</li>
                <li>2022: ECTRIMS-præsentation om body-mind terapi og forbedret livskvalitet ved attakvis MS</li>
            </ul>
            <p><strong>Dokumenterede forbedringer:</strong></p>
            <ul>
                <li>Reduceret muskelspasticitet og stivhed</li>
                <li>Forbedret søvnkvalitet</li>
                <li>Mindre træthed og mere energi</li>
                <li>Bedre smerteforebyggelse</li>
                <li>Øget kropsbevidsthed og livskvalitet</li>
            </ul>
            <p>TRE-øvelserne kan tilpasses fuldstændigt til individuelle behov og kan udføres liggende, siddende eller stående.</p>
        `
    },
    'tre-uddannelse': {
        title: 'TRE Uddannelse',
        html: `
            <h2>TRE Uddannelse i Danmark</h2>
            <p><strong>Bliv certificeret TRE Provider</strong></p>
            <p>Michael Morin Nissen er TRE Certification Trainer og leder TRE Danmarks uddannelsesprogram. Uddannelsen certificerer dig som TRE Provider gennem den internationale organisation TRE for ALL.</p>
            <p><strong>Uddannelsens opbygning:</strong></p>
            <ul>
                <li>3 todages træningsworkshops med praktiske TRE-øvelser og teori</li>
                <li>3 todages gruppesupervisionssessioner</li>
                <li>4 timers individuel TRE-behandling med Certification Trainer</li>
                <li>2 timers individuel supervision med Certification Trainer</li>
            </ul>
            <p><strong>Pris:</strong> 26.700 kr. (betales pr. workshop à 3.300 kr.)</p>
            <p><strong>Tematiske workshops 2026:</strong></p>
            <ul>
                <li>Introduktion / Modul 1: 20.-21. februar & 4.-5. september</li>
                <li>TRE og Psykoterapi: 6.-7. marts</li>
                <li>TRE og Følelser: 29.-30. maj</li>
                <li>TRE og Øjne: 13.-14. november</li>
                <li>Supervisionsworkshop: 11.-12. september</li>
            </ul>
            <p><strong>Målgruppe:</strong> Psykologer, psykoterapeuter, fysioterapeuter, læger, sygeplejersker, lærere, coaches, politi, beredskab og alle der arbejder med traumeramte.</p>
            <p><strong>Institutioner der bruger TRE i Danmark:</strong></p>
            <ul>
                <li>Rigshospitalet</li>
                <li>Forsvaret (Danske Forsvar)</li>
                <li>Gigtforeningen</li>
                <li>Region Syddanmark Psykiatri</li>
                <li>Flere flygtningerehabilitationscentre</li>
            </ul>
            <p>Læs mere og tilmeld dig på <a href="https://www.tre-danmark.dk" target="_blank" style="color: #6c82a9;">tre-danmark.dk</a></p>
        `
    },
    'privatlivspolitik': {
        title: 'Privatlivspolitik',
        html: `
            <h2>Privatlivspolitik</h2>
            <p><strong>Dataansvarlig:</strong> Michael Morin Nissen</p>
            <p>Denne app indsamler ingen personlige oplysninger. Der bruges ingen cookies, ingen tracking og ingen analytics. Al data forbliver på din enhed.</p>
            <p><strong>Indhold:</strong> Appens indhold er udelukkende til informationsformål og erstatter ikke professionel rådgivning eller behandling. Kontakt altid en sundhedsfaglig professionel, før du påbegynder nye øvelser eller ændrer din behandlingsplan.</p>
            <p><strong>Ophavsret:</strong> Alt indhold i denne app er beskyttet af ophavsretsloven. Indholdet må ikke kopieres, distribueres eller bruges kommercielt uden skriftlig tilladelse.</p>
        `
    },
    'kontakt': {
        title: 'Kontakt',
        html: `
            <h2>Kontakt</h2>
            <p><strong>Michael Morin Nissen</strong></p>
            <p>Autoriseret psykolog</p>
            <p>Roskildevej 46 D, 1.<br>Frederiksberg, København</p>
            <p>Website: <a href="https://morin-nissen.com" target="_blank" style="color: #6c82a9;">morin-nissen.com</a></p>
            <p>Har du spørgsmål til TRE eller denne app, er du velkommen til at kontakte Michael via hans hjemmeside.</p>
        `
    }
};

function setupMenu() {
    const menuBtn = document.getElementById('menu-btn');
    const menuOverlay = document.getElementById('menu-overlay');
    const menuClose = document.getElementById('menu-close');
    const menuBack = document.getElementById('menu-back');
    const menuContent = document.getElementById('menu-content');
    const menuDetail = document.getElementById('menu-detail');
    const menuDetailContent = document.getElementById('menu-detail-content');

    menuBtn.addEventListener('click', () => {
        menuOverlay.classList.add('open');
        menuContent.style.display = 'block';
        menuDetail.style.display = 'none';
    });

    menuClose.addEventListener('click', () => {
        menuOverlay.classList.remove('open');
    });

    menuOverlay.addEventListener('click', (e) => {
        if (e.target === menuOverlay) {
            menuOverlay.classList.remove('open');
        }
    });

    menuBack.addEventListener('click', () => {
        menuContent.style.display = 'block';
        menuDetail.style.display = 'none';
    });

    document.querySelectorAll('.menu-item[data-section]').forEach(item => {
        item.addEventListener('click', () => {
            const section = item.dataset.section;
            const data = menuSections[section];
            if (data) {
                menuDetailContent.innerHTML = data.html;
                menuContent.style.display = 'none';
                menuDetail.style.display = 'block';
            }
        });
    });

    // Reset onboarding
    document.getElementById('reset-onboarding').addEventListener('click', () => {
        localStorage.removeItem('tre-onboarding-done');
        menuOverlay.classList.remove('open');
        const overlay = document.getElementById('onboarding-overlay');
        overlay.style.display = 'flex';
        overlay.style.opacity = '1';
        setupOnboarding();
    });

    // Language switcher
    const langBtn = document.getElementById('lang-switch-btn');
    if (langBtn) {
        langBtn.addEventListener('click', () => {
            const newLang = currentLang === 'da' ? 'en' : 'da';
            setLanguage(newLang);
            menuOverlay.classList.remove('open');
        });
    }
}

// ===== SEARCH =====
let modeNames = {
    klient: 'Til klienter',
    fusion: 'Body Fusion Work',
    videnskab: 'Videnskabeligt',
    sclerose: 'Til mennesker med sclerose',
    oevelser: 'Øvelser'
};

function buildSearchIndex() {
    const index = [];
    // Index circles
    for (const [circleId, modes] of Object.entries(content.circles)) {
        for (const [mode, data] of Object.entries(modes)) {
            index.push({
                type: 'circle',
                circleId,
                mode,
                title: data.title,
                text: data.text,
                searchText: (data.title + ' ' + data.text).toLowerCase()
            });
        }
    }
    // Index connections
    for (const [key, modes] of Object.entries(content.connections)) {
        const [from, to] = key.split('-');
        for (const [mode, text] of Object.entries(modes)) {
            const fromName = circleNames[from] || from;
            const toName = circleNames[to] || to;
            const title = `${fromName} \u2194 ${toName}`;
            index.push({
                type: 'connection',
                from,
                to,
                mode,
                title,
                text,
                searchText: (title + ' ' + text).toLowerCase()
            });
        }
    }
    return index;
}

let suggestedTopics = [
    { label: 'Spasticitet', query: 'spasticitet' },
    { label: 'Vagusnerven', query: 'vagus' },
    { label: 'Nervesystem', query: 'nervesystem' },
    { label: 'Tremor', query: 'tremor' },
    { label: 'Søvn', query: 'søvn' },
    { label: 'Psoas', query: 'psoas' },
    { label: 'Stress', query: 'stress' },
    { label: 'Cortisol', query: 'cortisol' },
    { label: 'Traume', query: 'traum' },
    { label: 'Sclerose', query: 'sclerose' },
    { label: 'Øvelser', query: 'øvelse' },
    { label: 'Bioenergetik', query: 'bioenergetik' },
];

const searchCategories = {
    da: [
        { query: 'polyvagal', title: 'Polyvagal teori', desc: 'Nervesystemets tre tilstande og vagusnerven' },
        { query: 'psykoterapi', title: 'Kropsorienteret psykoterapi', desc: 'Kropslig bearbejdning og terapeutisk praksis' },
        { query: 'trauma', title: 'Trauma & Stress', desc: 'Traumeresponser, PTSD og stressregulering' },
        { query: 'sclerose', title: 'Sclerose & kronisk sygdom', desc: 'TRE tilpasset mennesker med MS og kroniske tilstande' },
        { query: 'bioenergetik', title: 'Bioenergetik', desc: 'Reichs kropskarakter og muskelspænding' },
        { query: 'psykologi', title: 'Klinisk psykologi', desc: 'Evidensbaseret praksis og klinisk integration' }
    ],
    en: [
        { query: 'polyvagal', title: 'Polyvagal Theory', desc: 'The three states of the nervous system and the vagus nerve' },
        { query: 'psychotherapy', title: 'Body-Oriented Psychotherapy', desc: 'Somatic processing and therapeutic practice' },
        { query: 'trauma', title: 'Trauma & Stress', desc: 'Trauma responses, PTSD, and stress regulation' },
        { query: 'sclerosis', title: 'MS & Chronic Illness', desc: 'TRE adapted for people with MS and chronic conditions' },
        { query: 'bioenergetic', title: 'Bioenergetics', desc: 'Reich\'s character armor and muscular tension' },
        { query: 'psychology', title: 'Clinical Psychology', desc: 'Evidence-based practice and clinical integration' }
    ]
};

function getSearchLanding() {
    const ui = getUI();
    const topicBtns = suggestedTopics.map(t =>
        `<button class="search-topic-btn" data-query="${t.query}">${t.label}</button>`
    ).join('');

    const cats = searchCategories[currentLang] || searchCategories.da;
    const catHTML = cats.map(c => `
        <div class="search-category" data-query="${c.query}">
            <div class="search-cat-title">${c.title}</div>
            <div class="search-cat-desc">${c.desc}</div>
        </div>
    `).join('');

    return `
        <div style="margin-top: 20px;">
            <p style="font-family: 'Times New Roman', serif; color: #2d3748; font-size: 1.1rem; margin-bottom: 15px; font-weight: bold;">${ui.searchPopular}</p>
            <div class="search-topics">${topicBtns}</div>
        </div>
        <div style="margin-top: 30px;">
            <p style="font-family: 'Times New Roman', serif; color: #2d3748; font-size: 1.1rem; margin-bottom: 12px; font-weight: bold;">${ui.searchExplore}</p>
            <div class="search-categories">
                ${catHTML}
            </div>
        </div>
    `;
}

function renderSearchResults(results, query, searchResults) {
    const ui = getUI();
    if (results.length === 0) {
        searchResults.innerHTML = `
            <div style="text-align: center; margin-top: 40px;">
                <p style="font-family: 'Times New Roman', serif; color: #718096; font-size: 1.1rem;">${ui.searchNoResults} "${query}"</p>
                <p style="font-family: 'Times New Roman', serif; color: #a0aec0; font-size: 0.95rem; margin-top: 8px;">${ui.searchTryAnother}</p>
            </div>
        `;
        return;
    }

    // Group by mode
    const grouped = {};
    results.forEach(item => {
        if (!grouped[item.mode]) grouped[item.mode] = [];
        grouped[item.mode].push(item);
    });

    let html = `<p style="font-family: 'Times New Roman', serif; color: #718096; font-size: 0.9rem; margin-bottom: 15px;">${results.length} ${results.length !== 1 ? ui.resultSuffix.other : ui.resultSuffix.one}</p>`;

    for (const [mode, items] of Object.entries(grouped)) {
        html += `<div class="search-mode-group">
            <div class="search-mode-label">${modeNames[mode]}</div>`;
        items.forEach(item => {
            const textLower = item.text.toLowerCase();
            const textPos = textLower.indexOf(query);
            let snippet = '';
            if (textPos >= 0) {
                const start = Math.max(0, textPos - 30);
                const end = Math.min(item.text.length, textPos + query.length + 50);
                const raw = (start > 0 ? '...' : '') + item.text.substring(start, end) + (end < item.text.length ? '...' : '');
                // Highlight match
                snippet = raw.replace(new RegExp(`(${query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi'), '<mark>$1</mark>');
            }
            html += `
                <div class="search-result-item" data-type="${item.type}" data-circle="${item.circleId || ''}" data-from="${item.from || ''}" data-to="${item.to || ''}" data-mode="${item.mode}">
                    <div class="search-result-title">${item.title}</div>
                    ${snippet ? `<div class="search-result-snippet">${snippet}</div>` : ''}
                </div>
            `;
        });
        html += '</div>';
    }

    searchResults.innerHTML = html;
    attachSearchResultHandlers(searchResults);
}

function attachSearchResultHandlers(container) {
    container.querySelectorAll('.search-result-item').forEach(el => {
        el.addEventListener('click', () => {
            const mode = el.dataset.mode;
            const type = el.dataset.type;
            currentMode = mode;
            document.querySelectorAll('.mode-btn').forEach(b => b.classList.remove('active'));
            const modeBtn = document.querySelector(`.mode-btn[data-mode="${mode}"]`);
            if (modeBtn) modeBtn.classList.add('active');
            if (type === 'circle') {
                showCircleView(el.dataset.circle);
            } else {
                showConnectionView(el.dataset.from, el.dataset.to, el.dataset.from);
            }
            document.getElementById('search-overlay').classList.remove('open');
        });
    });
}

// Global search index that can be rebuilt on language switch
let globalSearchIndex = null;

function rebuildSearchIndex() {
    globalSearchIndex = buildSearchIndex();
}

function setupSearch() {
    const searchBtn = document.getElementById('search-btn');
    const searchOverlay = document.getElementById('search-overlay');
    const searchClose = document.getElementById('search-close');
    const searchClear = document.getElementById('search-clear');
    const searchInput = document.getElementById('search-input');
    const searchResults = document.getElementById('search-results');
    globalSearchIndex = buildSearchIndex();

    function updateClearBtn() {
        searchClear.style.display = searchInput.value.length > 0 ? 'block' : 'none';
    }

    function doSearch(query, displayText) {
        searchInput.value = displayText || query;
        const q = query.trim().toLowerCase();
        const results = globalSearchIndex.filter(item => item.searchText.includes(q));
        renderSearchResults(results, q, searchResults);
        updateClearBtn();
    }

    function showLanding() {
        searchResults.innerHTML = getSearchLanding();
        // Attach topic button handlers
        searchResults.querySelectorAll('.search-topic-btn').forEach(btn => {
            btn.addEventListener('click', () => doSearch(btn.dataset.query, btn.textContent));
        });
        searchResults.querySelectorAll('.search-category').forEach(cat => {
            cat.addEventListener('click', () => {
                const title = cat.querySelector('.search-cat-title');
                doSearch(cat.dataset.query, title ? title.textContent : cat.dataset.query);
            });
        });
    }

    searchBtn.addEventListener('click', () => {
        searchOverlay.classList.add('open');
        searchInput.value = '';
        showLanding();
        setTimeout(() => searchInput.focus(), 100);
    });

    searchClose.addEventListener('click', () => {
        searchOverlay.classList.remove('open');
    });

    searchClear.addEventListener('click', () => {
        searchInput.value = '';
        updateClearBtn();
        showLanding();
        searchInput.focus();
    });

    searchInput.addEventListener('input', () => {
        updateClearBtn();
        const query = searchInput.value.trim().toLowerCase();
        if (query.length < 2) {
            showLanding();
            return;
        }
        const results = globalSearchIndex.filter(item => item.searchText.includes(query));
        renderSearchResults(results, query, searchResults);
    });
}

// ===== LANGUAGE SWITCHING =====

// Store Danish originals on first load
const content_da_backup = {
    content: JSON.parse(JSON.stringify(content)),
    circleNames: Object.assign({}, circleNames),
    welcomeTexts: JSON.parse(JSON.stringify(welcomeTexts)),
    deepDiveTexts: Object.assign({}, deepDiveTexts),
    menuSections: JSON.parse(JSON.stringify(menuSections)),
    modeNames: Object.assign({}, modeNames),
    suggestedTopics: JSON.parse(JSON.stringify(suggestedTopics))
};

function getUI() {
    return uiStrings[currentLang] || uiStrings.da;
}

function setLanguage(lang) {
    if (lang !== 'da' && lang !== 'en') return;
    currentLang = lang;
    localStorage.setItem('tre-language', lang);

    // Swap content
    if (lang === 'en' && window.i18n_en) {
        content = window.i18n_en.content;
        circleNames = window.i18n_en.circleNames;
        welcomeTexts = window.i18n_en.welcomeTexts;
        deepDiveTexts = window.i18n_en.deepDiveTexts;
        menuSections = window.i18n_en.menuSections;
        modeNames = window.i18n_en.modeNames;
        suggestedTopics = window.i18n_en.suggestedTopics;
    } else {
        content = content_da_backup.content;
        circleNames = content_da_backup.circleNames;
        welcomeTexts = content_da_backup.welcomeTexts;
        deepDiveTexts = content_da_backup.deepDiveTexts;
        menuSections = content_da_backup.menuSections;
        modeNames = content_da_backup.modeNames;
        suggestedTopics = content_da_backup.suggestedTopics;
    }

    const ui = getUI();

    // Update HTML lang attribute
    document.documentElement.lang = lang;

    // Update page title
    document.title = ui.pageTitle;

    // Update header
    const h1 = document.querySelector('header h1');
    if (h1) h1.textContent = ui.headerTitle;
    const subtitle = document.querySelector('.subtitle');
    if (subtitle) subtitle.textContent = ui.subtitle;

    // Update mode buttons
    document.querySelectorAll('.mode-btn').forEach(btn => {
        const mode = btn.dataset.mode;
        if (ui.modeLabels[mode]) btn.textContent = ui.modeLabels[mode];
    });

    // Update SVG circle labels
    updateCircleLabels(ui);

    // Update menu items
    document.querySelectorAll('.menu-item[data-section]').forEach(item => {
        const section = item.dataset.section;
        if (ui.menuItems[section]) item.textContent = ui.menuItems[section];
    });

    // Update reset onboarding text
    const resetBtn = document.getElementById('reset-onboarding');
    if (resetBtn) resetBtn.textContent = ui.resetOnboarding;

    // Update menu back button
    const menuBack = document.getElementById('menu-back');
    if (menuBack) menuBack.innerHTML = ui.menuBack;

    // Update search placeholder
    const searchInput = document.getElementById('search-input');
    if (searchInput) searchInput.placeholder = ui.searchPlaceholder;

    // Update language switcher button text
    const langBtn = document.getElementById('lang-switch-btn');
    if (langBtn) {
        langBtn.innerHTML = `<span style="font-size: 1.1rem;">${lang === 'da' ? '🇬🇧' : '🇩🇰'}</span> ${ui.langSwitch}`;
    }

    // Update default info panel content
    const infoContent = document.getElementById('info-content');
    if (infoContent) {
        infoContent.innerHTML = `
            <h2>${ui.welcomeDefault.title}</h2>
            <p>${ui.welcomeDefault.howTo}</p>
            <ul>
                <li>${ui.welcomeDefault.li1}</li>
                <li>${ui.welcomeDefault.li2}</li>
            </ul>
        `;
    }

    // Rebuild search index
    rebuildSearchIndex();

    // Re-render current view
    if (currentView === 'welcome') {
        showWelcome();
    } else if (currentView === 'circle' && currentCircle) {
        showCircleView(currentCircle, false);
    } else if (currentView === 'connection' && currentConnection) {
        showConnectionView(currentConnection.from, currentConnection.to, currentConnection.fromCircle, false);
    }
}

function updateCircleLabels(ui) {
    const svg = document.getElementById('tre-model');
    if (!svg) return;

    // For each circle, find its text elements and update
    const circleIds = ['polyvagal', 'kropspsykoterapi', 'trauma', 'kronisksygdom', 'bioenergetik', 'psykologi'];

    circleIds.forEach(id => {
        const labels = ui.circleLabels[id];
        if (!labels) return;

        const circle = svg.querySelector(`circle[data-id="${id}"]`);
        if (!circle) return;

        const cx = parseFloat(circle.getAttribute('cx'));
        const cy = parseFloat(circle.getAttribute('cy'));

        // Remove existing text elements for this circle
        // Find texts near this circle's position
        const allTexts = svg.querySelectorAll('.circle-text:not(.center-text)');
        const toRemove = [];
        allTexts.forEach(t => {
            const tx = parseFloat(t.getAttribute('x'));
            const ty = parseFloat(t.getAttribute('y'));
            if (Math.abs(tx - cx) < 5) {
                // Check if it's within the circle's vertical range
                if (Math.abs(ty - cy) < 60) {
                    toRemove.push(t);
                }
            }
        });
        toRemove.forEach(t => t.remove());

        // Add new text elements
        const lineHeight = 18;
        const totalHeight = (labels.length - 1) * lineHeight;
        const startY = cy - totalHeight / 2 + 5;

        labels.forEach((line, i) => {
            const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
            text.setAttribute('class', 'circle-text');
            text.setAttribute('x', cx);
            text.setAttribute('y', startY + i * lineHeight);
            text.textContent = line;
            svg.querySelector('#circles').appendChild(text);
        });
    });
}

// Initialize language on load
function initLanguage() {
    if (currentLang === 'en' && window.i18n_en) {
        setLanguage('en');
    }
}

window.setLanguage = setLanguage;

