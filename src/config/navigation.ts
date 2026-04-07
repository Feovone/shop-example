import type { NavigationItem } from '@/types';

export const mainNavigation: NavigationItem[] = [
  {
    label: 'BIŻUTERIA ZŁOTA',
    href: '/kategoria/bizuteria-zlota',
    children: [
      {
        label: 'Damska',
        href: '/kategoria/bizuteria-zlota/damska',
        children: [
          {
            label: 'Złote Kolczyki',
            href: '/kategoria/bizuteria-zlota/damska/kolczyki',
            children: [
              { label: 'Na sztyft', href: '/kategoria/bizuteria-zlota/damska/kolczyki/na-sztyft' },
              { label: 'Angielskie zapięcie', href: '/kategoria/bizuteria-zlota/damska/kolczyki/angielskie' },
              { label: 'Bigiel', href: '/kategoria/bizuteria-zlota/damska/kolczyki/bigiel' },
              { label: 'Koła', href: '/kategoria/bizuteria-zlota/damska/kolczyki/kola' },
              { label: 'Przeciągane', href: '/kategoria/bizuteria-zlota/damska/kolczyki/przeciagane' },
            ],
          },
          {
            label: 'Złote Wisiorki',
            href: '/kategoria/bizuteria-zlota/damska/wisiorki',
            children: [
              { label: 'Przeciągane', href: '/kategoria/bizuteria-zlota/damska/wisiorki/przeciagane' },
              { label: 'Medaliki', href: '/kategoria/bizuteria-zlota/damska/wisiorki/medaliki' },
              { label: 'Krzyżyki', href: '/kategoria/bizuteria-zlota/damska/wisiorki/krzyzyki' },
              { label: 'Inne modele', href: '/kategoria/bizuteria-zlota/damska/wisiorki/inne' },
            ],
          },
          {
            label: 'Złote Bransoletki',
            href: '/kategoria/bizuteria-zlota/damska/bransoletki',
            children: [
              { label: 'Na łańcuszku', href: '/kategoria/bizuteria-zlota/damska/bransoletki/na-lancuszku' },
            ],
          },
          {
            label: 'Złote Naszyjniki',
            href: '/kategoria/bizuteria-zlota/damska/naszyjniki',
            children: [
              { label: 'Na łańcuszku', href: '/kategoria/bizuteria-zlota/damska/naszyjniki/na-lancuszku' },
              { label: 'Ankier', href: '/kategoria/bizuteria-zlota/damska/naszyjniki/ankier' },
              { label: 'Kostka', href: '/kategoria/bizuteria-zlota/damska/naszyjniki/kostka' },
              { label: 'Linka/żmijka', href: '/kategoria/bizuteria-zlota/damska/naszyjniki/linka' },
              { label: 'Pancerka', href: '/kategoria/bizuteria-zlota/damska/naszyjniki/pancerka' },
              { label: 'Figaro', href: '/kategoria/bizuteria-zlota/damska/naszyjniki/figaro' },
              { label: 'Inny splot', href: '/kategoria/bizuteria-zlota/damska/naszyjniki/inny-splot' },
            ],
          },
        ],
      },
      {
        label: 'Męska',
        href: '/kategoria/bizuteria-zlota/meska',
        children: [
          {
            label: 'Złote łańcuszki - Splot',
            href: '/kategoria/bizuteria-zlota/meska/lancuszki',
            children: [
              { label: 'Pancerka', href: '/kategoria/bizuteria-zlota/meska/lancuszki/pancerka' },
              { label: 'Figaro', href: '/kategoria/bizuteria-zlota/meska/lancuszki/figaro' },
            ],
          },
          {
            label: 'Zawieszki i wisiorki',
            href: '/kategoria/bizuteria-zlota/meska/wisiorki',
            children: [
              { label: 'Krzyżyki', href: '/kategoria/bizuteria-zlota/meska/wisiorki/krzyzyki' },
            ],
          },
        ],
      },
      {
        label: 'Dla dzieci',
        href: '/kategoria/bizuteria-zlota/dzieci',
        children: [
          { label: 'Bransoletki', href: '/kategoria/bizuteria-zlota/dzieci/bransoletki' },
          {
            label: 'Kolczyki',
            href: '/kategoria/bizuteria-zlota/dzieci/kolczyki',
            children: [
              { label: 'Na sztyft', href: '/kategoria/bizuteria-zlota/dzieci/kolczyki/na-sztyft' },
              { label: 'Angielskie zapięcie', href: '/kategoria/bizuteria-zlota/dzieci/kolczyki/angielskie' },
              { label: 'Bigiel', href: '/kategoria/bizuteria-zlota/dzieci/kolczyki/bigiel' },
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
        href: '/kategoria/bizuteria-srebrna/damska',
        children: [
          {
            label: 'Kolczyki srebrne',
            href: '/kategoria/bizuteria-srebrna/damska/kolczyki',
            children: [
              { label: 'Na sztyft', href: '/kategoria/bizuteria-srebrna/damska/kolczyki/na-sztyft' },
              { label: 'Angielskie zapięcie', href: '/kategoria/bizuteria-srebrna/damska/kolczyki/angielskie' },
              { label: 'Na biglu', href: '/kategoria/bizuteria-srebrna/damska/kolczyki/na-biglu' },
              { label: 'Koła', href: '/kategoria/bizuteria-srebrna/damska/kolczyki/kola' },
              { label: 'Przeciągane', href: '/kategoria/bizuteria-srebrna/damska/kolczyki/przeciagane' },
              { label: 'Nausznice', href: '/kategoria/bizuteria-srebrna/damska/kolczyki/nausznice' },
            ],
          },
          {
            label: 'Wisiorki srebrne',
            href: '/kategoria/bizuteria-srebrna/damska/wisiorki',
            children: [
              { label: 'Przeciągane', href: '/kategoria/bizuteria-srebrna/damska/wisiorki/przeciagane' },
              { label: 'Medaliki', href: '/kategoria/bizuteria-srebrna/damska/wisiorki/medaliki' },
              { label: 'Krzyżyki', href: '/kategoria/bizuteria-srebrna/damska/wisiorki/krzyzyki' },
              { label: 'Charms', href: '/kategoria/bizuteria-srebrna/damska/wisiorki/charms' },
            ],
          },
          {
            label: 'Bransoletki srebrne',
            href: '/kategoria/bizuteria-srebrna/damska/bransoletki',
            children: [
              { label: 'Elementowe', href: '/kategoria/bizuteria-srebrna/damska/bransoletki/elementowe' },
              { label: 'Sztywne', href: '/kategoria/bizuteria-srebrna/damska/bransoletki/sztywne' },
              { label: 'Na łańcuszku', href: '/kategoria/bizuteria-srebrna/damska/bransoletki/na-lancuszku' },
              { label: 'Modułowe', href: '/kategoria/bizuteria-srebrna/damska/bransoletki/modulowe' },
              { label: 'Na sznurku', href: '/kategoria/bizuteria-srebrna/damska/bransoletki/na-sznurku' },
            ],
          },
          { label: 'Pierścionki srebrne', href: '/kategoria/bizuteria-srebrna/damska/pierscionki' },
          { label: 'Naszyjniki srebrne', href: '/kategoria/bizuteria-srebrna/damska/naszyjniki' },
          {
            label: 'Łańcuszki srebrne - Splot',
            href: '/kategoria/bizuteria-srebrna/damska/lancuszki',
            children: [
              { label: 'Lisi ogon', href: '/kategoria/bizuteria-srebrna/damska/lancuszki/lisi-ogon' },
              { label: 'Coreana/Popcorn', href: '/kategoria/bizuteria-srebrna/damska/lancuszki/coreana' },
              { label: 'Pancerka', href: '/kategoria/bizuteria-srebrna/damska/lancuszki/pancerka' },
              { label: 'Singapur', href: '/kategoria/bizuteria-srebrna/damska/lancuszki/singapur' },
              { label: 'Figaro', href: '/kategoria/bizuteria-srebrna/damska/lancuszki/figaro' },
              { label: 'Ankier', href: '/kategoria/bizuteria-srebrna/damska/lancuszki/ankier' },
              { label: 'Kostka', href: '/kategoria/bizuteria-srebrna/damska/lancuszki/kostka' },
              { label: 'Linka/żmijka', href: '/kategoria/bizuteria-srebrna/damska/lancuszki/linka' },
              { label: 'Inny splot', href: '/kategoria/bizuteria-srebrna/damska/lancuszki/inny-splot' },
            ],
          },
          { label: 'Broszki srebrne', href: '/kategoria/bizuteria-srebrna/damska/broszki' },
          { label: 'Breloki srebrne', href: '/kategoria/bizuteria-srebrna/damska/breloki' },
        ],
      },
      {
        label: 'Męska',
        href: '/kategoria/bizuteria-srebrna/meska',
        children: [
          {
            label: 'Bransoletki męskie',
            href: '/kategoria/bizuteria-srebrna/meska/bransoletki',
            children: [
              { label: 'Splot Pancerka', href: '/kategoria/bizuteria-srebrna/meska/bransoletki/pancerka' },
              { label: 'Silikonowe', href: '/kategoria/bizuteria-srebrna/meska/bransoletki/silikonowe' },
            ],
          },
          {
            label: 'Wisiorki męskie',
            href: '/kategoria/bizuteria-srebrna/meska/wisiorki',
            children: [
              { label: 'Przeciągane', href: '/kategoria/bizuteria-srebrna/meska/wisiorki/przeciagane' },
              { label: 'Krzyżyki', href: '/kategoria/bizuteria-srebrna/meska/wisiorki/krzyzyki' },
            ],
          },
          { label: 'Łańcuszki męskie', href: '/kategoria/bizuteria-srebrna/meska/lancuszki' },
          { label: 'Sygnety', href: '/kategoria/bizuteria-srebrna/meska/sygnety' },
          { label: 'Spinki do mankietów', href: '/kategoria/bizuteria-srebrna/meska/spinki-mankietow' },
          { label: 'Spinki do krawata', href: '/kategoria/bizuteria-srebrna/meska/spinki-krawata' },
          { label: 'Breloki', href: '/kategoria/bizuteria-srebrna/meska/breloki' },
        ],
      },
      {
        label: 'Dla dzieci',
        href: '/kategoria/bizuteria-srebrna/dzieci',
        children: [
          { label: 'Medaliki', href: '/kategoria/bizuteria-srebrna/dzieci/medaliki' },
          {
            label: 'Kolczyki',
            href: '/kategoria/bizuteria-srebrna/dzieci/kolczyki',
            children: [
              { label: 'Na sztyft', href: '/kategoria/bizuteria-srebrna/dzieci/kolczyki/na-sztyft' },
              { label: 'Angielskie zapięcie', href: '/kategoria/bizuteria-srebrna/dzieci/kolczyki/angielskie' },
              { label: 'Bigiel', href: '/kategoria/bizuteria-srebrna/dzieci/kolczyki/bigiel' },
              { label: 'Przeciągane', href: '/kategoria/bizuteria-srebrna/dzieci/kolczyki/przeciagane' },
            ],
          },
          { label: 'Bransoletki', href: '/kategoria/bizuteria-srebrna/dzieci/bransoletki' },
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
        href: '/kategoria/motywy/milosc',
        children: [
          { label: 'Nieskończoność', href: '/kategoria/motywy/milosc/nieskonczonosc' },
          { label: 'EKG Serca', href: '/kategoria/motywy/milosc/ekg-serca' },
          { label: 'Kluczyk', href: '/kategoria/motywy/milosc/kluczyk' },
          { label: 'Serca', href: '/kategoria/motywy/milosc/serca' },
          { label: 'Kłódka', href: '/kategoria/motywy/milosc/klodka' },
        ],
      },
      {
        label: 'Na szczęście',
        href: '/kategoria/motywy/na-szczescie',
        children: [
          { label: 'Drzewko', href: '/kategoria/motywy/na-szczescie/drzewko' },
          { label: 'Podkowa', href: '/kategoria/motywy/na-szczescie/podkowa' },
          { label: 'Łapacz snów', href: '/kategoria/motywy/na-szczescie/lapacz-snow' },
          { label: 'Koniczyna', href: '/kategoria/motywy/na-szczescie/koniczyna' },
        ],
      },
      {
        label: 'Kształty',
        href: '/kategoria/motywy/ksztalty',
        children: [
          { label: 'Okrągły', href: '/kategoria/motywy/ksztalty/okragly' },
          { label: 'Półokrągły', href: '/kategoria/motywy/ksztalty/polokragly' },
          { label: 'Trójkąt', href: '/kategoria/motywy/ksztalty/trojkat' },
          { label: 'Kwadrat', href: '/kategoria/motywy/ksztalty/kwadrat' },
          { label: 'Romb', href: '/kategoria/motywy/ksztalty/romb' },
          { label: 'Sześcian', href: '/kategoria/motywy/ksztalty/szescian' },
        ],
      },
      {
        label: 'Zwierzęta/Owady',
        href: '/kategoria/motywy/zwierzeta',
        children: [
          { label: 'Kotek', href: '/kategoria/motywy/zwierzeta/kotek' },
          { label: 'Wąż', href: '/kategoria/motywy/zwierzeta/waz' },
          { label: 'Tygrys', href: '/kategoria/motywy/zwierzeta/tygrys' },
          { label: 'Wilk', href: '/kategoria/motywy/zwierzeta/wilk' },
          { label: 'Sowa', href: '/kategoria/motywy/zwierzeta/sowa' },
          { label: 'Motyl', href: '/kategoria/motywy/zwierzeta/motyl' },
          { label: 'Ważka', href: '/kategoria/motywy/zwierzeta/wazka' },
        ],
      },
      {
        label: 'Kosmos',
        href: '/kategoria/motywy/kosmos',
        children: [
          { label: 'Gwiazdki', href: '/kategoria/motywy/kosmos/gwiazdki' },
          { label: 'Księżyc', href: '/kategoria/motywy/kosmos/ksiezyc' },
        ],
      },
      {
        label: 'Rośliny/Owoce',
        href: '/kategoria/motywy/rosliny',
        children: [
          { label: 'Kwiat', href: '/kategoria/motywy/rosliny/kwiat' },
          { label: 'Liść', href: '/kategoria/motywy/rosliny/lisc' },
          { label: 'Jodła', href: '/kategoria/motywy/rosliny/jodla' },
          { label: 'Drzewo', href: '/kategoria/motywy/rosliny/drzewo' },
          { label: 'Owoce', href: '/kategoria/motywy/rosliny/owoce' },
        ],
      },
      {
        label: 'Inne',
        href: '/kategoria/motywy/inne',
        children: [
          { label: 'Aniołek', href: '/kategoria/motywy/inne/aniolek' },
          { label: 'Ażurowy', href: '/kategoria/motywy/inne/azurowy' },
          { label: 'Grecki', href: '/kategoria/motywy/inne/grecki' },
          { label: 'Skrzydło', href: '/kategoria/motywy/inne/skrzydlo' },
          { label: 'Krzyż', href: '/kategoria/motywy/inne/krzyz' },
          { label: 'Medalik', href: '/kategoria/motywy/inne/medalik' },
          { label: 'Pióro', href: '/kategoria/motywy/inne/pioro' },
          { label: 'Moneta', href: '/kategoria/motywy/inne/moneta' },
          { label: 'Strzała', href: '/kategoria/motywy/inne/strzala' },
        ],
      },
    ],
  },
  {
    label: 'KOMPLETY',
    href: '/kategoria/komplety',
  },
  {
    label: 'DEWOCJONALIA',
    href: '/kategoria/dewocjonalia',
    children: [
      {
        label: 'Medaliki',
        href: '/kategoria/dewocjonalia/medaliki',
        children: [
          { label: 'Złote medaliki', href: '/kategoria/dewocjonalia/medaliki/zlote' },
          { label: 'Srebrne medaliki', href: '/kategoria/dewocjonalia/medaliki/srebrne' },
        ],
      },
      {
        label: 'Krzyżyki',
        href: '/kategoria/dewocjonalia/krzyzyki',
        children: [
          { label: 'Złote krzyżyki', href: '/kategoria/dewocjonalia/krzyzyki/zlote' },
          { label: 'Srebrne krzyżyki', href: '/kategoria/dewocjonalia/krzyzyki/srebrne' },
        ],
      },
      {
        label: 'Różańce',
        href: '/kategoria/dewocjonalia/rozance',
        children: [
          { label: 'Srebrne różańce', href: '/kategoria/dewocjonalia/rozance/srebrne' },
        ],
      },
      {
        label: 'Chrzest',
        href: '/kategoria/dewocjonalia/chrzest',
        children: [
          { label: 'Srebrne smoczki', href: '/kategoria/dewocjonalia/chrzest/smoczki' },
          { label: 'Srebrne łyżeczki', href: '/kategoria/dewocjonalia/chrzest/lyzeczki' },
          { label: 'Srebrne grzechotki', href: '/kategoria/dewocjonalia/chrzest/grzechotki' },
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
