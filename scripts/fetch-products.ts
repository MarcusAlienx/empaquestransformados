import fetch from 'node-fetch';
import * as cheerio from 'cheerio';

interface ScrapedProduct {
  id: string;
  name: string;
  description: string;
  category: string;
  subcategory: string;
  images: string[];
  price?: string;
  url: string;
}

const categories = [
  { category: 'alimenticio', sub: 'bolsa', url: 'https://empaquestransformados.com/categoria/alimenticio/bolsa/' },
  { category: 'alimenticio', sub: 'gofrados', url: 'https://empaquestransformados.com/categoria/alimenticio/gofrados/' },
  { category: 'alimenticio', sub: 'stand-up', url: 'https://empaquestransformados.com/categoria/alimenticio/stand-up/' },
  { category: 'alimenticio', sub: 'empacadoras', url: 'https://empaquestransformados.com/categoria/alimenticio/empacadoras/' },
  { category: 'alimenticio', sub: 'refacciones', url: 'https://empaquestransformados.com/categoria/alimenticio/refacciones/' },
  { category: 'alimenticio', sub: 'vitafilm', url: 'https://empaquestransformados.com/categoria/alimenticio/vitafilm/' },
  { category: 'alimenticio', sub: 'varios', url: 'https://empaquestransformados.com/categoria/alimenticio/varios/' },
  { category: 'alimenticio', sub: 'especialidades', url: 'https://empaquestransformados.com/categoria/alimenticio/especialidades/' },
  { category: 'industrial', sub: 'cintas', url: 'https://empaquestransformados.com/categoria/industrial/cintas/' },
  { category: 'industrial', sub: 'proteccion', url: 'https://empaquestransformados.com/categoria/industrial/proteccion/' },
  { category: 'industrial', sub: 'carton', url: 'https://empaquestransformados.com/categoria/industrial/carton/' },
  { category: 'industrial', sub: 'polietileno', url: 'https://empaquestransformados.com/categoria/industrial/polietileno/' },
  { category: 'industrial', sub: 'maquinaria', url: 'https://empaquestransformados.com/categoria/industrial/maquinaria/' },
  { category: 'industrial', sub: 'especialidades', url: 'https://empaquestransformados.com/categoria/industrial/especialidades/' },
];

async function scrapeCategory(cat: { category: string; sub: string; url: string }): Promise<ScrapedProduct[]> {
  const res = await fetch(cat.url);
  const html = await res.text();
  const $ = cheerio.load(html);
  const products: ScrapedProduct[] = [];
  $('ul.products li.product').each((_, el) => {
    const link = $(el).find('a.woocommerce-LoopProduct-link').attr('href') || '';
    const name = $(el).find('h2.woocommerce-loop-product__title').text().trim();
    const img = $(el).find('img').attr('src') || '';
    const price = $(el).find('.price').text().trim();
    const id = link.split('/').slice(-2, -1)[0];
    products.push({
      id,
      name,
      description: '',
      category: cat.category,
      subcategory: cat.sub,
      images: [img],
      price,
      url: link,
    });
  });
  return products;
}

(async () => {
  const all: ScrapedProduct[] = [];
  for (const cat of categories) {
    console.log(`Scraping ${cat.category}/${cat.sub}`);
    const items = await scrapeCategory(cat);
    all.push(...items);
  }
  console.log(JSON.stringify(all, null, 2));
})();
