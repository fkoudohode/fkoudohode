/* ============================================================
   FLORENT KOUDOHODE, Personal Academic Site
   scripts.js
   ------------------------------------------------------------
   ORGANISATION DU FICHIER
     §1  DATA, Publications, news, teaching materials
     §2  TRANSLATIONS, EN / FR  (extensible : copier un bloc pour ajouter une langue)
     §3  THEME (dark / light)
     §4  LANGUAGE (i18n)
     §5  NAVIGATION (mobile burger, active link)
     §6  PUBLICATIONS (render, filter, abstract toggle, BibTeX)
     §7  NEWS (render)
     §8  CV / BIO (copy buttons)
     §9  TEACHING MATERIALS (render)
     §10 KaTeX (math rendering)
     §11 ANIMATIONS (reveal-on-scroll, intersection observer)
     §12 INIT
   ============================================================ */


/* ============================================================
   §1, DATA
   ============================================================ */

// ============================================================
// 📚 PUBLICATIONS
// → Pour ajouter une publication :
//     1. Copier un bloc { ... } ci-dessous
//     2. Remplir les champs
//     3. Mettre `null` pour les champs non disponibles
//        → le bouton correspondant ne s'affichera pas
// → Champs :
//     type     : "journal" | "conference" | "preprint" | "thesis"
//     status   : "published" | "under-review" | "preprint" | "thesis"
//     toConfirm: true affiche un badge "To be verified"
// ============================================================
const publications = [

  // --- JOURNAL ARTICLES ---

  {
    id: "J5",
    type: "journal",
    status: "under-review",
    year: 2026,
    title: "Output quantization compensation in event-triggered backstepping control of 2×2 hyperbolic systems",
    authors: "F. Koudohode, N. Espitia, J.-P. Humaloja, N. Bekiaris-Liberis",
    venue: "Automatica",
    venueDetail: "Submitted",
    doi: null,
    arxiv: null,
    hal: null,
    pdf: null,
    code: "https://github.com/Flo3221/QuantizedOutput-ETC-2x2HyperbolicPDE",
    codeLabel: "MATLAB",
    abstract: null,
    toConfirm: false,
  },
  {
    id: "J4",
    type: "journal",
    status: "published",
    year: 2025,
    title: "Semiglobal switched predictor-feedback stabilization of nonlinear systems with input delay and state/input quantization",
    authors: "F. Koudohode, N. Bekiaris-Liberis",
    venue: "IEEE Transactions on Automatic Control",
    venueDetail: "Accepted",
    doi: null,
    arxiv: null,
    hal: "hal-05023491",
    pdf: null,
    code: "https://github.com/Flo3221/QuantizerNTDS-Semiglobal",
    codeLabel: "MATLAB",
    abstract: null,
    toConfirm: false,
  },
  {
    id: "J3",
    type: "journal",
    status: "published",
    year: 2025,
    title: "Switched predictor feedbacks for reaction-diffusion PDEs and globally Lipschitz nonlinear ODE systems subject to almost state and input quantization",
    authors: "F. Koudohode, N. Bekiaris-Liberis",
    venue: "IMA Journal of Mathematical Control and Information",
    venueDetail: "vol. 42, no. 4",
    doi: "10.1093/imamci/dnaf044",
    arxiv: null,
    hal: null,
    pdf: null,
    code: "https://github.com/Flo3221/quantizerNTDS-RD",
    codeLabel: "MATLAB",
    abstract: null,
    toConfirm: false,
  },
  {
    id: "J2b",
    type: "journal",
    status: "published",
    year: 2024,
    title: "Simultaneous compensation of input delay and state/input quantization for linear systems via switched predictor feedback",
    authors: "F. Koudohode, N. Bekiaris-Liberis",
    venue: "Systems & Control Letters",
    venueDetail: "vol. 192, article 105912",
    doi: "10.1016/j.sysconle.2024.105912",
    arxiv: "2404.11194",
    hal: null,
    pdf: null,
    code: "https://github.com/Flo3221/quantizerp",
    codeLabel: "MATLAB",
    abstract: null,
    toConfirm: false,
  },
  {
    id: "J2",
    type: "journal",
    status: "published",
    year: 2024,
    title: "Event-triggered boundary control of an unstable reaction diffusion PDE with input delay",
    authors: "F. Koudohode, N. Espitia, M. Krstic",
    venue: "Systems & Control Letters",
    venueDetail: "vol. 186, article 105775",
    doi: "10.1016/j.sysconle.2024.105775",
    arxiv: null,
    hal: null,
    pdf: null,
    code: null,
    abstract: null,
    toConfirm: false,
  },
  {
    id: "J1",
    type: "journal",
    status: "published",
    year: 2022,
    title: "Event-based control of a damped linear wave equation",
    authors: "F. Koudohode, L. Baudouin, S. Tarbouriech",
    venue: "Automatica",
    venueDetail: "vol. 146, article 110627",
    doi: "10.1016/j.automatica.2022.110627",
    arxiv: null,
    hal: null,
    pdf: null,
    code: null,
    abstract: null,
    toConfirm: false,
  },

  // --- CONFERENCE PROCEEDINGS ---

  {
    id: "C6",
    type: "conference",
    status: "under-review",
    year: 2026,
    title: "On compensation of the effect of output quantization in event-triggered backstepping control of 2×2 hyperbolic systems",
    authors: "F. Koudohode, J.-P. Humaloja, N. Espitia, N. Bekiaris-Liberis",
    venue: "IEEE Conference on Decision and Control",
    venueDetail: "Submitted",
    doi: null,
    arxiv: null,
    hal: null,
    pdf: null,
    code: null,
    abstract: null,
    toConfirm: false,
  },
  {
    id: "C5",
    type: "conference",
    status: "published",
    year: 2025,
    title: "Predictor-feedback stabilization of globally Lipschitz nonlinear systems with state/input quantization",
    authors: "F. Koudohode, N. Bekiaris-Liberis",
    venue: "Joint IFAC Conference SSSC-TDS-LPVS, Gif-sur-Yvette, France",
    venueDetail: "vol. 59, pp. 34-39",
    doi: "10.1016/j.ifacol.2025.10.007",
    arxiv: null,
    hal: null,
    pdf: null,
    code: null,
    abstract: null,
    toConfirm: false,
  },
  {
    id: "C4",
    type: "conference",
    status: "published",
    year: 2025,
    title: "Stabilization of an unstable reaction-diffusion PDE with input delay despite state and input quantization",
    authors: "F. Koudohode, N. Bekiaris-Liberis",
    venue: "American Control Conference, Denver, CO, USA",
    venueDetail: "pp. 1119-1124",
    doi: null,
    arxiv: null,
    hal: null,
    pdf: null,
    code: null,
    abstract: null,
    url: "https://ieeexplore.ieee.org/document/11108079",
    toConfirm: false,
  },
  {
    id: "C3",
    type: "conference",
    status: "published",
    year: 2024,
    title: "Simultaneous compensation of input delay and state quantization for linear systems via switched predictor feedback",
    authors: "F. Koudohode, N. Bekiaris-Liberis",
    venue: "63rd IEEE Conference on Decision and Control (CDC), Milan, Italy",
    venueDetail: "",
    doi: "10.1109/CDC56724.2024.10886389",
    url: "https://ieeexplore.ieee.org/document/10886389",
    arxiv: null,
    hal: null,
    pdf: null,
    code: null,
    abstract: null,
    toConfirm: false,
  },
  {
    id: "C2",
    type: "conference",
    status: "published",
    year: 2022,
    title: "Dynamic event-triggered stabilization for the Schrödinger equation",
    authors: "F. Koudohode, L. Baudouin, S. Tarbouriech",
    venue: "Joint IFAC Conference SSSC-TDS-LPVS, Montreal, Canada",
    venueDetail: "vol. 55",
    doi: "10.1016/j.ifacol.2022.11.318",
    arxiv: null,
    hal: null,
    pdf: null,
    code: null,
    abstract: null,
    toConfirm: false,
  },
  {
    id: "C1",
    type: "conference",
    status: "published",
    year: 2022,
    title: "Event-based control of a damped linear Schrödinger equation",
    authors: "F. Koudohode, L. Baudouin, S. Tarbouriech",
    venue: "European Control Conference (ECC), London, UK",
    venueDetail: "",
    doi: "10.23919/ECC55457.2022.9837965",
    url: "https://ieeexplore.ieee.org/document/9837965",
    arxiv: null,
    hal: null,
    pdf: null,
    code: null,
    abstract: null,
    toConfirm: false,
  },

  // --- PHD THESIS ---

  {
    id: "T1",
    type: "thesis",
    status: "thesis",
    year: 2023,
    title: "Event-based control for some PDEs",
    authors: "F. Koudohode",
    venue: "PhD Thesis, Université Paul Sabatier, Toulouse III, LAAS-CNRS",
    venueDetail: "Supervisors: L. Baudouin & S. Tarbouriech · Defended October 26, 2023",
    doi: null,
    arxiv: null,
    hal: "tel-04279601v3",
    pdf: null,
    code: null,
    abstract: null,
    toConfirm: false,
  },
];


// ============================================================
// 📰 NEWS
// → Ordre : du plus récent au plus ancien
// → Champ `link` : null si pas de lien
// ============================================================
const news = [
  {
    date: "October 2025",
    text: "Paper accepted in IEEE Transactions on Automatic Control: \"Semiglobal switched predictor-feedback stabilization of nonlinear systems with input delay and state/input quantization\" (with N. Bekiaris-Liberis).",
    link: null,
  },
  {
    date: "October 2024",
    text: "Invited talk at the TUC Departmental Seminar: \"Simultaneous Compensation of Input Delay and State Quantization for Linear Systems via Switched Predictor Feedback\", Chania.",
    link: null,
  },
  {
    date: "June 2025",
    text: "Paper presented at the IFAC Joint Conference SSSC-TDS-LPVS in Gif-sur-Yvette: \"Predictor-feedback stabilization of globally Lipschitz nonlinear systems with state/input quantization\".",
    link: "https://doi.org/10.1016/j.ifacol.2025.10.007",
  },
  {
    date: "July 2025",
    text: "Paper published in IMA Journal of Mathematical Control and Information: \"Switched predictor feedbacks for PDE and ODE systems subject to state and input quantization\".",
    link: "https://doi.org/10.1093/imamci/dnaf044",
  },
  {
    date: "December 2023",
    text: "Started a postdoctoral fellowship at the Technical University of Crete, joining the ERC Consolidator Grant project C-NORA (#101088147) led by N. Bekiaris-Liberis.",
    link: null,
  },
  {
    date: "October 2023",
    text: "Successfully defended PhD thesis \"Event-based control for some PDEs\" at Université Paul Sabatier / LAAS-CNRS, supervised by L. Baudouin and S. Tarbouriech.",
    link: "https://laas.hal.science/tel-04279601v3",
  },
];


// ============================================================
// 📁 TEACHING MATERIALS, Teaching & Supervision page
// → type : "notes" | "exercises" | "slides"
// ============================================================
const teachingCourses = [
  {
    year: "2025–2026",
    title: "Control of Distributed Parameter Systems",
    inst: "School of ECE, Technical University of Crete (Greece)",
    role: "Teaching Assistant, 10 hours",
  },
  {
    year: "2024–2025",
    title: "Control of Distributed Parameter Systems",
    inst: "School of ECE, Technical University of Crete (Greece)",
    role: "Teaching Assistant, 10 hours",
  },
  {
    year: "2023–2024",
    title: "Nonlinear Control",
    inst: "School of ECE, Technical University of Crete (Greece)",
    role: "Teaching Assistant, 10 hours",
  },
  {
    year: "2022–2023",
    title: "Fourier Analysis · ML & Optimization (Julia/Python) · Statistics (R)",
    inst: "Toulouse INP-ENSEEIHT (France)",
    role: "Tutorials & Lab Sessions, 24 hours · 76+ students",
  },
  {
    year: "2022–2023",
    title: "Math Tutor, Prépa des INP",
    inst: "INP Toulouse (France)",
    role: "Tutoring, 40 hours · 3 students",
  },
  {
    year: "2021–2022",
    title: "Differential & integral calculus, sequences, probability, ODEs",
    inst: "Licence 1 SVT/SDT, Université Paul Sabatier (France)",
    role: "Tutorials, 64 hours · 70+ students",
  },
  {
    year: "2021–2022",
    title: "Parametric curves",
    inst: "BUT Mechanical & Production Engineering, IUT Toulouse (France)",
    role: "Tutorials, 12 hours · 30+ students",
  },
  {
    year: "2020–2021",
    title: "Harmonic Analysis · Intro to PDEs and Numerical Schemes",
    inst: "INSA Toulouse, STPI 3rd year, 3IC (France)",
    role: "Tutorials, 12 hours · 25+ students",
  },
];

const teachingMaterials = [
  // ============================================================
  // → Pour ajouter un document de cours :
  //     1. Déposer le PDF dans assets/teaching/
  //     2. Copier un bloc { ... } ci-dessous, renseigner le chemin
  // ============================================================
  // {
  //   title: "Course notes, Control of Distributed Parameter Systems",
  //   type: "notes",     // "notes" | "exercises" | "slides"
  //   year: 2025,
  //   file: "assets/teaching/notes-cours-controle.pdf",
  // },
];

const supervisions = [
  {
    level: "PhD Student",
    name: "Andreas Katsanikakis",
    inst: "School of Electrical & Computer Engineering, Technical University of Crete, Greece",
    co: "Co-supervised with N. Bekiaris-Liberis",
  },
  {
    level: "Master Student",
    name: "Dimitrios Angelopoulos",
    inst: "School of Electrical & Computer Engineering, Technical University of Crete, Greece",
    co: "Co-supervised with N. Bekiaris-Liberis",
  },
];


/* ============================================================
   §2, TRANSLATIONS (i18n)
   → Pour ajouter une langue :
       1. Copier le bloc "en" ou "fr" entier
       2. Le renommer avec le code langue (ex: "es", "de")
       3. Traduire toutes les valeurs
       4. Ajouter un bouton dans la nav avec data-lang="es"
   ============================================================ */
const translations = {
  en: {
    // ── Navigation ───────────────────────────────
    nav_home:         "Home",
    nav_about:        "About me",
    nav_work:         "Research",
    nav_research:     "Research",
    nav_publications: "Publications",
    nav_teaching:     "Teaching",
    nav_contact:      "Contact",

    // ── Hero ─────────────────────────────────────
    hero_eyebrow:           "Postdoctoral Researcher · Control of PDEs",
    hero_title_1:           "Taming",
    hero_title_2_html:      "<em>infinite-dimensional</em> systems",
    hero_title_3:           ", one PDE at a time.",
    hero_bio:               "I design control laws that stabilise systems governed by partial differential equations, when the signals arrive late, when the measurements are coarse, and when communication must be parsimonious. From Benin to Toulouse to Crete, my work lives at the meeting point of nonlinear analysis, distributed-parameter systems, and the discipline of event-triggered control.",
    hero_badge_tuc:         "Technical University of Crete",
    hero_badge_field:       "Control · PDE · Quantization",
    cta_publications:       "View Publications",
    cta_about:              "About me",
    hero_card_position:     "Position",
    hero_card_position_value:"Postdoctoral Researcher",
    hero_card_institution:  "Institution",
    hero_card_grant:        "Grant",
    hero_card_location:     "Location",
    hero_card_advisor:      "PI", /* gardé pour compat ; plus utilisé */
    hero_formula_label:     "Event-triggering condition", /* idem */
    // Mots-clés affichés dans la carte du hero
    hero_card_keywords_label: "Keywords",
    hero_card_kw1:          "Control of PDEs",
    hero_card_kw2:          "Event-triggered control",
    hero_card_kw3:          "Boundary control",
    hero_card_kw4:          "Predictor feedback",
    hero_card_kw5:          "Backstepping",
    hero_card_kw6:          "Time-delay systems",

    // ── Page work.html (chooser Research / Publications) ──
    work_research_title:    "Research",
    work_research_lead:     "My research statement, the three themes I work on, and the ERC C-NORA project.",
    work_research_t1:       "Event-triggered control",
    work_research_t2:       "Boundary control of PDEs",
    work_research_t3:       "Predictor feedback",
    work_pub_title:         "Publications",
    work_pub_lead:          "All journal articles, conference proceedings, preprints and the doctoral thesis, filterable by type.",
    work_explore_research:  "Explore research",
    work_browse_pubs:       "Browse publications",
    work_or:                "or",

    // ── Section: Research themes ─────────────────
    themes_eyebrow:   "Research focus",
    themes_title:     "Three threads, one question.",
    themes_lead:      "How do we control a system that lives in an infinite-dimensional state space, with imperfect sensing, finite bandwidth, and unavoidable delays?",
    theme1_title:     "Event-triggered Control",
    theme1_desc:      "Control laws that act only when the system actually needs them, saving bandwidth, energy and computation without sacrificing stability.",
    theme2_title:     "PDE Boundary Control",
    theme2_desc:      "Stabilising wave, reaction–diffusion, Schrödinger and hyperbolic systems by acting only at the boundary, through backstepping, Lyapunov analysis and observer design.",
    theme3_title:     "Delay & Quantization",
    theme3_desc:      "Predictor feedback and switched-control architectures that compensate input delay and the unavoidable coarseness of digital sensing and actuation.",
    theme_explore:    "Explore",

    // ── Section: News ────────────────────────────
    news_eyebrow:     "Recent activity",
    news_title:       "Latest news",

    // ── CTA Strip ────────────────────────────────
    cta_strip_eyebrow: "For collaborators & students",
    cta_strip_title:   "Looking for a collaboration, a co-supervised thesis, or a research visit?",
    cta_get_in_touch:  "Get in touch",
    cta_read_research: "Read research",

    // ── About page ───────────────────────────────
    about_banner_eyebrow: "About me",
    about_banner_title:   "“It always seems impossible until it's done.”",
    about_banner_lead:    "Nelson Mandela",

    about_who_title:      "Who I am",
    about_who_p1:         "My name is Florent Koudohode. I grew up in Benin, where a single course in differential equations at the <em>Institut de Mathématiques et de Sciences Physiques</em> (IMSP) awakened in me the conviction that there was a hidden language behind every physical phenomenon I had ever noticed, and that learning it was what I wanted to do with my life.",
    about_who_p2:         "That conviction eventually carried me to Toulouse, where I completed a Master and a PhD at LAAS-CNRS under the guidance of <a href=\"https://homepages.laas.fr/lbaudoui/\" target=\"_blank\" rel=\"noopener\">Lucie Baudouin</a> and <a href=\"https://homepages.laas.fr/tarbour/\" target=\"_blank\" rel=\"noopener\">Sophie Tarbouriech</a>, working on event-based control of partial differential equations. Today I am a postdoctoral researcher at the Technical University of Crete, supported by the European Research Council on the <a href=\"https://c-nora.tuc.gr\" target=\"_blank\" rel=\"noopener\">C-NORA project</a>, where I think about how to stabilize infinite-dimensional systems when the world insists on being delayed, quantized and noisy.",
    about_who_p3:         "What I love most about this work is that it sits exactly at the seam between pure mathematics and the messy reality of engineering, Lyapunov functionals on one side, sensors and actuators on the other, and a real chance to make both speak to each other.",
    about_who_p4:         "Beyond research, I try to give back to the communities that shaped me. I serve as Vice-President of <a href=\"https://www.songo-education.org/notre-équipe\" target=\"_blank\" rel=\"noopener\">Songo Éducation</a>, a non-profit fostering educational partnerships between France and the Central African Republic, and as a board member of <a href=\"https://asafrique.github.io/asafrique/\" target=\"_blank\" rel=\"noopener\">ASA (Association Sciences pour l'Afrique)</a>, an association working to reconcile people with science and inspire the next generation toward STEM across the African continent.",
    about_who_p5:         "Outside the lab, I am rarely far from a book; I read widely in literature and philosophy, which has a way of asking the questions that mathematics can never quite answer. You'll also find me on the pitch with the Cretan Gunners, playing amateur rugby with more enthusiasm than skill.",

    about_bio_title:    "Short biography",
    about_bio_meta:     "For invitations, talks, journal headers",
    about_bio_text:     "Florent Koudohode received his Ph.D. in Automatic Control from LAAS-CNRS, Université Paul Sabatier, Toulouse III, France, in 2023. He holds two M.Sc. degrees in Fundamental Mathematics and Applications, from the Institut de Mathématiques et de Sciences Physiques (IMSP), Dangbo, Benin (2018), and from Université Paul Sabatier, Toulouse III, France (2020). He is currently a Postdoctoral Researcher in the Department of Electrical and Computer Engineering at the Technical University of Crete, Greece, supported by the European Research Council under the 2022 Consolidator Grant C-NORA. His research focuses on the analysis and control of infinite-dimensional systems governed by partial differential equations, with emphasis on event-triggered control, predictor feedback, delayed systems, and compensation of quantization. His work has appeared in leading journals of the systems and control community, including Automatica, Systems & Control Letters, and IEEE Transactions on Automatic Control. He regularly serves as a reviewer for these journals, as well as for Nonlinear Analysis: Hybrid Systems, and for major international conferences, including the IEEE Conference on Decision and Control (CDC), the American Control Conference (ACC), and the European Control Conference (ECC).",
    about_bio_copy_en:  "Copy (EN)",
    about_bio_copy_fr:  "Copy (FR)",
    about_bio_copied:   "Copied!",

    about_cv_title:     "Curriculum Vitæ",
    about_cv_lead:      "An overview of my academic path, distinctions and current activities.",

    cv_section_positions: "Academic Positions",
    cv_section_education: "Education",
    cv_section_funding:   "Funding & Distinctions",
    cv_section_interests: "Research Interests",
    cv_section_skills:    "Skills & Tools",
    cv_section_languages: "Languages",
    cv_download_en:       "Download CV (EN)",
    cv_download_fr:       "Download CV (FR)",
    cv_download_coming:   "Coming soon",

    // ── Research page ────────────────────────────
    research_banner_eyebrow: "Research",
    research_banner_title:   "Control, at the edge of the possible.",
    research_banner_lead:    "A short statement on what I work on, why it matters, and where it is going.",

    research_statement_p1:   "Most of the systems we care about in engineering, flexible structures, chemical reactors, traffic networks, networks of distributed sensors, do not live in a finite-dimensional state space. Their natural language is that of partial differential equations: state and dynamics are infinite-dimensional, propagation is bounded by physics, and control acts most often through the boundary. The classical control toolbox, built for ordinary differential equations and continuous communication, does not directly transfer.",
    research_statement_p2:   "My research lives at this intersection. I design control laws for PDEs that remain robust under the constraints that the real world imposes, namely, that measurements arrive only at discrete instants, that they are quantized to finitely many levels, that control signals are subject to transmission delay, and that bandwidth must be used parsimoniously. The tools I rely on are Lyapunov analysis, backstepping transformations, predictor feedback, observer design, and a careful treatment of event-triggering rules. The result, when it works, is a control law that does more with less, provably stable, computationally honest, and ready to be deployed.",

    research_theme1_h:       "Event-triggered control",
    research_theme1_p:       "Classical feedback updates the control signal continuously, which is impossible on a digital platform and wasteful on a networked one. Event-triggered control replaces that continuous update with a triggering rule, a condition on the state, the error, or both, that determines, intrinsically, when the next update is needed. The challenge is to design rules that guarantee stability, exclude Zeno behaviour, and remain robust to disturbances. I have worked on event-triggered laws for the wave, Schrödinger and reaction–diffusion equations, as well as for 2×2 hyperbolic systems.",
    research_theme2_h:       "Boundary control of PDEs",
    research_theme2_p:       "When a physical system is described by a PDE, control acts most often at the boundary, a heated wall, a regulated valve, an end actuator. Stabilising such a system requires designing feedback laws that propagate through the spatial domain in finite time. The backstepping methodology, pioneered by Krstic and collaborators, transforms the open-loop PDE into a chosen target system via an invertible Volterra transformation. I use this framework in conjunction with Lyapunov functionals and observer design for measurement-output settings.",
    research_theme3_h:       "Predictor feedback for delay and quantization",
    research_theme3_p:       "Input delay is endemic to networked control: control signals reach the plant only after a transmission lag. Predictor feedback compensates this delay by acting on a future prediction of the state. Quantization, the unavoidable rounding induced by digital sensors and actuators, adds a second layer of imperfection, and the two effects interact. My recent work designs switched predictor-feedback laws that simultaneously compensate both, with semiglobal stability guarantees for nonlinear plants.",
    research_theme_pubs:     "Related papers:",

    research_erc_title:      "ERC Consolidator Grant, C-NORA",
    research_erc_text:       "My current research is supported by the European Research Council under the Consolidator Grant C-NORA (#101088147), led at the Technical University of Crete by Prof. Nikolaos Bekiaris-Liberis. The project addresses micro-macro secure control of infinite-dimensional transport systems.",
    research_erc_link:       "Project website",

    // ── Publications page ────────────────────────
    pub_banner_title:     "Publications",
    pub_banner_lead:      "A complete list of journal articles, conference proceedings, preprints and the doctoral thesis. Filter below by type, or open an abstract directly.",
    pub_filter_all:       "All",
    pub_filter_journal:   "Journals",
    pub_filter_conference:"Conferences",
    pub_filter_preprint:  "Preprints",
    pub_filter_thesis:    "Thesis",
    pub_btn_abstract:     "Abstract",
    pub_btn_pdf:          "PDF",
    pub_btn_code:         "Code",
    pub_btn_bibtex:       "BibTeX",
    pub_btn_doi:          "DOI",
    pub_btn_arxiv:        "arXiv",
    pub_btn_hal:          "HAL",
    pub_btn_url:          "URL",
    pub_copied:           "Copied!",
    pub_to_confirm:       "To be verified",
    pub_status_published: "Published",
    pub_status_review:    "Under review",
    pub_status_preprint:  "Preprint",
    pub_status_thesis:    "Doctoral thesis",
    pub_group_journals:   "Journal articles",
    pub_group_conferences:"Conference proceedings",
    pub_group_preprints:  "Preprints",
    pub_group_thesis:     "Doctoral thesis",

    // ── Teaching page ────────────────────────────
    teaching_banner_eyebrow: "Teaching & Supervision",
    teaching_banner_title:   "Passing it on.",
    teaching_banner_lead:    "Courses taught, students supervised, and the materials I have made available.",
    teach_h_courses:         "Courses",
    teach_h_supervision:     "Supervision",
    teach_h_materials:       "Materials",
    teach_no_materials:      "Course materials will be uploaded here as they become available.",

    // ── Contact page ─────────────────────────────
    contact_banner_eyebrow: "Get in touch",
    contact_banner_title:   "Contact",
    contact_banner_lead:    "For research questions, collaboration proposals, talks or visits, feel free to write directly.",
    contact_h_email:        "Email",
    contact_h_office:       "Office",
    contact_h_phone:        "Phone",
    contact_h_socials:      "Around the web",
    contact_form_title:     "Send a message",
    contact_form_name:      "Name",
    contact_form_email:     "Email",
    contact_form_subject:   "Subject",
    contact_form_message:   "Message",
    contact_send:           "Send message",
    contact_success:        "Thank you. Your message is ready in your default mail client.",

    // ── Footer ───────────────────────────────────
    footer_tagline:   "Postdoctoral researcher in control of partial differential equations.",
    footer_navigate:  "Navigate",
    footer_elsewhere: "Elsewhere",
    footer_contact:   "Contact",
    footer_rights:    "All rights reserved.",
    footer_updated:   "Last updated",
  },

  fr: {
    // ── Navigation ───────────────────────────────
    nav_home:         "Accueil",
    nav_about:        "À propos de moi",
    nav_work:         "Recherche",
    nav_research:     "Recherche",
    nav_publications: "Publications",
    nav_teaching:     "Enseignement",
    nav_contact:      "Contact",

    // ── Hero ─────────────────────────────────────
    hero_eyebrow:           "Chercheur postdoctoral · Contrôle des EDP",
    hero_title_1:           "Dompter",
    hero_title_2_html:      "les systèmes <em>infinis-dimensionnels</em>",
    hero_title_3:           ", une EDP à la fois.",
    hero_bio:               "Je conçois des lois de commande qui stabilisent des systèmes gouvernés par des équations aux dérivées partielles, lorsque les signaux arrivent en retard, que les mesures sont quantifiées, et que la communication doit rester parcimonieuse. Du Bénin à Toulouse à la Crète, mon travail vit à l'intersection de l'analyse non linéaire, des systèmes à paramètres distribués, et de la commande à événements.",
    hero_badge_tuc:         "Université Technique de Crète",
    hero_badge_field:       "Contrôle · EDP · Quantification",
    cta_publications:       "Voir les publications",
    cta_about:              "À propos",
    hero_card_position:     "Poste",
    hero_card_position_value:"Chercheur postdoctoral",
    hero_card_institution:  "Institution",
    hero_card_grant:        "Bourse",
    hero_card_location:     "Lieu",
    hero_card_advisor:      "PI",
    hero_formula_label:     "Condition de déclenchement",
    // Mots-clés (carte hero)
    hero_card_keywords_label: "Mots-clés",
    hero_card_kw1:          "Contrôle des EDP",
    hero_card_kw2:          "Commande à événements",
    hero_card_kw3:          "Commande aux bords",
    hero_card_kw4:          "Feedback prédicteur",
    hero_card_kw5:          "Backstepping",
    hero_card_kw6:          "Systèmes à retards",

    // ── Page work.html (chooser Recherche / Publications) ──
    work_research_title:    "Recherche",
    work_research_lead:     "Mon énoncé de recherche, les trois axes que je développe, et le projet ERC C-NORA.",
    work_research_t1:       "Commande à événements",
    work_research_t2:       "Commande aux bords d'EDP",
    work_research_t3:       "Feedback prédicteur",
    work_pub_title:         "Publications",
    work_pub_lead:          "L'ensemble des articles de revue, actes de conférence, prépublications et la thèse, filtrables par type.",
    work_explore_research:  "Explorer la recherche",
    work_browse_pubs:       "Parcourir les publications",
    work_or:                "ou",

    // ── Section: Research themes ─────────────────
    themes_eyebrow:   "Axes de recherche",
    themes_title:     "Trois fils, une question.",
    themes_lead:      "Comment commander un système qui vit dans un espace d'état infini-dimensionnel, avec des mesures imparfaites, une bande passante finie, et des retards inévitables ?",
    theme1_title:     "Commande à événements",
    theme1_desc:      "Des lois de commande qui n'agissent que quand le système en a réellement besoin, économisant bande passante, énergie et calcul, sans sacrifier la stabilité.",
    theme2_title:     "Contrôle aux bords d'EDP",
    theme2_desc:      "Stabiliser des systèmes d'ondes, de réaction–diffusion, de Schrödinger et hyperboliques en agissant uniquement à la frontière, via backstepping, analyse de Lyapunov et synthèse d'observateurs.",
    theme3_title:     "Retards & Quantification",
    theme3_desc:      "Feedback prédicteur et architectures commutées qui compensent à la fois le retard d'entrée et l'inévitable grossissement induit par la mesure et l'actionnement numériques.",
    theme_explore:    "Explorer",

    // ── Section: News ────────────────────────────
    news_eyebrow:     "Activité récente",
    news_title:       "Dernières actualités",

    // ── CTA Strip ────────────────────────────────
    cta_strip_eyebrow: "Pour collaborateurs & étudiants",
    cta_strip_title:   "Vous cherchez une collaboration, une thèse en cotutelle, ou une visite scientifique ?",
    cta_get_in_touch:  "Me contacter",
    cta_read_research: "Lire la recherche",

    // ── About page ───────────────────────────────
    about_banner_eyebrow: "À propos de moi",
    about_banner_title:   "« Cela semble toujours impossible, jusqu'à ce que ce soit fait. »",
    about_banner_lead:    "Nelson Mandela",

    about_who_title:      "Qui je suis",
    about_who_p1:         "Je m'appelle Florent Koudohode. J'ai grandi au Bénin, où un seul cours sur les équations différentielles à l'<em>Institut de Mathématiques et de Sciences Physiques</em> (IMSP) a fait naître en moi la conviction qu'il existait un langage caché derrière chaque phénomène physique que j'avais jamais observé, et que l'apprendre était ce que je voulais faire de ma vie.",
    about_who_p2:         "Cette conviction m'a conduit à Toulouse, où j'ai obtenu un Master puis un doctorat au LAAS-CNRS sous la direction de <a href=\"https://homepages.laas.fr/lbaudoui/\" target=\"_blank\" rel=\"noopener\">Lucie Baudouin</a> et <a href=\"https://homepages.laas.fr/tarbour/\" target=\"_blank\" rel=\"noopener\">Sophie Tarbouriech</a>, sur la commande à événements des équations aux dérivées partielles. Je suis aujourd'hui chercheur postdoctoral à l'Université Technique de Crète, financé par le Conseil Européen de la Recherche sur le <a href=\"https://c-nora.tuc.gr\" target=\"_blank\" rel=\"noopener\">projet C-NORA</a>, où je m'attache à stabiliser des systèmes infinis-dimensionnels dans un monde obstinément retardé, quantifié et bruité.",
    about_who_p3:         "Ce qui me plaît le plus dans ce travail, c'est qu'il se tient exactement sur la couture entre les mathématiques pures et la réalité brute de l'ingénieur, fonctionnelles de Lyapunov d'un côté, capteurs et actionneurs de l'autre, et une vraie chance de les faire dialoguer.",
    about_who_p4:         "Au-delà de la recherche, j'essaie de rendre aux communautés qui m'ont façonné. Je suis Vice-Président de <a href=\"https://www.songo-education.org/notre-équipe\" target=\"_blank\" rel=\"noopener\">Songo Éducation</a>, une association qui développe des partenariats éducatifs entre la France et la République Centrafricaine, et membre du bureau d'<a href=\"https://asafrique.github.io/asafrique/\" target=\"_blank\" rel=\"noopener\">ASA (Association Sciences pour l'Afrique)</a>, qui travaille à réconcilier les gens avec la science et à inspirer la prochaine génération vers les STEM sur le continent africain.",
    about_who_p5:         "En dehors du laboratoire, je suis rarement loin d'un livre ; je lis largement en littérature et philosophie, qui ont une façon de poser les questions auxquelles les mathématiques ne savent jamais vraiment répondre. Vous me trouverez aussi sur le terrain avec les Cretan Gunners, à jouer au rugby amateur avec plus d'enthousiasme que d'adresse.",

    about_bio_title:    "Biographie courte",
    about_bio_meta:     "Pour invitations, exposés, en-têtes de journal",
    about_bio_text:     "Florent Koudohode a obtenu son doctorat en Automatique au LAAS-CNRS, Université Paul Sabatier, Toulouse III, France, en 2023. Il est titulaire de deux Masters en Mathématiques Fondamentales et Applications, de l'Institut de Mathématiques et de Sciences Physiques (IMSP), Dangbo, Bénin (2018), et de l'Université Paul Sabatier, Toulouse III, France (2020). Il est actuellement chercheur postdoctoral au Département de Génie Électrique et Informatique de l'Université Technique de Crète, en Grèce, soutenu par le Conseil Européen de la Recherche dans le cadre du Consolidator Grant C-NORA 2022. Ses recherches portent sur l'analyse et la commande de systèmes infinis-dimensionnels gouvernés par des équations aux dérivées partielles, avec un accent sur la commande à événements, le feedback prédicteur, les systèmes à retards, et la compensation de quantification. Ses travaux sont parus dans des revues majeures de la communauté systèmes et commande, dont Automatica, Systems & Control Letters et IEEE Transactions on Automatic Control. Il sert régulièrement comme relecteur pour ces revues, ainsi que pour Nonlinear Analysis: Hybrid Systems, et pour des conférences internationales majeures, dont la IEEE Conference on Decision and Control (CDC), l'American Control Conference (ACC), et la European Control Conference (ECC).",
    about_bio_copy_en:  "Copier (EN)",
    about_bio_copy_fr:  "Copier (FR)",
    about_bio_copied:   "Copié !",

    about_cv_title:     "Curriculum Vitæ",
    about_cv_lead:      "Une vue d'ensemble de mon parcours académique, distinctions et activités actuelles.",

    cv_section_positions: "Postes académiques",
    cv_section_education: "Formation",
    cv_section_funding:   "Financements & Distinctions",
    cv_section_interests: "Intérêts de recherche",
    cv_section_skills:    "Compétences & Outils",
    cv_section_languages: "Langues",
    cv_download_en:       "Télécharger CV (EN)",
    cv_download_fr:       "Télécharger CV (FR)",
    cv_download_coming:   "Bientôt disponible",

    // ── Research page ────────────────────────────
    research_banner_eyebrow: "Recherche",
    research_banner_title:   "Commander, à la limite du possible.",
    research_banner_lead:    "Une note courte sur ce sur quoi je travaille, pourquoi cela m'importe, et où cela va.",

    research_statement_p1:   "La plupart des systèmes qui nous intéressent en ingénierie, structures flexibles, réacteurs chimiques, réseaux de trafic, réseaux de capteurs distribués, ne vivent pas dans un espace d'état de dimension finie. Leur langue naturelle est celle des équations aux dérivées partielles : état et dynamique infinis-dimensionnels, propagation bornée par la physique, et commande appliquée le plus souvent à la frontière. La boîte à outils classique de la commande, conçue pour des EDO et une communication continue, ne se transfère pas directement.",
    research_statement_p2:   "Ma recherche vit à cette intersection. Je conçois des lois de commande pour les EDP qui restent robustes aux contraintes que le monde réel impose, à savoir, des mesures qui n'arrivent qu'à des instants discrets, quantifiées sur un nombre fini de niveaux, des signaux de commande soumis à un retard de transmission, et une bande passante qui doit être employée avec parcimonie. Les outils que j'emploie sont l'analyse de Lyapunov, les transformations de backstepping, le feedback prédicteur, la synthèse d'observateurs, et un traitement soigné des règles de déclenchement. Quand cela fonctionne, le résultat est une loi de commande qui fait davantage avec moins, provablement stable, honnête sur le plan calculatoire, prête à être déployée.",

    research_theme1_h:       "Commande à événements",
    research_theme1_p:       "Le feedback classique met à jour le signal de commande en continu, ce qui est impossible sur une plateforme numérique, et coûteux sur un réseau. La commande à événements remplace cette mise à jour continue par une règle de déclenchement, une condition sur l'état, l'erreur, ou les deux, qui détermine, intrinsèquement, à quel moment la prochaine mise à jour est nécessaire. Le défi consiste à concevoir des règles qui garantissent la stabilité, excluent le comportement de Zénon, et restent robustes aux perturbations. J'ai travaillé sur des lois à événements pour les équations d'onde, de Schrödinger, de réaction–diffusion, ainsi que pour des systèmes hyperboliques 2×2.",
    research_theme2_h:       "Contrôle aux bords d'EDP",
    research_theme2_p:       "Lorsqu'un système physique est décrit par une EDP, la commande agit le plus souvent à la frontière, un mur chauffé, une vanne, un actionneur d'extrémité. Stabiliser un tel système exige de concevoir des lois de feedback qui se propagent à travers le domaine spatial en temps fini. La méthode du backstepping, initiée par Krstic et ses collaborateurs, transforme l'EDP en boucle ouverte en un système cible choisi, par une transformation de Volterra inversible. J'utilise ce cadre conjointement avec des fonctionnelles de Lyapunov et la synthèse d'observateurs lorsque les mesures sont de sortie.",
    research_theme3_h:       "Feedback prédicteur, retard et quantification",
    research_theme3_p:       "Le retard d'entrée est endémique de la commande en réseau : les signaux de commande n'atteignent le procédé qu'après un délai de transmission. Le feedback prédicteur compense ce retard en agissant sur une prédiction future de l'état. La quantification, l'arrondi inévitable induit par les capteurs et actionneurs numériques, ajoute une seconde couche d'imperfection, et les deux effets interagissent. Mes travaux récents conçoivent des lois de feedback prédicteur commutées qui compensent les deux simultanément, avec des garanties de stabilité semiglobale pour des procédés non linéaires.",
    research_theme_pubs:     "Articles associés :",

    research_erc_title:      "ERC Consolidator Grant, C-NORA",
    research_erc_text:       "Mes travaux actuels sont soutenus par le Conseil Européen de la Recherche dans le cadre du Consolidator Grant C-NORA (#101088147), dirigé à l'Université Technique de Crète par le Prof. Nikolaos Bekiaris-Liberis. Le projet aborde la commande sécurisée micro-macro de systèmes de transport infinis-dimensionnels.",
    research_erc_link:       "Site du projet",

    // ── Publications page ────────────────────────
    pub_banner_title:     "Publications",
    pub_banner_lead:      "Liste complète des articles de journaux, communications en conférence, prépublications et de la thèse de doctorat. Filtrez par type ci-dessous, ou dépliez un résumé.",
    pub_filter_all:       "Tout",
    pub_filter_journal:   "Journaux",
    pub_filter_conference:"Conférences",
    pub_filter_preprint:  "Prépublications",
    pub_filter_thesis:    "Thèse",
    pub_btn_abstract:     "Résumé",
    pub_btn_pdf:          "PDF",
    pub_btn_code:         "Code",
    pub_btn_bibtex:       "BibTeX",
    pub_btn_doi:          "DOI",
    pub_btn_arxiv:        "arXiv",
    pub_btn_hal:          "HAL",
    pub_btn_url:          "URL",
    pub_copied:           "Copié !",
    pub_to_confirm:       "À vérifier",
    pub_status_published: "Publié",
    pub_status_review:    "En révision",
    pub_status_preprint:  "Prépublication",
    pub_status_thesis:    "Thèse de doctorat",
    pub_group_journals:   "Articles de journaux",
    pub_group_conferences:"Conférences",
    pub_group_preprints:  "Prépublications",
    pub_group_thesis:     "Thèse de doctorat",

    // ── Teaching page ────────────────────────────
    teaching_banner_eyebrow: "Enseignement & Encadrement",
    teaching_banner_title:   "Transmettre.",
    teaching_banner_lead:    "Cours enseignés, étudiants encadrés, et matériaux pédagogiques mis à disposition.",
    teach_h_courses:         "Cours",
    teach_h_supervision:     "Encadrement",
    teach_h_materials:       "Matériaux",
    teach_no_materials:      "Les matériaux pédagogiques seront déposés ici au fur et à mesure.",

    // ── Contact page ─────────────────────────────
    contact_banner_eyebrow: "Me contacter",
    contact_banner_title:   "Contact",
    contact_banner_lead:    "Pour toute question scientifique, proposition de collaboration, invitation ou visite, n'hésitez pas à écrire directement.",
    contact_h_email:        "Email",
    contact_h_office:       "Bureau",
    contact_h_phone:        "Téléphone",
    contact_h_socials:      "Sur le web",
    contact_form_title:     "Envoyer un message",
    contact_form_name:      "Nom",
    contact_form_email:     "Email",
    contact_form_subject:   "Objet",
    contact_form_message:   "Message",
    contact_send:           "Envoyer le message",
    contact_success:        "Merci. Votre message est prêt dans votre logiciel de messagerie.",

    // ── Footer ───────────────────────────────────
    footer_tagline:   "Chercheur postdoctoral en contrôle des équations aux dérivées partielles.",
    footer_navigate:  "Navigation",
    footer_elsewhere: "Ailleurs",
    footer_contact:   "Contact",
    footer_rights:    "Tous droits réservés.",
    footer_updated:   "Dernière mise à jour",
  },
};


/* ============================================================
   §3, THEME (dark / light mode)
   ============================================================ */
function initTheme() {
  const saved = localStorage.getItem('fk-theme');
  const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const theme = saved || (systemDark ? 'dark' : 'light');
  setTheme(theme, false);
}

function setTheme(theme, save = true) {
  document.documentElement.setAttribute('data-theme', theme);
  if (save) localStorage.setItem('fk-theme', theme);
}

function toggleTheme() {
  const current = document.documentElement.getAttribute('data-theme');
  setTheme(current === 'dark' ? 'light' : 'dark');
}


/* ============================================================
   §4, LANGUAGE (i18n)
   ============================================================ */
function initLanguage() {
  const saved = localStorage.getItem('fk-lang');
  const browser = (navigator.language || 'en').toLowerCase().startsWith('fr') ? 'fr' : 'en';
  setLanguage(saved || browser);
}

function setLanguage(lang) {
  if (!translations[lang]) lang = 'en';
  localStorage.setItem('fk-lang', lang);
  document.documentElement.setAttribute('lang', lang);

  // Update text content for [data-i18n]
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const value = translations[lang][key];
    if (value !== undefined) {
      el.textContent = value;
    }
  });

  // Update innerHTML for [data-i18n-html] (when keys contain HTML tags like <em>)
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.getAttribute('data-i18n-html');
    const value = translations[lang][key];
    if (value !== undefined) {
      el.innerHTML = value;
    }
  });

  // Update placeholders for form inputs
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    const value = translations[lang][key];
    if (value !== undefined) {
      el.setAttribute('placeholder', value);
    }
  });

  // Update aria-labels
  document.querySelectorAll('[data-i18n-aria]').forEach(el => {
    const key = el.getAttribute('data-i18n-aria');
    const value = translations[lang][key];
    if (value !== undefined) {
      el.setAttribute('aria-label', value);
    }
  });

  // Toggle active class on language buttons
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
  });

  // Re-render anything that's data-driven (publications, news, teaching)
  if (typeof renderPublications === 'function' && document.getElementById('pubList')) {
    renderPublications(currentFilter);
  }
  if (typeof renderNews === 'function' && document.getElementById('newsList')) {
    renderNews();
  }
  if (typeof renderTeaching === 'function' && document.getElementById('teachCoursesList')) {
    renderTeaching();
  }
}


/* ============================================================
   §5, NAVIGATION (mobile burger)
   ============================================================ */
function initNav() {
  const burger = document.getElementById('navBurger');
  const links  = document.getElementById('navLinks');
  if (!burger || !links) return;

  burger.addEventListener('click', () => {
    const open = links.classList.toggle('open');
    burger.setAttribute('aria-expanded', open);
  });

  // Close menu on link click (mobile)
  links.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    if (window.innerWidth <= 768) {
      links.classList.remove('open');
      burger.setAttribute('aria-expanded', 'false');
    }
  }));
}


/* ============================================================
   §6, PUBLICATIONS
   ============================================================ */
let currentFilter = 'all';

function getCurrentLang() {
  return document.documentElement.getAttribute('lang') === 'fr' ? 'fr' : 'en';
}
function t(key) {
  const lang = getCurrentLang();
  return (translations[lang] && translations[lang][key]) || (translations.en[key] || key);
}

function escapeHtml(s) {
  if (s == null) return '';
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

// Highlight "F. Koudohode" in author lists
function highlightAuthor(authors) {
  const safe = escapeHtml(authors);
  return safe.replace(/F\. Koudohode/g, '<span class="author-self">F. Koudohode</span>');
}

function getStatusLabel(status) {
  switch (status) {
    case 'published':    return t('pub_status_published');
    case 'under-review': return t('pub_status_review');
    case 'preprint':     return t('pub_status_preprint');
    case 'thesis':       return t('pub_status_thesis');
    default:             return status;
  }
}

function getTypeLabel(type) {
  switch (type) {
    case 'journal':     return t('pub_filter_journal').replace(/s$/, '');
    case 'conference':  return t('pub_filter_conference').replace(/s$/, '');
    case 'preprint':    return t('pub_filter_preprint').replace(/s$/, '');
    case 'thesis':      return t('pub_filter_thesis');
    default:            return type;
  }
}

function getGroupTitle(type) {
  switch (type) {
    case 'journal':     return t('pub_group_journals');
    case 'conference':  return t('pub_group_conferences');
    case 'preprint':    return t('pub_group_preprints');
    case 'thesis':      return t('pub_group_thesis');
    default:            return type;
  }
}

// Build the BibTeX entry for a publication
function generateBibtex(pub) {
  const firstAuthor = 'Koudohode';
  const key = `koudohode${pub.year}${(pub.id || '').toLowerCase()}`;
  const authorsBib = pub.authors
    .split(',')
    .map(a => a.trim().replace(/^(.+)\s+([A-Z]\.([A-Z]\.)?)$/, '$2 $1'))
    .join(' and ');
  const fields = [];
  fields.push(`  author    = {${pub.authors}}`);
  fields.push(`  title     = {${pub.title}}`);
  fields.push(`  year      = {${pub.year}}`);
  if (pub.venue) fields.push(`  ${pub.type === 'journal' ? 'journal' : 'booktitle'}   = {${pub.venue}}`);
  if (pub.venueDetail) fields.push(`  note      = {${pub.venueDetail}}`);
  if (pub.doi) fields.push(`  doi       = {${pub.doi}}`);
  const entryType = pub.type === 'journal' ? '@article' :
                    pub.type === 'thesis'  ? '@phdthesis' : '@inproceedings';
  return `${entryType}{${key},\n${fields.join(',\n')}\n}`;
}

// Render a single publication card
function renderPublicationCard(pub) {
  const actions = [];

  if (pub.pdf) {
    actions.push(`<a class="pub-link" href="${escapeHtml(pub.pdf)}" target="_blank" rel="noopener">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
      ${t('pub_btn_pdf')}
    </a>`);
  }
  if (pub.doi) {
    actions.push(`<a class="pub-link" href="https://doi.org/${escapeHtml(pub.doi)}" target="_blank" rel="noopener">${t('pub_btn_doi')}</a>`);
  }
  if (pub.arxiv) {
    actions.push(`<a class="pub-link" href="https://arxiv.org/abs/${escapeHtml(pub.arxiv)}" target="_blank" rel="noopener">${t('pub_btn_arxiv')}</a>`);
  }
  if (pub.hal) {
    actions.push(`<a class="pub-link" href="https://hal.science/${escapeHtml(pub.hal)}" target="_blank" rel="noopener">${t('pub_btn_hal')}</a>`);
  }
  if (pub.url) {
    actions.push(`<a class="pub-link" href="${escapeHtml(pub.url)}" target="_blank" rel="noopener">${t('pub_btn_url')}</a>`);
  }
  if (pub.code) {
    const href = pub.code.startsWith('http') ? pub.code : pub.code;
    // Label optionnel : si pub.codeLabel défini → l'utiliser ("MATLAB", "Python", ...)
    // Sinon, le texte par défaut "Code"
    const codeLabel = pub.codeLabel
      ? `${t('pub_btn_code')} <span class="pub-link-sub">${escapeHtml(pub.codeLabel)}</span>`
      : t('pub_btn_code');
    actions.push(`<a class="pub-link pub-link-code" href="${escapeHtml(href)}" target="_blank" rel="noopener">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
      ${codeLabel}
    </a>`);
  }
  actions.push(`<button class="pub-link" data-bibtex="${pub.id}" type="button">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
    ${t('pub_btn_bibtex')}
  </button>`);

  const abstractToggle = pub.abstract ?
    `<button class="pub-abstract-toggle" type="button" data-abs="${pub.id}">
      <span>${t('pub_btn_abstract')}</span>
      <svg class="chevron" viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><polyline points="6 9 12 15 18 9"/></svg>
    </button>` : '';

  const abstractSection = pub.abstract ?
    `<div class="pub-abstract" id="abs-${pub.id}">
      <p class="pub-abstract-text">${escapeHtml(pub.abstract)}</p>
    </div>` : '';

  const confirmBadge = pub.toConfirm ?
    `<span class="pub-badge pub-badge-confirm">${t('pub_to_confirm')}</span>` : '';

  const venueLine = pub.venueDetail ?
    `<p class="pub-venue"><strong>${escapeHtml(pub.venue)}</strong>, ${escapeHtml(pub.venueDetail)}</p>` :
    `<p class="pub-venue"><strong>${escapeHtml(pub.venue)}</strong></p>`;

  return `
  <article class="pub-card" data-type="${pub.type}" data-year="${pub.year}" id="${pub.id}">
    <div class="pub-year">${pub.year}</div>
    <div class="pub-body-content">
      <h3 class="pub-title">${escapeHtml(pub.title)}</h3>
      <p class="pub-authors">${highlightAuthor(pub.authors)}</p>
      ${venueLine}
      <!-- ============================================================
           ACTIONS DE LA PUBLICATION, toutes sur UNE seule ligne :
           Statut (Published / Under review) · BibTeX · DOI · Code · ...
           ============================================================ -->
      <div class="pub-actions-row">
        <span class="pub-badge pub-badge-type-${pub.type}">${getTypeLabel(pub.type)}</span>
        <span class="pub-badge pub-badge-status-${pub.status === 'under-review' ? 'review' : pub.status}">${getStatusLabel(pub.status)}</span>
        ${confirmBadge}
        <span class="pub-actions-sep" aria-hidden="true"></span>
        ${abstractToggle}
        ${actions.join('')}
      </div>
      ${abstractSection}
    </div>
  </article>`;
}

// Render the full publication list, grouped and filtered
function renderPublications(filter) {
  const container = document.getElementById('pubList');
  if (!container) return;
  currentFilter = filter;

  const groups = [
    { type: 'journal',    items: [] },
    { type: 'conference', items: [] },
    { type: 'preprint',   items: [] },
    { type: 'thesis',     items: [] },
  ];

  publications.forEach(p => {
    const g = groups.find(g => g.type === p.type);
    if (g) g.items.push(p);
  });

  // Sort by year descending
  groups.forEach(g => g.items.sort((a, b) => b.year - a.year));

  let html = '';
  groups.forEach(g => {
    const visibleItems = filter === 'all' ? g.items : g.items.filter(p => p.type === filter);
    if (visibleItems.length === 0) return;
    html += `<section class="pub-group">
      <h2 class="pub-group-title">
        ${getGroupTitle(g.type)}
        <span class="pub-group-count">${visibleItems.length}</span>
      </h2>
      ${visibleItems.map(renderPublicationCard).join('')}
    </section>`;
  });

  container.innerHTML = html;

  // Wire up abstract toggles
  container.querySelectorAll('[data-abs]').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.getAttribute('data-abs');
      const target = document.getElementById('abs-' + id);
      if (!target) return;
      target.classList.toggle('open');
      btn.classList.toggle('open');
    });
  });

  // Wire up BibTeX copy buttons
  container.querySelectorAll('[data-bibtex]').forEach(btn => {
    btn.addEventListener('click', async () => {
      const id = btn.getAttribute('data-bibtex');
      const pub = publications.find(p => p.id === id);
      if (!pub) return;
      const bib = generateBibtex(pub);
      try {
        await navigator.clipboard.writeText(bib);
        const original = btn.innerHTML;
        btn.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg> ${t('pub_copied')}`;
        setTimeout(() => { btn.innerHTML = original; }, 1800);
      } catch (e) {
        console.warn('Clipboard write failed', e);
      }
    });
  });
}

// Filter buttons handler
function initPubFilters() {
  const filters = document.querySelectorAll('.pub-filter');
  if (filters.length === 0) return;
  filters.forEach(btn => {
    btn.addEventListener('click', () => {
      filters.forEach(b => {
        b.classList.remove('active');
        b.setAttribute('aria-selected', 'false');
      });
      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');
      const f = btn.getAttribute('data-filter');
      renderPublications(f);
    });
  });
}


/* ============================================================
   §7, NEWS
   ============================================================ */
function renderNews() {
  const container = document.getElementById('newsList');
  if (!container) return;

  // Translate news dates if needed (simple heuristic: keep English for now)
  const items = news.map(n => {
    const text = escapeHtml(n.text);
    const inner = n.link ?
      `<p class="news-text"><a href="${escapeHtml(n.link)}" target="_blank" rel="noopener">${text}</a></p>` :
      `<p class="news-text">${text}</p>`;
    return `<li class="news-item">
      <span class="news-date">${escapeHtml(n.date)}</span>
      ${inner}
    </li>`;
  });
  container.innerHTML = items.join('');
}


/* ============================================================
   §8, BIO COPY BUTTONS (About page)
   ============================================================ */
function initBioCopyButtons() {
  const buttons = document.querySelectorAll('[data-copy-bio]');
  buttons.forEach(btn => {
    btn.addEventListener('click', async () => {
      const lang = btn.getAttribute('data-copy-bio');
      const text = translations[lang] && translations[lang].about_bio_text;
      if (!text) return;
      try {
        await navigator.clipboard.writeText(text);
        const labelEl = btn.querySelector('.copy-label');
        const original = labelEl ? labelEl.textContent : btn.textContent;
        btn.classList.add('copied');
        if (labelEl) labelEl.textContent = translations[getCurrentLang()].about_bio_copied;
        else btn.textContent = translations[getCurrentLang()].about_bio_copied;
        setTimeout(() => {
          btn.classList.remove('copied');
          if (labelEl) labelEl.textContent = original;
          else btn.textContent = original;
        }, 1800);
      } catch (e) {
        console.warn('Clipboard write failed', e);
      }
    });
  });
}


/* ============================================================
   §9, TEACHING (render courses, supervision, materials)
   ============================================================ */
function renderTeaching() {
  // Courses
  const courses = document.getElementById('teachCoursesList');
  if (courses) {
    courses.innerHTML = teachingCourses.map(c => `
      <div class="teach-item">
        <span class="teach-year">${escapeHtml(c.year)}</span>
        <div>
          <p class="teach-title">${escapeHtml(c.title)}</p>
          <p class="teach-meta">${escapeHtml(c.inst)} · ${escapeHtml(c.role)}</p>
        </div>
        <span></span>
      </div>`).join('');
  }

  // Supervision
  const sup = document.getElementById('teachSupervisionList');
  if (sup) {
    sup.innerHTML = supervisions.map(s => `
      <div class="teach-item">
        <span class="teach-year">${escapeHtml(s.level)}</span>
        <div>
          <p class="teach-title">${escapeHtml(s.name)}</p>
          <p class="teach-meta">${escapeHtml(s.inst)} · ${escapeHtml(s.co)}</p>
        </div>
        <span></span>
      </div>`).join('');
  }

  // Materials
  const mats = document.getElementById('teachMaterialsList');
  if (mats) {
    if (teachingMaterials.length === 0) {
      mats.innerHTML = `<p style="color: var(--text-muted); font-style: italic;">${t('teach_no_materials')}</p>`;
    } else {
      mats.innerHTML = teachingMaterials.map(m => `
        <a class="teach-mat-card" href="${escapeHtml(m.file)}" target="_blank" rel="noopener">
          <span class="teach-mat-type">${escapeHtml(m.type)} · ${m.year}</span>
          <span class="teach-mat-title">${escapeHtml(m.title)}</span>
        </a>`).join('');
    }
  }
}


/* ============================================================
   §10, KaTeX (math rendering)
   ============================================================ */
function renderMath() {
  if (typeof renderMathInElement !== 'function') return;
  try {
    renderMathInElement(document.body, {
      delimiters: [
        { left: '$$', right: '$$', display: true },
        { left: '$',  right: '$',  display: false },
        { left: '\\(', right: '\\)', display: false },
        { left: '\\[', right: '\\]', display: true },
      ],
      throwOnError: false,
    });
  } catch (e) {
    console.warn('KaTeX rendering failed', e);
  }
}


/* ============================================================
   §11, ANIMATIONS (reveal on scroll)
   ============================================================ */
function initRevealAnimations() {
  const reveals = document.querySelectorAll('.reveal');
  if (reveals.length === 0 || !('IntersectionObserver' in window)) {
    reveals.forEach(el => el.classList.add('in'));
    return;
  }
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('in');
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
  reveals.forEach(el => obs.observe(el));
}


/* ============================================================
   §12, INIT
   ============================================================ */
/* ============================================================
   §11, INTERACTIONS DYNAMIQUES (scroll, transitions, clavier)
   ────────────────────────────────────────────────────────────
   Cette section ajoute :
     – une barre de progression de défilement en haut
     – un bouton "retour en haut" qui apparaît au scroll
     – un mini loader entre les pages
     – des raccourcis clavier (g h, g a, g r, g p, g t, g c, t, /)
   Tout est non-bloquant : si JS échoue, le site reste utilisable.
   ============================================================ */

/* ─── Injecte la barre de progression dans le DOM ─── */
function initScrollProgress() {
  // On crée l'élément dynamiquement pour ne pas alourdir chaque page HTML
  const bar = document.createElement('div');
  bar.className = 'scroll-progress';
  bar.innerHTML = '<div class="scroll-progress-bar" id="scrollProgressBar"></div>';
  document.body.appendChild(bar);

  const inner = document.getElementById('scrollProgressBar');
  // Throttling via requestAnimationFrame pour performance
  let ticking = false;
  function update() {
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const pct = docHeight > 0 ? (window.scrollY / docHeight) * 100 : 0;
    inner.style.width = Math.min(100, Math.max(0, pct)) + '%';
    ticking = false;
  }
  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(update);
      ticking = true;
    }
  }, { passive: true });
  update();
}

/* ─── Dropdown nav (mobile : tap pour ouvrir/fermer) ─── */
function initNavDropdown() {
  const parents = document.querySelectorAll('.nav-dropdown-parent');
  parents.forEach(parent => {
    const toggleBtn = parent.querySelector('.nav-dropdown-toggle');
    if (!toggleBtn) return;
    toggleBtn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      const isOpen = parent.classList.toggle('open');
      toggleBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });
  });
  // Fermer si on clique ailleurs
  document.addEventListener('click', (e) => {
    parents.forEach(p => {
      if (!p.contains(e.target)) {
        p.classList.remove('open');
        const btn = p.querySelector('.nav-dropdown-toggle');
        if (btn) btn.setAttribute('aria-expanded', 'false');
      }
    });
  });
}


function initBackToTop() {
  const btn = document.createElement('button');
  btn.className = 'scroll-to-top';
  btn.setAttribute('aria-label', 'Back to top');
  btn.innerHTML = `<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="18 15 12 9 6 15"/></svg>`;
  document.body.appendChild(btn);

  // Apparaît après 500 px de scroll
  let ticking = false;
  function check() {
    btn.classList.toggle('visible', window.scrollY > 500);
    ticking = false;
  }
  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(check);
      ticking = true;
    }
  }, { passive: true });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

/* ─── Loader entre les pages ─── */
/* Quand l'utilisateur clique sur un lien interne, une barre passe
   en haut pour confirmer que la nouvelle page se charge. */
function initPageLoader() {
  const loader = document.createElement('div');
  loader.className = 'page-loader';
  loader.id = 'pageLoader';
  document.body.appendChild(loader);

  // On intercepte les clics sur tous les liens internes (.html)
  document.addEventListener('click', (e) => {
    const a = e.target.closest('a[href]');
    if (!a) return;
    const href = a.getAttribute('href');
    // Ignorer ancres, liens externes, mailto, tel, target=_blank
    if (!href || href.startsWith('#') || href.startsWith('mailto:') ||
        href.startsWith('tel:') || a.target === '_blank' ||
        a.hasAttribute('download') ||
        (href.startsWith('http') && !href.includes(location.host))) {
      return;
    }
    loader.classList.add('loading');
  });

  // Quand la page (re)devient visible, on retire le loader
  window.addEventListener('pageshow', () => {
    loader.classList.remove('loading');
    loader.classList.add('complete');
    setTimeout(() => loader.classList.remove('complete'), 400);
  });
}

/* ─── Raccourcis clavier ─── */
/* Inspiré de Gmail / GitHub :
     g puis h → home
     g puis a → about
     g puis r → research
     g puis p → publications
     g puis t → teaching
     g puis c → contact
     t        → toggle thème clair/sombre
     ?        → afficher l'aide (toast)
*/
function initKeyboardShortcuts() {
  let gPressed = false;
  let gTimer = null;

  const routes = {
    'h': 'index.html',
    'a': 'about.html',
    'r': 'research.html',
    'p': 'publications.html',
    'w': 'work.html',
    't': 'teaching.html',
    'c': 'contact.html',
  };

  document.addEventListener('keydown', (e) => {
    // Ne pas intercepter quand l'utilisateur est en train de taper
    const tag = (e.target.tagName || '').toLowerCase();
    if (tag === 'input' || tag === 'textarea' || tag === 'select' || e.target.isContentEditable) return;
    if (e.ctrlKey || e.metaKey || e.altKey) return;

    if (gPressed) {
      const route = routes[e.key.toLowerCase()];
      if (route) {
        e.preventDefault();
        window.location.href = route;
        return;
      }
      gPressed = false;
      clearTimeout(gTimer);
    }

    if (e.key.toLowerCase() === 'g') {
      gPressed = true;
      gTimer = setTimeout(() => { gPressed = false; }, 1200);
      return;
    }

    if (e.key.toLowerCase() === 't' && !gPressed) {
      // Bascule de thème
      toggleTheme();
    }

    if (e.key === '?') {
      showShortcutsToast();
    }

    if (e.key === 'Escape') {
      // Ferme le menu mobile s'il est ouvert
      const links = document.getElementById('navLinks');
      const burger = document.getElementById('navBurger');
      if (links && links.classList.contains('open')) {
        links.classList.remove('open');
        burger.setAttribute('aria-expanded', 'false');
      }
    }
  });
}

/* ─── Toast d'aide pour les raccourcis ─── */
function showShortcutsToast() {
  let toast = document.getElementById('shortcutsToast');
  if (toast) {
    toast.classList.toggle('visible');
    return;
  }
  toast = document.createElement('div');
  toast.id = 'shortcutsToast';
  toast.className = 'shortcuts-toast visible';
  toast.innerHTML = `
    <div class="shortcuts-toast-h">Keyboard shortcuts</div>
    <ul>
      <li><kbd>g</kbd> <kbd>h</kbd> &nbsp;→ Home</li>
      <li><kbd>g</kbd> <kbd>a</kbd> &nbsp;→ About</li>
      <li><kbd>g</kbd> <kbd>r</kbd> &nbsp;→ Research</li>
      <li><kbd>g</kbd> <kbd>p</kbd> &nbsp;→ Publications</li>
      <li><kbd>g</kbd> <kbd>t</kbd> &nbsp;→ Teaching</li>
      <li><kbd>g</kbd> <kbd>c</kbd> &nbsp;→ Contact</li>
      <li><kbd>t</kbd> &nbsp;→ Toggle theme</li>
      <li><kbd>?</kbd> &nbsp;→ This help</li>
    </ul>
    <button class="shortcuts-toast-close" aria-label="Close">×</button>
  `;
  document.body.appendChild(toast);
  toast.querySelector('.shortcuts-toast-close').addEventListener('click', () => {
    toast.classList.remove('visible');
  });
  // Auto-hide après 7 secondes
  setTimeout(() => toast.classList.remove('visible'), 7000);
}


function initContactForm() {
  const submit = document.getElementById('contactSubmit');
  if (!submit) return;

  const note = document.getElementById('contactNote');
  const nameEl = document.getElementById('cName');
  const emailEl = document.getElementById('cEmail');
  const subjEl = document.getElementById('cSubject');
  const msgEl = document.getElementById('cMessage');

  submit.addEventListener('click', () => {
    const name = (nameEl?.value || '').trim();
    const from = (emailEl?.value || '').trim();
    const subject = (subjEl?.value || '').trim() || 'Message via fkoudohode.com';
    const message = (msgEl?.value || '').trim();

    if (!name || !from || !message) {
      [nameEl, emailEl, msgEl].forEach(el => {
        if (el && !el.value.trim()) {
          el.classList.add('form-invalid');
          setTimeout(() => el.classList.remove('form-invalid'), 1600);
        }
      });
      return;
    }

    const body = `From: ${name} <${from}>\n\n${message}`;
    const href = `mailto:fkoudohode@tuc.gr?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = href;

    if (note) {
      note.hidden = false;
      setTimeout(() => { note.hidden = true; }, 6000);
    }
  });
}

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initLanguage();
  initNav();

  // Theme toggle
  const themeBtn = document.getElementById('themeToggle');
  if (themeBtn) themeBtn.addEventListener('click', toggleTheme);

  // Language toggle buttons
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => setLanguage(btn.getAttribute('data-lang')));
  });

  // Page-specific rendering
  renderNews();
  renderPublications('all');
  initPubFilters();
  renderTeaching();
  initBioCopyButtons();
  initContactForm();
  initRevealAnimations();

  // ─── Améliorations dynamiques de navigation ───
  initScrollProgress();   // barre de progression de scroll
  initBackToTop();        // bouton "retour en haut"
  initPageLoader();       // barre de chargement entre pages
  initKeyboardShortcuts();// raccourcis clavier (g h, g a, t, ?, etc.)
  initNavDropdown();      // dropdown Research/Publications

  // Update year and last updated dates in footer
  const yearEl = document.getElementById('copyYear');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Render math after a short delay to let DOM finish
  setTimeout(renderMath, 50);

  // Listen to system theme changes
  if (window.matchMedia) {
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
      if (!localStorage.getItem('fk-theme')) setTheme(e.matches ? 'dark' : 'light', false);
    });
  }
});
