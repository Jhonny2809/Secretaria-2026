
import React from 'react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: "Katia Alves",
      role: "Secretária de Clube",
      text: "Eu estava perdida com tantas coisas para resolver, ano de Campori e correria. Graças a esses materiais de Secretaria tenho um tempo pra respirar!",
      initials: "KA",
      color: "bg-green-600"
    },
    {
      name: "Libia Menia",
      role: "Secretária de Clube",
      text: "Era meu primeiro ano de secretaria no meu clube e digo a vocês que esse kit me ajudou bastante, tem tudo em um só lugar.",
      initials: "LM",
      color: "bg-yellow-500"
    }
  ];

  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-4xl font-black text-gray-900 uppercase tracking-tight mb-4">
            O QUE ESTÃO DIZENDO SOBRE O KIT
          </h2>
          <div className="w-24 h-1 bg-[#FFCC00] mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {testimonials.map((t, idx) => (
            <div key={idx} className="bg-gray-50 p-8 rounded-3xl border border-gray-100 shadow-sm relative hover:shadow-md transition-shadow">
              <div className="absolute -top-4 -left-4">
                <svg className="w-10 h-10 text-[#00703C] opacity-20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V15M3.017 21L3.017 18C3.017 16.8954 3.91243 16 5.017 16H8.017C8.56928 16 9.017 15.5523 9.017 15V9C9.017 8.44772 8.56928 8 8.017 8H4.017C3.46472 8 3.017 8.44772 3.017 9V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                </svg>
              </div>
              
              <div className="flex flex-col h-full">
                <p className="text-gray-700 italic font-medium leading-relaxed mb-6 flex-grow">
                  "{t.text}"
                </p>
                
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-full ${t.color} flex items-center justify-center text-white font-black shadow-inner`}>
                    {t.initials}
                  </div>
                  <div className="text-left">
                    <h4 className="font-black text-gray-900 uppercase text-sm">{t.name}</h4>
                    <p className="text-gray-400 text-[10px] font-bold uppercase tracking-widest">{t.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Social Proof Stars */}
        <div className="mt-12 flex justify-center items-center gap-1">
          {[...Array(5)].map((_, i) => (
            <svg key={i} className="w-5 h-5 text-[#FFCC00]" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
          <span className="ml-2 text-gray-400 font-bold text-xs uppercase tracking-widest">+500 CLUBES ATENDIDOS</span>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
