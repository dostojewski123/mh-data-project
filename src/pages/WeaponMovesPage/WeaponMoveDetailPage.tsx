import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { WeaponMoveContent } from '../../types';

interface WeaponMoveDetailPageProps {
    isDarkMode: boolean;
    content: WeaponMoveContent;
}

const WeaponMoveDetailPage: React.FC<WeaponMoveDetailPageProps> = ({ isDarkMode, content }) => {
    const { index } = useParams<{ index: string }>();
    const navigate = useNavigate();
    const itemIndex = index ? parseInt(index, 10) : -1;
    const item = itemIndex >= 0 && itemIndex < content.list.length ? content.list[itemIndex] : null;

    if (!item) {
        return <div className="p-4 text-center">未找到对应的武器动作值详情</div>;
    }

    return (
        <div className={`p-4 ${isDarkMode ? 'bg-gray-900 text-gray-100' : 'bg-white text-gray-800'}`}>
            <div className="max-w-4xl mx-auto">
                <button
                    className="mb-4 text-blue-500 hover:underline"
                    onClick={() => navigate('/weapon-moves')}
                >
                    返回武器动作列表
                </button>
                <h1 className="text-2xl font-bold mb-4">武器动作值详情</h1>
                <div className="w-full">
                    <img
                        src={item.modalImage}
                        alt="武器动作值详情"
                        className="w-full h-auto object-contain"
                        onError={(e) => {
                            e.currentTarget.src = '/images/placeholder.webp';
                        }}
                    />
                </div>
            </div>
        </div>
    );
};

export default WeaponMoveDetailPage;