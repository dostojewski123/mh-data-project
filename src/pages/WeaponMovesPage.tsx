import React from 'react';
import { WeaponMoveContent } from '../types';

interface WeaponMovesPageProps {
    isDarkMode: boolean;
    content: WeaponMoveContent;
}

const WeaponMovesPage: React.FC<WeaponMovesPageProps> = ({ isDarkMode, content }) => {
    // 获取图片URL的统一方法
    const getImageUrl = (img: string | { src: string }) => {
        return typeof img === 'string' ? img : img.src;
    };

    return (
        <div className={`p-4 ${isDarkMode ? 'bg-gray-900 text-gray-100' : 'bg-white text-gray-800'}`}>
            <div className="max-w-4xl mx-auto">
                <h1 className="text-3xl font-bold mb-6">{content.title}</h1>
                <p className="mb-8">{content.description}</p>

                <div className="grid grid-cols-2 gap-4">
                    {content.list.map((item, index) => {
                        const imgUrl = getImageUrl(item.image);
                        return (
                            <div
                                key={index}
                                className={`relative rounded-lg overflow-hidden ${isDarkMode ? 'bg-gray-800' : 'bg-gray-100'} aspect-[15/8]`}
                            >
                                <img
                                    src={imgUrl}
                                    alt={`武器动作图 ${index}`}
                                    className="w-full h-full object-cover"
                                    onError={(e) => {
                                        e.currentTarget.src = '/images/placeholder.webp'; // 备用图片
                                    }}
                                />
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default WeaponMovesPage;