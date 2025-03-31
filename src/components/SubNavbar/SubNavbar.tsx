import React from 'react';
import { Sword, Shield, Skull, Zap, ListChecks } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import { GameVersion } from '../../types';

interface SubNavbarProps {
    isDarkMode: boolean;
    selectedGame: GameVersion;
}

const SubNavbar: React.FC<SubNavbarProps> = ({ isDarkMode, selectedGame }) => {
    const navigate = useNavigate();
    const location = useLocation();

    // 根据 selectedGame 动态调整导航标题（可选）
    const gameTitles = {
        world: '世界',
        rise: '崛起',
        wilds: '荒野'
    };

    const navItems = [
        {
            id: 'weapon-moves',
            path: '/weapon-moves',
            label: `${gameTitles[selectedGame]}武器动作值表`,
            icon: <Zap className="w-4 h-4" />,
        },
        {
            id: 'monster-moves',
            path: '/monster-moves',
            label: `${gameTitles[selectedGame]}怪物招式动作值表`,
            icon: <ListChecks className="w-4 h-4" />,
        },
        {
            id: 'monsters',
            path: '/monsters',
            label: `${gameTitles[selectedGame]}怪物图鉴`,
            icon: <Skull className="w-4 h-4" />,
        },
        {
            id: 'weapons',
            path: '/weapons',
            label: `${gameTitles[selectedGame]}武器图鉴`,
            icon: <Sword className="w-4 h-4" />,
        },
        {
            id: 'armor',
            path: '/armor',
            label: `${gameTitles[selectedGame]}防具图鉴`,
            icon: <Shield className="w-4 h-4" />,
        },
    ];

    const isActive = (path: string) => {
        return location.pathname === path || (path === '/' && location.pathname === '/');
    };

    return (
        <div className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} shadow-sm sticky top-16 z-10 m-0 p-0`}>
            <div className="container mx-auto px-4">
                <div className="flex space-x-4 overflow-x-auto py-2">
                    {navItems.map((item) => (
                        <button
                            key={item.id}
                            className={`py-3 px-4 flex items-center gap-2 transition-colors whitespace-nowrap
                ${isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'}
                ${isActive(item.path)
                                    ? isDarkMode
                                        ? 'bg-gray-700 text-white'
                                        : 'bg-gray-100 text-gray-900'
                                    : isDarkMode
                                        ? 'text-gray-300'
                                        : 'text-gray-700'
                                }`}
                            onClick={() => navigate(item.path)}
                        >
                            {item.icon}
                            <span>{item.label}</span>
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SubNavbar;