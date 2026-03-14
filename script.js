// Content database - TRE altid stort, nu med sclerose-mode
// Alle tekster: 80-100 ord, opdelt i 2 afsnit
const content = {
    circles: {
        tre: {
            klient: {
                title: "TRE - Tension & Trauma Releasing Exercises",
                text: "TRE er en metode udviklet af Dr. David Berceli, hvor du gennem 7 enkle øvelser trættes specifikke muskelgrupper — særligt psoas-musklen dybt i hoften. Når musklerne er tilstrækkeligt trætte, aktiveres kroppens naturlige rystemekanisme: en neurogen tremor der starter i benene og kan brede sig til hele kroppen.\n\nDet er den samme mekanisme du ser når dyr ryster efter en farlig situation. Tremoren hjælper nervesystemet med at frigøre ophobet spænding og vende tilbage til ro og balance. Mange oplever dyb afslapning, bedre søvn og mindre kropslig uro allerede efter første session."
            },
            fagfolk: {
                title: "TRE - Klinisk Perspektiv",
                text: "TRE aktiverer neurogene tremor gennem systematisk muskeltrætning, primært i psoas, quadriceps og adduktorer. Metoden faciliterer autonomt nervesystem-regulering uden at kræve narrativ processing af traumatisk materiale, hvilket gør den anvendelig som standalone-intervention eller integreret i eksisterende terapeutisk praksis.\n\nKlinisk observation viser at tremor typisk initierer i benene og progressivt involverer truncus og øvre ekstremiteter. Intensitet og udbredelse titreres af klienten selv. Metoden er særligt indiceret ved kronisk stress, PTSD, angst og psykosomatiske tilstande. Over 1000 certificerede TRE-providers praktiserer globalt i mere end 60 lande."
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
            fagfolk: {
                title: "Polyvagal Teori - Autonomt Nervesystem",
                text: "Stephen Porges' polyvagale teori beskriver tre fylogenetisk ordnede autonome tilstande: ventral vagal kompleks (social engagement og sikkerhed), sympatisk mobilisering (kamp/flugt), og dorsal vagal kompleks (immobilisering og shutdown). Neuroception — den ubevidste vurdering af sikkerhed — bestemmer hvilken tilstand der dominerer.\n\nTRE faciliterer bevægelse fra sympatisk hyperarousal eller dorsal shutdown tilbage til ventral vagal regulering. Klinisk observeres dette som spontan uddybning af vejrtrækning, genetablering af øjenkontakt, og øget affektiv tilgængelighed. Tremor fungerer som neuroceptivt sikkerhedssignal der kommunikerer completion af defensiv mobilisering til hjernestammen."
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
        narrative: {
            klient: {
                title: "Kropsorienteret Psykoterapi - Krop og Sind",
                text: "Din krop og din psyke hænger uløseligt sammen. Når livet gør ondt — gennem tab, stress eller overgreb — spænder kroppen som beskyttelse. De spændinger bliver ofte siddende i årevis som kronisk hovedpine, ondt i ryggen, anspændte skuldre eller knude i maven. Traditionel samtaleterapi arbejder oppefra og ned, men mange problemer sidder dybere end ordene kan nå.\n\nKropsorienteret psykoterapi arbejder nedefra og op: gennem dybere vejrtrækning, kropsøvelser, vibration og berøring forløses det der sidder fast i musklerne. Du behøver ikke nødvendigvis forstå eller tale om det — kroppen kan slippe direkte. Når kroppen slipper, følger sindet med."
            },
            fagfolk: {
                title: "Kropsorienteret Psykoterapi - Somatisk Integration",
                text: "Kropsorienteret psykoterapi integrerer krop og psyke som terapeutisk grundprincip. Tilbageholdte udtryk — længsel, vrede, angst, sorg — lagres som muskelspændinger, underspændte muskler og fastlåste kropsholdninger. Gennem dybere vejrtrækning, kropsøvelser, vibration og direkte somatisk intervention forløses tilbageholdt materiale.\n\nTilgangen er primært bottom-up: somatisk intervention faciliterer autonom re-regulering som grundlag for kognitiv integration. Michael Morin Nissen har siden 2000 praktiseret kropsorienteret psykoterapi med integration af bioenergetisk analyse, TRE og Emotional Core Perception. Metoden bygger bro mellem Reichs og Lowens bioenergetiske tradition og moderne traumeforståelse baseret på polyvagal teori."
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
        enactivisme: {
            klient: {
                title: "Trauma & Stress - Når Kroppen Husker",
                text: "Når noget overvældende sker — en ulykke, et tab, langvarig stress eller overgreb — forbereder kroppen sig på at kæmpe eller flygte. Hvis den reaktion bliver afbrudt eller undertrykt, sidder energien fast i kroppen som spænding, uro, følelsesløshed eller kronisk smerte. Kroppen 'husker' traumet selvom du måske ikke tænker på det.\n\nTRE hjælper kroppen med at fuldføre den afbrudte forsvarsreaktion og frigøre den fastlåste energi. De 7 øvelser aktiverer kroppens naturlige tremor uden at du behøver tale om det svære. Mange oplever lettelse, varme og dyb afslapning når kroppen endelig får lov at slippe det den har holdt fast i."
            },
            fagfolk: {
                title: "Trauma & Stress - Somatisk Traumeforståelse",
                text: "Traumatisk materiale lagres som autonome forsvarstilstande: freeze (immobilisering med frygt), flight (sympatisk mobilisering), fight (aggressiv mobilisering) og collapse (dorsal vagal shutdown). Incomplete defensive responses vedligeholder kronisk sympatisk hyperarousal eller dorsal immobilisering og manifesterer sig som PTSD, angst, depression og psykosomatik.\n\nTRE faciliterer completion af disse afbrudte responser gennem neurogen tremor uden at kræve narrativ genbearbejdning — en afgørende fordel ved preverbal eller kompleks traumatisering. Centralt er window of tolerance, titrering af aktivering, og pendulering mellem ressource og traumatisk materiale. Kliniske markører inkluderer freezing, flooding og dissociation som indikatorer for reguleringskapacitet."
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
        levine: {
            klient: {
                title: "Sclerose & Kronisk Sygdom - TRE som Selvhjælp",
                text: "Når du lever med en kronisk sygdom som sclerose, er kroppen under konstant pres — både fra sygdommen selv og fra den stress det er at leve med den. TRE tilbyder en skånsom metode til selvregulering som du kan bruge hjemme, i dit eget tempo. Metoden tilpasses altid din aktuelle tilstand — på dårlige dage kan øvelserne gøres liggende.\n\nOver 1000 mennesker med sclerose har haft gavn af TRE gennem den danske Scleroseforening. Mange oplever reduceret spasticitet, bedre søvn, mindre træthed og færre smerter. To videnskabelige studier bekræfter forbedret livskvalitet. TRE erstatter ikke medicin, men giver dig et redskab til selv at påvirke din tilstand."
            },
            fagfolk: {
                title: "Sclerose & Kronisk Sygdom - Klinisk Erfaring",
                text: "13 års klinisk erfaring fra Scleroseforeningen med over 1000 MS-patienter dokumenterer TRE's anvendelighed ved kronisk sygdom. Michael Morin Nissen har siden 2002 udviklet tilpassede protokoller med særlig opmærksomhed på energiforvaltning, dosering og window of tolerance. Spasticitet har både neurologisk komponent (demyelinisering) og autonom komponent (defensiv tonus).\n\nTRE adresserer primært den autonome komponent, hvilket forklarer den klinisk observerede reduktion i spasticitet trods uændret neurologisk status. To videnskabelige studier gennemført af Scleroseforeningen bekræfter forbedret livskvalitet. Body Fusion Work — Morin Nissens integration af bioenergetik, TRE og yoga-elementer — er udviklet specifikt til denne målgruppe."
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
        reich: {
            klient: {
                title: "Bioenergetik - Muskulært Panser",
                text: "Når livet er hårdt, spænder vi ubevidst kroppen som beskyttelse — anspændte skuldre, låst kæbe, tilbageholdt vejrtrækning, sammenkneben mave. Over tid glemmer vi at slippe igen, og spændingerne bliver permanente. Alexander Lowen kaldte dette 'muskulært panser': mønstre i musklerne der holder følelser og livskraft tilbage.\n\nBioenergetik arbejder med at opløse dette panser gennem dybere vejrtrækning, grounding-øvelser der styrker kontakten med kroppen og jorden, og bevægelser der hjælper med at udtrykke tilbageholdte følelser. TRE's tremor supplerer ved at aktivere kroppens egen evne til at ryste panseret af. Når musklerne slipper, vender energi, følelser og livskraft tilbage."
            },
            fagfolk: {
                title: "Bioenergetik - Character Armor",
                text: "Wilhelm Reichs teori om character armor, videreudviklet af Alexander Lowen i bioenergetisk analyse, beskriver hvordan kroniske muskelspændinger embodier psykologisk forsvar. Armor organiseres i segmentelle ringe — okulært, oralt, cervikalt, thorakalt, diafragmatisk, abdominalt og pelvisk — der hver holder specifikke affektive temaer.\n\nTRE faciliterer mildnelse af armor gennem neurogen tremor der arbejder bottom-up fra bækken og ben. Michael Morin Nissen er certificeret bioenergetisk psykoterapeut fra Norddeutsche Institut für Bioenergetische Analyse og integrerer bioenergetisk forståelse med TRE i sin praksis. Tremor restaurerer energetisk flow og affektiv tilgængelighed og komplementerer verbal psykoterapi."
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
            fagfolk: {
                title: "Klinisk Psykologi - Terapeutisk Relation",
                text: "TRE's kliniske effectiveness medieres afgørende af terapeutisk alliance og interpersonel co-regulering. Providers embodied tilstedeværelse faciliterer klientens neuroceptive oplevelse af sikkerhed som beskrevet i polyvagal teori. Attachment-kvaliteten i relationen bestemmer klientens window of tolerance for tremor-intensitet og affektiv aktivering.\n\nMichael Morin Nissen er autoriseret psykolog fra Københavns Universitet og integrerer klinisk psykologisk kompetence med somatisk arbejde. Ved kompleks traumatisering er forståelse af dissociation, titrering og overførings/modoverføringsdynamikker afgørende for sikker TRE-facilitering. Relationel neurobiologi bekræfter at co-regulering er fysiologisk nødvendigt for dybere somatisk processing."
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
            fagfolk: "TRE faciliterer polyvagal regulering gennem aktivering af den ventral vagale pathway. Neurogen tremor stimulerer afferent vagal signalering, som nedregulerer sympatisk hyperarousal og modvirker dorsal vagal shutdown. Klinisk observeres skift fra defensive autonome tilstande til social engagement.\n\nTremor fungerer som en neuroceptiv sikkerhedssignal der kommunikerer til hjernestammen at mobiliseringsresponsen er komplet. Klienten bliver mere til stede, øjenkontakt genetableres, og vejrtrækningen uddybes spontant. Særligt effektivt ved kronisk sympatisk aktivering hvor verbale interventioner alene er utilstrækkelige til autonom re-regulering.",
            videnskab: "Neurogen tremor modulerer vagal efferens via brainstem circuits der involverer nucleus tractus solitarius og dorsal motor nucleus. Afferent mekanoreceptor-signalering fra muskelspindler og Golgi-seneorganer under tremor aktiverer vagale feedback-loops der nedregulerer amygdala-medieret frygtrespons.\n\nMålbar effekt inkluderer øget respiratory sinus arrhythmia, forbedret heart rate variability og reduceret sympatisk hudrespons. Tremor-induceret parasympatisk dominans faciliterer skift fra ergotrop til trofotrop tilstand, hvilket understøtter immunologisk homeostase og præfrontal korteks engagement. Reducerede inflammatoriske biomarkører er observeret ved regelmæssig TRE-praksis.",
            sclerose: "Ved sclerose er nervesystemet ofte i kronisk stress-tilstand — både fra sygdommens neurologiske påvirkning og den psykologiske belastning ved at leve med uforudsigelighed. Denne vedvarende alarm forværrer inflammation, spasticitet og træthed direkte.\n\nTRE's tremor-mekanisme hjælper nervesystemet tilbage til ro-tilstand via vagusnerve-aktivering. Når nervesystemet finder ro, reduceres den autonome komponent af spasticiteten, immunfunktionen forbedres, og kroppens selvhelingskapacitet øges. Forskning viser at parasympatisk dominans reducerer neuroinflammation via den cholinerge antiinflammatoriske pathway — kritisk for symptomkontrol ved sclerose.",
            oevelser: "Under TRE-tremoren kan du aktivt understøtte det polyvagale skift med vejrtrækning. Ånde ind i 4 tæl, ud i 8 tæl mens tremoren arbejder i benene. Den forlængede udånding aktiverer vagusnerven og forstærker tremorens effekt på nervesystemet. Læg mærke til hvornår vejrtrækningen spontant bliver dybere — det er tegn på ventral vagal aktivering.\n\nEn konkret øvelse: læg hænderne på maven under tremor og mærk bevægelsen indefra. Når tremoren breder sig til bækkenet, begynder diafragma ofte at slippe spontant. Summende lyde på udåndingen vibrerer i struben tæt på vagusnerven og forstærker den parasympatiske aktivering."
        },
        'tre-reich': {
            klient: "Når vi oplever smerte eller stress, spænder vi ubevidst musklerne — som et panser der beskytter os. Over tid bliver panseret permanent og holder følelser, energi og livskraft indespærret. Alexander Lowen kaldte dette 'character armor' i sin bioenergetiske analyse.\n\nTRE's tremor arbejder direkte med disse dybe muskelspændinger. Musklerne begynder at vibrere og slippe lag for lag, uden at du behøver forstå eller tale om hvad der sidder fast. Mange oplever at følelser, varme og bevægelsesfrihed vender tilbage efterhånden som panseret opløses. Kroppen genfinder sin naturlige vibration og livskraft.",
            fagfolk: "TRE adresserer character armor som beskrevet af Reich og videreudviklet af Lowen. Neurogen tremor faciliterer mildnelse af kroniske muskelspændingsmønstre der embodier psykologisk forsvar — fra okulært segment til bækkenbund. Tremor arbejder bottom-up og restaurerer energetisk flow.\n\nKlinisk observeres progressiv mildnelse af hypertonus, øget respiratorisk amplitude og spontan emotionel release. Michael Morin Nissen integrerer som certificeret bioenergetisk psykoterapeut begge tilgange i sin praksis. TRE komplementerer traditionelt bioenergetisk arbejde ved at tilbyde en selvregulerende metode klienten kan anvende selvstændigt mellem sessioner.",
            videnskab: "Neurogen tremor reorganiserer myofasciale holding patterns gennem rhythmisk mekanisk stimulation af muskelspindler, fasciale mechanoreceptorer og proprioceptive feedback-loops. Kronisk muskelspænding modificerer fasciale viscoelastiske egenskaber gennem kollagenremodellering og fibroblast-medieret stiffening.\n\nTRE-induceret oscillation reverserer denne proces via mekanisk stimulation der aktiverer matrix metalloproteinaser og reducerer fascial densitet. Samtidig nedreguleres gamma-motorisk neuron-aktivering gennem centralnervesystemets processing af rhythmisk proprioceptiv input. Effekten er både strukturel fascial reorganisering og neural omprogrammering af baseline muskeltonus — det bioenergetikken beskriver som armor-dissolution.",
            sclerose: "Ved sclerose er der både neurologisk spasticitet fra demyelinisering og psykologisk muskulært panser fra årelang kompensation og forsvar. Kroppen holder sammen, kæmper videre, og bærer lag på lag af spænding. Disse to typer spænding forstærker hinanden i en ond cirkel.\n\nTRE arbejder med begge lag: mildner den autonome komponent af spasticiteten gennem nervesystem-regulering og løsner det kompensatoriske panser. Bioenergetiske grounding-øvelser styrker kroppens kontakt med jorden. Når begge lag adresseres, forbedres mobilitet og smerte markant — mange beskriver det som at kroppen puster ud for første gang i år.",
            oevelser: "Start med bioenergetisk grounding: stå med bøjede knæ i 2-3 minutter og mærk den naturlige vibration i benene. Denne vibration er forløberen til TRE-tremoren. Gå derefter direkte til vægstøtte (øvelse 6) — den trætter de samme muskelgrupper som grounding aktiverer, og tremoren kommer hurtigere og dybere.\n\nI tremorfasen (øvelse 7) kan du tilføje bioenergetisk vejrtrækning: åbn munden og lad udåndingen komme som et blidt 'ahhh'. Dette løsner diafragma-segmentet og lader tremoren brede sig fra ben og bækken op gennem mave og bryst. Kombinationen af tremor og åben vejrtrækning opløser panser på flere niveauer samtidigt."
        },
        'tre-psykologi': {
            klient: "For at kroppen kan turde ryste og slippe, skal du føle dig tryg. En kvalificeret TRE-terapeut eller psykolog skaber det sikre rum hvor din krop kan give slip. Terapeuten er rolig, til stede og opmærksom — og det smitter direkte til dit nervesystem.\n\nDet handler ikke kun om at lære en teknik, men om at opleve accept og forståelse. Healing sker i relationer — terapeutens trygge tilstedeværelse er forudsætningen for at tremor kan gå dybt nok til at gøre en varig forskel. Dit nervesystem opfanger terapeutens ro og begynder selv at regulere sig ned.",
            fagfolk: "TRE's kliniske effectiveness medieres af terapeutisk alliance og interpersonel co-regulering. Providers embodied tilstedeværelse faciliterer klientens neuroceptive oplevelse af sikkerhed, som beskrevet i polyvagal teori. Attachment-kvaliteten bestemmer window of tolerance for tremor-intensitet.\n\nVed kompleks traumatisering er psykologisk kompetence i dissociation, titrering og affektregulering afgørende for sikker TRE-facilitering. Integration af somatisk tremor-arbejde med psykologisk forståelse af overførings- og modoverføringsdynamikker sikrer at den kropslige proces forankres i en relationel kontekst der muliggør varig forandring.",
            videnskab: "Terapeutens regulerede autonome tilstand co-regulerer klientens via det sociale engagementsystem og ventral vagal pathway. Mirror neuron-aktivering og interbrain synchrony faciliterer neural entrainment der stabiliserer klientens autonome regulering under tremor.\n\nAttachment security i den terapeutiske relation modulerer amygdala-reaktivitet og udvider præfrontal inhibitorisk kapacitet, hvilket øger window of tolerance for somatisk processing. Therapeutic alliance quality korrelerer med HRV-forbedring og cortisol-reduktion under TRE-sessioner. Interpersonel neurobiologi bekræfter at co-regulering er en fysiologisk nødvendighed, ikke blot en psykologisk komfortfaktor.",
            sclerose: "Med sclerose er kroppen ofte forbundet med svigt og frygt. At turde tremor — at turde slippe kontrol over en krop der allerede føles upålidelig — kræver dyb sikkerhed. En terapeut der forstår både sclerose og TRE skaber det containment der gør transformation mulig.\n\nMichael Morin Nissen har over 13 års erfaring med denne målgruppe og forstår de særlige udfordringer. Relationel sikkerhed er fysiologisk nødvendigt: terapeutens regulerede nervesystem co-regulerer klientens gennem tilstedeværelse og anerkendelse. Først når du føler dig tryg, kan kroppen turde give slip.",
            oevelser: "I terapeutisk kontekst guides TRE med løbende check-in: 'Hvad mærker du nu?' Terapeuten hjælper dig med at dosere tremoren — lukke knæene lidt for at dæmpe, åbne mere for at intensivere. Denne titrering sikrer at du forbliver inden for dit window of tolerance og ikke bliver overvældet.\n\nCo-reguleringsøvelser inden TRE skaber tryghed: synkroniseret vejrtrækning med terapeuten, kort øjenkontakt, og verbal orientering i rummet. Under tremor kan terapeuten placere en hånd på din skulder eller fod som et anker. Afslutningsvis integreres oplevelsen: 'Hvad lagde din krop mærke til?' Denne kombination af teknik og relation gør tremoren dybere og mere tryg."
        },
        'polyvagal-reich': {
            klient: "Når nervesystemet er i alarm, spænder musklerne automatisk — klar til kamp eller flugt. Hvis alarmen aldrig slukkes, bliver spændingen permanent og danner det bioenergetikken kalder et 'muskulært panser'. Dette panser er nervesystemets fysiske udtryk for kronisk utryghed.\n\nPolyvagal teori forklarer mekanismen: sympatisk hyperaktivering holder musklerne kontraherede, mens dorsal vagal nedlukning skaber stivhed og følelsesløshed. Når TRE bringer nervesystemet tilbage til ro-tilstand, kan musklerne endelig slippe det panser de har holdt i årevis. Nervesystem-regulering og muskulær frigivelse går hånd i hånd.",
            fagfolk: "Character armor manifesterer kronisk sympatisk aktivering eller dorsal vagal immobilisering som muskelspændingsmønstre. Polyvagal teori leverer den autonome forklaring på Reichs kliniske observation: armor er somatiseret autonom dysregulering organiseret i segmentelle ringe.\n\nVed sympatisk dominans ses hypertonus og aggressivt forsvar; ved dorsal dominans ses hypoton kollaps og affektiv utilgængelighed. TRE's tremor adresserer den autonome komponent direkte og faciliterer skift til ventral vagal regulering, hvorefter armor spontant mildnes. Denne forståelse integrerer bioenergetisk og polyvagal teori i en samlet klinisk ramme.",
            videnskab: "Reichian armor er somatisk manifestation af dysreguleret autonomt nervesystem — kronisk sympatisk aktivering manifesterer som muskulær hypertonus via forhøjet gamma-motorisk neuron drive, mens dorsal vagal dominans producerer hypoton kollaps og fascial densifikation.\n\nPolyvagal teori leverer det neurofysiologiske substrat: neuroception af fare vedligeholder defensiv autonom tilstand som fastholder myofasciale holding patterns. TRE-induceret tremor modulerer den autonome tilstand mod ventral vagal regulering, hvilket sekundært faciliterer myofascial release og armor-dissolution. Denne mekanisme forklarer klinisk observeret sammenhæng mellem autonom re-regulering og muskulær frigivelse.",
            sclerose: "Spasticitet ved sclerose har to komponenter: en neurologisk fra demyelinisering og en autonom fra kronisk nervesystem-dysregulering. Polyvagal teori forklarer den autonome komponent: vedvarende neuroception af fare holder musklerne i defensiv kontraktion ovenpå den neurologiske spasticitet.\n\nNår TRE bringer nervesystemet i ro via vagal aktivering, reduceres den autonome komponent markant. Bioenergetisk forståelse af grounding og containment hjælper desuden med at genetablere kropslig stabilitet. Denne dobbelte tilgang — polyvagal regulering plus bioenergetisk grounding — er særligt effektiv ved sclerose-relateret spasticitet.",
            oevelser: "Kombiner grounding med vejrtrækning for dobbelt effekt: stå med bøjede knæ i grounding-position og ånde langsomt ud i 8 tæl. Grounding aktiverer proprioceptive sikkerhedssignaler mens den forlængede udånding stimulerer vagusnerven. Denne kombination adresserer både det bioenergetiske panser og den polyvagale dysregulering.\n\nEfter grounding gå direkte til TRE-tremor i rygleje. Vibrationerne fra grounding-øvelsen forbereder musklerne, og den vagale aktivering fra vejrtrækningen gør nervesystemet klar til at modtage tremoren. Læg mærke til forskellen: tremoren kommer typisk hurtigere og breder sig mere naturligt efter kombineret grounding og vejrtrækning."
        },
        'polyvagal-psykologi': {
            klient: "En rolig terapeut hjælper dit nervesystem med at finde ro — det er ikke bare en følelse, men en målbar fysiologisk proces. Når din terapeut er afslappet og til stede, opfanger dit nervesystem den ro og begynder selv at regulere sig ned. Det kaldes co-regulering.\n\nPolyvagal teori forklarer hvorfor: dit sociale engagementsystem scanner konstant andre mennesker for signaler om sikkerhed eller fare. Terapeutens rolige stemme, afslappede ansigt og stabile vejrtrækning sender sikkerhedssignaler der hjælper dit nervesystem med at skifte fra alarm til ro.",
            fagfolk: "Terapeutens ventral vagale tilstand co-regulerer klientens nervesystem gennem det sociale engagementsystem — en polyvagal mekanisme der opererer via ansigtsudtryk, prosodi, øjenkontakt og kropslig tilstedeværelse. Neuroception af sikkerhed i den terapeutiske relation er forudsætning for dybere somatisk arbejde.\n\nKlinisk implikation: terapeutens egen kropslige regulering er et terapeutisk redskab. Supervision bør inkludere terapeutens embodiment og autonome tilstand. Ved TRE-facilitering er providers evne til at opretholde ventral vagal tilstand under klientens aktivering afgørende for sikker og effektiv intervention.",
            videnskab: "Provider's autonome tilstand modulerer klientens via ventral vagale pathways og det sociale engagementsystem. Interbrain synchrony — dokumenteret via simultane EEG-målinger — viser neural entrainment mellem terapeut og klient der korrelerer med terapeutisk outcome.\n\nAutonom co-regulering opererer via spejlneuroner, prosodisk signalering og respiratorisk entrainment. Terapeutens HRV-mønster influerer klientens via autonomic synchrony. Ved polyvagalt dysregulerede klienter fungerer terapeutens regulerede autonome tilstand som ekstern ventral vagal modulator der stabiliserer klientens window of tolerance for somatisk processing.",
            sclerose: "Ved sclerose er nervesystemet ofte kronisk dysreguleret — både fra sygdommens neurologiske effekt og den vedvarende stress. Co-regulering gennem den terapeutiske relation bliver derfor særligt vigtig: terapeutens rolige, regulerede nervesystem fungerer som en 'ekstern regulator' klienten kan låne fra.\n\nDette er ikke blot en psykologisk komfort — det er polyvagal neurofysiologi i praksis. Terapeutens tilstedeværelse sender neuroceptive sikkerhedssignaler der hjælper klientens nervesystem med at finde ro. For mennesker med sclerose, hvis egen reguleringskapacitet er belastet, er denne co-regulering ofte afgørende for at TRE kan virke.",
            oevelser: "Synkroniseret vejrtrækning er en konkret co-reguleringsøvelse: terapeut og klient ånder sammen — ind i 4 tæl, ud i 8 tæl. Terapeutens rolige rytme fungerer som pacemaker for klientens nervesystem via autonomisk synkronisering. Denne øvelse aktiverer vagusnerven og etablerer den polyvagale sikkerhed der er forudsætning for dybere kropsarbejde.\n\nØjenkontaktøvelsen bygger videre: hold blød øjenkontakt med terapeuten i 30 sekunder mens I ånder sammen. Dit sociale engagementsystem aktiveres og sender sikkerhedssignaler til hjernestammen. Mange oplever en umiddelbar fornemmelse af ro og forbindelse der gør den efterfølgende TRE-tremor dybere og mere tryg."
        },
        'reich-psykologi': {
            klient: "Terapeuten skal selv være afslappet og til stede i sin egen krop for at kunne hjælpe dig med at slippe dit panser. Bioenergetik kalder dette 'embodiment' — terapeuten har selv arbejdet med sin krop og kender processen indefra. Det er ikke nok at vide hvad der skal ske.\n\nNår terapeuten er grounded og vibrerende til stede, mærker du det intuitivt. Dit nervesystem opfanger terapeutens kropslige ro og begynder selv at slappe af. Spejlneuroner og autonomisk synkronisering betyder at terapeutens kropslige tilstand direkte påvirker din — embodiment er et terapeutisk redskab.",
            fagfolk: "Terapeutens embodiment påvirker klientens direkte — bioenergetisk resonans er faktisk autonom co-regulering. Lowens princip om at terapeuten selv må have en 'vibrerende krop' er polyvagalt funderet: terapeutens ventral vagale regulering co-regulerer klienten via social engagement.\n\nSupervision i bioenergetisk tradition inkluderer derfor terapeutens eget kropsarbejde. Michael Morin Nissen integrerer denne dobbelte kompetence — klinisk psykologisk forståelse og bioenergetisk embodiment — i sin praksis. Terapeuten der selv er grounded kan facilitere dybere processer fordi klienten neuroceptivt oplever sikkerhed gennem terapeutens kropslige tilstedeværelse.",
            videnskab: "Provider's somatiske tilstand modulerer klientens via mirror neurons, autonomic synchrony og interbrain entrainment. Bioenergetisk 'embodiment' — terapeutens egen kropslige regulering og vibratoriske tilstand — har neurofysiologisk substrat i spejlneuron-systemet og vagal co-regulering.\n\nSimultane fysiologiske målinger viser at terapeutens HRV, respirationsmønster og muskeltonus influerer klientens tilsvarende parametre via autonomisk synkronisering. Ved bioenergetisk arbejde med character armor er denne co-regulering særligt kritisk: klientens defensive muskelspænding mildnes hurtigere når terapeutens egen krop er reguleret og vibratorisk til stede.",
            sclerose: "Med sclerose er kroppen spastisk, spændt og ofte forbundet med frustration og tab. Terapeutens embodied afslappethed bliver en særligt kraftfuld intervention — ikke bare psykologisk tryghed, men direkte fysiologisk påvirkning via spejlneuroner og autonomisk synkronisering.\n\nTerapeutens ro påvirker direkte klientens nervesystem og kan hjælpe spastiske muskler med at slippe. En bioenergetisk trænet terapeut der selv er grounded og vibrerende til stede, tilbyder klientens krop en model for afslapning. For scleroseramte, hvis krop sjældent oplever dyb ro, kan denne co-regulering være transformativ.",
            oevelser: "Terapeuten demonstrerer grounding-øvelsen i sin egen krop først: bøjede knæ, afslappede skuldre, dyb vejrtrækning. Du observerer og mærker terapeutens kropslige ro. Derefter guider terapeuten dig ind i din egen grounding — tilpasset dit udgangspunkt — mens terapeutens spejlende tilstedeværelse understøtter processen.\n\nEn bioenergetisk embodiment-øvelse: sid overfor terapeuten med fødderne på gulvet. Terapeuten placerer hænderne under dine fødder som støtte. Pres let ned mod terapeutens hænder mens du ånder ud. Denne øvelse kombinerer grounding, kontakt og co-regulering — du mærker terapeutens stabilitet direkte gennem berøringen og din krop begynder at matche den ro."
        },
        'tre-narrative': {
            klient: "TRE er en del af den kropsorienterede psykoterapeutiske tradition. Tremor er en af de mest direkte veje til at forløse spændinger i kroppen — enklere end mange andre kropsøvelser og tilgængelig for næsten alle. Sammen med vejrtrækning, grounding og bevægelse giver det kroppen flere redskaber.\n\nKropsorienteret psykoterapi ser kroppen som indgang til healing, ikke bare som et redskab. TRE passer perfekt ind i denne forståelse ved at aktivere kroppens egen intelligens. Du behøver ikke analysere eller forstå — kroppen ved hvad den skal slippe, og tremoren giver den lov.",
            fagfolk: "TRE integreres i kropsorienteret psykoterapi som specifik bottom-up intervention. Neurogen tremor komplementerer bioenergetiske øvelser, vejrtrækningsarbejde og vibrationsteknikker. Tilsammen udgør de en holistisk somatisk tilgang til autonom regulering og traumeforløsning.\n\nMichael Morin Nissen integrerer TRE med bioenergetisk analyse og Emotional Core Perception i sin kropsorienterede praksis. TRE tilbyder en selvregulerende komponent klienten kan bruge mellem sessioner, mens den terapeutiske ramme sikrer integration og dosering. Denne kombination giver både autonomi og klinisk sikkerhed.",
            videnskab: "TRE-induceret tremor og kropsorienterede interventioner — vejrtrækning, vibration, bevægelse — aktiverer overlappende neurofysiologiske pathways: vagal afferens, proprioceptiv feedback og interoceptiv processing. Kombineret effekt på autonomt nervesystem overstiger individuelle interventioners effekt via synergistisk bottom-up regulering.\n\nKropsorienteret psykoterapi leverer den kliniske ramme for sikker tremor-facilitering: titrering, pendulering og interoceptiv awareness-træning. TRE leverer den specifikke somatiske intervention. Integrationen giver bidirektionel potensering: kropsarbejde øger tremor-respons, og tremor uddyber efterfølgende kropsarbejde. Neuroimaging-studier viser øget insula-aktivering ved kombineret intervention.",
            sclerose: "For mennesker med sclerose er kropsorienteret psykoterapi den overordnede ramme, og TRE er et af de mest tilgængelige redskaber inden for den ramme. Tremor kan udføres liggende eller siddende og kræver minimal energi — en afgørende fordel ved kronisk træthed.\n\nKropsorienteret psykoterapi tilbyder desuden vejrtrækning, blid vibration og tilpassede bevægelser der supplerer TRE. Michael Morin Nissen har udviklet Body Fusion Work specifikt til mennesker med kronisk sygdom — en integration af bioenergetik, TRE og yoga-elementer tilpasset begrænset energi og mobilitet.",
            oevelser: "En typisk Body Fusion Work-session starter med stående grounding og vejrtrækning, fortsætter med vibrationsøvelser for benene og overgår til TRE-trætningsøvelser. Hele sekvensen bygger op mod tremor i rygleje. Fordi kroppen er varmet op og nervesystemet forberedt, kommer tremoren ofte dybere end ved TRE alene.\n\nPrøv selv en mini-sekvens: stå med bøjede knæ i 2 minutter (grounding), ånde dybt med åben mund i 1 minut (vejrtrækning), gør 10 tåhævninger og 10 knæbøjninger (trætning), og læg dig derefter ned med bøjede knæ og fodsåler samlet (tremor). Denne kombination af kropsorienterede teknikker og TRE giver en mere komplet oplevelse end én teknik alene."
        },
        'tre-enactivisme': {
            klient: "TRE er udviklet specifikt til at hjælpe kroppen med at slippe traumer og stress. Når noget overvældende sker, forbereder kroppen en forsvarsreaktion — men ofte bliver den afbrudt. Den uforløste energi sidder fast som kronisk spænding, uro eller følelsesløshed.\n\nDe 7 TRE-øvelser aktiverer kroppens naturlige evne til at ryste den fastlåste spænding fri, uden at du behøver tale om det svære. Tremoren hjælper kroppen med at fuldføre den afbrudte reaktion. Mange oplever lettelse, varme og frihed når kroppen endelig slipper det den har holdt fast i årevis.",
            fagfolk: "TRE er designet som traumeforløsende intervention der arbejder direkte med somatisk lagret materiale. Neurogen tremor faciliterer completion af incomplete defensive responses og reducerer kronisk sympatisk hyperarousal uden at kræve narrativ genbearbejdning af traumatisk materiale.\n\nDenne non-verbale tilgang er særligt indiceret ved preverbal traumatisering, kompleks PTSD og somatisering. Metoden arbejder direkte med det autonome nervesystems dysregulering — den lagrede mobiliseringsenergi fra afbrudte kamp/flugt-responser forløses motorisk gennem tremor. Titrering og window of tolerance monitoreres af facilitator for at sikre at processing forbliver indenfor klientens reguleringskapacitet.",
            videnskab: "TRE adresserer traumatisk stress på neurobiologisk niveau: tremor faciliterer motorisk completion via central pattern generators i hjernestammen, nedregulerer HPA-akse aktivering med reduktion af cortisol og adrenalin, og modulerer amygdala-medieret frygtrespons gennem afferent proprioceptiv signalering.\n\nSærligt effektiv ved somatisk lagret trauma der er primært subkortikalt og utilgængeligt for kognitiv top-down processing. Incomplete defensive responses vedligeholdt via periaqueductal gray og brainstem reflexer adresseres direkte af tremor-induceret motorisk activation. Efterfølgende autonomt shift fra defensiv til eksplorativ tilstand faciliterer reconsolidation af traumatisk hukommelse.",
            sclerose: "Sclerose-forløbet indeholder ofte multiple traumatiske oplevelser: det initiale diagnosechok, hvert nyt attak, tab af funktioner, bivirkninger af behandling, og den kroniske usikkerhed om fremtiden. Disse oplevelser ophober stress i kroppen og holder nervesystemet i alarm.\n\nTRE giver kroppen mulighed for at forløse den ophobede stress uden at kræve energikrævende samtaleprocesser — en afgørende fordel når energi er begrænset. Tremoren arbejder direkte med de afbrudte forsvarsreaktioner fra diagnosetidspunkt og tilbageslag, så kroppen kan bevæge sig fra kronisk alarm til ro.",
            oevelser: "TRE-øvelse 5 — stående med hænderne på lænden og hofterne presset fremad — strækker psoas-musklen der ofte holder fastlåst frygt og flugtrespons. Hold stillingen i 1-2 minutter og mærk strækket dybt i hoften. Øvelse 6, vægstøtten, trætter de store benmuskelgrupper der mobiliseres ved kamp og flugt.\n\nI tremorfasen kan kroppen spontant lave bevægelser der ligner sparkende ben, roterende bækken eller vibrerende mave — dette er completion af afbrudte forsvarsreaktioner. Lad bevægelserne komme uden at kontrollere dem. En vigtig øvelse efter tremor er orientering: åbn øjnene, kig rundt i rummet, og registrer at du er her og i sikkerhed. Denne simple handling signalerer til nervesystemet at faren er overstået."
        },
        'tre-levine': {
            klient: "TRE er blevet brugt med over 1000 mennesker med sclerose gennem den danske Scleroseforening over 13 år. Metoden tilpasses altid din aktuelle tilstand og kan udføres siddende, liggende eller stående. Intensiteten reguleres efter dit energiniveau den dag.\n\nMange oplever mindre spasticitet, bedre søvn, mere energi og færre smerter allerede efter få sessioner. To videnskabelige studier fra Scleroseforeningen bekræfter forbedret livskvalitet. TRE er ikke en kur, men et kraftfuldt redskab til selvregulering — noget du kan gøre hjemme, i dit eget tempo.",
            fagfolk: "13 års systematisk klinisk erfaring med TRE ved MS dokumenterer metodens anvendelighed ved kronisk sygdom. Michael Morin Nissen har udviklet tilpassede protokoller med fokus på dosering af tremor, energiforvaltning og respekt for window of tolerance hos en population med begrænset energireserve.\n\nTo videnskabelige studier fra Scleroseforeningen bekræfter forbedret livskvalitet — et randomiseret kontrolleret studie viste signifikant reduktion af spasticitet og smerte. Nøglen er tilpasning: kortere sessioner, gradvis opbygning, og konstant monitorering af energiniveau. TRE fungerer som selvhjælpsmetode der reducerer afhængighed af terapeut.",
            videnskab: "TRE ved kronisk sygdom adresserer autonomt nervesystem-dysregulering som dokumenteret komorbid faktor ved MS. Reduceret HRV og forhøjet sympatisk baseline er karakteristisk. TRE modulerer autonom balance mod parasympatisk dominans, hvilket reducerer defensiv muskeltonus og potentielt neuroinflammation via den cholinerge antiinflammatoriske pathway.\n\nEt randomiseret kontrolleret studie viste signifikant reduktion af spasticitet og smerte samt gradvis forbedring i gangfunktion (5 U-turn test). Et pilotstudie dokumenterede signifikant reduktion af fatigue (MFIS score fra 43.7 til 22.0). Disse resultater understøtter TRE som komplementær intervention ved MS.",
            sclerose: "TRE er ikke en kur mod sclerose, men det er et kraftfuldt redskab til at forbedre din hverdag. Over 1000 mennesker med sclerose har allerede brugt metoden med gode resultater. Øvelserne tilpasses altid din aktuelle tilstand — du bestemmer tempo og intensitet.\n\nStart med korte sessioner på 10-15 minutter, mærk efter bagefter, og byg langsomt op. Din krop ved hvad den har brug for — TRE giver den et sprog til at udtrykke det. To videnskabelige studier fra den danske Scleroseforening bekræfter at TRE forbedrer livskvaliteten for mennesker med sclerose.",
            oevelser: "Tilpassede TRE-øvelser ved sclerose: siddende i en stol med fødderne fladt på gulvet, lav ankelrotationer (øvelse 1) og tåhævninger (øvelse 2) uden at rejse dig. I stedet for vægstøtte, pres knæene mod hinanden med en pude imellem i 2-3 minutter — dette trætter adduktorerne skånsomt.\n\nTremorfasen foregår liggende med fuld støtte: pude under hovedet, eventuelt under knæene. Start med knæene bøjet op mod loftet, saml fodsålerne og lad knæene falde langsomt udad. Tremor begynder typisk i lårene. Hold sessionen kort — 10-15 minutter totalt — og mærk efter dagen efter. Hvis du er mere træt, var det for meget. Byg langsomt op over uger."
        },
        'polyvagal-narrative': {
            klient: "Når dit nervesystem er i alarm, er kroppen spændt og låst — det er svært at mærke følelser, slappe af eller være til stede. Polyvagal teori forklarer denne tilstand som sympatisk hyperaktivering. Kropsorienteret psykoterapi bruger vejrtrækning, øvelser og vibration til at hjælpe nervesystemet tilbage til ro.\n\nDet er polyvagal teori omsat til praksis: langsomme udåndinger aktiverer vagusnerven, grounding-øvelser signalerer sikkerhed, og blid vibration stimulerer det parasympatiske system. Når nervesystemet finder ro, kan kroppen slippe og healing kan begynde — præcis der hvor teorien viser det er muligt.",
            fagfolk: "Polyvagal teori giver det teoretiske fundament for kropsorienteret psykoterapis interventioner. Vejrtrækningsarbejde påvirker vagal tone direkte via respiratorisk sinus arrhytmi, kropsøvelser modulerer autonom tilstand gennem proprioceptiv signalering, og vibration stimulerer ventral vagal aktivering via mechanoreceptorer.\n\nNeuroception af sikkerhed — den ubevidste vurdering der bestemmer autonom tilstand — faciliteres gennem somatisk intervention snarere end kognitiv overbevisning. Denne bottom-up tilgang er kernen i kropsorienteret psykoterapi og forklarer dens effektivitet ved tilstande hvor verbal intervention er utilstrækkelig til autonom re-regulering.",
            videnskab: "Kropsorienterede interventioner modulerer det polyvagale hierarki direkte: langsomme udåndinger med forlænget eksspiration øger RSA og vagal tone, proprioceptiv stimulation via grounding-øvelser påvirker neuroception af sikkerhed, og vibration aktiverer lavtærskel mechanoreceptorer der signalerer sikkerhed via afferent vagal pathway.\n\nDenne multimodale somatiske stimulation producerer målbar autonom re-regulering: øget HRV, reduceret sympatisk hudrespons og forbedret vagal tone. Interoceptiv awareness — faciliteret gennem kropsorienterede øvelser — korrelerer med præfrontal korteks-aktivering og emotionel reguleringskapacitet, hvilket udgør en bottom-up pathway til kognitiv integration.",
            sclerose: "Ved sclerose er nervesystemet ofte fastkørt i alarm- eller nedlukningstilstand — polyvagal dysregulering er dokumenteret komorbiditet. Kropsorienteret psykoterapis redskaber giver konkrete måder at hjælpe nervesystemet mod ro-tilstanden: blid vejrtrækning, tilpassede grounding-øvelser og skånsom vibration.\n\nDet er polyvagal teori omsat til praksis i en krop der har brug for skånsom tilgang. Alle interventioner tilpasses energiniveau og aktuel tilstand. Når nervesystemet finder ro, reduceres spasticitet, træthed og smerte — fordi den autonome komponent af disse symptomer er direkte polyvagalt medieret.",
            oevelser: "Polyvagal vejrtrækning kombineret med kropsorienterede øvelser: lig på ryggen og placer én hånd på brystet, én på maven. Ånde ind i 4 tæl — mærk maven hæve sig først, derefter brystet. Ånde ud i 8 tæl med let sammenknebne læber. Gentag 10 gange. Denne øvelse aktiverer vagusnerven og skifter nervesystemet mod ro.\n\nTilføj derefter blid vibration: stadig liggende, bøj knæene op og lad dem vibrere let fra side til side i 1-2 minutter. Denne bevægelse kombinerer polyvagal aktivering med kropsorienteret vibration og forbereder bækkenet til TRE-tremor. Afslut med butterfly-position for at lade tremoren komme naturligt."
        },
        'polyvagal-enactivisme': {
            klient: "Polyvagal teorien forklarer hvorfor traumer sidder fast i kroppen: nervesystemet er låst i alarm eller nedlukning og kan ikke finde vej tilbage til sikkerhed af sig selv. Forståelsen af de tre 'gear' — ro, alarm og nedlukning — hjælper dig med at genkende hvor du befinder dig.\n\nNår du forstår at din uro, angst eller følelsesløshed er nervesystemets forsøg på at beskytte dig, ændrer det perspektivet. Det er ikke noget galt med dig — dit nervesystem gør sit arbejde. Med den forståelse kan du begynde at finde vejen tilbage til sikkerhed og ro.",
            fagfolk: "Polyvagal teori leverer den autonome ramme for somatisk traumeforståelse. Traumatisk materiale vedligeholdes som dysregulerede autonome tilstande: kronisk sympatisk aktivering (hyperarousal), dorsal vagal immobilisering (freeze/collapse), eller oscillering mellem begge. Window of tolerance defineres af ventral vagal kapacitet.\n\nNeuroception af fare vedligeholder defensive tilstande selvom den reelle trussel er ophørt — det er traumets autonome signatur. Behandling kræver genoprettelse af polyvagal fleksibilitet: evnen til adaptivt at bevæge sig mellem autonome tilstande. TRE faciliterer dette ved at signalere motorisk completion til hjernestammens overlevelseskredsløb.",
            videnskab: "Traumatisk stress manifesterer sig som polyvagal dysregulering: forhøjet sympatisk tonus, reduceret vagal bremse, og dysreguleret neuroception der vedligeholder defensive autonome tilstande. Amygdala-hyperreaktivitet og præfrontal hypoaktivitet reflekterer tab af ventral vagal modulering af frygtkredsløbet.\n\nTraumebehandling kræver genoprettelse af polyvagal fleksibilitet — evnen til adaptivt at skifte mellem autonome tilstande. TRE adresserer dette direkte ved at facilitere motorisk completion af incomplete defensive responses, hvilket signalerer til periaqueductal gray og hjernestamme at mobiliseringsresponsen er afsluttet. Efterfølgende ventral vagal re-engagement dokumenteres via forbedret HRV.",
            sclerose: "Sclerose skaber en dobbelt polyvagal belastning: sygdommen selv stresser nervesystemet gennem neuroinflammation og demyelinisering, og traumet ved at leve med kronisk sygdom holder det i alarm. Denne dobbelte dysregulering forværrer symptomerne direkte.\n\nPolyvagal forståelse hjælper med at se hvorfor symptomerne forværres under stress: neuroception af fare intensiverer spasticitet, træthed og smerte via den autonome komponent. Og hvorfor ro-tilstanden er så afgørende: ventral vagal regulering reducerer inflammation og forbedrer immunfunktion. At bringe nervesystemet i ro er ikke luksus — det er aktiv symptombehandling.",
            oevelser: "Pendulering er en kerneøvelse der forbinder polyvagal regulering med traumeforløsning: mærk et sted i kroppen der føles neutralt eller behageligt (en ressource), og skift derefter opmærksomheden til et sted med spænding eller ubehag. Bliv der kort, og pendul derefter tilbage til ressourcen. Denne oscillering træner nervesystemets fleksibilitet.\n\nKombiner med TRE: under tremor, hvis intensiteten bliver for høj, luk knæene sammen (dæmp tremor) og find din ressource — fødderne mod gulvet, hænderne på maven, vejrtrækningen. Når du er klar, åbn knæene igen. Denne aktive titrering er polyvagal selvregulering i praksis og bygger gradvist nervesystemets kapacitet til at håndtere mere intensitet."
        },
        'polyvagal-levine': {
            klient: "Når du har en kronisk sygdom som sclerose, er dit nervesystem ofte i konstant alarmberedskab — klar til den næste forværring, det næste attak, det næste tab. Polyvagal teorien forklarer hvorfor denne vedvarende alarm direkte forværrer dine symptomer.\n\nNår nervesystemet er i kronisk stress, øges inflammation, spasticitet tilspidses, og energien bruges på beredskab i stedet for genopladning. At finde ro er ikke bare rart — det er medicinsk vigtigt. TRE giver dig et konkret redskab til at hjælpe nervesystemet med at skifte fra alarm til healing.",
            fagfolk: "Polyvagal dysregulering er dokumenteret komorbiditet ved MS: reduceret HRV, forhøjet sympatisk baseline og nedsat vagal tone. Kronisk sygdom vedligeholder autonom dysregulering gennem vedvarende neuroception af fare — sygdommens uforudsigelighed og de gentagne medicinske interventioner opretholder defensiv autonom tilstand.\n\nGenoprettelse af ventral vagal kapacitet er derfor et centralt terapeutisk mål ved kronisk sygdom. TRE faciliterer dette via tremor-induceret vagal aktivering. Klinisk observeres forbedret HRV, reduceret sympatisk tonus og mildnet spasticitet efter regelmæssig TRE-praksis hos MS-patienter i Scleroseforeningens program.",
            videnskab: "MS-patienter udviser signifikant reduceret heart rate variability og parasympatisk tonus sammenlignet med raske kontroller. Kronisk autonom dysregulering accelererer potentielt neuroinflammation via manglende aktivering af den cholinerge antiinflammatoriske pathway — vagal efferens til milt reducerer TNF-alpha produktion.\n\nVagal nerve stimulation — mekanisk via TRE-induceret tremor eller elektrisk via implanterede devices — er undersøgt som antiinflammatorisk intervention. TRE tilbyder en non-invasiv tilgang til vagal modulering. Pilotstudier viser forbedret autonom balance efter TRE-intervention hos MS-patienter, målt via spektralanalyse af HRV.",
            sclerose: "Dit nervesystem arbejder overarbejde med sclerose. Polyvagal teorien viser at når nervesystemet er i kronisk alarm, forværres inflammation, spasticitet intensiveres, og energien bruges på beredskab i stedet for genopladning. Det er en ond cirkel der kan bryde med de rigtige redskaber.\n\nAt lære at bringe nervesystemet i ro er ikke luksus — det er en aktiv del af din sundhedsindsats. TRE giver dig et konkret, skånsomt redskab til at skifte nervesystemets gear fra alarm til ro. Mange scleroseramte oplever at regelmæssig TRE-praksis reducerer både spasticitet og træthed.",
            oevelser: "En daglig nervesystem-reguleringsøvelse for scleroseramte: lig ned med bøjede knæ og placer hænderne på maven. Ånde ind i 4 tæl, ud i 8 tæl i 3 minutter. Denne simple øvelse aktiverer vagusnerven og skifter nervesystemet fra alarm til ro. Gør den fast — morgen og aften — for kumulativ effekt.\n\nTilføj TRE 2-3 gange ugentligt: efter vejrtrækningsøvelsen, saml fodsålerne og lad knæene falde udad. Start med kun 5 minutters tremor og byg op. Kombiner med siddende grounding på dage med lav energi — blot fødderne fladt på gulvet, mærk kontakten, og ånde langsomt. Konsistens er vigtigere end intensitet ved kronisk sygdom."
        },
        'narrative-enactivisme': {
            klient: "Traumer sidder i kroppen, ikke kun i hovedet. Derfor er kropsarbejde så vigtigt i traumebehandling — du kan ikke tale dig ud af noget der sidder som spænding i musklerne, knuder i maven eller konstant uro. Kropsorienteret psykoterapi giver kroppen lov til at forløse det den holder fast i.\n\nGennem vejrtrækning, bevægelse, vibration og TRE arbejder du direkte med det kropslige. Mange oplever at følelser og erindringer dukker op spontant når kroppen slipper — integration sker naturligt når kroppen er klar. Det er healing nedefra og op.",
            fagfolk: "Kropsorienteret psykoterapi er særligt indiceret ved somatisk lagret trauma der er utilgængeligt for verbal bearbejdning. Bottom-up interventioner — vejrtrækning, vibration, kropsøvelser og TRE — omgår kognitivt forsvar og arbejder direkte med det autonome nervesystems dysregulering.\n\nKombinationen af kropslig forløsning og psykologisk integration giver varig forandring: somatisk processing faciliterer affektiv tilgængelighed, som derefter kan integreres narrativt i den terapeutiske relation. Denne sekventielle bottom-up-til-top-down proces er mere effektiv end unimodal intervention ved kompleks traumatisering og somatisering.",
            videnskab: "Traumatisk materiale lagres primært subkortikalt som sensomotoriske og autonome mønstre i amygdala, periaqueductal gray og hjernestamme — utilgængeligt for ren top-down kognitiv processing. Kropsorienterede interventioner aktiverer bottom-up pathways direkte.\n\nProprioceptiv stimulation, interoceptiv awareness-træning og motorisk completion via tremor faciliterer reconsolidation af traumatisk hukommelse: det implicit lagrede materiale gøres tilgængeligt for præfrontal processing og narrativ integration. Neuroimaging viser øget insula-aktivering og præfrontal-amygdala connectivity efter somatisk intervention, indikerende forbedret interoceptiv-kognitiv integration.",
            sclerose: "Mennesker med sclerose bærer ofte på multiple traumer: det initiale diagnosechok, hvert nyt attak med tab af funktion, invasive medicinske procedurer, og den kroniske usikkerhed om fremtiden. Disse oplevelser lagres i kroppen som spænding, forsvar og alarm.\n\nKropsorienteret psykoterapi tilbyder en skånsom måde at arbejde med dette ophobede trauma — gennem kroppen, i et tempo der respekterer din energi og dine begrænsninger. TRE, tilpasset vejrtrækning og blid bevægelse giver mulighed for forløsning uden at kræve de energireserver som samtalebaseret traumebehandling kræver.",
            oevelser: "En kropslig scanning er grundøvelsen: lig ned, luk øjnene og scan langsomt fra fødderne til hovedet. Læg mærke til hvor der er spænding, varme, kulde eller følelsesløshed — uden at ændre noget. Denne interoceptive awareness-øvelse træner forbindelsen mellem krop og bevidsthed og afslører hvor traumatisk stress sidder.\n\nEfter scanningen vælg det område med mest spænding og ånde bevidst ind i det i 5 vejrtrækninger. Derefter gå til TRE-tremor og læg mærke til om tremoren bevæger sig mod netop det område. Kropsorienteret psykoterapis princip om at følge kroppen kombineret med TRE's tremor giver en præcis og skånsom traumeforløsning der arbejder der hvor kroppen er klar."
        },
        'narrative-levine': {
            klient: "Kropsorienteret psykoterapi tilpasses din kroniske sygdom. Det handler om at genetablere kontakt med kroppen som en ressource — ikke som en fjende der svigter dig. Skånsomme øvelser, vejrtrækning og vibration kan gøre en stor forskel for spasticitet, smerte og energi.\n\nMichael Morin Nissen har udviklet Body Fusion Work specifikt til mennesker med kronisk sygdom — en blanding af bioenergetik, TRE og yoga-elementer tilpasset begrænset energi. Øvelserne kan gøres siddende eller liggende, og intensiteten justeres altid efter din tilstand den dag.",
            fagfolk: "Ved kronisk sygdom tilpasses kropsorienteret psykoterapi med fokus på energiforvaltning, dosering og respekt for kroppens aktuelle kapacitet. Bioenergetiske principper om grounding og containment er særligt relevante ved en krop der opleves som upålidelig og grænseoverskridende.\n\nBody Fusion Work — Michael Morin Nissens integration af bioenergetik, TRE og yoga-elementer — er udviklet specifikt til denne målgruppe over 13 års klinisk erfaring i Scleroseforeningen. Tilgangen prioriterer energiforvaltning: korte sessioner, gradvis opbygning, og konstant monitorering af post-session energiniveau som guide for dosering.",
            videnskab: "Kropsorienterede interventioner ved kronisk sygdom adresserer den autonome dysregulering der er komorbid med somatisk sygdom. Tilpasset somatisk stimulation — doseret vejrtrækning, mild vibration, skånsom bevægelse — modulerer autonom balance uden at overskride den begrænsede energikapacitet.\n\nVed MS er dette særligt kritisk: for intensiv intervention kan trigge fatigue-forværring og symptom-flare. Optimal dosering kræver klinisk erfaring med populationen. Studier viser at tilpassede body-mind interventioner forbedrer livskvalitet, reducerer fatigue og mildner spasticitet — men kun ved korrekt dosering der respekterer den neurologiske sårbarhed.",
            sclerose: "Kropsorienteret psykoterapi kan tilpasses præcis din situation med sclerose. Alle øvelser kan gøres siddende eller liggende, og intensiteten justeres efter din energi den dag. Det handler om at give kroppen gode oplevelser — at mærke at den kan slappe af, at den kan finde ro.\n\nBody Fusion Work er udviklet specifikt til dig: en blanding af blid bioenergetik, TRE og yoga-elementer der respekterer din energi. Mange scleroseramte oplever at kroppen langsomt kan genetableres som en ressource i stedet for kun at være et sted fyldt med symptomer og begrænsninger.",
            oevelser: "Body Fusion Work tilpasset sclerose: start siddende i en stol. Placer fødderne fladt på gulvet og mærk kontakten (grounding). Ånde dybt med hænderne på maven i 2 minutter (vejrtrækning). Lav siddende tåhævninger og ankelbevægelser i 2 minutter (trætning). Læg dig derefter ned med støtte under hoved og knæ.\n\nI liggende stilling: bøj knæene op, pres dem let mod hinanden med en pude imellem i 2 minutter (adduktor-trætning). Slap af, saml fodsålerne og lad knæene falde udad for tremor. Hold sessionen på 10-15 minutter totalt. Denne tilpassede Body Fusion Work-sekvens giver den fulde integration af kropsøvelser og TRE uden at overskride begrænset energi."
        },
        'narrative-reich': {
            klient: "Bioenergetik er det historiske fundament for den kropsorienterede tilgang. Alexander Lowens arbejde med muskulært panser, grounding og energiflow — inspireret af hans terapeut Wilhelm Reich — er kernen i at forstå hvordan kroppen holder fast, og hvordan den kan slippe.\n\nGrounding handler om at mærke kontakten med jorden og kroppen — at stå solidt. Energiflow handler om at lade følelser og livskraft bevæge sig frit. Når panseret slipper gennem øvelser, vejrtrækning og tremor, vender denne naturlige flow tilbage. Bioenergetik er ikke bare teori — det er en levende praksis med over 60 års erfaring.",
            fagfolk: "Kropsorienteret psykoterapi er direkte afledt af bioenergetisk tradition grundlagt af Alexander Lowen i forlængelse af Wilhelm Reichs arbejde. Bioenergetik leverer det teoretiske grundlag: character armor, segmentel organisation, energetisk flow og grounding som centrale begreber.\n\nModerne kropsorienteret psykoterapi udvider med polyvagal forståelse af autonomt nervesystem og integrerer TRE og andre somatiske metoder. Michael Morin Nissen er certificeret fra Norddeutsche Institut für Bioenergetische Analyse og bygger bro mellem klassisk bioenergetik og contemporær neurobiologisk forståelse i sin praksis.",
            videnskab: "Bioenergetisk analyse og kropsorienteret psykoterapi deler neurobiologisk grundlag: kroniske muskelspændingsmønstre (armor) reflekterer dysreguleret autonomt nervesystem medieret via gamma-motorisk neuron overaktivering og fascial remodellering. Begge tilgange adresserer dette somatiske substrat.\n\nInterventioner der simultant adresserer myofascial holding og autonom regulering viser stærkere effekt end unimodale tilgange i kliniske studier. Bioenergetiske grounding-øvelser modulerer proprioceptiv signalering og stabiliserer autonom regulering, mens tremor-baserede interventioner faciliterer fascial reorganisering. Integration af begge mekanismer forklarer den øgede effektivitet ved kombineret kropsorienteret tilgang.",
            sclerose: "Bioenergetikkens fokus på grounding — kontakten med kroppen og jorden — er særligt vigtigt ved sclerose, hvor kroppen kan føles utryg og upålidelig. At mærke fødderne mod gulvet, at stå (eller sidde) solidt, giver en basal tryghed som mange scleroseramte savner.\n\nAlexander Lowens begreb om 'vibrancy' — en levende, vibrerende krop — er terapeutisk mål også ved kronisk sygdom. At arbejde med grounding og energiflow i et tilpasset tempo hjælper med at genetablere et positivt forhold til kroppen. Bioenergetik blev brugt med scleroseramte allerede før TRE blev integreret.",
            oevelser: "Grounding som forberedelse til kropsarbejde: stå (eller sid) med fødderne i hoftebredde og mærk kontakten med gulvet. Bøj knæene let og lad vægten synke ned. Hold i 2 minutter og mærk den naturlige vibration i benene — Lowens 'vibrancy'. Denne bioenergetiske grundøvelse stabiliserer nervesystemet og forbereder kroppen.\n\nTilføj bioenergetisk bueøvelse: stående med hænderne på lænden, pres hofterne let fremad og læn dig en anelse tilbage. Hold i 1 minut — dette åbner brystet og strækker hele forsiden. Kombiner med kropspsykoterapeutisk vejrtrækning: dyb indånding der fylder maven, lang udånding med åben mund. Denne sekvens fra bioenergetik til kropsorienteret psykoterapi bygger bro mellem de to traditioner."
        },
        'narrative-psykologi': {
            klient: "Kropsorienteret psykoterapi forbinder krop og sind i terapien. Du taler om det der er svært og mærker det i kroppen samtidig — spændinger, vejrtrækning, mavefornemmelser, uro. En psykolog der også arbejder med kroppen kan hjælpe dig på begge niveauer.\n\nNår du forstår dine reaktioner psykologisk og samtidig forløser dem kropsligt, sker der en dybere integration. Det er ikke nok bare at tale om det, og det er heller ikke nok bare at lave kropsøvelser — kombinationen giver varig forandring. Krop og sind healer sammen.",
            fagfolk: "Integration af kropsorienteret psykoterapi og klinisk psykologi er kernen i en holistisk tilgang til psykisk sundhed. Samtale giver kognitiv forståelse og narrativ integration, mens kropsarbejde forløser det somatisk lagrede materiale. Terapeuten bygger bro mellem intellektuel indsigt og kropslig erfaring.\n\nMichael Morin Nissen kombinerer som autoriseret psykolog og certificeret bioenergetisk terapeut begge kompetencer. Denne dobbelte kvalifikation sikrer at kropslige processer forankres i psykologisk forståelse, og at psykologisk indsigt forankres i kropslig erfaring. Resultatet er en integreret tilgang der er mere effektiv end unimodal intervention.",
            videnskab: "Top-down processer (kognitiv psykoterapi, narrativ integration) og bottom-up processer (somatisk intervention, tremor, vejrtrækning) er komplementære reguleringsmekanismer. Præfrontal modulering af amygdala (top-down) og vagal afferens til præfrontal korteks via insula (bottom-up) udgør en bidirektionel reguleringsloop.\n\nOptimal terapeutisk effekt opnås ved integration af begge tilgange: bottom-up intervention faciliterer autonom re-regulering og affektiv tilgængelighed, top-down processing faciliterer narrativ integration og meningsdannelse. Neuroimaging viser at kombineret intervention producerer stærkere og mere varig ændring i amygdala-præfrontal connectivity end enten approach alene.",
            sclerose: "Med sclerose er der brug for begge dele: psykologisk støtte til at håndtere sygdommens følelsesmæssige belastning — sorg, frygt, frustration, identitetstab — og kropsarbejde til at hjælpe med de fysiske symptomer som spasticitet, smerte og træthed.\n\nEn terapeut der mestrer begge tilgange kan møde dig som et helt menneske — ikke bare en diagnose. Michael Morin Nissen har denne dobbelte kompetence og har arbejdet med scleroseramte i over 13 år. Samtale og kropsarbejde integreres i samme session, tilpasset din energi og dit behov den dag.",
            oevelser: "En integreret session kombinerer samtale og kropsøvelser: start med kort check-in om hvordan du har det (psykologisk kontakt), gå derefter til kropslig scanning — hvad mærker du? Hvor sidder spændingen? Terapeuten guider dig fra samtale til krop og tilbage igen, så begge niveauer integreres.\n\nEn konkret kombination: tal om det der fylder, og læg mærke til hvad der sker i kroppen mens du taler — strammer maven sig? Holder du vejret? Gå derefter til vejrtrækning og blid vibration rettet mod det kropslige. Afslut med kort refleksion: hvad ændrede sig? Denne vekslen mellem psykologisk forståelse og kropslig øvelse er kernen i integreret praksis."
        },
        'enactivisme-levine': {
            klient: "Kronisk sygdom og trauma hænger tæt sammen på måder de fleste ikke tænker over. Selve diagnosen er traumatisk — pludselig usikkerhed, tab af kontrol, frygt for fremtiden. Hvert nyt attak, hvert tab af funktion, tilføjer lag af trauma. Og den vedvarende stress holder nervesystemet i alarmberedskab.\n\nDenne kroniske alarm forværrer direkte symptomerne: mere spasticitet, mere træthed, mere smerte. At arbejde med traumet er derfor ikke 'nice to have' — det er en vigtig del af at håndtere sygdommen. Når traumet forløses, kan nervesystemet finde ro, og symptomerne mildnes.",
            fagfolk: "Kronisk sygdom er inherent traumatiserende: diagnosechok, tab af autonomi, invasive medicinske interventioner, uforudsigelighed og gentagne tab. Traumeresponser — freeze, hypervigilance, dissociation — vedligeholder autonom dysregulering der direkte forværrer somatiske symptomer via forhøjet sympatisk tonus og nedsat vagal aktivitet.\n\nTraumebehandling er derfor integral del af behandling ved kronisk sygdom, ikke et supplement. Ved MS forværrer kronisk stress-induceret autonom dysregulering neuroinflammation, spasticitet og fatigue. TRE tilbyder en tilgængelig traumeforløsende intervention der respekterer energibegrænsninger og kan integreres i eksisterende behandlingsforløb.",
            videnskab: "Traumatisk stress og kronisk sygdom deler neurobiologisk substrat: HPA-akse dysregulering med forhøjet cortisol, autonom ubalance med reduceret vagal tone, og neuroinflammation med forhøjede proinflammatoriske cytokiner. Ved MS forværrer kronisk stress neuroinflammation via forhøjet cortisol og nedsat vagal antiinflammatorisk aktivitet.\n\nTraumebehandling — herunder TRE — har potentiale til at reducere sygdomsaktivitet gennem autonom re-regulering og genaktivering af den cholinerge antiinflammatoriske pathway. Pilotstudier viser at body-mind interventioner der adresserer traumerelateret autonom dysregulering forbedrer MS-specifikke outcomes udover hvad ren symptombehandling opnår.",
            sclerose: "Din sclerose og din stress er tæt forbundne i en cirkel der forstærker sig selv. Stress fra sygdommen forværrer symptomerne, og forværrede symptomer skaber mere stress. Hvert attak, hvert tab, lægger et nyt lag af trauma ovenpå.\n\nAt arbejde med de traumatiske oplevelser forbundet med sygdommen kan bryde denne cirkel. Når de ophobede forsvarsreaktioner fra diagnosetidspunkt, attakker og tab forløses, kan nervesystemet finde mere ro. Og når nervesystemet er i ro, mildnes symptomerne og kroppen har bedre mulighed for genopladning og healing.",
            oevelser: "Ressource-øvelsen er central ved kronisk sygdom og trauma: find et sted i kroppen der føles neutralt eller behageligt — måske fødderne mod gulvet, hænderne i skødet, eller en varm fornemmelse i maven. Dvæl ved denne ressource og ånde roligt. Denne øvelse styrker nervesystemets kapacitet og giver et sikkert udgangspunkt.\n\nFra ressourcen kan du lade TRE-tremoren komme i korte doser: 3-5 minutters tremor, derefter pause og check-in med din ressource. Denne doserede tilgang respekterer energibegrænsninger og sikrer at traumeforløsningen sker i et tempo kroppen kan håndtere. Over tid øges kapaciteten, og tremor-sessionerne kan gradvist forlænges."
        },
        'enactivisme-reich': {
            klient: "Når traumer sidder fast i kroppen, bliver de til kronisk muskelspænding — et 'panser' der beskytter dig mod at mærke det svære, men som også begrænser din bevægelsesfrihed, dit åndedræt og din livskraft. Bioenergetik har i over 60 år forstået denne sammenhæng.\n\nAlexander Lowen viste hvordan specifikke muskelgrupper holder specifikke følelser: tilbageholdt vrede i kæben, undertrykt gråd i brystet, fastlåst frygt i hoften. TRE's tremor og bioenergetiske øvelser arbejder sammen med at forløse dette panser, lag for lag, så du gradvist genvinder frihed og følelse.",
            fagfolk: "Reichs og Lowens forståelse af character armor som somatiseret trauma er direkte klinisk relevant. Kroniske muskelspændingsmønstre lagrer incomplete defensive responses: tilbageholdt aggression som kæbe- og skulder-hypertonus, inhiberet flugt som psoasspænding, frozen fear som diafragma-blokering.\n\nBioenergetisk arbejde med armor-dissolution komplementerer TRE's tremor-baserede traumeforløsning. Hvor TRE arbejder via neurogen tremor der faciliterer motorisk completion, arbejder bioenergetik via direkte engagement med de specifikke armor-segmenter. Kombinationen giver en mere komplet traumeforløsning der adresserer både den generelle autonome dysregulering og de specifikke segmentelle holdinger.",
            videnskab: "Traumatisk stress inducerer kronisk muskelspænding via vedvarende sympatisk aktivering og motorisk inhibering af defensive responses. Reichian armor og traumerelaterede myofasciale holding patterns deler neurobiologisk substrat: persisterende gamma-motorisk neuron-aktivering, fascial remodellering og central sensibilisering.\n\nBioenergetisk intervention via direkte engagement med armor-segmenter og TRE via neurogen tremor adresserer begge dette substrat fra forskellige vinkler. Bioenergetik arbejder segmentelt og specifikt, TRE arbejder globalt via central pattern generators. Kombineret intervention viser klinisk stærkere effekt, formodentlig via synergi mellem segmentel og global myofascial reorganisering.",
            sclerose: "Ved sclerose er der et komplekst samspil mellem tre lag af spænding: neurologisk spasticitet fra demyelinisering, traumerelateret muskelspænding fra diagnosechok og gentagne tab, og bioenergetisk panser fra årelang kompensation og kontrol.\n\nAt skelne mellem og arbejde med alle tre lag kræver en integreret tilgang. TRE adresserer den autonome komponent, bioenergetisk arbejde adresserer det segmentelle panser, og traumeforståelse sikrer at forløsningen sker i et sikkert tempo. Michael Morin Nissen har over 13 års erfaring med denne kompleksitet hos scleroseramte.",
            oevelser: "Kæbeøvelsen forbinder trauma og bioenergetik: åbn munden bredt, hold i 10 sekunder, og slap af. Gentag 5 gange. Kæben holder ofte tilbageholdt vrede og skrig — følelser der er relevante ved sygdomsfrustration og traumatisk stress. Når kæben slipper, kan tremoren lettere brede sig til overkroppen.\n\nBrystøvelsen: lig på ryggen med en sammenrullet håndklæde under skulderbladene. Ånde dybt med åben mund i 2 minutter. Brystet holder undertrykt gråd og sorg — følelser der er centrale ved tab og trauma. Kombiner med TRE-tremor: fjern håndklædet, gå til butterfly-position, og lad tremoren komme. Mange oplever at tremoren breder sig til bryst og skuldre efter disse forberedende øvelser."
        },
        'enactivisme-psykologi': {
            klient: "At bearbejde traumer kræver et trygt rum og en tryg relation. Du kan ikke slippe noget du ikke føler dig sikker nok til at mærke. En psykolog hjælper dig med at forstå dine reaktioner — at uro, angst eller følelsesløshed er nervesystemets forsøg på at beskytte dig, ikke tegn på svaghed.\n\nDen terapeutiske relation giver den sikkerhed der er nødvendig for at kroppen kan slippe. Når du føler dig set og accepteret, kan nervesystemet skifte fra forsvar til åbenhed. Det er derfor kombinationen af psykologisk forståelse og kropsligt arbejde er så kraftfuld i traumebehandling.",
            fagfolk: "Traumebehandling kræver solid terapeutisk alliance og klinisk kompetence inden for dissociation, titrering og window of tolerance. Klinisk psykologisk forståelse sikrer at somatisk traumearbejde — herunder TRE — sker inden for sikre rammer med konstant monitorering af reguleringskapacitet.\n\nIntegration af somatisk traumeforløsning med psykologisk forståelse af overføringsdynamikker og attachment giver optimal behandling. Terapeuten faciliterer ikke blot teknikken men den relationelle kontekst der gør dyb somatisk processing mulig. Michael Morin Nissen kombinerer som autoriseret psykolog og TRE-træner begge kompetencedomæner i traumebehandling.",
            videnskab: "Terapeutisk relation modulerer klientens neuroception og autonome tilstand via social engagement system. Ved traumebehandling er dette særligt kritisk: co-regulering gennem terapeutisk alliance etablerer den ventral vagale platform der er forudsætning for sikker processing af traumatisk materiale.\n\nUden sufficient relationel sikkerhed resulterer somatisk aktivering i re-traumatisering snarere end integration. Attachment security medierer præfrontal inhibering af amygdala under affektiv aktivering — den terapeutiske relations kvalitet bestemmer direkte klientens kapacitet for somatisk processing. Therapeutic alliance quality er den stærkeste prædiktor for behandlingsoutcome ved traumebehandling.",
            sclerose: "Traumet ved at leve med sclerose er komplekst og vedvarende — det er ikke én hændelse men en kronisk belastning med gentagne tab, usikkerhed og medicinsk intervention. En psykolog der forstår kronisk sygdom kan hjælpe dig med at bearbejde diagnosechok, sorg over tab og angst for fremtiden.\n\nI et trygt terapeutisk rum kan du integrere kropslige metoder som TRE med psykologisk bearbejdning. Det handler om at finde mening og mestring i en situation der ofte føles overvældende, og at give nervesystemet den sikkerhed det behøver for at kunne slippe den kroniske alarm.",
            oevelser: "Containment-øvelsen forbinder terapeutisk sikkerhed med traumeforløsning: sid komfortabelt, placer hænderne over krydsede arme på brystet (sommerfuglekram). Hold dig selv fast mens du ånder roligt. Denne selvberørende øvelse skaber kropslig containment og signalerer sikkerhed til nervesystemet.\n\nI terapeutisk kontekst bruges containment som ramme for TRE: efter sommerfuglekram og verbal tryghedsetablering guider terapeuten til tremorfasen. Hvis følelser eller minder dukker op under tremor, kan du vende tilbage til kram-positionen og orientere dig i rummet. Terapeuten hjælper med at sætte ord på oplevelsen efterfølgende — denne integration af kropslig forløsning og psykologisk forståelse er kernen i tryg traumebehandling."
        },
        'levine-reich': {
            klient: "Bioenergetikkens fokus på grounding — at mærke kontakten med kroppen og jorden — er særligt vigtigt når du lever med kronisk sygdom. Når kroppen føles ustabil og uforudsigelig, giver grounding en basal tryghed: du er her, du står (eller sidder) solidt, du har et fundament.\n\nAlexander Lowens begreb 'vibrancy' — en vibrerende, levende krop — er terapeutisk mål også ved sclerose. Bioenergetiske øvelser tilpasses din tilstand: vibrationsøvelser mildner spasticitet, vejrtrækning åbner brystet, grounding styrker stabilitet. Alt doseres efter din energi den dag.",
            fagfolk: "Bioenergetiske principper tilpasses kronisk sygdom med fokus på energiforvaltning. Grounding styrker kropslig stabilitet og proprioceptiv feedback, vibrationsøvelser doseres efter energiniveau, og character armor-arbejde tilpasses spasticitet og begrænset mobilitet.\n\nBody Fusion Work — Michael Morin Nissens integration af bioenergetik med TRE og yoga-elementer — er udviklet specifikt til denne målgruppe over 13 års klinisk erfaring. Lowens begreb om 'vibrancy' er terapeutisk mål også ved kronisk sygdom: at genopvække kroppens naturlige vibration og livskraft inden for de rammer sygdommen sætter. Bioenergetik blev brugt med scleroseramte før TRE.",
            videnskab: "Bioenergetisk intervention ved kronisk sygdom adresserer den autonome komponent af somatiske symptomer. Grounding-øvelser modulerer proprioceptiv feedback via mekanoreceptor-stimulation i fødder og ben, hvilket stabiliserer autonom regulering via afferent signalering til cerebellum og vestibulært system.\n\nVibration stimulerer lavtærskel mechanoreceptorer og faciliterer myofascial release via thixotropisk tilstandsændring. Doseret bioenergetisk arbejde forbedrer energiforvaltning ved fatigue-domineret sygdom — kortere, hyppigere sessioner med lavere intensitet producerer bedre outcomes end traditionel dosering. Lowens 'vibrancy' korrelerer med forbedret HRV og parasympatisk tonus.",
            sclerose: "Bioenergetik blev allerede brugt med scleroseramte før TRE blev integreret i arbejdet. Grounding-øvelser hjælper med balance og stabilitet — at mærke fødderne mod gulvet, at stå eller sidde solidt. Vibrationsarbejde mildner spasticitet ved at løsne de muskulære lag. Vejrtrækningsøvelser åbner brystet og giver mere energi.\n\nAlt tilpasses din dag: nogle dage er der energi til stående øvelser, andre dage arbejdes der liggende med blid vejrtrækning og vibration. Over tid lærer kroppen at finde sin naturlige vibrancy — en levende, vibrerende tilstand der er mulig selv med sclerose.",
            oevelser: "Siddende grounding for scleroseramte: sid med fødderne fladt på gulvet og pres let ned — mærk kontakten. Lad vægten synke ned gennem bækkenet. Hold i 2-3 minutter. Denne tilpassede grounding-øvelse giver kropslig stabilitet uden at kræve stående balance.\n\nBioenergetisk vibrationsøvelse tilpasset sclerose: siddende, løft hælene hurtigt op og ned i 1 minut — dette skaber vibration i benene der mildner spasticitet. Eller liggende: bøj knæene op og lad dem vibrere fra side til side i 2 minutter. Afslut med TRE-tremor i butterfly-position. Denne sekvens — grounding, vibration, tremor — er kernen i Body Fusion Work tilpasset kronisk sygdom."
        },
        'levine-psykologi': {
            klient: "At leve med kronisk sygdom påvirker hele dit liv — relationer ændres, arbejdslivet udfordres, dit selvbillede ryster, og fremtiden føles usikker. Det er normalt at opleve sorg, vrede, angst og frustration. Du fortjener støtte med alt det, ikke bare de fysiske symptomer.\n\nEn psykolog kan hjælpe dig med at navigere de følelsesmæssige udfordringer, mens kropsligt arbejde hjælper med spasticitet, smerte og træthed. Du fortjener støtte på begge niveauer — krop og sind. Kombineret behandling giver dig redskaber til at håndtere hele din situation, ikke bare dele af den.",
            fagfolk: "Kronisk sygdom kræver psykologisk kompetence inden for sorgprocesser (gentagne tab), identitetstransformation (fra rask til kronisk syg), mestring (coping-strategier) og accept (versus resignation). Integration med kropsligt arbejde giver holistisk behandling.\n\nTerapeutisk relation er særligt vigtig for mennesker hvis krop opleves som upålidelig og grænseoverskridende. Co-regulering kompenserer for nedsat evne til selvregulering. Michael Morin Nissen integrerer psykologisk kompetence med kropsorienteret psykoterapi og TRE specifikt for denne målgruppe. Terapeutisk alliance quality korrelerer stærkere med outcome ved kronisk sygdom end ved akutte tilstande.",
            videnskab: "Psykologisk intervention ved kronisk sygdom modulerer stress-respons og autonomt nervesystem via top-down regulering: kognitiv reappraisal reducerer amygdala-aktivering, og meningsdannelse faciliterer præfrontal modulering af autonome tilstande. Kombineret med bottom-up somatisk intervention (TRE, kropsarbejde) opnås bidirektionel regulering.\n\nTerapeutisk alliance quality korrelerer signifikant med behandlingsoutcome ved kronisk sygdom — stærkere end ved akutte tilstande. Dette forklares ved at kronisk sygdom reducerer selvregulerings-kapacitet, hvilket øger afhængighed af interpersonel co-regulering. Integreret psykologisk-somatisk intervention producerer bedre outcomes end unimodal tilgang på livskvalitet, fatigue og sygdomsmestring.",
            sclerose: "Sclerose påvirker ikke kun kroppen men hele dit liv — relationer, arbejde, identitet, fremtidsplaner. En psykolog der forstår sygdommen kan hjælpe med sorg over tab af funktioner, angst for fremtiden, frustration over begrænsninger, og de relationelle udfordringer der uundgåeligt følger med kronisk sygdom.\n\nKombineret med TRE og kropsarbejde får du støtte til hele dig — krop, sind og relationer. Michael Morin Nissen har over 13 års erfaring med denne kombination i Scleroseforeningen. Du fortjener en terapeut der ser hele dig, ikke bare din diagnose.",
            oevelser: "En integreret session ved sclerose starter med psykologisk check-in: hvordan har du det i dag? Hvad fylder? Derefter kropslig scanning: hvor mærker du det i kroppen? Terapeuten hjælper med at oversætte mellem krop og sind — angst der sidder i maven, sorg i brystet, frustration i kæben.\n\nDerefter tilpasset kropsarbejde: siddende grounding, blid vejrtrækning, og kort TRE-tremor — alt doseret efter din energi. Afslut med refleksion: hvad ændrede sig kropsligt? Hvad betød det følelsesmæssigt? Denne kombination af psykologisk forståelse og tilpassede kropsøvelser giver helhedsorienteret støtte til mennesker med kronisk sygdom."
        }
    }
};

// Mapping til cirkel navne
const circleNames = {
    tre: 'TRE',
    polyvagal: 'Polyvagal teori',
    narrative: 'Kropsorienteret Psykoterapi',
    enactivisme: 'Trauma & Stress',
    levine: 'Sclerose & Kronisk Sygdom',
    reich: 'Bioenergetik',
    psykologi: 'Klinisk Psykologi'
};

// State management
let currentMode = 'klient';
let currentView = 'welcome'; // 'welcome', 'circle', 'connection'
let currentCircle = null;
let currentConnection = null;

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    setupModeButtons();
    setupCircleClicks();
    setupConnectionClicks();
    showWelcome();
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

            // Opdater indhold baseret på aktuel view
            if (currentView === 'circle' && currentCircle) {
                showCircleView(currentCircle, false);
            } else if (currentView === 'connection' && currentConnection) {
                showConnectionView(currentConnection.from, currentConnection.to, currentConnection.fromCircle, false);
            }

        });
    });
}

// Scroll helper
function scrollToElement(id) {
    const el = document.getElementById(id);
    if (el) {
        setTimeout(() => {
            const rect = el.getBoundingClientRect();
            const offset = window.scrollY + rect.top - 10;
            window.scrollTo({ top: offset, behavior: 'smooth' });
        }, 50);
    }
}

// Welcome screen
function showWelcome() {
    currentView = 'welcome';
    currentCircle = null;
    currentConnection = null;
    clearAllActive();

    document.getElementById('info-content').innerHTML = `
        <h2>Velkommen til TRE Forståelsesmodellen</h2>
        <p>Denne interaktive model viser hvordan TRE virker gennem seks forskellige perspektiver.</p>
        <p><strong>Sådan bruger du modellen:</strong></p>
        <ul>
            <li>Klik på en cirkel for at udforske det perspektiv</li>
            <li>Skift mellem niveauer øverst: Klienter, Fagfolk, Videnskabeligt, eller Sclerose</li>
            <li>Brug "Tilbage" knappen for at navigere</li>
        </ul>
    `;
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
                <p><strong>Se hvordan ${circleNames[circleId]} hænger sammen med:</strong></p>
                ${connectedCircles.map(targetId => {
                    const targetName = circleNames[targetId];
                    return `
                        <div class="connection-item" onclick="showConnectionView('${circleId}', '${targetId}', '${circleId}')">
                            <div class="connection-item-title">\u2192 ${targetName}</div>
                        </div>
                    `;
                }).join('')}
            </div>
        `;
    }

    document.getElementById('info-content').innerHTML = `
        <div style="margin-bottom: 20px;">
            <button onclick="showWelcome()" style="background: none; border: none; color: #6c82a9; font-size: 1rem; cursor: pointer; font-family: 'Times New Roman', Times, serif;">\u2190 Tilbage til oversigt</button>
        </div>
        <h2>${data.title}</h2>
        ${formatText(data.text)}
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
                <button onclick="showCircleView('${fromCircle}')" style="background: none; border: none; color: #6c82a9; font-size: 1rem; cursor: pointer; font-family: 'Times New Roman', Times, serif;">\u2190 Tilbage til ${circleNames[fromCircle]}</button>
            </div>
            <h2>Forbindelse ikke fundet</h2>
        `;
        return;
    }

    const text = connectionData[currentMode];
    const fromName = circleNames[from];
    const toName = circleNames[to];

    document.getElementById('info-content').innerHTML = `
        <div style="margin-bottom: 20px;">
            <button onclick="showCircleView('${fromCircle}')" style="background: none; border: none; color: #6c82a9; font-size: 1rem; cursor: pointer; font-family: 'Times New Roman', Times, serif;">\u2190 Tilbage til ${circleNames[fromCircle]}</button>
        </div>
        <h2>Dynamik: ${fromName} \u2194 ${toName}</h2>
        ${formatText(text)}
    `;

    if (doScroll) {
        scrollToElement('info-panel');
    }
}

// Globale funktioner
window.showWelcome = showWelcome;
window.showCircleView = showCircleView;
window.showConnectionView = showConnectionView;

// Find forbundne cirkler
function getConnectedCircles(circleId) {
    const allCircles = ['tre', 'polyvagal', 'narrative', 'enactivisme', 'levine', 'reich', 'psykologi'];
    return allCircles.filter(id => {
        if (id === circleId) return false;
        const key1 = `${circleId}-${id}`;
        const key2 = `${id}-${circleId}`;
        return content.connections[key1] || content.connections[key2];
    });
}

// Connection clicks (fra SVG)
function setupConnectionClicks() {
    const connections = document.querySelectorAll('.connection');
    connections.forEach(line => {
        line.addEventListener('click', (e) => {
            e.stopPropagation();
            const from = line.dataset.from;
            const to = line.dataset.to;
            // Hvis fra TRE, vis target cirkel først
            const fromCircle = from === 'tre' ? to : from;
            showConnectionView(from, to, fromCircle);
        });
    });
}

// Clear all active - TRE forbliver GRÅ
function clearAllActive() {
    document.querySelectorAll('.circle:not([data-id="tre"])').forEach(c => c.classList.remove('active'));
    document.querySelectorAll('.connection').forEach(c => c.classList.remove('active'));
}
