import React from 'react';
import { Sword, Shield, Skull, Zap, ListChecks } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { GameContent, ContentSection } from '../types';

interface MainContentProps {
    isDarkMode: boolean;
    currentContent: GameContent;
    selectedSection: ContentSection;
    setSelectedSection: (section: ContentSection) => void;
}

const MainContent: React.FC<MainContentProps> = ({ isDarkMode, currentContent, selectedSection, setSelectedSection }) => {
    const navigate = useNavigate();

    const features = [
        {
            id: 'weapon-moves',
            path: '/weapon-moves',
            label: '武器动作值表',
            icon: <Zap className="w-8 h-8" />,
            count: currentContent.weaponMoves.list.length,
        },
        {
            id: 'monster-moves',
            path: '/monster-moves',
            label: '怪物招式动作值表',
            icon: <ListChecks className="w-8 h-8" />,
            count: currentContent.monsterMoves.list.length,
        },
        {
            id: 'monsters',
            path: '/monsters',
            label: '怪物图鉴',
            icon: <Skull className="w-8 h-8" />,
            count: currentContent.monsters.list.length,
        },
        {
            id: 'weapons',
            path: '/weapons',
            label: '武器图鉴',
            icon: <Sword className="w-8 h-8" />,
            count: currentContent.weapons.list.length,
        },
        {
            id: 'armor',
            path: '/armor',
            label: '防具图鉴',
            icon: <Shield className="w-8 h-8" />,
            count: currentContent.armor.list.length,
        },
    ];

    return (
        <div className={`p-4 ${isDarkMode ? 'text-gray-100' : 'text-gray-800'}`}>
            <div className="max-w-4xl mx-auto">
                <h1 className="text-3xl font-bold mb-6">欢迎使用怪物猎人资料库</h1>
                <p className="mb-8 text-lg">
                    这里提供了全面的怪物猎人游戏资料，包括武器、防具、怪物数据以及动作值表等。
                    当前选择: {selectedSection || '无'}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {features.map((feature) => (
                        <div
                            key={feature.id}
                            onClick={() => {
                                setSelectedSection(feature.id as ContentSection);
                                navigate(feature.path);
                            }}
                            className={`p-6 rounded-lg cursor-pointer transition-all ${selectedSection === feature.id
                                ? isDarkMode
                                    ? 'bg-gray-700 text-white'
                                    : 'bg-gray-200 text-gray-900'
                                : isDarkMode
                                    ? 'bg-gray-800 hover:bg-gray-700'
                                    : 'bg-gray-100 hover:bg-gray-200'
                                }`}
                        >
                            <div className="flex items-center gap-4">
                                <div className={`p-3 rounded-full ${isDarkMode ? 'bg-gray-700' : 'bg-white'}`}>
                                    {feature.icon}
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold">{feature.label}</h3>
                                    <p className="text-sm opacity-70">{feature.count} 项记录</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MainContent;