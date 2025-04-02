import React, { useState } from 'react';
import { WeaponMoveContent, WeaponMoveItem } from '../types/';

interface WeaponMovesPageProps {
    isDarkMode: boolean;
    content: WeaponMoveContent;
}

const WeaponMovesPage: React.FC<WeaponMovesPageProps> = ({ isDarkMode, content }) => {
    const [selectedModalImage, setSelectedModalImage] = useState<string | null>(null);

    const getImageUrl = (img: string | { src: string }): string => {
        return typeof img === 'string' ? img : img.src;
    };

    return (
        <div className={`p-4 ${isDarkMode ? 'bg-gray-900 text-gray-100' : 'bg-white text-gray-800'}`}>
            <div className="max-w-4xl mx-auto">
                <h1 className="text-3xl font-bold mb-6">{content.title}</h1>
                <p className="mb-8">{content.description}</p>

                <div className="grid grid-cols-2 gap-4">
                    {content.list.map((item: WeaponMoveItem, index) => (
                        <div
                            key={index}
                            className={`relative rounded-lg overflow-hidden ${isDarkMode ? 'bg-gray-800' : 'bg-gray-100'} aspect-[15/8] cursor-pointer hover:opacity-90 transition-opacity`}
                            onClick={() => setSelectedModalImage(item.modalImage)}
                        >
                            <img
                                src={getImageUrl(item.image)}
                                alt={`武器动作图 ${index + 1}`}
                                className="w-full h-full object-cover"
                                onError={(e) => {
                                    e.currentTarget.src = '/images/placeholder.webp';
                                }}
                            />
                        </div>
                    ))}
                </div>

                {/* 模态框 */}
                {selectedModalImage && (
                    <div
                        className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
                        onClick={() => setSelectedModalImage(null)}
                    >
                        <div
                            className="relative max-w-full max-h-full"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                className="absolute -top-10 right-0 text-white text-2xl hover:text-gray-300 transition-colors"
                                onClick={() => setSelectedModalImage(null)}
                            >
                                × 关闭
                            </button>
                            <img
                                src={selectedModalImage}
                                alt="武器动作值详情"
                                className="max-w-full max-h-[90vh] object-contain"
                                onError={(e) => {
                                    e.currentTarget.src = '/images/placeholder.webp';
                                }}
                            />
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default WeaponMovesPage;