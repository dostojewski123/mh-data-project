import React from 'react';
import { useNavigate } from 'react-router-dom';

interface QuickToolsMenuProps {
    isDarkMode: boolean;
    onToolClick?: (toolName: string) => void; // 改为可选参数
}

const QuickToolsMenu: React.FC<QuickToolsMenuProps> = ({
    isDarkMode,
    onToolClick
}) => {
    const navigate = useNavigate();

    const tools = [
        { name: '游戏术语大全', icon: '📖', path: '/game-terms' },
        { name: '伤害公式计算', icon: '🧮', path: '' },
        { name: '荒野自动配装', icon: '⚔️', path: '' }
    ];

    const handleClick = (toolName: string, path: string) => {
        if (path) {
            navigate(path); // 有path则跳转
        } else if (onToolClick) {
            onToolClick(toolName); // 否则触发回调
        }
    };

    return (
        <div className="pt-6 pb-3 px-3 -ml-6">
            <h3 className={`flex items-center gap-2 mb-3 text-base font-semibold ${isDarkMode ? 'text-gray-100' : 'text-gray-800'}`}>
                <span className="text-xl ml-1">🔧</span>
                <span className="ml-1">快捷工具</span>
            </h3>
            <ul className="space-y-2">
                {tools.map((tool, index) => (
                    <li key={index}>
                        <button
                            onClick={() => handleClick(tool.name, tool.path)}
                            className={`w-full text-left pl-2 py-2 rounded-lg flex items-center gap-3 ${isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'
                                } transition-colors`}
                        >
                            <span className="text-lg w-6 text-center ml-1">{tool.icon}</span>
                            <span className="flex-1 ml-1">{tool.name}</span>
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default QuickToolsMenu;