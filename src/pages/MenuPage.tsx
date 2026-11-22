import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { MessageCircle } from 'lucide-react';
import {
  MEALS,
  RESTAURANT_IMAGES,
  RESTAURANT_INFO,
  buildWhatsAppOrderUrl,
} from '../data/meals';
import { MealCategory } from '../types/menu';
import { PageHero } from '../components/PageHero';
import { MealCard } from '../components/MealCard';

type FilterOption = 'All Meals' | MealCategory;

const CATEGORIES: FilterOption[] = [
  'All Meals',
  'Main Dishes & Meals',
  'Soups & Swallow',
];

export function MenuPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialParam = searchParams.get('category') as FilterOption | null;

  const [selectedCategory, setSelectedCategory] = useState<FilterOption>(
    initialParam && CATEGORIES.includes(initialParam) ? initialParam : 'All Meals'
  );

  useEffect(() => {
    const param = searchParams.get('category') as FilterOption | null;
    if (param && CATEGORIES.includes(param)) {
      setSelectedCategory(param);
    } else if (!param) {
      setSelectedCategory('All Meals');
    }
  }, [searchParams]);

  const handleCategoryChange = (category: FilterOption) => {
    setSelectedCategory(category);
    if (category === 'All Meals') {
      setSearchParams({});
    } else {
      setSearchParams({ category });
    }
  };

  const filteredMeals =
    selectedCategory === 'All Meals'
      ? MEALS
      : MEALS.filter((meal) => meal.category === selectedCategory);

  const priceInquiryUrl = buildWhatsAppOrderUrl(
    'Hello Easi Mark Kitchen, please share today’s menu prices in Naira (₦).'
  );

  return (
    <div>
      <PageHero
        eyebrow="Easi Mark Kitchen Menu"
        title="Explore Our Menu"
        subtitle="Authentic Nigerian main dishes, swallows, and traditional soups prepared for Ugbowo and Benin City."
        image={RESTAURANT_IMAGES.hero}
        imageAlt="Plate of Nigerian Jollof Rice served with seasoned chicken"
      />

      <section className="py-12 sm:py-16 bg-[#FAF7F2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter Controls + Pricing Inquiry Notice */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-8 border-b border-[#5A0B1E]/12">
            <div
              role="tablist"
              aria-label="Filter menu by category"
              className="flex flex-wrap items-center gap-2"
            >
              {CATEGORIES.map((category) => {
                const count =
                  category === 'All Meals'
                    ? MEALS.length
                    : MEALS.filter((m) => m.category === category).length;
                const isActive = selectedCategory === category;

                return (
                  <button
                    key={category}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => handleCategoryChange(category)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                      isActive
                        ? 'bg-[#5A0B1E] text-[#FAF7F2]'
                        : 'bg-[#F4EFE8] text-[#1C1917] hover:bg-[#E7DFD2]'
                    }`}
                  >
                    {category}{' '}
                    <span className="tabular-nums opacity-80">({count})</span>
                  </button>
                );
              })}
            </div>

            <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm text-[#57534E]">
              <span>
                Prices confirmed upon inquiry via{' '}
                <a
                  href={RESTAURANT_INFO.phoneTel}
                  className="font-semibold text-[#5A0B1E] hover:underline tabular-nums"
                >
                  {RESTAURANT_INFO.phoneDisplay}
                </a>
                .
              </span>
              <a
                href={priceInquiryUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#15803D] hover:bg-[#166534] text-white text-xs font-semibold transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>Ask Prices on WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Meals Grid */}
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {filteredMeals.map((meal) => (
              <MealCard key={meal.id} meal={meal} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
