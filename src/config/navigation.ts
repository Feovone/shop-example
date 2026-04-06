import type { NavigationItem } from '@/types';

export const mainNavigation: NavigationItem[] = [
  {
    label: 'BIŻUTERIA ZŁOTA',
    href: '/kategoria/bizuteria-zlota',
    children: [
      {
        label: 'Damska',
        href: '/kategoria/bizuteria-zlota-damska',
        children: [
          {
            label: 'Złote Kolczyki',
            href: '/kategoria/zlote-kolczyki',
            children: [
              { label: 'Na sztyft', href: '/kategoria/zlote-kolczyki-na-sztyft' },
              { label: 'Angielskie zapięcie', href: '/kategoria/zlote-kolczyki-angielskie-zapiecie' },
              { label: 'Bigiel', href: '/kategoria/zlote-kolczyki-bigiel' },
              { label: 'Koła', href: '/kategoria/zlote-kolczyki-kola' },
              { label: 'Przeciągane', href: '/kategoria/zlote-kolczyki-przeciagane' },
            ],
          },
          {
            label: 'Złote Wisiorki',
            href: '/kategoria/zlote-wisiorki',
            children: [
              { label: 'Przeciągane', href: '/kategoria/zlote-wisiorki-przeciagane' },
              { label: 'Medaliki', href: '/kategoria/zlote-medaliki' },
              { label: 'Krzyżyki', href: '/kategoria/zlote-krzyzyki' },
              { label: 'Inne modele', href: '/kategoria/zlote-inne-modele' },
            ],
          },
          {
            label: 'Złote Bransoletki',
            href: '/kategoria/zlote-bransoletki',
            children: [
              { label: 'Na łańcuszku', href: '/kategoria/zlote-bransoletki-na-lancuszku' },
            ],
          },
          {
            label: 'Złote Naszyjniki',
            href: '/kategoria/zlote-naszyjniki',
            children: [
              { label: 'Na łańcuszku', href: '/kategoria/zlote-naszyjniki-na-lancuszku' },
              { label: 'Ankier', href: '/kategoria/zlote-lancuszki-ankier' },
              { label: 'Kostka', href: '/kategoria/zlote-lancuszki-kostka' },
              { label: 'Linka/żmijka', href: '/kategoria/zlote-lancuszki-linka' },
              { label: 'Pancerka', href: '/kategoria/zlote-lancuszki-pancerka' },
              { label: 'Figaro', href: '/kategoria/zlote-lancuszki-figaro' },
              { label: 'Inny splot', href: '/kategoria/zlote-lancuszki-inny' },
            ],
          },
        ],
      },
      {
        label: 'Męska',
        href: '/kategoria/bizuteria-zlota-meska',
        children: [
          {
            label: 'Złote łańcuszki - Splot',
            href: '/kategoria/zlote-lancuszki-meskie',
            children: [
              { label: 'Pancerka', href: '/kategoria/zlote-lancuszki-meskie-pancerka' },
              { label: 'Figaro', href: '/kategoria/zlote-lancuszki-meskie-figaro' },
            ],
          },
          {
            label: 'Zawieszki i wisiorki',
            href: '/kategoria/zlote-zawieszki-meskie',
            children: [
              { label: 'Krzyżyki', href: '/kategoria/zlote-krzyzyki-meskie' },
            ],
          },
        ],
      },
      {
        label: 'Dla dzieci',
        href: '/kategoria/bizuteria-zlota-dzieci',
        children: [
          { label: 'Bransoletki', href: '/kategoria/zlote-bransoletki-dzieci' },
          {
            label: 'Kolczyki',
            href: '/kategoria/zlote-kolczyki-dzieci',
            children: [
              { label: 'Na sztyft', href: '/kategoria/zlote-kolczyki-dzieci-sztyft' },
              { label: 'Angielskie zapięcie', href: '/kategoria/zlote-kolczyki-dzieci-angielskie' },
              { label: 'Bigiel', href: '/kategoria/zlote-kolczyki-dzieci-bigiel' },
            ],
          },
        ],
      },
    ],
  },
  {
    label: 'BIŻUTERIA SREBRNA',
    href: '/kategoria/bizuteria-srebrna',
    children: [
      {
        label: 'Damska',
        href: '/kategoria/bizuteria-srebrna-damska',
        children: [
          {
            label: 'Kolczyki srebrne',
            href: '/kategoria/kolczyki-srebrne',
            children: [
              { label: 'Na sztyft', href: '/kategoria/kolczyki-srebrne-na-sztyft' },
              { label: 'Angielskie zapięcie', href: '/kategoria/kolczyki-srebrne-angielskie-zapiecie' },
              { label: 'Na biglu', href: '/kategoria/kolczyki-srebrne-na-biglu' },
              { label: 'Koła', href: '/kategoria/kolczyki-srebrne-kola' },
              { label: 'Przeciągane', href: '/kategoria/kolczyki-srebrne-przeciagane' },
              { label: 'Nausznice', href: '/kategoria/kolczyki-srebrne-nausznice' },
            ],
          },
          {
            label: 'Wisiorki srebrne',
            href: '/kategoria/wisiorki-srebrne',
            children: [
              { label: 'Przeciągane', href: '/kategoria/wisiorki-srebrne-przeciagane' },
              { label: 'Medaliki', href: '/kategoria/srebrne-medaliki' },
              { label: 'Krzyżyki', href: '/kategoria/srebrne-krzyzyki' },
              { label: 'Charms', href: '/kategoria/srebrne-zawieszki-charms' },
            ],
          },
          {
            label: 'Bransoletki srebrne',
            href: '/kategoria/bransoletki-srebrne',
            children: [
              { label: 'Elementowe', href: '/kategoria/bransoletki-srebrne-elementowe' },
              { label: 'Sztywne', href: '/kategoria/bransoletki-srebrne-sztywne' },
              { label: 'Na łańcuszku', href: '/kategoria/bransoletki-srebrne-na-lancuszku' },
              { label: 'Modułowe', href: '/kategoria/bransoletki-srebrne-modulowe' },
              { label: 'Na sznurku', href: '/kategoria/bransoletki-srebrne-na-sznurku' },
            ],
          },
          {
            label: 'Pierścionki srebrne',
            href: '/kategoria/pierscionki-srebrne',
          },
          {
            label: 'Naszyjniki srebrne',
            href: '/kategoria/naszyjniki-srebrne',
          },
          {
            label: 'Łańcuszki srebrne - Splot',
            href: '/kategoria/lancuszki-srebrne-splot',
            children: [
              { label: 'Lisi ogon', href: '/kategoria/lancuszki-srebrne-lisi-ogon' },
              { label: 'Coreana/Popcorn', href: '/kategoria/lancuszki-srebrne-coreana' },
              { label: 'Pancerka', href: '/kategoria/lancuszki-srebrne-pancerka' },
              { label: 'Singapur', href: '/kategoria/lancuszki-srebrne-singapur' },
              { label: 'Figaro', href: '/kategoria/lancuszki-srebrne-figaro' },
              { label: 'Ankier', href: '/kategoria/lancuszki-srebrne-ankier' },
              { label: 'Kostka', href: '/kategoria/lancuszki-srebrne-kostka' },
              { label: 'Linka/żmijka', href: '/kategoria/lancuszki-srebrne-linka' },
              { label: 'Inny splot', href: '/kategoria/lancuszki-srebrne-inny' },
            ],
          },
          { label: 'Broszki srebrne', href: '/kategoria/broszki-srebrne' },
          { label: 'Breloki srebrne', href: '/kategoria/breloki-srebrne' },
        ],
      },
      {
        label: 'Męska',
        href: '/kategoria/bizuteria-srebrna-meska',
        children: [
          {
            label: 'Bransoletki męskie',
            href: '/kategoria/bransoletki-srebrne-meskie',
            children: [
              { label: 'Splot Pancerka', href: '/kategoria/bransoletki-meskie-pancerka' },
              { label: 'Silikonowe', href: '/kategoria/bransoletki-meskie-silikonowe' },
            ],
          },
          {
            label: 'Wisiorki męskie',
            href: '/kategoria/wisiorki-meskie',
            children: [
              { label: 'Przeciągane', href: '/kategoria/wisiorki-meskie-przeciagane' },
              { label: 'Krzyżyki', href: '/kategoria/wisiorki-meskie-krzyzyki' },
            ],
          },
          { label: 'Łańcuszki męskie', href: '/kategoria/lancuszki-srebrne-meskie' },
          { label: 'Sygnety', href: '/kategoria/sygnety-srebrne' },
          { label: 'Spinki do mankietów', href: '/kategoria/spinki-mankietow-srebrne' },
          { label: 'Spinki do krawata', href: '/kategoria/spinki-krawata-srebrne' },
          { label: 'Breloki', href: '/kategoria/breloki-srebrne-meskie' },
        ],
      },
      {
        label: 'Dla dzieci',
        href: '/kategoria/bizuteria-srebrna-dzieci',
        children: [
          { label: 'Medaliki', href: '/kategoria/medaliki-srebrne-dzieci' },
          {
            label: 'Kolczyki',
            href: '/kategoria/kolczyki-srebrne-dzieci',
            children: [
              { label: 'Na sztyft', href: '/kategoria/kolczyki-srebrne-dzieci-sztyft' },
              { label: 'Angielskie zapięcie', href: '/kategoria/kolczyki-srebrne-dzieci-angielskie' },
              { label: 'Bigiel', href: '/kategoria/kolczyki-srebrne-dzieci-bigiel' },
              { label: 'Przeciągane', href: '/kategoria/kolczyki-srebrne-dzieci-przeciagane' },
            ],
          },
          { label: 'Bransoletki', href: '/kategoria/bransoletki-srebrne-dzieci' },
        ],
      },
    ],
  },
  {
    label: 'MOTYWY',
    href: '/kategoria/motywy',
    children: [
      {
        label: 'Miłość',
        href: '/kategoria/motyw-milosc',
        children: [
          { label: 'Nieskończoność', href: '/kategoria/motyw-nieskonczonosc' },
          { label: 'EKG Serca', href: '/kategoria/motyw-ekg-serca' },
          { label: 'Kluczyk', href: '/kategoria/motyw-kluczyk' },
          { label: 'Serca', href: '/kategoria/motyw-serca' },
          { label: 'Kłódka', href: '/kategoria/motyw-klodka' },
        ],
      },
      {
        label: 'Na szczęście',
        href: '/kategoria/motyw-na-szczescie',
        children: [
          { label: 'Drzewko', href: '/kategoria/motyw-drzewko' },
          { label: 'Podkowa', href: '/kategoria/motyw-podkowa' },
          { label: 'Łapacz snów', href: '/kategoria/motyw-lapacz-snow' },
          { label: 'Koniczyna', href: '/kategoria/motyw-koniczyna' },
        ],
      },
      {
        label: 'Kształty',
        href: '/kategoria/motyw-ksztalty',
        children: [
          { label: 'Okrągły', href: '/kategoria/motyw-okragly' },
          { label: 'Półokrągły', href: '/kategoria/motyw-polokragly' },
          { label: 'Trójkąt', href: '/kategoria/motyw-trojkat' },
          { label: 'Kwadrat', href: '/kategoria/motyw-kwadrat' },
          { label: 'Romb', href: '/kategoria/motyw-romb' },
          { label: 'Sześcian', href: '/kategoria/motyw-szescian' },
        ],
      },
      {
        label: 'Zwierzęta/Owady',
        href: '/kategoria/motyw-zwierzeta',
        children: [
          { label: 'Kotek', href: '/kategoria/motyw-kotek' },
          { label: 'Wąż', href: '/kategoria/motyw-waz' },
          { label: 'Tygrys', href: '/kategoria/motyw-tygrys' },
          { label: 'Wilk', href: '/kategoria/motyw-wilk' },
          { label: 'Sowa', href: '/kategoria/motyw-sowa' },
          { label: 'Motyl', href: '/kategoria/motyw-motyl' },
          { label: 'Ważka', href: '/kategoria/motyw-wazka' },
        ],
      },
      {
        label: 'Kosmos',
        href: '/kategoria/motyw-kosmos',
        children: [
          { label: 'Gwiazdki', href: '/kategoria/motyw-gwiazdki' },
          { label: 'Księżyc', href: '/kategoria/motyw-ksiezyc' },
        ],
      },
      {
        label: 'Rośliny/Owoce',
        href: '/kategoria/motyw-rosliny',
        children: [
          { label: 'Kwiat', href: '/kategoria/motyw-kwiat' },
          { label: 'Liść', href: '/kategoria/motyw-lisc' },
          { label: 'Jodła', href: '/kategoria/motyw-jodla' },
          { label: 'Drzewo', href: '/kategoria/motyw-drzewo' },
          { label: 'Owoce', href: '/kategoria/motyw-owoce' },
        ],
      },
      {
        label: 'Inne',
        href: '/kategoria/motyw-inne',
        children: [
          { label: 'Aniołek', href: '/kategoria/motyw-aniolek' },
          { label: 'Ażurowy', href: '/kategoria/motyw-azurowy' },
          { label: 'Grecki', href: '/kategoria/motyw-grecki' },
          { label: 'Skrzydło', href: '/kategoria/motyw-skrzydlo' },
          { label: 'Krzyż', href: '/kategoria/motyw-krzyz' },
          { label: 'Medalik', href: '/kategoria/motyw-medalik' },
          { label: 'Pióro', href: '/kategoria/motyw-pioro' },
          { label: 'Moneta', href: '/kategoria/motyw-moneta' },
          { label: 'Strzała', href: '/kategoria/motyw-strzala' },
        ],
      },
    ],
  },
  {
    label: 'KOMPLETY',
    href: '/kategoria/komplety-srebrne',
  },
  {
    label: 'DEWOCJONALIA',
    href: '/kategoria/dewocjonalia',
    children: [
      {
        label: 'Medaliki',
        href: '/kategoria/dewocjonalia-medaliki',
        children: [
          { label: 'Złote medaliki', href: '/kategoria/dewocjonalia-zlote-medaliki' },
          { label: 'Srebrne medaliki', href: '/kategoria/dewocjonalia-srebrne-medaliki' },
        ],
      },
      {
        label: 'Krzyżyki',
        href: '/kategoria/dewocjonalia-krzyzyki',
        children: [
          { label: 'Złote krzyżyki', href: '/kategoria/dewocjonalia-zlote-krzyzyki' },
          { label: 'Srebrne krzyżyki', href: '/kategoria/dewocjonalia-srebrne-krzyzyki' },
        ],
      },
      {
        label: 'Różańce',
        href: '/kategoria/dewocjonalia-rozance',
        children: [
          { label: 'Srebrne różańce', href: '/kategoria/dewocjonalia-srebrne-rozance' },
        ],
      },
      {
        label: 'Chrzest',
        href: '/kategoria/dewocjonalia-chrzest',
        children: [
          { label: 'Srebrne smoczki', href: '/kategoria/srebrne-smoczki-chrzest' },
          { label: 'Srebrne łyżeczki', href: '/kategoria/srebrne-lyzeczki-chrzest' },
          { label: 'Srebrne grzechotki', href: '/kategoria/srebrne-grzechotki-chrzest' },
        ],
      },
    ],
  },
  {
    label: 'KOLEKCJE',
    href: '/kolekcja',
  },
];

export const footerNavigation = {
  about: {
    title: 'O nas',
    links: [
      { label: 'O firmie', href: '/info/o-firmie' },
      { label: 'Blog', href: '/blog' },
      { label: 'Opineo', href: 'https://www.opineo.pl/opinie/susetti-pl', external: true },
      { label: 'Facebook', href: 'https://www.facebook.com/susettipl-116435856934458', external: true },
      { label: 'Instagram', href: 'https://www.instagram.com/susetti_pl/', external: true },
    ],
  },
  info: {
    title: 'Informacje',
    links: [
      { label: 'Regulamin', href: '/info/regulamin' },
      { label: 'Polityka prywatności', href: '/info/polityka-prywatnosci' },
      { label: 'Jak kupować?', href: '/info/jak-kupowac' },
      { label: 'FAQ', href: '/info/faq' },
      { label: 'Kontakt', href: '/info/kontakt' },
    ],
  },
  shipping: {
    title: 'Płatności i dostawa',
    links: [
      { label: 'Formy płatności', href: '/info/formy-platnosci' },
      { label: 'Koszty wysyłki', href: '/info/koszty-wysylki' },
      { label: 'Czas realizacji zamówienia', href: '/info/czas-realizacji-zamowienia' },
      { label: 'Zwroty', href: '/info/zwroty' },
      { label: 'Reklamacje', href: '/info/reklamacje' },
    ],
  },
  account: {
    title: 'Moje konto',
    links: [
      { label: 'Twoje zamówienia', href: '/konto/zamowienia' },
      { label: 'Ustawienia konta', href: '/konto' },
      { label: 'Ulubione', href: '/konto/ulubione' },
    ],
  },
};
