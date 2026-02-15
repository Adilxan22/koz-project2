import { useState } from 'react';

const LanguageSwitcher = () => {
  const [currentLang, setCurrentLang] = useState('EN');
  const languages = ['EN', 'KZ', 'RU'];

  return (
    <div className="flex items-center gap-2">
      {languages.map((lang, index) => (
        <div key={lang} className="flex items-center">
          <button
            onClick={() => setCurrentLang(lang)}
            className={`text-xs font-bold transition-colors ${
              currentLang === lang ? 'text-[#e85d04]' : 'text-gray-400 hover:text-white'
            }`}
          >
            {lang}
          </button>
          {/* Разделитель (слэш) между языками, кроме последнего */}
          {index < languages.length - 1 && (
            <span className="text-gray-600 text-xs mx-1">/</span>
          )}
        </div>
      ))}
    </div>
  );
};

export default LanguageSwitcher;