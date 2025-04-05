import React from 'react';
import { Database } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface DataQueryMenuProps {
    isDarkMode: boolean;
    onQueryClick: (queryName: string) => void;
}

const DataQueryMenu: React.FC<DataQueryMenuProps> = ({
    isDarkMode,
    onQueryClick
}) => {
    const navigate = useNavigate();
    const queries = [
        { name: '历代怪猎发布时间线', icon: '📊' },
        { name: '全武器使用率排行', icon: '⚔️' },
        { name: '全怪物热度官方投票统计', icon: '🐉' }
    ];

    const handleClick = (queryName: string) => {
        if (queryName === '全武器使用率排行') {
            navigate('/weapon-usage');
        } else if (queryName === '历代怪猎发布时间线') {
            navigate('/mh-release-timeline');
        } else {
            onQueryClick(queryName);
        }
    };

    return (
        <div className="pt-6 pb-3 px-3 -ml-6">
            <h3 className={`flex items-center gap-2 mb-3 text-base font-semibold ${isDarkMode ? 'text-gray-100' : 'text-gray-800'
                }`}>
                <Database className={`w-5 h-5 ml-1 ${isDarkMode ? 'text-purple-400' : 'text-purple-600'}`} />
                <span className="ml-1">特殊数据查询</span>
            </h3>
            <ul className="space-y-2">
                {queries.map((query, index) => (
                    <li key={index}>
                        <button
                            onClick={() => handleClick(query.name)}
                            className={`w-full text-left pl-2 py-2 rounded-lg flex items-center gap-3 ${isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'
                                } transition-colors`}
                        >
                            <span className="text-lg w-6 text-center ml-1">{query.icon}</span>
                            <span className="flex-1 ml-1">{query.name}</span>
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default DataQueryMenu;