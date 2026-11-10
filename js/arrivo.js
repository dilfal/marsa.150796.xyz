/* Approdo – l’arrivo della sera: tensione, emozioni, corpo, bisogno, giornata, sonno e il passo di ieri.
   Ogni risposta riceve subito una spiegazione psicoeducativa breve e, dove serve, un piccolo passo concreto.
   Testi originali in italiano, parafrasati dalle fonti cliniche (DBT, MBT, attaccamento, modello GET): nessun passo è copiato.
   Le risposte si salvano per POSIZIONE (indice) in ogni elenco: dopo la pubblicazione non riordinare e non inserire voci in mezzo, aggiungi solo in fondo.
   `azione` dei bisogni: solo 'respiro' | 'sensi' | 'tema' | 'persone' | 'buonanotte'. */
window.Approdo = window.Approdo || {};
window.Approdo.Arrivo = {
  /* feedback per fascia di tensione 0-10: tre fasce che coprono 0..10 senza buchi */
  tensione: [
    {
      da: 0, a: 3, titolo: 'Una sera abbastanza tranquilla',
      frase: 'Anche la calma merita attenzione, non solo la fatica. Notare che cosa ti fa stare così (un posto, una persona, un ritmo) ti aiuta a ritrovare la strada nelle sere più dure.',
      fonte: 'Mindfulness (DBT)'
    },
    {
      da: 4, a: 7, titolo: 'Una tensione che si sente',
      frase: 'Il corpo è un po’ in allerta, e ha senso dopo una giornata intera. È il momento migliore per prenderti cura di te: le abilità funzionano meglio prima che la tensione arrivi in cima.',
      passo: 'Fai tre respiri con l’espirazione più lunga dell’inspirazione.',
      fonte: 'DBT · tolleranza del disagio'
    },
    {
      da: 8, a: 10, titolo: 'Tanta tensione, adesso',
      frase: 'È tanto, e ha senso che sia difficile. La tensione sale e scende come un’onda: anche quando sembra ferma in cima, sta già cambiando. Adesso non devi capire niente. Basta aiutare il corpo a scendere.',
      passi: [
        'Lascia uscire l’aria piano, più a lungo di quanto inspiri.',
        'Senti i piedi: premili piano contro il letto o il pavimento.',
        'Di’ a voce bassa il nome di ciò che senti: «è paura», «è rabbia».'
      ],
      fonte: 'DBT · tolleranza del disagio'
    }
  ],

  /* 12 emozioni (scegline fino a 3) */
  emozioni: [
    {
      id: 'tristezza', testo: 'Triste',
      spiegazione: 'Ha senso sentirsi tristi. La tristezza arriva quando perdiamo qualcosa o qualcuno ci manca: rallenta il corpo per farci fermare e ci spinge a cercare conforto. Non è debolezza: indica ciò a cui tieni.',
      passo: 'Avvolgiti in una coperta e chiediti piano: «Che cosa mi manca, stasera?»',
      fonte: 'DBT · funzioni delle emozioni'
    },
    {
      id: 'ansia', testo: 'In ansia',
      spiegazione: 'L’ansia è l’allarme del corpo: cuore veloce, respiro corto, muscoli pronti. Ha senso, vuole proteggerti. Di sera però suona spesso per pericoli che adesso non sono qui. Il corpo si calma prima dal respiro.',
      passo: 'Inspira contando fino a quattro, espira fino a sei. Cinque volte.',
      fonte: 'DBT · regolazione emotiva'
    },
    {
      id: 'rabbia', testo: 'Arrabbiata',
      spiegazione: 'La rabbia ha senso: arriva quando un limite viene superato o qualcosa di importante ti viene negato. Dà energia per difenderti, per questo il corpo si scalda e si tende. Sentirla va bene; conta che cosa scegli di farne.',
      passo: 'Apri le mani e lascia cadere le spalle: quando il corpo si scioglie, la rabbia cala un po’.',
      fonte: 'DBT · azione opposta'
    },
    {
      id: 'vergogna', testo: 'Mi vergogno',
      spiegazione: 'La vergogna fa male: scalda il viso e fa venire voglia di sparire. Nasce dalla paura di essere rifiutate, perché è legata al bisogno di appartenere. Ha senso sentirla. Ma provarla non vuol dire che tu sia sbagliata.',
      passo: 'Mettiti una mano sul petto e di’ piano: «Anche così, merito gentilezza».',
      fonte: 'DBT · regolazione emotiva'
    },
    {
      id: 'colpa', testo: 'In colpa',
      spiegazione: 'La colpa segnala che qualcosa è andato contro i tuoi valori: vuol dire che quei valori contano per te. A volte è giusta e invita a riparare; a volte è più grande dei fatti. Puoi chiederti con calma: che cosa è successo davvero?',
      passo: 'Se serve, pensa a un piccolo gesto di riparazione per domani. Se non serve, lascia andare.',
      fonte: 'DBT · controllare i fatti'
    },
    {
      id: 'solitudine', testo: 'Sola',
      spiegazione: 'Sentirsi sole fa male perché il bisogno di legami ci accompagna per tutta la vita, non solo da bambini. La solitudine non dice che non vali: dice che ti manca vicinanza. Ed è un bisogno legittimo.',
      passo: 'Pensa a una persona con cui ti sei sentita al sicuro, anche una volta sola. Tienila vicina, adesso.',
      fonte: 'Attaccamento'
    },
    {
      id: 'vuoto', testo: 'Vuota',
      spiegazione: 'Il vuoto è difficile da descrivere, e lo conoscono in tante. A volte arriva dopo emozioni troppo forti, come una pausa del sentire; a volte quando ci si sente lontane da ciò che conta. È una sensazione, non chi sei: e cambia.',
      passo: 'Cerca una sensazione piccola e precisa: la temperatura delle mani, il peso della coperta.',
      fonte: 'Mindfulness (DBT)'
    },
    {
      id: 'delusione', testo: 'Delusa',
      spiegazione: 'La delusione è la distanza tra ciò che speravi e ciò che è successo. Fa male proprio perché ci tenevi. Non vuol dire che sperare sia stato un errore, né che non ci sarà altro di buono.',
      passo: 'Di’ a te stessa: «Ci tenevo, ed è normale che mi dispiaccia».',
      fonte: 'Autovalidazione (DBT)'
    },
    {
      id: 'gelosia', testo: 'Gelosa',
      spiegazione: 'La gelosia nasce dalla paura di perdere un legame importante: ha senso, protegge ciò che ami. Quando è forte, però, la mente vede certezze dove ci sono solo ipotesi. Che cosa pensa l’altra persona non si vede da fuori.',
      passo: 'Trova due spiegazioni diverse per ciò che ti ha ingelosita, anche banali.',
      fonte: 'Mentalizzazione (MBT)'
    },
    {
      id: 'stanca', testo: 'Stanca',
      spiegazione: 'Sei stanca, e ha senso: le emozioni intense consumano energia quanto la fatica fisica. Un corpo stanco è anche più vulnerabile: tutto sembra più grande e più vicino. Non è debolezza, è un segnale da ascoltare.',
      passo: 'Fai una sola cosa per il corpo: un bicchiere d’acqua, la luce più bassa, il letto.',
      fonte: 'PLEASE (DBT)'
    },
    {
      id: 'sollievo', testo: 'Sollevata',
      spiegazione: 'Il sollievo arriva quando una tensione si scioglie: il respiro si allarga e i muscoli si allentano. Merita di essere notato, non solo vissuto di passaggio: il corpo che ricorda come si sta meglio ritrova più facilmente la strada.',
      passo: 'Resta dieci secondi sul sollievo: dove lo senti, nel corpo?',
      fonte: 'DBT · esperienze piacevoli'
    },
    {
      id: 'gratitudine', testo: 'Grata',
      spiegazione: 'La gratitudine e la tenerezza aprono il corpo verso gli altri e ricordano che c’è anche del buono, persino nelle giornate pesanti. Non cancellano la fatica: le stanno accanto. E crescono un po’ quando ti ci fermi.',
      passo: 'Pensa a chi o a che cosa sei grata, e dillo piano una volta.',
      fonte: 'DBT · esperienze piacevoli'
    }
  ],

  /* dove la senti nel corpo (scelta singola) */
  corpo: [
    {
      id: 'petto', testo: 'Nel petto',
      spiegazione: 'Nel petto si sentono spesso ansia, tristezza e vergogna: i muscoli del respiro si stringono e il fiato si accorcia. È il corpo che si prepara a reggere qualcosa. Un respiro più lento gli dice che può allentare.',
      passo: 'Mano sul petto: senti il calore e lascia uscire l’aria piano, più lunga di quella che entra.'
    },
    {
      id: 'gola', testo: 'In gola',
      spiegazione: 'Il nodo in gola compare spesso quando trattieni lacrime o parole: i muscoli si stringono per tenere dentro. Ha senso, a volte serve. Ma qui, adesso, non devi trattenere niente.',
      passo: 'Deglutisci piano, poi espira facendo un piccolo suono a bocca chiusa, come un mmm.'
    },
    {
      id: 'stomaco', testo: 'Nello stomaco',
      spiegazione: 'Lo stomaco risponde molto alle emozioni: quando il corpo è in allerta la digestione rallenta, e arrivano nodi, nausea o farfalle. Spesso è solo il corpo che reagisce alle emozioni.',
      passo: 'Appoggia una mano calda sulla pancia e lascia che si alzi e si abbassi con il respiro.'
    },
    {
      id: 'spalle', testo: 'Spalle e collo',
      spiegazione: 'Spalle e collo si irrigidiscono quando il corpo si prepara a difendersi o a portare un peso, spesso per ore senza che tu te ne accorga. Lasciare andare i muscoli dice al cervello: per ora puoi riposare.',
      passo: 'Alza le spalle verso le orecchie mentre inspiri, poi lasciale cadere espirando. Due volte.'
    },
    {
      id: 'testa', testo: 'Nella testa',
      spiegazione: 'Quando le emozioni sono tante, la testa si riempie: pensieri veloci, fronte e mascella tese. È la mente che prova a risolvere tutto insieme. Non serve fermarla: basta dare un po’ di spazio al corpo.',
      passo: 'Socchiudi la bocca, lascia morbide la mascella e la fronte, e la lingua lontana dal palato.'
    },
    {
      id: 'nonso', testo: 'Non lo so, da nessuna parte',
      spiegazione: 'Va bene non sentirla da nessuna parte. A volte il corpo si fa silenzioso, per stanchezza o per proteggerti dal sentire troppo. Ascoltarlo si impara piano piano, partendo da ciò che è più facile.',
      passo: 'Nota solo i piedi: sono caldi o freddi? Che cosa toccano?'
    }
  ],

  /* di che cosa ho bisogno adesso (scelta singola), con l’azione che l’app propone nella pagina stessa */
  bisogni: [
    {
      id: 'calmarmi', testo: 'Calmarmi',
      spiegazione: 'Quando la tensione è alta, la mente fatica ad ascoltare: prima va calmato il corpo. Un’espirazione più lunga dell’inspirazione aiuta il battito a rallentare. Facciamolo insieme, per un minuto.',
      azione: 'respiro'
    },
    {
      id: 'capire', testo: 'Capire che cosa provo',
      spiegazione: 'Non esistono emozioni buone o cattive: ognuna porta un’informazione. Capire che cosa provi, con calma, la rende più piccola e più tua. Il tema di stasera ti accompagna, una domanda alla volta.',
      azione: 'tema'
    },
    {
      id: 'sfogarmi', testo: 'Sfogarmi',
      spiegazione: 'Ha senso voler sfogare: l’emozione preme e cerca un’uscita. Piangere, se viene, va bene. Prima di scegliere come sfogarti, abbassa un po’ la pressione con i cinque sensi: così lo sfogo spesso costa meno, domani.',
      azione: 'sensi'
    },
    {
      id: 'compagnia', testo: 'Sentirmi meno sola',
      spiegazione: 'Di sera la solitudine pesa di più, ed è molto comune. Il bisogno di vicinanza è sano. Qui trovi le tue persone: anche solo pensarle, o preparare un messaggio per domani, ricorda che il legame c’è.',
      azione: 'persone'
    },
    {
      id: 'dormire', testo: 'Solo dormire',
      spiegazione: 'Va bene volere solo dormire: a volte riposare è la cura migliore. Durante il sonno le emozioni si riassestano, e spesso, domani, ci si sente meno esposte. Abbassa le luci: c’è la buonanotte di stasera.',
      azione: 'buonanotte'
    }
  ],

  /* com’è andata la giornata */
  giornata: [
    {
      id: 'pesante', testo: 'Pesante',
      spiegazione: 'Una giornata pesante lascia il corpo carico anche dopo. Se hai mangiato di fretta o ti sei mossa poco, tutto pesa di più: è il corpo, non una tua colpa. Stasera basta un gesto di cura: un pasto caldo, acqua, luce bassa.'
    },
    {
      id: 'cosi', testo: 'Così così',
      spiegazione: 'Le giornate «così così» sono le più comuni, e contano. Spesso cambia molto con poco: un pasto regolare, due passi, una pausa. Non per fare meglio, ma perché un corpo nutrito e un po’ mosso regge le emozioni con meno fatica.'
    },
    {
      id: 'buona', testo: 'Buona',
      spiegazione: 'Che bello. Le giornate buone meritano attenzione: dietro ci sono spesso cose semplici, come aver mangiato con calma, essersi mosse, aver dormito. Ricordarle ti dà una mappa per tornarci nei giorni più duri.'
    }
  ],

  /* il sonno di ieri notte */
  sonno: [
    {
      id: 'poco', testo: 'Ho dormito poco',
      spiegazione: 'Dopo una notte corta le emozioni arrivano più forti e più in fretta: un cervello stanco frena meno. Non è colpa tua e non dice niente di te. Anche dopo una notte corta puoi trattarti con cura stasera: luce bassa, schermo lontano.'
    },
    {
      id: 'pezzi', testo: 'A pezzi, mi svegliavo',
      spiegazione: 'Un sonno a pezzi stanca quasi quanto un sonno corto e rende la giornata più fragile. Succede spesso quando la mente resta in allerta. Stasera può aiutare un rito semplice e sempre uguale: stessa ora, luce bassa, un respiro lento a letto.'
    },
    {
      id: 'abbastanza', testo: 'Abbastanza bene',
      spiegazione: 'Bene: il sonno è una delle basi dell’equilibrio emotivo, e un corpo riposato regge meglio le onde della giornata. Puoi proteggerlo anche stasera, con l’orario di sempre e qualche minuto senza schermo.'
    }
  ],

  /* «Ieri sera ti avevo proposto una piccola cosa»: com’è andata */
  ieri: [
    {
      id: 'provata', testo: 'Sì, l’ho provata',
      spiegazione: 'Hai provato, e questo conta più del risultato. Ogni volta che usi un’abilità, anche piccola, la ricordi un po’ meglio per la volta dopo. Se ti ha fatto bene, tienila nel tuo kit.'
    },
    {
      id: 'poco', testo: 'Un po’, non fino in fondo',
      spiegazione: 'Un po’ è già qualcosa: le abilità si imparano a pezzi, come una lingua nuova. Non serve farle fino in fondo perché lascino traccia. Se ti va, stasera puoi riprenderla da dove ti eri fermata.'
    },
    {
      id: 'no', testo: 'Non ci sono riuscita',
      spiegazione: 'Va bene così. A volte la sera è troppo piena, o la tensione troppo alta per provare qualcosa di nuovo. Non è un fallimento: è un’informazione. La prossima volta può bastare una mossa ancora più piccola.'
    },
    {
      id: 'dimenticata', testo: 'Me n’ero dimenticata',
      spiegazione: 'Succede spesso: all’inizio le abitudini nuove si dimenticano facilmente, soprattutto nelle giornate piene. Non c’è niente da recuperare. Se vuoi, legala a una cosa che fai già, come lavarti i denti.'
    }
  ]
};
