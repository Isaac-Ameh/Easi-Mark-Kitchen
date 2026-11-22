import { Meal, WebsiteSettings } from '../types/menu';

export const RESTAURANT_INFO = {
  name: 'Easi Mark Kitchen',
  uppercaseName: 'EASI MARK',
  scriptSuffix: 'Kitchen',
  category: 'Nigerian Restaurant & Food Services',
  address:
    '3, Otabor Olubor Isihor, BDPA Street, Back of Nadia Bakery, Ugbowo, Benin City, Nigeria',
  shortLocation: 'Ugbowo, Benin City, Nigeria',
  phoneDisplay: '07076537119',
  phoneTel: 'tel:+2347076537119',
  whatsappNumber: '2347076537119',
  whatsappBaseUrl: 'https://wa.me/2347076537119',
  googleMapsUrl:
    'https://www.google.com/maps/search/?api=1&query=BDPA+Street+Isihor+Ugbowo+Benin+City+Nigeria',
  googleMapsEmbedUrl:
    'https://maps.google.com/maps?q=BDPA%20Ugbowo%20Benin%20City%20Nigeria&t=&z=15&ie=UTF8&iwloc=&output=embed',
};

export const DEFAULT_WEBSITE_SETTINGS: WebsiteSettings = {
  restaurantName: 'Easi Mark Kitchen',
  currency: 'NGN',
  isOpen: true,
  address:
    '3, Otabor Olubor Isihor, BDPA Street, Back of Nadia Bakery, Ugbowo, Benin City, Nigeria',
  phone: '07076537119',
  email: 'contact@easimarkkitchen.ng',
  openingHours: 'Mon – Sat: 8:00 AM – 8:30 PM | Sun: 12:00 PM – 7:30 PM',
  heroSubtitle: 'Satisfying Nigerian Meals, Traditional Soups & Daily Classics in Ugbowo.',
  heroDescription:
    'Serving Jollof Rice & Chicken, Fried Rice & Beef, Beans & Plantain, Spaghetti, Dodo, Santana, Semovita, Egusi Soup, Black Soup, and Ogbono Soup from our BDPA Street kitchen back of Nadia Bakery.',
  welcomeHeading: 'Hearty Nigerian Meals & Edo Favourites in Ugbowo.',
  welcomeBody:
    'Located at 3, Otabor Olubor Isihor, BDPA Street, Back of Nadia Bakery, Ugbowo, Benin City, Easi Mark Kitchen serves freshly prepared Nigerian everyday meals and comforting traditional soups to students, families, and workers across the neighbourhood.',
  menuNotice:
    'All 10 dishes are available for order. Call or chat via 07076537119 if a price is listed as Contact for Price.',
};

export const RESTAURANT_IMAGES = {
  hero: '/src/assets/images/hero_nigerian_jollof.jpg',
  culinaryPrep: '/src/assets/images/culinary_egusi_pot.jpg',
  aboutTable: '/src/assets/images/dish_fried_rice_beef.jpg',
};

export const AVAILABLE_DISH_IMAGES = [
  { label: 'Jollof Rice & Chicken', path: '/src/assets/images/dish_jollof_chicken.jpg' },
  { label: 'Fried Rice & Beef', path: '/src/assets/images/dish_fried_rice_beef.jpg' },
  { label: 'Spaghetti', path: '/src/assets/images/dish_spaghetti.jpg' },
  { label: 'Beans & Plantain', path: '/src/assets/images/dish_beans_plantain.jpg' },
  { label: 'Dodo (Fried Plantain)', path: '/src/assets/images/dish_dodo.jpg' },
  { label: 'Santana (Cassava Fufu)', path: '/src/assets/images/dish_santana.jpg' },
  { label: 'Semovita', path: '/src/assets/images/dish_semovita.jpg' },
  { label: 'Egusi Soup', path: '/src/assets/images/dish_egusi_soup.jpg' },
  { label: 'Black Soup', path: '/src/assets/images/dish_black_soup.jpg' },
  { label: 'Ogbono Soup', path: '/src/assets/images/dish_ogbono_soup.jpg' },
  { label: 'Kitchen Egusi Pot', path: '/src/assets/images/culinary_egusi_pot.jpg' },
  { label: 'Kitchen Jollof Hero', path: '/src/assets/images/hero_nigerian_jollof.jpg' },
];

export const MEALS: Meal[] = [
  {
    id: 'spaghetti',
    name: 'Spaghetti',
    category: 'Main Dishes & Meals',
    shortDescription:
      'Nigerian-style seasoned spaghetti cooked in savoury tomato and pepper sauce, ideal for lunch or dinner.',
    fullDescription:
      'A popular everyday Nigerian meal made with tender spaghetti tossed in a well-seasoned tomato and pepper sauce. A filling, convenient choice for students and residents around Ugbowo.',
    prepStyle: 'Main Dish',
    price: null,
    image: '/src/assets/images/dish_spaghetti.jpg',
    imageAlt: 'Plate of Nigerian-style spaghetti topped with rich tomato pepper sauce and meat',
  },
  {
    id: 'beans-and-plantain',
    name: 'Beans & Plantain',
    category: 'Main Dishes & Meals',
    shortDescription:
      'Hearty Nigerian stewed beans paired with sweet golden fried ripe plantain slices.',
    fullDescription:
      'A classic Nigerian comfort pairing combining rich, tender stewed beans with sweet caramelized fried plantain. Satisfying on its own or paired with your choice of protein.',
    prepStyle: 'Main Dish',
    price: null,
    image: '/src/assets/images/dish_beans_plantain.jpg',
    imageAlt: 'Nigerian stewed beans served with sliced golden fried plantain and beef',
  },
  {
    id: 'dodo',
    name: 'Dodo',
    category: 'Main Dishes & Meals',
    shortDescription:
      'Sweet, golden-brown fried ripe plantain slices—enjoyed as a snack, side, or meal addition.',
    fullDescription:
      'Freshly fried ripe plantain slices with lightly caramelized edges and a soft, sweet centre. A versatile Nigerian favourite that pairs naturally with rice, beans, or spaghetti.',
    prepStyle: 'Side / Main Addition',
    price: null,
    image: '/src/assets/images/dish_dodo.jpg',
    imageAlt: 'Golden fried ripe plantain slices (Dodo)',
  },
  {
    id: 'jollof-rice-and-chicken',
    name: 'Jollof Rice & Chicken',
    category: 'Main Dishes & Meals',
    shortDescription:
      'Fragrant Nigerian jollof rice simmered in rich tomato-pepper sauce and served with seasoned chicken.',
    fullDescription:
      'Nigeria’s signature celebration and everyday favourite. Parboiled rice cooked in rich tomato and pepper seasoning for vibrant colour and flavour, served alongside well-seasoned chicken.',
    prepStyle: 'Signature Rice Dish',
    price: null,
    image: '/src/assets/images/dish_jollof_chicken.jpg',
    imageAlt: 'Plate of Nigerian Jollof Rice served with fried chicken',
    featured: true,
  },
  {
    id: 'fried-rice-and-beef',
    name: 'Fried Rice & Beef',
    category: 'Main Dishes & Meals',
    shortDescription:
      'Colourful Nigerian fried rice stir-fried with savoury spices and served with tender seasoned beef.',
    fullDescription:
      'Seasoned Nigerian-style fried rice prepared with mixed vegetables and aromatic spices, plated with tender, flavourful beef. A favourite choice for lunch, dinner, and takeaways in Ugbowo.',
    prepStyle: 'Signature Rice Dish',
    price: null,
    image: '/src/assets/images/dish_fried_rice_beef.jpg',
    imageAlt: 'Nigerian Fried Rice served with seasoned beef and fried plantain',
    featured: true,
  },
  {
    id: 'santana',
    name: 'Santana',
    category: 'Main Dishes & Meals',
    shortDescription:
      'Traditional Nigerian fermented cassava fufu swallow (also called Santan or Akpu), smooth and filling.',
    fullDescription:
      'Known locally across Nigeria as Santana, Santan, or Akpu, this traditional fermented cassava swallow is pounded smooth and soft. Ideal for pairing with Egusi Soup, Black Soup, or Ogbono Soup.',
    prepStyle: 'Traditional Cassava Swallow',
    price: null,
    image: '/src/assets/images/dish_santana.jpg',
    imageAlt: 'Smooth white fermented cassava fufu swallow (Santana / Akpu) served on a plate',
    featured: true,
  },
  {
    id: 'semovita',
    name: 'Semovita',
    category: 'Soups & Swallow',
    shortDescription:
      'Smooth, warm wheat semolina swallow prepared to pair cleanly with rich Nigerian soups.',
    fullDescription:
      'A popular Nigerian swallow made from refined wheat semolina turned smooth and soft. Pairs effortlessly with Egusi Soup, Black Soup, or Ogbono Soup for a deeply satisfying meal.',
    prepStyle: 'Traditional Swallow',
    price: null,
    image: '/src/assets/images/dish_semovita.jpg',
    imageAlt: 'Smooth Semovita swallow plated alongside Nigerian soup',
  },
  {
    id: 'egusi-soup',
    name: 'Egusi Soup',
    category: 'Soups & Swallow',
    shortDescription:
      'Rich Nigerian melon-seed soup simmered with leafy vegetables and traditional seasoning.',
    fullDescription:
      'A staple across Nigerian homes and restaurants, Egusi Soup is prepared from ground melon seeds cooked with palm oil, traditional seasonings, and green vegetables. Delicious alongside Semovita or Santana.',
    prepStyle: 'Traditional Nigerian Soup',
    price: null,
    image: '/src/assets/images/dish_egusi_soup.jpg',
    imageAlt: 'Nigerian Egusi Soup served with assorted meats and swallow',
    featured: true,
  },
  {
    id: 'black-soup',
    name: 'Black Soup',
    category: 'Soups & Swallow',
    shortDescription:
      'Classic Edo-style dark herbal soup prized in Benin City for its rich, earthy aroma and flavour.',
    fullDescription:
      'A cherished delicacy of Edo State and Benin City (traditionally known as Omoebe), Black Soup gets its distinctive dark colour and aromatic depth from finely ground traditional leaves simmered into a hearty broth. Best enjoyed with Semovita or Santana.',
    prepStyle: 'Edo Traditional Soup',
    price: null,
    image: '/src/assets/images/dish_black_soup.jpg',
    imageAlt: 'Traditional dark Nigerian Black Soup served in a ceramic bowl with swallow',
    featured: true,
  },
  {
    id: 'ogbono-soup',
    name: 'Ogbono Soup',
    category: 'Soups & Swallow',
    shortDescription:
      'Classic Nigerian draw soup made with ground wild bush mango seeds for a smooth, rich finish.',
    fullDescription:
      'Prepared from finely ground ogbono (wild bush mango) seeds cooked gently into a glossy, nutty draw soup. A comforting classic across Benin City that pairs naturally with Semovita or Santana.',
    prepStyle: 'Traditional Draw Soup',
    price: null,
    image: '/src/assets/images/dish_ogbono_soup.jpg',
    imageAlt: 'Bowl of Nigerian Ogbono Soup with assorted meats and leafy greens',
    featured: true,
  },
];

export function formatPrice(price: number | null | undefined): string {
  if (typeof price === 'number' && price > 0) {
    return `₦${price.toLocaleString('en-NG')}`;
  }
  return 'Contact for Price';
}

export function formatNaira(amount: number): string {
  return `₦${amount.toLocaleString('en-NG')}`;
}

export function buildWhatsAppOrderUrl(message: string): string {
  return `${RESTAURANT_INFO.whatsappBaseUrl}?text=${encodeURIComponent(message)}`;
}
