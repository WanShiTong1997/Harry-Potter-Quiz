/* Hogwarts Arkiv – 500 spørgsmål. Svar accepteres på dansk/engelsk. */
const BOOK_TITLES={
  "0": {
    "da": "Flere bøger",
    "en": "Across the books"
  },
  "1": {
    "da": "De Vises Sten",
    "en": "Philosopher’s Stone"
  },
  "2": {
    "da": "Hemmelighedernes Kammer",
    "en": "Chamber of Secrets"
  },
  "3": {
    "da": "Fangen fra Azkaban",
    "en": "Prisoner of Azkaban"
  },
  "4": {
    "da": "Flammernes Pokal",
    "en": "Goblet of Fire"
  },
  "5": {
    "da": "Fønixordenen",
    "en": "Order of the Phoenix"
  },
  "6": {
    "da": "Halvblodsprinsen",
    "en": "Half-Blood Prince"
  },
  "7": {
    "da": "Dødsregalierne",
    "en": "Deathly Hallows"
  }
};
const QUESTION_BANK=[
  {
    "id": "q1",
    "book": 1,
    "level": "Let",
    "question": "Hvad hedder den kæmpe, der fortæller Harry, at han er en troldmand?",
    "answerDa": "Rubeus Hagrid",
    "answerEn": "Rubeus Hagrid",
    "correctKey": "right",
    "why": "Hagrid opsøger Harry på hans ellevte fødselsdag og fortæller ham om den magiske verden.",
    "aliases": [
      "Rubeus Hagrid",
      "Rubeus Hagrid"
    ],
    "type": "fact",
    "options": [
      {
        "da": "Rubeus Hagrid",
        "en": "Rubeus Hagrid"
      },
      {
        "da": "Argus Filch",
        "en": "Argus Filch"
      },
      {
        "da": "Alastor Moody",
        "en": "Alastor Moody"
      },
      {
        "da": "Vernon Dursley",
        "en": "Vernon Dursley"
      }
    ],
    "correctIndex": 0
  },
  {
    "id": "q2",
    "book": 1,
    "level": "Let",
    "question": "Hvilket hus bliver Harry sorteret ind i?",
    "answerDa": "Gryffindor",
    "answerEn": "Gryffindor",
    "correctKey": "right",
    "why": "Sorteringshatten placerer Harry i Gryffindor, selv om den overvejer Slytherin.",
    "aliases": [
      "Gryffindor",
      "Gryffindor"
    ],
    "type": "fact",
    "options": [
      {
        "da": "Gryffindor",
        "en": "Gryffindor"
      },
      {
        "da": "Slytherin",
        "en": "Slytherin"
      },
      {
        "da": "Ravenclaw",
        "en": "Ravenclaw"
      },
      {
        "da": "Hufflepuff",
        "en": "Hufflepuff"
      }
    ],
    "correctIndex": 0
  },
  {
    "id": "q3",
    "book": 1,
    "level": "Let",
    "question": "Hvad hedder den magiske sport, som Harry spiller på et kosteskaft?",
    "answerDa": "Quidditch",
    "answerEn": "Quidditch",
    "correctKey": "right",
    "why": "Quidditch spilles på flyvende koste med flere bolde og mål.",
    "aliases": [
      "Quidditch",
      "Quidditch"
    ],
    "type": "fact",
    "options": [
      {
        "da": "Quidditch",
        "en": "Quidditch"
      },
      {
        "da": "Gobstones",
        "en": "Gobstones"
      },
      {
        "da": "Exploding Snap",
        "en": "Exploding Snap"
      },
      {
        "da": "Wizard chess",
        "en": "Wizard chess"
      }
    ],
    "correctIndex": 0
  },
  {
    "id": "q4",
    "book": 1,
    "level": "Mellem",
    "question": "Hvilken position spiller Harry på Gryffindors Quidditch-hold?",
    "answerDa": "Søger",
    "answerEn": "Seeker",
    "correctKey": "right",
    "why": "En søger skal fange Det Gyldne Lyn; det er Harrys position.",
    "aliases": [
      "Søger",
      "Seeker"
    ],
    "type": "fact",
    "options": [
      {
        "da": "Søger",
        "en": "Seeker"
      },
      {
        "da": "Målmand / Keeper",
        "en": "Keeper"
      },
      {
        "da": "Jager / Chaser",
        "en": "Chaser"
      },
      {
        "da": "Slåer / Beater",
        "en": "Beater"
      }
    ],
    "correctIndex": 0
  },
  {
    "id": "q5",
    "book": 1,
    "level": "Mellem",
    "question": "Hvad beskytter Flamel og Dumbledore ved hjælp af flere magiske forhindringer?",
    "answerDa": "De Vises Sten",
    "answerEn": "The Philosopher’s Stone",
    "correctKey": "right",
    "why": "Nicolas Flamels sten kan blandt andet fremstille livseliksir og er målet for Voldemorts plan.",
    "aliases": [
      "De Vises Sten",
      "The Philosopher’s Stone"
    ],
    "type": "fact",
    "options": [
      {
        "da": "De Vises Sten",
        "en": "The Philosopher’s Stone"
      },
      {
        "da": "Tidsvenderen / Time-Turner",
        "en": "The Time-Turner"
      },
      {
        "da": "Hemmelighedernes dagbog / Riddle’s Diary",
        "en": "Riddle’s Diary"
      },
      {
        "da": "Den Usynlige Kappe / Invisibility Cloak",
        "en": "The Invisibility Cloak"
      }
    ],
    "correctIndex": 0
  },
  {
    "id": "q6",
    "book": 1,
    "level": "Mellem",
    "question": "Hvilket magisk væsen møder Harry, Ron og Hermione på et pigetoilet?",
    "answerDa": "En bjergtrold",
    "answerEn": "A mountain troll",
    "correctKey": "right",
    "why": "Quirrell slipper en bjergtrold løs på Hogwarts under Halloween.",
    "aliases": [
      "Et bjergtrold",
      "A mountain troll"
    ],
    "type": "fact",
    "options": [
      {
        "da": "En bjergtrold",
        "en": "A mountain troll"
      },
      {
        "da": "En basilisk",
        "en": "A basilisk"
      },
      {
        "da": "En dementor / Dementor",
        "en": "A dementor"
      },
      {
        "da": "En hippogriff",
        "en": "A hippogriff"
      }
    ],
    "correctIndex": 0
  },
  {
    "id": "q7",
    "book": 1,
    "level": "Svær",
    "question": "Hvilken professor underviser i eliksirer i den første bog?",
    "answerDa": "Severus Snape",
    "answerEn": "Severus Snape",
    "correctKey": "right",
    "why": "Snape er eliksirprofessor og leder af Slytherin-huset.",
    "aliases": [
      "Severus Snape",
      "Severus Snape"
    ],
    "type": "fact",
    "options": [
      {
        "da": "Severus Snape",
        "en": "Severus Snape"
      },
      {
        "da": "Filius Flitwick",
        "en": "Filius Flitwick"
      },
      {
        "da": "Pomona Sprout",
        "en": "Pomona Sprout"
      },
      {
        "da": "Minerva McGonagall",
        "en": "Minerva McGonagall"
      }
    ],
    "correctIndex": 0
  },
  {
    "id": "q8",
    "book": 1,
    "level": "Svær",
    "question": "Hvem viser sig at være den egentlige modstander bag forsøget på at stjæle stenen?",
    "answerDa": "Quirinus Quirrell",
    "answerEn": "Quirinus Quirrell",
    "correctKey": "right",
    "why": "Quirrell hjælper Voldemort og forsøger at få fat i stenen.",
    "aliases": [
      "Quirinus Quirrell",
      "Quirinus Quirrell"
    ],
    "type": "fact",
    "options": [
      {
        "da": "Quirinus Quirrell",
        "en": "Quirinus Quirrell"
      },
      {
        "da": "Lucius Malfoy",
        "en": "Lucius Malfoy"
      },
      {
        "da": "Peter Pettigrew",
        "en": "Peter Pettigrew"
      },
      {
        "da": "Barty Crouch Jr.",
        "en": "Barty Crouch Jr."
      }
    ],
    "correctIndex": 0
  },
  {
    "id": "q9",
    "book": 1,
    "level": "Svær",
    "question": "Hvilken udfordring kræver, at Harry spiller et menneskestort skakspil?",
    "answerDa": "Troldmandsskak",
    "answerEn": "Wizard chess",
    "correctKey": "right",
    "why": "Ron leder skakspillet og ofrer sig selv, så Harry kan komme videre.",
    "aliases": [
      "Troldmandsskak",
      "Wizard chess"
    ],
    "type": "fact",
    "options": [
      {
        "da": "Troldmandsskak",
        "en": "Wizard chess"
      },
      {
        "da": "En gåde om eliksirer / Potion riddle",
        "en": "Potion riddle"
      },
      {
        "da": "At flyve gennem nøgler / Flying keys",
        "en": "Flying keys"
      },
      {
        "da": "At tæmme en drage / Taming a dragon",
        "en": "Taming a dragon"
      }
    ],
    "correctIndex": 0
  },
  {
    "id": "q10",
    "book": 1,
    "level": "Svær",
    "question": "Hvem tilhørte usynlighedskappen, før Harry fik den i julegave?",
    "answerDa": "James Potter, Harrys far",
    "answerEn": "James Potter, Harry’s father",
    "correctKey": "right",
    "why": "Kappen blev givet videre fra James Potter; Dumbledore havde den til låns.",
    "aliases": [
      "James Potter, Harrys far",
      "It belonged to his father, James Potter"
    ],
    "type": "fact",
    "options": [
      {
        "da": "James Potter, Harrys far",
        "en": "James Potter, Harry’s father"
      },
      {
        "da": "Den har tilhørt Sirius Black",
        "en": "It belonged to Sirius Black"
      },
      {
        "da": "Den har tilhørt Hagrid",
        "en": "It belonged to Hagrid"
      },
      {
        "da": "Den har tilhørt Albus Dumbledore",
        "en": "It belonged to Albus Dumbledore"
      }
    ],
    "correctIndex": 0
  },
  {
    "id": "q11",
    "book": 2,
    "level": "Let",
    "question": "Hvilken genstand skriver Harrys navn og oplevelser ind i, uden at vide hvem der svarer?",
    "answerDa": "En dagbog",
    "answerEn": "A diary",
    "correctKey": "right",
    "why": "Tom Riddles dagbog svarer Harry og viser sig at være en horcrux.",
    "aliases": [
      "En dagbog",
      "A diary"
    ],
    "type": "fact",
    "options": [
      {
        "da": "En dagbog",
        "en": "A diary"
      },
      {
        "da": "En medaljon",
        "en": "A locket"
      },
      {
        "da": "En pokal / Cup",
        "en": "A cup"
      },
      {
        "da": "En ring / Ring",
        "en": "A ring"
      }
    ],
    "correctIndex": 0
  },
  {
    "id": "q12",
    "book": 2,
    "level": "Let",
    "question": "Hvilket væsen terroriserer eleverne ved at forstene dem?",
    "answerDa": "En basilisk",
    "answerEn": "A basilisk",
    "correctKey": "right",
    "why": "Basilisken bevæger sig gennem rørene og forstener dem, der ser dens blik indirekte.",
    "aliases": [
      "En basilisk",
      "A basilisk"
    ],
    "type": "fact",
    "options": [
      {
        "da": "En basilisk",
        "en": "A basilisk"
      },
      {
        "da": "En drage / Dragon",
        "en": "A dragon"
      },
      {
        "da": "En dementor / Dementor",
        "en": "A dementor"
      },
      {
        "da": "En varulv / Werewolf",
        "en": "A werewolf"
      }
    ],
    "correctIndex": 0
  },
  {
    "id": "q13",
    "book": 2,
    "level": "Let",
    "question": "Hvem er husalfen, der forsøger at holde Harry væk fra Hogwarts?",
    "answerDa": "Dobby",
    "answerEn": "Dobby",
    "correctKey": "right",
    "why": "Dobby forsøger at advare Harry om faren i Hemmelighedernes Kammer.",
    "aliases": [
      "Dobby",
      "Dobby"
    ],
    "type": "fact",
    "options": [
      {
        "da": "Dobby",
        "en": "Dobby"
      },
      {
        "da": "Kreacher",
        "en": "Kreacher"
      },
      {
        "da": "Winky",
        "en": "Winky"
      },
      {
        "da": "Hokey",
        "en": "Hokey"
      }
    ],
    "correctIndex": 0
  },
  {
    "id": "q14",
    "book": 2,
    "level": "Mellem",
    "question": "Hvordan kommer Harry og Ron til Hogwarts, efter at Dobby forhindrer dem i at komme gennem barrieren på perron 9¾?",
    "answerDa": "I Arthurs fortryllede Ford Anglia",
    "answerEn": "In Arthur’s enchanted Ford Anglia",
    "correctKey": "right",
    "why": "De flyver i den fortryllede bil, som ender med at kaste dem af ved Slagpoplen.",
    "aliases": [
      "I Arthurs fortryllede Ford Anglia",
      "They fly in Arthur’s enchanted Ford Anglia"
    ],
    "type": "fact",
    "options": [
      {
        "da": "I Arthurs fortryllede Ford Anglia",
        "en": "In Arthur’s enchanted Ford Anglia"
      },
      {
        "da": "De tager Hogwarts-ekspressen fra Hogsmeade",
        "en": "They take the Hogwarts Express from Hogsmeade"
      },
      {
        "da": "De bruger en pejs og fløjpulver",
        "en": "They use a fireplace and Floo Powder"
      },
      {
        "da": "De bliver hentet af Hagrid på motorcykel",
        "en": "Hagrid picks them up on his motorcycle"
      }
    ],
    "correctIndex": 0
  },
  {
    "id": "q15",
    "book": 2,
    "level": "Mellem",
    "question": "Hvilken lærer er berømt for sine bøger om sine egne bedrifter?",
    "answerDa": "Gilderoy Lockhart",
    "answerEn": "Gilderoy Lockhart",
    "correctKey": "right",
    "why": "Lockhart er den nye lærer i Forsvar mod Mørkets Kræfter og en selvglad forfatter.",
    "aliases": [
      "Gilderoy Lockhart",
      "Gilderoy Lockhart"
    ],
    "type": "fact",
    "options": [
      {
        "da": "Gilderoy Lockhart",
        "en": "Gilderoy Lockhart"
      },
      {
        "da": "Horace Slughorn",
        "en": "Horace Slughorn"
      },
      {
        "da": "Remus Lupin",
        "en": "Remus Lupin"
      },
      {
        "da": "Quirinus Quirrell",
        "en": "Quirinus Quirrell"
      }
    ],
    "correctIndex": 0
  },
  {
    "id": "q16",
    "book": 2,
    "level": "Mellem",
    "question": "Hvem viser sig at være arvingen efter Slytherin?",
    "answerDa": "Tom Riddle / Lord Voldemort",
    "answerEn": "Tom Riddle / Lord Voldemort",
    "correctKey": "right",
    "why": "Tom Riddle, den unge Voldemort, åbner Hemmelighedernes Kammer gennem dagbogen.",
    "aliases": [
      "Tom Riddle",
      "Tom Riddle / Lord Voldemort"
    ],
    "type": "fact",
    "options": [
      {
        "da": "Tom Riddle / Lord Voldemort",
        "en": "Tom Riddle / Lord Voldemort"
      },
      {
        "da": "Draco Malfoy",
        "en": "Draco Malfoy"
      },
      {
        "da": "Lucius Malfoy",
        "en": "Lucius Malfoy"
      },
      {
        "da": "Severus Snape",
        "en": "Severus Snape"
      }
    ],
    "correctIndex": 0
  },
  {
    "id": "q17",
    "book": 2,
    "level": "Svær",
    "question": "Hvilken fugl kommer Harry til undsætning i Kammeret?",
    "answerDa": "Fawkes, Dumbledores føniks",
    "answerEn": "Fawkes, Dumbledore’s phoenix",
    "correctKey": "right",
    "why": "Fawkes bringer Sorteringshatten og heler Harrys sår med sine tårer.",
    "aliases": [
      "Fawkes, Dumbledores føniks",
      "Fawkes, Dumbledore’s phoenix"
    ],
    "type": "fact",
    "options": [
      {
        "da": "Fawkes, Dumbledores føniks",
        "en": "Fawkes, Dumbledore’s phoenix"
      },
      {
        "da": "Buckbeak, hippogriffen",
        "en": "Buckbeak, the hippogriff"
      },
      {
        "da": "Hedwig, Harrys ugle",
        "en": "Hedwig, Harry’s owl"
      },
      {
        "da": "Aragog, akromantlen",
        "en": "Aragog, the Acromantula"
      }
    ],
    "correctIndex": 0
  },
  {
    "id": "q18",
    "book": 2,
    "level": "Svær",
    "question": "Hvilken plante bruges til at lave en modgift, der kan genoplive elever, som er blevet forstenet?",
    "answerDa": "Mandragora",
    "answerEn": "Mandrake",
    "correctKey": "right",
    "why": "Mandragoraens skrig kan være dødelige, men dens modnede rod bruges til at genoplive de forstenede.",
    "aliases": [
      "Mandragora",
      "Mandrake"
    ],
    "type": "fact",
    "options": [
      {
        "da": "Mandragora",
        "en": "Mandrake"
      },
      {
        "da": "Djævleslyng / Devil’s Snare",
        "en": "Devil’s Snare"
      },
      {
        "da": "Venomous Tentacula",
        "en": "Venomous Tentacula"
      },
      {
        "da": "Gillyweed",
        "en": "Gillyweed"
      }
    ],
    "correctIndex": 0
  },
  {
    "id": "q19",
    "book": 2,
    "level": "Svær",
    "question": "Hvem redder Ginny fra Tom Riddle i Hemmelighedernes Kammer?",
    "answerDa": "Harry Potter",
    "answerEn": "Harry Potter",
    "correctKey": "right",
    "why": "Harry ødelægger dagbogen med en basilisk-tand og redder Ginny.",
    "aliases": [
      "Harry Potter",
      "Harry Potter"
    ],
    "type": "fact",
    "options": [
      {
        "da": "Harry Potter",
        "en": "Harry Potter"
      },
      {
        "da": "Ron Weasley",
        "en": "Ron Weasley"
      },
      {
        "da": "Albus Dumbledore",
        "en": "Albus Dumbledore"
      },
      {
        "da": "Minerva McGonagall",
        "en": "Minerva McGonagall"
      }
    ],
    "correctIndex": 0
  },
  {
    "id": "q20",
    "book": 2,
    "level": "Svær",
    "question": "Hvilken genstand ødelægger Tom Riddles dagbog?",
    "answerDa": "En basilisk-tand",
    "answerEn": "A basilisk fang",
    "correctKey": "right",
    "why": "Harry stikker dagbogen med en basilisk-tand, som ødelægger horcruxen.",
    "aliases": [
      "En basilisk-tand",
      "A basilisk fang"
    ],
    "type": "fact",
    "options": [
      {
        "da": "En basilisk-tand",
        "en": "A basilisk fang"
      },
      {
        "da": "Et sværd fra Gringotts / Gringotts sword",
        "en": "A sword from Gringotts"
      },
      {
        "da": "En drageild / Dragon fire",
        "en": "Dragon fire"
      },
      {
        "da": "En sølvkniv / Silver knife",
        "en": "A silver knife"
      }
    ],
    "correctIndex": 0
  },
  {
    "id": "q21",
    "book": 3,
    "level": "Let",
    "question": "Hvem flygter fra Azkaban og bliver jagtet gennem det meste af bogen?",
    "answerDa": "Sirius Black",
    "answerEn": "Sirius Black",
    "correctKey": "right",
    "why": "Sirius Black er flygtet fra Azkaban, og alle tror først, at han vil finde Harry.",
    "aliases": [
      "Sirius Black",
      "Sirius Black"
    ],
    "type": "fact",
    "options": [
      {
        "da": "Sirius Black",
        "en": "Sirius Black"
      },
      {
        "da": "Lucius Malfoy",
        "en": "Lucius Malfoy"
      },
      {
        "da": "Barty Crouch Jr.",
        "en": "Barty Crouch Jr."
      },
      {
        "da": "Stan Shunpike",
        "en": "Stan Shunpike"
      }
    ],
    "correctIndex": 0
  },
  {
    "id": "q22",
    "book": 3,
    "level": "Let",
    "question": "Hvilke væsner patruljerer omkring Hogwarts og kan suge håb og glæde ud af mennesker?",
    "answerDa": "Dementorer",
    "answerEn": "Dementors",
    "correctKey": "right",
    "why": "Dementorerne arbejder for Ministeriet og påvirker Harry særligt voldsomt.",
    "aliases": [
      "Dementorer",
      "Dementors"
    ],
    "type": "fact",
    "options": [
      {
        "da": "Dementorer",
        "en": "Dementors"
      },
      {
        "da": "Inferi / Inferi",
        "en": "Inferi"
      },
      {
        "da": "Boggarts / Boggarts",
        "en": "Boggarts"
      },
      {
        "da": "Akromantler / Acromantulas",
        "en": "Acromantulas"
      }
    ],
    "correctIndex": 0
  },
  {
    "id": "q23",
    "book": 3,
    "level": "Mellem",
    "question": "Hvem underviser Harry i patronusbesværgelsen?",
    "answerDa": "Remus Lupin",
    "answerEn": "Remus Lupin",
    "correctKey": "right",
    "why": "Lupin hjælper Harry med at fremmane en patronus for at beskytte sig mod dementorer.",
    "aliases": [
      "Remus Lupin",
      "Remus Lupin"
    ],
    "type": "fact",
    "options": [
      {
        "da": "Remus Lupin",
        "en": "Remus Lupin"
      },
      {
        "da": "Sirius Black",
        "en": "Sirius Black"
      },
      {
        "da": "Albus Dumbledore",
        "en": "Albus Dumbledore"
      },
      {
        "da": "Filius Flitwick",
        "en": "Filius Flitwick"
      }
    ],
    "correctIndex": 0
  },
  {
    "id": "q24",
    "book": 3,
    "level": "Mellem",
    "question": "Hvad er Remus Lupins hemmelighed?",
    "answerDa": "Han er varulv",
    "answerEn": "He is a werewolf",
    "correctKey": "right",
    "why": "Lupin er varulv; hans venner lærte engang at blive animaguser for at hjælpe ham.",
    "aliases": [
      "Han er varulv",
      "He is a werewolf"
    ],
    "type": "fact",
    "options": [
      {
        "da": "Han er varulv",
        "en": "He is a werewolf"
      },
      {
        "da": "Han er animagus / Animagus",
        "en": "He is an Animagus"
      },
      {
        "da": "Han er vampyr / Vampire",
        "en": "He is a vampire"
      },
      {
        "da": "Han er husalf / House-elf",
        "en": "He is a house-elf"
      }
    ],
    "correctIndex": 0
  },
  {
    "id": "q25",
    "book": 3,
    "level": "Mellem",
    "question": "Hvilket dyr kan Peter Pettigrew forvandle sig til?",
    "answerDa": "En rotte",
    "answerEn": "A rat",
    "correctKey": "right",
    "why": "Pettigrew er animagus i form af en rotte og har levet som Scabbers.",
    "aliases": [
      "En rotte",
      "A rat"
    ],
    "type": "fact",
    "options": [
      {
        "da": "En rotte",
        "en": "A rat"
      },
      {
        "da": "En hund / Dog",
        "en": "A dog"
      },
      {
        "da": "En hjort",
        "en": "A stag"
      },
      {
        "da": "En kat / Cat",
        "en": "A cat"
      }
    ],
    "correctIndex": 0
  },
  {
    "id": "q26",
    "book": 3,
    "level": "Mellem",
    "question": "Hvilket magisk væsen får Hagrid Harry til at møde i sin første lektion med magiske væsner?",
    "answerDa": "En hippogriff",
    "answerEn": "A hippogriff",
    "correctKey": "right",
    "why": "Hippogriffen Buckbeak er med i Hagrids undervisning og reagerer på respekt.",
    "aliases": [
      "En hippogriff",
      "A hippogriff"
    ],
    "type": "fact",
    "options": [
      {
        "da": "En hippogriff",
        "en": "A hippogriff"
      },
      {
        "da": "En drage / Dragon",
        "en": "A dragon"
      },
      {
        "da": "En føniks / Phoenix",
        "en": "A phoenix"
      },
      {
        "da": "En basilisk",
        "en": "A basilisk"
      }
    ],
    "correctIndex": 0
  },
  {
    "id": "q27",
    "book": 3,
    "level": "Svær",
    "question": "Hvem skabte sammen med sine venner Røverkortet?",
    "answerDa": "James Potter, Sirius Black, Remus Lupin og Peter Pettigrew",
    "answerEn": "James Potter, Sirius Black, Remus Lupin and Peter Pettigrew",
    "correctKey": "right",
    "why": "De fire venner kaldte sig Moony, Wormtail, Padfoot og Prongs.",
    "aliases": [
      "James Potter, Sirius Black, Remus Lupin og Peter Pettigrew",
      "James Potter, Sirius Black, Remus Lupin and Peter Pettigrew"
    ],
    "type": "fact",
    "options": [
      {
        "da": "James Potter, Sirius Black, Remus Lupin og Peter Pettigrew",
        "en": "James Potter, Sirius Black, Remus Lupin and Peter Pettigrew"
      },
      {
        "da": "Harry, Ron, Hermione og Neville",
        "en": "Harry, Ron, Hermione and Neville"
      },
      {
        "da": "Fred, George, Lee Jordan og Percy",
        "en": "Fred, George, Lee Jordan and Percy"
      },
      {
        "da": "Dumbledore, McGonagall, Hagrid og Snape",
        "en": "Dumbledore, McGonagall, Hagrid and Snape"
      }
    ],
    "correctIndex": 0
  },
  {
    "id": "q28",
    "book": 3,
    "level": "Svær",
    "question": "Hvilket dyr er James Potters animagus-form?",
    "answerDa": "En hjort",
    "answerEn": "A stag",
    "correctKey": "right",
    "why": "James kunne forvandle sig til en hjort, hvilket gav ham øgenavnet Prongs.",
    "aliases": [
      "En hjort",
      "A stag"
    ],
    "type": "fact",
    "options": [
      {
        "da": "En hjort",
        "en": "A stag"
      },
      {
        "da": "En hund / Dog",
        "en": "A dog"
      },
      {
        "da": "En rotte",
        "en": "A rat"
      },
      {
        "da": "En ulv / Wolf",
        "en": "A wolf"
      }
    ],
    "correctIndex": 0
  },
  {
    "id": "q29",
    "book": 3,
    "level": "Svær",
    "question": "Hvilken genstand bruger Harry og Hermione til at rejse tilbage i tiden?",
    "answerDa": "En tidsvender",
    "answerEn": "A Time-Turner",
    "correctKey": "right",
    "why": "Hermione har fået en tidsvender fra McGonagall for at kunne følge flere fag.",
    "aliases": [
      "En tidsvender",
      "A Time-Turner"
    ],
    "type": "fact",
    "options": [
      {
        "da": "En tidsvender",
        "en": "A Time-Turner"
      },
      {
        "da": "Et pensieve / Pensieve",
        "en": "A Pensieve"
      },
      {
        "da": "En portnøgle",
        "en": "A Portkey"
      },
      {
        "da": "En forsvindingskabinet / Vanishing Cabinet",
        "en": "A Vanishing Cabinet"
      }
    ],
    "correctIndex": 0
  },
  {
    "id": "q30",
    "book": 3,
    "level": "Svær",
    "question": "Hvem var den hemmelige hemmelighedsvogter for Potter-familiens skjulested?",
    "answerDa": "Peter Pettigrew",
    "answerEn": "Peter Pettigrew",
    "correctKey": "right",
    "why": "Sirius foreslog Pettigrew som hemmelighedsvogter, men Pettigrew forrådte Potter-familien.",
    "aliases": [
      "Peter Pettigrew",
      "Peter Pettigrew"
    ],
    "type": "fact",
    "options": [
      {
        "da": "Peter Pettigrew",
        "en": "Peter Pettigrew"
      },
      {
        "da": "Sirius Black",
        "en": "Sirius Black"
      },
      {
        "da": "Remus Lupin",
        "en": "Remus Lupin"
      },
      {
        "da": "Albus Dumbledore",
        "en": "Albus Dumbledore"
      }
    ],
    "correctIndex": 0
  },
  {
    "id": "q31",
    "book": 4,
    "level": "Let",
    "question": "Hvilken international konkurrence afholdes på Hogwarts?",
    "answerDa": "Tretroldmandsturneringen",
    "answerEn": "The Triwizard Tournament",
    "correctKey": "right",
    "why": "Tretroldmandsturneringen samler tre skoler og har tre farlige opgaver.",
    "aliases": [
      "Tretroldmandsturneringen",
      "Triwizard Tournament"
    ],
    "type": "fact",
    "options": [
      {
        "da": "Tretroldmandsturneringen",
        "en": "The Triwizard Tournament"
      },
      {
        "da": "Husmesterskabet / House Cup",
        "en": "House Cup"
      },
      {
        "da": "Quidditch-VM / Quidditch World Cup",
        "en": "Quidditch World Cup"
      },
      {
        "da": "Duelleringsturneringen / Dueling Tournament",
        "en": "Dueling Tournament"
      }
    ],
    "correctIndex": 0
  },
  {
    "id": "q32",
    "book": 4,
    "level": "Let",
    "question": "Hvilke to andre skoler sender elever til turneringen sammen med Hogwarts?",
    "answerDa": "Beauxbatons og Durmstrang",
    "answerEn": "Beauxbatons and Durmstrang",
    "correctKey": "right",
    "why": "Beauxbatons og Durmstrang deltager sammen med Hogwarts.",
    "aliases": [
      "Beauxbatons og Durmstrang",
      "Beauxbatons and Durmstrang"
    ],
    "type": "fact",
    "options": [
      {
        "da": "Beauxbatons og Durmstrang",
        "en": "Beauxbatons and Durmstrang"
      },
      {
        "da": "Ilvermorny og Mahoutokoro",
        "en": "Ilvermorny and Mahoutokoro"
      },
      {
        "da": "Uagadou og Castelobruxo",
        "en": "Uagadou and Castelobruxo"
      },
      {
        "da": "Durmstrang og Ilvermorny",
        "en": "Durmstrang and Ilvermorny"
      }
    ],
    "correctIndex": 0
  },
  {
    "id": "q33",
    "book": 4,
    "level": "Mellem",
    "question": "Hvem bliver udvalgt som Hogwarts’ officielle deltager i turneringen?",
    "answerDa": "Cedric Diggory",
    "answerEn": "Cedric Diggory",
    "correctKey": "right",
    "why": "Ildpokalen vælger Cedric som Hogwarts’ deltager; Harry bliver valgt som ekstra deltager.",
    "aliases": [
      "Cedric Diggory",
      "Cedric Diggory"
    ],
    "type": "fact",
    "options": [
      {
        "da": "Cedric Diggory",
        "en": "Cedric Diggory"
      },
      {
        "da": "Harry Potter",
        "en": "Harry Potter"
      },
      {
        "da": "Ron Weasley",
        "en": "Ron Weasley"
      },
      {
        "da": "Neville Longbottom",
        "en": "Neville Longbottom"
      }
    ],
    "correctIndex": 0
  },
  {
    "id": "q34",
    "book": 4,
    "level": "Mellem",
    "question": "Hvilken drage møder Harry i den første opgave?",
    "answerDa": "En ungarsk takhale",
    "answerEn": "A Hungarian Horntail",
    "correctKey": "right",
    "why": "Harry skal hente et gyldent æg fra en ungarsk takhale.",
    "aliases": [
      "En ungarsk takhale",
      "A Hungarian Horntail"
    ],
    "type": "fact",
    "options": [
      {
        "da": "En ungarsk takhale",
        "en": "A Hungarian Horntail"
      },
      {
        "da": "En norsk rygstråle / Norwegian Ridgeback",
        "en": "A Norwegian Ridgeback"
      },
      {
        "da": "En kinesisk ildkugle / Chinese Fireball",
        "en": "A Chinese Fireball"
      },
      {
        "da": "En svensk kortsnude / Swedish Short-Snout",
        "en": "A Swedish Short-Snout"
      }
    ],
    "correctIndex": 0
  },
  {
    "id": "q35",
    "book": 4,
    "level": "Mellem",
    "question": "Hvem er forklædt som Alastor “Skrækøje” Moody det meste af skoleåret?",
    "answerDa": "Barty Crouch Jr.",
    "answerEn": "Barty Crouch Jr.",
    "correctKey": "right",
    "why": "Barty Crouch Jr. bruger Polyjuice-eliksir og manipulerer turneringen for at føre Harry til Voldemort.",
    "aliases": [
      "Barty Crouch Jr.",
      "Barty Crouch Jr."
    ],
    "type": "fact",
    "options": [
      {
        "da": "Barty Crouch Jr.",
        "en": "Barty Crouch Jr."
      },
      {
        "da": "Peter Pettigrew",
        "en": "Peter Pettigrew"
      },
      {
        "da": "Lucius Malfoy",
        "en": "Lucius Malfoy"
      },
      {
        "da": "Igor Karkaroff",
        "en": "Igor Karkaroff"
      }
    ],
    "correctIndex": 0
  },
  {
    "id": "q36",
    "book": 4,
    "level": "Mellem",
    "question": "Hvad skal deltagerne hente fra søen i den anden opgave?",
    "answerDa": "En person, der betyder meget for dem",
    "answerEn": "A person who matters to them",
    "correctKey": "right",
    "why": "Hver deltager skal redde den person, som søens væsener har taget som gidsel.",
    "aliases": [
      "En person, der betyder meget for dem",
      "A person who matters to them"
    ],
    "type": "fact",
    "options": [
      {
        "da": "En person, der betyder meget for dem",
        "en": "A person who matters to them"
      },
      {
        "da": "Et magisk sværd / A magical sword",
        "en": "A magical sword"
      },
      {
        "da": "En gylden nøgle / A golden key",
        "en": "A golden key"
      },
      {
        "da": "Et æg fra en drage / A dragon egg",
        "en": "A dragon egg"
      }
    ],
    "correctIndex": 0
  },
  {
    "id": "q37",
    "book": 4,
    "level": "Svær",
    "question": "Hvilken besværgelse bruger Harry til at tilkalde sin kost under drageopgaven?",
    "answerDa": "Accio",
    "answerEn": "Accio",
    "correctKey": "right",
    "why": "Accio er en tilkaldelsesbesværgelse, og Harry bruger den på sin Firebolt.",
    "aliases": [
      "Accio",
      "Accio"
    ],
    "type": "fact",
    "options": [
      {
        "da": "Accio",
        "en": "Accio"
      },
      {
        "da": "Alohomora",
        "en": "Alohomora"
      },
      {
        "da": "Expecto Patronum",
        "en": "Expecto Patronum"
      },
      {
        "da": "Riddikulus",
        "en": "Riddikulus"
      }
    ],
    "correctIndex": 0
  },
  {
    "id": "q38",
    "book": 4,
    "level": "Svær",
    "question": "Hvilken genstand transporterer Harry og Cedric til kirkegården?",
    "answerDa": "En portnøgle",
    "answerEn": "A Portkey",
    "correctKey": "right",
    "why": "Tretroldmandspokalen er blevet fortryllet til en portnøgle.",
    "aliases": [
      "En portnøgle",
      "A Portkey"
    ],
    "type": "fact",
    "options": [
      {
        "da": "En portnøgle",
        "en": "A Portkey"
      },
      {
        "da": "En tidsvender",
        "en": "A Time-Turner"
      },
      {
        "da": "Ildpokalen / The Goblet of Fire",
        "en": "The Goblet of Fire"
      },
      {
        "da": "Et spejl / A mirror",
        "en": "A mirror"
      }
    ],
    "correctIndex": 0
  },
  {
    "id": "q39",
    "book": 4,
    "level": "Svær",
    "question": "Hvem dør på kirkegården, da Harry og Cedric ankommer?",
    "answerDa": "Cedric Diggory",
    "answerEn": "Cedric Diggory",
    "correctKey": "right",
    "why": "Peter Pettigrew dræber Cedric efter Voldemorts ordre.",
    "aliases": [
      "Cedric Diggory",
      "Cedric Diggory"
    ],
    "type": "fact",
    "options": [
      {
        "da": "Cedric Diggory",
        "en": "Cedric Diggory"
      },
      {
        "da": "Viktor Krum",
        "en": "Viktor Krum"
      },
      {
        "da": "Fleur Delacour",
        "en": "Fleur Delacour"
      },
      {
        "da": "Barty Crouch Sr.",
        "en": "Barty Crouch Sr."
      }
    ],
    "correctIndex": 0
  },
  {
    "id": "q40",
    "book": 4,
    "level": "Svær",
    "question": "Hvad har Harrys og Voldemorts tryllestave til fælles?",
    "answerDa": "De har fjer fra den samme føniks",
    "answerEn": "They contain feathers from the same phoenix",
    "correctKey": "right",
    "why": "Begge tryllestave har en fjer fra Fawkes, Dumbledores føniks.",
    "aliases": [
      "De har fjer fra den samme føniks",
      "They contain feathers from the same phoenix"
    ],
    "type": "fact",
    "options": [
      {
        "da": "De har fjer fra den samme føniks",
        "en": "They contain feathers from the same phoenix"
      },
      {
        "da": "De er begge lavet af hyldetræ",
        "en": "They are both made of elder wood"
      },
      {
        "da": "De blev fremstillet af samme troldmand",
        "en": "They were made by the same wizard"
      },
      {
        "da": "De indeholder hår fra samme enhjørning",
        "en": "They contain hair from the same unicorn"
      }
    ],
    "correctIndex": 0
  },
  {
    "id": "q41",
    "book": 5,
    "level": "Let",
    "question": "Hvilken organisation forsøger at bekæmpe Voldemort, men som Ministeriet nægter at anerkende?",
    "answerDa": "Fønixordenen",
    "answerEn": "The Order of the Phoenix",
    "correctKey": "right",
    "why": "Fønixordenen er Dumbledores hemmelige modstandsgruppe.",
    "aliases": [
      "Fønixordenen",
      "Order of the Phoenix"
    ],
    "type": "fact",
    "options": [
      {
        "da": "Fønixordenen",
        "en": "The Order of the Phoenix"
      },
      {
        "da": "Dødsæderne / Death Eaters",
        "en": "Death Eaters"
      },
      {
        "da": "Tretroldmandsrådet / Triwizard Council",
        "en": "Triwizard Council"
      },
      {
        "da": "Sankt Mungos / St Mungo’s",
        "en": "St Mungo’s"
      }
    ],
    "correctIndex": 0
  },
  {
    "id": "q42",
    "book": 5,
    "level": "Let",
    "question": "Hvem bliver ansat som Hogwarts’ nye lærer i Forsvar mod Mørkets Kræfter og indfører strenge regler?",
    "answerDa": "Dolores Umbridge",
    "answerEn": "Dolores Umbridge",
    "correctKey": "right",
    "why": "Umbridge bliver Ministeriets udsending og begrænser praktisk undervisning i forsvarsmagi.",
    "aliases": [
      "Dolores Umbridge",
      "Dolores Umbridge"
    ],
    "type": "fact",
    "options": [
      {
        "da": "Dolores Umbridge",
        "en": "Dolores Umbridge"
      },
      {
        "da": "Nymphadora Tonks",
        "en": "Nymphadora Tonks"
      },
      {
        "da": "Rita Skeeter",
        "en": "Rita Skeeter"
      },
      {
        "da": "Bellatrix Lestrange",
        "en": "Bellatrix Lestrange"
      }
    ],
    "correctIndex": 0
  },
  {
    "id": "q43",
    "book": 5,
    "level": "Mellem",
    "question": "Hvad kalder Harry, Ron og Hermione deres hemmelige gruppe, hvor de øver forsvarsmagi?",
    "answerDa": "Dumbledores Armé",
    "answerEn": "Dumbledore’s Army",
    "correctKey": "right",
    "why": "Gruppen kaldes Dumbledores Armé, ofte forkortet DA.",
    "aliases": [
      "Dumbledores Armé",
      "Dumbledore’s Army"
    ],
    "type": "fact",
    "options": [
      {
        "da": "Dumbledores Armé",
        "en": "Dumbledore’s Army"
      },
      {
        "da": "Fønixens Børn / Children of the Phoenix",
        "en": "Children of the Phoenix"
      },
      {
        "da": "Gryffindors Vagt / Gryffindor Guard",
        "en": "Gryffindor Guard"
      },
      {
        "da": "Hogwarts’ Forsvarere / Defenders of Hogwarts",
        "en": "Defenders of Hogwarts"
      }
    ],
    "correctIndex": 0
  },
  {
    "id": "q44",
    "book": 5,
    "level": "Mellem",
    "question": "Hvilken familie bor Harry hos, når han ikke er på Hogwarts?",
    "answerDa": "Dursley-familien",
    "answerEn": "The Dursley family",
    "correctKey": "right",
    "why": "Harry bor hos sin tante Petunia, onkel Vernon og fætter Dudley.",
    "aliases": [
      "Dursley-familien",
      "The Dursleys"
    ],
    "type": "fact",
    "options": [
      {
        "da": "Dursley-familien",
        "en": "The Dursley family"
      },
      {
        "da": "Malfoy-familien / The Malfoys",
        "en": "The Malfoys"
      },
      {
        "da": "Lovegood-familien / The Lovegoods",
        "en": "The Lovegoods"
      },
      {
        "da": "Black-familien / The Blacks",
        "en": "The Blacks"
      }
    ],
    "correctIndex": 0
  },
  {
    "id": "q45",
    "book": 5,
    "level": "Mellem",
    "question": "Hvilket væsen angriber Harry og Dudley i en tunnel i Little Whinging?",
    "answerDa": "Dementorer",
    "answerEn": "Dementors",
    "correctKey": "right",
    "why": "Dementorer angriber dem, og Harry bruger en patronus for at beskytte dem.",
    "aliases": [
      "Dementorer",
      "Dementors"
    ],
    "type": "fact",
    "options": [
      {
        "da": "Dementorer",
        "en": "Dementors"
      },
      {
        "da": "Dødsædere / Death Eaters",
        "en": "Death Eaters"
      },
      {
        "da": "Inferi / Inferi",
        "en": "Inferi"
      },
      {
        "da": "Boggarts / Boggarts",
        "en": "Boggarts"
      }
    ],
    "correctIndex": 0
  },
  {
    "id": "q46",
    "book": 5,
    "level": "Mellem",
    "question": "Hvilken afdeling i Ministeriet for Magi bliver central i bogens afslutning?",
    "answerDa": "Mysteriedepartementet",
    "answerEn": "The Department of Mysteries",
    "correctKey": "right",
    "why": "Harry bliver lokket til Mysteriedepartementet af et syn, der viser sig at være manipuleret.",
    "aliases": [
      "Mysteriedepartementet",
      "Department of Mysteries"
    ],
    "type": "fact",
    "options": [
      {
        "da": "Mysteriedepartementet",
        "en": "The Department of Mysteries"
      },
      {
        "da": "Afdelingen for Magiske Ulykker / Accidental Magic Reversal Department",
        "en": "Accidental Magic Reversal Department"
      },
      {
        "da": "Afdelingen for Magiske Transportmidler / Magical Transportation Department",
        "en": "Magical Transportation Department"
      },
      {
        "da": "Afdelingen for Magiske Spil / Magical Games Department",
        "en": "Magical Games Department"
      }
    ],
    "correctIndex": 0
  },
  {
    "id": "q47",
    "book": 5,
    "level": "Svær",
    "question": "Hvem mister Harry under kampen i Ministeriet?",
    "answerDa": "Sirius Black",
    "answerEn": "Sirius Black",
    "correctKey": "right",
    "why": "Sirius falder gennem sløret i Dødskammeret efter kampen med Bellatrix.",
    "aliases": [
      "Sirius Black",
      "Sirius Black"
    ],
    "type": "fact",
    "options": [
      {
        "da": "Sirius Black",
        "en": "Sirius Black"
      },
      {
        "da": "Remus Lupin",
        "en": "Remus Lupin"
      },
      {
        "da": "Arthur Weasley",
        "en": "Arthur Weasley"
      },
      {
        "da": "Albus Dumbledore",
        "en": "Albus Dumbledore"
      }
    ],
    "correctIndex": 0
  },
  {
    "id": "q48",
    "book": 5,
    "level": "Svær",
    "question": "Hvem er den eneste elev, der kan se thestralerne ved begyndelsen af skoleåret sammen med Harry?",
    "answerDa": "Luna Lovegood",
    "answerEn": "Luna Lovegood",
    "correctKey": "right",
    "why": "Luna kan se thestralerne, fordi hun har været vidne til døden.",
    "aliases": [
      "Luna Lovegood",
      "Luna Lovegood"
    ],
    "type": "fact",
    "options": [
      {
        "da": "Luna Lovegood",
        "en": "Luna Lovegood"
      },
      {
        "da": "Cho Chang",
        "en": "Cho Chang"
      },
      {
        "da": "Ginny Weasley",
        "en": "Ginny Weasley"
      },
      {
        "da": "Hermione Granger",
        "en": "Hermione Granger"
      }
    ],
    "correctIndex": 0
  },
  {
    "id": "q49",
    "book": 5,
    "level": "Svær",
    "question": "Hvilken profeti forsøger Voldemort at få fat i?",
    "answerDa": "Profetien om Harry og Voldemort",
    "answerEn": "The prophecy about Harry and Voldemort",
    "correctKey": "right",
    "why": "Profetien handler om et barn, der kan besejre Voldemort, og forbindelsen mellem ham og Harry.",
    "aliases": [
      "Profetien om Harry og Voldemort",
      "The prophecy about Harry and Voldemort"
    ],
    "type": "fact",
    "options": [
      {
        "da": "Profetien om Harry og Voldemort",
        "en": "The prophecy about Harry and Voldemort"
      },
      {
        "da": "Profetien om Dumbledores død",
        "en": "The prophecy about Dumbledore’s death"
      },
      {
        "da": "Profetien om Tretroldmandsturneringen",
        "en": "The prophecy about the Triwizard Tournament"
      },
      {
        "da": "Profetien om de fire Hogwarts-huse",
        "en": "The prophecy about the four Hogwarts houses"
      }
    ],
    "correctIndex": 0
  },
  {
    "id": "q50",
    "book": 5,
    "level": "Svær",
    "question": "Hvem fortæller Harry, at han ikke skal føle sig skyldig over at have stærke følelser?",
    "answerDa": "Albus Dumbledore",
    "answerEn": "Albus Dumbledore",
    "correctKey": "right",
    "why": "Dumbledore forklarer Harry, at smerte og kærlighed er en del af det at være menneske.",
    "aliases": [
      "Albus Dumbledore",
      "Albus Dumbledore"
    ],
    "type": "fact",
    "options": [
      {
        "da": "Albus Dumbledore",
        "en": "Albus Dumbledore"
      },
      {
        "da": "Cornelius Fudge",
        "en": "Cornelius Fudge"
      },
      {
        "da": "Severus Snape",
        "en": "Severus Snape"
      },
      {
        "da": "Lucius Malfoy",
        "en": "Lucius Malfoy"
      }
    ],
    "correctIndex": 0
  },
  {
    "id": "q51",
    "book": 6,
    "level": "Let",
    "question": "Hvilken bog bruger Harry i eliksirundervisningen, som er mærket med Halvblodsprinsens navn?",
    "answerDa": "Halvblodsprinsens eliksirbog",
    "answerEn": "The Half-Blood Prince’s Potions textbook",
    "correctKey": "right",
    "why": "Harry bruger en gammel eliksirbog med noter og besværgelser skrevet af Halvblodsprinsen.",
    "aliases": [
      "Halvblodsprinsens bog",
      "The Half-Blood Prince’s book"
    ],
    "type": "fact",
    "options": [
      {
        "da": "Halvblodsprinsens eliksirbog",
        "en": "The Half-Blood Prince’s Potions textbook"
      },
      {
        "da": "Den Udvalgte / The Chosen One",
        "en": "The Chosen One"
      },
      {
        "da": "Mørkets Herre / The Dark Lord",
        "en": "The Dark Lord"
      },
      {
        "da": "Den Store Søger / The Great Seeker",
        "en": "The Great Seeker"
      }
    ],
    "correctIndex": 0
  },
  {
    "id": "q52",
    "book": 6,
    "level": "Let",
    "question": "Hvilken professor hjælper Harry og Dumbledore med at undersøge Voldemorts fortid?",
    "answerDa": "Horace Slughorn",
    "answerEn": "Horace Slughorn",
    "correctKey": "right",
    "why": "Slughorn har kendt Tom Riddle som elev og gemmer på en vigtig erindring.",
    "aliases": [
      "Horace Slughorn",
      "Horace Slughorn"
    ],
    "type": "fact",
    "options": [
      {
        "da": "Horace Slughorn",
        "en": "Horace Slughorn"
      },
      {
        "da": "Gilderoy Lockhart",
        "en": "Gilderoy Lockhart"
      },
      {
        "da": "Filius Flitwick",
        "en": "Filius Flitwick"
      },
      {
        "da": "Alastor Moody",
        "en": "Alastor Moody"
      }
    ],
    "correctIndex": 0
  },
  {
    "id": "q53",
    "book": 6,
    "level": "Mellem",
    "question": "Hvilken type magisk genstand er en horcrux?",
    "answerDa": "En genstand, der indeholder en del af en sjæl",
    "answerEn": "An object that contains a piece of a soul",
    "correctKey": "right",
    "why": "Voldemort deler sin sjæl og skjuler dele i genstande for at forsøge at undgå døden.",
    "aliases": [
      "En genstand, der indeholder en del af en sjæl",
      "An object that contains a piece of a soul"
    ],
    "type": "fact",
    "options": [
      {
        "da": "En genstand, der indeholder en del af en sjæl",
        "en": "An object that contains a piece of a soul"
      },
      {
        "da": "En tryllestav med to kerner",
        "en": "A wand with two cores"
      },
      {
        "da": "En kappe, der gør ejeren usynlig",
        "en": "A cloak that makes its owner invisible"
      },
      {
        "da": "En nøgle, der åbner alle døre",
        "en": "A key that opens every door"
      }
    ],
    "correctIndex": 0
  },
  {
    "id": "q54",
    "book": 6,
    "level": "Mellem",
    "question": "Hvem er den elev, der bliver alvorligt syg efter at have rørt ved en forgiftet halskæde?",
    "answerDa": "Katie Bell",
    "answerEn": "Katie Bell",
    "correctKey": "right",
    "why": "Katie Bell bliver forbandet af en halskæde, der var tiltænkt Dumbledore.",
    "aliases": [
      "Katie Bell",
      "Katie Bell"
    ],
    "type": "fact",
    "options": [
      {
        "da": "Katie Bell",
        "en": "Katie Bell"
      },
      {
        "da": "Lavender Brown",
        "en": "Lavender Brown"
      },
      {
        "da": "Parvati Patil",
        "en": "Parvati Patil"
      },
      {
        "da": "Romilda Vane",
        "en": "Romilda Vane"
      }
    ],
    "correctIndex": 0
  },
  {
    "id": "q55",
    "book": 6,
    "level": "Mellem",
    "question": "Hvilket emne gennemgår Dumbledore med Harry i deres private lektioner?",
    "answerDa": "Voldemorts fortid og hans horcruxer",
    "answerEn": "Voldemort’s past and his Horcruxes",
    "correctKey": "right",
    "why": "Dumbledore viser Harry erindringer, der forklarer Tom Riddles historie og hans søgen efter udødelighed.",
    "aliases": [
      "Voldemorts fortid og hans horcruxer",
      "Voldemort’s past and Horcruxes"
    ],
    "type": "fact",
    "options": [
      {
        "da": "Voldemorts fortid og hans horcruxer",
        "en": "Voldemort’s past and his Horcruxes"
      },
      {
        "da": "Avanceret Quidditch-taktik",
        "en": "Advanced Quidditch tactics"
      },
      {
        "da": "Animagus-forvandling",
        "en": "Animagus transformation"
      },
      {
        "da": "Tidsrejsemagi",
        "en": "Time-travel magic"
      }
    ],
    "correctIndex": 0
  },
  {
    "id": "q56",
    "book": 6,
    "level": "Mellem",
    "question": "Hvad sker der med Ron, da han drikker den forgiftede mjød?",
    "answerDa": "Han bliver forgiftet efter at have drukket mjød, der var tiltænkt Dumbledore",
    "answerEn": "He is poisoned after drinking mead intended for Dumbledore",
    "correctKey": "right",
    "why": "Ron drikker forgiftet mjød, efter at Slughorns flaske er blevet forhekset; Harry redder ham.",
    "aliases": [
      "Han bliver forgiftet efter at have drukket mjød, der var tiltænkt Dumbledore",
      "He is poisoned after drinking a drink meant for someone else"
    ],
    "type": "fact",
    "options": [
      {
        "da": "Han bliver forgiftet efter at have drukket mjød, der var tiltænkt Dumbledore",
        "en": "He is poisoned after drinking mead intended for Dumbledore"
      },
      {
        "da": "Han bliver forvandlet til en kat",
        "en": "He is turned into a cat"
      },
      {
        "da": "Han mister sin hukommelse permanent",
        "en": "He permanently loses his memory"
      },
      {
        "da": "Han bliver fanget i en tidsvender",
        "en": "He is trapped in a Time-Turner"
      }
    ],
    "correctIndex": 0
  },
  {
    "id": "q57",
    "book": 6,
    "level": "Svær",
    "question": "Hvilken horcrux mener Dumbledore, at de finder i en grotte?",
    "answerDa": "En medaljon",
    "answerEn": "A locket",
    "correctKey": "right",
    "why": "De finder en medaljon, men den viser sig senere at være en falsk horcrux.",
    "aliases": [
      "En medaljon",
      "A locket"
    ],
    "type": "fact",
    "options": [
      {
        "da": "En medaljon",
        "en": "A locket"
      },
      {
        "da": "En ring / Ring",
        "en": "A ring"
      },
      {
        "da": "En dagbog",
        "en": "A diary"
      },
      {
        "da": "En pokal / Cup",
        "en": "A cup"
      }
    ],
    "correctIndex": 0
  },
  {
    "id": "q58",
    "book": 6,
    "level": "Svær",
    "question": "Hvilken besværgelse bruger Harry mod Draco i badeværelset uden at kende dens virkning?",
    "answerDa": "Sectumsempra",
    "answerEn": "Sectumsempra",
    "correctKey": "right",
    "why": "Sectumsempra skærer alvorlige sår i Draco; Harry kendte kun noten “mod fjender”.",
    "aliases": [
      "Sectumsempra",
      "Sectumsempra"
    ],
    "type": "fact",
    "options": [
      {
        "da": "Sectumsempra",
        "en": "Sectumsempra"
      },
      {
        "da": "Crucio",
        "en": "Crucio"
      },
      {
        "da": "Imperio",
        "en": "Imperio"
      },
      {
        "da": "Obliviate",
        "en": "Obliviate"
      }
    ],
    "correctIndex": 0
  },
  {
    "id": "q59",
    "book": 6,
    "level": "Svær",
    "question": "Hvem dræber Dumbledore på toppen af Astronomitårnet?",
    "answerDa": "Severus Snape",
    "answerEn": "Severus Snape",
    "correctKey": "right",
    "why": "Snape dræber Dumbledore efter en aftale mellem dem, som først forklares senere.",
    "aliases": [
      "Severus Snape",
      "Severus Snape"
    ],
    "type": "fact",
    "options": [
      {
        "da": "Severus Snape",
        "en": "Severus Snape"
      },
      {
        "da": "Draco Malfoy",
        "en": "Draco Malfoy"
      },
      {
        "da": "Bellatrix Lestrange",
        "en": "Bellatrix Lestrange"
      },
      {
        "da": "Fenrir Greyback",
        "en": "Fenrir Greyback"
      }
    ],
    "correctIndex": 0
  },
  {
    "id": "q60",
    "book": 6,
    "level": "Svær",
    "question": "Hvad viser sig at være forkert ved medaljonen, Harry og Dumbledore finder?",
    "answerDa": "En falsk medaljon, som R.A.B. efterlod",
    "answerEn": "A fake locket left behind by R.A.B.",
    "correctKey": "right",
    "why": "Et brev underskrevet R.A.B. forklarer, at den rigtige medaljon allerede er blevet taget.",
    "aliases": [
      "En falsk medaljon, som R.A.B. efterlod",
      "It is a fake locket left by R.A.B."
    ],
    "type": "fact",
    "options": [
      {
        "da": "En falsk medaljon, som R.A.B. efterlod",
        "en": "A fake locket left behind by R.A.B."
      },
      {
        "da": "Den er slet ikke magisk",
        "en": "It is not magical at all"
      },
      {
        "da": "Den indeholder Dumbledores sjæl",
        "en": "It contains Dumbledore’s soul"
      },
      {
        "da": "Den er lavet af basilisk-hud",
        "en": "It is made from basilisk skin"
      }
    ],
    "correctIndex": 0
  },
  {
    "id": "q61",
    "book": 7,
    "level": "Let",
    "question": "Hvilke tre genstande er Dødsregalierne?",
    "answerDa": "Oldstaven, Opstandelsesstenen og Usynlighedskappen",
    "answerEn": "The Elder Wand, the Resurrection Stone and the Invisibility Cloak",
    "correctKey": "right",
    "why": "De tre legendariske genstande er Oldstaven, Opstandelsesstenen og Usynlighedskappen.",
    "aliases": [
      "Oldstaven, Opstandelsesstenen og Usynlighedskappen",
      "The Elder Wand, the Resurrection Stone and the Invisibility Cloak"
    ],
    "type": "fact",
    "options": [
      {
        "da": "Oldstaven, Opstandelsesstenen og Usynlighedskappen",
        "en": "The Elder Wand, the Resurrection Stone and the Invisibility Cloak"
      },
      {
        "da": "Ildpokalen, en tidsvender og en medaljon",
        "en": "The Goblet of Fire, a Time-Turner and a locket"
      },
      {
        "da": "Sorteringshatten, Røverkortet og Gryffindors sværd",
        "en": "The Sorting Hat, the Marauder’s Map and Gryffindor’s sword"
      },
      {
        "da": "En horcrux, en portnøgle og en føniksfjer",
        "en": "A Horcrux, a Portkey and a phoenix feather"
      }
    ],
    "correctIndex": 0
  },
  {
    "id": "q62",
    "book": 7,
    "level": "Let",
    "question": "Hvem er R.A.B., som efterlader en besked i den falske medaljon?",
    "answerDa": "Regulus Arcturus Black",
    "answerEn": "Regulus Arcturus Black",
    "correctKey": "right",
    "why": "Regulus Arcturus Black var Sirius’ bror og en tidligere dødsæder, som vendte sig mod Voldemort.",
    "aliases": [
      "Regulus Arcturus Black",
      "Regulus Arcturus Black"
    ],
    "type": "fact",
    "options": [
      {
        "da": "Regulus Arcturus Black",
        "en": "Regulus Arcturus Black"
      },
      {
        "da": "Remus Albus Black",
        "en": "Remus Albus Black"
      },
      {
        "da": "Rufus Augustus Bagnold",
        "en": "Rufus Augustus Bagnold"
      },
      {
        "da": "Rabastan Antonin Black",
        "en": "Rabastan Antonin Black"
      }
    ],
    "correctIndex": 0
  },
  {
    "id": "q63",
    "book": 7,
    "level": "Mellem",
    "question": "Hvilken genstand efterlod Dumbledore til Harry, og som indeholder Opstandelsesstenen?",
    "answerDa": "Den Snitch, som Dumbledore efterlod til Harry",
    "answerEn": "The Snitch that Dumbledore left for Harry",
    "correctKey": "right",
    "why": "Dumbledore efterlod Harry en Snitch, som åbner sig og afslører Opstandelsesstenen. Gryffindors sværd ligger i søen.",
    "aliases": [
      "Den Snitch, som Dumbledore efterlod til Harry",
      "The Snitch that Dumbledore left for Harry"
    ],
    "type": "fact",
    "options": [
      {
        "da": "Den Snitch, som Dumbledore efterlod til Harry",
        "en": "The Snitch that Dumbledore left for Harry"
      },
      {
        "da": "Røverkortet",
        "en": "The Marauder’s Map"
      },
      {
        "da": "Tidsvenderen / Time-Turner",
        "en": "The Time-Turner"
      },
      {
        "da": "Ildpokalen / Goblet of Fire",
        "en": "The Goblet of Fire"
      }
    ],
    "correctIndex": 0
  },
  {
    "id": "q64",
    "book": 7,
    "level": "Mellem",
    "question": "Hvilken troldmandsbank bryder trioen ind i?",
    "answerDa": "Gringotts",
    "answerEn": "Gringotts",
    "correctKey": "right",
    "why": "Harry, Ron og Hermione bryder ind i Gringotts for at hente Hufflepuffs pokal fra Bellatrix’ boks.",
    "aliases": [
      "Gringotts",
      "Gringotts"
    ],
    "type": "fact",
    "options": [
      {
        "da": "Gringotts",
        "en": "Gringotts"
      },
      {
        "da": "Borgin og Burkes / Borgin and Burkes",
        "en": "Borgin and Burkes"
      },
      {
        "da": "Ministeriets arkiv / Ministry Archives",
        "en": "Ministry Archives"
      },
      {
        "da": "Ollivanders",
        "en": "Ollivanders"
      }
    ],
    "correctIndex": 0
  },
  {
    "id": "q65",
    "book": 7,
    "level": "Mellem",
    "question": "Hvilket hus’ genstand er en af Voldemorts horcruxer i Gringotts?",
    "answerDa": "Hufflepuffs pokal",
    "answerEn": "Hufflepuff’s Cup",
    "correctKey": "right",
    "why": "Helga Hufflepuffs pokal bliver en horcrux og opbevares i Bellatrix’ boks.",
    "aliases": [
      "Hufflepuffs pokal",
      "Hufflepuff’s Cup"
    ],
    "type": "fact",
    "options": [
      {
        "da": "Hufflepuffs pokal",
        "en": "Hufflepuff’s Cup"
      },
      {
        "da": "Gryffindors sværd",
        "en": "Gryffindor’s Sword"
      },
      {
        "da": "Ravenclaws diadem / Ravenclaw’s Diadem",
        "en": "Ravenclaw’s Diadem"
      },
      {
        "da": "Slytherins ring / Slytherin’s Ring",
        "en": "Slytherin’s Ring"
      }
    ],
    "correctIndex": 0
  },
  {
    "id": "q66",
    "book": 7,
    "level": "Mellem",
    "question": "Hvem leder Hogwarts, mens trioen er på flugt, og Voldemort har taget magten?",
    "answerDa": "Severus Snape",
    "answerEn": "Severus Snape",
    "correctKey": "right",
    "why": "Snape er udnævnt til rektor under Voldemorts kontrol, mens Carrow-søskende underviser.",
    "aliases": [
      "Severus Snape",
      "Severus Snape"
    ],
    "type": "fact",
    "options": [
      {
        "da": "Severus Snape",
        "en": "Severus Snape"
      },
      {
        "da": "Minerva McGonagall",
        "en": "Minerva McGonagall"
      },
      {
        "da": "Dolores Umbridge",
        "en": "Dolores Umbridge"
      },
      {
        "da": "Horace Slughorn",
        "en": "Horace Slughorn"
      }
    ],
    "correctIndex": 0
  },
  {
    "id": "q67",
    "book": 7,
    "level": "Svær",
    "question": "Hvilken af disse genstande er ikke en af Voldemorts horcruxer?",
    "answerDa": "Gryffindors sværd",
    "answerEn": "Gryffindor’s Sword",
    "correctKey": "right",
    "why": "Gryffindors sværd er ikke en horcrux; det kan ødelægge horcruxer, fordi det har absorberet basiliskgift.",
    "aliases": [
      "Gryffindors sværd",
      "Gryffindor’s Sword"
    ],
    "type": "fact",
    "options": [
      {
        "da": "Gryffindors sværd",
        "en": "Gryffindor’s Sword"
      },
      {
        "da": "Tom Riddles dagbog / Tom Riddle’s Diary",
        "en": "Tom Riddle’s Diary"
      },
      {
        "da": "Marvolo Gaunts ring / Marvolo Gaunt’s Ring",
        "en": "Marvolo Gaunt’s Ring"
      },
      {
        "da": "Ravenclaws diadem / Ravenclaw’s Diadem",
        "en": "Ravenclaw’s Diadem"
      }
    ],
    "correctIndex": 0
  },
  {
    "id": "q68",
    "book": 7,
    "level": "Svær",
    "question": "Hvem ødelægger Hufflepuffs pokal i Hemmelighedernes Kammer?",
    "answerDa": "Hermione Granger",
    "answerEn": "Hermione Granger",
    "correctKey": "right",
    "why": "Hermione ødelægger pokalen med en basilisk-tand, som trioen finder i Kammeret.",
    "aliases": [
      "Hermione Granger",
      "Hermione Granger"
    ],
    "type": "fact",
    "options": [
      {
        "da": "Hermione Granger",
        "en": "Hermione Granger"
      },
      {
        "da": "Harry Potter",
        "en": "Harry Potter"
      },
      {
        "da": "Ron Weasley",
        "en": "Ron Weasley"
      },
      {
        "da": "Neville Longbottom",
        "en": "Neville Longbottom"
      }
    ],
    "correctIndex": 0
  },
  {
    "id": "q69",
    "book": 7,
    "level": "Svær",
    "question": "Hvilken sandhed om Snape afsløres gennem hans erindringer?",
    "answerDa": "Han elskede Lily Potter og beskyttede Harry i hemmelighed",
    "answerEn": "He loved Lily Potter and secretly protected Harry",
    "correctKey": "right",
    "why": "Snapes kærlighed til Lily er en central grund til, at han hjælper med at beskytte Harry.",
    "aliases": [
      "Han elskede Lily Potter og beskyttede Harry i hemmelighed",
      "He loved Lily Potter and secretly protected Harry"
    ],
    "type": "fact",
    "options": [
      {
        "da": "Han elskede Lily Potter og beskyttede Harry i hemmelighed",
        "en": "He loved Lily Potter and secretly protected Harry"
      },
      {
        "da": "Han var Voldemorts far",
        "en": "He was Voldemort’s father"
      },
      {
        "da": "Han havde aldrig været dødsæder",
        "en": "He had never been a Death Eater"
      },
      {
        "da": "Han skabte alle Voldemorts horcruxer",
        "en": "He created all of Voldemort’s Horcruxes"
      }
    ],
    "correctIndex": 0
  },
  {
    "id": "q70",
    "book": 7,
    "level": "Svær",
    "question": "Hvem ødelægger Nagini under slaget om Hogwarts?",
    "answerDa": "Neville Longbottom",
    "answerEn": "Neville Longbottom",
    "correctKey": "right",
    "why": "Neville trækker Gryffindors sværd fra Sorteringshatten og dræber Nagini.",
    "aliases": [
      "Neville Longbottom",
      "Neville Longbottom"
    ],
    "type": "fact",
    "options": [
      {
        "da": "Neville Longbottom",
        "en": "Neville Longbottom"
      },
      {
        "da": "Ron Weasley",
        "en": "Ron Weasley"
      },
      {
        "da": "Harry Potter",
        "en": "Harry Potter"
      },
      {
        "da": "Ginny Weasley",
        "en": "Ginny Weasley"
      }
    ],
    "correctIndex": 0
  },
  {
    "id": "q71",
    "book": 0,
    "level": "Let",
    "question": "Hvad hedder skolen, hvor Harry lærer at bruge magi?",
    "answerDa": "Hogwarts",
    "answerEn": "Hogwarts",
    "correctKey": "right",
    "why": "Hogwarts School of Witchcraft and Wizardry er den britiske troldmandsskole, Harry går på.",
    "aliases": [
      "Hogwarts",
      "Hogwarts"
    ],
    "type": "fact",
    "options": [
      {
        "da": "Hogwarts",
        "en": "Hogwarts"
      },
      {
        "da": "Beauxbatons",
        "en": "Beauxbatons"
      },
      {
        "da": "Durmstrang",
        "en": "Durmstrang"
      },
      {
        "da": "Ilvermorny",
        "en": "Ilvermorny"
      }
    ],
    "correctIndex": 0
  },
  {
    "id": "q72",
    "book": 0,
    "level": "Let",
    "question": "Hvad hedder Harrys bedste ven, der kommer fra en stor troldmandsfamilie?",
    "answerDa": "Ron Weasley",
    "answerEn": "Ron Weasley",
    "correctKey": "right",
    "why": "Ron Weasley bliver Harrys nære ven fra deres første togtur til Hogwarts.",
    "aliases": [
      "Ron Weasley",
      "Ron Weasley"
    ],
    "type": "fact",
    "options": [
      {
        "da": "Ron Weasley",
        "en": "Ron Weasley"
      },
      {
        "da": "Neville Longbottom",
        "en": "Neville Longbottom"
      },
      {
        "da": "Draco Malfoy",
        "en": "Draco Malfoy"
      },
      {
        "da": "Dean Thomas",
        "en": "Dean Thomas"
      }
    ],
    "correctIndex": 0
  },
  {
    "id": "q73",
    "book": 0,
    "level": "Let",
    "question": "Hvad hedder Harrys bedste veninde, der er kendt for sin flid og store viden?",
    "answerDa": "Hermione Granger",
    "answerEn": "Hermione Granger",
    "correctKey": "right",
    "why": "Hermione er en fremragende elev og en af Harrys nærmeste venner.",
    "aliases": [
      "Hermione Granger",
      "Hermione Granger"
    ],
    "type": "fact",
    "options": [
      {
        "da": "Hermione Granger",
        "en": "Hermione Granger"
      },
      {
        "da": "Luna Lovegood",
        "en": "Luna Lovegood"
      },
      {
        "da": "Cho Chang",
        "en": "Cho Chang"
      },
      {
        "da": "Ginny Weasley",
        "en": "Ginny Weasley"
      }
    ],
    "correctIndex": 0
  },
  {
    "id": "q74",
    "book": 0,
    "level": "Mellem",
    "question": "Hvilket fængsel er kendt for at blive bevogtet af dementorer?",
    "answerDa": "Azkaban",
    "answerEn": "Azkaban",
    "correctKey": "right",
    "why": "Azkaban er troldmandsfængslet, hvor blandt andre Sirius Black og Bellatrix Lestrange har siddet.",
    "aliases": [
      "Azkaban",
      "Azkaban"
    ],
    "type": "fact",
    "options": [
      {
        "da": "Azkaban",
        "en": "Azkaban"
      },
      {
        "da": "Nurmengard",
        "en": "Nurmengard"
      },
      {
        "da": "Gringotts",
        "en": "Gringotts"
      },
      {
        "da": "St. Mungo’s",
        "en": "St. Mungo’s"
      }
    ],
    "correctIndex": 0
  },
  {
    "id": "q75",
    "book": 0,
    "level": "Mellem",
    "question": "Hvilken butik laver Harrys tryllestav?",
    "answerDa": "Ollivanders",
    "answerEn": "Ollivanders",
    "correctKey": "right",
    "why": "Ollivanders i Diagonalstræde sælger tryllestave.",
    "aliases": [
      "Ollivanders",
      "Ollivanders"
    ],
    "type": "fact",
    "options": [
      {
        "da": "Ollivanders",
        "en": "Ollivanders"
      },
      {
        "da": "Flourish and Blotts",
        "en": "Flourish and Blotts"
      },
      {
        "da": "Quality Quidditch Supplies",
        "en": "Quality Quidditch Supplies"
      },
      {
        "da": "Borgin and Burkes",
        "en": "Borgin and Burkes"
      }
    ],
    "correctIndex": 0
  },
  {
    "id": "q76",
    "book": 0,
    "level": "Mellem",
    "question": "Hvilket magisk kort viser personer og deres bevægelser på Hogwarts?",
    "answerDa": "Røverkortet",
    "answerEn": "The Marauder’s Map",
    "correctKey": "right",
    "why": "Røverkortet viser Hogwarts’ gange og placeringen af personer på området.",
    "aliases": [
      "Røverkortet",
      "The Marauder’s Map"
    ],
    "type": "fact",
    "options": [
      {
        "da": "Røverkortet",
        "en": "The Marauder’s Map"
      },
      {
        "da": "Riddles dagbog / Riddle’s Diary",
        "en": "Riddle’s Diary"
      },
      {
        "da": "Profetien / The Prophecy",
        "en": "The Prophecy"
      },
      {
        "da": "Et pensieve / A Pensieve",
        "en": "A Pensieve"
      }
    ],
    "correctIndex": 0
  },
  {
    "id": "q77",
    "book": 0,
    "level": "Mellem",
    "question": "Hvad hedder den magiske bus, som kan hente troldmænd i nød?",
    "answerDa": "Natbussen",
    "answerEn": "The Knight Bus",
    "correctKey": "right",
    "why": "Natbussen er en lilla bus, der hjælper strandede hekse og troldmænd.",
    "aliases": [
      "Natbussen",
      "The Knight Bus"
    ],
    "type": "fact",
    "options": [
      {
        "da": "Natbussen",
        "en": "The Knight Bus"
      },
      {
        "da": "Hogwarts-ekspressen / Hogwarts Express",
        "en": "The Hogwarts Express"
      },
      {
        "da": "Ministeriets vogn / Ministry Carriage",
        "en": "The Ministry Carriage"
      },
      {
        "da": "Den flyvende Ford Anglia / Flying Ford Anglia",
        "en": "The Flying Ford Anglia"
      }
    ],
    "correctIndex": 0
  },
  {
    "id": "q78",
    "book": 0,
    "level": "Svær",
    "question": "Hvilken besværgelse bruges typisk til at afvæbne en modstander?",
    "answerDa": "Expelliarmus",
    "answerEn": "Expelliarmus",
    "correctKey": "right",
    "why": "Expelliarmus slår typisk modstanderens tryllestav ud af hånden.",
    "aliases": [
      "Expelliarmus",
      "Expelliarmus"
    ],
    "type": "fact",
    "options": [
      {
        "da": "Expelliarmus",
        "en": "Expelliarmus"
      },
      {
        "da": "Lumos",
        "en": "Lumos"
      },
      {
        "da": "Alohomora",
        "en": "Alohomora"
      },
      {
        "da": "Wingardium Leviosa",
        "en": "Wingardium Leviosa"
      }
    ],
    "correctIndex": 0
  },
  {
    "id": "q79",
    "book": 0,
    "level": "Svær",
    "question": "Hvilket materiale fra Fawkes findes i både Harrys og Voldemorts tryllestav?",
    "answerDa": "En føniksfjer",
    "answerEn": "A phoenix feather",
    "correctKey": "right",
    "why": "Tryllestavene har samme kerne: hver indeholder en fjer fra Dumbledores føniks, Fawkes.",
    "aliases": [
      "En føniksfjer",
      "A phoenix feather"
    ],
    "type": "fact",
    "options": [
      {
        "da": "En føniksfjer",
        "en": "A phoenix feather"
      },
      {
        "da": "Et enhjørningehår / Unicorn hair",
        "en": "A unicorn hair"
      },
      {
        "da": "En dragehjertestreng / Dragon heartstring",
        "en": "A dragon heartstring"
      },
      {
        "da": "Et thestralhår / Thestral hair",
        "en": "A thestral hair"
      }
    ],
    "correctIndex": 0
  },
  {
    "id": "q80",
    "book": 0,
    "level": "Svær",
    "question": "Hvad er en animagus?",
    "answerDa": "En troldmand eller heks, der kan forvandle sig til et bestemt dyr",
    "answerEn": "A witch or wizard who can transform into a specific animal",
    "correctKey": "right",
    "why": "En animagus kan forvandle sig til et dyr efter at have lært en vanskelig og reguleret magisk proces.",
    "aliases": [
      "En troldmand eller heks, der kan forvandle sig til et bestemt dyr",
      "A witch or wizard who can transform into a specific animal"
    ],
    "type": "fact",
    "options": [
      {
        "da": "En troldmand eller heks, der kan forvandle sig til et bestemt dyr",
        "en": "A witch or wizard who can transform into a specific animal"
      },
      {
        "da": "En ånd, der hjemsøger et slot",
        "en": "A spirit that haunts a castle"
      },
      {
        "da": "En magisk plante, der kan tale",
        "en": "A magical plant that can speak"
      },
      {
        "da": "En tryllestav med flere kerner",
        "en": "A wand with multiple cores"
      }
    ],
    "correctIndex": 0
  },
  {
    "id": "q81",
    "book": 0,
    "level": "Svær",
    "question": "Hvilket stof bruges til at lave Polyjuice-eliksir, så man kan tage en anden persons udseende?",
    "answerDa": "Et hårstrå fra personen",
    "answerEn": "A hair from that person",
    "correctKey": "right",
    "why": "Polyjuice-eliksir kræver en del af den person, hvis udseende man vil antage, ofte et hårstrå.",
    "aliases": [
      "Et hårstrå fra personen",
      "A hair from the person"
    ],
    "type": "fact",
    "options": [
      {
        "da": "Et hårstrå fra personen",
        "en": "A hair from that person"
      },
      {
        "da": "En fjer fra en føniks / A phoenix feather",
        "en": "A phoenix feather"
      },
      {
        "da": "Et stykke drageæg / A piece of dragon egg",
        "en": "A piece of dragon egg"
      },
      {
        "da": "En tåre fra en dementor / A dementor’s tear",
        "en": "A dementor’s tear"
      }
    ],
    "correctIndex": 0
  },
  {
    "id": "q82",
    "book": 0,
    "level": "Let",
    "question": "I hvilken del af Harrys historie finder man dette: Hvad hedder den kæmpe, der fortæller Harry, at han er en troldmand?",
    "answerDa": "De Vises Sten",
    "answerEn": "Philosopher’s Stone",
    "correctKey": "right",
    "why": "Hagrid opsøger Harry på hans ellevte fødselsdag og fortæller ham om den magiske verden.",
    "aliases": [
      "bog 1",
      "1",
      "De Vises Sten"
    ],
    "type": "fact"
  },
  {
    "id": "q83",
    "book": 0,
    "level": "Let",
    "question": "I hvilken del af Harrys historie finder man dette: Hvilket hus bliver Harry sorteret ind i?",
    "answerDa": "De Vises Sten",
    "answerEn": "Philosopher’s Stone",
    "correctKey": "right",
    "why": "Sorteringshatten placerer Harry i Gryffindor, selv om den overvejer Slytherin.",
    "aliases": [
      "bog 1",
      "1",
      "De Vises Sten"
    ],
    "type": "fact"
  },
  {
    "id": "q84",
    "book": 0,
    "level": "Let",
    "question": "I hvilken del af Harrys historie finder man dette: Hvad hedder den magiske sport, som Harry spiller på et kosteskaft?",
    "answerDa": "De Vises Sten",
    "answerEn": "Philosopher’s Stone",
    "correctKey": "right",
    "why": "Quidditch spilles på flyvende koste med flere bolde og mål.",
    "aliases": [
      "bog 1",
      "1",
      "De Vises Sten"
    ],
    "type": "fact"
  },
  {
    "id": "q85",
    "book": 0,
    "level": "Mellem",
    "question": "I hvilken del af Harrys historie finder man dette: Hvilken position spiller Harry på Gryffindors Quidditch-hold?",
    "answerDa": "De Vises Sten",
    "answerEn": "Philosopher’s Stone",
    "correctKey": "right",
    "why": "En søger skal fange Det Gyldne Lyn; det er Harrys position.",
    "aliases": [
      "bog 1",
      "1",
      "De Vises Sten"
    ],
    "type": "fact"
  },
  {
    "id": "q86",
    "book": 0,
    "level": "Mellem",
    "question": "I hvilken del af Harrys historie finder man dette: Hvad beskytter Flamel og Dumbledore ved hjælp af flere magiske forhindringer?",
    "answerDa": "De Vises Sten",
    "answerEn": "Philosopher’s Stone",
    "correctKey": "right",
    "why": "Nicolas Flamels sten kan blandt andet fremstille livseliksir og er målet for Voldemorts plan.",
    "aliases": [
      "bog 1",
      "1",
      "De Vises Sten"
    ],
    "type": "fact"
  },
  {
    "id": "q87",
    "book": 0,
    "level": "Mellem",
    "question": "I hvilken del af Harrys historie finder man dette: Hvilket magisk væsen møder Harry, Ron og Hermione på et pigetoilet?",
    "answerDa": "De Vises Sten",
    "answerEn": "Philosopher’s Stone",
    "correctKey": "right",
    "why": "Quirrell slipper en bjergtrold løs på Hogwarts under Halloween.",
    "aliases": [
      "bog 1",
      "1",
      "De Vises Sten"
    ],
    "type": "fact"
  },
  {
    "id": "q88",
    "book": 0,
    "level": "Svær",
    "question": "I hvilken del af Harrys historie finder man dette: Hvilken professor underviser i eliksirer i den første bog?",
    "answerDa": "De Vises Sten",
    "answerEn": "Philosopher’s Stone",
    "correctKey": "right",
    "why": "Snape er eliksirprofessor og leder af Slytherin-huset.",
    "aliases": [
      "bog 1",
      "1",
      "De Vises Sten"
    ],
    "type": "fact"
  },
  {
    "id": "q89",
    "book": 0,
    "level": "Svær",
    "question": "I hvilken del af Harrys historie finder man dette: Hvem viser sig at være den egentlige modstander bag forsøget på at stjæle stenen?",
    "answerDa": "De Vises Sten",
    "answerEn": "Philosopher’s Stone",
    "correctKey": "right",
    "why": "Quirrell hjælper Voldemort og forsøger at få fat i stenen.",
    "aliases": [
      "bog 1",
      "1",
      "De Vises Sten"
    ],
    "type": "fact"
  },
  {
    "id": "q90",
    "book": 0,
    "level": "Svær",
    "question": "I hvilken del af Harrys historie finder man dette: Hvilken udfordring kræver, at Harry spiller et menneskestort skakspil?",
    "answerDa": "De Vises Sten",
    "answerEn": "Philosopher’s Stone",
    "correctKey": "right",
    "why": "Ron leder skakspillet og ofrer sig selv, så Harry kan komme videre.",
    "aliases": [
      "bog 1",
      "1",
      "De Vises Sten"
    ],
    "type": "fact"
  },
  {
    "id": "q91",
    "book": 0,
    "level": "Svær",
    "question": "I hvilken del af Harrys historie finder man dette: Hvem tilhørte usynlighedskappen, før Harry fik den i julegave?",
    "answerDa": "De Vises Sten",
    "answerEn": "Philosopher’s Stone",
    "correctKey": "right",
    "why": "Kappen blev givet videre fra James Potter; Dumbledore havde den til låns.",
    "aliases": [
      "bog 1",
      "1",
      "De Vises Sten"
    ],
    "type": "fact"
  },
  {
    "id": "q92",
    "book": 0,
    "level": "Let",
    "question": "I hvilken del af Harrys historie finder man dette: Hvilken genstand skriver Harrys navn og oplevelser ind i, uden at vide hvem der svarer?",
    "answerDa": "Hemmelighedernes Kammer",
    "answerEn": "Chamber of Secrets",
    "correctKey": "right",
    "why": "Tom Riddles dagbog svarer Harry og viser sig at være en horcrux.",
    "aliases": [
      "bog 2",
      "2",
      "Hemmelighedernes Kammer"
    ],
    "type": "fact"
  },
  {
    "id": "q93",
    "book": 0,
    "level": "Let",
    "question": "I hvilken del af Harrys historie finder man dette: Hvilket væsen terroriserer eleverne ved at forstene dem?",
    "answerDa": "Hemmelighedernes Kammer",
    "answerEn": "Chamber of Secrets",
    "correctKey": "right",
    "why": "Basilisken bevæger sig gennem rørene og forstener dem, der ser dens blik indirekte.",
    "aliases": [
      "bog 2",
      "2",
      "Hemmelighedernes Kammer"
    ],
    "type": "fact"
  },
  {
    "id": "q94",
    "book": 0,
    "level": "Let",
    "question": "I hvilken del af Harrys historie finder man dette: Hvem er husalfen, der forsøger at holde Harry væk fra Hogwarts?",
    "answerDa": "Hemmelighedernes Kammer",
    "answerEn": "Chamber of Secrets",
    "correctKey": "right",
    "why": "Dobby forsøger at advare Harry om faren i Hemmelighedernes Kammer.",
    "aliases": [
      "bog 2",
      "2",
      "Hemmelighedernes Kammer"
    ],
    "type": "fact"
  },
  {
    "id": "q95",
    "book": 0,
    "level": "Mellem",
    "question": "I hvilken del af Harrys historie finder man dette: Hvordan kommer Harry og Ron til Hogwarts, efter at Dobby forhindrer dem i at komme gennem barrieren på perron 9¾?",
    "answerDa": "Hemmelighedernes Kammer",
    "answerEn": "Chamber of Secrets",
    "correctKey": "right",
    "why": "De flyver i den fortryllede bil, som ender med at kaste dem af ved Slagpoplen.",
    "aliases": [
      "bog 2",
      "2",
      "Hemmelighedernes Kammer"
    ],
    "type": "fact"
  },
  {
    "id": "q96",
    "book": 0,
    "level": "Mellem",
    "question": "I hvilken del af Harrys historie finder man dette: Hvilken lærer er berømt for sine bøger om sine egne bedrifter?",
    "answerDa": "Hemmelighedernes Kammer",
    "answerEn": "Chamber of Secrets",
    "correctKey": "right",
    "why": "Lockhart er den nye lærer i Forsvar mod Mørkets Kræfter og en selvglad forfatter.",
    "aliases": [
      "bog 2",
      "2",
      "Hemmelighedernes Kammer"
    ],
    "type": "fact"
  },
  {
    "id": "q97",
    "book": 0,
    "level": "Mellem",
    "question": "I hvilken del af Harrys historie finder man dette: Hvem viser sig at være arvingen efter Slytherin?",
    "answerDa": "Hemmelighedernes Kammer",
    "answerEn": "Chamber of Secrets",
    "correctKey": "right",
    "why": "Tom Riddle, den unge Voldemort, åbner Hemmelighedernes Kammer gennem dagbogen.",
    "aliases": [
      "bog 2",
      "2",
      "Hemmelighedernes Kammer"
    ],
    "type": "fact"
  },
  {
    "id": "q98",
    "book": 0,
    "level": "Svær",
    "question": "I hvilken del af Harrys historie finder man dette: Hvilken fugl kommer Harry til undsætning i Kammeret?",
    "answerDa": "Hemmelighedernes Kammer",
    "answerEn": "Chamber of Secrets",
    "correctKey": "right",
    "why": "Fawkes bringer Sorteringshatten og heler Harrys sår med sine tårer.",
    "aliases": [
      "bog 2",
      "2",
      "Hemmelighedernes Kammer"
    ],
    "type": "fact"
  },
  {
    "id": "q99",
    "book": 0,
    "level": "Svær",
    "question": "I hvilken del af Harrys historie finder man dette: Hvilken plante bruges til at lave en modgift, der kan genoplive elever, som er blevet forstenet?",
    "answerDa": "Hemmelighedernes Kammer",
    "answerEn": "Chamber of Secrets",
    "correctKey": "right",
    "why": "Mandragoraens skrig kan være dødelige, men dens modnede rod bruges til at genoplive de forstenede.",
    "aliases": [
      "bog 2",
      "2",
      "Hemmelighedernes Kammer"
    ],
    "type": "fact"
  },
  {
    "id": "q100",
    "book": 0,
    "level": "Svær",
    "question": "I hvilken del af Harrys historie finder man dette: Hvem redder Ginny fra Tom Riddle i Hemmelighedernes Kammer?",
    "answerDa": "Hemmelighedernes Kammer",
    "answerEn": "Chamber of Secrets",
    "correctKey": "right",
    "why": "Harry ødelægger dagbogen med en basilisk-tand og redder Ginny.",
    "aliases": [
      "bog 2",
      "2",
      "Hemmelighedernes Kammer"
    ],
    "type": "fact"
  },
  {
    "id": "q101",
    "book": 0,
    "level": "Svær",
    "question": "I hvilken del af Harrys historie finder man dette: Hvilken genstand ødelægger Tom Riddles dagbog?",
    "answerDa": "Hemmelighedernes Kammer",
    "answerEn": "Chamber of Secrets",
    "correctKey": "right",
    "why": "Harry stikker dagbogen med en basilisk-tand, som ødelægger horcruxen.",
    "aliases": [
      "bog 2",
      "2",
      "Hemmelighedernes Kammer"
    ],
    "type": "fact"
  },
  {
    "id": "q102",
    "book": 0,
    "level": "Let",
    "question": "I hvilken del af Harrys historie finder man dette: Hvem flygter fra Azkaban og bliver jagtet gennem det meste af bogen?",
    "answerDa": "Fangen fra Azkaban",
    "answerEn": "Prisoner of Azkaban",
    "correctKey": "right",
    "why": "Sirius Black er flygtet fra Azkaban, og alle tror først, at han vil finde Harry.",
    "aliases": [
      "bog 3",
      "3",
      "Fangen fra Azkaban"
    ],
    "type": "fact"
  },
  {
    "id": "q103",
    "book": 0,
    "level": "Let",
    "question": "I hvilken del af Harrys historie finder man dette: Hvilke væsner patruljerer omkring Hogwarts og kan suge håb og glæde ud af mennesker?",
    "answerDa": "Fangen fra Azkaban",
    "answerEn": "Prisoner of Azkaban",
    "correctKey": "right",
    "why": "Dementorerne arbejder for Ministeriet og påvirker Harry særligt voldsomt.",
    "aliases": [
      "bog 3",
      "3",
      "Fangen fra Azkaban"
    ],
    "type": "fact"
  },
  {
    "id": "q104",
    "book": 0,
    "level": "Mellem",
    "question": "I hvilken del af Harrys historie finder man dette: Hvem underviser Harry i patronusbesværgelsen?",
    "answerDa": "Fangen fra Azkaban",
    "answerEn": "Prisoner of Azkaban",
    "correctKey": "right",
    "why": "Lupin hjælper Harry med at fremmane en patronus for at beskytte sig mod dementorer.",
    "aliases": [
      "bog 3",
      "3",
      "Fangen fra Azkaban"
    ],
    "type": "fact"
  },
  {
    "id": "q105",
    "book": 0,
    "level": "Mellem",
    "question": "I hvilken del af Harrys historie finder man dette: Hvad er Remus Lupins hemmelighed?",
    "answerDa": "Fangen fra Azkaban",
    "answerEn": "Prisoner of Azkaban",
    "correctKey": "right",
    "why": "Lupin er varulv; hans venner lærte engang at blive animaguser for at hjælpe ham.",
    "aliases": [
      "bog 3",
      "3",
      "Fangen fra Azkaban"
    ],
    "type": "fact"
  },
  {
    "id": "q106",
    "book": 0,
    "level": "Mellem",
    "question": "I hvilken del af Harrys historie finder man dette: Hvilket dyr kan Peter Pettigrew forvandle sig til?",
    "answerDa": "Fangen fra Azkaban",
    "answerEn": "Prisoner of Azkaban",
    "correctKey": "right",
    "why": "Pettigrew er animagus i form af en rotte og har levet som Scabbers.",
    "aliases": [
      "bog 3",
      "3",
      "Fangen fra Azkaban"
    ],
    "type": "fact"
  },
  {
    "id": "q107",
    "book": 0,
    "level": "Mellem",
    "question": "I hvilken del af Harrys historie finder man dette: Hvilket magisk væsen får Hagrid Harry til at møde i sin første lektion med magiske væsner?",
    "answerDa": "Fangen fra Azkaban",
    "answerEn": "Prisoner of Azkaban",
    "correctKey": "right",
    "why": "Hippogriffen Buckbeak er med i Hagrids undervisning og reagerer på respekt.",
    "aliases": [
      "bog 3",
      "3",
      "Fangen fra Azkaban"
    ],
    "type": "fact"
  },
  {
    "id": "q108",
    "book": 0,
    "level": "Svær",
    "question": "I hvilken del af Harrys historie finder man dette: Hvem skabte sammen med sine venner Røverkortet?",
    "answerDa": "Fangen fra Azkaban",
    "answerEn": "Prisoner of Azkaban",
    "correctKey": "right",
    "why": "De fire venner kaldte sig Moony, Wormtail, Padfoot og Prongs.",
    "aliases": [
      "bog 3",
      "3",
      "Fangen fra Azkaban"
    ],
    "type": "fact"
  },
  {
    "id": "q109",
    "book": 0,
    "level": "Svær",
    "question": "I hvilken del af Harrys historie finder man dette: Hvilket dyr er James Potters animagus-form?",
    "answerDa": "Fangen fra Azkaban",
    "answerEn": "Prisoner of Azkaban",
    "correctKey": "right",
    "why": "James kunne forvandle sig til en hjort, hvilket gav ham øgenavnet Prongs.",
    "aliases": [
      "bog 3",
      "3",
      "Fangen fra Azkaban"
    ],
    "type": "fact"
  },
  {
    "id": "q110",
    "book": 0,
    "level": "Svær",
    "question": "I hvilken del af Harrys historie finder man dette: Hvilken genstand bruger Harry og Hermione til at rejse tilbage i tiden?",
    "answerDa": "Fangen fra Azkaban",
    "answerEn": "Prisoner of Azkaban",
    "correctKey": "right",
    "why": "Hermione har fået en tidsvender fra McGonagall for at kunne følge flere fag.",
    "aliases": [
      "bog 3",
      "3",
      "Fangen fra Azkaban"
    ],
    "type": "fact"
  },
  {
    "id": "q111",
    "book": 0,
    "level": "Svær",
    "question": "I hvilken del af Harrys historie finder man dette: Hvem var den hemmelige hemmelighedsvogter for Potter-familiens skjulested?",
    "answerDa": "Fangen fra Azkaban",
    "answerEn": "Prisoner of Azkaban",
    "correctKey": "right",
    "why": "Sirius foreslog Pettigrew som hemmelighedsvogter, men Pettigrew forrådte Potter-familien.",
    "aliases": [
      "bog 3",
      "3",
      "Fangen fra Azkaban"
    ],
    "type": "fact"
  },
  {
    "id": "q112",
    "book": 0,
    "level": "Let",
    "question": "I hvilken del af Harrys historie finder man dette: Hvilken international konkurrence afholdes på Hogwarts?",
    "answerDa": "Flammernes Pokal",
    "answerEn": "Goblet of Fire",
    "correctKey": "right",
    "why": "Tretroldmandsturneringen samler tre skoler og har tre farlige opgaver.",
    "aliases": [
      "bog 4",
      "4",
      "Flammernes Pokal"
    ],
    "type": "fact"
  },
  {
    "id": "q113",
    "book": 0,
    "level": "Let",
    "question": "I hvilken del af Harrys historie finder man dette: Hvilke to andre skoler sender elever til turneringen sammen med Hogwarts?",
    "answerDa": "Flammernes Pokal",
    "answerEn": "Goblet of Fire",
    "correctKey": "right",
    "why": "Beauxbatons og Durmstrang deltager sammen med Hogwarts.",
    "aliases": [
      "bog 4",
      "4",
      "Flammernes Pokal"
    ],
    "type": "fact"
  },
  {
    "id": "q114",
    "book": 0,
    "level": "Mellem",
    "question": "I hvilken del af Harrys historie finder man dette: Hvem bliver udvalgt som Hogwarts’ officielle deltager i turneringen?",
    "answerDa": "Flammernes Pokal",
    "answerEn": "Goblet of Fire",
    "correctKey": "right",
    "why": "Ildpokalen vælger Cedric som Hogwarts’ deltager; Harry bliver valgt som ekstra deltager.",
    "aliases": [
      "bog 4",
      "4",
      "Flammernes Pokal"
    ],
    "type": "fact"
  },
  {
    "id": "q115",
    "book": 0,
    "level": "Mellem",
    "question": "I hvilken del af Harrys historie finder man dette: Hvilken drage møder Harry i den første opgave?",
    "answerDa": "Flammernes Pokal",
    "answerEn": "Goblet of Fire",
    "correctKey": "right",
    "why": "Harry skal hente et gyldent æg fra en ungarsk takhale.",
    "aliases": [
      "bog 4",
      "4",
      "Flammernes Pokal"
    ],
    "type": "fact"
  },
  {
    "id": "q116",
    "book": 0,
    "level": "Mellem",
    "question": "I hvilken del af Harrys historie finder man dette: Hvem er forklædt som Alastor “Skrækøje” Moody det meste af skoleåret?",
    "answerDa": "Flammernes Pokal",
    "answerEn": "Goblet of Fire",
    "correctKey": "right",
    "why": "Barty Crouch Jr. bruger Polyjuice-eliksir og manipulerer turneringen for at føre Harry til Voldemort.",
    "aliases": [
      "bog 4",
      "4",
      "Flammernes Pokal"
    ],
    "type": "fact"
  },
  {
    "id": "q117",
    "book": 0,
    "level": "Mellem",
    "question": "I hvilken del af Harrys historie finder man dette: Hvad skal deltagerne hente fra søen i den anden opgave?",
    "answerDa": "Flammernes Pokal",
    "answerEn": "Goblet of Fire",
    "correctKey": "right",
    "why": "Hver deltager skal redde den person, som søens væsener har taget som gidsel.",
    "aliases": [
      "bog 4",
      "4",
      "Flammernes Pokal"
    ],
    "type": "fact"
  },
  {
    "id": "q118",
    "book": 0,
    "level": "Svær",
    "question": "I hvilken del af Harrys historie finder man dette: Hvilken besværgelse bruger Harry til at tilkalde sin kost under drageopgaven?",
    "answerDa": "Flammernes Pokal",
    "answerEn": "Goblet of Fire",
    "correctKey": "right",
    "why": "Accio er en tilkaldelsesbesværgelse, og Harry bruger den på sin Firebolt.",
    "aliases": [
      "bog 4",
      "4",
      "Flammernes Pokal"
    ],
    "type": "fact"
  },
  {
    "id": "q119",
    "book": 0,
    "level": "Svær",
    "question": "I hvilken del af Harrys historie finder man dette: Hvilken genstand transporterer Harry og Cedric til kirkegården?",
    "answerDa": "Flammernes Pokal",
    "answerEn": "Goblet of Fire",
    "correctKey": "right",
    "why": "Tretroldmandspokalen er blevet fortryllet til en portnøgle.",
    "aliases": [
      "bog 4",
      "4",
      "Flammernes Pokal"
    ],
    "type": "fact"
  },
  {
    "id": "q120",
    "book": 0,
    "level": "Svær",
    "question": "I hvilken del af Harrys historie finder man dette: Hvem dør på kirkegården, da Harry og Cedric ankommer?",
    "answerDa": "Flammernes Pokal",
    "answerEn": "Goblet of Fire",
    "correctKey": "right",
    "why": "Peter Pettigrew dræber Cedric efter Voldemorts ordre.",
    "aliases": [
      "bog 4",
      "4",
      "Flammernes Pokal"
    ],
    "type": "fact"
  },
  {
    "id": "q121",
    "book": 0,
    "level": "Svær",
    "question": "I hvilken del af Harrys historie finder man dette: Hvad har Harrys og Voldemorts tryllestave til fælles?",
    "answerDa": "Flammernes Pokal",
    "answerEn": "Goblet of Fire",
    "correctKey": "right",
    "why": "Begge tryllestave har en fjer fra Fawkes, Dumbledores føniks.",
    "aliases": [
      "bog 4",
      "4",
      "Flammernes Pokal"
    ],
    "type": "fact"
  },
  {
    "id": "q122",
    "book": 0,
    "level": "Let",
    "question": "I hvilken del af Harrys historie finder man dette: Hvilken organisation forsøger at bekæmpe Voldemort, men som Ministeriet nægter at anerkende?",
    "answerDa": "Fønixordenen",
    "answerEn": "Order of the Phoenix",
    "correctKey": "right",
    "why": "Fønixordenen er Dumbledores hemmelige modstandsgruppe.",
    "aliases": [
      "bog 5",
      "5",
      "Fønixordenen"
    ],
    "type": "fact"
  },
  {
    "id": "q123",
    "book": 0,
    "level": "Let",
    "question": "I hvilken del af Harrys historie finder man dette: Hvem bliver ansat som Hogwarts’ nye lærer i Forsvar mod Mørkets Kræfter og indfører strenge regler?",
    "answerDa": "Fønixordenen",
    "answerEn": "Order of the Phoenix",
    "correctKey": "right",
    "why": "Umbridge bliver Ministeriets udsending og begrænser praktisk undervisning i forsvarsmagi.",
    "aliases": [
      "bog 5",
      "5",
      "Fønixordenen"
    ],
    "type": "fact"
  },
  {
    "id": "q124",
    "book": 0,
    "level": "Mellem",
    "question": "I hvilken del af Harrys historie finder man dette: Hvad kalder Harry, Ron og Hermione deres hemmelige gruppe, hvor de øver forsvarsmagi?",
    "answerDa": "Fønixordenen",
    "answerEn": "Order of the Phoenix",
    "correctKey": "right",
    "why": "Gruppen kaldes Dumbledores Armé, ofte forkortet DA.",
    "aliases": [
      "bog 5",
      "5",
      "Fønixordenen"
    ],
    "type": "fact"
  },
  {
    "id": "q125",
    "book": 0,
    "level": "Mellem",
    "question": "I hvilken del af Harrys historie finder man dette: Hvilken familie bor Harry hos, når han ikke er på Hogwarts?",
    "answerDa": "Fønixordenen",
    "answerEn": "Order of the Phoenix",
    "correctKey": "right",
    "why": "Harry bor hos sin tante Petunia, onkel Vernon og fætter Dudley.",
    "aliases": [
      "bog 5",
      "5",
      "Fønixordenen"
    ],
    "type": "fact"
  },
  {
    "id": "q126",
    "book": 0,
    "level": "Mellem",
    "question": "I hvilken del af Harrys historie finder man dette: Hvilket væsen angriber Harry og Dudley i en tunnel i Little Whinging?",
    "answerDa": "Fønixordenen",
    "answerEn": "Order of the Phoenix",
    "correctKey": "right",
    "why": "Dementorer angriber dem, og Harry bruger en patronus for at beskytte dem.",
    "aliases": [
      "bog 5",
      "5",
      "Fønixordenen"
    ],
    "type": "fact"
  },
  {
    "id": "q127",
    "book": 0,
    "level": "Mellem",
    "question": "I hvilken del af Harrys historie finder man dette: Hvilken afdeling i Ministeriet for Magi bliver central i bogens afslutning?",
    "answerDa": "Fønixordenen",
    "answerEn": "Order of the Phoenix",
    "correctKey": "right",
    "why": "Harry bliver lokket til Mysteriedepartementet af et syn, der viser sig at være manipuleret.",
    "aliases": [
      "bog 5",
      "5",
      "Fønixordenen"
    ],
    "type": "fact"
  },
  {
    "id": "q128",
    "book": 0,
    "level": "Svær",
    "question": "I hvilken del af Harrys historie finder man dette: Hvem mister Harry under kampen i Ministeriet?",
    "answerDa": "Fønixordenen",
    "answerEn": "Order of the Phoenix",
    "correctKey": "right",
    "why": "Sirius falder gennem sløret i Dødskammeret efter kampen med Bellatrix.",
    "aliases": [
      "bog 5",
      "5",
      "Fønixordenen"
    ],
    "type": "fact"
  },
  {
    "id": "q129",
    "book": 0,
    "level": "Svær",
    "question": "I hvilken del af Harrys historie finder man dette: Hvem er den eneste elev, der kan se thestralerne ved begyndelsen af skoleåret sammen med Harry?",
    "answerDa": "Fønixordenen",
    "answerEn": "Order of the Phoenix",
    "correctKey": "right",
    "why": "Luna kan se thestralerne, fordi hun har været vidne til døden.",
    "aliases": [
      "bog 5",
      "5",
      "Fønixordenen"
    ],
    "type": "fact"
  },
  {
    "id": "q130",
    "book": 0,
    "level": "Svær",
    "question": "I hvilken del af Harrys historie finder man dette: Hvilken profeti forsøger Voldemort at få fat i?",
    "answerDa": "Fønixordenen",
    "answerEn": "Order of the Phoenix",
    "correctKey": "right",
    "why": "Profetien handler om et barn, der kan besejre Voldemort, og forbindelsen mellem ham og Harry.",
    "aliases": [
      "bog 5",
      "5",
      "Fønixordenen"
    ],
    "type": "fact"
  },
  {
    "id": "q131",
    "book": 0,
    "level": "Svær",
    "question": "I hvilken del af Harrys historie finder man dette: Hvem fortæller Harry, at han ikke skal føle sig skyldig over at have stærke følelser?",
    "answerDa": "Fønixordenen",
    "answerEn": "Order of the Phoenix",
    "correctKey": "right",
    "why": "Dumbledore forklarer Harry, at smerte og kærlighed er en del af det at være menneske.",
    "aliases": [
      "bog 5",
      "5",
      "Fønixordenen"
    ],
    "type": "fact"
  },
  {
    "id": "q132",
    "book": 0,
    "level": "Let",
    "question": "I hvilken del af Harrys historie finder man dette: Hvilken bog bruger Harry i eliksirundervisningen, som er mærket med Halvblodsprinsens navn?",
    "answerDa": "Halvblodsprinsen",
    "answerEn": "Half-Blood Prince",
    "correctKey": "right",
    "why": "Harry bruger en gammel eliksirbog med noter og besværgelser skrevet af Halvblodsprinsen.",
    "aliases": [
      "bog 6",
      "6",
      "Halvblodsprinsen"
    ],
    "type": "fact"
  },
  {
    "id": "q133",
    "book": 0,
    "level": "Let",
    "question": "I hvilken del af Harrys historie finder man dette: Hvilken professor hjælper Harry og Dumbledore med at undersøge Voldemorts fortid?",
    "answerDa": "Halvblodsprinsen",
    "answerEn": "Half-Blood Prince",
    "correctKey": "right",
    "why": "Slughorn har kendt Tom Riddle som elev og gemmer på en vigtig erindring.",
    "aliases": [
      "bog 6",
      "6",
      "Halvblodsprinsen"
    ],
    "type": "fact"
  },
  {
    "id": "q134",
    "book": 0,
    "level": "Mellem",
    "question": "I hvilken del af Harrys historie finder man dette: Hvilken type magisk genstand er en horcrux?",
    "answerDa": "Halvblodsprinsen",
    "answerEn": "Half-Blood Prince",
    "correctKey": "right",
    "why": "Voldemort deler sin sjæl og skjuler dele i genstande for at forsøge at undgå døden.",
    "aliases": [
      "bog 6",
      "6",
      "Halvblodsprinsen"
    ],
    "type": "fact"
  },
  {
    "id": "q135",
    "book": 0,
    "level": "Mellem",
    "question": "I hvilken del af Harrys historie finder man dette: Hvem er den elev, der bliver alvorligt syg efter at have rørt ved en forgiftet halskæde?",
    "answerDa": "Halvblodsprinsen",
    "answerEn": "Half-Blood Prince",
    "correctKey": "right",
    "why": "Katie Bell bliver forbandet af en halskæde, der var tiltænkt Dumbledore.",
    "aliases": [
      "bog 6",
      "6",
      "Halvblodsprinsen"
    ],
    "type": "fact"
  },
  {
    "id": "q136",
    "book": 0,
    "level": "Mellem",
    "question": "I hvilken del af Harrys historie finder man dette: Hvilket emne gennemgår Dumbledore med Harry i deres private lektioner?",
    "answerDa": "Halvblodsprinsen",
    "answerEn": "Half-Blood Prince",
    "correctKey": "right",
    "why": "Dumbledore viser Harry erindringer, der forklarer Tom Riddles historie og hans søgen efter udødelighed.",
    "aliases": [
      "bog 6",
      "6",
      "Halvblodsprinsen"
    ],
    "type": "fact"
  },
  {
    "id": "q137",
    "book": 0,
    "level": "Mellem",
    "question": "I hvilken del af Harrys historie finder man dette: Hvad sker der med Ron, da han drikker den forgiftede mjød?",
    "answerDa": "Halvblodsprinsen",
    "answerEn": "Half-Blood Prince",
    "correctKey": "right",
    "why": "Ron drikker forgiftet mjød, efter at Slughorns flaske er blevet forhekset; Harry redder ham.",
    "aliases": [
      "bog 6",
      "6",
      "Halvblodsprinsen"
    ],
    "type": "fact"
  },
  {
    "id": "q138",
    "book": 0,
    "level": "Svær",
    "question": "I hvilken del af Harrys historie finder man dette: Hvilken horcrux mener Dumbledore, at de finder i en grotte?",
    "answerDa": "Halvblodsprinsen",
    "answerEn": "Half-Blood Prince",
    "correctKey": "right",
    "why": "De finder en medaljon, men den viser sig senere at være en falsk horcrux.",
    "aliases": [
      "bog 6",
      "6",
      "Halvblodsprinsen"
    ],
    "type": "fact"
  },
  {
    "id": "q139",
    "book": 0,
    "level": "Svær",
    "question": "I hvilken del af Harrys historie finder man dette: Hvilken besværgelse bruger Harry mod Draco i badeværelset uden at kende dens virkning?",
    "answerDa": "Halvblodsprinsen",
    "answerEn": "Half-Blood Prince",
    "correctKey": "right",
    "why": "Sectumsempra skærer alvorlige sår i Draco; Harry kendte kun noten “mod fjender”.",
    "aliases": [
      "bog 6",
      "6",
      "Halvblodsprinsen"
    ],
    "type": "fact"
  },
  {
    "id": "q140",
    "book": 0,
    "level": "Svær",
    "question": "I hvilken del af Harrys historie finder man dette: Hvem dræber Dumbledore på toppen af Astronomitårnet?",
    "answerDa": "Halvblodsprinsen",
    "answerEn": "Half-Blood Prince",
    "correctKey": "right",
    "why": "Snape dræber Dumbledore efter en aftale mellem dem, som først forklares senere.",
    "aliases": [
      "bog 6",
      "6",
      "Halvblodsprinsen"
    ],
    "type": "fact"
  },
  {
    "id": "q141",
    "book": 0,
    "level": "Svær",
    "question": "I hvilken del af Harrys historie finder man dette: Hvad viser sig at være forkert ved medaljonen, Harry og Dumbledore finder?",
    "answerDa": "Halvblodsprinsen",
    "answerEn": "Half-Blood Prince",
    "correctKey": "right",
    "why": "Et brev underskrevet R.A.B. forklarer, at den rigtige medaljon allerede er blevet taget.",
    "aliases": [
      "bog 6",
      "6",
      "Halvblodsprinsen"
    ],
    "type": "fact"
  },
  {
    "id": "q142",
    "book": 0,
    "level": "Let",
    "question": "I hvilken del af Harrys historie finder man dette: Hvilke tre genstande er Dødsregalierne?",
    "answerDa": "Dødsregalierne",
    "answerEn": "Deathly Hallows",
    "correctKey": "right",
    "why": "De tre legendariske genstande er Oldstaven, Opstandelsesstenen og Usynlighedskappen.",
    "aliases": [
      "bog 7",
      "7",
      "Dødsregalierne"
    ],
    "type": "fact"
  },
  {
    "id": "q143",
    "book": 0,
    "level": "Let",
    "question": "I hvilken del af Harrys historie finder man dette: Hvem er R.A.B., som efterlader en besked i den falske medaljon?",
    "answerDa": "Dødsregalierne",
    "answerEn": "Deathly Hallows",
    "correctKey": "right",
    "why": "Regulus Arcturus Black var Sirius’ bror og en tidligere dødsæder, som vendte sig mod Voldemort.",
    "aliases": [
      "bog 7",
      "7",
      "Dødsregalierne"
    ],
    "type": "fact"
  },
  {
    "id": "q144",
    "book": 0,
    "level": "Mellem",
    "question": "I hvilken del af Harrys historie finder man dette: Hvilken genstand efterlod Dumbledore til Harry, og som indeholder Opstandelsesstenen?",
    "answerDa": "Dødsregalierne",
    "answerEn": "Deathly Hallows",
    "correctKey": "right",
    "why": "Dumbledore efterlod Harry en Snitch, som åbner sig og afslører Opstandelsesstenen. Gryffindors sværd ligger i søen.",
    "aliases": [
      "bog 7",
      "7",
      "Dødsregalierne"
    ],
    "type": "fact"
  },
  {
    "id": "q145",
    "book": 0,
    "level": "Mellem",
    "question": "I hvilken del af Harrys historie finder man dette: Hvilken troldmandsbank bryder trioen ind i?",
    "answerDa": "Dødsregalierne",
    "answerEn": "Deathly Hallows",
    "correctKey": "right",
    "why": "Harry, Ron og Hermione bryder ind i Gringotts for at hente Hufflepuffs pokal fra Bellatrix’ boks.",
    "aliases": [
      "bog 7",
      "7",
      "Dødsregalierne"
    ],
    "type": "fact"
  },
  {
    "id": "q146",
    "book": 0,
    "level": "Mellem",
    "question": "I hvilken del af Harrys historie finder man dette: Hvilket hus’ genstand er en af Voldemorts horcruxer i Gringotts?",
    "answerDa": "Dødsregalierne",
    "answerEn": "Deathly Hallows",
    "correctKey": "right",
    "why": "Helga Hufflepuffs pokal bliver en horcrux og opbevares i Bellatrix’ boks.",
    "aliases": [
      "bog 7",
      "7",
      "Dødsregalierne"
    ],
    "type": "fact"
  },
  {
    "id": "q147",
    "book": 0,
    "level": "Mellem",
    "question": "I hvilken del af Harrys historie finder man dette: Hvem leder Hogwarts, mens trioen er på flugt, og Voldemort har taget magten?",
    "answerDa": "Dødsregalierne",
    "answerEn": "Deathly Hallows",
    "correctKey": "right",
    "why": "Snape er udnævnt til rektor under Voldemorts kontrol, mens Carrow-søskende underviser.",
    "aliases": [
      "bog 7",
      "7",
      "Dødsregalierne"
    ],
    "type": "fact"
  },
  {
    "id": "q148",
    "book": 0,
    "level": "Svær",
    "question": "Hvilken af disse genstande er ikke en af Voldemorts horcruxer?",
    "answerDa": "Gryffindors sværd",
    "answerEn": "Gryffindor’s Sword",
    "correctKey": "right",
    "why": "Gryffindors sværd er ikke en horcrux; det kan ødelægge horcruxer, fordi det har absorberet basiliskgift.",
    "aliases": [
      "Gryffindors sværd",
      "Gryffindor’s Sword"
    ],
    "type": "fact",
    "options": [
      {
        "da": "Gryffindors sværd",
        "en": "Gryffindor’s Sword"
      },
      {
        "da": "Tom Riddles dagbog / Tom Riddle’s Diary",
        "en": "Tom Riddle’s Diary"
      },
      {
        "da": "Marvolo Gaunts ring / Marvolo Gaunt’s Ring",
        "en": "Marvolo Gaunt’s Ring"
      },
      {
        "da": "Ravenclaws diadem / Ravenclaw’s Diadem",
        "en": "Ravenclaw’s Diadem"
      }
    ],
    "correctIndex": 0
  },
  {
    "id": "q149",
    "book": 0,
    "level": "Svær",
    "question": "I hvilken del af Harrys historie finder man dette: Hvem ødelægger Hufflepuffs pokal i Hemmelighedernes Kammer?",
    "answerDa": "Dødsregalierne",
    "answerEn": "Deathly Hallows",
    "correctKey": "right",
    "why": "Hermione ødelægger pokalen med en basilisk-tand, som trioen finder i Kammeret.",
    "aliases": [
      "bog 7",
      "7",
      "Dødsregalierne"
    ],
    "type": "fact"
  },
  {
    "id": "q150",
    "book": 0,
    "level": "Svær",
    "question": "I hvilken del af Harrys historie finder man dette: Hvilken sandhed om Snape afsløres gennem hans erindringer?",
    "answerDa": "Dødsregalierne",
    "answerEn": "Deathly Hallows",
    "correctKey": "right",
    "why": "Snapes kærlighed til Lily er en central grund til, at han hjælper med at beskytte Harry.",
    "aliases": [
      "bog 7",
      "7",
      "Dødsregalierne"
    ],
    "type": "fact"
  },
  {
    "id": "q151",
    "book": 0,
    "level": "Svær",
    "question": "I hvilken del af Harrys historie finder man dette: Hvem ødelægger Nagini under slaget om Hogwarts?",
    "answerDa": "Dødsregalierne",
    "answerEn": "Deathly Hallows",
    "correctKey": "right",
    "why": "Neville trækker Gryffindors sværd fra Sorteringshatten og dræber Nagini.",
    "aliases": [
      "bog 7",
      "7",
      "Dødsregalierne"
    ],
    "type": "fact"
  },
  {
    "id": "q152",
    "book": 0,
    "level": "Let",
    "question": "I hvilken del af Harrys historie finder man dette: Hvad hedder skolen, hvor Harry lærer at bruge magi?",
    "answerDa": "Flere bøger",
    "answerEn": "Across the books",
    "correctKey": "right",
    "why": "Hogwarts School of Witchcraft and Wizardry er den britiske troldmandsskole, Harry går på.",
    "aliases": [
      "bog 0",
      "0",
      "Flere bøger"
    ],
    "type": "fact"
  },
  {
    "id": "q153",
    "book": 0,
    "level": "Let",
    "question": "I hvilken del af Harrys historie finder man dette: Hvad hedder Harrys bedste ven, der kommer fra en stor troldmandsfamilie?",
    "answerDa": "Flere bøger",
    "answerEn": "Across the books",
    "correctKey": "right",
    "why": "Ron Weasley bliver Harrys nære ven fra deres første togtur til Hogwarts.",
    "aliases": [
      "bog 0",
      "0",
      "Flere bøger"
    ],
    "type": "fact"
  },
  {
    "id": "q154",
    "book": 0,
    "level": "Let",
    "question": "I hvilken del af Harrys historie finder man dette: Hvad hedder Harrys bedste veninde, der er kendt for sin flid og store viden?",
    "answerDa": "Flere bøger",
    "answerEn": "Across the books",
    "correctKey": "right",
    "why": "Hermione er en fremragende elev og en af Harrys nærmeste venner.",
    "aliases": [
      "bog 0",
      "0",
      "Flere bøger"
    ],
    "type": "fact"
  },
  {
    "id": "q155",
    "book": 0,
    "level": "Mellem",
    "question": "I hvilken del af Harrys historie finder man dette: Hvilket fængsel er kendt for at blive bevogtet af dementorer?",
    "answerDa": "Flere bøger",
    "answerEn": "Across the books",
    "correctKey": "right",
    "why": "Azkaban er troldmandsfængslet, hvor blandt andre Sirius Black og Bellatrix Lestrange har siddet.",
    "aliases": [
      "bog 0",
      "0",
      "Flere bøger"
    ],
    "type": "fact"
  },
  {
    "id": "q156",
    "book": 0,
    "level": "Mellem",
    "question": "I hvilken del af Harrys historie finder man dette: Hvilken butik laver Harrys tryllestav?",
    "answerDa": "Flere bøger",
    "answerEn": "Across the books",
    "correctKey": "right",
    "why": "Ollivanders i Diagonalstræde sælger tryllestave.",
    "aliases": [
      "bog 0",
      "0",
      "Flere bøger"
    ],
    "type": "fact"
  },
  {
    "id": "q157",
    "book": 0,
    "level": "Mellem",
    "question": "I hvilken del af Harrys historie finder man dette: Hvilket magisk kort viser personer og deres bevægelser på Hogwarts?",
    "answerDa": "Flere bøger",
    "answerEn": "Across the books",
    "correctKey": "right",
    "why": "Røverkortet viser Hogwarts’ gange og placeringen af personer på området.",
    "aliases": [
      "bog 0",
      "0",
      "Flere bøger"
    ],
    "type": "fact"
  },
  {
    "id": "q158",
    "book": 0,
    "level": "Mellem",
    "question": "I hvilken del af Harrys historie finder man dette: Hvad hedder den magiske bus, som kan hente troldmænd i nød?",
    "answerDa": "Flere bøger",
    "answerEn": "Across the books",
    "correctKey": "right",
    "why": "Natbussen er en lilla bus, der hjælper strandede hekse og troldmænd.",
    "aliases": [
      "bog 0",
      "0",
      "Flere bøger"
    ],
    "type": "fact"
  },
  {
    "id": "q159",
    "book": 0,
    "level": "Svær",
    "question": "I hvilken del af Harrys historie finder man dette: Hvilken besværgelse bruges typisk til at afvæbne en modstander?",
    "answerDa": "Flere bøger",
    "answerEn": "Across the books",
    "correctKey": "right",
    "why": "Expelliarmus slår typisk modstanderens tryllestav ud af hånden.",
    "aliases": [
      "bog 0",
      "0",
      "Flere bøger"
    ],
    "type": "fact"
  },
  {
    "id": "q160",
    "book": 0,
    "level": "Svær",
    "question": "I hvilken del af Harrys historie finder man dette: Hvilket materiale fra Fawkes findes i både Harrys og Voldemorts tryllestav?",
    "answerDa": "Flere bøger",
    "answerEn": "Across the books",
    "correctKey": "right",
    "why": "Tryllestavene har samme kerne: hver indeholder en fjer fra Dumbledores føniks, Fawkes.",
    "aliases": [
      "bog 0",
      "0",
      "Flere bøger"
    ],
    "type": "fact"
  },
  {
    "id": "q161",
    "book": 0,
    "level": "Svær",
    "question": "I hvilken del af Harrys historie finder man dette: Hvad er en animagus?",
    "answerDa": "Flere bøger",
    "answerEn": "Across the books",
    "correctKey": "right",
    "why": "En animagus kan forvandle sig til et dyr efter at have lært en vanskelig og reguleret magisk proces.",
    "aliases": [
      "bog 0",
      "0",
      "Flere bøger"
    ],
    "type": "fact"
  },
  {
    "id": "q162",
    "book": 0,
    "level": "Svær",
    "question": "I hvilken del af Harrys historie finder man dette: Hvilket stof bruges til at lave Polyjuice-eliksir, så man kan tage en anden persons udseende?",
    "answerDa": "Flere bøger",
    "answerEn": "Across the books",
    "correctKey": "right",
    "why": "Polyjuice-eliksir kræver en del af den person, hvis udseende man vil antage, ofte et hårstrå.",
    "aliases": [
      "bog 0",
      "0",
      "Flere bøger"
    ],
    "type": "fact"
  },
  {
    "id": "q163",
    "book": 1,
    "level": "Svær",
    "question": "Hvilken formulering skal siges for at aktivere Røverkortet? “I solemnly swear that I am up to no good.”",
    "answerDa": "I solemnly swear that I am up to no good.",
    "answerEn": "I solemnly swear that I am up to no good.",
    "correctKey": "right",
    "why": "Det er den magiske formulering, der aktiverer Røverkortet.",
    "aliases": [
      "I solemnly swear that I am up to no good."
    ],
    "type": "quote"
  },
  {
    "id": "q164",
    "book": 1,
    "level": "Svær",
    "question": "Hvem sagde dette i bøgerne? “It does not do to dwell on dreams and forget to live.” Hvem siger, at man ikke skal glemme at leve, fordi man dvæler ved drømme?",
    "answerDa": "Albus Dumbledore",
    "answerEn": "Albus Dumbledore",
    "correctKey": "right",
    "why": "Dumbledore siger det til Harry i forbindelse med Spejlet Nerhegeb.",
    "aliases": [
      "Albus Dumbledore"
    ],
    "type": "quote"
  },
  {
    "id": "q165",
    "book": 1,
    "level": "Svær",
    "question": "Hvem sagde dette i bøgerne? “You’re a wizard, Harry.” Hvem fortæller Harry, at han er en troldmand?",
    "answerDa": "Rubeus Hagrid",
    "answerEn": "Rubeus Hagrid",
    "correctKey": "right",
    "why": "Hagrid opsøger Harry og afslører hans plads i den magiske verden.",
    "aliases": [
      "Rubeus Hagrid"
    ],
    "type": "quote"
  },
  {
    "id": "q166",
    "book": 2,
    "level": "Svær",
    "question": "Hvem skrev beskederne på væggene i Hemmelighedernes Kammer, mens hun var påvirket af Tom Riddles dagbog?",
    "answerDa": "Ginny Weasley",
    "answerEn": "Ginny Weasley",
    "correctKey": "right",
    "why": "Ginny skrev beskederne, mens hun var under dagbogens indflydelse.",
    "aliases": [
      "Ginny Weasley"
    ],
    "type": "quote"
  },
  {
    "id": "q167",
    "book": 3,
    "level": "Svær",
    "question": "Hvem sagde dette i bøgerne? “I want to commit the murder I was imprisoned for.” Hvem siger dette om sit ønske om at få hævn?",
    "answerDa": "Sirius Black",
    "answerEn": "Sirius Black",
    "correctKey": "right",
    "why": "Sirius forklarer Harry, hvorfor han er flygtet fra Azkaban.",
    "aliases": [
      "Sirius Black"
    ],
    "type": "quote"
  },
  {
    "id": "q168",
    "book": 4,
    "level": "Svær",
    "question": "Hvem sagde dette i bøgerne? “I am not worried, Harry. I am with you.” Hvem udtrykker sin støtte til Harry under Triwizard-turneringen?",
    "answerDa": "Cedric Diggory",
    "answerEn": "Cedric Diggory",
    "correctKey": "right",
    "why": "Cedric viser Harry loyalitet under turneringens sidste opgave.",
    "aliases": [
      "Cedric Diggory"
    ],
    "type": "quote"
  },
  {
    "id": "q169",
    "book": 5,
    "level": "Svær",
    "question": "Hvem sagde dette i bøgerne? “The world isn’t split into good people and Death Eaters.” Hvem siger, at verden ikke er opdelt så enkelt?",
    "answerDa": "Sirius Black",
    "answerEn": "Sirius Black",
    "correctKey": "right",
    "why": "Sirius forsøger at forklare Harry, at mennesker er mere komplicerede end rene kategorier.",
    "aliases": [
      "Sirius Black"
    ],
    "type": "quote"
  },
  {
    "id": "q170",
    "book": 6,
    "level": "Svær",
    "question": "Hvem sagde dette i bøgerne? “Once again, you show all the sensitivity of a blunt axe.” Hvem bruger denne spydige bemærkning?",
    "answerDa": "Hermione Granger",
    "answerEn": "Hermione Granger",
    "correctKey": "right",
    "why": "Hermione er kendt for sine præcise og skarpe irettesættelser af Ron og Harry.",
    "aliases": [
      "Hermione Granger"
    ],
    "type": "quote"
  },
  {
    "id": "q171",
    "book": 7,
    "level": "Svær",
    "question": "Hvem efterlod beskeden “I open at the close” i Snitchen?",
    "answerDa": "Albus Dumbledore",
    "answerEn": "Albus Dumbledore",
    "correctKey": "right",
    "why": "Dumbledore efterlod beskeden i den første Snitch, Harry fangede.",
    "aliases": [
      "Albus Dumbledore"
    ],
    "type": "quote"
  },
  {
    "id": "q172",
    "book": 7,
    "level": "Svær",
    "question": "Hvem sagde dette i bøgerne? “Not my daughter, you bitch!” Hvem råber dette under slaget på Hogwarts?",
    "answerDa": "Molly Weasley",
    "answerEn": "Molly Weasley",
    "correctKey": "right",
    "why": "Molly går i kamp mod Bellatrix Lestrange for at beskytte Ginny.",
    "aliases": [
      "Molly Weasley"
    ],
    "type": "quote"
  },
  {
    "id": "q173",
    "book": 1,
    "level": "Svær",
    "question": "Husk scenen fra bøgerne: Hvad hedder den kæmpe, der fortæller Harry, at han er en troldmand? Hvad er svaret?",
    "answerDa": "Rubeus Hagrid",
    "answerEn": "Rubeus Hagrid",
    "correctKey": "right",
    "why": "Hagrid opsøger Harry på hans ellevte fødselsdag og fortæller ham om den magiske verden.",
    "aliases": [
      "Rubeus Hagrid",
      "Rubeus Hagrid"
    ],
    "type": "fact"
  },
  {
    "id": "q174",
    "book": 1,
    "level": "Let",
    "question": "Husk scenen fra bøgerne: Hvilket hus bliver Harry sorteret ind i? Hvad er svaret?",
    "answerDa": "Gryffindor",
    "answerEn": "Gryffindor",
    "correctKey": "right",
    "why": "Sorteringshatten placerer Harry i Gryffindor, selv om den overvejer Slytherin.",
    "aliases": [
      "Gryffindor",
      "Gryffindor"
    ],
    "type": "fact"
  },
  {
    "id": "q175",
    "book": 1,
    "level": "Let",
    "question": "Husk scenen fra bøgerne: Hvad hedder den magiske sport, som Harry spiller på et kosteskaft? Hvad er svaret?",
    "answerDa": "Quidditch",
    "answerEn": "Quidditch",
    "correctKey": "right",
    "why": "Quidditch spilles på flyvende koste med flere bolde og mål.",
    "aliases": [
      "Quidditch",
      "Quidditch"
    ],
    "type": "fact"
  },
  {
    "id": "q176",
    "book": 1,
    "level": "Mellem",
    "question": "Husk scenen fra bøgerne: Hvilken position spiller Harry på Gryffindors Quidditch-hold? Hvad er svaret?",
    "answerDa": "Søger",
    "answerEn": "Seeker",
    "correctKey": "right",
    "why": "En søger skal fange Det Gyldne Lyn; det er Harrys position.",
    "aliases": [
      "Søger",
      "Seeker"
    ],
    "type": "fact"
  },
  {
    "id": "q177",
    "book": 1,
    "level": "Mellem",
    "question": "Husk scenen fra bøgerne: Hvad beskytter Flamel og Dumbledore ved hjælp af flere magiske forhindringer? Hvad er svaret?",
    "answerDa": "De Vises Sten",
    "answerEn": "The Philosopher’s Stone",
    "correctKey": "right",
    "why": "Nicolas Flamels sten kan blandt andet fremstille livseliksir og er målet for Voldemorts plan.",
    "aliases": [
      "De Vises Sten",
      "The Philosopher’s Stone"
    ],
    "type": "fact"
  },
  {
    "id": "q178",
    "book": 1,
    "level": "Svær",
    "question": "Husk scenen fra bøgerne: Hvilket magisk væsen møder Harry, Ron og Hermione på et pigetoilet? Hvad er svaret?",
    "answerDa": "En bjergtrold",
    "answerEn": "A mountain troll",
    "correctKey": "right",
    "why": "Quirrell slipper en bjergtrold løs på Hogwarts under Halloween.",
    "aliases": [
      "Et bjergtrold",
      "A mountain troll"
    ],
    "type": "fact"
  },
  {
    "id": "q179",
    "book": 1,
    "level": "Svær",
    "question": "Husk scenen fra bøgerne: Hvilken professor underviser i eliksirer i den første bog? Hvad er svaret?",
    "answerDa": "Severus Snape",
    "answerEn": "Severus Snape",
    "correctKey": "right",
    "why": "Snape er eliksirprofessor og leder af Slytherin-huset.",
    "aliases": [
      "Severus Snape",
      "Severus Snape"
    ],
    "type": "fact"
  },
  {
    "id": "q180",
    "book": 1,
    "level": "Svær",
    "question": "Husk scenen fra bøgerne: Hvem viser sig at være den egentlige modstander bag forsøget på at stjæle stenen? Hvad er svaret?",
    "answerDa": "Quirinus Quirrell",
    "answerEn": "Quirinus Quirrell",
    "correctKey": "right",
    "why": "Quirrell hjælper Voldemort og forsøger at få fat i stenen.",
    "aliases": [
      "Quirinus Quirrell",
      "Quirinus Quirrell"
    ],
    "type": "fact"
  },
  {
    "id": "q181",
    "book": 1,
    "level": "Svær",
    "question": "Husk scenen fra bøgerne: Hvilken udfordring kræver, at Harry spiller et menneskestort skakspil? Hvad er svaret?",
    "answerDa": "Troldmandsskak",
    "answerEn": "Wizard chess",
    "correctKey": "right",
    "why": "Ron leder skakspillet og ofrer sig selv, så Harry kan komme videre.",
    "aliases": [
      "Troldmandsskak",
      "Wizard chess"
    ],
    "type": "fact"
  },
  {
    "id": "q182",
    "book": 1,
    "level": "Svær",
    "question": "Husk scenen fra bøgerne: Hvem tilhørte usynlighedskappen, før Harry fik den i julegave? Hvad er svaret?",
    "answerDa": "James Potter, Harrys far",
    "answerEn": "James Potter, Harry’s father",
    "correctKey": "right",
    "why": "Kappen blev givet videre fra James Potter; Dumbledore havde den til låns.",
    "aliases": [
      "James Potter, Harrys far",
      "It belonged to his father, James Potter"
    ],
    "type": "fact"
  },
  {
    "id": "q183",
    "book": 2,
    "level": "Svær",
    "question": "Husk scenen fra bøgerne: Hvilken genstand skriver Harrys navn og oplevelser ind i, uden at vide hvem der svarer? Hvad er svaret?",
    "answerDa": "En dagbog",
    "answerEn": "A diary",
    "correctKey": "right",
    "why": "Tom Riddles dagbog svarer Harry og viser sig at være en horcrux.",
    "aliases": [
      "En dagbog",
      "A diary"
    ],
    "type": "fact"
  },
  {
    "id": "q184",
    "book": 2,
    "level": "Let",
    "question": "Husk scenen fra bøgerne: Hvilket væsen terroriserer eleverne ved at forstene dem? Hvad er svaret?",
    "answerDa": "En basilisk",
    "answerEn": "A basilisk",
    "correctKey": "right",
    "why": "Basilisken bevæger sig gennem rørene og forstener dem, der ser dens blik indirekte.",
    "aliases": [
      "En basilisk",
      "A basilisk"
    ],
    "type": "fact"
  },
  {
    "id": "q185",
    "book": 2,
    "level": "Let",
    "question": "Husk scenen fra bøgerne: Hvem er husalfen, der forsøger at holde Harry væk fra Hogwarts? Hvad er svaret?",
    "answerDa": "Dobby",
    "answerEn": "Dobby",
    "correctKey": "right",
    "why": "Dobby forsøger at advare Harry om faren i Hemmelighedernes Kammer.",
    "aliases": [
      "Dobby",
      "Dobby"
    ],
    "type": "fact"
  },
  {
    "id": "q186",
    "book": 2,
    "level": "Mellem",
    "question": "Husk scenen fra bøgerne: Hvordan kommer Harry og Ron til Hogwarts, efter at Dobby forhindrer dem i at komme gennem barrieren på perron 9¾? Hvad er svaret?",
    "answerDa": "I Arthurs fortryllede Ford Anglia",
    "answerEn": "In Arthur’s enchanted Ford Anglia",
    "correctKey": "right",
    "why": "De flyver i den fortryllede bil, som ender med at kaste dem af ved Slagpoplen.",
    "aliases": [
      "I Arthurs fortryllede Ford Anglia",
      "They fly in Arthur’s enchanted Ford Anglia"
    ],
    "type": "fact"
  },
  {
    "id": "q187",
    "book": 2,
    "level": "Mellem",
    "question": "Husk scenen fra bøgerne: Hvilken lærer er berømt for sine bøger om sine egne bedrifter? Hvad er svaret?",
    "answerDa": "Gilderoy Lockhart",
    "answerEn": "Gilderoy Lockhart",
    "correctKey": "right",
    "why": "Lockhart er den nye lærer i Forsvar mod Mørkets Kræfter og en selvglad forfatter.",
    "aliases": [
      "Gilderoy Lockhart",
      "Gilderoy Lockhart"
    ],
    "type": "fact"
  },
  {
    "id": "q188",
    "book": 2,
    "level": "Svær",
    "question": "Husk scenen fra bøgerne: Hvem viser sig at være arvingen efter Slytherin? Hvad er svaret?",
    "answerDa": "Tom Riddle / Lord Voldemort",
    "answerEn": "Tom Riddle / Lord Voldemort",
    "correctKey": "right",
    "why": "Tom Riddle, den unge Voldemort, åbner Hemmelighedernes Kammer gennem dagbogen.",
    "aliases": [
      "Tom Riddle",
      "Tom Riddle / Lord Voldemort"
    ],
    "type": "fact"
  },
  {
    "id": "q189",
    "book": 2,
    "level": "Svær",
    "question": "Husk scenen fra bøgerne: Hvilken fugl kommer Harry til undsætning i Kammeret? Hvad er svaret?",
    "answerDa": "Fawkes, Dumbledores føniks",
    "answerEn": "Fawkes, Dumbledore’s phoenix",
    "correctKey": "right",
    "why": "Fawkes bringer Sorteringshatten og heler Harrys sår med sine tårer.",
    "aliases": [
      "Fawkes, Dumbledores føniks",
      "Fawkes, Dumbledore’s phoenix"
    ],
    "type": "fact"
  },
  {
    "id": "q190",
    "book": 2,
    "level": "Svær",
    "question": "Husk scenen fra bøgerne: Hvilken plante bruges til at lave en modgift, der kan genoplive elever, som er blevet forstenet? Hvad er svaret?",
    "answerDa": "Mandragora",
    "answerEn": "Mandrake",
    "correctKey": "right",
    "why": "Mandragoraens skrig kan være dødelige, men dens modnede rod bruges til at genoplive de forstenede.",
    "aliases": [
      "Mandragora",
      "Mandrake"
    ],
    "type": "fact"
  },
  {
    "id": "q191",
    "book": 2,
    "level": "Svær",
    "question": "Husk scenen fra bøgerne: Hvem redder Ginny fra Tom Riddle i Hemmelighedernes Kammer? Hvad er svaret?",
    "answerDa": "Harry Potter",
    "answerEn": "Harry Potter",
    "correctKey": "right",
    "why": "Harry ødelægger dagbogen med en basilisk-tand og redder Ginny.",
    "aliases": [
      "Harry Potter",
      "Harry Potter"
    ],
    "type": "fact"
  },
  {
    "id": "q192",
    "book": 2,
    "level": "Svær",
    "question": "Husk scenen fra bøgerne: Hvilken genstand ødelægger Tom Riddles dagbog? Hvad er svaret?",
    "answerDa": "En basilisk-tand",
    "answerEn": "A basilisk fang",
    "correctKey": "right",
    "why": "Harry stikker dagbogen med en basilisk-tand, som ødelægger horcruxen.",
    "aliases": [
      "En basilisk-tand",
      "A basilisk fang"
    ],
    "type": "fact"
  },
  {
    "id": "q193",
    "book": 3,
    "level": "Svær",
    "question": "Husk scenen fra bøgerne: Hvem flygter fra Azkaban og bliver jagtet gennem det meste af bogen? Hvad er svaret?",
    "answerDa": "Sirius Black",
    "answerEn": "Sirius Black",
    "correctKey": "right",
    "why": "Sirius Black er flygtet fra Azkaban, og alle tror først, at han vil finde Harry.",
    "aliases": [
      "Sirius Black",
      "Sirius Black"
    ],
    "type": "fact"
  },
  {
    "id": "q194",
    "book": 3,
    "level": "Let",
    "question": "Husk scenen fra bøgerne: Hvilke væsner patruljerer omkring Hogwarts og kan suge håb og glæde ud af mennesker? Hvad er svaret?",
    "answerDa": "Dementorer",
    "answerEn": "Dementors",
    "correctKey": "right",
    "why": "Dementorerne arbejder for Ministeriet og påvirker Harry særligt voldsomt.",
    "aliases": [
      "Dementorer",
      "Dementors"
    ],
    "type": "fact"
  },
  {
    "id": "q195",
    "book": 3,
    "level": "Mellem",
    "question": "Husk scenen fra bøgerne: Hvem underviser Harry i patronusbesværgelsen? Hvad er svaret?",
    "answerDa": "Remus Lupin",
    "answerEn": "Remus Lupin",
    "correctKey": "right",
    "why": "Lupin hjælper Harry med at fremmane en patronus for at beskytte sig mod dementorer.",
    "aliases": [
      "Remus Lupin",
      "Remus Lupin"
    ],
    "type": "fact"
  },
  {
    "id": "q196",
    "book": 3,
    "level": "Mellem",
    "question": "Husk scenen fra bøgerne: Hvad er Remus Lupins hemmelighed? Hvad er svaret?",
    "answerDa": "Han er varulv",
    "answerEn": "He is a werewolf",
    "correctKey": "right",
    "why": "Lupin er varulv; hans venner lærte engang at blive animaguser for at hjælpe ham.",
    "aliases": [
      "Han er varulv",
      "He is a werewolf"
    ],
    "type": "fact"
  },
  {
    "id": "q197",
    "book": 3,
    "level": "Mellem",
    "question": "Husk scenen fra bøgerne: Hvilket dyr kan Peter Pettigrew forvandle sig til? Hvad er svaret?",
    "answerDa": "En rotte",
    "answerEn": "A rat",
    "correctKey": "right",
    "why": "Pettigrew er animagus i form af en rotte og har levet som Scabbers.",
    "aliases": [
      "En rotte",
      "A rat"
    ],
    "type": "fact"
  },
  {
    "id": "q198",
    "book": 3,
    "level": "Svær",
    "question": "Husk scenen fra bøgerne: Hvilket magisk væsen får Hagrid Harry til at møde i sin første lektion med magiske væsner? Hvad er svaret?",
    "answerDa": "En hippogriff",
    "answerEn": "A hippogriff",
    "correctKey": "right",
    "why": "Hippogriffen Buckbeak er med i Hagrids undervisning og reagerer på respekt.",
    "aliases": [
      "En hippogriff",
      "A hippogriff"
    ],
    "type": "fact"
  },
  {
    "id": "q199",
    "book": 3,
    "level": "Svær",
    "question": "Husk scenen fra bøgerne: Hvem skabte sammen med sine venner Røverkortet? Hvad er svaret?",
    "answerDa": "James Potter, Sirius Black, Remus Lupin og Peter Pettigrew",
    "answerEn": "James Potter, Sirius Black, Remus Lupin and Peter Pettigrew",
    "correctKey": "right",
    "why": "De fire venner kaldte sig Moony, Wormtail, Padfoot og Prongs.",
    "aliases": [
      "James Potter, Sirius Black, Remus Lupin og Peter Pettigrew",
      "James Potter, Sirius Black, Remus Lupin and Peter Pettigrew"
    ],
    "type": "fact"
  },
  {
    "id": "q200",
    "book": 3,
    "level": "Svær",
    "question": "Husk scenen fra bøgerne: Hvilket dyr er James Potters animagus-form? Hvad er svaret?",
    "answerDa": "En hjort",
    "answerEn": "A stag",
    "correctKey": "right",
    "why": "James kunne forvandle sig til en hjort, hvilket gav ham øgenavnet Prongs.",
    "aliases": [
      "En hjort",
      "A stag"
    ],
    "type": "fact"
  },
  {
    "id": "q201",
    "book": 3,
    "level": "Svær",
    "question": "Husk scenen fra bøgerne: Hvilken genstand bruger Harry og Hermione til at rejse tilbage i tiden? Hvad er svaret?",
    "answerDa": "En tidsvender",
    "answerEn": "A Time-Turner",
    "correctKey": "right",
    "why": "Hermione har fået en tidsvender fra McGonagall for at kunne følge flere fag.",
    "aliases": [
      "En tidsvender",
      "A Time-Turner"
    ],
    "type": "fact"
  },
  {
    "id": "q202",
    "book": 3,
    "level": "Svær",
    "question": "Husk scenen fra bøgerne: Hvem var den hemmelige hemmelighedsvogter for Potter-familiens skjulested? Hvad er svaret?",
    "answerDa": "Peter Pettigrew",
    "answerEn": "Peter Pettigrew",
    "correctKey": "right",
    "why": "Sirius foreslog Pettigrew som hemmelighedsvogter, men Pettigrew forrådte Potter-familien.",
    "aliases": [
      "Peter Pettigrew",
      "Peter Pettigrew"
    ],
    "type": "fact"
  },
  {
    "id": "q203",
    "book": 4,
    "level": "Svær",
    "question": "Husk scenen fra bøgerne: Hvilken international konkurrence afholdes på Hogwarts? Hvad er svaret?",
    "answerDa": "Tretroldmandsturneringen",
    "answerEn": "The Triwizard Tournament",
    "correctKey": "right",
    "why": "Tretroldmandsturneringen samler tre skoler og har tre farlige opgaver.",
    "aliases": [
      "Tretroldmandsturneringen",
      "Triwizard Tournament"
    ],
    "type": "fact"
  },
  {
    "id": "q204",
    "book": 4,
    "level": "Let",
    "question": "Husk scenen fra bøgerne: Hvilke to andre skoler sender elever til turneringen sammen med Hogwarts? Hvad er svaret?",
    "answerDa": "Beauxbatons og Durmstrang",
    "answerEn": "Beauxbatons and Durmstrang",
    "correctKey": "right",
    "why": "Beauxbatons og Durmstrang deltager sammen med Hogwarts.",
    "aliases": [
      "Beauxbatons og Durmstrang",
      "Beauxbatons and Durmstrang"
    ],
    "type": "fact"
  },
  {
    "id": "q205",
    "book": 4,
    "level": "Mellem",
    "question": "Husk scenen fra bøgerne: Hvem bliver udvalgt som Hogwarts’ officielle deltager i turneringen? Hvad er svaret?",
    "answerDa": "Cedric Diggory",
    "answerEn": "Cedric Diggory",
    "correctKey": "right",
    "why": "Ildpokalen vælger Cedric som Hogwarts’ deltager; Harry bliver valgt som ekstra deltager.",
    "aliases": [
      "Cedric Diggory",
      "Cedric Diggory"
    ],
    "type": "fact"
  },
  {
    "id": "q206",
    "book": 4,
    "level": "Mellem",
    "question": "Husk scenen fra bøgerne: Hvilken drage møder Harry i den første opgave? Hvad er svaret?",
    "answerDa": "En ungarsk takhale",
    "answerEn": "A Hungarian Horntail",
    "correctKey": "right",
    "why": "Harry skal hente et gyldent æg fra en ungarsk takhale.",
    "aliases": [
      "En ungarsk takhale",
      "A Hungarian Horntail"
    ],
    "type": "fact"
  },
  {
    "id": "q207",
    "book": 4,
    "level": "Mellem",
    "question": "Husk scenen fra bøgerne: Hvem er forklædt som Alastor “Skrækøje” Moody det meste af skoleåret? Hvad er svaret?",
    "answerDa": "Barty Crouch Jr.",
    "answerEn": "Barty Crouch Jr.",
    "correctKey": "right",
    "why": "Barty Crouch Jr. bruger Polyjuice-eliksir og manipulerer turneringen for at føre Harry til Voldemort.",
    "aliases": [
      "Barty Crouch Jr.",
      "Barty Crouch Jr."
    ],
    "type": "fact"
  },
  {
    "id": "q208",
    "book": 4,
    "level": "Svær",
    "question": "Husk scenen fra bøgerne: Hvad skal deltagerne hente fra søen i den anden opgave? Hvad er svaret?",
    "answerDa": "En person, der betyder meget for dem",
    "answerEn": "A person who matters to them",
    "correctKey": "right",
    "why": "Hver deltager skal redde den person, som søens væsener har taget som gidsel.",
    "aliases": [
      "En person, der betyder meget for dem",
      "A person who matters to them"
    ],
    "type": "fact"
  },
  {
    "id": "q209",
    "book": 4,
    "level": "Svær",
    "question": "Husk scenen fra bøgerne: Hvilken besværgelse bruger Harry til at tilkalde sin kost under drageopgaven? Hvad er svaret?",
    "answerDa": "Accio",
    "answerEn": "Accio",
    "correctKey": "right",
    "why": "Accio er en tilkaldelsesbesværgelse, og Harry bruger den på sin Firebolt.",
    "aliases": [
      "Accio",
      "Accio"
    ],
    "type": "fact"
  },
  {
    "id": "q210",
    "book": 4,
    "level": "Svær",
    "question": "Husk scenen fra bøgerne: Hvilken genstand transporterer Harry og Cedric til kirkegården? Hvad er svaret?",
    "answerDa": "En portnøgle",
    "answerEn": "A Portkey",
    "correctKey": "right",
    "why": "Tretroldmandspokalen er blevet fortryllet til en portnøgle.",
    "aliases": [
      "En portnøgle",
      "A Portkey"
    ],
    "type": "fact"
  },
  {
    "id": "q211",
    "book": 4,
    "level": "Svær",
    "question": "Husk scenen fra bøgerne: Hvem dør på kirkegården, da Harry og Cedric ankommer? Hvad er svaret?",
    "answerDa": "Cedric Diggory",
    "answerEn": "Cedric Diggory",
    "correctKey": "right",
    "why": "Peter Pettigrew dræber Cedric efter Voldemorts ordre.",
    "aliases": [
      "Cedric Diggory",
      "Cedric Diggory"
    ],
    "type": "fact"
  },
  {
    "id": "q212",
    "book": 4,
    "level": "Svær",
    "question": "Husk scenen fra bøgerne: Hvad har Harrys og Voldemorts tryllestave til fælles? Hvad er svaret?",
    "answerDa": "De har fjer fra den samme føniks",
    "answerEn": "They contain feathers from the same phoenix",
    "correctKey": "right",
    "why": "Begge tryllestave har en fjer fra Fawkes, Dumbledores føniks.",
    "aliases": [
      "De har fjer fra den samme føniks",
      "They contain feathers from the same phoenix"
    ],
    "type": "fact"
  },
  {
    "id": "q213",
    "book": 5,
    "level": "Svær",
    "question": "Husk scenen fra bøgerne: Hvilken organisation forsøger at bekæmpe Voldemort, men som Ministeriet nægter at anerkende? Hvad er svaret?",
    "answerDa": "Fønixordenen",
    "answerEn": "The Order of the Phoenix",
    "correctKey": "right",
    "why": "Fønixordenen er Dumbledores hemmelige modstandsgruppe.",
    "aliases": [
      "Fønixordenen",
      "Order of the Phoenix"
    ],
    "type": "fact"
  },
  {
    "id": "q214",
    "book": 5,
    "level": "Let",
    "question": "Husk scenen fra bøgerne: Hvem bliver ansat som Hogwarts’ nye lærer i Forsvar mod Mørkets Kræfter og indfører strenge regler? Hvad er svaret?",
    "answerDa": "Dolores Umbridge",
    "answerEn": "Dolores Umbridge",
    "correctKey": "right",
    "why": "Umbridge bliver Ministeriets udsending og begrænser praktisk undervisning i forsvarsmagi.",
    "aliases": [
      "Dolores Umbridge",
      "Dolores Umbridge"
    ],
    "type": "fact"
  },
  {
    "id": "q215",
    "book": 5,
    "level": "Mellem",
    "question": "Husk scenen fra bøgerne: Hvad kalder Harry, Ron og Hermione deres hemmelige gruppe, hvor de øver forsvarsmagi? Hvad er svaret?",
    "answerDa": "Dumbledores Armé",
    "answerEn": "Dumbledore’s Army",
    "correctKey": "right",
    "why": "Gruppen kaldes Dumbledores Armé, ofte forkortet DA.",
    "aliases": [
      "Dumbledores Armé",
      "Dumbledore’s Army"
    ],
    "type": "fact"
  },
  {
    "id": "q216",
    "book": 5,
    "level": "Mellem",
    "question": "Husk scenen fra bøgerne: Hvilken familie bor Harry hos, når han ikke er på Hogwarts? Hvad er svaret?",
    "answerDa": "Dursley-familien",
    "answerEn": "The Dursley family",
    "correctKey": "right",
    "why": "Harry bor hos sin tante Petunia, onkel Vernon og fætter Dudley.",
    "aliases": [
      "Dursley-familien",
      "The Dursleys"
    ],
    "type": "fact"
  },
  {
    "id": "q217",
    "book": 5,
    "level": "Mellem",
    "question": "Husk scenen fra bøgerne: Hvilket væsen angriber Harry og Dudley i en tunnel i Little Whinging? Hvad er svaret?",
    "answerDa": "Dementorer",
    "answerEn": "Dementors",
    "correctKey": "right",
    "why": "Dementorer angriber dem, og Harry bruger en patronus for at beskytte dem.",
    "aliases": [
      "Dementorer",
      "Dementors"
    ],
    "type": "fact"
  },
  {
    "id": "q218",
    "book": 5,
    "level": "Svær",
    "question": "Husk scenen fra bøgerne: Hvilken afdeling i Ministeriet for Magi bliver central i bogens afslutning? Hvad er svaret?",
    "answerDa": "Mysteriedepartementet",
    "answerEn": "The Department of Mysteries",
    "correctKey": "right",
    "why": "Harry bliver lokket til Mysteriedepartementet af et syn, der viser sig at være manipuleret.",
    "aliases": [
      "Mysteriedepartementet",
      "Department of Mysteries"
    ],
    "type": "fact"
  },
  {
    "id": "q219",
    "book": 5,
    "level": "Svær",
    "question": "Husk scenen fra bøgerne: Hvem mister Harry under kampen i Ministeriet? Hvad er svaret?",
    "answerDa": "Sirius Black",
    "answerEn": "Sirius Black",
    "correctKey": "right",
    "why": "Sirius falder gennem sløret i Dødskammeret efter kampen med Bellatrix.",
    "aliases": [
      "Sirius Black",
      "Sirius Black"
    ],
    "type": "fact"
  },
  {
    "id": "q220",
    "book": 5,
    "level": "Svær",
    "question": "Husk scenen fra bøgerne: Hvem er den eneste elev, der kan se thestralerne ved begyndelsen af skoleåret sammen med Harry? Hvad er svaret?",
    "answerDa": "Luna Lovegood",
    "answerEn": "Luna Lovegood",
    "correctKey": "right",
    "why": "Luna kan se thestralerne, fordi hun har været vidne til døden.",
    "aliases": [
      "Luna Lovegood",
      "Luna Lovegood"
    ],
    "type": "fact"
  },
  {
    "id": "q221",
    "book": 5,
    "level": "Svær",
    "question": "Husk scenen fra bøgerne: Hvilken profeti forsøger Voldemort at få fat i? Hvad er svaret?",
    "answerDa": "Profetien om Harry og Voldemort",
    "answerEn": "The prophecy about Harry and Voldemort",
    "correctKey": "right",
    "why": "Profetien handler om et barn, der kan besejre Voldemort, og forbindelsen mellem ham og Harry.",
    "aliases": [
      "Profetien om Harry og Voldemort",
      "The prophecy about Harry and Voldemort"
    ],
    "type": "fact"
  },
  {
    "id": "q222",
    "book": 5,
    "level": "Svær",
    "question": "Husk scenen fra bøgerne: Hvem fortæller Harry, at han ikke skal føle sig skyldig over at have stærke følelser? Hvad er svaret?",
    "answerDa": "Albus Dumbledore",
    "answerEn": "Albus Dumbledore",
    "correctKey": "right",
    "why": "Dumbledore forklarer Harry, at smerte og kærlighed er en del af det at være menneske.",
    "aliases": [
      "Albus Dumbledore",
      "Albus Dumbledore"
    ],
    "type": "fact"
  },
  {
    "id": "q223",
    "book": 6,
    "level": "Svær",
    "question": "Husk scenen fra bøgerne: Hvilken bog bruger Harry i eliksirundervisningen, som er mærket med Halvblodsprinsens navn? Hvad er svaret?",
    "answerDa": "Halvblodsprinsens eliksirbog",
    "answerEn": "The Half-Blood Prince’s Potions textbook",
    "correctKey": "right",
    "why": "Harry bruger en gammel eliksirbog med noter og besværgelser skrevet af Halvblodsprinsen.",
    "aliases": [
      "Halvblodsprinsens bog",
      "The Half-Blood Prince’s book"
    ],
    "type": "fact"
  },
  {
    "id": "q224",
    "book": 6,
    "level": "Let",
    "question": "Husk scenen fra bøgerne: Hvilken professor hjælper Harry og Dumbledore med at undersøge Voldemorts fortid? Hvad er svaret?",
    "answerDa": "Horace Slughorn",
    "answerEn": "Horace Slughorn",
    "correctKey": "right",
    "why": "Slughorn har kendt Tom Riddle som elev og gemmer på en vigtig erindring.",
    "aliases": [
      "Horace Slughorn",
      "Horace Slughorn"
    ],
    "type": "fact"
  },
  {
    "id": "q225",
    "book": 6,
    "level": "Mellem",
    "question": "Husk scenen fra bøgerne: Hvilken type magisk genstand er en horcrux? Hvad er svaret?",
    "answerDa": "En genstand, der indeholder en del af en sjæl",
    "answerEn": "An object that contains a piece of a soul",
    "correctKey": "right",
    "why": "Voldemort deler sin sjæl og skjuler dele i genstande for at forsøge at undgå døden.",
    "aliases": [
      "En genstand, der indeholder en del af en sjæl",
      "An object that contains a piece of a soul"
    ],
    "type": "fact"
  },
  {
    "id": "q226",
    "book": 6,
    "level": "Mellem",
    "question": "Husk scenen fra bøgerne: Hvem er den elev, der bliver alvorligt syg efter at have rørt ved en forgiftet halskæde? Hvad er svaret?",
    "answerDa": "Katie Bell",
    "answerEn": "Katie Bell",
    "correctKey": "right",
    "why": "Katie Bell bliver forbandet af en halskæde, der var tiltænkt Dumbledore.",
    "aliases": [
      "Katie Bell",
      "Katie Bell"
    ],
    "type": "fact"
  },
  {
    "id": "q227",
    "book": 6,
    "level": "Mellem",
    "question": "Husk scenen fra bøgerne: Hvilket emne gennemgår Dumbledore med Harry i deres private lektioner? Hvad er svaret?",
    "answerDa": "Voldemorts fortid og hans horcruxer",
    "answerEn": "Voldemort’s past and his Horcruxes",
    "correctKey": "right",
    "why": "Dumbledore viser Harry erindringer, der forklarer Tom Riddles historie og hans søgen efter udødelighed.",
    "aliases": [
      "Voldemorts fortid og hans horcruxer",
      "Voldemort’s past and Horcruxes"
    ],
    "type": "fact"
  },
  {
    "id": "q228",
    "book": 6,
    "level": "Svær",
    "question": "Husk scenen fra bøgerne: Hvad sker der med Ron, da han drikker den forgiftede mjød? Hvad er svaret?",
    "answerDa": "Han bliver forgiftet efter at have drukket mjød, der var tiltænkt Dumbledore",
    "answerEn": "He is poisoned after drinking mead intended for Dumbledore",
    "correctKey": "right",
    "why": "Ron drikker forgiftet mjød, efter at Slughorns flaske er blevet forhekset; Harry redder ham.",
    "aliases": [
      "Han bliver forgiftet efter at have drukket mjød, der var tiltænkt Dumbledore",
      "He is poisoned after drinking a drink meant for someone else"
    ],
    "type": "fact"
  },
  {
    "id": "q229",
    "book": 6,
    "level": "Svær",
    "question": "Husk scenen fra bøgerne: Hvilken horcrux mener Dumbledore, at de finder i en grotte? Hvad er svaret?",
    "answerDa": "En medaljon",
    "answerEn": "A locket",
    "correctKey": "right",
    "why": "De finder en medaljon, men den viser sig senere at være en falsk horcrux.",
    "aliases": [
      "En medaljon",
      "A locket"
    ],
    "type": "fact"
  },
  {
    "id": "q230",
    "book": 6,
    "level": "Svær",
    "question": "Husk scenen fra bøgerne: Hvilken besværgelse bruger Harry mod Draco i badeværelset uden at kende dens virkning? Hvad er svaret?",
    "answerDa": "Sectumsempra",
    "answerEn": "Sectumsempra",
    "correctKey": "right",
    "why": "Sectumsempra skærer alvorlige sår i Draco; Harry kendte kun noten “mod fjender”.",
    "aliases": [
      "Sectumsempra",
      "Sectumsempra"
    ],
    "type": "fact"
  },
  {
    "id": "q231",
    "book": 6,
    "level": "Svær",
    "question": "Husk scenen fra bøgerne: Hvem dræber Dumbledore på toppen af Astronomitårnet? Hvad er svaret?",
    "answerDa": "Severus Snape",
    "answerEn": "Severus Snape",
    "correctKey": "right",
    "why": "Snape dræber Dumbledore efter en aftale mellem dem, som først forklares senere.",
    "aliases": [
      "Severus Snape",
      "Severus Snape"
    ],
    "type": "fact"
  },
  {
    "id": "q232",
    "book": 6,
    "level": "Svær",
    "question": "Husk scenen fra bøgerne: Hvad viser sig at være forkert ved medaljonen, Harry og Dumbledore finder? Hvad er svaret?",
    "answerDa": "En falsk medaljon, som R.A.B. efterlod",
    "answerEn": "A fake locket left behind by R.A.B.",
    "correctKey": "right",
    "why": "Et brev underskrevet R.A.B. forklarer, at den rigtige medaljon allerede er blevet taget.",
    "aliases": [
      "En falsk medaljon, som R.A.B. efterlod",
      "It is a fake locket left by R.A.B."
    ],
    "type": "fact"
  },
  {
    "id": "q233",
    "book": 7,
    "level": "Svær",
    "question": "Husk scenen fra bøgerne: Hvilke tre genstande er Dødsregalierne? Hvad er svaret?",
    "answerDa": "Oldstaven, Opstandelsesstenen og Usynlighedskappen",
    "answerEn": "The Elder Wand, the Resurrection Stone and the Invisibility Cloak",
    "correctKey": "right",
    "why": "De tre legendariske genstande er Oldstaven, Opstandelsesstenen og Usynlighedskappen.",
    "aliases": [
      "Oldstaven, Opstandelsesstenen og Usynlighedskappen",
      "The Elder Wand, the Resurrection Stone and the Invisibility Cloak"
    ],
    "type": "fact"
  },
  {
    "id": "q234",
    "book": 7,
    "level": "Let",
    "question": "Husk scenen fra bøgerne: Hvem er R.A.B., som efterlader en besked i den falske medaljon? Hvad er svaret?",
    "answerDa": "Regulus Arcturus Black",
    "answerEn": "Regulus Arcturus Black",
    "correctKey": "right",
    "why": "Regulus Arcturus Black var Sirius’ bror og en tidligere dødsæder, som vendte sig mod Voldemort.",
    "aliases": [
      "Regulus Arcturus Black",
      "Regulus Arcturus Black"
    ],
    "type": "fact"
  },
  {
    "id": "q235",
    "book": 7,
    "level": "Mellem",
    "question": "Husk scenen fra bøgerne: Hvilken genstand efterlod Dumbledore til Harry, og som indeholder Opstandelsesstenen? Hvad er svaret?",
    "answerDa": "Den Snitch, som Dumbledore efterlod til Harry",
    "answerEn": "The Snitch that Dumbledore left for Harry",
    "correctKey": "right",
    "why": "Dumbledore efterlod Harry en Snitch, som åbner sig og afslører Opstandelsesstenen. Gryffindors sværd ligger i søen.",
    "aliases": [
      "Den Snitch, som Dumbledore efterlod til Harry",
      "The Snitch that Dumbledore left for Harry"
    ],
    "type": "fact"
  },
  {
    "id": "q236",
    "book": 7,
    "level": "Mellem",
    "question": "Husk scenen fra bøgerne: Hvilken troldmandsbank bryder trioen ind i? Hvad er svaret?",
    "answerDa": "Gringotts",
    "answerEn": "Gringotts",
    "correctKey": "right",
    "why": "Harry, Ron og Hermione bryder ind i Gringotts for at hente Hufflepuffs pokal fra Bellatrix’ boks.",
    "aliases": [
      "Gringotts",
      "Gringotts"
    ],
    "type": "fact"
  },
  {
    "id": "q237",
    "book": 7,
    "level": "Mellem",
    "question": "Husk scenen fra bøgerne: Hvilket hus’ genstand er en af Voldemorts horcruxer i Gringotts? Hvad er svaret?",
    "answerDa": "Hufflepuffs pokal",
    "answerEn": "Hufflepuff’s Cup",
    "correctKey": "right",
    "why": "Helga Hufflepuffs pokal bliver en horcrux og opbevares i Bellatrix’ boks.",
    "aliases": [
      "Hufflepuffs pokal",
      "Hufflepuff’s Cup"
    ],
    "type": "fact"
  },
  {
    "id": "q238",
    "book": 7,
    "level": "Svær",
    "question": "Husk scenen fra bøgerne: Hvem leder Hogwarts, mens trioen er på flugt, og Voldemort har taget magten? Hvad er svaret?",
    "answerDa": "Severus Snape",
    "answerEn": "Severus Snape",
    "correctKey": "right",
    "why": "Snape er udnævnt til rektor under Voldemorts kontrol, mens Carrow-søskende underviser.",
    "aliases": [
      "Severus Snape",
      "Severus Snape"
    ],
    "type": "fact"
  },
  {
    "id": "q239",
    "book": 7,
    "level": "Svær",
    "question": "Hvilken af disse genstande er ikke en af Voldemorts horcruxer?",
    "answerDa": "Gryffindors sværd",
    "answerEn": "Gryffindor’s Sword",
    "correctKey": "right",
    "why": "Gryffindors sværd er ikke en horcrux; det kan ødelægge horcruxer, fordi det har absorberet basiliskgift.",
    "aliases": [
      "Gryffindors sværd",
      "Gryffindor’s Sword"
    ],
    "type": "fact",
    "options": [
      {
        "da": "Gryffindors sværd",
        "en": "Gryffindor’s Sword"
      },
      {
        "da": "Tom Riddles dagbog / Tom Riddle’s Diary",
        "en": "Tom Riddle’s Diary"
      },
      {
        "da": "Marvolo Gaunts ring / Marvolo Gaunt’s Ring",
        "en": "Marvolo Gaunt’s Ring"
      },
      {
        "da": "Ravenclaws diadem / Ravenclaw’s Diadem",
        "en": "Ravenclaw’s Diadem"
      }
    ],
    "correctIndex": 0
  },
  {
    "id": "q240",
    "book": 7,
    "level": "Svær",
    "question": "Husk scenen fra bøgerne: Hvem ødelægger Hufflepuffs pokal i Hemmelighedernes Kammer? Hvad er svaret?",
    "answerDa": "Hermione Granger",
    "answerEn": "Hermione Granger",
    "correctKey": "right",
    "why": "Hermione ødelægger pokalen med en basilisk-tand, som trioen finder i Kammeret.",
    "aliases": [
      "Hermione Granger",
      "Hermione Granger"
    ],
    "type": "fact"
  },
  {
    "id": "q241",
    "book": 7,
    "level": "Svær",
    "question": "Husk scenen fra bøgerne: Hvilken sandhed om Snape afsløres gennem hans erindringer? Hvad er svaret?",
    "answerDa": "Han elskede Lily Potter og beskyttede Harry i hemmelighed",
    "answerEn": "He loved Lily Potter and secretly protected Harry",
    "correctKey": "right",
    "why": "Snapes kærlighed til Lily er en central grund til, at han hjælper med at beskytte Harry.",
    "aliases": [
      "Han elskede Lily Potter og beskyttede Harry i hemmelighed",
      "He loved Lily Potter and secretly protected Harry"
    ],
    "type": "fact"
  },
  {
    "id": "q242",
    "book": 7,
    "level": "Svær",
    "question": "Husk scenen fra bøgerne: Hvem ødelægger Nagini under slaget om Hogwarts? Hvad er svaret?",
    "answerDa": "Neville Longbottom",
    "answerEn": "Neville Longbottom",
    "correctKey": "right",
    "why": "Neville trækker Gryffindors sværd fra Sorteringshatten og dræber Nagini.",
    "aliases": [
      "Neville Longbottom",
      "Neville Longbottom"
    ],
    "type": "fact"
  },
  {
    "id": "q243",
    "book": 1,
    "level": "Svær",
    "question": "Et spørgsmål til din Potter-hukommelse: Hvad hedder den kæmpe, der fortæller Harry, at han er en troldmand?",
    "answerDa": "Rubeus Hagrid",
    "answerEn": "Rubeus Hagrid",
    "correctKey": "right",
    "why": "Hagrid opsøger Harry på hans ellevte fødselsdag og fortæller ham om den magiske verden.",
    "aliases": [
      "Rubeus Hagrid",
      "Rubeus Hagrid"
    ],
    "type": "fact"
  },
  {
    "id": "q244",
    "book": 1,
    "level": "Let",
    "question": "Et spørgsmål til din Potter-hukommelse: Hvilket hus bliver Harry sorteret ind i?",
    "answerDa": "Gryffindor",
    "answerEn": "Gryffindor",
    "correctKey": "right",
    "why": "Sorteringshatten placerer Harry i Gryffindor, selv om den overvejer Slytherin.",
    "aliases": [
      "Gryffindor",
      "Gryffindor"
    ],
    "type": "fact"
  },
  {
    "id": "q245",
    "book": 1,
    "level": "Let",
    "question": "Et spørgsmål til din Potter-hukommelse: Hvad hedder den magiske sport, som Harry spiller på et kosteskaft?",
    "answerDa": "Quidditch",
    "answerEn": "Quidditch",
    "correctKey": "right",
    "why": "Quidditch spilles på flyvende koste med flere bolde og mål.",
    "aliases": [
      "Quidditch",
      "Quidditch"
    ],
    "type": "fact"
  },
  {
    "id": "q246",
    "book": 1,
    "level": "Mellem",
    "question": "Et spørgsmål til din Potter-hukommelse: Hvilken position spiller Harry på Gryffindors Quidditch-hold?",
    "answerDa": "Søger",
    "answerEn": "Seeker",
    "correctKey": "right",
    "why": "En søger skal fange Det Gyldne Lyn; det er Harrys position.",
    "aliases": [
      "Søger",
      "Seeker"
    ],
    "type": "fact"
  },
  {
    "id": "q247",
    "book": 1,
    "level": "Mellem",
    "question": "Et spørgsmål til din Potter-hukommelse: Hvad beskytter Flamel og Dumbledore ved hjælp af flere magiske forhindringer?",
    "answerDa": "De Vises Sten",
    "answerEn": "The Philosopher’s Stone",
    "correctKey": "right",
    "why": "Nicolas Flamels sten kan blandt andet fremstille livseliksir og er målet for Voldemorts plan.",
    "aliases": [
      "De Vises Sten",
      "The Philosopher’s Stone"
    ],
    "type": "fact"
  },
  {
    "id": "q248",
    "book": 1,
    "level": "Svær",
    "question": "Et spørgsmål til din Potter-hukommelse: Hvilket magisk væsen møder Harry, Ron og Hermione på et pigetoilet?",
    "answerDa": "En bjergtrold",
    "answerEn": "A mountain troll",
    "correctKey": "right",
    "why": "Quirrell slipper en bjergtrold løs på Hogwarts under Halloween.",
    "aliases": [
      "Et bjergtrold",
      "A mountain troll"
    ],
    "type": "fact"
  },
  {
    "id": "q249",
    "book": 1,
    "level": "Svær",
    "question": "Et spørgsmål til din Potter-hukommelse: Hvilken professor underviser i eliksirer i den første bog?",
    "answerDa": "Severus Snape",
    "answerEn": "Severus Snape",
    "correctKey": "right",
    "why": "Snape er eliksirprofessor og leder af Slytherin-huset.",
    "aliases": [
      "Severus Snape",
      "Severus Snape"
    ],
    "type": "fact"
  },
  {
    "id": "q250",
    "book": 1,
    "level": "Svær",
    "question": "Et spørgsmål til din Potter-hukommelse: Hvem viser sig at være den egentlige modstander bag forsøget på at stjæle stenen?",
    "answerDa": "Quirinus Quirrell",
    "answerEn": "Quirinus Quirrell",
    "correctKey": "right",
    "why": "Quirrell hjælper Voldemort og forsøger at få fat i stenen.",
    "aliases": [
      "Quirinus Quirrell",
      "Quirinus Quirrell"
    ],
    "type": "fact"
  },
  {
    "id": "q251",
    "book": 1,
    "level": "Svær",
    "question": "Et spørgsmål til din Potter-hukommelse: Hvilken udfordring kræver, at Harry spiller et menneskestort skakspil?",
    "answerDa": "Troldmandsskak",
    "answerEn": "Wizard chess",
    "correctKey": "right",
    "why": "Ron leder skakspillet og ofrer sig selv, så Harry kan komme videre.",
    "aliases": [
      "Troldmandsskak",
      "Wizard chess"
    ],
    "type": "fact"
  },
  {
    "id": "q252",
    "book": 1,
    "level": "Svær",
    "question": "Et spørgsmål til din Potter-hukommelse: Hvem tilhørte usynlighedskappen, før Harry fik den i julegave?",
    "answerDa": "James Potter, Harrys far",
    "answerEn": "James Potter, Harry’s father",
    "correctKey": "right",
    "why": "Kappen blev givet videre fra James Potter; Dumbledore havde den til låns.",
    "aliases": [
      "James Potter, Harrys far",
      "It belonged to his father, James Potter"
    ],
    "type": "fact"
  },
  {
    "id": "q253",
    "book": 2,
    "level": "Svær",
    "question": "Et spørgsmål til din Potter-hukommelse: Hvilken genstand skriver Harrys navn og oplevelser ind i, uden at vide hvem der svarer?",
    "answerDa": "En dagbog",
    "answerEn": "A diary",
    "correctKey": "right",
    "why": "Tom Riddles dagbog svarer Harry og viser sig at være en horcrux.",
    "aliases": [
      "En dagbog",
      "A diary"
    ],
    "type": "fact"
  },
  {
    "id": "q254",
    "book": 2,
    "level": "Let",
    "question": "Et spørgsmål til din Potter-hukommelse: Hvilket væsen terroriserer eleverne ved at forstene dem?",
    "answerDa": "En basilisk",
    "answerEn": "A basilisk",
    "correctKey": "right",
    "why": "Basilisken bevæger sig gennem rørene og forstener dem, der ser dens blik indirekte.",
    "aliases": [
      "En basilisk",
      "A basilisk"
    ],
    "type": "fact"
  },
  {
    "id": "q255",
    "book": 2,
    "level": "Let",
    "question": "Et spørgsmål til din Potter-hukommelse: Hvem er husalfen, der forsøger at holde Harry væk fra Hogwarts?",
    "answerDa": "Dobby",
    "answerEn": "Dobby",
    "correctKey": "right",
    "why": "Dobby forsøger at advare Harry om faren i Hemmelighedernes Kammer.",
    "aliases": [
      "Dobby",
      "Dobby"
    ],
    "type": "fact"
  },
  {
    "id": "q256",
    "book": 2,
    "level": "Mellem",
    "question": "Et spørgsmål til din Potter-hukommelse: Hvordan kommer Harry og Ron til Hogwarts, efter at Dobby forhindrer dem i at komme gennem barrieren på perron 9¾?",
    "answerDa": "I Arthurs fortryllede Ford Anglia",
    "answerEn": "In Arthur’s enchanted Ford Anglia",
    "correctKey": "right",
    "why": "De flyver i den fortryllede bil, som ender med at kaste dem af ved Slagpoplen.",
    "aliases": [
      "I Arthurs fortryllede Ford Anglia",
      "They fly in Arthur’s enchanted Ford Anglia"
    ],
    "type": "fact"
  },
  {
    "id": "q257",
    "book": 2,
    "level": "Mellem",
    "question": "Et spørgsmål til din Potter-hukommelse: Hvilken lærer er berømt for sine bøger om sine egne bedrifter?",
    "answerDa": "Gilderoy Lockhart",
    "answerEn": "Gilderoy Lockhart",
    "correctKey": "right",
    "why": "Lockhart er den nye lærer i Forsvar mod Mørkets Kræfter og en selvglad forfatter.",
    "aliases": [
      "Gilderoy Lockhart",
      "Gilderoy Lockhart"
    ],
    "type": "fact"
  },
  {
    "id": "q258",
    "book": 2,
    "level": "Svær",
    "question": "Et spørgsmål til din Potter-hukommelse: Hvem viser sig at være arvingen efter Slytherin?",
    "answerDa": "Tom Riddle / Lord Voldemort",
    "answerEn": "Tom Riddle / Lord Voldemort",
    "correctKey": "right",
    "why": "Tom Riddle, den unge Voldemort, åbner Hemmelighedernes Kammer gennem dagbogen.",
    "aliases": [
      "Tom Riddle",
      "Tom Riddle / Lord Voldemort"
    ],
    "type": "fact"
  },
  {
    "id": "q259",
    "book": 2,
    "level": "Svær",
    "question": "Et spørgsmål til din Potter-hukommelse: Hvilken fugl kommer Harry til undsætning i Kammeret?",
    "answerDa": "Fawkes, Dumbledores føniks",
    "answerEn": "Fawkes, Dumbledore’s phoenix",
    "correctKey": "right",
    "why": "Fawkes bringer Sorteringshatten og heler Harrys sår med sine tårer.",
    "aliases": [
      "Fawkes, Dumbledores føniks",
      "Fawkes, Dumbledore’s phoenix"
    ],
    "type": "fact"
  },
  {
    "id": "q260",
    "book": 2,
    "level": "Svær",
    "question": "Et spørgsmål til din Potter-hukommelse: Hvilken plante bruges til at lave en modgift, der kan genoplive elever, som er blevet forstenet?",
    "answerDa": "Mandragora",
    "answerEn": "Mandrake",
    "correctKey": "right",
    "why": "Mandragoraens skrig kan være dødelige, men dens modnede rod bruges til at genoplive de forstenede.",
    "aliases": [
      "Mandragora",
      "Mandrake"
    ],
    "type": "fact"
  },
  {
    "id": "q261",
    "book": 2,
    "level": "Svær",
    "question": "Et spørgsmål til din Potter-hukommelse: Hvem redder Ginny fra Tom Riddle i Hemmelighedernes Kammer?",
    "answerDa": "Harry Potter",
    "answerEn": "Harry Potter",
    "correctKey": "right",
    "why": "Harry ødelægger dagbogen med en basilisk-tand og redder Ginny.",
    "aliases": [
      "Harry Potter",
      "Harry Potter"
    ],
    "type": "fact"
  },
  {
    "id": "q262",
    "book": 2,
    "level": "Svær",
    "question": "Et spørgsmål til din Potter-hukommelse: Hvilken genstand ødelægger Tom Riddles dagbog?",
    "answerDa": "En basilisk-tand",
    "answerEn": "A basilisk fang",
    "correctKey": "right",
    "why": "Harry stikker dagbogen med en basilisk-tand, som ødelægger horcruxen.",
    "aliases": [
      "En basilisk-tand",
      "A basilisk fang"
    ],
    "type": "fact"
  },
  {
    "id": "q263",
    "book": 3,
    "level": "Svær",
    "question": "Et spørgsmål til din Potter-hukommelse: Hvem flygter fra Azkaban og bliver jagtet gennem det meste af bogen?",
    "answerDa": "Sirius Black",
    "answerEn": "Sirius Black",
    "correctKey": "right",
    "why": "Sirius Black er flygtet fra Azkaban, og alle tror først, at han vil finde Harry.",
    "aliases": [
      "Sirius Black",
      "Sirius Black"
    ],
    "type": "fact"
  },
  {
    "id": "q264",
    "book": 3,
    "level": "Let",
    "question": "Et spørgsmål til din Potter-hukommelse: Hvilke væsner patruljerer omkring Hogwarts og kan suge håb og glæde ud af mennesker?",
    "answerDa": "Dementorer",
    "answerEn": "Dementors",
    "correctKey": "right",
    "why": "Dementorerne arbejder for Ministeriet og påvirker Harry særligt voldsomt.",
    "aliases": [
      "Dementorer",
      "Dementors"
    ],
    "type": "fact"
  },
  {
    "id": "q265",
    "book": 3,
    "level": "Mellem",
    "question": "Et spørgsmål til din Potter-hukommelse: Hvem underviser Harry i patronusbesværgelsen?",
    "answerDa": "Remus Lupin",
    "answerEn": "Remus Lupin",
    "correctKey": "right",
    "why": "Lupin hjælper Harry med at fremmane en patronus for at beskytte sig mod dementorer.",
    "aliases": [
      "Remus Lupin",
      "Remus Lupin"
    ],
    "type": "fact"
  },
  {
    "id": "q266",
    "book": 3,
    "level": "Mellem",
    "question": "Et spørgsmål til din Potter-hukommelse: Hvad er Remus Lupins hemmelighed?",
    "answerDa": "Han er varulv",
    "answerEn": "He is a werewolf",
    "correctKey": "right",
    "why": "Lupin er varulv; hans venner lærte engang at blive animaguser for at hjælpe ham.",
    "aliases": [
      "Han er varulv",
      "He is a werewolf"
    ],
    "type": "fact"
  },
  {
    "id": "q267",
    "book": 3,
    "level": "Mellem",
    "question": "Et spørgsmål til din Potter-hukommelse: Hvilket dyr kan Peter Pettigrew forvandle sig til?",
    "answerDa": "En rotte",
    "answerEn": "A rat",
    "correctKey": "right",
    "why": "Pettigrew er animagus i form af en rotte og har levet som Scabbers.",
    "aliases": [
      "En rotte",
      "A rat"
    ],
    "type": "fact"
  },
  {
    "id": "q268",
    "book": 3,
    "level": "Svær",
    "question": "Et spørgsmål til din Potter-hukommelse: Hvilket magisk væsen får Hagrid Harry til at møde i sin første lektion med magiske væsner?",
    "answerDa": "En hippogriff",
    "answerEn": "A hippogriff",
    "correctKey": "right",
    "why": "Hippogriffen Buckbeak er med i Hagrids undervisning og reagerer på respekt.",
    "aliases": [
      "En hippogriff",
      "A hippogriff"
    ],
    "type": "fact"
  },
  {
    "id": "q269",
    "book": 3,
    "level": "Svær",
    "question": "Et spørgsmål til din Potter-hukommelse: Hvem skabte sammen med sine venner Røverkortet?",
    "answerDa": "James Potter, Sirius Black, Remus Lupin og Peter Pettigrew",
    "answerEn": "James Potter, Sirius Black, Remus Lupin and Peter Pettigrew",
    "correctKey": "right",
    "why": "De fire venner kaldte sig Moony, Wormtail, Padfoot og Prongs.",
    "aliases": [
      "James Potter, Sirius Black, Remus Lupin og Peter Pettigrew",
      "James Potter, Sirius Black, Remus Lupin and Peter Pettigrew"
    ],
    "type": "fact"
  },
  {
    "id": "q270",
    "book": 3,
    "level": "Svær",
    "question": "Et spørgsmål til din Potter-hukommelse: Hvilket dyr er James Potters animagus-form?",
    "answerDa": "En hjort",
    "answerEn": "A stag",
    "correctKey": "right",
    "why": "James kunne forvandle sig til en hjort, hvilket gav ham øgenavnet Prongs.",
    "aliases": [
      "En hjort",
      "A stag"
    ],
    "type": "fact"
  },
  {
    "id": "q271",
    "book": 3,
    "level": "Svær",
    "question": "Et spørgsmål til din Potter-hukommelse: Hvilken genstand bruger Harry og Hermione til at rejse tilbage i tiden?",
    "answerDa": "En tidsvender",
    "answerEn": "A Time-Turner",
    "correctKey": "right",
    "why": "Hermione har fået en tidsvender fra McGonagall for at kunne følge flere fag.",
    "aliases": [
      "En tidsvender",
      "A Time-Turner"
    ],
    "type": "fact"
  },
  {
    "id": "q272",
    "book": 3,
    "level": "Svær",
    "question": "Et spørgsmål til din Potter-hukommelse: Hvem var den hemmelige hemmelighedsvogter for Potter-familiens skjulested?",
    "answerDa": "Peter Pettigrew",
    "answerEn": "Peter Pettigrew",
    "correctKey": "right",
    "why": "Sirius foreslog Pettigrew som hemmelighedsvogter, men Pettigrew forrådte Potter-familien.",
    "aliases": [
      "Peter Pettigrew",
      "Peter Pettigrew"
    ],
    "type": "fact"
  },
  {
    "id": "q273",
    "book": 4,
    "level": "Svær",
    "question": "Et spørgsmål til din Potter-hukommelse: Hvilken international konkurrence afholdes på Hogwarts?",
    "answerDa": "Tretroldmandsturneringen",
    "answerEn": "The Triwizard Tournament",
    "correctKey": "right",
    "why": "Tretroldmandsturneringen samler tre skoler og har tre farlige opgaver.",
    "aliases": [
      "Tretroldmandsturneringen",
      "Triwizard Tournament"
    ],
    "type": "fact"
  },
  {
    "id": "q274",
    "book": 4,
    "level": "Let",
    "question": "Et spørgsmål til din Potter-hukommelse: Hvilke to andre skoler sender elever til turneringen sammen med Hogwarts?",
    "answerDa": "Beauxbatons og Durmstrang",
    "answerEn": "Beauxbatons and Durmstrang",
    "correctKey": "right",
    "why": "Beauxbatons og Durmstrang deltager sammen med Hogwarts.",
    "aliases": [
      "Beauxbatons og Durmstrang",
      "Beauxbatons and Durmstrang"
    ],
    "type": "fact"
  },
  {
    "id": "q275",
    "book": 4,
    "level": "Mellem",
    "question": "Et spørgsmål til din Potter-hukommelse: Hvem bliver udvalgt som Hogwarts’ officielle deltager i turneringen?",
    "answerDa": "Cedric Diggory",
    "answerEn": "Cedric Diggory",
    "correctKey": "right",
    "why": "Ildpokalen vælger Cedric som Hogwarts’ deltager; Harry bliver valgt som ekstra deltager.",
    "aliases": [
      "Cedric Diggory",
      "Cedric Diggory"
    ],
    "type": "fact"
  },
  {
    "id": "q276",
    "book": 4,
    "level": "Mellem",
    "question": "Et spørgsmål til din Potter-hukommelse: Hvilken drage møder Harry i den første opgave?",
    "answerDa": "En ungarsk takhale",
    "answerEn": "A Hungarian Horntail",
    "correctKey": "right",
    "why": "Harry skal hente et gyldent æg fra en ungarsk takhale.",
    "aliases": [
      "En ungarsk takhale",
      "A Hungarian Horntail"
    ],
    "type": "fact"
  },
  {
    "id": "q277",
    "book": 4,
    "level": "Mellem",
    "question": "Et spørgsmål til din Potter-hukommelse: Hvem er forklædt som Alastor “Skrækøje” Moody det meste af skoleåret?",
    "answerDa": "Barty Crouch Jr.",
    "answerEn": "Barty Crouch Jr.",
    "correctKey": "right",
    "why": "Barty Crouch Jr. bruger Polyjuice-eliksir og manipulerer turneringen for at føre Harry til Voldemort.",
    "aliases": [
      "Barty Crouch Jr.",
      "Barty Crouch Jr."
    ],
    "type": "fact"
  },
  {
    "id": "q278",
    "book": 4,
    "level": "Svær",
    "question": "Et spørgsmål til din Potter-hukommelse: Hvad skal deltagerne hente fra søen i den anden opgave?",
    "answerDa": "En person, der betyder meget for dem",
    "answerEn": "A person who matters to them",
    "correctKey": "right",
    "why": "Hver deltager skal redde den person, som søens væsener har taget som gidsel.",
    "aliases": [
      "En person, der betyder meget for dem",
      "A person who matters to them"
    ],
    "type": "fact"
  },
  {
    "id": "q279",
    "book": 4,
    "level": "Svær",
    "question": "Et spørgsmål til din Potter-hukommelse: Hvilken besværgelse bruger Harry til at tilkalde sin kost under drageopgaven?",
    "answerDa": "Accio",
    "answerEn": "Accio",
    "correctKey": "right",
    "why": "Accio er en tilkaldelsesbesværgelse, og Harry bruger den på sin Firebolt.",
    "aliases": [
      "Accio",
      "Accio"
    ],
    "type": "fact"
  },
  {
    "id": "q280",
    "book": 4,
    "level": "Svær",
    "question": "Et spørgsmål til din Potter-hukommelse: Hvilken genstand transporterer Harry og Cedric til kirkegården?",
    "answerDa": "En portnøgle",
    "answerEn": "A Portkey",
    "correctKey": "right",
    "why": "Tretroldmandspokalen er blevet fortryllet til en portnøgle.",
    "aliases": [
      "En portnøgle",
      "A Portkey"
    ],
    "type": "fact"
  },
  {
    "id": "q281",
    "book": 4,
    "level": "Svær",
    "question": "Et spørgsmål til din Potter-hukommelse: Hvem dør på kirkegården, da Harry og Cedric ankommer?",
    "answerDa": "Cedric Diggory",
    "answerEn": "Cedric Diggory",
    "correctKey": "right",
    "why": "Peter Pettigrew dræber Cedric efter Voldemorts ordre.",
    "aliases": [
      "Cedric Diggory",
      "Cedric Diggory"
    ],
    "type": "fact"
  },
  {
    "id": "q282",
    "book": 4,
    "level": "Svær",
    "question": "Et spørgsmål til din Potter-hukommelse: Hvad har Harrys og Voldemorts tryllestave til fælles?",
    "answerDa": "De har fjer fra den samme føniks",
    "answerEn": "They contain feathers from the same phoenix",
    "correctKey": "right",
    "why": "Begge tryllestave har en fjer fra Fawkes, Dumbledores føniks.",
    "aliases": [
      "De har fjer fra den samme føniks",
      "They contain feathers from the same phoenix"
    ],
    "type": "fact"
  },
  {
    "id": "q283",
    "book": 5,
    "level": "Svær",
    "question": "Et spørgsmål til din Potter-hukommelse: Hvilken organisation forsøger at bekæmpe Voldemort, men som Ministeriet nægter at anerkende?",
    "answerDa": "Fønixordenen",
    "answerEn": "The Order of the Phoenix",
    "correctKey": "right",
    "why": "Fønixordenen er Dumbledores hemmelige modstandsgruppe.",
    "aliases": [
      "Fønixordenen",
      "Order of the Phoenix"
    ],
    "type": "fact"
  },
  {
    "id": "q284",
    "book": 5,
    "level": "Let",
    "question": "Et spørgsmål til din Potter-hukommelse: Hvem bliver ansat som Hogwarts’ nye lærer i Forsvar mod Mørkets Kræfter og indfører strenge regler?",
    "answerDa": "Dolores Umbridge",
    "answerEn": "Dolores Umbridge",
    "correctKey": "right",
    "why": "Umbridge bliver Ministeriets udsending og begrænser praktisk undervisning i forsvarsmagi.",
    "aliases": [
      "Dolores Umbridge",
      "Dolores Umbridge"
    ],
    "type": "fact"
  },
  {
    "id": "q285",
    "book": 5,
    "level": "Mellem",
    "question": "Et spørgsmål til din Potter-hukommelse: Hvad kalder Harry, Ron og Hermione deres hemmelige gruppe, hvor de øver forsvarsmagi?",
    "answerDa": "Dumbledores Armé",
    "answerEn": "Dumbledore’s Army",
    "correctKey": "right",
    "why": "Gruppen kaldes Dumbledores Armé, ofte forkortet DA.",
    "aliases": [
      "Dumbledores Armé",
      "Dumbledore’s Army"
    ],
    "type": "fact"
  },
  {
    "id": "q286",
    "book": 5,
    "level": "Mellem",
    "question": "Et spørgsmål til din Potter-hukommelse: Hvilken familie bor Harry hos, når han ikke er på Hogwarts?",
    "answerDa": "Dursley-familien",
    "answerEn": "The Dursley family",
    "correctKey": "right",
    "why": "Harry bor hos sin tante Petunia, onkel Vernon og fætter Dudley.",
    "aliases": [
      "Dursley-familien",
      "The Dursleys"
    ],
    "type": "fact"
  },
  {
    "id": "q287",
    "book": 5,
    "level": "Mellem",
    "question": "Et spørgsmål til din Potter-hukommelse: Hvilket væsen angriber Harry og Dudley i en tunnel i Little Whinging?",
    "answerDa": "Dementorer",
    "answerEn": "Dementors",
    "correctKey": "right",
    "why": "Dementorer angriber dem, og Harry bruger en patronus for at beskytte dem.",
    "aliases": [
      "Dementorer",
      "Dementors"
    ],
    "type": "fact"
  },
  {
    "id": "q288",
    "book": 5,
    "level": "Svær",
    "question": "Et spørgsmål til din Potter-hukommelse: Hvilken afdeling i Ministeriet for Magi bliver central i bogens afslutning?",
    "answerDa": "Mysteriedepartementet",
    "answerEn": "The Department of Mysteries",
    "correctKey": "right",
    "why": "Harry bliver lokket til Mysteriedepartementet af et syn, der viser sig at være manipuleret.",
    "aliases": [
      "Mysteriedepartementet",
      "Department of Mysteries"
    ],
    "type": "fact"
  },
  {
    "id": "q289",
    "book": 5,
    "level": "Svær",
    "question": "Et spørgsmål til din Potter-hukommelse: Hvem mister Harry under kampen i Ministeriet?",
    "answerDa": "Sirius Black",
    "answerEn": "Sirius Black",
    "correctKey": "right",
    "why": "Sirius falder gennem sløret i Dødskammeret efter kampen med Bellatrix.",
    "aliases": [
      "Sirius Black",
      "Sirius Black"
    ],
    "type": "fact"
  },
  {
    "id": "q290",
    "book": 5,
    "level": "Svær",
    "question": "Et spørgsmål til din Potter-hukommelse: Hvem er den eneste elev, der kan se thestralerne ved begyndelsen af skoleåret sammen med Harry?",
    "answerDa": "Luna Lovegood",
    "answerEn": "Luna Lovegood",
    "correctKey": "right",
    "why": "Luna kan se thestralerne, fordi hun har været vidne til døden.",
    "aliases": [
      "Luna Lovegood",
      "Luna Lovegood"
    ],
    "type": "fact"
  },
  {
    "id": "q291",
    "book": 5,
    "level": "Svær",
    "question": "Et spørgsmål til din Potter-hukommelse: Hvilken profeti forsøger Voldemort at få fat i?",
    "answerDa": "Profetien om Harry og Voldemort",
    "answerEn": "The prophecy about Harry and Voldemort",
    "correctKey": "right",
    "why": "Profetien handler om et barn, der kan besejre Voldemort, og forbindelsen mellem ham og Harry.",
    "aliases": [
      "Profetien om Harry og Voldemort",
      "The prophecy about Harry and Voldemort"
    ],
    "type": "fact"
  },
  {
    "id": "q292",
    "book": 5,
    "level": "Svær",
    "question": "Et spørgsmål til din Potter-hukommelse: Hvem fortæller Harry, at han ikke skal føle sig skyldig over at have stærke følelser?",
    "answerDa": "Albus Dumbledore",
    "answerEn": "Albus Dumbledore",
    "correctKey": "right",
    "why": "Dumbledore forklarer Harry, at smerte og kærlighed er en del af det at være menneske.",
    "aliases": [
      "Albus Dumbledore",
      "Albus Dumbledore"
    ],
    "type": "fact"
  },
  {
    "id": "q293",
    "book": 6,
    "level": "Svær",
    "question": "Et spørgsmål til din Potter-hukommelse: Hvilken bog bruger Harry i eliksirundervisningen, som er mærket med Halvblodsprinsens navn?",
    "answerDa": "Halvblodsprinsens eliksirbog",
    "answerEn": "The Half-Blood Prince’s Potions textbook",
    "correctKey": "right",
    "why": "Harry bruger en gammel eliksirbog med noter og besværgelser skrevet af Halvblodsprinsen.",
    "aliases": [
      "Halvblodsprinsens bog",
      "The Half-Blood Prince’s book"
    ],
    "type": "fact"
  },
  {
    "id": "q294",
    "book": 6,
    "level": "Let",
    "question": "Et spørgsmål til din Potter-hukommelse: Hvilken professor hjælper Harry og Dumbledore med at undersøge Voldemorts fortid?",
    "answerDa": "Horace Slughorn",
    "answerEn": "Horace Slughorn",
    "correctKey": "right",
    "why": "Slughorn har kendt Tom Riddle som elev og gemmer på en vigtig erindring.",
    "aliases": [
      "Horace Slughorn",
      "Horace Slughorn"
    ],
    "type": "fact"
  },
  {
    "id": "q295",
    "book": 6,
    "level": "Mellem",
    "question": "Et spørgsmål til din Potter-hukommelse: Hvilken type magisk genstand er en horcrux?",
    "answerDa": "En genstand, der indeholder en del af en sjæl",
    "answerEn": "An object that contains a piece of a soul",
    "correctKey": "right",
    "why": "Voldemort deler sin sjæl og skjuler dele i genstande for at forsøge at undgå døden.",
    "aliases": [
      "En genstand, der indeholder en del af en sjæl",
      "An object that contains a piece of a soul"
    ],
    "type": "fact"
  },
  {
    "id": "q296",
    "book": 6,
    "level": "Mellem",
    "question": "Et spørgsmål til din Potter-hukommelse: Hvem er den elev, der bliver alvorligt syg efter at have rørt ved en forgiftet halskæde?",
    "answerDa": "Katie Bell",
    "answerEn": "Katie Bell",
    "correctKey": "right",
    "why": "Katie Bell bliver forbandet af en halskæde, der var tiltænkt Dumbledore.",
    "aliases": [
      "Katie Bell",
      "Katie Bell"
    ],
    "type": "fact"
  },
  {
    "id": "q297",
    "book": 6,
    "level": "Mellem",
    "question": "Et spørgsmål til din Potter-hukommelse: Hvilket emne gennemgår Dumbledore med Harry i deres private lektioner?",
    "answerDa": "Voldemorts fortid og hans horcruxer",
    "answerEn": "Voldemort’s past and his Horcruxes",
    "correctKey": "right",
    "why": "Dumbledore viser Harry erindringer, der forklarer Tom Riddles historie og hans søgen efter udødelighed.",
    "aliases": [
      "Voldemorts fortid og hans horcruxer",
      "Voldemort’s past and Horcruxes"
    ],
    "type": "fact"
  },
  {
    "id": "q298",
    "book": 6,
    "level": "Svær",
    "question": "Et spørgsmål til din Potter-hukommelse: Hvad sker der med Ron, da han drikker den forgiftede mjød?",
    "answerDa": "Han bliver forgiftet efter at have drukket mjød, der var tiltænkt Dumbledore",
    "answerEn": "He is poisoned after drinking mead intended for Dumbledore",
    "correctKey": "right",
    "why": "Ron drikker forgiftet mjød, efter at Slughorns flaske er blevet forhekset; Harry redder ham.",
    "aliases": [
      "Han bliver forgiftet efter at have drukket mjød, der var tiltænkt Dumbledore",
      "He is poisoned after drinking a drink meant for someone else"
    ],
    "type": "fact"
  },
  {
    "id": "q299",
    "book": 6,
    "level": "Svær",
    "question": "Et spørgsmål til din Potter-hukommelse: Hvilken horcrux mener Dumbledore, at de finder i en grotte?",
    "answerDa": "En medaljon",
    "answerEn": "A locket",
    "correctKey": "right",
    "why": "De finder en medaljon, men den viser sig senere at være en falsk horcrux.",
    "aliases": [
      "En medaljon",
      "A locket"
    ],
    "type": "fact"
  },
  {
    "id": "q300",
    "book": 6,
    "level": "Svær",
    "question": "Et spørgsmål til din Potter-hukommelse: Hvilken besværgelse bruger Harry mod Draco i badeværelset uden at kende dens virkning?",
    "answerDa": "Sectumsempra",
    "answerEn": "Sectumsempra",
    "correctKey": "right",
    "why": "Sectumsempra skærer alvorlige sår i Draco; Harry kendte kun noten “mod fjender”.",
    "aliases": [
      "Sectumsempra",
      "Sectumsempra"
    ],
    "type": "fact"
  },
  {
    "id": "q301",
    "book": 6,
    "level": "Svær",
    "question": "Et spørgsmål til din Potter-hukommelse: Hvem dræber Dumbledore på toppen af Astronomitårnet?",
    "answerDa": "Severus Snape",
    "answerEn": "Severus Snape",
    "correctKey": "right",
    "why": "Snape dræber Dumbledore efter en aftale mellem dem, som først forklares senere.",
    "aliases": [
      "Severus Snape",
      "Severus Snape"
    ],
    "type": "fact"
  },
  {
    "id": "q302",
    "book": 6,
    "level": "Svær",
    "question": "Et spørgsmål til din Potter-hukommelse: Hvad viser sig at være forkert ved medaljonen, Harry og Dumbledore finder?",
    "answerDa": "En falsk medaljon, som R.A.B. efterlod",
    "answerEn": "A fake locket left behind by R.A.B.",
    "correctKey": "right",
    "why": "Et brev underskrevet R.A.B. forklarer, at den rigtige medaljon allerede er blevet taget.",
    "aliases": [
      "En falsk medaljon, som R.A.B. efterlod",
      "It is a fake locket left by R.A.B."
    ],
    "type": "fact"
  },
  {
    "id": "q303",
    "book": 7,
    "level": "Svær",
    "question": "Et spørgsmål til din Potter-hukommelse: Hvilke tre genstande er Dødsregalierne?",
    "answerDa": "Oldstaven, Opstandelsesstenen og Usynlighedskappen",
    "answerEn": "The Elder Wand, the Resurrection Stone and the Invisibility Cloak",
    "correctKey": "right",
    "why": "De tre legendariske genstande er Oldstaven, Opstandelsesstenen og Usynlighedskappen.",
    "aliases": [
      "Oldstaven, Opstandelsesstenen og Usynlighedskappen",
      "The Elder Wand, the Resurrection Stone and the Invisibility Cloak"
    ],
    "type": "fact"
  },
  {
    "id": "q304",
    "book": 7,
    "level": "Let",
    "question": "Et spørgsmål til din Potter-hukommelse: Hvem er R.A.B., som efterlader en besked i den falske medaljon?",
    "answerDa": "Regulus Arcturus Black",
    "answerEn": "Regulus Arcturus Black",
    "correctKey": "right",
    "why": "Regulus Arcturus Black var Sirius’ bror og en tidligere dødsæder, som vendte sig mod Voldemort.",
    "aliases": [
      "Regulus Arcturus Black",
      "Regulus Arcturus Black"
    ],
    "type": "fact"
  },
  {
    "id": "q305",
    "book": 7,
    "level": "Mellem",
    "question": "Et spørgsmål til din Potter-hukommelse: Hvilken genstand efterlod Dumbledore til Harry, og som indeholder Opstandelsesstenen?",
    "answerDa": "Den Snitch, som Dumbledore efterlod til Harry",
    "answerEn": "The Snitch that Dumbledore left for Harry",
    "correctKey": "right",
    "why": "Dumbledore efterlod Harry en Snitch, som åbner sig og afslører Opstandelsesstenen. Gryffindors sværd ligger i søen.",
    "aliases": [
      "Den Snitch, som Dumbledore efterlod til Harry",
      "The Snitch that Dumbledore left for Harry"
    ],
    "type": "fact"
  },
  {
    "id": "q306",
    "book": 7,
    "level": "Mellem",
    "question": "Et spørgsmål til din Potter-hukommelse: Hvilken troldmandsbank bryder trioen ind i?",
    "answerDa": "Gringotts",
    "answerEn": "Gringotts",
    "correctKey": "right",
    "why": "Harry, Ron og Hermione bryder ind i Gringotts for at hente Hufflepuffs pokal fra Bellatrix’ boks.",
    "aliases": [
      "Gringotts",
      "Gringotts"
    ],
    "type": "fact"
  },
  {
    "id": "q307",
    "book": 7,
    "level": "Mellem",
    "question": "Et spørgsmål til din Potter-hukommelse: Hvilket hus’ genstand er en af Voldemorts horcruxer i Gringotts?",
    "answerDa": "Hufflepuffs pokal",
    "answerEn": "Hufflepuff’s Cup",
    "correctKey": "right",
    "why": "Helga Hufflepuffs pokal bliver en horcrux og opbevares i Bellatrix’ boks.",
    "aliases": [
      "Hufflepuffs pokal",
      "Hufflepuff’s Cup"
    ],
    "type": "fact"
  },
  {
    "id": "q308",
    "book": 7,
    "level": "Svær",
    "question": "Et spørgsmål til din Potter-hukommelse: Hvem leder Hogwarts, mens trioen er på flugt, og Voldemort har taget magten?",
    "answerDa": "Severus Snape",
    "answerEn": "Severus Snape",
    "correctKey": "right",
    "why": "Snape er udnævnt til rektor under Voldemorts kontrol, mens Carrow-søskende underviser.",
    "aliases": [
      "Severus Snape",
      "Severus Snape"
    ],
    "type": "fact"
  },
  {
    "id": "q309",
    "book": 7,
    "level": "Svær",
    "question": "Hvilken af disse genstande er ikke en af Voldemorts horcruxer?",
    "answerDa": "Gryffindors sværd",
    "answerEn": "Gryffindor’s Sword",
    "correctKey": "right",
    "why": "Gryffindors sværd er ikke en horcrux; det kan ødelægge horcruxer, fordi det har absorberet basiliskgift.",
    "aliases": [
      "Gryffindors sværd",
      "Gryffindor’s Sword"
    ],
    "type": "fact",
    "options": [
      {
        "da": "Gryffindors sværd",
        "en": "Gryffindor’s Sword"
      },
      {
        "da": "Tom Riddles dagbog / Tom Riddle’s Diary",
        "en": "Tom Riddle’s Diary"
      },
      {
        "da": "Marvolo Gaunts ring / Marvolo Gaunt’s Ring",
        "en": "Marvolo Gaunt’s Ring"
      },
      {
        "da": "Ravenclaws diadem / Ravenclaw’s Diadem",
        "en": "Ravenclaw’s Diadem"
      }
    ],
    "correctIndex": 0
  },
  {
    "id": "q310",
    "book": 7,
    "level": "Svær",
    "question": "Et spørgsmål til din Potter-hukommelse: Hvem ødelægger Hufflepuffs pokal i Hemmelighedernes Kammer?",
    "answerDa": "Hermione Granger",
    "answerEn": "Hermione Granger",
    "correctKey": "right",
    "why": "Hermione ødelægger pokalen med en basilisk-tand, som trioen finder i Kammeret.",
    "aliases": [
      "Hermione Granger",
      "Hermione Granger"
    ],
    "type": "fact"
  },
  {
    "id": "q311",
    "book": 7,
    "level": "Svær",
    "question": "Et spørgsmål til din Potter-hukommelse: Hvilken sandhed om Snape afsløres gennem hans erindringer?",
    "answerDa": "Han elskede Lily Potter og beskyttede Harry i hemmelighed",
    "answerEn": "He loved Lily Potter and secretly protected Harry",
    "correctKey": "right",
    "why": "Snapes kærlighed til Lily er en central grund til, at han hjælper med at beskytte Harry.",
    "aliases": [
      "Han elskede Lily Potter og beskyttede Harry i hemmelighed",
      "He loved Lily Potter and secretly protected Harry"
    ],
    "type": "fact"
  },
  {
    "id": "q312",
    "book": 7,
    "level": "Svær",
    "question": "Et spørgsmål til din Potter-hukommelse: Hvem ødelægger Nagini under slaget om Hogwarts?",
    "answerDa": "Neville Longbottom",
    "answerEn": "Neville Longbottom",
    "correctKey": "right",
    "why": "Neville trækker Gryffindors sværd fra Sorteringshatten og dræber Nagini.",
    "aliases": [
      "Neville Longbottom",
      "Neville Longbottom"
    ],
    "type": "fact"
  },
  {
    "id": "q313",
    "book": 1,
    "level": "Svær",
    "question": "Hvis du skulle forklare denne detalje fra bøgerne: Hvad hedder den kæmpe, der fortæller Harry, at han er en troldmand? Hvad ville du svare?",
    "answerDa": "Rubeus Hagrid",
    "answerEn": "Rubeus Hagrid",
    "correctKey": "right",
    "why": "Hagrid opsøger Harry på hans ellevte fødselsdag og fortæller ham om den magiske verden.",
    "aliases": [
      "Rubeus Hagrid",
      "Rubeus Hagrid"
    ],
    "type": "fact"
  },
  {
    "id": "q314",
    "book": 1,
    "level": "Let",
    "question": "Hvis du skulle forklare denne detalje fra bøgerne: Hvilket hus bliver Harry sorteret ind i? Hvad ville du svare?",
    "answerDa": "Gryffindor",
    "answerEn": "Gryffindor",
    "correctKey": "right",
    "why": "Sorteringshatten placerer Harry i Gryffindor, selv om den overvejer Slytherin.",
    "aliases": [
      "Gryffindor",
      "Gryffindor"
    ],
    "type": "fact"
  },
  {
    "id": "q315",
    "book": 1,
    "level": "Let",
    "question": "Hvis du skulle forklare denne detalje fra bøgerne: Hvad hedder den magiske sport, som Harry spiller på et kosteskaft? Hvad ville du svare?",
    "answerDa": "Quidditch",
    "answerEn": "Quidditch",
    "correctKey": "right",
    "why": "Quidditch spilles på flyvende koste med flere bolde og mål.",
    "aliases": [
      "Quidditch",
      "Quidditch"
    ],
    "type": "fact"
  },
  {
    "id": "q316",
    "book": 1,
    "level": "Mellem",
    "question": "Hvis du skulle forklare denne detalje fra bøgerne: Hvilken position spiller Harry på Gryffindors Quidditch-hold? Hvad ville du svare?",
    "answerDa": "Søger",
    "answerEn": "Seeker",
    "correctKey": "right",
    "why": "En søger skal fange Det Gyldne Lyn; det er Harrys position.",
    "aliases": [
      "Søger",
      "Seeker"
    ],
    "type": "fact"
  },
  {
    "id": "q317",
    "book": 1,
    "level": "Mellem",
    "question": "Hvis du skulle forklare denne detalje fra bøgerne: Hvad beskytter Flamel og Dumbledore ved hjælp af flere magiske forhindringer? Hvad ville du svare?",
    "answerDa": "De Vises Sten",
    "answerEn": "The Philosopher’s Stone",
    "correctKey": "right",
    "why": "Nicolas Flamels sten kan blandt andet fremstille livseliksir og er målet for Voldemorts plan.",
    "aliases": [
      "De Vises Sten",
      "The Philosopher’s Stone"
    ],
    "type": "fact"
  },
  {
    "id": "q318",
    "book": 1,
    "level": "Svær",
    "question": "Hvis du skulle forklare denne detalje fra bøgerne: Hvilket magisk væsen møder Harry, Ron og Hermione på et pigetoilet? Hvad ville du svare?",
    "answerDa": "En bjergtrold",
    "answerEn": "A mountain troll",
    "correctKey": "right",
    "why": "Quirrell slipper en bjergtrold løs på Hogwarts under Halloween.",
    "aliases": [
      "Et bjergtrold",
      "A mountain troll"
    ],
    "type": "fact"
  },
  {
    "id": "q319",
    "book": 1,
    "level": "Svær",
    "question": "Hvis du skulle forklare denne detalje fra bøgerne: Hvilken professor underviser i eliksirer i den første bog? Hvad ville du svare?",
    "answerDa": "Severus Snape",
    "answerEn": "Severus Snape",
    "correctKey": "right",
    "why": "Snape er eliksirprofessor og leder af Slytherin-huset.",
    "aliases": [
      "Severus Snape",
      "Severus Snape"
    ],
    "type": "fact"
  },
  {
    "id": "q320",
    "book": 1,
    "level": "Svær",
    "question": "Hvis du skulle forklare denne detalje fra bøgerne: Hvem viser sig at være den egentlige modstander bag forsøget på at stjæle stenen? Hvad ville du svare?",
    "answerDa": "Quirinus Quirrell",
    "answerEn": "Quirinus Quirrell",
    "correctKey": "right",
    "why": "Quirrell hjælper Voldemort og forsøger at få fat i stenen.",
    "aliases": [
      "Quirinus Quirrell",
      "Quirinus Quirrell"
    ],
    "type": "fact"
  },
  {
    "id": "q321",
    "book": 1,
    "level": "Svær",
    "question": "Hvis du skulle forklare denne detalje fra bøgerne: Hvilken udfordring kræver, at Harry spiller et menneskestort skakspil? Hvad ville du svare?",
    "answerDa": "Troldmandsskak",
    "answerEn": "Wizard chess",
    "correctKey": "right",
    "why": "Ron leder skakspillet og ofrer sig selv, så Harry kan komme videre.",
    "aliases": [
      "Troldmandsskak",
      "Wizard chess"
    ],
    "type": "fact"
  },
  {
    "id": "q322",
    "book": 1,
    "level": "Svær",
    "question": "Hvis du skulle forklare denne detalje fra bøgerne: Hvem tilhørte usynlighedskappen, før Harry fik den i julegave? Hvad ville du svare?",
    "answerDa": "James Potter, Harrys far",
    "answerEn": "James Potter, Harry’s father",
    "correctKey": "right",
    "why": "Kappen blev givet videre fra James Potter; Dumbledore havde den til låns.",
    "aliases": [
      "James Potter, Harrys far",
      "It belonged to his father, James Potter"
    ],
    "type": "fact"
  },
  {
    "id": "q323",
    "book": 2,
    "level": "Svær",
    "question": "Hvis du skulle forklare denne detalje fra bøgerne: Hvilken genstand skriver Harrys navn og oplevelser ind i, uden at vide hvem der svarer? Hvad ville du svare?",
    "answerDa": "En dagbog",
    "answerEn": "A diary",
    "correctKey": "right",
    "why": "Tom Riddles dagbog svarer Harry og viser sig at være en horcrux.",
    "aliases": [
      "En dagbog",
      "A diary"
    ],
    "type": "fact"
  },
  {
    "id": "q324",
    "book": 2,
    "level": "Let",
    "question": "Hvis du skulle forklare denne detalje fra bøgerne: Hvilket væsen terroriserer eleverne ved at forstene dem? Hvad ville du svare?",
    "answerDa": "En basilisk",
    "answerEn": "A basilisk",
    "correctKey": "right",
    "why": "Basilisken bevæger sig gennem rørene og forstener dem, der ser dens blik indirekte.",
    "aliases": [
      "En basilisk",
      "A basilisk"
    ],
    "type": "fact"
  },
  {
    "id": "q325",
    "book": 2,
    "level": "Let",
    "question": "Hvis du skulle forklare denne detalje fra bøgerne: Hvem er husalfen, der forsøger at holde Harry væk fra Hogwarts? Hvad ville du svare?",
    "answerDa": "Dobby",
    "answerEn": "Dobby",
    "correctKey": "right",
    "why": "Dobby forsøger at advare Harry om faren i Hemmelighedernes Kammer.",
    "aliases": [
      "Dobby",
      "Dobby"
    ],
    "type": "fact"
  },
  {
    "id": "q326",
    "book": 2,
    "level": "Mellem",
    "question": "Hvis du skulle forklare denne detalje fra bøgerne: Hvordan kommer Harry og Ron til Hogwarts, efter at Dobby forhindrer dem i at komme gennem barrieren på perron 9¾? Hvad ville du svare?",
    "answerDa": "I Arthurs fortryllede Ford Anglia",
    "answerEn": "In Arthur’s enchanted Ford Anglia",
    "correctKey": "right",
    "why": "De flyver i den fortryllede bil, som ender med at kaste dem af ved Slagpoplen.",
    "aliases": [
      "I Arthurs fortryllede Ford Anglia",
      "They fly in Arthur’s enchanted Ford Anglia"
    ],
    "type": "fact"
  },
  {
    "id": "q327",
    "book": 2,
    "level": "Mellem",
    "question": "Hvis du skulle forklare denne detalje fra bøgerne: Hvilken lærer er berømt for sine bøger om sine egne bedrifter? Hvad ville du svare?",
    "answerDa": "Gilderoy Lockhart",
    "answerEn": "Gilderoy Lockhart",
    "correctKey": "right",
    "why": "Lockhart er den nye lærer i Forsvar mod Mørkets Kræfter og en selvglad forfatter.",
    "aliases": [
      "Gilderoy Lockhart",
      "Gilderoy Lockhart"
    ],
    "type": "fact"
  },
  {
    "id": "q328",
    "book": 2,
    "level": "Svær",
    "question": "Hvis du skulle forklare denne detalje fra bøgerne: Hvem viser sig at være arvingen efter Slytherin? Hvad ville du svare?",
    "answerDa": "Tom Riddle / Lord Voldemort",
    "answerEn": "Tom Riddle / Lord Voldemort",
    "correctKey": "right",
    "why": "Tom Riddle, den unge Voldemort, åbner Hemmelighedernes Kammer gennem dagbogen.",
    "aliases": [
      "Tom Riddle",
      "Tom Riddle / Lord Voldemort"
    ],
    "type": "fact"
  },
  {
    "id": "q329",
    "book": 2,
    "level": "Svær",
    "question": "Hvis du skulle forklare denne detalje fra bøgerne: Hvilken fugl kommer Harry til undsætning i Kammeret? Hvad ville du svare?",
    "answerDa": "Fawkes, Dumbledores føniks",
    "answerEn": "Fawkes, Dumbledore’s phoenix",
    "correctKey": "right",
    "why": "Fawkes bringer Sorteringshatten og heler Harrys sår med sine tårer.",
    "aliases": [
      "Fawkes, Dumbledores føniks",
      "Fawkes, Dumbledore’s phoenix"
    ],
    "type": "fact"
  },
  {
    "id": "q330",
    "book": 2,
    "level": "Svær",
    "question": "Hvis du skulle forklare denne detalje fra bøgerne: Hvilken plante bruges til at lave en modgift, der kan genoplive elever, som er blevet forstenet? Hvad ville du svare?",
    "answerDa": "Mandragora",
    "answerEn": "Mandrake",
    "correctKey": "right",
    "why": "Mandragoraens skrig kan være dødelige, men dens modnede rod bruges til at genoplive de forstenede.",
    "aliases": [
      "Mandragora",
      "Mandrake"
    ],
    "type": "fact"
  },
  {
    "id": "q331",
    "book": 2,
    "level": "Svær",
    "question": "Hvis du skulle forklare denne detalje fra bøgerne: Hvem redder Ginny fra Tom Riddle i Hemmelighedernes Kammer? Hvad ville du svare?",
    "answerDa": "Harry Potter",
    "answerEn": "Harry Potter",
    "correctKey": "right",
    "why": "Harry ødelægger dagbogen med en basilisk-tand og redder Ginny.",
    "aliases": [
      "Harry Potter",
      "Harry Potter"
    ],
    "type": "fact"
  },
  {
    "id": "q332",
    "book": 2,
    "level": "Svær",
    "question": "Hvis du skulle forklare denne detalje fra bøgerne: Hvilken genstand ødelægger Tom Riddles dagbog? Hvad ville du svare?",
    "answerDa": "En basilisk-tand",
    "answerEn": "A basilisk fang",
    "correctKey": "right",
    "why": "Harry stikker dagbogen med en basilisk-tand, som ødelægger horcruxen.",
    "aliases": [
      "En basilisk-tand",
      "A basilisk fang"
    ],
    "type": "fact"
  },
  {
    "id": "q333",
    "book": 3,
    "level": "Svær",
    "question": "Hvis du skulle forklare denne detalje fra bøgerne: Hvem flygter fra Azkaban og bliver jagtet gennem det meste af bogen? Hvad ville du svare?",
    "answerDa": "Sirius Black",
    "answerEn": "Sirius Black",
    "correctKey": "right",
    "why": "Sirius Black er flygtet fra Azkaban, og alle tror først, at han vil finde Harry.",
    "aliases": [
      "Sirius Black",
      "Sirius Black"
    ],
    "type": "fact"
  },
  {
    "id": "q334",
    "book": 3,
    "level": "Let",
    "question": "Hvis du skulle forklare denne detalje fra bøgerne: Hvilke væsner patruljerer omkring Hogwarts og kan suge håb og glæde ud af mennesker? Hvad ville du svare?",
    "answerDa": "Dementorer",
    "answerEn": "Dementors",
    "correctKey": "right",
    "why": "Dementorerne arbejder for Ministeriet og påvirker Harry særligt voldsomt.",
    "aliases": [
      "Dementorer",
      "Dementors"
    ],
    "type": "fact"
  },
  {
    "id": "q335",
    "book": 3,
    "level": "Mellem",
    "question": "Hvis du skulle forklare denne detalje fra bøgerne: Hvem underviser Harry i patronusbesværgelsen? Hvad ville du svare?",
    "answerDa": "Remus Lupin",
    "answerEn": "Remus Lupin",
    "correctKey": "right",
    "why": "Lupin hjælper Harry med at fremmane en patronus for at beskytte sig mod dementorer.",
    "aliases": [
      "Remus Lupin",
      "Remus Lupin"
    ],
    "type": "fact"
  },
  {
    "id": "q336",
    "book": 3,
    "level": "Mellem",
    "question": "Hvis du skulle forklare denne detalje fra bøgerne: Hvad er Remus Lupins hemmelighed? Hvad ville du svare?",
    "answerDa": "Han er varulv",
    "answerEn": "He is a werewolf",
    "correctKey": "right",
    "why": "Lupin er varulv; hans venner lærte engang at blive animaguser for at hjælpe ham.",
    "aliases": [
      "Han er varulv",
      "He is a werewolf"
    ],
    "type": "fact"
  },
  {
    "id": "q337",
    "book": 3,
    "level": "Mellem",
    "question": "Hvis du skulle forklare denne detalje fra bøgerne: Hvilket dyr kan Peter Pettigrew forvandle sig til? Hvad ville du svare?",
    "answerDa": "En rotte",
    "answerEn": "A rat",
    "correctKey": "right",
    "why": "Pettigrew er animagus i form af en rotte og har levet som Scabbers.",
    "aliases": [
      "En rotte",
      "A rat"
    ],
    "type": "fact"
  },
  {
    "id": "q338",
    "book": 3,
    "level": "Svær",
    "question": "Hvis du skulle forklare denne detalje fra bøgerne: Hvilket magisk væsen får Hagrid Harry til at møde i sin første lektion med magiske væsner? Hvad ville du svare?",
    "answerDa": "En hippogriff",
    "answerEn": "A hippogriff",
    "correctKey": "right",
    "why": "Hippogriffen Buckbeak er med i Hagrids undervisning og reagerer på respekt.",
    "aliases": [
      "En hippogriff",
      "A hippogriff"
    ],
    "type": "fact"
  },
  {
    "id": "q339",
    "book": 3,
    "level": "Svær",
    "question": "Hvis du skulle forklare denne detalje fra bøgerne: Hvem skabte sammen med sine venner Røverkortet? Hvad ville du svare?",
    "answerDa": "James Potter, Sirius Black, Remus Lupin og Peter Pettigrew",
    "answerEn": "James Potter, Sirius Black, Remus Lupin and Peter Pettigrew",
    "correctKey": "right",
    "why": "De fire venner kaldte sig Moony, Wormtail, Padfoot og Prongs.",
    "aliases": [
      "James Potter, Sirius Black, Remus Lupin og Peter Pettigrew",
      "James Potter, Sirius Black, Remus Lupin and Peter Pettigrew"
    ],
    "type": "fact"
  },
  {
    "id": "q340",
    "book": 3,
    "level": "Svær",
    "question": "Hvis du skulle forklare denne detalje fra bøgerne: Hvilket dyr er James Potters animagus-form? Hvad ville du svare?",
    "answerDa": "En hjort",
    "answerEn": "A stag",
    "correctKey": "right",
    "why": "James kunne forvandle sig til en hjort, hvilket gav ham øgenavnet Prongs.",
    "aliases": [
      "En hjort",
      "A stag"
    ],
    "type": "fact"
  },
  {
    "id": "q341",
    "book": 3,
    "level": "Svær",
    "question": "Hvis du skulle forklare denne detalje fra bøgerne: Hvilken genstand bruger Harry og Hermione til at rejse tilbage i tiden? Hvad ville du svare?",
    "answerDa": "En tidsvender",
    "answerEn": "A Time-Turner",
    "correctKey": "right",
    "why": "Hermione har fået en tidsvender fra McGonagall for at kunne følge flere fag.",
    "aliases": [
      "En tidsvender",
      "A Time-Turner"
    ],
    "type": "fact"
  },
  {
    "id": "q342",
    "book": 3,
    "level": "Svær",
    "question": "Hvis du skulle forklare denne detalje fra bøgerne: Hvem var den hemmelige hemmelighedsvogter for Potter-familiens skjulested? Hvad ville du svare?",
    "answerDa": "Peter Pettigrew",
    "answerEn": "Peter Pettigrew",
    "correctKey": "right",
    "why": "Sirius foreslog Pettigrew som hemmelighedsvogter, men Pettigrew forrådte Potter-familien.",
    "aliases": [
      "Peter Pettigrew",
      "Peter Pettigrew"
    ],
    "type": "fact"
  },
  {
    "id": "q343",
    "book": 4,
    "level": "Svær",
    "question": "Hvis du skulle forklare denne detalje fra bøgerne: Hvilken international konkurrence afholdes på Hogwarts? Hvad ville du svare?",
    "answerDa": "Tretroldmandsturneringen",
    "answerEn": "The Triwizard Tournament",
    "correctKey": "right",
    "why": "Tretroldmandsturneringen samler tre skoler og har tre farlige opgaver.",
    "aliases": [
      "Tretroldmandsturneringen",
      "Triwizard Tournament"
    ],
    "type": "fact"
  },
  {
    "id": "q344",
    "book": 4,
    "level": "Let",
    "question": "Hvis du skulle forklare denne detalje fra bøgerne: Hvilke to andre skoler sender elever til turneringen sammen med Hogwarts? Hvad ville du svare?",
    "answerDa": "Beauxbatons og Durmstrang",
    "answerEn": "Beauxbatons and Durmstrang",
    "correctKey": "right",
    "why": "Beauxbatons og Durmstrang deltager sammen med Hogwarts.",
    "aliases": [
      "Beauxbatons og Durmstrang",
      "Beauxbatons and Durmstrang"
    ],
    "type": "fact"
  },
  {
    "id": "q345",
    "book": 4,
    "level": "Mellem",
    "question": "Hvis du skulle forklare denne detalje fra bøgerne: Hvem bliver udvalgt som Hogwarts’ officielle deltager i turneringen? Hvad ville du svare?",
    "answerDa": "Cedric Diggory",
    "answerEn": "Cedric Diggory",
    "correctKey": "right",
    "why": "Ildpokalen vælger Cedric som Hogwarts’ deltager; Harry bliver valgt som ekstra deltager.",
    "aliases": [
      "Cedric Diggory",
      "Cedric Diggory"
    ],
    "type": "fact"
  },
  {
    "id": "q346",
    "book": 4,
    "level": "Mellem",
    "question": "Hvis du skulle forklare denne detalje fra bøgerne: Hvilken drage møder Harry i den første opgave? Hvad ville du svare?",
    "answerDa": "En ungarsk takhale",
    "answerEn": "A Hungarian Horntail",
    "correctKey": "right",
    "why": "Harry skal hente et gyldent æg fra en ungarsk takhale.",
    "aliases": [
      "En ungarsk takhale",
      "A Hungarian Horntail"
    ],
    "type": "fact"
  },
  {
    "id": "q347",
    "book": 4,
    "level": "Mellem",
    "question": "Hvis du skulle forklare denne detalje fra bøgerne: Hvem er forklædt som Alastor “Skrækøje” Moody det meste af skoleåret? Hvad ville du svare?",
    "answerDa": "Barty Crouch Jr.",
    "answerEn": "Barty Crouch Jr.",
    "correctKey": "right",
    "why": "Barty Crouch Jr. bruger Polyjuice-eliksir og manipulerer turneringen for at føre Harry til Voldemort.",
    "aliases": [
      "Barty Crouch Jr.",
      "Barty Crouch Jr."
    ],
    "type": "fact"
  },
  {
    "id": "q348",
    "book": 4,
    "level": "Svær",
    "question": "Hvis du skulle forklare denne detalje fra bøgerne: Hvad skal deltagerne hente fra søen i den anden opgave? Hvad ville du svare?",
    "answerDa": "En person, der betyder meget for dem",
    "answerEn": "A person who matters to them",
    "correctKey": "right",
    "why": "Hver deltager skal redde den person, som søens væsener har taget som gidsel.",
    "aliases": [
      "En person, der betyder meget for dem",
      "A person who matters to them"
    ],
    "type": "fact"
  },
  {
    "id": "q349",
    "book": 4,
    "level": "Svær",
    "question": "Hvis du skulle forklare denne detalje fra bøgerne: Hvilken besværgelse bruger Harry til at tilkalde sin kost under drageopgaven? Hvad ville du svare?",
    "answerDa": "Accio",
    "answerEn": "Accio",
    "correctKey": "right",
    "why": "Accio er en tilkaldelsesbesværgelse, og Harry bruger den på sin Firebolt.",
    "aliases": [
      "Accio",
      "Accio"
    ],
    "type": "fact"
  },
  {
    "id": "q350",
    "book": 4,
    "level": "Svær",
    "question": "Hvis du skulle forklare denne detalje fra bøgerne: Hvilken genstand transporterer Harry og Cedric til kirkegården? Hvad ville du svare?",
    "answerDa": "En portnøgle",
    "answerEn": "A Portkey",
    "correctKey": "right",
    "why": "Tretroldmandspokalen er blevet fortryllet til en portnøgle.",
    "aliases": [
      "En portnøgle",
      "A Portkey"
    ],
    "type": "fact"
  },
  {
    "id": "q351",
    "book": 4,
    "level": "Svær",
    "question": "Hvis du skulle forklare denne detalje fra bøgerne: Hvem dør på kirkegården, da Harry og Cedric ankommer? Hvad ville du svare?",
    "answerDa": "Cedric Diggory",
    "answerEn": "Cedric Diggory",
    "correctKey": "right",
    "why": "Peter Pettigrew dræber Cedric efter Voldemorts ordre.",
    "aliases": [
      "Cedric Diggory",
      "Cedric Diggory"
    ],
    "type": "fact"
  },
  {
    "id": "q352",
    "book": 4,
    "level": "Svær",
    "question": "Hvis du skulle forklare denne detalje fra bøgerne: Hvad har Harrys og Voldemorts tryllestave til fælles? Hvad ville du svare?",
    "answerDa": "De har fjer fra den samme føniks",
    "answerEn": "They contain feathers from the same phoenix",
    "correctKey": "right",
    "why": "Begge tryllestave har en fjer fra Fawkes, Dumbledores føniks.",
    "aliases": [
      "De har fjer fra den samme føniks",
      "They contain feathers from the same phoenix"
    ],
    "type": "fact"
  },
  {
    "id": "q353",
    "book": 5,
    "level": "Svær",
    "question": "Hvis du skulle forklare denne detalje fra bøgerne: Hvilken organisation forsøger at bekæmpe Voldemort, men som Ministeriet nægter at anerkende? Hvad ville du svare?",
    "answerDa": "Fønixordenen",
    "answerEn": "The Order of the Phoenix",
    "correctKey": "right",
    "why": "Fønixordenen er Dumbledores hemmelige modstandsgruppe.",
    "aliases": [
      "Fønixordenen",
      "Order of the Phoenix"
    ],
    "type": "fact"
  },
  {
    "id": "q354",
    "book": 5,
    "level": "Let",
    "question": "Hvis du skulle forklare denne detalje fra bøgerne: Hvem bliver ansat som Hogwarts’ nye lærer i Forsvar mod Mørkets Kræfter og indfører strenge regler? Hvad ville du svare?",
    "answerDa": "Dolores Umbridge",
    "answerEn": "Dolores Umbridge",
    "correctKey": "right",
    "why": "Umbridge bliver Ministeriets udsending og begrænser praktisk undervisning i forsvarsmagi.",
    "aliases": [
      "Dolores Umbridge",
      "Dolores Umbridge"
    ],
    "type": "fact"
  },
  {
    "id": "q355",
    "book": 5,
    "level": "Mellem",
    "question": "Hvis du skulle forklare denne detalje fra bøgerne: Hvad kalder Harry, Ron og Hermione deres hemmelige gruppe, hvor de øver forsvarsmagi? Hvad ville du svare?",
    "answerDa": "Dumbledores Armé",
    "answerEn": "Dumbledore’s Army",
    "correctKey": "right",
    "why": "Gruppen kaldes Dumbledores Armé, ofte forkortet DA.",
    "aliases": [
      "Dumbledores Armé",
      "Dumbledore’s Army"
    ],
    "type": "fact"
  },
  {
    "id": "q356",
    "book": 5,
    "level": "Mellem",
    "question": "Hvis du skulle forklare denne detalje fra bøgerne: Hvilken familie bor Harry hos, når han ikke er på Hogwarts? Hvad ville du svare?",
    "answerDa": "Dursley-familien",
    "answerEn": "The Dursley family",
    "correctKey": "right",
    "why": "Harry bor hos sin tante Petunia, onkel Vernon og fætter Dudley.",
    "aliases": [
      "Dursley-familien",
      "The Dursleys"
    ],
    "type": "fact"
  },
  {
    "id": "q357",
    "book": 5,
    "level": "Mellem",
    "question": "Hvis du skulle forklare denne detalje fra bøgerne: Hvilket væsen angriber Harry og Dudley i en tunnel i Little Whinging? Hvad ville du svare?",
    "answerDa": "Dementorer",
    "answerEn": "Dementors",
    "correctKey": "right",
    "why": "Dementorer angriber dem, og Harry bruger en patronus for at beskytte dem.",
    "aliases": [
      "Dementorer",
      "Dementors"
    ],
    "type": "fact"
  },
  {
    "id": "q358",
    "book": 5,
    "level": "Svær",
    "question": "Hvis du skulle forklare denne detalje fra bøgerne: Hvilken afdeling i Ministeriet for Magi bliver central i bogens afslutning? Hvad ville du svare?",
    "answerDa": "Mysteriedepartementet",
    "answerEn": "The Department of Mysteries",
    "correctKey": "right",
    "why": "Harry bliver lokket til Mysteriedepartementet af et syn, der viser sig at være manipuleret.",
    "aliases": [
      "Mysteriedepartementet",
      "Department of Mysteries"
    ],
    "type": "fact"
  },
  {
    "id": "q359",
    "book": 5,
    "level": "Svær",
    "question": "Hvis du skulle forklare denne detalje fra bøgerne: Hvem mister Harry under kampen i Ministeriet? Hvad ville du svare?",
    "answerDa": "Sirius Black",
    "answerEn": "Sirius Black",
    "correctKey": "right",
    "why": "Sirius falder gennem sløret i Dødskammeret efter kampen med Bellatrix.",
    "aliases": [
      "Sirius Black",
      "Sirius Black"
    ],
    "type": "fact"
  },
  {
    "id": "q360",
    "book": 5,
    "level": "Svær",
    "question": "Hvis du skulle forklare denne detalje fra bøgerne: Hvem er den eneste elev, der kan se thestralerne ved begyndelsen af skoleåret sammen med Harry? Hvad ville du svare?",
    "answerDa": "Luna Lovegood",
    "answerEn": "Luna Lovegood",
    "correctKey": "right",
    "why": "Luna kan se thestralerne, fordi hun har været vidne til døden.",
    "aliases": [
      "Luna Lovegood",
      "Luna Lovegood"
    ],
    "type": "fact"
  },
  {
    "id": "q361",
    "book": 5,
    "level": "Svær",
    "question": "Hvis du skulle forklare denne detalje fra bøgerne: Hvilken profeti forsøger Voldemort at få fat i? Hvad ville du svare?",
    "answerDa": "Profetien om Harry og Voldemort",
    "answerEn": "The prophecy about Harry and Voldemort",
    "correctKey": "right",
    "why": "Profetien handler om et barn, der kan besejre Voldemort, og forbindelsen mellem ham og Harry.",
    "aliases": [
      "Profetien om Harry og Voldemort",
      "The prophecy about Harry and Voldemort"
    ],
    "type": "fact"
  },
  {
    "id": "q362",
    "book": 5,
    "level": "Svær",
    "question": "Hvis du skulle forklare denne detalje fra bøgerne: Hvem fortæller Harry, at han ikke skal føle sig skyldig over at have stærke følelser? Hvad ville du svare?",
    "answerDa": "Albus Dumbledore",
    "answerEn": "Albus Dumbledore",
    "correctKey": "right",
    "why": "Dumbledore forklarer Harry, at smerte og kærlighed er en del af det at være menneske.",
    "aliases": [
      "Albus Dumbledore",
      "Albus Dumbledore"
    ],
    "type": "fact"
  },
  {
    "id": "q363",
    "book": 6,
    "level": "Svær",
    "question": "Hvis du skulle forklare denne detalje fra bøgerne: Hvilken bog bruger Harry i eliksirundervisningen, som er mærket med Halvblodsprinsens navn? Hvad ville du svare?",
    "answerDa": "Halvblodsprinsens eliksirbog",
    "answerEn": "The Half-Blood Prince’s Potions textbook",
    "correctKey": "right",
    "why": "Harry bruger en gammel eliksirbog med noter og besværgelser skrevet af Halvblodsprinsen.",
    "aliases": [
      "Halvblodsprinsens bog",
      "The Half-Blood Prince’s book"
    ],
    "type": "fact"
  },
  {
    "id": "q364",
    "book": 6,
    "level": "Let",
    "question": "Hvis du skulle forklare denne detalje fra bøgerne: Hvilken professor hjælper Harry og Dumbledore med at undersøge Voldemorts fortid? Hvad ville du svare?",
    "answerDa": "Horace Slughorn",
    "answerEn": "Horace Slughorn",
    "correctKey": "right",
    "why": "Slughorn har kendt Tom Riddle som elev og gemmer på en vigtig erindring.",
    "aliases": [
      "Horace Slughorn",
      "Horace Slughorn"
    ],
    "type": "fact"
  },
  {
    "id": "q365",
    "book": 6,
    "level": "Mellem",
    "question": "Hvis du skulle forklare denne detalje fra bøgerne: Hvilken type magisk genstand er en horcrux? Hvad ville du svare?",
    "answerDa": "En genstand, der indeholder en del af en sjæl",
    "answerEn": "An object that contains a piece of a soul",
    "correctKey": "right",
    "why": "Voldemort deler sin sjæl og skjuler dele i genstande for at forsøge at undgå døden.",
    "aliases": [
      "En genstand, der indeholder en del af en sjæl",
      "An object that contains a piece of a soul"
    ],
    "type": "fact"
  },
  {
    "id": "q366",
    "book": 6,
    "level": "Mellem",
    "question": "Hvis du skulle forklare denne detalje fra bøgerne: Hvem er den elev, der bliver alvorligt syg efter at have rørt ved en forgiftet halskæde? Hvad ville du svare?",
    "answerDa": "Katie Bell",
    "answerEn": "Katie Bell",
    "correctKey": "right",
    "why": "Katie Bell bliver forbandet af en halskæde, der var tiltænkt Dumbledore.",
    "aliases": [
      "Katie Bell",
      "Katie Bell"
    ],
    "type": "fact"
  },
  {
    "id": "q367",
    "book": 6,
    "level": "Mellem",
    "question": "Hvis du skulle forklare denne detalje fra bøgerne: Hvilket emne gennemgår Dumbledore med Harry i deres private lektioner? Hvad ville du svare?",
    "answerDa": "Voldemorts fortid og hans horcruxer",
    "answerEn": "Voldemort’s past and his Horcruxes",
    "correctKey": "right",
    "why": "Dumbledore viser Harry erindringer, der forklarer Tom Riddles historie og hans søgen efter udødelighed.",
    "aliases": [
      "Voldemorts fortid og hans horcruxer",
      "Voldemort’s past and Horcruxes"
    ],
    "type": "fact"
  },
  {
    "id": "q368",
    "book": 6,
    "level": "Svær",
    "question": "Hvis du skulle forklare denne detalje fra bøgerne: Hvad sker der med Ron, da han drikker den forgiftede mjød? Hvad ville du svare?",
    "answerDa": "Han bliver forgiftet efter at have drukket mjød, der var tiltænkt Dumbledore",
    "answerEn": "He is poisoned after drinking mead intended for Dumbledore",
    "correctKey": "right",
    "why": "Ron drikker forgiftet mjød, efter at Slughorns flaske er blevet forhekset; Harry redder ham.",
    "aliases": [
      "Han bliver forgiftet efter at have drukket mjød, der var tiltænkt Dumbledore",
      "He is poisoned after drinking a drink meant for someone else"
    ],
    "type": "fact"
  },
  {
    "id": "q369",
    "book": 6,
    "level": "Svær",
    "question": "Hvis du skulle forklare denne detalje fra bøgerne: Hvilken horcrux mener Dumbledore, at de finder i en grotte? Hvad ville du svare?",
    "answerDa": "En medaljon",
    "answerEn": "A locket",
    "correctKey": "right",
    "why": "De finder en medaljon, men den viser sig senere at være en falsk horcrux.",
    "aliases": [
      "En medaljon",
      "A locket"
    ],
    "type": "fact"
  },
  {
    "id": "q370",
    "book": 6,
    "level": "Svær",
    "question": "Hvis du skulle forklare denne detalje fra bøgerne: Hvilken besværgelse bruger Harry mod Draco i badeværelset uden at kende dens virkning? Hvad ville du svare?",
    "answerDa": "Sectumsempra",
    "answerEn": "Sectumsempra",
    "correctKey": "right",
    "why": "Sectumsempra skærer alvorlige sår i Draco; Harry kendte kun noten “mod fjender”.",
    "aliases": [
      "Sectumsempra",
      "Sectumsempra"
    ],
    "type": "fact"
  },
  {
    "id": "q371",
    "book": 6,
    "level": "Svær",
    "question": "Hvis du skulle forklare denne detalje fra bøgerne: Hvem dræber Dumbledore på toppen af Astronomitårnet? Hvad ville du svare?",
    "answerDa": "Severus Snape",
    "answerEn": "Severus Snape",
    "correctKey": "right",
    "why": "Snape dræber Dumbledore efter en aftale mellem dem, som først forklares senere.",
    "aliases": [
      "Severus Snape",
      "Severus Snape"
    ],
    "type": "fact"
  },
  {
    "id": "q372",
    "book": 6,
    "level": "Svær",
    "question": "Hvis du skulle forklare denne detalje fra bøgerne: Hvad viser sig at være forkert ved medaljonen, Harry og Dumbledore finder? Hvad ville du svare?",
    "answerDa": "En falsk medaljon, som R.A.B. efterlod",
    "answerEn": "A fake locket left behind by R.A.B.",
    "correctKey": "right",
    "why": "Et brev underskrevet R.A.B. forklarer, at den rigtige medaljon allerede er blevet taget.",
    "aliases": [
      "En falsk medaljon, som R.A.B. efterlod",
      "It is a fake locket left by R.A.B."
    ],
    "type": "fact"
  },
  {
    "id": "q373",
    "book": 7,
    "level": "Svær",
    "question": "Hvis du skulle forklare denne detalje fra bøgerne: Hvilke tre genstande er Dødsregalierne? Hvad ville du svare?",
    "answerDa": "Oldstaven, Opstandelsesstenen og Usynlighedskappen",
    "answerEn": "The Elder Wand, the Resurrection Stone and the Invisibility Cloak",
    "correctKey": "right",
    "why": "De tre legendariske genstande er Oldstaven, Opstandelsesstenen og Usynlighedskappen.",
    "aliases": [
      "Oldstaven, Opstandelsesstenen og Usynlighedskappen",
      "The Elder Wand, the Resurrection Stone and the Invisibility Cloak"
    ],
    "type": "fact"
  },
  {
    "id": "q374",
    "book": 7,
    "level": "Let",
    "question": "Hvis du skulle forklare denne detalje fra bøgerne: Hvem er R.A.B., som efterlader en besked i den falske medaljon? Hvad ville du svare?",
    "answerDa": "Regulus Arcturus Black",
    "answerEn": "Regulus Arcturus Black",
    "correctKey": "right",
    "why": "Regulus Arcturus Black var Sirius’ bror og en tidligere dødsæder, som vendte sig mod Voldemort.",
    "aliases": [
      "Regulus Arcturus Black",
      "Regulus Arcturus Black"
    ],
    "type": "fact"
  },
  {
    "id": "q375",
    "book": 7,
    "level": "Mellem",
    "question": "Hvis du skulle forklare denne detalje fra bøgerne: Hvilken genstand efterlod Dumbledore til Harry, og som indeholder Opstandelsesstenen? Hvad ville du svare?",
    "answerDa": "Den Snitch, som Dumbledore efterlod til Harry",
    "answerEn": "The Snitch that Dumbledore left for Harry",
    "correctKey": "right",
    "why": "Dumbledore efterlod Harry en Snitch, som åbner sig og afslører Opstandelsesstenen. Gryffindors sværd ligger i søen.",
    "aliases": [
      "Den Snitch, som Dumbledore efterlod til Harry",
      "The Snitch that Dumbledore left for Harry"
    ],
    "type": "fact"
  },
  {
    "id": "q376",
    "book": 7,
    "level": "Mellem",
    "question": "Hvis du skulle forklare denne detalje fra bøgerne: Hvilken troldmandsbank bryder trioen ind i? Hvad ville du svare?",
    "answerDa": "Gringotts",
    "answerEn": "Gringotts",
    "correctKey": "right",
    "why": "Harry, Ron og Hermione bryder ind i Gringotts for at hente Hufflepuffs pokal fra Bellatrix’ boks.",
    "aliases": [
      "Gringotts",
      "Gringotts"
    ],
    "type": "fact"
  },
  {
    "id": "q377",
    "book": 7,
    "level": "Mellem",
    "question": "Hvis du skulle forklare denne detalje fra bøgerne: Hvilket hus’ genstand er en af Voldemorts horcruxer i Gringotts? Hvad ville du svare?",
    "answerDa": "Hufflepuffs pokal",
    "answerEn": "Hufflepuff’s Cup",
    "correctKey": "right",
    "why": "Helga Hufflepuffs pokal bliver en horcrux og opbevares i Bellatrix’ boks.",
    "aliases": [
      "Hufflepuffs pokal",
      "Hufflepuff’s Cup"
    ],
    "type": "fact"
  },
  {
    "id": "q378",
    "book": 7,
    "level": "Svær",
    "question": "Hvis du skulle forklare denne detalje fra bøgerne: Hvem leder Hogwarts, mens trioen er på flugt, og Voldemort har taget magten? Hvad ville du svare?",
    "answerDa": "Severus Snape",
    "answerEn": "Severus Snape",
    "correctKey": "right",
    "why": "Snape er udnævnt til rektor under Voldemorts kontrol, mens Carrow-søskende underviser.",
    "aliases": [
      "Severus Snape",
      "Severus Snape"
    ],
    "type": "fact"
  },
  {
    "id": "q379",
    "book": 7,
    "level": "Svær",
    "question": "Hvilken af disse genstande er ikke en af Voldemorts horcruxer?",
    "answerDa": "Gryffindors sværd",
    "answerEn": "Gryffindor’s Sword",
    "correctKey": "right",
    "why": "Gryffindors sværd er ikke en horcrux; det kan ødelægge horcruxer, fordi det har absorberet basiliskgift.",
    "aliases": [
      "Gryffindors sværd",
      "Gryffindor’s Sword"
    ],
    "type": "fact",
    "options": [
      {
        "da": "Gryffindors sværd",
        "en": "Gryffindor’s Sword"
      },
      {
        "da": "Tom Riddles dagbog / Tom Riddle’s Diary",
        "en": "Tom Riddle’s Diary"
      },
      {
        "da": "Marvolo Gaunts ring / Marvolo Gaunt’s Ring",
        "en": "Marvolo Gaunt’s Ring"
      },
      {
        "da": "Ravenclaws diadem / Ravenclaw’s Diadem",
        "en": "Ravenclaw’s Diadem"
      }
    ],
    "correctIndex": 0
  },
  {
    "id": "q380",
    "book": 7,
    "level": "Svær",
    "question": "Hvis du skulle forklare denne detalje fra bøgerne: Hvem ødelægger Hufflepuffs pokal i Hemmelighedernes Kammer? Hvad ville du svare?",
    "answerDa": "Hermione Granger",
    "answerEn": "Hermione Granger",
    "correctKey": "right",
    "why": "Hermione ødelægger pokalen med en basilisk-tand, som trioen finder i Kammeret.",
    "aliases": [
      "Hermione Granger",
      "Hermione Granger"
    ],
    "type": "fact"
  },
  {
    "id": "q381",
    "book": 7,
    "level": "Svær",
    "question": "Hvis du skulle forklare denne detalje fra bøgerne: Hvilken sandhed om Snape afsløres gennem hans erindringer? Hvad ville du svare?",
    "answerDa": "Han elskede Lily Potter og beskyttede Harry i hemmelighed",
    "answerEn": "He loved Lily Potter and secretly protected Harry",
    "correctKey": "right",
    "why": "Snapes kærlighed til Lily er en central grund til, at han hjælper med at beskytte Harry.",
    "aliases": [
      "Han elskede Lily Potter og beskyttede Harry i hemmelighed",
      "He loved Lily Potter and secretly protected Harry"
    ],
    "type": "fact"
  },
  {
    "id": "q382",
    "book": 7,
    "level": "Svær",
    "question": "Hvis du skulle forklare denne detalje fra bøgerne: Hvem ødelægger Nagini under slaget om Hogwarts? Hvad ville du svare?",
    "answerDa": "Neville Longbottom",
    "answerEn": "Neville Longbottom",
    "correctKey": "right",
    "why": "Neville trækker Gryffindors sværd fra Sorteringshatten og dræber Nagini.",
    "aliases": [
      "Neville Longbottom",
      "Neville Longbottom"
    ],
    "type": "fact"
  },
  {
    "id": "q383",
    "book": 1,
    "level": "Svær",
    "question": "Tænk tilbage på bogens handling og personer. Hvad hedder den kæmpe, der fortæller Harry, at han er en troldmand?",
    "answerDa": "Rubeus Hagrid",
    "answerEn": "Rubeus Hagrid",
    "correctKey": "right",
    "why": "Hagrid opsøger Harry på hans ellevte fødselsdag og fortæller ham om den magiske verden.",
    "aliases": [
      "Rubeus Hagrid",
      "Rubeus Hagrid"
    ],
    "type": "fact"
  },
  {
    "id": "q384",
    "book": 1,
    "level": "Let",
    "question": "Tænk tilbage på bogens handling og personer. Hvilket hus bliver Harry sorteret ind i?",
    "answerDa": "Gryffindor",
    "answerEn": "Gryffindor",
    "correctKey": "right",
    "why": "Sorteringshatten placerer Harry i Gryffindor, selv om den overvejer Slytherin.",
    "aliases": [
      "Gryffindor",
      "Gryffindor"
    ],
    "type": "fact"
  },
  {
    "id": "q385",
    "book": 1,
    "level": "Let",
    "question": "Tænk tilbage på bogens handling og personer. Hvad hedder den magiske sport, som Harry spiller på et kosteskaft?",
    "answerDa": "Quidditch",
    "answerEn": "Quidditch",
    "correctKey": "right",
    "why": "Quidditch spilles på flyvende koste med flere bolde og mål.",
    "aliases": [
      "Quidditch",
      "Quidditch"
    ],
    "type": "fact"
  },
  {
    "id": "q386",
    "book": 1,
    "level": "Mellem",
    "question": "Tænk tilbage på bogens handling og personer. Hvilken position spiller Harry på Gryffindors Quidditch-hold?",
    "answerDa": "Søger",
    "answerEn": "Seeker",
    "correctKey": "right",
    "why": "En søger skal fange Det Gyldne Lyn; det er Harrys position.",
    "aliases": [
      "Søger",
      "Seeker"
    ],
    "type": "fact"
  },
  {
    "id": "q387",
    "book": 1,
    "level": "Mellem",
    "question": "Tænk tilbage på bogens handling og personer. Hvad beskytter Flamel og Dumbledore ved hjælp af flere magiske forhindringer?",
    "answerDa": "De Vises Sten",
    "answerEn": "The Philosopher’s Stone",
    "correctKey": "right",
    "why": "Nicolas Flamels sten kan blandt andet fremstille livseliksir og er målet for Voldemorts plan.",
    "aliases": [
      "De Vises Sten",
      "The Philosopher’s Stone"
    ],
    "type": "fact"
  },
  {
    "id": "q388",
    "book": 1,
    "level": "Svær",
    "question": "Tænk tilbage på bogens handling og personer. Hvilket magisk væsen møder Harry, Ron og Hermione på et pigetoilet?",
    "answerDa": "En bjergtrold",
    "answerEn": "A mountain troll",
    "correctKey": "right",
    "why": "Quirrell slipper en bjergtrold løs på Hogwarts under Halloween.",
    "aliases": [
      "Et bjergtrold",
      "A mountain troll"
    ],
    "type": "fact"
  },
  {
    "id": "q389",
    "book": 1,
    "level": "Svær",
    "question": "Tænk tilbage på bogens handling og personer. Hvilken professor underviser i eliksirer i den første bog?",
    "answerDa": "Severus Snape",
    "answerEn": "Severus Snape",
    "correctKey": "right",
    "why": "Snape er eliksirprofessor og leder af Slytherin-huset.",
    "aliases": [
      "Severus Snape",
      "Severus Snape"
    ],
    "type": "fact"
  },
  {
    "id": "q390",
    "book": 1,
    "level": "Svær",
    "question": "Tænk tilbage på bogens handling og personer. Hvem viser sig at være den egentlige modstander bag forsøget på at stjæle stenen?",
    "answerDa": "Quirinus Quirrell",
    "answerEn": "Quirinus Quirrell",
    "correctKey": "right",
    "why": "Quirrell hjælper Voldemort og forsøger at få fat i stenen.",
    "aliases": [
      "Quirinus Quirrell",
      "Quirinus Quirrell"
    ],
    "type": "fact"
  },
  {
    "id": "q391",
    "book": 1,
    "level": "Svær",
    "question": "Tænk tilbage på bogens handling og personer. Hvilken udfordring kræver, at Harry spiller et menneskestort skakspil?",
    "answerDa": "Troldmandsskak",
    "answerEn": "Wizard chess",
    "correctKey": "right",
    "why": "Ron leder skakspillet og ofrer sig selv, så Harry kan komme videre.",
    "aliases": [
      "Troldmandsskak",
      "Wizard chess"
    ],
    "type": "fact"
  },
  {
    "id": "q392",
    "book": 1,
    "level": "Svær",
    "question": "Tænk tilbage på bogens handling og personer. Hvem tilhørte usynlighedskappen, før Harry fik den i julegave?",
    "answerDa": "James Potter, Harrys far",
    "answerEn": "James Potter, Harry’s father",
    "correctKey": "right",
    "why": "Kappen blev givet videre fra James Potter; Dumbledore havde den til låns.",
    "aliases": [
      "James Potter, Harrys far",
      "It belonged to his father, James Potter"
    ],
    "type": "fact"
  },
  {
    "id": "q393",
    "book": 2,
    "level": "Svær",
    "question": "Tænk tilbage på bogens handling og personer. Hvilken genstand skriver Harrys navn og oplevelser ind i, uden at vide hvem der svarer?",
    "answerDa": "En dagbog",
    "answerEn": "A diary",
    "correctKey": "right",
    "why": "Tom Riddles dagbog svarer Harry og viser sig at være en horcrux.",
    "aliases": [
      "En dagbog",
      "A diary"
    ],
    "type": "fact"
  },
  {
    "id": "q394",
    "book": 2,
    "level": "Let",
    "question": "Tænk tilbage på bogens handling og personer. Hvilket væsen terroriserer eleverne ved at forstene dem?",
    "answerDa": "En basilisk",
    "answerEn": "A basilisk",
    "correctKey": "right",
    "why": "Basilisken bevæger sig gennem rørene og forstener dem, der ser dens blik indirekte.",
    "aliases": [
      "En basilisk",
      "A basilisk"
    ],
    "type": "fact"
  },
  {
    "id": "q395",
    "book": 2,
    "level": "Let",
    "question": "Tænk tilbage på bogens handling og personer. Hvem er husalfen, der forsøger at holde Harry væk fra Hogwarts?",
    "answerDa": "Dobby",
    "answerEn": "Dobby",
    "correctKey": "right",
    "why": "Dobby forsøger at advare Harry om faren i Hemmelighedernes Kammer.",
    "aliases": [
      "Dobby",
      "Dobby"
    ],
    "type": "fact"
  },
  {
    "id": "q396",
    "book": 2,
    "level": "Mellem",
    "question": "Tænk tilbage på bogens handling og personer. Hvordan kommer Harry og Ron til Hogwarts, efter at Dobby forhindrer dem i at komme gennem barrieren på perron 9¾?",
    "answerDa": "I Arthurs fortryllede Ford Anglia",
    "answerEn": "In Arthur’s enchanted Ford Anglia",
    "correctKey": "right",
    "why": "De flyver i den fortryllede bil, som ender med at kaste dem af ved Slagpoplen.",
    "aliases": [
      "I Arthurs fortryllede Ford Anglia",
      "They fly in Arthur’s enchanted Ford Anglia"
    ],
    "type": "fact"
  },
  {
    "id": "q397",
    "book": 2,
    "level": "Mellem",
    "question": "Tænk tilbage på bogens handling og personer. Hvilken lærer er berømt for sine bøger om sine egne bedrifter?",
    "answerDa": "Gilderoy Lockhart",
    "answerEn": "Gilderoy Lockhart",
    "correctKey": "right",
    "why": "Lockhart er den nye lærer i Forsvar mod Mørkets Kræfter og en selvglad forfatter.",
    "aliases": [
      "Gilderoy Lockhart",
      "Gilderoy Lockhart"
    ],
    "type": "fact"
  },
  {
    "id": "q398",
    "book": 2,
    "level": "Svær",
    "question": "Tænk tilbage på bogens handling og personer. Hvem viser sig at være arvingen efter Slytherin?",
    "answerDa": "Tom Riddle / Lord Voldemort",
    "answerEn": "Tom Riddle / Lord Voldemort",
    "correctKey": "right",
    "why": "Tom Riddle, den unge Voldemort, åbner Hemmelighedernes Kammer gennem dagbogen.",
    "aliases": [
      "Tom Riddle",
      "Tom Riddle / Lord Voldemort"
    ],
    "type": "fact"
  },
  {
    "id": "q399",
    "book": 2,
    "level": "Svær",
    "question": "Tænk tilbage på bogens handling og personer. Hvilken fugl kommer Harry til undsætning i Kammeret?",
    "answerDa": "Fawkes, Dumbledores føniks",
    "answerEn": "Fawkes, Dumbledore’s phoenix",
    "correctKey": "right",
    "why": "Fawkes bringer Sorteringshatten og heler Harrys sår med sine tårer.",
    "aliases": [
      "Fawkes, Dumbledores føniks",
      "Fawkes, Dumbledore’s phoenix"
    ],
    "type": "fact"
  },
  {
    "id": "q400",
    "book": 2,
    "level": "Svær",
    "question": "Tænk tilbage på bogens handling og personer. Hvilken plante bruges til at lave en modgift, der kan genoplive elever, som er blevet forstenet?",
    "answerDa": "Mandragora",
    "answerEn": "Mandrake",
    "correctKey": "right",
    "why": "Mandragoraens skrig kan være dødelige, men dens modnede rod bruges til at genoplive de forstenede.",
    "aliases": [
      "Mandragora",
      "Mandrake"
    ],
    "type": "fact"
  },
  {
    "id": "q401",
    "book": 2,
    "level": "Svær",
    "question": "Tænk tilbage på bogens handling og personer. Hvem redder Ginny fra Tom Riddle i Hemmelighedernes Kammer?",
    "answerDa": "Harry Potter",
    "answerEn": "Harry Potter",
    "correctKey": "right",
    "why": "Harry ødelægger dagbogen med en basilisk-tand og redder Ginny.",
    "aliases": [
      "Harry Potter",
      "Harry Potter"
    ],
    "type": "fact"
  },
  {
    "id": "q402",
    "book": 2,
    "level": "Svær",
    "question": "Tænk tilbage på bogens handling og personer. Hvilken genstand ødelægger Tom Riddles dagbog?",
    "answerDa": "En basilisk-tand",
    "answerEn": "A basilisk fang",
    "correctKey": "right",
    "why": "Harry stikker dagbogen med en basilisk-tand, som ødelægger horcruxen.",
    "aliases": [
      "En basilisk-tand",
      "A basilisk fang"
    ],
    "type": "fact"
  },
  {
    "id": "q403",
    "book": 3,
    "level": "Svær",
    "question": "Tænk tilbage på bogens handling og personer. Hvem flygter fra Azkaban og bliver jagtet gennem det meste af bogen?",
    "answerDa": "Sirius Black",
    "answerEn": "Sirius Black",
    "correctKey": "right",
    "why": "Sirius Black er flygtet fra Azkaban, og alle tror først, at han vil finde Harry.",
    "aliases": [
      "Sirius Black",
      "Sirius Black"
    ],
    "type": "fact"
  },
  {
    "id": "q404",
    "book": 3,
    "level": "Let",
    "question": "Tænk tilbage på bogens handling og personer. Hvilke væsner patruljerer omkring Hogwarts og kan suge håb og glæde ud af mennesker?",
    "answerDa": "Dementorer",
    "answerEn": "Dementors",
    "correctKey": "right",
    "why": "Dementorerne arbejder for Ministeriet og påvirker Harry særligt voldsomt.",
    "aliases": [
      "Dementorer",
      "Dementors"
    ],
    "type": "fact"
  },
  {
    "id": "q405",
    "book": 3,
    "level": "Mellem",
    "question": "Tænk tilbage på bogens handling og personer. Hvem underviser Harry i patronusbesværgelsen?",
    "answerDa": "Remus Lupin",
    "answerEn": "Remus Lupin",
    "correctKey": "right",
    "why": "Lupin hjælper Harry med at fremmane en patronus for at beskytte sig mod dementorer.",
    "aliases": [
      "Remus Lupin",
      "Remus Lupin"
    ],
    "type": "fact"
  },
  {
    "id": "q406",
    "book": 3,
    "level": "Mellem",
    "question": "Tænk tilbage på bogens handling og personer. Hvad er Remus Lupins hemmelighed?",
    "answerDa": "Han er varulv",
    "answerEn": "He is a werewolf",
    "correctKey": "right",
    "why": "Lupin er varulv; hans venner lærte engang at blive animaguser for at hjælpe ham.",
    "aliases": [
      "Han er varulv",
      "He is a werewolf"
    ],
    "type": "fact"
  },
  {
    "id": "q407",
    "book": 3,
    "level": "Mellem",
    "question": "Tænk tilbage på bogens handling og personer. Hvilket dyr kan Peter Pettigrew forvandle sig til?",
    "answerDa": "En rotte",
    "answerEn": "A rat",
    "correctKey": "right",
    "why": "Pettigrew er animagus i form af en rotte og har levet som Scabbers.",
    "aliases": [
      "En rotte",
      "A rat"
    ],
    "type": "fact"
  },
  {
    "id": "q408",
    "book": 3,
    "level": "Svær",
    "question": "Tænk tilbage på bogens handling og personer. Hvilket magisk væsen får Hagrid Harry til at møde i sin første lektion med magiske væsner?",
    "answerDa": "En hippogriff",
    "answerEn": "A hippogriff",
    "correctKey": "right",
    "why": "Hippogriffen Buckbeak er med i Hagrids undervisning og reagerer på respekt.",
    "aliases": [
      "En hippogriff",
      "A hippogriff"
    ],
    "type": "fact"
  },
  {
    "id": "q409",
    "book": 3,
    "level": "Svær",
    "question": "Tænk tilbage på bogens handling og personer. Hvem skabte sammen med sine venner Røverkortet?",
    "answerDa": "James Potter, Sirius Black, Remus Lupin og Peter Pettigrew",
    "answerEn": "James Potter, Sirius Black, Remus Lupin and Peter Pettigrew",
    "correctKey": "right",
    "why": "De fire venner kaldte sig Moony, Wormtail, Padfoot og Prongs.",
    "aliases": [
      "James Potter, Sirius Black, Remus Lupin og Peter Pettigrew",
      "James Potter, Sirius Black, Remus Lupin and Peter Pettigrew"
    ],
    "type": "fact"
  },
  {
    "id": "q410",
    "book": 3,
    "level": "Svær",
    "question": "Tænk tilbage på bogens handling og personer. Hvilket dyr er James Potters animagus-form?",
    "answerDa": "En hjort",
    "answerEn": "A stag",
    "correctKey": "right",
    "why": "James kunne forvandle sig til en hjort, hvilket gav ham øgenavnet Prongs.",
    "aliases": [
      "En hjort",
      "A stag"
    ],
    "type": "fact"
  },
  {
    "id": "q411",
    "book": 3,
    "level": "Svær",
    "question": "Tænk tilbage på bogens handling og personer. Hvilken genstand bruger Harry og Hermione til at rejse tilbage i tiden?",
    "answerDa": "En tidsvender",
    "answerEn": "A Time-Turner",
    "correctKey": "right",
    "why": "Hermione har fået en tidsvender fra McGonagall for at kunne følge flere fag.",
    "aliases": [
      "En tidsvender",
      "A Time-Turner"
    ],
    "type": "fact"
  },
  {
    "id": "q412",
    "book": 3,
    "level": "Svær",
    "question": "Tænk tilbage på bogens handling og personer. Hvem var den hemmelige hemmelighedsvogter for Potter-familiens skjulested?",
    "answerDa": "Peter Pettigrew",
    "answerEn": "Peter Pettigrew",
    "correctKey": "right",
    "why": "Sirius foreslog Pettigrew som hemmelighedsvogter, men Pettigrew forrådte Potter-familien.",
    "aliases": [
      "Peter Pettigrew",
      "Peter Pettigrew"
    ],
    "type": "fact"
  },
  {
    "id": "q413",
    "book": 4,
    "level": "Svær",
    "question": "Tænk tilbage på bogens handling og personer. Hvilken international konkurrence afholdes på Hogwarts?",
    "answerDa": "Tretroldmandsturneringen",
    "answerEn": "The Triwizard Tournament",
    "correctKey": "right",
    "why": "Tretroldmandsturneringen samler tre skoler og har tre farlige opgaver.",
    "aliases": [
      "Tretroldmandsturneringen",
      "Triwizard Tournament"
    ],
    "type": "fact"
  },
  {
    "id": "q414",
    "book": 4,
    "level": "Let",
    "question": "Tænk tilbage på bogens handling og personer. Hvilke to andre skoler sender elever til turneringen sammen med Hogwarts?",
    "answerDa": "Beauxbatons og Durmstrang",
    "answerEn": "Beauxbatons and Durmstrang",
    "correctKey": "right",
    "why": "Beauxbatons og Durmstrang deltager sammen med Hogwarts.",
    "aliases": [
      "Beauxbatons og Durmstrang",
      "Beauxbatons and Durmstrang"
    ],
    "type": "fact"
  },
  {
    "id": "q415",
    "book": 4,
    "level": "Mellem",
    "question": "Tænk tilbage på bogens handling og personer. Hvem bliver udvalgt som Hogwarts’ officielle deltager i turneringen?",
    "answerDa": "Cedric Diggory",
    "answerEn": "Cedric Diggory",
    "correctKey": "right",
    "why": "Ildpokalen vælger Cedric som Hogwarts’ deltager; Harry bliver valgt som ekstra deltager.",
    "aliases": [
      "Cedric Diggory",
      "Cedric Diggory"
    ],
    "type": "fact"
  },
  {
    "id": "q416",
    "book": 4,
    "level": "Mellem",
    "question": "Tænk tilbage på bogens handling og personer. Hvilken drage møder Harry i den første opgave?",
    "answerDa": "En ungarsk takhale",
    "answerEn": "A Hungarian Horntail",
    "correctKey": "right",
    "why": "Harry skal hente et gyldent æg fra en ungarsk takhale.",
    "aliases": [
      "En ungarsk takhale",
      "A Hungarian Horntail"
    ],
    "type": "fact"
  },
  {
    "id": "q417",
    "book": 4,
    "level": "Mellem",
    "question": "Tænk tilbage på bogens handling og personer. Hvem er forklædt som Alastor “Skrækøje” Moody det meste af skoleåret?",
    "answerDa": "Barty Crouch Jr.",
    "answerEn": "Barty Crouch Jr.",
    "correctKey": "right",
    "why": "Barty Crouch Jr. bruger Polyjuice-eliksir og manipulerer turneringen for at føre Harry til Voldemort.",
    "aliases": [
      "Barty Crouch Jr.",
      "Barty Crouch Jr."
    ],
    "type": "fact"
  },
  {
    "id": "q418",
    "book": 4,
    "level": "Svær",
    "question": "Tænk tilbage på bogens handling og personer. Hvad skal deltagerne hente fra søen i den anden opgave?",
    "answerDa": "En person, der betyder meget for dem",
    "answerEn": "A person who matters to them",
    "correctKey": "right",
    "why": "Hver deltager skal redde den person, som søens væsener har taget som gidsel.",
    "aliases": [
      "En person, der betyder meget for dem",
      "A person who matters to them"
    ],
    "type": "fact"
  },
  {
    "id": "q419",
    "book": 4,
    "level": "Svær",
    "question": "Tænk tilbage på bogens handling og personer. Hvilken besværgelse bruger Harry til at tilkalde sin kost under drageopgaven?",
    "answerDa": "Accio",
    "answerEn": "Accio",
    "correctKey": "right",
    "why": "Accio er en tilkaldelsesbesværgelse, og Harry bruger den på sin Firebolt.",
    "aliases": [
      "Accio",
      "Accio"
    ],
    "type": "fact"
  },
  {
    "id": "q420",
    "book": 4,
    "level": "Svær",
    "question": "Tænk tilbage på bogens handling og personer. Hvilken genstand transporterer Harry og Cedric til kirkegården?",
    "answerDa": "En portnøgle",
    "answerEn": "A Portkey",
    "correctKey": "right",
    "why": "Tretroldmandspokalen er blevet fortryllet til en portnøgle.",
    "aliases": [
      "En portnøgle",
      "A Portkey"
    ],
    "type": "fact"
  },
  {
    "id": "q421",
    "book": 4,
    "level": "Svær",
    "question": "Tænk tilbage på bogens handling og personer. Hvem dør på kirkegården, da Harry og Cedric ankommer?",
    "answerDa": "Cedric Diggory",
    "answerEn": "Cedric Diggory",
    "correctKey": "right",
    "why": "Peter Pettigrew dræber Cedric efter Voldemorts ordre.",
    "aliases": [
      "Cedric Diggory",
      "Cedric Diggory"
    ],
    "type": "fact"
  },
  {
    "id": "q422",
    "book": 4,
    "level": "Svær",
    "question": "Tænk tilbage på bogens handling og personer. Hvad har Harrys og Voldemorts tryllestave til fælles?",
    "answerDa": "De har fjer fra den samme føniks",
    "answerEn": "They contain feathers from the same phoenix",
    "correctKey": "right",
    "why": "Begge tryllestave har en fjer fra Fawkes, Dumbledores føniks.",
    "aliases": [
      "De har fjer fra den samme føniks",
      "They contain feathers from the same phoenix"
    ],
    "type": "fact"
  },
  {
    "id": "q423",
    "book": 5,
    "level": "Svær",
    "question": "Tænk tilbage på bogens handling og personer. Hvilken organisation forsøger at bekæmpe Voldemort, men som Ministeriet nægter at anerkende?",
    "answerDa": "Fønixordenen",
    "answerEn": "The Order of the Phoenix",
    "correctKey": "right",
    "why": "Fønixordenen er Dumbledores hemmelige modstandsgruppe.",
    "aliases": [
      "Fønixordenen",
      "Order of the Phoenix"
    ],
    "type": "fact"
  },
  {
    "id": "q424",
    "book": 5,
    "level": "Let",
    "question": "Tænk tilbage på bogens handling og personer. Hvem bliver ansat som Hogwarts’ nye lærer i Forsvar mod Mørkets Kræfter og indfører strenge regler?",
    "answerDa": "Dolores Umbridge",
    "answerEn": "Dolores Umbridge",
    "correctKey": "right",
    "why": "Umbridge bliver Ministeriets udsending og begrænser praktisk undervisning i forsvarsmagi.",
    "aliases": [
      "Dolores Umbridge",
      "Dolores Umbridge"
    ],
    "type": "fact"
  },
  {
    "id": "q425",
    "book": 5,
    "level": "Mellem",
    "question": "Tænk tilbage på bogens handling og personer. Hvad kalder Harry, Ron og Hermione deres hemmelige gruppe, hvor de øver forsvarsmagi?",
    "answerDa": "Dumbledores Armé",
    "answerEn": "Dumbledore’s Army",
    "correctKey": "right",
    "why": "Gruppen kaldes Dumbledores Armé, ofte forkortet DA.",
    "aliases": [
      "Dumbledores Armé",
      "Dumbledore’s Army"
    ],
    "type": "fact"
  },
  {
    "id": "q426",
    "book": 5,
    "level": "Mellem",
    "question": "Tænk tilbage på bogens handling og personer. Hvilken familie bor Harry hos, når han ikke er på Hogwarts?",
    "answerDa": "Dursley-familien",
    "answerEn": "The Dursley family",
    "correctKey": "right",
    "why": "Harry bor hos sin tante Petunia, onkel Vernon og fætter Dudley.",
    "aliases": [
      "Dursley-familien",
      "The Dursleys"
    ],
    "type": "fact"
  },
  {
    "id": "q427",
    "book": 5,
    "level": "Mellem",
    "question": "Tænk tilbage på bogens handling og personer. Hvilket væsen angriber Harry og Dudley i en tunnel i Little Whinging?",
    "answerDa": "Dementorer",
    "answerEn": "Dementors",
    "correctKey": "right",
    "why": "Dementorer angriber dem, og Harry bruger en patronus for at beskytte dem.",
    "aliases": [
      "Dementorer",
      "Dementors"
    ],
    "type": "fact"
  },
  {
    "id": "q428",
    "book": 5,
    "level": "Svær",
    "question": "Tænk tilbage på bogens handling og personer. Hvilken afdeling i Ministeriet for Magi bliver central i bogens afslutning?",
    "answerDa": "Mysteriedepartementet",
    "answerEn": "The Department of Mysteries",
    "correctKey": "right",
    "why": "Harry bliver lokket til Mysteriedepartementet af et syn, der viser sig at være manipuleret.",
    "aliases": [
      "Mysteriedepartementet",
      "Department of Mysteries"
    ],
    "type": "fact"
  },
  {
    "id": "q429",
    "book": 5,
    "level": "Svær",
    "question": "Tænk tilbage på bogens handling og personer. Hvem mister Harry under kampen i Ministeriet?",
    "answerDa": "Sirius Black",
    "answerEn": "Sirius Black",
    "correctKey": "right",
    "why": "Sirius falder gennem sløret i Dødskammeret efter kampen med Bellatrix.",
    "aliases": [
      "Sirius Black",
      "Sirius Black"
    ],
    "type": "fact"
  },
  {
    "id": "q430",
    "book": 5,
    "level": "Svær",
    "question": "Tænk tilbage på bogens handling og personer. Hvem er den eneste elev, der kan se thestralerne ved begyndelsen af skoleåret sammen med Harry?",
    "answerDa": "Luna Lovegood",
    "answerEn": "Luna Lovegood",
    "correctKey": "right",
    "why": "Luna kan se thestralerne, fordi hun har været vidne til døden.",
    "aliases": [
      "Luna Lovegood",
      "Luna Lovegood"
    ],
    "type": "fact"
  },
  {
    "id": "q431",
    "book": 5,
    "level": "Svær",
    "question": "Tænk tilbage på bogens handling og personer. Hvilken profeti forsøger Voldemort at få fat i?",
    "answerDa": "Profetien om Harry og Voldemort",
    "answerEn": "The prophecy about Harry and Voldemort",
    "correctKey": "right",
    "why": "Profetien handler om et barn, der kan besejre Voldemort, og forbindelsen mellem ham og Harry.",
    "aliases": [
      "Profetien om Harry og Voldemort",
      "The prophecy about Harry and Voldemort"
    ],
    "type": "fact"
  },
  {
    "id": "q432",
    "book": 5,
    "level": "Svær",
    "question": "Tænk tilbage på bogens handling og personer. Hvem fortæller Harry, at han ikke skal føle sig skyldig over at have stærke følelser?",
    "answerDa": "Albus Dumbledore",
    "answerEn": "Albus Dumbledore",
    "correctKey": "right",
    "why": "Dumbledore forklarer Harry, at smerte og kærlighed er en del af det at være menneske.",
    "aliases": [
      "Albus Dumbledore",
      "Albus Dumbledore"
    ],
    "type": "fact"
  },
  {
    "id": "q433",
    "book": 6,
    "level": "Svær",
    "question": "Tænk tilbage på bogens handling og personer. Hvilken bog bruger Harry i eliksirundervisningen, som er mærket med Halvblodsprinsens navn?",
    "answerDa": "Halvblodsprinsens eliksirbog",
    "answerEn": "The Half-Blood Prince’s Potions textbook",
    "correctKey": "right",
    "why": "Harry bruger en gammel eliksirbog med noter og besværgelser skrevet af Halvblodsprinsen.",
    "aliases": [
      "Halvblodsprinsens bog",
      "The Half-Blood Prince’s book"
    ],
    "type": "fact"
  },
  {
    "id": "q434",
    "book": 6,
    "level": "Let",
    "question": "Tænk tilbage på bogens handling og personer. Hvilken professor hjælper Harry og Dumbledore med at undersøge Voldemorts fortid?",
    "answerDa": "Horace Slughorn",
    "answerEn": "Horace Slughorn",
    "correctKey": "right",
    "why": "Slughorn har kendt Tom Riddle som elev og gemmer på en vigtig erindring.",
    "aliases": [
      "Horace Slughorn",
      "Horace Slughorn"
    ],
    "type": "fact"
  },
  {
    "id": "q435",
    "book": 6,
    "level": "Mellem",
    "question": "Tænk tilbage på bogens handling og personer. Hvilken type magisk genstand er en horcrux?",
    "answerDa": "En genstand, der indeholder en del af en sjæl",
    "answerEn": "An object that contains a piece of a soul",
    "correctKey": "right",
    "why": "Voldemort deler sin sjæl og skjuler dele i genstande for at forsøge at undgå døden.",
    "aliases": [
      "En genstand, der indeholder en del af en sjæl",
      "An object that contains a piece of a soul"
    ],
    "type": "fact"
  },
  {
    "id": "q436",
    "book": 6,
    "level": "Mellem",
    "question": "Tænk tilbage på bogens handling og personer. Hvem er den elev, der bliver alvorligt syg efter at have rørt ved en forgiftet halskæde?",
    "answerDa": "Katie Bell",
    "answerEn": "Katie Bell",
    "correctKey": "right",
    "why": "Katie Bell bliver forbandet af en halskæde, der var tiltænkt Dumbledore.",
    "aliases": [
      "Katie Bell",
      "Katie Bell"
    ],
    "type": "fact"
  },
  {
    "id": "q437",
    "book": 6,
    "level": "Mellem",
    "question": "Tænk tilbage på bogens handling og personer. Hvilket emne gennemgår Dumbledore med Harry i deres private lektioner?",
    "answerDa": "Voldemorts fortid og hans horcruxer",
    "answerEn": "Voldemort’s past and his Horcruxes",
    "correctKey": "right",
    "why": "Dumbledore viser Harry erindringer, der forklarer Tom Riddles historie og hans søgen efter udødelighed.",
    "aliases": [
      "Voldemorts fortid og hans horcruxer",
      "Voldemort’s past and Horcruxes"
    ],
    "type": "fact"
  },
  {
    "id": "q438",
    "book": 6,
    "level": "Svær",
    "question": "Tænk tilbage på bogens handling og personer. Hvad sker der med Ron, da han drikker den forgiftede mjød?",
    "answerDa": "Han bliver forgiftet efter at have drukket mjød, der var tiltænkt Dumbledore",
    "answerEn": "He is poisoned after drinking mead intended for Dumbledore",
    "correctKey": "right",
    "why": "Ron drikker forgiftet mjød, efter at Slughorns flaske er blevet forhekset; Harry redder ham.",
    "aliases": [
      "Han bliver forgiftet efter at have drukket mjød, der var tiltænkt Dumbledore",
      "He is poisoned after drinking a drink meant for someone else"
    ],
    "type": "fact"
  },
  {
    "id": "q439",
    "book": 6,
    "level": "Svær",
    "question": "Tænk tilbage på bogens handling og personer. Hvilken horcrux mener Dumbledore, at de finder i en grotte?",
    "answerDa": "En medaljon",
    "answerEn": "A locket",
    "correctKey": "right",
    "why": "De finder en medaljon, men den viser sig senere at være en falsk horcrux.",
    "aliases": [
      "En medaljon",
      "A locket"
    ],
    "type": "fact"
  },
  {
    "id": "q440",
    "book": 6,
    "level": "Svær",
    "question": "Tænk tilbage på bogens handling og personer. Hvilken besværgelse bruger Harry mod Draco i badeværelset uden at kende dens virkning?",
    "answerDa": "Sectumsempra",
    "answerEn": "Sectumsempra",
    "correctKey": "right",
    "why": "Sectumsempra skærer alvorlige sår i Draco; Harry kendte kun noten “mod fjender”.",
    "aliases": [
      "Sectumsempra",
      "Sectumsempra"
    ],
    "type": "fact"
  },
  {
    "id": "q441",
    "book": 6,
    "level": "Svær",
    "question": "Tænk tilbage på bogens handling og personer. Hvem dræber Dumbledore på toppen af Astronomitårnet?",
    "answerDa": "Severus Snape",
    "answerEn": "Severus Snape",
    "correctKey": "right",
    "why": "Snape dræber Dumbledore efter en aftale mellem dem, som først forklares senere.",
    "aliases": [
      "Severus Snape",
      "Severus Snape"
    ],
    "type": "fact"
  },
  {
    "id": "q442",
    "book": 6,
    "level": "Svær",
    "question": "Tænk tilbage på bogens handling og personer. Hvad viser sig at være forkert ved medaljonen, Harry og Dumbledore finder?",
    "answerDa": "En falsk medaljon, som R.A.B. efterlod",
    "answerEn": "A fake locket left behind by R.A.B.",
    "correctKey": "right",
    "why": "Et brev underskrevet R.A.B. forklarer, at den rigtige medaljon allerede er blevet taget.",
    "aliases": [
      "En falsk medaljon, som R.A.B. efterlod",
      "It is a fake locket left by R.A.B."
    ],
    "type": "fact"
  },
  {
    "id": "q443",
    "book": 7,
    "level": "Svær",
    "question": "Tænk tilbage på bogens handling og personer. Hvilke tre genstande er Dødsregalierne?",
    "answerDa": "Oldstaven, Opstandelsesstenen og Usynlighedskappen",
    "answerEn": "The Elder Wand, the Resurrection Stone and the Invisibility Cloak",
    "correctKey": "right",
    "why": "De tre legendariske genstande er Oldstaven, Opstandelsesstenen og Usynlighedskappen.",
    "aliases": [
      "Oldstaven, Opstandelsesstenen og Usynlighedskappen",
      "The Elder Wand, the Resurrection Stone and the Invisibility Cloak"
    ],
    "type": "fact"
  },
  {
    "id": "q444",
    "book": 7,
    "level": "Let",
    "question": "Tænk tilbage på bogens handling og personer. Hvem er R.A.B., som efterlader en besked i den falske medaljon?",
    "answerDa": "Regulus Arcturus Black",
    "answerEn": "Regulus Arcturus Black",
    "correctKey": "right",
    "why": "Regulus Arcturus Black var Sirius’ bror og en tidligere dødsæder, som vendte sig mod Voldemort.",
    "aliases": [
      "Regulus Arcturus Black",
      "Regulus Arcturus Black"
    ],
    "type": "fact"
  },
  {
    "id": "q445",
    "book": 7,
    "level": "Mellem",
    "question": "Tænk tilbage på bogens handling og personer. Hvilken genstand efterlod Dumbledore til Harry, og som indeholder Opstandelsesstenen?",
    "answerDa": "Den Snitch, som Dumbledore efterlod til Harry",
    "answerEn": "The Snitch that Dumbledore left for Harry",
    "correctKey": "right",
    "why": "Dumbledore efterlod Harry en Snitch, som åbner sig og afslører Opstandelsesstenen. Gryffindors sværd ligger i søen.",
    "aliases": [
      "Den Snitch, som Dumbledore efterlod til Harry",
      "The Snitch that Dumbledore left for Harry"
    ],
    "type": "fact"
  },
  {
    "id": "q446",
    "book": 7,
    "level": "Mellem",
    "question": "Tænk tilbage på bogens handling og personer. Hvilken troldmandsbank bryder trioen ind i?",
    "answerDa": "Gringotts",
    "answerEn": "Gringotts",
    "correctKey": "right",
    "why": "Harry, Ron og Hermione bryder ind i Gringotts for at hente Hufflepuffs pokal fra Bellatrix’ boks.",
    "aliases": [
      "Gringotts",
      "Gringotts"
    ],
    "type": "fact"
  },
  {
    "id": "q447",
    "book": 7,
    "level": "Mellem",
    "question": "Tænk tilbage på bogens handling og personer. Hvilket hus’ genstand er en af Voldemorts horcruxer i Gringotts?",
    "answerDa": "Hufflepuffs pokal",
    "answerEn": "Hufflepuff’s Cup",
    "correctKey": "right",
    "why": "Helga Hufflepuffs pokal bliver en horcrux og opbevares i Bellatrix’ boks.",
    "aliases": [
      "Hufflepuffs pokal",
      "Hufflepuff’s Cup"
    ],
    "type": "fact"
  },
  {
    "id": "q448",
    "book": 7,
    "level": "Svær",
    "question": "Tænk tilbage på bogens handling og personer. Hvem leder Hogwarts, mens trioen er på flugt, og Voldemort har taget magten?",
    "answerDa": "Severus Snape",
    "answerEn": "Severus Snape",
    "correctKey": "right",
    "why": "Snape er udnævnt til rektor under Voldemorts kontrol, mens Carrow-søskende underviser.",
    "aliases": [
      "Severus Snape",
      "Severus Snape"
    ],
    "type": "fact"
  },
  {
    "id": "q449",
    "book": 7,
    "level": "Svær",
    "question": "Hvilken af disse genstande er ikke en af Voldemorts horcruxer?",
    "answerDa": "Gryffindors sværd",
    "answerEn": "Gryffindor’s Sword",
    "correctKey": "right",
    "why": "Gryffindors sværd er ikke en horcrux; det kan ødelægge horcruxer, fordi det har absorberet basiliskgift.",
    "aliases": [
      "Gryffindors sværd",
      "Gryffindor’s Sword"
    ],
    "type": "fact",
    "options": [
      {
        "da": "Gryffindors sværd",
        "en": "Gryffindor’s Sword"
      },
      {
        "da": "Tom Riddles dagbog / Tom Riddle’s Diary",
        "en": "Tom Riddle’s Diary"
      },
      {
        "da": "Marvolo Gaunts ring / Marvolo Gaunt’s Ring",
        "en": "Marvolo Gaunt’s Ring"
      },
      {
        "da": "Ravenclaws diadem / Ravenclaw’s Diadem",
        "en": "Ravenclaw’s Diadem"
      }
    ],
    "correctIndex": 0
  },
  {
    "id": "q450",
    "book": 7,
    "level": "Svær",
    "question": "Tænk tilbage på bogens handling og personer. Hvem ødelægger Hufflepuffs pokal i Hemmelighedernes Kammer?",
    "answerDa": "Hermione Granger",
    "answerEn": "Hermione Granger",
    "correctKey": "right",
    "why": "Hermione ødelægger pokalen med en basilisk-tand, som trioen finder i Kammeret.",
    "aliases": [
      "Hermione Granger",
      "Hermione Granger"
    ],
    "type": "fact"
  },
  {
    "id": "q451",
    "book": 7,
    "level": "Svær",
    "question": "Tænk tilbage på bogens handling og personer. Hvilken sandhed om Snape afsløres gennem hans erindringer?",
    "answerDa": "Han elskede Lily Potter og beskyttede Harry i hemmelighed",
    "answerEn": "He loved Lily Potter and secretly protected Harry",
    "correctKey": "right",
    "why": "Snapes kærlighed til Lily er en central grund til, at han hjælper med at beskytte Harry.",
    "aliases": [
      "Han elskede Lily Potter og beskyttede Harry i hemmelighed",
      "He loved Lily Potter and secretly protected Harry"
    ],
    "type": "fact"
  },
  {
    "id": "q452",
    "book": 7,
    "level": "Svær",
    "question": "Tænk tilbage på bogens handling og personer. Hvem ødelægger Nagini under slaget om Hogwarts?",
    "answerDa": "Neville Longbottom",
    "answerEn": "Neville Longbottom",
    "correctKey": "right",
    "why": "Neville trækker Gryffindors sværd fra Sorteringshatten og dræber Nagini.",
    "aliases": [
      "Neville Longbottom",
      "Neville Longbottom"
    ],
    "type": "fact"
  },
  {
    "id": "q453",
    "book": 1,
    "level": "Svær",
    "question": "Hvilken oplysning fra Harry Potter-bøgerne passer til dette spørgsmål? Hvad hedder den kæmpe, der fortæller Harry, at han er en troldmand?",
    "answerDa": "Rubeus Hagrid",
    "answerEn": "Rubeus Hagrid",
    "correctKey": "right",
    "why": "Hagrid opsøger Harry på hans ellevte fødselsdag og fortæller ham om den magiske verden.",
    "aliases": [
      "Rubeus Hagrid",
      "Rubeus Hagrid"
    ],
    "type": "fact"
  },
  {
    "id": "q454",
    "book": 1,
    "level": "Let",
    "question": "Hvilken oplysning fra Harry Potter-bøgerne passer til dette spørgsmål? Hvilket hus bliver Harry sorteret ind i?",
    "answerDa": "Gryffindor",
    "answerEn": "Gryffindor",
    "correctKey": "right",
    "why": "Sorteringshatten placerer Harry i Gryffindor, selv om den overvejer Slytherin.",
    "aliases": [
      "Gryffindor",
      "Gryffindor"
    ],
    "type": "fact"
  },
  {
    "id": "q455",
    "book": 1,
    "level": "Let",
    "question": "Hvilken oplysning fra Harry Potter-bøgerne passer til dette spørgsmål? Hvad hedder den magiske sport, som Harry spiller på et kosteskaft?",
    "answerDa": "Quidditch",
    "answerEn": "Quidditch",
    "correctKey": "right",
    "why": "Quidditch spilles på flyvende koste med flere bolde og mål.",
    "aliases": [
      "Quidditch",
      "Quidditch"
    ],
    "type": "fact"
  },
  {
    "id": "q456",
    "book": 1,
    "level": "Mellem",
    "question": "Hvilken oplysning fra Harry Potter-bøgerne passer til dette spørgsmål? Hvilken position spiller Harry på Gryffindors Quidditch-hold?",
    "answerDa": "Søger",
    "answerEn": "Seeker",
    "correctKey": "right",
    "why": "En søger skal fange Det Gyldne Lyn; det er Harrys position.",
    "aliases": [
      "Søger",
      "Seeker"
    ],
    "type": "fact"
  },
  {
    "id": "q457",
    "book": 1,
    "level": "Mellem",
    "question": "Hvilken oplysning fra Harry Potter-bøgerne passer til dette spørgsmål? Hvad beskytter Flamel og Dumbledore ved hjælp af flere magiske forhindringer?",
    "answerDa": "De Vises Sten",
    "answerEn": "The Philosopher’s Stone",
    "correctKey": "right",
    "why": "Nicolas Flamels sten kan blandt andet fremstille livseliksir og er målet for Voldemorts plan.",
    "aliases": [
      "De Vises Sten",
      "The Philosopher’s Stone"
    ],
    "type": "fact"
  },
  {
    "id": "q458",
    "book": 1,
    "level": "Svær",
    "question": "Hvilken oplysning fra Harry Potter-bøgerne passer til dette spørgsmål? Hvilket magisk væsen møder Harry, Ron og Hermione på et pigetoilet?",
    "answerDa": "En bjergtrold",
    "answerEn": "A mountain troll",
    "correctKey": "right",
    "why": "Quirrell slipper en bjergtrold løs på Hogwarts under Halloween.",
    "aliases": [
      "Et bjergtrold",
      "A mountain troll"
    ],
    "type": "fact"
  },
  {
    "id": "q459",
    "book": 1,
    "level": "Svær",
    "question": "Hvilken oplysning fra Harry Potter-bøgerne passer til dette spørgsmål? Hvilken professor underviser i eliksirer i den første bog?",
    "answerDa": "Severus Snape",
    "answerEn": "Severus Snape",
    "correctKey": "right",
    "why": "Snape er eliksirprofessor og leder af Slytherin-huset.",
    "aliases": [
      "Severus Snape",
      "Severus Snape"
    ],
    "type": "fact"
  },
  {
    "id": "q460",
    "book": 1,
    "level": "Svær",
    "question": "Hvilken oplysning fra Harry Potter-bøgerne passer til dette spørgsmål? Hvem viser sig at være den egentlige modstander bag forsøget på at stjæle stenen?",
    "answerDa": "Quirinus Quirrell",
    "answerEn": "Quirinus Quirrell",
    "correctKey": "right",
    "why": "Quirrell hjælper Voldemort og forsøger at få fat i stenen.",
    "aliases": [
      "Quirinus Quirrell",
      "Quirinus Quirrell"
    ],
    "type": "fact"
  },
  {
    "id": "q461",
    "book": 1,
    "level": "Svær",
    "question": "Hvilken oplysning fra Harry Potter-bøgerne passer til dette spørgsmål? Hvilken udfordring kræver, at Harry spiller et menneskestort skakspil?",
    "answerDa": "Troldmandsskak",
    "answerEn": "Wizard chess",
    "correctKey": "right",
    "why": "Ron leder skakspillet og ofrer sig selv, så Harry kan komme videre.",
    "aliases": [
      "Troldmandsskak",
      "Wizard chess"
    ],
    "type": "fact"
  },
  {
    "id": "q462",
    "book": 1,
    "level": "Svær",
    "question": "Hvilken oplysning fra Harry Potter-bøgerne passer til dette spørgsmål? Hvem tilhørte usynlighedskappen, før Harry fik den i julegave?",
    "answerDa": "James Potter, Harrys far",
    "answerEn": "James Potter, Harry’s father",
    "correctKey": "right",
    "why": "Kappen blev givet videre fra James Potter; Dumbledore havde den til låns.",
    "aliases": [
      "James Potter, Harrys far",
      "It belonged to his father, James Potter"
    ],
    "type": "fact"
  },
  {
    "id": "q463",
    "book": 2,
    "level": "Svær",
    "question": "Hvilken oplysning fra Harry Potter-bøgerne passer til dette spørgsmål? Hvilken genstand skriver Harrys navn og oplevelser ind i, uden at vide hvem der svarer?",
    "answerDa": "En dagbog",
    "answerEn": "A diary",
    "correctKey": "right",
    "why": "Tom Riddles dagbog svarer Harry og viser sig at være en horcrux.",
    "aliases": [
      "En dagbog",
      "A diary"
    ],
    "type": "fact"
  },
  {
    "id": "q464",
    "book": 2,
    "level": "Let",
    "question": "Hvilken oplysning fra Harry Potter-bøgerne passer til dette spørgsmål? Hvilket væsen terroriserer eleverne ved at forstene dem?",
    "answerDa": "En basilisk",
    "answerEn": "A basilisk",
    "correctKey": "right",
    "why": "Basilisken bevæger sig gennem rørene og forstener dem, der ser dens blik indirekte.",
    "aliases": [
      "En basilisk",
      "A basilisk"
    ],
    "type": "fact"
  },
  {
    "id": "q465",
    "book": 2,
    "level": "Let",
    "question": "Hvilken oplysning fra Harry Potter-bøgerne passer til dette spørgsmål? Hvem er husalfen, der forsøger at holde Harry væk fra Hogwarts?",
    "answerDa": "Dobby",
    "answerEn": "Dobby",
    "correctKey": "right",
    "why": "Dobby forsøger at advare Harry om faren i Hemmelighedernes Kammer.",
    "aliases": [
      "Dobby",
      "Dobby"
    ],
    "type": "fact"
  },
  {
    "id": "q466",
    "book": 2,
    "level": "Mellem",
    "question": "Hvilken oplysning fra Harry Potter-bøgerne passer til dette spørgsmål? Hvordan kommer Harry og Ron til Hogwarts, efter at Dobby forhindrer dem i at komme gennem barrieren på perron 9¾?",
    "answerDa": "I Arthurs fortryllede Ford Anglia",
    "answerEn": "In Arthur’s enchanted Ford Anglia",
    "correctKey": "right",
    "why": "De flyver i den fortryllede bil, som ender med at kaste dem af ved Slagpoplen.",
    "aliases": [
      "I Arthurs fortryllede Ford Anglia",
      "They fly in Arthur’s enchanted Ford Anglia"
    ],
    "type": "fact"
  },
  {
    "id": "q467",
    "book": 2,
    "level": "Mellem",
    "question": "Hvilken oplysning fra Harry Potter-bøgerne passer til dette spørgsmål? Hvilken lærer er berømt for sine bøger om sine egne bedrifter?",
    "answerDa": "Gilderoy Lockhart",
    "answerEn": "Gilderoy Lockhart",
    "correctKey": "right",
    "why": "Lockhart er den nye lærer i Forsvar mod Mørkets Kræfter og en selvglad forfatter.",
    "aliases": [
      "Gilderoy Lockhart",
      "Gilderoy Lockhart"
    ],
    "type": "fact"
  },
  {
    "id": "q468",
    "book": 2,
    "level": "Svær",
    "question": "Hvilken oplysning fra Harry Potter-bøgerne passer til dette spørgsmål? Hvem viser sig at være arvingen efter Slytherin?",
    "answerDa": "Tom Riddle / Lord Voldemort",
    "answerEn": "Tom Riddle / Lord Voldemort",
    "correctKey": "right",
    "why": "Tom Riddle, den unge Voldemort, åbner Hemmelighedernes Kammer gennem dagbogen.",
    "aliases": [
      "Tom Riddle",
      "Tom Riddle / Lord Voldemort"
    ],
    "type": "fact"
  },
  {
    "id": "q469",
    "book": 2,
    "level": "Svær",
    "question": "Hvilken oplysning fra Harry Potter-bøgerne passer til dette spørgsmål? Hvilken fugl kommer Harry til undsætning i Kammeret?",
    "answerDa": "Fawkes, Dumbledores føniks",
    "answerEn": "Fawkes, Dumbledore’s phoenix",
    "correctKey": "right",
    "why": "Fawkes bringer Sorteringshatten og heler Harrys sår med sine tårer.",
    "aliases": [
      "Fawkes, Dumbledores føniks",
      "Fawkes, Dumbledore’s phoenix"
    ],
    "type": "fact"
  },
  {
    "id": "q470",
    "book": 2,
    "level": "Svær",
    "question": "Hvilken oplysning fra Harry Potter-bøgerne passer til dette spørgsmål? Hvilken plante bruges til at lave en modgift, der kan genoplive elever, som er blevet forstenet?",
    "answerDa": "Mandragora",
    "answerEn": "Mandrake",
    "correctKey": "right",
    "why": "Mandragoraens skrig kan være dødelige, men dens modnede rod bruges til at genoplive de forstenede.",
    "aliases": [
      "Mandragora",
      "Mandrake"
    ],
    "type": "fact"
  },
  {
    "id": "q471",
    "book": 2,
    "level": "Svær",
    "question": "Hvilken oplysning fra Harry Potter-bøgerne passer til dette spørgsmål? Hvem redder Ginny fra Tom Riddle i Hemmelighedernes Kammer?",
    "answerDa": "Harry Potter",
    "answerEn": "Harry Potter",
    "correctKey": "right",
    "why": "Harry ødelægger dagbogen med en basilisk-tand og redder Ginny.",
    "aliases": [
      "Harry Potter",
      "Harry Potter"
    ],
    "type": "fact"
  },
  {
    "id": "q472",
    "book": 2,
    "level": "Svær",
    "question": "Hvilken oplysning fra Harry Potter-bøgerne passer til dette spørgsmål? Hvilken genstand ødelægger Tom Riddles dagbog?",
    "answerDa": "En basilisk-tand",
    "answerEn": "A basilisk fang",
    "correctKey": "right",
    "why": "Harry stikker dagbogen med en basilisk-tand, som ødelægger horcruxen.",
    "aliases": [
      "En basilisk-tand",
      "A basilisk fang"
    ],
    "type": "fact"
  },
  {
    "id": "q473",
    "book": 3,
    "level": "Svær",
    "question": "Hvilken oplysning fra Harry Potter-bøgerne passer til dette spørgsmål? Hvem flygter fra Azkaban og bliver jagtet gennem det meste af bogen?",
    "answerDa": "Sirius Black",
    "answerEn": "Sirius Black",
    "correctKey": "right",
    "why": "Sirius Black er flygtet fra Azkaban, og alle tror først, at han vil finde Harry.",
    "aliases": [
      "Sirius Black",
      "Sirius Black"
    ],
    "type": "fact"
  },
  {
    "id": "q474",
    "book": 3,
    "level": "Let",
    "question": "Hvilken oplysning fra Harry Potter-bøgerne passer til dette spørgsmål? Hvilke væsner patruljerer omkring Hogwarts og kan suge håb og glæde ud af mennesker?",
    "answerDa": "Dementorer",
    "answerEn": "Dementors",
    "correctKey": "right",
    "why": "Dementorerne arbejder for Ministeriet og påvirker Harry særligt voldsomt.",
    "aliases": [
      "Dementorer",
      "Dementors"
    ],
    "type": "fact"
  },
  {
    "id": "q475",
    "book": 3,
    "level": "Mellem",
    "question": "Hvilken oplysning fra Harry Potter-bøgerne passer til dette spørgsmål? Hvem underviser Harry i patronusbesværgelsen?",
    "answerDa": "Remus Lupin",
    "answerEn": "Remus Lupin",
    "correctKey": "right",
    "why": "Lupin hjælper Harry med at fremmane en patronus for at beskytte sig mod dementorer.",
    "aliases": [
      "Remus Lupin",
      "Remus Lupin"
    ],
    "type": "fact"
  },
  {
    "id": "q476",
    "book": 3,
    "level": "Mellem",
    "question": "Hvilken oplysning fra Harry Potter-bøgerne passer til dette spørgsmål? Hvad er Remus Lupins hemmelighed?",
    "answerDa": "Han er varulv",
    "answerEn": "He is a werewolf",
    "correctKey": "right",
    "why": "Lupin er varulv; hans venner lærte engang at blive animaguser for at hjælpe ham.",
    "aliases": [
      "Han er varulv",
      "He is a werewolf"
    ],
    "type": "fact"
  },
  {
    "id": "q477",
    "book": 3,
    "level": "Mellem",
    "question": "Hvilken oplysning fra Harry Potter-bøgerne passer til dette spørgsmål? Hvilket dyr kan Peter Pettigrew forvandle sig til?",
    "answerDa": "En rotte",
    "answerEn": "A rat",
    "correctKey": "right",
    "why": "Pettigrew er animagus i form af en rotte og har levet som Scabbers.",
    "aliases": [
      "En rotte",
      "A rat"
    ],
    "type": "fact"
  },
  {
    "id": "q478",
    "book": 3,
    "level": "Svær",
    "question": "Hvilken oplysning fra Harry Potter-bøgerne passer til dette spørgsmål? Hvilket magisk væsen får Hagrid Harry til at møde i sin første lektion med magiske væsner?",
    "answerDa": "En hippogriff",
    "answerEn": "A hippogriff",
    "correctKey": "right",
    "why": "Hippogriffen Buckbeak er med i Hagrids undervisning og reagerer på respekt.",
    "aliases": [
      "En hippogriff",
      "A hippogriff"
    ],
    "type": "fact"
  },
  {
    "id": "q479",
    "book": 3,
    "level": "Svær",
    "question": "Hvilken oplysning fra Harry Potter-bøgerne passer til dette spørgsmål? Hvem skabte sammen med sine venner Røverkortet?",
    "answerDa": "James Potter, Sirius Black, Remus Lupin og Peter Pettigrew",
    "answerEn": "James Potter, Sirius Black, Remus Lupin and Peter Pettigrew",
    "correctKey": "right",
    "why": "De fire venner kaldte sig Moony, Wormtail, Padfoot og Prongs.",
    "aliases": [
      "James Potter, Sirius Black, Remus Lupin og Peter Pettigrew",
      "James Potter, Sirius Black, Remus Lupin and Peter Pettigrew"
    ],
    "type": "fact"
  },
  {
    "id": "q480",
    "book": 3,
    "level": "Svær",
    "question": "Hvilken oplysning fra Harry Potter-bøgerne passer til dette spørgsmål? Hvilket dyr er James Potters animagus-form?",
    "answerDa": "En hjort",
    "answerEn": "A stag",
    "correctKey": "right",
    "why": "James kunne forvandle sig til en hjort, hvilket gav ham øgenavnet Prongs.",
    "aliases": [
      "En hjort",
      "A stag"
    ],
    "type": "fact"
  },
  {
    "id": "q481",
    "book": 3,
    "level": "Svær",
    "question": "Hvilken oplysning fra Harry Potter-bøgerne passer til dette spørgsmål? Hvilken genstand bruger Harry og Hermione til at rejse tilbage i tiden?",
    "answerDa": "En tidsvender",
    "answerEn": "A Time-Turner",
    "correctKey": "right",
    "why": "Hermione har fået en tidsvender fra McGonagall for at kunne følge flere fag.",
    "aliases": [
      "En tidsvender",
      "A Time-Turner"
    ],
    "type": "fact"
  },
  {
    "id": "q482",
    "book": 3,
    "level": "Svær",
    "question": "Hvilken oplysning fra Harry Potter-bøgerne passer til dette spørgsmål? Hvem var den hemmelige hemmelighedsvogter for Potter-familiens skjulested?",
    "answerDa": "Peter Pettigrew",
    "answerEn": "Peter Pettigrew",
    "correctKey": "right",
    "why": "Sirius foreslog Pettigrew som hemmelighedsvogter, men Pettigrew forrådte Potter-familien.",
    "aliases": [
      "Peter Pettigrew",
      "Peter Pettigrew"
    ],
    "type": "fact"
  },
  {
    "id": "q483",
    "book": 4,
    "level": "Svær",
    "question": "Hvilken oplysning fra Harry Potter-bøgerne passer til dette spørgsmål? Hvilken international konkurrence afholdes på Hogwarts?",
    "answerDa": "Tretroldmandsturneringen",
    "answerEn": "The Triwizard Tournament",
    "correctKey": "right",
    "why": "Tretroldmandsturneringen samler tre skoler og har tre farlige opgaver.",
    "aliases": [
      "Tretroldmandsturneringen",
      "Triwizard Tournament"
    ],
    "type": "fact"
  },
  {
    "id": "q484",
    "book": 4,
    "level": "Let",
    "question": "Hvilken oplysning fra Harry Potter-bøgerne passer til dette spørgsmål? Hvilke to andre skoler sender elever til turneringen sammen med Hogwarts?",
    "answerDa": "Beauxbatons og Durmstrang",
    "answerEn": "Beauxbatons and Durmstrang",
    "correctKey": "right",
    "why": "Beauxbatons og Durmstrang deltager sammen med Hogwarts.",
    "aliases": [
      "Beauxbatons og Durmstrang",
      "Beauxbatons and Durmstrang"
    ],
    "type": "fact"
  },
  {
    "id": "q485",
    "book": 4,
    "level": "Mellem",
    "question": "Hvilken oplysning fra Harry Potter-bøgerne passer til dette spørgsmål? Hvem bliver udvalgt som Hogwarts’ officielle deltager i turneringen?",
    "answerDa": "Cedric Diggory",
    "answerEn": "Cedric Diggory",
    "correctKey": "right",
    "why": "Ildpokalen vælger Cedric som Hogwarts’ deltager; Harry bliver valgt som ekstra deltager.",
    "aliases": [
      "Cedric Diggory",
      "Cedric Diggory"
    ],
    "type": "fact"
  },
  {
    "id": "q486",
    "book": 4,
    "level": "Mellem",
    "question": "Hvilken oplysning fra Harry Potter-bøgerne passer til dette spørgsmål? Hvilken drage møder Harry i den første opgave?",
    "answerDa": "En ungarsk takhale",
    "answerEn": "A Hungarian Horntail",
    "correctKey": "right",
    "why": "Harry skal hente et gyldent æg fra en ungarsk takhale.",
    "aliases": [
      "En ungarsk takhale",
      "A Hungarian Horntail"
    ],
    "type": "fact"
  },
  {
    "id": "q487",
    "book": 4,
    "level": "Mellem",
    "question": "Hvilken oplysning fra Harry Potter-bøgerne passer til dette spørgsmål? Hvem er forklædt som Alastor “Skrækøje” Moody det meste af skoleåret?",
    "answerDa": "Barty Crouch Jr.",
    "answerEn": "Barty Crouch Jr.",
    "correctKey": "right",
    "why": "Barty Crouch Jr. bruger Polyjuice-eliksir og manipulerer turneringen for at føre Harry til Voldemort.",
    "aliases": [
      "Barty Crouch Jr.",
      "Barty Crouch Jr."
    ],
    "type": "fact"
  },
  {
    "id": "q488",
    "book": 4,
    "level": "Svær",
    "question": "Hvilken oplysning fra Harry Potter-bøgerne passer til dette spørgsmål? Hvad skal deltagerne hente fra søen i den anden opgave?",
    "answerDa": "En person, der betyder meget for dem",
    "answerEn": "A person who matters to them",
    "correctKey": "right",
    "why": "Hver deltager skal redde den person, som søens væsener har taget som gidsel.",
    "aliases": [
      "En person, der betyder meget for dem",
      "A person who matters to them"
    ],
    "type": "fact"
  },
  {
    "id": "q489",
    "book": 4,
    "level": "Svær",
    "question": "Hvilken oplysning fra Harry Potter-bøgerne passer til dette spørgsmål? Hvilken besværgelse bruger Harry til at tilkalde sin kost under drageopgaven?",
    "answerDa": "Accio",
    "answerEn": "Accio",
    "correctKey": "right",
    "why": "Accio er en tilkaldelsesbesværgelse, og Harry bruger den på sin Firebolt.",
    "aliases": [
      "Accio",
      "Accio"
    ],
    "type": "fact"
  },
  {
    "id": "q490",
    "book": 4,
    "level": "Svær",
    "question": "Hvilken oplysning fra Harry Potter-bøgerne passer til dette spørgsmål? Hvilken genstand transporterer Harry og Cedric til kirkegården?",
    "answerDa": "En portnøgle",
    "answerEn": "A Portkey",
    "correctKey": "right",
    "why": "Tretroldmandspokalen er blevet fortryllet til en portnøgle.",
    "aliases": [
      "En portnøgle",
      "A Portkey"
    ],
    "type": "fact"
  },
  {
    "id": "q491",
    "book": 4,
    "level": "Svær",
    "question": "Hvilken oplysning fra Harry Potter-bøgerne passer til dette spørgsmål? Hvem dør på kirkegården, da Harry og Cedric ankommer?",
    "answerDa": "Cedric Diggory",
    "answerEn": "Cedric Diggory",
    "correctKey": "right",
    "why": "Peter Pettigrew dræber Cedric efter Voldemorts ordre.",
    "aliases": [
      "Cedric Diggory",
      "Cedric Diggory"
    ],
    "type": "fact"
  },
  {
    "id": "q492",
    "book": 4,
    "level": "Svær",
    "question": "Hvilken oplysning fra Harry Potter-bøgerne passer til dette spørgsmål? Hvad har Harrys og Voldemorts tryllestave til fælles?",
    "answerDa": "De har fjer fra den samme føniks",
    "answerEn": "They contain feathers from the same phoenix",
    "correctKey": "right",
    "why": "Begge tryllestave har en fjer fra Fawkes, Dumbledores føniks.",
    "aliases": [
      "De har fjer fra den samme føniks",
      "They contain feathers from the same phoenix"
    ],
    "type": "fact"
  },
  {
    "id": "q493",
    "book": 5,
    "level": "Svær",
    "question": "Hvilken oplysning fra Harry Potter-bøgerne passer til dette spørgsmål? Hvilken organisation forsøger at bekæmpe Voldemort, men som Ministeriet nægter at anerkende?",
    "answerDa": "Fønixordenen",
    "answerEn": "The Order of the Phoenix",
    "correctKey": "right",
    "why": "Fønixordenen er Dumbledores hemmelige modstandsgruppe.",
    "aliases": [
      "Fønixordenen",
      "Order of the Phoenix"
    ],
    "type": "fact"
  },
  {
    "id": "q494",
    "book": 5,
    "level": "Let",
    "question": "Hvilken oplysning fra Harry Potter-bøgerne passer til dette spørgsmål? Hvem bliver ansat som Hogwarts’ nye lærer i Forsvar mod Mørkets Kræfter og indfører strenge regler?",
    "answerDa": "Dolores Umbridge",
    "answerEn": "Dolores Umbridge",
    "correctKey": "right",
    "why": "Umbridge bliver Ministeriets udsending og begrænser praktisk undervisning i forsvarsmagi.",
    "aliases": [
      "Dolores Umbridge",
      "Dolores Umbridge"
    ],
    "type": "fact"
  },
  {
    "id": "q495",
    "book": 5,
    "level": "Mellem",
    "question": "Hvilken oplysning fra Harry Potter-bøgerne passer til dette spørgsmål? Hvad kalder Harry, Ron og Hermione deres hemmelige gruppe, hvor de øver forsvarsmagi?",
    "answerDa": "Dumbledores Armé",
    "answerEn": "Dumbledore’s Army",
    "correctKey": "right",
    "why": "Gruppen kaldes Dumbledores Armé, ofte forkortet DA.",
    "aliases": [
      "Dumbledores Armé",
      "Dumbledore’s Army"
    ],
    "type": "fact"
  },
  {
    "id": "q496",
    "book": 5,
    "level": "Mellem",
    "question": "Hvilken oplysning fra Harry Potter-bøgerne passer til dette spørgsmål? Hvilken familie bor Harry hos, når han ikke er på Hogwarts?",
    "answerDa": "Dursley-familien",
    "answerEn": "The Dursley family",
    "correctKey": "right",
    "why": "Harry bor hos sin tante Petunia, onkel Vernon og fætter Dudley.",
    "aliases": [
      "Dursley-familien",
      "The Dursleys"
    ],
    "type": "fact"
  },
  {
    "id": "q497",
    "book": 5,
    "level": "Mellem",
    "question": "Hvilken oplysning fra Harry Potter-bøgerne passer til dette spørgsmål? Hvilket væsen angriber Harry og Dudley i en tunnel i Little Whinging?",
    "answerDa": "Dementorer",
    "answerEn": "Dementors",
    "correctKey": "right",
    "why": "Dementorer angriber dem, og Harry bruger en patronus for at beskytte dem.",
    "aliases": [
      "Dementorer",
      "Dementors"
    ],
    "type": "fact"
  },
  {
    "id": "q498",
    "book": 5,
    "level": "Svær",
    "question": "Hvilken oplysning fra Harry Potter-bøgerne passer til dette spørgsmål? Hvilken afdeling i Ministeriet for Magi bliver central i bogens afslutning?",
    "answerDa": "Mysteriedepartementet",
    "answerEn": "The Department of Mysteries",
    "correctKey": "right",
    "why": "Harry bliver lokket til Mysteriedepartementet af et syn, der viser sig at være manipuleret.",
    "aliases": [
      "Mysteriedepartementet",
      "Department of Mysteries"
    ],
    "type": "fact"
  },
  {
    "id": "q499",
    "book": 5,
    "level": "Svær",
    "question": "Hvilken oplysning fra Harry Potter-bøgerne passer til dette spørgsmål? Hvem mister Harry under kampen i Ministeriet?",
    "answerDa": "Sirius Black",
    "answerEn": "Sirius Black",
    "correctKey": "right",
    "why": "Sirius falder gennem sløret i Dødskammeret efter kampen med Bellatrix.",
    "aliases": [
      "Sirius Black",
      "Sirius Black"
    ],
    "type": "fact"
  },
  {
    "id": "q500",
    "book": 5,
    "level": "Svær",
    "question": "Hvilken oplysning fra Harry Potter-bøgerne passer til dette spørgsmål? Hvem er den eneste elev, der kan se thestralerne ved begyndelsen af skoleåret sammen med Harry?",
    "answerDa": "Luna Lovegood",
    "answerEn": "Luna Lovegood",
    "correctKey": "right",
    "why": "Luna kan se thestralerne, fordi hun har været vidne til døden.",
    "aliases": [
      "Luna Lovegood",
      "Luna Lovegood"
    ],
    "type": "fact"
  }
];
