import React from 'react';
import { SketchyButton } from './SketchyButton';
import { SketchyCard } from './SketchyCard';

export const FundPage: React.FC = () => {
    const MultisigView = () => (
        <div className="mb-24">
            <h2 className="text-center text-4xl font-bold mb-12 underline decoration-dashed underline-offset-8">9-member multisig group</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <SketchyCard className="flex flex-col">
                    <h3 className="text-2xl font-bold mb-4">Rotation of multisig nodes</h3>
                    <ul className="space-y-3 text-lg flex-grow">
                        <li>① Rotates every 6 months.</li>
                        <li>② Nodes holding more than 500,000 $BUIDL are eligible to run for election.</li>
                    </ul>
                    <SketchyButton className="mt-6 w-full text-base">Become a node</SketchyButton>
                </SketchyCard>
                
                <SketchyCard>
                    <h3 className="text-2xl font-bold mb-4">Multisig execution Process</h3>
                     <ul className="space-y-3 text-lg">
                        <li>① Nodes holding more than 500,000 $BUIDL can draft and submit community proposals.</li>
                        <li>② The community votes on proposals by holding $BUIDL.</li>
                        <li>③ For approved Proposals, the 5/9 multisig group executes fund transfers or other actions in accordance with the proposal.</li>
                    </ul>
                </SketchyCard>
                
                <SketchyCard>
                    <h3 className="text-2xl font-bold mb-4">5/9 multisig</h3>
                    <p className="text-lg">A 9-member multisig group, where any transaction requires signatures from 5 members to authorize the use of the community fund.</p>
                </SketchyCard>
            </div>
        </div>
    );

    const ProposalView = () => (
        <div>
            <h2 className="text-center text-4xl font-bold mb-12 underline decoration-dashed underline-offset-8">Proposal voting system</h2>
            <div className="border-2 border-black rounded-[40px] p-8 bg-white shadow-sm">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Main Featured Proposal */}
                    <div className="md:col-span-2 border-2 border-black rounded-[30px] p-4 flex flex-col items-center">
                        <div className="w-full aspect-video bg-gray-50 border-2 border-black rounded-[25px] flex items-center justify-center text-4xl text-gray-300 font-bold mb-6 overflow-hidden">
                            <div className="relative w-full h-full flex items-center justify-center">
                                <span className="z-10">Image</span>
                                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:20px_20px]"></div>
                            </div>
                        </div>
                        <SketchyButton className="px-12 py-3 text-lg" variant="primary">
                            BUIDL Café Investment Proposal
                        </SketchyButton>
                    </div>

                    {/* More Placeholder */}
                    <div className="border-2 border-black rounded-[30px] p-4 flex items-center justify-center bg-white min-h-[300px]">
                        <div className="text-4xl font-bold text-buidl-black/80">
                            More...
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

    return (
        <section className="max-w-7xl mx-auto px-6 py-20">
            <div className="text-center mb-20">
                <h1 className="text-5xl md:text-7xl font-bold relative inline-block">
                    Our Fund - 255,000,000 $BUIDL
                    <svg className="absolute w-full h-4 -bottom-4 left-0 text-buidl-pink" viewBox="0 0 100 10" preserveAspectRatio="none">
                        <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
                    </svg>
                </h1>
            </div>

            <MultisigView />
            
            <div className="my-16 flex justify-center">
                <div className="w-1/2 h-1 bg-black/10 rounded-full"></div>
            </div>

            <ProposalView />
        </section>
    );
};