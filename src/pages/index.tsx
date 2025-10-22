import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Language, getTranslation, flags, languageNames } from '@/lib/translations';
import ServicesPageContent from '@/components/ServicesPageContent';
import HomePageContent from '@/components/HomePageContent';
import AboutPageContent from '@/components/AboutPageContent';
import PopupContactPrompt from '@/components/PopupContactPrompt';

import {
  Phone, Mail, MapPin, Menu, Wrench,
  MessageCircle, ChevronDown, Check, Languages
} from 'lucide-react';

export default function TechFixWebsite() {
  const [currentLang, setCurrentLang] = useState<Language>('ua');
  const [currentPage, setCurrentPage] = useState<'home' | 'services' | 'about' | 'contact'>('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', message: '' });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const savedLang = localStorage.getItem('language') as Language;
    if (savedLang && ['ua', 'ru', 'en', 'cz'].includes(savedLang)) {
      setCurrentLang(savedLang);
    }
    setIsVisible(true);
  }, []);

  const t = (key: string) => getTranslation(currentLang, key);
  
  const changeLang = (lang: Language) => {
    setCurrentLang(lang);
    localStorage.setItem('language', lang);
  };

  const navigateTo = (page: typeof currentPage) => {
  setIsVisible(false);
  setTimeout(() => {
    setCurrentPage(page);
    setIsVisible(true);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, 200);
};

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', phone: '', email: '', message: '' });
      setFormSubmitted(false);
    }, 3000);
  };

  const Navigation = () => (
    <>
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#12161D]/95 backdrop-blur-md shadow-lg border-b border-[#1E2430]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16">
        <div className="relative flex items-center h-20">
          {/* Logo (left) */}
          <div className="flex items-center space-x-2 md:space-x-6 cursor-pointer md:w-72 lg:w-96" onClick={() => navigateTo('home')}>
            <div className="w-9 h-9 md:w-12 md:h-12 bg-gradient-to-br from-[#6366F1] to-[#8B5CF6] rounded-lg flex items-center justify-center">
              <Wrench className="md:w-9 md:h-9 text-white" />
            </div>
            <div>
              <span className="text-lg md:text-2xl font-bold text-[#E6EAF2]">Ай Молодець</span>
              <br />
              <span className="text-sm md:text-lg text-[#6D7AAD]">{t('service_logo')}</span>
            </div>
          </div>

          {/* Desktop Navigation (centered absolutely) */}
          <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 items-center space-x-10 z-10">
            {['home', 'services', 'about', 'contact'].map((page) => (
              <button
                key={page}
                onClick={() => navigateTo(page as typeof currentPage)}
                className={`text-lg font-bold transition-colors ${
                  currentPage === page 
                    ? 'text-[#8B5CF6]' 
                    : 'text-[#A7B0C0] hover:text-[#8B5CF6]'
                }`}
              >{t(`nav_${page}`)}</button>
            ))}
          </div>

          {/* Right side - Language + CTA + Mobile Menu (right, mirrored offset) */}
          <div className="ml-auto flex items-center justify-end space-x-6">

            {/* Language Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="gap-1 text-[#A7B0C0] hover:text-[#8B5CF6] hover:bg-[#1E2430]">
                  <Languages className="w-4 h-4" />
                  <span>{flags[currentLang]}</span>
                  <ChevronDown className="w-2 h-2" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-40 bg-[#151A21] border-[#1E2430]">
                {(Object.keys(flags) as Language[]).map((lang) => (
                  <DropdownMenuItem
                    key={lang}
                    onClick={() => changeLang(lang)}
                    className="cursor-pointer text-[#A7B0C0] hover:text-[#8B5CF6] hover:bg-[#1E2430]"
                  >
                    <span className="mr-2">{flags[lang]}</span>
                    <span>{languageNames[lang]}</span>
                    {currentLang === lang && <Check className="ml-auto w-4 h-4 text-[#8B5CF6]" />}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Call Button - Desktop */}
            <a href="tel:+380671234567" className="hidden md:flex">
              <Button 
                className="text-white rounded-xl shadow-lg hover:shadow-[0_0_0_1px_rgba(139,92,246,0.25),_0_10px_30px_rgba(99,102,241,0.25)] transition-all"
                style={{ background: 'linear-gradient(135deg, #6366F1 5%, #8B5CF6 95%)' }}
              >
                <Phone className="w-4 h-4 mr-2" />
                {t('call_now')}
              </Button>
            </a>

            {/* Mobile Menu */}
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild className="md:hidden">
                <Button variant="ghost" size="icon" className="text-[#A7B0C0] hover:bg-[#1E2430]">
                  <Menu className="w-6 h-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] bg-[#12161D] border-[#1E2430]">
                <nav className="flex flex-col space-y-4 mt-8">
                  {['home', 'services', 'about', 'contact'].map((page) => (
                    <button
                      key={page}
                      onClick={() => navigateTo(page as typeof currentPage)}
                      className={`text-left py-3 px-4 rounded-xl transition-colors ${
                        currentPage === page 
                          ? 'bg-[#6366F1]/10 text-[#8B5CF6]' 
                          : 'text-[#A7B0C0] hover:bg-[#1E2430]'
                      }`}
                    >{t(`nav_${page}`)}</button>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>

    {/* Цей div створює відступ під fixed навбаром */}
    <div className="h-8" />
    </>
  );

  const HomePage = () => <HomePageContent currentLang={currentLang} isVisible={isVisible} onNavigate={navigateTo} />;

  const ServicesPage = () => <ServicesPageContent currentLang={currentLang} isVisible={isVisible} />;

  const AboutPage = () => <AboutPageContent currentLang={currentLang} isVisible={isVisible} />;

  const ContactPage = () => {
    const localeMap: Record<Language, string> = { ua: 'uk', ru: 'ru', en: 'en', cz: 'cs' };
    const mapLocale = localeMap[currentLang];
    
    return (
      <div className={`pt-24 pb-16 px-4 bg-[#0E1116] transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'} relative overflow-hidden`}>
        {/* Abstract background */}
        <div className="absolute top-20 right-0 w-[400px] h-[400px] bg-gradient-to-bl from-[#6366F1]/8 to-[#8B5CF6]/8 rounded-full blur-3xl pointer-events-none" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <h1 className="text-4xl font-bold text-center mb-12 text-[#E6EAF2]">{t('contact_title')}</h1>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-6">
              <Card className="p-6 bg-[#12161D] border-[#1E2430] rounded-2xl shadow-[0_8px_24px_rgba(0,0,0,0.35)]">
                <h3 className="text-xl font-bold mb-6 text-[#E6EAF2]">{t('contact_info_title')}</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#6366F1]/10 rounded-xl flex items-center justify-center border border-[#6366F1]/20">
                      <MapPin className="w-6 h-6 text-[#8B5CF6]" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#E6EAF2] mb-1">{t('footer_address_label')}</h4>
                      <p className="text-[#A7B0C0]">{t('footer_address_value')}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#6366F1]/10 rounded-xl flex items-center justify-center border border-[#6366F1]/20">
                      <Phone className="w-6 h-6 text-[#8B5CF6]" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#E6EAF2] mb-1">{t('footer_phone_label')}</h4>
                      <a href="tel:+380501234567" className="text-[#8B5CF6] hover:underline">+380 50 123 4567</a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#6366F1]/10 rounded-xl flex items-center justify-center border border-[#6366F1]/20">
                      <Mail className="w-6 h-6 text-[#8B5CF6]" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#E6EAF2] mb-1">Email</h4>
                      <a href="mailto:info@service.com" className="text-[#8B5CF6] hover:underline">info@service.com</a>
                    </div>
                  </div>

                  {/* Messenger Buttons */}
                  <div className="pt-4 border-t border-[#1E2430]">
                    <h4 className="font-semibold mb-3 text-[#E6EAF2]">{t('contact_messengers')}</h4>
                    <div className="flex flex-wrap items-center gap-2">
                      <a 
                        href="https://t.me/techrepair"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-2 bg-[#229ED9] hover:bg-[#1a8cbe] rounded-lg text-white text-sm font-medium transition-colors"
                      >
                        <MessageCircle className="w-4 h-4" />
                        <span>Telegram</span>
                      </a>
                      <a 
                        href="viber://chat?number=+380671234567"
                        className="inline-flex items-center gap-1.5 px-3 py-2 bg-[#7360F2] hover:bg-[#5d4ed1] rounded-lg text-white text-sm font-medium transition-colors"
                      >
                        <Phone className="w-4 h-4" />
                        <span>Viber</span>
                      </a>
                      <a 
                        href="https://wa.me/380671234567"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-2 bg-[#25D366] hover:bg-[#1fb855] rounded-lg text-white text-sm font-medium transition-colors"
                      >
                        <MessageCircle className="w-4 h-4" />
                        <span>WhatsApp</span>
                      </a>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="overflow-hidden bg-[#12161D] border-[#1E2430] rounded-2xl shadow-[0_8px_24px_rgba(0,0,0,0.35)]">
                <div className="h-80">
                  <iframe
                    src={`https://www.google.com/maps?q=Khreshchatyk+22+Kyiv&output=embed&hl=${mapLocale}`}
                    width="100%"
                    height="100%"
                    style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg)' }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title={t('contact_title')}
                  />
                </div>
              </Card>
            </div>

            <Card className="p-8 bg-[#12161D] border-[#1E2430] rounded-2xl shadow-[0_8px_24px_rgba(0,0,0,0.35)]">
              <h3 className="text-2xl font-semibold mb-6 text-[#E6EAF2]">{t('contact_form_title_page')}</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-[#E6EAF2] mb-2">{t('form_name')}</label>
                  <Input
                    placeholder={t('form_name')}
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="border-[#1E2430] bg-[#151A21] text-[#E6EAF2] focus:border-[#8B5CF6] focus:ring-[rgba(139,92,246,0.25)] rounded-xl"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#E6EAF2] mb-2">{t('form_pone')}</label>
                  <Input
                    type="tel"
                    placeholder={t('form_phone')}
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                    className="border-[#1E2430] bg-[#151A21] text-[#E6EAF2] focus:border-[#8B5CF6] focus:ring-[rgba(139,92,246,0.25)] rounded-xl"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#E6EAF2] mb-2">{t('form_message')}</label>
                  <Textarea
                    placeholder={t('form_message')}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    rows={4}
                    className="border-[#1E2430] bg-[#151A21] text-[#E6EAF2] focus:border-[#8B5CF6] focus:ring-[rgba(139,92,246,0.25)] rounded-xl"
                  />
                </div>
                <Button 
                  type="submit" 
                  className="w-full text-white rounded-xl shadow-lg h-12 text-base font-semibold hover:shadow-[0_0_0_1px_rgba(139,92,246,0.25),_0_10px_30px_rgba(99,102,241,0.25)] transition-all"
                  style={{ background: 'linear-gradient(135deg, #6366F1 0%, #8B5CF6 100%)' }}
                >
                  {t('contact_submit')}
                </Button>
                {formSubmitted && (
                  <p className="text-emerald-400 text-center font-medium">{t('form_success')}</p>
                )}
              </form>
            </Card>
          </div>
        </div>
      </div>
    );
  };

  const Footer = () => (
    <footer className="bg-[#0E1116] text-white py-12 px-4 border-t border-[#1E2430]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-[#6366F1] to-[#8B5CF6] rounded-xl flex items-center justify-center">
                <Wrench className="w-6 h-6 text-white" />
              </div>
              <div>
                <span className="text-xl font-bold text-[#E6EAF2]">TechRepair</span>
                <p className="text-xs text-[#6D7AAD]">{t('service_logo')}</p>
              </div>
            </div>
            <p className="text-[#A7B0C0] text-sm leading-relaxed">
              {t('footer_company_desc')}
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-[#E6EAF2]">{t('footer_nav_title')}</h3>
            <ul className="space-y-2 text-sm text-[#A7B0C0]">

              {[ t('footer_nav_1'), t('footer_nav_2'), t('footer_nav_3'), t('footer_nav_4') ].map((page) => (
                <li 
                    key={page} 
                    onClick={() => navigateTo(page === t('footer_nav_1') ? 'home' 
                      : page === t('footer_nav_2') ? 'services' 
                      : page === t('footer_nav_3') ? 'about' 
                      : page === t('footer_nav_4') ? 'contact' 
                      : 'home'
                    )}
                    className="hover:text-[#8B5CF6] cursor-pointer transition-colors"
                  >{page}</li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-[#E6EAF2]">{t('footer_services_title')}</h3>
            <ul className="space-y-2 text-sm text-[#A7B0C0]">

              {[t('footer_service_1'), t('footer_service_2'), t('footer_service_3'), 
                t('footer_service_4'), t('footer_service_6')].map((item, i) => (
                <li 
                    key={i} 
                    className="hover:text-[#8B5CF6] cursor-pointer transition-colors"
                    onClick={() => 
                      navigateTo(item === t('footer_service_1') ? 'services'
                      : item === t('footer_service_2') ? 'services'
                      : item === t('footer_service_3') ? 'services'
                      : item === t('footer_service_4') ? 'services'
                      : item === t('footer_service_6') ? 'services'
                      : 'services'
                    )}
                  >{item}</li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-[#E6EAF2]">{t('footer_contacts_title')}</h3>
            <ul className="space-y-2 text-sm text-[#A7B0C0]">
              <li>{t('footer_address_label')}<br />{t('footer_address_value')}</li>
              <li>{t('footer_phone_label')}<br /><a href="tel:+380671234567" className="text-[#8B5CF6] hover:underline">+380 67 123 45 67</a></li>
              <li>Email:<br /><a href="mailto:info@techrepair.ua" className="text-[#8B5CF6] hover:underline">info@techrepair.ua</a></li>
              <li>{t('footer_hours_label')}<br />{t('footer_hours_value')}</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#1E2430] pt-8 text-center text-sm text-[#6D7AAD]">
          {t('footer_copyright')}
        </div>
      </div>
    </footer>
  );

  const FloatingCallButton = () => (
    <a 
      href="tel:+380671234567" 
      className="hidden md:flex fixed bottom-12 left-12 w-20 h-20 rounded-full items-center justify-center shadow-lg hover:shadow-[0_0_0_1px_rgba(139,92,246,0.25),_0_10px_30px_rgba(99,102,241,0.25)] transition-all hover:scale-110 z-40"
      style={{ background: 'linear-gradient(135deg, #6366F1 10%, #8B5CF6 90%)' }}
    >
      <Phone className="w-12 h-12 text-white" />
    </a>
  );

  return (
    <div className="min-h-screen bg-[#0E1116]">
      <Navigation />
      {currentPage === 'home' && <HomePage />}
      {currentPage === 'services' && <ServicesPage />}
      {currentPage === 'about' && <AboutPage />}
      {currentPage === 'contact' && <ContactPage />}
      <Footer />
      <FloatingCallButton />
      <PopupContactPrompt onNavigate={navigateTo} currentLang={currentLang} />
    </div>
  );
}