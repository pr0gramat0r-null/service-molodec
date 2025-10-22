import { Card } from '@/components/ui/card';
import { getTranslation, Language } from '@/lib/translations';
import serviceCallImg from '/image/homeRepair.png';
import serviceInfoImg from '/image/whyInfo.jpg';
import {
  Shield, Zap, Award, Users, Clock, DollarSign, Settings, Database, Phone, ArrowRight, CheckCircle2
} from 'lucide-react';

interface HomePageContentProps {
  currentLang: Language;
  isVisible: boolean;
  onNavigate: (page: 'contact' | 'services' | 'about') => void;
}

export default function HomePageContent({ currentLang, isVisible, onNavigate }: HomePageContentProps) {
  const t = (key: string) => getTranslation(currentLang, key);

  const facts = [
    { value: '15+', title: t('stat_support'), subtitle: t('fact_years_subtitle'), icon: Award },
    { value: '50K+', title: t('stat_repairs'), subtitle: t('stat_satisfaction'), icon: Users },
    { value: '98%', title: t('fact_satisfaction_title'), subtitle: t('fact_satisfaction_subtitle'), icon: Shield },
    { value: '24/7', title: t('benefit_support'), subtitle: t('stat_support'), icon: Clock },
  ];

  const advantages = [
    {
      icon: Shield,
      title: t('advantage_warranty'),
      text: t('advantage_warranty_desc'),
      span: 'col-span-1',
      color: 'from-emerald-500 to-teal-600'
    },
    {
      icon: Zap,
      title: t('advantage_express'),
      text: t('advantage_express_desc'),
      span: 'col-span-1',
      color: 'from-amber-500 to-orange-600'
    },
    {
      icon: DollarSign,
      title: t('advantage_economy'),
      text: t('advantage_economy_desc'),
      span: 'col-span-1',
      color: 'from-blue-500 to-cyan-600'
    },
    {
      icon: Users,
      title: t('advantage_masters'),
      text: t('advantage_masters_desc'),
      span: 'col-span-1',
      color: 'from-purple-500 to-pink-600'
    },
    {
      icon: Settings,
      title: t('advantage_equipment'),
      text: t('advantage_equipment_desc'),
      span: 'col-span-1',
      color: 'from-indigo-500 to-purple-600'
    },
    {
      icon: Database,
      title: t('advantage_security'),
      text: t('advantage_security_desc'),
      span: 'col-span-1',
      color: 'from-red-500 to-orange-600'
    },
  ];

  return (
    <div className={`min-h-screen bg-[#0E1116] transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'} relative overflow-hidden`}>
      
      {/* Abstract Neo Background Elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-[#6366F1]/10 to-[#8B5CF6]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-[#8B5CF6]/8 to-[#6366F1]/8 rounded-full blur-3xl pointer-events-none" />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-4xl mx-auto">
            {/* Main Heading */}
            <h1 className="text-5xl md:text-6xl font-bold text-[#E6EAF2] mb-6 leading-tight">
              {t('hero_title')}<br />{t('hero_title2')}
            </h1>

            {/* Description */}
            <p className="text-xl text-[#A7B0C0] mb-6 leading-relaxed">
              {t('hero_description')}
            </p>

            {/* Features */}
            <p className="text-[#6D7AAD] mb-8">
              {t('hero_usp')}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-4">
              <a href="tel:+380671234567">
                <button 
                  className="px-8 py-4 text-white rounded-xl shadow-lg font-semibold transition-all inline-flex items-center gap-2 hover:shadow-[0_0_0_1px_rgba(139,92,246,0.25),_0_10px_30px_rgba(99,102,241,0.25)]"
                  style={{ background: 'linear-gradient(135deg, #6366F1 0%, #8B5CF6 100%)' }}
                >
                  <Phone className="w-5 h-5" />
                  {t('call_now')}
                </button>
              </a>
              <button 
                onClick={() => onNavigate('contact')}
                className="px-8 py-4 bg-[#151A21] border-2 border-[#6366F1]/30 text-[#A7B0C0] rounded-xl font-semibold hover:bg-[#1E2430] hover:border-[#8B5CF6]/50 transition-all inline-flex items-center gap-2"
              >
                {t('cta_write')}
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Facts - Consolidated Module */}
      <section className="py-12 px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <Card className="bg-[#12161D] border-[#1E2430] rounded-2xl shadow-[0_8px_24px_rgba(0,0,0,0.35)] hover:shadow-[0_0_0_1px_rgba(139,92,246,0.25),_0_10px_30px_rgba(99,102,241,0.25)] transition-all p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {facts.map((fact, idx) => (
                <div key={idx} className={`text-center ${idx < 3 ? 'lg:border-r border-[#1E2430]' : ''}`}>
                  <div className="w-12 h-12 bg-[#6366F1]/10 rounded-xl flex items-center justify-center mx-auto mb-4 border border-[#6366F1]/20">
                    <fact.icon className="w-6 h-6 text-[#8B5CF6]" strokeWidth={2} />
                  </div>
                  <div className="text-4xl font-bold text-[#8B5CF6] mb-2">{fact.value}</div>
                  <div className="text-lg font-semibold text-[#E6EAF2] mb-1">{fact.title}</div>
                  <div className="text-sm text-[#6D7AAD]">{fact.subtitle}</div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </section>

      {/* Працюємо на виїзд Section */}
      <section className="py-12 px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <Card className="bg-[#12161D] border-[#1E2430] rounded-2xl shadow-[0_8px_24px_rgba(0,0,0,0.35)] overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8 md:p-12 items-center">
              {/* Text Content */}
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#6366F1]/10 rounded-full text-[#8B5CF6] font-medium border border-[#6366F1]/20 mb-2">
                  <Zap className="w-4 h-4" />
                  <span> {t('home_service_badge')} </span>
                </div>
                
                <h2 className="text-3xl md:text-4xl font-bold text-[#E6EAF2]">
                  {t('home_service_call')}
                </h2>
                
                <p className="text-lg text-[#A7B0C0] leading-relaxed">
                  {t('home_service_desc')}
                </p>

                <div className="space-y-3">
                  {[
                    t('home_service_feature_1'),
                    t('home_service_feature_2'),
                    t('home_service_feature_3')
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0" strokeWidth={2.5} />
                      <span className="text-[#A7B0C0]">{item}</span>
                    </div>
                  ))}
                </div>

                <button 
                  onClick={() => onNavigate('contact')}
                  className="mt-6 px-6 py-3 text-white rounded-xl font-semibold transition-all inline-flex items-center gap-2 shadow-lg hover:shadow-[0_0_0_1px_rgba(139,92,246,0.25),_0_10px_30px_rgba(99,102,241,0.25)]"
                  style={{ background: 'linear-gradient(135deg, #6366F1 0%, #8B5CF6 100%)' }}
                >
                  {t('home_service_btn')}
                  <Phone className="w-5 h-5" />
                </button>
              </div>

              {/* Image/Visual */}
              <div className="relative">
                <div className="aspect-[4/3] bg-[#151A21] rounded-2xl border border-[#1E2430] overflow-hidden shadow-[0_8px_24px_rgba(0,0,0,0.35)] relative">
                  {/* Overlay with icon for placeholder */}
                   <img
                    src={serviceCallImg}
                    alt={t('home_why_img_alt')}
                    className="absolute inset-0 w-full h-full object-cover object-center"
                  />

                  <div className="absolute inset-0 bg-black/40" />
                  
                  {/* Text overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/60 to-transparent">
                    <p className="text-white font-semibold text-lg">{t('home_service_img_title')}</p>
                    <p className="text-white/80 text-sm">{t('home_service_img_subtitle')}</p>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Service Info Section with Image */}
      <section className="py-16 px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="absolute top-40 left-10 w-[300px] h-[300px] bg-[#6366F1]/5 rounded-full blur-2xl pointer-events-none" />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-[#E6EAF2]">
                {t('home_why_title')}
              </h2>
              <p className="text-lg text-[#A7B0C0] leading-relaxed">
                {t('home_why_text_1')}
              </p>
              <p className="text-lg text-[#A7B0C0] leading-relaxed">
                {t('home_why_text_2')}
              </p>
              
              <div className="space-y-3">
                {[
                  t('home_why_feature_1'),
                  t('home_why_feature_2'),
                  t('home_why_feature_3')
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0" strokeWidth={2.5} />
                    <span className="text-[#A7B0C0]">{item}</span>
                  </div>
                ))}
              </div>

              <button 
                onClick={() => onNavigate('about')}
                className="mt-6 px-6 py-3 bg-[#6366F1]/10 border border-[#6366F1]/30 text-[#8B5CF6] rounded-xl font-semibold hover:bg-[#6366F1]/20 transition-all inline-flex items-center gap-2"
              >
                {t('home_why_btn')}
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>

            {/* Image/Visual */}
            <div className="relative">
              <div className="aspect-[4/3] bg-[#12161D] rounded-2xl border border-[#1E2430] overflow-hidden shadow-[0_8px_24px_rgba(0,0,0,0.35)] relative group">
                {/* Overlay with icon for placeholder */}
                <img
                    src={serviceInfoImg}
                    alt={t('home_service_img_alt')}
                    className="absolute inset-0 w-full h-full object-cover object-center"
                  />

                <div className="absolute inset-0 bg-black/40" />
                
                {/* Text overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/60 to-transparent">
                  <p className="text-white font-semibold text-lg">{t('home_why_img_title')}</p>
                  <p className="text-white/80 text-sm">{t('home_why_img_subtitle')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us - Redesigned with varied card sizes */}
      <section className="py-16 px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#E6EAF2] mb-4">
              {t('home_advantages_title')}
            </h2>
            <p className="text-xl text-[#A7B0C0] max-w-2xl mx-auto">
              {t('home_advantages_subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {advantages.map((adv, idx) => (
              <Card 
                key={idx} 
                className={`bg-[#12161D] border-[#1E2430] rounded-2xl shadow-[0_8px_24px_rgba(0,0,0,0.35)] hover:shadow-[0_0_0_1px_rgba(139,92,246,0.25),_0_10px_30px_rgba(99,102,241,0.25)] transition-all p-6 ${adv.span}`}
              >
                <div className="flex flex-col items-center text-center space-y-4">
                  {/* Large Icon */}
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${adv.color} flex items-center justify-center shadow-lg`}>
                    <adv.icon className="w-8 h-8 text-white" strokeWidth={2} />
                  </div>
                  
                  {/* Content */}
                  <div>
                    <h3 className="text-xl font-bold text-[#E6EAF2] mb-2">
                      {adv.title}
                    </h3>
                    <p className="text-[#A7B0C0]">
                      {adv.text}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}