import React from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

interface WeaponDataPageProps {
    isDarkMode: boolean;
}

const WeaponDataPage: React.FC<WeaponDataPageProps> = ({ isDarkMode }) => {
    const location = useLocation();
    const navigate = useNavigate();
    const { weaponName } = useParams();
    const { dataImage } = location.state as { dataImage: string };
    const handleBack = () => {
        navigate('/world/weapon-moves'); // 返回武器列表页
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <div className={`bg-transparent rounded-lg shadow-md p-6 mb-8`}>
                <div className="flex justify-between items-center mb-6">
                    <div>
                        <button onClick={handleBack}>
                            ← 返回武器列表
                        </button>
                    </div>
                </div>

                <div className="flex justify-center">
                    <img
                        src={dataImage}
                        alt={`${weaponName}动作值`}
                        className="max-w-full h-auto"
                    />
                </div>
            </div>
        </div >
    );
};

export default WeaponDataPage;