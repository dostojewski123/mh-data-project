import React from 'react';
import { Crown } from 'lucide-react';

interface UpdatesSectionProps {
    isDarkMode: boolean;
    currentContent: any;
}

const UpdatesSection: React.FC<UpdatesSectionProps> = ({ isDarkMode, currentContent }) => {
    return (
        <div className={`mt-8 ${isDarkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-md p-4 md:p-6`}>
            <div className="flex items-center gap-3 mb-4">
                <Crown className="w-6 h-6 text-yellow-600" />
                <h2 className={`text-lg md:text-xl font-bold ${isDarkMode ? 'text-white' : 'text-[#2a475e]'}`}>最新更新</h2>
            </div>
            <div className="space-y-4">
                <div className={`flex items-center gap-4 p-3 ${isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-slate-50'} rounded-lg transition-colors`}>
                    <img
                        src={currentContent.monsters.image}
                        alt="Update"
                        className="w-12 h-12 md:w-16 md:h-16 object-cover rounded"
                    />
                    <div>
                        <h3 className={`font-semibold ${isDarkMode ? 'text-white' : 'text-[#2a475e]'}`}>新增怪物：冰牙龙数据</h3>
                        <p className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>包含详细的伤害计算与部位破坏数据</p>
                    </div>
                </div>
                <div className={`flex items-center gap-4 p-3 ${isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-slate-50'} rounded-lg transition-colors`}>
                    <img
                        src={currentContent.weapons.image}
                        alt="Update"
                        className="w-12 h-12 md:w-16 md:h-16 object-cover rounded"
                    />
                    <div>
                        <h3 className={`font-semibold ${isDarkMode ? 'text-white' : 'text-[#2a475e]'}`}>更新：太刀配装推荐</h3>
                        <p className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>根据最新版本更新了太刀最佳配装方案</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpdatesSection;