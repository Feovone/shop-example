import type { FilterGroup } from '@/types';

const attr = (id: string, name: string, slug: string) => ({
  id, name, slug, type: 'SELECT' as const, isFilterable: true, position: 0,
});

const val = (id: string, value: string, slug: string, count: number, isSelected = false) => ({
  value: { id, value, slug, position: 0 },
  count,
  isSelected,
});

export const mockFilterGroups: FilterGroup[] = [
  {
    attribute: attr('1', 'Kolekcja', 'kolekcja'),
    values: [
      val('k1', 'Czerwona Aura', 'czerwona-aura', 19),
      val('k2', 'Eleganckie Odbicie', 'eleganckie-odbicie', 81),
      val('k3', 'Mroczny Blask', 'mroczny-blask', 123),
    ],
  },
  {
    attribute: attr('2', 'Typ zapięcia', 'typ-zapiecia'),
    values: [
      val('tz1', 'Sztyft', 'sztyft', 170),
      val('tz2', 'Bigiel', 'bigiel', 115),
      val('tz3', 'Angielskie', 'angielskie', 290),
      val('tz4', 'Otwarty', 'otwarty', 40),
    ],
  },
  {
    attribute: attr('3', 'Dla kogo', 'dla-kogo'),
    values: [
      val('dk1', 'Dla Niej', 'dla-niej', 592),
      val('dk2', 'Dla Niej i Dziecka', 'dla-niej-i-dziecka', 25),
    ],
  },
  {
    attribute: attr('4', 'Surowiec', 'surowiec'),
    values: [
      val('s1', 'Srebro', 'srebro', 542),
      val('s2', 'Srebro pozłacane', 'srebro-pozlacane', 75),
    ],
  },
  {
    attribute: attr('5', 'Kamień', 'kamien'),
    values: [
      val('km1', 'Bez kamienia', 'bez-kamienia', 303),
      val('km2', 'Cyrkonia', 'cyrkonia', 183),
      val('km3', 'Opal', 'opal', 8),
      val('km4', 'Malachit', 'malachit', 10),
      val('km5', 'Kobalt', 'kobalt', 16),
      val('km6', 'Koral', 'koral', 16),
      val('km7', 'Perła', 'perla', 7),
      val('km8', 'Onyks', 'onyks', 10),
      val('km9', 'Kocie oko', 'kocie-oko', 10),
      val('km10', 'Noc Kairu', 'noc-kairu', 9),
      val('km11', 'Inny kamień', 'inny-kamien', 28),
      val('km12', 'Turkus', 'turkus', 1),
      val('km13', 'Kwarc różowy', 'kwarc-rozowy', 1),
      val('km14', 'Rubin', 'rubin', 2),
      val('km15', 'Piasek pustyni', 'piasek-pustyni', 2),
      val('km16', 'Jaspis czerwony', 'jaspis-czerwony', 1),
    ],
  },
  {
    attribute: attr('6', 'Próba', 'proba'),
    values: [
      val('p1', '925', '925', 617),
    ],
  },
  {
    attribute: attr('7', 'Motyw', 'motyw'),
    values: [
      val('m1', 'Inny', 'inny', 331),
      val('m2', 'Okrągły', 'okragly', 55),
      val('m3', 'Skrzydło', 'skrzydlo', 31),
      val('m4', 'Półokrągły', 'polokragly', 24),
      val('m5', 'Grecki', 'grecki', 24),
      val('m6', 'Serce', 'serce', 21),
      val('m7', 'Liść', 'lisc', 21),
      val('m8', 'Ażurowy', 'azurowy', 18),
      val('m9', 'Kwiat', 'kwiat', 16),
      val('m10', 'Trójkąt', 'trojkat', 14),
      val('m11', 'Nieskończoność', 'nieskonczonosc', 11),
      val('m12', 'Koniczyna', 'koniczyna', 8),
      val('m13', 'Romb', 'romb', 6),
      val('m14', 'Drzewko', 'drzewko', 5),
      val('m15', 'Gwiazda', 'gwiazda', 3),
      val('m16', 'Krzyż', 'krzyz', 3),
      val('m17', 'Pióro', 'pioro', 3),
      val('m18', 'Łapacz snów', 'lapacz-snow', 2),
      val('m19', 'Strzała', 'strzala', 2),
    ],
  },
  {
    attribute: attr('8', 'Inne', 'inne'),
    values: [
      val('i1', 'Produkt oksydowany', 'oksydowany', 206),
      val('i2', 'Produkt rodowany', 'rodowany', 41),
    ],
  },
];
