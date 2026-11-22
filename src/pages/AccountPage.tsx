import { Link } from 'react-router-dom';
import { UserProfile } from '@clerk/react';
import { LogOut, ShoppingBag, UtensilsCrossed } from 'lucide-react';
import { useAppAuth } from '../context/AppAuthContext';
import { RESTAURANT_IMAGES } from '../data/meals';
import { PageHero } from '../components/PageHero';

export function AccountPage() {
  const { isClerkConfigured, signOut, fullName, email } = useAppAuth();

  return (
    <div>
      <PageHero
        eyebrow="Your Account"
        title={fullName ? `Welcome, ${fullName}` : 'Your Account'}
        subtitle="Manage your profile details, security settings, and Easi Mark Kitchen orders."
        image={RESTAURANT_IMAGES.aboutTable}
        imageAlt="Nigerian Fried Rice and Beef"
      />

      <section className="py-12 sm:py-16 bg-[#FAF7F2]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="bg-[#FFFFFF] rounded-xl border border-[#1C1917]/8 p-6 sm:p-7 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h2 className="font-display text-xl font-semibold text-[#1C1917]">
                {fullName || 'Easi Mark Kitchen Guest'}
              </h2>
              {email && <p className="mt-1 text-sm text-[#57534E]">{email}</p>}
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <Link
                to="/cart"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#5A0B1E] hover:bg-[#731129] text-[#FAF7F2] text-sm font-medium transition-colors"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>View Order Cart</span>
              </Link>
              <Link
                to="/menu"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-[#1C1917]/15 text-sm font-medium text-[#1C1917] hover:bg-[#F4EFE8] transition-colors"
              >
                <UtensilsCrossed className="w-4 h-4" />
                <span>Browse Menu</span>
              </Link>
              <button
                type="button"
                onClick={() => void signOut()}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-[#1C1917]/15 text-sm font-medium text-[#1C1917] hover:bg-[#F4EFE8] transition-colors cursor-pointer"
              >
                <LogOut className="w-4 h-4" />
                <span>Sign Out</span>
              </button>
            </div>
          </div>

          {isClerkConfigured && (
            <div className="flex justify-center">
              <UserProfile routing="path" path="/account" />
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
