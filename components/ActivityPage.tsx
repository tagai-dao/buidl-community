import React from 'react';
import { SketchyButton } from './SketchyButton';
import { SketchyCard } from './SketchyCard';

export const ActivityPage: React.FC = () => {
    return (
        <div className="max-w-7xl mx-auto px-6 py-12 space-y-24">
            {/* Community Activity/Forum Section */}
            <section className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {/* Community Forum Card */}
                <div className="flex flex-col items-center">
                    <div className="w-full aspect-[16/10] bg-white border-2 border-black rounded-[40px] flex items-center justify-center text-3xl text-gray-400 font-bold mb-8 overflow-hidden relative group cursor-pointer hover:shadow-sketch transition-all">
                        <div className="absolute inset-0 bg-gray-50 opacity-50"></div>
                        <span className="relative z-10">Image</span>
                        <div className="absolute inset-0 border-4 border-black/5 m-4 rounded-[30px] border-dashed"></div>
                    </div>
                    <SketchyButton className="px-12 py-3 text-2xl min-w-[300px]" variant="primary">
                        Community Forum
                    </SketchyButton>
                </div>

                {/* Community Activity Card */}
                <div className="flex flex-col items-center">
                    <div className="w-full aspect-[16/10] bg-white border-2 border-black rounded-[40px] flex items-center justify-center text-3xl text-gray-400 font-bold mb-8 overflow-hidden relative group cursor-pointer hover:shadow-sketch transition-all">
                        <div className="absolute inset-0 bg-gray-50 opacity-50"></div>
                        <span className="relative z-10">Image</span>
                        <div className="absolute inset-0 border-4 border-black/5 m-4 rounded-[30px] border-dashed"></div>
                    </div>
                    <SketchyButton className="px-12 py-3 text-2xl min-w-[300px]" variant="primary">
                        Community Activity
                    </SketchyButton>
                </div>
            </section>

            {/* Community Space Map Section */}
            <section className="space-y-12">
                <div className="text-center">
                    <h2 className="text-5xl font-bold">Community Space Map</h2>
                </div>
                
                <div className="relative w-full aspect-[21/9] min-h-[500px] border-2 border-black rounded-[50px] bg-gray-50 overflow-hidden flex items-center justify-center p-8">
                    {/* Background Grid for Map aesthetic */}
                    <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#000_2px,transparent_2px)] [background-size:40px_40px]"></div>
                    
                    <span className="text-6xl font-bold text-gray-300 pointer-events-none">Map</span>

                    {/* Left Card: BUIDL Café */}
                    <div className="absolute left-[10%] top-[30%] w-72 transform -rotate-1 hover:rotate-0 transition-transform">
                        <div className="absolute -top-3 -left-3 w-8 h-8 bg-purple-500 rounded-full border-2 border-black z-20 shadow-sm"></div>
                        <SketchyCard padding="p-6" className="shadow-lg">
                            <h3 className="text-2xl font-bold mb-3">- BUIDL Café</h3>
                            <p className="text-lg leading-relaxed text-gray-700">
                                - No. 8-4, Yujie Lane, Wuhou District, Chengdu City, Sichuan Province, China
                            </p>
                        </SketchyCard>
                    </div>

                    {/* Right Card: BUIDL (Anren) Digital Nomad Hub */}
                    <div className="absolute right-[10%] bottom-[20%] w-80 transform rotate-1 hover:rotate-0 transition-transform">
                        <div className="absolute -top-3 -left-3 w-8 h-8 bg-purple-500 rounded-full border-2 border-black z-20 shadow-sm"></div>
                        <SketchyCard padding="p-6" className="shadow-lg">
                            <h3 className="text-2xl font-bold mb-3">- BUIDL (Anren) Digital Nomad Hub</h3>
                            <p className="text-lg leading-relaxed text-gray-700">
                                - No. 127, Tianfu Street, Dayi County, Chengdu City, Sichuan Province, China
                            </p>
                        </SketchyCard>
                    </div>
                </div>
            </section>
        </div>
    );
};