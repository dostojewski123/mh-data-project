import React from 'react';

interface RiseWeaponMovesProps {
    isDarkMode: boolean;
}

const RiseWeaponMoves: React.FC<RiseWeaponMovesProps> = ({ isDarkMode }) => {
    return (
        <div className="container mx-auto px-4 py-8">
            <div className={`${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-[#2a475e]'} rounded-lg shadow-md p-6 mb-8`}>
                <h1 className="text-xl md:text-2xl font-bold mb-4">怪物猎人：崛起 - 武器动作值</h1>
                <p className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>
                    这里是《怪物猎人：崛起》的武器动作值数据表。
                </p>
            </div>
        </div>
    );
};

export default RiseWeaponMoves;