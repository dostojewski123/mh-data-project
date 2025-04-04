import React from 'react';
import Welcome1 from './Home/Welcome1';
import Welcome2 from './Home/Welcome2';
import FeatureCards from './Home/FeatureCards';
import LatestUpdates from './Home/LatestUpdates'

interface WildsHomeProps {
    isDarkMode: boolean;
}

const WildsHome: React.FC<WildsHomeProps> = ({ isDarkMode }) => {
    return (
        <div className={`min-h-screen ${isDarkMode ? 'bg-mh-starrysky' : 'bg-mh-parchment-1'}`}>
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