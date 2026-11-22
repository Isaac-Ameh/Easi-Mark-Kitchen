import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import {
  ArrowRight,
  Flame,
  MapPin,
  MessageCircle,
  Phone,
  Soup,
  UtensilsCrossed,
} from 'lucide-react';
import {
  MEALS,
  RESTAURANT_IMAGES,
  RESTAURANT_INFO,
  buildWhatsAppOrderUrl,
} from '../data/meals';
import { MealCard } from '../components/MealCard';
import { DishImage } from '../components/DishImage';

const FEATURED_MEALS = MEALS.filter((meal) => meal.featured).slice(0, 6);

const CIRCULAR_SHOWCASE_IDS = [
  'jollof-rice-and-chicken',
  'fried-rice-and-beef',
  'egusi-soup',
  'black-soup',
  'ogbono-soup',
  'beans-and-plantain',
];

const CIRCULAR_SHOWCASE_MEALS = CIRCULAR_SHOWCASE_IDS.map((id) =>
  MEALS.find((meal) => meal.id === id)
).filter((m): m is NonNullable<typeof m> => Boolean(m));

export function HomePage() {
  const quickWhatsAppUrl = buildWhatsAppOrderUrl(
    'Hello Easi Mark Kitchen, I would like to place an order or confirm today’s meal prices.'
  );

  return (
    <div>
      {/* Full-Viewport Burgundy & Food Hero */}
      <section className="relative min-h-[92vh] flex items-center bg-[#5A0B1E] text-[#FAF7F2] overflow-hidden">
        <div className="absolute inset-0">
          <DishImage
            src={RESTAURANT_IMAGES.hero}
            alt="Nigerian jollof rice served with seasoned chicken"
            loading="eager"
            className="w-full h-full object-cover object-center"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-r from-[#3A0613]/95 via-[#5A0B1E]/80 to-[#3A0613]/55"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-t from-[#3A0613]/85 via-transparent to-[#3A0613]/40"
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 pt-28 pb-16 sm:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-7 max-w-2xl"
            >
              <p className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-[0.18em] uppercase text-[#86EFAC]">
                <MapPin className="w-3.5 h-3.5 shrink-0" />
                <span>Ugbowo, Benin City · Nigeria</span>
              </p>

              <h1 className="mt-4 font-display text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-white text-balance leading-[1.08]">
                <span className="font-sans font-extrabold uppercase tracking-[0.04em]">
                  EASI MARK{' '}
                </span>
                <span className="font-script text-[#FCA5A5] font-bold text-5xl sm:text-6xl lg:text-[4.25rem]">
                  Kitchen
                </span>
              </h1>

              <p className="mt-4 text-lg sm:text-xl text-[#FAF7F2]/95 font-medium">
                Satisfying Nigerian Meals, Traditional Soups &amp; Daily Classics in Ugbowo.
              </p>

              <p className="mt-3 text-sm sm:text-base text-[#FAF7F2]/80 leading-relaxed max-w-xl">
                Serving Jollof Rice &amp; Chicken, Fried Rice &amp; Beef, Beans &amp; Plantain,
                Spaghetti, Dodo, Santana, Semovita, Egusi Soup, Black Soup, and Ogbono Soup from our
                BDPA Street kitchen back of Nadia Bakery.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-3.5">
                <Link
                  to="/menu"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-[#B91C1C] hover:bg-[#991B1B] text-white text-sm sm:text-base font-semibold transition-colors whitespace-nowrap shrink-0 shadow-sm"
                >
                  <span>Explore Our Menu</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href={quickWhatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-[#15803D] hover:bg-[#166534] text-white text-sm sm:text-base font-semibold transition-colors whitespace-nowrap shrink-0 shadow-sm"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Order on WhatsApp</span>
                </a>
                <a
                  href={RESTAURANT_INFO.phoneTel}
                  className="inline-flex items-center gap-2 px-5 py-3.5 rounded-lg border border-white/35 bg-black/25 hover:bg-white/15 text-white text-sm font-medium backdrop-blur-xs transition-colors whitespace-nowrap shrink-0 tabular-nums"
                >
                  <Phone className="w-4 h-4" />
                  <span>{RESTAURANT_INFO.phoneDisplay}</span>
                </a>
              </div>
            </motion.div>

            {/* Circular-Framed Dish Showcase honoring Easi Mark Kitchen physical signage */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-5"
            >
              <div className="rounded-2xl bg-[#3A0613]/75 backdrop-blur-sm border border-white/15 p-5 sm:p-6">
                <div className="flex items-center justify-between gap-2 pb-4 border-b border-white/15">
                  <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[#86EFAC]">
                    On the Menu Today
                  </span>
                  <Link
                    to="/menu"
                    className="text-xs font-medium text-[#FAF7F2]/85 hover:text-white underline underline-offset-4"
                  >
                    See all 10 dishes
                  </Link>
                </div>

                <div className="mt-5 grid grid-cols-3 gap-4">
                  {CIRCULAR_SHOWCASE_MEALS.map((meal) => (
                    <Link
                      key={meal.id}
                      to={`/menu/${meal.id}`}
                      className="group flex flex-col items-center text-center"
                    >
                      <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden border-[3px] border-white ring-2 ring-[#15803D] shadow-md transition-transform duration-300 group-hover:scale-105 bg-[#5A0B1E]">
                        <DishImage
                          src={meal.image}
                          alt={meal.imageAlt}
                          title={meal.name}
                          loading="eager"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <span className="mt-2 text-xs font-medium text-[#FAF7F2] group-hover:text-[#86EFAC] transition-colors line-clamp-2 leading-tight">
                        {meal.name}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section A: Welcome to Easi Mark Kitchen */}
      <section className="py-16 sm:py-24 bg-[#FAF7F2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-stretch">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-6 flex flex-col justify-center"
            >
              <p className="text-xs font-semibold tracking-[0.18em] uppercase text-[#B91C1C]">
                Welcome to Easi Mark Kitchen
              </p>
              <h2 className="mt-3 font-display text-3xl sm:text-4xl font-semibold tracking-tight text-[#1C1917] text-balance leading-[1.15]">
                Hearty Nigerian Meals &amp; Edo Favourites in Ugbowo.
              </h2>
              <p className="mt-5 text-base text-[#57534E] leading-relaxed">
                Located at{' '}
                <strong className="font-semibold text-[#1C1917]">
                  3, Otabor Olubor Isihor, BDPA Street, Back of Nadia Bakery, Ugbowo, Benin City
                </strong>
                , Easi Mark Kitchen serves freshly prepared Nigerian everyday meals and comforting
                traditional soups to students, families, and workers across the neighbourhood.
              </p>
              <p className="mt-4 text-base text-[#57534E] leading-relaxed">
                From quick plates of seasoned Spaghetti, Beans &amp; Plantain, and crispy Dodo to
                Jollof Rice &amp; Chicken, Fried Rice &amp; Beef, and warm Semovita or Santana
                paired with Egusi Soup, Black Soup, or Ogbono Soup, every item on our menu is made to
                keep you coming back.
              </p>
              <div className="mt-7 flex flex-wrap items-center gap-5">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#5A0B1E] hover:text-[#B91C1C] transition-colors"
                >
                  <span>About Our Kitchen</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#15803D] hover:text-[#166534] transition-colors"
                >
                  <MapPin className="w-4 h-4" />
                  <span>Find Us in Ugbowo</span>
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-6"
            >
              <div className="relative h-full min-h-[300px] sm:min-h-[380px] rounded-xl overflow-hidden bg-[#F4EFE8] border border-[#5A0B1E]/10">
                <DishImage
                  src={RESTAURANT_IMAGES.culinaryPrep}
                  alt="Pot of traditional Nigerian Egusi Soup"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section B: Featured Menu Dishes */}
      <section className="py-16 sm:py-24 bg-[#F4EFE8]/75 border-y border-[#5A0B1E]/8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold tracking-[0.18em] uppercase text-[#B91C1C]">
                From the Kitchen
              </p>
              <h2 className="mt-2 font-display text-3xl sm:text-4xl font-semibold tracking-tight text-[#1C1917] text-balance">
                Signature Nigerian Dishes &amp; Soups
              </h2>
              <p className="mt-3 text-base text-[#57534E] leading-relaxed">
                Select dishes to build your order and send directly via WhatsApp or call{' '}
                <a
                  href={RESTAURANT_INFO.phoneTel}
                  className="font-semibold text-[#5A0B1E] hover:underline tabular-nums"
                >
                  {RESTAURANT_INFO.phoneDisplay}
                </a>{' '}
                to confirm current prices.
              </p>
            </div>
            <Link
              to="/menu"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#5A0B1E] hover:text-[#B91C1C] transition-colors whitespace-nowrap shrink-0"
            >
              <span>View Full Menu ({MEALS.length})</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {FEATURED_MEALS.map((meal) => (
              <MealCard key={meal.id} meal={meal} />
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/menu"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg bg-[#5A0B1E] hover:bg-[#731129] text-[#FAF7F2] text-sm sm:text-base font-medium transition-colors"
            >
              <span>Explore All 10 Dishes</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Section C: Why Choose Easi Mark Kitchen */}
      <section className="py-16 sm:py-24 bg-[#FAF7F2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold tracking-[0.18em] uppercase text-[#B91C1C]">
              Why Dine With Us
            </p>
            <h2 className="mt-2 font-display text-3xl sm:text-4xl font-semibold tracking-tight text-[#1C1917] text-balance">
              Why Ugbowo Chooses Easi Mark Kitchen
            </h2>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
            <div className="pt-6 border-t border-[#5A0B1E]/15">
              <div className="w-11 h-11 rounded-lg bg-[#5A0B1E]/8 text-[#5A0B1E] flex items-center justify-center">
                <Flame className="w-5 h-5" strokeWidth={1.75} />
              </div>
              <h3 className="mt-5 font-display text-xl font-semibold text-[#1C1917]">
                Everyday Nigerian Classics
              </h3>
              <p className="mt-2.5 text-sm sm:text-base text-[#57534E] leading-relaxed">
                Whether you want Jollof Rice &amp; Chicken, Fried Rice &amp; Beef, Beans &amp;
                Plantain, Spaghetti, or crispy Dodo, our main dishes are prepared to satisfy every
                appetite.
              </p>
            </div>

            <div className="pt-6 border-t border-[#5A0B1E]/15">
              <div className="w-11 h-11 rounded-lg bg-[#15803D]/10 text-[#15803D] flex items-center justify-center">
                <Soup className="w-5 h-5" strokeWidth={1.75} />
              </div>
              <h3 className="mt-5 font-display text-xl font-semibold text-[#1C1917]">
                Rich Edo &amp; Nigerian Soups
              </h3>
              <p className="mt-2.5 text-sm sm:text-base text-[#57534E] leading-relaxed">
                Enjoy Benin City favourites including traditional Black Soup, Egusi Soup, and
                Ogbono Soup served hot alongside smooth Semovita or Santana (cassava fufu).
              </p>
            </div>

            <div className="pt-6 border-t border-[#5A0B1E]/15">
              <div className="w-11 h-11 rounded-lg bg-[#B91C1C]/10 text-[#B91C1C] flex items-center justify-center">
                <UtensilsCrossed className="w-5 h-5" strokeWidth={1.75} />
              </div>
              <h3 className="mt-5 font-display text-xl font-semibold text-[#1C1917]">
                Easy to Reach on BDPA Street
              </h3>
              <p className="mt-2.5 text-sm sm:text-base text-[#57534E] leading-relaxed">
                Conveniently situated at 3, Otabor Olubor Isihor, BDPA Street, Back of Nadia Bakery
                in Ugbowo—ideal for quick walk-in meals, takeaways, or direct WhatsApp orders.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section D: Circular & Food Gallery Preview */}
      <section className="py-16 sm:py-24 bg-[#F4EFE8]/75 border-t border-[#5A0B1E]/8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold tracking-[0.18em] uppercase text-[#B91C1C]">
                Visual Gallery
              </p>
              <h2 className="mt-2 font-display text-3xl sm:text-4xl font-semibold tracking-tight text-[#1C1917]">
                A Closer Look at Our Dishes
              </h2>
              <p className="mt-3 text-base text-[#57534E] leading-relaxed">
                Circular dish medallions inspired by our Ugbowo storefront signage—highlighting each
                meal across rice, beans, swallow, and soup categories.
              </p>
            </div>
            <Link
              to="/gallery"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#5A0B1E] hover:text-[#B91C1C] transition-colors whitespace-nowrap shrink-0"
            >
              <span>Open Full Gallery</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
            {MEALS.slice(0, 5).map((meal) => (
              <Link
                key={meal.id}
                to={`/menu/${meal.id}`}
                className="group bg-[#FFFFFF] rounded-xl border border-[#5A0B1E]/10 p-5 flex flex-col items-center text-center transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md"
              >
                <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden border-4 border-[#5A0B1E] ring-2 ring-[#15803D]/80 shadow-sm bg-[#F4EFE8]">
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
                <h3 className="mt-1 font-display text-base font-semibold text-[#1C1917] group-hover:text-[#5A0B1E] transition-colors">
                  {meal.name}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Section E: Bottom Burgundy Call to Action */}
      <section className="py-20 sm:py-24 bg-[#5A0B1E] text-[#FAF7F2] border-b border-white/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#86EFAC]">
            Ugbowo · Benin City
          </p>
          <h2 className="mt-3 font-display text-3xl sm:text-5xl font-semibold tracking-tight text-white text-balance">
            Ready to Order Your Meal?
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#FAF7F2]/85 max-w-xl mx-auto leading-relaxed">
            Browse our full 10-dish menu, build your order in the cart, or reach Easi Mark Kitchen
            directly on WhatsApp or phone at{' '}
            <span className="tabular-nums font-semibold text-white">
              {RESTAURANT_INFO.phoneDisplay}
            </span>
            .
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/menu"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg bg-[#B91C1C] hover:bg-[#991B1B] text-white text-base font-medium transition-colors"
            >
              <span>Explore Our Menu</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href={quickWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg bg-[#15803D] hover:bg-[#166534] text-white text-base font-medium transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
