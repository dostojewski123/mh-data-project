import React from 'react';
import { Home, Sword } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import { GameVersion } from '../../types';

interface SubNavbarProps {
    isDarkMode: boolean;
    selectedGame: GameVersion;
    isSidebarOpen: boolean;
}

const SubNavbar: React.FC<SubNavbarProps> = ({
    isDarkMode,
    selectedGame,
    isSidebarOpen
}) => {
    const navigate = useNavigate();
    const location = useLocation();

    const navItems = [
        {
            id: 'home',
            path: `/${selectedGame}`,
            label: '主页',
            icon: <Home className="w-4 h-4" />,
        },
        {
            id: 'weapon-moves',
            path: `/${selectedGame}/weapon-moves`,
            label: '武器动作值',
            icon: <Sword className="w-4 h-4" />,
        },
    ];

    const isActive = (path: string) => {
        const currentPath = location.pathname;
        if (path === `/${selectedGame}`) {
            return currentPath === `/${selectedGame}` ||
                currentPath === `/${selectedGame}/`;
        }
        return currentPath === path;
    };

    const handleNavigation = (path: string) => {
        navigate(path);
        // 滚动到顶部, 不然有一点点小的距离
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // 可以使用 'auto' 立即滚动
        });
    };

    React.useEffect(() => {
        const currentPath = location.pathname;
        const currentGame = currentPath.split('/')[1] as GameVersion;
        const validGames: GameVersion[] = ['world', 'rise', 'wilds'];

        // 当 selectedGame 变化时，始终跳转到对应版本的主页
        if (validGames.includes(currentGame) && currentGame !== selectedGame) {
            // 直接跳转到版本主页，不保留子路径
            navigate(`/${selectedGame}`);
        }
    }, [selectedGame, navigate, location.pathname]);

    return (
        <div className={`
            ${isDarkMode ? 'bg-mh-starrysky' : 'bg-mh-parchment-1'} 
            shadow-sm 
            fixed
            top-12 // Header 高度
            left-0
            right-0
            h-12 // 显式设置 SubNavbar 高度为 3rem
            z-30
            m-0
            p-0
            transition-all
            duration-300
            ${isSidebarOpen ? 'translate-x-48 md:translate-x-0 md:pl-48' : 'translate-x-0'}
        `}>
            <div className="container mx-auto px-0">
                <div className="flex space-x-0 overflow-x-auto py-0">
                    {navItems.map((item) => (
                        <button
                            key={item.id}
                            className={`ml-1 relative py-3 px-4 flex items-center gap-2 transition-colors whitespace-nowrap
                                ${isActive(item.path)
                                    ? isDarkMode
                                        ? 'text-white'
                                        : 'text-gray-900'
                                    : isDarkMode
                                        ? 'text-gray-300'
                                        : 'text-gray-700'
                                }`}
                            onClick={() => handleNavigation(item.path)}
                        >
                            {/* 高亮框 */}
                            <span
                                className={`absolute inset-0 rounded-[4px] transition-all duration-200
                                    ${isActive(item.path)
                                        ? isDarkMode
                                            ? 'bg-gray-700'
                                            : 'bg-mh-parchment-0'
                                        : isDarkMode
                                            ? 'hover:bg-gray-700'
                                            : 'hover:bg-gray-100'
                                    }
                                    ${isActive(item.path) || 'hover:' ? 'top-[4px] bottom-[4px]' : 'top-0 bottom-0'}`}
                            />
                            {/* 内容 */}
                            <span className="relative z-48 flex items-center gap-2">
                                {item.icon}
                                <span>{item.label}</span>
                            </span>
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SubNavbar;