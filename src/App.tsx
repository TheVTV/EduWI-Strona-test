import { useEffect, useState, type MouseEvent } from "react";
import logo from "./assets/eduwi-logo.png";
import "./App.css";

const groups = [
  [
    "01",
    "Świeżynki",
    "Od zera",
    "Podstawy programowania w Pythonie i algorytmiki. Dla osób, które dopiero zaczynają albo mają do matury jeszcze rok.",
  ],
  [
    "02",
    "Początkujący",
    "Podstawy",
    "Dla tych, którzy już coś potrafią i chcą zrobić kolejny krok. Grupy w C++ i Pythonie.",
  ],
  [
    "03",
    "Średniozaawansowani",
    "Rozwój",
    "Solidne przygotowanie maturalne dla osób, które znają podstawy i chcą uporządkować oraz poszerzyć wiedzę.",
  ],
  [
    "04",
    "Zaawansowani",
    "Diamentowy Indeks",
    "Zaawansowana algorytmika i programowanie - przede wszystkim dla uczestników konkursu o Diamentowy Indeks AGH.",
  ],
];

const features = [
  [
    "01",
    "Wykłady",
    "Hybrydowo na Wydziale Informatyki AGH i online. Wiedza podana jasno, z miejscem na pytania.",
  ],
  [
    "02",
    "Ćwiczenia",
    "Cotygodniowa praktyka w małych grupach, zdalnie lub stacjonarnie - zależnie od wybranej grupy.",
  ],
  [
    "03",
    "Materiały",
    "Autorskie zadania, prezentacje i materiały dostępne dla wszystkich uczestników kursu.",
  ],
  [
    "04",
    "Próbna matura",
    "Pełna symulacja egzaminu, która pozwala sprawdzić wiedzę i oswoić się z formułą matury.",
  ],
];

const itFeatures = [
  [
    "01",
    "Jakieś pierwsze coś",
    "Placeholder. Placeholder. Placeholder. Placeholder. Placeholder. Placeholder. Placeholder. ",
  ],
  [
    "02",
    "Jakieś drugie coś",
    "Placeholder. Placeholder. Placeholder. Placeholder. Placeholder. Placeholder. Placeholder. .",
  ],
  [
    "03",
    "Jakieś trzecie coś",
    "Placeholder. Placeholder. Placeholder. Placeholder. Placeholder. Placeholder. Placeholder. ",
  ],
  [
    "04",
    "Jakieś czwarte coś",
    "Placeholder. Placeholder. Placeholder. Placeholder. Placeholder. Placeholder. Placeholder. ",
  ],
];

const mathFeatures = [
  [
    "01",
    "Jakieś pierwsze coś",
    "Placeholder. Placeholder. Placeholder. Placeholder. Placeholder. Placeholder. Placeholder. ",
  ],
  [
    "02",
    "Jakieś drugie coś",
    "Placeholder. Placeholder. Placeholder. Placeholder. Placeholder. Placeholder. Placeholder. .",
  ],
  [
    "03",
    "Jakieś trzecie coś",
    "Placeholder. Placeholder. Placeholder. Placeholder. Placeholder. Placeholder. Placeholder. ",
  ],
  [
    "04",
    "Jakieś czwarte coś",
    "Placeholder. Placeholder. Placeholder. Placeholder. Placeholder. Placeholder. Placeholder. ",
  ],
];
const signups = {
  informatyka:
    "https://forms.office.com/Pages/ResponsePage.aspx?id=PwOxgOAhgkq7wPBf3M07yLCzS-ltef5GivBNv6ibx6NUNk9VS1NLMFI4UVhHT1k5MkNXVERLRkwyOC4u",
  matematyka:
    "https://forms.office.com/Pages/ResponsePage.aspx?id=PwOxgOAhgkq7wPBf3M07yLCzS-ltef5GivBNv6ibx6NUQ0sxRU1SQTVTSjRHNzRORDI3QVo5RDZSTy4u",
};
const sheets = [
  {
    year: "2025/2026",
    date: "12.12.2025",
    files: [
      ["Arkusz", "arkusz2526-01.pdf"],
      ["Dane", "dane2526-01.zip"],
      ["Zasady oceniania", "zasadyoceniania2526-01.pdf"],
    ],
  },
  {
    year: "2024/2025",
    date: "25.04.2025",
    files: [
      ["Arkusz", "arkusz2425-01.pdf"],
      ["Dane", "dane2425-01.zip"],
      ["Zasady oceniania", "zasadyoceniania2425-01.pdf"],
    ],
  },
];
const members = [
  {
    name: "Piotr Polański",
    role: "Przewodniczący",
    year: "III rok",
    description: "Tutaj opis.",
    photo: "https://eduwi.edu.pl/assets/piotr-Bz7rdzJL.jpg",
  },
  {
    name: "Bartosz Wójcik",
    role: "Zastępca przewodniczącego",
    year: "IV rok",
    description: "Tutaj opis.",
    photo: "https://eduwi.edu.pl/assets/bartek-Bb_3GmFV.jpg",
  },
  {
    name: "Krzysztof Kopel",
    role: "Zastępca przewodniczącego",
    year: "IV rok",
    description: "Tutaj opis.",
    photo: "",
  },
  {
    name: "Test Testowy",
    role: "Podwładny",
    year: "-I rok",
    description: "Tutaj opis.",
    photo: "",
  },

  {
    name: "Test Testowy",
    role: "Podwładny",
    year: "-I rok",
    description: "Tutaj opis.",
    photo: "",
  },

  {
    name: "Test Testowy",
    role: "Podwładny",
    year: "-I rok",
    description: "Tutaj opis.",
    photo: "",
  },

  {
    name: "Test Testowy",
    role: "Podwładny",
    year: "-I rok",
    description: "Tutaj opis.",
    photo: "",
  },

  {
    name: "Test Testowy",
    role: "Podwładny",
    year: "-I rok",
    description: "Tutaj opis.",
    photo: "",
  },

  {
    name: "Test Testowy",
    role: "Podwładny",
    year: "-I rok",
    description: "Tutaj opis.",
    photo: "",
  },
  {
    name: "Test Testowy",
    role: "Podwładny",
    year: "-I rok",
    description: "Tutaj opis.",
    photo: "",
  },
];
const testimonials = [
  {
    category: "Kurs z informatyki",
    text: "Tu będzie opinia 1.",
    author: "Imię zawodnika",
  },
  {
    category: "Kurs z informatyki",
    text: "Tu będzie opinia 2.",
    author: "Imię zawodnika",
  },
  {
    category: "Kurs z informatyki",
    text: "Tu będzie opinia 3.",
    author: "Imię zawodnika",
  },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("start");
  const [teamPage, setTeamPage] = useState(0);
  const [teamPageSize, setTeamPageSize] = useState(() => {
    if (window.matchMedia("(max-width: 560px)").matches) return 1;
    if (window.matchMedia("(max-width: 900px)").matches) return 2;
    return 3;
  });
  const homeHref = import.meta.env.BASE_URL;
  const sheetsHref = `${homeHref}?page=arkusze`;
  const isSheetsPage =
    new URLSearchParams(window.location.search).get("page") === "arkusze";
  const teamItems = [...members, null];
  const teamPageCount = Math.max(1, Math.ceil(teamItems.length / teamPageSize));
  const visibleTeamItems = teamItems.slice(
    teamPage * teamPageSize,
    (teamPage + 1) * teamPageSize,
  );

  useEffect(() => {
    const updateTeamPageSize = () => {
      if (window.matchMedia("(max-width: 560px)").matches) {
        setTeamPageSize(1);
      } else if (window.matchMedia("(max-width: 900px)").matches) {
        setTeamPageSize(2);
      } else {
        setTeamPageSize(3);
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", updateTeamPageSize);
    return () => window.removeEventListener("resize", updateTeamPageSize);
  }, []);

  useEffect(() => {
    setTeamPage((currentPage) =>
      Math.min(currentPage, Math.max(teamPageCount - 1, 0)),
    );
  }, [teamPageCount]);

  const navigateToScene = (
    id: string,
    event: MouseEvent<HTMLAnchorElement>,
  ) => {
    event.preventDefault();
    setMenuOpen(false);
    const scene = document.getElementById(id);
    if (!scene) return;
    const sceneTop = window.scrollY + scene.getBoundingClientRect().top;
    const sceneEnd = sceneTop + scene.offsetHeight - window.innerHeight;
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    window.history.replaceState(null, "", `#${id}`);
    window.scrollTo({
      top: Math.max(0, sceneEnd),
      behavior: reduceMotion ? "auto" : "smooth",
    });
  };

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const scenes = Array.from(
      document.querySelectorAll<HTMLElement>(".scroll-scene"),
    );
    document.documentElement.classList.add("motion-ready");
    scenes.forEach((scene, sceneIndex) => {
      scene.style.setProperty("--scene-index", `${sceneIndex + 1}`);
      if (scene.classList.contains("hero-scene")) return;
      const steps = Array.from(
        scene.querySelectorAll<HTMLElement>(
          ".eyebrow, h1, .hero-copy, .hero-actions, .hero-visual, .section-label, .split > *, .stats > div, .subject-head > *, .subject-feature, .feature, .extras, .group, .team-carousel, .testimonials-head > *, .testimonial-card, .contact-main > *, .scene-footer > *",
        ),
      );
      steps.forEach((step, index) => {
        step.classList.add("scene-step");
        const start =
          index < 2
            ? 0
            : 0.1 + (index - 2) * (0.68 / Math.max(steps.length - 2, 1));
        step.dataset.sceneStart = start.toFixed(3);
      });
    });

    let frame = 0;
    const updateParallax = () => {
      const viewportHeight = window.innerHeight;
      scenes.forEach((scene) => {
        const rect = scene.getBoundingClientRect();
        const travel = Math.max(rect.height - viewportHeight, 1);
        const progress = Math.min(1, Math.max(0, -rect.top / travel));
        scene.style.setProperty("--scene-progress", progress.toFixed(4));
        scene.querySelectorAll<HTMLElement>(".scene-step").forEach((step) => {
          const start = Number(step.dataset.sceneStart || 0);
          step.classList.toggle("scene-step--visible", progress >= start);
        });
        const shift = (progress - 0.5) * 70;
        scene.style.setProperty(
          "--parallax-slow",
          `${(-shift * 0.16).toFixed(2)}px`,
        );
        scene.style.setProperty(
          "--parallax-fast",
          `${(-shift * 0.48).toFixed(2)}px`,
        );
      });
      const currentScene = scenes.find((scene) => {
        const rect = scene.getBoundingClientRect();
        return (
          rect.top <= viewportHeight * 0.45 &&
          rect.bottom >= viewportHeight * 0.45
        );
      });
      if (currentScene?.id) setActiveSection(currentScene.id);
      frame = 0;
    };
    const requestParallax = () => {
      if (!frame) frame = window.requestAnimationFrame(updateParallax);
    };
    updateParallax();
    window.addEventListener("scroll", requestParallax, { passive: true });
    window.addEventListener("resize", requestParallax);

    return () => {
      window.removeEventListener("scroll", requestParallax);
      window.removeEventListener("resize", requestParallax);
      if (frame) window.cancelAnimationFrame(frame);
      document.documentElement.classList.remove("motion-ready");
    };
  }, [isSheetsPage]);

  if (isSheetsPage)
    return (
      <div className="site-shell sheets-page">
        <header className="header sheets-nav">
          <a
            className="brand"
            href={homeHref}
            aria-label="EduWI - strona główna"
          >
            <span className="brand-mark">
              <img src={logo} alt="" />
            </span>
            <span>EduWI</span>
          </a>
          <a className="header-cta" href={homeHref}>
            Strona główna
          </a>
        </header>
        <main>
          <section className="sheets-hero">
            <h1>
              Nasze
              <br />
              <em>arkusze.</em>
            </h1>
            <p>
              Próbne matury z informatyki przygotowane przez nasz zespół -
              możliwie bliskie oficjalnemu egzaminowi pod względem formatu i
              poziomu trudności.
            </p>
          </section>
          <section className="sheets-list">
            {sheets.map((sheet, index) => (
              <article className="sheet-row" key={sheet.year}>
                <span className="number">0{index + 1}</span>
                <div>
                  <span className="sheet-kicker">Próbna matura</span>
                  <h2>{sheet.year}</h2>
                  <p>{sheet.date}</p>
                </div>
                <div className="sheet-files">
                  {sheet.files.map(([label, file]) => (
                    <a
                      href={`https://eduwi.edu.pl/sheets/${file}`}
                      key={file}
                      download
                    >
                      {label}
                    </a>
                  ))}
                </div>
              </article>
            ))}
          </section>
          <section className="sheets-help">
            <p>Znalazłeś błąd lub masz sugestię?</p>
            <a href="mailto:eduwi@agh.edu.pl">eduwi@agh.edu.pl</a>
          </section>
        </main>
      </div>
    );

  return (
    <div className="site-shell">
      <header className="header home-header">
        <a className="brand" href="#start" aria-label="EduWI - strona główna">
          <span className="brand-mark">
            <img src={logo} alt="" />
          </span>
          <span>EduWI</span>
        </a>
        <nav
          id="main-navigation"
          className={menuOpen ? "nav nav--open" : "nav"}
          aria-label="Główna nawigacja"
        >
          <a
            className={activeSection === "o-nas" ? "active" : ""}
            href="#o-nas"
            onClick={(event) => navigateToScene("o-nas", event)}
          >
            O nas
          </a>
          <a
            className={activeSection === "informatyka" ? "active" : ""}
            href="#informatyka"
            onClick={(event) => navigateToScene("informatyka", event)}
          >
            Informatyka
          </a>
          <a
            className={activeSection === "matematyka" ? "active" : ""}
            href="#matematyka"
            onClick={(event) => navigateToScene("matematyka", event)}
          >
            Matematyka
          </a>
          <a
            className={activeSection === "zajecia" ? "active" : ""}
            href="#zajecia"
            onClick={(event) => navigateToScene("zajecia", event)}
          >
            Zajęcia
          </a>
          <a
            className={activeSection === "grupy" ? "active" : ""}
            href="#grupy"
            onClick={(event) => navigateToScene("grupy", event)}
          >
            Grupy
          </a>
          <a
            className={activeSection === "zespol" ? "active" : ""}
            href="#zespol"
            onClick={(event) => navigateToScene("zespol", event)}
          >
            Zespół
          </a>
          <a
            className={activeSection === "opinie" ? "active" : ""}
            href="#opinie"
            onClick={(event) => navigateToScene("opinie", event)}
          >
            Opinie
          </a>
          <a href={sheetsHref} onClick={() => setMenuOpen(false)}>
            Arkusze
          </a>
          <a
            className={`nav-contact ${
              activeSection === "kontakt" ? "active" : ""
            }`}
            href="#kontakt"
            onClick={(event) => navigateToScene("kontakt", event)}
          >
            Kontakt
          </a>
        </nav>
        <a
          className="header-cta"
          href="#kontakt"
          onClick={(event) => navigateToScene("kontakt", event)}
        >
          Kontakt
        </a>
        <button
          className="menu-button"
          type="button"
          aria-label={menuOpen ? "Zamknij menu" : "Otwórz menu"}
          aria-expanded={menuOpen}
          aria-controls="main-navigation"
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span />
          <span />
        </button>
      </header>
      <main>
        <section className="scroll-scene hero-scene" id="start">
          <div className="scene-sticky hero">
            <div className="hero-inner">
              <h1>Jesteśmy EduWI</h1>
              <p className="hero-copy">
                Przygotujemy cię do matury rozszerzonej z informatyki i
                matematyki.
              </p>
              <div className="hero-actions signup-actions" id="dolacz">
                <a
                  className="button"
                  href={signups.informatyka}
                  target="_blank"
                  rel="noreferrer"
                >
                  Zapisz się - informatyka
                </a>
                <a
                  className="button button--math"
                  href={signups.matematyka}
                  target="_blank"
                  rel="noreferrer"
                >
                  Zapisz się - matematyka
                </a>
                <a className="text-link" href={sheetsHref}>
                  Nasze arkusze
                </a>
              </div>
              <div className="hero-visual" aria-hidden="true">
                <img src={logo} alt="" />
              </div>
            </div>
          </div>
        </section>

        <section className="scroll-scene intro-scene" id="o-nas">
          <div className="scene-sticky intro section">
            <div className="split">
              <h2>Uczymy, bo sami wiemy jak trudno zacząć.</h2>
              <div className="intro-copy">
                <p>
                  EduWI powstało z projektu Bit Matura x Diament. Od 2023 roku
                  pomogliśmy już setkom maturzystów, a dziś działamy jako koło
                  naukowo-dydaktyczne założone przez studentów Wydziału
                  Informatyki AGH.
                </p>
                <p>
                  Motywacja do podjęcia przez nas działania była prosta - w
                  wielu szkołach jedna godzina informatyki tygodniowo nie
                  wystarcza do zdania matury. Dlatego tworzymy miejsce, w którym
                  ambitne osoby mogą rozwijać się niezależnie od miejsca
                  zamieszkania czy możliwości finansowych.
                </p>
              </div>
            </div>
            <div className="stats">
              <div>
                <strong>X00+</strong>
                <span>uczestników poprzednich edycji</span>
              </div>
              <div>
                <strong>0 zł</strong>
                <span>koszt udziału w kursie</span>
              </div>
              <div>
                <strong>XX%</strong>
                <span>
                  średni wynik naszych kursantów na maturze z informatyki
                </span>
              </div>
            </div>
          </div>
        </section>

        <section
          className="scroll-scene subject-scene subject-scene--it"
          id="informatyka"
        >
          <div className="scene-sticky subject section">
            <div className="subject-head">
              <h2>
                Matura
                <br />z informatyki.
              </h2>
              <div>
                <p>Od pierwszych linii kodu po pełny arkusz maturalny.</p>
                <a
                  className="subject-cta"
                  href={signups.informatyka}
                  target="_blank"
                  rel="noreferrer"
                >
                  Zapisy kurs z informatyki
                </a>
              </div>
            </div>
            <div className="subject-features">
              {itFeatures.map(([n, t, d]) => (
                <article className="subject-feature" key={n}>
                  <h3>{t}</h3>
                  <p>{d}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          className="scroll-scene subject-scene subject-scene--math"
          id="matematyka"
        >
          <div className="scene-sticky subject section">
            <div className="subject-head">
              <h2>Matura z matematyki.</h2>
              <div>
                <p>Nowy kierunek EduWI.</p>
                <a
                  className="subject-cta"
                  href={signups.matematyka}
                  target="_blank"
                  rel="noreferrer"
                >
                  Zapisy kurs z matematyki
                </a>
              </div>
            </div>
            <div className="subject-features">
              {mathFeatures.map(([n, t, d]) => (
                <article className="subject-feature" key={n}>
                  <h3>{t}</h3>
                  <p>{d}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="scroll-scene learning-scene" id="zajecia">
          <div className="scene-sticky learning section">
            <div className="split">
              <h2>
                Od teorii
                <br />
                do praktyki.
              </h2>
              <p className="lead">
                Kompletny proces przygotowania - od A do Z!
              </p>
            </div>
            <div className="feature-grid">
              {features.map(([n, t, d]) => (
                <article className="feature" key={n}>
                  <div>
                    <h3>{t}</h3>
                    <p>{d}</p>
                  </div>
                </article>
              ))}
            </div>
            <div className="extras">
              <b>+</b>
              <p>
                Dodatkowe kursy z <strong>Excela, Accessa i matematyki</strong>{" "}
                pod maturę oraz Diamentowy Indeks AGH.
              </p>
            </div>
          </div>
        </section>

        <section className="scroll-scene groups-scene" id="grupy">
          <div className="scene-sticky groups section">
            <div className="split">
              <h2>
                Znajdź swój
                <br />
                <em>poziom.</em>
              </h2>
              <p className="lead">
                Nieważne, czy dopiero raczkujesz, czy celujesz w konkurs - mamy
                grupę dla Ciebie.
              </p>
            </div>
            <div className="group-list">
              {groups.map(([n, t, , d]) => (
                <article className="group" key={n}>
                  <h3>{t}</h3>
                  <p>{d}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="scroll-scene team-scene" id="zespol">
          <div className="scene-sticky team section">
            <div className="split">
              <h2>
                Koło tworzą
                <br />
                <em>ludzie.</em>
              </h2>
              <p className="lead">
                Studenci, którzy dzielą się wiedzą i swoim czasem.
              </p>
            </div>
            <div
              className="team-carousel"
              role="region"
              aria-roledescription="karuzela"
              aria-label="Członkowie koła"
              tabIndex={0}
              onKeyDown={(event) => {
                if (event.key === "ArrowLeft") {
                  setTeamPage((page) => Math.max(0, page - 1));
                }
                if (event.key === "ArrowRight") {
                  setTeamPage((page) => Math.min(teamPageCount - 1, page + 1));
                }
              }}
            >
              <div className="team-carousel-controls">
                <span aria-live="polite">
                  {String(teamPage + 1).padStart(2, "0")} /{" "}
                  {String(teamPageCount).padStart(2, "0")}
                </span>
                <div>
                  <button
                    type="button"
                    aria-label="Poprzednie osoby"
                    disabled={teamPage === 0}
                    onClick={() => setTeamPage((page) => Math.max(0, page - 1))}
                  >
                    ←
                  </button>
                  <button
                    type="button"
                    aria-label="Następne osoby"
                    disabled={teamPage === teamPageCount - 1}
                    onClick={() =>
                      setTeamPage((page) =>
                        Math.min(teamPageCount - 1, page + 1),
                      )
                    }
                  >
                    →
                  </button>
                </div>
              </div>
              <div className="members-grid" key={`${teamPage}-${teamPageSize}`}>
                {visibleTeamItems.map((member, index) =>
                  member ? (
                    <article
                      className="member"
                      key={`${member.name}-${teamPage}-${index}`}
                    >
                      <div
                        className={
                          member.photo
                            ? "member-photo"
                            : "member-photo member-photo--empty"
                        }
                      >
                        {member.photo && (
                          <img src={member.photo} alt={member.name} />
                        )}
                      </div>
                      <div className="member-meta">
                        <span>{member.year}</span>
                        <span>{member.role}</span>
                      </div>
                      <h3>{member.name}</h3>
                      <p>{member.description}</p>
                    </article>
                  ) : (
                    <article
                      className="member member--join"
                      key={`join-${index}`}
                    >
                      <div className="join-symbol">+</div>
                      <span>Ty?</span>
                      <h3>Dołącz do zespołu</h3>
                      <p>
                        Studiujesz i chcesz dzielić się wiedzą? Napisz do nas -
                        zawsze chętnie poznajemy nowych ludzi.
                      </p>
                      <a href="mailto:eduwi@agh.edu.pl?subject=Chcę dołączyć do zespołu EduWI">
                        Napisz do nas
                      </a>
                    </article>
                  ),
                )}
              </div>
            </div>
          </div>
        </section>

        <section className="scroll-scene testimonials-scene" id="opinie">
          <div className="scene-sticky testimonials section">
            <div className="testimonials-head">
              <h2>
                Głos naszych
                <br />
                <em>kursantów.</em>
              </h2>
              <p>
                Najlepiej opowiadają o EduWI osoby, które przygotowywały się
                razem z nami.
              </p>
            </div>
            <div className="testimonials-grid">
              {testimonials.map((testimonial, index) => (
                <article
                  className="testimonial-card"
                  key={`${testimonial.category}-${index}`}
                >
                  <div className="testimonial-top">
                    <span>{testimonial.category}</span>
                    <b aria-hidden="true">“</b>
                  </div>
                  <p>{testimonial.text}</p>
                  <div className="testimonial-author">{testimonial.author}</div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="scroll-scene contact-scene" id="kontakt">
          <div className="scene-sticky contact section">
            <div className="contact-main">
              <div>
                <h2>
                  Zróbmy razem
                  <br />
                  następny krok.
                </h2>
                <p>
                  Chcesz dołączyć do kursu, współtworzyć EduWI albo po prostu o
                  coś zapytać? Napisz do nas.
                </p>
                <div
                  className="contact-socials"
                  aria-label="Media społecznościowe"
                >
                  <a
                    href="https://www.instagram.com/kneduwi/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span className="social-name">
                      <img
                        src="https://cdn.simpleicons.org/instagram/151515"
                        alt=""
                        aria-hidden="true"
                      />
                      Instagram
                    </span>
                  </a>
                  <a
                    href="https://www.facebook.com/people/Koło-Naukowe-Eduwi-AGH/61590998039737/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span className="social-name">
                      <img
                        src="https://cdn.simpleicons.org/facebook/151515"
                        alt=""
                        aria-hidden="true"
                      />
                      Facebook
                    </span>
                  </a>
                  <span className="social-disabled" aria-disabled="true">
                    <span className="social-name">
                      <img
                        src="https://cdn.simpleicons.org/discord/929292"
                        alt=""
                        aria-hidden="true"
                      />
                      Discord
                    </span>
                    <small>Wkrótce</small>
                  </span>
                </div>
              </div>
              <a className="contact-link" href="mailto:eduwi@agh.edu.pl">
                <span>eduwi@agh.edu.pl</span>
              </a>
            </div>
            <footer className="scene-footer">
              <a className="brand" href="#start">
                <span className="brand-mark">
                  <img src={logo} alt="" />
                </span>
                <span>EduWI</span>
              </a>
              <p>
                Koło Naukowo-Dydaktyczne
                <br />
                Wydziału Informatyki AGH
              </p>
              <div className="footer-links">
                <a href={sheetsHref}>Nasze arkusze</a>
                <a
                  href="https://www.agh.edu.pl/"
                  target="_blank"
                  rel="noreferrer"
                >
                  AGH
                </a>
                <a
                  href="https://www.informatyka.agh.edu.pl/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Wydział Informatyki
                </a>
              </div>
              <span>2026 EduWI</span>
            </footer>
          </div>
        </section>
      </main>
    </div>
  );
}
export default App;
