import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Pdf1 from "./assets/files/Conditii_de_utlizare_a_serviciilor_roaming.pdf";
import Pdf2 from "./assets/files/Numere_de_urgenta_in_tarile_UE.pdf";
import Pdf3 from "./assets/files/Servicii_cu_valoare_adaugata_in_tarile_UE.pdf";


i18n.use(initReactI18next).init({
  resources: {
    ro: {
      translation: {
        tabTitleEU: "Roaming în UE",
        heroText:
          "Planifici o vacanță, city-break sau o deplasare peste hotare? Oriunde ai pleca în Uniunea Europeană sau în țările Spațiului Economic European (SEE), rămâi conectat cu Moldcell.",
        activateBlock: {
          title: "Activează opțiunea super simplu",
          app: {
            title: "my moldcell",
            desc: "direct din aplicație",
            btn: "Descarcă aplicația",
            link_ios: "https://apps.apple.com/app/id1263419464",
            link_android:
              "https://play.google.com/store/apps/details?id=md.moldcell.app",
            link_desktop: "https://www.moldcell.md/rom/my-moldcell",
          },
          code: {
            title: "Formează codul",
            desc: "direct din telefon",
            btn: "*222*4*3#",
          },
          store: {
            title: "Magazine Moldcell",
            desc: "te ajutăm în magazin",
            btn: "Vezi oficiile",
            link: "https://www.moldcell.md/rom/private/asistenta/moldcell-offices",
          },
        },
        copyright: "© {{year}} Moldcell. Toate drepturile rezervate.",
        faq: {
          title: "Întrebări frecvente",
          items: [
            {
              q: "Condiții privind utilizarea serviciilor roaming în Europa",
              a: {
                bullets: [
                  {
                    text: "Începând cu 1 ianuarie 2026, cetățenii Republicii Moldova pot utiliza serviciile de telefonie mobilă (apeluri, SMS-uri și date mobile) în statele membre ale Uniunii Europene fără costuri suplimentare de roaming, la tarifele din țara de origine, conform regimului „Roam Like at Home” (RLAH), o inițiativă legislativă a Uniunii Europene extinsă oficial și pentru Republica Moldova.",
                  },
                  {
                    text: "Roamingul în Europa „ca acasă” pentru numerele Moldcell presupune că, dacă ai un Abonament Lumo care include servicii de roaming și călătorești într-o țară din Uniunea Europeană, beneficiezi de următoarele avantaje:",
                    sub: [
                      { text: "Apelurile primite sunt gratuite;" },
                      {
                        text: "Minutele naționale incluse în abonament pot fi folosite pentru apeluri și SMS-uri către numere din țara europeană în care te afli și către Moldova;",
                      },
                      {
                        text: "Traficul de internet inclus în abonament poate fi utilizat în roaming;",
                      },
                    ],
                  },
                  {
                    text: "După consumarea minutelor naționale incluse, vei fi taxat conform tarifelor naționale aplicabile și pentru roaming în Europa.",
                  },
                  {
                    text: "Tarifele UE se aplică automat la conectarea la rețeaua unui operator european.",
                  },
                  {
                    text: "Apelurile efectuate din EU către țări din afara Uniunii Europene sunt taxate ca apeluri internaționale în roaming.",
                  },
                  {
                    text: "Tarifele standard pot diferi în funcție de tipul de abonament sau de utilizarea unui număr Cartelă Moldcell.",
                  },
                  {
                    text: "Țările UE prevăzute în „Roam Like at Home” sunt:",
                  },
                  {
                    text: "Austria, Belgia, Bulgaria, Republica Cehă, Croația, Cipru, Danemarca, Islanda, Italia, Irlanda, Ungaria, Estonia, Franța, Finlanda, Germania, Grecia, Letonia, Lituania, Liechtenstein, Luxemburg, Malta, Norvegia, Olanda, Polonia, Portugalia, România, Slovenia, Slovacia, Spania, Suedia.",
                  },
                ],
              },
            },
            {
              q: "Ce trebuie să fac înainte de plecare?",
              a: {
                bullets: [
                  {
                    text: "Alege un abonament Lumo cu roaming inclus pentru apeluri și internet în Europa.",
                  },
                  {
                    text: "Fii atent la mesajele SMS primite de la operator – conțin detalii despre tarife și sfaturi utile.",
                  },
                  {
                    text: 'În setările telefonului, funcția "selectare automată a rețelei" trebuie sa fie activă, pentru a beneficia de cel mai bun semnal peste hotare.',
                  },
                  {
                    text: "Instalează aplicația my moldcell pentru activarea opțiunilor dedicate roaming și verificarea traficului  / tarifelor standard.",
                  },
                ],
              },
            },
            {
              q: "Condiții de utilizare rezonabilă a serviciilor Roaming în țările din Uniunea Europeană și Spațiul Economic European",
              a: {
                bullets: [
                  {
                    text: '<strong>Roaming inclus și „Roaming ca acasă" (RLAH) în UE/SEE</strong>\nCa utilizator Moldcell din Republica Moldova, poți beneficia de roaming inclus în abonament sau de serviciul „Roaming ca acasă” atunci când călătorești temporar într-un stat din Uniunea Europeană sau Spațiul Economic European (SEE), dacă îndeplinești cumulativ următoarele condiții:',
                  },
                  {
                    text: "1. Rezidență sau legături stabile cu Moldova - ești rezident al țării sau ai o legătură stabilă (lucrezi, studiezi, ești pensionar care se întoarce frecvent etc.).",
                  },
                  {
                    text: "2. Călătorii ocazionale - folosești serviciile în UE/SEE temporar, nu permanent.",
                  },
                  {
                    text: "3. Consumul de servicii - nu folosești mai multe servicii (date, minute, SMS) în roaming decât în Moldova pe o perioadă de minimum 4 luni consecutive.",
                  },
                  {
                    text: "4. Limitele planului național - nu depășești volumul de date mobile sau minute de convorbiri inclus în planul tău national de abonament.",
                  },
                  {
                    text: "<strong>Monitorizare și verificare</strong>\nMoldcell poate analiza:",
                  },
                  {
                    text: "– cât timp petreci în Moldova comparativ cu UE/SEE;",
                  },
                  {
                    text: "– dacă folosești mai multe date sau minute în roaming decât în țară;",
                  },
                  {
                    text: "– dacă ai cartele inactive în Moldova, dar active în UE/SEE;",
                  },
                  {
                    text: "– dacă ai mai multe cartele SIM/eSIM utilizate exclusiv în roaming.",
                  },
                  {
                    text: "<strong>Risc de utilizare abuzivă sau anormală</strong>\nRoamingul poate fi considerat abuziv dacă:",
                  },
                  {
                    text: "– consumul de servicii și prezența predomină în roaming UE/SEE față de consumul național;",
                  },
                  {
                    text: "– există utilizare preponderentă sau exclusivă a mai multor SIM-uri în roaming;",
                  },
                  {
                    text: "– există dovezi de revânzare sau folosire comercială a serviciilor în afara Moldovei.",
                  },
                  { text: "<strong>Măsuri în caz de abuz</strong>\nDacă se constată risc:" },
                  {
                    text: "– Moldcell poate avertiza clientul și solicita dovezi de rezidență sau legături stabile cu Moldova;",
                  },
                  {
                    text: "– În lipsa dovezilor sau modificării comportamentului, se pot aplica tarife standard de roaming (suprataxă) sau se pot suspenda temporar sau permanent serviciile Roaming;",
                  },
                  {
                    text: "– Măsurile se aplică și pentru mai multe SIM/eSIM-uri deținute de același client sau în cazul revânzării organizate.",
                  },
                  {
                    text: "<strong>Drepturile abonatului și examinarea plângerilor</strong>\nAbonatul are dreptul să conteste aplicarea Politicilor de Utilizare Roaming și să prezinte dovezi suplimentare privind utilizarea legitimă a serviciilor de Roaming conform procedurilor de examinare a reclamaților ale Furnizorului, precum și conform prevederilor legislației în vigoare.",
                  },
                  {
                    text: {
                      text: "Condițiile de utilizare a serviciului Roaming",
                      link: Pdf1,
                    },
                  },
                ],
              },
            },

            {
              q: "Ce este roaming-ul involuntar și modalități de evitare a acestuia în zonele de frontieră și în rețele non-terestre (maritime)",
              a: {
                bullets: [
                  {
                    text: '<strong>Roaming involuntar</strong>\nRoaming-ul involuntar apare atunci când dispozitivul se conectează automat la o rețea mobilă dintr-o altă țară, fără ca utilizatorul să își dea seama. Acest lucru se întâmplă în special în zonele aflate aproape de o frontieră sau în apropierea unor nave aeriene ori maritime, unde semnalul altor rețele poate fi mai puternic decât cel local.\n\nDacă te afli în Moldova, aproape de granița cu o țară vecină, telefonul poate prelua automat semnalul acelei rețele atunci când modul de selectare este setat pe „Automat”. Situația este similară când călătorești în UE/SEE, în special lângă granițele cu state din afara UE/SEE sau în zone în care pot fi captate rețele non-terestre (satelit, aerian, maritim).\n\nÎn momentul în care telefonul se conectează la o rețea străină sau non-terestră, se aplică tarifele de roaming specifice țării sau rețelei în care s-a înregistrat dispozitivul',
                  },
                  {
                    text: '<strong>Cum te protejezi de roaming involuntar?</strong>\nPentru a evita costurile mari și imprevizibile, cauzate de conectarea accidentală la rețelele străine, iată ce poți face:',
                           sub: [
                      { text: "Dezactivează conectarea automată la un operator de telefonie mobilă din meniul telefonului (Accesează \"Setări\" → \"Conexiuni\" → \"Rețele mobile\" → \"Operatori de rețea\" și asigură-te că este debifată opțiunea \"Selectare automată\")." },
                      {
                        text: "Fii atent la mesajele de conectare la serviciul roaming, care vin în mod obligatoriu în momentul conectării în altă țară sau rețeaua navei croaziere.",
                      },
                      {
                        text: "Setează limita pentru utilizarea datelor în roaming conform limitelor incluse în abonament.",
                      },
                      {
                        text: "Verifică frecvent starea contului, dar ai în vedere că datele despre consumul în roaming se actualizează mai greu, din cauza faptului că aceste servicii se facturează de către operatorul străin, care transmite operatorului tău național informația despre consum.",
                      },
                    ],
                  },
                 
                ],
              },
            },
             {
              q: "	Informații despre serviciile de urgență, sisteme de avertizare publică și apeluri cu tarif Premium în fiecare țară UE",
              a: {
                bullets: [
                  {
                    text: "Conform cerințelor regulamentului UE, vă rugăm să găsiți mai jos informații referitoare la utilizarea serviciilor de roaming (numere de urgență, sisteme de avertizare publică și servicii cu valoare adăugată) atunci când intrați într-un alt stat membru al UE ",
                  },
                  {
                    text: {
                      text: "Numere de urgență din țările UE",
                      link: Pdf2,
                    },
                  },
                   {
                    text: {
                      text: "Sisteme de avertizare publică din țările UE",
                      link: Pdf3,
                    },
                  },
                ],
              },
            },
          ],
        },
      },
    },
    ru: {
      translation: {
        tabTitleEU: "Роуминг в ЕС",
        heroText:
          "Планируешь отпуск, city-break или поездку за границу? Где бы ты ни был в Европейском Союзе или странах Европейского экономического пространства (ЕЭП), оставайся на связи с Moldcell.",
        activateBlock: {
          title: "Активируй опцию очень просто",
          app: {
            title: "my moldcell",
            desc: "прямо в приложении",
            btn: "Скачать приложение",
            link_ios: "https://apps.apple.com/app/id1263419464",
            link_android:
              "https://play.google.com/store/apps/details?id=md.moldcell.app",
            link_desktop: "https://www.moldcell.md/rus/my-moldcell",
          },
          code: {
            title: "Набери код",
            desc: "прямо на телефоне",
            btn: "*222*4*3#",
          },
          store: {
            title: "Офисы Moldcell",
            desc: "поможем в офисе",
            btn: "Найти офис",
            link: "https://www.moldcell.md/rus/private/pomoshi/moldcell-offices",
          },
        },
        copyright: "© {{year}} Moldcell. Все права защищены.",
        faq: {
          title: "Частые вопросы",
          items: [
            {
              q: "Condiții privind utilizarea serviciilor roaming în Europa",
              a: {
                bullets: [
                  {
                    text: "Începând cu 1 ianuarie 2026, cetățenii Republicii Moldova pot utiliza serviciile de telefonie mobilă (apeluri, SMS-uri și date mobile) în statele membre ale Uniunii Europene fără costuri suplimentare de roaming, la tarifele din țara de origine, conform regimului „Roam Like at Home” (RLAH), o inițiativă legislativă a Uniunii Europene extinsă oficial și pentru Republica Moldova.",
                  },
                  {
                    text: "Roamingul în Europa „ca acasă” pentru numerele Moldcell presupune că, dacă ai un Abonament Lumo care include servicii de roaming și călătorești într-o țară din Uniunea Europeană, beneficiezi de următoarele avantaje:",
                    sub: [
                      { text: "Apelurile primite sunt gratuite;" },
                      {
                        text: "Minutele naționale incluse în abonament pot fi folosite pentru apeluri și SMS-uri către numere din țara europeană în care te afli și către Moldova;",
                      },
                      {
                        text: "Traficul de internet inclus în abonament poate fi utilizat în roaming;",
                      },
                    ],
                  },
                  {
                    text: "După consumarea minutelor naționale incluse, vei fi taxat conform tarifelor naționale aplicabile și pentru roaming în Europa.",
                  },
                  {
                    text: "Tarifele UE se aplică automat la conectarea la rețeaua unui operator european.",
                  },
                  {
                    text: "Apelurile efectuate din EU către țări din afara Uniunii Europene sunt taxate ca apeluri internaționale în roaming.",
                  },
                  {
                    text: "Tarifele standard pot diferi în funcție de tipul de abonament sau de utilizarea unui număr Cartelă Moldcell.",
                  },
                  {
                    text: "Țările UE prevăzute în „Roam Like at Home” sunt:",
                  },
                  {
                    text: "Austria, Belgia, Bulgaria, Republica Cehă, Croația, Cipru, Danemarca, Islanda, Italia, Irlanda, Ungaria, Estonia, Franța, Finlanda, Germania, Grecia, Letonia, Lituania, Liechtenstein, Luxemburg, Malta, Norvegia, Olanda, Polonia, Portugalia, România, Slovenia, Slovacia, Spania, Suedia.",
                  },
                ],
              },
            },
            {
              q: "Ce trebuie să fac înainte de plecare?",
              a: {
                bullets: [
                  {
                    text: "Alege un abonament Lumo cu roaming inclus pentru apeluri și internet în Europa.",
                  },
                  {
                    text: "Fii atent la mesajele SMS primite de la operator – conțin detalii despre tarife și sfaturi utile.",
                  },
                  {
                    text: 'În setările telefonului, funcția "selectare automată a rețelei" trebuie sa fie activă, pentru a beneficia de cel mai bun semnal peste hotare.',
                  },
                  {
                    text: "Instalează aplicația my moldcell pentru activarea opțiunilor dedicate roaming și verificarea traficului  / tarifelor standard.",
                  },
                ],
              },
            },
            {
              q: "Condiții de utilizare rezonabilă a serviciilor Roaming în țările din Uniunea Europeană și Spațiul Economic European",
              a: {
                bullets: [
                  {
                    text: '<strong>Roaming inclus și „Roaming ca acasă" (RLAH) în UE/SEE</strong>\nCa utilizator Moldcell din Republica Moldova, poți beneficia de roaming inclus în abonament sau de serviciul „Roaming ca acasă” atunci când călătorești temporar într-un stat din Uniunea Europeană sau Spațiul Economic European (SEE), dacă îndeplinești cumulativ următoarele condiții:',
                  },
                  {
                    text: "1. Rezidență sau legături stabile cu Moldova - ești rezident al țării sau ai o legătură stabilă (lucrezi, studiezi, ești pensionar care se întoarce frecvent etc.).",
                  },
                  {
                    text: "2. Călătorii ocazionale - folosești serviciile în UE/SEE temporar, nu permanent.",
                  },
                  {
                    text: "3. Consumul de servicii - nu folosești mai multe servicii (date, minute, SMS) în roaming decât în Moldova pe o perioadă de minimum 4 luni consecutive.",
                  },
                  {
                    text: "4. Limitele planului național - nu depășești volumul de date mobile sau minute de convorbiri inclus în planul tău national de abonament.",
                  },
                  {
                    text: "<strong>Monitorizare și verificare</strong>\nMoldcell poate analiza:",
                  },
                  {
                    text: "– cât timp petreci în Moldova comparativ cu UE/SEE;",
                  },
                  {
                    text: "– dacă folosești mai multe date sau minute în roaming decât în țară;",
                  },
                  {
                    text: "– dacă ai cartele inactive în Moldova, dar active în UE/SEE;",
                  },
                  {
                    text: "– dacă ai mai multe cartele SIM/eSIM utilizate exclusiv în roaming.",
                  },
                  {
                    text: "<strong>Risc de utilizare abuzivă sau anormală</strong>\nRoamingul poate fi considerat abuziv dacă:",
                  },
                  {
                    text: "– consumul de servicii și prezența predomină în roaming UE/SEE față de consumul național;",
                  },
                  {
                    text: "– există utilizare preponderentă sau exclusivă a mai multor SIM-uri în roaming;",
                  },
                  {
                    text: "– există dovezi de revânzare sau folosire comercială a serviciilor în afara Moldovei.",
                  },
                  { text: "<strong>Măsuri în caz de abuz</strong>\nDacă se constată risc:" },
                  {
                    text: "– Moldcell poate avertiza clientul și solicita dovezi de rezidență sau legături stabile cu Moldova;",
                  },
                  {
                    text: "– În lipsa dovezilor sau modificării comportamentului, se pot aplica tarife standard de roaming (suprataxă) sau se pot suspenda temporar sau permanent serviciile Roaming;",
                  },
                  {
                    text: "– Măsurile se aplică și pentru mai multe SIM/eSIM-uri deținute de același client sau în cazul revânzării organizate.",
                  },
                  {
                    text: "<strong>Drepturile abonatului și examinarea plângerilor</strong>\nAbonatul are dreptul să conteste aplicarea Politicilor de Utilizare Roaming și să prezinte dovezi suplimentare privind utilizarea legitimă a serviciilor de Roaming conform procedurilor de examinare a reclamaților ale Furnizorului, precum și conform prevederilor legislației în vigoare.",
                  },
                  {
                    text: {
                      text: "Condițiile de utilizare a serviciului Roaming",
                      link: Pdf1,
                    },
                  },
                ],
              },
            },

            {
              q: "Ce este roaming-ul involuntar și modalități de evitare a acestuia în zonele de frontieră și în rețele non-terestre (maritime)",
              a: {
                bullets: [
                  {
                    text: '<strong>Roaming involuntar</strong>\nRoaming-ul involuntar apare atunci când dispozitivul se conectează automat la o rețea mobilă dintr-o altă țară, fără ca utilizatorul să își dea seama. Acest lucru se întâmplă în special în zonele aflate aproape de o frontieră sau în apropierea unor nave aeriene ori maritime, unde semnalul altor rețele poate fi mai puternic decât cel local.\n\nDacă te afli în Moldova, aproape de granița cu o țară vecină, telefonul poate prelua automat semnalul acelei rețele atunci când modul de selectare este setat pe „Automat”. Situația este similară când călătorești în UE/SEE, în special lângă granițele cu state din afara UE/SEE sau în zone în care pot fi captate rețele non-terestre (satelit, aerian, maritim).\n\nÎn momentul în care telefonul se conectează la o rețea străină sau non-terestră, se aplică tarifele de roaming specifice țării sau rețelei în care s-a înregistrat dispozitivul',
                  },
                  {
                    text: '<strong>Cum te protejezi de roaming involuntar?</strong>\nPentru a evita costurile mari și imprevizibile, cauzate de conectarea accidentală la rețelele străine, iată ce poți face:',
                           sub: [
                      { text: "Dezactivează conectarea automată la un operator de telefonie mobilă din meniul telefonului (Accesează \"Setări\" → \"Conexiuni\" → \"Rețele mobile\" → \"Operatori de rețea\" și asigură-te că este debifată opțiunea \"Selectare automată\")." },
                      {
                        text: "Fii atent la mesajele de conectare la serviciul roaming, care vin în mod obligatoriu în momentul conectării în altă țară sau rețeaua navei croaziere.",
                      },
                      {
                        text: "Setează limita pentru utilizarea datelor în roaming conform limitelor incluse în abonament.",
                      },
                      {
                        text: "Verifică frecvent starea contului, dar ai în vedere că datele despre consumul în roaming se actualizează mai greu, din cauza faptului că aceste servicii se facturează de către operatorul străin, care transmite operatorului tău național informația despre consum.",
                      },
                    ],
                  },
                 
                ],
              },
            },
             {
              q: "	Informații despre serviciile de urgență, sisteme de avertizare publică și apeluri cu tarif Premium în fiecare țară UE",
              a: {
                bullets: [
                  {
                    text: "Conform cerințelor regulamentului UE, vă rugăm să găsiți mai jos informații referitoare la utilizarea serviciilor de roaming (numere de urgență, sisteme de avertizare publică și servicii cu valoare adăugată) atunci când intrați într-un alt stat membru al UE ",
                  },
                  {
                    text: {
                      text: "Numere de urgență din țările UE",
                      link: Pdf2,
                    },
                  },
                   {
                    text: {
                      text: "Sisteme de avertizare publică din țările UE",
                      link: Pdf3,
                    },
                  },
                ],
              },
            },
          ],
        },
      },
    },
  },
  lng: "ro",
  interpolation: { escapeValue: false },
});

export default i18n;
