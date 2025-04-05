import React, { useRef } from 'react';

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
    toggleSidebar
}) => {
    const versionOptions = [
        { id: 'world', label: '怪物猎人：世界' },
        { id: 'rise', label: '怪物猎人：崛起' },
        { id: 'wilds', label: '怪物猎人：荒野' }
    ] as const;

    const touchStateRef = useRef({
        startTime: 0,
        startX: 0,
        startY: 0,
        target: null as GameVersion | null,
        moved: false
    });

    const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

    const handleTouchStart = (e: React.TouchEvent, game: GameVersion) => {
        const touch = e.touches[0];
        touchStateRef.current = {
            startTime: Date.now(),
            startX: touch.clientX,
            startY: touch.clientY,
            target: game,
            moved: false
        };
    };

    const handleTouchMove = (e: React.TouchEvent) => {
        if (!touchStateRef.current.target) return;

        const touch = e.touches[0];
        const deltaX = Math.abs(touch.clientX - touchStateRef.current.startX);
        const deltaY = Math.abs(touch.clientY - touchStateRef.current.startY);

        // 如果移动距离超过5px，则认为用户是在滑动
        if (deltaX > 5 || deltaY > 5) {
            touchStateRef.current.moved = true;
        }
    };

    const handleTouchEnd = (game: GameVersion) => {
        const { startTime, target, moved } = touchStateRef.current;

        // 只有在以下条件满足时才触发切换：
        // 1. 触摸和松开是同一个目标
        // 2. 用户没有明显滑动
        // 3. 触摸持续时间在合理范围内(30-100ms)
        if (target === game && !moved) {
            const duration = Date.now() - startTime;
            if (duration > 30 && duration < 100) {
                handleInteraction(game);
            }
        }

        touchStateRef.current.target = null;
    };

    const handleInteraction = (game: GameVersion) => {
        setSelectedGame(game);
        if (isMobile && toggleSidebar) {
            toggleSidebar();
        }
    };

    return (
        <div className="mb-6">
            <div
                className="mt-2 space-y-2"
                onTouchMove={handleTouchMove}
            >
                {versionOptions.map(({ id, label }) => (
                    <button
                        key={id}
                        onTouchStart={(e) => handleTouchStart(e, id)}
                        onTouchEnd={() => handleTouchEnd(id)}
                        onTouchCancel={() => { touchStateRef.current.target = null }}
                        onClick={() => !isMobile && handleInteraction(id)}
                        className={`w-full text-left px-4 py-3 rounded-lg transition-colors ${selectedGame === id
                            ? isDarkMode
                                ? 'bg-gray-700 text-white'
                                : 'bg-mh-parchment-2 text-blue-800'
                            : isDarkMode
                                ? 'hover:bg-gray-700 text-gray-300'
                                : 'hover:bg-gray-100 text-gray-700'
                            }`}
                        style={{
                            minHeight: '44px',
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