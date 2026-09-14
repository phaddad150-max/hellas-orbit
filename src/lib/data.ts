import type { Localized, LocalizedList } from "./types";

export const LAUNCH_WINDOW = new Date("2027-06-21T00:00:00Z");

export const mission = {
  code: "HELLAS-1",
  officialNames: {
    vast: "Vast-PAM-1",
    nasaPam: "PAM-6",
    note: {
      el: "Vast την ονομάζει Vast-PAM-1 (πρώτη ιδιωτική αποστολή της στον ISS). Στο πλαίσιο NASA Private Astronaut Missions αναφέρεται ως η έκτη (PAM-6). Ίδια πτήση, δύο ονομασίες.",
      en: "Vast calls it Vast-PAM-1 (its first private astronaut mission to the ISS). In NASA’s Private Astronaut Missions sequence it is the sixth (PAM-6). Same flight, two labels.",
    },
  },
  goal: {
    el: "Πρώτη επανδρωμένη πτήση της Ελλάδας: ο πρώτος Έλληνας σε τροχιά στον ISS, με ελληνικά πειράματα και τεχνολογικές επιδείξεις (ιατρική, φυσιολογία, αγροδιατροφή, υλικά, αισθητήρες) και έμπνευση για τη νέα γενιά STEM.",
    en: "Greece’s first crewed spaceflight: the first Greek citizen in orbit to the ISS, carrying Greek science and technology demonstrations (medicine, physiology, agri-food, materials, sensors) and inspiring the next STEM generation.",
  },
  operator: "Vast × ESA × NASA",
  vehicle: "SpaceX Dragon / Falcon 9",
  destination: "ISS",
  windowLabel: {
    el: "Όχι νωρίτερα από το καλοκαίρι του 2027",
    en: "No earlier than summer 2027",
  } satisfies Localized,
  duration: {
    el: "Περίπου 2 εβδομάδες στον ISS (η ελληνική ανακοίνωση του Ιουνίου ανέφερε έως ~3 εβδομάδες)",
    en: "About two weeks on the ISS (Greece’s June briefing described a stay of up to about three weeks)",
  } satisfies Localized,
  status: {
    el: "Αναμονή έγκρισης MCOP · εκπαίδευση σε εξέλιξη",
    en: "Awaiting MCOP approval · training underway",
  } satisfies Localized,
  site: {
    el: "Φλόριντα, ΗΠΑ (Cape Canaveral / Kennedy Space Center — τυπική βάση Crew Dragon)",
    en: "Florida, USA (Cape Canaveral / Kennedy Space Center — standard Crew Dragon range)",
  } satisfies Localized,
  return: {
    el: "Επιστροφή με Crew Dragon · προσθαλάσσωση στον ωκεανό με αλεξίπτωτα (τυπικό προφίλ SpaceX)",
    en: "Return in Crew Dragon · ocean splashdown under parachutes (standard SpaceX profile)",
  } satisfies Localized,
  behind: {
    el: "NASA ανέθεσε την ιδιωτική αποστολή στη Vast (συχνά PAM-6) · η ESA παρέχει πλήρωμα (Γολέμης, Πέσκε, Σβόμποντα) · η SpaceX παρέχει Falcon 9 + Crew Dragon",
    en: "NASA awarded the private mission to Vast (often called PAM-6) · ESA provides crew (Golemis, Pesquet, Svoboda) · SpaceX provides Falcon 9 + Crew Dragon",
  } satisfies Localized,
  operating: {
    el: "Vast: φορέας ιδιωτικής αποστολής · SpaceX: εκτόξευση και όχημα · NASA: ISS / εμπορικό πλαίσιο · ESA: εκπαίδευση και ευρωπαϊκό πλήρωμα · MCOP: τελική έγκριση πληρώματος",
    en: "Vast: private mission provider · SpaceX: launch and vehicle · NASA: ISS / commercial framework · ESA: training and European crew · MCOP: final crew approval",
  } satisfies Localized,
  partners: [
    { id: "nasa", el: "NASA", en: "NASA", role: { el: "Ανάθεση PAM / ISS", en: "PAM award / ISS" } },
    { id: "vast", el: "Vast", en: "Vast", role: { el: "Φορέας αποστολής", en: "Mission provider" } },
    { id: "spacex", el: "SpaceX", en: "SpaceX", role: { el: "Falcon 9 + Crew Dragon", en: "Falcon 9 + Crew Dragon" } },
    { id: "esa", el: "ESA", en: "ESA", role: { el: "Πλήρωμα & εκπαίδευση", en: "Crew & training" } },
    { id: "greece", el: "Ελλάδα", en: "Greece", role: { el: "Έδρα ειδικού αποστολής", en: "Mission specialist seat" } },
  ],
  note: {
    el: "Η ESA περιγράφει την πτήση ως την πρώτη ιδιωτική αποστολή αστροναυτών στον ISS που ανέθεσε η NASA στη Vast. Τα ελληνικά μέσα συχνά την αναφέρουν ως PAM-6. Η τελική σύνθεση πληρώματος και η ημερομηνία εκτόξευσης εξαρτώνται από την έγκριση του Multilateral Crew Operations Panel (NASA, ESA, Roscosmos, JAXA, CSA).",
    en: "ESA describes the flight as the first private astronaut mission to the ISS that NASA awarded to Vast. Greek coverage often calls it PAM-6. Final crew and launch date still need Multilateral Crew Operations Panel approval (NASA, ESA, Roscosmos, JAXA, CSA).",
  } satisfies Localized,
};

export const golemis = {
  name: { el: "Αδριανός Γολέμης", en: "Adrianos Golemis" } satisfies Localized,
  greekName: "Αδριανός Γολέμης",
  role: { el: "Ειδικός αποστολής", en: "Mission specialist" } satisfies Localized,
  born: "1987",
  from: { el: "Μεγάλωσε στη Λάρισα, Θεσσαλία", en: "Grew up in Larissa, Thessaly" } satisfies Localized,
  flag: "🇬🇷",
  quote: {
    el: "Είναι τιμή και χαρά που θα εκπροσωπήσω την Ελλάδα στο Διάστημα.",
    en: "It is an honour and a joy to represent Greece in space.",
  } satisfies Localized,
  story: {
    el: "Ο Αδριανός Γολέμης είναι γιατρός πτήσεων και ο πρώτος Έλληνας που ολοκλήρωσε και τα έξι στάδια επιλογής αστροναυτών της ESA. Από τον καθαρό ουρανό του Πλαταμώνα μέχρι τον ISS, η διαδρομή του δείχνει ότι ένας μαθητής από τη Θεσσαλία μπορεί να φτάσει σε τροχιά.",
    en: "Adrianos Golemis is a flight surgeon and the first Greek to complete all six stages of ESA astronaut selection. From meteor showers over Platamonas to the ISS, his path shows a child from Thessaly can reach orbit.",
  } satisfies Localized,
  kidsStory: {
    el: "Κάποτε ένα παιδί στη Λάρισα κοίταζε τα πεφταστέρια με τους γονείς του. Σπούδασε γιατρός, έζησε 14 μήνες στην Ανταρκτική και έγινε ο γιατρός των Ευρωπαίων αστροναυτών. Το 2027 θέλει να γίνει ο πρώτος Έλληνας σε τροχιά — και να φέρει την έρευνα πίσω στην Ελλάδα.",
    en: "A boy in Larissa used to watch shooting stars with his parents. He became a doctor, lived 14 months in Antarctica, and then became the doctor for European astronauts. In 2027 he aims to be the first Greek in orbit — and to bring the science home.",
  } satisfies Localized,
  timeline: [
    {
      year: "1987",
      el: "Γεννιέται · μεγαλώνει στη Λάρισα",
      en: "Born · grows up in Larissa",
    },
    {
      year: "2010s",
      el: "Ιατρική στο ΑΠΘ · Master διαστημικών επιστημών στην International Space University (Γαλλία)",
      en: "Medicine at Aristotle University of Thessaloniki · Master of Space Studies at the International Space University (France)",
    },
    {
      year: "2014",
      el: "14 μήνες στη βάση Concordia στην Ανταρκτική — πειράματα απομόνωσης σαν διαστημική αποστολή",
      en: "14 months at Concordia Station, Antarctica — isolation research that mirrors long spaceflight",
    },
    {
      year: "2016",
      el: "MEDES, Τουλούζη — κλινικές μελέτες μικροβαρύτητας",
      en: "MEDES, Toulouse — clinical studies that simulate spaceflight",
    },
    {
      year: "2018",
      el: "Επικεφαλής γιατρός πτήσεων της ESA στην Κολωνία · υποστήριξε 7 ευρωπαϊκές αποστολές",
      en: "Lead ESA flight surgeon in Cologne · supported seven European spaceflights",
    },
    {
      year: "2022",
      el: "Πρώτος Έλληνας που περνά και τα 6 στάδια επιλογής ESA · κορυφαίο 0,1% από 22.500 υποψηφίους",
      en: "First Greek to pass all 6 ESA astronaut-selection stages · top 0.1% of 22,500 applicants",
    },
    {
      year: "2026",
      el: "Επίσημα Project Astronaut της ESA · ανακοίνωση αποστολής στο Παρίσι (9 Σεπτεμβρίου)",
      en: "Appointed ESA Project Astronaut · mission announced in Paris (9 September)",
    },
    {
      year: "2027",
      el: "Στόχος: πρώτος Έλληνας σε τροχιά",
      en: "Target: first Greek in orbit",
    },
  ],
  facts: [
    {
      el: "Ερασιτέχνης πιλότος, δύτης και ιστιοπλόος",
      en: "Holds private pilot, diving and sailing licences",
    },
    {
      el: "Αγαπά την αστροφωτογραφία — φωτογραφία του στην Ανταρκτική έγινε NASA APOD (2015)",
      en: "Astrophotographer — an Antarctic photo of his was NASA Astronomy Picture of the Day (2015)",
    },
    {
      el: "Πάνω από 150 δημόσιες ομιλίες για την επιστήμη",
      en: "More than 150 public science talks",
    },
    {
      el: "Συνεργάτης του Ελληνικού Κέντρου Διαστήματος (ΕΛΚΕΔ)",
      en: "Collaborator with the Hellenic Space Center (HSC / ELKED)",
    },
  ] satisfies { el: string; en: string }[],
};

export const crew = [
  {
    id: "pesquet",
    name: { el: "Τόμας Πέσκε", en: "Thomas Pesquet" } satisfies Localized,
    nation: { el: "Γαλλία", en: "France" } satisfies Localized,
    flag: "🇫🇷",
    role: { el: "Διοικητής", en: "Commander" } satisfies Localized,
    bio: {
      el: "Βετεράνος της ESA με 396 ημέρες σε τροχιά σε δύο αποστολές (Proxima 2016, Alpha 2021). Πρώτος Γάλλος διοικητής του ISS. Έξι διαστημικούς περιπάτους. Τρίτη του πτήση.",
      en: "ESA veteran with 396 days in orbit across two missions (Proxima 2016, Alpha 2021). First French ISS commander. Six spacewalks. This will be his third flight.",
    } satisfies Localized,
    kids: {
      el: "Ο Τόμας είναι ο έμπειρος καπετάνιος. Έχει ζήσει σχεδόν έναν χρόνο στο Διάστημα.",
      en: "Thomas is the experienced captain. He has already lived almost a year in space.",
    } satisfies Localized,
  },
  {
    id: "svoboda",
    name: { el: "Άλες Σβόμποντα", en: "Aleš Svoboda" } satisfies Localized,
    nation: { el: "Τσεχία", en: "Czechia" } satisfies Localized,
    flag: "🇨🇿",
    role: { el: "Πιλότος", en: "Pilot" } satisfies Localized,
    bio: {
      el: "Πιλότος μαχητικών της τσεχικής αεροπορίας και Project Astronaut της ESA (επιλογή 2022). Θα γίνει ο πρώτος Τσέχος στον ISS (δεύτερος Τσέχος σε τροχιά μετά τον Βλαντιμίρ Ρέμεκ το 1978). Λίγοι Ευρωπαίοι είναι πιστοποιημένοι πιλότοι Dragon.",
      en: "Czech Air Force fighter pilot and ESA Project Astronaut (class of 2022). Set to be the first Czech on the ISS (second Czech in orbit after Vladimír Remek in 1978). Few Europeans are certified Dragon pilots.",
    } satisfies Localized,
    kids: {
      el: "Ο Άλες πετά μαχητικά αεροπλάνα και θα πιλοτάρει το Dragon — σαν οδηγός του διαστημοπλοίου.",
      en: "Aleš flies fighter jets, and he will fly the Dragon — like the spacecraft’s driver.",
    } satisfies Localized,
  },
  {
    id: "golemis",
    name: { el: "Αδριανός Γολέμης", en: "Adrianos Golemis" } satisfies Localized,
    nation: { el: "Ελλάδα", en: "Greece" } satisfies Localized,
    flag: "🇬🇷",
    role: { el: "Ειδικός αποστολής", en: "Mission specialist" } satisfies Localized,
    bio: {
      el: "Πρώτος Έλληνας αστροναύτης. Γιατρός που φρόντιζε Ευρωπαίους αστροναύτες — τώρα πετά ο ίδιος. Θα τρέξει ελληνικά πειράματα σε ιατρική, φυσιολογία, αγροδιατροφή, υλικά και αισθητήρες.",
      en: "First Greek astronaut. The doctor who cared for European astronauts now flies himself. He will run Greek experiments in medicine, physiology, agri-food, materials and sensors.",
    } satisfies Localized,
    kids: {
      el: "Ο Αδριανός είναι ο δικός μας ήρωας. Θα κάνει επιστημονικά πειράματα για την Ελλάδα.",
      en: "Adrianos is Greece’s astronaut. He will do science experiments for Greece.",
    } satisfies Localized,
  },
  {
    id: "tba",
    name: { el: "Τέταρτο μέλος", en: "Fourth crewmember" } satisfies Localized,
    nation: { el: "Θα ανακοινωθεί", en: "To be announced" } satisfies Localized,
    flag: "✦",
    role: { el: "Θέση ανοιχτή", en: "Seat open" } satisfies Localized,
    bio: {
      el: "Το Dragon πετά με πλήρωμα έως τεσσάρων. Το τέταρτο όνομα δεν έχει ανακοινωθεί ακόμη.",
      en: "Dragon flies a crew of up to four. The fourth name has not been announced yet.",
    } satisfies Localized,
    kids: {
      el: "Λείπει ακόμα ένα όνομα στην ομάδα. Θα το μάθουμε σύντομα!",
      en: "One seat is still a mystery. We will learn the name soon!",
    } satisfies Localized,
  },
];

export const vehicle = {
  rocket: "Falcon 9",
  capsule: "Crew Dragon",
  station: "International Space Station",
  altitude: { el: "~400 χλμ", en: "~400 km" } satisfies Localized,
  speed: { el: "~28.000 χλμ/ώρα", en: "~28,000 km/h" } satisfies Localized,
  orbitTime: { el: "~90 λεπτά / μία περιφορά", en: "~90 minutes per orbit" } satisfies Localized,
  points: [
    {
      el: "Εκτόξευση με Falcon 9 από τη Φλόριντα",
      en: "Falcon 9 launch from Florida",
    },
    {
      el: "Το πλήρωμα ταξιδεύει στο Crew Dragon — επαναχρησιμοποιούμενη κάψουλα",
      en: "Crew rides Crew Dragon — a reusable capsule",
    },
    {
      el: "Ραντεβού και πρόσδεση στον Διεθνή Διαστημικό Σταθμό",
      en: "Rendezvous and docking at the International Space Station",
    },
    {
      el: "Επιστροφή με προσθαλάσσωση στον ωκεανό",
      en: "Return with a splashdown in the ocean",
    },
  ] satisfies { el: string; en: string }[],
  kids: {
    el: "Φαντάσου ένα ασανσέρ προς τα άστρα: ένας πύραυλος σε ανεβάζει, ένα λευκό διαστημόπλοιο σε πάει στον σταθμό που γυρίζει τη Γη κάθε ενάμιση ώρα, και μετά γυρίζεις με αλεξίπτωτα στη θάλασσα.",
    en: "Think of a lift to the stars: a rocket lifts you, a white spaceship takes you to a station that circles Earth every hour and a half, then parachutes bring you home to the sea.",
  } satisfies Localized,
};

export const helpsGreece: { title: Localized; body: Localized; kids: Localized }[] = [
  {
    title: { el: "Ελληνικά πειράματα σε τροχιά", en: "Greek experiments in orbit" },
    body: {
      el: "Η αποστολή θα μεταφέρει πειράματα και τεχνολογικές επιδείξεις από ελληνικά πανεπιστήμια, ερευνητικά κέντρα και εταιρείες: ιατρική, ανθρώπινη φυσιολογία, αγροδιατροφή, υλικά και αισθητήρες.",
      en: "The mission will carry experiments and technology demonstrations from Greek universities, labs and companies: medicine, human physiology, agri-food, materials and sensors.",
    },
    kids: {
      el: "Έλληνες επιστήμονες στέλνουν πειράματα στο Διάστημα — σαν εργαστήριο που επιπλέει πάνω από τη Γη.",
      en: "Greek scientists send experiments to space — a laboratory floating above Earth.",
    },
  },
  {
    title: { el: "Γνώση που γυρίζει σπίτι", en: "Knowledge that returns home" },
    body: {
      el: "Ο Γολέμης το είπε καθαρά: ό,τι αναπτύσσεται για αστροναύτες — μικροδορυφόροι, αισθητήρες υγείας, τηλεϊατρική — στόχος είναι να επιστρέψει στην Ελλάδα, ακόμη και σε απομακρυσμένες κοινότητες.",
      en: "Golemis has said it plainly: whatever is built for astronauts — microsatellites, health sensors, telemedicine — should return to Greece, including remote communities.",
    },
    kids: {
      el: "Τα εργαλεία του Διαστήματος βοηθούν και στη Γη: γιατροί από μακριά, δορυφόροι για φωτιές, καλύτερα φαγητά.",
      en: "Space tools help on Earth too: doctors from far away, satellites for wildfires, better food.",
    },
  },
  {
    title: { el: "Βιομηχανία και θέσεις εργασίας", en: "Industry and jobs" },
    body: {
      el: "Το πρόγραμμα HELLAS-SPACE 2.0 (€350 εκατ. από το Ταμείο Ανάκαμψης) και το εργοστάσιο μικροδορυφόρων ICEYE στην Ελλάδα (έως ~250 θέσεις) δείχνουν ότι η πτήση δεν είναι μόνο συμβολική — είναι μοχλός βιομηχανίας.",
      en: "HELLAS-SPACE 2.0 (€350 million from the Recovery Fund) and ICEYE’s planned microsatellite factory in Greece (up to ~250 jobs) show the flight is not only symbolic — it is an industrial lever.",
    },
    kids: {
      el: "Η Ελλάδα φτιάχνει δορυφόρους και νέες δουλειές για μηχανικούς, γιατρούς και μαθητές.",
      en: "Greece is building satellites and new jobs for engineers, doctors and students.",
    },
  },
  {
    title: { el: "Έμπνευση για τη νέα γενιά", en: "Inspiration for the next generation" },
    body: {
      el: "Πανελλήνιο μαθητικό πρόγραμμα μικροδορυφόρων, διαγωνισμοί STEM και ερωτήσεις μαθητών προς τον ISS. Ένας Έλληνας με ελληνική σημαία στο μανίκι αλλάζει τι θεωρούν δυνατό τα παιδιά.",
      en: "A nationwide student microsatellite programme, STEM contests, and pupil questions to the ISS. A Greek with the flag on his sleeve changes what children think is possible.",
    },
    kids: {
      el: "Αν ο Αδριανός από τη Λάρισα μπορεί, μπορείς κι εσύ να γίνεις επιστήμονας, μηχανικός ή αστροναύτης.",
      en: "If Adrianos from Larissa can do it, you can become a scientist, engineer or astronaut too.",
    },
  },
  {
    title: { el: "Η Ελλάδα στον χάρτη", en: "Greece on the map" },
    body: {
      el: "Μέλος ESA, εταίρος των Artemis Accords, δορυφορικός στόλος και τώρα ανθρώπινη πτήση. Ο διοικητής της NASA Τζάρεντ Άιζακμαν συνεχάρη την Ελλάδα για τον ρόλο της στη χαμηλή γήινη τροχιά.",
      en: "ESA member, Artemis Accords partner, a national satellite fleet, and now human flight. NASA Administrator Jared Isaacman congratulated Greece on its role in low Earth orbit.",
    },
    kids: {
      el: "Η ελληνική σημαία μπαίνει στη λέσχη των χωρών που έχουν στείλει άνθρωπο στο Διάστημα.",
      en: "The Greek flag joins the club of countries that have sent a person to space.",
    },
  },
];

export const similarMissions = [
  {
    year: "2019",
    flag: "🇦🇪",
    title: { el: "ΗΑΕ — Χαζά Αλ Μανσούρι", en: "UAE — Hazzaa Al Mansoori" },
    detail: {
      el: "Πρώτος Εμιρατινός / Άραβας στον ISS (8 ημέρες, Soyuz). Σλόγκαν «Φιλοδοξία του Ζάγεντ». Τα ΗΑΕ έγιναν η 19η χώρα με αστροναύτη στον σταθμό.",
      en: "First Emirati / Arab on the ISS (8 days, Soyuz). Slogan “Zayed’s Ambition”. The UAE became the 19th country with an astronaut on station.",
    },
  },
  {
    year: "2023",
    flag: "🇦🇪",
    title: { el: "ΗΑΕ — Σουλτάν Αλ Νεγιάντι", en: "UAE — Sultan Al Neyadi" },
    detail: {
      el: "6 μήνες στον ISS, πρώτος Άραβας σε διαστημικό περίπατο. Από την πρώτη σύντομη πτήση στην ώριμη επιστημονική παρουσία.",
      en: "Six months on the ISS, first Arab to walk in space. From a short first flight to a mature science stay.",
    },
  },
  {
    year: "2023",
    flag: "🇸🇦",
    title: { el: "Σαουδική Αραβία — Axiom-2", en: "Saudi Arabia — Axiom-2" },
    detail: {
      el: "Ραϊγιάνα Μπαρνάουι και Άλι Αλ Κάρνι σε εμπορική πτήση Dragon. Νέες χώρες μπαίνουν μέσω εμπορικών εταίρων, όχι μόνο κρατικών πυραύλων.",
      en: "Rayyanah Barnawi and Ali AlQarni on a commercial Dragon flight. New countries now enter through commercial partners, not only national rockets.",
    },
  },
  {
    year: "2024",
    flag: "🇹🇷",
    title: { el: "Τουρκία — Αλπέρ Γκεζεραβτζί", en: "Türkiye — Alper Gezeravcı" },
    detail: {
      el: "Πρώτος Τούρκος αστροναύτης σε εμπορική αποστολή Axiom. Περιφερειακός ανταγωνισμός και συνεργασία τρέχουν μαζί.",
      en: "First Turkish astronaut on an Axiom commercial mission. Regional competition and cooperation run together.",
    },
  },
  {
    year: "2025",
    flag: "🇵🇱",
    title: { el: "Πολωνία — αποστολή IGNIS", en: "Poland — IGNIS mission" },
    detail: {
      el: "Ο Σουάβοζ Ουζνάνσκι-Βισνιέφσκι πέταξε ως Project Astronaut της ESA. Ίδιο μοντέλο με Ελλάδα: κράτος-μέλος ESA αγοράζει θέση μέσω εμπορικής πτήσης.",
      en: "Sławosz Uznański-Wiśniewski flew as an ESA Project Astronaut. Same model as Greece: an ESA member state buys a seat on a commercial flight.",
    },
  },
  {
    year: "2026–27",
    flag: "🇨🇿",
    title: { el: "Τσεχία — Άλες Σβόμποντα", en: "Czechia — Aleš Svoboda" },
    detail: {
      el: "Η ίδια πτήση Vast: η Τσεχία πετά πιλότο, η Ελλάδα ειδικό αποστολής, η Γαλλία διοικητή. Τρεις χώρες ESA, ένα Dragon.",
      en: "The same Vast flight: Czechia flies the pilot, Greece the mission specialist, France the commander. Three ESA nations, one Dragon.",
    },
  },
];

export const launchLeaders = [
  { id: "us", flag: "🇺🇸", name: { el: "Ηνωμένες Πολιτείες", en: "United States" }, launches: 2424, note: { el: "NASA + SpaceX + εμπορικό οικοσύστημα", en: "NASA + SpaceX + commercial ecosystem" } },
  { id: "su", flag: "🟥", name: { el: "Σοβιετική Ένωση (ιστ.)", en: "Soviet Union (hist.)" }, launches: 2368, note: { el: "1957–1991", en: "1957–1991" } },
  { id: "ru", flag: "🇷🇺", name: { el: "Ρωσία", en: "Russia" }, launches: 1014, note: { el: "Roscosmos, Soyuz, ISS", en: "Roscosmos, Soyuz, ISS" } },
  { id: "cn", flag: "🇨🇳", name: { el: "Κίνα", en: "China" }, launches: 796, note: { el: "CNSA, Tiangong, Chang'e", en: "CNSA, Tiangong, Chang’e" } },
  { id: "eu", flag: "🇪🇺", name: { el: "Ευρώπη (Arianespace/ESA)", en: "Europe (Arianespace/ESA)" }, launches: 335, note: { el: "Ariane, Vega — και η Ελλάδα ως μέλος ESA", en: "Ariane, Vega — Greece flies as an ESA member" } },
  { id: "jp", flag: "🇯🇵", name: { el: "Ιαπωνία", en: "Japan" }, launches: 145, note: { el: "JAXA", en: "JAXA" } },
  { id: "in", flag: "🇮🇳", name: { el: "Ινδία", en: "India" }, launches: 102, note: { el: "ISRO, Chandrayaan", en: "ISRO, Chandrayaan" } },
  { id: "nz", flag: "🇳🇿", name: { el: "Νέα Ζηλανδία", en: "New Zealand" }, launches: 82, note: { el: "Rocket Lab — νέος παίκτης", en: "Rocket Lab — a new player" } },
];

export const agencies = [
  { rank: 1, flag: "🇺🇸", name: "NASA", budget: "$25.4B", why: { el: "Artemis, πλήρωμα, επιστήμη βαθιού διαστήματος", en: "Artemis, crew, deep-space science" } },
  { rank: 2, flag: "🇨🇳", name: "CNSA", budget: "~$14B", why: { el: "Tiangong, Σελήνη, υψηλή συχνότητα εκτοξεύσεων", en: "Tiangong, Moon, highest launch cadence" } },
  { rank: 3, flag: "🇪🇺", name: "ESA", budget: "€7.8B", why: { el: "Η πύλη της Ελλάδας στο πλήρωμα και στην επιστήμη", en: "Greece’s gateway to crew and science" } },
  { rank: 4, flag: "🇷🇺", name: "Roscosmos", budget: "$3.6B", why: { el: "Soyuz, ISS, ιστορική ισχύς", en: "Soyuz, ISS, historic strength" } },
  { rank: 5, flag: "🇫🇷", name: "CNES", budget: "€3.3B", why: { el: "Εθνικός πυλώνας της Ευρώπης", en: "A national pillar of Europe" } },
  { rank: 6, flag: "🇯🇵", name: "JAXA", budget: "$3.2B", why: { el: "Hayabusa, ISS, Σελήνη", en: "Hayabusa, ISS, Moon" } },
  { rank: 7, flag: "🇩🇪", name: "DLR", budget: "€2.6B", why: { el: "Έρευνα και βιομηχανία", en: "Research and industry" } },
  { rank: 8, flag: "🇮🇳", name: "ISRO", budget: "$1.9B", why: { el: "Χαμηλό κόστος, υψηλή φιλοδοξία", en: "Low cost, high ambition" } },
];

export const newcomers = [
  {
    id: "uae",
    flag: "🇦🇪",
    name: { el: "Ηνωμένα Αραβικά Εμιράτα", en: "United Arab Emirates" },
    since: "2014",
    headline: {
      el: "Από μηδέν οργανισμό (2014) σε όχημα στον Άρη (2021) και στόχο top-10 ως το 2031.",
      en: "From no agency (2014) to a spacecraft at Mars (2021) and a top-10 goal by 2031.",
    },
    points: {
      el: [
        "Hope Probe σε τροχιά Άρη από το 2021",
        "Δύο αστροναύτες: Αλ Μανσούρι (2019) και Αλ Νεγιάντι (2023, 6 μήνες + περίπατος)",
        "Στρατηγική Άρη 2117 και συμμετοχή στο Lunar Gateway",
        "MBR Explorer προς τη ζώνη αστεροειδών (εκτόξευση ~2028)",
      ],
      en: [
        "Hope Probe in Mars orbit since 2021",
        "Two astronauts: Al Mansoori (2019) and Al Neyadi (2023, 6 months + spacewalk)",
        "Mars 2117 strategy and Lunar Gateway partnership",
        "MBR Explorer to the asteroid belt (launch ~2028)",
      ],
    } satisfies LocalizedList,
    lesson: {
      el: "Τα ΗΑΕ δείχνουν τι κάνει μια μικρή χώρα με σαφή πολιτική, εκπαίδευση και διεθνείς συνεργασίες σε μία δεκαετία.",
      en: "The UAE shows what a small country can do in a decade with clear policy, education and international partners.",
    },
  },
  {
    id: "gr",
    flag: "🇬🇷",
    name: { el: "Ελλάδα", en: "Greece" },
    since: "ESA member · HSC",
    headline: {
      el: "Από σχεδόν μηδενική παρουσία (2019) σε δορυφόρους, €350 εκατ. πρόγραμμα και τον πρώτο Έλληνα σε τροχιά.",
      en: "From almost no presence (2019) to satellites, a €350 million programme, and the first Greek in orbit.",
    },
    points: {
      el: [
        "Ελληνικό Κέντρο Διαστήματος (ΕΛΚΕΔ) και Εθνική Στρατηγική ως το 2030/2035",
        "HELLAS-SPACE 2.0 — €350 εκατ. (Ταμείο Ανάκαμψης)",
        "Εθνικός στόλος μικροδορυφόρων · ο Υπουργός Παπαστεργίου μιλά για 18 δορυφόρους",
        "Εργοστάσιο ICEYE στην Ελλάδα · μαθητικό πρόγραμμα μικροδορυφόρων",
        "Artemis Accords · πρώτη ανθρώπινη πτήση 2027",
      ],
      en: [
        "Hellenic Space Center (HSC) and a National Space Strategy to 2030/2035",
        "HELLAS-SPACE 2.0 — €350 million (Recovery Fund)",
        "National microsatellite fleet · Minister Papastergiou cites 18 satellites",
        "ICEYE factory in Greece · student microsatellite programme",
        "Artemis Accords · first human flight in 2027",
      ],
    } satisfies LocalizedList,
    lesson: {
      el: "Η Ελλάδα δεν θα εκτοξεύει αύριο δικούς της πυραύλους. Μπορεί όμως να χτίσει δορυφόρους, επιστήμη, ιατρική και ανθρώπους — και να πετά μέσω της Ευρώπης.",
      en: "Greece will not launch its own rockets tomorrow. It can build satellites, science, medicine and people — and fly through Europe.",
    },
  },
];

export const greekNames = [
  {
    name: "Artemis",
    greek: "Άρτεμις",
    usedBy: "NASA",
    what: {
      el: "Το πρόγραμμα επιστροφής στη Σελήνη. Δίδυμη αδελφή του Απόλλωνα, θεά της Σελήνης.",
      en: "The programme to return humans to the Moon. Twin sister of Apollo, goddess of the Moon.",
    },
  },
  {
    name: "Apollo",
    greek: "Απόλλων",
    usedBy: "NASA",
    what: {
      el: "Οι αποστολές που έβαλαν ανθρώπους στη Σελήνη (1969–1972).",
      en: "The missions that landed people on the Moon (1969–1972).",
    },
  },
  {
    name: "Orion",
    greek: "Ωρίων",
    usedBy: "NASA / ESA",
    what: {
      el: "Το πλήρωμα προς τη Σελήνη. Κυνηγός της μυθολογίας, αστερισμός.",
      en: "The crew ship to the Moon. Mythic hunter and a constellation.",
    },
  },
  {
    name: "Atlas",
    greek: "Άτλας",
    usedBy: "NASA / ULA",
    what: {
      el: "Πύραυλος που «κρατά» τον ουρανό — όπως ο Τιτάνας.",
      en: "A rocket that holds up the sky — like the Titan.",
    },
  },
  {
    name: "Odyssey",
    greek: "Οδύσσεια",
    usedBy: "NASA / IM",
    what: {
      el: "Mars Odyssey και σεληνιακός προσγειωτής Odysseus. Το ταξίδι του Οδυσσέα.",
      en: "Mars Odyssey and the Odysseus lunar lander. Odysseus’s long voyage home.",
    },
  },
  {
    name: "Europa",
    greek: "Ευρώπη",
    usedBy: "NASA",
    what: {
      el: "Europa Clipper προς το φεγγάρι του Δία. Πριγκίπισσα της Φοινίκης, όνομα της ηπείρου.",
      en: "Europa Clipper to Jupiter’s icy moon. A Phoenician princess, and the name of a continent.",
    },
  },
  {
    name: "Callisto / Ganymede / Io",
    greek: "Καλλιστώ / Γανυμήδης / Ιώ",
    usedBy: "NASA",
    what: {
      el: "Τα μεγάλα φεγγάρια του Δία — όλα ελληνικά ονόματα από τον Γαλιλαίο.",
      en: "Jupiter’s great moons — all Greek names, given in Galileo’s era.",
    },
  },
  {
    name: "Hera",
    greek: "Ήρα",
    usedBy: "ESA",
    what: {
      el: "Αποστολή πλανητικής άμυνας της ESA προς αστεροειδή.",
      en: "ESA’s planetary-defence mission to an asteroid.",
    },
  },
  {
    name: "Ariane",
    greek: "Αριάδνη",
    usedBy: "ESA / Europe",
    what: {
      el: "Ο ευρωπαϊκός πύραυλος. Η Αριάδνη έδωσε τον μίτο στον Θησέα.",
      en: "Europe’s workhorse rocket. Ariadne gave Theseus the thread.",
    },
  },
  {
    name: "Helios",
    greek: "Ήλιος",
    usedBy: "NASA / Germany",
    what: {
      el: "Ηλιακές αποστολές. Ο τιτάνας του ήλιου.",
      en: "Solar missions. The Titan of the Sun.",
    },
  },
  {
    name: "Pegasus",
    greek: "Πήγασος",
    usedBy: "Northrop / NASA",
    what: {
      el: "Πύραυλος αέρος-εκτόξευσης. Το φτερωτό άλογο.",
      en: "An air-launched rocket. The winged horse.",
    },
  },
  {
    name: "Titan",
    greek: "Τιτάνας",
    usedBy: "NASA / ULA",
    what: {
      el: "Οικογένεια πυραύλων και το μεγαλύτερο φεγγάρι του Κρόνου.",
      en: "A rocket family, and Saturn’s largest moon.",
    },
  },
  {
    name: "Gemini",
    greek: "Δίδυμοι / Διόσκουροι",
    usedBy: "NASA",
    what: {
      el: "Το πρόγραμμα δύο ατόμων πριν τον Απόλλωνα. Κάστωρ και Πολυδεύκης.",
      en: "NASA’s two-person programme before Apollo. Castor and Pollux.",
    },
  },
  {
    name: "Ulysses",
    greek: "Οδυσσέας",
    usedBy: "ESA / NASA",
    what: {
      el: "Πέταξε πάνω από τους πόλους του Ήλιου. Λατινικό όνομα του Οδυσσέα.",
      en: "Flew over the poles of the Sun. The Latin name of Odysseus.",
    },
  },
  {
    name: "Prometheus",
    greek: "Προμηθέας",
    usedBy: "NASA",
    what: {
      el: "Πυρηνικό σύστημα πρόωσης. Έκλεψε τη φωτιά για τους ανθρώπους.",
      en: "A nuclear propulsion project. He stole fire for humankind.",
    },
  },
  {
    name: "Nike",
    greek: "Νίκη",
    usedBy: "US Army / NASA",
    what: {
      el: "Πρώιμοι πύραυλοι. Η θεά της νίκης — και ρίζα του ονόματος… ναι, εκείνου του αθλητικού σήματος.",
      en: "Early rockets. The goddess of victory — and the root of a famous sports name.",
    },
  },
];

export const kidsQuiz = [
  {
    q: {
      el: "Πού μεγάλωσε ο Αδριανός Γολέμης;",
      en: "Where did Adrianos Golemis grow up?",
    },
    options: {
      el: ["Λάρισα", "Αθήνα", "Ηράκλειο", "Πάτρα"],
      en: ["Larissa", "Athens", "Heraklion", "Patras"],
    },
    answer: 0,
  },
  {
    q: {
      el: "Πώς λέγεται το διαστημόπλοιο του πληρώματος;",
      en: "What is the crew spacecraft called?",
    },
    options: {
      el: ["Dragon", "Soyuz", "Orion", "Ariane"],
      en: ["Dragon", "Soyuz", "Orion", "Ariane"],
    },
    answer: 0,
  },
  {
    q: {
      el: "Πόσο ψηλά πετά περίπου ο ISS;",
      en: "About how high does the ISS fly?",
    },
    options: {
      el: ["400 χλμ", "40 χλμ", "4.000 χλμ", "Στη Σελήνη"],
      en: ["400 km", "40 km", "4,000 km", "At the Moon"],
    },
    answer: 0,
  },
  {
    q: {
      el: "Ποια θεά έδωσε το όνομά της στο νέο σεληνιακό πρόγραμμα της NASA;",
      en: "Which goddess named NASA’s new Moon programme?",
    },
    options: {
      el: ["Άρτεμις", "Αθηνά", "Ήρα", "Αφροδίτη"],
      en: ["Artemis", "Athena", "Hera", "Aphrodite"],
    },
    answer: 0,
  },
  {
    q: {
      el: "Γιατί η αποστολή ωφελεί την Ελλάδα;",
      en: "Why does the mission help Greece?",
    },
    options: {
      el: [
        "Πειράματα, έμπνευση και τεχνολογία που γυρίζει σπίτι",
        "Μόνο για φωτογραφίες",
        "Για να μετακομίσουμε όλοι στο Διάστημα",
        "Δεν ωφελεί",
      ],
      en: [
        "Experiments, inspiration, and technology that returns home",
        "Only for photos",
        "So everyone can move to space",
        "It does not help",
      ],
    },
    answer: 0,
  },
];

export const sources = [
  { label: "ESA press release, 9 Sep 2026", href: "https://www.esa.int/Newsroom/Press_Releases/ESA_signs_an_Agreement_with_Vast_on_behalf_of_Greece" },
  { label: "KeepTrack launch history by country", href: "https://keeptrack.space/launches/countries" },
  { label: "Hellenic Space Center", href: "https://hsc.gov.gr" },
];


/** Sourced public statements — do not invent quotes. Links point to primary pages. */
export const officialStatements = [
  {
    id: "aschbacher-esa",
    org: "ESA",
    speaker: "Josef Aschbacher",
    role: { el: "Γενικός διευθυντής ESA", en: "ESA Director General" },
    date: "2026-09-09",
    quote: {
      el: "This is a historic moment for Greece: a national ambition becoming a concrete human spaceflight mission. But this is also about more than one flight. Greece’s increased investment strengthens its space sector and creates a range of opportunities for a new generation of scientists and engineers. ESA is proud to help turn ambition into European capability—and now into a path to orbit.",
      en: "This is a historic moment for Greece: a national ambition becoming a concrete human spaceflight mission. But this is also about more than one flight. Greece’s increased investment strengthens its space sector and creates a range of opportunities for a new generation of scientists and engineers. ESA is proud to help turn ambition into European capability—and now into a path to orbit.",
    },
    sourceLabel: { el: "Ανακοίνωση Vast (παράθεση ESA)", en: "Vast release (ESA quote)" },
    href: "https://www.vastspace.com/updates/greece-vast-esa-first-greek-astronaut-private-mission-nasa",
    x: "https://x.com/AschbacherJosef",
  },
  {
    id: "haot-vast",
    org: "Vast",
    speaker: "Max Haot",
    role: { el: "CEO Vast", en: "Vast CEO" },
    date: "2026-09-09",
    quote: {
      el: "We’re honored to advance Greece’s space ambitions by flying the first Greek astronaut to space, a historic milestone made possible through our collaboration with NASA. This mission reflects the growing momentum behind human spaceflight programs and the expanding role of commercial partners in enabling them.",
      en: "We’re honored to advance Greece’s space ambitions by flying the first Greek astronaut to space, a historic milestone made possible through our collaboration with NASA. This mission reflects the growing momentum behind human spaceflight programs and the expanding role of commercial partners in enabling them.",
    },
    sourceLabel: { el: "Επίσημη ανακοίνωση Vast", en: "Vast official update" },
    href: "https://www.vastspace.com/updates/greece-vast-esa-first-greek-astronaut-private-mission-nasa",
    x: "https://x.com/vast",
  },
  {
    id: "papastergiou",
    org: "Greece",
    speaker: "Δημήτρης Παπαστεργίου",
    role: { el: "Υπ. Ψηφιακής Διακυβέρνησης", en: "Digital Governance Minister" },
    date: "2026-09-09",
    quote: {
      el: "Our partnership with the European Space Agency and Vast brings this effort to a historic new milestone, opening the way for Greece’s first human spaceflight… The mission will also create valuable opportunities for Greek scientific experiments and technology demonstrations in areas including medicine, human physiology, agri-food, materials and sensors.",
      en: "Our partnership with the European Space Agency and Vast brings this effort to a historic new milestone, opening the way for Greece’s first human spaceflight… The mission will also create valuable opportunities for Greek scientific experiments and technology demonstrations in areas including medicine, human physiology, agri-food, materials and sensors.",
    },
    sourceLabel: { el: "Ανακοίνωση Vast (παράθεση Υπουργείου)", en: "Vast release (Ministry quote)" },
    href: "https://www.vastspace.com/updates/greece-vast-esa-first-greek-astronaut-private-mission-nasa",
    x: undefined,
  },
  {
    id: "vast-facts",
    org: "Vast",
    speaker: "Vast",
    role: { el: "Επίσημη ενημέρωση αποστολής", en: "Official mission update" },
    date: "2026-09-09",
    quote: {
      el: "Η ESA υπέγραψε εκ μέρους της Ελλάδας συμφωνία με τη Vast για την Vast-PAM-1 στον ISS σε συνεργασία με τη NASA. Μεταφορά: SpaceX Dragon σε Falcon 9. Σχεδιασμός: 2027. Ο Δρ Αδριανός Γολέμης ως Mission Specialist υπόκειται σε έγκριση MCOP.",
      en: "ESA signed on Greece’s behalf with Vast for Vast-PAM-1 to the ISS in partnership with NASA. Transport: SpaceX Dragon on Falcon 9. Planned: 2027. Dr Adrianos Golemis as Mission Specialist, subject to MCOP approval.",
    },
    sourceLabel: { el: "Επίσημη σελίδα Vast", en: "Vast official page" },
    href: "https://www.vastspace.com/updates/greece-vast-esa-first-greek-astronaut-private-mission-nasa",
    x: "https://x.com/vast",
  },
  {
    id: "cnes-pesquet",
    org: "CNES",
    speaker: "CNES",
    role: { el: "Γαλλική διαστημική υπηρεσία", en: "French space agency" },
    date: "2026-09-09",
    quote: {
      el: "Η Vast-PAM-1 εντάσσεται σε πρωτοβουλία NASA για ιδιωτικές αποστολές αστροναυτών. Τρεις αστροναύτες ESA στο ίδιο πλήρωμα· εκπαίδευση με ομάδες Vast, SpaceX και NASA· εξέταση από το MCOP.",
      en: "Vast-PAM-1 is part of a NASA private-astronaut initiative. Three ESA astronauts on one crew; training with Vast, SpaceX and NASA teams; MCOP examination.",
    },
    sourceLabel: { el: "CNES", en: "CNES" },
    href: "https://cnes.fr/en/news/vast-pam-1-mission-french-astronaut-thomas-pesquet-begins-space-training",
    x: "https://x.com/CNES",
  },
] as const;

export const missionTimeline = [
  {
    date: "2026-06",
    el: "Choose France Summit — η Γαλλία ανακοινώνει συμφωνίες Vast για ιδιωτική αποστολή στον ISS (πλαίσιο που οδηγεί στην Vast-PAM-1).",
    en: "Choose France Summit — France announces Vast agreements for a private ISS mission (framework leading to Vast-PAM-1).",
    href: "https://www.vastspace.com/updates/greece-vast-esa-first-greek-astronaut-private-mission-nasa",
  },
  {
    date: "2026-09-09",
    el: "Παρίσι · International Space Summit — ESA υπογράφει με Vast εκ μέρους της Ελλάδας· ανακοίνωση Γολέμη ως Mission Specialist (εκκρεμεί MCOP).",
    en: "Paris · International Space Summit — ESA signs with Vast on Greece’s behalf; Golemis named Mission Specialist (pending MCOP).",
    href: "https://www.vastspace.com/updates/greece-vast-esa-first-greek-astronaut-private-mission-nasa",
  },
  {
    date: "2026-09",
    el: "Έναρξη εκπαίδευσης ΗΠΑ με ομάδες Vast, SpaceX και NASA (Falcon 9, Dragon, έκτακτες ανάγκες, στολή, προσομοιώσεις).",
    en: "US training block begins with Vast, SpaceX and NASA teams (Falcon 9, Dragon, emergencies, suit, simulations).",
    href: "https://cnes.fr/en/news/vast-pam-1-mission-french-astronaut-thomas-pesquet-begins-space-training",
  },
  {
    date: "2026–2027",
    el: "Εκκρεμεί: έγκριση MCOP, τέταρτο μέλος πληρώματος, ακριβής ημερομηνία εκτόξευσης.",
    en: "Pending: MCOP approval, fourth crewmember, exact launch date.",
    href: "https://www.vastspace.com/updates/greece-vast-esa-first-greek-astronaut-private-mission-nasa",
  },
  {
    date: "2027",
    el: "Σχεδιασμένο παράθυρο πτήσης στον ISS με SpaceX Dragon / Falcon 9 (NET summer 2027 σε δημόσιες περιγραφές).",
    en: "Planned ISS flight window on SpaceX Dragon / Falcon 9 (NET summer 2027 in public descriptions).",
    href: "https://www.vastspace.com/updates/greece-vast-esa-first-greek-astronaut-private-mission-nasa",
  },
] as const;

export const officialChannels = [
  { id: "esa", label: "ESA", href: "https://www.esa.int/", x: "https://x.com/esa" },
  { id: "nasa", label: "NASA", href: "https://www.nasa.gov/", x: "https://x.com/NASA" },
  { id: "spacex", label: "SpaceX", href: "https://www.spacex.com/", x: "https://x.com/SpaceX" },
  { id: "vast", label: "Vast", href: "https://www.vastspace.com/", x: "https://x.com/vast" },
  { id: "golemis", label: "Adrianos Golemis", href: "https://www.esa.int/", x: "https://x.com/Astrovenator" },
  { id: "pesquet", label: "Thomas Pesquet", href: "https://www.esa.int/", x: "https://x.com/Thom_astro" },
  { id: "aschbacher", label: "Josef Aschbacher", href: "https://www.esa.int/", x: "https://x.com/AschbacherJosef" },
] as const;
