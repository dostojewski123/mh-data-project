import React from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

interface WeaponDataPageProps {
    isDarkMode: boolean;
}

const WeaponDataPage: React.FC<WeaponDataPageProps> = ({ isDarkMode }) => {
    const location = useLocation();
    const navigate = useNavigate();
    const { weaponName } = useParams();
    const { dataImage } = location.state as { dataImage: string | string[] };

    const handleBack = () => {
        navigate('/rise/weapon-moves');
    };

    // 判断是否是数组
    const isMultipleImages = Array.isArray(dataImage);

    return (
        <div className="container mx-auto px-4 py-8">
            <div className={`bg-transparent rounded-lg shadow-md p-6 mb-8`}>
                <div className="flex justify-between items-center mb-6">
                    <button
                        onClick={handleBack}
                        className={`${isDarkMode ? 'text-white' : 'text-gray-800'} hover:underline`}
                    >
                        ← 返回武器列表
                    </button>
                    <h2 className={`text-xl ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
                        {weaponName} 动作值
                    </h2>
                    <div></div> {/* 空div用于保持flex布局平衡 */}
                </div>

                <div className="flex flex-col items-center gap-8">
                    {isMultipleImages ? (
                        // 多张图的布局
                        dataImage.map((imgSrc, index) => (
                            <img
                                key={index}
                                src={imgSrc}
                                alt={`${weaponName}动作值 ${index + 1}`}
                                className="max-w-full h-auto border rounded-lg"
                            />
                        ))
                    ) : (
                        // 单张图的布局
                        <img
                            src={dataImage}
                            alt={`${weaponName}动作值`}
                            className="max-w-full h-auto border rounded-lg"
                        />
                    )}
                </div>
            </div>
        </div>
    );
};

export default WeaponDataPage;