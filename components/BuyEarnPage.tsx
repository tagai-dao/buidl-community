import React from 'react';
import { SketchyButton } from './SketchyButton';

const CoffeePoster = () => (
  <div className="w-full h-full bg-[#cbd5bc] relative overflow-hidden font-sans p-6 flex flex-col items-center select-none shadow-inner">
    {/* Decorative Flowers */}
    <div className="absolute top-4 right-6 text-yellow-400 text-4xl opacity-80">✿</div>
    <div className="absolute top-1/3 left-4 text-orange-300 text-5xl opacity-60">✿</div>
    <div className="absolute bottom-1/4 right-2 text-yellow-300 text-3xl opacity-70">✿</div>

    {/* Title Section */}
    <div className="w-full relative z-10">
      <div className="text-[#4a3728] text-5xl font-bold leading-none tracking-tight">Coffee</div>
      <div className="text-[#4a3728] text-8xl font-black leading-none -mt-2 ml-12 opacity-90">OS</div>
      <div className="text-[#4a3728] text-xl font-bold mt-2 ml-4 tracking-widest italic opacity-80">| 共创 1.0</div>
    </div>
    
    {/* Date and Location */}
    <div className="mt-6 text-[#2d5a27] text-4xl font-black rotate-[-3deg] drop-shadow-sm tracking-tighter">
      2026.1.1-1.10
    </div>
    
    <div className="text-[#2d5a27] text-sm font-bold text-center mt-2 leading-tight">
      成都武侯区玉洁巷8号 附4号
    </div>

    {/* Catchphrase */}
    <div className="mt-4 flex flex-col items-center gap-1">
      <div className="text-[#2d5a27] text-2xl font-black tracking-tight leading-none">把闲置变成</div>
      <div className="text-[#2d5a27] text-2xl font-black tracking-tight leading-none">空间的一部分</div>
    </div>

    {/* Major Heading */}
    <div className="mt-8 text-[#4a3728] text-5xl font-black tracking-[0.15em] relative transform hover:scale-105 transition-transform cursor-default">
      旧物复兴
      <div className="absolute -bottom-2 left-0 w-full h-1 bg-[#4a3728] opacity-20 rounded-full"></div>
    </div>

    {/* Rules Section */}
    <div className="mt-auto w-full text-left text-[#4a3728] space-y-1.5 text-[8px] md:text-[10px]">
      <div className="font-black text-xs md:text-sm mb-1 border-b border-[#4a3728]/20 pb-0.5">共创内容：</div>
      <div className="flex gap-2 font-bold"><span className="text-[#2d5a27]">●</span> 共创内容：植物/灯具 (二手)</div>
      <div className="flex gap-2 font-bold"><span className="text-[#2d5a27]">●</span> 共创方式：先线上发闲置 → 符合店铺风格 → 再到店装扮</div>
      <div className="flex gap-2 font-bold"><span className="text-[#2d5a27]">●</span> 共创权益：</div>
      <div className="pl-5 space-y-0.5 opacity-90 font-medium">
        <div>○ 角落署名</div>
        <div>○ 店铺相册收录</div>
        <div>○ 装扮的角落拥有优先使用权</div>
        <div>○ 7 折咖啡券 × 3</div>
      </div>
    </div>

    {/* QR Code Placeholder */}
    <div className="absolute bottom-4 right-4 w-10 h-10 border-2 border-[#4a3728] bg-white p-1 rounded-sm shadow-sm flex items-center justify-center">
      <div className="w-full h-full bg-[#4a3728] opacity-10 flex items-center justify-center text-[6px] font-bold">QR</div>
    </div>

    {/* Artistic Touches */}
    <div className="absolute left-4 top-1/2 w-0.5 h-32 bg-[#4a3728]/10 rotate-[15deg] rounded-full"></div>
    <div className="absolute right-8 top-1/2 w-0.5 h-40 bg-[#4a3728]/10 rotate-[-10deg] rounded-full"></div>
  </div>
);

export const BuyEarnPage: React.FC = () => {
  const contractAddress = "0x32ef878D527d860339818571E8DA17005110f04E";
  const tagAiUrl = "https://tagai.fun/tag-detail/BUIDL";
  const twitterIntentUrl = "https://x.com/intent/post?text=%23BUIDL%0a%40TagaiDAO";
  const cafeCoBuildingUrl = "https://www.xiaohongshu.com/discovery/item/6951e9ee000000001d03ef77?app_platform=ios&app_version=9.14.2&share_from_user_hidden=true&xsec_source=app_share&type=normal&xsec_token=CB1jKuZYEQF1hBqkAe---X5LnxJK_vmVvTae985sImA20=&author_share=1&xhsshare=WeixinSession&shareRedId=Nz03NzZINkA7TD05Tj83PzgzSkhFOkpM&apptime=1766976557&share_id=02cb60ca3cfb44f3880266e4e68f1be5";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(contractAddress);
    alert("Contract address copied!");
  };

  const handleRedirect = (url: string) => {
    window.open(url, '_blank');
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 space-y-24">
      {/* Buy Section */}
      <section className="relative">
        <div className="border-2 border-black rounded-[50px] p-12 bg-white flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Buy Card */}
          <div className="flex-1 w-full max-w-2xl">
            <div 
              onClick={() => handleRedirect(tagAiUrl)}
              className="border-2 border-black rounded-[40px] p-8 aspect-[16/8] flex items-center justify-center hover:shadow-sketch transition-all cursor-pointer group bg-white"
            >
               <h2 className="text-4xl md:text-5xl font-bold text-center group-hover:scale-105 transition-transform">
                 Buy from TagAI
               </h2>
            </div>
          </div>

          {/* CA Info */}
          <div className="flex-1 space-y-4">
            <div className="text-2xl font-bold flex flex-wrap items-center gap-2">
              <span className="text-gray-500">CA :</span>
              <span 
                className="break-all font-mono cursor-pointer hover:text-purple-600 transition-colors"
                onClick={copyToClipboard}
                title="Click to copy"
              >
                {contractAddress}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Earn Section */}
      <section className="space-y-12">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold">Earn with BUIDL Community</h2>
        </div>

        <div className="border-2 border-black rounded-[50px] p-8 bg-white">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1: Post */}
            <div className="border-2 border-black rounded-[35px] p-5 flex flex-col items-center group">
              <div className="w-full aspect-[4/5] bg-white border-2 border-black rounded-[30px] flex items-center justify-center p-6 mb-6 relative overflow-hidden">
                <div className="absolute inset-2 border-2 border-black/5 rounded-[25px] border-dashed"></div>
                <p className="text-xl font-bold text-center leading-relaxed relative z-10">
                  Tweet + @TagAIDAO + #BUIDL
                </p>
              </div>
              <SketchyButton 
                className="w-full py-2 text-lg" 
                variant="primary"
                onClick={() => handleRedirect(twitterIntentUrl)}
              >
                Post for BUIDL
              </SketchyButton>
            </div>

            {/* Card 2: Interact */}
            <div className="border-2 border-black rounded-[35px] p-5 flex flex-col items-center group">
              <div className="w-full aspect-[4/5] bg-white border-2 border-black rounded-[30px] flex items-center justify-center p-6 mb-6 relative overflow-hidden">
                <div className="absolute inset-2 border-2 border-black/5 rounded-[25px] border-dashed"></div>
                <p className="text-xl font-bold text-center leading-relaxed relative z-10">
                  Hold $BUIDL and interact with posts of interest in the BUIDL community
                </p>
              </div>
              <SketchyButton 
                className="w-full py-2 text-lg" 
                variant="primary"
                onClick={() => handleRedirect(tagAiUrl)}
              >
                Interact with the BUIDL community
              </SketchyButton>
            </div>

            {/* Card 3: Cafe - REPLACED WITH COFFEE POSTER */}
            <div 
              onClick={() => handleRedirect(cafeCoBuildingUrl)}
              className="border-2 border-black rounded-[35px] p-5 flex flex-col items-center group cursor-pointer hover:shadow-sketch transition-all"
            >
              <div className="w-full aspect-[4/5] bg-white border-2 border-black rounded-[30px] flex items-center justify-center mb-6 relative overflow-hidden shadow-inner group-hover:scale-[1.02] transition-transform">
                <CoffeePoster />
              </div>
              <SketchyButton 
                className="w-full py-2 text-lg" 
                variant="primary"
              >
                BUIDL Café Co-building
              </SketchyButton>
            </div>

            {/* Card 4: TagAI BD */}
            <div className="border-2 border-black rounded-[35px] p-5 flex flex-col items-center group">
              <div className="w-full aspect-[4/5] bg-white border-2 border-black rounded-[30px] flex items-center justify-center p-6 mb-6 relative overflow-hidden">
                <div className="absolute inset-2 border-2 border-black/5 rounded-[25px] border-dashed"></div>
                <span className="text-3xl text-gray-300 font-bold italic relative z-10">image</span>
              </div>
              <SketchyButton className="w-full py-2 text-lg" variant="primary">
                TagAI BD Co-building
              </SketchyButton>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};