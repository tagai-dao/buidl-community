import React, { Suspense, useState } from 'react';
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
      <section className="max-w-7xl mx-auto px-4 md:px-6 pt-8 md:pt-12 lg:pt-24 pb-8 md:pb-12 lg:pb-20 text-center">
        <div className="space-y-6 md:space-y-8 max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold leading-[0.9]">
            BUIDL Together, <br/>
            <span className="relative inline-block">
              Make Friends!
              <svg className="absolute w-full h-2 md:h-3 -bottom-1 left-0 text-buidl-pink -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
              </svg>
            </span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl leading-relaxed max-w-2xl mx-auto px-2">
            A community of sovereign individuals, built to support sovereign individuals and digital nomads.
          </p>
          <div className="flex flex-wrap gap-3 md:gap-4 pt-4 justify-center px-2">
            <a 
              href="https://tagai.fun/tag-detail/BUIDL" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <SketchyButton>on-chain community</SketchyButton>
            </a>
            <a 
              href="https://snapshot.box/#/s:buidlbnb.eth" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <SketchyButton variant="secondary">Submit a proposal</SketchyButton>
            </a>
          </div>
        </div>
      </section>
      
      {/* Network Graph Section */}
      <section className="w-full px-4 md:px-8 pb-12 md:pb-20">
         <div className="relative w-full h-[50vh] md:h-[80vh] min-h-[400px] md:min-h-[600px] max-w-[1600px] mx-auto">
            <div className="absolute inset-0 bg-gray-50 rounded-[30px] md:rounded-[50px] border-2 border-dashed border-gray-200 -z-10 transform rotate-1"></div>
            <NetworkGraph />
            <div className="absolute bottom-2 md:bottom-4 right-4 md:right-8 text-gray-400 text-xs md:text-sm transform -rotate-2">
              * Interactive Community Graph
            </div>
         </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="max-w-7xl mx-auto px-4 md:px-6 py-12 md:py-20">
        <div className="flex items-center gap-2 md:gap-4 mb-8 md:mb-12">
          <h2 className="text-3xl md:text-5xl font-bold">Projects</h2>
          <div className="h-1 bg-black flex-grow rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
              <span className="text-6xl">🤖</span>
            </div>
            <h3 className="text-3xl font-bold mb-2">TagAI</h3>
            <p className="text-xl text-gray-600 mb-4">A community layer powered by AI and prediction markets.</p>
            <div className="flex gap-2">
              <span className="px-3 py-1 bg-buidl-pink/30 rounded-full text-sm font-bold border border-black/20">AI</span>
              <span className="px-3 py-1 bg-blue-100 rounded-full text-sm font-bold border border-black/20">Tool</span>
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
      <section id="fund-summary" className="bg-buidl-black text-white py-12 md:py-20 transform -skew-y-1 my-6 md:my-10">
        <div className="max-w-7xl mx-auto px-4 md:px-6 transform skew-y-1">
          <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center">
            <div className="flex-1 space-y-4 md:space-y-6">
              <h2 className="text-3xl md:text-5xl lg:text-7xl font-bold text-buidl-pink">BUIDL Fund</h2>
              <p className="text-lg md:text-2xl text-gray-300 max-w-xl">
                We invest in builders who are shaping the future of individual sovereignty. Early stage, high conviction.
              </p>
            </div>

            <div className="flex-1 w-full grid grid-cols-2 gap-4 md:gap-6">
              <div className="bg-gray-800 p-4 md:p-6 rounded-xl md:rounded-2xl border-2 border-gray-600 border-dashed text-center">
                <div className="text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-2">105,000,000 $BUIDL</div>
                <div className="text-gray-400 text-sm md:text-lg">DAO Fund</div>
              </div>
              <div className="bg-gray-800 p-4 md:p-6 rounded-xl md:rounded-2xl border-2 border-gray-600 border-dashed text-center">
                <div className="text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-2">20-50k</div>
                <div className="text-gray-400 text-sm md:text-lg">Ticket Size</div>
              </div>
              <div className="bg-gray-800 p-4 md:p-6 rounded-xl md:rounded-2xl border-2 border-gray-600 border-dashed text-center col-span-2">
                <div className="text-lg md:text-2xl lg:text-3xl font-bold text-white mb-2">Consumer • AI • Public Goods</div>
                <div className="text-gray-400 text-sm md:text-lg">Focus Areas</div>
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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // 判断当前路由是否激活
  const isActive = (path: string) => location.pathname === path;
  
  // 关闭移动端菜单
  const closeMobileMenu = () => setIsMobileMenuOpen(false);
  
  return (
    <nav className="flex items-center justify-between px-4 md:px-8 py-4 md:py-6 max-w-7xl mx-auto relative">
      <Link 
        to="/"
        className="text-2xl md:text-4xl font-bold tracking-tighter cursor-pointer border-2 border-transparent hover:border-black/10 p-1 rounded-lg transition-all"
        onClick={closeMobileMenu}
      >
        BUIDL Community
      </Link>
      
      {/* 桌面端菜单 */}
      <div className="hidden md:flex gap-8 text-xl font-bold items-center">
        <Link 
          to="/foundation"
          className={`transition-colors hover:text-buidl-pink ${isActive('/foundation') ? 'text-buidl-pink underline' : ''}`}
        >
          Fund
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
      
      {/* 桌面端按钮 */}
      <a 
        href="https://t.me/+Io5Wn6EPdiA5ZGJl" 
        target="_blank" 
        rel="noopener noreferrer"
      >
        <SketchyButton className="hidden md:block text-base px-6 py-2">
          Join Us
        </SketchyButton>
      </a>
      
      {/* 移动端汉堡菜单按钮 */}
      <button
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="md:hidden p-2 border-2 border-black rounded-lg hover:bg-gray-50 transition-colors"
        aria-label="Toggle menu"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          {isMobileMenuOpen ? (
            <path d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>
      
      {/* 移动端菜单抽屉 */}
      {isMobileMenuOpen && (
        <>
          {/* 背景遮罩 */}
          <div
            className="fixed inset-0 bg-black/20 z-40 md:hidden"
            onClick={closeMobileMenu}
          />
          {/* 菜单内容 */}
          <div className="fixed top-0 right-0 h-full w-64 bg-white border-l-2 border-black z-50 md:hidden shadow-lg overflow-y-auto">
            <div className="p-6 space-y-6">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-bold">Menu</h2>
                <button
                  onClick={closeMobileMenu}
                  className="p-2 border-2 border-black rounded-lg hover:bg-gray-50"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              <div className="space-y-4">
                <Link
                  to="/foundation"
                  onClick={closeMobileMenu}
                  className={`block text-xl font-bold py-3 px-4 rounded-lg transition-colors ${
                    isActive('/foundation')
                      ? 'text-buidl-pink bg-buidl-pink/10 underline'
                      : 'hover:text-buidl-pink hover:bg-gray-50'
                  }`}
                >
                  Fund
                </Link>
                <Link
                  to="/activity"
                  onClick={closeMobileMenu}
                  className={`block text-xl font-bold py-3 px-4 rounded-lg transition-colors ${
                    isActive('/activity')
                      ? 'text-purple-500 bg-purple-50 underline'
                      : 'hover:text-purple-500 hover:bg-gray-50'
                  }`}
                >
                  Activity
                </Link>
                <Link
                  to="/acting-now"
                  onClick={closeMobileMenu}
                  className={`block text-xl font-bold py-3 px-4 rounded-lg transition-colors ${
                    isActive('/acting-now')
                      ? 'text-purple-500 bg-purple-50 underline'
                      : 'hover:text-purple-500 hover:bg-gray-50'
                  }`}
                >
                  Acting now
                </Link>
                <Link
                  to="/buy-earn"
                  onClick={closeMobileMenu}
                  className={`block text-xl font-bold py-3 px-4 rounded-lg transition-colors ${
                    isActive('/buy-earn')
                      ? 'text-purple-600 bg-purple-50 border-2 border-purple-500'
                      : 'hover:text-purple-500 hover:bg-gray-50'
                  }`}
                >
                  Buy & Earn
                </Link>
                <Link
                  to="/docs"
                  onClick={closeMobileMenu}
                  className={`block text-xl font-bold py-3 px-4 rounded-lg transition-colors ${
                    isActive('/docs')
                      ? 'text-purple-600 bg-purple-50 border-2 border-purple-500'
                      : 'hover:text-purple-500 hover:bg-gray-50'
                  }`}
                >
                  Docs
                </Link>
              </div>
              
              <div className="pt-6 border-t-2 border-black">
                <a 
                  href="https://t.me/+Io5Wn6EPdiA5ZGJl" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  onClick={closeMobileMenu}
                >
                  <SketchyButton className="w-full text-base px-6 py-3">
                    Join Us
                  </SketchyButton>
                </a>
              </div>
            </div>
          </div>
        </>
      )}
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
        <footer className="border-t-4 border-black mt-12 md:mt-20 pt-8 md:pt-12 pb-8 md:pb-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 md:px-6 flex flex-col md:flex-row justify-between items-center gap-6 md:gap-8">
            <div className="text-center md:text-left">
              <h4 className="text-2xl md:text-3xl font-bold mb-2">BUIDL Community</h4>
              <p className="text-base md:text-lg text-gray-600">Built for the sovereign future.</p>
            </div>
            <div className="flex gap-4 md:gap-6 text-lg md:text-xl font-bold">
              <a href="#" className="hover:text-buidl-pink transition-colors">Twitter</a>
              <a href="#" className="hover:text-buidl-pink transition-colors">Telegram</a>
              <a href="#" className="hover:text-buidl-pink transition-colors">Discord</a>
            </div>
            <div className="text-sm md:text-base text-gray-500">
              &copy; 2024 BUIDL Community
            </div>
          </div>
        </footer>
      </div>
    </BrowserRouter>
  );
}