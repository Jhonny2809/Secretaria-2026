
import React from 'react';

const Hero: React.FC = () => {
  const folders = [
    "Atribuições para liderança",
    "Autorizações de saídas",
    "Avaliações Uniformes",
    "Cartão conselheiro Excelente",
    "Cartas advertência",
    "Cartas suspensão",
    "Certificados Admissão em L...",
    "Certificados ano bíblico",
    "Certificados Classes",
    "Certificados Especialidades",
    "Oficio [Escola]",
    "Planejamento Anual",
    "Planejamentos Classes",
    "Regulamentos internos",
    "Relatórios Visita Regional"
  ];

  return (
    <section className="bg-[#00703C] py-16 px-4 md:px-8 overflow-hidden">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-black text-white mb-12 drop-shadow-lg uppercase leading-tight">
          TUDO QUE VOCÊ VAI RECEBER
        </h2>

        {/* 3D Mockup Simulation */}
        <div className="relative max-w-5xl mx-auto">
          <div className="bg-white rounded-xl shadow-2xl border border-gray-200 overflow-hidden transform hover:-translate-y-1 transition-transform duration-500">
            {/* Browser Header */}
            <div className="bg-white p-4 flex items-center justify-between border-b border-gray-100">
              <div className="flex items-center gap-4">
                 <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-gray-200"></div>
                    <div className="w-3 h-3 rounded-full bg-gray-200"></div>
                    <div className="w-3 h-3 rounded-full bg-gray-200"></div>
                 </div>
                 <div className="flex items-center text-gray-600 text-lg font-medium">
                    <span>Meu Drive</span>
                    <svg className="w-4 h-4 mx-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                    <div className="flex items-center gap-1 bg-gray-100 px-3 py-1 rounded-full cursor-pointer hover:bg-gray-200 transition-colors">
                        <span>@Dbvstories</span>
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                    </div>
                 </div>
              </div>
              <div className="flex items-center gap-3">
                 <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-500">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                 </div>
                 <div className="bg-blue-100 text-blue-600 w-12 h-8 rounded-md flex items-center justify-center">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path></svg>
                 </div>
                 <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-500">
                    <span className="text-xs font-bold">i</span>
                 </div>
              </div>
            </div>

            {/* Folder Grid Area */}
            <div className="p-8 bg-white min-h-[500px]">
              <div className="flex justify-between items-center mb-6 border-b border-gray-100 pb-2">
                 <div className="flex gap-4">
                    <div className="px-4 py-1.5 border border-gray-200 rounded-lg text-sm font-medium text-gray-600 flex items-center gap-2 cursor-default select-none">Tipo <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"></path></svg></div>
                    <div className="px-4 py-1.5 border border-gray-200 rounded-lg text-sm font-medium text-gray-600 flex items-center gap-2 cursor-default select-none">Pessoas <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"></path></svg></div>
                    <div className="px-4 py-1.5 border border-gray-200 rounded-lg text-sm font-medium text-gray-600 flex items-center gap-2 cursor-default select-none">Modificado <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"></path></svg></div>
                 </div>
              </div>

              <div className="text-left mb-4">
                <span className="text-sm font-bold text-gray-500">Pastas</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                {folders.map((folder, i) => (
                  <div 
                    key={i} 
                    className={`flex items-center justify-between p-3 rounded-xl border border-gray-100 hover:bg-blue-50 transition-colors group cursor-default ${i === 0 ? 'bg-blue-50 ring-1 ring-blue-300' : 'bg-gray-50/50'}`}
                  >
                    <div className="flex items-center gap-3">
                      <div className="text-gray-600 group-hover:text-blue-500 transition-colors">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"></path>
                        </svg>
                      </div>
                      <span className="text-sm font-medium text-gray-700 truncate max-w-[180px]">
                        {folder}
                      </span>
                    </div>
                    <div className="text-gray-400">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"></path>
                      </svg>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Decorative Floating elements */}
          <div className="absolute -top-12 -right-8 w-32 h-40 bg-white rounded-lg shadow-2xl transform rotate-12 border border-gray-100 hidden lg:flex flex-col p-4">
             <div className="bg-red-500 h-3 w-2/3 mb-4 rounded-sm"></div>
             <div className="space-y-2">
                <div className="bg-gray-100 h-1.5 w-full rounded-full"></div>
                <div className="bg-gray-100 h-1.5 w-full rounded-full"></div>
                <div className="bg-gray-100 h-1.5 w-4/5 rounded-full"></div>
                <div className="bg-gray-100 h-1.5 w-full rounded-full"></div>
             </div>
             <div className="mt-auto flex justify-center">
                <div className="bg-red-50 text-red-500 text-[10px] font-black px-2 py-1 rounded">PDF</div>
             </div>
          </div>

          <div className="absolute -bottom-10 -left-12 w-40 h-28 bg-white rounded-lg shadow-2xl transform -rotate-6 border border-gray-100 hidden lg:flex flex-col p-4">
             <div className="flex items-center gap-2 mb-4">
                <div className="w-6 h-6 bg-green-500 rounded-sm"></div>
                <div className="h-2 w-16 bg-gray-200 rounded-full"></div>
             </div>
             <div className="grid grid-cols-4 gap-2">
                {[...Array(8)].map((_, i) => (
                   <div key={i} className="h-1.5 bg-gray-100 rounded-full"></div>
                ))}
             </div>
             <div className="mt-auto flex justify-end">
                <div className="bg-green-50 text-green-600 text-[10px] font-black px-2 py-1 rounded">XLS</div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
