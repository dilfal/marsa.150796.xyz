/* Approdo – il filo del giorno: per ogni tema della sera (contenuti.js) un’abilità da portare nella mattina
   e una domanda a scelta multipla per il pomeriggio, con un feedback immediato per ogni risposta.
   Basi nelle fonti: DBT (Linehan: una cosa alla volta, mindfulness delle emozioni correnti, validazione,
   pro e contro, dai valori ai passi concreti, cavalcare l’onda, modello biosociale, mente saggia); MBT (Bateman e
   Fonagy: equivalenza psichica, modalità teleologica, ipermentalizzazione e modalità del fare finta, posizione di
   non sapere, strategie di attaccamento iperattivanti e disattivanti); attaccamento (Bowlby: base sicura,
   esplorazione, modelli operanti); Gunderson e Hoffman (sensibilità alle separazioni, instabilità dell’immagine di
   sé); consapevolezza delle attività di routine e ruminazione (Williams, Teasdale, Segal, Kabat-Zinn); ricerca di
   supporto sociale (modello GET). Non è ripresa la parte TIP con acqua gelida, apnea o sforzo intenso.
   Testi originali in italiano, parafrasati: nessun passo è copiato.
   Le risposte si salvano per POSIZIONE (indice delle opzioni): dopo la pubblicazione non riordinare
   e non inserire voci in mezzo, aggiungi solo in fondo. `crisi: true` → l’app apre la finestra con le tecniche e il piano personale. */
window.Approdo = window.Approdo || {};
window.Approdo.Filo = {
  /* ---------------- domenica: Base sicura ---------------- */
  base: {
    mattina: {
      abilita: 'Partire dalla base, e sapere dove tornare',
      tecnico: 'Per Bowlby attaccamento ed esplorazione lavorano in coppia: quando la figura di riferimento è disponibile (la «base sicura»), il sistema di attaccamento, cioè l’allarme che cerca vicinanza quando ci si sente in pericolo, si quieta e lascia spazio alla curiosità. Da adulti la base può diventare anche interna: un modello operante, cioè un’immagine stabile di sé e di chi ci sostiene, che resta attiva quando la persona non c’è.',
      spiegato: 'Ci si allontana più volentieri quando si sa dove tornare. Una cosa nuova o un po’ difficile pesa meno se, prima di cominciare, hai già deciso a chi o a che cosa tornerai dopo. Non è dipendenza: è il modo in cui funziona l’attaccamento in tutte le persone, a ogni età.',
      pratica: 'Scegli una piccola esplorazione di oggi: una telefonata, una strada nuova, una domanda. Prima di farla decidi il tuo «ritorno», cioè il punto in cui l’allarme potrà quietarsi: a chi scriverai due righe, o in quale posto ti fermerai cinque minuti. Poi torna davvero, anche se è andata bene.',
      fonte: 'Bowlby (1989), Una base sicura · base sicura, esplorazione e modelli operanti'
    },
    pomeriggio: {
      tipo: 'riconosci',
      domanda: 'La persona che ti segue nel percorso è via per qualche giorno. A metà giornata ci pensi e senti un tuffo nello stomaco. Che cosa succede dentro di te?',
      opzioni: [
        { testo: 'Mi sembra di essere stata lasciata, come se non tornasse più.', spiegazione: 'Quando la sensibilità alle separazioni è alta (cioè la distanza da una persona importante scuote l’umore e il senso di sé più del dovuto), anche un’assenza prevista può accendere la paura dell’abbandono. In termini di attaccamento è una strategia iperattivante: il sistema si accende al massimo per ritrovare la vicinanza, come se la distanza fosse una perdita. È una reazione appresa, e ha senso. I fatti, però, dicono altro: una pausa con una data di ritorno.', passo: 'Scrivi la data in cui tornerà e una cosa che vorresti raccontarle.', fonte: 'Gunderson e Hoffman (2010), Disturbo di personalità borderline · sensibilità alla separazione; Bateman e Fonagy (2016), Mentalization-Based Treatment for Personality Disorders · iperattivazione del sistema di attaccamento' },
        { testo: 'Faccio finta che non mi importi: tanto devo cavarmela da sola.', spiegazione: 'Spegnere il bisogno è ciò che la MBT chiama strategia di attaccamento disattivante: si minimizza il bisogno di vicinanza per non rischiare la delusione, e molte persone la imparano quando la vicinanza è stata incerta. Protegge, ma lascia sole con il peso. Notare che un po’ ti importa non ti rende debole.', passo: 'Di’ a te stessa, anche solo a mente: «mi manca, ed è normale».', fonte: 'Bateman e Fonagy (2016), Mentalization-Based Treatment for Personality Disorders · strategie di attaccamento disattivanti (deactivating)' },
        { testo: 'Mi ricordo che tornerà e uso ciò che abbiamo costruito insieme.', spiegazione: 'È la base interiorizzata: il legame continua dentro di te anche quando l’altra persona non c’è. Bowlby la descrive con i modelli operanti, cioè le rappresentazioni di sé e dell’altro costruite con l’esperienza, che guidano ciò che ci aspettiamo nelle relazioni. Se oggi ti riesce, riconoscitelo; se ti riesce a tratti, è normale: i modelli si rivedono e si rinforzano con nuove esperienze.', fonte: 'Bowlby (1989), Una base sicura · modelli operanti di sé e della figura di attaccamento' },
        { testo: 'Cerco un altro appoggio per questi giorni: il gruppo, un’amica, le mie abitudini.', spiegazione: 'Avere più basi, non una sola, è proprio ciò che protegge nei momenti di distanza: Bowlby osserva che, in assenza della figura principale, ci si rivolge ad altre figure conosciute, con una gerarchia di preferenze. In termini di regolazione emotiva si parla di ricerca di supporto sociale: individuare persone vicine di cui ti fidi. Non è un tradimento verso chi è via: è usare la rete che hai.', passo: 'Scegli adesso un appoggio per stasera e uno per domani.', fonte: 'Bowlby (1989), Una base sicura · figure di attaccamento alternative; Visintini (a cura di, 2024), Il modello GET per la personalità borderline · ricerca di supporto sociale' }
      ]
    }
  },

  /* ---------------- lunedì: Presenza ---------------- */
  presenza: {
    mattina: {
      abilita: 'Una cosa alla volta',
      tecnico: 'Nella DBT è la mindfulness «una cosa alla volta» (one-mindfully), una delle abilità del «come» insieme al non giudicare e all’efficacia: portare tutta l’attenzione su un’unica attività, notando la spinta a essere altrove, e tornarci ogni volta. Vale anche per le preoccupazioni: se ti preoccupi, fai solo quello, in un tempo stabilito (è la logica del «momento delle preoccupazioni» di Borkovec, che Linehan richiama).',
      spiegato: 'Fare tre cose insieme sembra più veloce, ma non lo è: le ricerche citate da Linehan mostrano che il multitasking fa perdere tempo, e l’attenzione resta dispersa. Quando sta tutta su un gesto, anche semplice, il corpo rallenta un poco. Se la mente scappa la riporti, tante volte quante serve, senza rimproveri: il riportarla è l’allenamento.',
      pratica: 'Scegli un gesto di routine di oggi: lavarti i denti, bere il caffè, lavare una tazza. Per un minuto fai solo quello, a occhi aperti: temperatura, suono, movimento delle mani. È la consapevolezza delle attività di routine, cioè dare presenza ai gesti automatici. Se arriva un pensiero, ditti «dopo» e torna al gesto.',
      fonte: 'Linehan (2015), DBT Skills Training Manual · Mindfulness, abilità del «come» (una cosa alla volta); Williams, Teasdale, Segal e Kabat-Zinn (2010), Ritrovare la serenità · consapevolezza delle attività di routine'
    },
    pomeriggio: {
      tipo: 'riconosci',
      domanda: 'Metà pomeriggio. Stai rispondendo a un messaggio, intanto pensi alla spesa e a una discussione di ieri. Il telefono vibra di nuovo. Che cosa fai?',
      opzioni: [
        { testo: 'Faccio tutto insieme, così finisco prima.', spiegazione: 'È la scelta più comune, e a volte serve. Ma il multitasking è in realtà un saltare veloce da una cosa all’altra, e la ricerca citata da Linehan indica che non fa risparmiare tempo. Con l’attenzione sempre divisa la mente fatica a spegnersi, e la sera può farsi sentire.', passo: 'Finisci il messaggio che hai davanti, poi scegli la cosa successiva.', fonte: 'Linehan (2015), DBT Skills Training Manual · Mindfulness, una cosa alla volta (il multitasking è inefficiente)' },
        { testo: 'Mi blocco: sono troppe cose e non ne comincio nessuna.', spiegazione: 'Quando le richieste si sommano, il carico supera ciò che l’attenzione riesce a tenere insieme e ci si ferma: è sovraccarico, non pigrizia. Una cosa alla volta serve proprio qui. Non devi risolvere tutta la lista, solo scegliere la prossima voce.', passo: 'Scrivi le tre cose in fila, su un foglio o sul telefono, e fai solo la prima.', fonte: 'Linehan (2015), DBT Skills Training Manual · Mindfulness, una cosa alla volta' },
        { testo: 'Mi rimprovero perché sono sempre distratta.', spiegazione: 'Al pensiero si aggiunge il giudizio, e il peso raddoppia. Nella DBT non giudicare è un’abilità vera del «come» della mindfulness: si descrive (i fatti, ciò che noti) invece di condannare. La distrazione è un’abitudine dell’attenzione, non un difetto di carattere, e le abitudini si allenano.', passo: 'Cambia il rimprovero in descrizione: «adesso ho tre cose in testa».', fonte: 'Linehan (2015), DBT Skills Training Manual · Mindfulness, abilità del «come» (non giudicare)' },
        { testo: 'Lascio il telefono, finisco il messaggio e poi guardo il resto.', spiegazione: 'È l’abilità di stamattina in azione: una cosa con tutta l’attenzione, le altre in fila. Le cose non spariscono, aspettano il loro turno. Se ti è venuto naturale, riconoscitelo; se ti è costato fatica, conta ancora di più, perché hai notato la spinta a fare altro e sei tornata.', fonte: 'Linehan (2015), DBT Skills Training Manual · Mindfulness, una cosa alla volta' }
      ]
    }
  },

  /* ---------------- martedì: Emozioni ---------------- */
  emozioni: {
    mattina: {
      abilita: 'Osservare l’emozione del momento',
      tecnico: 'La DBT la chiama mindfulness delle emozioni correnti: osservare l’emozione come un’onda che va e viene, senza bloccarla o sopprimerla, senza spingerla via, senza trattenerla e senza amplificarla. Si nota dove si sente nel corpo (le sensazioni) e quanto ci mette a calare, ricordando che tu non sei la tua emozione. Riduce la sofferenza in più che nasce dal combattere ciò che si prova.',
      spiegato: 'Un’emozione lasciata stare sale, arriva in cima e poi scende, come un’onda. Quando la scacci o ci rimugini sopra (la ruminazione: rigirare i pensieri sul perché stai male), invece, si riaccende e dura di più. Guardarla per qualche respiro, con curiosità, la rende più piccola.',
      pratica: 'Oggi, prima di ogni pasto, fermati trenta secondi a occhi aperti. Chiediti: che emozione c’è? Dove la sento nel corpo? Quanto è forte: poca, media o tanta? Non cambiare niente: nota, e torna a ciò che stai facendo. È un allenamento a osservare invece di reagire.',
      fonte: 'Linehan (2015), DBT Skills Training Manual · Regolazione emotiva, mindfulness delle emozioni correnti'
    },
    pomeriggio: {
      tipo: 'mito',
      domanda: 'Se un’emozione è molto forte, non passerà più.',
      opzioni: [
        { testo: 'È vero', spiegazione: 'Si capisce perché lo pensi: quando un’emozione è in cima, sembra senza fine. Il modello biosociale di Linehan descrive la vulnerabilità emotiva, cioè una sensibilità alta, reazioni intense e un ritorno lento alla calma: per alcune persone le emozioni durano davvero di più. Ma «più a lungo» non vuol dire «per sempre»: anche le onde più alte scendono.', passo: 'Guarda l’ora e, fra venti minuti, chiediti com’è l’emozione: più bassa, uguale o più alta?', fonte: 'Linehan (1993), Cognitive-Behavioral Treatment of Borderline Personality Disorder · modello biosociale, vulnerabilità emotiva' },
        { testo: 'È falso', spiegazione: 'Sì: ogni emozione, lasciata a sé, sale, raggiunge un picco e poi cala. A tenerla in vita sono spesso i pensieri che la riaccendono (la ruminazione) o lo sforzo di scacciarla, che a sua volta la rinforza. Saperlo non toglie il dolore, ma aiuta ad aspettare senza agire d’impulso.', fonte: 'Linehan (2015), DBT Skills Training Manual · Regolazione emotiva, mindfulness delle emozioni correnti; Williams, Teasdale, Segal e Kabat-Zinn (2010), Ritrovare la serenità · ruminazione' },
        { testo: 'Dipende da che cosa faccio mentre la sento', spiegazione: 'Esatto, ed è una buona notizia. Rimuginare o soffocare l’emozione la riaccende; osservarla e descriverla, e prendersi cura del corpo (sonno, cibo, movimento dolce), la aiutano a scendere. Non scegli ciò che senti, ma hai un po’ di margine su come attraversarlo.', fonte: 'Linehan (2015), DBT Skills Training Manual · Regolazione emotiva (osservare e descrivere le emozioni; prendersi cura del corpo)' },
        { testo: 'Per me alcune emozioni sembrano non passare mai', spiegazione: 'Ha senso che tu lo senta così: quando un’emozione torna spesso, sembra la stessa da giorni. Spesso però sono onde nuove, riaccese da un pensiero o da un ricordo (uno stimolo che la riattiva). Accorgerti di quando ricomincia è già un passo. E un’emozione che pesa a lungo puoi portarla al gruppo o in terapia: non devi reggerla da sola.', passo: 'Quando torna, chiediti: «che cosa l’ha riaccesa, adesso?».', fonte: 'Linehan (2015), DBT Skills Training Manual · Regolazione emotiva, mindfulness delle emozioni correnti' }
      ]
    }
  },

  /* ---------------- mercoledì: Mentalizzare ---------------- */
  mentalizzare: {
    mattina: {
      abilita: 'Accorgersi della certezza che arriva troppo in fretta',
      tecnico: 'In MBT si chiama equivalenza psichica: con l’emozione alta, ciò che penso o sento viene vissuto come un fatto («troppo reale»). «Mi sento rifiutata» diventa «mi ha rifiutata», senza spazio per altre letture. Accorgersene rimette in moto la mentalizzazione, cioè la capacità di leggere i comportamenti, miei e altrui, come espressione di stati mentali (pensieri, emozioni, intenzioni) che sono ipotesi, non fatti.',
      spiegato: 'Il segnale è la sensazione di sapere con certezza che cosa pensa o vuole l’altra persona. Non è un tuo difetto: succede a tutti quando l’emozione sale. Chiamarla per nome, «è una certezza della mia mente», apre un piccolo spiraglio di dubbio. E il dubbio protegge.',
      pratica: 'Oggi, quando ti sorprendi a pensare «è chiaro che…» o «lo so che…» su un’altra persona, fermati. Chiediti quanto sei sicura (poco, abbastanza, del tutto) e quanto è forte l’emozione. Poi riscrivi la frase, a mente, cominciando con «mi sembra che…».',
      fonte: 'Bateman e Fonagy (2016), Mentalization-Based Treatment for Personality Disorders · equivalenza psichica; Porr (2017), Superare il disturbo borderline di personalità · equivalenza psichica'
    },
    pomeriggio: {
      tipo: 'riconosci',
      domanda: 'Una collega passa nel corridoio e non ti saluta. Stamattina vi eravate scritte come sempre. Qual è la prima cosa che ti succede?',
      opzioni: [
        { testo: 'È chiaro: ce l’ha con me.', spiegazione: 'È l’equivalenza psichica di stamattina: il pensiero arriva con la forza di un fatto. Succede soprattutto quando si è già tese o stanche, perché sotto stress la mentalizzazione si fa più rigida e automatica. Non devi scacciarlo: basta riconoscerlo come un’ipotesi. Le alternative ci sono, anche se in quel momento non si vedono.', passo: 'Aggiungi due ipotesi neutre: «era di fretta», «era sovrappensiero».', fonte: 'Bateman e Fonagy (2016), Mentalization-Based Treatment for Personality Disorders · equivalenza psichica' },
        { testo: 'Devo scriverle subito per sapere se è arrabbiata.', spiegazione: 'Il bisogno di una prova concreta e immediata, in MBT, è la modalità teleologica (in italiano anche «pensiero teleologico»): gli stati d’animo contano solo se hanno un effetto visibile, una risposta, un gesto, e le intenzioni da sole non bastano. Il sollievo dura poco e spesso serve un’altra prova. Darsi un po’ di tempo riapre lo spazio per pensare.', passo: 'Aspetta un’ora. Poi, se vuoi chiedere, chiedi con curiosità: «tutto bene?».', fonte: 'Bateman e Fonagy (2016), Mentalization-Based Treatment for Personality Disorders · modalità teleologica; Porr (2017), Superare il disturbo borderline di personalità · pensiero teleologico' },
        { testo: 'Ci ragiono a lungo e costruisco una teoria complicata sul perché.', spiegazione: 'Pensare tanto alle menti sembra mentalizzare, ma a volte è il contrario. In MBT si parla di ipermentalizzazione: ragionamenti lunghi e sicuri sugli stati mentali, ma senza un vero legame con ciò che si prova e con i fatti. Appartiene alla modalità del fare finta (pensieri e sentimenti staccati dalla realtà). Il segnale è che più ci pensi, più ti allontani da te.', passo: 'Torna a due domande semplici: che cosa ho visto davvero? Che cosa sento io, adesso?', fonte: 'Bateman e Fonagy (2016), Mentalization-Based Treatment for Personality Disorders · ipermentalizzazione e pretend mode; Porr (2017), Superare il disturbo borderline di personalità · modalità del fare finta' },
        { testo: 'Mi dico: forse era sovrappensiero. Non lo so, magari glielo chiederò.', spiegazione: 'Questo è mentalizzare: tenere aperte più ipotesi e accettare di non sapere. La MBT chiama questo atteggiamento posizione di «non sapere» (not-knowing stance): la mente dell’altra persona è opaca, e la curiosità vale più della certezza. Se ti è venuto spontaneo, riconoscitelo.', fonte: 'Bateman e Fonagy (2016), Mentalization-Based Treatment for Personality Disorders · posizione di non sapere (not-knowing stance)' }
      ]
    }
  },

  /* ---------------- giovedì: Relazioni ---------------- */
  relazioni: {
    mattina: {
      abilita: 'Validare l’altra persona',
      tecnico: 'Validare (la V di GIVE, l’abilità DBT per curare la relazione: essere Gentili, mostrare Interesse, Validare, usare un tono Easy, cioè leggero) vuol dire trovare il nucleo di verità in ciò che l’altra persona prova e dirle che ha senso, date le sue ragioni e la situazione. Non vuol dire essere d’accordo né approvare. Ha più livelli: ascoltare davvero, rimandare ciò che hai capito, cogliere il non detto, dire «ha senso che…».',
      spiegato: 'Quando qualcuno ti racconta una difficoltà, viene voglia di rassicurare o di dare subito un consiglio. Spesso però l’altra persona ha bisogno prima di sentirsi capita. Validare abbassa la tensione da tutte e due le parti (meno bisogno di avere ragione, meno reattività) e rende più facile, dopo, anche risolvere il problema.',
      pratica: 'In una conversazione di oggi, a pranzo o al telefono, prima di dare un consiglio o la tua opinione rimanda ciò che hai capito: «Quindi sei preoccupata per…, giusto?». Basta una volta. Poi nota come cambia la conversazione.',
      fonte: 'Linehan (2015), DBT Skills Training Manual · Efficacia interpersonale, GIVE e validazione; Porr (2017), Superare il disturbo borderline di personalità · validazione'
    },
    pomeriggio: {
      tipo: 'riconosci',
      domanda: 'Un’amica ti scrive all’ora di pranzo: domani ha un colloquio di lavoro ed è agitatissima. Che cosa ti viene da risponderle?',
      opzioni: [
        { testo: '«Dai, andrà benissimo, non c’è niente di cui preoccuparsi.»', spiegazione: 'È una risposta affettuosa, e l’intenzione è buona: vuoi toglierle la paura. Ma una rassicurazione troppo rapida può farle sentire che la sua ansia è esagerata, il contrario di ciò che vuoi. È un’invalidazione involontaria: dire, senza volerlo, che ciò che prova non è adeguato. Prima riconosci l’emozione, poi rassicura.', passo: 'Aggiungi una frase prima: «Ci credo che sei agitata».', fonte: 'Linehan (2015), DBT Skills Training Manual · Efficacia interpersonale, validazione e invalidazione' },
        { testo: '«Ti mando tre consigli per prepararti.»', spiegazione: 'Aiutare a risolvere è prezioso, e a volte è proprio ciò che serve: se è richiesto, è anch’esso un modo di validare. Se non lo sai, puoi chiederlo. Nella DBT si invita a essere prudenti con i consigli non richiesti: prima ascoltare, poi offrire.', passo: 'Chiedile: «Ti vanno due idee, o hai bisogno di sfogarti?».', fonte: 'Linehan (2015), DBT Skills Training Manual · Efficacia interpersonale, validazione (aiutare a risolvere, a meno che voglia solo essere ascoltata)' },
        { testo: '«Ci credo che sei agitata: ci tieni tanto, ha senso.»', spiegazione: 'È validazione piena: riconosci l’emozione e ne mostri il senso, date le circostanze. Non le prometti che andrà bene: le dici che ciò che sente è comprensibile. Spesso è proprio questo a far scendere l’ansia. Se ti è venuto naturale, è una risorsa tua.', fonte: 'Linehan (2015), DBT Skills Training Manual · Efficacia interpersonale, validazione' },
        { testo: '«Anche io prima dei colloqui sto malissimo, una volta…»', spiegazione: 'Raccontare un’esperienza simile crea vicinanza e le mostra che non è sola: è un modo di stare alla pari (nella validazione è il livello dell’uguaglianza: né sopra né sotto l’altra). Il rischio è che la conversazione scivoli su di te e lei resti con la sua agitazione. Funziona meglio dopo averla validata, e in breve.', passo: 'Prima una frase su di lei, poi, se serve, una breve su di te.', fonte: 'Linehan (2015), DBT Skills Training Manual · Efficacia interpersonale, validazione (uguaglianza)' }
      ]
    }
  },

  /* ---------------- venerdì: Reggere il disagio ---------------- */
  disagio: {
    mattina: {
      abilita: 'Pro e contro, preparati a mente calma',
      tecnico: 'Pro e contro è un’abilità DBT di tolleranza del disagio per superare le crisi senza peggiorarle. In quattro caselle si confrontano vantaggi e svantaggi del cedere a un impulso e del resistergli, nel breve e nel lungo periodo. Va preparata prima, a mente lucida (la mente saggia, che integra ragione ed emozione): nel momento dell’impulso, in mente emotiva, conta quasi solo il sollievo immediato.',
      spiegato: 'Quando un impulso è forte, la mente vede solo il sollievo dei prossimi minuti. Una lista scritta con calma ti ricorda anche il dopo: come starai stasera, domani, la settimana prossima. È come lasciarti un biglietto scritto da te, quando vedevi più chiaro.',
      pratica: 'Stamattina scegli un impulso che ti capita spesso: scrivere di getto, chiuderti in casa, spendere troppo. Scrivi due pro e due contro del cedere e del resistere, sul telefono o su un biglietto. Tienilo con te e rileggilo appena senti salire la spinta.',
      fonte: 'Linehan (2015), DBT Skills Training Manual · Tolleranza del disagio, pro e contro; Visintini (a cura di, 2024), Il modello GET per la personalità borderline · tecnica dei pro/contro'
    },
    pomeriggio: {
      tipo: 'mito',
      domanda: 'Se un impulso è molto forte, prima o poi devo seguirlo.',
      opzioni: [
        { testo: 'È vero: resistere fa solo salire la tensione', spiegazione: 'Si capisce: nei primi minuti resistere sembra peggiorare tutto, e cedere promette sollievo. Ma un impulso funziona come un’onda: sale, arriva a un picco e, se non lo alimenti, scende. La DBT propone di «cavalcare l’onda»: osservarlo con mindfulness, senza obbedirgli e senza combatterlo. Il sollievo del cedere spesso dura poco e lascia un peso.', passo: 'Guarda l’ora e rimanda di dieci minuti. Poi decidi di nuovo.', fonte: 'Linehan (2015), DBT Skills Training Manual · Regolazione emotiva, mindfulness delle emozioni correnti («cavalcare l’onda»); Porr (2017), Superare il disturbo borderline di personalità · «cavalcare l’onda» delle emozioni' },
        { testo: 'È falso: un impulso sale e poi scende', spiegazione: 'Sì. Un impulso non è un ordine: è una spinta del corpo e della mente, che cresce e poi cala. Ogni volta che lo lasci passare senza agire, impari che si può reggere e si allenta il legame automatico tra impulso e azione: la volta dopo spesso è un po’ meno forte. Non serve sentirsi bene: basta aspettare che l’onda passi.', fonte: 'Linehan (2015), DBT Skills Training Manual · Regolazione emotiva, mindfulness delle emozioni correnti («cavalcare l’onda»)' },
        { testo: 'Dipende: con certi impulsi ci riesco, con altri no', spiegazione: 'È un’osservazione onesta e utile. Gli impulsi più difficili arrivano di solito quando sei stanca, sola o già in tensione: lì la vulnerabilità emotiva (la facilità ad accendersi e a restare accesa) è più alta. Conoscere i tuoi momenti più fragili ti permette di prepararti prima, per esempio con la lista dei pro e contro di stamattina, e di ridurre la vulnerabilità con sonno, cibo e movimento regolari.', passo: 'Nota in quale ora della giornata gli impulsi ti sembrano più forti.', fonte: 'Linehan (2015), DBT Skills Training Manual · Tolleranza del disagio, pro e contro; Regolazione emotiva, ridurre la vulnerabilità alla mente emotiva' },
        { testo: 'Alcuni impulsi mi spaventano, perché potrei farmi del male', crisi: true, spiegazione: 'Grazie di averlo detto: è importante. Quando l’impulso è di farti del male, adesso conta proteggerti e prendere tempo: è una crisi, e le abilità di sopravvivenza alle crisi servono proprio a superare il picco senza peggiorare le cose. Anche pochi minuti aiutano, perché l’onda scende. Cambia stanza, allontana ciò che potrebbe ferirti, cerca una persona. Nella finestra che si apre dal tasto qui sotto trovi tecniche, le tue persone e, se l’hai preparato, il tuo piano.', passo: 'Premi il tasto qui sotto e scegli una sola cosa da fare adesso.', fonte: 'Linehan (2015), DBT Skills Training Manual · Tolleranza del disagio, abilità di sopravvivenza alle crisi' }
      ]
    }
  },

  /* ---------------- sabato: Valore di sé ---------------- */
  valore: {
    mattina: {
      abilita: 'Un piccolo passo verso un valore',
      tecnico: 'Nella DBT costruire una vita degna di essere vissuta (building a life worth living) passa dai valori: ciò che per te conta, inteso come direzione (cura, onestà, imparare, creatività). Da un valore si ricava un obiettivo e poi un primo passo concreto, fatto oggi. È anche un modo di ridurre la vulnerabilità alla mente emotiva: giornate con più senso reggono meglio gli alti e bassi. Agire secondo i propri valori dà un rispetto di sé che non dipende dal giudizio degli altri.',
      spiegato: 'Un valore è una direzione, non un traguardo: non si raggiunge mai del tutto, ma ci si può muovere verso. Il tuo valore come persona non si misura su quanto fai: i valori dicono solo dove ti piace andare. Anche un gesto di cinque minuti conta.',
      pratica: 'Scegli un valore per oggi, per esempio gentilezza, cura di te, curiosità. Prima di pranzo fai un gesto di cinque minuti in quella direzione: un messaggio gentile, una pagina letta, una pianta innaffiata. Poi notalo, senza giudicare il risultato.',
      fonte: 'Linehan (2015), DBT Skills Training Manual · Regolazione emotiva, dai valori ai passi concreti; Linehan (2021), Una vita degna di essere vissuta · costruire una vita che valga la pena'
    },
    pomeriggio: {
      tipo: 'mito',
      domanda: 'Valgo qualcosa solo se oggi riesco a fare abbastanza.',
      opzioni: [
        { testo: 'È vero: se non concludo niente, non valgo', spiegazione: 'È un pensiero molto diffuso, soprattutto quando si è imparato presto che l’attenzione arrivava con i risultati. Ma confonde due cose: ciò che fai e ciò che sei. Le giornate piene e quelle vuote cambiano l’umore, non il tuo valore. È un giudizio su di te, non un fatto: nella DBT l’abilità è descrivere («oggi ho concluso poco») invece di valutare («valgo poco»).', passo: 'Scrivi una cosa di oggi che non si vede: reggere, aspettare, chiedere aiuto.', fonte: 'Linehan (2015), DBT Skills Training Manual · Mindfulness, non giudicare; Efficacia interpersonale, autovalidazione' },
        { testo: 'È falso: il mio valore non dipende dai risultati', spiegazione: 'Sì, anche se a volte è difficile sentirlo. Il valore di una persona non sale e scende con la lista delle cose fatte. I valori servono a scegliere una direzione, non a dare un voto. E nelle giornate in cui si fa poco, l’autovalidazione (riconoscere a te stessa che ciò che senti ha senso: «ha senso che oggi sia così») è già un gesto di rispetto.', fonte: 'Linehan (2015), DBT Skills Training Manual · Efficacia interpersonale, autovalidazione; Porr (2017), Superare il disturbo borderline di personalità · autovalidazione' },
        { testo: 'Dipende da come mi sento quel giorno', spiegazione: 'È vero che il senso del proprio valore oscilla con l’umore, e l’immagine di sé può cambiare molto da un giorno all’altro: succede quando le emozioni sono intense. Ma a cambiare è la sensazione, non il valore. Vedere «oggi mi sento di valere poco» come uno stato, non come un verdetto, aiuta a non decidere da lì.', fonte: 'Gunderson e Hoffman (2010), Disturbo di personalità borderline · instabilità dell’immagine di sé' },
        { testo: 'Mi sembra vero, anche se so che non lo è', spiegazione: 'Sapere una cosa con la testa e sentirla dentro sono esperienze diverse, e la distanza tra le due è normale. Nella DBT si direbbe che la mente razionale lo sa e la mente emotiva non ci crede ancora: la mente saggia le tiene insieme. La distanza si accorcia facendo: un piccolo passo alla volta, trattandoti come tratteresti una persona cara.', passo: 'Fai oggi il gesto di cinque minuti scelto stamattina, anche se non ci credi del tutto.', fonte: 'Linehan (2015), DBT Skills Training Manual · Mindfulness, mente razionale, emotiva e saggia; Linehan (2021), Una vita degna di essere vissuta · mente saggia' }
      ]
    }
  }
};
