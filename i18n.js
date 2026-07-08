// Wienerlingo — i18n (de / en / uk)
window.DW = (function () {
  "use strict";

  var DICTS = {
    /* ================= DEUTSCH (rechtsverbindliche Basis) ================= */
    de: {
      "meta.title": "Wienerlingo Wien — Deutschkurse A1–C1 | ÖSD-, ÖIF- & Goethe-Vorbereitung",
      "meta.desc": "Online-Deutschkurse für Erwachsene in Österreich: Niveaus A1–C1, Vorbereitung auf ÖSD, ÖIF und Goethe-Zertifikat, kleine Gruppen bis 6 Personen. Erste Stunde gratis.",
      "nav.levels": "Niveaus", "nav.why": "Warum wir", "nav.teachers": "Lehrkräfte", "nav.pricing": "Preise",
      "nav.platform": "Plattform",
      "nav.cta": "Gratis Probestunde",
      "hero.badge": "Anmeldung offen — Kursstart am 1. Juli",
      "hero.title1": "Deutsch, das wirkt —", "hero.for": "für",
      "hero.sub": "Online-Sprachschule für Erwachsene in Österreich. Kleine Gruppen bis 6 Personen, zertifizierte Lehrkräfte und ein Programm, nach dem Sie sprechen — nicht nur „lernen“.",
      "hero.cta1": "Gratis Probestunde sichern", "hero.cta2": "Programm ansehen",
      "hero.stat1": "Jahre Erfahrung", "hero.stat2": "Absolvent:innen", "hero.stat3": "bestehen die ÖSD-Prüfung",
      "hero.chatLabel": "Live-Unterricht · Niveau B1",
      "hero.chatNote": "Perfekt — fehlerfreies Perfekt!",
      "levels.label": "Programm",
      "levels.title": "Von „Hallo“ bis zum freien Gespräch",
      "levels.sub": "Fünf Niveaus nach dem Europäischen Referenzrahmen (GER). Klicken Sie auf ein Niveau für Details.",
      "lv.a1.name": "Start", "lv.a1.meta": "4 Monate · 32 Einheiten",
      "lv.a1.desc": "Alphabet, Aussprache, Basisgrammatik. Sie können sich vorstellen, im Café bestellen, nach dem Weg fragen und in einfachen Sätzen über sich erzählen.",
      "lv.a1.s1": "≈ 800 Wörter", "lv.a1.s2": "Präsens & Artikel", "lv.a1.s3": "Alltagsdialoge",
      "lv.a2.name": "Aufbau", "lv.a2.meta": "4 Monate · 32 Einheiten",
      "lv.a2.desc": "Vergangenheit, Zukunftspläne, Korrespondenz. Sie fühlen sich auf Reisen sicher, verstehen Durchsagen und führen einfache Telefongespräche.",
      "lv.a2.s1": "≈ 1500 Wörter", "lv.a2.s2": "Perfekt & Dativ", "lv.a2.s3": "Small Talk",
      "lv.b1.name": "Selbstständig", "lv.b1.meta": "5 Monate · 40 Einheiten",
      "lv.b1.desc": "Das Niveau für Job, Aufenthaltstitel und Staatsbürgerschaft in Österreich. Sie argumentieren, schreiben offizielle Briefe und verstehen Serien ohne Untertitel. Vorbereitung auf ÖSD/ÖIF B1.",
      "lv.b1.s1": "≈ 2500 Wörter", "lv.b1.s2": "Konjunktiv II", "lv.b1.s3": "ÖSD / ÖIF B1",
      "lv.b2.name": "Beruf", "lv.b2.meta": "5 Monate · 40 Einheiten",
      "lv.b2.desc": "Freie Diskussion über berufliche Themen, Präsentationen, Bewerbungsgespräche auf Deutsch. Das Niveau, das Arbeitgeber und Universitäten verlangen. Vorbereitung auf ÖSD B2.",
      "lv.b2.s1": "≈ 4000 Wörter", "lv.b2.s2": "Passiv & Nominalstil", "lv.b2.s3": "ÖSD B2 / TestDaF",
      "lv.c1.name": "Meisterschaft", "lv.c1.meta": "6 Monate · 48 Einheiten",
      "lv.c1.desc": "Stilnuancen, Idiome, akademisches Schreiben. Sie sprechen spontan und präzise — auf dem Niveau gebildeter Muttersprachler:innen. Für Medizin, Recht und das Masterstudium.",
      "lv.c1.s1": "6000+ Wörter", "lv.c1.s2": "Stilistik", "lv.c1.s3": "ÖSD / Goethe C1",
      "why.label": "Warum wir", "why.title": "Ein System — nicht nur Unterricht",
      "why.c1.t": "Gruppen bis 6 Personen", "why.c1.p": "Jede:r spricht in jeder Einheit mindestens 20 Minuten. Keine „Vorlesungen für dreißig Leute“.",
      "why.c2.t": "Wöchentliche Sprachclubs", "why.c2.p": "Kostenlose Sprachclub-Treffen mit Muttersprachler:innen — für alle Studierenden ab Niveau A2.",
      "why.c3.t": "ÖSD-, ÖIF- & Goethe-Vorbereitung", "why.c3.p": "Eigene Module mit Prüfungsformat, Probetests und Analyse typischer Fehler — für alle anerkannten Prüfungen in Österreich.",
      "why.c4.t": "Flexible Zeiten", "why.c4.p": "Morgen-, Abend- und Samstagsgruppen. Einheit verpasst? Sie erhalten Aufzeichnung und Skript.",
      "why.c5.t": "Eigene Lernplattform", "why.c5.p": "Interaktive Hausaufgaben mit Auto-Korrektur, vertontes Wörterbuch und Fortschritts-Tracker.",
      "why.c6.t": "Niveau-Zertifikat", "why.c6.p": "Nach jedem Niveau: interne Prüfung und Zertifikat, das Partnerunternehmen anerkennen.",
      "how.label": "So funktioniert's", "how.title": "In drei Schritten zum ersten Satz",
      "how.sub": "Kein Papierkram, kein Risiko. Sie starten mit einer gratis Probestunde.",
      "how.s1.t": "Probestunde anfragen", "how.s1.p": "Formular ausfüllen — wir melden uns innerhalb einer Stunde per Telegram.",
      "how.s2.t": "Niveau & Gruppe finden", "how.s2.p": "Kurzer Einstufungstest, dann wählen wir gemeinsam Format und Zeit.",
      "how.s3.t": "Sprechen ab der ersten Einheit", "how.s3.p": "Sie lernen in einer kleinen Gruppe — und reden vom ersten Tag an.",
      "team.label": "Team", "team.title": "Lehrkräfte, die die Sprache leben",
      "team.t1.role": "Niveaus A0–C1 · Grammatik & Übersetzung",
      "team.t1.bio": "5 Jahre Unterrichtserfahrung, Bachelor der Universität Wien und Übersetzerdiplom. Erklärt Grammatik so, dass man sie endlich versteht.",
      "team.t2.role": "Niveaus A1–B2 · Sprechen & Dialekt",
      "team.t2.bio": "4 Jahre Unterrichtserfahrung, Bachelor der Universität Wien. Nimmt die Angst vor dem Sprechen und bringt dir bei, den österreichischen Dialekt endlich zu verstehen.",
      "price.label": "Preise", "price.title": "Ein Format für Ihren Rhythmus",
      "price.sub": "Monatliche Zahlung, jederzeit kündbar. Die erste Einheit ist in jedem Format gratis. Alle Preise inkl. gesetzlicher USt.",
      "price.month": "/Monat", "price.popular": "Am beliebtesten", "price.cta": "Gratis ausprobieren",
      "price.p1.name": "Gruppe", "price.p1.note": "bis 6 Personen pro Gruppe",
      "price.p1.f1": "8 Einheiten à 80 Minuten", "price.p1.f2": "Lernplattform mit Hausaufgaben",
      "price.p1.f3": "Wöchentlicher Sprachclub", "price.p1.f4": "Aufzeichnungen aller Einheiten",
      "price.p2.name": "Mini-Gruppe", "price.p2.note": "2–3 Personen, schnelleres Tempo",
      "price.p2.f1": "8 Einheiten à 80 Minuten", "price.p2.f2": "Alles aus dem Tarif „Gruppe“",
      "price.p2.f3": "Individuelles Feedback pro Woche", "price.p2.f4": "Korrektur schriftlicher Arbeiten", "price.p2.f5": "Bevorzugte Terminwahl",
      "price.p3.name": "Einzelunterricht", "price.p3.note": "persönliches Programm 1:1",
      "price.p3.f1": "8 Einheiten à 60 Minuten", "price.p3.f2": "Programm nach Ihrem Ziel",
      "price.p3.f3": "Flexibles Verschieben von Einheiten", "price.p3.f4": "Chat-Support der Lehrkraft",
      "rev.label": "Stimmen", "rev.title": "Es funktioniert. Sagen unsere Studierenden",
      "rev.r1.q": "„In 9 Monaten von null auf B1 — die ÖSD-Prüfung habe ich beim ersten Versuch mit 87 Punkten bestanden. Jetzt arbeite ich als Krankenpflegerin in Wien.“",
      "rev.r1.s": "A0 → B1 · ÖSD-Zertifikat",
      "rev.r2.q": "„Das Beste sind die Sprachclubs mit Lukas. Nach einem halben Jahr hatte ich keine Angst mehr, österreichische Kunden anzurufen.“",
      "rev.r2.s": "B1 → B2 · IT-Manager, Graz",
      "rev.r3.q": "„Ich habe davor drei Schulen probiert. Hier gibt es zum ersten Mal ein System: Ich sehe meinen Fortschritt jede Woche auf der Plattform.“",
      "rev.r3.s": "A2 → B1 · Umzug nach Wien",
      "faq.title": "Häufige Fragen",
      "faq.q1": "Ich habe noch nie Deutsch gelernt. Wo fange ich an?",
      "faq.a1": "Mit der gratis Probestunde: Wir klären Ihr Ziel, machen einen Einstufungstest (falls Vorkenntnisse da sind) und finden die nächste A1-Gruppe. Vorbereitung ist nicht nötig.",
      "faq.q2": "Wie lange dauert es bis Niveau B1?",
      "faq.a2": "Im Standardtempo etwa 13 Monate (A1 + A2 + B1). In der Mini-Gruppe oder im Einzelunterricht ab 9–10 Monaten — bei regelmäßigen Hausaufgaben.",
      "faq.q3": "Was passiert, wenn ich eine Einheit verpasse?",
      "faq.a3": "Alle Einheiten werden aufgezeichnet. Sie erhalten Aufzeichnung, Skript und Hausaufgabe auf der Plattform; in der nächsten Einheit fasst die Lehrkraft das Verpasste kurz zusammen.",
      "faq.q4": "Helfen Sie bei der Anmeldung zur ÖSD- oder Goethe-Prüfung?",
      "faq.a4": "Ja. Wir empfehlen Termine und Prüfungszentren in Österreich, helfen bei der Anmeldung und führen zwei Probeprüfungen im realen Format durch — bewertet nach den offiziellen Kriterien.",
      "faq.q5": "Kann ich den Kurs pausieren?",
      "faq.a5": "Ja, bis zu 2 Monate pro Jahr ohne Verlust bezahlter Einheiten — Urlaub, Dienstreise oder Uni-Prüfungen gefährden Ihren Fortschritt nicht.",
      "cta.title": "Die erste Stunde ist gratis",
      "cta.sub": "Hinterlassen Sie Ihren Kontakt — wir melden uns innerhalb einer Stunde (werktags) per Telegram, finden Ihre Gruppe und senden den Link zur Probestunde.",
      "cta.fName": "Name", "cta.fNamePh": "Wie dürfen wir Sie nennen?",
      "cta.fContact": "Telegram oder Telefon", "cta.fContactPh": "@username oder +43…",
      "cta.fLevel": "Ihr Niveau",
      "cta.lvUnknown": "Weiß ich nicht — Einstufungstest bitte", "cta.lvZero": "Ich beginne bei null",
      "cta.consent": "Ich habe die <a href=\"datenschutz.html\">Datenschutzerklärung</a> gelesen und stimme der Verarbeitung meiner Daten zur Kontaktaufnahme zu.",
      "cta.submit": "Gratis Probestunde anfragen",
      "cta.errName": "Bitte geben Sie Ihren Namen an.",
      "cta.errContact": "Bitte geben Sie Telegram oder Telefonnummer an, damit wir antworten können.",
      "cta.errConsent": "Bitte stimmen Sie der Datenschutzerklärung zu.",
      "cta.ok": "Danke, {name}! Wir öffnen Telegram — die Nachricht ist bereits in Ihrer Zwischenablage.",
      "cta.done": "Erledigt",
      "cta.again": "Weitere Anfrage senden",
      "cta.msgIntro": "Hallo! Ich möchte eine gratis Probestunde Deutsch.",
      "cta.msgName": "Name", "cta.msgContact": "Kontakt", "cta.msgLevel": "Niveau",
      "foot.brand": "Online-Sprachschule für Deutsch.<br>Mustergasse 12/4, 1010 Wien, Österreich.",
      "foot.imprint": "Impressum", "foot.privacy": "Datenschutz", "foot.terms": "AGB",
      "foot.copy": "© 2026 Wienerlingo e.U. · Alle Rechte vorbehalten.",
      "legal.back": "← Zurück zur Startseite",
      "_rotator": ["deine Karriere", "den Job in Wien", "das Studium", "die ÖSD-Prüfung", "dich selbst"],
      "_marqueeTitle": "Österreichisch ↔ Hochdeutsch",
      "_marquee": [["Paradeiser", "Tomate"], ["Semmel", "Brötchen"], ["Schlagobers", "Sahne"], ["Jänner", "Januar"], ["Erdäpfel", "Kartoffeln"], ["Marille", "Aprikose"], ["Sackerl", "Tüte"], ["Servus", "Hallo"]]
    },

    /* ================= ENGLISH ================= */
    en: {
      "meta.title": "Wienerlingo Vienna — German Courses A1–C1 | ÖSD, ÖIF & Goethe Preparation",
      "meta.desc": "Online German courses for adults in Austria: levels A1–C1, preparation for ÖSD, ÖIF and Goethe-Zertifikat, small groups of up to 6 people. First lesson free.",
      "nav.levels": "Levels", "nav.why": "Why us", "nav.teachers": "Teachers", "nav.pricing": "Pricing",
      "nav.platform": "Platform",
      "nav.cta": "Free trial lesson",
      "hero.badge": "Enrolment open — courses start July 1",
      "hero.title1": "German that works —", "hero.for": "for",
      "hero.sub": "An online language school for adults in Austria. Small groups of up to 6 people, certified teachers and a programme that gets you speaking — not just \"studying\".",
      "hero.cta1": "Get your free trial lesson", "hero.cta2": "View the programme",
      "hero.stat1": "years of teaching", "hero.stat2": "graduates", "hero.stat3": "pass the ÖSD exam",
      "hero.chatLabel": "Live lesson · Level B1",
      "hero.chatNote": "Perfect — flawless Perfekt tense!",
      "levels.label": "Programme",
      "levels.title": "From \"Hallo\" to fluent conversation",
      "levels.sub": "Five levels following the Common European Framework (CEFR). Click a level to see details.",
      "lv.a1.name": "Start", "lv.a1.meta": "4 months · 32 lessons",
      "lv.a1.desc": "Alphabet, pronunciation, basic grammar. You'll introduce yourself, order in a café, ask for directions and talk about yourself in simple sentences.",
      "lv.a1.s1": "≈ 800 words", "lv.a1.s2": "Present tense & articles", "lv.a1.s3": "Everyday dialogues",
      "lv.a2.name": "Foundation", "lv.a2.meta": "4 months · 32 lessons",
      "lv.a2.desc": "Past tense, future plans, correspondence. You'll feel confident travelling, understand announcements and handle simple phone calls.",
      "lv.a2.s1": "≈ 1,500 words", "lv.a2.s2": "Perfekt & dative", "lv.a2.s3": "Small talk",
      "lv.b1.name": "Independent", "lv.b1.meta": "5 months · 40 lessons",
      "lv.b1.desc": "The level required for jobs, residence permits and Austrian citizenship. You'll argue your point, write official letters and watch series without subtitles. Preparation for ÖSD/ÖIF B1.",
      "lv.b1.s1": "≈ 2,500 words", "lv.b1.s2": "Konjunktiv II", "lv.b1.s3": "ÖSD / ÖIF B1",
      "lv.b2.name": "Professional", "lv.b2.meta": "5 months · 40 lessons",
      "lv.b2.desc": "Free discussion of professional topics, presentations and job interviews in German. The level employers and universities ask for. Preparation for ÖSD B2.",
      "lv.b2.s1": "≈ 4,000 words", "lv.b2.s2": "Passive & formal style", "lv.b2.s3": "ÖSD B2 / TestDaF",
      "lv.c1.name": "Mastery", "lv.c1.meta": "6 months · 48 lessons",
      "lv.c1.desc": "Nuances of style, idioms, academic writing. You'll speak spontaneously and precisely — at the level of an educated native speaker. For medicine, law and master's degrees.",
      "lv.c1.s1": "6,000+ words", "lv.c1.s2": "Stylistics", "lv.c1.s3": "ÖSD / Goethe C1",
      "why.label": "Why us", "why.title": "A system — not just lessons",
      "why.c1.t": "Groups of up to 6", "why.c1.p": "Everyone speaks for at least 20 minutes in every lesson. No \"lectures for thirty people\".",
      "why.c2.t": "Weekly conversation clubs", "why.c2.p": "Free Sprachclub meetings with native speakers — for all students from level A2.",
      "why.c3.t": "ÖSD, ÖIF & Goethe preparation", "why.c3.p": "Dedicated modules with exam format, mock tests and analysis of typical mistakes — for all exams recognised in Austria.",
      "why.c4.t": "Flexible schedule", "why.c4.p": "Morning, evening and Saturday groups. Missed a lesson? You'll get the recording and notes.",
      "why.c5.t": "Our own learning platform", "why.c5.p": "Interactive homework with auto-checking, an audio dictionary and a progress tracker.",
      "why.c6.t": "Level certificate", "why.c6.p": "After each level: an internal exam and a certificate recognised by partner companies.",
      "how.label": "How it works", "how.title": "Three steps to your first sentence",
      "how.sub": "No paperwork, no risk. You start with a free trial lesson.",
      "how.s1.t": "Request a trial lesson", "how.s1.p": "Fill in the form — we reply within an hour on Telegram.",
      "how.s2.t": "Find your level & group", "how.s2.p": "A short placement test, then we choose the format and time together.",
      "how.s3.t": "Speak from lesson one", "how.s3.p": "You learn in a small group — and talk from the very first day.",
      "team.label": "Team", "team.title": "Teachers who live the language",
      "team.t1.role": "Levels A0–C1 · grammar & translation",
      "team.t1.bio": "5 years of teaching, a bachelor's degree from the University of Vienna and a translator's diploma. Explains grammar so you finally understand it.",
      "team.t2.role": "Levels A1–B2 · speaking & dialect",
      "team.t2.bio": "4 years of teaching, a bachelor's degree from the University of Vienna. Takes away the fear of speaking and finally teaches you to understand the Austrian dialect.",
      "price.label": "Pricing", "price.title": "A format for your rhythm",
      "price.sub": "Monthly payment, cancel any time. The first lesson is free in every format. All prices include statutory VAT.",
      "price.month": "/month", "price.popular": "Most popular", "price.cta": "Try for free",
      "price.p1.name": "Group", "price.p1.note": "up to 6 people per group",
      "price.p1.f1": "8 lessons of 80 minutes", "price.p1.f2": "Learning platform with homework",
      "price.p1.f3": "Weekly conversation club", "price.p1.f4": "Recordings of all lessons",
      "price.p2.name": "Mini group", "price.p2.note": "2–3 people, faster pace",
      "price.p2.f1": "8 lessons of 80 minutes", "price.p2.f2": "Everything in \"Group\"",
      "price.p2.f3": "Individual weekly feedback", "price.p2.f4": "Correction of written work", "price.p2.f5": "Priority scheduling",
      "price.p3.name": "One-to-one", "price.p3.note": "personal 1:1 programme",
      "price.p3.f1": "8 lessons of 60 minutes", "price.p3.f2": "Programme built around your goal",
      "price.p3.f3": "Flexible rescheduling", "price.p3.f4": "Teacher chat support",
      "rev.label": "Reviews", "rev.title": "It works. Our students say so",
      "rev.r1.q": "\"From zero to B1 in 9 months — I passed the ÖSD exam on my first try with 87 points. Now I work as a nurse in Vienna.\"",
      "rev.r1.s": "A0 → B1 · ÖSD certificate",
      "rev.r2.q": "\"The best part is the conversation clubs with Lukas. After six months I was no longer afraid to call Austrian clients.\"",
      "rev.r2.s": "B1 → B2 · IT manager, Graz",
      "rev.r3.q": "\"I tried three schools before this one. Here, for the first time, there's a system: I see my progress on the platform every week.\"",
      "rev.r3.s": "A2 → B1 · moving to Vienna",
      "faq.title": "Frequently asked questions",
      "faq.q1": "I've never learned German. Where do I start?",
      "faq.a1": "With the free trial lesson: we'll clarify your goal, run a placement test (if you have any prior knowledge) and find the next A1 group. No preparation needed.",
      "faq.q2": "How long does it take to reach B1?",
      "faq.a2": "At the standard pace, about 13 months (A1 + A2 + B1). In a mini group or one-to-one, from 9–10 months — with regular homework.",
      "faq.q3": "What if I miss a lesson?",
      "faq.a3": "All lessons are recorded. You'll receive the recording, notes and homework on the platform; in the next lesson, the teacher briefly recaps what you missed.",
      "faq.q4": "Do you help with registering for the ÖSD or Goethe exam?",
      "faq.a4": "Yes. We recommend dates and exam centres in Austria, help with registration and run two mock exams in the real format — graded by the official criteria.",
      "faq.q5": "Can I pause the course?",
      "faq.a5": "Yes, up to 2 months per year without losing paid lessons — holidays, business trips or university exams won't jeopardise your progress.",
      "cta.title": "The first lesson is free",
      "cta.sub": "Leave your contact details — we'll reach out via Telegram within an hour (on working days), find your group and send the link to your trial lesson.",
      "cta.fName": "Name", "cta.fNamePh": "What should we call you?",
      "cta.fContact": "Telegram or phone", "cta.fContactPh": "@username or +43…",
      "cta.fLevel": "Your level",
      "cta.lvUnknown": "I don't know — placement test, please", "cta.lvZero": "Starting from zero",
      "cta.consent": "I have read the <a href=\"datenschutz.html\">privacy policy</a> and consent to the processing of my data for the purpose of being contacted.",
      "cta.submit": "Request a free trial lesson",
      "cta.errName": "Please enter your name.",
      "cta.errContact": "Please enter your Telegram or phone number so we can reply.",
      "cta.errConsent": "Please agree to the privacy policy.",
      "cta.ok": "Thank you, {name}! Opening Telegram — the message is already in your clipboard.",
      "cta.done": "Done",
      "cta.again": "Send another request",
      "cta.msgIntro": "Hello! I'd like a free trial German lesson.",
      "cta.msgName": "Name", "cta.msgContact": "Contact", "cta.msgLevel": "Level",
      "foot.brand": "Online German language school.<br>Mustergasse 12/4, 1010 Vienna, Austria.",
      "foot.imprint": "Legal notice", "foot.privacy": "Privacy policy", "foot.terms": "Terms (AGB)",
      "foot.copy": "© 2026 Wienerlingo e.U. · All rights reserved.",
      "legal.back": "← Back to home page",
      "_rotator": ["your career", "a job in Vienna", "university", "the ÖSD exam", "yourself"],
      "_marqueeTitle": "German ↔ English",
      "_marquee": [["Hallo", "hello"], ["Genau", "exactly"], ["Los geht's", "let's go"], ["Danke schön", "thank you"], ["Wunderbar", "wonderful"], ["Alles klar", "all clear"], ["Viel Erfolg", "good luck"], ["Bis bald", "see you soon"]]
    },

    /* ================= УКРАЇНСЬКА ================= */
    uk: {
      "meta.title": "Wienerlingo Відень — курси німецької A1–C1 | підготовка до ÖSD, ÖIF та Goethe",
      "meta.desc": "Онлайн-курси німецької мови для дорослих в Австрії: рівні A1–C1, підготовка до ÖSD, ÖIF і Goethe-Zertifikat, малі групи до 6 людей. Перший урок безкоштовно.",
      "nav.levels": "Рівні", "nav.why": "Чому ми", "nav.teachers": "Викладачі", "nav.pricing": "Ціни",
      "nav.platform": "Платформа",
      "nav.cta": "Безкоштовний урок",
      "hero.badge": "Набір відкрито — старт курсів 1 липня",
      "hero.title1": "Німецька, що працює —", "hero.for": "для",
      "hero.sub": "Онлайн-школа німецької для дорослих в Австрії. Малі групи до 6 людей, сертифіковані викладачі та програма, після якої ви говорите, а не «вчите».",
      "hero.cta1": "Отримати безкоштовний урок", "hero.cta2": "Дивитися програму",
      "hero.stat1": "років викладаємо", "hero.stat2": "випускників", "hero.stat3": "складають іспит ÖSD",
      "hero.chatLabel": "Живе заняття · рівень B1",
      "hero.chatNote": "Perfekt — бездоганний минулий час!",
      "levels.label": "Програма",
      "levels.title": "Від «Hallo» до вільної розмови",
      "levels.sub": "П'ять рівнів за європейською шкалою CEFR. Натисніть на рівень, щоб побачити деталі.",
      "lv.a1.name": "Старт", "lv.a1.meta": "4 місяці · 32 заняття",
      "lv.a1.desc": "Алфавіт, вимова, базова граматика. Ви зможете представитися, зробити замовлення в кафе, спитати дорогу та розповісти про себе простими реченнями.",
      "lv.a1.s1": "≈ 800 слів", "lv.a1.s2": "Präsens та артиклі", "lv.a1.s3": "Діалоги побуту",
      "lv.a2.name": "Базовий", "lv.a2.meta": "4 місяці · 32 заняття",
      "lv.a2.desc": "Минулий час, плани на майбутнє, листування. Ви впевнено почуваєтеся в подорожах, розумієте оголошення та ведете прості розмови по телефону.",
      "lv.a2.s1": "≈ 1500 слів", "lv.a2.s2": "Perfekt і Dativ", "lv.a2.s3": "Small talk",
      "lv.b1.name": "Самостійний", "lv.b1.meta": "5 місяців · 40 занять",
      "lv.b1.desc": "Рівень для роботи, посвідки на проживання та громадянства Австрії. Ви аргументуєте думку, пишете офіційні листи й розумієте серіали без субтитрів. Підготовка до ÖSD/ÖIF B1.",
      "lv.b1.s1": "≈ 2500 слів", "lv.b1.s2": "Konjunktiv II", "lv.b1.s3": "ÖSD / ÖIF B1",
      "lv.b2.name": "Професійний", "lv.b2.meta": "5 місяців · 40 занять",
      "lv.b2.desc": "Вільна дискусія на професійні теми, презентації, співбесіди німецькою. Рівень, який просять роботодавці та університети. Підготовка до ÖSD B2.",
      "lv.b2.s1": "≈ 4000 слів", "lv.b2.s2": "Passiv і Nominalstil", "lv.b2.s3": "ÖSD B2 / TestDaF",
      "lv.c1.name": "Майстерність", "lv.c1.meta": "6 місяців · 48 занять",
      "lv.c1.desc": "Нюанси стилю, ідіоми, академічне письмо. Ви говорите спонтанно й точно — на рівні освіченого носія. Для медицини, права та вступу в магістратуру.",
      "lv.c1.s1": "6000+ слів", "lv.c1.s2": "Стилістика", "lv.c1.s3": "ÖSD / Goethe C1",
      "why.label": "Чому ми", "why.title": "Система, а не просто уроки",
      "why.c1.t": "Групи до 6 людей", "why.c1.p": "Кожен говорить на кожному занятті щонайменше 20 хвилин. Жодних «лекцій для тридцятьох».",
      "why.c2.t": "Розмовні клуби щотижня", "why.c2.p": "Безплатні Sprachclub-зустрічі з носіями мови — для всіх студентів із рівня A2.",
      "why.c3.t": "Підготовка до ÖSD, ÖIF і Goethe", "why.c3.p": "Окремі модулі з форматом іспиту, пробними тестами та розбором типових помилок — для всіх визнаних в Австрії іспитів.",
      "why.c4.t": "Гнучкий графік", "why.c4.p": "Ранкові, вечірні та суботні групи. Пропустили заняття — отримаєте запис і конспект.",
      "why.c5.t": "Власна платформа", "why.c5.p": "Інтерактивні домашки з автоперевіркою, словник із озвучкою та трекер прогресу.",
      "why.c6.t": "Сертифікат рівня", "why.c6.p": "Після кожного рівня — внутрішній іспит і сертифікат, який визнають партнерські компанії.",
      "how.label": "Як це працює", "how.title": "Три кроки до першого речення",
      "how.sub": "Жодних паперів і ризику. Ви починаєте з безкоштовного пробного уроку.",
      "how.s1.t": "Залиште заявку", "how.s1.p": "Заповніть форму — відповімо впродовж години в Telegram.",
      "how.s2.t": "Визначимо рівень і групу", "how.s2.p": "Короткий тест рівня, потім разом оберемо формат і час.",
      "how.s3.t": "Говорите з першого заняття", "how.s3.p": "Навчаєтесь у малій групі — і говорите з першого дня.",
      "team.label": "Команда", "team.title": "Викладачі, які живуть мовою",
      "team.t1.role": "Рівні A0–C1 · граматика та переклад",
      "team.t1.bio": "5 років викладання, бакалавр Університету Відня та диплом перекладача. Пояснює граматику так, що ти її нарешті розумієш.",
      "team.t2.role": "Рівні A1–B2 · розмова та діалект",
      "team.t2.bio": "4 роки викладання, бакалавр Університету Відня. Знімає страх перед спілкуванням німецькою та навчить тебе нарешті розуміти австрійський діалект.",
      "price.label": "Ціни", "price.title": "Формат під ваш ритм",
      "price.sub": "Оплата помісячно, скасувати можна будь-коли. Перше заняття безкоштовне в будь-якому форматі. Усі ціни включають законний ПДВ (USt).",
      "price.month": "/міс", "price.popular": "Найпопулярніший", "price.cta": "Спробувати безкоштовно",
      "price.p1.name": "Група", "price.p1.note": "до 6 людей у групі",
      "price.p1.f1": "8 занять по 80 хвилин", "price.p1.f2": "Платформа з домашками",
      "price.p1.f3": "Розмовний клуб щотижня", "price.p1.f4": "Записи всіх занять",
      "price.p2.name": "Міні-група", "price.p2.note": "2–3 людини, швидший темп",
      "price.p2.f1": "8 занять по 80 хвилин", "price.p2.f2": "Усе з тарифу «Група»",
      "price.p2.f3": "Індивідуальний фідбек щотижня", "price.p2.f4": "Перевірка письмових робіт", "price.p2.f5": "Пріоритетний вибір розкладу",
      "price.p3.name": "Індивідуально", "price.p3.note": "персональна програма 1:1",
      "price.p3.f1": "8 занять по 60 хвилин", "price.p3.f2": "Програма під вашу ціль",
      "price.p3.f3": "Гнучке перенесення занять", "price.p3.f4": "Підтримка викладача в чаті",
      "rev.label": "Відгуки", "rev.title": "Це працює. Кажуть студенти",
      "rev.r1.q": "«За 9 місяців з нуля до B1 — іспит ÖSD склала з першої спроби на 87 балів. Тепер працюю медсестрою у Відні.»",
      "rev.r1.s": "A0 → B1 · сертифікат ÖSD",
      "rev.r2.q": "«Найкраще — розмовні клуби з Лукасом. Через пів року перестав боятися дзвонити австрійським клієнтам.»",
      "rev.r2.s": "B1 → B2 · IT-менеджер, Грац",
      "rev.r3.q": "«Пробувала три школи до цієї. Тут уперше є система: бачу свій прогрес на платформі щотижня.»",
      "rev.r3.s": "A2 → B1 · переїзд до Відня",
      "faq.title": "Часті запитання",
      "faq.q1": "Я ніколи не вчив німецьку. З чого почати?",
      "faq.a1": "З безкоштовного пробного уроку: визначимо ціль, зробимо тест рівня (якщо є базові знання) і підберемо найближчу групу A1. Готуватися не потрібно.",
      "faq.q2": "Скільки часу потрібно до рівня B1?",
      "faq.a2": "У стандартному темпі — близько 13 місяців (A1 + A2 + B1). У міні-групі або індивідуально — від 9–10 місяців за умови регулярних домашніх завдань.",
      "faq.q3": "Що, як я пропущу заняття?",
      "faq.a3": "Усі заняття записуються. Ви отримаєте запис, конспект і домашнє завдання на платформі, а на наступному занятті викладач коротко підсумує пропущене.",
      "faq.q4": "Чи допомагаєте з реєстрацією на іспит ÖSD або Goethe?",
      "faq.a4": "Так. Підкажемо дати й центри складання в Австрії, допоможемо з реєстрацією та проведемо два пробних іспити в реальному форматі з оцінюванням за офіційними критеріями.",
      "faq.q5": "Чи можна призупинити навчання?",
      "faq.a5": "Так, до 2 місяців на рік без втрати оплачених занять — відпустка, відрядження чи екзамени в університеті не зіпсують ваш прогрес.",
      "cta.title": "Перший урок — безкоштовно",
      "cta.sub": "Залиште контакт — ми напишемо вам у Telegram упродовж години в робочий час, підберемо групу та надішлемо посилання на пробне заняття.",
      "cta.fName": "Ім'я", "cta.fNamePh": "Як до вас звертатися",
      "cta.fContact": "Telegram або телефон", "cta.fContactPh": "@username або +43…",
      "cta.fLevel": "Ваш рівень",
      "cta.lvUnknown": "Не знаю — потрібен тест", "cta.lvZero": "Вчу з нуля",
      "cta.consent": "Я ознайомився/-лась із <a href=\"datenschutz.html\">політикою конфіденційності</a> та погоджуюся на обробку моїх даних для зв'язку зі мною.",
      "cta.submit": "Отримати безкоштовний урок",
      "cta.errName": "Вкажіть, будь ласка, ваше ім'я.",
      "cta.errContact": "Вкажіть Telegram або номер телефону, щоб ми могли відповісти.",
      "cta.errConsent": "Будь ласка, погодьтеся з політикою конфіденційності.",
      "cta.ok": "Дякуємо, {name}! Відкриваємо Telegram — повідомлення вже у вашому буфері обміну.",
      "cta.done": "Готово",
      "cta.again": "Надіслати ще одну заявку",
      "cta.msgIntro": "Привіт! Хочу безкоштовний пробний урок німецької.",
      "cta.msgName": "Ім'я", "cta.msgContact": "Контакт", "cta.msgLevel": "Рівень",
      "foot.brand": "Онлайн-школа німецької мови.<br>Mustergasse 12/4, 1010 Відень, Австрія.",
      "foot.imprint": "Impressum", "foot.privacy": "Конфіденційність", "foot.terms": "Умови (AGB)",
      "foot.copy": "© 2026 Wienerlingo e.U. · Усі права захищено.",
      "legal.back": "← Назад на головну",
      "_rotator": ["кар'єри", "роботи у Відні", "навчання", "іспиту ÖSD", "себе"],
      "_marqueeTitle": "Німецька ↔ українська",
      "_marquee": [["Hallo", "привіт"], ["Genau", "саме так"], ["Los geht's", "поїхали"], ["Danke schön", "дякую"], ["Wunderbar", "чудово"], ["Alles klar", "все зрозуміло"], ["Viel Erfolg", "успіхів"], ["Bis bald", "до зустрічі"]]
    },

    /* ================= РУССКИЙ ================= */
    ru: {
      "meta.title": "Wienerlingo Вена — курсы немецкого A1–C1 | подготовка к ÖSD, ÖIF и Goethe",
      "meta.desc": "Онлайн-курсы немецкого языка для взрослых в Австрии: уровни A1–C1, подготовка к ÖSD, ÖIF и Goethe-Zertifikat, малые группы до 6 человек. Первый урок бесплатно.",
      "nav.levels": "Уровни", "nav.why": "Почему мы", "nav.teachers": "Преподаватели", "nav.pricing": "Цены",
      "nav.platform": "Платформа",
      "nav.cta": "Бесплатный урок",
      "hero.badge": "Набор открыт — старт курсов 1 июля",
      "hero.title1": "Немецкий, который работает —", "hero.for": "для",
      "hero.sub": "Онлайн-школа немецкого для взрослых в Австрии. Малые группы до 6 человек, сертифицированные преподаватели и программа, после которой вы говорите, а не «учите».",
      "hero.cta1": "Получить бесплатный урок", "hero.cta2": "Смотреть программу",
      "hero.stat1": "лет преподаём", "hero.stat2": "выпускников", "hero.stat3": "сдают экзамен ÖSD",
      "hero.chatLabel": "Живое занятие · уровень B1",
      "hero.chatNote": "Perfekt — безупречное прошедшее время!",
      "levels.label": "Программа",
      "levels.title": "От «Hallo» до свободного разговора",
      "levels.sub": "Пять уровней по европейской шкале CEFR. Нажмите на уровень, чтобы увидеть детали.",
      "lv.a1.name": "Старт", "lv.a1.meta": "4 месяца · 32 занятия",
      "lv.a1.desc": "Алфавит, произношение, базовая грамматика. Вы сможете представиться, сделать заказ в кафе, спросить дорогу и рассказать о себе простыми предложениями.",
      "lv.a1.s1": "≈ 800 слов", "lv.a1.s2": "Präsens и артикли", "lv.a1.s3": "Бытовые диалоги",
      "lv.a2.name": "Базовый", "lv.a2.meta": "4 месяца · 32 занятия",
      "lv.a2.desc": "Прошедшее время, планы на будущее, переписка. Вы уверенно чувствуете себя в поездках, понимаете объявления и ведёте простые разговоры по телефону.",
      "lv.a2.s1": "≈ 1500 слов", "lv.a2.s2": "Perfekt и Dativ", "lv.a2.s3": "Small talk",
      "lv.b1.name": "Самостоятельный", "lv.b1.meta": "5 месяцев · 40 занятий",
      "lv.b1.desc": "Уровень для работы, вида на жительство и гражданства Австрии. Вы аргументируете мнение, пишете официальные письма и понимаете сериалы без субтитров. Подготовка к ÖSD/ÖIF B1.",
      "lv.b1.s1": "≈ 2500 слов", "lv.b1.s2": "Konjunktiv II", "lv.b1.s3": "ÖSD / ÖIF B1",
      "lv.b2.name": "Профессиональный", "lv.b2.meta": "5 месяцев · 40 занятий",
      "lv.b2.desc": "Свободная дискуссия на профессиональные темы, презентации, собеседования на немецком. Уровень, который требуют работодатели и университеты. Подготовка к ÖSD B2.",
      "lv.b2.s1": "≈ 4000 слов", "lv.b2.s2": "Passiv и Nominalstil", "lv.b2.s3": "ÖSD B2 / TestDaF",
      "lv.c1.name": "Мастерство", "lv.c1.meta": "6 месяцев · 48 занятий",
      "lv.c1.desc": "Нюансы стиля, идиомы, академическое письмо. Вы говорите спонтанно и точно — на уровне образованного носителя. Для медицины, права и поступления в магистратуру.",
      "lv.c1.s1": "6000+ слов", "lv.c1.s2": "Стилистика", "lv.c1.s3": "ÖSD / Goethe C1",
      "why.label": "Почему мы", "why.title": "Система, а не просто уроки",
      "why.c1.t": "Группы до 6 человек", "why.c1.p": "Каждый говорит на каждом занятии минимум 20 минут. Никаких «лекций для тридцати».",
      "why.c2.t": "Разговорные клубы каждую неделю", "why.c2.p": "Бесплатные встречи Sprachclub с носителями языка — для всех студентов с уровня A2.",
      "why.c3.t": "Подготовка к ÖSD, ÖIF и Goethe", "why.c3.p": "Отдельные модули с форматом экзамена, пробными тестами и разбором типичных ошибок — для всех признанных в Австрии экзаменов.",
      "why.c4.t": "Гибкий график", "why.c4.p": "Утренние, вечерние и субботние группы. Пропустили занятие — получите запись и конспект.",
      "why.c5.t": "Собственная платформа", "why.c5.p": "Интерактивные домашние задания с автопроверкой, словарь с озвучкой и трекер прогресса.",
      "why.c6.t": "Сертификат уровня", "why.c6.p": "После каждого уровня — внутренний экзамен и сертификат, который признают компании-партнёры.",
      "how.label": "Как это работает", "how.title": "Три шага до первого предложения",
      "how.sub": "Никаких бумаг и риска. Вы начинаете с бесплатного пробного урока.",
      "how.s1.t": "Оставьте заявку", "how.s1.p": "Заполните форму — ответим в течение часа в Telegram.",
      "how.s2.t": "Определим уровень и группу", "how.s2.p": "Короткий тест уровня, потом вместе выберем формат и время.",
      "how.s3.t": "Говорите с первого занятия", "how.s3.p": "Учитесь в малой группе — и говорите с первого дня.",
      "team.label": "Команда", "team.title": "Преподаватели, которые живут языком",
      "team.t1.role": "Уровни A0–C1 · грамматика и перевод",
      "team.t1.bio": "5 лет преподавания, бакалавр Венского университета и диплом переводчика. Объясняет грамматику так, что ты её наконец понимаешь.",
      "team.t2.role": "Уровни A1–B2 · разговор и диалект",
      "team.t2.bio": "4 года преподавания, бакалавр Венского университета. Снимает страх перед общением на немецком и научит тебя наконец понимать австрийский диалект.",
      "price.label": "Цены", "price.title": "Формат под ваш ритм",
      "price.sub": "Оплата помесячно, отменить можно в любой момент. Первое занятие бесплатное в любом формате. Все цены включают законный НДС (USt).",
      "price.month": "/мес", "price.popular": "Самый популярный", "price.cta": "Попробовать бесплатно",
      "price.p1.name": "Группа", "price.p1.note": "до 6 человек в группе",
      "price.p1.f1": "8 занятий по 80 минут", "price.p1.f2": "Платформа с домашними заданиями",
      "price.p1.f3": "Разговорный клуб каждую неделю", "price.p1.f4": "Записи всех занятий",
      "price.p2.name": "Мини-группа", "price.p2.note": "2–3 человека, быстрее темп",
      "price.p2.f1": "8 занятий по 80 минут", "price.p2.f2": "Всё из тарифа «Группа»",
      "price.p2.f3": "Индивидуальный фидбек каждую неделю", "price.p2.f4": "Проверка письменных работ", "price.p2.f5": "Приоритетный выбор расписания",
      "price.p3.name": "Индивидуально", "price.p3.note": "персональная программа 1:1",
      "price.p3.f1": "8 занятий по 60 минут", "price.p3.f2": "Программа под вашу цель",
      "price.p3.f3": "Гибкий перенос занятий", "price.p3.f4": "Поддержка преподавателя в чате",
      "rev.label": "Отзывы", "rev.title": "Это работает. Говорят студенты",
      "rev.r1.q": "«За 9 месяцев с нуля до B1 — экзамен ÖSD сдала с первой попытки на 87 баллов. Теперь работаю медсестрой в Вене.»",
      "rev.r1.s": "A0 → B1 · сертификат ÖSD",
      "rev.r2.q": "«Лучшее — разговорные клубы с Лукасом. Через полгода перестал бояться звонить австрийским клиентам.»",
      "rev.r2.s": "B1 → B2 · IT-менеджер, Грац",
      "rev.r3.q": "«Пробовала три школы до этой. Здесь впервые есть система: вижу свой прогресс на платформе каждую неделю.»",
      "rev.r3.s": "A2 → B1 · переезд в Вену",
      "faq.title": "Частые вопросы",
      "faq.q1": "Я никогда не учил немецкий. С чего начать?",
      "faq.a1": "С бесплатного пробного урока: определим цель, сделаем тест уровня (если есть базовые знания) и подберём ближайшую группу A1. Готовиться не нужно.",
      "faq.q2": "Сколько времени нужно до уровня B1?",
      "faq.a2": "В стандартном темпе — около 13 месяцев (A1 + A2 + B1). В мини-группе или индивидуально — от 9–10 месяцев при регулярных домашних заданиях.",
      "faq.q3": "Что, если я пропущу занятие?",
      "faq.a3": "Все занятия записываются. Вы получите запись, конспект и домашнее задание на платформе, а на следующем занятии преподаватель кратко повторит пропущенное.",
      "faq.q4": "Помогаете ли с регистрацией на экзамен ÖSD или Goethe?",
      "faq.a4": "Да. Подскажем даты и центры сдачи в Австрии, поможем с регистрацией и проведём два пробных экзамена в реальном формате с оценкой по официальным критериям.",
      "faq.q5": "Можно ли приостановить обучение?",
      "faq.a5": "Да, до 2 месяцев в год без потери оплаченных занятий — отпуск, командировка или экзамены в университете не испортят ваш прогресс.",
      "cta.title": "Первый урок — бесплатно",
      "cta.sub": "Оставьте контакт — мы напишем вам в Telegram в течение часа в рабочее время, подберём группу и пришлём ссылку на пробное занятие.",
      "cta.fName": "Имя", "cta.fNamePh": "Как к вам обращаться",
      "cta.fContact": "Telegram или телефон", "cta.fContactPh": "@username или +43…",
      "cta.fLevel": "Ваш уровень",
      "cta.lvUnknown": "Не знаю — нужен тест", "cta.lvZero": "Учу с нуля",
      "cta.consent": "Я ознакомился/-лась с <a href=\"datenschutz.html\">политикой конфиденциальности</a> и согласен(на) на обработку моих данных для связи со мной.",
      "cta.submit": "Получить бесплатный урок",
      "cta.errName": "Укажите, пожалуйста, ваше имя.",
      "cta.errContact": "Укажите Telegram или номер телефона, чтобы мы могли ответить.",
      "cta.errConsent": "Пожалуйста, согласитесь с политикой конфиденциальности.",
      "cta.ok": "Спасибо, {name}! Открываем Telegram — сообщение уже в вашем буфере обмена.",
      "cta.done": "Готово",
      "cta.again": "Отправить ещё одну заявку",
      "cta.msgIntro": "Привет! Хочу бесплатный пробный урок немецкого.",
      "cta.msgName": "Имя", "cta.msgContact": "Контакт", "cta.msgLevel": "Уровень",
      "foot.brand": "Онлайн-школа немецкого языка.<br>Mustergasse 12/4, 1010 Вена, Австрия.",
      "foot.imprint": "Impressum", "foot.privacy": "Конфиденциальность", "foot.terms": "Условия (AGB)",
      "foot.copy": "© 2026 Wienerlingo e.U. · Все права защищены.",
      "legal.back": "← Назад на главную",
      "_rotator": ["карьеры", "работы в Вене", "учёбы", "экзамена ÖSD", "себя"],
      "_marqueeTitle": "Немецкий ↔ русский",
      "_marquee": [["Hallo", "привет"], ["Genau", "именно так"], ["Los geht's", "поехали"], ["Danke schön", "спасибо"], ["Wunderbar", "чудесно"], ["Alles klar", "всё понятно"], ["Viel Erfolg", "успехов"], ["Bis bald", "до встречи"]]
    }
  };

  var LANGS = ["de", "en", "uk", "ru"];
  var lang = null;
  try { lang = localStorage.getItem("dw-lang"); } catch (e) {}
  /* Standardsprache ist Deutsch; Auswahl wird in localStorage gemerkt */
  if (LANGS.indexOf(lang) === -1) lang = "de";

  function t(key) {
    var d = DICTS[lang] || DICTS.de;
    return (key in d) ? d[key] : (DICTS.de[key] != null ? DICTS.de[key] : "");
  }

  function buildMarquee() {
    var track = document.getElementById("marqueeTrack");
    if (!track) return;
    var pairs = t("_marquee");
    var html = "";
    pairs.forEach(function (p) {
      html += "<span>" + p[0] + "<i>" + p[1] + "</i></span>";
    });
    track.innerHTML = html + html; /* подвоєння для безшовної петлі */
  }

  function apply() {
    document.documentElement.lang = lang;
    /* тексти */
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var v = t(el.getAttribute("data-i18n"));
      if (v) el.innerHTML = v;
    });
    document.querySelectorAll("[data-i18n-ph]").forEach(function (el) {
      var v = t(el.getAttribute("data-i18n-ph"));
      if (v) el.placeholder = v;
    });
    /* title + meta */
    var titleKey = document.body.getAttribute("data-title-key");
    if (titleKey) document.title = t(titleKey);
    var md = document.getElementById("metaDesc");
    if (md) md.setAttribute("content", t("meta.desc"));
    /* Hero-Banner: vom Lehrer gesetzter Text überschreibt den Standard */
    var hb = document.getElementById("heroBadgeText");
    if (hb) {
      var custom = "";
      try { custom = localStorage.getItem("dw-herobadge") || ""; } catch (e) {}
      if (custom) hb.textContent = custom;
    }
    /* юридичні сторінки: блоки мов (фолбек на DE — юридично обовʼязкову — якщо перекладу немає) */
    var blocks = document.querySelectorAll("[data-lang-block]");
    if (blocks.length) {
      var hasLang = false;
      blocks.forEach(function (b) { if (b.getAttribute("data-lang-block") === lang) hasLang = true; });
      var showLang = hasLang ? lang : "de";
      blocks.forEach(function (b) { b.hidden = b.getAttribute("data-lang-block") !== showLang; });
    }
    /* активна кнопка */
    document.querySelectorAll(".lang-btn").forEach(function (b) {
      b.classList.toggle("active", b.getAttribute("data-lang") === lang);
      b.setAttribute("aria-pressed", String(b.getAttribute("data-lang") === lang));
    });
    buildMarquee();
    document.dispatchEvent(new CustomEvent("dw:lang", { detail: { lang: lang } }));
  }

  function setLang(next) {
    if (LANGS.indexOf(next) === -1) return;
    lang = next;
    try { localStorage.setItem("dw-lang", lang); } catch (e) {}
    apply();
  }

  document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".lang-btn").forEach(function (b) {
      b.addEventListener("click", function () { setLang(b.getAttribute("data-lang")); });
    });
    apply();
  });

  return {
    t: t,
    setLang: setLang,
    getLang: function () { return lang; },
    rotatorWords: function () { return t("_rotator"); }
  };
})();
