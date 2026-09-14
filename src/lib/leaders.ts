import type { Localized } from "./types";

export type Leader = {
  id: string;
  name: string;
  org: Localized;
  role: Localized;
  x?: string;
  href: string;
  note: Localized;
  involved: "nasa" | "spacex" | "esa" | "vast" | "greece";
};

export const leaders: Leader[] = [
  {
    id: "isaacman",
    name: "Jared Isaacman",
    org: { el: "NASA", en: "NASA" },
    role: { el: "Διοικητής NASA", en: "NASA Administrator" },
    x: "https://x.com/NASA",
    href: "https://www.nasa.gov/",
    involved: "nasa",
    note: {
      el: "Συνεχάρη την Ελλάδα για την ιδιωτική αποστολή στον ISS και τον ρόλο της στα Artemis Accords.",
      en: "Congratulated Greece on the private ISS mission and its Artemis Accords role.",
    },
  },
  {
    id: "spacex",
    name: "SpaceX",
    org: { el: "SpaceX", en: "SpaceX" },
    role: { el: "Μεταφορά · Falcon 9 + Dragon", en: "Transport · Falcon 9 + Dragon" },
    x: "https://x.com/SpaceX",
    href: "https://www.spacex.com/",
    involved: "spacex",
    note: {
      el: "Το πλήρωμα πετά Crew Dragon από τη Φλόριντα. Οι ενημερώσεις εκτόξευσης βγαίνουν από εδώ.",
      en: "The crew rides Crew Dragon from Florida. Launch updates come from here.",
    },
  },
  {
    id: "aschbacher",
    name: "Josef Aschbacher",
    org: { el: "ESA", en: "ESA" },
    role: { el: "Γενικός διευθυντής ESA", en: "ESA Director General" },
    x: "https://x.com/AschbacherJosef",
    href: "https://www.esa.int/",
    involved: "esa",
    note: {
      el: "Υπέγραψε τη συμφωνία Vast εκ μέρους της Ελλάδας — «ιστορική στιγμή».",
      en: "Signed the Vast agreement on Greece’s behalf — a “historic moment.”",
    },
  },
  {
    id: "haot",
    name: "Max Haot",
    org: { el: "Vast", en: "Vast" },
    role: { el: "CEO Vast", en: "Vast CEO" },
    href: "https://www.vastspace.com/",
    involved: "vast",
    note: {
      el: "Η Vast πετά την ιδιωτική αποστολή που ανέθεσε η NASA — θέση για τον Γολέμη.",
      en: "Vast flies the NASA-awarded private mission — Golemis’s seat.",
    },
  },
  {
    id: "pesquet",
    name: "Thomas Pesquet",
    org: { el: "ESA", en: "ESA" },
    role: { el: "Διοικητής αποστολής", en: "Mission commander" },
    x: "https://x.com/Thom_astro",
    href: "https://www.esa.int/Science_Exploration/Human_and_Robotic_Exploration/Astronauts/Thomas_Pesquet",
    involved: "esa",
    note: {
      el: "Βετεράνος διοικητής ISS. Ακολουθεί συχνά την εκπαίδευση και την πτήση στο X.",
      en: "Veteran ISS commander. Often posts training and flight notes on X.",
    },
  },
  {
    id: "golemis",
    name: "Adrianos Golemis",
    org: { el: "ESA / Ελλάδα", en: "ESA / Greece" },
    role: { el: "Ειδικός αποστολής", en: "Mission specialist" },
    x: "https://x.com/Astrovenator",
    href: "https://www.esa.int/",
    involved: "greece",
    note: {
      el: "Ο ίδιος ο γιατρός-αστροναύτης. Πρωτογενής πηγή για εκπαίδευση και πειράματα.",
      en: "The doctor-astronaut himself. Primary source for training and experiments.",
    },
  },
  {
    id: "papastergiou",
    name: "Δημήτρης Παπαστεργίου",
    org: { el: "Ελληνική κυβέρνηση", en: "Hellenic government" },
    role: { el: "Υπ. Ψηφιακής Διακυβέρνησης", en: "Digital Governance Minister" },
    href: "https://mindigital.gr/",
    involved: "greece",
    note: {
      el: "HELLAS-SPACE, δορυφόροι και η εθνική γραμμή για την πρώτη πτήση.",
      en: "HELLAS-SPACE, satellites, and the national line on the first flight.",
    },
  },
];

export const streams = [
  {
    id: "iss-earth",
    org: "nasa" as const,
    el: "ISS · Γη (NASA)",
    en: "ISS · Earth (NASA)",
    src: "https://www.youtube.com/embed/awQzjn72bI0",
    credit: "NASA",
  },
  {
    id: "iss-4k",
    org: "nasa" as const,
    el: "ISS · Γη 4K (Sen)",
    en: "ISS · Earth 4K (Sen)",
    src: "https://www.youtube.com/embed/fO9e9jnhYK8",
    credit: "Sen / NASA downlink",
  },
  {
    id: "iss-crew",
    org: "nasa" as const,
    el: "ISS · πλήρωμα (NASA)",
    en: "ISS · crew (NASA)",
    src: "https://www.youtube.com/embed/M3HKLzjvKPc",
    credit: "NASA",
  },
  {
    id: "nasa-tv",
    org: "nasa" as const,
    el: "NASA TV",
    en: "NASA TV",
    src: "https://www.youtube.com/embed/21X5lGlDOfg",
    credit: "NASA",
  },
  {
    id: "spacex",
    org: "spacex" as const,
    el: "SpaceX live (όταν υπάρχει εκτόξευση)",
    en: "SpaceX live (when a launch is on)",
    src: "https://www.youtube.com/embed/live_stream?channel=UCtI0Hodo5o5dUb67FeUjDeA",
    credit: "SpaceX",
  },
];
