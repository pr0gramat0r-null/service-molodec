import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { ChevronDown, ChevronUp, MoreHorizontal } from 'lucide-react';
import { getTranslation, Language } from '@/lib/translations';

interface Brand {
  name: string;
  iconSlug: string;
}

interface Service {
  name: string;
  price: string;
}

interface ServiceCategoryTabProps {
  currentLang: Language;
  title: string;
  brands: Brand[];
  introText: string[];
  servicesPrimary: Service[];
  servicesMore: Service[];
}

export default function ServiceCategoryTab({
  currentLang,
  title,
  brands,
  introText,
  servicesPrimary,
  servicesMore
}: ServiceCategoryTabProps) {
  const t = (key: string) => getTranslation(currentLang, key);
  const [showMore, setShowMore] = useState(false);
  const [failedIcons, setFailedIcons] = useState<Set<string>>(new Set());

  const handleImageError = (brandName: string, iconSlug: string, e: React.SyntheticEvent<HTMLImageElement>) => {
    const img = e.currentTarget;
    
    // Try alternative URL format first
    if (!failedIcons.has(brandName)) {
      img.src = `https://cdn.simpleicons.org/${iconSlug.toLowerCase()}/fff`;
      setFailedIcons(prev => new Set(prev).add(brandName));
    } else {
      // Replace with fallback initial
      img.style.display = 'none';
      const parent = img.parentElement;
      if (parent) {
        parent.innerHTML = `<span class="text-white font-bold text-sm">${brandName.charAt(0).toUpperCase()}</span>`;
      }
    }
  };

  return (
    <div className="space-y-8">
      {/* Brands List */}
      <div>
        <h3 className="text-2xl font-bold text-[#E6EAF2] mb-6">{t('services_brands_title')}</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {brands.slice(0, -1).map((brand, idx) => (
            <div
              key={idx}
              className="flex items-center gap-3 p-3 bg-[#12161D] border border-[#1E2430] rounded-xl"
            >
              <div className="w-10 h-10 bg-[#151A21] rounded-lg flex items-center justify-center flex-shrink-0 border border-[#1E2430]">
                <img 
                  src={`https://cdn.simpleicons.org/${brand.iconSlug}/FFFFFF`}
                  alt={brand.name}
                  className="w-6 h-6"
                  loading="lazy"
                  decoding="async"
                  onError={(e) => handleImageError(brand.name, brand.iconSlug, e)}
                />
              </div>
              <span className="text-[#E6EAF2] font-medium text-sm">{brand.name}</span>
            </div>
          ))}
          {/* "та інші" tile */}
          <div className="flex items-center gap-3 p-3 bg-[#12161D] border border-[#1E2430] rounded-xl">
            <div className="w-10 h-10 bg-[#151A21] rounded-lg flex items-center justify-center flex-shrink-0 border border-[#1E2430]">
              <MoreHorizontal className="w-6 h-6 text-[#6D7AAD]" />
            </div>
            <span className="text-[#A7B0C0] font-medium text-sm">{t('brands_and_others')}</span>
          </div>
        </div>
      </div>

      {/* Info Block */}
      <Card className="bg-[#12161D] border-[#1E2430] rounded-2xl p-8 shadow-[0_8px_24px_rgba(0,0,0,0.35)]">
        <h3 className="text-2xl font-bold text-[#E6EAF2] mb-4">{title}</h3>
        <div className="space-y-4">
          {introText.map((paragraph, idx) => (
            <p key={idx} className="text-[#A7B0C0] leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>
      </Card>

      {/* Services List */}
      <div>
        <h3 className="text-2xl font-bold text-[#E6EAF2] mb-6">{t('services_list_title')}</h3>
        
        {/* Primary Services */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          {servicesPrimary.map((service, idx) => {
            // Add color variety to borders
            let hoverBorder = 'hover:border-[#6366F1]/30';
            if (idx % 3 === 0) hoverBorder = 'hover:border-emerald-500/30';
            if (idx % 3 === 1) hoverBorder = 'hover:border-amber-500/30';
            
            return (
              <div
                key={idx}
                className={`flex items-center justify-between p-4 bg-[#12161D] border border-[#1E2430] rounded-xl ${hoverBorder} transition-colors`}
              >
                <span className="text-[#E6EAF2] font-medium">{service.name}</span>
                <span className="text-[#8B5CF6] font-bold">{service.price}</span>
              </div>
            );
          })}
        </div>

        {/* More Services (Collapsible) */}
        {servicesMore.length > 0 && (
          <>
            {showMore && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                {servicesMore.map((service, idx) => {
                  // Add color variety to borders
                  let hoverBorder = 'hover:border-[#6366F1]/30';
                  if (idx % 3 === 0) hoverBorder = 'hover:border-emerald-500/30';
                  if (idx % 3 === 1) hoverBorder = 'hover:border-amber-500/30';
                  
                  return (
                    <div
                      key={idx}
                      className={`flex items-center justify-between p-4 bg-[#12161D] border border-[#1E2430] rounded-xl ${hoverBorder} transition-colors`}
                    >
                      <span className="text-[#E6EAF2] font-medium">{service.name}</span>
                      <span className="text-[#8B5CF6] font-bold">{service.price}</span>
                    </div>
                  );
                })}
              </div>
            )}

            {/* Toggle Button */}
            <button
              onClick={() => setShowMore(!showMore)}
              className="w-full md:w-auto px-6 py-3 bg-[#6366F1]/10 border border-[#6366F1]/30 text-[#8B5CF6] rounded-xl font-semibold hover:bg-[#6366F1]/20 transition-all inline-flex items-center justify-center gap-2 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[rgba(139,92,246,0.45)]"
              aria-expanded={showMore}
            >
              {showMore ? (
                <>
                  {t('common_less')}
                  <ChevronUp className="w-5 h-5" />
                </>
              ) : (
                <>
                  {t('common_more')}
                  <ChevronDown className="w-5 h-5" />
                </>
              )}
            </button>
          </>
        )}

        {/* Note */}
        <p className="text-[#6D7AAD] text-sm mt-6">
          {t('price_note')}
        </p>
      </div>
    </div>
  );
}