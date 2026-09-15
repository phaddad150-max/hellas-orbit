import type { Localized } from "./types";

export const hellenicAdds: { title: Localized; body: Localized }[] = [
  {
    title: { el: "Δορυφόροι ήδη", en: "Satellites already" },
    body: {
      el: "ΕΛΚΕΔ και εθνικό πρόγραμμα μικροδορυφόρων: μάτια στη Γη (φωτιές, θάλασσα, γεωργία).",
      en: "HSC and the national microsatellite programme: Earth eyes (fires, sea, farms).",
    },
  },
  {
    title: { el: "HELLAS-SPACE 2.0", en: "HELLAS-SPACE 2.0" },
    body: {
      el: "Εθνικό πρόγραμμα μέσω ESA — βιομηχανία και υπηρεσίες, όχι μόνο μία πτήση.",
      en: "National programme via ESA — industry and services, not only one flight.",
    },
  },
  {
    title: { el: "Τι προσθέτει αυτή η πτήση", en: "What this flight adds" },
    body: {
      el: "Πρώτο ελληνικό όνομα σε ISS (υπό MCOP), πειράματα μικροβαρύτητας, γιατροί και STEM πίσω στην Ελλάδα.",
      en: "A named Greek on ISS (pending MCOP), microgravity experiments, medicine and STEM returning home.",
    },
  },
];

export const personChips: Localized[] = [
  { el: "Γιατρός πτήσεων ESA", en: "ESA flight surgeon" },
  { el: "Ερασιτέχνης πιλότος / δύτης / ιστιοπλόος", en: "Amateur pilot / diver / sailor" },
  { el: "Ανταρκτική · NASA APOD 2015", en: "Antarctica · NASA APOD 2015" },
  { el: "150+ ομιλίες", en: "150+ talks" },
  { el: "Συνεργάτης ΕΛΚΕΔ", en: "HSC collaborator" },
];

export const flightSteps: { n: number; title: Localized; body: Localized }[] = [
  {
    n: 1,
    title: { el: "Πλάτωμα Φλόριντα", en: "Pad Florida" },
    body: {
      el: "Το πλήρωμα επιβιβάζεται στο Dragon πάνω στο Falcon 9.",
      en: "Crew boards Dragon on Falcon 9.",
    },
  },
  {
    n: 2,
    title: { el: "Εκτόξευση", en: "Liftoff" },
    body: {
      el: "Το Falcon 9 ανεβαίνει· το πρώτο στάδιο προσγειώνεται χωριστά· το Dragon αποχωρίζεται.",
      en: "Falcon 9 climbs; first stage lands separately; Dragon separates.",
    },
  },
  {
    n: 3,
    title: { el: "Ραντεβού", en: "Rendezvous" },
    body: {
      el: "Οι προωθητήρες του Dragon κυνηγούν τον ISS (51,6° LEO). Όχι πλοήγηση Falcon 9.",
      en: "Dragon thrusters chase ISS (51.6° LEO). Not Falcon 9 navigation.",
    },
  },
  {
    n: 4,
    title: { el: "Πρόσδεση", en: "Dock" },
    body: {
      el: "Θύρα ISS, έλεγχοι καταπακτής.",
      en: "ISS port, hatch checks.",
    },
  },
  {
    n: 5,
    title: { el: "Στον σταθμό", en: "On station" },
    body: {
      el: "Εργασία και πειράματα, έως ~14 ημέρες δεμένο.",
      en: "Work and experiments, up to ~14 days docked.",
    },
  },
  {
    n: 6,
    title: { el: "Επιστροφή", en: "Home" },
    body: {
      el: "Αποδέσμευση, επανείσοδος, προσθαλάσσωση· ανάκτηση SpaceX.",
      en: "Undock, re-entry, ocean splashdown; SpaceX recovery.",
    },
  },
];

export const groundTeams: {
  id: string;
  title: Localized;
  body: Localized;
}[] = [
  {
    id: "spacex",
    title: { el: "SpaceX", en: "SpaceX" },
    body: {
      el: "Πύραυλος, κάψουλα, ανάκτηση.",
      en: "Rocket, capsule, recovery.",
    },
  },
  {
    id: "nasa",
    title: { el: "NASA", en: "NASA" },
    body: {
      el: "PAM και Διεθνής Διαστημικός Σταθμός.",
      en: "PAM and the ISS.",
    },
  },
  {
    id: "vast",
    title: { el: "Vast", en: "Vast" },
    body: {
      el: "Ενσωματωτής της ιδιωτικής αποστολής.",
      en: "Private-mission integrator.",
    },
  },
  {
    id: "esa",
    title: { el: "ESA / Ελλάδα", en: "ESA / Greece" },
    body: {
      el: "Πλήρωμα και πειράματα.",
      en: "Crew and experiments.",
    },
  },
];

export const openLights: { id: string; el: string; en: string }[] = [
  { id: "mcop", el: "MCOP", en: "MCOP" },
  { id: "seat4", el: "4η θέση", en: "4th seat" },
  { id: "date", el: "Ακριβής ημερομηνία", en: "Exact date" },
];

export const sources = [
  {
    el: "ESA PR — συμφωνία Vast για την Ελλάδα",
    en: "ESA PR — Vast agreement for Greece",
    href: "https://www.esa.int/Newsroom/Press_Releases/ESA_signs_an_Agreement_with_Vast_on_behalf_of_Greece",
  },
  {
    el: "NASA — επιλογή Vast για PAM-6",
    en: "NASA — Vast selected for PAM-6",
    href: "https://www.nasa.gov/news-release/nasa-selects-vast-for-sixth-private-mission-to-space-station/",
  },
  {
    el: "Vast — ενημέρωση αποστολής",
    en: "Vast — mission update",
    href: "https://www.vastspace.com/",
  },
];

export const greeceTiles: {
  id: string;
  title: Localized;
  body: Localized;
  href: string;
  external?: boolean;
}[] = [
  {
    id: "astro",
    title: { el: "Υποψήφιος αστροναύτης", en: "Named astronaut" },
    body: {
      el: "Γολέμης, PAM-6 / Vast-PAM-1, MCOP, NET 2027.",
      en: "Golemis, PAM-6 / Vast-PAM-1, MCOP, NET 2027.",
    },
    href: "/mission",
  },
  {
    id: "hsc",
    title: { el: "Ελληνικό Κέντρο Διαστήματος", en: "Hellenic Space Center" },
    body: { el: "ΕΛΚΕΔ — εθνικός φορέας.", en: "HSC — national agency." },
    href: "https://hsc.gov.gr/",
    external: true,
  },
  {
    id: "micro",
    title: { el: "Εθνικό πρόγραμμα μικροδορυφόρων", en: "National Microsatellite Program" },
    body: {
      el: "Πρόγραμμα μικροδορυφόρων.",
      en: "National microsatellite programme.",
    },
    href: "https://ggtt.mindigital.gr/en/section/space/microsatellites",
    external: true,
  },
  {
    id: "hs2",
    title: { el: "HELLAS-SPACE 2.0", en: "HELLAS-SPACE 2.0" },
    body: {
      el: "Εθνικό πρόγραμμα ΕΛΚΕΔ.",
      en: "HSC national programme.",
    },
    href: "https://hsc.gov.gr/",
    external: true,
  },
  {
    id: "bic",
    title: { el: "ESA BIC Greece", en: "ESA BIC Greece" },
    body: {
      el: "Επιχειρηματικό κέντρο ESA.",
      en: "ESA business incubator.",
    },
    href: "https://esa-bic.gr/",
    external: true,
  },
  {
    id: "orgs",
    title: { el: "Ελληνικοί φορείς", en: "Greek space organisations" },
    body: {
      el: "Οικοσύστημα διαστήματος.",
      en: "National space ecosystem.",
    },
    href: "https://hsc.gov.gr/en/space-ecosystem-2/greek-space-organizations/",
    external: true,
  },
  {
    id: "esa-pr",
    title: { el: "ESA PR Ελλάδας", en: "ESA Greece mission PR" },
    body: {
      el: "Συμφωνία Vast, 9 Σεπ 2026.",
      en: "Vast agreement, 9 Sep 2026.",
    },
    href: "https://www.esa.int/Newsroom/Press_Releases/ESA_signs_an_Agreement_with_Vast_on_behalf_of_Greece",
    external: true,
  },
  {
    id: "nasa-pam",
    title: { el: "NASA PAM-6", en: "NASA PAM-6" },
    body: {
      el: "Επιλογή Vast, 12 Φεβ 2026.",
      en: "Vast selected, 12 Feb 2026.",
    },
    href: "https://www.nasa.gov/news-release/nasa-selects-vast-for-sixth-private-mission-to-space-station/",
    external: true,
  },
];
