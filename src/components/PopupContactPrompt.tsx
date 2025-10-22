import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Phone, MessageCircle, X } from 'lucide-react';
import { getTranslation, Language } from '@/lib/translations';

interface PopupContactPromptProps {
  onNavigate: (page: 'contact') => void;
  currentLang: Language;
}

export default function PopupContactPrompt({ onNavigate, currentLang }: PopupContactPromptProps) {
  const [visible, setVisible] = useState(false);
  const [closing, setClosing] = useState(false);
  const t = (key: string) => getTranslation(currentLang, key);

  useEffect(() => {
    const shown = sessionStorage.getItem('contactPopupShown');
    if (shown) return;

    const timer = setTimeout(() => {
      setVisible(true);
      sessionStorage.setItem('contactPopupShown', 'true');
    }, 45000);

    return () => clearTimeout(timer);
  }, []);

  const handleNavigate = () => {
    setClosing(true);
    setTimeout(() => {
      setVisible(false);
      onNavigate('contact');
    }, 250);
  };

  if (!visible) return null;

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center z-[9999] 
        bg-black/50 backdrop-blur-sm transition-opacity duration-300 
        ${closing ? 'opacity-0' : 'opacity-100'}`}
    >
      <Card
        className={`relative p-6 w-80 md:w-96 bg-[#12161D] border-[#1E2430] rounded-2xl shadow-[0_8px_24px_rgba(0,0,0,0.5)]
        transform transition-all duration-300 ${closing ? 'scale-90 opacity-0' : 'scale-100 opacity-100'}`}
      >
        <button
          onClick={() => {
            setClosing(true);
            setTimeout(() => setVisible(false), 250);
          }}
          className="absolute top-3 right-3 text-[#A7B0C0] hover:text-[#E6EAF2]"
        >
          <X className="w-5 h-5" />
        </button>

        <h2 className="text-xl font-semibold text-[#E6EAF2] mb-3 text-center">
          {t('popup_title')}
        </h2>
        <p className="text-[#A7B0C0] text-center mb-6">
          {t('popup_text')}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Button
            onClick={handleNavigate}
            className="w-full sm:w-auto text-white font-semibold rounded-xl shadow-lg transition-all"
            style={{ background: 'linear-gradient(135deg, #6366F1 0%, #8B5CF6 100%)' }}
          >
            <MessageCircle className="w-4 h-4 mr-2" />
            {t('popup_button_contact')}
          </Button>

          <a
            href="tel:+380671234567"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-[#25D366] hover:bg-[#1fb855] text-white font-semibold shadow-lg transition-all"
          >
            <Phone className="w-4 h-4" />
            {t('popup_button_call')}
          </a>
        </div>
      </Card>
    </div>
  );
}

