import React from 'react';
import { Sword, Shield, Skull } from 'lucide-react';
import QuickNavCard from './QuickNavCard';
import UpdatesSection from './UpdatesSection';
import { ContentSection } from '@/types';


interface ContentGridProps {
    isDarkMode: boolean;
    currentContent: {
        monsters: {
            title: string;
            image: string;
            description: string;
        };
        weapons: {
            title: string;
            image: string;
            description: string;
        };
        armor: {
            title: string;
            image: string;
            description: string;
        };
    };
    setSelectedSection: (section: ContentSection) => void;
    selectedSection: ContentSection;
}

const ContentGrid: React.FC<ContentGridProps> = ({
    isDarkMode,
    currentContent,
    setSelectedSection
}) => {
    return (
        <div className="container mx-auto px-4 py-8">
            {/* 欢迎区域 */}
            <div className={`${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-[#2a475e]'} rounded-lg shadow-md p-6 mb-8`}>
                <h1 className="text-xl md:text-2xl font-bold mb-4">欢迎来到猎人工坊！</h1>
                <p className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>
                    这里收录了《怪物猎人》系列游戏中的怪物、武器和防具数据。
                </p>
            </div>

            {/* 快速导航 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                <QuickNavCard
                    icon={<Skull className="w-6 h-6 text-red-600" />}
                    title={currentContent.monsters.title}
                    image={currentContent.monsters.image}
                    description={currentContent.monsters.description}
                    onClick={() => setSelectedSection('monsters')}
                    isDarkMode={isDarkMode}
                />
                <QuickNavCard
                    icon={<Sword className="w-6 h-6 text-blue-600" />}
                    title={currentContent.weapons.title}
                    image={currentContent.weapons.image}
                    description={currentContent.weapons.description}
                    onClick={() => setSelectedSection('weapons')}
                    isDarkMode={isDarkMode}
                />
                <QuickNavCard
                    icon={<Shield className="w-6 h-6 text-green-600" />}
                    title={currentContent.armor.title}
                    image={currentContent.armor.image}
                    description={currentContent.armor.description}
                    onClick={() => setSelectedSection('armor')}
                    isDarkMode={isDarkMode}
                />
            </div>

            {/* 更新区域 */}
            <UpdatesSection isDarkMode={isDarkMode} currentContent={currentContent} />
        </div>
    );
};

export default ContentGrid;