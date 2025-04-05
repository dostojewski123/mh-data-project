import React from 'react';
import { useNavigate } from 'react-router-dom';

// 导入武器图标
import greatswordImg from '.././../../assets/weaponmoves/wilds/WILDS-MV-GS.webp';
import longswordImg from '../../../assets/weaponmoves/wilds/WILDS-MV-LS.webp';
import swordandshieldImg from '../../../assets/weaponmoves/wilds/WILDS-MV-SS.webp';
import dualbladesImg from '../../../assets/weaponmoves/wilds/WILDS-MV-DB.webp';
import hammerImg from '../../../assets/weaponmoves/wilds/WILDS-MV-HAMMER.webp';
import huntinghornImg from '../../../assets/weaponmoves/wilds/WILDS-MV-HH.webp';
import lanceImg from '../../../assets/weaponmoves/wilds/WILDS-MV-LANCE.webp';
import gunlanceImg from '../../../assets/weaponmoves/wilds/WILDS-MV-GL.webp';
import switchaxeImg from '../../../assets/weaponmoves/wilds/WILDS-MV-SA.webp';
import chargebladeImg from '../../../assets/weaponmoves/wilds/WILDS-MV-CB.webp';
import insectglaiveImg from '../../../assets/weaponmoves/wilds/WILDS-MV-IG.webp';
import lightbowgunImg from '../../../assets/weaponmoves/wilds/WILDS-MV-LB.webp';
import heavybowgunImg from '../../../assets/weaponmoves/wilds/WILDS-MV-HB.webp';
import bowImg from '../../../assets/weaponmoves/wilds/WILDS-MV-BOW.webp';

// 导入武器数据图表
import greatswordDataImg from '../../../assets/weaponmoves/wilds/modal/WILDS-MV-GS-MODAL.webp';
import longswordDataImg from '../../../assets/weaponmoves/wilds/modal/WILDS-MV-LS-MODAL.webp';
import swordandshieldDataImg from '../../../assets/weaponmoves/wilds/modal/WILDS-MV-SS-MODAL.webp';
import dualbladesDataImg from '../../../assets/weaponmoves/wilds/modal/WILDS-MV-DB-MODAL.webp';
import hammerDataImg from '../../../assets/weaponmoves/wilds/modal/WILDS-MV-HAMMER-MODAL.webp';
import huntinghornDataImg from '../../../assets/weaponmoves/wilds/modal/WILDS-MV-HH-MODAL.webp';
import lanceDataImg from '../../../assets/weaponmoves/wilds/modal/WILDS-MV-LANCE-MODAL.webp';
import gunlanceDataImg from '../../../assets/weaponmoves/wilds/modal/WILDS-MV-GL-MODAL.webp';
import switchaxeDataImg from '../../../assets/weaponmoves/wilds/modal/WILDS-MV-SA-MODAL.webp';
import chargebladeDataImg from '../../../assets/weaponmoves/wilds/modal/WILDS-MV-CB-MODAL.webp';
import insectglaiveDataImg from '../../../assets/weaponmoves/wilds/modal/WILDS-MV-IG-MODAL.webp';
import lightbowgunDataImg from '../../../assets/weaponmoves/wilds/modal/WILDS-MV-LB-MODAL.webp';
import heavybowgunDataImg from '../../../assets/weaponmoves/wilds/modal/WILDS-MV-HB-MODAL.webp';
import bowDataImg from '../../../assets/weaponmoves/wilds/modal/WILDS-MV-BOW-MODAL.webp';

interface WildsWeaponMovesProps {
    isDarkMode: boolean;
}

const weaponImages = [
    { name: '大剑', image: greatswordImg, dataImage: greatswordDataImg },
    { name: '太刀', image: longswordImg, dataImage: longswordDataImg },
    { name: '单手剑', image: swordandshieldImg, dataImage: swordandshieldDataImg },
    { name: '双剑', image: dualbladesImg, dataImage: dualbladesDataImg },
    { name: '大锤', image: hammerImg, dataImage: hammerDataImg },
    { name: '狩猎笛', image: huntinghornImg, dataImage: huntinghornDataImg },
    { name: '长枪', image: lanceImg, dataImage: lanceDataImg },
    { name: '铳枪', image: gunlanceImg, dataImage: gunlanceDataImg },
    { name: '斩击斧', image: switchaxeImg, dataImage: switchaxeDataImg },
    { name: '充能斧', image: chargebladeImg, dataImage: chargebladeDataImg },
    { name: '操虫棍', image: insectglaiveImg, dataImage: insectglaiveDataImg },
    { name: '轻弩', image: lightbowgunImg, dataImage: lightbowgunDataImg },
    { name: '重弩', image: heavybowgunImg, dataImage: heavybowgunDataImg },
    { name: '弓', image: bowImg, dataImage: bowDataImg },
];

const WildsWeaponMoves: React.FC<WildsWeaponMovesProps> = ({ isDarkMode }) => {
    const navigate = useNavigate();

    const handleWeaponClick = (weaponName: string, dataImage: string) => {
        navigate(`/wilds/weapon-moves/${encodeURIComponent(weaponName)}`, {
            state: { dataImage }
        });
    };

    return (
        <div className="container mx-auto px-4 py-8">
            {/* Text container (transparent) */}
            <div className="ml-2 bg-transparent mb-2">
                <div className="flex justify-between items-center mb-6">
                    <h1 className={`text-xl md:text-2xl ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
                        怪物猎人：荒野 - 武器动作值
                    </h1>
                </div>
                <p className={`mb-12 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
                    这里是《怪物猎人：荒野》的武器动作值数据表(数据还没更新，暂时用世界替代)。点击武器图标查看详细动作值。
                </p>
            </div>

            {/* Image grid container */}
            <div className="bg-transparent">
                <div className="grid grid-cols-2 gap-4 justify-items-center">
                    {weaponImages.map((weapon, index) => (
                        <div
                            key={index}
                            className={`inline-block rounded-lg cursor-pointer transition-all 
                            hover:scale-105 ${isDarkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-100 hover:bg-gray-200'} 
                            ${index % 2 === 0 ? 'ml-2' : 'mr-2'}`}
                            onClick={() => handleWeaponClick(weapon.name, weapon.dataImage)}
                        >
                            <img
                                src={weapon.image}
                                alt={weapon.name}
                                className="max-h-64 object-contain rounded-lg"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default WildsWeaponMoves;