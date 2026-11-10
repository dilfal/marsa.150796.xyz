/* Approdo – i sette temi della settimana.
   Testi originali in italiano, parafrasati dalle fonti cliniche (DBT, MBT, attaccamento, modello GET): nessun passo è copiato.
   Ogni tema ha: lettura breve, esercizio guidato (passi; le scene a scelta multipla stanno in js/percorso.js; i vecchi campi restano per leggere le note già salvate), domanda e frase della buonanotte.
   `audio` è il testo da leggere ad alta voce (voce di sintesi); `file` è il percorso dell’mp3 e resta null finché la traccia non esiste.
   `fonte` è mostrata in piccolo sotto la lettura, come «Fonti: …»: elenco `Autore (anno), Titolo · argomento; …`. */
window.Approdo = window.Approdo || {};
window.Approdo.Temi = [
  /* ---------------- domenica (getDay() = 0) ---------------- */
  {
    id: 'base', giorno: 0, nome: 'Base sicura', sotto: 'Chi e che cosa ti sostiene',
    fonte: 'Bowlby (1989), Una base sicura · base sicura, esplorazione e attaccamento; Visintini (a cura di, 2024), Il modello GET per la personalità borderline · attaccamento e lavoro di gruppo',
    colore: 'amber',
    lettura: [
      'Bowlby, con Ainsworth, chiamò «base sicura» la persona o il luogo da cui si parte per esplorare il mondo e a cui si torna quando si ha paura. Se so di poter tornare, esploro con meno ansia. Da adulti la base può essere una persona, un gruppo, un posto, una pratica: spesso più d’una.',
      'Se nella tua storia la vicinanza è stata incerta (calda un giorno, lontana quello dopo), si formano i «modelli operanti» dell’attaccamento, cioè le aspettative che ci portiamo dentro su quanto gli altri ci siano e su quanto valiamo. Così è facile non fidarsi dell’appoggio, oppure aggrapparsi troppo. Non è un difetto tuo: è ciò che hai imparato. E si può imparare anche altro, un mattone alla volta.',
      'Nei percorsi di gruppo, come quelli dei Gruppi Esperienziali Terapeutici, il gruppo diventa un luogo protetto dove provare, sbagliare e ritrovarsi senza essere giudicata. Ciò che sperimenti lì è un allenamento per le relazioni fuori.',
      'La domenica sera guardi anche alla settimana che arriva. Non per organizzare tutto: per scegliere una piccola cosa buona e una persona da cercare.'
    ],
    esercizio: {
      titolo: 'La mia base e la mia settimana',
      intro: 'Prenditi qualche minuto. Va bene anche una base immaginata. Puoi saltare le domande che non ti vanno.',
      passi: [
        'Richiama un momento in cui ti sei sentita al sicuro, anche per poco. Dove eri? Chi c’era?',
        'Lascia che quella sensazione si faccia sentire nel corpo (spalle, respiro, mani): è il corpo che passa dall’allarme alla calma.',
        'Poi guarda avanti, alla settimana: non a tutto, solo a un punto.'
      ],
      campi: [
        { id: 'base', etichetta: 'Chi o che cosa è la mia base sicura (anche piccola)', aiuto: 'una persona, un posto, un animale, una musica: ciò che ti fa abbassare la guardia' },
        { id: 'persona', etichetta: 'Una persona che posso cercare questa settimana, e come', aiuto: 'un messaggio, una telefonata, un caffè' },
        { id: 'cosa', etichetta: 'Una piccola cosa che farò per me', aiuto: 'una passeggiata, un pasto con calma' },
        { id: 'difficile', etichetta: 'Il momento in cui sarà più dura, e che cosa farò', aiuto: 'una tecnica, una persona, un posto' }
      ],
      respiro: false
    },
    domanda: 'Su chi o su che cosa ho potuto appoggiarmi questa settimana, quando mi sono sentita in allarme?',
    frase: 'Non devo farcela da sola. Posso chiedere appoggio.',
    audio: 'Stasera restiamo vicine a un’idea semplice: non devi farcela da sola. Appoggia la schiena, lascia che il letto o la sedia ti sostengano. Senti dove il corpo viene retto. Quella è già una base. Pensa a una persona, o a un posto, che ti fa sentire un po’ più al sicuro. Non deve essere perfetta: basta che ci sia. Respira lentamente. Domani riparte la settimana, e tu non parti da zero: hai già ciò che hai imparato, e hai chi puoi cercare. Per ora non c’è niente da fare. Resta qui, sostenuta, e lascia che il sonno arrivi quando vuole. Buonanotte.',
    file: 'audio/voce/base.mp3'
  },
  /* ---------------- lunedì (1) ---------------- */
  {
    id: 'presenza', giorno: 1, nome: 'Presenza', sotto: 'Tornare qui, dove sei adesso',
    fonte: 'Linehan (2015), DBT Skills Training Manual · Mindfulness di base (mente saggia, abilità «che cosa» e «come»); Williams, Teasdale, Segal e Kabat-Zinn (2010), Ritrovare la serenità · rimuginio e pensieri come eventi mentali; Aguirre e Galen (2013), Mindfulness for Borderline Personality Disorder · mindfulness e borderline',
    colore: 'teal',
    lettura: [
      'Di sera la mente corre: rimugina su ciò che è stato (pensa in cerchio, senza arrivare a una soluzione) e anticipa ciò che sarà. La presenza, o mindfulness, non ferma i pensieri: ti allena a notarli come eventi della mente, non come fatti, senza farti trascinare via.',
      'Nella DBT si parla di tre stati. La mente emotiva è guidata da ciò che senti; la mente razionale, dai fatti e dalla logica. La mente saggia è dove le due si integrano. Non è un posto lontano: è un momento di quiete in cui sai già, in fondo, che cosa è giusto per te.',
      'Le abilità sono poche. Tre dicono «che cosa» fai: osservare (notare, senza cambiare niente), descrivere (mettere parole su ciò che noti: dare un nome calma) e partecipare (esserci per intero). Altre dicono «come»: senza giudicare, una cosa alla volta, con efficacia. «Sto avendo questo pensiero» al posto di «sono sbagliata» è prendere distanza dal pensiero invece di fondersi con lui.',
      'Se la mente scappa (succede a tutti) la riporti qui, senza rimproveri. Riportarla è l’esercizio: ogni ritorno allena il controllo dell’attenzione.'
    ],
    esercizio: {
      titolo: 'Tre minuti per tornare qui',
      intro: 'Siediti o stenditi. Metti una mano sul petto o sulla pancia.',
      passi: [
        'Respira con il cerchio qui sotto: dentro per quattro, fuori per sei. L’espirazione più lenta aiuta il «freno» del sistema nervoso (il parasimpatico) a calmare il corpo.',
        'Quando arriva un pensiero, dagli un’etichetta, piano: «sto pensando…». Poi torna al respiro.',
        'Se arriva un giudizio («non ci riesco»), trasformalo in descrizione: «sto avendo il pensiero che non ci riesco». È un evento della mente, non un fatto sul mondo.',
        'Alla fine chiedi alla tua mente saggia: «Di che cosa ho bisogno adesso?». Aspetta, senza forzare la risposta.'
      ],
      campi: [
        { id: 'bisogno', etichetta: 'Di che cosa ho bisogno adesso?', aiuto: 'riposo, un abbraccio, silenzio, una cosa da dire…' }
      ],
      respiro: true
    },
    domanda: 'Che cosa ho notato stasera che di solito mi sfugge, quando la mente corre?',
    frase: 'Sono qui. Per stasera basta essere qui.',
    audio: 'Stasera non c’è niente da risolvere. C’è solo questo momento. Senti il peso del corpo, dove tocca il letto. Senti l’aria che entra e quella che esce. Se arriva un pensiero, puoi dirgli: ti ho visto. E tornare al respiro. Non importa quante volte la mente va via: ogni volta che torni, stai già facendo l’esercizio. Inspira per quattro, espira piano per sei. Il giorno è finito, e quello che è successo oggi può restare dov’è. Tu sei qui. Per stasera, basta essere qui. Buonanotte.',
    file: 'audio/voce/presenza.mp3'
  },
  /* ---------------- martedì (2) ---------------- */
  {
    id: 'emozioni', giorno: 2, nome: 'Emozioni', sotto: 'Dare un nome a ciò che senti',
    fonte: 'Linehan (2015), DBT Skills Training Manual · Regolazione emotiva (nominare le emozioni, controllare i fatti, azione opposta, PLEASE); Linehan (2015), DBT Skills Training Handouts and Worksheets · schede di regolazione emotiva; Carbone (2025), Come ti senti? · dare un nome alle emozioni; Carbone (2023), Crisi tempestose · regolazione emotiva',
    colore: 'rose',
    lettura: [
      'Le emozioni non sono nemiche: sono messaggi, e portano con sé una spinta ad agire. La paura dice «attenzione», la tristezza «ho perso qualcosa», la rabbia «un limite è stato superato». Quando arrivano in fretta e fortissime (si parla di vulnerabilità emotiva: sensibilità alta, reazione intensa, ritorno alla calma lento) è difficile capire che cosa vogliano dirci.',
      'Primo passo: un nome. Uno solo, il più preciso che trovi: non «sto male», ma «delusione», «solitudine», «vergogna». Un nome rende l’emozione più piccola e più maneggevole. Aiuta anche distinguere l’emozione primaria (la prima reazione, per esempio la paura di essere lasciata) dalla secondaria (la reazione all’emozione, per esempio la vergogna di aver avuto paura).',
      'Secondo passo: controllare i fatti. L’emozione è sempre vera, ha senso che tu la senta. L’interpretazione che la accompagna può non esserlo. Che cosa è successo davvero? Che cosa ho aggiunto io? Quanto è probabile ciò che temo?',
      'Terzo passo: se agire come l’emozione spinge peggiorerebbe le cose, si prova l’azione opposta, in piccolo, cioè una mossa nella direzione contraria all’impulso. Se la vergogna ti spinge a nasconderti, fai un passetto verso qualcuno. Se la tristezza ti spinge a restare chiusa, apri una finestra. E il corpo conta: sonno, cibo, movimento (la sigla inglese è PLEASE) ti rendono meno vulnerabile. Curare le malattie fisiche e prendere i farmaci prescritti, come ti hanno indicato, fa parte della stessa cura.'
    ],
    esercizio: {
      titolo: 'Nome, fatti, impulso',
      intro: 'Pensa a un momento di oggi in cui hai sentito qualcosa di forte. Non serve scegliere il più forte: un’emozione media è più facile da osservare.',
      passi: [
        'Cerca il nome più preciso dell’emozione. Se ne trovi due, tienile entrambe: spesso una è quella primaria e l’altra la copre.',
        'Separa i fatti (ciò che una telecamera avrebbe ripreso) dalle interpretazioni che hai aggiunto tu.',
        'Nota la spinta ad agire (l’impulso) che l’emozione ti dava. Poi pensa a una piccola mossa nella direzione opposta.'
      ],
      campi: [
        { id: 'nome', etichetta: 'L’emozione, con il suo nome', aiuto: 'delusione, paura, solitudine…' },
        { id: 'fatti', etichetta: 'Che cosa è successo (solo i fatti)', aiuto: '«ha detto… ho letto… non ha risposto…»' },
        { id: 'aggiunto', etichetta: 'Che cosa ho aggiunto io', aiuto: 'interpretazioni, previsioni, giudizi, letture della mente dell’altro' },
        { id: 'impulso', etichetta: 'A che cosa mi spingeva', aiuto: 'sparire, urlare, controllare il telefono…' },
        { id: 'opposta', etichetta: 'Una piccola mossa opposta', aiuto: 'un passo, non una svolta' }
      ],
      respiro: false
    },
    domanda: 'Quale emozione ha attraversato la mia giornata, che cosa voleva dirmi e a che cosa mi spingeva?',
    frase: 'Quello che sento ha un senso, anche quando non lo capisco ancora.',
    audio: 'Stasera lasciamo che le emozioni della giornata si fermino un momento a farsi guardare. Non devi cambiarle. Basta dare un nome a quella che c’è adesso, anche lieve. Una parola sola. Senti dove sta nel corpo: forse nel petto, forse nello stomaco. Respira verso quel punto, piano. Un’emozione è come un’onda: sale, arriva alla cima, e poi scende, anche quando non sembra. Quello che senti ha un senso. Domani avrai di nuovo il tempo per capirlo. Adesso puoi metterla da parte. Buonanotte.',
    file: 'audio/voce/emozioni.mp3'
  },
  /* ---------------- mercoledì (3) ---------------- */
  {
    id: 'mentalizzare', giorno: 3, nome: 'Mentalizzare', sotto: 'Fermarsi e chiedersi che cosa passa nella mente',
    fonte: 'Bateman e Fonagy (2016), Mentalization-Based Treatment for Personality Disorders · mentalizzare, equivalenza psichica, posizione del non sapere; Visintini (a cura di, 2024), Il modello GET per la personalità borderline · mentalizzazione e attaccamento',
    colore: 'blue',
    lettura: [
      'Mentalizzare è vedere i comportamenti, i miei e quelli degli altri, come espressione di stati mentali: emozioni, pensieri, desideri, bisogni. È il ponte tra «non ha risposto» e «forse era stanco, forse era in difficoltà, forse non ha visto il messaggio».',
      'Quando l’attivazione emotiva sale molto, quel ponte crolla e arriva la certezza: «so cosa pensa, mi ha rifiutata». Si chiama equivalenza psichica: ciò che penso mi sembra per forza la realtà. Ma la mente dell’altro è opaca: possiamo fare ipotesi, mai avere prove. Poter dire «non lo so» è la parte più difficile e quella che protegge di più.',
      'Anche la mia mente è spesso più confusa di quanto sembri: posso sentire una cosa senza sapere da dove venga. Mentalizzare vuol dire anche essere curiosa di me, invece che severa.',
      'Il gesto è semplice: rallentare. Fermarsi, ascoltare che cosa sento, riflettere su che cosa potrebbe esserci dietro, prima di agire. Non serve avere ragione: serve restare curiosa, cioè tenere la posizione del non sapere.'
    ],
    esercizio: {
      titolo: 'Riavvolgi la scena',
      intro: 'Scegli una scena di oggi con un’altra persona, meglio una che ti pesa poco o moderatamente. Ripercorrila come un film, a velocità lenta. Se senti che ti agita troppo, scegline una più leggera o torna al respiro: quando l’attivazione è alta, la capacità di mentalizzare si spegne.',
      passi: [
        'Metti in pausa il momento in cui hai sentito che qualcosa cambiava.',
        'Guarda prima te (mentalizzare di sé): che cosa sentivi, che cosa ti passava per la testa?',
        'Poi l’altra persona (mentalizzare dell’altro): invece di una certezza, costruisci due o tre ipotesi diverse, anche banali.',
        'Per finire, ammetti ciò che non puoi sapere, e resta un attimo in quel «non lo so».'
      ],
      campi: [
        { id: 'scena', etichetta: 'La scena, in breve (solo ciò che si vedeva)', aiuto: '' },
        { id: 'io', etichetta: 'Che cosa sentivo e pensavo io', aiuto: '' },
        { id: 'ipotesi', etichetta: 'Tre cose che l’altra persona potrebbe aver provato o pensato', aiuto: 'almeno una «neutra» o gentile' },
        { id: 'nonso', etichetta: 'Che cosa non posso sapere', aiuto: 'e potrei chiedere?' }
      ],
      respiro: false
    },
    domanda: 'Su che cosa, oggi, ero troppo sicura di sapere cosa pensava l’altra persona? Quale altra ipotesi era possibile?',
    frase: 'Posso non sapere. Posso restare curiosa.',
    audio: 'Stasera facciamo una cosa gentile: lasciamo che alcune domande restino aperte. Scegli una scena leggera di oggi con un’altra persona. Immagina di mettere la scena in pausa. Che cosa sentivi tu? E che cosa potrebbe essere passato nella testa dell’altra persona? Non una sola spiegazione: due, tre, anche diverse tra loro. Non puoi sapere quale sia vera, e va bene così. Non sapere non è un pericolo: è spazio. Respira, e lascia che la scena si allontani. Domani, se vorrai, potrai chiedere. Adesso puoi riposare. Buonanotte.',
    file: 'audio/voce/mentalizzare.mp3'
  },
  /* ---------------- giovedì (4) ---------------- */
  {
    id: 'relazioni', giorno: 4, nome: 'Relazioni', sotto: 'Chiedere, dire no, restare in relazione',
    fonte: 'Linehan (2015), DBT Skills Training Manual · Efficacia interpersonale (DEAR MAN, GIVE, FAST); Linehan (2015), DBT Skills Training Handouts and Worksheets · schede di efficacia interpersonale',
    colore: 'violet',
    lettura: [
      'Nelle relazioni vicine si giocano spesso tre obiettivi insieme: ottenere ciò che ti serve, mantenere il legame, rispettare te stessa. Quando la paura di perdere l’altro è forte, è facile sacrificarne uno: dire sì quando vorresti dire no, oppure esplodere e rovinare il rapporto. L’efficacia interpersonale è saperli tenere insieme.',
      'Per chiedere o rifiutare con chiarezza c’è DEAR MAN. Descrivi i fatti (solo ciò che si vede). Esprimi che cosa senti. Asserisci ciò che chiedi, in modo preciso. Rinforza: spiega che cosa ci guadagna anche l’altro. Poi resta Mindful sul tuo obiettivo (se la conversazione devia, torni al punto), Appari sicura (postura e tono, anche se dentro non lo sei) e Negozia (sei pronta a cedere qualcosa).',
      'Per curare il legame c’è GIVE: Gentile, Interessata all’altro, Validante (riconosci che il suo punto di vista ha senso, senza per forza condividerlo), con un tono Easy, leggero. Per il rispetto di sé c’è FAST: Fair (giusta, anche con te), niente scuse (Apologies) eccessive, Stai ai tuoi valori, Truthful (sincera, senza esagerare).',
      'Non servono tutte le sigle ogni volta. Scegli che cosa conta di più in quella situazione e basta farlo bene una volta.'
    ],
    esercizio: {
      titolo: 'Una richiesta con DEAR',
      intro: 'Scegli una cosa piccola che vorresti dire o chiedere nei prossimi giorni. Meglio una piccola che la più grande.',
      passi: [
        'Preparala a mente con le quattro prime lettere (descrivi, esprimi, asserisci, rinforza). Frasi corte.',
        'Dilla ad alta voce, piano, una volta. Senti il tono: deve poter essere detta con calma.',
        'Immagina la risposta dell’altro e prepara un’alternativa (negoziare). Se arriva un no, non significa che il legame sia finito.'
      ],
      campi: [
        { id: 'descrivo', etichetta: 'Descrivo (i fatti)', aiuto: '«Quando succede che…» (solo i fatti, senza giudizi)' },
        { id: 'esprimo', etichetta: 'Esprimo (come mi sento)', aiuto: '«Mi sento…»' },
        { id: 'chiedo', etichetta: 'Chiedo (una cosa precisa)', aiuto: '«Mi piacerebbe che…»' },
        { id: 'rinforzo', etichetta: 'Rinforzo (che cosa ci guadagniamo)', aiuto: '«Per me sarebbe…»' }
      ],
      respiro: false
    },
    domanda: 'Quale mio bisogno ho taciuto oggi, e come potrei dirlo con gentilezza e con chiarezza?',
    frase: 'Posso volere qualcosa e volere bene allo stesso tempo.',
    audio: 'Stasera pensiamo alle persone che contano per te. Non per giudicare nessuno, né te stessa. Pensa a una cosa piccola che vorresti dire, o chiedere. Immagina di dirla con calma: poche parole, una dopo l’altra. Senti che il tuo bisogno ha un posto, e che anche il legame ne ha uno. Possono stare insieme. Domani non devi risolvere tutto: puoi dire solo una frase. Adesso respira, e lascia andare le conversazioni della giornata. Hai fatto abbastanza. Buonanotte.',
    file: 'audio/voce/relazioni.mp3'
  },
  /* ---------------- venerdì (5) ---------------- */
  {
    id: 'disagio', giorno: 5, nome: 'Reggere il disagio', sotto: 'Attraversare il momento senza peggiorarlo',
    fonte: 'Linehan (2015), DBT Skills Training Manual · Tolleranza del disagio (STOP, TIP, autocalmarsi con i cinque sensi, accettazione radicale); Linehan (2015), DBT Skills Training Handouts and Worksheets · TIP: cambiare la chimica del corpo; Linehan (2021), Una vita degna di essere vissuta · accettazione radicale',
    colore: 'amber',
    lettura: [
      'Ci sono momenti in cui il dolore non si toglie subito. La domanda allora diventa: come attraverso quest’ora senza fare qualcosa che domani mi peserà? La tolleranza del disagio non risolve il problema: ti dà tempo, ed evita le scorciatoie che spengono tutto subito ma costano dopo (l’evitamento esperienziale: fuggire da ciò che senti, a ogni costo).',
      'STOP: Fermati (blocca il corpo), fai un passo indietro, Osserva (che cosa succede dentro e fuori), Procedi con consapevolezza. Sono trenta secondi che mettono distanza tra l’impulso e l’azione, cioè interrompono la reazione automatica.',
      'Quando l’attivazione è alta (il corpo è in allarme, il cuore corre) la mente non ascolta: serve prima il corpo. TIPP: Temperatura (acqua fredda sul viso, che può rallentare il battito), attività fisica Intensa (aiuta a scaricare l’attivazione), respirazione Paced (espira più lenta di quanto inspiri), rilassamento muscolare abbinato al respiro (Paired: tendi i muscoli inspirando, lasciali andare espirando). Puoi usarlo anche presto, appena la tensione sale, senza aspettare il culmine.',
      'Poi ci sono i sensi (autocalmarsi): un odore, una coperta, un tè caldo, un suono. E l’accettazione radicale: riconoscere che ciò che è già successo è successo. Non vuol dire approvarlo, né rassegnarti o subire: puoi accettare e, insieme, proteggerti e cambiare ciò che puoi. Il dolore c’è; la sofferenza in più nasce dal «non dovrebbe essere così»: smetti di spendere energie lì.'
    ],
    avviso: 'Acqua fredda sul viso (fredda ma non gelida, niente ghiaccio sulla pelle, per pochi secondi, senza forzare il respiro: agisce sul battito cardiaco) e sforzo fisico intenso: evitali se hai problemi di cuore o di battito, se prendi farmaci che rallentano il cuore, se sei in gravidanza, se hai un disturbo alimentare o allergia al freddo, e chiedi al tuo medico. In dubbio, usa il respiro lento e i cinque sensi.',
    esercizio: {
      titolo: 'Il mio kit per i momenti duri',
      intro: 'Prepariamo adesso, ora che sei più calma, quello che ti servirà quando sarà dura: a corpo in allarme non si riesce a progettare. Pochi elementi, ma tuoi.',
      passi: [
        'Respira per un minuto con il cerchio qui sotto: espirazione lunga (respirazione ritmica).',
        'Per ognuno dei cinque sensi, trova una cosa che ti calma e che puoi avere a portata di mano (autocalmarsi).',
        'Scegli una frase da dirti quando fai STOP: serve a ricordarti che l’impulso è un’onda che passa.'
      ],
      campi: [
        { id: 'vista', etichetta: 'Vedo: che cosa mi calma guardare', aiuto: 'una foto, il cielo, una luce' },
        { id: 'udito', etichetta: 'Sento: che cosa mi calma ascoltare', aiuto: 'una canzone, la pioggia, una voce' },
        { id: 'olfatto', etichetta: 'Odore', aiuto: 'un profumo, il caffè, il sapone' },
        { id: 'gusto', etichetta: 'Gusto', aiuto: 'un tè caldo, una caramella forte' },
        { id: 'tatto', etichetta: 'Tatto', aiuto: 'una coperta, l’acqua, un sasso liscio' },
        { id: 'frase', etichetta: 'La mia frase per fermarmi', aiuto: '«Questo momento passa»' }
      ],
      respiro: true
    },
    domanda: 'Che cosa mi ha aiutata, questa settimana, ad attraversare un momento difficile senza peggiorarlo? (Se ripensarci ti agita, pensa solo a ciò che ha aiutato.)',
    frase: 'Questo momento passa. Io resto.',
    audio: 'Stasera ricordiamoci che i momenti difficili passano, anche quando non sembra. Respira lentamente: dentro per quattro, fuori per sei. Pensa a qualcosa che ti calma: un odore, una coperta, una musica. Sentilo, per un momento. Non devi sentirti bene. Ti basta attraversare quest’ora, un respiro alla volta, senza fare niente che domani ti pesi. Se è stata una settimana dura, hai già fatto la parte più difficile: sei arrivata a stasera. Il momento passa. E tu resti. Buonanotte.',
    file: 'audio/voce/disagio.mp3'
  },
  /* ---------------- sabato (6) ---------------- */
  {
    id: 'valore', giorno: 6, nome: 'Valore di sé', sotto: 'Dirti ciò che diresti a chi ami',
    fonte: 'Linehan (2015), DBT Skills Training Manual · Efficacia interpersonale: validazione e autovalidazione; Linehan (1993), Cognitive-Behavioral Treatment of Borderline Personality Disorder · validazione e ambiente invalidante; Linehan (2021), Una vita degna di essere vissuta · validazione e accettazione',
    colore: 'rose',
    lettura: [
      'Validare vuol dire riconoscere che ciò che una persona sente, pensa o fa è comprensibile, date la sua storia e la situazione. Non significa darle ragione su tutto, né che sia piacevole. Significa che non sei «troppo» né «sbagliata» per sentirlo.',
      'Chi ha vissuto a lungo la sensazione di non essere creduta nelle proprie emozioni (si parla di ambiente invalidante: dove emozioni e bisogni vengono sminuiti o ignorati) tende a non fidarsi più di sé, e a cercare fuori la conferma. L’autovalidazione è imparare a darsela, poco a poco.',
      'Come si fa: noti che cosa senti, senza giudicarlo; dici «ha senso che io senta X, perché Y»; riconosci ciò che hai fatto di buono, anche se piccolo; ti tratti come tratteresti una persona cara nella tua stessa situazione.',
      'Non è giustificarsi. Puoi validare un’emozione e, insieme, voler cambiare un comportamento: è la dialettica, due cose vere nello stesso momento. Il sabato, a mente più libera, puoi anche chiederti: che persona voglio essere? I valori sono una direzione, non un traguardo da raggiungere.'
    ],
    esercizio: {
      titolo: 'Tre frasi vere',
      intro: 'Dille come le diresti a una persona cara. Poi, se ti va, ripetile a voce bassa.',
      passi: [
        'Pensa a un’emozione di oggi e chiediti perché, con la tua storia, ha senso (validare l’emozione).',
        'Cerca una cosa che hai retto o fatto, anche piccola (validare ciò che hai fatto).',
        'Cerca una cosa che apprezzi di te. Se non la trovi, chiediti che cosa apprezzerebbe di te chi ti vuole bene.'
      ],
      campi: [
        { id: 'senso', etichetta: 'Oggi ho sentito… e ha senso perché…', aiuto: '' },
        { id: 'retto', etichetta: 'Una cosa che ho retto oggi', aiuto: 'anche solo alzarmi, rispondere, respirare' },
        { id: 'apprezzo', etichetta: 'Una cosa che apprezzo di me', aiuto: 'anche piccola' },
        { id: 'valore', etichetta: 'Un valore che voglio vivere domani', aiuto: 'gentilezza, onestà, coraggio, cura…' }
      ],
      respiro: false
    },
    domanda: 'Che cosa direi, con le stesse parole, a una persona cara nella mia situazione?',
    frase: 'Ho il diritto di sentire quello che sento.',
    audio: 'Stasera, prima di dormire, parliamo a noi stesse con gentilezza. Pensa a come parleresti a una persona cara che ha avuto la tua stessa giornata. Che cosa le diresti? Probabilmente: ha senso che ti senta così. Hai fatto quello che potevi. Dillo anche a te, con la stessa voce. Non serve credere a tutto: basta provare. Hai il diritto di sentire quello che senti. Sei più di una giornata difficile. Respira, e lasciati riposare. Buonanotte.',
    file: 'audio/voce/valore.mp3'
  }
];

/* Giorni della settimana, per i testi. Indice = Date.getDay(). */
window.Approdo.Giorni = ['domenica', 'lunedì', 'martedì', 'mercoledì', 'giovedì', 'venerdì', 'sabato'];
