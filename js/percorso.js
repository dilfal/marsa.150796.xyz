/* Approdo – il percorso della sera: scene a scelta (singola o multipla) con spiegazione psicoeducativa immediata,
   una domanda di chiusura e un riepilogo di ciò che è emerso (non un punteggio, non una diagnosi).
   Testi originali (parafrasi delle fonti cliniche), nessun passo copiato. Le risposte si salvano per posizione (indice) in ogni elenco di opzioni: dopo la pubblicazione non riordinare e non inserire voci in mezzo, aggiungi solo in fondo.
   `tag` di ogni opzione → voce di `riepilogo` dello stesso tema. `crisi: true` → l’app propone «Stasera è dura». */
window.Approdo = window.Approdo || {};
window.Approdo.Percorso = {
  /* ---------------- domenica: Base sicura ---------------- */
  base: {
    scene: [
      {
        id: 'base-1', tipo: 'riconosci', multi: false,
        domanda: 'È domenica sera. Pensi alla settimana che arriva e senti un piccolo vuoto. Che cosa ti viene da fare, di solito?',
        fonte: 'Bowlby (1989), Una base sicura · figura di attaccamento e base sicura; Bateman e Fonagy (2016), Mentalization-Based Treatment for Personality Disorders · attivazione e disattivazione dell’attaccamento; Visintini (a cura di, 2024), Il modello GET per la personalità borderline · tempo vuoto e fine settimana',
        opzioni: [
          { testo: 'Scrivo a qualcuno, anche solo per sentire che c’è.', tag: 'cerca', spiegazione: 'Cercare una voce amica quando arriva il vuoto è il sistema di attaccamento (la spinta a cercare vicinanza e conforto quando stiamo male) che funziona: cerchi una base sicura, cioè qualcuno da cui partire e a cui tornare. Il costo è che, se la risposta tarda, quel sistema si iperattiva (si accende ancora di più) e il vuoto cresce. Puoi allargare gli appoggi: una persona, ma anche un posto, una musica, un’abitudine che ti fa bene.' },
          { testo: 'Mi chiudo in casa e aspetto che passi.', tag: 'dasola', spiegazione: 'Ritirarsi è un modo di disattivare il bisogno di vicinanza: riduci la ricerca dell’altro per non rischiare una delusione. Protegge e costa poca energia quando sei stanca. Il costo è che, da sola, il vuoto può ingrandirsi. Una curiosità gentile: c’è una cosa piccola che ti fa sentire accompagnata anche senza uscire? Una coperta, l’audio della buonanotte, un messaggio da mandare domani.' },
          { testo: 'Riempio la serata di cose da fare, così non ci penso.', tag: 'dasola', spiegazione: 'Tenersi occupata è evitamento (si riempie il tempo per non sentire) e per un po’ funziona. Il rischio è arrivare a letto stanca, con il vuoto ancora lì, solo rimandato: il tempo senza struttura, soprattutto nel fine settimana, è proprio dove il vuoto si sente di più. Prova a lasciargli cinque minuti: di che cosa avresti bisogno questa settimana? Scegli una sola cosa buona da fare per te.' },
          { testo: 'Guardo alla settimana e scelgo una piccola cosa buona.', tag: 'costruisce', spiegazione: 'Guardare avanti scegliendo un solo punto è pianificare in anticipo un’attività che ti sostiene: non serve organizzare tutto, e dà ai giorni più fragili qualcosa a cui appoggiarsi, con un po’ di senso di padronanza (la sensazione di avere in mano la situazione). Se ti viene naturale, riconoscitelo. Se è un’abitudine nuova e costa fatica, va bene lo stesso: pensarci è già un inizio. Puoi aggiungere una persona da cercare, anche solo con un messaggio.' }
        ]
      },
      {
        id: 'base-2', tipo: 'riconosci', multi: false,
        domanda: 'Nel gruppo qualcuno racconta una cosa molto simile a quella che vivi tu. Senti un nodo in gola. Qual è la tua prima reazione?',
        fonte: 'Visintini (a cura di, 2024), Il modello GET per la personalità borderline · gruppo omogeneo, appartenenza e condivisione',
        opzioni: [
          { testo: 'Resto in silenzio: ho paura di dire troppo.', tag: 'dasola', spiegazione: 'Quando ti senti esposta, il silenzio è una protezione sensata: il corpo dice «non so ancora se posso fidarmi». Nel gruppo nessuno ti chiede di dire tutto subito: la fiducia si costruisce a piccole dosi, un passo alla volta. Puoi provare con una frase minima, anche solo «mi ci ritrovo». È un mattone, non una confessione.' },
          { testo: 'Parlo subito, tanto, e poi me ne pento.', tag: 'cerca', spiegazione: 'Quando qualcosa ci tocca, l’attivazione emotiva (quanto intensamente il corpo e la mente reagiscono) sale e le parole escono tutte insieme: è il bisogno di essere viste. Il pentimento che arriva dopo è spesso vergogna, cioè la paura di aver mostrato troppo, più che un errore vero. Il gruppo è proprio un luogo dove si può sbagliare e ritrovarsi. Se ti va, puoi dire anche come ti senti dopo aver parlato.' },
          { testo: 'Penso che la mia storia sia peggiore, o meno importante.', tag: 'dubita', spiegazione: 'Il confronto arriva quasi da solo e spesso nasconde una domanda: «c’è posto anche per me?». Il dolore non si misura in classifica: ciò che senti è valido anche quando è diverso da quello degli altri (validazione vuol dire riconoscere che un’emozione ha senso, data la tua storia). Una curiosità gentile: che cosa ti ha toccato, esattamente, in quel racconto?' },
          { testo: 'Mi sento meno sola: allora non sono l’unica.', tag: 'cerca', spiegazione: 'Sentirti meno sola è l’effetto del riconoscimento reciproco: tra persone con vissuti simili ti senti accolta e compresa, e questo scioglie un po’ di vergogna. È la base sicura in azione: un luogo dove ciò che vivi ha un posto. Puoi tenere questa sensazione come un ricordo da riprendere nei giorni difficili. E, se ti va, dirla al gruppo: può far bene anche agli altri.' }
        ]
      },
      {
        id: 'base-3', tipo: 'mito', multi: false,
        domanda: 'Se ho bisogno degli altri, vuol dire che sono debole.',
        fonte: 'Bowlby (1989), Una base sicura · l’attaccamento dura tutta la vita',
        opzioni: [
          { testo: 'È vero', tag: 'dasola', spiegazione: 'Molte persone lo pensano, soprattutto se hanno imparato presto a cavarsela da sole, perché chiedere sembrava rischioso. Ma l’attaccamento, cioè il bisogno di vicinanza e di cure, accompagna tutta la vita, non solo l’infanzia: Bowlby tiene a dire che chiamarlo «infantile» o «regressivo» è un errore. Avere una base a cui tornare rende più capaci di partire ed esplorare. Chiedere appoggio è un’abilità, non una debolezza.' },
          { testo: 'È falso', tag: 'cerca', spiegazione: 'È così, anche se non sempre si riesce a sentirlo: il bisogno può fare paura, specie se in passato la vicinanza è stata incerta. Per Bowlby il desiderio di cure e di conforto, quando si sta male, è naturale a ogni età. Avere una base a cui tornare rende più capaci di esplorare, non più deboli. Chiedere appoggio è un’abilità, e si allena.' },
          { testo: 'Dipende, non so', tag: 'dubita', spiegazione: 'Il dubbio è onesto: a volte ci si appoggia così tanto da avere paura di perdersi. Ma il bisogno in sé non è debolezza: l’attaccamento riguarda tutte le persone, per tutta la vita. Aiuta avere più appoggi invece di uno solo (così la mancanza di uno non ti lascia senza niente) e poter sempre tornare anche a te stessa. Chiedere appoggio è un’abilità, non una debolezza.' }
        ]
      },
      {
        id: 'base-4', tipo: 'kit', multi: true,
        domanda: 'Su chi o su che cosa potresti appoggiarti questa settimana? Spunta tutto ciò che c’è, anche se è piccolo.',
        fonte: 'Bowlby (1989), Una base sicura · la vita come escursioni a partire da una base sicura; Linehan (2015), DBT Skills Training Manual · calmarsi con i cinque sensi',
        opzioni: [
          { testo: 'Una persona a cui posso mandare un messaggio.', tag: 'cerca', spiegazione: 'Basta una persona, e basta un messaggio. Non deve risolvere niente: sapere che c’è è già un appoggio, perché la vicinanza di una figura fidata abbassa l’allarme. Se vuoi, scegli adesso il giorno in cui scriverle.' },
          { testo: 'Il gruppo o la terapia, dove posso portare ciò che vivo.', tag: 'cerca', spiegazione: 'Un luogo dove ciò che vivi ha un posto è una base vera: lì puoi esplorare ciò che senti con qualcuno che non giudica. Puoi tenere a mente una cosa piccola da portarci questa settimana, anche solo come ti sei sentita.' },
          { testo: 'Un posto che mi fa stare bene: una stanza, una panchina, un angolo.', tag: 'costruisce', spiegazione: 'Anche i luoghi fanno da base: ci si torna e il corpo associa quel posto alla calma, come un richiamo che lo riporta a uno stato di sicurezza. Puoi andarci di proposito nel giorno che temi di più.' },
          { testo: 'Un’abitudine mia: una passeggiata, un pasto con calma.', tag: 'costruisce', spiegazione: 'Le abitudini buone sono appoggi che porti sempre con te: attività regolari e piacevoli che sostengono l’umore senza dipendere da nessuno. Non serve farle ogni giorno: una volta in settimana è già un mattone.' },
          { testo: 'Un animale, una musica, una coperta.', tag: 'costruisce', spiegazione: 'Le cose semplici contano: un animale che ti cerca, una musica conosciuta, una coperta morbida. Sono modi di calmarti con i sensi (tatto, udito, vista) e agiscono sul corpo prima ancora che sulla mente.' },
          { testo: 'Per ora non trovo niente, e va bene dirlo.', tag: 'dubita', spiegazione: 'Dirlo con sincerità ha valore. A volte la base c’è ma non si vede, a volte va costruita da capo, e si può fare a piccoli passi. Puoi partire da qui: il letto o la sedia che stasera ti sostengono sono già un primo appoggio.' }
        ]
      }
    ],
    chiusura: {
      id: 'base-fine',
      domanda: 'Prima di dormire: su chi o su che cosa hai potuto appoggiarti questa settimana?',
      opzioni: [
        { testo: 'Su una persona che c’è stata.', tag: 'cerca', spiegazione: 'Che bello che ci sia stata. Il ricordo di una persona che c’è stata può calmare anche a distanza: puoi tenerlo vicino, stanotte. Non sei sola, anche quando non è qui.' },
        { testo: 'Su una piccola cosa mia: un posto, un gesto, un’abitudine.', tag: 'costruisce', spiegazione: 'Hai già degli appoggi tuoi, che ti porti dietro: sono modi di calmarti da sola senza chiudere fuori gli altri. È una base che nessuno ti toglie. Stanotte puoi riposare anche su questo.' },
        { testo: 'Soprattutto su me stessa.', tag: 'dasola', spiegazione: 'Hai retto molto, e questo dice quanta forza hai. Ma reggere tutto da sola costa: stanotte puoi lasciare che il letto ti sostenga al posto tuo. E la settimana che arriva può avere anche un appoggio in più.' },
        { testo: 'Non lo so ancora, ma vorrei cercare.', tag: 'dubita', spiegazione: 'Voler cercare è già un passo: è il bisogno di vicinanza che si rimette in moto. Non serve trovare la risposta stasera. Per ora basta appoggiare la schiena e respirare piano: domani ci sarà tempo.' }
      ]
    },
    riepilogo: {
      cerca: { frase: 'Stasera ti sei riconosciuta soprattutto nella ricerca di vicinanza: quando arriva il vuoto, ti rivolgi a qualcuno. È il sistema di attaccamento al lavoro, ed è sano. L’unica attenzione è non far dipendere tutto da una sola risposta.', domani: 'Manda un messaggio breve a una persona che ti fa bene: «ti pensavo». Poi non stare ad aspettare la risposta: fai altro.' },
      dasola: { frase: 'Stasera ti sei riconosciuta soprattutto nel fare da sola, cioè nel ridurre il bisogno degli altri per proteggerti dalle delusioni. Ti ha protetta a lungo, e ha un senso; ma non devi portare tutto tu.', domani: 'Scegli una cosa piccola da chiedere a qualcuno, anche solo un consiglio, e chiedila: è un esperimento a basso rischio, per vedere che cosa succede.' },
      costruisce: { frase: 'Stasera ti sei riconosciuta soprattutto nel costruire piccoli appoggi: posti, abitudini, gesti tuoi. Sono mattoni veri, perché ti calmano anche quando nessuno è vicino.', domani: 'Fai per due minuti una delle cose che ti sostengono (una musica, un tè, la finestra aperta) e nota come cambia il corpo.' },
      dubita: { frase: 'Stasera ti sei riconosciuta soprattutto nel dubbio: «c’è posto anche per me?». Nasce dalla paura di non contare, e merita ascolto, non vergogna.', domani: 'Scrivi il nome di un posto o di una persona con cui ti sei sentita al sicuro, anche una volta sola: è il primo mattone della tua base.' }
    }
  },

  /* ---------------- lunedì: Presenza ---------------- */
  presenza: {
    scene: [
      {
        id: 'presenza-1', tipo: 'riconosci', multi: false,
        domanda: 'Sei a letto, la luce è spenta. La mente torna a una frase detta oggi e continua a ripeterla. Che cosa fai?',
        fonte: 'Williams, Teasdale, Segal e Kabat-Zinn (2010), Ritrovare la serenità · rimuginio, pensieri come eventi mentali e tre minuti di respiro; Linehan (2015), DBT Skills Training Manual · osservare e descrivere senza giudicare',
        opzioni: [
          { testo: 'Ci ripenso finché non capisco che cosa avrei dovuto dire.', tag: 'rimugina', spiegazione: 'La mente cerca di risolvere, e di sera lo fa ancora di più. Il rimuginio (ripensare in cerchio a una frase, senza arrivare a una soluzione) tiene il corpo in allerta: è la modalità del «fare», che prova a cambiare ciò su cui stanotte non puoi agire. Puoi dirti «sto ripensando a quella frase» e tornare al peso del corpo sul letto, o fare i tre minuti di respiro. Domani, se serve, ci penserai con più luce.' },
          { testo: 'Prendo il telefono per distrarmi.', tag: 'distrae', spiegazione: 'Cercare una distrazione è un modo comune di spegnere un pensiero che fa male, e per qualche minuto aiuta. Lo schermo, però, tiene la mente sveglia, e il pensiero spesso torna appena lo appoggi. Un’alternativa: tre respiri con l’espirazione lunga, che può aiutare il corpo a rallentare, notando l’aria che esce. Il pensiero può restare, mentre tu torni qui.' },
          { testo: 'Mi arrabbio con me stessa perché non riesco a smettere.', tag: 'giudica', spiegazione: 'Succede a molte persone: al pensiero si aggiunge un secondo strato, il giudizio su di te, e il peso raddoppia. Ha senso, vorresti solo stare in pace. Prova a trasformare il giudizio in descrizione, una delle abilità della presenza: «sto avendo il pensiero che non riesco a smettere». Non è un trucco: è decentramento, cioè vedere il pensiero come un evento mentale e non come un fatto, e la mente stringe meno.' },
          { testo: 'Provo a notare il respiro, anche se la mente scappa.', tag: 'osserva', spiegazione: 'È proprio l’esercizio della presenza, e non deve riuscire alla perfezione. La mente scappa a tutti: ogni volta che la riporti al respiro alleni l’attenzione, come un muscolo. Se ti scoraggi, ricorda che non stai cercando il vuoto, ma un modo diverso di stare con ciò che arriva: osservare, senza dover cambiare. Anche un solo respiro notato conta.' }
        ]
      },
      {
        id: 'presenza-2', tipo: 'riconosci', multi: false,
        domanda: 'Dopo una giornata pesante mangi qualcosa davanti alla televisione. A un certo punto ti accorgi di non aver sentito il sapore di niente. Che cosa pensi?',
        fonte: 'Williams, Teasdale, Segal e Kabat-Zinn (2010), Ritrovare la serenità · pilota automatico e mangiare con attenzione; Linehan (2015), DBT Skills Training Manual · osservare senza giudicare',
        opzioni: [
          { testo: 'Normale, ero stanca: non ci faccio caso.', tag: 'distrae', spiegazione: 'Dopo una giornata pesante il pilota automatico (fare le cose senza accorgersene, con l’attenzione altrove) è un modo per risparmiare energie, e non c’è niente di male. Una curiosità per un’altra sera: prova a mangiare i primi tre bocconi notando sapore, temperatura e consistenza. Non per fare meglio, ma per regalarti un piccolo momento in cui ci sei per intero.' },
          { testo: 'Ecco, non riesco neanche a fare una cosa semplice.', tag: 'giudica', spiegazione: 'Quando sei stanca il giudizio arriva in fretta, come un riflesso. Ma accorgertene non è un fallimento: è già presenza. Hai notato, e nella DBT questo si chiama osservare. Puoi descriverlo senza giudicarti, cioè dire i fatti senza aggiungere condanne: «ho mangiato distratta, ero stanca». Poi tornare, adesso, al sapore di ciò che resta nel piatto.' },
          { testo: 'Mi viene curiosità: dov’era la mia mente?', tag: 'osserva', spiegazione: 'Una bella domanda, ed è proprio lo spirito della presenza: curiosità invece di rimprovero. Spesso la mente era ancora dentro la giornata, o già a domani. Puoi dare un nome al posto dove era andata («ero al lavoro», «ero a quella telefonata») e poi tornare al corpo: il peso, il respiro, il sapore. Riportare l’attenzione, senza punirti, è l’allenamento.' }
        ]
      },
      {
        id: 'presenza-3', tipo: 'mito', multi: false,
        domanda: 'Fare mindfulness vuol dire svuotare la mente e non pensare a niente.',
        fonte: 'Williams, Teasdale, Segal e Kabat-Zinn (2010), Ritrovare la serenità · i pensieri come eventi mentali, non come fatti; Linehan (2015), DBT Skills Training Manual · osservare, descrivere, partecipare',
        opzioni: [
          { testo: 'È vero', tag: 'giudica', spiegazione: 'È un’idea molto diffusa, e si capisce: le immagini della meditazione mostrano spesso una calma assoluta. In realtà la mindfulness (la presenza, cioè l’attenzione intenzionale al momento presente, senza giudizio) non chiede di fermare i pensieri. Chiede di notarli, descriverli senza giudizio e tornare qui. Se la mente scappa cento volte e tu la riporti cento volte, stai facendo l’esercizio nel modo giusto.' },
          { testo: 'È falso', tag: 'osserva', spiegazione: 'Sì, anche se è facile dimenticarlo quando ti siedi e la mente corre. La presenza non ferma i pensieri: ti insegna a vederli come eventi mentali che vanno e vengono, invece di prenderli alla lettera. Nella DBT le abilità sono osservare, descrivere e partecipare, e si praticano senza giudicare. Se la mente scappa e tu la riporti, quello è già l’esercizio, non un errore.' },
          { testo: 'Dipende, non so', tag: 'osserva', spiegazione: 'Ha senso esitare: esistono pratiche diverse, e a volte un po’ di quiete arriva davvero, come effetto collaterale. Ma la presenza, come la intende la DBT, non chiede di svuotare la mente: chiede di notare i pensieri, dar loro un nome e tornare qui. Riportare la mente, ogni volta, è l’esercizio: non serve che sia vuota.' }
        ]
      },
      {
        id: 'presenza-4', tipo: 'kit', multi: true,
        domanda: 'Fermati un attimo e chiedilo alla tua mente saggia: di che cosa hai bisogno adesso? Puoi spuntare più risposte.',
        fonte: 'Linehan (2015), DBT Skills Training Manual · mente saggia e presenza; Williams, Teasdale, Segal e Kabat-Zinn (2010), Ritrovare la serenità · modalità del fare e dell’essere, ascolto del corpo',
        opzioni: [
          { testo: 'Riposo, senza dover risolvere niente.', tag: 'rimugina', spiegazione: 'Stasera non c’è niente da sistemare: la mente saggia (la parte di te che tiene insieme ragione ed emozione) lo sa. Puoi dire alla mente «ci penso domani» e lasciare la modalità del «fare» per quella dell’«essere»: il corpo pesa sul letto e non devi cambiare niente. Anche questo è un modo di esserci.' },
          { testo: 'Mettere un pensiero su un foglio, per riprenderlo domani.', tag: 'rimugina', spiegazione: 'Scrivere un pensiero lo mette al sicuro: non lo perdi, e non devi tenerlo in testa tutta la notte (la mente non deve più sorvegliare ciò che resta in sospeso). Una riga basta, con la scritta «per domani».' },
          { testo: 'Silenzio, lontano dagli schermi.', tag: 'distrae', spiegazione: 'Spegnere lo schermo un po’ prima di dormire riduce gli stimoli e aiuta la mente a rallentare. Non serve tutta la sera: anche dieci minuti di silenzio contano.' },
          { testo: 'Un po’ di gentilezza verso di me.', tag: 'giudica', spiegazione: 'Hai fatto ciò che potevi, oggi. L’autocompassione è trattarti come tratteresti un’amica stanca: puoi metterti una mano sul petto e dirti, piano, una frase gentile. Il gesto conta anche se non ci credi del tutto.' },
          { testo: 'Sentire il corpo, qui, adesso.', tag: 'osserva', spiegazione: 'Nota dove il corpo tocca il letto o la sedia, la temperatura dell’aria, il respiro che entra ed esce: è la pratica di osservare, e sposta l’attenzione dal pensare al sentire. Non devi cambiare niente: solo notare.' },
          { testo: 'Un abbraccio, o una voce amica.', tag: 'osserva', spiegazione: 'Accorgerti di avere bisogno di vicinanza è già presenza: hai ascoltato te. Se ora non è possibile, puoi abbracciare un cuscino o ascoltare l’audio della buonanotte.' }
        ]
      }
    ],
    chiusura: {
      id: 'presenza-fine',
      domanda: 'Che cosa hai notato stasera, che di solito ti sfugge?',
      opzioni: [
        { testo: 'Il mio respiro, per un momento.', tag: 'osserva', spiegazione: 'Un momento di respiro notato è un piccolo ritorno a casa: l’attenzione lascia i pensieri e torna al corpo. Puoi rifarlo adesso, una volta sola, e poi lasciarti andare al sonno.' },
        { testo: 'Quanto corre la mia mente.', tag: 'rimugina', spiegazione: 'Accorgersene è già presenza: hai visto la mente correre, invece di correre con lei, e questo è un po’ di distanza dai pensieri. Per stanotte può rallentare da sola. Tu sei qui.' },
        { testo: 'Quanto sono severa con me.', tag: 'giudica', spiegazione: 'Vederlo con chiarezza è il primo passo per cambiarlo, piano: la voce che giudica è un’abitudine imparata, non la tua verità. Stasera puoi lasciar riposare anche quella voce. Basta essere qui.' },
        { testo: 'Quanto spesso scappo nello schermo.', tag: 'distrae', spiegazione: 'Lo hai notato senza giudicarti, ed è già tanto: è così che si interrompe un’abitudine automatica. Stanotte puoi appoggiare il telefono un po’ più lontano e sentire il buio, morbido, intorno a te.' }
      ]
    },
    riepilogo: {
      rimugina: { frase: 'Stasera ti sei riconosciuta soprattutto nella mente che corre e cerca di risolvere: è il rimuginio. Non è un difetto: è una mente che si preoccupa per te e prova a prevenire i guai.', domani: 'Quando torna un pensiero, scrivilo su un foglio con la parola «dopo» e torna a ciò che stai facendo: lo rimandi, non lo cancelli.' },
      distrae: { frase: 'Stasera ti sei riconosciuta soprattutto nel bisogno di staccare e distrarti. Dopo giornate pesanti succede, ed è umano; il passo in più è scegliere quando farlo, invece di scappare dal disagio.', domani: 'Prima di prendere il telefono, fai tre respiri lenti con l’espirazione lunga. Poi decidi tu se prenderlo.' },
      giudica: { frase: 'Stasera ti sei riconosciuta soprattutto nella voce che giudica. Accorgertene è già il primo passo per parlarti in un altro modo: ciò che osservi puoi descriverlo, invece di condannarlo.', domani: 'Quando arriva un giudizio su di te, ripetilo come descrizione: «sto avendo il pensiero che…». Così resta un pensiero, non diventa una sentenza.' },
      osserva: { frase: 'Stasera ti sei riconosciuta soprattutto nel notare con curiosità: il respiro, il corpo, ciò che arriva. È la presenza in azione: attenzione intenzionale e senza giudizio.', domani: 'Prepara una tazza di tè o di qualcosa di caldo e bevila con attenzione: tre sorsi, notando calore, sapore e peso della tazza.' }
    }
  },

  /* ---------------- martedì: Emozioni ---------------- */
  emozioni: {
    scene: [
      {
        id: 'emozioni-1', tipo: 'riconosci', multi: false,
        domanda: 'Una collega fa una battuta su di te davanti agli altri. Ridono tutti. Tu senti il viso che si scalda. Che cosa succede dentro di te?',
        fonte: 'Linehan (2015), DBT Skills Training Manual · Regolazione emotiva: emozioni primarie e secondarie, controllare i fatti, azione opposta; Carbone (2023), Crisi tempestose · contragire',
        opzioni: [
          { testo: 'Mi sento umiliata e vorrei nascondermi.', tag: 'evita', spiegazione: 'Il calore sul viso e la voglia di nasconderti sono i segni della vergogna, un’emozione molto umana con una spinta precisa: sparire. Ha senso: essere guardate in un momento fragile fa male. Darle un nome aiuta già: «è vergogna». Poi puoi controllare i fatti: che cosa ha detto davvero? Che cosa ho aggiunto io? Se i fatti non giustificano tanta vergogna, l’azione opposta (fare il contrario di ciò che l’emozione spinge a fare) è restare e alzare lo sguardo, in piccolo.' },
          { testo: 'Mi arrabbio e rispondo male.', tag: 'sfoga', spiegazione: 'La rabbia segnala che «un limite è stato superato», e qui ha un senso: nessuno ama essere preso in giro davanti agli altri. Rispondere subito è ciò che la rabbia spinge a fare, e ti difende; ma a caldo, con l’attivazione alta (il corpo in allerta), le parole possono uscire più dure di come vorresti. Puoi dare un nome all’emozione, prendere un respiro lungo e scegliere dopo se e come dire che quella battuta non ti è piaciuta. Per la rabbia l’azione opposta è abbassare il tono e parlare piano.' },
          { testo: 'Rido anch’io, ma dentro mi chiudo.', tag: 'trattiene', spiegazione: 'Ridere con gli altri è un modo frequente per non farsi notare in un momento scomodo: protegge il legame e ti evita lo sguardo di tutti. Il costo è che l’emozione resta dentro, senza nome, e può trasformarsi in un’emozione secondaria (una reazione a ciò che senti, per esempio vergogna di esserci rimasta male). Stasera puoi dare un nome a quella primaria, il più preciso che trovi: imbarazzo, delusione, solitudine. Un nome rende l’emozione più piccola e più maneggevole.' },
          { testo: 'Penso che non fosse cattiveria, ma ci resto male lo stesso.', tag: 'ascolta', spiegazione: 'Stai tenendo insieme due cose: i fatti (forse non c’era cattiveria) e ciò che senti (ci sei rimasta male). Sono vere tutte e due: è un pensiero dialettico, che ammette due verità nello stesso momento. L’emozione ha sempre un senso, anche quando l’interpretazione si ammorbidisce: la validazione (riconoscere che ciò che senti ha senso) vale anche per te. Puoi darle un nome e, se ti va, prenderti cura di quel dispiacere stasera.' }
        ]
      },
      {
        id: 'emozioni-2', tipo: 'riconosci', multi: false,
        domanda: 'È sera e senti un’emozione forte, ma non sai dire quale. È tutto un groviglio. Che cosa ti viene da fare?',
        fonte: 'Linehan (2015), DBT Skills Training Manual · Regolazione emotiva: descrivere le emozioni e le onde emotive; Carbone (2025), Come ti senti? · dare un nome a ciò che si sente',
        opzioni: [
          { testo: 'Cerco di capire tutto subito, e mi agito di più.', tag: 'ascolta', spiegazione: 'Voler capire è naturale: un groviglio senza nome fa paura. Ma quando l’attivazione è alta, l’analisi gira spesso a vuoto (è rimuginio emotivo, un ripensare in cerchio) e alza la tensione. Rimpicciolisci il compito: un solo nome, anche approssimativo. «Qualcosa tra tristezza e paura» va benissimo. Poi senti dove sta nel corpo e respira verso quel punto.' },
          { testo: 'Lo scrivo, anche in disordine.', tag: 'ascolta', spiegazione: 'Scrivere mette distanza tra te e ciò che senti: le parole sulla carta stanno ferme, la mente un po’ meno. Dare un nome a un’emozione ne riduce l’intensità e ti evita di sentirti inghiottita. Non servono ordine né bella scrittura. Se vuoi, alla fine cerchia la parola che ti sembra più vera: spesso il nome dell’emozione è già lì, nascosto tra le altre.' },
          { testo: 'Aspetto che passi da sola, senza toccarla.', tag: 'trattiene', spiegazione: 'Lasciar passare un’emozione senza alimentarla è una vera abilità: le emozioni sono come onde, salgono e poi scendono, se non ci aggiungi altra benzina. Se invece aspettare vuol dire stringere i denti mentre cresce, puoi aiutarti con il corpo: un respiro lento, una coperta, un tè caldo. E domani sonno e pasti regolari (è lo spirito di PLEASE) ti renderanno meno vulnerabile: la vulnerabilità emotiva è la facilità con cui le emozioni ti travolgono.' },
          { testo: 'Vorrei far smettere tutto subito, in qualsiasi modo.', tag: 'evita', crisi: true, spiegazione: 'Quando il groviglio è fortissimo, il desiderio di farlo smettere subito si capisce: non sei sbagliata a volerlo. È il momento in cui la tolleranza del disagio (reggere un momento difficile senza peggiorarlo) è più messa alla prova. Le scorciatoie che spengono tutto subito calmano per poco e poi lasciano le emozioni più forti e confuse. Non sei sola con questa spinta: se stasera è forte, apri «Stasera è dura» qui sotto: trovi tecniche per far scendere l’onda e le tue persone. Intanto, un respiro lento: l’onda sale, ma poi scende.' }
        ]
      },
      {
        id: 'emozioni-3', tipo: 'mito', multi: false,
        domanda: 'Se provo rabbia vuol dire che sono una persona cattiva.',
        fonte: 'Linehan (2015), DBT Skills Training Manual · Regolazione emotiva: miti sulle emozioni',
        opzioni: [
          { testo: 'È vero', tag: 'trattiene', spiegazione: 'Si capisce perché lo pensi: forse, nella tua storia, la rabbia è stata punita o ha fatto paura. È uno dei «miti sulle emozioni» (convinzioni rigide, come «alcune emozioni sono sbagliate») che rendono più difficile regolarle. La rabbia è un’emozione di tutti, e porta un messaggio: «un limite è stato superato». Sentirla non dice niente sul tuo valore. Conta ciò che scegli di farne: puoi riconoscerla, controllare i fatti e decidere come esprimerla senza ferire te o gli altri.' },
          { testo: 'È falso', tag: 'ascolta', spiegazione: 'Hai colto un punto importante, anche se nei momenti caldi è difficile crederci. La rabbia è un messaggio: «un limite è stato superato». Sentirla non ti rende cattiva, come la paura non ti rende vigliacca: l’emozione e l’azione sono due livelli distinti, e il giudizio morale riguarda solo la seconda. La differenza la fa ciò che scegli di fare: dare un nome, controllare i fatti e, se serve, provare l’azione opposta o fare una richiesta chiara.' },
          { testo: 'Dipende, non so', tag: 'sfoga', spiegazione: 'Il dubbio è comprensibile: a volte la rabbia spinge a dire o fare cose di cui poi ci si pente, e questo pesa. Ma l’emozione e l’azione sono due cose diverse: la rabbia è un messaggio («un limite è stato superato»), la spinta ad agire è solo una spinta, e tra le due c’è uno spazio in cui scegli. Sentire rabbia non dice niente sul tuo valore.' }
        ]
      },
      {
        id: 'emozioni-4', tipo: 'kit', multi: true,
        domanda: 'Quando agire come l’emozione spinge peggiorerebbe le cose, si prova l’azione opposta. Quali piccole mosse ti sembrano possibili domani?',
        fonte: 'Linehan (2015), DBT Skills Training Manual · Regolazione emotiva: azione opposta, descrivere le emozioni, cura del corpo (PLEASE); Carbone (2023), Crisi tempestose · contragire',
        opzioni: [
          { testo: 'Se la vergogna mi fa nascondere: mandare un saluto a qualcuno.', tag: 'evita', spiegazione: 'La vergogna spinge a sparire dalla vista; un saluto è un passo minuscolo nella direzione opposta. Quando i fatti non la giustificano, farsi vedere un poco ne abbassa l’intensità. Non devi spiegare niente.' },
          { testo: 'Se la paura mi fa rimandare: fare solo il primo passo.', tag: 'evita', spiegazione: 'Il primo passo è sempre il più piccolo: aprire la mail, cercare il numero, mettere le scarpe. Quando la paura non corrisponde a un pericolo vero, avvicinarsi un po’ la fa calare: è l’azione opposta alla paura, fatta a piccoli passi.' },
          { testo: 'Se la tristezza mi chiude: aprire la finestra o uscire cinque minuti.', tag: 'trattiene', spiegazione: 'La tristezza invita a restare ferma e chiusa; l’azione opposta è attivarsi, cioè fare qualcosa di piccolo anche senza voglia. Un po’ d’aria, un po’ di luce, cinque minuti fuori: non la cancellano, ma le danno spazio per muoversi.' },
          { testo: 'Dire a una persona fidata: «oggi è stata dura».', tag: 'trattiene', spiegazione: 'Una frase sola basta per non restare sola con il peso. È anche un modo di dare un nome a ciò che senti e di ricevere validazione, cioè la conferma che ciò che vivi ha senso. Non serve raccontare tutto.' },
          { testo: 'Se la rabbia mi spinge ad attaccare: abbassare la voce e parlare piano.', tag: 'sfoga', spiegazione: 'Parlare piano è l’opposto di ciò che la rabbia chiede, e il corpo se ne accorge: tono e ritmo della voce influenzano l’attivazione, e la tensione cala un po’. Il messaggio resta, detto in modo che l’altro possa ascoltarlo.' },
          { testo: 'Dare un nome all’emozione, prima di fare qualsiasi cosa.', tag: 'ascolta', spiegazione: 'Un nome preciso rende l’emozione più maneggevole e ti dà un attimo di tempo tra ciò che senti e ciò che fai. È il primo passo della regolazione emotiva, cioè del modo in cui capiamo, calmiamo e usiamo ciò che proviamo.' },
          { testo: 'Curare il corpo: dormire all’ora giusta, fare un pasto con calma.', tag: 'ascolta', spiegazione: 'È lo spirito di PLEASE: sonno, cibo e movimento regolari abbassano la vulnerabilità emotiva e ti rendono meno esposta alle onde forti. Anche i farmaci prescritti, presi come ti hanno indicato, fanno parte di questa cura.' }
        ]
      }
    ],
    chiusura: {
      id: 'emozioni-fine',
      domanda: 'L’emozione più forte di oggi: che cosa vuoi farne, stanotte?',
      opzioni: [
        { testo: 'Le do un nome e la lascio riposare.', tag: 'ascolta', spiegazione: 'Le hai dato ascolto, e ora può fermarsi: un’emozione nominata e accolta tende a calare da sola. Quello che senti ha un senso, anche se non lo capisci ancora del tutto. Domani ci sarà tempo.' },
        { testo: 'La metto da parte: ci penserò domani.', tag: 'trattiene', spiegazione: 'Va bene così: metterla da parte per la notte, come scelta consapevole, non è reprimerla né ignorarla. La riprenderai quando avrai più energie. Adesso puoi riposare.' },
        { testo: 'La sento ancora forte: mi serve un po’ di calma.', tag: 'sfoga', spiegazione: 'Ha senso, è stata intensa. Prova tre respiri con l’espirazione lunga, che aiuta il corpo a rallentare, e senti dove il corpo è sostenuto. L’onda sale, ma poi scende, anche stanotte.' },
        { testo: 'Stasera preferisco non guardarla.', tag: 'evita', spiegazione: 'È una scelta che puoi fare: non tutte le sere sono adatte a guardare a fondo. Se l’evitamento diventa un’abitudine, le emozioni tornano più forti; per stanotte basta sapere che c’è e lasciarla dov’è. Ci penserai quando sarà il momento.' }
      ]
    },
    riepilogo: {
      evita: { frase: 'Stasera ti sei riconosciuta soprattutto nel bisogno di allontanare ciò che fa male (evitamento emotivo). Ha senso: certe emozioni pesano tanto. Il rovescio è che, evitate a lungo, tendono a tornare più forti.', domani: 'Quando senti un’emozione forte, dalle solo un nome, una parola, prima di fare altro.' },
      trattiene: { frase: 'Stasera ti sei riconosciuta soprattutto nel tenere dentro ciò che senti, senza lasciarlo vedere. Ti protegge, ma a volte ti lascia sola con il peso.', domani: 'Di’ o scrivi a una persona fidata una frase sola su come stai: «oggi mi sento…». Condividere un’emozione la rende più sostenibile.' },
      sfoga: { frase: 'Stasera ti sei riconosciuta soprattutto nelle emozioni che premono per uscire subito: la spinta ad agire è forte. Portano messaggi importanti, anche quando arrivano forti.', domani: 'Quando senti salire la rabbia, prendi un respiro lungo prima di parlare. Uno solo: crea lo spazio tra emozione e azione.' },
      ascolta: { frase: 'Stasera ti sei riconosciuta soprattutto nell’ascoltare ciò che senti e nel dargli un nome: osservare e descrivere sono la base della regolazione emotiva. È un’abilità preziosa, da riconoscerti.', domani: 'In un momento qualsiasi della giornata chiediti: «che cosa sento adesso?». Una parola basta.' }
    }
  },

  /* ---------------- mercoledì: Mentalizzare ---------------- */
  mentalizzare: {
    scene: [
      {
        id: 'mentalizzare-1', tipo: 'riconosci', multi: false,
        domanda: 'Un’amica non risponde da ore al tuo messaggio. Qual è la prima cosa che ti viene in mente?',
        fonte: 'Bateman e Fonagy (2016), Mentalization-Based Treatment for Personality Disorders · mentalizzare sotto stress, equivalenza psichica e modalità teleologica',
        opzioni: [
          { testo: 'Ce l’ha con me, ho fatto qualcosa di sbagliato.', tag: 'certezza', spiegazione: 'È una delle prime idee che arrivano a tante persone, quando un legame conta molto: se l’attaccamento si attiva, la capacità di mentalizzare (leggere pensieri, emozioni e intenzioni dietro i comportamenti) cala. Allora ciò che pensi sembra per forza vero: si chiama equivalenza psichica. Ma è un’ipotesi, non una prova. Aggiungine altre due, anche banali: è al lavoro, ha il telefono scarico. Non devi scegliere quella vera: basta che non ce ne sia una sola.' },
          { testo: 'Sarà impegnata, risponderà quando può.', tag: 'curiosa', spiegazione: 'È un’ipotesi gentile, e spesso anche la più probabile. Se ti viene naturale, è una risorsa preziosa. Se invece la pensi ma dentro resta un’inquietudine, va bene lo stesso: si può pensare una cosa e sentirne un’altra, perché pensiero ed emozione non sempre coincidono. Puoi guardare quell’inquietudine con curiosità: che cosa ti ricorda?' },
          { testo: 'Le riscrivo subito, più volte, per sapere.', tag: 'agisce', spiegazione: 'L’attesa può essere difficilissima da reggere, soprattutto se nella tua storia la vicinanza è stata incerta. Riscrivere è la modalità teleologica: sembra che solo un’azione concreta (una risposta) possa provare che l’altra tiene a te. Cerca di calmare l’ansia, ma a volte la alza, e può mettere pressione all’altra persona. Prova a fermarti un attimo: che cosa sto sentendo? Paura di essere lasciata? Darle un nome aiuta ad aspettare un po’ di più.' },
          { testo: 'Non lo so, e mi chiedo come stia.', tag: 'curiosa', spiegazione: 'Poter dire «non lo so» è la parte più difficile del mentalizzare, e anche quella che protegge di più: è la posizione del «non so», cioè ammettere che la mente dell’altra è in parte opaca, che puoi solo ipotizzarla. Sei passata dalla certezza alla curiosità, e ti sei chiesta come sta lei: è un gesto di cura. Se l’attesa si allunga, puoi tenere aperta la domanda e, domani, chiedere con calma.' }
        ]
      },
      {
        id: 'mentalizzare-2', tipo: 'riconosci', multi: false,
        domanda: 'Ti accorgi che sei di cattivo umore da stamattina, ma non sai perché. Che cosa ti dici?',
        fonte: 'Bateman e Fonagy (2016), Mentalization-Based Treatment for Personality Disorders · mentalizzare i propri stati emotivi, curiosità e riavvolgere',
        opzioni: [
          { testo: 'Sono fatta così, non c’è un motivo.', tag: 'severa', spiegazione: 'A volte sembra davvero che l’umore arrivi dal nulla, e cercare un motivo stanca. Ma «sono fatta così» chiude la porta alla curiosità e trasforma uno stato passeggero in un tratto fisso. La mente è spesso più confusa di quanto sembri: un sogno, un pensiero sfiorato, la stanchezza. Mentalizzare te stessa significa proprio questo: chiederti, senza fretta, quando hai sentito per la prima volta che qualcosa cambiava.' },
          { testo: 'Sarà colpa di qualcuno che mi ha trattata male.', tag: 'certezza', spiegazione: 'Cercare la causa fuori è molto umano: dà una forma a un malessere confuso. A volte qualcosa è successo davvero. Altre volte la certezza arriva prima delle prove (è di nuovo equivalenza psichica: se lo sento, allora è così). Prova a tenere più ipotesi insieme: forse quella persona, forse il sonno, forse un ricordo. Non serve trovare un colpevole: serve capire te.' },
          { testo: 'Provo a riavvolgere la giornata per capire.', tag: 'curiosa', spiegazione: 'È proprio il gesto del mentalizzare: rallentare e guardarsi dentro con curiosità. La tecnica si chiama riavvolgere: ripercorri la giornata come un film, a velocità lenta, e cerca il momento in cui qualcosa è cambiato. Se non lo trovi, va bene: anche «non lo so ancora» è una risposta. L’importante è essere curiosa, non severa.' },
          { testo: 'Mi critico: dovrei saperlo, che cosa non va in me?', tag: 'severa', spiegazione: 'Quando non ci si capisce, la severità arriva in fretta: è un modo, un po’ duro, di cercare il controllo. Ma non sapere da dove venga un’emozione succede a tutti ed è un limite normale della mentalizzazione di sé, non un difetto. Prova a sostituire la critica con una domanda gentile: «che cosa potrebbe esserci dietro?». La curiosità apre, il rimprovero chiude.' }
        ]
      },
      {
        id: 'mentalizzare-3', tipo: 'mito', multi: false,
        domanda: 'Se conosco bene una persona, so sempre che cosa pensa e che cosa prova.',
        fonte: 'Bateman e Fonagy (2016), Mentalization-Based Treatment for Personality Disorders · opacità degli stati mentali e posizione del «non so»',
        opzioni: [
          { testo: 'È vero', tag: 'certezza', spiegazione: 'Si capisce: quando conosci qualcuno da tempo, impari a leggere i suoi gesti, e spesso indovini. Ma gli stati mentali (pensieri, emozioni, intenzioni) sono opachi: dall’esterno possiamo fare inferenze, cioè ipotesi, anche buone, mai avere prove. La certezza arriva soprattutto quando l’emozione è alta. Poter dire «non lo so, te lo chiedo» protegge te e il legame.' },
          { testo: 'È falso', tag: 'curiosa', spiegazione: 'Sì, ed è una delle cose più difficili da ricordare quando ti senti ferita. Conoscere qualcuno aiuta a fare ipotesi migliori, ma la sua mente resta in parte opaca. La certezza («so che cosa pensa») arriva soprattutto quando l’emozione sale e la mentalizzazione cala. Restare curiosa e chiedere protegge te e il legame.' },
          { testo: 'Dipende, non so', tag: 'curiosa', spiegazione: 'È una risposta prudente: a volte indoviniamo davvero, e con chi ci è vicino capita spesso. Ma indovinare non è sapere. La mente dell’altro resta in parte opaca: possiamo fare ipotesi, mai avere prove. Quando senti una certezza molto forte, spesso è l’emozione a parlare. Poter dire «non lo so, te lo chiedo» protegge te e il legame.' }
        ]
      },
      {
        id: 'mentalizzare-4', tipo: 'kit', multi: true,
        domanda: 'Pensa a una scena di oggi con un’altra persona che ti ha lasciato un dubbio (scegline una leggera). Che cosa potresti provare? Spunta ciò che ti sembra possibile.',
        fonte: 'Bateman e Fonagy (2016), Mentalization-Based Treatment for Personality Disorders · riavvolgere, esplorare e posizione del «non so»',
        opzioni: [
          { testo: 'Riavvolgerla a velocità lenta e fermarmi dove qualcosa è cambiato.', tag: 'curiosa', spiegazione: 'Rallentare è il cuore del mentalizzare. Fermare la scena nel punto in cui è cambiato qualcosa ti aiuta a vedere che cosa è successo dentro di te e fuori: è la tecnica del riavvolgere.' },
          { testo: 'Chiedermi che cosa sentivo io, prima di pensare all’altra persona.', tag: 'curiosa', spiegazione: 'Partire da te è un gesto di cura: un’emozione forte colora tutto ciò che vediamo negli altri, e in quel momento la mentalizzazione cala. Darle un nome rende la scena più chiara.' },
          { testo: 'Aggiungere due ipotesi neutre: era stanca, era distratta.', tag: 'certezza', spiegazione: 'Non devi credere alle ipotesi nuove: basta che ci siano. Quando le spiegazioni sono più di una, la certezza dolorosa (l’equivalenza psichica) perde un po’ di forza.' },
          { testo: 'Dirmi «non lo so» e restare lì un momento.', tag: 'certezza', spiegazione: 'Il «non lo so» all’inizio scomoda, poi fa spazio: è la posizione di chi sa che la mente dell’altro è opaca. È la parte più difficile, e quella che protegge di più te e il legame.' },
          { testo: 'Aspettare un po’ prima di scrivere o di rispondere.', tag: 'agisce', spiegazione: 'Qualche minuto tra ciò che senti e ciò che fai ti dà il tempo di capire: l’attivazione cala e la capacità di mentalizzare torna. Se la cosa conta, sarà ancora lì anche dopo una pausa.' },
          { testo: 'Chiedere con calma: «prima mi è sembrato che… è così?»', tag: 'agisce', spiegazione: 'Chiedere trasforma un’ipotesi in una conversazione. È un’azione, ma lenta e curiosa: lascia all’altra persona lo spazio per dire la sua. Aiuta partire da ciò che hai sentito tu, non da ciò che pensi che pensi lei.' },
          { testo: 'Guardarmi con curiosità invece che con severità.', tag: 'severa', spiegazione: 'Se ti trovi confusa, va bene: la mente è spesso più complicata di come sembra. Una domanda gentile su di te apre più di cento rimproveri, e la curiosità verso di sé fa parte del mentalizzare.' }
        ]
      }
    ],
    chiusura: {
      id: 'mentalizzare-fine',
      domanda: 'Prima di dormire, quale frase vuoi tenere con te stanotte?',
      opzioni: [
        { testo: '«Posso non sapere.»', tag: 'certezza', spiegazione: 'Non sapere non è un pericolo: è spazio, ed è la base della posizione del «non so». Alcune domande possono restare aperte stanotte. Domani, se vorrai, potrai chiedere.' },
        { testo: '«Posso aspettare, prima di fare.»', tag: 'agisce', spiegazione: 'Adesso non c’è niente da fare. Aspettare dà tempo all’attivazione di calare: tutto ciò che conta sarà ancora lì domattina, e tu avrai più calma per scegliere.' },
        { testo: '«Posso essere curiosa di me, non severa.»', tag: 'severa', spiegazione: 'Una frase gentile su di te è un buon cuscino per la notte. Sei una persona da capire, non da correggere: e capirsi è proprio mentalizzare.' },
        { testo: '«Domani posso chiedere.»', tag: 'curiosa', spiegazione: 'Una domanda rimandata a domani è una porta lasciata aperta, non una cosa in sospeso. Per stanotte la scena può allontanarsi.' }
      ]
    },
    riepilogo: {
      certezza: { frase: 'Stasera ti sei riconosciuta soprattutto nelle certezze che arrivano veloci su ciò che pensano gli altri (equivalenza psichica). Succede quando l’emozione sale e la mentalizzazione cala.', domani: 'Quando ti senti sicura di che cosa pensa qualcuno, aggiungi due altre ipotesi, anche banali, e chiediti che cosa senti tu.' },
      agisce: { frase: 'Stasera ti sei riconosciuta soprattutto nel bisogno di fare subito qualcosa per calmare l’ansia: è la spinta all’azione, la modalità teleologica. È comprensibile.', domani: 'Prima di mandare un messaggio che ti preme, aspetta due minuti e chiediti che cosa senti.' },
      severa: { frase: 'Stasera ti sei riconosciuta soprattutto nella severità verso di te quando non ti capisci. Ci si può guardare anche con curiosità: capirsi è un processo, non un esame.', domani: 'Quando non capisci un tuo stato d’animo, chiediti con gentilezza: «che cosa potrebbe esserci dietro?».' },
      curiosa: { frase: 'Stasera ti sei riconosciuta soprattutto nella curiosità, per te e per gli altri, senza bisogno di avere ragione: è la posizione del «non so» in azione.', domani: 'Chiedi a una persona, con calma, una cosa che non sai: «come stai, davvero?».' }
    }
  },

  /* ---------------- giovedì: Relazioni ---------------- */
  relazioni: {
    scene: [
      {
        id: 'relazioni-1', tipo: 'riconosci', multi: false,
        domanda: 'Un’amica ti chiede di aiutarla a traslocare sabato. Sei stanchissima e avevi bisogno di riposo. Che cosa le rispondi?',
        fonte: 'Linehan (2015), DBT Skills Training Manual · Efficacia interpersonale: obiettivo, relazione e rispetto di sé (DEAR MAN, GIVE, FAST)',
        opzioni: [
          { testo: 'Le dico di sì, anche se poi sarò a pezzi.', tag: 'cede', spiegazione: 'Dire sì protegge il legame e spegne la paura di deluderla: lo fanno in moltissime. Nell’efficacia interpersonale (l’arte di chiedere e rifiutare restando in relazione) si tengono insieme tre priorità: ciò che vuoi ottenere, il legame e il rispetto di te. Qui vince solo il legame: il tuo bisogno resta senza posto e col tempo può diventare stanchezza o rancore. Puoi provare un sì parziale: «ti aiuto due ore la mattina, poi devo riposare». Anche questo è negoziare.' },
          { testo: 'Le dico di no, ma poi mi sento in colpa per giorni.', tag: 'chiede', spiegazione: 'Hai rispettato un tuo bisogno, e non è poco. Il senso di colpa che segue è frequente, soprattutto con la paura dell’abbandono (il timore di essere lasciata se deludi): è un’emozione, non la prova che hai sbagliato. FAST ti ricorda di essere giusta, di non scusarti troppo, di restare ai tuoi valori e di dire la verità; GIVE, di dire il no con calore, in modo gentile e leggero: «mi dispiace, ci tengo a te».' },
          { testo: 'Non rispondo e rimando, sperando che trovi qualcun altro.', tag: 'chiude', spiegazione: 'Rimandare è evitamento: abbassa subito il disagio di dire no, e si capisce, ma lo mantiene, perché la mente impara che dire no è pericoloso. Intanto l’altra resta in attesa e la tensione cresce, per tutte e due. Una frase breve e chiara costa meno del silenzio. Puoi prepararla con DEAR: descrivi i fatti, esprimi come stai, asserisci (chiedi o rifiuta in modo chiaro), rinforza (mostra il vantaggio anche per l’altra).' },
          { testo: 'Le spiego come sto e le propongo un altro modo per aiutarla.', tag: 'chiede', spiegazione: 'Stai tenendo insieme le tre priorità: ciò che chiedi, il legame e il rispetto di te. È lo spirito di DEAR MAN (efficacia sull’obiettivo) e di GIVE (efficacia nella relazione). Se ti riesce, riconoscitelo. Se ti sembra difficile, va bene così: non serve farlo alla perfezione, basta farlo bene una volta, partendo da una situazione piccola.' }
        ]
      },
      {
        id: 'relazioni-2', tipo: 'riconosci', multi: false,
        domanda: 'La persona con cui vivi arriva tardi a cena senza avvisare, per la seconda volta questa settimana. Quando entra, che cosa ti viene da fare?',
        fonte: 'Linehan (2015), DBT Skills Training Manual · Efficacia interpersonale (DEAR MAN, GIVE); Bateman e Fonagy (2016), Mentalization-Based Treatment for Personality Disorders · mentalizzare gli altri e atteggiamento del non sapere',
        opzioni: [
          { testo: 'Esplodo e dico tutto quello che penso.', tag: 'esplode', spiegazione: 'La rabbia ha un senso: segnala che un limite è stato superato, e la seconda volta pesa di più. Esplodere scarica la tensione, ma l’altra persona sente soprattutto il tono, si mette sulla difensiva, e la tua richiesta si perde. Prima dai un nome a ciò che senti: sotto la rabbia c’è a volte un’emozione primaria, come il dispiacere o la paura. Poi, a mente più calma, una richiesta precisa: «quando fai tardi, mi scrivi?».' },
          { testo: 'Faccio finta di niente, ma resto fredda tutta la sera.', tag: 'chiude', spiegazione: 'Il silenzio freddo è un modo di dire «mi hai ferita» senza rischiare lo scontro: è una forma di evitamento. Ha senso, ma l’altra persona può non capire, e tu resti sola con il dispiacere. Puoi provare con DEAR: descrivere il fatto, esprimere come ti senti, asserire una richiesta precisa. Bastano tre frasi corte, dette con calma.' },
          { testo: 'Penso che non tenga a me.', tag: 'chiude', spiegazione: 'Un gesto che delude può far saltare la mente a una conclusione sull’intero legame: è la sensibilità al rifiuto, cioè una prontezza a cogliere segnali di esclusione, e fa male. Mentalizzare (immaginare gli stati d’animo dietro i comportamenti, i tuoi e quelli dell’altro) significa anche non essere troppo sicura di avere capito: un ritardo ha molte spiegazioni, non tutte parlano di te. Tieni aperta la domanda e chiedi: è un modo di restare in relazione.' },
          { testo: 'Dico che ci sono rimasta male e chiedo che mi avvisi.', tag: 'chiede', spiegazione: 'Hai espresso ciò che senti e chiesto una cosa precisa: è il cuore di DEAR MAN. Se l’altra persona si difende, puoi restare ferma sull’obiettivo ripetendo con calma la richiesta (la tecnica del «disco rotto»), con tono gentile (GIVE). Non sempre andrà come speri, ma il tuo bisogno ha avuto un posto, e anche il legame.' }
        ]
      },
      {
        id: 'relazioni-3', tipo: 'mito', multi: false,
        domanda: 'Se voglio bene a una persona, non dovrei mai dirle di no.',
        fonte: 'Linehan (2015), DBT Skills Training Manual · Efficacia interpersonale: i miti che ostacolano (Myths in the Way)',
        opzioni: [
          { testo: 'È vero', tag: 'cede', spiegazione: 'Si capisce da dove viene: quando la paura di perdere l’altro è forte, il no sembra un rischio troppo grande. La DBT chiama «miti che ostacolano» le idee che sembrano vere e ci bloccano proprio quando dovremmo chiedere o rifiutare. Un legame in cui si dice sempre sì rischia di farsi pesante e pieno di rancore. Dire no con gentilezza protegge il rapporto e te stessa. Puoi volere qualcosa e volere bene allo stesso tempo.' },
          { testo: 'È falso', tag: 'chiede', spiegazione: 'È così, anche se sul momento il no può far paura. Le relazioni strette reggono meglio quando c’è posto per i bisogni di tutte e due le persone. Un no detto con calore (GIVE) e nel rispetto di te (FAST) può perfino rafforzare la fiducia, perché l’altra sa che i tuoi sì sono sinceri. Puoi volere qualcosa e volere bene allo stesso tempo.' },
          { testo: 'Dipende, non so', tag: 'chiede', spiegazione: 'Stare nel dubbio va bene: a volte scegliamo di dire sì per amore, ed è giusto così. Ma «mai dire no» è un pensiero tutto o niente (o sempre o mai) e lascia senza posto i tuoi bisogni. Si può decidere caso per caso, chiedendosi che cosa conta di più in quel momento: l’obiettivo, il legame o il rispetto di sé. Puoi volere qualcosa e volere bene allo stesso tempo.' }
        ]
      },
      {
        id: 'relazioni-4', tipo: 'kit', multi: true,
        domanda: 'Pensa a una piccola cosa che vorresti chiedere o dire nei prossimi giorni. Quali parti di DEAR MAN ti senti di provare?',
        fonte: 'Linehan (2015), DBT Skills Training Manual · Efficacia interpersonale: DEAR MAN (obiettivi) e GIVE (relazione)',
        opzioni: [
          { testo: 'D, descrivo: solo i fatti, senza accuse.', tag: 'esplode', spiegazione: '«Questa settimana sei arrivato tardi due volte senza avvisare.» Descrivere vuol dire riferire solo ciò che si può osservare, senza interpretazioni: un’accusa attiva la difesa dell’altra persona, un fatto lascia più spazio all’ascolto.' },
          { testo: 'E, esprimo: una frase sola su come mi sento.', tag: 'chiude', spiegazione: '«Mi sono sentita in pensiero, e un po’ sola.» Esprimere vuol dire nominare l’emozione parlando di te, non dell’altro: apre invece di chiudere. Non serve spiegare tutto.' },
          { testo: 'A, asserisco: chiedo una cosa precisa, invece di sperare che capisca.', tag: 'cede', spiegazione: 'Asserire è chiedere o rifiutare in modo chiaro. Gli altri non leggono nel pensiero, anche quando ci vogliono bene, e sperare che capiscano lascia la richiesta nel vuoto. «Mi piacerebbe che mi scrivessi, se fai tardi» è chiaro e possibile.' },
          { testo: 'R, rinforzo: dico che cosa ci guadagniamo tutte e due.', tag: 'chiede', spiegazione: 'Rinforzare è mostrare il vantaggio anche per l’altra persona: «così ti aspetto più tranquilla, e la serata va meglio per entrambi.» Quando la richiesta porta un beneficio comune, è più facile da accogliere.' },
          { testo: 'M, resto sul mio obiettivo, anche se si cambia discorso.', tag: 'cede', spiegazione: 'M sta per mindful, cioè presente: non farsi trascinare altrove. Se la conversazione scivola, torni con calma alla tua richiesta, come un disco che riparte. Non serve alzare la voce.' },
          { testo: 'N, negozio: preparo un’alternativa, se la risposta è no.', tag: 'chiede', spiegazione: 'Negoziare è tenere pronto un piano B, e ti fa sentire meno in balia della risposta. «Se scrivere è difficile, basta un messaggio vocale di due secondi?»' },
          { testo: 'Con GIVE: tono gentile e leggero, anche se dentro sono tesa.', tag: 'esplode', spiegazione: 'GIVE è l’efficacia nella relazione: essere gentile, interessata, validante (riconoscere il punto di vista dell’altra) e con modi leggeri. Il tono conta quanto le parole. Un tono leggero non vuol dire che la cosa non conti: vuol dire che tieni anche al legame.' }
        ]
      }
    ],
    chiusura: {
      id: 'relazioni-fine',
      domanda: 'Che cosa porti con te, stasera, dalle conversazioni di oggi?',
      opzioni: [
        { testo: 'Un bisogno che ho taciuto: posso tenerlo per domani.', tag: 'cede', spiegazione: 'Il tuo bisogno non è sparito: ha solo aspettato. Domani potrai formularlo con una frase sola, un DEAR in miniatura. Stanotte puoi lasciarlo riposare accanto a te.' },
        { testo: 'Un po’ di rabbia, ancora calda.', tag: 'esplode', spiegazione: 'Ha senso che ci sia: la rabbia segnala che qualcosa ti importa. Non devi risolverla adesso: un’emozione tende a calare se non la alimenti con altri pensieri. Prova un respiro lungo, con l’espirazione più lenta dell’inspirazione, e lascia che la notte la raffreddi un poco.' },
        { testo: 'La voglia di stare un po’ per conto mio.', tag: 'chiude', spiegazione: 'Anche il bisogno di spazio è un bisogno vero: è un modo di regolare la distanza dagli altri. Puoi prenderti questa sera per te, sapendo che i legami possono aspettare fino a domani.' },
        { testo: 'Una frase gentile che vorrei dire a qualcuno.', tag: 'chiede', spiegazione: 'Tienila stretta: domani potrai dirla. Ciò che vuoi per te e il bene che vuoi all’altra persona possono stare insieme (è la posizione dialettica: due cose vere nello stesso momento), e tu lo stai già facendo.' }
      ]
    },
    riepilogo: {
      cede: { frase: 'Stasera ti sei riconosciuta soprattutto nel mettere i tuoi bisogni dopo quelli degli altri, forse per proteggere il legame: è un adattamento, cioè un cedere per non rischiare di perdere l’altra persona.', domani: 'Scegli una cosa piccolissima a cui dire «non adesso», con gentilezza: è un primo allenamento al rispetto di te.' },
      esplode: { frase: 'Stasera ti sei riconosciuta soprattutto nella rabbia che preme per uscire. È un segnale: dice che qualcosa, per te, conta davvero.', domani: 'Prepara una frase che cominci con «quando succede…, mi sento…» (descrivere ed esprimere, le prime due lettere di DEAR). Basta prepararla, senza doverla dire.' },
      chiude: { frase: 'Stasera ti sei riconosciuta soprattutto nel chiuderti o allontanarti quando un legame fa male. È una strategia di protezione: toglie il rischio dello scontro, ma ti lascia sola col dispiacere.', domani: 'Scrivi a una persona una frase sola su come ti sei sentita, senza accuse: è l’«E» di DEAR.' },
      chiede: { frase: 'Stasera ti sei riconosciuta soprattutto nel dire ciò che ti serve, tenendo al legame. È l’equilibrio tra obiettivo, relazione e rispetto di sé, e si allena.', domani: 'Fai una richiesta piccola e precisa a qualcuno, anche banale: «mi chiami quando arrivi?».' }
    }
  },

  /* ---------------- venerdì: Reggere il disagio ---------------- */
  disagio: {
    scene: [
      {
        id: 'disagio-1', tipo: 'riconosci', multi: false,
        domanda: 'Hai appena ricevuto una notizia che ti sconvolge. Il cuore batte forte e la testa è piena. Che cosa ti viene da fare per prima cosa?',
        fonte: 'Linehan (2015), DBT Skills Training Manual · Tolleranza del disagio: STOP, TIP, accettazione radicale',
        opzioni: [
          { testo: 'Faccio subito qualcosa: scrivo, chiamo, decido.', tag: 'impulso', spiegazione: 'Quando il dolore è forte, agire subito sembra l’unico modo per farlo smettere: è l’urgenza emotiva, la spinta dell’emozione a produrre un’azione immediata. Ma le decisioni prese a caldo pesano di più il giorno dopo. STOP inserisce una pausa: fermati (Stop), fai un passo indietro, osserva che cosa succede dentro e fuori, poi procedi con consapevolezza. Sono trenta secondi che ti danno tempo.' },
          { testo: 'Respiro piano, con l’espirazione più lunga.', tag: 'corpo', spiegazione: 'È uno dei gesti più utili quando l’attivazione fisiologica (cuore, respiro, tensione) è alta: l’espirazione lunga può aiutare il sistema parasimpatico (la parte del sistema nervoso che fa rallentare il corpo) e parla al corpo prima che alla mente. È la prima P di TIPP (respiro ritmato, lento). Se ti viene spontaneo, è una risorsa da riconoscerti. Se non basta, aggiungi un senso: una coperta, un odore, un tè caldo. Non cambia la notizia, ma ti dà tempo.' },
          { testo: 'Mi viene la spinta a fare qualcosa che mi farebbe male.', tag: 'impulso', crisi: true, spiegazione: 'Quando il dolore sale così, la spinta a farlo smettere a ogni costo si capisce (è l’urgenza emotiva al massimo), e non dice che sei cattiva o sbagliata. Ma non sei sola con questa spinta. Adesso puoi aprire «Stasera è dura»: ci sono tecniche per far scendere l’onda. Puoi anche cercare una persona di cui ti fidi. Una spinta è come un’onda: sale, raggiunge il picco e poi scende.' },
          { testo: 'Mi dico che non dovrebbe succedere a me, non è giusto.', tag: 'resiste', spiegazione: 'È un pensiero naturale davanti al dolore, e spesso è anche vero che non è giusto. Ma restare a lungo nel «non dovrebbe essere così» è una lotta contro la realtà: consuma energie e fa crescere la sofferenza (dolore più non accettazione dà sofferenza). L’accettazione radicale non vuol dire approvare: vuol dire riconoscere con tutta te stessa che è successo, per poter scegliere che cosa fare adesso e come proteggerti.' }
        ]
      },
      {
        id: 'disagio-2', tipo: 'riconosci', multi: false,
        domanda: 'È venerdì sera, sei sola in casa e senti salire una tensione forte, senza un motivo preciso. Che cosa provi a fare?',
        fonte: 'Linehan (2015), DBT Skills Training Manual · Tolleranza del disagio: abilità TIP (temperatura, esercizio fisico, respiro, rilassamento muscolare)',
        opzioni: [
          { testo: 'Mi bagno il viso con acqua fredda.', tag: 'corpo', spiegazione: 'È la T di TIPP (temperatura): l’acqua fredda sul viso può attivare il riflesso da immersione, una risposta del corpo che fa rallentare il battito e può calmare in fretta. Con cautela: fredda ma non gelida (niente ghiaccio sulla pelle), pochi secondi, senza trattenere il respiro. Evitala se hai problemi di cuore o di battito, prendi farmaci che rallentano il cuore, sei in gravidanza, hai un disturbo alimentare o allergia al freddo, e chiedi al tuo medico. Nel dubbio, il respiro lento e i cinque sensi vanno sempre bene.' },
          { testo: 'Metto una musica che mi calma e mi infilo sotto la coperta.', tag: 'accoglie', spiegazione: 'Usare i sensi per calmarti è l’autoconsolazione (in inglese self-soothing): musica, coperta, odori mandano al corpo segnali di sicurezza. Non cancella la tensione, ma la rende più sopportabile. Se hai preparato il tuo kit per i momenti duri, questo è il momento di usarlo. Se non l’hai ancora fatto, stasera puoi cominciarlo.' },
          { testo: 'Cammino su e giù, non riesco a stare ferma.', tag: 'corpo', spiegazione: 'Il corpo agitato cerca movimento: è l’energia dell’attivazione che vuole uscire. Il movimento scelto, non subìto, è la I di TIPP (esercizio intenso): qualche minuto scarica tensione, senza arrivare allo sfinimento. Evitala se hai problemi di cuore o di battito, sei in gravidanza o hai un disturbo alimentare; nel dubbio, chiedi prima al tuo medico. Poi rallenta, con un respiro dall’espirazione lunga.' },
          { testo: 'Stringo i denti e spero che passi.', tag: 'resiste', spiegazione: 'Resistere ti ha probabilmente aiutata molte volte, e ha un valore. Ma stringere i denti da sola, a lungo, stanca. Le abilità di tolleranza del disagio funzionano meglio presto, a bassa intensità, prima del culmine, quando la mente ragiona ancora bene: respiro lento, muscoli che si tendono inspirando e si lasciano andare espirando (rilassamento muscolare associato al respiro). E, se serve, una persona da cercare.' }
        ]
      },
      {
        id: 'disagio-3', tipo: 'mito', multi: false,
        domanda: 'Accettare una cosa dolorosa vuol dire approvarla, o arrendersi.',
        fonte: 'Linehan (2015), DBT Skills Training Manual · Tolleranza del disagio: accettazione della realtà; Linehan (2021), Una vita degna di essere vissuta · accettazione radicale',
        opzioni: [
          { testo: 'È vero', tag: 'resiste', spiegazione: 'Si capisce perché lo pensi: la parola «accettare» suona spesso come «dire che va bene». Ma l’accettazione radicale è un’altra cosa: riconoscere, con la mente, il corpo e le emozioni, che ciò che è successo è successo, senza approvarlo. Così smetti di spendere energie nel «non dovrebbe essere così» e puoi usarle per proteggerti e cambiare ciò che puoi.' },
          { testo: 'È falso', tag: 'accoglie', spiegazione: 'Sì, anche se nel dolore è difficile sentirlo. Accettare non vuol dire approvare, né rassegnarsi, né subire. Vuol dire riconoscere la realtà così com’è, per smettere di lottare contro ciò che è già accaduto: il dolore resta, ma non si aggiunge la sofferenza della lotta. È da lì che puoi scegliere: proteggerti, chiedere aiuto, cambiare ciò che puoi.' },
          { testo: 'Dipende, non so', tag: 'resiste', spiegazione: 'Il dubbio ha senso: ci sono cose da non sopportare, come un torto che continua. Ma l’accettazione radicale non chiede di subirle: chiede di riconoscere ciò che è già successo, senza approvarlo, per non sprecare forze nel «non dovrebbe essere così». Accettare il passato e cambiare il presente non si escludono: puoi accettare e, insieme, proteggerti e cambiare ciò che puoi.' }
        ]
      },
      {
        id: 'disagio-4', tipo: 'kit', multi: true,
        domanda: 'Prepariamo adesso, con calma, il tuo kit per i momenti duri. Quali di queste cose potrebbero aiutarti? Spunta quelle da tenere a portata di mano.',
        fonte: 'Linehan (2015), DBT Skills Training Manual · Tolleranza del disagio: calmarsi con i cinque sensi (autoconsolazione), STOP; Carbone (2023), Crisi tempestose · i cinque sensi contro la disregolazione',
        opzioni: [
          { testo: 'Vista: una foto che mi fa bene, una luce morbida.', tag: 'accoglie', spiegazione: 'Gli occhi hanno bisogno di un posto dove posarsi. Una foto cara o una luce calda dicono al corpo che, almeno lì, è al sicuro: è autoconsolazione attraverso la vista.' },
          { testo: 'Udito: una canzone calma, il rumore della pioggia.', tag: 'accoglie', spiegazione: 'Un suono conosciuto accompagna e rallenta il ritmo del corpo. Puoi salvare una canzone o un suono in un posto facile da trovare, così non devi cercarlo quando è dura.' },
          { testo: 'Olfatto e gusto: un profumo, il sapone, un tè caldo.', tag: 'accoglie', spiegazione: 'Odori e sapori arrivano dritti alle emozioni, senza passare dal ragionamento. Un profumo che ami o una tazza calda tra le mani possono ammorbidire la tensione in pochi momenti.' },
          { testo: 'Tatto: una coperta, un sasso liscio da stringere.', tag: 'accoglie', spiegazione: 'Qualcosa di morbido o liscio da toccare riporta l’attenzione al presente, fuori dai pensieri che corrono. Tenerlo vicino al letto o nella borsa lo rende pronto quando serve.' },
          { testo: 'Una frase per fermarmi: «Questo momento passa».', tag: 'impulso', spiegazione: 'Una frase pronta aiuta a fare STOP: mette un piccolo spazio tra l’impulso e l’azione, ed è anche un autoincoraggiamento, cioè parole di sostegno rivolte a te. Sceglila adesso, con le tue parole, così sarà lì quando serve.' },
          { testo: 'Un minuto di respiro, con l’espirazione più lunga.', tag: 'corpo', spiegazione: 'Il respiro è sempre con te ed è sicuro per tutte: l’espirazione lunga aiuta il corpo a rallentare. Puoi usarlo presto, appena la tensione sale, senza aspettare che diventi fortissima.' },
          { testo: 'Il nome di una persona da chiamare o a cui scrivere.', tag: 'resiste', spiegazione: 'Non devi reggere tutto da sola: cercare qualcuno è anch’essa un’abilità, non un fallimento. Scegliere adesso chi cercare rende più facile farlo quando è dura. Puoi salvarla tra «Le mie persone», nella finestra «Stasera è dura».' }
        ]
      }
    ],
    chiusura: {
      id: 'disagio-fine',
      domanda: 'Che cosa ti ha aiutata, questa settimana, ad attraversare un momento difficile? Scegli quello che ha aiutato di più, anche poco.',
      opzioni: [
        { testo: 'Fermarmi un attimo, prima di agire.', tag: 'impulso', spiegazione: 'Quel piccolo spazio tra la spinta e l’azione è una conquista vera: è proprio ciò che esercita STOP. Sei arrivata a stasera, e questo conta. Stanotte non c’è niente da fare.' },
        { testo: 'Il respiro o il movimento.', tag: 'corpo', spiegazione: 'Il corpo ti ha dato una mano, e puoi ringraziarlo: respiro e movimento agiscono sull’attivazione fisiologica prima che la mente si calmi. Prova ancora un respiro lungo, adesso, e lascia che le spalle scendano.' },
        { testo: 'Qualcosa di caldo e morbido, per i sensi.', tag: 'accoglie', spiegazione: 'Hai saputo darti conforto, ed è un’abilità preziosa (autoconsolazione). Tieni quella cosa vicino anche stanotte. Il momento passa, e tu resti.' },
        { testo: 'Ho tenuto duro, come potevo.', tag: 'resiste', spiegazione: 'Hai retto, e sei arrivata a stasera: è la parte più difficile, ed è fatta. Adesso puoi lasciare la presa. Questo momento passa. Tu resti.' }
      ]
    },
    riepilogo: {
      impulso: { frase: 'Stasera ti sei riconosciuta soprattutto nell’urgenza di agire subito quando il dolore sale. È una spinta umana dell’emozione, e si può rallentare.', domani: 'Prova STOP una volta, su una cosa piccola: fermati, un passo indietro, osserva, poi procedi con consapevolezza.' },
      resiste: { frase: 'Stasera ti sei riconosciuta soprattutto nel tenere duro da sola. È una forza, ma non devi usarla sempre e soltanto tu: le abilità funzionano meglio se non aspetti il culmine.', domani: 'Appena senti salire la tensione, fai subito un minuto di respiro lento, senza aspettare che cresca.' },
      corpo: { frase: 'Stasera ti sei riconosciuta soprattutto nel calmarti attraverso il corpo: respiro, movimento, i cinque sensi. È agire sull’attivazione fisiologica, e funziona.', domani: 'Seduta comoda, fai un minuto di respiro con l’espirazione più lunga dell’inspirazione.' },
      accoglie: { frase: 'Stasera ti sei riconosciuta soprattutto nel calmarti con i sensi e nell’accogliere ciò che non puoi cambiare subito (accettazione). Sono due abilità vere di tolleranza del disagio.', domani: 'Metti vicino al letto una cosa che calma i tuoi sensi: una coperta, un profumo, una foto.' }
    }
  },

  /* ---------------- sabato: Valore di sé ---------------- */
  valore: {
    scene: [
      {
        id: 'valore-1', tipo: 'riconosci', multi: false,
        domanda: 'Oggi hai fatto un errore al lavoro e un collega te l’ha fatto notare. Stasera ci ripensi. Che cosa ti dici?',
        fonte: 'Linehan (2015), DBT Skills Training Manual · Regolazione emotiva: controllare i fatti, azione opposta alla vergogna; Efficacia interpersonale: autovalidazione',
        opzioni: [
          { testo: 'Sono un disastro, non combino mai niente di buono.', tag: 'critica', spiegazione: 'Quando si sbaglia, la voce dura arriva in fretta, soprattutto se l’hai sentita spesso nella tua storia: l’autocritica severa è spesso una voce che si è imparata e fatta propria. Ha senso che faccia male. Ma un errore è un fatto, non un giudizio su tutta te: «non combino mai niente» è un pensiero tutto o niente. Prova a chiederti: che cosa direi a un’amica che ha fatto lo stesso errore? Probabilmente qualcosa di più giusto, e più gentile.' },
          { testo: 'Succede: domani provo a sistemarlo.', tag: 'valida', spiegazione: 'È un modo equilibrato di guardare l’errore: riconosci il fatto e guardi a ciò che puoi fare. Se ti viene naturale, è una forza da riconoscerti. Se invece lo dici ma dentro brucia ancora, va bene: puoi fare autovalidazione, cioè riconoscerti che l’emozione ha un senso nel suo contesto. «Ha senso che ci sia rimasta male: ci tengo a fare bene.»' },
          { testo: 'Mi vergogno e non voglio più guardarlo in faccia.', tag: 'nasconde', spiegazione: 'La vergogna dopo un errore è frequente e molto dolorosa: ti senti esposta, e la sua spinta è nasconderti. Ma evitare lo sguardo dell’altro tende a farla crescere. Per questo si usa l’azione opposta: quando la vergogna è più grande dei fatti, si agisce al contrario della spinta, con un piccolo passo, come salutarlo domani come sempre. Puoi prima validarla («ha senso che mi senta così»). Le due cose stanno insieme.' },
          { testo: 'Penso che il collega ce l’abbia con me.', tag: 'critica', spiegazione: 'Quando ti senti criticata, è facile leggere ostilità anche dove forse non c’è: la mente cerca di proteggerti. È un’interpretazione, non un fatto. Controllare i fatti vuol dire separare: che cosa ha detto davvero? Quali altre spiegazioni ci sono? E poi: che valore ho io, al di là di questo errore? Il tuo valore non dipende da una giornata.' }
        ]
      },
      {
        id: 'valore-2', tipo: 'riconosci', multi: false,
        domanda: 'Qualcuno ti fa un complimento sincero per una cosa che hai fatto. Come reagisci, di solito?',
        fonte: 'Linehan (2015), DBT Skills Training Manual · Regolazione emotiva: accumulare emozioni positive e viverle con consapevolezza; Efficacia interpersonale: autovalidazione',
        opzioni: [
          { testo: 'Sminuisco: «ma figurati, non è niente».', tag: 'sminuisce', spiegazione: 'Sminuire è un riflesso molto comune: protegge dall’imbarazzo e dalla paura di sembrare presuntuosa. Il costo è che l’esperienza positiva ti scivola addosso senza lasciare niente, e le emozioni positive si accumulano solo se le lasci entrare. La prossima volta prova con un semplice «grazie», e lascia che resti un momento. Non è vanità: è permetterti di vedere ciò che fai di buono.' },
          { testo: 'Penso che lo dica solo per gentilezza.', tag: 'sminuisce', spiegazione: 'Se a lungo ti sei sentita poco creduta o poco vista, fidarsi delle parole belle è difficile: ha senso. Ma il dubbio non deve per forza vincere. Puoi lasciare aperta la possibilità che sia vero e aggiungere la tua voce: «che cosa ho fatto, io, che vorrei riconoscermi?». L’autovalidazione (riconoscerti da sola il valore di ciò che fai) si allena così.' },
          { testo: 'Mi fa piacere, ma poi ci ripenso e mi sembra di non meritarlo.', tag: 'critica', spiegazione: 'Succede a molte persone: il piacere arriva, poi una voce critica lo spegne. Le due cose possono convivere, e va bene. Prova a dare spazio al piacere un po’ più a lungo, anche solo per un respiro, osservandolo nel corpo. E chiediti: che cosa direi a una persona cara che ha fatto la stessa cosa? Probabilmente che se lo merita.' },
          { testo: 'Ringrazio e me lo tengo stretto.', tag: 'valida', spiegazione: 'Ricevere un complimento e lasciarlo entrare è un piccolo gesto di cura verso di te, e un modo di vivere un’esperienza positiva con consapevolezza. Se ti viene naturale, è prezioso. Puoi anche farne un esercizio: stasera ricordalo tra le cose che apprezzi di te. Nei giorni più duri, rileggerlo può ricordarti che sei più di una giornata difficile.' }
        ]
      },
      {
        id: 'valore-3', tipo: 'mito', multi: false,
        domanda: 'Se mi tratto con gentilezza, finirò per giustificare tutto e non cambierò mai.',
        fonte: 'Linehan (2015), DBT Skills Training Manual · Il percorso di mezzo (dialettica: accettazione e cambiamento) e validazione; Linehan (2021), Una vita degna di essere vissuta · validazione',
        opzioni: [
          { testo: 'È vero', tag: 'critica', spiegazione: 'È una paura molto diffusa: tante persone pensano che la severità sia l’unico motore per migliorare. Ma la durezza con sé stesse porta spesso vergogna, e la vergogna fa nascondere più che cambiare. Validare un’emozione non vuol dire giustificare tutto: puoi dirti «ha senso che io senta questo» e, insieme, voler cambiare un comportamento. È la logica dialettica: accettazione e cambiamento, tutte e due.' },
          { testo: 'È falso', tag: 'valida', spiegazione: 'Bene che tu la veda così, anche se la voce severa a volte insiste. La gentilezza non cancella la responsabilità: le dà un terreno più solido. Puoi validare un’emozione e, insieme, voler cambiare un comportamento: le due cose stanno insieme. Trattarti come tratteresti una persona cara rende il cambiamento più possibile, non meno.' },
          { testo: 'Dipende, non so', tag: 'valida', spiegazione: 'Ha senso chiederselo: la gentilezza non è dirsi che va sempre tutto bene. E infatti l’autovalidazione non è giustificarsi: è riconoscere che ciò che senti ha un senso, date le tue esperienze, e da lì scegliere che cosa vuoi cambiare. Puoi validare un’emozione e voler cambiare un comportamento: le due cose stanno insieme.' }
        ]
      },
      {
        id: 'valore-4', tipo: 'kit', multi: true,
        domanda: 'Quali di queste frasi vere ti darebbero un po’ di sollievo stasera? Spunta quelle che senti tue, anche se non ci credi del tutto.',
        fonte: 'Linehan (2015), DBT Skills Training Manual · Efficacia interpersonale: autovalidazione; Regolazione emotiva: valori e priorità',
        opzioni: [
          { testo: '«Ha senso che io mi senta così, con la mia storia.»', tag: 'valida', spiegazione: 'È il cuore dell’autovalidazione: non dici di avere ragione su tutto, dici che ciò che senti ha un perché, dati la tua storia e il momento. Puoi ripeterla a voce bassa.' },
          { testo: '«Oggi ho retto una cosa difficile, anche se piccola.»', tag: 'sminuisce', spiegazione: 'Alzarti, rispondere, respirare in un momento duro: sono cose vere, anche se nessuno le vede. Riconoscere i tuoi piccoli successi è un modo di costruire padronanza, e non è vanità: è giustizia verso di te.' },
          { testo: '«Un errore è un fatto, non è tutta me.»', tag: 'critica', spiegazione: 'Separare ciò che hai fatto da ciò che sei toglie peso alla vergogna (che giudica tutta la persona) e lascia spazio per rimediare, se serve.' },
          { testo: '«Posso volermi bene e voler cambiare, insieme.»', tag: 'critica', spiegazione: 'Gentilezza e cambiamento non si escludono: è la sintesi dialettica di accettazione e cambiamento. La prima rende il secondo più possibile. Puoi tenere tutte e due.' },
          { testo: '«Non sono troppo: ho il diritto di sentire ciò che sento.»', tag: 'nasconde', spiegazione: 'Non devi nascondere le tue emozioni per meritare un posto. Sentire non è una colpa: è parte dell’essere una persona, e ogni emozione ha una funzione, anche quando è intensa.' },
          { testo: '«C’è una cosa che apprezzo di me.»', tag: 'sminuisce', spiegazione: 'Se non la trovi subito, chiediti che cosa apprezzerebbe di te chi ti vuole bene. Spesso la risposta arriva da lì, e puoi usarla per fare autovalidazione.' },
          { testo: '«Domani voglio vivere un valore: gentilezza, coraggio, cura.»', tag: 'valida', spiegazione: 'Un valore è una direzione scelta, non un risultato: scegliere un valore per domani ti ricorda chi vuoi essere, al di là di come è andata oggi. Un gesto piccolo basta.' }
        ]
      }
    ],
    chiusura: {
      id: 'valore-fine',
      domanda: 'Se una persona cara avesse avuto la tua stessa giornata, che cosa le diresti stasera? Dillo anche a te.',
      opzioni: [
        { testo: '«Hai fatto quello che potevi.»', tag: 'critica', spiegazione: 'È vero anche per te. Oggi hai fatto ciò che potevi, con le forze che avevi. Stanotte puoi lasciar riposare anche la voce severa.' },
        { testo: '«Non sei troppo: hai il diritto di sentire.»', tag: 'nasconde', spiegazione: 'Ciò che senti ha un posto, e tu anche: è autovalidazione. Non devi nasconderti, almeno qui, almeno stanotte. Hai il diritto di sentire quello che senti.' },
        { testo: '«Guarda quante cose hai retto.»', tag: 'sminuisce', spiegazione: 'Prova a contarle, anche le più piccole: sono tue. Sei più di una giornata difficile. Puoi addormentarti con questo pensiero.' },
        { testo: '«Riposa: te lo meriti.»', tag: 'valida', spiegazione: 'Sì, te lo meriti, così come sei stasera. Respira, e lasciati riposare. Buonanotte.' }
      ]
    },
    riepilogo: {
      critica: { frase: 'Stasera ti sei riconosciuta soprattutto nella voce critica verso di te (l’autocritica). Forse l’hai sentita per tanto tempo: ora puoi conoscerne un’altra.', domani: 'Quando arriva una critica verso di te, chiediti: «lo direi così a un’amica?», e riscrivila più gentile.' },
      sminuisce: { frase: 'Stasera ti sei riconosciuta soprattutto nel fare piccole le tue cose buone (sminuire). Ti protegge dall’imbarazzo, ma ti toglie qualcosa.', domani: 'Scrivi una cosa che hai fatto bene oggi, anche minuscola, e lasciala lì senza aggiungere «ma».' },
      nasconde: { frase: 'Stasera ti sei riconosciuta soprattutto nella voglia di nasconderti quando ti senti esposta. È la spinta della vergogna: passa, e si può contrastare con piccoli passi opposti.', domani: 'Fai un piccolo passo verso qualcuno: un saluto, uno sguardo, una frase. Ne basta uno.' },
      valida: { frase: 'Stasera ti sei riconosciuta soprattutto nel dare un senso a ciò che senti. L’autovalidazione è già qui, in te.', domani: 'Di’ a voce bassa una frase vera: «ha senso che io mi senta così». Una volta sola.' }
    }
  }
};
