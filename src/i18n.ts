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
        footer: {
          contacts: {
            title: "Contacte",
            email: "moldcell@moldcell.md",
            emailLabel: "Email:",
            phoneLabel: "Tel:",
            phone: "+373 78 500 500",
          },
          follow: {
            title: "Urmărește-ne",
            instagram: "https://instagram.com/moldcell",
            tiktok: "https://tiktok.com/@moldcell",
            facebook: "https://facebook.com/Moldcell/",
            youtube: "https://youtube.com/@moldcellCG",
            telegram: "https://t.me/moldcell_cg",
            website: "https://moldcell.md/rom/",
          },
          copyright: "© {{year}} Moldcell. Toate drepturile rezervate.",
        },
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
                  {
                    text: "<strong>Măsuri în caz de abuz</strong>\nDacă se constată risc:",
                  },
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
              q: "Ce este roaming-ul involuntar și modalități de evitare a acestuia în zonele de frontieră și în rețele non-terestre (maritime)?",
              a: {
                bullets: [
                  {
                    text: "<strong>Roaming involuntar</strong>\nRoaming-ul involuntar apare atunci când dispozitivul se conectează automat la o rețea mobilă dintr-o altă țară, fără ca utilizatorul să își dea seama. Acest lucru se întâmplă în special în zonele aflate aproape de o frontieră sau în apropierea unor nave aeriene ori maritime, unde semnalul altor rețele poate fi mai puternic decât cel local.\n\nDacă te afli în Moldova, aproape de granița cu o țară vecină, telefonul poate prelua automat semnalul acelei rețele atunci când modul de selectare este setat pe „Automat”. Situația este similară când călătorești în UE/SEE, în special lângă granițele cu state din afara UE/SEE sau în zone în care pot fi captate rețele non-terestre (satelit, aerian, maritim).\n\nÎn momentul în care telefonul se conectează la o rețea străină sau non-terestră, se aplică tarifele de roaming specifice țării sau rețelei în care s-a înregistrat dispozitivul",
                  },
                  {
                    text: "<strong>Cum te protejezi de roaming involuntar?</strong>\nPentru a evita costurile mari și imprevizibile, cauzate de conectarea accidentală la rețelele străine, iată ce poți face:",
                    sub: [
                      {
                        text: 'Dezactivează conectarea automată la un operator de telefonie mobilă din meniul telefonului (Accesează "Setări" → "Conexiuni" → "Rețele mobile" → "Operatori de rețea" și asigură-te că este debifată opțiunea "Selectare automată").',
                      },
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
              q: "Informații despre serviciile de urgență, sisteme de avertizare publică și apeluri cu tarif Premium în fiecare țară UE",
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
        footer: {
          contacts: {
            title: "Контакты",
            email: "moldcell@moldcell.md",
            emailLabel: "Email:",
            phoneLabel: "Тел:",
            phone: "+373 78 500 500",
          },
          follow: {
            title: "Следите за нами",
            instagram: "https://instagram.com/moldcell",
            tiktok: "https://tiktok.com/@moldcell",
            facebook: "https://facebook.com/Moldcell/",
            youtube: "https://youtube.com/@moldcellCG",
            telegram: "https://t.me/moldcell_cg",
            website: "https://moldcell.md/rus/",
          },
          copyright: "© {{year}} Moldcell. Все права защищены.",
        },
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
              q: "Условия использования услуг роуминга в Европе",
              a: {
                bullets: [
                  {
                    text: "Начиная с 1 января 2026 года граждане Республики Молдова могут использовать услуги мобильной связи (звонки, SMS и мобильный интернет) в государствах-членах Европейского Союза без дополнительной платы за роуминг – по тарифам своей страны, в соответствии с режимом «Roam Like at Home» (RLAH), законодательной инициативой ЕС, официально расширенной и на Республику Молдова.",
                  },
                  {
                    text: "Роуминг в Европе «как дома» для номеров Moldcell означает, что если вы пользуетесь Aбонементом Lumo, включающим услуги роуминга, и путешествуете в страну Европейского Союза, вы получаете следующие преимущества:",
                    sub: [
                      { text: "Входящие звонки – бесплатные;" },
                      {
                        text: "Национальные минуты, включённые в абонемент, могут использоваться для звонков и SMS на номера страны пребывания в ЕС и в Молдову;",
                      },
                      {
                        text: "Интернет-трафик, включённый в абонемент, может быть использован в роуминге;",
                      },
                    ],
                  },
                  {
                    text: "После исчерпания национальных минут тарификация будет происходить согласно национальным тарифам, применяемым и для роуминга в Европе.",
                  },
                  {
                    text: "Тарифы ЕС применяются автоматически при подключении к сети европейского оператора.",
                  },
                  {
                    text: "Звонки из ЕС в страны вне Европейского Союза тарифицируются как звонки в роуминге.",
                  },
                  {
                    text: "Стандартные тарифы могут отличаться в зависимости от типа абонемента или если используете номер Cartelă Moldcell.",
                  },
                  {
                    text: "Страны ЕС, включённые в «Roam Like at Home»:",
                  },
                  {
                    text: "Австрия, Бельгия, Болгария, Чехия, Хорватия, Кипр, Дания, Исландия, Италия, Ирландия, Венгрия, Эстония, Франция, Финляндия, Германия, Греция, Латвия, Литва, Лихтенштейн, Люксембург, Мальта, Норвегия, Нидерланды, Польша, Португалия, Румыния, Словения, Словакия, Испания, Швеция.",
                  },
                ],
              },
            },
            {
              q: "Что нужно сделать перед поездкой?",
              a: {
                bullets: [
                  {
                    text: "Выберите абонемент Lumo с включённым роумингом для звонков и интернета в Европе.",
                  },
                  {
                    text: "Обращайте внимание на SMS-сообщения от оператора – они содержат информацию о тарифах и полезные рекомендации.",
                  },
                  {
                    text: "В настройках телефона должна быть включена функция «Автоматический выбор сети», чтобы пользоваться лучшим доступным сигналом за границей.",
                  },
                  {
                    text: "Установите приложение my moldcell для активации опций роуминга и проверки трафика / стандартных тарифов.",
                  },
                ],
              },
            },
            {
              q: "Условия разумного использования услуг Роуминга в странах Европейского Союза и Европейского экономического пространства",
              a: {
                bullets: [
                  {
                    text: "<strong>Роуминг, включенный в абонемент, и «Роуминг как дома» (RLAH) в ЕС/ЕЭЗ – Moldcell</strong>\nКак пользователь Moldcell из Республики Молдова, вы можете пользоваться включенным роумингом или услугой „Роуминг как дома” при временных поездках в страны Европейского союза (ЕС) или Европейской экономической зоны (ЕЭЗ), если выполняются все следующие условия:",
                  },
                  {
                    text: "1. Резиденство или стабильные связи с Молдовой – вы являетесь резидентом страны или имеете стабильные связи (работаете, учитесь, являетесь пенсионером, часто возвращаетесь и т.д.).",
                  },
                  {
                    text: "2. Случайные поездки – услуги используются временно в ЕС/ЕЭЗ, а не постоянно.",
                  },
                  {
                    text: "3. Потребление услуг – вы не используете больше услуг (интернет данные, минуты, SMS) в роуминге, чем в Молдове, в течение как минимум 4 последовательных месяцев.",
                  },
                  {
                    text: "4. Лимиты национального плана – вы не превышаете объем данных или минут, включенных в ваш национальный план абонемента.",
                  },
                  {
                    text: "<strong>Мониторинг и проверка</strong>\nMoldcell может анализировать:",
                  },
                  {
                    text: "– сколько времени вы проводите в Молдове по сравнению с ЕС/ЕЭЗ;",
                  },
                  {
                    text: "– используете ли вы больше интернет данных или минут в роуминге, чем в стране;",
                  },
                  {
                    text: "– есть ли у вас SIM/eSIM-карты, неактивные в Молдове, но активные в ЕС/ЕЭЗ;",
                  },
                  {
                    text: "– покупаете ли вы несколько SIM-карт и используете их исключительно за границей.",
                  },
                  {
                    text: "<strong>Риск злоупотребления</strong>\nРоуминг может считаться злоупотреблением, если:",
                  },
                  {
                    text: "– потребление услуг и присутствие преобладает в роуминге ЕС/ЕЭЗ по сравнению с национальным использованием;",
                  },
                  {
                    text: "– наблюдается преобладающее или исключительно роуминговое использование нескольких SIM-карт;",
                  },
                  {
                    text: "– есть доказательства перепродажи или коммерческого использования услуг за пределами Молдовы.",
                  },
                  {
                    text: "<strong>Меры в случае злоупотребления</strong>\nЕсли выявлен риск:",
                  },
                  {
                    text: "– Moldcell может предупредить клиента и запросить доказательства резидентства или стабильных связей с Молдовой;",
                  },
                  {
                    text: "– При отсутствии предоставленных доказательств или при неизменении поведения могут применяться стандартные тарифы роуминга (сверхтариф) либо временная или постоянная приостановка услуг роуминга;",
                  },
                  {
                    text: "– Меры распространяются на все SIM/eSIM-карты одного клиента или при организованной перепродаже.",
                  },
                  {
                    text: "<strong>Права абонента и порядок рассмотрения жалоб</strong>\nАбонент имеет право оспорить применение Политики справедливого использования и предоставить дополнительные доказательства легитимного использования услуг роуминга в соответствии с процедурами рассмотрения жалоб у Оператора, а также в рамках действующего законодательства.",
                  },
                  {
                    text: {
                      text: "Общие условия использования услуги роуминг",
                      link: Pdf1,
                    },
                  },
                ],
              },
            },

            {
              q: "Что такое непреднамеренный роуминг и как его избежать в приграничных зонах и не территориальных сетях (морских)?",
              a: {
                bullets: [
                  {
                    text: "<strong>Непреднамеренный роуминг</strong>\nНепреднамеренный роуминг возникает, когда ваше устройство автоматически подключается к мобильной сети другой страны без вашего ведома. Это может происходить в приграничных зонах или рядом с воздушными и морскими судами, где сигнал чужой сети может быть сильнее местного.\\nЕсли вы находитесь в Молдове рядом с границей, телефон может автоматически переключиться на сеть соседнего государства при включённом режиме «Автоматически». Аналогичная ситуация может возникнуть при поездках в ЕС/ЕЭЗ, особенно рядом с границами стран вне ЕС/ЕЭЗ или в зонах, где доступны не территориальные сети (спутниковые, воздушные, морские). \\nВ момент подключения к иностранной или не территориальной сети применяются роуминговыe тарифы той страны или сети, к которой подключилось устройство.",
                  },
                  {
                    text: "<strong>Как защититься от непреднамеренного роуминга?</strong>\nЧтобы избежать крупных и непредвиденных расходов из-за случайного подключения к иностранным сетям, рекомендуем следующее:",
                    sub: [
                      {
                        text: "Отключите автоматический выбор оператора в настройках телефона (откройте “Настройки” → “Подключения” → “Мобильные сети” → “Операторы сети” и отключит опцию “Автоматический выбор”).",
                      },
                      {
                        text: "Обращайте внимание на SMS-уведомления о подключении к роумингу – они приходят при регистрации в другой стране или сети круизных лайнеров.",
                      },
                      {
                        text: "Установите лимит на использование данных в роуминге в соответствии с включёнными в абонемент объемами.",
                      },
                      {
                        text: "Проверяйте состояние счёта регулярно, но имейте в виду, что информация о потреблении в роуминге может обновляться с задержкой, поскольку услуги тарифицируются иностранным оператором, который передает данные вашему национальному оператору.",
                      },
                    ],
                  },
                ],
              },
            },
            {
              q: "Информация об экстренных службах, системах публичного оповещения и Premium-номерах в каждой стране ЕС",
              a: {
                bullets: [
                  {
                    text: "В соответствии с требованиями регламента ЕС, ниже вы найдете информацию, относящуюся к использованию услуг роуминга (экстренные номера, системы публичного оповещения и услуги с добавленной стоимостью) при въезде в другое государство-член ЕС",
                  },
                  {
                    text: {
                      text: "Экстренные номера в странах ЕС",
                      link: Pdf2,
                    },
                  },
                  {
                    text: {
                      text: "Системы публичного оповещения в странах ЕС",
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
