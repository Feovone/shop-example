import type { Metadata } from 'next';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';

type Props = {
  params: Promise<{ slug: string }>;
};

const infoPages: Record<string, { title: string; content: string }> = {
  'o-firmie': {
    title: 'O firmie',
    content: `
      <h2>Poznaj Susetti — Pasja i Rzemiosło</h2>
      <h3>Autorska Pracownia w Sercu Gdańska</h3>
      <p>Susetti to polska marka biżuterii, która łączy tradycyjne rzemiosło złotnicze z nowoczesnym designem. Każdy element naszej biżuterii jest projektowany i tworzony w naszej pracowni w Gdańsku.</p>
      <h3>Jak powstaje biżuteria Susetti?</h3>
      <p><strong>Krok 1: Koncepcja i Projekt</strong> — Każdy wzór zaczyna się od inspiracji i ręcznego szkicu.</p>
      <p><strong>Krok 2: Mistrzowskie Wykonanie</strong> — Nasi złotnicy przekształcają projekty w rzeczywistość.</p>
      <p><strong>Krok 3: Ręczne Wykończenie</strong> — Każdy element jest starannie polerowany i kontrolowany.</p>
      <p><em>Projektujemy. Tworzymy. Inspirujemy.</em></p>
    `,
  },
  'kontakt': {
    title: 'Kontakt',
    content: `
      <h2>Kontakt</h2>
      <p><strong>Silit Group Maciej Suska</strong></p>
      <p>ul. Astronomów 16, 80-299 Gdańsk, woj. pomorskie</p>
      <p>NIP: 5841956567 | REGON: 192599663</p>
      <h3>Godziny pracy</h3>
      <p>Poniedziałek - Piątek, 07:00 - 15:00</p>
      <h3>Dane kontaktowe</h3>
      <p>Telefon: <a href="tel:508107233">508-107-233</a></p>
      <p>Email: <a href="mailto:sklepsusetti@gmail.com">sklepsusetti@gmail.com</a></p>
    `,
  },
  'faq': {
    title: 'FAQ',
    content: `
      <h2>Najczęściej zadawane pytania</h2>
      <h3>Zamówienia</h3>
      <p><strong>Jak złożyć zamówienie?</strong></p>
      <p>Wybierz produkty, dodaj je do koszyka i przejdź do realizacji zamówienia.</p>
      <p><strong>Czy mogę zmienić zamówienie po złożeniu?</strong></p>
      <p>Tak, skontaktuj się z nami telefonicznie lub mailowo jak najszybciej.</p>
      <h3>Wysyłka i płatności</h3>
      <p><strong>Ile kosztuje wysyłka?</strong></p>
      <p>Wysyłka jest darmowa od 200 zł. Szczegółowe koszty znajdziesz na stronie Koszty wysyłki.</p>
      <h3>Zwroty i reklamacje</h3>
      <p><strong>Czy mogę zwrócić produkt?</strong></p>
      <p>Tak, masz 30 dni na zwrot towaru. Szczegóły na stronie Zwroty.</p>
    `,
  },
  'regulamin': {
    title: 'Regulamin',
    content: '<p>Pełna treść regulaminu zostanie załadowana z API...</p>',
  },
  'polityka-prywatnosci': {
    title: 'Polityka prywatności',
    content: '<p>Pełna treść polityki prywatności zostanie załadowana z API...</p>',
  },
  'jak-kupowac': {
    title: 'Jak kupować?',
    content: `
      <h2>Jak kupować w sklepie Susetti?</h2>
      <p><strong>Krok 1:</strong> Wybierz produkty i dodaj je do koszyka</p>
      <p><strong>Krok 2:</strong> Przejdź do koszyka i sprawdź zamówienie</p>
      <p><strong>Krok 3:</strong> Wybierz metodę dostawy i płatności</p>
      <p><strong>Krok 4:</strong> Potwierdź zamówienie i czekaj na przesyłkę</p>
    `,
  },
  'koszty-wysylki': {
    title: 'Koszty wysyłki',
    content: `
      <h2>Koszty wysyłki</h2>
      <p><strong>Darmowa dostawa od 200 zł!</strong></p>
      <table>
        <tr><th>Metoda</th><th>Koszt</th></tr>
        <tr><td>Paczkomat InPost</td><td>16 zł</td></tr>
        <tr><td>Kurier InPost</td><td>19 zł</td></tr>
        <tr><td>Kurier InPost (pobranie)</td><td>25 zł</td></tr>
        <tr><td>Kurier DPD</td><td>18 zł</td></tr>
        <tr><td>Kurier DPD (pobranie)</td><td>21 zł</td></tr>
        <tr><td>DPD Pickup</td><td>11 zł</td></tr>
        <tr><td>Odbiór osobisty</td><td>0 zł</td></tr>
      </table>
      <p>Czas realizacji: 1-2 dni robocze</p>
    `,
  },
  'czas-realizacji-zamowienia': {
    title: 'Czas realizacji zamówienia',
    content: '<p>Zamówienia realizujemy w ciągu 1-2 dni roboczych od momentu zaksięgowania wpłaty.</p>',
  },
  'zwroty': {
    title: 'Zwroty',
    content: `
      <h2>Zwroty</h2>
      <p>Masz <strong>30 dni</strong> na zwrot towaru od dnia otrzymania przesyłki.</p>
      <h3>Metody zwrotu:</h3>
      <p>1. <strong>Darmowy zwrot przez InPost</strong> — na stronie szybkiezwroty.pl</p>
      <p>2. <strong>Samodzielna wysyłka</strong> — na adres firmy</p>
      <p>3. <strong>Zwrot osobisty</strong> — w naszym salonie w Gdańsku</p>
      <p>Zwrot środków następuje w ciągu 14 dni od otrzymania zwrotu.</p>
    `,
  },
  'formy-platnosci': {
    title: 'Formy płatności',
    content: '<p>Akceptujemy: przelewy online, BLIK, karty Visa/Mastercard, przelew tradycyjny, pobranie, gotówka przy odbiorze osobistym.</p>',
  },
  'reklamacje': {
    title: 'Reklamacje',
    content: '<p>Wszystkie produkty objęte są 2-letnią gwarancją. W przypadku reklamacji skontaktuj się z nami mailowo.</p>',
  },
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const page = infoPages[slug];
  return {
    title: page?.title ?? 'Informacje',
    description: `${page?.title ?? 'Informacje'} - sklep internetowy Susetti`,
  };
}

export default async function InfoPage({ params }: Props) {
  const { slug } = await params;
  const page = infoPages[slug];

  if (!page) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-16 text-center">
        <h1 className="text-2xl font-serif font-bold">Strona nie znaleziona</h1>
        <p className="mt-2 text-text-muted">Podana strona nie istnieje.</p>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-3xl px-4 pb-12">
      <Breadcrumbs items={[{ label: page.title }]} />

      <h1 className="text-2xl md:text-3xl font-serif font-bold mt-4 mb-8">{page.title}</h1>

      <div
        className="prose max-w-none prose-headings:font-serif prose-h2:text-xl prose-h3:text-lg prose-a:text-gold prose-a:no-underline hover:prose-a:underline prose-table:border-collapse prose-td:border prose-td:border-border prose-td:px-3 prose-td:py-2 prose-th:border prose-th:border-border prose-th:px-3 prose-th:py-2 prose-th:bg-bg-secondary"
        dangerouslySetInnerHTML={{ __html: page.content }}
      />
    </div>
  );
}
