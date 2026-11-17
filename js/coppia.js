/* Marsa – il tema «Abbiamo litigato»: cinque scene per la sera dopo (o durante) un litigio con la persona con cui stai.
   Non è legato a un giorno della settimana: si apre su richiesta, dalle «Sere» e da «Stasera è dura». Per questo sta in
   `Marsa.TemiExtra` e non in `Marsa.Temi` (che ha un tema per ogni giorno). Le scene stanno in `Marsa.Percorso.coppia`, nello
   stesso formato delle altre; non c’è una serie B. Le risposte si salvano per posizione (indice): dopo la pubblicazione
   non riordinare e non inserire voci in mezzo, aggiungi solo in fondo.
   `piano` (facoltativo, su una scena): mostra sotto la domanda «Il mio piano per i litigi» (elenco dei campi, o `true` per tutti).
   Il piano si salva in `marsa.pianoLitigi`, compare anche in «Stasera è dura» ed entra solo nel file delle note.
   Testi originali, parafrasati da Lebow e Snyder (a cura di, 2023), Clinical Handbook of Couple Therapy (time-out collaborativo,
   terapia di coppia di Gottman, terapia focalizzata sulle emozioni) e da Simeone-DiFrancesco, Roediger e Stevens (2015),
   Schema Therapy with Couples: nessun passo è copiato. Niente alcol né sostanze. Genere neutro per l’altra persona. */
window.Marsa = window.Marsa || {};
(function () {
  var FONTE_COPPIA = 'Lebow e Snyder (a cura di, 2023), Clinical Handbook of Couple Therapy · ';
  var FONTE_SCHEMA = 'Simeone-DiFrancesco, Roediger e Stevens (2015), Schema Therapy with Couples · ';
  var AVVISO_FREDDO = 'Acqua fredda e movimento deciso: evitali se hai problemi di cuore o di battito, se prendi farmaci che rallentano il cuore, se sei in gravidanza, se hai un disturbo alimentare o allergia al freddo; in quel caso fermati al respiro lento.';

  window.Marsa.TemiExtra = [
    {
      id: 'coppia', nome: 'Abbiamo litigato', sotto: 'Fermarsi, capirsi, ritrovarsi', colore: 'rose',
      fonte: 'Lebow e Snyder (a cura di, 2023), Clinical Handbook of Couple Therapy · time-out collaborativo, i quattro segnali di Gottman, terapia focalizzata sulle emozioni; Simeone-DiFrancesco, Roediger e Stevens (2015), Schema Therapy with Couples · flooding e accettazione prima dell’accordo; Linehan (2015), DBT Skills Training Manual · tolleranza del disagio (TIP)',
      approfondisci: { vai: 'litigi', testo: 'Quando litighiamo, spiegato piano' },
      lettura: [
        'Una sera qualsiasi: la giornata è stata lunga, una frase esce male, e dieci minuti dopo state litigando per una cosa che non c’entra più. Succede in quasi tutte le coppie, e non vuol dire che il rapporto è rovinato.',
        'A fare la differenza non è se si litiga, ma che cosa succede mentre l’onda sale e che cosa si fa dopo. Stasera passiamo in cinque scene: riconoscere l’onda, fermarsi con una pausa detta ad alta voce, capire il vostro giro, riparare, e mettere tutto in un piccolo kit.',
        'Non serve avere ragione stasera. Serve non peggiorare e, domani, ritrovarvi. Nelle terapie di coppia anche l’accettazione viene prima dell’accordo: prima ci si capisce, poi si decide.',
        'Alla fine puoi scrivere il tuo piano per i litigi, a mente fredda, con le tue parole. Se invece stai litigando adesso, non serve leggere: apri «Stasera è dura» (di giorno «Oggi è dura») e scegli «Ho litigato, o sto litigando».'
      ],
      avviso: 'Se hai paura di come reagisce la persona con cui stai, o se in casa ci sono state violenze, questo tema non basta: parlane con chi ti segue. Non devi restare sola con questa paura.',
      esercizio: {
        titolo: 'Le cinque scene',
        intro: 'Rispondi pensando a un litigio vero, anche piccolo, o a uno che potrebbe esserci. Non ci sono risposte giuste.',
        passi: [
          'Pensa all’ultimo litigio, o a una situazione che ti fa temere il prossimo.',
          'Per ogni scena tocca le risposte che ti somigliano e leggi che cosa c’è dietro.',
          'Nell’ultima scena trovi il tuo piano per i litigi: scrivilo solo se ti va, e puoi farlo anche un altro giorno.'
        ],
        campi: [],
        respiro: false
      },
      domanda: 'Che cosa mi serve, la prossima volta che l’onda sale?',
      frase: 'Un litigio non è la fine. Ci si può fermare e ritrovarsi.',
      audio: '',
      file: null
    }
  ];

  window.Marsa.Percorso = window.Marsa.Percorso || {};
  window.Marsa.Percorso.coppia = {
    scene: [
      {
        id: 'coppia-1', tipo: 'riconosci', multi: true,
        domanda: 'Stai litigando con la persona con cui stai. Che cosa noti, di solito, quando l’onda comincia a salire?',
        fonte: FONTE_COPPIA + 'i quattro segnali di Gottman (critica, disprezzo, difesa, muro) e il time-out; ' + FONTE_SCHEMA + 'flooding',
        opzioni: [
          { testo: 'Il corpo si scalda, la voce sale, e in testa: «se ne andrà».', spiegazione: 'Esempio: stai parlando e senti il cuore che corre, le mani tese, il caldo in faccia. Poi non ricordi bene che cosa hai detto: ricordi solo la paura. È l’onda che sale. Il corpo va in allarme, e in allarme ascoltare e ragionare diventa quasi impossibile: si chiama flooding, essere inondati. In più riaffiorano le altre volte in cui ti sei sentita così, e la sera sembra più grande di quello che è. Il pensiero «se ne andrà» è la paura dell’abbandono che parla: è un segnale, non un fatto.', passo: 'Dentro di te, di’: «L’onda sta salendo». Dare un nome ti ridà un po’ di spazio.' },
          { testo: 'Parto all’attacco: «tu sei sempre così», sarcasmo, parole che feriscono.', spiegazione: 'Esempio: «Non ti importa mai di niente, sei proprio egoista». Non parla più di un fatto: giudica la persona. Nella terapia di Gottman si chiama critica: attaccare chi hai davanti invece di dire che cosa ti ha fatto male. Quando arriva anche il tono di chi si sente sopra l’altra persona, con sarcasmo, occhi al cielo, insulti, si chiama disprezzo, ed è il segnale che fa più danno: chi lo riceve si sente da meno e smette di ascoltare. Tutte le coppie li usano ogni tanto. Il punto è accorgersene: dicono che l’onda è già alta.', passo: 'Prova a trasformare l’attacco in un fatto più un sentimento: «Mi è dispiaciuto trovare i piatti ancora lì».' },
          { testo: 'Mi difendo, o mi chiudo e smetto di rispondere.', spiegazione: 'Esempio: «Eccoti, sempre a dire che sbaglio io!». Oppure ti giri e guardi il telefono senza dire niente. La prima è la difesa: rispondi all’accusa con un’altra accusa, e il discorso gira in tondo. La seconda è il muro: smetti di rispondere, diventi di pietra. Da fuori sembra indifferenza; dentro, di solito, è un corpo sommerso che non regge più. Ma per l’altra persona è come restare sola in mezzo alla stanza. Il muro non è la pausa: la pausa si dice ad alta voce, ed è la prossima scena.', passo: 'Se ti accorgi che ti stai chiudendo, di’ una frase sola: «Mi sto chiudendo, ho bisogno di una pausa».' },
          { testo: 'Sento la spinta a colpire o a rompere qualcosa.', crisi: true, spiegazione: 'Quando senti la spinta a colpire o a rompere qualcosa, non è il momento di parlare: è il momento di uscire dalla stanza. Esempio: la mano si stringe, qualcosa dentro dice «adesso». Non è un fallimento: è la cosa più forte che puoi fare in quel momento. La spinta arriva con un’onda altissima, e le onde calano. Allontanati, in un’altra stanza o fuori di casa, e non restare sola con questa spinta. Se non cala, il tasto qui sotto apre «Stasera è dura» (di giorno «Oggi è dura»).', passo: 'Esci dalla stanza, anche solo per il tempo di tre respiri lenti: fuori più lungo di dentro.' }
        ]
      },
      {
        id: 'coppia-2', tipo: 'riconosci', multi: false,
        domanda: 'L’onda è alta e senti che non reggi più. Che cosa fai?',
        fonte: FONTE_COPPIA + 'time-out collaborativo e tempo di raffreddamento; Linehan (2015), DBT Skills Training Manual · tolleranza del disagio (TIP)',
        piano: ['pausa', 'durata', 'cose'],
        opzioni: [
          { testo: 'Sbatto la porta e sparisco.', spiegazione: 'Esempio: esci di casa senza una parola e spegni il telefono. Tu respiri; l’altra persona resta ad aspettare e non sa se tornerai. Se in te c’è la paura dell’abbandono, adesso sono in due ad averla. Uscire non è sbagliato: è il modo che pesa. Sbattere la porta, sparire e restare in un silenzio gelido sono la stessa cosa, perché non dicono quando torni, e l’altra persona lo sente come una punizione. Il giro peggiora.', passo: 'La prossima volta la porta resta com’è: basta una frase prima di uscire.' },
          { testo: 'Dico la frase concordata e a che ora torno.', spiegazione: 'Esempio: «Sto salendo, ho bisogno di una pausa. Non me ne vado: torno alle dieci e ne riparliamo». È la pausa che protegge. La differenza dal silenzio freddo che punisce sta tutta nella seconda metà della frase: si dice quando si torna. Servono almeno venti minuti, perché prima l’allarme del corpo non cala. Durante la pausa ti occupi del corpo: respiro lento, una camminata, acqua fredda sul viso per pochi secondi (è il TIP: temperatura, intensità, respiro lento). E non continui il processo nella testa: niente «e poi dirò che…». Chi resta lascia andare e non insegue. ' + AVVISO_FREDDO, passo: 'Scrivi qui sotto la tua frase e l’ora del ritorno: domani ti servirà già pronta.' },
          { testo: 'Resto finché non ho vinto io.', spiegazione: 'Esempio: sono passate due ore, siete a pezzi, e continui perché l’ultima parola dev’essere tua. A questo punto nessuna delle due persone sta più ascoltando: il corpo è in allarme e la mente cerca solo di difendersi. Vincere la discussione, di solito, vuol dire perdere la sera. Ogni minuto in più peggiora le cose e a volte porta a dire frasi che non si possono ritirare. Se invece è l’altra persona a chiedere la pausa, lasciala andare: non è un rifiuto, è un modo di tornare meglio.', passo: 'Chiediti: voglio avere ragione adesso, o ritrovarci domani?' }
        ]
      },
      {
        id: 'coppia-3', tipo: 'riconosci', multi: true,
        domanda: 'Pensa all’ultimo litigio. Quali parti del vostro «giro» riconosci?',
        fonte: FONTE_COPPIA + 'ciclo di attaccamento nella terapia focalizzata sulle emozioni (richiesta e ritiro); ' + FONTE_SCHEMA + 'flooding e pensiero tutto o niente',
        opzioni: [
          { testo: 'Ho avuto paura che si allontanasse.', spiegazione: 'Esempio: l’altra persona non risponde al messaggio per ore. Dentro parte un pensiero: «non mi vuole più». Sotto molti litigi c’è una paura vecchia: «se deludo o mi allontano, la persona se ne va». È la paura dell’abbandono, e non è una debolezza: è un allarme che si accende in fretta. Il guaio è che non sempre è accurato. Un messaggio senza risposta ha mille spiegazioni, e quasi tutte non parlano di te.', passo: 'Prima di scrivere ancora, chiediti: sto guardando un fatto o una paura?' },
          { testo: 'Ho controllato, insistito, attaccato: «dimmi che ci sei!».', spiegazione: 'Esempio: scrivi cinque messaggi in dieci minuti, poi un «lo sapevo, non ti importa». Chi controlla o attacca di solito sta chiedendo vicinanza, nel modo più rumoroso che conosce. Ma l’altra persona sente soprattutto l’accusa e il tono, e fa la cosa più naturale: si difende o si chiude. Il tuo bisogno di vicinanza è vero; il modo in cui arriva, spesso, allontana proprio ciò che cerchi.', passo: 'Prova a dire il bisogno al posto dell’accusa: «Ho paura di perderti, mi aiuti?».' },
          { testo: 'L’altra persona si è chiusa, e io sono peggiorata.', spiegazione: 'Esempio: l’altra persona si gira e va in camera. Tu la segui con le parole, più forte. Più si chiude, più tu premi; più tu premi, più si chiude. Questo è il giro: ognuno fa la cosa che peggiora la paura dell’altro. Nessuno dei due è il cattivo: è il giro che vi tiene. Se riuscite a dirvelo a mente fredda («quando mi chiudo, tu ti spaventi»), il giro perde forza.', passo: 'A mente fredda, scrivi il vostro giro in quattro frasi: la mia paura, che cosa faccio, che cosa fa l’altra persona, che cosa succede dopo.' },
          { testo: 'Nella stessa sera: «è finita», e poco dopo «ti voglio bene, scusami».', spiegazione: 'Esempio: alle nove «non ce la faremo mai, è tutto rovinato»; alle dieci e mezza «scusami, ti voglio un bene enorme». Passare dal tutto nero al tutto bianco è molto comune quando l’emozione è alta: la mente fa fatica a tenere insieme le due cose e ne vede una per volta. In quel momento parla la paura, non la verità su di voi. Se ti suona familiare il pensiero «se litighiamo, il rapporto è rovinato», lo trovi anche tra le domande «Mito o realtà?» del giovedì, nel tema Relazioni.', passo: 'Quando il pensiero è tutto nero, di’: «È la paura che parla. Ne riparliamo domani».' }
        ]
      },
      {
        id: 'coppia-4', tipo: 'kit', multi: true,
        domanda: 'È il giorno dopo. Che cosa ti sembra possibile fare per ritrovarvi?',
        fonte: FONTE_COPPIA + 'riparazione e ammorbidimento nella terapia focalizzata sulle emozioni, ascolto prima della persuasione di Gottman; ' + FONTE_SCHEMA + 'l’accettazione ha la precedenza sull’accordo',
        opzioni: [
          { testo: 'Riconoscere la mia parte, senza affondare nella vergogna.', spiegazione: 'Esempio: «Ieri ho alzato la voce e ti ho detto cose per farti male. Mi dispiace». Una frase concreta, sulla tua parte. Non serve «è tutta colpa mia»: serve dire che cosa hai fatto tu. Fai attenzione alla vergogna: «sono un mostro» ti spinge a nasconderti o ad attaccare di nuovo. Passare da «sono sbagliata» a «ho fatto una cosa che ha fatto male» ti lascia in piedi, e ti permette di riparare.', passo: 'Scrivi una frase che comincia con «Io ho…» e dice solo che cosa hai fatto tu.' },
          { testo: 'Chiedere vicinanza in modo concreto.', spiegazione: 'Esempio: invece di «tanto non ti importa», dire «Ho bisogno che tu mi dica che ci sei». Sotto la rabbia di solito c’è un bisogno di vicinanza, e un bisogno detto chiaramente è più facile da accogliere di un’accusa. La terapia focalizzata sulle emozioni lo chiama ammorbidirsi: mostrare la parte spaventata, non quella arrabbiata. Scegli una richiesta piccola e precisa: un abbraccio, una frase, dieci minuti insieme.', passo: 'Finisci la frase: «Ho bisogno che tu…».' },
          { testo: 'Ascoltare prima come l’ha vissuta l’altra persona, e mettermi d’accordo dopo.', spiegazione: 'Esempio: «Per te quella frase era un attacco, vero? Dimmi come l’hai sentita». Accogliere non vuol dire dare ragione: vuol dire far capire che hai capito. Nella terapia degli schemi di coppia l’accettazione viene prima dell’accordo: prima ci si sente capiti, poi si decide insieme. Se riesci a ripetere la sua versione fino a sentirti dire «sì, è così», hai già sistemato metà del problema. La tua versione arriva dopo.', passo: 'Quando ascolti, riassumi la sua versione in una frase prima di dire la tua.' },
          { testo: 'Aspettare ancora: oggi non me la sento.', spiegazione: 'Esempio: al solo pensiero ti si stringe lo stomaco. Va bene: riparare ha bisogno di calma, non di fretta. Ciò che conta è non lasciar cadere tutto in un silenzio freddo: di’ quando ci torni, come per la pausa. «Oggi non ce la faccio, ne parliamo domani dopo cena» è già una riparazione, perché dice che ci tieni.', passo: 'Scegli un’ora per tornarci e dilla all’altra persona.' }
        ]
      },
      {
        id: 'coppia-5', tipo: 'kit', multi: true,
        domanda: 'Che cosa metti nel tuo kit per il prossimo litigio? Scegli quello che farai davvero.',
        fonte: FONTE_COPPIA + 'time-out collaborativo e riparazione; Linehan (2015), DBT Skills Training Manual · tolleranza del disagio (TIP)',
        piano: true,
        opzioni: [
          { testo: 'Riconoscere i miei segnali: so quando l’onda sale.', spiegazione: 'Esempio: «mani strette, voce più veloce, “sempre” e “mai”». Sono i primi allarmi: se li conosci, puoi fermarti prima del picco. Scrivili nel piano, con le tue parole.' },
          { testo: 'La frase per chiedere la pausa, con l’ora del ritorno.', spiegazione: 'Esempio: «Sto salendo, ho bisogno di una pausa. Torno alle dieci». Già scritta, in un momento di calma, costa molta meno fatica che inventarla in mezzo al litigio. Meglio ancora se l’avete concordata insieme prima: così l’altra persona sa che la pausa non è un addio.' },
          { testo: 'Tre cose per calmare il corpo, durante la pausa.', spiegazione: 'Esempio: respiro lento, una camminata, una doccia tiepida. Poche, semplici, sempre le stesse: il corpo impara che quella è la strada per scendere. E durante la pausa niente processo nella testa: se parte, riportati al corpo.' },
          { testo: 'La frase per riparare, il giorno dopo.', spiegazione: 'Esempio: «Ieri ho alzato la voce. Mi dispiace. Ho bisogno che tu mi dica che ci sei». Una parte tua, una richiesta concreta. Se la scrivi adesso, domani sarà più facile dirla.' }
        ]
      }
    ],
    chiusura: {
      id: 'coppia-fine',
      domanda: 'Che cosa porti con te, stasera, da queste scene?',
      opzioni: [
        { testo: 'Un segnale che adesso riconosco.', spiegazione: 'Esempio: il caldo in faccia, la voce che sale. Riconoscerlo è già metà del lavoro: da lì, la prossima volta, hai un momento in più per scegliere.' },
        { testo: 'Una pausa detta, non sbattuta.', spiegazione: 'Una frase e un’ora. È poco, ed è la cosa che cambia di più: chi resta sa che tornerai, e tu puoi calmarti senza fare male a nessuno.' },
        { testo: 'Un po’ di paura che finisca male.', spiegazione: 'Ha senso, soprattutto se hai paura di perdere la persona con cui stai. La paura non è una previsione. Stanotte non c’è niente da risolvere: tienila per la pausa e per domani, e se è troppo forte apri «Stasera è dura» (di giorno «Oggi è dura»).' },
        { testo: 'Una cosa da dire domani, a mente più calma.', spiegazione: 'Tienila stretta: domani potrai dirla. Una parte tua, e una richiesta concreta all’altra persona. Ritrovarsi comincia da lì.' }
      ]
    }
  };

  /* Il piano per i litigi: campi, esempio (come segnaposto) e testo di riserva per «Stasera è dura» quando il piano non è ancora scritto. */
  window.Marsa.Coppia = {
    piano: {
      titolo: 'Il mio piano per i litigi',
      intro: 'Scrivilo a mente fredda, non durante un litigio, e se puoi con la persona con cui stai. Puoi cambiarlo quando vuoi. Resta solo sul tuo telefono.',
      campi: [
        { id: 'segnali', etichetta: 'I miei segnali', esempio: 'le mani si stringono, parlo più veloce, mi viene da dire «sempre» e «mai».', standard: '' },
        { id: 'pausa', etichetta: 'La frase per chiedere la pausa', esempio: '«Sto salendo, ho bisogno di una pausa. Non me ne vado: torno tra mezz’ora.»', standard: '«Sto salendo, ho bisogno di una pausa. Non me ne vado: torno tra venti minuti.»' },
        { id: 'durata', etichetta: 'Quanto dura la pausa e quando riprendiamo', esempio: 'mezz’ora. Alle dieci ci troviamo in cucina e ognuno dice come sta, per cinque minuti.', standard: 'Almeno venti minuti. Poi torno, dico se sono calma e ci diciamo come stiamo, per cinque minuti.' },
        { id: 'cose', etichetta: 'Tre cose da fare durante la pausa', esempio: 'una doccia tiepida; dieci minuti di cammino; respiro lento, dentro quattro e fuori sei.', standard: 'Respiro lento (dentro quattro, fuori sei); camminare o muovermi un po’; una bevanda calda. Non rifare il litigio nella testa.' },
        { id: 'ripara', etichetta: 'La frase per riparare', esempio: '«Ieri ho alzato la voce. Mi dispiace. Ho bisogno che tu mi dica che ci sei.»', standard: '' },
        { id: 'aiuta', etichetta: 'Che cosa mi aiuta dall’altra persona (da dirle a mente fredda)', esempio: 'se mi chiudo, non inseguirmi: dimmi che torni. Se alzo la voce, dimmi «ci sono, ma fermiamoci».', standard: '' }
      ]
    }
  };
})();
