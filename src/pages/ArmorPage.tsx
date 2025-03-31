import React from 'react';
import { BaseContent } from '../types';

interface ArmorPageProps {
    isDarkMode: boolean;
    content: BaseContent;
}

const ArmorPage: React.FC<ArmorPageProps> = ({ isDarkMode, content }) => {
    return (
        <div className={`p-4 ${isDarkMode ? 'bg-gray-900 text-gray-100' : 'bg-white text-gray-800'}`}>
            <div className="max-w-4xl mx-auto">
                <h1 className="text-3xl font-bold mb-6">{content.title}</h1>
                <p className="mb-8">{content.description}</p>
                {content.list.length === 0 ? (
                    <p className="text-center py-8">没有可显示的防具数据</p>
                ) : (
                    <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {content.list.map((armor, index) => (
                            <li
                                key={index}
                                className={`rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl ${isDarkMode ? 'bg-gray-800' : 'bg-white'
                                    }`}
                            >
                                <div className="w-full h-48 overflow-hidden">
                                    <img
                                        src={armor.image} // 直接使用字符串路径
                                        alt={armor.name}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="p-4">
                                    <h3 className="text-xl font-semibold text-center">
                                        {armor.name}
                                    </h3>
                                </div>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
};

export default ArmorPage;