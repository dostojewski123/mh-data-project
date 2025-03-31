import React from 'react';
import { BaseContent } from '../types';

interface MonstersPageProps {
    isDarkMode: boolean;
    content: BaseContent;
}

const MonstersPage: React.FC<MonstersPageProps> = ({ isDarkMode, content }) => {
    // 安全获取图片URL的函数
    const getImageSrc = (img: string | { src: string }) => {
        return typeof img === 'string' ? img : img.src;
    };

    return (
        <div className={`p-4 ${isDarkMode ? 'text-gray-100' : 'text-gray-800'}`}>
            <div className="max-w-4xl mx-auto">
                <h1 className="text-3xl font-bold mb-6">{content.title}</h1>
                <p className="mb-8">{content.description}</p>
                {content.list.length === 0 ? (
                    <p>没有可显示的怪物数据</p>
                ) : (
                    <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {content.list.map((monster, index) => {
                            const imgSrc = getImageSrc(monster.image);
                            return (
                                <li
                                    key={index}
                                    className={`rounded-lg overflow-hidden transition-transform hover:scale-[1.02] ${isDarkMode ? 'bg-gray-800' : 'bg-white shadow-md'
                                        }`}
                                >
                                    <div className="w-full h-48 overflow-hidden">
                                        <img
                                            src={imgSrc}  // 使用处理后的src
                                            alt={monster.name}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <div className="p-4">
                                        <h3 className="text-xl font-semibold text-center">
                                            {monster.name}
                                        </h3>
                                    </div>
                                </li>
                            );
                        })}
                    </ul>
                )}
            </div>
        </div>
    );
};

export default MonstersPage;