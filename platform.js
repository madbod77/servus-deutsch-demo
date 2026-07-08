/* ============================================================
   Wienerlingo — Lernplattform (Demo, statisch, localStorage)
   Rollen: Schüler:in / Lehrkraft · 3 Sprachen über window.DW
   ============================================================ */
(function () {
  "use strict";

  /* ---------------- UI-Übersetzungen ---------------- */
  var PI18N = {
    de: {
      "login.badge": "Demo-Zugang",
      "login.title": "Willkommen auf der Lernplattform",
      "login.sub": "Gib deinen Zugangscode ein, um die Plattform von Wienerlingo zu öffnen. Dein Fortschritt bleibt lokal in diesem Browser.",
      "login.nameLabel": "Dein Name",
      "login.namePh": "z. B. Anna",
      "login.errName": "Bitte gib deinen Namen ein.",
      "login.enter": "Plattform öffnen",
      "login.codeLabel": "Zugangscode",
      "login.codePh": "z. B. WD-A1-XXXXXX",
      "login.codeHint": "Den Code für dein Niveau bekommst du nach der Bezahlung von deiner Lehrkraft. Lehrkräfte geben ihren Lehrer-Code ein.",
      "login.invalid": "Code ungültig. Bitte überprüfe die Eingabe.",
      "dash.redeem": "Weiteren Code einlösen",
      "redeem.ph": "Zugangscode eingeben…",
      "redeem.btn": "Freischalten",
      "redeem.ok": "Niveau {lvl} wurde freigeschaltet!",
      "redeem.invalid": "Code ungültig.",
      "redeem.already": "Dieses Niveau ist bereits freigeschaltet.",
      "redeem.teacher": "Das ist ein Lehrer-Code. Bitte melde dich als Lehrkraft an.",
      "lock.tag": "Gesperrt",
      "lock.hint": "Mit Zugangscode freischalten",
      "header.site": "← Website",
      "header.logout": "Abmelden",
      "role.student": "Schüler:in",
      "role.teacher": "Lehrkraft",
      "dash.hello": "Hallo, {name}!",
      "dash.helloAnon": "Hallo!",
      "dash.subStudent": "Hier ist dein Deutschkurs. Mach weiter, wo du aufgehört hast.",
      "dash.subGroup": "Dein Gruppenkurs. Mach weiter, wo du aufgehört hast.",
      "dash.subMini": "Deine Mini-Gruppe (2–3 Personen). Mach weiter, wo du aufgehört hast.",
      "dash.subIndividual": "Dein persönlicher 1:1-Kurs. Deine Lehrkraft stimmt Material und Aufgaben auf dich ab.",
      "dash.yourFormat": "Dein Format",
      "stu.tasksEmpty": "Hier erscheinen deine persönlichen Aufgaben von der Lehrkraft.",
      "dash.subTeacher": "Verwalte das Unterrichtsmaterial und sieh den Fortschritt deiner Gruppe.",
      "dash.progress": "Dein Fortschritt",
      "dash.progressNote": "{done} von {total} Hausaufgaben erledigt",
      "dash.classBtn": "Klassenfortschritt ansehen",
      "dash.assignBtn": "Individuelle Aufgaben",
      "dash.studentsBtn": "Schüler:innen & Gruppen",
      "students.title": "Schüler:innen & Gruppen",
      "students.sub": "Verwalte deine Gruppen, Mini-Gruppen und Einzel-Schüler:innen.",
      "students.name": "Name",
      "students.namePh": "Name der Schülerin / des Schülers",
      "students.format": "Format",
      "students.group": "Gruppenname (optional)",
      "students.groupPh": "z. B. Mo/Mi 18:00",
      "students.add": "Schüler:in hinzufügen",
      "students.added": "Schüler:in hinzugefügt.",
      "students.none": "Noch keine Schüler:innen in diesem Format.",
      "students.noGroup": "Ohne Gruppe",
      "students.assignBtn": "Aufgabe geben",
      "dash.bannerToggle": "Startseiten-Ankündigung bearbeiten",
      "banner.ph": "z. B. Neuer Kurs ab 1. September — jetzt anmelden!",
      "banner.save": "Speichern",
      "banner.reset": "Standard",
      "banner.saved": "Startseiten-Ankündigung aktualisiert.",
      "assign.title": "Individuelle Aufgaben",
      "assign.sub": "Gib einer bestimmten Schülerin oder einem Schüler eine persönliche Aufgabe — ideal für Einzelunterricht.",
      "assign.student": "Name der Schülerin / des Schülers",
      "assign.studentPh": "genau wie beim Login eingegeben",
      "assign.course": "Kursstufe (optional)",
      "assign.courseAny": "— allgemein —",
      "assign.text": "Aufgabe",
      "assign.textPh": "z. B. Arbeitsbuch S. 45, Übung 3 + Video ansehen: https://…",
      "assign.add": "Aufgabe hinzufügen",
      "assign.errStudent": "Bitte gib den Namen der Schülerin / des Schülers ein.",
      "assign.errText": "Bitte gib die Aufgabe ein.",
      "assign.added": "Aufgabe hinzugefügt.",
      "assign.none": "Noch keine individuellen Aufgaben vergeben.",
      "assign.delete": "Löschen",
      "assign.listTitle": "Vergebene Aufgaben",
      "assign.for": "Für",
      "stu.tasksTitle": "Persönliche Aufgaben",
      "stu.tasksSub": "Von deiner Lehrkraft — extra für dich",
      "lvl.active": "Aktuell",
      "lvl.soon": "Bald verfügbar",
      "lvl.lessons": "Lektionen",
      "lesson.lesson": "Lektion",
      "lesson.goal": "Lernziel",
      "lesson.tabMaterial": "Material",
      "lesson.tabHomework": "Hausaufgaben",
      "lesson.tabTeacher": "Für die Lehrkraft",
      "lesson.tabQuestions": "Fragen",
      "chat.placeholder": "Stell deiner Lehrkraft eine Frage zu dieser Lektion…",
      "chat.send": "Senden",
      "chat.empty": "Noch keine Nachrichten. Stell hier deine erste Frage!",
      "chat.you": "Du",
      "chat.teacher": "Lehrkraft",
      "chat.teacherTitle": "Fragen der Schüler:innen",
      "chat.teacherSub": "Beantworte hier die Fragen zu dieser Lektion. Jede:r Schüler:in hat einen eigenen Verlauf.",
      "chat.replyPh": "Antwort schreiben…",
      "chat.reply": "Antworten",
      "chat.none": "Noch keine Fragen zu dieser Lektion.",
      "chat.waiting": "Wartet auf Antwort",
      "lesson.materialSoon": "Die Unterrichtsmaterialien zu dieser Lektion werden gerade vorbereitet und folgen in Kürze.",
      "lesson.hwNone": "Für diese Lektion sind noch keine Hausaufgaben hinterlegt.",
      "lesson.teacherSoon": "Der Unterrichtsplan und die Materialien für die Lehrkraft folgen in Kürze.",
      "lesson.back": "← Alle Lektionen",
      "lesson.open": "Lektion öffnen",
      "lesson.hwStatusDone": "Hausaufgabe: {score}/{total}",
      "lesson.hwStatusOpen": "Hausaufgabe offen",
      "lesson.hwStatusNone": "—",
      "hw.taskOf": "Aufgabe {n} von {total}",
      "hw.check": "Prüfen",
      "hw.next": "Weiter",
      "hw.finish": "Abschließen",
      "hw.correct": "Richtig!",
      "hw.wrong": "Noch nicht ganz.",
      "hw.solution": "Lösung:",
      "hw.fillPh": "Antwort eingeben…",
      "hw.matchHint": "Wähle für jeden Begriff links die passende Bedeutung.",
      "hw.matchPick": "— auswählen —",
      "hw.resultTitle": "Hausaufgabe abgeschlossen!",
      "hw.resultScore": "{score} von {total} richtig",
      "hw.retry": "Nochmal versuchen",
      "hw.toLesson": "Zurück zur Lektion",
      "teacher.material": "Unterrichtsmaterial",
      "teacher.plan": "Stundenablauf",
      "teacher.upload": "Material hochladen",
      "teacher.uploadNote": "In der Live-Version lädst du hier PDF, Audio und Folien für die Lektion hoch.",
      "mat.hint": "PDF, Audio, Bilder, Folien oder Video (max. 25 MB pro Datei). Wird im Browser gespeichert.",
      "mat.download": "Herunterladen",
      "mat.saved": "Material hochgeladen.",
      "mat.tooBig": "Datei zu groß (max. 25 MB):",
      "mat.loading": "Lädt…",
      "mat.error": "Speichern nicht möglich (Browser-Speicher).",
      "teacher.openMaterial": "Material öffnen",
      "teacher.release": "Freigeben",
      "teacher.releaseThis": "Diese Lektion für Schüler:innen freigeben",
      "teacher.accessHint": "Wähle oben eine Gruppe und gib Lektionen frei. Die Materialien sind für alle gleich — nur der Zugriff unterscheidet sich pro Gruppe. Standard: nur die erste Lektion offen.",
      "teacher.accessOnDash": "Die Freigabe der Lektionen steuerst du auf der Startseite pro Gruppe.",
      "access.group": "Gruppe verwalten",
      "access.allGroups": "Alle (Standard)",
      "access.link": "Gruppen-Link kopieren",
      "access.linkCopied": "Kopiert! Sende diesen Link an die Schüler:innen:",
      "access.linkEmpty": "Für diese Gruppe gibt es noch keinen Kurs bzw. Zugang. Füge zuerst Schüler:innen hinzu oder gib Lektionen frei.",
      "grant.title": "Du hast Zugang erhalten",
      "grant.sub": "Gib deinen Namen ein, um deinen Kurs {course} zu öffnen.",
      "grant.enter": "Kurs öffnen",
      "teacher.resetAccess": "Zugriff zurücksetzen",
      "teacher.resetAccessConfirm": "Zugriff zurücksetzen? Danach ist für Schüler:innen nur noch die erste Lektion jedes Niveaus freigegeben.",
      "teacher.resetAccessDone": "Zugriff zurückgesetzt — nur die erste Lektion ist freigegeben.",
      "teacher.controlsTitle": "Zugriff & Notiz",
      "teacher.noteLabel": "Notiz / Zoom-Link für Schüler:innen",
      "teacher.notePh": "z. B. https://zoom.us/j/123456789 — Mittwoch 18:00 Uhr",
      "teacher.noteSave": "Notiz speichern",
      "teacher.noteSaved": "Gespeichert.",
      "teacher.hwTitle": "Hausaufgabe für die Lektion",
      "teacher.hwLabel": "Aufgabe für den ganzen Kurs — alle Schüler:innen dieser Kursstufe sehen sie",
      "teacher.hwPh": "z. B. Arbeitsbuch S. 12–13, alle Übungen. Bis Montag. Video: https://…",
      "teacher.hwSave": "Hausaufgabe speichern",
      "hw.fromTeacher": "Aufgabe von der Lehrkraft",
      "lesson.note": "Hinweis deiner Lehrkraft",
      "lesson.notReleased": "Noch nicht freigegeben",
      "class.title": "Klassenfortschritt",
      "class.sub": "Fortschritt des Demo-Schülers, lokal in diesem Browser gespeichert.",
      "class.lesson": "Lektion",
      "class.status": "Status",
      "class.score": "Ergebnis",
      "class.done": "erledigt",
      "class.open": "offen",
      "class.empty": "Noch keine Hausaufgaben erledigt.",
      "class.reset": "Demo-Fortschritt zurücksetzen",
      "class.confirm": "Gesamten Demo-Fortschritt wirklich löschen?"
    },
    en: {
      "login.badge": "Demo access",
      "login.title": "Welcome to the learning platform",
      "login.sub": "Enter your access code to open the Wienerlingo platform. Your progress stays local in this browser.",
      "login.nameLabel": "Your name",
      "login.namePh": "e.g. Anna",
      "login.errName": "Please enter your name.",
      "login.enter": "Open the platform",
      "login.codeLabel": "Access code",
      "login.codePh": "e.g. WD-A1-XXXXXX",
      "login.codeHint": "You receive the code for your level from your teacher after payment. Teachers enter their teacher code.",
      "login.invalid": "Invalid code. Please check your input.",
      "dash.redeem": "Redeem another code",
      "redeem.ph": "Enter access code…",
      "redeem.btn": "Unlock",
      "redeem.ok": "Level {lvl} has been unlocked!",
      "redeem.invalid": "Invalid code.",
      "redeem.already": "This level is already unlocked.",
      "redeem.teacher": "That's a teacher code. Please log in as a teacher.",
      "lock.tag": "Locked",
      "lock.hint": "Unlock with an access code",
      "header.site": "← Website",
      "header.logout": "Log out",
      "role.student": "Student",
      "role.teacher": "Teacher",
      "dash.hello": "Hello, {name}!",
      "dash.helloAnon": "Hello!",
      "dash.subStudent": "Here is your German course. Pick up where you left off.",
      "dash.subGroup": "Your group course. Pick up where you left off.",
      "dash.subMini": "Your mini group (2–3 people). Pick up where you left off.",
      "dash.subIndividual": "Your personal 1:1 course. Your teacher tailors materials and tasks to you.",
      "dash.yourFormat": "Your format",
      "stu.tasksEmpty": "Your personal assignments from the teacher will appear here.",
      "dash.subTeacher": "Manage teaching materials and see your group's progress.",
      "dash.progress": "Your progress",
      "dash.progressNote": "{done} of {total} homework tasks done",
      "dash.classBtn": "View class progress",
      "dash.assignBtn": "Individual assignments",
      "dash.studentsBtn": "Students & groups",
      "students.title": "Students & groups",
      "students.sub": "Manage your groups, mini-groups and one-to-one students.",
      "students.name": "Name",
      "students.namePh": "Student's name",
      "students.format": "Format",
      "students.group": "Group name (optional)",
      "students.groupPh": "e.g. Mon/Wed 6 PM",
      "students.add": "Add student",
      "students.added": "Student added.",
      "students.none": "No students in this format yet.",
      "students.noGroup": "No group",
      "students.assignBtn": "Give task",
      "dash.bannerToggle": "Edit homepage announcement",
      "banner.ph": "e.g. New course from September 1 — enrol now!",
      "banner.save": "Save",
      "banner.reset": "Default",
      "banner.saved": "Homepage announcement updated.",
      "assign.title": "Individual assignments",
      "assign.sub": "Give a specific student a personal assignment — ideal for one-to-one lessons.",
      "assign.student": "Student's name",
      "assign.studentPh": "exactly as entered at login",
      "assign.course": "Course (optional)",
      "assign.courseAny": "— general —",
      "assign.text": "Assignment",
      "assign.textPh": "e.g. Workbook p. 45, exercise 3 + watch video: https://…",
      "assign.add": "Add assignment",
      "assign.errStudent": "Please enter the student's name.",
      "assign.errText": "Please enter the assignment.",
      "assign.added": "Assignment added.",
      "assign.none": "No individual assignments yet.",
      "assign.delete": "Delete",
      "assign.listTitle": "Assigned tasks",
      "assign.for": "For",
      "stu.tasksTitle": "Personal assignments",
      "stu.tasksSub": "From your teacher — just for you",
      "lvl.active": "Current",
      "lvl.soon": "Coming soon",
      "lvl.lessons": "lessons",
      "lesson.lesson": "Lesson",
      "lesson.goal": "Learning goal",
      "lesson.tabMaterial": "Material",
      "lesson.tabHomework": "Homework",
      "lesson.tabTeacher": "For the teacher",
      "lesson.tabQuestions": "Questions",
      "chat.placeholder": "Ask your teacher a question about this lesson…",
      "chat.send": "Send",
      "chat.empty": "No messages yet. Ask your first question here!",
      "chat.you": "You",
      "chat.teacher": "Teacher",
      "chat.teacherTitle": "Student questions",
      "chat.teacherSub": "Answer the questions about this lesson here. Each student has their own thread.",
      "chat.replyPh": "Write a reply…",
      "chat.reply": "Reply",
      "chat.none": "No questions for this lesson yet.",
      "chat.waiting": "Awaiting reply",
      "lesson.materialSoon": "The materials for this lesson are being prepared and will follow shortly.",
      "lesson.hwNone": "No homework has been added for this lesson yet.",
      "lesson.teacherSoon": "The lesson plan and teacher materials will follow shortly.",
      "lesson.back": "← All lessons",
      "lesson.open": "Open lesson",
      "lesson.hwStatusDone": "Homework: {score}/{total}",
      "lesson.hwStatusOpen": "Homework open",
      "lesson.hwStatusNone": "—",
      "hw.taskOf": "Task {n} of {total}",
      "hw.check": "Check",
      "hw.next": "Next",
      "hw.finish": "Finish",
      "hw.correct": "Correct!",
      "hw.wrong": "Not quite yet.",
      "hw.solution": "Solution:",
      "hw.fillPh": "Type your answer…",
      "hw.matchHint": "For each term on the left, choose the matching meaning.",
      "hw.matchPick": "— choose —",
      "hw.resultTitle": "Homework completed!",
      "hw.resultScore": "{score} of {total} correct",
      "hw.retry": "Try again",
      "hw.toLesson": "Back to lesson",
      "teacher.material": "Teaching material",
      "teacher.plan": "Lesson flow",
      "teacher.upload": "Upload material",
      "teacher.uploadNote": "In the live version you upload PDFs, audio and slides for the lesson here.",
      "mat.hint": "PDF, audio, images, slides or video (max 25 MB per file). Stored in the browser.",
      "mat.download": "Download",
      "mat.saved": "Material uploaded.",
      "mat.tooBig": "File too big (max 25 MB):",
      "mat.loading": "Loading…",
      "mat.error": "Couldn't save (browser storage).",
      "teacher.openMaterial": "Open material",
      "teacher.release": "Release",
      "teacher.releaseThis": "Release this lesson to students",
      "teacher.accessHint": "Pick a group above and release lessons. Materials are the same for everyone — only access differs per group. Default: only the first lesson is open.",
      "teacher.accessOnDash": "Lesson release is managed per group on the home page.",
      "access.group": "Manage group",
      "access.allGroups": "All (default)",
      "access.link": "Copy group link",
      "access.linkCopied": "Copied! Send this link to your students:",
      "access.linkEmpty": "This group has no course or access yet. Add students or release lessons first.",
      "grant.title": "You've been granted access",
      "grant.sub": "Enter your name to open your course {course}.",
      "grant.enter": "Open course",
      "teacher.resetAccess": "Reset access",
      "teacher.resetAccessConfirm": "Reset access? Students will then only have the first lesson of each level released.",
      "teacher.resetAccessDone": "Access reset — only the first lesson is released.",
      "teacher.controlsTitle": "Access & note",
      "teacher.noteLabel": "Note / Zoom link for students",
      "teacher.notePh": "e.g. https://zoom.us/j/123456789 — Wednesday 6:00 PM",
      "teacher.noteSave": "Save note",
      "teacher.noteSaved": "Saved.",
      "teacher.hwTitle": "Homework for the lesson",
      "teacher.hwLabel": "Assignment for the whole course — all students of this course see it",
      "teacher.hwPh": "e.g. Workbook pp. 12–13, all exercises. By Monday. Video: https://…",
      "teacher.hwSave": "Save homework",
      "hw.fromTeacher": "Assignment from your teacher",
      "lesson.note": "Note from your teacher",
      "lesson.notReleased": "Not released yet",
      "class.title": "Class progress",
      "class.sub": "Progress of the demo student, stored locally in this browser.",
      "class.lesson": "Lesson",
      "class.status": "Status",
      "class.score": "Result",
      "class.done": "done",
      "class.open": "open",
      "class.empty": "No homework completed yet.",
      "class.reset": "Reset demo progress",
      "class.confirm": "Really delete all demo progress?"
    },
    uk: {
      "login.badge": "Демо-доступ",
      "login.title": "Вітаємо на навчальній платформі",
      "login.sub": "Введіть код доступу, щоб відкрити платформу Wienerlingo. Ваш прогрес зберігається локально в цьому браузері.",
      "login.nameLabel": "Ваше імʼя",
      "login.namePh": "напр. Тетяна",
      "login.errName": "Будь ласка, введіть ваше імʼя.",
      "login.enter": "Відкрити платформу",
      "login.codeLabel": "Код доступу",
      "login.codePh": "напр. WD-A1-XXXXXX",
      "login.codeHint": "Код для свого рівня ви отримуєте від викладача після оплати. Викладачі вводять свій код викладача.",
      "login.invalid": "Невірний код. Перевірте введене.",
      "dash.redeem": "Активувати ще код",
      "redeem.ph": "Введіть код доступу…",
      "redeem.btn": "Відкрити",
      "redeem.ok": "Рівень {lvl} відкрито!",
      "redeem.invalid": "Невірний код.",
      "redeem.already": "Цей рівень уже відкрито.",
      "redeem.teacher": "Це код викладача. Будь ласка, увійдіть як викладач.",
      "lock.tag": "Заблоковано",
      "lock.hint": "Розблокувати кодом доступу",
      "header.site": "← Сайт",
      "header.logout": "Вийти",
      "role.student": "Студент(ка)",
      "role.teacher": "Викладач(ка)",
      "dash.hello": "Привіт, {name}!",
      "dash.helloAnon": "Привіт!",
      "dash.subStudent": "Ось ваш курс німецької. Продовжуйте з того місця, де зупинились.",
      "dash.subGroup": "Ваш груповий курс. Продовжуйте з того місця, де зупинились.",
      "dash.subMini": "Ваша міні-група (2–3 особи). Продовжуйте з того місця, де зупинились.",
      "dash.subIndividual": "Ваш персональний курс 1-на-1. Викладач підлаштовує матеріали й завдання саме під вас.",
      "dash.yourFormat": "Ваш формат",
      "stu.tasksEmpty": "Тут зʼявлятимуться ваші персональні завдання від викладача.",
      "dash.subTeacher": "Керуйте матеріалами уроку та дивіться прогрес вашої групи.",
      "dash.progress": "Ваш прогрес",
      "dash.progressNote": "{done} з {total} домашок виконано",
      "dash.classBtn": "Переглянути прогрес класу",
      "dash.assignBtn": "Індивідуальні завдання",
      "dash.studentsBtn": "Студенти та групи",
      "students.title": "Студенти та групи",
      "students.sub": "Керуйте своїми групами, міні-групами та індивідуальними студентами.",
      "students.name": "Імʼя",
      "students.namePh": "Імʼя студента",
      "students.format": "Формат",
      "students.group": "Назва групи (необовʼязково)",
      "students.groupPh": "напр. пн/ср 18:00",
      "students.add": "Додати студента",
      "students.added": "Студента додано.",
      "students.none": "Поки немає студентів у цьому форматі.",
      "students.noGroup": "Без групи",
      "students.assignBtn": "Дати завдання",
      "dash.bannerToggle": "Редагувати оголошення на головній",
      "banner.ph": "напр. Новий курс із 1 вересня — записуйтесь!",
      "banner.save": "Зберегти",
      "banner.reset": "Стандарт",
      "banner.saved": "Оголошення на головній оновлено.",
      "assign.title": "Індивідуальні завдання",
      "assign.sub": "Дайте конкретному студенту персональне завдання — ідеально для індивідуальних занять.",
      "assign.student": "Імʼя студента",
      "assign.studentPh": "точно як введено при вході",
      "assign.course": "Курс (необовʼязково)",
      "assign.courseAny": "— загальне —",
      "assign.text": "Завдання",
      "assign.textPh": "напр. Робочий зошит с. 45, вправа 3 + переглянути відео: https://…",
      "assign.add": "Додати завдання",
      "assign.errStudent": "Будь ласка, введіть імʼя студента.",
      "assign.errText": "Будь ласка, введіть завдання.",
      "assign.added": "Завдання додано.",
      "assign.none": "Поки немає індивідуальних завдань.",
      "assign.delete": "Видалити",
      "assign.listTitle": "Призначені завдання",
      "assign.for": "Для",
      "stu.tasksTitle": "Персональні завдання",
      "stu.tasksSub": "Від викладача — особисто тобі",
      "lvl.active": "Поточний",
      "lvl.soon": "Незабаром",
      "lvl.lessons": "уроків",
      "lesson.lesson": "Урок",
      "lesson.goal": "Мета уроку",
      "lesson.tabMaterial": "Матеріали",
      "lesson.tabHomework": "Домашнє завдання",
      "lesson.tabTeacher": "Для викладача",
      "lesson.tabQuestions": "Запитання",
      "chat.placeholder": "Постав викладачу запитання щодо цього уроку…",
      "chat.send": "Надіслати",
      "chat.empty": "Поки що немає повідомлень. Постав тут своє перше запитання!",
      "chat.you": "Ви",
      "chat.teacher": "Викладач",
      "chat.teacherTitle": "Запитання студентів",
      "chat.teacherSub": "Відповідайте тут на запитання щодо цього уроку. У кожного студента власне листування.",
      "chat.replyPh": "Написати відповідь…",
      "chat.reply": "Відповісти",
      "chat.none": "Поки що немає запитань до цього уроку.",
      "chat.waiting": "Очікує відповіді",
      "lesson.materialSoon": "Матеріали до цього уроку готуються та зʼявляться найближчим часом.",
      "lesson.hwNone": "До цього уроку домашнє завдання ще не додано.",
      "lesson.teacherSoon": "План уроку та матеріали для викладача зʼявляться найближчим часом.",
      "lesson.back": "← Усі уроки",
      "lesson.open": "Відкрити урок",
      "lesson.hwStatusDone": "Домашка: {score}/{total}",
      "lesson.hwStatusOpen": "Домашка відкрита",
      "lesson.hwStatusNone": "—",
      "hw.taskOf": "Завдання {n} з {total}",
      "hw.check": "Перевірити",
      "hw.next": "Далі",
      "hw.finish": "Завершити",
      "hw.correct": "Правильно!",
      "hw.wrong": "Поки не зовсім.",
      "hw.solution": "Відповідь:",
      "hw.fillPh": "Введіть відповідь…",
      "hw.matchHint": "Для кожного слова ліворуч оберіть відповідне значення.",
      "hw.matchPick": "— оберіть —",
      "hw.resultTitle": "Домашнє завдання виконано!",
      "hw.resultScore": "{score} з {total} правильно",
      "hw.retry": "Спробувати ще раз",
      "hw.toLesson": "Назад до уроку",
      "teacher.material": "Матеріали уроку",
      "teacher.plan": "Хід уроку",
      "teacher.upload": "Завантажити матеріал",
      "teacher.uploadNote": "У живій версії тут ви завантажуєте PDF, аудіо та слайди до уроку.",
      "mat.hint": "PDF, аудіо, зображення, слайди чи відео (до 25 МБ на файл). Зберігається у браузері.",
      "mat.download": "Завантажити",
      "mat.saved": "Матеріал завантажено.",
      "mat.tooBig": "Файл завеликий (макс. 25 МБ):",
      "mat.loading": "Завантаження…",
      "mat.error": "Не вдалося зберегти (памʼять браузера).",
      "teacher.openMaterial": "Відкрити матеріали",
      "teacher.release": "Відкрити",
      "teacher.releaseThis": "Відкрити цей урок для студентів",
      "teacher.accessHint": "Оберіть угорі групу та відкривайте уроки. Матеріали однакові для всіх — різниться лише доступ по групах. За замовчуванням відкритий лише перший урок.",
      "teacher.accessOnDash": "Відкриттям уроків керуєте на головній — окремо для кожної групи.",
      "access.group": "Керувати групою",
      "access.allGroups": "Усі (стандарт)",
      "access.link": "Скопіювати лінк групи",
      "access.linkCopied": "Скопійовано! Надішли це посилання своїм учням:",
      "access.linkEmpty": "Для цієї групи ще немає курсу чи доступу. Спершу додай учнів або відкрий уроки.",
      "grant.title": "Тобі відкрито доступ",
      "grant.sub": "Введи своє ім'я, щоб відкрити курс {course}.",
      "grant.enter": "Відкрити курс",
      "teacher.resetAccess": "Скинути доступ",
      "teacher.resetAccessConfirm": "Скинути доступ? Після цього студентам буде відкрито лише перший урок кожного рівня.",
      "teacher.resetAccessDone": "Доступ скинуто — відкрито лише перший урок.",
      "teacher.controlsTitle": "Доступ і нотатка",
      "teacher.noteLabel": "Нотатка / посилання на Zoom для студентів",
      "teacher.notePh": "напр. https://zoom.us/j/123456789 — середа 18:00",
      "teacher.noteSave": "Зберегти нотатку",
      "teacher.noteSaved": "Збережено.",
      "teacher.hwTitle": "Домашнє завдання до уроку",
      "teacher.hwLabel": "Завдання для всього курсу — його бачать усі студенти цієї підсходинки",
      "teacher.hwPh": "напр. Робочий зошит с. 12–13, усі вправи. До понеділка. Відео: https://…",
      "teacher.hwSave": "Зберегти домашнє завдання",
      "hw.fromTeacher": "Завдання від викладача",
      "lesson.note": "Нотатка від викладача",
      "lesson.notReleased": "Ще не відкрито",
      "class.title": "Прогрес класу",
      "class.sub": "Прогрес демо-студента, збережений локально в цьому браузері.",
      "class.lesson": "Урок",
      "class.status": "Статус",
      "class.score": "Результат",
      "class.done": "виконано",
      "class.open": "відкрито",
      "class.empty": "Ще жодної домашки не виконано.",
      "class.reset": "Скинути демо-прогрес",
      "class.confirm": "Справді видалити весь демо-прогрес?"
    },
    ru: {
      "login.badge": "Демо-доступ",
      "login.title": "Добро пожаловать на учебную платформу",
      "login.sub": "Введите код доступа, чтобы открыть платформу Wienerlingo. Ваш прогресс сохраняется локально в этом браузере.",
      "login.nameLabel": "Ваше имя",
      "login.namePh": "напр. Татьяна",
      "login.errName": "Пожалуйста, введите ваше имя.",
      "login.enter": "Открыть платформу",
      "login.codeLabel": "Код доступа",
      "login.codePh": "напр. WD-A1-XXXXXX",
      "login.codeHint": "Код для своего уровня вы получаете от преподавателя после оплаты. Преподаватели вводят свой код преподавателя.",
      "login.invalid": "Неверный код. Проверьте введённое.",
      "dash.redeem": "Активировать ещё код",
      "redeem.ph": "Введите код доступа…",
      "redeem.btn": "Открыть",
      "redeem.ok": "Уровень {lvl} открыт!",
      "redeem.invalid": "Неверный код.",
      "redeem.already": "Этот уровень уже открыт.",
      "redeem.teacher": "Это код преподавателя. Пожалуйста, войдите как преподаватель.",
      "lock.tag": "Заблокировано",
      "lock.hint": "Разблокировать кодом доступа",
      "header.site": "← Сайт",
      "header.logout": "Выйти",
      "role.student": "Студент(ка)",
      "role.teacher": "Преподаватель",
      "dash.hello": "Привет, {name}!",
      "dash.helloAnon": "Привет!",
      "dash.subStudent": "Вот ваш курс немецкого. Продолжайте с того места, где остановились.",
      "dash.subGroup": "Ваш групповой курс. Продолжайте с того места, где остановились.",
      "dash.subMini": "Ваша мини-группа (2–3 человека). Продолжайте с того места, где остановились.",
      "dash.subIndividual": "Ваш персональный курс 1-на-1. Преподаватель подстраивает материалы и задания именно под вас.",
      "dash.yourFormat": "Ваш формат",
      "stu.tasksEmpty": "Здесь будут появляться ваши персональные задания от преподавателя.",
      "dash.subTeacher": "Управляйте материалами урока и смотрите прогресс вашей группы.",
      "dash.progress": "Ваш прогресс",
      "dash.progressNote": "{done} из {total} домашних заданий выполнено",
      "dash.classBtn": "Посмотреть прогресс класса",
      "dash.assignBtn": "Индивидуальные задания",
      "dash.studentsBtn": "Студенты и группы",
      "students.title": "Студенты и группы",
      "students.sub": "Управляйте своими группами, мини-группами и индивидуальными студентами.",
      "students.name": "Имя",
      "students.namePh": "Имя студента",
      "students.format": "Формат",
      "students.group": "Название группы (необязательно)",
      "students.groupPh": "напр. пн/ср 18:00",
      "students.add": "Добавить студента",
      "students.added": "Студент добавлен.",
      "students.none": "Пока нет студентов в этом формате.",
      "students.noGroup": "Без группы",
      "students.assignBtn": "Дать задание",
      "dash.bannerToggle": "Редактировать объявление на главной",
      "banner.ph": "напр. Новый курс с 1 сентября — записывайтесь!",
      "banner.save": "Сохранить",
      "banner.reset": "Стандарт",
      "banner.saved": "Объявление на главной обновлено.",
      "assign.title": "Индивидуальные задания",
      "assign.sub": "Дайте конкретному студенту персональное задание — идеально для индивидуальных занятий.",
      "assign.student": "Имя студента",
      "assign.studentPh": "точно как введено при входе",
      "assign.course": "Курс (необязательно)",
      "assign.courseAny": "— общее —",
      "assign.text": "Задание",
      "assign.textPh": "напр. Рабочая тетрадь с. 45, упражнение 3 + посмотреть видео: https://…",
      "assign.add": "Добавить задание",
      "assign.errStudent": "Пожалуйста, введите имя студента.",
      "assign.errText": "Пожалуйста, введите задание.",
      "assign.added": "Задание добавлено.",
      "assign.none": "Пока нет индивидуальных заданий.",
      "assign.delete": "Удалить",
      "assign.listTitle": "Назначенные задания",
      "assign.for": "Для",
      "stu.tasksTitle": "Персональные задания",
      "stu.tasksSub": "От преподавателя — лично тебе",
      "lvl.active": "Текущий",
      "lvl.soon": "Скоро",
      "lvl.lessons": "уроков",
      "lesson.lesson": "Урок",
      "lesson.goal": "Цель урока",
      "lesson.tabMaterial": "Материалы",
      "lesson.tabHomework": "Домашнее задание",
      "lesson.tabTeacher": "Для преподавателя",
      "lesson.tabQuestions": "Вопросы",
      "chat.placeholder": "Задайте преподавателю вопрос по этому уроку…",
      "chat.send": "Отправить",
      "chat.empty": "Пока нет сообщений. Задайте здесь свой первый вопрос!",
      "chat.you": "Вы",
      "chat.teacher": "Преподаватель",
      "chat.teacherTitle": "Вопросы студентов",
      "chat.teacherSub": "Отвечайте здесь на вопросы по этому уроку. У каждого студента своя переписка.",
      "chat.replyPh": "Написать ответ…",
      "chat.reply": "Ответить",
      "chat.none": "Пока нет вопросов к этому уроку.",
      "chat.waiting": "Ожидает ответа",
      "lesson.materialSoon": "Материалы к этому уроку готовятся и появятся в ближайшее время.",
      "lesson.hwNone": "К этому уроку домашнее задание ещё не добавлено.",
      "lesson.teacherSoon": "План урока и материалы для преподавателя появятся в ближайшее время.",
      "lesson.back": "← Все уроки",
      "lesson.open": "Открыть урок",
      "lesson.hwStatusDone": "Домашка: {score}/{total}",
      "lesson.hwStatusOpen": "Домашка открыта",
      "lesson.hwStatusNone": "—",
      "hw.taskOf": "Задание {n} из {total}",
      "hw.check": "Проверить",
      "hw.next": "Дальше",
      "hw.finish": "Завершить",
      "hw.correct": "Правильно!",
      "hw.wrong": "Пока не совсем.",
      "hw.solution": "Ответ:",
      "hw.fillPh": "Введите ответ…",
      "hw.matchHint": "Для каждого слова слева выберите соответствующее значение.",
      "hw.matchPick": "— выберите —",
      "hw.resultTitle": "Домашнее задание выполнено!",
      "hw.resultScore": "{score} из {total} правильно",
      "hw.retry": "Попробовать ещё раз",
      "hw.toLesson": "Назад к уроку",
      "teacher.material": "Материалы урока",
      "teacher.plan": "Ход урока",
      "teacher.upload": "Загрузить материал",
      "teacher.uploadNote": "В живой версии здесь вы загружаете PDF, аудио и слайды к уроку.",
      "mat.hint": "PDF, аудио, изображения, слайды или видео (до 25 МБ на файл). Сохраняется в браузере.",
      "mat.download": "Скачать",
      "mat.saved": "Материал загружен.",
      "mat.tooBig": "Файл слишком большой (макс. 25 МБ):",
      "mat.loading": "Загрузка…",
      "mat.error": "Не удалось сохранить (память браузера).",
      "teacher.openMaterial": "Открыть материалы",
      "teacher.release": "Открыть",
      "teacher.releaseThis": "Открыть этот урок для студентов",
      "teacher.accessHint": "Выберите вверху группу и открывайте уроки. Материалы одинаковые для всех — различается только доступ по группам. По умолчанию открыт только первый урок.",
      "teacher.accessOnDash": "Открытием уроков управляете на главной — отдельно для каждой группы.",
      "access.group": "Управлять группой",
      "access.allGroups": "Все (стандарт)",
      "access.link": "Скопировать ссылку группы",
      "access.linkCopied": "Скопировано! Отправь эту ссылку своим ученикам:",
      "access.linkEmpty": "Для этой группы ещё нет курса или доступа. Сначала добавь учеников или открой уроки.",
      "grant.title": "Тебе открыт доступ",
      "grant.sub": "Введи своё имя, чтобы открыть курс {course}.",
      "grant.enter": "Открыть курс",
      "teacher.resetAccess": "Сбросить доступ",
      "teacher.resetAccessConfirm": "Сбросить доступ? После этого студентам будет открыт только первый урок каждого уровня.",
      "teacher.resetAccessDone": "Доступ сброшен — открыт только первый урок.",
      "teacher.controlsTitle": "Доступ и заметка",
      "teacher.noteLabel": "Заметка / ссылка на Zoom для студентов",
      "teacher.notePh": "напр. https://zoom.us/j/123456789 — среда 18:00",
      "teacher.noteSave": "Сохранить заметку",
      "teacher.noteSaved": "Сохранено.",
      "teacher.hwTitle": "Домашнее задание к уроку",
      "teacher.hwLabel": "Задание для всего курса — его видят все студенты этой подступени",
      "teacher.hwPh": "напр. Рабочая тетрадь с. 12–13, все упражнения. До понедельника. Видео: https://…",
      "teacher.hwSave": "Сохранить домашнее задание",
      "hw.fromTeacher": "Задание от преподавателя",
      "lesson.note": "Заметка от преподавателя",
      "lesson.notReleased": "Ещё не открыто",
      "class.title": "Прогресс класса",
      "class.sub": "Прогресс демо-студента, сохранённый локально в этом браузере.",
      "class.lesson": "Урок",
      "class.status": "Статус",
      "class.score": "Результат",
      "class.done": "выполнено",
      "class.open": "открыто",
      "class.empty": "Пока ни одной домашки не выполнено.",
      "class.reset": "Сбросить демо-прогресс",
      "class.confirm": "Действительно удалить весь демо-прогресс?"
    }
  };

  /* ---------------- Helpers ---------------- */
  function lang() {
    return (window.DW && window.DW.getLang && PI18N[window.DW.getLang()]) ? window.DW.getLang() : "de";
  }
  function t(key, vars) {
    var s = (PI18N[lang()] && PI18N[lang()][key]) || PI18N.de[key] || key;
    if (vars) for (var k in vars) s = s.replace("{" + k + "}", vars[k]);
    return s;
  }
  function L(obj) { if (!obj) return ""; return obj[lang()] || obj.de || ""; }
  function esc(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  function el(html) { var d = document.createElement("div"); d.innerHTML = html.trim(); return d.firstElementChild; }

  /* ---------------- State ---------------- */
  var store = {
    role: function () { try { return localStorage.getItem("dw-role"); } catch (e) { return null; } },
    setRole: function (r) { try { localStorage.setItem("dw-role", r); } catch (e) {} },
    name: function () { try { return localStorage.getItem("dw-name") || ""; } catch (e) { return ""; } },
    setName: function (n) { try { localStorage.setItem("dw-name", n); } catch (e) {} },
    logout: function () { try { localStorage.removeItem("dw-role"); } catch (e) {} },
    format: function () { try { return localStorage.getItem("dw-format") || "group"; } catch (e) { return "group"; } },
    setFormat: function (f) { try { if (f) localStorage.setItem("dw-format", f); } catch (e) {} },
    unlocked: function () { try { return JSON.parse(localStorage.getItem("dw-unlocked") || "[]"); } catch (e) { return []; } },
    unlock: function (lvl) {
      var u = store.unlocked();
      if (u.indexOf(lvl) === -1) { u.push(lvl); try { localStorage.setItem("dw-unlocked", JSON.stringify(u)); } catch (e) {} }
    },
    /* Schüler hat genau EINEN aktuellen Kurs — neuer Code ersetzt den alten */
    setCourse: function (lvl) { try { localStorage.setItem("dw-unlocked", JSON.stringify([lvl])); } catch (e) {} },
    progress: function () {
      try { return JSON.parse(localStorage.getItem("dw-progress") || "{}"); } catch (e) { return {}; }
    },
    saveHw: function (lessonId, score, total) {
      var p = store.progress();
      var prev = p[lessonId] && p[lessonId].score || 0;
      p[lessonId] = { score: Math.max(prev, score), total: total, done: true };
      try { localStorage.setItem("dw-progress", JSON.stringify(p)); } catch (e) {}
    },
    resetProgress: function () { try { localStorage.removeItem("dw-progress"); } catch (e) {} },
    /* Lektions-Freigabe durch die Lehrkraft — pro Gruppe ("__all" = Standard) */
    lessonAccessAll: function () { try { return JSON.parse(localStorage.getItem("dw-lessonaccess") || "{}"); } catch (e) { return {}; } },
    lessonAccess: function (groupKey) { var a = store.lessonAccessAll(); return a[groupKey || "__all"] || {}; },
    setLessonAccess: function (groupKey, id, val) {
      var a = store.lessonAccessAll(); var g = a[groupKey] = a[groupKey] || {}; g[id] = !!val;
      try { localStorage.setItem("dw-lessonaccess", JSON.stringify(a)); } catch (e) {}
    },
    resetLessonAccess: function () { try { localStorage.removeItem("dw-lessonaccess"); } catch (e) {} },
    /* Notiz / Zoom-Link pro Lektion */
    lessonNote: function (id) { try { return (JSON.parse(localStorage.getItem("dw-lessonnotes") || "{}"))[id] || ""; } catch (e) { return ""; } },
    setLessonNote: function (id, txt) {
      var m; try { m = JSON.parse(localStorage.getItem("dw-lessonnotes") || "{}"); } catch (e) { m = {}; }
      if (txt) m[id] = txt; else delete m[id];
      try { localStorage.setItem("dw-lessonnotes", JSON.stringify(m)); } catch (e) {}
    },
    /* Hausaufgabe für eine Lektion (ganzer Kurs) */
    lessonHw: function (id) { try { return (JSON.parse(localStorage.getItem("dw-lessonhw") || "{}"))[id] || ""; } catch (e) { return ""; } },
    setLessonHw: function (id, txt) {
      var m; try { m = JSON.parse(localStorage.getItem("dw-lessonhw") || "{}"); } catch (e) { m = {}; }
      if (txt) m[id] = txt; else delete m[id];
      try { localStorage.setItem("dw-lessonhw", JSON.stringify(m)); } catch (e) {}
    },
    /* Individuelle Aufgaben (Einzelunterricht) */
    assignments: function () { try { return JSON.parse(localStorage.getItem("dw-assignments") || "[]"); } catch (e) { return []; } },
    addAssignment: function (a) { var l = store.assignments(); l.unshift(a); try { localStorage.setItem("dw-assignments", JSON.stringify(l)); } catch (e) {} },
    removeAssignment: function (id) {
      var l = store.assignments().filter(function (a) { return a.id !== id; });
      try { localStorage.setItem("dw-assignments", JSON.stringify(l)); } catch (e) {}
    },
    /* Schüler-Register (Gruppen / Mini / Einzel) */
    roster: function () { try { return JSON.parse(localStorage.getItem("dw-roster") || "[]"); } catch (e) { return []; } },
    addStudent: function (s) { var l = store.roster(); l.push(s); try { localStorage.setItem("dw-roster", JSON.stringify(l)); } catch (e) {} },
    removeStudent: function (id) {
      var l = store.roster().filter(function (s) { return s.id !== id; });
      try { localStorage.setItem("dw-roster", JSON.stringify(l)); } catch (e) {}
    },
    /* Ankündigungsbanner auf der Startseite */
    heroBadge: function () { try { return localStorage.getItem("dw-herobadge") || ""; } catch (e) { return ""; } },
    setHeroBadge: function (txt) { try { if (txt) localStorage.setItem("dw-herobadge", txt); else localStorage.removeItem("dw-herobadge"); } catch (e) {} },
    /* Fragen-Chat pro Lektion (Schüler:in ↔ Lehrkraft) */
    chat: function () { try { return JSON.parse(localStorage.getItem("dw-chat") || "[]"); } catch (e) { return []; } },
    addMsg: function (m) { var l = store.chat(); l.push(m); try { localStorage.setItem("dw-chat", JSON.stringify(l)); } catch (e) {} }
  };

  /* ---------------- Datei-Speicher (IndexedDB) für Unterrichtsmaterial ---------------- */
  var DB = (function () {
    var NAME = "dw-files", STORE = "files", _db = null;
    function open() {
      return new Promise(function (res, rej) {
        if (_db) return res(_db);
        if (!window.indexedDB) return rej(new Error("no-indexeddb"));
        var r = indexedDB.open(NAME, 1);
        r.onupgradeneeded = function (e) {
          var db = e.target.result;
          if (!db.objectStoreNames.contains(STORE)) {
            var os = db.createObjectStore(STORE, { keyPath: "id" });
            os.createIndex("lesson", "lessonId", { unique: false });
          }
        };
        r.onsuccess = function () { _db = r.result; res(_db); };
        r.onerror = function () { rej(r.error); };
      });
    }
    function os(mode) { return open().then(function (db) { return db.transaction(STORE, mode).objectStore(STORE); }); }
    function wrap(req) { return new Promise(function (res, rej) { req.onsuccess = function () { res(req.result); }; req.onerror = function () { rej(req.error); }; }); }
    return {
      add: function (rec) { return os("readwrite").then(function (s) { return wrap(s.add(rec)); }); },
      del: function (id) { return os("readwrite").then(function (s) { return wrap(s.delete(id)); }); },
      get: function (id) { return os("readonly").then(function (s) { return wrap(s.get(id)); }); },
      listByLesson: function (lessonId) {
        return os("readonly").then(function (s) {
          return new Promise(function (res, rej) {
            var out = [], rq = s.index("lesson").openCursor(IDBKeyRange.only(lessonId));
            rq.onsuccess = function (e) { var c = e.target.result; if (c) { out.push(c.value); c.continue(); } else res(out); };
            rq.onerror = function () { rej(rq.error); };
          });
        });
      }
    };
  })();

  function fmtSize(b) {
    if (b < 1024) return b + " B";
    if (b < 1048576) return Math.round(b / 1024) + " KB";
    return (b / 1048576).toFixed(1) + " MB";
  }
  function downloadFile(rec) {
    var url = URL.createObjectURL(rec.blob);
    var a = document.createElement("a");
    a.href = url; a.download = rec.name;
    document.body.appendChild(a); a.click(); a.remove();
    setTimeout(function () { URL.revokeObjectURL(url); }, 2000);
  }
  /* Rendert die Materialliste einer Lektion (async). canEdit = Lehreransicht (Löschen). */
  function renderMaterials(el, lessonId, canEdit) {
    el.innerHTML = '<p class="pf-mat-loading">' + esc(t("mat.loading")) + '</p>';
    DB.listByLesson(lessonId).then(function (files) {
      files.sort(function (a, b) { return (a.date < b.date) ? -1 : 1; });
      if (!files.length) {
        el.innerHTML = canEdit ? "" : '<div class="pf-soon">' + ICON.book + '<p>' + esc(t("lesson.materialSoon")) + '</p></div>';
        return;
      }
      el.innerHTML = files.map(function (f) {
        return '<div class="pf-mat">' + ICON.file +
          '<span class="pf-mat-name">' + esc(f.name) + '</span>' +
          '<span class="pf-mat-size">' + fmtSize(f.size) + '</span>' +
          '<span class="pf-mat-actions">' +
            '<button type="button" class="pf-mat-dl" data-id="' + f.id + '">' + esc(t("mat.download")) + '</button>' +
            (canEdit ? '<button type="button" class="pf-assign-del" data-id="' + f.id + '">' + esc(t("assign.delete")) + '</button>' : '') +
          '</span></div>';
      }).join("");
      el.querySelectorAll(".pf-mat-dl").forEach(function (b) {
        b.addEventListener("click", function () { DB.get(b.getAttribute("data-id")).then(function (rec) { if (rec) downloadFile(rec); }); });
      });
      if (canEdit) el.querySelectorAll(".pf-assign-del").forEach(function (b) {
        b.addEventListener("click", function () { DB.del(b.getAttribute("data-id")).then(function () { renderMaterials(el, lessonId, canEdit); }); });
      });
    }).catch(function () {
      el.innerHTML = '<p class="pf-mat-loading">' + esc(t("mat.error")) + '</p>';
    });
  }

  function normCode(s) { return String(s || "").toUpperCase().replace(/[^A-Z0-9]/g, ""); }
  function checkCode(raw) {
    var c = normCode(raw);
    if (!c) return null;
    if (c === normCode(window.ACCESS.teacher)) return { type: "teacher" };
    var codes = window.ACCESS.codes;
    for (var fmt in codes) {
      for (var lv in codes[fmt]) {
        if (c === normCode(codes[fmt][lv])) return { type: "level", level: lv, format: fmt };
      }
    }
    return null;
  }
  function isUnlocked(code) { return store.unlocked().indexOf(code) !== -1; }
  function formatLabel(f) {
    f = f || store.format();
    var def = window.ACCESS.formats[f] || window.ACCESS.formats.group;
    return L(def.label);
  }
  /* Standard: nur die erste Lektion ist freigegeben, bis die Lehrkraft mehr öffnet */
  /* Standard: nur Lektion 1 offen. Gruppen-Einstellung überschreibt den "__all"-Standard. */
  function lessonOpen(ls, groupKey) {
    var all = store.lessonAccess("__all");
    if (groupKey && groupKey !== "__all") {
      var grp = store.lessonAccess(groupKey);
      if (ls.id in grp) return grp[ls.id];
    }
    if (ls.id in all) return all[ls.id];
    return ls.n === 1;
  }
  /* Gruppe einer:s Schüler:in anhand des Namens im Register bestimmen */
  function studentGroupKey() {
    var nm = normName(store.name());
    if (!nm) return "__all";
    var entry = store.roster().filter(function (s) { return normName(s.name) === nm; })[0];
    if (!entry) return "__all";
    return groupKeyOf(entry) || "__all";
  }
  function linkify(s) {
    return esc(s).replace(/(https?:\/\/[^\s]+)/g, function (u) {
      return '<a href="' + u + '" target="_blank" rel="noopener">' + u + '</a>';
    });
  }
  function normName(s) { return String(s || "").trim().toLowerCase(); }
  function assignmentsFor(name) {
    var n = normName(name);
    if (!n) return [];
    return store.assignments().filter(function (a) { return normName(a.student) === n; });
  }
  function fmtDate(iso) {
    try { return new Date(iso).toLocaleDateString(lang(), { day: "2-digit", month: "2-digit", year: "numeric" }); }
    catch (e) { return ""; }
  }
  function fmtDateTime(iso) {
    try { return new Date(iso).toLocaleString(lang(), { day: "2-digit", month: "2-digit", hour: "2-digit", minute: "2-digit" }); }
    catch (e) { return ""; }
  }

  /* ---------------- Fragen-Chat (Schüler:in ↔ Lehrkraft, pro Lektion) ---------------- */
  /* Verlauf eines:r Schüler:in zu einer Lektion */
  function chatThread(lessonId, studentKey) {
    return store.chat().filter(function (m) { return m.lessonId === lessonId && m.student === studentKey; })
      .sort(function (a, b) { return a.date < b.date ? -1 : 1; });
  }
  /* Alle Verläufe einer Lektion, gruppiert nach Schüler:in */
  function chatThreadsByLesson(lessonId) {
    var out = {};
    store.chat().forEach(function (m) {
      if (m.lessonId !== lessonId) return;
      var th = out[m.student] = out[m.student] || { key: m.student, name: m.studentName || m.student, msgs: [] };
      if (m.studentName) th.name = m.studentName;
      th.msgs.push(m);
    });
    Object.keys(out).forEach(function (k) { out[k].msgs.sort(function (a, b) { return a.date < b.date ? -1 : 1; }); });
    return out;
  }
  /* Verlauf wartet auf Antwort, wenn die letzte Nachricht vom Schüler stammt */
  function chatWaiting(msgs) { var m = msgs[msgs.length - 1]; return !!(m && m.role === "student"); }
  function chatWaitingCount(lessonId) {
    var ths = chatThreadsByLesson(lessonId), n = 0;
    Object.keys(ths).forEach(function (k) { if (chatWaiting(ths[k].msgs)) n++; });
    return n;
  }
  function newMsgId() { return "m" + Date.now() + Math.random().toString(36).slice(2, 6); }
  /* Rendert eine Nachrichtenliste als Sprechblasen. myRole = Rolle des:der Betrachtenden. */
  function chatBubbles(msgs, myRole) {
    if (!msgs.length) return '<p class="pf-chat-empty">' + esc(t("chat.empty")) + '</p>';
    return msgs.map(function (m) {
      var mine = m.role === myRole;
      var who = mine ? t("chat.you") : (m.role === "teacher" ? t("chat.teacher") : (m.studentName || ""));
      return '<div class="pf-bubble ' + (mine ? "me" : "them") + '">' +
        (who ? '<span class="pf-bubble-who">' + esc(who) + '</span>' : '') +
        '<div class="pf-bubble-text">' + linkify(m.text) + '</div>' +
        '<span class="pf-bubble-time">' + esc(fmtDateTime(m.date)) + '</span>' +
      '</div>';
    }).join("");
  }

  function findLesson(id) {
    var lv, i, j;
    for (i = 0; i < window.COURSE.levels.length; i++) {
      lv = window.COURSE.levels[i];
      for (j = 0; j < (lv.lessons || []).length; j++) {
        if (lv.lessons[j].id === id) return { level: lv, lesson: lv.lessons[j] };
      }
    }
    return null;
  }
  function allHwLessons() {
    var out = [], i, j, lv;
    for (i = 0; i < window.COURSE.levels.length; i++) {
      lv = window.COURSE.levels[i];
      for (j = 0; j < (lv.lessons || []).length; j++) {
        if ((lv.lessons[j].homework || []).length) out.push(lv.lessons[j]);
      }
    }
    return out;
  }

  /* ---------------- Header chrome (role chip) ---------------- */
  function renderChrome() {
    var chip = document.getElementById("userChip");
    if (!chip) return;
    var role = store.role();
    if (!role) { chip.innerHTML = ""; return; }
    var label = role === "teacher" ? t("role.teacher") : t("role.student");
    var nm = store.name();
    chip.innerHTML =
      '<span class="chip-role">' + esc(label) + (nm ? ' · ' + esc(nm) : '') + '</span>' +
      '<button type="button" class="chip-logout" id="logoutBtn">' + esc(t("header.logout")) + '</button>';
    var lo = document.getElementById("logoutBtn");
    if (lo) lo.addEventListener("click", function () { store.logout(); go("#/"); });
    var siteLink = document.getElementById("siteLink");
    if (siteLink) siteLink.textContent = t("header.site");
  }

  /* ---------------- Router ---------------- */
  var app;
  var flash = null; // einmalige Erfolgsmeldung nach Code-Einlösung
  var assignPrefill = null; // Name für das Aufgaben-Formular vorbelegen
  var teacherGroup = "__all"; // aktuell im Lehrer-Dashboard gewählte Gruppe
  var GRANT = null; // aus einem persönlichen Zugangslink (?k=) dekodierter Zugang
  function go(hash) { if (location.hash === hash) render(); else location.hash = hash; }

  function render() {
    app = document.getElementById("app");
    if (!app) return;
    renderChrome();
    var role = store.role();
    var hash = location.hash || "#/";
    var parts = hash.replace(/^#\//, "").split("/"); // e.g. ["lesson","a1-1"]

    if (!role) { return GRANT ? viewGrant() : viewLogin(); }
    if (role === "student" && GRANT) { return applyGrant(store.name()); }
    if (parts[0] === "lesson" && parts[1]) return viewLesson(parts[1]);
    if (parts[0] === "teach" && parts[1]) return viewTeachLesson(parts[1]);
    if (parts[0] === "class") return viewClass();
    if (parts[0] === "assign") return role === "teacher" ? viewAssign() : viewStudentDash();
    if (parts[0] === "students") return role === "teacher" ? viewStudents() : viewStudentDash();
    return role === "teacher" ? viewTeacherDash() : viewStudentDash();
  }

  /* ---------------- View: Login ---------------- */
  function viewLogin() {
    app.innerHTML =
      '<section class="pf-login">' +
        '<span class="pf-loginlogo"><img src="logo.png?v=36" alt="Wienerlingo" width="84" height="84"></span>' +
        '<h1 class="pf-h1">' + esc(t("login.title")) + '</h1>' +
        '<p class="pf-sub">' + esc(t("login.sub")) + '</p>' +
        '<form class="pf-codeform" id="codeForm" novalidate>' +
          '<div class="pf-field">' +
            '<label for="pfName">' + esc(t("login.nameLabel")) + '</label>' +
            '<input type="text" id="pfName" placeholder="' + esc(t("login.namePh")) + '" value="' + esc(store.name()) + '" autocomplete="given-name">' +
          '</div>' +
          '<div class="pf-field">' +
            '<label for="pfCode">' + esc(t("login.codeLabel")) + '</label>' +
            '<input type="text" id="pfCode" placeholder="' + esc(t("login.codePh")) + '" autocomplete="off" autocapitalize="characters" spellcheck="false">' +
          '</div>' +
          '<button type="submit" class="btn btn-primary btn-block">' + esc(t("login.enter")) + '</button>' +
          '<p class="pf-codeerr" id="codeErr" role="alert"></p>' +
          '<p class="pf-codehint">' + esc(t("login.codeHint")) + '</p>' +
        '</form>' +
      '</section>';
    var form = document.getElementById("codeForm");
    var codeInput = document.getElementById("pfCode");
    var err = document.getElementById("codeErr");
    var nameInput = document.getElementById("pfName");
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var nm = nameInput.value.trim();
      if (!nm) { err.textContent = t("login.errName"); nameInput.classList.add("bad"); nameInput.focus(); return; }
      var res = checkCode(codeInput.value);
      if (!res) { err.textContent = t("login.invalid"); codeInput.classList.add("bad"); codeInput.focus(); return; }
      store.setName(nm);
      if (res.type === "teacher") store.setRole("teacher");
      else { store.setRole("student"); store.setCourse(res.level); store.setFormat(res.format); }
      go("#/");
    });
    nameInput.addEventListener("input", function () { nameInput.classList.remove("bad"); err.textContent = ""; });
    codeInput.addEventListener("input", function () { codeInput.classList.remove("bad"); err.textContent = ""; });
  }

  /* ---------------- View: Zugang per persönlichem Link (nur Name nötig) ---------------- */
  function viewGrant() {
    var course = (GRANT.lv || []).join(", ") || (GRANT.g || "");
    app.innerHTML =
      '<section class="pf-login">' +
        '<span class="pf-loginlogo"><img src="logo.png?v=36" alt="Wienerlingo" width="84" height="84"></span>' +
        '<h1 class="pf-h1">' + esc(t("grant.title")) + '</h1>' +
        '<p class="pf-sub">' + esc(t("grant.sub", { course: course })) + '</p>' +
        '<form class="pf-codeform" id="grantForm" novalidate>' +
          '<div class="pf-field">' +
            '<label for="gName">' + esc(t("login.nameLabel")) + '</label>' +
            '<input type="text" id="gName" placeholder="' + esc(t("login.namePh")) + '" value="' + esc(store.name()) + '" autocomplete="given-name">' +
          '</div>' +
          '<button type="submit" class="btn btn-primary btn-block">' + esc(t("grant.enter")) + '</button>' +
          '<p class="pf-codeerr" id="gErr" role="alert"></p>' +
        '</form>' +
      '</section>';
    var form = document.getElementById("grantForm");
    var nm = document.getElementById("gName");
    var err = document.getElementById("gErr");
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var v = nm.value.trim();
      if (!v) { err.textContent = t("login.errName"); nm.classList.add("bad"); nm.focus(); return; }
      applyGrant(v);
    });
    nm.addEventListener("input", function () { nm.classList.remove("bad"); err.textContent = ""; });
  }

  /* ---------------- View: Student dashboard ---------------- */
  function viewStudentDash() {
    var prog = store.progress();
    /* Fortschritt nur über die freigeschalteten Kurse des Schülers */
    var done = 0, total = 0;
    window.COURSE.levels.forEach(function (lv) {
      if (!isUnlocked(lv.code)) return;
      (lv.lessons || []).forEach(function (ls) {
        if ((ls.homework || []).length) { total++; if (prog[ls.id] && prog[ls.id].done) done++; }
      });
    });
    var pct = total ? Math.round(done / total * 100) : 0;
    var nm = store.name();
    var fmt = store.format();
    var subKey = fmt === "individual" ? "dash.subIndividual" : (fmt === "mini" ? "dash.subMini" : "dash.subGroup");

    var html =
      '<section class="pf-dash">' +
        '<div class="pf-dashtop">' +
          '<div>' +
            '<span class="pf-fmt pf-fmt-' + fmt + '"><span class="pf-fmt-dot"></span>' + esc(t("dash.yourFormat")) + ': ' + esc(formatLabel(fmt)) + '</span>' +
            '<h1 class="pf-h1">' + esc(nm ? t("dash.hello", { name: nm }) : t("dash.helloAnon")) + '</h1>' +
            '<p class="pf-sub">' + esc(t(subKey)) + '</p>' +
          '</div>' +
          '<div class="pf-ring" style="--pct:' + pct + '">' +
            '<svg viewBox="0 0 80 80" width="80" height="80"><circle class="ring-bg" cx="40" cy="40" r="34"/><circle class="ring-fg" cx="40" cy="40" r="34" pathLength="100" style="stroke-dashoffset:' + (100 - pct) + '"/></svg>' +
            '<span class="pf-ringnum">' + pct + '%</span>' +
          '</div>' +
        '</div>' +
        '<p class="pf-progressnote">' + esc(t("dash.progressNote", { done: done, total: total })) + '</p>' +
        '<div class="pf-redeem">' +
          '<button type="button" class="pf-redeem-toggle" id="redeemToggle">+ ' + esc(t("dash.redeem")) + '</button>' +
          '<form class="pf-redeem-form" id="redeemForm" hidden>' +
            '<input type="text" id="redeemInput" placeholder="' + esc(t("redeem.ph")) + '" autocomplete="off" autocapitalize="characters" spellcheck="false">' +
            '<button type="submit" class="btn btn-primary">' + esc(t("redeem.btn")) + '</button>' +
          '</form>' +
          '<p class="pf-redeem-msg" id="redeemMsg" role="status"></p>' +
        '</div>';

    /* Persönliche Aufgaben — für Einzel/Mini im Vordergrund */
    var myTasks = assignmentsFor(nm);
    if (myTasks.length) {
      html += '<div class="pf-mytasks"><div class="pf-mytasks-head">' + ICON.star +
        '<div><strong>' + esc(t("stu.tasksTitle")) + '</strong><span>' + esc(t("stu.tasksSub")) + '</span></div></div>';
      myTasks.forEach(function (a) {
        html += '<div class="pf-mytask">' +
          (a.course ? '<span class="pf-mytask-course">' + esc(a.course) + '</span>' : '') +
          '<p>' + linkify(a.text) + '</p>' +
          '<span class="pf-mytask-date">' + esc(fmtDate(a.date)) + '</span>' +
        '</div>';
      });
      html += '</div>';
    } else if (fmt === "individual" || fmt === "mini") {
      /* Einzel/Mini: Platzhalter, damit klar ist, wo persönliche Aufgaben erscheinen */
      html += '<div class="pf-mytasks pf-mytasks-empty"><div class="pf-mytasks-head">' + ICON.star +
        '<div><strong>' + esc(t("stu.tasksTitle")) + '</strong><span>' + esc(t("stu.tasksEmpty")) + '</span></div></div></div>';
    }

    /* Schüler sieht nur seine eigenen (freigeschalteten) Kurse */
    window.COURSE.levels.forEach(function (lv) {
      if (isUnlocked(lv.code)) html += levelBlock(lv, prog, false);
    });
    html += '</section>';
    app.innerHTML = html;
    bindLevelToggles();

    var rt = document.getElementById("redeemToggle");
    var rf = document.getElementById("redeemForm");
    var rmsg = document.getElementById("redeemMsg");
    if (flash) { rmsg.textContent = flash; rmsg.className = "pf-redeem-msg ok"; flash = null; }
    if (rt) rt.addEventListener("click", function () {
      rf.hidden = !rf.hidden;
      if (!rf.hidden) document.getElementById("redeemInput").focus();
    });
    if (rf) rf.addEventListener("submit", function (e) {
      e.preventDefault();
      var inp = document.getElementById("redeemInput");
      var res = checkCode(inp.value);
      rmsg.className = "pf-redeem-msg";
      if (!res) { rmsg.textContent = t("redeem.invalid"); rmsg.classList.add("err"); return; }
      if (res.type === "teacher") { rmsg.textContent = t("redeem.teacher"); rmsg.classList.add("err"); return; }
      if (isUnlocked(res.level)) { rmsg.textContent = t("redeem.already"); rmsg.classList.add("err"); return; }
      store.setCourse(res.level);
      store.setFormat(res.format);
      flash = t("redeem.ok", { lvl: res.level });
      render();
    });
  }

  function levelBlock(lv, prog, teacher) {
    var gk = teacher ? teacherGroup : studentGroupKey();
    if (!teacher && !isUnlocked(lv.code)) {
      return '<div class="pf-level is-locked">' +
        '<div class="pf-lockhead">' +
          '<span class="pf-lvcode">' + esc(lv.code) + '</span>' +
          '<span class="pf-lvtitle">' + esc(L(lv.title)) + '</span>' +
          '<span class="pf-lvtag tag-locked">' + ICON.lock + esc(t("lock.tag")) + '</span>' +
          '<span class="pf-lvmeta pf-lockhint">' + esc(t("lock.hint")) + '</span>' +
        '</div>' +
      '</div>';
    }
    var soon = lv.state !== "active";
    var head =
      '<button class="pf-lvhead" aria-expanded="' + (!soon) + '">' +
        '<span class="pf-lvcode">' + esc(lv.code) + '</span>' +
        '<span class="pf-lvtitle">' + esc(L(lv.title)) + '</span>' +
        '<span class="pf-lvtag ' + (soon ? "tag-soon" : "tag-active") + '">' + esc(soon ? t("lvl.soon") : t("lvl.active")) + '</span>' +
        '<span class="pf-lvmeta">' + ((lv.lessons || []).length) + ' ' + esc(t("lvl.lessons")) + '</span>' +
        '<span class="level-chevron" aria-hidden="true"></span>' +
      '</button>';
    var body = '<div class="pf-lvbody"' + (soon ? '' : ' style="max-height:none"') + '>';
    if (!(lv.lessons || []).length) {
      body += '<p class="pf-empty">' + esc(t("lvl.soon")) + '</p>';
    } else {
      body += '<div class="pf-lessons">';
      lv.lessons.forEach(function (ls) {
        var p = prog[ls.id];
        var hasBuiltin = (ls.homework || []).length;
        var hasHw = hasBuiltin || !!store.lessonHw(ls.id);
        var status;
        if (!hasHw) status = '<span class="pf-lstatus s-none">' + esc(t("lesson.hwStatusNone")) + '</span>';
        else if (hasBuiltin && p && p.done) status = '<span class="pf-lstatus s-done">' + esc(t("lesson.hwStatusDone", { score: p.score, total: p.total })) + '</span>';
        else status = '<span class="pf-lstatus s-open">' + esc(t("lesson.hwStatusOpen")) + '</span>';
        var open = lessonOpen(ls, gk);
        var titleHtml = '<span class="pf-ltitle">' + esc(L(ls.title)) + '</span>';

        if (teacher) {
          var qn = chatWaitingCount(ls.id);
          var qBadge = qn ? '<span class="pf-qbadge" title="' + esc(t("chat.waiting")) + '">' + ICON.chatSm + qn + '</span>' : '';
          body +=
            '<div class="pf-lesson pf-lesson-teach">' +
              '<span class="pf-lnum">' + ls.n + '</span>' +
              '<a class="pf-llink" href="#/teach/' + ls.id + '">' + titleHtml + status + qBadge + '</a>' +
              '<label class="pf-toggle" title="' + esc(t("teacher.release")) + '">' +
                '<input type="checkbox" class="pf-access" data-id="' + ls.id + '"' + (open ? ' checked' : '') + '>' +
                '<span class="pf-toggle-ui" aria-hidden="true"></span>' +
                '<span class="pf-toggle-text">' + esc(t("teacher.release")) + '</span>' +
              '</label>' +
            '</div>';
        } else if (open) {
          body +=
            '<a class="pf-lesson" href="#/lesson/' + ls.id + '">' +
              '<span class="pf-lnum">' + ls.n + '</span>' +
              '<span class="pf-lbody">' + titleHtml + status + '</span>' +
              '<span class="pf-lgo" aria-hidden="true">→</span>' +
            '</a>';
        } else {
          body +=
            '<div class="pf-lesson pf-lesson-closed">' +
              '<span class="pf-lnum">' + ls.n + '</span>' +
              '<span class="pf-lbody">' + titleHtml +
                '<span class="pf-lstatus s-none">' + esc(t("lesson.notReleased")) + '</span></span>' +
              '<span class="pf-lgo pf-lgo-lock" aria-hidden="true">' + ICON.lock + '</span>' +
            '</div>';
        }
      });
      body += '</div>';
    }
    body += '</div>';
    return '<div class="pf-level ' + (soon ? "is-soon" : "") + '">' + head + body + '</div>';
  }

  function bindLevelToggles() {
    app.querySelectorAll(".pf-lvhead").forEach(function (h) {
      h.addEventListener("click", function () {
        var open = h.getAttribute("aria-expanded") === "true";
        var body = h.parentElement.querySelector(".pf-lvbody");
        h.setAttribute("aria-expanded", String(!open));
        body.style.maxHeight = open ? null : (body.scrollHeight + 40) + "px";
        if (!open) body.style.maxHeight = "none";
      });
    });
  }

  /* ---------------- View: Lesson (student) ---------------- */
  function viewLesson(id) {
    var f = findLesson(id);
    if (!f) return go("#/");
    if (store.role() === "student" && !isUnlocked(f.level.code)) return go("#/");
    if (store.role() === "student" && !lessonOpen(f.lesson, studentGroupKey())) return go("#/");
    var ls = f.lesson;
    var prog = store.progress()[id];
    var note = store.lessonNote(id);
    var noteHtml = note
      ? '<div class="pf-note">' + ICON.video + '<div class="pf-note-body"><strong>' + esc(t("lesson.note")) + '</strong>' + linkify(note) + '</div></div>'
      : '';

    app.innerHTML =
      '<section class="pf-lessonview">' +
        '<a class="pf-back" href="#/">' + esc(t("lesson.back")) + '</a>' +
        '<p class="pf-eyebrow">' + esc(f.level.code + ' · ' + t("lesson.lesson") + ' ' + ls.n) + '</p>' +
        '<h1 class="pf-h1">' + esc(L(ls.title)) + '</h1>' +
        (L(ls.goal) ? '<div class="pf-goal"><strong>' + esc(t("lesson.goal")) + ':</strong> ' + esc(L(ls.goal)) + '</div>' : '') +
        noteHtml +
        '<div class="pf-tabs" role="tablist">' +
          '<button class="pf-tab is-active" data-tab="material">' + esc(t("lesson.tabMaterial")) + '</button>' +
          '<button class="pf-tab" data-tab="homework">' + esc(t("lesson.tabHomework")) +
            ((ls.homework || []).length ? ' <span class="pf-tabcount">' + ls.homework.length + '</span>' : '') + '</button>' +
          '<button class="pf-tab" data-tab="chat">' + esc(t("lesson.tabQuestions")) +
            (chatThread(ls.id, normName(store.name())).length ? ' <span class="pf-tabcount">' + chatThread(ls.id, normName(store.name())).length + '</span>' : '') + '</button>' +
        '</div>' +
        '<div class="pf-tabpanel" id="tabPanel"></div>' +
      '</section>';

    var panel = document.getElementById("tabPanel");
    function showTab(name) {
      app.querySelectorAll(".pf-tab").forEach(function (b) { b.classList.toggle("is-active", b.getAttribute("data-tab") === name); });
      if (name === "material") { panel.innerHTML = '<div class="pf-mat-list"></div>'; renderMaterials(panel.firstChild, ls.id, false); }
      else if (name === "chat") renderStudentChat(panel, ls);
      else renderHomework(panel, ls);
    }
    app.querySelectorAll(".pf-tab").forEach(function (b) {
      b.addEventListener("click", function () { showTab(b.getAttribute("data-tab")); });
    });
    showTab("material");
  }

  /* ---------------- Fragen-Chat: Schüleransicht ---------------- */
  function renderStudentChat(panel, ls) {
    var myKey = normName(store.name());
    function draw(focus) {
      var msgs = chatThread(ls.id, myKey);
      panel.innerHTML =
        '<div class="pf-chat">' +
          '<div class="pf-chat-log" id="chatLog">' + chatBubbles(msgs, "student") + '</div>' +
          '<form class="pf-chat-form" id="chatForm">' +
            '<textarea id="chatInput" rows="2" placeholder="' + esc(t("chat.placeholder")) + '"></textarea>' +
            '<button type="submit" class="btn btn-primary">' + esc(t("chat.send")) + '</button>' +
          '</form>' +
        '</div>';
      var log = document.getElementById("chatLog");
      log.scrollTop = log.scrollHeight;
      var form = document.getElementById("chatForm");
      var input = document.getElementById("chatInput");
      if (focus) input.focus();
      form.addEventListener("submit", function (e) {
        e.preventDefault();
        var txt = input.value.trim();
        if (!txt) return;
        store.addMsg({ id: newMsgId(), lessonId: ls.id, student: myKey, studentName: store.name(), role: "student", text: txt, date: new Date().toISOString() });
        draw(true);
      });
    }
    draw(false);
  }

  /* ---------------- Homework engine ---------------- */
  function norm(s) {
    return String(s).toLowerCase().trim().replace(/[.!?,;:]+$/, "").replace(/\s+/g, " ");
  }
  function shuffle(a) { a = a.slice(); for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)); var t2 = a[i]; a[i] = a[j]; a[j] = t2; } return a; }

  function renderHomework(panel, ls) {
    var tasks = ls.homework || [];
    var custom = store.lessonHw(ls.id);
    var customHtml = custom
      ? '<div class="hw-teacher">' + ICON.pencilSm + '<div><strong>' + esc(t("hw.fromTeacher")) + '</strong><div class="hw-teacher-body">' + linkify(custom) + '</div></div></div>'
      : '';

    if (!tasks.length) {
      panel.innerHTML = customHtml || ('<div class="pf-soon">' + ICON.pencil + '<p>' + esc(t("lesson.hwNone")) + '</p></div>');
      return;
    }

    panel.innerHTML = customHtml + '<div class="hw-engine"></div>';
    var mount = panel.querySelector(".hw-engine");
    var idx = 0, correctCount = 0;

    function renderTask() {
      var task = tasks[idx];
      var html =
        '<div class="hw-card">' +
          '<div class="hw-meta">' + esc(t("hw.taskOf", { n: idx + 1, total: tasks.length })) + '</div>' +
          '<div class="hw-progress"><span style="width:' + (idx / tasks.length * 100) + '%"></span></div>' +
          '<p class="hw-q">' + esc(L(task.q)) + '</p>' +
          '<div class="hw-body" id="hwBody"></div>' +
          '<div class="hw-feedback" id="hwFb"></div>' +
          '<div class="hw-actions"><button type="button" class="btn btn-primary" id="hwCheck">' + esc(t("hw.check")) + '</button></div>' +
        '</div>';
      mount.innerHTML = html;
      var body = document.getElementById("hwBody");
      var checkBtn = document.getElementById("hwCheck");
      var fb = document.getElementById("hwFb");
      var getResult;

      if (task.type === "choice") {
        task.options.forEach(function (opt, i) {
          var b = el('<button type="button" class="hw-opt" data-i="' + i + '">' + esc(opt) + '</button>');
          b.addEventListener("click", function () {
            body.querySelectorAll(".hw-opt").forEach(function (o) { o.classList.remove("sel"); });
            b.classList.add("sel");
          });
          body.appendChild(b);
        });
        getResult = function () {
          var sel = body.querySelector(".hw-opt.sel");
          if (!sel) return null;
          var i = +sel.getAttribute("data-i");
          body.querySelectorAll(".hw-opt").forEach(function (o, k) {
            o.classList.add("locked");
            if (k === task.answer) o.classList.add("ok");
            if (k === i && i !== task.answer) o.classList.add("bad");
          });
          return i === task.answer;
        };
      } else if (task.type === "fill") {
        body.innerHTML =
          '<div class="hw-fill">' +
            (task.before ? '<span>' + esc(task.before) + '</span>' : '') +
            '<input type="text" id="hwInput" placeholder="' + esc(t("hw.fillPh")) + '" autocomplete="off">' +
            (task.after ? '<span>' + esc(task.after) + '</span>' : '') +
          '</div>';
        getResult = function () {
          var inp = document.getElementById("hwInput");
          if (!inp.value.trim()) return null;
          var ok = task.accept.some(function (a) { return norm(a) === norm(inp.value); });
          inp.classList.add(ok ? "ok" : "bad");
          inp.disabled = true;
          return ok;
        };
      } else if (task.type === "match") {
        var options = shuffle(task.pairs.map(function (p) { return L(p.tr); }));
        body.innerHTML = '<p class="hw-matchhint">' + esc(t("hw.matchHint")) + '</p>';
        task.pairs.forEach(function (p, i) {
          var row = el(
            '<div class="hw-matchrow">' +
              '<span class="hw-mterm">' + esc(p.de) + '</span>' +
              '<select class="hw-msel" data-i="' + i + '"><option value="">' + esc(t("hw.matchPick")) + '</option>' +
                options.map(function (o) { return '<option value="' + esc(o) + '">' + esc(o) + '</option>'; }).join('') +
              '</select>' +
            '</div>');
          body.appendChild(row);
        });
        getResult = function () {
          var sels = body.querySelectorAll(".hw-msel");
          var allFilled = true, allOk = true;
          sels.forEach(function (s) {
            var i = +s.getAttribute("data-i");
            if (!s.value) allFilled = false;
            var ok = s.value === L(task.pairs[i].tr);
            if (!ok) allOk = false;
            s.classList.add(ok ? "ok" : "bad");
            s.disabled = true;
          });
          if (!allFilled) {
            sels.forEach(function (s) { s.classList.remove("ok", "bad"); s.disabled = false; });
            return null;
          }
          return allOk;
        };
      }

      checkBtn.addEventListener("click", function () {
        var res = getResult();
        if (res === null) return; // nichts ausgewählt
        if (res) correctCount++;
        fb.className = "hw-feedback show " + (res ? "good" : "bad");
        var sol = "";
        if (!res) {
          if (task.type === "choice") sol = '<span class="hw-sol">' + esc(t("hw.solution")) + ' ' + esc(task.options[task.answer]) + '</span>';
          else if (task.type === "fill") sol = '<span class="hw-sol">' + esc(t("hw.solution")) + ' ' + esc(task.accept[0]) + '</span>';
        }
        var explain = task.explain ? '<span class="hw-explain">' + esc(L(task.explain)) + '</span>' : '';
        fb.innerHTML = '<strong>' + (res ? esc(t("hw.correct")) : esc(t("hw.wrong")) ) + '</strong>' + sol + explain;
        checkBtn.outerHTML = '<button type="button" class="btn btn-primary" id="hwNext">' +
          esc(idx + 1 < tasks.length ? t("hw.next") : t("hw.finish")) + '</button>';
        document.getElementById("hwNext").addEventListener("click", function () {
          idx++;
          if (idx < tasks.length) renderTask();
          else finish();
        });
      });
    }

    function finish() {
      store.saveHw(ls.id, correctCount, tasks.length);
      mount.innerHTML =
        '<div class="hw-result">' +
          '<div class="hw-resicon">' + ICON.trophy + '</div>' +
          '<h3>' + esc(t("hw.resultTitle")) + '</h3>' +
          '<p class="hw-resscore">' + esc(t("hw.resultScore", { score: correctCount, total: tasks.length })) + '</p>' +
          '<div class="hw-resbtns">' +
            '<button type="button" class="btn btn-ghost" id="hwRetry">' + esc(t("hw.retry")) + '</button>' +
            '<a class="btn btn-primary" href="#/">' + esc(t("hw.toLesson")) + '</a>' +
          '</div>' +
        '</div>';
      document.getElementById("hwRetry").addEventListener("click", function () { idx = 0; correctCount = 0; renderTask(); });
    }

    renderTask();
  }

  /* ---------------- View: Teacher dashboard ---------------- */
  function groupKeyOf(s) {
    if (s.format === "individual") return "i:" + normName(s.name);
    var g = (s.group || "").trim();
    return g ? "g:" + normName(g) : "";
  }
  function groupOptions(roster) {
    var seen = {}, opts = '<option value="__all">' + esc(t("access.allGroups")) + '</option>';
    roster.forEach(function (s) {
      var key = groupKeyOf(s);
      if (!key || seen[key]) return;
      seen[key] = true;
      var label = s.format === "individual" ? (s.name + " · " + formatLabel("individual")) : (s.group + " · " + formatLabel(s.format));
      opts += '<option value="' + esc(key) + '">' + esc(label) + '</option>';
    });
    return opts;
  }

  /* ---- Persönliche Zugangslinks (ohne Backend): Gruppen-Zugang in einen teilbaren Link kodieren ---- */
  function b64urlEnc(s){ return btoa(unescape(encodeURIComponent(s))).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,""); }
  function b64urlDec(s){ s=String(s).replace(/-/g,"+").replace(/_/g,"/"); return decodeURIComponent(escape(atob(s))); }
  function encodeGrant(g){ try { return b64urlEnc(JSON.stringify(g)); } catch (e) { return ""; } }
  function decodeGrant(tok){ try { var g=JSON.parse(b64urlDec(tok)); if (g && g.v===1 && (g.lv || g.acc)) return g; } catch (e) {} return null; }
  function levelOfLesson(id){ var out=null; (window.COURSE.levels||[]).forEach(function(lv){ (lv.lessons||[]).forEach(function(ls){ if (ls.id===id) out=lv.code; }); }); return out; }
  function buildGroupGrant(groupKey){
    var acc = store.lessonAccess(groupKey), levels = {}, roster = store.roster(), mem = null;
    roster.forEach(function(s){ if (groupKeyOf(s)===groupKey){ if (!mem) mem=s; if (s.course) levels[s.course]=true; } });
    Object.keys(acc).forEach(function(id){ var lc=levelOfLesson(id); if (lc) levels[lc]=true; });
    var fmt = groupKey==="__all" ? "group" : (mem ? mem.format : "group");
    var label = groupKey==="__all" ? "" : (mem ? (mem.format==="individual" ? mem.name : (mem.group||"")) : "");
    return { v:1, fmt:fmt, lv:Object.keys(levels), acc:acc, g:label };
  }
  function applyGrant(name){
    if (!GRANT) return;
    if (name) store.setName(name);
    store.setRole("student");
    if (GRANT.fmt) store.setFormat(GRANT.fmt);
    (GRANT.lv||[]).forEach(function(lv){ store.unlock(lv); });
    var acc = GRANT.acc||{};
    Object.keys(acc).forEach(function(id){ store.setLessonAccess("__all", id, acc[id]); });
    GRANT = null;
    go("#/");
  }

  function viewTeacherDash() {
    var prog = store.progress();
    var nm = store.name();
    var roster = store.roster();
    var html =
      '<section class="pf-dash">' +
        '<div class="pf-dashtop">' +
          '<div>' +
            '<h1 class="pf-h1">' + esc(nm ? t("dash.hello", { name: nm }) : t("dash.helloAnon")) + '</h1>' +
            '<p class="pf-sub">' + esc(t("dash.subTeacher")) + '</p>' +
          '</div>' +
          '<div class="pf-dashbtns">' +
            '<a class="btn btn-ghost" href="#/students">' + esc(t("dash.studentsBtn")) + '</a>' +
            '<a class="btn btn-ghost" href="#/class">' + esc(t("dash.classBtn")) + '</a>' +
            '<a class="btn btn-ghost" href="#/assign">' + esc(t("dash.assignBtn")) + '</a>' +
            '<button type="button" class="btn btn-ghost" id="resetAccessBtn">' + esc(t("teacher.resetAccess")) + '</button>' +
          '</div>' +
        '</div>' +
        '<div class="pf-banner">' +
          '<button type="button" class="pf-redeem-toggle" id="bannerToggle">' + ICON.megaphone + ' ' + esc(t("dash.bannerToggle")) + '</button>' +
          '<form class="pf-banner-form" id="bannerForm" hidden>' +
            '<input type="text" id="bannerInput" placeholder="' + esc(t("banner.ph")) + '" value="' + esc(store.heroBadge()) + '">' +
            '<div class="pf-banner-btns">' +
              '<button type="submit" class="btn btn-primary">' + esc(t("banner.save")) + '</button>' +
              '<button type="button" class="btn btn-ghost" id="bannerReset">' + esc(t("banner.reset")) + '</button>' +
            '</div>' +
            '<p class="pf-redeem-msg" id="bannerMsg" role="status"></p>' +
          '</form>' +
        '</div>' +
        '<div class="pf-groupbar">' +
          '<label for="groupSelect">' + esc(t("access.group")) + '</label>' +
          '<select id="groupSelect">' + groupOptions(roster) + '</select>' +
          '<button type="button" class="btn btn-ghost" id="groupLinkBtn">' + esc(t("access.link")) + '</button>' +
        '</div>' +
        '<p class="pf-accesshint pf-grouplink" id="groupLinkOut" hidden></p>' +
        '<p class="pf-accesshint">' + esc(t("teacher.accessHint")) + '</p>' +
        '<p class="pf-flash" id="teachFlash"></p>';
    window.COURSE.levels.forEach(function (lv) { html += levelBlock(lv, prog, true); });
    html += '</section>';
    app.innerHTML = html;
    bindLevelToggles();

    if (flash) { var tf = document.getElementById("teachFlash"); tf.textContent = flash; tf.className = "pf-flash ok"; flash = null; }

    var gsel = document.getElementById("groupSelect");
    if (gsel) { gsel.value = teacherGroup; gsel.addEventListener("change", function () { teacherGroup = gsel.value; render(); }); }

    var glb = document.getElementById("groupLinkBtn");
    if (glb) glb.addEventListener("click", function () {
      var out = document.getElementById("groupLinkOut");
      var g = buildGroupGrant(teacherGroup);
      if (!g.lv.length) { out.hidden = false; out.className = "pf-accesshint pf-grouplink err"; out.textContent = t("access.linkEmpty"); return; }
      var link = location.origin + location.pathname + "?k=" + encodeGrant(g);
      out.hidden = false; out.className = "pf-accesshint pf-grouplink ok";
      out.textContent = t("access.linkCopied") + " " + link;
      if (navigator.clipboard && navigator.clipboard.writeText) { navigator.clipboard.writeText(link).catch(function () {}); }
    });

    app.querySelectorAll(".pf-access").forEach(function (cb) {
      cb.addEventListener("change", function () { store.setLessonAccess(teacherGroup, cb.getAttribute("data-id"), cb.checked); });
    });
    var rab = document.getElementById("resetAccessBtn");
    if (rab) rab.addEventListener("click", function () {
      if (confirm(t("teacher.resetAccessConfirm"))) {
        store.resetLessonAccess();
        flash = t("teacher.resetAccessDone");
        render();
      }
    });

    /* Banner-Editor */
    var bt = document.getElementById("bannerToggle");
    var bform = document.getElementById("bannerForm");
    var binput = document.getElementById("bannerInput");
    var bmsg = document.getElementById("bannerMsg");
    bt.addEventListener("click", function () { bform.hidden = !bform.hidden; if (!bform.hidden) binput.focus(); });
    bform.addEventListener("submit", function (e) {
      e.preventDefault();
      store.setHeroBadge(binput.value.trim());
      bmsg.textContent = t("banner.saved"); bmsg.className = "pf-redeem-msg ok";
    });
    document.getElementById("bannerReset").addEventListener("click", function () {
      store.setHeroBadge(""); binput.value = "";
      bmsg.textContent = t("banner.saved"); bmsg.className = "pf-redeem-msg ok";
    });
  }

  /* ---------------- View: Individual assignments (teacher) ---------------- */
  function viewAssign() {
    var courseOpts = '<option value="">' + esc(t("assign.courseAny")) + '</option>' +
      window.COURSE.levels.map(function (lv) { return '<option value="' + esc(lv.code) + '">' + esc(lv.code) + '</option>'; }).join("");
    var list = store.assignments();
    var listHtml = list.length
      ? list.map(function (a) {
          return '<div class="pf-assign-item">' +
            '<div class="pf-assign-meta"><span class="pf-assign-for">' + esc(t("assign.for")) + ' ' + esc(a.student) + '</span>' +
              (a.course ? '<span class="pf-mytask-course">' + esc(a.course) + '</span>' : '') +
              '<span class="pf-mytask-date">' + esc(fmtDate(a.date)) + '</span></div>' +
            '<p>' + linkify(a.text) + '</p>' +
            '<button type="button" class="pf-assign-del" data-id="' + a.id + '">' + esc(t("assign.delete")) + '</button>' +
          '</div>';
        }).join("")
      : '<div class="pf-soon">' + ICON.star + '<p>' + esc(t("assign.none")) + '</p></div>';

    app.innerHTML =
      '<section class="pf-lessonview">' +
        '<a class="pf-back" href="#/">' + esc(t("lesson.back")) + '</a>' +
        '<h1 class="pf-h1">' + esc(t("assign.title")) + '</h1>' +
        '<p class="pf-sub">' + esc(t("assign.sub")) + '</p>' +
        '<form class="pf-assign-form" id="assignForm">' +
          '<div class="pf-field"><label for="aStudent">' + esc(t("assign.student")) + '</label>' +
            '<input type="text" id="aStudent" placeholder="' + esc(t("assign.studentPh")) + '" autocomplete="off"></div>' +
          '<div class="pf-field"><label for="aCourse">' + esc(t("assign.course")) + '</label>' +
            '<select id="aCourse">' + courseOpts + '</select></div>' +
          '<div class="pf-field"><label for="aText">' + esc(t("assign.text")) + '</label>' +
            '<textarea id="aText" rows="3" placeholder="' + esc(t("assign.textPh")) + '"></textarea></div>' +
          '<button type="submit" class="btn btn-primary">' + esc(t("assign.add")) + '</button>' +
          '<p class="pf-redeem-msg" id="assignMsg" role="status"></p>' +
        '</form>' +
        '<h2 class="pf-h2">' + esc(t("assign.listTitle")) + '</h2>' +
        '<div class="pf-assign-list">' + listHtml + '</div>' +
      '</section>';

    var form = document.getElementById("assignForm");
    var msg = document.getElementById("assignMsg");
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var s = document.getElementById("aStudent");
      var txt = document.getElementById("aText");
      msg.className = "pf-redeem-msg";
      if (!s.value.trim()) { msg.textContent = t("assign.errStudent"); msg.classList.add("err"); s.focus(); return; }
      if (!txt.value.trim()) { msg.textContent = t("assign.errText"); msg.classList.add("err"); txt.focus(); return; }
      store.addAssignment({
        id: "as" + Date.now(),
        student: s.value.trim(),
        course: document.getElementById("aCourse").value,
        text: txt.value.trim(),
        date: new Date().toISOString()
      });
      flash = t("assign.added");
      render();
    });
    app.querySelectorAll(".pf-assign-del").forEach(function (b) {
      b.addEventListener("click", function () { store.removeAssignment(b.getAttribute("data-id")); render(); });
    });
    if (assignPrefill) { document.getElementById("aStudent").value = assignPrefill; assignPrefill = null; document.getElementById("aText").focus(); }
    if (flash) { msg.textContent = flash; msg.className = "pf-redeem-msg ok"; flash = null; }
  }

  /* ---------------- View: Students & groups (teacher) ---------------- */
  function viewStudents() {
    var roster = store.roster();
    var courseOpts = '<option value="">' + esc(t("assign.courseAny")) + '</option>' +
      window.COURSE.levels.map(function (lv) { return '<option value="' + esc(lv.code) + '">' + esc(lv.code) + '</option>'; }).join("");
    var fmtOpts = ["group", "mini", "individual"].map(function (f) {
      return '<option value="' + f + '">' + esc(formatLabel(f)) + '</option>';
    }).join("");

    function studentRow(s) {
      return '<div class="pf-stud">' +
        '<span class="pf-stud-name">' + esc(s.name) + '</span>' +
        (s.course ? '<span class="pf-mytask-course">' + esc(s.course) + '</span>' : '') +
        '<span class="pf-stud-actions">' +
          '<button type="button" class="pf-stud-task" data-name="' + esc(s.name) + '">' + esc(t("students.assignBtn")) + '</button>' +
          '<button type="button" class="pf-assign-del" data-id="' + s.id + '">' + esc(t("assign.delete")) + '</button>' +
        '</span>' +
      '</div>';
    }

    function sectionFor(fmt, clustered) {
      var members = roster.filter(function (s) { return s.format === fmt; });
      var body;
      if (!members.length) {
        body = '<p class="pf-empty">' + esc(t("students.none")) + '</p>';
      } else if (clustered) {
        var groups = {};
        members.forEach(function (s) { var g = (s.group || "").trim() || "__none"; (groups[g] = groups[g] || []).push(s); });
        body = Object.keys(groups).map(function (g) {
          var label = g === "__none" ? t("students.noGroup") : g;
          return '<div class="pf-group"><div class="pf-group-head">' + esc(label) +
            ' <span class="pf-group-count">' + groups[g].length + '</span></div>' +
            groups[g].map(studentRow).join("") + '</div>';
        }).join("");
      } else {
        body = members.map(studentRow).join("");
      }
      return '<div class="pf-stud-section">' +
        '<h2 class="pf-h2">' + esc(formatLabel(fmt)) + ' <span class="pf-tabcount">' + members.length + '</span></h2>' +
        body + '</div>';
    }

    app.innerHTML =
      '<section class="pf-lessonview">' +
        '<a class="pf-back" href="#/">' + esc(t("lesson.back")) + '</a>' +
        '<h1 class="pf-h1">' + esc(t("students.title")) + '</h1>' +
        '<p class="pf-sub">' + esc(t("students.sub")) + '</p>' +
        '<form class="pf-assign-form" id="studForm">' +
          '<div class="form-row">' +
            '<div class="pf-field"><label for="sName">' + esc(t("students.name")) + '</label>' +
              '<input type="text" id="sName" placeholder="' + esc(t("students.namePh")) + '" autocomplete="off"></div>' +
            '<div class="pf-field"><label for="sFormat">' + esc(t("students.format")) + '</label>' +
              '<select id="sFormat">' + fmtOpts + '</select></div>' +
          '</div>' +
          '<div class="form-row">' +
            '<div class="pf-field"><label for="sCourse">' + esc(t("assign.course")) + '</label>' +
              '<select id="sCourse">' + courseOpts + '</select></div>' +
            '<div class="pf-field"><label for="sGroup">' + esc(t("students.group")) + '</label>' +
              '<input type="text" id="sGroup" placeholder="' + esc(t("students.groupPh")) + '" autocomplete="off"></div>' +
          '</div>' +
          '<button type="submit" class="btn btn-primary">' + esc(t("students.add")) + '</button>' +
          '<p class="pf-redeem-msg" id="studMsg" role="status"></p>' +
        '</form>' +
        sectionFor("group", true) +
        sectionFor("mini", true) +
        sectionFor("individual", false) +
      '</section>';

    var form = document.getElementById("studForm");
    var msg = document.getElementById("studMsg");
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var nameEl = document.getElementById("sName");
      msg.className = "pf-redeem-msg";
      if (!nameEl.value.trim()) { msg.textContent = t("assign.errStudent"); msg.classList.add("err"); nameEl.focus(); return; }
      store.addStudent({
        id: "st" + Date.now(),
        name: nameEl.value.trim(),
        format: document.getElementById("sFormat").value,
        course: document.getElementById("sCourse").value,
        group: document.getElementById("sGroup").value.trim(),
        date: new Date().toISOString()
      });
      flash = t("students.added");
      render();
    });
    app.querySelectorAll(".pf-assign-del").forEach(function (b) {
      b.addEventListener("click", function () { store.removeStudent(b.getAttribute("data-id")); render(); });
    });
    app.querySelectorAll(".pf-stud-task").forEach(function (b) {
      b.addEventListener("click", function () { assignPrefill = b.getAttribute("data-name"); go("#/assign"); });
    });
    if (flash) { msg.textContent = flash; msg.className = "pf-redeem-msg ok"; flash = null; }
  }

  /* ---------------- View: Teacher lesson material ---------------- */
  function viewTeachLesson(id) {
    var f = findLesson(id);
    if (!f) return go("#/");
    var ls = f.lesson;
    var note = store.lessonNote(id);
    var hw = store.lessonHw(id);
    var qWait = chatWaitingCount(id);
    app.innerHTML =
      '<section class="pf-lessonview">' +
        '<a class="pf-back" href="#/">' + esc(t("lesson.back")) + '</a>' +
        '<p class="pf-eyebrow">' + esc(f.level.code + ' · ' + t("lesson.lesson") + ' ' + ls.n) + '</p>' +
        '<h1 class="pf-h1">' + esc(L(ls.title)) + '</h1>' +
        (L(ls.goal) ? '<div class="pf-goal"><strong>' + esc(t("lesson.goal")) + ':</strong> ' + esc(L(ls.goal)) + '</div>' : '') +
        '<h2 class="pf-h2">' + esc(t("teacher.hwTitle")) + '</h2>' +
        '<div class="pf-teachcontrols">' +
          '<div class="pf-field">' +
            '<label for="teachHw">' + esc(t("teacher.hwLabel")) + '</label>' +
            '<textarea id="teachHw" rows="3" placeholder="' + esc(t("teacher.hwPh")) + '">' + esc(hw) + '</textarea>' +
            '<div class="pf-noterow">' +
              '<button type="button" class="btn btn-primary" id="hwSave">' + esc(t("teacher.hwSave")) + '</button>' +
              '<span class="pf-redeem-msg" id="hwMsg" role="status"></span>' +
            '</div>' +
          '</div>' +
        '</div>' +
        '<h2 class="pf-h2">' + esc(t("teacher.controlsTitle")) + '</h2>' +
        '<div class="pf-teachcontrols">' +
          '<p class="pf-accesshint" style="margin:0 0 16px">' + esc(t("teacher.accessOnDash")) + '</p>' +
          '<div class="pf-field">' +
            '<label for="teachNote">' + esc(t("teacher.noteLabel")) + '</label>' +
            '<textarea id="teachNote" rows="2" placeholder="' + esc(t("teacher.notePh")) + '">' + esc(note) + '</textarea>' +
            '<div class="pf-noterow">' +
              '<button type="button" class="btn btn-ghost" id="noteSave">' + esc(t("teacher.noteSave")) + '</button>' +
              '<span class="pf-redeem-msg" id="noteMsg" role="status"></span>' +
            '</div>' +
          '</div>' +
        '</div>' +
        '<h2 class="pf-h2">' + esc(t("chat.teacherTitle")) +
          (qWait ? ' <span class="pf-tabcount">' + qWait + '</span>' : '') + '</h2>' +
        '<p class="pf-accesshint" style="margin:0 0 16px">' + esc(t("chat.teacherSub")) + '</p>' +
        '<div class="pf-chat-threads" id="chatThreads"></div>' +
        '<h2 class="pf-h2">' + esc(t("teacher.plan")) + '</h2>' +
        '<div class="pf-soon">' + ICON.list + '<p>' + esc(t("lesson.teacherSoon")) + '</p></div>' +
        '<h2 class="pf-h2">' + esc(t("teacher.material")) + '</h2>' +
        '<div class="pf-upload">' +
          '<label class="pf-uploadbox" for="matInput">' + ICON.upload + '<span>' + esc(t("teacher.upload")) + '</span></label>' +
          '<input type="file" id="matInput" multiple accept=".pdf,.doc,.docx,.ppt,.pptx,.txt,audio/*,image/*,video/*" hidden>' +
          '<p class="pf-uploadnote">' + esc(t("mat.hint")) + '</p>' +
          '<p class="pf-redeem-msg" id="matMsg" role="status"></p>' +
          '<div class="pf-mat-list" id="matListTeach"></div>' +
        '</div>' +
        ((ls.homework || []).length ?
          '<h2 class="pf-h2">' + esc(t("lesson.tabHomework")) + ' <span class="pf-tabcount">' + ls.homework.length + '</span></h2>' +
          '<a class="btn btn-ghost" href="#/lesson/' + ls.id + '">' + esc(t("lesson.open")) + '</a>'
          : '') +
      '</section>';

    var noteArea = document.getElementById("teachNote");
    var noteMsg = document.getElementById("noteMsg");
    document.getElementById("noteSave").addEventListener("click", function () {
      store.setLessonNote(id, noteArea.value.trim());
      noteMsg.textContent = t("teacher.noteSaved");
      noteMsg.className = "pf-redeem-msg ok";
    });
    noteArea.addEventListener("input", function () { noteMsg.textContent = ""; });

    var hwArea = document.getElementById("teachHw");
    var hwMsg = document.getElementById("hwMsg");
    document.getElementById("hwSave").addEventListener("click", function () {
      store.setLessonHw(id, hwArea.value.trim());
      hwMsg.textContent = t("teacher.noteSaved");
      hwMsg.className = "pf-redeem-msg ok";
    });
    hwArea.addEventListener("input", function () { hwMsg.textContent = ""; });

    /* Material-Upload (echte Dateien, lokal in IndexedDB) */
    var matInput = document.getElementById("matInput");
    var matMsg = document.getElementById("matMsg");
    var matList = document.getElementById("matListTeach");
    renderMaterials(matList, id, true);
    matInput.addEventListener("change", function () {
      var files = Array.prototype.slice.call(matInput.files || []);
      var MAXB = 25 * 1024 * 1024, chain = Promise.resolve(), tooBig = [];
      files.forEach(function (file) {
        if (file.size > MAXB) { tooBig.push(file.name); return; }
        chain = chain.then(function () {
          return DB.add({ id: "f" + Date.now() + Math.random().toString(36).slice(2, 7), lessonId: id, name: file.name, type: file.type, size: file.size, blob: file, date: new Date().toISOString() });
        });
      });
      chain.then(function () {
        matInput.value = "";
        if (tooBig.length) { matMsg.textContent = t("mat.tooBig") + " " + tooBig.join(", "); matMsg.className = "pf-redeem-msg err"; }
        else { matMsg.textContent = t("mat.saved"); matMsg.className = "pf-redeem-msg ok"; }
        renderMaterials(matList, id, true);
      }).catch(function () { matMsg.textContent = t("mat.error"); matMsg.className = "pf-redeem-msg err"; });
    });

    /* Fragen-Chat: alle Schüler-Verläufe dieser Lektion */
    renderTeacherChat(document.getElementById("chatThreads"), id);
  }

  /* ---------------- Fragen-Chat: Lehreransicht (alle Verläufe einer Lektion) ---------------- */
  function renderTeacherChat(container, lessonId) {
    if (!container) return;
    var ths = chatThreadsByLesson(lessonId);
    var keys = Object.keys(ths);
    if (!keys.length) {
      container.innerHTML = '<div class="pf-soon">' + ICON.chat + '<p>' + esc(t("chat.none")) + '</p></div>';
      return;
    }
    /* Wartende Verläufe zuerst, dann nach neuester Nachricht */
    keys.sort(function (a, b) {
      var wa = chatWaiting(ths[a].msgs) ? 1 : 0, wb = chatWaiting(ths[b].msgs) ? 1 : 0;
      if (wa !== wb) return wb - wa;
      var la = ths[a].msgs[ths[a].msgs.length - 1].date, lb = ths[b].msgs[ths[b].msgs.length - 1].date;
      return la < lb ? 1 : -1;
    });
    container.innerHTML = keys.map(function (k) {
      var th = ths[k];
      var waiting = chatWaiting(th.msgs);
      return '<div class="pf-chat-thread">' +
        '<div class="pf-chat-who">' + esc(th.name) +
          (waiting ? ' <span class="pf-chat-badge">' + esc(t("chat.waiting")) + '</span>' : '') + '</div>' +
        '<div class="pf-chat-log">' + chatBubbles(th.msgs, "teacher") + '</div>' +
        '<form class="pf-chat-form" data-student="' + esc(k) + '" data-name="' + esc(th.name) + '">' +
          '<textarea rows="2" placeholder="' + esc(t("chat.replyPh")) + '"></textarea>' +
          '<button type="submit" class="btn btn-primary">' + esc(t("chat.reply")) + '</button>' +
        '</form>' +
      '</div>';
    }).join("");
    container.querySelectorAll(".pf-chat-form").forEach(function (form) {
      form.addEventListener("submit", function (e) {
        e.preventDefault();
        var ta = form.querySelector("textarea");
        var txt = ta.value.trim();
        if (!txt) return;
        store.addMsg({ id: newMsgId(), lessonId: lessonId, student: form.getAttribute("data-student"), studentName: form.getAttribute("data-name"), role: "teacher", text: txt, date: new Date().toISOString() });
        renderTeacherChat(container, lessonId);
      });
    });
    container.querySelectorAll(".pf-chat-log").forEach(function (l) { l.scrollTop = l.scrollHeight; });
  }

  /* ---------------- View: Class progress (teacher) ---------------- */
  function viewClass() {
    var prog = store.progress();
    var hwLessons = allHwLessons();
    var rows = hwLessons.map(function (ls) {
      var p = prog[ls.id];
      var status = p && p.done
        ? '<span class="pf-lstatus s-done">' + esc(t("class.done")) + '</span>'
        : '<span class="pf-lstatus s-open">' + esc(t("class.open")) + '</span>';
      var score = p && p.done ? (p.score + ' / ' + p.total) : '—';
      return '<tr><td>' + esc(L(ls.title)) + '</td><td>' + status + '</td><td class="pf-num">' + score + '</td></tr>';
    }).join("");

    app.innerHTML =
      '<section class="pf-lessonview">' +
        '<a class="pf-back" href="#/">' + esc(t("lesson.back")) + '</a>' +
        '<h1 class="pf-h1">' + esc(t("class.title")) + '</h1>' +
        '<p class="pf-sub">' + esc(t("class.sub")) + '</p>' +
        (rows ?
          '<table class="pf-table"><thead><tr><th>' + esc(t("class.lesson")) + '</th><th>' + esc(t("class.status")) + '</th><th>' + esc(t("class.score")) + '</th></tr></thead><tbody>' + rows + '</tbody></table>'
          : '<div class="pf-soon">' + ICON.chart + '<p>' + esc(t("class.empty")) + '</p></div>') +
        '<button type="button" class="btn btn-ghost pf-reset" id="resetBtn">' + esc(t("class.reset")) + '</button>' +
      '</section>';
    document.getElementById("resetBtn").addEventListener("click", function () {
      if (confirm(t("class.confirm"))) { store.resetProgress(); render(); }
    });
  }

  /* ---------------- Icons (inline SVG) ---------------- */
  var ICON = {
    lock: '<svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:-2px;margin-right:6px"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>',
    video: '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="m22 8-6 4 6 4V8Z"/><rect width="14" height="12" x="2" y="6" rx="2" ry="2"/></svg>',
    star: '<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>',
    megaphone: '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:-3px"><path d="m3 11 18-5v12L3 14v-3z"/><path d="M11.6 16.8a3 3 0 1 1-5.8-1.6"/></svg>',
    student: '<svg viewBox="0 0 24 24" width="30" height="30" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>',
    teacher: '<svg viewBox="0 0 24 24" width="30" height="30" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>',
    book: '<svg viewBox="0 0 24 24" width="34" height="34" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>',
    pencil: '<svg viewBox="0 0 24 24" width="34" height="34" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4z"/></svg>',
    pencilSm: '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4z"/></svg>',
    list: '<svg viewBox="0 0 24 24" width="34" height="34" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/></svg>',
    upload: '<svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>',
    file: '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>',
    chart: '<svg viewBox="0 0 24 24" width="34" height="34" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>',
    chat: '<svg viewBox="0 0 24 24" width="34" height="34" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>',
    chatSm: '<svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:-2px;margin-right:4px"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>',
    trophy: '<svg viewBox="0 0 24 24" width="40" height="40" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"/></svg>'
  };

  /* ---------------- Boot ---------------- */
  function boot() {
    try {
      var tok = new URLSearchParams(location.search).get("k");
      if (tok) {
        var g = decodeGrant(tok);
        if (g) { GRANT = g; try { history.replaceState(null, "", location.pathname + location.hash); } catch (e) {} }
      }
    } catch (e) {}
    render();
  }
  window.addEventListener("hashchange", render);
  document.addEventListener("dw:lang", render);
  document.addEventListener("DOMContentLoaded", boot);
})();
