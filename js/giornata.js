/* Approdo – i momenti della giornata: mattina («L’avvio»), pomeriggio («La pausa») e notte («Se sei sveglia»).
   La sera resta la serata a tema (contenuti.js, percorso.js, arrivo.js).
   Basi nelle fonti: la diary card bi-giornaliera dei gruppi GET (emozioni di mattina e di pomeriggio);
   i «Tre minuti di respiro» tre volte al giorno a orari fissi (Williams, Teasdale, Segal, Kabat-Zinn);
   DBT: PLEASE (pasti, movimento, sonno), costruire padronanza, accumulare emozioni positive ogni giorno,
   protocollo per il sonno (conteggio 9→0, alzarsi se calme ma sveglie, i «pensieri di mezzanotte»).
   Non è ripresa la parte TIP con acqua gelida, apnea o sforzo intenso.
   Testi originali in italiano, parafrasati: nessun passo è copiato.
   Le risposte si salvano per POSIZIONE (indice): dopo la pubblicazione non riordinare e non inserire voci in mezzo,
   aggiungi solo in fondo. Le emozioni usano l’elenco (e l’ordine) di arrivo.js: qui c’è solo il feedback di giorno.
   `azione` della notte: solo 'conta' | 'alzati' | 'respiro' | 'sensi' | 'sakina' | 'dura'. */
window.Approdo = window.Approdo || {};
window.Approdo.Giornata = {
  momenti: {
    mattina: { nome: 'Mattina', titolo: 'L’avvio della giornata', sotto: 'Come hai dormito, come stai e una sola cosa per oggi. Ci vogliono tre minuti.', fonte: 'DBT · PLEASE, padronanza, emozioni positive · diary card GET' },
    pomeriggio: { nome: 'Pomeriggio', titolo: 'Una pausa a metà giornata', sotto: 'Tre minuti di respiro e uno sguardo a come stai, prima della sera.', fonte: 'Tre minuti di respiro (Williams e colleghi) · DBT · diary card GET' },
    sera: { nome: 'Sera' },
    notte: { nome: 'Notte', titolo: 'Se sei sveglia', sotto: 'Niente esercizi lunghi: solo ciò che aiuta il corpo a riposare.', fonte: 'DBT · protocollo per il sonno' }
  },

  /* feedback di giorno per i tre livelli di tensione (indice 0, 1, 2) */
  tensione: [
    {
      titolo: 'Abbastanza calma, adesso',
      frase: 'Bene: con la tensione bassa la mente impara meglio e sceglie con più libertà. È il momento giusto per decidere che cosa fare, prima che sia la giornata a decidere per te.',
      fonte: 'DBT · regolazione emotiva'
    },
    {
      titolo: 'Un po’ tesa',
      frase: 'Il corpo è già un po’ in allerta, e ha senso. Questo è il momento più utile per intervenire: le abilità funzionano meglio quando la tensione è ancora a metà salita, non in cima.',
      passo: 'Tre respiri con l’espirazione più lunga dell’inspirazione, poi una cosa alla volta.',
      fonte: 'DBT · tolleranza del disagio'
    },
    {
      titolo: 'Molto tesa',
      frase: 'È tanto, e ha senso che sia difficile. Adesso non serve organizzare la giornata: serve aiutare il corpo a scendere. La tensione è un’onda: sale, arriva in cima e poi scende.',
      passi: [
        'Lascia uscire l’aria piano, più a lungo di quanto inspiri.',
        'Premi i piedi a terra e guarda tre cose intorno a te.',
        'Se puoi, rimanda di qualche ora le decisioni e le risposte importanti.'
      ],
      fonte: 'DBT · tolleranza del disagio'
    }
  ],

  /* feedback di giorno per le emozioni di arrivo.js (per id) */
  emozioni: {
    tristezza: { spiegazione: 'La tristezza, di giorno, chiede un po’ di lentezza, non di fermarsi del tutto. Restare a letto o al buio di solito la allarga; un movimento piccolo e un po’ di luce la accompagnano.', passo: 'Apri una finestra o esci due minuti alla luce del giorno.', fonte: 'DBT · azione opposta' },
    ansia: { spiegazione: 'L’ansia corre avanti: immagina la giornata intera e la riempie di cose che potrebbero andare male. Il corpo si prepara a pericoli che adesso non ci sono. Riportarla al presente la rende più piccola.', passo: 'Scegli solo la prossima cosa da fare, non tutta la giornata.', fonte: 'DBT · una cosa alla volta' },
    rabbia: { spiegazione: 'La rabbia segnala che un limite è stato toccato o che qualcosa di importante è bloccato: ha senso ascoltarla. Di giorno, però, si rischia di agire subito, con chi si ha davanti. Prima di rispondere, prenditi un po’ di tempo.', passo: 'Prima di rispondere a una persona o a un messaggio, aspetta dieci respiri.', fonte: 'DBT · regolazione emotiva' },
    vergogna: { spiegazione: 'La vergogna spinge a nasconderti e a non farti vedere. È dolorosa, e spesso pesa più di quanto il fatto meriti. Chiediti se riguarda qualcosa che hai fatto davvero o un giudizio su chi sei.', passo: 'Fai una cosa piccola restando visibile: un saluto, una risposta breve.', fonte: 'DBT · azione opposta' },
    colpa: { spiegazione: 'La colpa è utile quando indica qualcosa da riparare; diventa solo un peso quando non c’è niente da riparare, ma soltanto un giudizio su di te. Prova a distinguere le due cose.', passo: 'Se c’è da riparare, scegli un gesto piccolo per oggi; se no, dillo a te: «sentire non è una colpa».', fonte: 'DBT · verificare i fatti' },
    solitudine: { spiegazione: 'Sentirsi sole di giorno, anche in mezzo agli altri, è molto comune. Il bisogno di vicinanza è sano. Non serve una conversazione lunga: basta un contatto piccolo.', passo: 'Manda un messaggio breve a una persona, senza bisogno di una risposta subito.', fonte: 'Teoria dell’attaccamento (Bowlby)' },
    vuoto: { spiegazione: 'Il vuoto a volte è il sentire che si abbassa, dopo troppa emozione o troppa fatica. Non va riempito a ogni costo, ma accompagnato: una sensazione concreta riporta al presente.', passo: 'Tieni in mano qualcosa di caldo o di fresco e descrivilo con tre parole.', fonte: 'Mindfulness (DBT)' },
    delusione: { spiegazione: 'La delusione dice che ci tenevi. La mente può trasformare un episodio in una regola («va sempre così»): è un’ipotesi, non un fatto.', passo: 'Scrivi in una riga che cosa è successo davvero, e una seconda spiegazione possibile.', fonte: 'Mentalizzazione (MBT)' },
    gelosia: { spiegazione: 'La gelosia nasce dalla paura di perdere qualcuno che conta. Quando è forte, un’ipotesi sembra subito un fatto. Darti tempo protegge te e il legame.', passo: 'Prima di scrivere o di chiedere, aspetta un’ora e rileggi i fatti.', fonte: 'Mentalizzazione (MBT)' },
    stanca: { spiegazione: 'Un corpo stanco regge meno le onde della giornata: le emozioni arrivano più forti e più in fretta. Non è debolezza, è il corpo. Curare le basi è già regolazione emotiva.', passo: 'Un bicchiere d’acqua e qualcosa da mangiare, se non l’hai fatto. Se riposi, dieci minuti al massimo.', fonte: 'DBT · PLEASE' },
    sollievo: { spiegazione: 'Notare il sollievo è prezioso: impari che cosa ti aiuta, e il corpo se lo ricorda. È anche un’emozione da gustare, non solo da registrare.', passo: 'Resta tre respiri dentro il sollievo e nota dove lo senti.', fonte: 'DBT · accumulare emozioni positive' },
    gratitudine: { spiegazione: 'La gratitudine allarga lo sguardo: oltre a ciò che manca, vede ciò che c’è. Non cancella la fatica, le sta accanto.', passo: 'Pensa a chi o a che cosa sei grata e, se ti va, diglielo.', fonte: 'DBT · accumulare emozioni positive' }
  },

  /* «Tre minuti di respiro»: tre fasi da un minuto */
  treMinuti: {
    intro: 'Un minuto per fase, tre in tutto. A occhi aperti, con lo sguardo appoggiato su un punto, oppure chiusi se ti fa stare bene.',
    fasi: [
      { titolo: 'Che cosa c’è, adesso', testo: 'Fermati e chiediti: che pensieri ci sono? Che emozioni? Che cosa sente il corpo? Non cambiare niente: nota e basta.' },
      { titolo: 'Il respiro', testo: 'Porta l’attenzione al respiro, nella pancia: l’aria che entra, l’aria che esce. Se la mente scappa, riportala qui con gentilezza.' },
      { titolo: 'Il corpo intero', testo: 'Allarga l’attenzione a tutto il corpo: la postura, il viso, le mani. Poi, piano, torna alla giornata.' }
    ],
    fonte: 'Tre minuti di respiro · Williams, Teasdale, Segal, Kabat-Zinn'
  },

  mattina: {
    /* stesso ordine e stessi id del sonno in arrivo.js */
    sonno: [
      { id: 'poco', testo: 'Ho dormito poco', spiegazione: 'Dopo una notte corta le emozioni arrivano più forti e più in fretta: un cervello stanco frena meno. Saperlo aiuta. Oggi trattati come si tratta chi ha dormito poco: richieste più piccole. Un riposo lungo di giorno, però, ruba il sonno della notte dopo.', passo: 'Esci alla luce del mattino per qualche minuto; se ti serve un riposo, dieci minuti al massimo.', fonte: 'DBT · PLEASE e protocollo per il sonno' },
      { id: 'pezzi', testo: 'A pezzi, mi svegliavo', spiegazione: 'Un sonno a pezzi stanca quasi quanto un sonno corto, e succede spesso quando la mente resta in allerta. Stamattina il corpo ha bisogno di ritmo: alzarsi all’ora di sempre aiuta a dormire meglio la notte che viene.', passo: 'Fai colazione, anche piccola, e stasera tieni l’orario di sempre per andare a letto.', fonte: 'DBT · protocollo per il sonno' },
      { id: 'abbastanza', testo: 'Abbastanza bene', spiegazione: 'Bene: un corpo riposato regge meglio le onde della giornata. Il sonno è una delle basi dell’equilibrio emotivo.', passo: 'Proteggilo anche stasera, con l’orario di sempre.', fonte: 'DBT · PLEASE' }
    ],
    /* una sola cosa per oggi */
    cosa: [
      { id: 'pasti', testo: 'Mangiare a orari regolari', spiegazione: 'Saltare i pasti abbassa le energie e alza l’irritabilità: le emozioni arrivano più forti. Mangiare con regolarità è una delle basi che, in DBT, riducono la vulnerabilità emotiva.', passo: 'Decidi adesso a che ora pranzerai.', fonte: 'DBT · PLEASE' },
      { id: 'muovermi', testo: 'Muovermi un po’, alla luce', spiegazione: 'Il movimento e la luce del giorno aiutano l’umore e anche il sonno della notte dopo. Non serve fare sport: basta muoversi un po’ ogni giorno, a passo tranquillo.', passo: 'Una camminata di dieci minuti, anche intorno a casa.', fonte: 'DBT · PLEASE' },
      { id: 'piacevole', testo: 'Una cosa piacevole, piccola', spiegazione: 'In DBT si consiglia di fare ogni giorno almeno una cosa piacevole: le emozioni positive non arrivano da sole, si costruiscono. Va bene anche una cosa minuscola.', passo: 'Scegli adesso quale: una musica, un caffè fuori, una pagina di un libro.', fonte: 'DBT · accumulare emozioni positive' },
      { id: 'capace', testo: 'Una cosa che mi faccia sentire capace', spiegazione: 'Fare ogni giorno qualcosa di un poco difficile, ma possibile, costruisce il senso di «ce la posso fare». In DBT si chiama costruire padronanza: un gradino alla volta, non tutta la scala.', passo: 'Scegli una cosa che rimandi da tempo e fanne solo il primo pezzo.', fonte: 'DBT · costruire padronanza' },
      { id: 'contatto', testo: 'Un contatto con una persona', spiegazione: 'Le relazioni sono una base sicura: un contatto piccolo e regolare protegge più di una lunga conversazione ogni tanto.', passo: 'Decidi a chi scrivere oggi e che cosa: bastano due righe.', fonte: 'Teoria dell’attaccamento (Bowlby)' },
      { id: 'arrivare', testo: 'Solo arrivare a stasera', spiegazione: 'Ci sono giornate in cui il compito è solo attraversarle. Va bene: anche questa è una scelta, ed è valida. Riduci le richieste e tieni vicino ciò che ti aiuta.', passo: 'Scegli una cosa che puoi rimandare senza danno, per alleggerire la giornata.', fonte: 'DBT · tolleranza del disagio' },
      { id: 'prepararmi', testo: 'Prepararmi a un momento difficile', spiegazione: 'In DBT si chiama «prepararsi in anticipo» (cope ahead): se sai che oggi arriverà una situazione dura, la provi prima nella mente, con calma, e scegli già che cosa farai. Quando arriva, il corpo riconosce la strada.', passo: 'Pensa al momento, scegli una sola abilità da usare (per esempio tre espirazioni lunghe o uscire per due minuti) e immagina di usarla, a occhi aperti.', fonte: 'DBT · prepararsi in anticipo (Linehan)' },
      { id: 'valore', testo: 'Un gesto per una cosa che conta per me', spiegazione: 'I valori sono le direzioni che danno senso alla vita: gentilezza, cura, coraggio, fede, bellezza. In DBT costruire una vita degna di essere vissuta passa anche da piccoli gesti coerenti con i propri valori, ogni giorno, al di là di come va la giornata.', passo: 'Scegli un valore e un gesto minuscolo che lo rispetti; stasera ricordati di averlo fatto.', fonte: 'DBT · una vita degna di essere vissuta (Linehan)' }
    ]
  },

  pomeriggio: {
    /* il corpo a metà giornata (fino a tre risposte) */
    corpo: [
      { id: 'pasto', testo: 'Ho saltato un pasto', spiegazione: 'Con lo stomaco vuoto la tensione sale più in fretta e tutto sembra più grande. Non è un difetto di carattere: è il corpo.', passo: 'Mangia qualcosa adesso, anche poco.', fonte: 'DBT · PLEASE' },
      { id: 'acqua', testo: 'Ho bevuto poco', spiegazione: 'Anche bere poco dà stanchezza, mal di testa e irritabilità, e le emozioni si fanno più pesanti.', passo: 'Un bicchiere d’acqua, adesso.', fonte: 'DBT · PLEASE' },
      { id: 'ferma', testo: 'Sono stata ferma tutto il tempo', spiegazione: 'Restare ferme a lungo rende il corpo pesante e la mente più incline a rimuginare.', passo: 'Alzati e fai qualche passo per due minuti, guardando fuori.', fonte: 'DBT · PLEASE' },
      { id: 'stanca', testo: 'Sono stanca', spiegazione: 'La stanchezza del pomeriggio è normale. Un riposo breve aiuta; uno lungo ruba il sonno della notte.', passo: 'Se riposi, metti una sveglia: dieci minuti, non di più.', fonte: 'DBT · protocollo per il sonno' },
      { id: 'bene', testo: 'Il corpo sta abbastanza bene', spiegazione: 'Bene: un corpo curato regge meglio le onde. Notalo, così te lo ricordi anche nei giorni più faticosi.', fonte: 'DBT · PLEASE' }
    ],
    /* com’è andata la cosa scelta stamattina */
    verifica: [
      { id: 'fatta', testo: 'L’ho fatta', spiegazione: 'Bene. Riconoscerlo conta: la mente tende a dimenticare i passi riusciti e a ricordare le difficoltà. Dillo a te, anche a bassa voce: «l’ho fatto».', fonte: 'DBT · costruire padronanza' },
      { id: 'incorso', testo: 'Ci sto lavorando', spiegazione: 'Va bene: c’è ancora tempo. Le cose si fanno a pezzi, non tutte insieme.', passo: 'Scegli il prossimo pezzo e quando lo farai.', fonte: 'DBT · costruire padronanza' },
      { id: 'nonancora', testo: 'Non ancora', spiegazione: 'Non è un fallimento: è un’informazione. Forse la cosa era troppo grande per oggi, o la giornata troppo piena.', passo: 'Rendila più piccola: la sua versione da cinque minuti.', fonte: 'DBT · costruire padronanza' },
      { id: 'nongiornata', testo: 'Oggi non è giornata', spiegazione: 'Ci sono giorni in cui basta arrivare in fondo. Lasciarla andare oggi è una scelta, non una sconfitta.', passo: 'Riprendila domani, uguale o più piccola.', fonte: 'DBT · tolleranza del disagio' }
    ]
  },

  notte: {
    motivi: [
      { id: 'addormentarmi', testo: 'Non riesco ad addormentarmi', azione: 'conta', spiegazione: 'Succede, e non è una catastrofe: anche riposare senza dormire fa bene al corpo. Più ci si sforza di dormire, più il sonno si allontana. Dai invece alla mente un compito lento e un po’ noioso.', passo: 'Conta i respiri all’indietro: espira dicendo «nove», poi «otto», fino a zero. Poi ricomincia da otto, e così via.', fonte: 'DBT · protocollo per il sonno' },
      { id: 'sveglia', testo: 'Mi sono svegliata e non riprendo sonno', azione: 'alzati', spiegazione: 'Se dopo una mezz’ora sei calma ma ben sveglia, rigirarti nel letto insegna al corpo che il letto è un posto di veglia. Meglio alzarsi per poco e tornare quando arriva il sonno.', passo: 'Vai in un’altra stanza con una luce bassa e fai qualcosa di tranquillo, lontano dal telefono. Torna a letto appena senti sonno.', fonte: 'DBT · protocollo per il sonno' },
      { id: 'pensieri', testo: 'I pensieri girano', azione: 'respiro', spiegazione: 'Di notte i pensieri sono più cupi e più grandi: la mente stanca vede peggio. I pensieri di mezzanotte non sono quelli di domattina: domani li guarderai con altri occhi. Non serve risolverli adesso.', passo: 'Scrivi il pensiero su un foglio, in una riga, «per domani». Poi torna al respiro, con l’espirazione lunga.', fonte: 'DBT · protocollo per il sonno' },
      { id: 'sogno', testo: 'Un brutto sogno', azione: 'sensi', spiegazione: 'Dopo un brutto sogno il corpo resta in allarme, come se fosse successo davvero. Aiuta ricordargli dove sei e che cosa è vero adesso.', passo: 'Accendi una luce bassa, di’ a voce dove sei e che ore sono, e nomina tre cose che vedi.', fonte: 'DBT · radicamento nel presente' },
      { id: 'sola', testo: 'Mi sento sola', azione: 'sakina', spiegazione: 'Di notte la solitudine pesa di più, perché il mondo tace e sembra che non ci sia nessuno. Le persone che ti vogliono bene ci sono anche mentre dormono.', passo: 'Pensa a una persona e prepara un messaggio da mandarle domattina. Se ti aiuta, ascolta una voce calma.', fonte: 'Teoria dell’attaccamento (Bowlby)' },
      { id: 'lontana', testo: 'Mi sento lontana, come dietro un vetro', azione: 'sensi', spiegazione: 'A volte, con troppa tensione o troppa stanchezza, la mente abbassa il volume e ci si sente staccate da sé o dal mondo. È una protezione, non un pericolo in sé. Aiuta tornare a ciò che è concreto, a occhi aperti.', passo: 'Luce accesa, piedi a terra, una cosa da toccare: descrivila a voce bassa.', fonte: 'DBT · radicamento nel presente' },
      { id: 'male', testo: 'Sto molto male e ho paura di farmi del male', azione: 'dura', crisi: true, spiegazione: 'Grazie di essere venuta qui. È un momento molto difficile, e si attraversa un passo alla volta. Adesso conta una cosa sola: superare i prossimi minuti al sicuro.', passo: 'Allontana da te ciò che potrebbe farti male e apri «Stasera è dura»: ci sono il tuo piano e le tue persone.', fonte: 'DBT · tolleranza del disagio' }
    ]
  }
};
