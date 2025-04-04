import React from 'react';
import WelcomeBanner from '../../../components/WelcomeBanner/WelcomeBanner'; // 导入WelcomeBanner组件
import Welcome1 from './Welcome1';
import Welcome2 from './Welcome2';
import FeatureCards from './FeatureCards';
import LatestUpdates from './LatestUpdates';

interface WorldHomeProps {
    isDarkMode: boolean;
}

const WorldHome: React.FC<WorldHomeProps> = ({ isDarkMode }) => {
    return (
        <div className={`min-h-screen ${isDarkMode ? 'bg-mh-starrysky' : 'bg-mh-parchment-1'}`}>
            {/* 添加WelcomeBanner组件 */}
            <WelcomeBanner selectedGame="world" isDarkMode={isDarkMode} />

            {/* 原有内容 */}
            <Welcome1 isDarkMode={isDarkMode} />

            <div className="container mx-auto px-4 py-1">
                <Welcome2 isDarkMode={isDarkMode} />
                <FeatureCards isDarkMode={isDarkMode} />
                <LatestUpdates isDarkMode={isDarkMode} />
            </div>
        </div>
    );
};

export default WorldHome;