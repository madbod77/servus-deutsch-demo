/* ============================================================
   Servus Deutsch — Lernplattform · Kursstruktur
   Jedes Niveau ist in zwei Kursstufen geteilt: A1.1 / A1.2 …
   Jede Kursstufe hat 8 Lektionen, einen eigenen Code, eigene
   Freigaben. Lektionsinhalte folgen anhand der Literaturliste;
   die Hausaufgaben-Engine ist voll funktionsfähig
   (Beispielaufgaben in A1.1, Lektion 1).
   ============================================================ */
(function () {
  var LESSONS_PER_COURSE = 8;

  function lessonStub(prefix, i) {
    return {
      id: prefix + "-" + i, n: i,
      title: { de: "Lektion " + i, en: "Lesson " + i, uk: "Урок " + i, ru: "Урок " + i },
      goal: { de: "", en: "", uk: "", ru: "" },
      material: "soon", teacher: "soon", homework: []
    };
  }
  function mkLessons(prefix) {
    var a = [];
    for (var i = 1; i <= LESSONS_PER_COURSE; i++) a.push(lessonStub(prefix, i));
    return a;
  }

  /* A1.1 — Lektion 1 mit Beispiel-Hausaufgaben (Demo der Engine) */
  var a11 = mkLessons("a11");
  a11[0].title = { de: "Begrüßung und Vorstellung", en: "Greetings and introductions", uk: "Привітання та знайомство", ru: "Приветствие и знакомство" };
  a11[0].goal = {
    de: "Du kannst dich begrüßen, vorstellen und einfache Fragen zur Person stellen.",
    en: "You can greet others, introduce yourself and ask simple personal questions.",
    uk: "Ти вмієш вітатися, представлятися та ставити прості особисті запитання.",
    ru: "Ты умеешь здороваться, представляться и задавать простые личные вопросы."
  };
  a11[0].homework = [
    {
      type: "choice",
      q: {
        de: "Welche Begrüßung passt am Vormittag in einem formellen Gespräch?",
        en: "Which greeting fits the morning in a formal conversation?",
        uk: "Яке привітання пасує зранку у формальній розмові?",
        ru: "Какое приветствие подходит утром в формальном разговоре?"
      },
      options: ["Guten Morgen", "Gute Nacht", "Bis später", "Mahlzeit"],
      answer: 0,
      explain: {
        de: "Am Morgen sagt man formell „Guten Morgen“. „Gute Nacht“ sagt man vor dem Schlafen.",
        en: "In the morning you formally say “Guten Morgen”. “Gute Nacht” is said before sleeping.",
        uk: "Зранку формально кажуть «Guten Morgen». «Gute Nacht» — перед сном.",
        ru: "Утром формально говорят «Guten Morgen». «Gute Nacht» — перед сном."
      }
    },
    {
      type: "fill",
      q: {
        de: "Ergänze das Verb „heißen“ (ich-Form):",
        en: "Complete the verb “heißen” (I-form):",
        uk: "Доповни дієслово «heißen» (форма «я»):",
        ru: "Дополни глагол «heißen» (форма «я»):"
      },
      before: "Ich", after: "Anna.",
      accept: ["heiße", "heisse"],
      hint: {
        de: "Verb „heißen“, 1. Person Singular. ß = ss.",
        en: "Verb “heißen”, 1st person singular. ß = ss.",
        uk: "Дієслово «heißen», 1-ша особа однини. ß = ss.",
        ru: "Глагол «heißen», 1-е лицо единственного числа. ß = ss."
      }
    },
    {
      type: "choice",
      q: {
        de: "Wie lautet die höfliche (formelle) Anrede auf Deutsch?",
        en: "What is the polite (formal) form of address in German?",
        uk: "Яка ввічлива (формальна) форма звертання в німецькій?",
        ru: "Как звучит вежливое (формальное) обращение в немецком?"
      },
      options: ["du", "Sie", "ihr", "es"],
      answer: 1,
      explain: {
        de: "Die formelle Anrede ist „Sie“ und wird immer großgeschrieben.",
        en: "The formal address is “Sie” and is always capitalised.",
        uk: "Формальне звертання — «Sie», завжди з великої літери.",
        ru: "Формальное обращение — «Sie», всегда пишется с большой буквы."
      }
    },
    {
      type: "match",
      q: {
        de: "Ordne jeder Begrüßung die richtige Bedeutung zu:",
        en: "Match each greeting with its correct meaning:",
        uk: "Зістав кожне привітання з правильним значенням:",
        ru: "Сопоставь каждое приветствие с правильным значением:"
      },
      pairs: [
        { de: "Hallo", tr: { de: "informelle Begrüßung", en: "hello (informal)", uk: "привіт (неформально)", ru: "привет (неформально)" } },
        { de: "Auf Wiedersehen", tr: { de: "formelle Verabschiedung", en: "goodbye (formal)", uk: "до побачення (формально)", ru: "до свидания (формально)" } },
        { de: "Servus", tr: { de: "österreichisch: hallo/tschüss", en: "Austrian: hi / bye", uk: "австрійське: привіт / па", ru: "австрийское: привет / пока" } },
        { de: "Guten Abend", tr: { de: "Begrüßung am Abend", en: "good evening", uk: "добрий вечір", ru: "добрый вечер" } }
      ]
    }
  ];

  window.COURSE = {
    levels: [
      { code: "A1.1", state: "active", title: { de: "Grundstufe · Teil 1", en: "Beginner · Part 1", uk: "Початковий · частина 1", ru: "Начальный · часть 1" }, lessons: a11 },
      { code: "A1.2", state: "soon", title: { de: "Grundstufe · Teil 2", en: "Beginner · Part 2", uk: "Початковий · частина 2", ru: "Начальный · часть 2" }, lessons: mkLessons("a12") },
      { code: "A2.1", state: "soon", title: { de: "Grundstufe · Teil 1", en: "Elementary · Part 1", uk: "Базовий · частина 1", ru: "Базовый · часть 1" }, lessons: mkLessons("a21") },
      { code: "A2.2", state: "soon", title: { de: "Grundstufe · Teil 2", en: "Elementary · Part 2", uk: "Базовий · частина 2", ru: "Базовый · часть 2" }, lessons: mkLessons("a22") },
      { code: "B1.1", state: "soon", title: { de: "Mittelstufe · Teil 1", en: "Intermediate · Part 1", uk: "Середній · частина 1", ru: "Средний · часть 1" }, lessons: mkLessons("b11") },
      { code: "B1.2", state: "soon", title: { de: "Mittelstufe · Teil 2", en: "Intermediate · Part 2", uk: "Середній · частина 2", ru: "Средний · часть 2" }, lessons: mkLessons("b12") },
      { code: "B2.1", state: "soon", title: { de: "Mittelstufe · Teil 1", en: "Upper-intermediate · Part 1", uk: "Вищий середній · частина 1", ru: "Выше среднего · часть 1" }, lessons: mkLessons("b21") },
      { code: "B2.2", state: "soon", title: { de: "Mittelstufe · Teil 2", en: "Upper-intermediate · Part 2", uk: "Вищий середній · частина 2", ru: "Выше среднего · часть 2" }, lessons: mkLessons("b22") },
      { code: "C1.1", state: "soon", title: { de: "Oberstufe · Teil 1", en: "Advanced · Part 1", uk: "Просунутий · частина 1", ru: "Продвинутый · часть 1" }, lessons: mkLessons("c11") },
      { code: "C1.2", state: "soon", title: { de: "Oberstufe · Teil 2", en: "Advanced · Part 2", uk: "Просунутий · частина 2", ru: "Продвинутый · часть 2" }, lessons: mkLessons("c12") }
    ]
  };

  /* ============================================================
     ZUGANGSCODES — hier zentral ändern.
     • Schüler-Codes: ein Code pro Kursstufe.
     • Lehrer-Code: an die Lehrkraft weitergeben → Lehrer-Bereich.
     Eingabe ist tolerant (Bindestriche/Leerzeichen/Groß-/Klein egal).
     ============================================================ */
  window.ACCESS = {
    teacher: "SD-TEACH-Q7K2M9",
    /* Drei Lernformate (wie auf der Preisseite) */
    formats: {
      group:      { label: { de: "Gruppe", en: "Group", uk: "Група", ru: "Группа" } },
      mini:       { label: { de: "Mini-Gruppe", en: "Mini group", uk: "Міні-група", ru: "Мини-группа" } },
      individual: { label: { de: "Einzelunterricht", en: "One-to-one", uk: "Індивідуально", ru: "Индивидуально" } }
    },
    /* Codes pro Format pro Kursstufe. Die Lehrkraft gibt dem Schüler den Code,
       der zu seinem bezahlten Format + Niveau passt. */
    codes: {
      group: {
        "A1.1": "SD-A11-H7M3K9", "A1.2": "SD-A12-T4Q8C5",
        "A2.1": "SD-A21-R2W6N7", "A2.2": "SD-A22-N9X4P3",
        "B1.1": "SD-B11-L6P1H8", "B1.2": "SD-B12-M3J7C2",
        "B2.1": "SD-B21-K9F5R4", "B2.2": "SD-B22-P2D8W6",
        "C1.1": "SD-C11-X7B3M1", "C1.2": "SD-C12-Q4H9T5"
      },
      mini: {
        "A1.1": "SD-M-A11-2T7K", "A1.2": "SD-M-A12-9C4Q",
        "A2.1": "SD-M-A21-5W2N", "A2.2": "SD-M-A22-8X6R",
        "B1.1": "SD-M-B11-3P8L", "B1.2": "SD-M-B12-6J4M",
        "B2.1": "SD-M-B21-9F5K", "B2.2": "SD-M-B22-2D6P",
        "C1.1": "SD-M-C11-7B1X", "C1.2": "SD-M-C12-4T9H"
      },
      individual: {
        "A1.1": "SD-E-A11-8K3H", "A1.2": "SD-E-A12-5Q4C",
        "A2.1": "SD-E-A21-2N9W", "A2.2": "SD-E-A22-6X5R",
        "B1.1": "SD-E-B11-9L2P", "B1.2": "SD-E-B12-4M8J",
        "B2.1": "SD-E-B21-5F9K", "B2.2": "SD-E-B22-6P2D",
        "C1.1": "SD-E-C11-1X7B", "C1.2": "SD-E-C12-9H4T"
      }
    }
  };
})();
