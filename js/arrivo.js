/* Marsa – l’arrivo della sera e le dodici emozioni.
   Dalla v1.18 l’Arrivo chiede solo la tensione (e, se c’è, com’è andata la piccola cosa di ieri): `breve` è la risposta
   in una riga; la spiegazione intera della tensione sta dietro «Perché?». Le `emozioni` si leggono nella pagina
   «Le emozioni» (#parole). `corpo`, `bisogni`, `giornata` e `sonno` non si chiedono più: restano qui solo perché
   il diario possa leggere le serate già salvate.
   Testi originali in italiano, parafrasati dalle fonti cliniche (DBT, MBT, attaccamento, mindfulness, modello GET): nessun passo è copiato.
   Ogni voce porta la `fonte` (autore, anno, opera, argomento), mostrata in piccolo sotto la spiegazione.
   Le risposte si salvano per POSIZIONE (indice) in ogni elenco: dopo la pubblicazione non riordinare e non inserire voci in mezzo, aggiungi solo in fondo. */
window.Marsa = window.Marsa || {};
window.Marsa.Arrivo = {
  /* feedback per fascia di tensione 0-10: tre fasce che coprono 0..10 senza buchi */
  tensione: [
    {
      da: 0, a: 3, titolo: 'Una sera abbastanza tranquilla',
      breve: 'Bene. Anche la calma merita attenzione: portala con te nella lettura.',
      frase: 'Anche la calma merita attenzione, non solo la fatica. Nota che cosa ti fa stare così (un posto, una persona, un ritmo): osservare ciò che senti ora, senza cambiarlo, è mindfulness delle emozioni correnti. È anche una riserva di cose buone, per ritrovare la strada nelle sere più dure.',
      fonte: 'Linehan (2015), DBT Skills Training Manual · Regolazione emotiva: mindfulness delle emozioni correnti e accumulare emozioni positive'
    },
    {
      da: 4, a: 7, titolo: 'Una tensione che si sente',
      breve: 'Ha senso, dopo una giornata intera. Se vuoi, tre respiri con l’espirazione più lunga, poi cominciamo.',
      frase: 'Il corpo è un po’ in allerta, e ha senso dopo una giornata intera: il sistema di allarme si è attivato e non è ancora sceso. È il momento migliore per prenderti cura di te. Le abilità di tolleranza del disagio (quelle che permettono di stare in un momento difficile senza peggiorarlo) funzionano meglio prima che la tensione arrivi in cima.',
      passo: 'Fai tre respiri con l’espirazione più lunga dell’inspirazione: è respirazione ritmata, e può aiutare il corpo a rallentare.',
      fonte: 'Linehan (2015), DBT Skills Training Manual · Tolleranza del disagio: respirazione ritmata'
    },
    {
      da: 8, a: 10, titolo: 'Tanta tensione, adesso',
      frase: 'È tanto, e ha senso che sia difficile. La tensione sale e scende come un’onda: anche quando sembra ferma in cima, sta già cambiando. Con tanta tensione la «mente emotiva» (quella che guida con le emozioni, non con il ragionamento) prende il comando e capire diventa faticoso. Adesso non devi capire niente. Basta aiutare il corpo a scendere.',
      passi: [
        'Lascia uscire l’aria piano, più a lungo di quanto inspiri: l’espirazione lunga aiuta il corpo a rallentare.',
        'Senti i piedi: premili piano contro il letto o il pavimento, per riportare l’attenzione qui e ora.',
        'Di’ a voce bassa il nome di ciò che senti: «è paura», «è rabbia». Dare un nome all’emozione aiuta a distinguerla e a guardarla da un passo di distanza.'
      ],
      fonte: 'Linehan (2015), DBT Skills Training Manual · Tolleranza del disagio: respirazione ritmata; Regolazione emotiva: descrivere le emozioni e mindfulness delle emozioni correnti («cavalcare l’onda»)'
    }
  ],

  /* 12 emozioni (scegline fino a 3) */
  emozioni: [
    {
      id: 'tristezza', testo: 'Triste',
      spiegazione: 'Ha senso sentirsi tristi. La tristezza è un’emozione primaria, cioè la risposta diretta a ciò che accade, prima di ogni commento della mente. Arriva quando perdiamo qualcosa o qualcuno ci manca: rallenta il corpo per farci fermare e ci spinge a cercare conforto. Non è debolezza: indica ciò a cui tieni.',
      passo: 'Avvolgiti in una coperta e chiediti piano: «Che cosa mi manca, stasera?»',
      fonte: 'Linehan (2015), DBT Skills Training Manual · Regolazione emotiva: funzioni delle emozioni, emozioni primarie e secondarie; Carbone (2025), Come ti senti? · la tristezza'
    },
    {
      id: 'ansia', testo: 'In ansia',
      spiegazione: 'L’ansia è l’allarme del corpo, la sua risposta di attivazione davanti a una minaccia: cuore veloce, respiro corto, muscoli pronti. Ha senso, vuole proteggerti. Di sera però suona spesso per pericoli anticipati dalla mente, non presenti adesso. Puoi partire dal respiro: un’espirazione lunga aiuta il corpo a rallentare.',
      passo: 'Inspira contando fino a quattro, espira fino a sei. Cinque volte.',
      fonte: 'Linehan (2015), DBT Skills Training Manual · Regolazione emotiva: funzioni delle emozioni; Tolleranza del disagio: respirazione ritmata'
    },
    {
      id: 'rabbia', testo: 'Arrabbiata',
      spiegazione: 'La rabbia ha senso: arriva quando un limite viene superato o qualcosa di importante ti viene negato. Dà energia per difenderti, per questo il corpo si scalda e si tende. Sentirla va bene; conta che cosa scegli di farne. Quando l’impulso non ti aiuta, l’azione opposta (fare il contrario di ciò che l’emozione spinge a fare, per esempio con mani e viso distesi) allenta la presa.',
      passo: 'Apri le mani e lascia cadere le spalle: quando il corpo si scioglie, la rabbia cala un po’.',
      fonte: 'Linehan (2015), DBT Skills Training Manual · Regolazione emotiva: azione opposta'
    },
    {
      id: 'vergogna', testo: 'Mi vergogno',
      spiegazione: 'La vergogna fa male: scalda il viso e fa venire voglia di sparire. È legata al bisogno di appartenere e segnala la paura di essere rifiutate; la validazione (sentirsi dire «ha senso che tu senta così») la ammorbidisce. Ha senso sentirla. Ma provarla non vuol dire che tu sia sbagliata.',
      passo: 'Mettiti una mano sul petto e di’ piano: «Anche così, merito gentilezza».',
      fonte: 'Linehan (2015), DBT Skills Training Manual · Regolazione emotiva: funzioni delle emozioni e azione opposta alla vergogna; Carbone (2025), Come ti senti? · la vergogna, identità e appartenenza'
    },
    {
      id: 'colpa', testo: 'In colpa',
      spiegazione: 'La colpa segnala che qualcosa è andato contro i tuoi valori: vuol dire che quei valori contano per te. A volte è giustificata e invita a riparare; a volte è più grande dei fatti. Controllare i fatti (separare ciò che è successo davvero dalle interpretazioni della mente) ti aiuta a capire quale dei due casi è. Puoi chiederti con calma: che cosa è successo davvero?',
      passo: 'Se serve, pensa a un piccolo gesto di riparazione per domani. Se non serve, lascia andare.',
      fonte: 'Linehan (2015), DBT Skills Training Manual · Regolazione emotiva: controllare i fatti e azione opposta (colpa giustificata e non giustificata)'
    },
    {
      id: 'solitudine', testo: 'Sola',
      spiegazione: 'Sentirsi sole fa male perché il bisogno di legami, l’attaccamento, ci accompagna per tutta la vita, non solo da bambini: una base sicura, cioè una persona a cui sai di poter tornare, aiuta a regolare il disagio. La solitudine non dice che non vali: dice che ti manca vicinanza. Ed è un bisogno legittimo.',
      passo: 'Pensa a una persona con cui ti sei sentita al sicuro, anche una volta sola. Tienila vicina, adesso.',
      fonte: 'Bowlby (1989), Una base sicura · attaccamento e base sicura'
    },
    {
      id: 'vuoto', testo: 'Vuota',
      spiegazione: 'Il vuoto è difficile da descrivere, e lo conoscono in tante. A volte arriva dopo emozioni troppo forti, come una pausa del sentire; a volte quando ci si sente lontane da ciò che conta. È una sensazione, non chi sei: e cambia.',
      passo: 'Cerca una sensazione piccola e precisa: la temperatura delle mani, il peso della coperta.',
      fonte: 'Linehan (2015), DBT Skills Training Manual · Regolazione emotiva: mindfulness delle emozioni correnti; Carbone (2023), Crisi tempestose · il senso di vuoto'
    },
    {
      id: 'delusione', testo: 'Delusa',
      spiegazione: 'La delusione è la distanza tra ciò che speravi e ciò che è successo. Fa male proprio perché ci tenevi. Non vuol dire che sperare sia stato un errore, né che non ci sarà altro di buono. Dirti che il dolore ha senso è autovalidazione: riconoscere i propri sentimenti come comprensibili, senza giudicarli.',
      passo: 'Di’ a te stessa: «Ci tenevo, ed è normale che mi dispiaccia».',
      fonte: 'Linehan (2015), DBT Skills Training Manual · Efficacia interpersonale: validazione e autovalidazione'
    },
    {
      id: 'gelosia', testo: 'Gelosa',
      spiegazione: 'La gelosia nasce dalla paura di perdere un legame importante: ha senso, protegge ciò che ami. Quando è forte, però, la mente vede certezze dove ci sono solo ipotesi (in MBT si chiama equivalenza psichica: ciò che pensi ti sembra per forza vero). Che cosa pensa l’altra persona non si vede da fuori: mentalizzare vuol dire immaginarlo senza darlo per certo.',
      passo: 'Trova due spiegazioni diverse per ciò che ti ha ingelosita, anche banali.',
      fonte: 'Bateman e Fonagy (2016), Mentalization-Based Treatment for Personality Disorders · mentalizzare ed equivalenza psichica; Linehan (2015), DBT Skills Training Manual · Regolazione emotiva: controllare i fatti'
    },
    {
      id: 'stanca', testo: 'Stanca',
      spiegazione: 'Sei stanca, e ha senso: le emozioni intense stancano anche il corpo. Un corpo stanco ha anche una maggiore vulnerabilità emotiva (reagisce prima e più forte): tutto sembra più grande e più vicino. Non è debolezza, è un segnale da ascoltare. Curare il corpo, con sonno, cibo e movimento, è ciò che chiedono le abilità PLEASE.',
      passo: 'Fai una sola cosa per il corpo: un bicchiere d’acqua, la luce più bassa, il letto.',
      fonte: 'Linehan (2015), DBT Skills Training Manual · Regolazione emotiva: ridurre la vulnerabilità emotiva (PLEASE)'
    },
    {
      id: 'sollievo', testo: 'Sollevata',
      spiegazione: 'Il sollievo arriva quando una tensione si scioglie: il respiro si allarga e i muscoli si allentano. Merita di essere notato, non solo vissuto di passaggio: fermarsi sulle esperienze piacevoli mentre accadono (mindfulness delle emozioni positive) permette al corpo di ricordare come si sta meglio e di ritrovare più facilmente la strada.',
      passo: 'Resta dieci secondi sul sollievo: dove lo senti, nel corpo?',
      fonte: 'Linehan (2015), DBT Skills Training Manual · Regolazione emotiva: accumulare emozioni positive e mindfulness delle emozioni correnti'
    },
    {
      id: 'gratitudine', testo: 'Grata',
      spiegazione: 'La gratitudine e la tenerezza aprono il corpo verso gli altri e ricordano che c’è anche del buono, persino nelle giornate pesanti. Non cancellano la fatica: le stanno accanto. Fermarti su ciò che è buono è un modo di accumulare emozioni positive, e queste crescono un po’ quando ti ci fermi.',
      passo: 'Pensa a chi o a che cosa sei grata, e dillo piano una volta.',
      fonte: 'Linehan (2015), DBT Skills Training Manual · Regolazione emotiva: accumulare emozioni positive; Carbone (2025), Come ti senti? · la gratitudine'
    }
  ],

  /* dove la senti nel corpo (scelta singola) */
  corpo: [
    {
      id: 'petto', testo: 'Nel petto',
      spiegazione: 'Nel petto si sentono spesso ansia, tristezza e vergogna: i muscoli del respiro si stringono e il fiato si accorcia. È il corpo che si prepara a reggere qualcosa. Un respiro lento, con l’espirazione più lunga, aiuta il corpo a rallentare e ad allentare.',
      passo: 'Mano sul petto: senti il calore e lascia uscire l’aria piano, più lunga di quella che entra.',
      fonte: 'Linehan (2015), DBT Skills Training Manual · Tolleranza del disagio: respirazione ritmata; Regolazione emotiva: osservare dove senti l’emozione nel corpo'
    },
    {
      id: 'gola', testo: 'In gola',
      spiegazione: 'Il nodo in gola compare spesso quando trattieni lacrime o parole: i muscoli si stringono per tenere dentro (è un freno all’espressione dell’emozione). Ha senso, a volte serve. Ma qui, adesso, non devi trattenere niente.',
      passo: 'Deglutisci piano, poi espira facendo un piccolo suono a bocca chiusa, come un mmm.',
      fonte: 'Linehan (2015), DBT Skills Training Manual · Regolazione emotiva: mindfulness delle emozioni correnti (notare le sensazioni nel corpo)'
    },
    {
      id: 'stomaco', testo: 'Nello stomaco',
      spiegazione: 'Lo stomaco risponde molto alle emozioni: quando il corpo è in allerta la digestione rallenta, e arrivano nodi, nausea o farfalle. È la risposta di allarme del corpo, non un segno che qualcosa non vada in te.',
      passo: 'Appoggia una mano calda sulla pancia e lascia che si alzi e si abbassi con il respiro.',
      fonte: 'Linehan (2015), DBT Skills Training Manual · Tolleranza del disagio: respirazione ritmata; Regolazione emotiva: osservare le sensazioni del corpo'
    },
    {
      id: 'spalle', testo: 'Spalle e collo',
      spiegazione: 'Spalle e collo si irrigidiscono quando il corpo si prepara a difendersi o a portare un peso, spesso per ore senza che tu te ne accorga. Alternare un po’ di tensione e il suo rilascio (è il principio del rilassamento muscolare) dice al cervello: per ora puoi riposare.',
      passo: 'Alza le spalle verso le orecchie mentre inspiri, poi lasciale cadere espirando. Due volte.',
      fonte: 'Linehan (2015), DBT Skills Training Manual · Tolleranza del disagio: rilassamento muscolare abbinato al respiro'
    },
    {
      id: 'testa', testo: 'Nella testa',
      spiegazione: 'Quando le emozioni sono tante, la testa si riempie: pensieri veloci che girano sugli stessi temi (rimuginio), fronte e mascella tese. È la mente che prova a risolvere tutto insieme. Non serve fermarla: basta dare un po’ di spazio al corpo e ricordarti che un pensiero non è un fatto.',
      passo: 'Socchiudi la bocca, lascia morbide la mascella e la fronte, e la lingua lontana dal palato.',
      fonte: 'Linehan (2015), DBT Skills Training Manual · Tolleranza del disagio: sorriso appena accennato con volto e mascella rilassati; Williams, Teasdale, Segal e Kabat-Zinn (2010), Ritrovare la serenità · ruminazione e pensieri come eventi mentali'
    },
    {
      id: 'nonso', testo: 'Non lo so, da nessuna parte',
      spiegazione: 'Va bene non sentirla da nessuna parte. A volte il corpo si fa silenzioso, per stanchezza o per proteggerti dal sentire troppo (un distacco dalle sensazioni). Ascoltarlo si impara piano piano, partendo da ciò che è più facile, come si fa nella scansione del corpo.',
      passo: 'Nota solo i piedi: sono caldi o freddi? Che cosa toccano?',
      fonte: 'Williams, Teasdale, Segal e Kabat-Zinn (2010), Ritrovare la serenità · scansione del corpo; Linehan (2015), DBT Skills Training Manual · mindfulness: osservare e descrivere le sensazioni'
    }
  ],

  /* di che cosa ho bisogno adesso (scelta singola), con l’azione che l’app propone nella pagina stessa */
  bisogni: [
    {
      id: 'calmarmi', testo: 'Calmarmi',
      spiegazione: 'Quando la tensione è alta, la mente fatica ad ascoltare: la «mente emotiva» prende il comando sul ragionamento, e prima va calmato il corpo. Un’espirazione più lunga dell’inspirazione aiuta il corpo a rallentare. Facciamolo insieme, per un minuto.',
      azione: 'respiro',
      fonte: 'Linehan (2015), DBT Skills Training Manual · Tolleranza del disagio: respirazione ritmata; Mindfulness: mente emotiva e mente saggia'
    },
    {
      id: 'capire', testo: 'Capire che cosa provo',
      spiegazione: 'Non esistono emozioni buone o cattive: ognuna porta un’informazione. Capire che cosa provi, con calma, la rende più piccola e più tua. Dare un nome preciso a ciò che senti (allargare il proprio vocabolario emotivo) è già una forma di regolazione. Il tema di stasera ti accompagna, una domanda alla volta.',
      azione: 'tema',
      fonte: 'Linehan (2015), DBT Skills Training Manual · Regolazione emotiva: descrivere le emozioni; Carbone (2023), Crisi tempestose · vocabolario emotivo e regolazione emotiva'
    },
    {
      id: 'sfogarmi', testo: 'Sfogarmi',
      spiegazione: 'Ha senso voler sfogare: l’emozione preme e cerca un’uscita. Piangere, se viene, va bene. Prima di scegliere come sfogarti, abbassa un po’ la pressione con i cinque sensi (è una tecnica di tolleranza del disagio: calmarsi con vista, udito, olfatto, gusto e tatto): così lo sfogo spesso costa meno, domani.',
      azione: 'sensi',
      fonte: 'Linehan (2015), DBT Skills Training Manual · Tolleranza del disagio: calmarsi con i cinque sensi'
    },
    {
      id: 'compagnia', testo: 'Sentirmi meno sola',
      spiegazione: 'Di sera la solitudine pesa di più, ed è molto comune. Il bisogno di vicinanza è sano: è il sistema di attaccamento che cerca una base sicura. Qui trovi le tue persone: anche solo pensarle, o preparare un messaggio per domani, ricorda che il legame c’è.',
      azione: 'persone',
      fonte: 'Bowlby (1989), Una base sicura · attaccamento e base sicura'
    },
    {
      id: 'dormire', testo: 'Solo dormire',
      spiegazione: 'Va bene volere solo dormire: a volte riposare è la cura migliore. Il sonno è una delle basi per ridurre la vulnerabilità emotiva (reagire meno forte e meno in fretta): dopo una notte di riposo, spesso ci si sente meno esposte. Abbassa le luci: c’è la buonanotte di stasera.',
      azione: 'buonanotte',
      fonte: 'Linehan (2015), DBT Skills Training Manual · Regolazione emotiva: ridurre la vulnerabilità emotiva (PLEASE) e protocollo di igiene del sonno'
    }
  ],

  /* com’è andata la giornata */
  giornata: [
    {
      id: 'pesante', testo: 'Pesante',
      spiegazione: 'Una giornata pesante lascia il corpo carico anche dopo. Se hai mangiato di fretta o ti sei mossa poco, aumenta la vulnerabilità emotiva (la facilità a reagire forte): è il corpo, non una tua colpa. Stasera basta un gesto di cura: un pasto caldo, acqua, luce bassa.',
      fonte: 'Linehan (2015), DBT Skills Training Manual · Regolazione emotiva: ridurre la vulnerabilità emotiva (PLEASE)'
    },
    {
      id: 'cosi', testo: 'Così così',
      spiegazione: 'Le giornate «così così» sono le più comuni, e contano. Spesso cambia molto con poco: un pasto regolare, due passi, una pausa. Non per fare meglio, ma perché un corpo nutrito e un po’ mosso riduce la vulnerabilità emotiva (la facilità a reagire forte) e regge le emozioni con meno fatica.',
      fonte: 'Linehan (2015), DBT Skills Training Manual · Regolazione emotiva: ridurre la vulnerabilità emotiva (PLEASE)'
    },
    {
      id: 'buona', testo: 'Buona',
      spiegazione: 'Che bello. Le giornate buone meritano attenzione: dietro ci sono spesso cose semplici, come aver mangiato con calma, essersi mosse, aver dormito. Ricordarle, cioè accumulare esperienze positive, ti dà una mappa per tornarci nei giorni più duri.',
      fonte: 'Linehan (2015), DBT Skills Training Manual · Regolazione emotiva: accumulare emozioni positive e ridurre la vulnerabilità emotiva (PLEASE)'
    }
  ],

  /* il sonno di ieri notte */
  sonno: [
    {
      id: 'poco', testo: 'Ho dormito poco',
      spiegazione: 'Dopo una notte corta le emozioni arrivano più forti e più in fretta: un cervello stanco frena meno, cioè la vulnerabilità emotiva aumenta. Non è colpa tua e non dice niente di te. Anche dopo una notte corta puoi trattarti con cura stasera: luce bassa, schermo lontano.',
      fonte: 'Linehan (2015), DBT Skills Training Manual · Regolazione emotiva: ridurre la vulnerabilità emotiva (PLEASE) e protocollo di igiene del sonno'
    },
    {
      id: 'pezzi', testo: 'A pezzi, mi svegliavo',
      spiegazione: 'Un sonno a pezzi stanca quasi quanto un sonno corto e rende la giornata più fragile. Succede spesso quando la mente resta in allerta (iperattivazione). Stasera può aiutare un rito semplice e sempre uguale, tipico dell’igiene del sonno: stessa ora, luce bassa, un respiro lento a letto.',
      fonte: 'Linehan (2015), DBT Skills Training Manual · Regolazione emotiva: protocollo di igiene del sonno; Tolleranza del disagio: respirazione ritmata'
    },
    {
      id: 'abbastanza', testo: 'Abbastanza bene',
      spiegazione: 'Bene: il sonno è una delle basi dell’equilibrio emotivo (nella DBT è una delle abilità PLEASE), e un corpo riposato regge meglio le onde della giornata. Puoi proteggerlo anche stasera, con l’orario di sempre e qualche minuto senza schermo.',
      fonte: 'Linehan (2015), DBT Skills Training Manual · Regolazione emotiva: ridurre la vulnerabilità emotiva (PLEASE) e protocollo di igiene del sonno'
    }
  ],

  /* «Ieri sera ti avevo proposto una piccola cosa»: com’è andata */
  ieri: [
    {
      id: 'provata', testo: 'Sì, l’ho provata',
      breve: 'Hai provato, e questo conta più del risultato.',
      spiegazione: 'Hai provato, e questo conta più del risultato. Ogni volta che usi un’abilità, anche piccola, la ricordi un po’ meglio per la volta dopo: è così che si impara a usarla anche in situazioni diverse (generalizzazione). Se ti ha fatto bene, tienila nel tuo kit.',
      fonte: 'Linehan (2015), DBT Skills Training Manual · generalizzazione delle abilità; Regolazione emotiva: costruire padronanza'
    },
    {
      id: 'poco', testo: 'Un po’, non fino in fondo',
      breve: 'Un po’ è già qualcosa: le abilità si imparano a pezzi.',
      spiegazione: 'Un po’ è già qualcosa: le abilità si imparano a pezzi, come una lingua nuova, con piccoli passi che costruiscono padronanza. Non serve farle fino in fondo perché lascino traccia. Se ti va, stasera puoi riprenderla da dove ti eri fermata.',
      fonte: 'Linehan (2015), DBT Skills Training Manual · Regolazione emotiva: costruire padronanza; generalizzazione delle abilità'
    },
    {
      id: 'no', testo: 'Non ci sono riuscita',
      breve: 'Va bene così. Non è un fallimento: è un’informazione.',
      spiegazione: 'Va bene così. A volte la sera è troppo piena, o la tensione troppo alta per provare qualcosa di nuovo. Non è un fallimento: è un’informazione su che cosa ti ha ostacolata (la DBT la tratta come un anello mancante da capire, non come una colpa). La prossima volta può bastare una mossa ancora più piccola.',
      fonte: 'Linehan (2015), DBT Skills Training Manual · analisi degli anelli mancanti; Regolazione emotiva: costruire padronanza'
    },
    {
      id: 'dimenticata', testo: 'Me n’ero dimenticata',
      breve: 'Succede spesso. Non c’è niente da recuperare.',
      spiegazione: 'Succede spesso: all’inizio le abitudini nuove si dimenticano facilmente, soprattutto nelle giornate piene, perché la mente va col pilota automatico. Non c’è niente da recuperare. Se vuoi, legala a una cosa che fai già, come lavarti i denti.',
      fonte: 'Williams, Teasdale, Segal e Kabat-Zinn (2010), Ritrovare la serenità · il pilota automatico e le attività di routine; Linehan (2015), DBT Skills Training Manual · analisi degli anelli mancanti'
    }
  ]
};
