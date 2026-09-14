import type { Lang } from "./types";

/** Primary nav — Live & Future demoted (Live empty/dead-end; Future linked from Landscape). */
export const nav = [
  { href: "/", el: "Αρχική", en: "Home" },
  { href: "/first-greek", el: "Ο πρώτος Έλληνας", en: "The first Greek" },
  { href: "/mission", el: "Αποστολή", en: "Mission" },
  { href: "/crew", el: "Πλήρωμα", en: "Crew" },
  { href: "/landscape", el: "Η Ελλάδα στο Διάστημα", en: "Greece in Space" },
] as const;

export const ui = {
  brand: { el: "Ελλάδα σε τροχιά", en: "Hellas Orbit" },
  brandEn: "Hellas Orbit",
  opsTitle: { el: "NASA · SpaceX · ηγέτες", en: "NASA · SpaceX · leaders" },
  opsLead: {
    el: "Ενημερώσεις από όσους πετούν αυτή την αποστολή — NASA, SpaceX, ESA, Vast — και σύνδεσμοι X.",
    en: "Updates from those flying this mission — NASA, SpaceX, ESA, Vast — and their X links.",
  },
  pulseTitle: { el: "Τι λέει ο κόσμος", en: "What people are saying" },
  pulseEmpty: {
    el: "Παλμός X όταν συνδεθεί το κλειδί. Μέχρι τότε, επίσημες ενημερώσεις στον πίνακα NASA · SpaceX.",
    en: "X pulse appears when an API key is set. Until then, use the NASA · SpaceX board.",
  },
  streamCredit: {
    el: "Ζωντανή εικόνα NASA / SpaceX — όχι κάμερα SpaceXAI.",
    en: "Live NASA / SpaceX picture — not a SpaceXAI satellite camera.",
  },
  live: { el: "ΖΩΝΤΑΝΑ", en: "LIVE" },
  pending: { el: "Σε εξέλιξη", en: "In progress" },
  explore: { el: "Εξερεύνησε", en: "Explore" },
  learnMore: { el: "Μάθε περισσότερα", en: "Learn more" },
  sources: { el: "Πηγές", en: "Sources" },
  illustration: {
    el: "Εικονογράφηση · όχι φωτογραφία του προσώπου",
    en: "Illustration · not a portrait of the person",
  },
  netNote: {
    el: "Η ημερομηνία είναι το νωρίτερο παράθυρο (καλοκαίρι 2027), όχι επιβεβαιωμένη εκτόξευση.",
    en: "The date is the earliest window (summer 2027), not a confirmed launch.",
  },
  issNow: { el: "Ο ISS τώρα", en: "ISS right now" },
  lat: { el: "Γεωγραφικό πλάτος", en: "Latitude" },
  lon: { el: "Γεωγραφικό μήκος", en: "Longitude" },
  alt: { el: "Ύψος", en: "Altitude" },
  vel: { el: "Ταχύτητα", en: "Speed" },
  over: { el: "Περνά πάνω από", en: "Passing over" },
  tapStar: { el: "Πάτα ένα αστέρι", en: "Tap a star" },
  rankingLaunches: {
    el: "Ιστορικές τροχιακές εκτοξεύσεις (κρατική βάση εκτόξευσης)",
    en: "Historical orbital launches (by launching state)",
  },
  rankingAgencies: {
    el: "Κορυφαίες υπηρεσίες 2026 (προϋπολογισμός & ικανότητα)",
    en: "Top agencies 2026 (budget & capability)",
  },
  asOf: {
    el: "Στοιχεία εκτοξεύσεων KeepTrack, 14 Σεπ 2026. Προϋπολογισμοί υπηρεσιών: δημόσιες εκτιμήσεις Σεπ 2026.",
    en: "Launch totals: KeepTrack, 14 Sep 2026. Agency budgets: public estimates, Sep 2026.",
  },
  sticker: { el: "Κέρδισες αστέρι!", en: "You earned a star!" },
  quizTitle: { el: "Κουίζ μικρού αστροναύτη", en: "Young astronaut quiz" },
  nextQ: { el: "Επόμενη", en: "Next" },
  again: { el: "Ξανά", en: "Again" },
  score: { el: "Σκορ", en: "Score" },
  compare: { el: "Η Ελλάδα στο Διάστημα", en: "Greece in space" },
  days: { el: "ημέρες", en: "days" },
  hours: { el: "ώρες", en: "hours" },
  minutes: { el: "λεπτά", en: "minutes" },
  seconds: { el: "δευτ.", en: "sec" },
  firstGreek: { el: "Πρώτος Έλληνας σε τροχιά", en: "First Greek in orbit" },
  crewTitle: { el: "Το πλήρωμα", en: "The crew" },
  vehicleTitle: { el: "Το όχημα", en: "The vehicle" },
  helpsTitle: { el: "Πώς ωφελεί την Ελλάδα", en: "How this helps Greece" },
  similarTitle: { el: "Παρόμοιες πρώτες πτήσεις", en: "Similar first flights" },
  namesTitle: { el: "Το Διάστημα μιλά ελληνικά", en: "Space speaks Greek" },
  namesLead: {
    el: "Απόλλων, Άρτεμις, Ωρίων, Οδύσσεια, Ευρώπη, Ήρα, Αριάδνη. Πριν η Ελλάδα στείλει άνθρωπο σε τροχιά, τα ελληνικά ονόματα είχαν ήδη ταξιδέψει πιο μακριά από κάθε σημαία.",
    en: "Apollo, Artemis, Orion, Odyssey, Europa, Hera, Ariadne. Before Greece sent a person to orbit, Greek names had already travelled farther than any flag.",
  },
  futureLead: {
    el: "Η πρώτη πτήση δεν είναι το τέλος. Είναι η αρχή μιας γενιάς που θα χτίζει δορυφόρους, ιατρική και ιστορίες στα ελληνικά.",
    en: "The first flight is not the end. It is the start of a generation that will build satellites, medicine and stories in Greek.",
  },
  potential: {
    el: [
      "Μαθητές να σχεδιάσουν έως 8 μικροδορυφόρους και σχολεία να γίνουν επίγειοι σταθμοί",
      "Έλληνες γιατροί και μηχανικοί να δοκιμάζουν ιδέες σε μικροβαρύτητα",
      "Βιομηχανία μικροδορυφόρων στην Ελλάδα, όχι μόνο εισαγωγή δεδομένων",
      "Περισσότεροι Έλληνες στο σώμα αστροναυτών της ESA",
      "Η ελληνική γλώσσα και τα ονόματα να μείνουν η γλώσσα του ουρανού",
    ],
    en: [
      "Pupils designing up to 8 microsatellites, with schools as ground stations",
      "Greek doctors and engineers testing ideas in microgravity",
      "A microsatellite industry in Greece, not only imported data",
      "More Greeks in the ESA astronaut corps",
      "The Greek language and names remaining the language of the sky",
    ],
  },
  footer: {
    el: "Ανεξάρτητος εκπαιδευτικός πίνακας. Δεν είναι επίσημη υπηρεσία ESA, NASA, Vast ή Ελληνικού Δημοσίου.",
    en: "An independent educational dashboard. Not an official ESA, NASA, Vast or Hellenic Republic service.",
  },
} as const;

export function t<T extends Record<Lang, string>>(dict: T, lang: Lang): string {
  return dict[lang];
}
