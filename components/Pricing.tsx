
import React from 'react';

const Pricing: React.FC = () => {
  const handleCheckout = (e: React.MouseEvent | React.KeyboardEvent) => {
    // Interrompe a propagação no nível do React
    e.stopPropagation();
    
    // Interrompe a propagação no nível nativo do DOM para ser ainda mais agressivo 
    // contra scripts de rastreamento que monitoram o document ou window.
    if ('nativeEvent' in e && (e.nativeEvent as any).stopImmediatePropagation) {
      (e.nativeEvent as any).stopImmediatePropagation();
    }
    
    // Link oficial fornecido pelo usuário
    const checkoutBaseUrl = 'https://pay.wiapy.com/ce7wD2YjiO';
    
    // Captura todos os parâmetros da URL atual (?utm_source=...&utm_medium=...)
    const searchParams = window.location.search;
    
    // Disparo de eventos de rastreamento
    console.log('Evento enviado: InitiateCheckout');
    const fbq = (window as any).fbq;
    if (fbq) {
      try {
        fbq('track', 'InitiateCheckout');
      } catch (err) {
        console.error('Erro ao disparar evento fbq:', err);
      }
    }
    
    // Concatena a URL de checkout com os parâmetros
    const separator = checkoutBaseUrl.includes('?') ? '&' : '?';
    const finalUrl = searchParams 
      ? `${checkoutBaseUrl}${searchParams.startsWith('?') ? searchParams.replace('?', separator) : separator + searchParams}`
      : checkoutBaseUrl;

    // Abre em uma nova aba conforme solicitado
    window.open(finalUrl, '_blank');
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      handleCheckout(e);
    }
  };

  return (
    <section className="bg-black pb-20 md:pb-32 px-4 relative overflow-hidden">
      {/* Background Decorative Circles */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] md:w-[800px] h-[300px] md:h-[800px] bg-[#00703C]/10 rounded-full blur-[60px] md:blur-[120px] pointer-events-none"></div>

      <div className="max-w-lg mx-auto relative z-10">
        <div className="bg-white rounded-[2rem] md:rounded-[3rem] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.5)] overflow-hidden p-6 md:p-12 text-center border-t-8 border-[#00703C]">
          
          <div className="inline-block bg-[#FFCC00] text-black font-black px-4 md:px-6 py-2 rounded-full text-[10px] md:text-xs uppercase tracking-[0.1em] md:tracking-[0.2em] mb-6 md:mb-8 shadow-sm">
            OFERTA POR TEMPO LIMITADO
          </div>

          <div className="mb-6 md:mb-8">
            <span className="text-gray-400 font-bold text-lg md:text-xl line-through decoration-red-500 decoration-[2px] md:decoration-[3px] opacity-60">
              DE R$ 147,00
            </span>
            <p className="text-black font-black text-xl md:text-2xl mt-3 md:mt-4 leading-tight uppercase tracking-tight">
              LEVE O KIT COMPLETO <br className="hidden md:block"/> POR APENAS:
            </p>
          </div>

          <div className="flex flex-col items-center justify-center mb-8 md:mb-10 group cursor-default">
            <div className="flex items-start">
              <span className="text-2xl md:text-4xl font-black text-[#00703C] mt-4 md:mt-6 mr-1">R$</span>
              <span className="text-7xl sm:text-8xl md:text-[10rem] font-black text-[#00703C] tracking-tighter leading-none group-hover:scale-105 transition-transform duration-500">14</span>
              <div className="flex flex-col items-start mt-4 md:mt-8">
                <span className="text-4xl md:text-6xl font-black text-[#00703C] leading-none">,90</span>
                <span className="text-gray-400 font-bold text-xs md:text-sm uppercase mt-1">à vista</span>
              </div>
            </div>
            <div className="mt-3 md:mt-4 bg-[#D32F2F]/10 text-[#D32F2F] px-3 md:px-4 py-1.5 rounded-lg font-black text-[9px] md:text-[10px] uppercase tracking-widest border border-[#D32F2F]/20">
              Mais de 90% de Desconto HOJE
            </div>
          </div>

          <div 
            role="button"
            tabIndex={0}
            onClick={handleCheckout}
            onKeyDown={handleKeyDown}
            className="w-full bg-gradient-to-r from-[#00703C] to-[#009250] hover:from-[#009250] hover:to-[#00703C] text-white font-black text-lg md:text-2xl py-5 md:py-7 rounded-2xl md:rounded-3xl shadow-[0_10px_25px_-5px_rgba(0,112,60,0.4)] transition-all transform active:scale-95 hover:-translate-y-1 mb-8 md:mb-10 flex flex-col items-center justify-center gap-1 cursor-pointer outline-none focus:ring-4 focus:ring-[#00703C]/30 select-none"
          >
            <span>QUERO ACESSO VITALÍCIO</span>
            <span className="text-[8px] md:text-[10px] opacity-70 font-bold tracking-[0.1em] md:tracking-[0.2em]">PAGAMENTO ÚNICO - SEM MENSALIDADES</span>
          </div>

          <div className="pt-6 md:pt-8 border-t border-gray-100">
            <div className="flex justify-center items-center gap-4 md:gap-6 flex-wrap mb-6 md:mb-8">
              <div className="flex flex-col items-center gap-1 md:gap-2 opacity-60 grayscale hover:grayscale-0 transition-all duration-300">
                <img src="https://img.icons8.com/color/48/000000/visa.png" alt="Visa" className="h-5 md:h-6" />
                <span className="text-[7px] md:text-[8px] font-black text-gray-400 uppercase">VISA</span>
              </div>
              <div className="flex flex-col items-center gap-1 md:gap-2 opacity-60 grayscale hover:grayscale-0 transition-all duration-300">
                <img src="https://img.icons8.com/color/48/000000/mastercard.png" alt="Mastercard" className="h-5 md:h-6" />
                <span className="text-[7px] md:text-[8px] font-black text-gray-400 uppercase">MASTER</span>
              </div>
              <div className="flex flex-col items-center gap-1 md:gap-2 opacity-60 grayscale hover:grayscale-0 transition-all duration-300">
                <div className="h-5 md:h-6 flex items-center"><span className="text-black font-black text-xs md:text-sm italic">PIX</span></div>
                <span className="text-[7px] md:text-[8px] font-black text-gray-400 uppercase tracking-tighter">Instantâneo</span>
              </div>
            </div>
            
            <div className="flex flex-col items-center gap-3 md:gap-4">
              <div className="flex items-center gap-3 bg-green-50 px-4 md:px-5 py-2 md:py-2.5 rounded-xl md:rounded-2xl border border-green-100">
                <svg className="w-4 h-4 md:w-5 md:h-5 text-green-600 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                </svg>
                <div className="text-left">
                  <p className="text-[9px] md:text-[10px] font-black text-green-800 uppercase tracking-wider">Ambiente Blindado</p>
                  <p className="text-[7px] md:text-[8px] font-bold text-green-600/70 uppercase">Certificado de Segurança SSL</p>
                </div>
              </div>
              
              <div className="flex items-center text-gray-400 text-[9px] md:text-[10px] font-bold">
                 <span>Processado com segurança por</span>
                 <span className="text-[#3b82f6] font-black text-sm md:text-base italic ml-1.5 flex items-center">
                    wiapy
                 </span>
              </div>
            </div>
          </div>

        </div>
        
        {/* Money Back Guarantee Badge */}
        <div className="mt-6 md:mt-8 flex items-center justify-center gap-3 md:gap-4 text-white/40 px-4">
           <svg className="w-8 h-8 md:w-10 md:h-10 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
           </svg>
           <p className="text-left text-[8px] md:text-[10px] font-bold uppercase tracking-wider leading-snug">
             Sua satisfação ou seu dinheiro de volta.<br/>
             Garantia incondicional de 7 dias.
           </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
