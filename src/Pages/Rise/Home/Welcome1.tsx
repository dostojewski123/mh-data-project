import React from 'react';

interface Welcome1Props {
    isDarkMode: boolean;
}

const Welcome1: React.FC<Welcome1Props> = ({ isDarkMode }) => {
    return (
        <div className="relative h-64 md:h-40 w-full bg-cover bg-center overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center px-4 relative z-10">
                    <h1 className="text-4xl md:text-6xl font-bold mb-3 text-white">
                        <span className="animate-pulse text-transparent bg-clip-text bg-gradient-to-r from-mh-rising-sun to-yellow-200">
                            怪物猎人：崛起/曙光
                        </span>
                    </h1>
                    <p className={`text-xl md:text-2xl drop-shadow-lg ${isDarkMode ? 'text-gray-200' : 'text-gray-800'}`}>
                        <span className={`${isDarkMode ? 'text-shadow-glow animate-glow-slow' : 'text-shadow-md'}`}>
                            百龙夜行，曙光斩厄
                        </span>
                    </p>
                </div>
            </div>
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-yellow-400 opacity-120 animate-light-streak"></div>
                <div className="absolute top-[98%] left-0 w-full h-1 bg-orange-400 opacity-60 animate-light-streak-delay"></div>
            </div>
        </div>
    );
};

export default Welcome1;