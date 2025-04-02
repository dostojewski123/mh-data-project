import React from 'react';
import { Gamepad2 } from 'lucide-react';

type GameVersion = 'world' | 'rise' | 'wilds';

interface GameVersionMenuProps {
    isDarkMode: boolean;
    selectedGame: GameVersion;
    setSelectedGame: (game: GameVersion) => void;
    toggleSidebar?: () => void;
    showTitle?: boolean;
}

const GameVersionMenu: React.FC<GameVersionMenuProps> = ({
    isDarkMode,
    selectedGame,
    setSelectedGame,
    toggleSidebar,
    showTitle = false
}) => {
    const versionOptions = [
        { id: 'world', label: '怪物猎人：世界' },
        { id: 'rise', label: '怪物猎人：崛起' },
        { id: 'wilds', label: '怪物猎人：荒野' }
    ] as const;

    const handleInteraction = (game: GameVersion) => {
        setSelectedGame(game);
        // 移动端切换后自动关闭侧边栏
        if (window.innerWidth < 768 && toggleSidebar) {
            toggleSidebar();
        }
    };

    return (
        <div className="mb-6">
            {showTitle && (
                <h3 className={`flex items-center gap-2 mb-3 text-lg font-semibold ${isDarkMode ? 'text-gray-100' : 'text-gray-800'
                    }`}>
                    <Gamepad2 className={`w-5 h-5 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'
                        }`} />
                    <span>游戏版本</span>
                </h3>
            )}

            <div className="mt-2 space-y-2">
                {versionOptions.map(({ id, label }) => (
                    <button
                        key={id}
                        onTouchStart={() => handleInteraction(id)}
                        onClick={() => handleInteraction(id)}
                        className={`w-full text-left px-4 py-3 rounded-lg transition-colors ${selectedGame === id
                                ? isDarkMode
                                    ? 'bg-gray-700 text-white'
                                    : 'bg-blue-100 text-blue-800'
                                : isDarkMode
                                    ? 'hover:bg-gray-700 text-gray-300'
                                    : 'hover:bg-gray-100 text-gray-700'
                            }`}
                        style={{
                            minHeight: '44px', // 符合移动端操作规范
                            WebkitTapHighlightColor: 'transparent',
                            touchAction: 'manipulation'
                        }}
                    >
                        {label}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default GameVersionMenu;