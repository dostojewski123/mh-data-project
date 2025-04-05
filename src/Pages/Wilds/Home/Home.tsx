import React from 'react';
import Welcome1 from './Welcome1';
import Welcome2 from './Welcome2';
import FeatureCards from './FeatureCards';
import LatestUpdates from './LatestUpdates'
import WelcomeBanner from '../../../components/WelcomeBanner/WelcomeBanner';

interface WildsHomeProps {
    isDarkMode: boolean;
}

const WildsHome: React.FC<WildsHomeProps> = ({ isDarkMode }) => {
    return (
        <div className={`min-h-screen ${isDarkMode ? 'bg-mh-starrysky' : 'bg-mh-parchment-1'}`}>
            <WelcomeBanner selectedGame="wilds" isDarkMode={isDarkMode} />
            <Welcome1 isDarkMode={isDarkMode} />

            <div className="container mx-auto px-4 py-1">
                <Welcome2 isDarkMode={isDarkMode} />
                <FeatureCards isDarkMode={isDarkMode} />
                <LatestUpdates isDarkMode={isDarkMode} />
            </div>
        </div>
    );
};

export default WildsHome;