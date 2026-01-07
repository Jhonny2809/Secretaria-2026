
import React from 'react';

const Header: React.FC = () => {
  const features = [
    "Certificados de todas as classes",
    "Modelos de secretaria",
    "Atualizado 2026",
    "Atas e planejamentos",
    "Editável no Canva"
  ];

  return (
    <header className="bg-black text-white py-6 px-4 md:px-8">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col md:flex-row items-center gap-6">
          <img 
            src="https://i.ibb.co/tMWg5h07/Logos.png" 
            alt="Logo Desbravadores e Aventureiros" 
            className="h-20 md:h-24 w-auto drop-shadow-[0_0_8px_rgba(255,215,0,0.3)]"
          />
          <div className="text-center md:text-left">
            <h1 className="text-xl md:text-3xl font-extrabold text-[#FFD700] tracking-tight leading-tight uppercase">
              KIT DE SECRETARIA 2026 PARA <br className="hidden md:block" /> 
              <span className="text-white">DESBRAVADORES E AVENTUREIROS</span>
            </h1>
          </div>
        </div>

        <ul className="flex flex-wrap justify-center md:justify-end gap-x-6 gap-y-2 max-w-sm">
          {features.map((feature, idx) => (
            <li key={idx} className="flex items-center gap-2 text-[10px] md:text-xs uppercase font-bold tracking-wider">
              <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Header;
