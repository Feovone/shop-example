export const SITE_NAME = 'Susetti';
export const SITE_DESCRIPTION = 'Sklep internetowy jubilerski z biżuterią - biżuteria damska, męska online';
export const SITE_URL = 'https://susetti.pl';

export const COMPANY = {
  name: 'Silit Group Maciej Suska',
  address: 'ul. Astronomów 16, 80-299 Gdańsk',
  voivodeship: 'woj. pomorskie',
  phone: '508-107-233',
  email: 'sklepsusetti@gmail.com',
  nip: '5841956567',
  regon: '192599663',
  bankAccount: '09 1140 2004 0000 3102 8014 8568',
  bankName: 'mBank',
  hours: 'Poniedziałek - Piątek, 07:00 - 15:00',
  social: {
    facebook: 'https://www.facebook.com/susettipl-116435856934458',
    instagram: 'https://www.instagram.com/susetti_pl/',
    opineo: 'https://www.opineo.pl/opinie/susetti-pl',
  },
};

export const FREE_SHIPPING_THRESHOLD = 200;
export const CURRENCY = 'PLN';
export const CURRENCY_SYMBOL = 'zł';
export const LOCALE = 'pl-PL';

export const PRODUCTS_PER_PAGE = 20;

export const SORT_OPTIONS = [
  { label: 'Domyślne', value: 'default' },
  { label: 'Nazwa od A do Z', value: 'name-asc' },
  { label: 'Nazwa od Z do A', value: 'name-desc' },
  { label: 'Od najniższej ceny', value: 'price-asc' },
  { label: 'Od najwyższej ceny', value: 'price-desc' },
] as const;

export const SHIPPING_METHODS = [
  { id: 'inpost-paczkomat', name: 'Paczkomat InPost', price: 16, freeFrom: FREE_SHIPPING_THRESHOLD, estimatedDays: '1-2 dni robocze' },
  { id: 'inpost-courier', name: 'Kurier InPost', price: 19, freeFrom: FREE_SHIPPING_THRESHOLD, estimatedDays: '1-2 dni robocze' },
  { id: 'inpost-courier-cod', name: 'Kurier InPost (pobranie)', price: 25, freeFrom: FREE_SHIPPING_THRESHOLD, estimatedDays: '1-2 dni robocze' },
  { id: 'dpd', name: 'Kurier DPD', price: 18, freeFrom: FREE_SHIPPING_THRESHOLD, estimatedDays: '1-2 dni robocze' },
  { id: 'dpd-cod', name: 'Kurier DPD (pobranie)', price: 21, freeFrom: FREE_SHIPPING_THRESHOLD, estimatedDays: '1-2 dni robocze' },
  { id: 'dpd-pickup', name: 'DPD Pickup', price: 11, freeFrom: FREE_SHIPPING_THRESHOLD, estimatedDays: '1-2 dni robocze' },
  { id: 'personal', name: 'Odbiór osobisty (Gdańsk)', price: 0, freeFrom: null, estimatedDays: 'Pon-Pt 07:00-15:00' },
] as const;
