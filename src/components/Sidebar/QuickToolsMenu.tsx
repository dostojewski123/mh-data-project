import React from 'react';

interface QuickToolsMenuProps {
    isDarkMode: boolean;
    onToolClick: () => void;
}

const QuickToolsMenu: React.FC<QuickToolsMenuProps> = ({
    isDarkMode,
    onToolClick
}) => {
    const tools = [
        { name: '游戏术语大全', icon: '📖' },
        { name: '伤害公式计算', icon: '🧮' },
        { name: '荒野自动配装', icon: '⚔️' }
    ];

    return (
        <div className="pt-6 pb-3 px-3 -ml-6">
            <h3 className={`flex items-center gap-2 mb-3 text-base font-semibold ${isDarkMode ? 'text-gray-100' : 'text-gray-800'
                }`}>
                <span className="text-xl ml-1">🔧</span> {/* 图标微调 */}
                <span className="ml-1">快捷工具</span> {/* 文字左移 */}
            </h3>
            <ul className="space-y-2">
                {tools.map((tool, index) => (
                    <li key={index}>
                        <button
                            onClick={onToolClick}
                            className={`w-full text-left pl-2 py-2 rounded-lg flex items-center gap-3 ${isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'
                                } transition-colors`}
                        >
                            <span className="text-lg w-6 text-center ml-1">{tool.icon}</span> {/* 整体左移 */}
                            <span className="flex-1 ml-1">{tool.name}</span> {/* 文字左移 */}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default QuickToolsMenu;