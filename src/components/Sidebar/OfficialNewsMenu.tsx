import React from 'react';
import { Newspaper, ArrowUpRight } from 'lucide-react';

interface OfficialNewsMenuProps {
    isDarkMode: boolean;
    toggleSidebar?: () => void;
    showTitle?: boolean;
}

// 模拟官方公告数据
const OFFICIAL_NEWS = [
    {
        id: 1,
        title: "历战王煌雷龙于活动任务登场！",
        date: "2025-3-25",
        url: "https://www.monsterhunter.com/wilds/zh-hans/update/ver_01_0/"
    },
    {
        id: 2,
        title: "新据点“大集会所”登场！",
        date: "2025-3-25",
        url: "https://www.monsterhunter.com/wilds/zh-hans/update/ver_01_0/"
    },
    {
        id: 3,
        title: "《怪物猎人：荒野》免费游戏更新第一弹",
        date: "2025-3-25",
        url: "https://www.monsterhunter.com/wilds/zh-hans/update/ver_01_0/"
    }
];

const OfficialNewsMenu: React.FC<OfficialNewsMenuProps> = ({ isDarkMode, showTitle = true }) => {
    return (
        <div className="p-4">
            {showTitle && (
                <div className="flex items-center gap-2 mb-3">
                    <Newspaper className={`w-5 h-5 ${isDarkMode ? 'text-amber-400' : 'text-amber-600'}`} />
                    <h3 className={`font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                        官方信息
                    </h3>
                </div>
            )}

            <ul className="space-y-3">
                {OFFICIAL_NEWS.map((news) => (
                    <li key={news.id}>
                        <a
                            href={news.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`group flex items-start gap-2 p-2 rounded-md transition-colors ${isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'}`}
                        >
                            <div className="flex-1">
                                <p className={`text-sm font-medium ${isDarkMode ? 'text-gray-100' : 'text-gray-800'}`}>
                                    {news.title}
                                </p>
                                <p className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                                    {news.date}
                                </p>
                            </div>
                            <ArrowUpRight className="w-4 h-4 text-gray-400 group-hover:text-amber-500" />
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default OfficialNewsMenu;