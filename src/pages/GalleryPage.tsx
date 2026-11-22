import { Link } from 'react-router-dom';
import { ArrowRight, MessageCircle } from 'lucide-react';
import {
  MEALS,
  RESTAURANT_IMAGES,
  buildWhatsAppOrderUrl,
} from '../data/meals';
import { PageHero } from '../components/PageHero';
import { DishImage } from '../components/DishImage';

export function GalleryPage() {
  const whatsAppUrl = buildWhatsAppOrderUrl(
    'Hello Easi Mark Kitchen, I saw your food gallery and would like to place an order.'
  );

  return (
    <div>
      <PageHero
        eyebrow="Food Gallery"
        title="Dishes of Easi Mark Kitchen"
        subtitle="Explore our 10 Nigerian dishes across rice classics, beans and plantain, swallows, and traditional Edo & Nigerian soups."
        image={RESTAURANT_IMAGES.culinaryPrep}
        imageAlt="Pot of traditional Nigerian Egusi Soup"
      />

      {/* Circular Signage-Inspired Dish Medallions */}
      <section className="py-14 sm:py-20 bg-[#FAF7F2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold tracking-[0.18em] uppercase text-[#B91C1C]">
              Full 10-Dish Showcase
            </p>
            <h2 className="mt-2 font-display text-3xl sm:text-4xl font-semibold tracking-tight text-[#1C1917]">
              Main Dishes, Swallows &amp; Soups
            </h2>
            <p className="mt-3 text-sm sm:text-base text-[#57534E] leading-relaxed">
              Click any dish medallion below to view details or add it to your order. Photographs
              shown are representative Nigerian dish photography matching each menu item.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
            {MEALS.map((meal) => (
              <Link
                key={meal.id}
                to={`/menu/${meal.id}`}
                className="group bg-[#FFFFFF] rounded-xl border border-[#5A0B1E]/10 p-5 flex flex-col items-center text-center transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md"
              >
                <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden border-4 border-[#5A0B1E] ring-2 ring-[#15803D]/85 shadow-sm bg-[#F4EFE8]">
                  <DishImage
                    src={meal.image}
                    alt={meal.imageAlt}
                    title={meal.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <span className="mt-4 text-[11px] font-semibold uppercase tracking-wider text-[#15803D]">
                  {meal.category}
                </span>
                <h3 className="mt-1 font-display text-base sm:text-lg font-semibold text-[#1C1917] group-hover:text-[#5A0B1E] transition-colors">
                  {meal.name}
                </h3>
                <span className="mt-2 text-xs font-medium text-[#B91C1C] group-hover:underline">
                  View Dish &rarr;
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Editorial Spread */}
      <section className="py-14 sm:py-20 bg-[#F4EFE8]/75 border-y border-[#5A0B1E]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            <div className="md:col-span-7 relative rounded-xl overflow-hidden aspect-[16/10] bg-[#EBE3D5]">
              <DishImage
                src={RESTAURANT_IMAGES.hero}
                alt="Nigerian Jollof Rice served with fried chicken"
                className="w-full h-full object-cover"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent"
              />
              <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                <p className="text-xs font-semibold uppercase tracking-wider text-[#86EFAC]">
                  Main Dishes &amp; Meals
                </p>
                <h3 className="mt-1 font-display text-2xl font-semibold">
                  Jollof Rice &amp; Chicken, Fried Rice &amp; Beef, Beans &amp; Plantain
                </h3>
              </div>
            </div>

            <div className="md:col-span-5 relative rounded-xl overflow-hidden aspect-[16/10] md:aspect-auto bg-[#EBE3D5]">
              <DishImage
                src={RESTAURANT_IMAGES.culinaryPrep}
                alt="Simmering pot of Nigerian Egusi Soup"
                className="w-full h-full object-cover"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent"
              />
              <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                <p className="text-xs font-semibold uppercase tracking-wider text-[#86EFAC]">
                  Soups &amp; Swallow
                </p>
                <h3 className="mt-1 font-display text-2xl font-semibold">
                  Egusi Soup, Black Soup, Ogbono Soup &amp; Semovita / Santana
                </h3>
              </div>
            </div>
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/menu"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-[#5A0B1E] hover:bg-[#731129] text-white text-sm font-medium transition-colors"
            >
              <span>Go to Ordering Menu</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href={whatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-[#15803D] hover:bg-[#166534] text-white text-sm font-medium transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Order on WhatsApp</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
