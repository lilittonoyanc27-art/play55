export interface Question {
  id: number;
  sentence: string;
  options: string[];
  correct: string;
  translation: string;
  explanation: string;
}

export const POR_PARA_QUESTIONS: Question[] = [
  {
    id: 1,
    sentence: "Este café es ___ ti.",
    options: ["por", "para"],
    correct: "para",
    translation: "Այս սուրճը քեզ համար է:",
    explanation: "PARA-ն օգտագործվում է ստացողին (recipient) նշելու համար:"
  },
  {
    id: 2,
    sentence: "Estudio ___ aprender.",
    options: ["por", "para"],
    correct: "para",
    translation: "Ես սովորում եմ սովորելու համար:",
    explanation: "PARA + անորոշ դերբայ (infinitive) ցույց է տալիս նպատակ:"
  },
  {
    id: 3,
    sentence: "Gracias ___ la comida.",
    options: ["por", "para"],
    correct: "por",
    translation: "Շնորհակալություն սննդի համար:",
    explanation: "POR-ն օգտագործվում է շնորհակալություն հայտնելիս կամ պատճառը նշելիս:"
  },
  {
    id: 4,
    sentence: "Camino ___ el parque.",
    options: ["por", "para"],
    correct: "por",
    translation: "Ես քայլում եմ այգով (այգու միջով):",
    explanation: "POR-ն օգտագործվում է տեղաշարժը ինչ-որ տեղով նշելու համար:"
  },
  {
    id: 5,
    sentence: "La tarea es ___ el lunes.",
    options: ["por", "para"],
    correct: "para",
    translation: "Տնային աշխատանքը երկուշաբթի օրվա համար է:",
    explanation: "PARA-ն օգտագործվում է վերջնաժամկետների (deadline) համար:"
  },
  {
    id: 6,
    sentence: "Te doy mi libro ___ tu pluma.",
    options: ["por", "para"],
    correct: "por",
    translation: "Տալիս եմ իմ գիրքը քո գրչի դիմաց:",
    explanation: "POR-ն օգտագործվում է փոխանակման (exchange) դեպքում:"
  },
  {
    id: 7,
    sentence: "Salgo ___ Madrid ahora.",
    options: ["por", "para"],
    correct: "para",
    translation: "Ես հիմա մեկնում եմ Մադրիդ:",
    explanation: "PARA-ն ցույց է տալիս շարժման վերջնակետը (destination):"
  },
  {
    id: 8,
    sentence: "Hablo ___ teléfono.",
    options: ["por", "para"],
    correct: "por",
    translation: "Խոսում եմ հեռախոսով:",
    explanation: "POR-ն օգտագործվում է կապի միջոցը նշելու համար:"
  },
  {
    id: 9,
    sentence: "Trabajo ___ una gran empresa.",
    options: ["por", "para"],
    correct: "para",
    translation: "Ես աշխատում եմ մի մեծ ընկերության համար:",
    explanation: "PARA-ն օգտագործվում է գործատուին նշելու համար:"
  },
  {
    id: 10,
    sentence: "No salgo ___ el frío.",
    options: ["por", "para"],
    correct: "por",
    translation: "Դուրս չեմ գալիս ցրտի պատճառով:",
    explanation: "POR-ն ցույց է տալիս պատճառը (reason/cause):"
  },
  {
    id: 11,
    sentence: "Leo ___ dos horas.",
    options: ["por", "para"],
    correct: "por",
    translation: "Կարդում եմ երկու ժամ:",
    explanation: "POR-ն օգտագործվում է տևողությունը նշելու համար:"
  },
  {
    id: 12,
    sentence: "Uso el martillo ___ construir.",
    options: ["por", "para"],
    correct: "para",
    translation: "Օգտագործում եմ մուրճը կառուցելու համար:",
    explanation: "PARA-ն ցույց է տալիս գործիքի նպատակը:"
  },
  {
    id: 13,
    sentence: "Paso ___ tu casa.",
    options: ["por", "para"],
    correct: "por",
    translation: "Անցնում եմ քո տան մոտով:",
    explanation: "POR-ն ցույց է տալիս անցումը (by/through):"
  },
  {
    id: 14,
    sentence: "Este plato es ___ servir sopa.",
    options: ["por", "para"],
    correct: "para",
    translation: "Այս ափսեն ապուր մատուցելու համար է:",
    explanation: "PARA-ն ցույց է տալիս առարկայի նպատակը:"
  },
  {
    id: 15,
    sentence: "Voto ___ el mejor candidato.",
    options: ["por", "para"],
    correct: "por",
    translation: "Քվեարկում եմ լավագույն թեկնածուի օգտին:",
    explanation: "POR-ն օգտագործվում է 'ի օգուտ' (behalf of) իմաստով:"
  }
];

export const TENER_QUESTIONS: Question[] = [
  {
    id: 1,
    sentence: "Yo ___ un perro grande.",
    options: ["tengo", "tienes", "tiene"],
    correct: "tengo",
    translation: "Ես ունեմ մի մեծ շուն:",
    explanation: "YO դերանվան հետ TENER-ը դառնում է TENGO:"
  },
  {
    id: 2,
    sentence: "Tú ___ mucha suerte.",
    options: ["tengo", "tienes", "tiene"],
    correct: "tienes",
    translation: "Դու շատ բախտավոր ես (բախտ ունես):",
    explanation: "TÚ դերանվան հետ դառնում է TIENES:"
  },
  {
    id: 3,
    sentence: "Él ___ 20 años.",
    options: ["tengo", "tiene", "tienen"],
    correct: "tiene",
    translation: "Նա 20 տարեկան է:",
    explanation: "ÉL/ELLA/USTED-ի հետ օգտագործվում է TIENE:"
  },
  {
    id: 4,
    sentence: "Nosotros ___ frío.",
    options: ["tenemos", "tenéis", "tienen"],
    correct: "tenemos",
    translation: "Մենք մրսում ենք (ցուրտ ունենք):",
    explanation: "NOSOTROS-ի հետ դառնում է TENEMOS:"
  },
  {
    id: 5,
    sentence: "Ellos ___ una casa azul.",
    options: ["tiene", "tenemos", "tienen"],
    correct: "tienen",
    translation: "Նրանք ունեն կապույտ տուն:",
    explanation: "ELLOS/ELLAS/USTEDES-ի հետ դառնում է TIENEN:"
  },
  {
    id: 6,
    sentence: "Usted ___ calor.",
    options: ["tienes", "tiene", "tienen"],
    correct: "tiene",
    translation: "Դուք (հարգալից) շոգում եք:",
    explanation: "USTED-ի հետ նույնն է, ինչ ÉL/ELLA՝ TIENE:"
  },
  {
    id: 7,
    sentence: "Vosotros ___ razón.",
    options: ["tenéis", "tenemos", "tienen"],
    correct: "tenéis",
    translation: "Դուք (հոգնակի) ճիշտ եք:",
    explanation: "VOSOTROS-ի հետ դառնում է TENÉIS:"
  },
  {
    id: 8,
    sentence: "Ella ___ mucha hambre.",
    options: ["tiene", "tengo", "tienes"],
    correct: "tiene",
    translation: "Նա շատ սոված է:",
    explanation: "ELLA-ի հետ դառնում է TIENE:"
  },
  {
    id: 9,
    sentence: "Yo ___ que estudiar mucho.",
    options: ["tener", "tengo", "tiene"],
    correct: "tengo",
    translation: "Ես պետք է շատ սովորեմ:",
    explanation: "TENER QUE + infinitive նշանակում է պարտավորվածություն:"
  },
  {
    id: 10,
    sentence: "Nosotros ___ sed.",
    options: ["tenéis", "tienen", "tenemos"],
    correct: "tenemos",
    translation: "Մենք ծարավ ենք:",
    explanation: "NOSOTROS-ի հետ՝ TENEMOS:"
  }
];

export const HAY_QUESTIONS: Question[] = [
  {
    id: 1,
    sentence: "___ muchos libros en la mesa.",
    options: ["hay", "está", "son"],
    correct: "hay",
    translation: "Սեղանին կան շատ գրքեր:",
    explanation: "HAY-ն օգտագործվում է առարկաների առկայությունը նշելու համար:"
  },
  {
    id: 2,
    sentence: "No ___ agua en el vaso.",
    options: ["hay", "es", "está"],
    correct: "hay",
    translation: "Բաժակի մեջ ջուր չկա:",
    explanation: "Ժխտականի դեպքում նույնպես HAY (չկա):"
  },
  {
    id: 3,
    sentence: "¿Qué ___ en tu mochila?",
    options: ["es", "hay", "está"],
    correct: "hay",
    translation: "Ի՞նչ կա քո պայուսակում:",
    explanation: "Հարցական նախադասությունում կիրառվում է HAY:"
  },
  {
    id: 4,
    sentence: "En el parque ___ niños.",
    options: ["hay", "están", "somos"],
    correct: "hay",
    translation: "Այգում կան երեխաներ:",
    explanation: "HAY-ն չի փոխվում հոգնակի թվի դեպքում:"
  },
  {
    id: 5,
    sentence: "___ una manzana en la cocina.",
    options: ["hay", "es", "está"],
    correct: "hay",
    translation: "Խոհանոցում կա մի խնձոր:",
    explanation: "HAY + անորոշ հոդ (una):"
  },
  {
    id: 6,
    sentence: "En mi ciudad ___ tres museos.",
    options: ["hay", "están", "tenemos"],
    correct: "hay",
    translation: "Իմ քաղաքում կա երեք թանգարան:",
    explanation: "Թվականների հետ օգտագործում ենք HAY:"
  },
  {
    id: 7,
    sentence: "___ mucha gente hoy.",
    options: ["es", "hay", "está"],
    correct: "hay",
    translation: "Այսօր շատ մարդ կա:",
    explanation: "Անորոշ քանակ արտահայտող բառերի հետ (mucha):"
  },
  {
    id: 8,
    sentence: "¿___ un hospital cerca?",
    options: ["es", "está", "hay"],
    correct: "hay",
    translation: "Մոտակայքում հիվանդանոց կա՞:",
    explanation: "Գոյությունը հարցնելիս օգտագործում ենք HAY:"
  },
  {
    id: 9,
    sentence: "En el cielo ___ estrellas.",
    options: ["tienen", "hay", "están"],
    correct: "hay",
    translation: "Երկնքում կան աստղեր:",
    explanation: "Ընդհանուր գոյություն նշելու համար՝ HAY:"
  },
  {
    id: 10,
    sentence: "___ poco arroz.",
    options: ["hay", "está", "es"],
    correct: "hay",
    translation: "Քիչ բրինձ կա:",
    explanation: "Poco (քիչ) բառի հետ օգտագործվում է HAY:"
  }
];

export const NEGATION_QUESTIONS: Question[] = [
  {
    id: 1,
    sentence: "Positivo: Yo como manzana.\nNegativo: Yo ___ como manzana.",
    options: ["no", "ni", "nadie"],
    correct: "no",
    translation: "Ես չեմ ուտում խնձոր:",
    explanation: "Պարզ ժխտման համար բայից առաջ դրվում է 'no':"
  },
  {
    id: 2,
    sentence: "Positivo: Alguien canta.\nNegativo: ___ canta.",
    options: ["Nadie", "Algo", "No"],
    correct: "Nadie",
    translation: "Ոչ ոք չի երգում:",
    explanation: "Երբ ենթական է ժխտվում, 'nadie' (ոչ ոք) բառը կարող է գալ բայից առաջ:"
  },
  {
    id: 3,
    sentence: "Positivo: Veo algo.\nNegativo: No veo ___.",
    options: ["nada", "nadie", "nunca"],
    correct: "nada",
    translation: "Ես ոչինչ չեմ տեսնում:",
    explanation: "'Algo' (ինչ-որ բան) բառի ժխտական ձևն է 'nada' (ոչինչ):"
  },
  {
    id: 4,
    sentence: "Positivo: Siempre viajo.\nNegativo: ___ viajo.",
    options: ["Nunca", "No", "Nada"],
    correct: "Nunca",
    translation: "Ես երբեք չեմ ճամփորդում:",
    explanation: "'Siempre' (միշտ) բառի ժխտականն է 'nunca' (երբեք):"
  },
  {
    id: 5,
    sentence: "Positivo: Él come y bebe.\nNegativo: Él ___ come ___ bebe.",
    options: ["ni... ni", "no... no", "no... nada"],
    correct: "ni... ni",
    translation: "Նա ոչ ուտում է, ոչ խմում:",
    explanation: "Կրկնակի ժխտման համար օգտագործվում է 'ni... ni' (ոչ... ոչ):"
  },
  {
    id: 6,
    sentence: "Positivo: Tengo libros.\nNegativo: No tengo ___ libro.",
    options: ["ningún", "nada", "no"],
    correct: "ningún",
    translation: "Ես ոչ մի գիրք չունեմ:",
    explanation: "'Ningún' (ոչ մի) օգտագործվում է արական սեռի գոյականների հետ:"
  },
  {
    id: 7,
    sentence: "Positivo: También bailo.\nNegativo: ___ bailo.",
    options: ["Tampoco", "No", "Nada"],
    correct: "Tampoco",
    translation: "Ես նույնպես չեմ պարում:",
    explanation: "'También' (նույնպես) բառի ժխտականն է 'tampoco' (նույնպես ոչ):"
  },
  {
    id: 8,
    sentence: "Positivo: Hay gente.\nNegativo: No hay ___.",
    options: ["nadie", "nada", "no"],
    correct: "nadie",
    translation: "Ոչ ոք չկա:",
    explanation: "Մարդկանց բացակայությունը նշելու համար օգտագործում ենք 'nadie':"
  },
  {
    id: 9,
    sentence: "Positivo: Compro pan.\nNegativo: ___ compro pan.",
    options: ["No", "Nadie", "Nada"],
    correct: "No",
    translation: "Ես հաց չեմ գնում:",
    explanation: "Սովորական ժխտում բայից առաջ 'no' մասնիկով:"
  },
  {
    id: 10,
    sentence: "Positivo: Soy feliz.\nNegativo: No ___ feliz.",
    options: ["soy", "eres", "es"],
    correct: "soy",
    translation: "Ես երջանիկ չեմ:",
    explanation: "Ժխտման ժամանակ բայը պահպանում է իր խոնարհված ձևը:"
  }
];
