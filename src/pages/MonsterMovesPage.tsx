import React from 'react';
import { MonsterMoveContent } from '../types';

interface MonsterMovesPageProps {
    isDarkMode: boolean;
    content: MonsterMoveContent;
}

const MonsterMovesPage: React.FC<MonsterMovesPageProps> = ({ isDarkMode, content }) => {
    return (
        <div className={`p-4 ${isDarkMode ? 'bg-gray-900 text-gray-100' : 'bg-white text-gray-800'}`}>
            <div className="max-w-4xl mx-auto">
                <h1 className="text-3xl font-bold mb-6">{content.title}</h1>
                <p className="mb-8">{content.description}</p>

                {content.list.length === 0 ? (
                    <p className="text-center py-8">没有可显示的怪物招式数据</p>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {content.list.map((monster, index) => (
                            <div
                                key={index}
                                className={`rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl ${isDarkMode ? 'bg-gray-800' : 'bg-white'
                                    }`}
                            >
                                {/* 怪物图片 */}
                                <div className="w-full h-40 overflow-hidden">
                                    <img
                                        src={monster.image} // 现在确保是string类型
                                        alt={monster.name}
                                        className="w-full h-full object-cover"
                                    />
                                </div>

                                {/* 招式列表 - 添加类型检查 */}
                                {monster.moves && (
                                    <div className="p-4 space-y-3">
                                        {monster.moves.map((move, moveIndex) => (
                                            <div key={moveIndex} className={`p-3 rounded-lg ${isDarkMode ? 'bg-gray-700' : 'bg-gray-100'
                                                }`}>
                                                <div className="flex justify-between items-center">
                                                    <span className="font-medium">{move.name}</span>
                                                    <span className={`px-2 py-1 rounded-full text-sm ${isDarkMode ? 'bg-gray-600 text-yellow-300' : 'bg-gray-200 text-gray-800'
                                                        }`}>
                                                        {move.value}
                                                    </span>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default MonsterMovesPage;