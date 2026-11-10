/* Approdo – il filo del giorno: per ogni tema della sera (contenuti.js) un’abilità da portare nella mattina
   e una domanda a scelta multipla per il pomeriggio, con un feedback immediato per ogni risposta.
   Basi nelle fonti: DBT (Linehan: una cosa alla volta, mindfulness dell’emozione corrente, validare gli altri,
   pro e contro, dai valori ai passi concreti, surfare l’impulso, modello biosociale); MBT (Bateman e Fonagy:
   equivalenza psichica, modalità teleologica, ipermentalizzazione, posizione di non sapere); attaccamento
   (Bowlby: base sicura ed esplorazione); Gunderson (sensibilità alle separazioni); consapevolezza delle
   attività di routine (Williams, Teasdale, Segal, Kabat-Zinn). Non è ripresa la parte TIP con acqua gelida,
   apnea o sforzo intenso. Testi originali in italiano, parafrasati: nessun passo è copiato.
   Le risposte si salvano per POSIZIONE (indice delle opzioni): dopo la pubblicazione non riordinare
   e non inserire voci in mezzo, aggiungi solo in fondo. `crisi: true` → l’app propone «Stasera è dura». */
window.Approdo = window.Approdo || {};
window.Approdo.Filo = {
  /* ---------------- domenica: Base sicura ---------------- */
  base: {
    mattina: {
      abilita: 'Partire dalla base, e sapere dove tornare',
      tecnico: 'Per Bowlby attaccamento ed esplorazione lavorano in coppia: quando la base sicura è disponibile, l’allarme dell’attaccamento si quieta e lascia spazio alla curiosità. Da adulti la base può anche essere interiorizzata: un’immagine stabile di chi ci sostiene, che resta quando non è presente.',
      spiegato: 'Ci si allontana più volentieri quando si sa dove tornare. Una cosa nuova o un po’ difficile pesa meno se, prima di cominciare, hai già deciso a chi o a che cosa tornerai dopo. Non è dipendenza: è il modo in cui funzionano tutte le persone.',
      pratica: 'Scegli una piccola esplorazione di oggi: una telefonata, una strada nuova, una domanda. Prima di farla decidi il tuo «ritorno»: a chi scriverai due righe, o in quale posto ti fermerai cinque minuti. Poi torna davvero, anche se è andata bene.',
      fonte: 'Attaccamento · base sicura ed esplorazione (Bowlby)'
    },
    pomeriggio: {
      tipo: 'riconosci',
      domanda: 'La persona che ti segue nel percorso è via per qualche giorno. A metà giornata ci pensi e senti un tuffo nello stomaco. Che cosa succede dentro di te?',
      opzioni: [
        { testo: 'Mi sembra di essere stata lasciata, come se non tornasse più.', spiegazione: 'Quando la sensibilità alle separazioni è alta, anche un’assenza prevista può accendere la paura dell’abbandono: l’attaccamento suona l’allarme come se la distanza fosse una perdita. È una reazione appresa, e ha senso. I fatti, però, dicono altro: una pausa con una data di ritorno.', passo: 'Scrivi la data in cui tornerà e una cosa che vorresti raccontarle.', fonte: 'Sensibilità alle separazioni (Gunderson) · attaccamento (Bowlby)' },
        { testo: 'Faccio finta che non mi importi: tanto devo cavarmela da sola.', spiegazione: 'Spegnere il bisogno è una strategia che molte persone imparano quando la vicinanza è stata incerta: nella teoria dell’attaccamento si parla di strategie «disattivanti». Proteggono dalla delusione, ma lasciano sole con il peso. Notare che un po’ ti importa non ti rende debole.', passo: 'Di’ a te stessa, anche solo a mente: «mi manca, ed è normale».', fonte: 'Attaccamento · strategie disattivanti (Bateman e Fonagy)' },
        { testo: 'Mi ricordo che tornerà e uso ciò che abbiamo costruito insieme.', spiegazione: 'È la base interiorizzata: il legame continua dentro di te anche quando l’altra persona non c’è. Bowlby parlava di modelli operativi interni, cioè l’idea di noi e degli altri che portiamo con noi. Se oggi ti riesce, riconoscitelo; se ti riesce a tratti, è normale: si allena.', fonte: 'Attaccamento · modelli operativi interni (Bowlby)' },
        { testo: 'Cerco un altro appoggio per questi giorni: il gruppo, un’amica, le mie abitudini.', spiegazione: 'Avere più basi, non una sola, è proprio ciò che protegge nei momenti di distanza. Non è un tradimento verso chi è via: è usare la rete che hai. Anche da adulti la sicurezza nasce da più legami e da più appoggi, non da una persona sola.', passo: 'Scegli adesso un appoggio per stasera e uno per domani.', fonte: 'Attaccamento (Bowlby) · lavoro di gruppo (modello GET)' }
      ]
    }
  },

  /* ---------------- lunedì: Presenza ---------------- */
  presenza: {
    mattina: {
      abilita: 'Una cosa alla volta',
      tecnico: 'Nella DBT si chiama agire «in modo unifocale» (one-mindfully): fare una sola cosa con tutta l’attenzione, notando la spinta a essere altrove. È una delle abilità del «come» della mindfulness, con il non giudicare e l’efficacia. Vale anche per le preoccupazioni: se ti preoccupi, fai solo quello, per un tempo stabilito.',
      spiegato: 'Fare tre cose insieme sembra più veloce, ma stanca di più e lascia la mente in allerta. Quando l’attenzione sta tutta su un gesto, anche semplice, il corpo rallenta un poco. Se la mente scappa la riporti, tante volte quante serve, senza rimproveri.',
      pratica: 'Scegli un gesto di routine di oggi: lavarti i denti, bere il caffè, lavare una tazza. Per un minuto fai solo quello, a occhi aperti: temperatura, suono, movimento delle mani. Se arriva un pensiero, ditti «dopo» e torna al gesto.',
      fonte: 'DBT · una cosa alla volta (Linehan) · attività di routine (Williams e colleghi)'
    },
    pomeriggio: {
      tipo: 'riconosci',
      domanda: 'Metà pomeriggio. Stai rispondendo a un messaggio, intanto pensi alla spesa e a una discussione di ieri. Il telefono vibra di nuovo. Che cosa fai?',
      opzioni: [
        { testo: 'Faccio tutto insieme, così finisco prima.', spiegazione: 'È la scelta più comune, e a volte serve. Ma il multitasking è in realtà un saltare veloce da una cosa all’altra: ogni salto costa energia e lascia la mente più agitata. Fatto per tutto il giorno, alza la tensione di fondo, e la sera la senti.', passo: 'Finisci il messaggio che hai davanti, poi scegli la cosa successiva.', fonte: 'DBT · una cosa alla volta (Linehan)' },
        { testo: 'Mi blocco: sono troppe cose e non ne comincio nessuna.', spiegazione: 'Quando le richieste si sommano, la mente può andare in sovraccarico e fermarsi. Non è pigrizia: è un sistema troppo carico. Una cosa alla volta serve proprio qui. Non devi risolvere tutta la lista, solo scegliere la prossima voce.', passo: 'Scrivi le tre cose in fila, su un foglio o sul telefono, e fai solo la prima.', fonte: 'DBT · una cosa alla volta (Linehan)' },
        { testo: 'Mi rimprovero perché sono sempre distratta.', spiegazione: 'Al pensiero si aggiunge il giudizio, e il peso raddoppia. Nella DBT il non giudicare è un’abilità vera: si descrive invece di condannare. La distrazione è un’abitudine della mente, non un difetto di carattere, e le abitudini si allenano.', passo: 'Cambia il rimprovero in descrizione: «adesso ho tre cose in testa».', fonte: 'DBT · non giudicare (Linehan)' },
        { testo: 'Lascio il telefono, finisco il messaggio e poi guardo il resto.', spiegazione: 'È l’abilità di stamattina in azione: una cosa con tutta l’attenzione, le altre in fila. Le cose non spariscono, aspettano il loro turno. Se ti è venuto naturale, riconoscitelo; se ti è costato fatica, conta ancora di più.', fonte: 'DBT · una cosa alla volta (Linehan)' }
      ]
    }
  },

  /* ---------------- martedì: Emozioni ---------------- */
  emozioni: {
    mattina: {
      abilita: 'Osservare l’emozione del momento',
      tecnico: 'La DBT la chiama mindfulness dell’emozione corrente: osservare l’emozione senza bloccarla, senza spingerla via e senza ingrandirla. Si nota dove si sente nel corpo e quanto dura, ricordando che tu non sei la tua emozione. Riduce la sofferenza in più che nasce dal combattere ciò che si prova.',
      spiegato: 'Un’emozione lasciata stare sale, arriva in cima e poi scende, come un’onda. Quando la scacciamo o ci rimuginiamo sopra, invece, si riaccende e dura di più. Guardarla per qualche respiro, con curiosità, la rende più piccola.',
      pratica: 'Oggi, prima di ogni pasto, fermati trenta secondi a occhi aperti. Chiediti: che emozione c’è? Dove la sento nel corpo? Quanto è forte: poca, media o tanta? Non cambiare niente: nota, e torna a ciò che stai facendo.',
      fonte: 'DBT · mindfulness dell’emozione corrente (Linehan)'
    },
    pomeriggio: {
      tipo: 'mito',
      domanda: 'Se un’emozione è molto forte, non passerà più.',
      opzioni: [
        { testo: 'È vero', spiegazione: 'Si capisce perché lo pensi: quando un’emozione è in cima, sembra senza fine. Linehan descrive persone con una sensibilità alta, reazioni intense e un ritorno lento alla calma: per loro le emozioni durano davvero di più. Ma «più a lungo» non vuol dire «per sempre»: anche le onde più alte scendono.', passo: 'Guarda l’ora e, fra venti minuti, chiediti com’è l’emozione: più bassa, uguale o più alta?', fonte: 'DBT · modello biosociale (Linehan)' },
        { testo: 'È falso', spiegazione: 'Sì: ogni emozione, lasciata a sé, sale, raggiunge un picco e poi cala. A tenerla in vita sono spesso i pensieri che la riaccendono, o lo sforzo di scacciarla. Saperlo non toglie il dolore, ma aiuta ad aspettare senza agire d’impulso.', fonte: 'DBT · mindfulness dell’emozione corrente (Linehan)' },
        { testo: 'Dipende da che cosa faccio mentre la sento', spiegazione: 'Esatto, ed è una buona notizia. Rimuginare, cercare conferme o soffocare l’emozione la riaccendono; osservarla, darle un nome, prendersi cura del corpo la aiutano a scendere. Non scegli ciò che senti, ma hai un po’ di margine su come attraversarlo.', fonte: 'DBT · regolazione emotiva (Linehan)' },
        { testo: 'Per me alcune emozioni sembrano non passare mai', spiegazione: 'Ha senso che tu lo senta così: quando un’emozione torna spesso, sembra la stessa da giorni. Spesso però sono onde nuove, riaccese da un pensiero o da un ricordo. Accorgerti di quando ricomincia è già un passo. E un’emozione che pesa a lungo puoi portarla al gruppo o in terapia: non devi reggerla da sola.', passo: 'Quando torna, chiediti: «che cosa l’ha riaccesa, adesso?».', fonte: 'DBT · mindfulness dell’emozione corrente (Linehan)' }
      ]
    }
  },

  /* ---------------- mercoledì: Mentalizzare ---------------- */
  mentalizzare: {
    mattina: {
      abilita: 'Accorgersi della certezza che arriva troppo in fretta',
      tecnico: 'In MBT si chiama equivalenza psichica: con l’emozione alta, ciò che penso o sento viene vissuto come un fatto. «Mi sento rifiutata» diventa «mi ha rifiutata», senza spazio per altre letture. Accorgersene rimette in moto la mentalizzazione: vedere pensieri ed emozioni, miei e altrui, come stati della mente.',
      spiegato: 'Il segnale è la sensazione di sapere con certezza che cosa pensa o vuole l’altra persona. Non è un tuo difetto: succede a tutti quando l’emozione sale. Chiamarla per nome, «è una certezza della mia mente», apre un piccolo spiraglio di dubbio. E il dubbio protegge.',
      pratica: 'Oggi, quando ti sorprendi a pensare «è chiaro che…» o «lo so che…» su un’altra persona, fermati. Chiediti quanto sei sicura (poco, abbastanza, del tutto) e quanto è forte l’emozione. Poi riscrivi la frase, a mente, cominciando con «mi sembra che…».',
      fonte: 'MBT · equivalenza psichica (Bateman e Fonagy)'
    },
    pomeriggio: {
      tipo: 'riconosci',
      domanda: 'Una collega passa nel corridoio e non ti saluta. Stamattina vi eravate scritte come sempre. Qual è la prima cosa che ti succede?',
      opzioni: [
        { testo: 'È chiaro: ce l’ha con me.', spiegazione: 'È l’equivalenza psichica di stamattina: il pensiero arriva con la forza di un fatto. Succede soprattutto quando si è già tese o stanche. Non devi scacciarlo: basta riconoscerlo come un’ipotesi. Le alternative ci sono, anche se in quel momento non si vedono.', passo: 'Aggiungi due ipotesi neutre: «era di fretta», «era sovrappensiero».', fonte: 'MBT · equivalenza psichica (Bateman e Fonagy)' },
        { testo: 'Devo scriverle subito per sapere se è arrabbiata.', spiegazione: 'Il bisogno di una prova concreta e immediata in MBT si chiama modalità teleologica: conta solo un gesto visibile, una risposta, e le intenzioni non bastano più. Il sollievo dura poco e spesso serve un’altra prova. Darsi un po’ di tempo riapre lo spazio per pensare.', passo: 'Aspetta un’ora. Poi, se vuoi chiedere, chiedi con curiosità: «tutto bene?».', fonte: 'MBT · modalità teleologica (Bateman e Fonagy)' },
        { testo: 'Ci ragiono a lungo e costruisco una teoria complicata sul perché.', spiegazione: 'Pensare tanto alle menti sembra mentalizzare, ma a volte è il contrario. In MBT si parla di ipermentalizzazione, o modalità del «far finta»: ragionamenti lunghi e sicuri che si staccano dai fatti e da ciò che si prova davvero. Il segnale è che più ci pensi, più ti allontani da te.', passo: 'Torna a due domande semplici: che cosa ho visto davvero? Che cosa sento io, adesso?', fonte: 'MBT · ipermentalizzazione (Bateman e Fonagy)' },
        { testo: 'Mi dico: forse era sovrappensiero. Non lo so, magari glielo chiederò.', spiegazione: 'Questo è mentalizzare: tenere aperte più ipotesi e accettare di non sapere. La MBT chiama questo atteggiamento posizione di «non sapere»: la mente dell’altra persona è opaca, e la curiosità vale più della certezza. Se ti è venuto spontaneo, riconoscitelo.', fonte: 'MBT · posizione di non sapere (Bateman e Fonagy)' }
      ]
    }
  },

  /* ---------------- giovedì: Relazioni ---------------- */
  relazioni: {
    mattina: {
      abilita: 'Validare l’altra persona',
      tecnico: 'Validare (la V di GIVE nella DBT) vuol dire trovare il nucleo di verità in ciò che l’altra persona prova e dirle che ha senso, date le sue ragioni. Non vuol dire essere d’accordo né approvare. Ha più livelli: ascoltare davvero, rimandare ciò che hai capito, cogliere il non detto, dire «ha senso che…».',
      spiegato: 'Quando qualcuno ti racconta una difficoltà, viene voglia di rassicurare o di dare subito un consiglio. Spesso però l’altra persona ha bisogno prima di sentirsi capita. Validare abbassa la tensione da tutte e due le parti, e rende più facile, dopo, anche risolvere il problema.',
      pratica: 'In una conversazione di oggi, a pranzo o al telefono, prima di dare un consiglio o la tua opinione rimanda ciò che hai capito: «Quindi sei preoccupata per…, giusto?». Basta una volta. Poi nota come cambia la conversazione.',
      fonte: 'DBT · validare gli altri, GIVE (Linehan)'
    },
    pomeriggio: {
      tipo: 'riconosci',
      domanda: 'Un’amica ti scrive all’ora di pranzo: domani ha un colloquio di lavoro ed è agitatissima. Che cosa ti viene da risponderle?',
      opzioni: [
        { testo: '«Dai, andrà benissimo, non c’è niente di cui preoccuparsi.»', spiegazione: 'È una risposta affettuosa, e l’intenzione è buona: vuoi toglierle la paura. Ma una rassicurazione troppo rapida può farle sentire che la sua ansia è esagerata, il contrario di ciò che vuoi. È un’invalidazione involontaria. Prima riconosci l’emozione, poi rassicura.', passo: 'Aggiungi una frase prima: «Ci credo che sei agitata».', fonte: 'DBT · validazione e invalidazione (Linehan)' },
        { testo: '«Ti mando tre consigli per prepararti.»', spiegazione: 'Aiutare a risolvere è prezioso, e a volte è proprio ciò che serve: se è richiesto, è anche un modo di validare. Se non lo sai, puoi chiederlo. Nella DBT si suggerisce di non dare consigli non richiesti: prima ascoltare, poi offrire.', passo: 'Chiedile: «Ti vanno due idee, o hai bisogno di sfogarti?».', fonte: 'DBT · validare gli altri (Linehan)' },
        { testo: '«Ci credo che sei agitata: ci tieni tanto, ha senso.»', spiegazione: 'È validazione piena: riconosci l’emozione e ne mostri il senso, date le circostanze. Non le prometti che andrà bene: le dici che ciò che sente è comprensibile. Spesso è proprio questo a far scendere l’ansia. Se ti è venuto naturale, è una risorsa tua.', fonte: 'DBT · validare gli altri (Linehan)' },
        { testo: '«Anche io prima dei colloqui sto malissimo, una volta…»', spiegazione: 'Raccontare un’esperienza simile crea vicinanza e le mostra che non è sola: è un modo di stare alla pari. Il rischio è che la conversazione scivoli su di te e lei resti con la sua agitazione. Funziona meglio dopo averla validata, e in breve.', passo: 'Prima una frase su di lei, poi, se serve, una breve su di te.', fonte: 'DBT · validare gli altri (Linehan)' }
      ]
    }
  },

  /* ---------------- venerdì: Reggere il disagio ---------------- */
  disagio: {
    mattina: {
      abilita: 'Pro e contro, preparati a mente calma',
      tecnico: 'Pro e contro è un’abilità DBT per superare le crisi. In quattro caselle si confrontano vantaggi e svantaggi del cedere a un impulso e del resistergli, nel breve e nel lungo periodo. Va preparata prima, a mente lucida: nel momento dell’impulso il pensiero si restringe al sollievo immediato.',
      spiegato: 'Quando un impulso è forte, la mente vede solo il sollievo dei prossimi minuti. Una lista scritta con calma ti ricorda anche il dopo: come starai stasera, domani, la settimana prossima. È come lasciarti un biglietto scritto da te, quando vedevi più chiaro.',
      pratica: 'Stamattina scegli un impulso che ti capita spesso: scrivere di getto, chiuderti in casa, spendere troppo. Scrivi due pro e due contro del cedere e del resistere, sul telefono o su un biglietto. Tienilo con te e rileggilo appena senti salire la spinta.',
      fonte: 'DBT · pro e contro, tolleranza del disagio (Linehan)'
    },
    pomeriggio: {
      tipo: 'mito',
      domanda: 'Se un impulso è molto forte, prima o poi devo seguirlo.',
      opzioni: [
        { testo: 'È vero: resistere fa solo salire la tensione', spiegazione: 'Si capisce: nei primi minuti resistere sembra peggiorare tutto, e cedere promette sollievo. Ma un impulso funziona come un’onda: sale, arriva a un picco e, se non lo alimenti, scende. La DBT chiama «surfare l’impulso» osservarlo senza obbedirgli. Il sollievo del cedere spesso dura poco e lascia un peso.', passo: 'Guarda l’ora e rimanda di dieci minuti. Poi decidi di nuovo.', fonte: 'DBT · surfare l’impulso (Linehan)' },
        { testo: 'È falso: un impulso sale e poi scende', spiegazione: 'Sì. Un impulso non è un ordine: è una spinta del corpo e della mente, che cresce e poi cala. Ogni volta che lo lasci passare senza agire, impari che si può reggere, e la volta dopo spesso è un po’ meno forte. Non serve sentirsi bene: basta aspettare che l’onda passi.', fonte: 'DBT · surfare l’impulso (Linehan)' },
        { testo: 'Dipende: con certi impulsi ci riesco, con altri no', spiegazione: 'È un’osservazione onesta e utile. Gli impulsi più difficili arrivano di solito quando sei stanca, sola o già in tensione: lì la vulnerabilità è più alta. Conoscere i tuoi momenti più fragili ti permette di prepararti prima, per esempio con la lista dei pro e contro di stamattina.', passo: 'Nota in quale ora della giornata gli impulsi ti sembrano più forti.', fonte: 'DBT · pro e contro (Linehan)' },
        { testo: 'Alcuni impulsi mi spaventano, perché potrei farmi del male', crisi: true, spiegazione: 'Grazie di averlo detto: è importante. Quando l’impulso è di farti del male, adesso conta proteggerti e prendere tempo: anche pochi minuti aiutano, perché l’onda scende. Cambia stanza, allontana ciò che potrebbe ferirti, cerca una persona. Il tuo piano è nella finestra che si apre dal tasto qui sotto, a qualunque ora.', passo: 'Premi il tasto qui sotto e fai il primo passo del tuo piano.', fonte: 'DBT · tolleranza del disagio (Linehan)' }
      ]
    }
  },

  /* ---------------- sabato: Valore di sé ---------------- */
  valore: {
    mattina: {
      abilita: 'Un piccolo passo verso un valore',
      tecnico: 'Nella DBT costruire una vita degna di essere vissuta passa dai valori: ciò che per te conta, inteso come direzione (cura, onestà, imparare, creatività). Da un valore si ricava un obiettivo e poi un primo passo concreto, fatto oggi. Agire secondo i propri valori dà un rispetto di sé che non dipende dal giudizio degli altri.',
      spiegato: 'Un valore è una direzione, non un traguardo: non si raggiunge mai del tutto, ma ci si può muovere verso. Il tuo valore come persona non si misura su quanto fai: i valori dicono solo dove ti piace andare. Anche un gesto di cinque minuti conta.',
      pratica: 'Scegli un valore per oggi, per esempio gentilezza, cura di te, curiosità. Prima di pranzo fai un gesto di cinque minuti in quella direzione: un messaggio gentile, una pagina letta, una pianta innaffiata. Poi notalo, senza giudicare il risultato.',
      fonte: 'DBT · dai valori ai passi concreti (Linehan) · una vita degna di essere vissuta'
    },
    pomeriggio: {
      tipo: 'mito',
      domanda: 'Valgo qualcosa solo se oggi riesco a fare abbastanza.',
      opzioni: [
        { testo: 'È vero: se non concludo niente, non valgo', spiegazione: 'È un pensiero molto diffuso, soprattutto quando si è imparato presto che l’attenzione arrivava con i risultati. Ma confonde due cose: ciò che fai e ciò che sei. Le giornate piene e quelle vuote cambiano l’umore, non il tuo valore. Puoi guardare questa idea come un pensiero da descrivere, non come un fatto.', passo: 'Scrivi una cosa di oggi che non si vede: reggere, aspettare, chiedere aiuto.', fonte: 'DBT · non giudicare e autovalidazione (Linehan)' },
        { testo: 'È falso: il mio valore non dipende dai risultati', spiegazione: 'Sì, anche se a volte è difficile sentirlo. Il valore di una persona non sale e scende con la lista delle cose fatte. I valori servono a scegliere una direzione, non a dare un voto. E nelle giornate in cui si fa poco, autovalidarsi («ha senso che oggi sia così») è già un gesto di rispetto.', fonte: 'DBT · autovalidazione (Linehan)' },
        { testo: 'Dipende da come mi sento quel giorno', spiegazione: 'È vero che il senso del proprio valore oscilla con l’umore, e l’immagine di sé può cambiare molto da un giorno all’altro. Ma a cambiare è la sensazione, non il valore. Vedere «oggi mi sento di valere poco» come uno stato, non come un verdetto, aiuta a non decidere da lì.', fonte: 'Immagine di sé instabile (Gunderson) · DBT' },
        { testo: 'Mi sembra vero, anche se so che non lo è', spiegazione: 'Sapere una cosa con la testa e sentirla dentro sono esperienze diverse, e la distanza tra le due è normale. Nella DBT si direbbe che la mente razionale lo sa e la mente emotiva non ci crede ancora. La distanza si accorcia facendo: un piccolo passo alla volta, trattandoti come tratteresti una persona cara.', passo: 'Fai oggi il gesto di cinque minuti scelto stamattina, anche se non ci credi del tutto.', fonte: 'DBT · mente saggia (Linehan)' }
      ]
    }
  }
};
