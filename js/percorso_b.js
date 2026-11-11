/* Approdo – seconda serie di scene («serie B») per le sette sere.
   Si alterna alla prima (js/percorso.js): la prima volta che si fa un tema si vede la serie A, la volta dopo la B, e così via.
   Chiusura e riepilogo restano quelli della serie A: i `tag` qui sotto sono gli stessi del `riepilogo` di ogni tema
   (un’opzione senza `tag` non conta nel riepilogo).
   Base: Visintini (a cura di, 2024), Il modello GET per la personalità borderline (cap. 1, 3 e 4).
   Testi originali, parafrasati: nessun passo è copiato. Niente alcol né sostanze, nessun comportamento nominato.
   `get` (facoltativo): rimando a Diario GET (diario-get.150796.xyz), che ha già Scheda Crisi, Pianificazione, check-in e Guida:
   qui non si rifanno. `vai` ammessi: 'crisi' | 'pian' | 'check' | 'guida/<capitolo>'.
   Le risposte si salvano per posizione (indice): dopo la pubblicazione non riordinare e non inserire voci in mezzo. */
window.Approdo = window.Approdo || {};
(function () {
  var F = 'Visintini (a cura di, 2024), Il modello GET per la personalità borderline · ';
  var VERO = 'È vero', FALSO = 'È falso', DIPENDE = 'Dipende, non so';

  window.Approdo.PercorsoB = {
    /* ---------------- domenica: Base sicura ---------------- */
    base: [
      {
        id: 'base-b1', tipo: 'riconosci', multi: false,
        domanda: 'Hai davanti un fine settimana senza impegni. Se ti chiedi «che cosa faccio sabato?», che cosa ti rispondi?',
        fonte: F + 'gruppo di Pianificazione: l’attività, non il luogo; il tempo vuoto',
        get: { vai: 'pian', testo: 'Prepara il fine settimana nel Diario GET: Pianificazione' },
        opzioni: [
          { testo: '«Sto a casa»: non ho programmi.', tag: 'dasola', spiegazione: '«Sto a casa» dice dove sei, non che cosa fai. Nel gruppo di Pianificazione si impara a nominare l’attività, anche quando è «dormo fino a tardi e poi giro per casa»: pure il non fare è un fare, e dirlo con un verbo mostra dove il tempo vuoto può pesare. Prova: sabato mattina, che cosa farai?' },
          { testo: 'Aspetto che qualcuno mi proponga qualcosa.', tag: 'cerca', spiegazione: 'Aspettare un invito è cercare vicinanza, ed è sano. Il costo è lasciare ad altri la forma delle tue giornate: se la proposta non arriva, resta il vuoto. Puoi tenere le due cose: la porta aperta, e una cosa piccola decisa da te che c’è comunque.' },
          { testo: 'Riempio ogni ora, così non resta spazio.', tag: 'dasola', spiegazione: 'Riempire tutto protegge dal vuoto, ma stanca: una giornata troppo piena rende più vulnerabili la sera. Lo scopo di un piano non è occupare il tempo: è prendersi cura dell’emozione che sta dentro il tempo vuoto. Puoi lasciare un’ora libera e chiederti che cosa temi di sentire lì.' },
          { testo: 'Scelgo una o due cose e lascio il resto libero.', tag: 'costruisce', spiegazione: 'Pochi punti fermi danno struttura senza saturare: è il modo più sostenibile di pianificare. Se uno dei due momenti ti preoccupa, puoi pensare già adesso a che cosa ti aiuterebbe. Anche solo averlo nominato lo rende meno grande.' }
        ]
      },
      {
        id: 'base-b2', tipo: 'riconosci', multi: false,
        domanda: 'Nel gruppo una persona saluta: ha finito il suo percorso. Che cosa senti?',
        fonte: F + 'gruppo aperto e saluto di fine percorso',
        opzioni: [
          { testo: 'Sono contenta per lei, e un po’ spero per me.', tag: 'costruisce', spiegazione: 'Il gruppo è aperto proprio per questo: chi arriva vede che cambiare è possibile, chi saluta si accorge della strada fatta. Quella speranza è un appoggio vero. Puoi tenerla da parte per i giorni in cui sembra che niente si muova.' },
          { testo: 'Mi sento lasciata: un’altra persona che se ne va.', tag: 'cerca', spiegazione: 'Ha senso: ogni saluto è una piccola perdita, e chi ha conosciuto separazioni dolorose la sente più forte. Stavolta però è una separazione annunciata, condivisa, con un perché. Dirlo nel gruppo («mi mancherai») è un modo di attraversarla insieme, non da sola.' },
          { testo: 'Penso che io non ci arriverò mai.', tag: 'dubita', spiegazione: 'Il confronto fa male quando metti il suo arrivo accanto al tuo oggi. Ma anche lei, all’inizio, era dove sei tu: è ciò che spesso chi saluta racconta. Il percorso non va in linea retta e ognuna ha i suoi tempi. Che cosa ti ha colpita di come è cambiata?' },
          { testo: 'Faccio finta di niente: meglio non affezionarsi.', tag: 'dasola', spiegazione: 'Tenersi a distanza protegge dal dolore del distacco, e si capisce. Il costo è perdere anche il calore del legame. Affezionarsi a qualcuno che poi va per la sua strada non è un errore: è la prova che sai legarti, e che un legame può finire bene.' }
        ]
      },
      {
        id: 'base-b3', tipo: 'mito', multi: false,
        domanda: 'Se il percorso funziona, non dovrei più avere momenti difficili.',
        fonte: F + 'il processo terapeutico non è lineare',
        opzioni: [
          { testo: VERO, tag: 'dubita', spiegazione: 'È un pensiero comprensibile, ma mette una trappola: ogni giornata storta diventa la «prova» che niente funziona. Il percorso non è lineare: momenti duri possono tornare anche quando si è molto più avanti. Ciò che cambia è quanto sono intensi, quanto presto li riconosci e quanto in fretta ti riprendi.' },
          { testo: FALSO, tag: 'costruisce', spiegazione: 'Sì: il percorso non è lineare e i momenti difficili possono tornare, insieme al timore di ricadere. Non cancellano la strada fatta. I segni del cambiamento sono altri: momenti meno intensi, riconosciuti prima, e una ripresa più rapida.' },
          { testo: DIPENDE, tag: 'dubita', spiegazione: 'Il dubbio ha senso: nei giorni buoni sembra tutto risolto, in quelli duri sembra tutto perso. Nessuna delle due cose è vera. Il percorso va avanti a onde: i momenti difficili possono tornare, ma di solito pesano meno e passano prima.' }
        ]
      },
      {
        id: 'base-b4', tipo: 'kit', multi: true,
        domanda: 'Che cosa può entrare nel tuo prossimo fine settimana? Spunta ciò che ti sembra possibile.',
        fonte: F + 'gruppo di Pianificazione: strutturare le giornate con attività piacevoli e necessarie',
        get: { vai: 'pian', testo: 'Scrivilo nella Pianificazione del Diario GET' },
        opzioni: [
          { testo: 'Una cosa piacevole, anche piccola.', tag: 'costruisce', spiegazione: 'Le cose piacevoli non sono un premio da meritare: sono parte della cura. Decidila prima (quale, e quando), così non dipende dall’umore del momento.' },
          { testo: 'Una cosa necessaria: la spesa, una lavatrice, una commissione.', tag: 'costruisce', spiegazione: 'Le piccole responsabilità portate a termine danno senso di padronanza, cioè la sensazione di avere in mano la propria giornata. Una sola, non tutte.' },
          { testo: 'Un contatto con una persona, deciso prima.', tag: 'cerca', spiegazione: 'Deciderlo prima toglie il peso di cercare qualcuno proprio quando stai peggio. Basta poco: un caffè, una telefonata, una passeggiata.' },
          { testo: 'Un momento che già temo, con un’idea di come affrontarlo.', tag: 'costruisce', spiegazione: 'Prevedere il momento difficile non lo attira: lo rende meno improvviso. Chiediti che cosa potresti provare e che cosa ti aiuterebbe. Anche senza una strategia pronta, averlo nominato alleggerisce.' },
          { testo: 'Un tempo vuoto scelto da me, non subìto.', tag: 'costruisce', spiegazione: 'Un’ora libera decisa da te è diversa da un vuoto che ti cade addosso. Puoi darle un posto e un confine: «dalle quattro alle cinque non faccio niente, sul divano».' },
          { testo: 'Non riesco ancora a pensarci, e va bene dirlo.', tag: 'dubita', spiegazione: 'Pensare ai giorni che arrivano mette a contatto con ciò che potresti provare, e per questo viene da evitarlo. È normale. Puoi cominciare da un solo pezzo: sabato mattina, e basta.' }
        ]
      }
    ],

    /* ---------------- lunedì: Presenza ---------------- */
    presenza: [
      {
        id: 'presenza-b1', tipo: 'riconosci', multi: false,
        domanda: 'Un pomeriggio senza niente da fare. Dopo un po’ la mente parte. Dove va, di solito?',
        fonte: F + 'rimuginio, noia e cascata emotiva',
        get: { vai: 'guida/emozioni', testo: 'Approfondisci nella Guida del Diario GET: «Emozioni e disregolazione»' },
        opzioni: [
          { testo: 'Torna su una cosa andata male e la rigira.', tag: 'rimugina', spiegazione: 'È il pensiero circolare, e arriva soprattutto nei momenti del «non fare». Sembra cercare una soluzione, ma alza l’emozione, e l’emozione più alta alimenta altri pensieri: è una cascata. Accorgerti che stai girando in tondo è il primo segnale utile, ed è già un passo fuori dal giro.' },
          { testo: 'Corre avanti, a tutto ciò che potrebbe andare storto.', tag: 'rimugina', spiegazione: 'La mente prova a proteggerti preparandosi al peggio, ma il corpo reagisce come se stesse già succedendo. È la stessa cascata del rimuginio, rivolta al futuro. Una cosa concreta e presente (i piedi a terra, un oggetto in mano) le toglie un po’ di spinta.' },
          { testo: 'Prendo il telefono e non ci penso più.', tag: 'distrae', spiegazione: 'Spostare l’attenzione è una strategia vera, non una colpa. Funziona meglio quando la scegli (una cosa sola, fatta con attenzione) che quando lo schermo scorre da solo. La differenza si sente dopo: sei più riposata o più svuotata?' },
          { testo: 'Mi dico che sto sprecando tempo, come sempre.', tag: 'giudica', spiegazione: 'Qui entra il giudizio: non descrive ciò che accade, lo condanna, e l’emozione sale. Non serve eliminarlo (nessuno ci riesce): serve accorgersi del momento in cui arriva. «Ecco il giudizio» è già un modo di guardarlo da fuori.' },
          { testo: 'Me ne accorgo e torno a quello che ho intorno.', tag: 'osserva', spiegazione: 'È l’abilità che la pratica allena: dirigere l’attenzione dove scegli tu, senza che l’emozione la trascini via. Non riesce sempre, e va bene: ogni volta che torni, quella capacità si rinforza un po’.' }
        ]
      },
      {
        id: 'presenza-b2', tipo: 'riconosci', multi: false,
        domanda: 'Provi un esercizio di respiro. Dopo dieci secondi stai pensando ad altro. Che cosa ti dici?',
        fonte: F + 'gruppo di Attivazione Corporea: la mindfulness come «seme» da coltivare',
        opzioni: [
          { testo: '«Non sono capace: non fa per me.»', tag: 'giudica', spiegazione: 'Succede a chiunque: stare nel presente è faticoso, ancora di più per una mente abituata a oscillare tra passato e futuro. Distrarsi non è sbagliare l’esercizio: accorgersene e tornare è l’esercizio. Chi lo insegna parla di un seme: cresce se lo annaffi poco e spesso.' },
          { testo: 'Lascio perdere e faccio altro.', tag: 'distrae', spiegazione: 'Ha senso: nessuno insiste volentieri su una cosa che sembra non riuscire. Ma i risultati qui arrivano tardi, come una semina. Prova a rimpicciolire: tre respiri soltanto, una volta al giorno, quando sei abbastanza calma.' },
          { testo: 'Stare ferma mi agita ancora di più.', tag: 'distrae', spiegazione: 'Capita spesso: quando ti fermi, il corpo fa sentire ciò che prima era coperto dal fare. Non è un segno che peggiori. Puoi cominciare da pratiche in movimento: qualche passo lento sentendo i piedi, o un oggetto da toccare e descrivere.' },
          { testo: 'Noto che sono andata via e torno al respiro.', tag: 'osserva', spiegazione: 'È esattamente questo: notare e tornare, senza rimproverarti. Dieci ritorni in un minuto non sono dieci errori, sono dieci ripetizioni dell’allenamento.' }
        ]
      },
      {
        id: 'presenza-b3', tipo: 'mito', multi: false,
        domanda: 'Fare mindfulness vuol dire svuotare la mente e non pensare a niente.',
        fonte: F + 'gruppo di Attivazione Corporea: osservare i pensieri',
        opzioni: [
          { testo: VERO, tag: 'giudica', spiegazione: 'È un’idea diffusa, e scoraggia: nessuno riesce a non pensare. I pensieri continuano ad arrivare; l’esercizio è guardarli passare, come pacchi su un nastro trasportatore, senza salirci sopra. Non è fuggire dai problemi: è osservare la tua reazione invece di esserne trascinata.' },
          { testo: FALSO, tag: 'osserva', spiegazione: 'Sì. La mente continua a produrre pensieri: la pratica è notarli e lasciarli scorrere, come foglie su un fiume o pacchi su un nastro. Sono eventi passeggeri della mente, non ordini e non fatti.' },
          { testo: DIPENDE, tag: 'rimugina', spiegazione: 'A volte la mente si quieta davvero, ed è piacevole; ma non è l’obiettivo, e inseguirlo crea solo frustrazione. L’obiettivo è più modesto: accorgerti di ciò che c’è, pensieri compresi, senza giudicarlo e senza seguirlo.' }
        ]
      },
      {
        id: 'presenza-b4', tipo: 'kit', multi: true,
        domanda: 'Dove puoi appoggiare l’attenzione, per un minuto? Spunta ciò che vuoi provare.',
        fonte: F + 'gruppo di Attivazione Corporea: esercizi di osservazione',
        opzioni: [
          { testo: 'I suoni: vicini, lontani, a destra, a sinistra.', tag: 'osserva', spiegazione: 'Ascolta senza dare un nome a ciò che senti: solo da dove viene, quanto è forte, quando finisce. L’udito porta fuori dai pensieri senza chiederti di stare ferma.' },
          { testo: 'Il contatto: i vestiti sulla pelle, i piedi a terra.', tag: 'osserva', spiegazione: 'È sempre disponibile e non si vede da fuori: puoi farlo anche in mezzo agli altri. Nota i punti in cui il corpo è sostenuto: sedia, pavimento, schienale.' },
          { testo: 'Un oggetto da toccare e descrivere.', tag: 'osserva', spiegazione: 'Una penna, una tazza, un sasso: freddo o caldo, liscio o ruvido, leggero o pesante. Descriverlo a mente tiene l’attenzione occupata in qualcosa di concreto.' },
          { testo: 'Qualche passo lento, sentendo i piedi.', tag: 'osserva', spiegazione: 'Utile quando stare ferma agita. Cambia la velocità e nota che cosa cambia nei piedi, nelle gambe, nella schiena.' },
          { testo: 'Un boccone mangiato con tutti i sensi.', tag: 'osserva', spiegazione: 'Guardalo, annusalo, sentine la consistenza prima del sapore. Un minuto così vale più di un pasto intero fatto col pilota automatico.' },
          { testo: 'I pensieri, come foglie su un fiume.', tag: 'osserva', spiegazione: 'È la più difficile: provala quando sei abbastanza calma. Ogni pensiero è una foglia che passa sull’acqua; tu resti sulla riva.' }
        ]
      }
    ],

    /* ---------------- martedì: Emozioni ---------------- */
    emozioni: [
      {
        id: 'emozioni-b1', tipo: 'riconosci', multi: false,
        domanda: 'Senti qualcosa di forte e confuso, tutto insieme. Che cosa fai con quel groviglio?',
        fonte: F + 'gruppo di Attivazione Emotiva: alfabetizzazione emotiva; corpo, pensiero e comportamento',
        get: { vai: 'check', testo: 'Segna emozioni e corpo nel check-in del Diario GET' },
        opzioni: [
          { testo: 'Lo chiamo «sto male» e basta.', tag: 'trattiene', spiegazione: 'Un nome solo copre tutto, come un calderone. Spesso un’emozione molto intensa nasconde le altre: sotto la rabbia può esserci paura, sotto la tristezza delusione. Chiediti: «e sotto, c’è altro?». Trovare nomi più precisi si chiama alfabetizzazione emotiva, e rende ciò che senti più maneggevole.' },
          { testo: 'Faccio di tutto per non sentirlo.', tag: 'evita', spiegazione: 'È la paura delle emozioni: quando arrivano sempre troppo forti, viene naturale tenerle lontane. Il costo è che meno le conosci, più spaventano. Non serve buttarsi dentro: basta un contatto breve, in un momento protetto, e poi tornare a qualcosa di calmo.' },
          { testo: 'Esce tutto insieme, su chi ho davanti.', tag: 'sfoga', spiegazione: 'Quando l’emozione non ha ancora un nome, esce come azione. Non è cattiveria: è un’intensità senza parole. Dare un nome, anche approssimativo, apre un piccolo spazio tra ciò che senti e ciò che fai.' },
          { testo: 'Lo cerco nel corpo: dove lo sento?', tag: 'ascolta', spiegazione: 'È una delle tre vie per riconoscere un’emozione: il corpo, i pensieri, ciò che ti viene da fare. La paura, per esempio: freddo, muscoli tesi, cuore veloce; pensieri su che cosa potrebbe succedere; voglia di allontanarti. Mettere insieme i tre indizi aiuta a darle il nome giusto.' }
        ]
      },
      {
        id: 'emozioni-b2', tipo: 'riconosci', multi: false,
        domanda: 'Hai passato una giornata davvero bella. La sera, che cosa succede dentro?',
        fonte: F + 'fattori di vulnerabilità: le emozioni intense, anche piacevoli',
        opzioni: [
          { testo: 'Arriva la paura: finirà, e dopo starò peggio.', tag: 'evita', spiegazione: 'Succede a molte persone: anche una gioia intensa può accendere la paura di perderla. Non vuol dire che la gioia sia pericolosa: è un’emozione che ne chiama un’altra. Puoi nominarle tutte e due: «sono stata felice, e ho paura che finisca».' },
          { testo: 'Mi trattengo: meglio non essere troppo felice.', tag: 'trattiene', spiegazione: 'Smorzare la gioia protegge dalla caduta, ma toglie anche il nutrimento. Le emozioni piacevoli non vanno pagate dopo: salgono e scendono come le altre. Puoi lasciartene un po’ di più, a piccole dosi.' },
          { testo: 'Ne voglio ancora, subito, e fatico a fermarmi.', tag: 'sfoga', spiegazione: 'Anche le emozioni belle, quando sono intense, alzano l’attivazione e rendono più difficile frenare. Saperlo aiuta: dopo una giornata così il corpo ha bisogno di rallentare, non di aggiungere.' },
          { testo: 'Me la tengo: è stata bella, e mi basta.', tag: 'ascolta', spiegazione: 'Restare dentro un’emozione piacevole senza inseguirla né temerla è un’abilità. Se ti va, cerca dove la senti nel corpo: ricordare quel punto ti aiuterà a riconoscerla la prossima volta.' },
          { testo: 'Quasi non me ne accorgo: scivola via.', tag: 'evita', spiegazione: 'Chi ha sofferto a lungo è allenata a notare il dolore, meno il benessere. Si impara: stasera prova a dire una cosa precisa che è andata bene, e che cosa hai provato in quel momento.' }
        ]
      },
      {
        id: 'emozioni-b3', tipo: 'mito', multi: false,
        domanda: 'Se non sto male, allora sto bene.',
        fonte: F + '«non stare male» e «stare bene»',
        opzioni: [
          { testo: VERO, tag: 'trattiene', spiegazione: 'Sembra logico, e per chi ha sofferto molto «non stare male» è già un traguardo che merita rispetto. Ma stare bene è un’altra esperienza: curiosità, piacere, calma. Si impara a riconoscerla un po’ alla volta, e non averla ancora trovata non è una mancanza tua.' },
          { testo: FALSO, tag: 'ascolta', spiegazione: 'Sì, sono due cose diverse. «Non stare male» è un sollievo, ed è già tanto. «Stare bene» è qualcosa in più, che si scopre col tempo. Chi ti sta vicino a volte le confonde: puoi dirglielo, con parole tue.' },
          { testo: DIPENDE, tag: 'ascolta', spiegazione: 'Ci sono giorni in cui l’assenza di dolore è tutto ciò che si può chiedere, e va bene così. Tenere a mente che esiste anche altro non serve a pretendere di più da te: serve a riconoscerlo quando arriva.' }
        ]
      },
      {
        id: 'emozioni-b4', tipo: 'kit', multi: true,
        domanda: 'Da che cosa ti accorgi che la tensione sta salendo? Spunta i tuoi primi segnali.',
        fonte: F + 'gestione delle crisi: agire ai primi segni di attivazione',
        opzioni: [
          { testo: 'I pensieri cominciano a girare in tondo.', tag: 'ascolta', spiegazione: 'Il rimuginio è spesso il primo segnale, e il più facile da ignorare. Riconoscerlo presto è prezioso: le tecniche funzionano molto meglio quando la tensione è ancora a metà salita.' },
          { testo: 'Il respiro si fa corto, o lo trattengo.', tag: 'ascolta', spiegazione: 'Sotto tensione il respiro si blocca senza che ce ne accorgiamo. Notarlo ti dà subito qualcosa da fare: lasciare uscire l’aria piano, più a lungo di quanto inspiri.' },
          { testo: 'I muscoli si tendono: spalle, mascella, mani.', tag: 'ascolta', spiegazione: 'Il corpo avvisa prima della mente. Se conosci il tuo punto (per molte è la mascella o lo stomaco), puoi controllarlo ogni tanto durante il giorno.' },
          { testo: 'Mi viene voglia di isolarmi o di sparire.', tag: 'evita', spiegazione: 'Anche un impulso è un segnale. Non devi obbedirgli né combatterlo: per ora basta riconoscerlo come un avviso che qualcosa sta salendo.' },
          { testo: 'Tutto mi irrita, anche le cose piccole.', tag: 'sfoga', spiegazione: 'L’irritazione diffusa dice spesso che la soglia si è abbassata: sonno, fame, stanchezza, una giornata troppo piena. Vale la pena chiedersi che cosa c’è sotto.' },
          { testo: 'Non me ne accorgo finché non è già alta.', tag: 'trattiene', spiegazione: 'È molto comune, e si allena. Puoi partire dalla fine: dopo un momento duro, ripensa a un’ora prima. Che cosa c’era nel corpo, nei pensieri? La prossima volta lo riconoscerai un po’ prima.' }
        ]
      }
    ],

    /* ---------------- mercoledì: Mentalizzare ---------------- */
    mentalizzare: [
      {
        id: 'mentalizzare-b1', tipo: 'riconosci', multi: false,
        domanda: 'Entri in una stanza e una persona ha un’espressione strana. In un attimo «sai» che cosa pensa di te. E poi?',
        fonte: F + 'mentalizzazione e ipermentalizzazione',
        get: { vai: 'guida/emozioni', testo: 'Approfondisci nella Guida del Diario GET: «Emozioni e disregolazione»' },
        opzioni: [
          { testo: 'Ne sono sicura: ce l’ha con me.', tag: 'certezza', spiegazione: 'Tante persone molto sensibili colgono davvero segnali minimi sul volto degli altri: è una capacità reale. Il passo in più, cioè attribuire un pensiero preciso senza averne le prove, si chiama ipermentalizzazione. Il segnale che hai visto è vero; il suo significato, per ora, è un’ipotesi.' },
          { testo: 'Le chiedo subito che cos’ha, più volte.', tag: 'agisce', spiegazione: 'Chiedere è la mossa giusta; l’urgenza di chiedere subito e ancora nasce dal bisogno di spegnere il dubbio. Una domanda sola, quando la tensione è scesa un po’, ottiene risposte migliori.' },
          { testo: 'Penso di aver fatto qualcosa di sbagliato.', tag: 'severa', spiegazione: 'La mente cerca la spiegazione più vicina, e la trova in te. Ma quell’espressione può avere cento origini: un pensiero suo, la stanchezza, un mal di testa. Cercane almeno un’altra prima di prenderti la colpa.' },
          { testo: 'Noto l’espressione e tengo aperte più spiegazioni.', tag: 'curiosa', spiegazione: 'È mentalizzare: partire da ciò che si vede e ricordarsi che la mente dell’altro non si legge, si domanda. Tenere aperto il dubbio costa un po’ di fatica, ma evita molta sofferenza costruita su un’ipotesi.' }
        ]
      },
      {
        id: 'mentalizzare-b2', tipo: 'riconosci', multi: false,
        domanda: 'Un’amica ti racconta che sta molto male. Dopo la telefonata, tu come stai?',
        fonte: F + 'gruppo di Attivazione Emotiva: l’«effetto spugna»',
        opzioni: [
          { testo: 'Male come lei: non distinguo più che cosa è mio.', spiegazione: 'È l’«effetto spugna»: il vissuto dell’altra persona prende il posto del tuo. Nasce da una grande sensibilità, ma ti lascia senza un posto tuo. Una domanda aiuta: «che cosa provavo io prima della telefonata, e che cosa provo adesso?».' },
          { testo: 'Devo fare subito qualcosa per sistemarla.', tag: 'agisce', spiegazione: 'L’urgenza di risolvere serve anche a calmare ciò che il suo dolore accende in te. Spesso chi sta male non chiede una soluzione: chiede di essere ascoltata. E tu puoi esserci senza prenderti tutto il peso.' },
          { testo: 'Mi sento in colpa: non l’ho aiutata abbastanza.', tag: 'severa', spiegazione: 'La colpa arriva quando ti dai la responsabilità di come sta lei. Ma il suo dolore non dipende da te, e averla ascoltata è già un aiuto vero. Che cosa diresti a un’amica che si sentisse così?' },
          { testo: 'Mi dispiace per lei, e so che questo dolore è suo.', tag: 'curiosa', spiegazione: 'È il confine che permette di restare vicine senza perdersi: senti con lei, non al posto suo. Distinguere il tuo mondo emotivo da quello degli altri si impara, e protegge entrambe.' }
        ]
      },
      {
        id: 'mentalizzare-b3', tipo: 'mito', multi: false,
        domanda: 'Sono molto sensibile: capisco sempre che cosa provano gli altri.',
        fonte: F + 'il paradosso dell’«empatia borderline»',
        opzioni: [
          { testo: VERO, tag: 'certezza', spiegazione: 'La sensibilità è reale: molte persone con questa storia notano negli altri dettagli che sfuggono a tutti. Ma sotto tensione la stessa antenna capta troppo e riempie i vuoti con le proprie paure. Capire spesso non è capire sempre: la conferma viene solo dall’altro.' },
          { testo: FALSO, tag: 'curiosa', spiegazione: 'Sì: la sensibilità c’è, ed è una risorsa, ma non è infallibile. Quando l’emozione è alta porta a leggere troppo, ad attribuire agli altri pensieri che non hanno. Tenerla insieme a una domanda («ho capito bene?») la rende più affidabile.' },
          { testo: DIPENDE, tag: 'curiosa', spiegazione: 'Dipende soprattutto da quanto sei tesa. Da calma, la tua lettura degli altri può essere molto fine; quando l’allarme sale, la stessa capacità esagera. Per questo conviene rimandare le conclusioni a quando la tensione è scesa.' }
        ]
      },
      {
        id: 'mentalizzare-b4', tipo: 'kit', multi: true,
        domanda: 'Prima di decidere che cosa pensa l’altro, che cosa puoi fare? Spunta ciò che vuoi provare.',
        fonte: F + 'gruppo di Attivazione Emotiva: descrivere senza interpretare; Metodi Attivi: il decentramento',
        opzioni: [
          { testo: 'Descrivo solo ciò che ho visto e sentito.', tag: 'curiosa', spiegazione: '«Aveva le sopracciglia aggrottate e la voce bassa» è una descrizione. «È arrabbiata con me» è un’interpretazione. Separarle è un allenamento: il viso, la voce, la postura, e niente di più.' },
          { testo: 'Mi chiedo prima che cosa provo io.', tag: 'curiosa', spiegazione: 'Spesso ciò che attribuiamo all’altro è colorato da come stiamo noi. Sapere che sei già tesa, stanca o impaurita ti dice quanto fidarti della tua lettura in quel momento.' },
          { testo: 'Cerco almeno un’altra spiegazione possibile.', tag: 'curiosa', spiegazione: 'Non deve essere quella giusta: basta che sia possibile. Due ipotesi invece di una certezza cambiano già l’intensità di ciò che senti.' },
          { testo: 'Aspetto che la tensione scenda, poi ci ripenso.', tag: 'curiosa', spiegazione: 'Con l’allarme alto la mente legge tutto come minaccia. Lo stesso messaggio, riletto un’ora dopo, spesso dice un’altra cosa.' },
          { testo: 'Lo chiedo, con una domanda semplice.', tag: 'curiosa', spiegazione: '«Ti ho vista pensierosa: va tutto bene?» Una volta sola, senza processo. È l’unico modo per sapere davvero.' },
          { testo: 'Provo a raccontare la scena dal suo punto di vista.', tag: 'curiosa', spiegazione: 'Cambiare posto, anche solo con l’immaginazione, mostra che per ogni storia esistono più versioni. Non serve per darle ragione: serve per vedere di più.' }
        ]
      }
    ],

    /* ---------------- giovedì: Relazioni ---------------- */
    relazioni: [
      {
        id: 'relazioni-b1', tipo: 'riconosci', multi: false,
        domanda: 'Ti invitano a una serata con persone che conosci poco. L’idea ti mette in ansia. Che cosa fai?',
        fonte: F + 'evitamento; gruppo di Pianificazione: supporto sociale ed esposizione graduale',
        get: { vai: 'pian', testo: 'Prepara questa situazione nella Pianificazione del Diario GET' },
        opzioni: [
          { testo: 'Dico di sì per non deludere, e poi sto male.', tag: 'cede', spiegazione: 'Il sì detto per paura del giudizio ti lascia sola con l’ansia. Prima di rispondere puoi chiederti che cosa ti serve per andarci (un orario, una persona, una via d’uscita), o se questa volta è meglio un no gentile.' },
          { testo: 'Dico di sì e disdico all’ultimo.', tag: 'chiude', spiegazione: 'Disdire dà un sollievo immediato, ed è per questo che l’evitamento si rinforza: tende ad allargarsi a macchia d’olio, e ogni rinuncia conferma l’idea di non farcela. Non si rompe con la forza: si rompe con gradini più bassi.' },
          { testo: 'Mi irrito con chi insiste.', tag: 'esplode', spiegazione: 'L’irritazione copre spesso la paura: è più facile arrabbiarsi che dire «mi spaventa». Chi insiste di solito non sa che cosa ti costa. Dirglielo in una frase abbassa la tensione per tutte e due.' },
          { testo: 'Chiedo a una persona fidata di venire con me.', tag: 'chiede', spiegazione: 'È una strategia vera: cercare supporto. Funziona ancora meglio se vi accordate prima su che cosa ti aiuta, per esempio un segnale per uscire a prendere aria. L’idea è appoggiarti, non delegare.' },
          { testo: 'Dico che vengo per un’ora, e poi vedo.', tag: 'chiede', spiegazione: 'Hai cambiato la situazione invece di subirla o di evitarla: è esposizione graduale. Un’ora affrontata vale più di una serata intera sopportata, e la prossima volta il gradino sarà più basso.' }
        ]
      },
      {
        id: 'relazioni-b2', tipo: 'riconosci', multi: false,
        domanda: 'Una persona cara ti dice: «Oggi stai bene, vedi?». Tu in realtà sei solo «non male». Come reagisci?',
        fonte: F + 'la distanza tra il vissuto della persona e la lettura dell’ambiente',
        opzioni: [
          { testo: 'Annuisco: non ho voglia di spiegare.', tag: 'cede', spiegazione: 'Spiegare costa, e certe sere non ce n’è. Ma se succede spesso, l’altra persona si fa un’idea di te che non ti somiglia, e tu ti senti più sola. Una frase breve può bastare.' },
          { testo: 'Mi arrabbio: non capisce niente.', tag: 'esplode', spiegazione: 'La rabbia segnala che non ti sei sentita vista, ed è un bisogno legittimo. Chi ti vuole bene legge il tuo stato con il proprio metro: non è disinteresse, è una lingua diversa. Si può tradurre.' },
          { testo: 'Mi chiudo: tanto è inutile.', tag: 'chiude', spiegazione: 'Dopo molte volte in cui non ti sei sentita capita, chiudersi sembra l’unica difesa. Ma il silenzio conferma all’altro la sua lettura. Non serve spiegare tutto: basta correggere una parola.' },
          { testo: 'Le dico la differenza: «Oggi non sto male. Bene è un’altra cosa».', tag: 'chiede', spiegazione: 'È una frase precisa e gentile, che insegna all’altra persona il tuo vocabolario. Chi ti sta vicino spesso confonde le due cose in buona fede: dirglielo è un regalo alla relazione.' }
        ]
      },
      {
        id: 'relazioni-b3', tipo: 'mito', multi: false,
        domanda: 'Se litighiamo, vuol dire che il rapporto è rovinato.',
        fonte: F + 'gruppo di Dinamiche: stare nel conflitto e riparare',
        opzioni: [
          { testo: VERO, tag: 'chiude', spiegazione: 'Quando un conflitto fa molta paura, sembra la fine. Ma nelle relazioni che durano i contrasti ci sono, e ciò che conta è la riparazione: tornare, dire che cosa è successo, ritrovarsi. Si può essere in disaccordo e restare legate.' },
          { testo: FALSO, tag: 'chiede', spiegazione: 'Sì. Un conflitto non è per forza una rottura: può essere attraversato e riparato. Scoprire che dopo un contrasto il legame c’è ancora è una delle esperienze che più cambiano il modo di stare con gli altri.' },
          { testo: DIPENDE, tag: 'chiede', spiegazione: 'Dipende da che cosa succede dopo. Un litigio lasciato lì pesa; uno ripreso con calma («ieri mi sono sentita così») spesso avvicina. La differenza la fa la riparazione, non l’assenza di contrasti.' }
        ]
      },
      {
        id: 'relazioni-b4', tipo: 'kit', multi: true,
        domanda: 'Devi affrontare una conversazione difficile. Come puoi prepararti? Spunta ciò che vuoi provare.',
        fonte: F + 'gruppo di Pianificazione: role-playing, assertività, pro e contro, supporto sociale',
        get: { vai: 'guida/relazioni', testo: 'Approfondisci nella Guida del Diario GET: «Strategie interpersonali»' },
        opzioni: [
          { testo: 'La provo prima, a voce, da sola o con qualcuno.', tag: 'chiede', spiegazione: 'Provare le parole ad alta voce le rende più tue, e mostra dove ti blocchi. Se la provi con qualcuno, chiedigli di fare la parte dell’altra persona.' },
          { testo: 'Mi metto per un minuto al posto dell’altra persona.', tag: 'chiede', spiegazione: 'Che cosa potrebbe provare, che cosa teme, che cosa le serve? Non per darle ragione: per arrivare alla conversazione con una mappa più completa.' },
          { testo: 'Decido la frase che conta: che cosa provo e che cosa chiedo.', tag: 'chiede', spiegazione: 'Essere assertiva vuol dire dire il tuo bisogno senza schiacciare quello dell’altro. Una frase sola, preparata prima, ti tiene sulla strada quando l’emozione sale.' },
          { testo: 'Scelgo il momento: non quando una delle due è molto tesa.', tag: 'chiede', spiegazione: 'Lo stesso discorso, fatto a tensione alta o a tensione bassa, porta a due conversazioni diverse. Scegliere il momento è già una strategia.' },
          { testo: 'Peso i pro e i contro del parlarne adesso.', tag: 'chiede', spiegazione: 'Scrivi due colonne e dai a ogni voce un peso da 1 a 10. Vedere i numeri aiuta a decidere con la testa oltre che con l’urgenza.' },
          { testo: 'Chiedo a qualcuno di starmi vicino, prima o dopo.', tag: 'chiede', spiegazione: 'Sapere che dopo c’è una persona con cui parlarne rende la conversazione meno definitiva. Non deve intervenire: basta che ci sia.' }
        ]
      }
    ],

    /* ---------------- venerdì: Reggere il disagio ---------------- */
    disagio: [
      {
        id: 'disagio-b1', tipo: 'riconosci', multi: false,
        domanda: 'Parte un pensiero, poi un altro, e a ogni giro la tensione sale. A un certo punto vorresti solo spegnere tutto. Che cosa succede, di solito?',
        fonte: F + 'cascata emotiva, rimuginio e funzione regolatoria dei comportamenti',
        get: { vai: 'guida/corpo', testo: 'Approfondisci nella Guida del Diario GET: «Corpo e sistema nervoso»' },
        opzioni: [
          { testo: 'Cerco la scorciatoia che spegne tutto subito.', tag: 'impulso', crisi: true, spiegazione: 'La cascata funziona come un interruttore bloccato su «acceso»: il gesto che spegne attira perché, per un momento, spegne davvero. Non è follia né debolezza: è un corpo che cerca sollievo. Il costo però arriva dopo. Esistono interruttori che costano meno: il respiro lento, qualche passo, un oggetto da stringere tra le mani.' },
          { testo: 'Stringo i denti e aspetto, da sola.', tag: 'resiste', spiegazione: 'Reggere così richiede una forza enorme, e a volte funziona. Ma aspettare ferma lascia la cascata libera di girare. Dare al corpo qualcosa da fare, o a una persona la possibilità di esserci, fa scendere la tensione prima.' },
          { testo: 'Mi muovo un po’, respiro piano, cerco qualcosa da toccare.', tag: 'corpo', spiegazione: 'Agisci sul corpo, ed è la via più diretta: quando l’allarme è alto il sistema nervoso risponde meglio a un segnale fisico che a un ragionamento. Più presto lo fai nella salita, meglio funziona.' },
          { testo: 'Mi accorgo del giro e gli do un nome: «sto rimuginando».', tag: 'accoglie', spiegazione: 'Nominarlo è interrompere la cascata al primo anello. Il rimuginio alza l’emozione e l’emozione alimenta il rimuginio: vederlo mentre accade ti mette, per un momento, fuori dal giro.' }
        ]
      },
      {
        id: 'disagio-b2', tipo: 'riconosci', multi: false,
        domanda: 'C’è stato un momento duro e, stavolta, non è andata come le altre volte. Come lo guardi, adesso?',
        fonte: F + 'gruppo focalizzato sulla Crisi: la «crisi sventata»',
        get: { vai: 'crisi', testo: 'Annotala come crisi sventata nella Scheda Crisi del Diario GET' },
        opzioni: [
          { testo: 'È stato un caso: non conta.', spiegazione: 'Nel modello GET ha un nome preciso: crisi sventata. Non è un caso: hai usato delle abilità, magari senza accorgertene. Proprio per questo vale la pena guardarla da vicino: ciò che ha funzionato una volta si può ritrovare.' },
          { testo: 'Ho ancora paura: l’urgenza c’era tutta.', tag: 'impulso', spiegazione: 'Sventare una crisi non vuol dire non sentire la spinta: vuol dire averla sentita e non averle obbedito. La paura della prossima volta è comprensibile. Adesso però sai una cosa nuova: l’urgenza, anche fortissima, è passata.' },
          { testo: 'So che cosa mi ha aiutata: il corpo, il respiro, una persona.', tag: 'corpo', spiegazione: 'Saperlo è prezioso: quella è una strategia tua, provata sul campo. Scrivila dove la ritrovi facilmente, perché a tensione alta la memoria non aiuta.' },
          { testo: 'Sono curiosa: che cosa ho fatto di diverso?', tag: 'accoglie', spiegazione: 'È la domanda giusta. Ripercorri la scena: che cosa è successo, che cosa hai pensato, e in quale punto hai preso un’altra strada. Di solito c’è un momento preciso, e trovarlo lo rende ripetibile.' }
        ]
      },
      {
        id: 'disagio-b3', tipo: 'mito', multi: false,
        domanda: 'I gesti impulsivi che poi fanno stare peggio non hanno nessun senso.',
        fonte: F + 'la funzione dei comportamenti critici: sollievo immediato e costi successivi',
        opzioni: [
          { testo: VERO, tag: 'resiste', spiegazione: 'Visti da fuori, o il giorno dopo, sembrano assurdi. Ma in quel momento rispondono a un bisogno reale: far scendere una tensione insopportabile. Giudicarli «senza senso» chiude la porta; chiedersi «a che cosa mi serviva?» la apre, e permette di cercare un’altra strada per lo stesso bisogno.' },
          { testo: FALSO, tag: 'accoglie', spiegazione: 'Sì: hanno una funzione. Danno un sollievo breve e presentano il conto dopo. Riconoscerne il senso non vuol dire approvarli: vuol dire capire quale bisogno c’era sotto (calma, vicinanza, tregua) e cercare un modo meno costoso di rispondergli.' },
          { testo: DIPENDE, tag: 'accoglie', spiegazione: 'Hanno senso nel momento, e non ne hanno più guardando ciò che costano dopo: tutte e due le cose sono vere. Tenerle insieme, senza condannarti, è il punto di partenza per trovare alternative.' }
        ]
      },
      {
        id: 'disagio-b4', tipo: 'kit', multi: true,
        domanda: 'Ripensa a una sera dura. Nelle 24-36 ore prima, che cosa c’era? Spunta ciò che riconosci.',
        fonte: F + 'gruppo focalizzato sulla Crisi: i fattori di vulnerabilità',
        get: { vai: 'guida/crisi', testo: 'Approfondisci nella Guida del Diario GET: «Capire la crisi»' },
        opzioni: [
          { testo: 'Avevo dormito poco o male.', tag: 'corpo', spiegazione: 'Il sonno è tra i fattori che pesano di più: dopo una notte corta le emozioni arrivano più forti e frenarle è più difficile. Non causa la crisi, ma abbassa la soglia.' },
          { testo: 'Avevo saltato dei pasti o mangiato in modo irregolare.', tag: 'corpo', spiegazione: 'Un corpo a corto di energia reagisce di più e interpreta peggio. Tre pasti a orari simili sono una protezione più concreta di quanto sembri.' },
          { testo: 'Non stavo bene fisicamente: un dolore, la febbre, il ciclo.', tag: 'corpo', spiegazione: 'Il malessere fisico consuma le stesse risorse che servono a regolare le emozioni. In quei giorni conviene chiedersi meno e proteggersi di più.' },
          { testo: 'Avevo un evento stressante davanti o appena passato.', tag: 'accoglie', spiegazione: 'Un esame, una visita, un appuntamento saltato: anche ciò che deve ancora succedere tiene alta la tensione di fondo. Sono i momenti giusti per preparare un piano.' },
          { testo: 'Una giornata troppo piena, o una discussione.', tag: 'accoglie', spiegazione: 'Sono cose in cui hai avuto una parte attiva, e per questo si possono cambiare: lasciare uno spazio tra un impegno e l’altro, rimandare una discussione a un momento più calmo.' },
          { testo: 'Un’emozione intensa che durava da ore, anche bella.', tag: 'accoglie', spiegazione: 'Un’emozione che resta alta a lungo, perfino la gioia, rende più sensibili a ciò che arriva dopo. Saperlo aiuta a rallentare prima di sera.' },
          { testo: 'Non lo so: non ci avevo mai pensato.', tag: 'accoglie', spiegazione: 'È normale: questi fattori sembrano lontani dalla crisi, e proprio per questo sfuggono. Da qui in poi puoi farci caso: spesso «la goccia» trabocca perché il vaso era già pieno.' }
        ]
      }
    ],

    /* ---------------- sabato: Valore di sé ---------------- */
    valore: [
      {
        id: 'valore-b1', tipo: 'riconosci', multi: false,
        domanda: 'Qualcuno dà di te un giudizio diverso da quello che pensi tu. A chi credi?',
        fonte: F + 'Fase 2: dare credito al proprio mondo interno',
        opzioni: [
          { testo: 'A lui: gli altri vedono meglio di me.', tag: 'sminuisce', spiegazione: 'È una convinzione antica e molto diffusa: che l’unica verità sia nelle mani degli altri. Nel percorso si impara, un po’ alla volta, a dare valore anche a ciò che pensi e senti tu. Il suo sguardo è un’informazione; il tuo conta altrettanto.' },
          { testo: 'Se è una critica ci credo subito; se è un complimento, no.', tag: 'critica', spiegazione: 'Il giudizio interno fa da filtro: lascia passare solo ciò che gli somiglia. Accorgersene è già molto. Prova a trattare il complimento come tratteresti la critica: come un’ipotesi da considerare.' },
          { testo: 'Mi adeguo e tengo per me quello che penso.', tag: 'nasconde', spiegazione: 'Adattarsi a ciò che gli altri si aspettano protegge dal rifiuto, ma allontana da te. Non serve contraddire: puoi cominciare tenendo la tua versione chiara dentro di te, anche senza dirla.' },
          { testo: 'Lo ascolto, e tengo anche la mia versione.', tag: 'valida', spiegazione: 'Due punti di vista possono stare insieme senza che uno cancelli l’altro. È il segno di un’identità che si sta facendo più solida: puoi ascoltare senza perderti.' }
        ]
      },
      {
        id: 'valore-b2', tipo: 'riconosci', multi: false,
        domanda: 'Pensa ai ruoli che hai: figlia, amica, collega, paziente… Quale senti più vicino, adesso?',
        fonte: F + 'gruppo di Metodi Attivi: i ruoli intorno a «IO»; il processo di individuazione',
        opzioni: [
          { testo: 'Soprattutto «quella che sta male».', tag: 'sminuisce', spiegazione: 'Quando la sofferenza occupa tanto spazio, quel ruolo copre tutti gli altri. È uno dei tuoi ruoli, non il centro. Prova a disegnare «IO» in mezzo a un foglio e a scrivere intorno gli altri: più vicini quelli che senti tuoi, più lontani gli altri.' },
          { testo: 'Quello che gli altri si aspettano da me.', tag: 'nasconde', spiegazione: 'Alcuni ruoli li scegliamo, altri ci vengono messi addosso. Distinguere quelli che senti tuoi da quelli che porti per gli altri è un passo verso un’identità più tua. Non serve toglierli: basta sapere quali sono.' },
          { testo: 'Nessuno: non so bene chi sono.', spiegazione: 'È un punto di partenza onesto, non un difetto. L’identità non si trova già fatta: si costruisce, e il percorso serve anche a rimettere in moto questa costruzione. Puoi partire da una cosa piccola e certa: qualcosa che ti piace, o che non ti piace.' },
          { testo: 'Ce n’è almeno uno che sento davvero mio.', tag: 'valida', spiegazione: 'Tienilo vicino: è una radice. Da un ruolo sentito come proprio si capisce che cosa conta per te, e gli altri si possono ordinare intorno, un po’ alla volta.' }
        ]
      },
      {
        id: 'valore-b3', tipo: 'mito', multi: false,
        domanda: 'O sono forte o sono fragile: tutte e due insieme non si può.',
        fonte: F + 'gruppo di Metodi Attivi: i «poli opposti»',
        opzioni: [
          { testo: VERO, tag: 'critica', spiegazione: 'La mente sotto pressione divide in due: tutto o niente. Ma tra i due estremi c’è una linea lunga, e quasi nessuno sta alle punte. Puoi essere fragile in una cosa e forte in un’altra, lo stesso giorno. Dove ti metteresti, oggi, lungo quella linea?' },
          { testo: FALSO, tag: 'valida', spiegazione: 'Sì: stanno insieme. Chi attraversa ogni giorno emozioni molto intense ha bisogno di più forza, non di meno. Vedersi lungo una linea, e non a uno dei due capi, è un modo più vero di guardarsi.' },
          { testo: DIPENDE, tag: 'valida', spiegazione: 'Dipende dal momento, ed è proprio questo il punto: non è una caratteristica fissa. Ci si sposta lungo la linea, e come ti vedi tu non sempre coincide con come ti vedono gli altri. A volte loro notano una forza che tu non conti.' }
        ]
      },
      {
        id: 'valore-b4', tipo: 'kit', multi: true,
        domanda: 'Guardando gli ultimi mesi, che cosa è cambiato, anche di poco? Spunta ciò che riconosci.',
        fonte: F + 'i segni del cambiamento lungo il percorso',
        get: { vai: 'guida/recovery', testo: 'Approfondisci nella Guida del Diario GET: «La recovery è un viaggio»' },
        opzioni: [
          { testo: 'Riconosco un po’ prima quando la tensione sale.', tag: 'valida', spiegazione: 'È uno dei cambiamenti più importanti: accorgersene prima vuol dire avere più tempo e più scelte.' },
          { testo: 'Qualche volta ho attraversato un momento duro senza peggiorarlo.', tag: 'valida', spiegazione: 'Ogni volta è una prova concreta che un’altra strada esiste. Contano anche se sono poche.' },
          { testo: 'Mi giudico un po’ meno, o me ne accorgo quando lo faccio.', tag: 'valida', spiegazione: 'Non serve che il giudizio sparisca: accorgersi del momento in cui entra cambia già il suo effetto. E chi si giudica meno, teme meno il giudizio degli altri.' },
          { testo: 'Evito un po’ meno: qualche cosa in più la affronto.', tag: 'valida', spiegazione: 'Ogni cosa affrontata allarga un po’ lo spazio in cui ti muovi, e lascia posto a un po’ di curiosità verso il mondo.' },
          { testo: 'Trovo più parole per dire che cosa provo.', tag: 'valida', spiegazione: 'Un vocabolario più ricco rende le emozioni più distinguibili, e quindi più gestibili. È un cambiamento silenzioso ma profondo.' },
          { testo: 'Per ora non vedo cambiamenti, e va bene dirlo.', tag: 'sminuisce', spiegazione: 'Da dentro i cambiamenti si vedono poco: sono lenti, e la memoria tiene meglio i giorni duri. Chi ti accompagna, o il tuo diario, a volte vede ciò che a te sfugge. Chiedere «tu noti qualcosa?» è un modo per scoprirlo.' }
        ]
      }
    ]
  };
})();
