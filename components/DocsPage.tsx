import React from 'react';

const NetworkStatePoster = () => (
  <div className="w-full h-full bg-[#1a365d] relative overflow-hidden flex flex-col items-center p-4 font-serif text-white select-none shadow-inner">
    {/* Blueprint Grid */}
    <div className="absolute inset-0 opacity-20 bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:20px_20px]"></div>
    
    <div className="relative z-10 flex flex-col items-center mt-4">
      <div className="text-[10px] tracking-[0.4em] font-light mb-1">THE</div>
      <div className="text-3xl font-bold tracking-widest leading-none">NETWORK</div>
      <div className="text-5xl font-black tracking-widest leading-none mt-1">STATE</div>
    </div>

    {/* Earth Graphic */}
    <div className="relative w-32 h-32 mt-12 mb-auto group">
      <div className="absolute inset-0 rounded-full bg-blue-900 border border-white/30 shadow-[inset_0_0_20px_rgba(255,255,255,0.2)]"></div>
      {/* Globe lines */}
      <svg className="absolute inset-0 w-full h-full opacity-60" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="48" fill="none" stroke="white" strokeWidth="0.5" />
        <ellipse cx="50" cy="50" rx="20" ry="48" fill="none" stroke="white" strokeWidth="0.5" />
        <path d="M2,50 Q 50,20 98,50 Q 50,80 2,50" fill="none" stroke="white" strokeWidth="0.5" />
      </svg>
      {/* Network Nodes */}
      <div className="absolute top-4 right-6 w-1.5 h-1.5 bg-yellow-400 rounded-full shadow-sm"></div>
      <div className="absolute bottom-10 left-8 w-1 h-1 bg-yellow-200 rounded-full opacity-80"></div>
      <div className="absolute top-1/2 left-4 w-1.5 h-1.5 bg-orange-400 rounded-full"></div>
    </div>

    <div className="mt-auto border-t border-white/20 pt-2 w-full text-center">
      <div className="text-[10px] tracking-widest font-bold opacity-80 uppercase">Balaji Srinivasan</div>
    </div>
  </div>
);

const SovereignIndividualPoster = () => (
  <div className="w-full h-full bg-white relative overflow-hidden flex flex-col font-sans select-none shadow-inner">
    {/* Top Sky Section */}
    <div className="h-[40%] bg-[#0099cc] relative flex items-end justify-center">
      {/* Abstract Branch and Silhouette */}
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 200 100" preserveAspectRatio="none">
        <path d="M0,50 Q 50,10 100,60 T 200,30" stroke="#1a1a1a" strokeWidth="8" fill="none" opacity="0.8" />
      </svg>
      <div className="relative z-10 pb-4 flex flex-col items-center">
        <span className="text-white font-bold text-xs tracking-widest">THE</span>
        <span className="text-white text-3xl font-black tracking-tighter">SOVEREIGN</span>
      </div>
    </div>
    
    {/* Middle Text */}
    <div className="flex-1 flex flex-col items-center justify-center p-4 text-center">
      <h2 className="text-[#333] text-2xl font-black tracking-tight leading-none mb-1">INDIVIDUAL</h2>
      <p className="text-[8px] text-gray-400 font-bold uppercase tracking-widest mt-2">Mastering the Transition to the</p>
      <p className="text-[10px] text-gray-600 font-black uppercase tracking-widest">Information Age</p>
    </div>

    {/* Bottom Orange Section */}
    <div className="h-[25%] bg-[#f58220] p-3 flex flex-col items-center justify-center text-white text-center">
      <div className="text-[9px] font-bold leading-none uppercase">James Dale Davidson</div>
      <div className="text-[7px] font-bold opacity-80 my-0.5">AND</div>
      <div className="text-[9px] font-bold leading-none uppercase">Lord William Rees-Mogg</div>
    </div>
  </div>
);

const ComplexityChartPoster = () => (
  <div className="w-full h-full bg-white relative p-4 flex flex-col overflow-hidden text-[6px] font-mono select-none">
    <div className="border-b border-black/10 pb-1 mb-2 font-bold text-xs">Historical Progression</div>
    
    {/* Graph lines placeholder */}
    <div className="flex-1 flex flex-col gap-4">
      {/* Complexity Curve */}
      <div className="h-16 relative">
        <svg className="w-full h-full" viewBox="0 0 100 40">
          <path d="M0,35 Q 30,30 60,15 T 100,5" stroke="black" fill="none" strokeWidth="0.5" />
          <line x1="0" y1="35" x2="100" y2="35" stroke="black" strokeWidth="0.2" strokeDasharray="1,1" />
        </svg>
        <span className="absolute top-0 right-0 opacity-40">Complexity Progression</span>
      </div>

      {/* Hierarchy Diagrams */}
      <div className="grid grid-cols-4 gap-2">
        {[1, 2, 3, 4].map(i => (
          <div key={i} className="flex flex-col items-center gap-1">
            <div className="w-8 h-8 rounded-full border border-black/20 flex items-center justify-center">
              <div className="w-4 h-4 rounded-full bg-purple-100 border border-purple-300"></div>
            </div>
            <span className="text-[5px] text-center opacity-60">Control {i}</span>
          </div>
        ))}
      </div>

      {/* Network Clusters */}
      <div className="flex-1 relative border border-dashed border-black/10 rounded p-2">
        <div className="absolute top-2 left-2 w-4 h-4 rounded-full bg-red-100 opacity-50"></div>
        <div className="absolute bottom-4 right-6 w-6 h-6 rounded-full bg-blue-100 opacity-50"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-green-100 opacity-50"></div>
        <svg className="w-full h-full absolute inset-0 opacity-20" viewBox="0 0 100 60">
           <path d="M10,10 L50,30 L90,50 M10,10 L90,50" stroke="black" strokeWidth="0.1" />
        </svg>
      </div>
    </div>
  </div>
);

const CryptoPhenomenonPoster = () => (
  <div className="w-full h-full bg-white relative p-6 flex flex-col font-sans select-none shadow-inner border border-gray-100">
    <div className="text-xl font-black mb-12">i.c</div>
    
    <div className="max-w-[140px] mb-8">
      <h2 className="text-lg font-black leading-tight tracking-tight text-gray-900">
        What's Really Driving the Cryptocurrency Phenomenon?
      </h2>
    </div>

    <div className="mt-auto space-y-1 opacity-60">
      <div className="text-[8px] font-bold">Chris Dannen, Leo Zhang, Martín Beauchamp</div>
      <div className="text-[8px] font-black italic">Iterative Capital Management</div>
      <div className="text-[8px]">November 2018</div>
    </div>

    <div className="mt-6 pt-4 border-t border-black/5">
      <div className="text-[7px] font-black uppercase tracking-widest mb-1">Abstract</div>
      <p className="text-[6px] text-gray-400 leading-normal">
        In this paper, we introduce investors to a decades-old subculture of eccentric software-makers who resist the oppressive and ethically-fraught traditions...
      </p>
    </div>
  </div>
);

export const DocsPage: React.FC = () => {
  const docsItems = [
    { 
      title: "The Network State", 
      component: <NetworkStatePoster />,
      url: "https://nishino.gitbook.io/wang-luo-guo-jia/"
    },
    { 
      title: "THE SOVEREIGN INDIVIDUAL", 
      component: <SovereignIndividualPoster />,
      url: "https://drive.google.com/file/d/17OH9VE9SQ9yIjF2g3XkM6pi14QFGNzlz"
    },
    { 
      title: "Complexity Rising: From Human Beings to Human Civilization, a Complexity Profile", 
      component: <ComplexityChartPoster />,
      url: "https://necsi.edu/complexity-rising-from-human-beings-to-human-civilization-a-complexity-profile"
    },
    { 
      title: "What's Really Driving the Cryptocurrency Phenomenon?", 
      component: <CryptoPhenomenonPoster />,
      url: "https://drive.google.com/file/d/1-P-Qos4mwmyorNENvNstg9jAUvISkVqL"
    }
  ];

  const handleRedirect = (url: string) => {
    window.open(url, '_blank');
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <div className="border-2 border-black rounded-[50px] p-8 md:p-12 bg-white">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {docsItems.map((doc, index) => (
            <div 
              key={index} 
              onClick={() => handleRedirect(doc.url)}
              className="border-2 border-black rounded-[45px] p-5 flex flex-col items-center group hover:shadow-sketch transition-all bg-white overflow-hidden cursor-pointer"
            >
              {/* Document Visual Component */}
              <div className="w-full aspect-[4/6] bg-white border-2 border-black rounded-[35px] mb-8 relative overflow-hidden shadow-sm group-hover:scale-[1.02] transition-transform">
                {doc.component}
              </div>
              
              {/* Title Box */}
              <div className="w-full mt-auto">
                <div className="border-2 border-black rounded-[20px] p-4 bg-white min-h-[80px] flex items-center justify-center text-center shadow-sm">
                  <p className="text-sm font-bold leading-tight uppercase tracking-tight font-hand">
                    {doc.title}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};