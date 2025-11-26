
import React, { createContext, useContext, useState, useEffect } from 'react';
import { getLocales } from 'expo-localization';
import i18n from '@/utils/i18n';

type Language = 'en' | 'fr';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string, options?: any) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const deviceLanguage = getLocales()[0]?.languageCode || 'en';
  const initialLanguage = (deviceLanguage === 'fr' ? 'fr' : 'en') as Language;
  
  const [language, setLanguageState] = useState<Language>(initialLanguage);

  useEffect(() => {
    i18n.locale = language;
  }, [language]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    i18n.locale = lang;
  };

  const t = (key: string, options?: any) => {
    return i18n.t(key, options);
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
