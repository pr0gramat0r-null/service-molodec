import { Card } from '@/components/ui/card';
import { getTranslation, Language } from '@/lib/translations';
import {
  TrendingUp, Wrench, Star, Clock, Shield, Zap, Target, Users,
  Check, Award, Phone, ArrowRight
} from 'lucide-react';

interface AboutPageContentProps {
  currentLang: Language;
  isVisible: boolean;
}

export default function AboutPageContent({ currentLang, isVisible }: AboutPageContentProps) {
  const t = (key: string) => getTranslation(currentLang, key);

  // Stats data
  const stats = [
    { icon: TrendingUp, value: '8+', label: t('stat_years'), color: 'bg-indigo-500/10 text-[#6366F1]' },
    { icon: Wrench, value: '5000+', label: t('stat_repairs'), color: 'bg-purple-500/10 text-[#8B5CF6]' },
    { icon: Star, value: '98%', label: t('stat_satisfaction'), color: 'bg-emerald-500/10 text-emerald-400' },
    { icon: Clock, value: '24/7', label: t('stat_support'), color: 'bg-orange-500/10 text-orange-400' },
  ];

  // Mission values
  const values = [
    {
      icon: Shield,
      title: t('about_value_quality'),
      description: t('about_value_quality_desc'),
      color: 'from-pink-500 to-rose-500'
    },
    {
      icon: Clock,
      title: t('about_value_speed'),
      description: t('about_value_speed_desc'),
      color: 'from-amber-500 to-orange-500'
    },
    {
      icon: Award,
      title: t('about_value_honesty'),
      description: t('about_value_honesty_desc'),
      color: 'from-emerald-500 to-teal-500'
    },
    {
      icon: Users,
      title: t('about_value_support'),
      description: t('about_value_support_desc'),
      color: 'from-sky-500 to-cyan-500'
    },
  ];

  // Advantages
  const advantages = [
    { text: t('about_advantage_1'), icon: Check },
    { text: t('about_advantage_2'), icon: Check },
    { text: t('about_advantage_3'), icon: Check },
    { text: t('about_advantage_4'), icon: Check },
    { text: t('about_advantage_5'), icon: Check },
    { text: t('about_advantage_6'), icon: Check },
  ];

  return (
    <div className={`min-h-screen bg-[#0E1116] transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'} relative overflow-hidden`}>
      
      {/* Abstract backgrounds */}
      <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-[#6366F1]/8 to-[#8B5CF6]/8 rounded-full blur-3xl pointer-events-none" />
      
      {/* Stats Strip */}
      <section className="pt-24 pb-8 px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-4 text-[#E6EAF2]">{t('about_page_title')}</h1>
          <p className="text-center text-[#A7B0C0] max-w-3xl mx-auto mb-12 leading-relaxed">
            {t('about_intro')}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, idx) => (
              <Card key={idx} className="bg-[#12161D] border-[#1E2430] p-6 rounded-2xl shadow-[0_8px_24px_rgba(0,0,0,0.35)] hover:shadow-[0_0_0_1px_rgba(139,92,246,0.25),_0_10px_30px_rgba(99,102,241,0.25)] transition-all duration-300">
                <div className="flex flex-col items-center text-center">
                  <div className={`w-16 h-16 rounded-full ${stat.color} flex items-center justify-center mb-4 border border-[#6366F1]/20`}>
                    <stat.icon className="w-8 h-8" strokeWidth={2} />
                  </div>
                  <div className="text-4xl font-bold text-[#E6EAF2] mb-2">{stat.value}</div>
                  <div className="text-sm text-[#6D7AAD]">{stat.label}</div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-12 px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-[#E6EAF2] mb-4">
              {t('about_principles_title')}
            </h2>
            <p className="text-xl text-[#A7B0C0] max-w-3xl mx-auto leading-relaxed">
              {t('about_principles_subtitle')}
            </p>
          </div>

          <Card className="bg-[#12161D] border-[#1E2430] rounded-2xl shadow-[0_8px_24px_rgba(0,0,0,0.35)] overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 p-8 md:p-12">
              {/* Mission text */}
              <div className="lg:col-span-2">
                <div className="flex items-center gap-2 mb-4">
                  <Target className="w-6 h-6 text-[#8B5CF6]" strokeWidth={2} />
                  <h3 className="text-2xl font-bold text-[#E6EAF2]">{t('about_mission_title')}</h3>
                </div>
                <p className="text-[#A7B0C0] leading-relaxed mb-4">
                  {t('about_mission_text_1')}
                </p>
                <p className="text-[#A7B0C0] leading-relaxed">
                  {t('about_mission_text_2')}
                </p>
              </div>

              {/* Values grid */}
              <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {values.map((value, idx) => (
                  <div key={idx} className="bg-[#151A21] rounded-xl p-5 hover:bg-[#1E2430] transition-colors border border-[#1E2430]">
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${value.color} flex items-center justify-center mb-3 shadow-lg`}>
                      <value.icon className="w-6 h-6 text-white" strokeWidth={2} />
                    </div>
                    <h4 className="font-semibold text-[#E6EAF2] mb-2">{value.title}</h4>
                    <p className="text-sm text-[#6D7AAD] leading-relaxed">{value.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Advantages Grid */}
      <section className="py-12 px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-[#E6EAF2] text-center mb-8">
            {t('about_advantages_title')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {advantages.map((adv, idx) => (
              <Card key={idx} className="bg-[#12161D] border-[#1E2430] rounded-xl p-5 shadow-sm hover:shadow-[0_0_0_1px_rgba(139,92,246,0.25),_0_10px_30px_rgba(99,102,241,0.25)] transition-all">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-emerald-500/20 rounded-full flex items-center justify-center mt-0.5 border border-emerald-500/30">
                    <Check className="w-4 h-4 text-emerald-400" strokeWidth={3} />
                  </div>
                  <p className="text-[#A7B0C0] font-medium">{adv.text}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Warranty Panel - Indigo to Violet Gradient */}
      <section className="py-12 px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div 
            className="rounded-3xl p-8 text-white relative overflow-hidden"
            style={{ background: 'linear-gradient(135deg, #6366F1 0%, #8B5CF6 100%)' }}
          >
            {/* Shield icon */}
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                <Shield className="w-10 h-10 text-white" strokeWidth={2} />
              </div>
            </div>

            <h2 className="text-3xl font-bold text-center mb-8">
              {t('about_warranty_title')}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {/* What covers */}
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                <h3 className="font-bold text-lg mb-4">{t('about_warranty_covers')}</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span>•</span>
                    <span>{t('about_warranty_covers_1')}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span>•</span>
                    <span>{t('about_warranty_covers_2')}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span>•</span>
                    <span>{t('about_warranty_covers_3')}</span>
                  </li>
                </ul>
              </div>

              {/* Terms */}
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                <h3 className="font-bold text-lg mb-4">{t('about_warranty_terms')}</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span>•</span>
                    <span>{t('about_warranty_terms_1')}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span>•</span>
                    <span>{t('about_warranty_terms_2')}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span>•</span>
                    <span>{t('about_warranty_terms_3')}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}