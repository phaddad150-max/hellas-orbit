import type { Lang } from "./types";

export const nav = [
  { href: "/first-greek", el: "Άνθρωπος", en: "Person" },
  { href: "/mission", el: "Αποστολή", en: "Mission" },
  { href: "/landscape", el: "Ελλάδα", en: "Greece" },
  { href: "/future", el: "Γενιά", en: "Next" },
] as const;

export const ui = {
  brand: { el: "Hellas Orbit", en: "Hellas Orbit" },
  statusChip: {
    el: "NASA→Vast PAM-6 · ESA για την Ελλάδα · SpaceX Dragon/Falcon 9 · πλήρωμα σε MCOP",
    en: "NASA selected Vast for PAM-6 · ESA signed for Greece · SpaceX flies Dragon/Falcon 9 · crew pending MCOP",
  },
  liveChipIss: { el: "ΖΩΝΤΑΝΑ ISS", en: "LIVE ISS" },
  liveChipLaunch: { el: "ΕΚΤΟΞΕΥΣΗ", en: "LAUNCH" },
  netNote: {
    el: "Δείκτης σχεδιασμού, όχι επιβεβαιωμένη εκτόξευση. NET καλοκαίρι 2027.",
    en: "Planning marker, not a confirmed launch. NET summer 2027.",
  },
  days: { el: "ημέρες", en: "days" },
  hours: { el: "ώρες", en: "hours" },
  minutes: { el: "λεπτά", en: "min" },
  seconds: { el: "δευτ.", en: "sec" },
  sources: { el: "Πηγές", en: "Sources" },
  close: { el: "Κλείσιμο", en: "Close" },
  tap: { el: "Πάτα για λεπτομέρεια", en: "Tap for detail" },
  stillOpen: { el: "Ανοιχτά", en: "Open" },
  durationOfficial: {
    el: "Έως ~14 ημέρες στον ISS (NASA / Vast).",
    en: "Up to ~14 days aboard ISS (NASA / Vast).",
  },
  durationGreek: {
    el: "Ελληνικές δηλώσεις: έως ~3 εβδομάδες.",
    en: "Greek statements: up to ~3 weeks.",
  },
  pendingMcop: {
    el: "Υπό έγκριση MCOP — όχι ολοκληρωμένο γεγονός.",
    en: "Pending MCOP — not a completed fact.",
  },
  illustration: {
    el: "Εικονογράφηση · όχι φωτογραφία του προσώπου",
    en: "Illustration · not a portrait of the person",
  },
  liveLabel: {
    el: "NASA feed · ανεπίσημο embed",
    en: "NASA feed · unofficial embed",
  },
  liveTap: { el: "Πάτα για ISS live", en: "Tap for ISS live" },
  issTrack: { el: "Τροχιά ISS", en: "ISS ground track" },
  footer: {
    el: "Ανεπίσημος πίνακας παρακολούθησης. Δεν είναι NASA, ESA, Vast, SpaceX ή ΕΛΚΕΔ.",
    en: "Unofficial tracker. Not NASA, ESA, Vast, SpaceX or HSC.",
  },
  homeTitle: {
    el: "Κονσόλα αποστολής",
    en: "Mission console",
  },
  personTitle: {
    el: "Αδριανός Γολέμης",
    en: "Adrianos Golemis",
  },
  personLead: {
    el: "Γιατρός πτήσεων της ESA από τη Λάρισα. Ονομασμένος ειδικός αποστολής στο PAM-6 / Vast-PAM-1, εφόσον εγκρίνει το MCOP.",
    en: "ESA flight surgeon from Larissa. Named mission specialist on PAM-6 / Vast-PAM-1, pending MCOP.",
  },
  missionTitle: { el: "Αποστολή", en: "Mission" },
  greeceTitle: {
    el: "Η Ελλάδα στο Διάστημα — όχι μόνο μία πτήση",
    en: "Greece in space — more than one flight",
  },
  nextTitle: { el: "Επόμενη γενιά", en: "Next generation" },
  nextLead: {
    el: "Υλικό για σχολεία όταν είναι έτοιμο.",
    en: "School materials when they are ready.",
  },
  nextCta: { el: "Ειδοποίησέ με", en: "Notify me" },
  crewTitle: { el: "Πλήρωμα", en: "Crew" },
  stepperTitle: { el: "Πτήση", en: "Flight" },
  groundTitle: { el: "Εδάφος", en: "Ground" },
  vehicleTitle: { el: "Όχημα", en: "Vehicle" },
  live: { el: "ΖΩΝΤΑΝΑ", en: "LIVE" },
  issNow: { el: "ISS", en: "ISS" },
  lat: { el: "Πλάτος", en: "Lat" },
  lon: { el: "Μήκος", en: "Lon" },
  alt: { el: "Ύψος", en: "Alt" },
  vel: { el: "Ταχύτητα", en: "Speed" },
  quizTitle: { el: "Κουίζ", en: "Quiz" },
  score: { el: "Σκορ", en: "Score" },
  nextQ: { el: "Επόμενη", en: "Next" },
  sticker: { el: "Αστέρι", en: "Star" },
  again: { el: "Ξανά", en: "Again" },
  streamCredit: { el: "NASA feed", en: "NASA feed" },
  tapStar: { el: "Πάτα", en: "Tap" },
  opsTitle: { el: "Πηγές", en: "Sources" },
  opsLead: { el: "", en: "" },
  pulseTitle: { el: "X", en: "X" },
  pulseEmpty: { el: "", en: "" },
} as const;

export function t<T extends Record<Lang, string>>(dict: T, lang: Lang): string {
  return dict[lang];
}
