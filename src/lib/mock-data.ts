import type { Product, ProductImage, ProductAttributeValue, Review, Category, Collection, Article } from '@/types';

const imgF = (id: string, url: string, alt: string, position: number, isMain = false): ProductImage => ({ id, url, alt, position, isMain });

const attrVal = (attrName: string, attrSlug: string, val: string, valSlug: string): ProductAttributeValue => ({
  attribute: { id: attrSlug, name: attrName, slug: attrSlug, type: 'SELECT', isFilterable: true, position: 0 },
  value: { id: valSlug, value: val, slug: valSlug, position: 0 },
});

const review = (id: string, name: string, rating: number, content: string, date: string): Review => ({
  id, authorName: name, rating, content, createdAt: date,
});

const createProduct = (overrides: Partial<Product> & { id: string; name: string; slug: string; price: number }): Product => ({
  sku: `SG-${overrides.id}`,
  description: '',
  compareAtPrice: null,
  currency: 'PLN',
  stockQuantity: 5,
  isAvailable: true,
  isNew: false,
  isBestseller: false,
  isFeatured: false,
  weight: null,
  width: null,
  totalLength: null,
  shippingTime: '24 godziny',
  images: [imgF('1', '/images/products/new/1-skrzydla-aniola.webp', overrides.name, 0, true)],
  attributes: [],
  categories: [],
  collections: [],
  relatedProducts: [],
  reviews: [],
  metaTitle: null,
  metaDescription: null,
  ...overrides,
});

export const mockDetailProduct: Product = createProduct({
  id: '2',
  name: 'Srebrny Pierścionek 925 z gładką taflą ażurowy liść R17',
  slug: 'srebrny-pierscionek-925-lisc-r17',
  sku: 'SG-210-PR-S-AZ',
  price: 119,
  stockQuantity: 8,
  isNew: true,
  weight: 2.8,
  width: 0.9,
  totalLength: null,
  description: 'Elegancki pierścionek ze srebra próby 925 z ażurowym motywem liścia. Gładka, polerowana tafla pięknie odbija światło, a precyzyjne ażurowe wykończenie nadaje biżuterii lekkości i charakteru. Idealny na co dzień i jako wyjątkowy prezent. Dostępny w różnych rozmiarach. Każdy pierścionek jest ręcznie wykańczany w naszej pracowni w Gdańsku.',
  images: [
    imgF('i1', '/images/products/new/2-pierscionek-lisc.webp', 'Srebrny Pierścionek ażurowy liść - przód', 0, true),
    imgF('i2', '/images/products/new/3-pierscionek-drut.webp', 'Srebrny Pierścionek - wariant oksydowany', 1),
    imgF('i3', '/images/products/new/4-bransoletka-celebrytka.webp', 'Srebrny Pierścionek - do kompletu z bransoletką', 2),
    imgF('i4', '/images/products/new/6-kolczyki-szara-perla.webp', 'Srebrny Pierścionek - do kompletu z kolczykami', 3),
  ],
  attributes: [
    attrVal('Stan', 'stan', 'Nowy', 'nowy'),
    attrVal('Dla kogo', 'dla-kogo', 'Dla Niej', 'dla-niej'),
    attrVal('Surowiec', 'surowiec', 'Srebro', 'srebro'),
    attrVal('Kamień', 'kamien', 'Bez kamienia', 'bez-kamienia'),
    attrVal('Próba', 'proba', '925', '925'),
    attrVal('Waga', 'waga', '2,8 g', '2-8-g'),
    attrVal('Szerokość', 'szerokosc', '0,9 cm', '0-9-cm'),
    attrVal('Motyw', 'motyw', 'Liść', 'lisc'),
    attrVal('Wykończenie', 'wykonczenie', 'Ażurowy', 'azurowy'),
  ],
  reviews: [
    review('r1', 'Anna K.', 5, 'Przepiękne kolczyki! Wykonanie jest rewelacyjne, a pozłota wygląda jak prawdziwe złoto. Bardzo szybka wysyłka i śliczne opakowanie.', '2026-01-15'),
    review('r2', 'Magdalena W.', 4, 'Kolczyki są śliczne, dokładnie takie jak na zdjęciu. Jedyny minus to że są trochę cięższe niż się spodziewałam, ale ogólnie polecam.', '2025-12-20'),
    review('r3', 'Katarzyna P.', 5, 'Kupiłam jako prezent dla mamy - była zachwycona! Jakość srebra i cyrkoni na najwyższym poziomie.', '2025-11-05'),
  ],
});

export const mockNewProducts: Product[] = [
  createProduct({ id: '1', name: 'Srebrne kolczyki 925 długie wiszące pozłacane Skrzydła Anioła', slug: 'srebrne-kolczyki-925-skrzydla-aniola', price: 169, isNew: true, images: [imgF('1', '/images/products/new/1-skrzydla-aniola.webp', 'Srebrne kolczyki Skrzydła Anioła', 0, true)] }),
  createProduct({ id: '2', name: 'Srebrny Pierścionek 925 z gładką taflą ażurowy liść R17', slug: 'srebrny-pierscionek-925-lisc-r17', price: 119, isNew: true, images: [imgF('1', '/images/products/new/2-pierscionek-lisc.webp', 'Srebrny Pierścionek liść', 0, true)] }),
  createProduct({ id: '3', name: 'Srebrny Pierścionek 925 drut kolczasty oksydowany R20', slug: 'srebrny-pierscionek-925-drut-kolczasty-r20', price: 269, isNew: true, images: [imgF('1', '/images/products/new/3-pierscionek-drut.webp', 'Srebrny Pierścionek drut kolczasty', 0, true)] }),
  createProduct({ id: '4', name: 'Srebrna bransoletka 925 pozłacana złota celebrytka połączone ogniwa', slug: 'srebrna-bransoletka-925-celebrytka', price: 449, isNew: true, images: [imgF('1', '/images/products/new/4-bransoletka-celebrytka.webp', 'Srebrna bransoletka celebrytka', 0, true)] }),
  createProduct({ id: '5', name: 'Srebrne kolczyki 925 pozłacane wiszące gładkie błyszczące na biglu', slug: 'srebrne-kolczyki-925-pozlacane-wiszace', price: 155, isNew: true, images: [imgF('1', '/images/products/new/5-kolczyki-pozlacane-wiszace.webp', 'Srebrne kolczyki pozłacane wiszące', 0, true)] }),
  createProduct({ id: '6', name: 'Srebrne kolczyki okrągłe gładkie pr.925 z szarą perłą 12 mm', slug: 'srebrne-kolczyki-okragle-z-szara-perla', price: 175, isNew: true, images: [imgF('1', '/images/products/new/6-kolczyki-szara-perla.webp', 'Srebrne kolczyki z szarą perłą', 0, true)] }),
  createProduct({ id: '7', name: 'Srebrny wisiorek, krzyżyk pr.925 z cyrkoniami', slug: 'srebrny-wisiorek-krzyzyk-z-cyrkoniami', price: 89, isNew: true, images: [imgF('1', '/images/products/new/7-wisiorek-krzyzyk.webp', 'Srebrny wisiorek krzyżyk', 0, true)] }),
  createProduct({ id: '8', name: 'Srebrne kolczyki 925 pozłacane z perłą białą', slug: 'srebrne-kolczyki-925-pozlacane-z-perla', price: 145, isNew: true, images: [imgF('1', '/images/products/new/8-wisiorek-cyrkonie.webp', 'Srebrne kolczyki z perłą', 0, true)] }),
];

export const mockBestsellers: Product[] = [
  createProduct({ id: '10', name: 'Srebrne kolczyki pozłacane drzewko szczęścia', slug: 'srebrne-kolczyki-pozlacane-drzewko-szczescia', price: 47, isBestseller: true, images: [imgF('1', '/images/products/bestsellers/1-drzewko-szczescia.webp', 'Kolczyki drzewko szczęścia', 0, true)] }),
  createProduct({ id: '11', name: 'Srebrne kolczyki z cyrkoniami skrzydła Anioła', slug: 'srebrne-kolczyki-z-cyrkoniami-skrzydla-aniola', price: 62, isBestseller: true, images: [imgF('1', '/images/products/bestsellers/2-skrzydla-aniola.webp', 'Kolczyki skrzydła Anioła', 0, true)] }),
  createProduct({ id: '12', name: 'Srebrne kolczyki kulki 3 mm', slug: 'srebrne-kolczyki-kulki-3mm', price: 39, isBestseller: true, images: [imgF('1', '/images/products/bestsellers/3-kulki-3mm.webp', 'Kolczyki kulki 3mm', 0, true)] }),
  createProduct({ id: '13', name: 'Srebrne kolczyki kuleczki 5 mm polerowane srebro', slug: 'srebrne-kolczyki-kuleczki-5mm', price: 42, isBestseller: true, images: [imgF('1', '/images/products/bestsellers/4-kuleczki-5mm.webp', 'Kolczyki kuleczki 5mm', 0, true)] }),
  createProduct({ id: '14', name: 'Srebrne kolczyki pozłacane gładkie półokrągłe z cyrkoniami', slug: 'srebrne-kolczyki-pozlacane-polokragle', price: 109, isBestseller: true, images: [imgF('1', '/images/products/bestsellers/5-polokragle-cyrkonie.webp', 'Kolczyki półokrągłe z cyrkoniami', 0, true)] }),
  createProduct({ id: '15', name: 'Srebrne kolczyki nausznice, gładkie', slug: 'srebrne-kolczyki-nausznice-gladkie', price: 55, isBestseller: true, images: [imgF('1', '/images/products/bestsellers/6-nausznice.webp', 'Kolczyki nausznice', 0, true)] }),
  createProduct({ id: '16', name: 'Srebrne kolczyki z czerwoną perłą 12 mm', slug: 'srebrne-kolczyki-z-czerwona-perla', price: 175, isBestseller: true, images: [imgF('1', '/images/products/bestsellers/7-czerwona-perla.webp', 'Kolczyki z czerwoną perłą', 0, true)] }),
];

export const mockFeaturedProducts: Product[] = [
  createProduct({ id: '20', name: 'Srebrne kolczyki pozłacane na łańcuszku serce z czarnymi cyrkoniami', slug: 'kolczyki-serce-czarne-cyrkonie', price: 99, isFeatured: true, images: [imgF('1', '/images/products/featured/1-serce-czarne-cyrkonie.webp', 'Kolczyki serce czarne cyrkonie', 0, true)] }),
  createProduct({ id: '21', name: 'Srebrne kolczyki pozłacane okrągłe z greckim wzorem', slug: 'kolczyki-pozlacane-grecki-wzor-okragle', price: 99, isFeatured: true, isNew: true, images: [imgF('1', '/images/products/featured/2-grecki-wzor-okragle.webp', 'Kolczyki grecki wzór okrągłe', 0, true)] }),
  createProduct({ id: '22', name: 'Srebrne kolczyki pozłacane z greckim wzorem', slug: 'kolczyki-pozlacane-grecki-wzor', price: 99, isFeatured: true, isNew: true, images: [imgF('1', '/images/products/featured/3-grecki-wzor.webp', 'Kolczyki grecki wzór', 0, true)] }),
  createProduct({ id: '23', name: 'Srebrna bransoletka oksydowana z dużymi błyszczącymi zielonymi cyrkoniami', slug: 'bransoletka-oksydowana-zielone-cyrkonie', price: 499, isFeatured: true, images: [imgF('1', '/images/products/featured/4-bransoletka-zielone-cyrkonie.webp', 'Bransoletka zielone cyrkonie', 0, true)] }),
];

export const mockAllProducts = [...mockNewProducts, ...mockBestsellers, ...mockFeaturedProducts];

export const mockCategories: Category[] = [
  { id: '1', name: 'Biżuteria Złota', slug: 'bizuteria-zlota', description: null, parentId: null, parent: null, children: [], image: '/images/categories/gold.jpg', position: 0, productCount: 350, metaTitle: null, metaDescription: null },
  { id: '2', name: 'Biżuteria Srebrna', slug: 'bizuteria-srebrna', description: null, parentId: null, parent: null, children: [], image: '/images/categories/silver.jpg', position: 1, productCount: 2500, metaTitle: null, metaDescription: null },
  { id: '3', name: 'Motywy', slug: 'motywy', description: null, parentId: null, parent: null, children: [], image: '/images/categories/motifs.jpg', position: 2, productCount: 800, metaTitle: null, metaDescription: null },
  { id: '4', name: 'Dewocjonalia', slug: 'dewocjonalia', description: null, parentId: null, parent: null, children: [], image: '/images/categories/devotional.jpg', position: 3, productCount: 200, metaTitle: null, metaDescription: null },
];

export const mockCollections: Collection[] = [
  { id: '1', name: 'Eleganckie Odbicie', slug: 'eleganckie-odbicie', description: 'Kolekcja gładkiej, lustrzanej biżuterii srebrnej', image: '/images/collections/eleganckie-odbicie.webp', position: 0, metaTitle: null, metaDescription: null },
  { id: '2', name: 'Mroczny Blask', slug: 'mroczny-blask', description: 'Kolekcja biżuterii oksydowanej', image: '/images/collections/eleganckie-odbicie-2.webp', position: 1, metaTitle: null, metaDescription: null },
  { id: '3', name: 'Czerwona Aura', slug: 'czerwona-aura', description: 'Kolekcja biżuterii z czerwonymi kamieniami', image: '/images/collections/eleganckie-odbicie-3.jpg', position: 2, metaTitle: null, metaDescription: null },
];

export const mockArticles: Article[] = [
  { id: '1', title: 'Jak dobrać rozmiar pierścionka?', slug: 'jak-dobrac-rozmiar-pierscionka', content: '', excerpt: 'Poradnik jak prawidłowo zmierzyć palec i dobrać odpowiedni rozmiar pierścionka.', image: '/images/blog/rozmiar-pierscionka.jpg', author: 'Susetti', publishedAt: '2026-02-20', metaTitle: null, metaDescription: null },
  { id: '2', title: 'Oksydowana biżuteria srebrna 925', slug: 'mroczny-blask-oksydowana-bizuteria-srebro-925', content: '', excerpt: 'Wszystko co musisz wiedzieć o oksydowanej biżuterii ze srebra próby 925.', image: '/images/blog/oksydowana-bizuteria.jpg', author: 'Susetti', publishedAt: '2026-02-20', metaTitle: null, metaDescription: null },
  { id: '3', title: 'Rodzaje zapięcia kolczyków!', slug: 'rodzaje-zapiecia-kolczykow', content: '', excerpt: 'Poznaj różne rodzaje zapięć kolczyków i dowiedz się, który będzie najlepszy dla Ciebie.', image: '/images/blog/rodzaje-zapiecia.jpg', author: 'Susetti', publishedAt: '2024-04-01', metaTitle: null, metaDescription: null },
];
