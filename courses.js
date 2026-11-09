// Ders ağırlıkları IEU LEARN "Değerlendirme Ölçütleri" bölümünden alındı (2026-2027 Güz).
// Yeni ders eklemek için bu listeye aynı formatta bir satır eklemek yeterli.
const COURSES = [
  {
    code: "MBP 203",
    name: "Veri Tabanı ve Yönetimi",
    items: [
      { name: "Proje", weight: 35 },
      { name: "Ara Sınav", weight: 25 },
      { name: "Final Sınavı", weight: 40, final: true },
    ],
  },
  {
    code: "MBP 205",
    name: "Nesne Tabanlı Programlama II",
    items: [
      { name: "Ödev", weight: 15 },
      { name: "Sunum / Jüri Önünde Sunum", weight: 10 },
      { name: "Proje", weight: 10 },
      { name: "Ara Sınav", weight: 25 },
      { name: "Final Sınavı", weight: 40, final: true },
    ],
  },
  {
    code: "MBP 207",
    name: "Görsel Programlama II",
    items: [
      { name: "Proje", weight: 30 },
      { name: "Ara Sınav", weight: 30 },
      { name: "Final Sınavı", weight: 40, final: true },
    ],
  },
  {
    code: "MBP 208",
    name: "Sunucu İşletim Sistemi",
    items: [
      { name: "Katılım", weight: 10 },
      { name: "Küçük Sınav / Stüdyo Kritiği", weight: 15 },
      { name: "Ödev", weight: 10 },
      { name: "Ara Sınav", weight: 25 },
      { name: "Final Sınavı", weight: 40, final: true },
    ],
  },
  {
    code: "MBP 251",
    name: "Yapay Zeka ve Blok Zincirleri",
    items: [
      { name: "Ödev", weight: 10 },
      { name: "Proje", weight: 20 },
      { name: "Ara Sınav", weight: 30 },
      { name: "Final Sınavı", weight: 40, final: true },
    ],
  },
  {
    code: "MBP 281",
    name: "İnternet Programcılığı II",
    items: [
      { name: "Katılım", weight: 5 },
      { name: "Proje", weight: 25 },
      { name: "Ara Sınav", weight: 30 },
      { name: "Final Sınavı", weight: 40, final: true },
    ],
  },
  {
    code: "MBP 283",
    name: "Oyun Tasarımı ve Programlama",
    items: [
      { name: "Katılım", weight: 10 },
      { name: "Laboratuvar / Uygulama", weight: 10 },
      { name: "Ödev", weight: 20 },
      { name: "Sunum / Jüri Önünde Sunum", weight: 20 },
      { name: "Proje", weight: 40 },
    ],
  },
  {
    code: "ING 101",
    name: "İngilizce I",
    items: [
      { name: "Küçük Sınav 1", weight: 30 },
      { name: "Küçük Sınav 2", weight: 30 },
      { name: "Final Sınavı", weight: 40, final: true },
    ],
  },
  {
    code: "MISG 101",
    name: "İşçi Sağlığı ve İş Güvenliği",
    items: [
      { name: "Ara Sınav", weight: 50 },
      { name: "Final Sınavı", weight: 50, final: true },
    ],
  },
];

// Harf notu aralıkları (alt sınırlar). Yönetmelik değişirse buradan güncellenir.
const GRADES = [
  { letter: "AA", min: 90, coef: 4.0 },
  { letter: "BA", min: 85, coef: 3.5 },
  { letter: "BB", min: 80, coef: 3.0 },
  { letter: "CB", min: 75, coef: 2.5 },
  { letter: "CC", min: 70, coef: 2.0 },
  { letter: "DC", min: 65, coef: 1.5 },
  { letter: "DD", min: 60, coef: 1.0 },
  { letter: "FD", min: 50, coef: 0.5 },
  { letter: "FF", min: 0, coef: 0.0 },
];
