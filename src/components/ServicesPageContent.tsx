import { useState } from 'react';
import { getTranslation, Language } from '@/lib/translations';
import ServiceCategoryTab from './ServiceCategoryTab';
import { Smartphone, Laptop, Monitor, Database, Settings } from 'lucide-react';

interface ServicesPageContentProps {
  currentLang: Language;
  isVisible: boolean;
}

export default function ServicesPageContent({ currentLang, isVisible }: ServicesPageContentProps) {
  const t = (key: string) => getTranslation(currentLang, key);
  const [activeTab, setActiveTab] = useState('phones');

  const tabs = [
    { id: 'phones', label: t('cat_phones'), icon: Smartphone },
    { id: 'laptops', label: t('cat_laptops'), icon: Laptop },
    { id: 'pc', label: t('cat_pc'), icon: Monitor },
    { id: 'recovery', label: t('cat_recovery'), icon: Database },
    { id: 'software', label: t('cat_other'), icon: Settings },
  ];

  const categoriesData = {
    phones: {
      title: t('footer_service_1'),
      brands: [
        { name: 'Apple', iconSlug: 'apple' },
        { name: 'Samsung', iconSlug: 'samsung' },
        { name: 'Xiaomi', iconSlug: 'xiaomi' },
        { name: 'Huawei', iconSlug: 'huawei' },
        { name: 'OnePlus', iconSlug: 'oneplus' },
        { name: 'Google Pixel', iconSlug: 'google' },
        { name: 'Realme', iconSlug: 'realme' },
        { name: 'Oppo', iconSlug: 'oppo' },
      ],
      introText: [
        t('intro_text_1'),
        t('intro_text_2'),
      ],
      servicesPrimary: [
        { name: t('service_screen_replace'), price: '~300 kč' },
        { name: t('service_battery'), price: '~100 kč' },
        { name: t('service_charging'), price: '~200 kč' },
        { name: t('service_keyboard'), price: '~500 kč' },
        { name: t('service_processor'), price: '~400 kč' },
        { name: t('service_cooling'), price: '~200 kč' },
      ],
      servicesMore: [
        { name: t('service_os'), price: '~250 kč' },
        { name: t('service_software'), price: '~800 kč' },
        { name: t('service_virus'), price: '~100 kč' },
        { name: t('service_firmware'), price: '~400 kč' },
        { name: t('brands_and_others'), price: ' --- ' },
      ],
    },
    laptops: {
      title: t('footer_service_2'),
      brands: [
        { name: 'Apple MacBook', iconSlug: 'apple' },
        { name: 'Lenovo', iconSlug: 'lenovo' },
        { name: 'HP', iconSlug: 'hp' },
        { name: 'Dell', iconSlug: 'dell' },
        { name: 'Asus', iconSlug: 'asus' },
        { name: 'Acer', iconSlug: 'acer' },
        { name: 'MSI', iconSlug: 'msi' },
        { name: 'Samsung', iconSlug: 'samsung' },
      ],
      introText: [
        t('intro_text_3'),
        t('intro_text_4'),
      ],
      servicesPrimary: [
        { name: t('service_screen_repair'), price: '~1000 kč' },
        { name: t('service_battery_replace'), price: '~400 kč' },
        { name: t('service_charge_port'), price: '~200 kč' },
        { name: t('service_camera_repair'), price: '~600 kč' },
        { name: t('service_button_repair'), price: '~300 kč' },
        { name: t('service_speaker_repair'), price: '~200 kč' },
      ],
      servicesMore: [
        { name: t('service_water_damage'), price: '~400 kč' },
        { name: t('service_keyboard_replace'), price: '~300 kč' },
        { name: t('service_motherboard'), price: '~600 kč' },
        { name: t('service_ram_upgrade'), price: '~400 kč' },
        { name: t('service_hdd_replace'), price: '~1300 kč' },
        { name: t('brands_and_others'), price: ' --- ' },
      ],
    },
    pc: {
      title: t('footer_service_3'),
      brands: [
        { name: 'Intel', iconSlug: 'intel' },
        { name: 'AMD', iconSlug: 'amd' },
        { name: 'NVIDIA', iconSlug: 'nvidia' },
        { name: 'Corsair', iconSlug: 'corsair' },
        { name: 'Logitech', iconSlug: 'logitech' },
        { name: 'Razer', iconSlug: 'razer' },
        { name: 'Kingston', iconSlug: 'kingston' },
        { name: 'WD', iconSlug: 'westerndigital' },
      ],
      introText: [
        t('intro_text_5'),
        t('intro_text_6'),
      ],
      servicesPrimary: [
        { name: t('service_water_damage'), price: '~800 kč' },
        { name: t('service_keyboard_replace'), price: '~400 kč' },
        { name: t('service_os'), price: '~200 kč' },
        { name: t('service_cooling'), price: '~100 kč' },
        { name: t('service_virus'), price: '~200 kč' },
        { name: t('service_firmware'), price: '~300 kč' },
      ],
      servicesMore: [
        { name: t('pricing_table_diagnostics'), price: ' --- ' },
        { name: t('service_charge_port'), price: '~400 kč' },
        { name: t('service_thermal_paste'), price: '~100 kč' },
        { name: t('cat_recovery'), price: '~100 kč' },
        { name: t('brands_and_others'), price: ' --- ' },
      ],
    },
    recovery: {
      title: t('footer_service_4'),
      brands: [
        { name: 'Seagate', iconSlug: 'seagate' },
        { name: 'Western Digital', iconSlug: 'westerndigital' },
        { name: 'Samsung', iconSlug: 'samsung' },
        { name: 'Kingston', iconSlug: 'kingston' },
        { name: 'SanDisk', iconSlug: 'sandisk' },
        { name: 'Crucial', iconSlug: 'crucial' },
        { name: 'Transcend', iconSlug: 'transcend' },
        { name: 'Toshiba', iconSlug: 'toshiba' },
      ],
      introText: [
        t('intro_text_7'),
        t('intro_text_8'),
      ],
      servicesPrimary: [
        { name: t('service_firmware'), price: '~700 kč' },
        { name: t('cat_recovery'), price: '~1000 kč' },
        { name: t('service_cooling_clean'), price: '~200 kč' },
        { name: t('service_ram_upgrade'), price: '~500 kč' },
        { name: t('service_charge_port'), price: '~600 kč' },
        { name: t('service_water_damage'), price: '~500 kč' },
      ],
      servicesMore: [
        { name: t('service_button_repair'), price: '~400 kč' },
        { name: t('service_hdd_replace'), price: '~2000 kč' },
        { name: t('service_virus'), price: '~400 kč' },
        { name: t('service_software'), price: '~600 kč' },
        { name: t('brands_and_others'), price: ' --- ' },
      ],
    },
    software: {
      title: t('footer_service_6'),
      brands: [
        { name: 'Microsoft', iconSlug: 'microsoft' },
        { name: 'Adobe', iconSlug: 'adobe' },
        { name: 'Apple', iconSlug: 'apple' },
        { name: 'Google', iconSlug: 'google' },
        { name: 'Linux', iconSlug: 'linux' },
        { name: 'Kaspersky', iconSlug: 'kaspersky' },
        { name: 'ESET', iconSlug: 'eset' },
        { name: 'Avast', iconSlug: 'avast' },
      ],
      introText: [
        t('intro_text_9'),
        t('intro_text_10'),
      ],
      servicesPrimary: [
        { name: t('service_firmware'), price: '~200 kč' },
        { name: t('service_virus'), price: '~300 kč' },
        { name: t('service_software'), price: '~200 kč' },
        { name: t('service_os'), price: '~300 kč' },
        { name: t('cat_software'), price: '~200 kč' },
        { name: t('cat_recovery'), price: '~100 kč' },
      ],
      servicesMore: [
        { name: t('benefit_speed'), price: '~200 kč' },
        { name: t('home_service_call'), price: '~300 kč' },
        { name: t('service_charging'), price: '~100 kč' },
        { name: t('service_hinge_repair'), price: '~200 kč' },
        { name: t('brands_and_others'), price: ' --- ' },
      ],
    },
  };

  return (
    <div className={`min-h-screen bg-[#0E1116] transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'} relative overflow-hidden`}>
      
      {/* Abstract background */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-[#6366F1]/8 to-[#8B5CF6]/8 rounded-full blur-3xl pointer-events-none" />
      
      <div className="pt-24 pb-16 px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-[#E6EAF2] mb-4">{t('services_title')}</h1>
            <p className="text-xl text-[#A7B0C0] max-w-2xl mx-auto">
              {t('header_text')}
            </p>
          </div>

          {/* Tabs Navigation */}
          <div className="flex flex-wrap gap-3 mb-12 justify-center">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 rounded-xl font-semibold transition-all inline-flex items-center gap-2 ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] text-white shadow-lg'
                    : 'bg-[#12161D] border border-[#1E2430] text-[#A7B0C0] hover:border-[#6366F1]/30'
                }`}
              >
                <tab.icon className="w-5 h-5" />
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="mt-8">
            <ServiceCategoryTab
              currentLang={currentLang}
              title={categoriesData[activeTab as keyof typeof categoriesData].title}
              brands={categoriesData[activeTab as keyof typeof categoriesData].brands}
              introText={categoriesData[activeTab as keyof typeof categoriesData].introText}
              servicesPrimary={categoriesData[activeTab as keyof typeof categoriesData].servicesPrimary}
              servicesMore={categoriesData[activeTab as keyof typeof categoriesData].servicesMore}
            />
          </div>
        </div>
      </div>
    </div>
  );
}