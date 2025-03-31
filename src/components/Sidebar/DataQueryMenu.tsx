import React from 'react';
import { Database } from 'lucide-react';

interface DataQueryMenuProps {
    isDarkMode: boolean;
    onQueryClick: () => void;
}

const DataQueryMenu: React.FC<DataQueryMenuProps> = ({
    isDarkMode,
    onQueryClick
}) => {
    const queries = [
        { name: '历代怪猎发布时间线', icon: '📊' },
        { name: '武器使用率排行', icon: '⚔️' },
        { name: '怪物讨伐难度统计', icon: '🐉' }
    ];

    return (
        <div className="p-4 -ml-6">
            <h3 className={`flex items-center gap-2 mb-3 text-lg font-semibold ${isDarkMode ? 'text-gray-100' : 'text-gray-800'
                }`}>
                <Database className={`w-5 h-5 ml-1 ${isDarkMode ? 'text-purple-400' : 'text-purple-600'}`} /> {/* 图标左移 */}
                <span className="ml-1">特殊数据查询</span> {/* 文字左移 */}
            </h3>
            <ul className="space-y-2">
                {queries.map((query, index) => (
                    <li key={index}>
                        <button
                            onClick={onQueryClick}
                            className={`w-full text-left pl-2 py-2 rounded-lg flex items-center gap-3 ${isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'
                                } transition-colors`}
                        >
                            <span className="text-lg w-6 text-center ml-1">{query.icon}</span> {/* 整体左移 */}
                            <span className="flex-1 ml-1">{query.name}</span> {/* 文字左移 */}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default DataQueryMenu;