/* Marsa – la pagina «Quando litighiamo», da consultare quando si vuole (dalle «Sere» e dalla lettura del tema «Abbiamo litigato»).
   Un esempio concreto di serata in vista, poi sette voci da aprire. Stessa struttura di js/accettare.js.
   Testi originali in italiano, parafrasati dalle fonti cliniche: nessun passo è copiato. Genere neutro per l’altra persona.
   `fonte` è mostrata in piccolo in fondo alla pagina. */
window.Marsa = window.Marsa || {};
window.Marsa.Litigi = {
  lede: 'Litigare, in una coppia, è normale. Quello che pesa è come si litiga e come ci si ritrova. Qui è spiegato piano, partendo da una serata. Da leggere quando vuoi, senza dover rispondere a niente.',
  esempio: {
    titolo: 'Cominciamo da una serata',
    testo: [
      'Sono le nove. Torni a casa stanca e trovi i piatti ancora nel lavandino. Dici: «Ma possibile che non lo fai mai?».',
      'La persona con cui stai risponde: «Eccoti, sempre a dire che sbaglio tutto». La voce sale, da tutte e due le parti. In dieci minuti non si parla più dei piatti: si parla di chi non ascolta mai e di chi pretende sempre.',
      'A un certo punto una frase fa più male delle altre: «Sei impossibile». L’altra persona si gira e va in camera, senza una parola. Tu resti con il cuore che batte forte e un pensiero: «Se ne va. È finita».',
      'Niente di tutto questo parla dei piatti. Qui sotto vediamo che cosa è successo, passo per passo, e che cosa si può fare in un altro modo.'
    ]
  },
  voci: [
    {
      id: 'onda', titolo: 'L’onda sale, e il corpo si allaga',
      testo: [
        'Quando l’emozione è molto alta, il corpo va in allarme: il cuore accelera, la gola si stringe, la voce sale, lo sguardo si restringe. In quel momento ascoltare e ragionare è quasi impossibile. Si chiama flooding, essere inondati.',
        'In più, quando l’onda sale, riaffiorano altre volte in cui ti sei sentita così: «e quella volta…», «come sempre…». La serata sembra più grande, e i pensieri diventano neri o bianchi, senza vie di mezzo.',
        'Per questo, a onda alta, continuare a parlare non serve: si parla per due cose diverse. E quando senti la spinta a colpire o a rompere qualcosa, non è il momento di parlare: è il momento di uscire dalla stanza.',
        'I tuoi segnali sono personali: mani che si stringono, voce più veloce, caldo in faccia, la parola «sempre» che spunta. Conoscerli è il primo pezzo del piano: sono l’allarme che ti dà un momento in più per scegliere.'
      ]
    },
    {
      id: 'cavalieri', titolo: 'I quattro segnali che peggiorano tutto',
      testo: [
        'Il terapeuta di coppia John Gottman, studiando molte coppie, ha notato quattro modi di litigare che fanno più danno. Li ha chiamati i quattro cavalieri. Non sono condanne: tutte le coppie li usano ogni tanto. Servono per accorgersi.',
        'La critica: attaccare la persona invece del fatto. «Sei egoista» al posto di «Mi è dispiaciuto che tu uscissi senza dirmelo». Il rimedio è parlare di sé: che cosa è successo e come ti sei sentita.',
        'Il disprezzo: parlare da sopra, con sarcasmo, occhi al cielo, insulti. È il più dannoso, perché fa sentire l’altra persona senza valore. Il rimedio non è solo evitarlo: è metterci rispetto e apprezzamento, anche per le cose piccole.',
        'La difesa: rispondere a un’accusa con un’altra accusa, o con «io non c’entro». «E tu allora?». Il rimedio è prendersi un pezzetto di responsabilità, anche piccolo: «Hai ragione, sono arrivata tardi».',
        'Il muro: chiudersi e smettere di rispondere, come una parete. Il rimedio è calmare il corpo e restare presente: se non ci riesci, chiedere una pausa a voce alta, che è un’altra cosa.'
      ]
    },
    {
      id: 'pausa', titolo: 'La pausa e il muro',
      testo: [
        'La pausa è un accordo: ci fermiamo, ci calmiamo e torniamo. Si chiama anche time-out, tempo fuori. Funziona se c’è una cosa che il muro non ha: si dice ad alta voce, e si dice quando si torna.',
        'Esempio: «Sto salendo, ho bisogno di una pausa. Non me ne vado: torno alle dieci». È diverso dallo sbattere la porta, dallo sparire o dal restare in silenzio gelido, che sono modi di punire. Chi resta, con la pausa detta, sa che non è un addio. Per chi ha paura dell’abbandono, questa frase vale molto.',
        'Almeno venti minuti: prima di tanto il corpo non scende. Durante la pausa ti occupi del corpo, con respiro lento, una camminata, la doccia tiepida, un po’ d’acqua fredda sul viso se ti fa bene (è il TIP: temperatura, intensità, respiro lento). Acqua fredda e sforzo fisico: evitali se hai problemi di cuore o di battito, se prendi farmaci che rallentano il cuore, se sei in gravidanza, se hai un disturbo alimentare o allergia al freddo.',
        'E non continui il processo nella testa. Rifare il litigio da sola, preparando le risposte, tiene l’onda alta. Se parte, riportati al corpo.',
        'Se è l’altra persona a chiedere la pausa, lasciala andare e non inseguirla: non è un rifiuto. È meglio decidere la frase e le regole insieme, quando non c’è nessun litigio.'
      ]
    },
    {
      id: 'giro', titolo: 'Il vostro giro',
      testo: [
        'Esempio: l’altra persona è silenziosa tutta la sera. Dentro di te sale la paura: «non ci tiene più a me». Chiedi, controlli, poi attacchi: «dimmi qualcosa!». L’altra persona si sente messa alle strette e si chiude ancora di più. La tua paura peggiora. Premi di più.',
        'Questo è il giro: una paura (che l’altra persona se ne vada) → una mossa che prova a tenerla vicina (controllo o attacco) → l’altra persona si difende o si chiude → la paura cresce. Nelle terapie di coppia si chiama a volte il ciclo di richiesta e ritiro. Nessuno è il cattivo: sono due modi di proteggersi che si incastrano.',
        'Capita anche di passare, nella stessa sera, dal «è finita» al «ti voglio bene, scusami». Quando l’emozione è alta, la mente tiene una verità per volta, e quella verità è quella dell’onda. In quel momento parla la paura, non la verità su di voi.',
        'Se ti suona familiare il pensiero «se litighiamo, il rapporto è rovinato», lo trovi anche nel tema Relazioni del giovedì, tra le domande «Mito o realtà?». Un litigio non è per forza una rottura: conta come ci si ritrova.',
        'Il giro si vede meglio a mente fredda. Provate a scriverlo insieme, in quattro frasi: la mia paura, che cosa faccio, che cosa fai tu, che cosa succede dopo.'
      ]
    },
    {
      id: 'riparare', titolo: 'Riparare, il giorno dopo',
      testo: [
        'Dopo una serata così, spesso resta una domanda: «e adesso?». Riparare non vuol dire dimenticare: vuol dire tornare, a mente più calma, e dirsi che il legame c’è ancora.',
        'Primo: riconosci la tua parte, concreta e piccola. «Ieri ho alzato la voce e ti ho detto cose per farti male. Mi dispiace.» Non serve «è tutta colpa mia». E fai attenzione alla vergogna: «sono un disastro» ti spinge a nasconderti o ad attaccare di nuovo. «Ho fatto una cosa che ha fatto male» ti lascia in piedi.',
        'Secondo: chiedi vicinanza in modo concreto. Sotto la rabbia c’è quasi sempre un bisogno. «Ho bisogno che tu mi dica che ci sei» si accoglie più facilmente di «tanto non ti importa». Nelle terapie focalizzate sulle emozioni si chiama ammorbidirsi: far vedere la parte spaventata e non quella arrabbiata.',
        'Terzo: prima di spiegare la tua versione, ascolta l’altra. Prova a dirla con parole tue finché senti «sì, è così». Poi tocca a te.',
        'Se oggi non ce la fai, non lasciar cadere tutto nel silenzio: di’ quando ci torni. «Ne parliamo domani dopo cena» è già una riparazione.'
      ]
    },
    {
      id: 'accettare', titolo: 'Prima capirsi, poi accordarsi',
      testo: [
        'Nella terapia degli schemi di coppia c’è un principio semplice: l’accettazione viene prima dell’accordo. Accettare vuol dire riconoscere come l’altra persona ha vissuto la cosa: «Capisco che per te quella frase era un attacco». Non vuol dire dare ragione.',
        'Esempio: dopo un litigio sul denaro, la prima cosa non è decidere chi ha ragione: è dire «vedo che per te era importante sentire che qualcuno ti ascoltava». Quando ci si sente capiti, l’allarme cala, e l’accordo diventa possibile. Senza, ogni accordo è una resa.',
        'È la stessa idea dell’accettazione radicale: riconoscere un fatto senza lottarci contro, senza approvarlo. Se ti interessa, c’è la pagina dedicata, nelle «Sere».',
        'E non serve essere sempre d’accordo. Due persone possono restare diverse su alcune cose e stare bene insieme, se si sentono capite.'
      ]
    },
    {
      id: 'paura', titolo: 'Se hai paura, o se non basta',
      testo: [
        'Questa pagina e le scene di Marsa parlano di litigi in cui tutte e due le persone possono fermarsi e tornare. Se hai paura di come reagisce l’altra persona, se ti ha mai fatto male, minacciata o impedito di uscire, la pausa e l’ascolto non bastano: parlane con chi ti segue o con una persona di cui ti fidi. Non è colpa tua e non devi restare sola.',
        'Se è la spinta a fare male a te o all’altra persona a spaventarti, apri «Stasera è dura» (di giorno «Oggi è dura»): c’è un percorso per calmare il corpo, e il tuo piano di sicurezza.',
        'E se l’onda è alta ogni volta, o i litigi diventano ogni settimana peggio, portalo a chi ti segue: non è un fallimento tuo, è un segnale che serve più sostegno.'
      ]
    }
  ],
  fonte: 'Lebow e Snyder (a cura di, 2023), Clinical Handbook of Couple Therapy · time-out collaborativo (intervento sul comportamento), terapia di coppia di Gottman (i quattro segnali e i loro rimedi, calmare il corpo, ascolto prima della persuasione) e terapia focalizzata sulle emozioni (ciclo di richiesta e ritiro, ammorbidirsi); Simeone-DiFrancesco, Roediger e Stevens (2015), Schema Therapy with Couples · flooding, accettazione prima dell’accordo; Linehan (2015), DBT Skills Training Manual · tolleranza del disagio (TIP)'
};
