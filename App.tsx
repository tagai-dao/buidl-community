import React, { Suspense } from 'react';
import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import { SketchyButton } from './components/SketchyButton';
import { SketchyCard } from './components/SketchyCard';
import { NetworkGraph } from './components/NetworkGraph';
import { EventsSection } from './components/EventsSection';

// 懒加载页面组件
const FundPage = React.lazy(() => import('./components/FundPage').then(module => ({ default: module.FundPage })));
const ActingNowPage = React.lazy(() => import('./components/ActingNowPage').then(module => ({ default: module.ActingNowPage })));
const ActivityPage = React.lazy(() => import('./components/ActivityPage').then(module => ({ default: module.ActivityPage })));
const BuyEarnPage = React.lazy(() => import('./components/BuyEarnPage').then(module => ({ default: module.BuyEarnPage })));
const DocsPage = React.lazy(() => import('./components/DocsPage').then(module => ({ default: module.DocsPage })));

// 加载中的占位组件
const LoadingFallback = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="text-2xl font-bold">Loading...</div>
  </div>
);

// 首页组件
const HomePage = () => (
  <>
    {/* Hero Text Section */}
      <section className="max-w-7xl mx-auto px-6 pt-12 pb-12 md:pt-24 md:pb-20 text-center">
        <div className="space-y-8 max-w-4xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-bold leading-[0.9]">
            BUIDL Together, <br/>
            <span className="relative inline-block">
              Make Friends!
              <svg className="absolute w-full h-3 -bottom-1 left-0 text-buidl-pink -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
              </svg>
            </span>
          </h1>
          <p className="text-2xl md:text-3xl leading-relaxed max-w-2xl mx-auto">
            A community of sovereign individuals, built to support sovereign individuals and digital nomads.
          </p>
          <div className="flex flex-wrap gap-4 pt-4 justify-center">
            <SketchyButton>on-chain community</SketchyButton>
            <SketchyButton variant="secondary">Submit a proposal</SketchyButton>
          </div>
        </div>
      </section>
      
      {/* Network Graph Section */}
      <section className="w-full px-4 md:px-8 pb-20">
         <div className="relative w-full h-[80vh] min-h-[600px] max-w-[1600px] mx-auto">
            <div className="absolute inset-0 bg-gray-50 rounded-[50px] border-2 border-dashed border-gray-200 -z-10 transform rotate-1"></div>
            <NetworkGraph />
            <div className="absolute bottom-4 right-8 text-gray-400 text-sm transform -rotate-2">
              * Interactive Community Graph
            </div>
         </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="max-w-7xl mx-auto px-6 py-20">
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-5xl font-bold">Projects</h2>
          <div className="h-1 bg-black flex-grow rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <SketchyCard className="group hover:-rotate-1 transition-transform">
            <div className="h-48 bg-gray-100 rounded-lg mb-4 flex items-center justify-center border border-black/10">
              <span className="text-6xl">🤖</span>
            </div>
            <h3 className="text-3xl font-bold mb-2">TagAI</h3>
            <p className="text-xl text-gray-600 mb-4">A community layer powered by AI and prediction markets.</p>
            <div className="flex gap-2">
              <span className="px-3 py-1 bg-buidl-pink/30 rounded-full text-sm font-bold border border-black/20">AI</span>
              <span className="px-3 py-1 bg-blue-100 rounded-full text-sm font-bold border border-black/20">Tool</span>
            </div>
          </SketchyCard>

          <SketchyCard className="group hover:rotate-1 transition-transform">
            <div className="h-48 bg-gray-100 rounded-lg mb-4 flex items-center justify-center border border-black/10">
              <span className="text-6xl">☕</span>
            </div>
            <h3 className="text-3xl font-bold mb-2">CoffeeOS</h3>
            <p className="text-xl text-gray-600 mb-4">A Coffee OS for independent cafes to manage inventory on-chain.</p>
            <div className="flex gap-2">
              <span className="px-3 py-1 bg-amber-100 rounded-full text-sm font-bold border border-black/20">SaaS</span>
              <span className="px-3 py-1 bg-green-100 rounded-full text-sm font-bold border border-black/20">RWAs</span>
            </div>
          </SketchyCard>

          <SketchyCard className="group hover:-rotate-1 transition-transform">
            <div className="h-48 bg-gray-100 rounded-lg mb-4 flex items-center justify-center border border-black/10">
              <span className="text-6xl">🌍</span>
            </div>
            <h3 className="text-3xl font-bold mb-2">Digital Nomad Hub</h3>
            <p className="text-xl text-gray-600 mb-4">BUIDL (Anren) Digital Nomad Hub</p>
            <div className="flex gap-2">
              <span className="px-3 py-1 bg-purple-100 rounded-full text-sm font-bold border border-black/20">Community</span>
              <span className="px-3 py-1 bg-pink-100 rounded-full text-sm font-bold border border-black/20">Hub</span>
            </div>
          </SketchyCard>
        </div>
      </section>

      {/* Fund Section Summary */}
      <section id="fund-summary" className="bg-buidl-black text-white py-20 transform -skew-y-1 my-10">
        <div className="max-w-7xl mx-auto px-6 transform skew-y-1">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="flex-1 space-y-6">
              <h2 className="text-5xl md:text-7xl font-bold text-buidl-pink">BUIDL Fund</h2>
              <p className="text-2xl text-gray-300 max-w-xl">
                We invest in builders who are shaping the future of individual sovereignty. Early stage, high conviction.
              </p>
            </div>

            <div className="flex-1 w-full grid grid-cols-2 gap-6">
              <div className="bg-gray-800 p-6 rounded-2xl border-2 border-gray-600 border-dashed text-center">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">200,000,000 $BUIDL</div>
                <div className="text-gray-400 text-lg">DAO Fund</div>
              </div>
              <div className="bg-gray-800 p-6 rounded-2xl border-2 border-gray-600 border-dashed text-center">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">20-50k</div>
                <div className="text-gray-400 text-lg">Ticket Size</div>
              </div>
              <div className="bg-gray-800 p-6 rounded-2xl border-2 border-gray-600 border-dashed text-center col-span-2">
                <div className="text-2xl md:text-3xl font-bold text-white mb-2">Consumer • AI • Public Goods</div>
                <div className="text-gray-400 text-lg">Focus Areas</div>
              </div>
            </div>
          </div>
        </div>
      </section>

    <EventsSection />
  </>
);

// 导航组件（需要访问路由信息）
const Navigation = () => {
  const location = useLocation();
  
  // 判断当前路由是否激活
  const isActive = (path: string) => location.pathname === path;
  
  return (
    <nav className="flex items-center justify-between px-8 py-6 max-w-7xl mx-auto">
      <Link 
        to="/"
        className="text-4xl font-bold tracking-tighter cursor-pointer border-2 border-transparent hover:border-black/10 p-1 rounded-lg transition-all"
      >
        BUIDL Community
      </Link>
      <div className="hidden md:flex gap-8 text-xl font-bold items-center">
        <Link 
          to="/foundation"
          className={`transition-colors hover:text-buidl-pink ${isActive('/foundation') ? 'text-buidl-pink underline' : ''}`}
        >
          Foundation
        </Link>
        <Link 
          to="/activity"
          className={`transition-colors hover:text-purple-500 ${isActive('/activity') ? 'text-purple-500 underline' : ''}`}
        >
          Activity
        </Link>
        <Link 
          to="/acting-now"
          className={`transition-colors hover:text-purple-500 ${isActive('/acting-now') ? 'text-purple-500 underline' : ''}`}
        >
          Acting now
        </Link>
        <Link 
          to="/buy-earn"
          className={`transition-colors hover:text-purple-500 ${isActive('/buy-earn') ? 'text-purple-600 border-2 border-purple-500 px-2 py-1 rounded' : ''}`}
        >
          Buy & Earn
        </Link>
        <Link 
          to="/docs"
          className={`transition-colors hover:text-purple-500 ${isActive('/docs') ? 'text-purple-600 border-2 border-purple-500 px-2 py-1 rounded' : ''}`}
        >
          Docs
        </Link>
      </div>
      <SketchyButton className="hidden md:block text-base px-6 py-2">
        Join Us
      </SketchyButton>
    </nav>
  );
};

// 主应用组件
export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen font-hand text-buidl-black selection:bg-buidl-pink selection:text-buidl-black">
        <Navigation />
        
        <main>
          <Suspense fallback={<LoadingFallback />}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/foundation" element={<FundPage />} />
              <Route path="/activity" element={<ActivityPage />} />
              <Route path="/acting-now" element={<ActingNowPage />} />
              <Route path="/buy-earn" element={<BuyEarnPage />} />
              <Route path="/docs" element={<DocsPage />} />
            </Routes>
          </Suspense>
        </main>

        {/* Footer */}
        <footer className="border-t-4 border-black mt-20 pt-12 pb-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="text-center md:text-left">
              <h4 className="text-3xl font-bold mb-2">BUIDL Community</h4>
              <p className="text-lg text-gray-600">Built for the sovereign future.</p>
            </div>
            <div className="flex gap-6 text-xl font-bold">
              <a href="#" className="hover:text-buidl-pink transition-colors">Twitter</a>
              <a href="#" className="hover:text-buidl-pink transition-colors">Telegram</a>
              <a href="#" className="hover:text-buidl-pink transition-colors">Discord</a>
            </div>
            <div className="text-gray-500">
              &copy; 2024 BUIDL Community
            </div>
          </div>
        </footer>
      </div>
    </BrowserRouter>
  );
}