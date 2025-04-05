import React from 'react';
import { useNavigate } from 'react-router-dom';

// 导入武器图标
import greatswordImg from '../../../assets/weaponmoves/rise/RISE-MV-GS.webp';
import longswordImg from '../../../assets/weaponmoves/rise/RISE-MV-LS.webp';
import swordandshieldImg from '../../../assets/weaponmoves/rise/RISE-MV-SS.webp';
import dualbladesImg from '../../../assets/weaponmoves/rise/RISE-MV-DB.webp';
import hammerImg from '../../../assets/weaponmoves/rise/RISE-MV-HAMMER.webp';
import huntinghornImg from '../../../assets/weaponmoves/rise/RISE-MV-HH.webp';
import lanceImg from '../../../assets/weaponmoves/rise/RISE-MV-LANCE.webp';
import gunlanceImg from '../../../assets/weaponmoves/rise/RISE-MV-GL.webp';
import switchaxeImg from '../../../assets/weaponmoves/rise/RISE-MV-SA.webp';
import chargebladeImg from '../../../assets/weaponmoves/rise/RISE-MV-CB.webp';
import insectglaiveImg from '../../../assets/weaponmoves/rise/RISE-MV-IG.webp';
import lightbowgunImg from '../../../assets/weaponmoves/rise/RISE-MV-LB.webp';
import heavybowgunImg from '../../../assets/weaponmoves/rise/RISE-MV-HB.webp';
import bowImg from '../../../assets/weaponmoves/rise/RISE-MV-BOW.webp';

// 导入武器数据图表
import greatswordDataImg1 from '../../../assets/weaponmoves/rise/modal/RISE-MV-GS-MODAL1.webp';
import greatswordDataImg2 from '../../../assets/weaponmoves/rise/modal/RISE-MV-GS-MODAL2.webp';
import longswordDataImg from '../../../assets/weaponmoves/rise/modal/RISE-MV-LS-MODAL.webp';
import swordandshieldDataImg from '../../../assets/weaponmoves/rise/modal/RISE-MV-SS-MODAL.webp';
import dualbladesDataImg1 from '../../../assets/weaponmoves/rise/modal/RISE-MV-DB-MODAL1.webp';
import dualbladesDataImg2 from '../../../assets/weaponmoves/rise/modal/RISE-MV-DB-MODAL2.webp';
import hammerDataImg from '../../../assets/weaponmoves/rise/modal/RISE-MV-HAMMER-MODAL.webp';
import huntinghornDataImg from '../../../assets/weaponmoves/rise/modal/RISE-MV-HH-MODAL.webp';
import lanceDataImg from '../../../assets/weaponmoves/rise/modal/RISE-MV-LANCE-MODAL.webp';
import gunlanceDataImg from '../../../assets/weaponmoves/rise/modal/RISE-MV-GL-MODAL.webp';
import switchaxeDataImg from '../../../assets/weaponmoves/rise/modal/RISE-MV-SA-MODAL.webp';
import chargebladeDataImg from '../../../assets/weaponmoves/rise/modal/RISE-MV-CB-MODAL.webp';
import insectglaiveDataImg1 from '../../../assets/weaponmoves/rise/modal/RISE-MV-IG-MODAL1.webp';
import insectglaiveDataImg2 from '../../../assets/weaponmoves/rise/modal/RISE-MV-IG-MODAL2.webp';
import lightbowgunDataImg1 from '../../../assets/weaponmoves/rise/modal/RISE-MV-LB-MODAL1.webp';
import lightbowgunDataImg2 from '../../../assets/weaponmoves/rise/modal/RISE-MV-LB-MODAL2.webp';
import lightbowgunDataImg3 from '../../../assets/weaponmoves/rise/modal/RISE-MV-LB-MODAL3.webp';
import heavybowgunDataImg1 from '../../../assets/weaponmoves/rise/modal/RISE-MV-HB-MODAL1.webp';
import heavybowgunDataImg2 from '../../../assets/weaponmoves/rise/modal/RISE-MV-HB-MODAL2.webp';
import heavybowgunDataImg3 from '../../../assets/weaponmoves/rise/modal/RISE-MV-HB-MODAL3.webp';
import bowDataImg from '../../../assets/weaponmoves/rise/modal/RISE-MV-BOW-MODAL.webp';

interface RiseWeaponMovesProps {
    isDarkMode: boolean;
}

const weaponImages = [
    { name: '大剑', image: greatswordImg, dataImage: [greatswordDataImg1, greatswordDataImg2] },
    { name: '太刀', image: longswordImg, dataImage: longswordDataImg },
    { name: '单手剑', image: swordandshieldImg, dataImage: swordandshieldDataImg },
    { name: '双剑', image: dualbladesImg, dataImage: [dualbladesDataImg1, dualbladesDataImg2] },
    { name: '大锤', image: hammerImg, dataImage: hammerDataImg },
    { name: '狩猎笛', image: huntinghornImg, dataImage: huntinghornDataImg },
    { name: '长枪', image: lanceImg, dataImage: lanceDataImg },
    { name: '铳枪', image: gunlanceImg, dataImage: gunlanceDataImg },
    { name: '斩击斧', image: switchaxeImg, dataImage: switchaxeDataImg },
    { name: '充能斧', image: chargebladeImg, dataImage: chargebladeDataImg },
    { name: '操虫棍', image: insectglaiveImg, dataImage: [insectglaiveDataImg1, insectglaiveDataImg2] },
    { name: '轻弩', image: lightbowgunImg, dataImage: [lightbowgunDataImg1, lightbowgunDataImg2, lightbowgunDataImg3] },
    { name: '重弩', image: heavybowgunImg, dataImage: [heavybowgunDataImg1, heavybowgunDataImg2, heavybowgunDataImg3] },
    { name: '弓', image: bowImg, dataImage: bowDataImg },
];

const riseWeaponMoves: React.FC<RiseWeaponMovesProps> = ({ isDarkMode }) => {
    const navigate = useNavigate();

    const handleWeaponClick = (weaponName: string, dataImage: string | string[]) => {
        navigate(`/rise/weapon-moves/${encodeURIComponent(weaponName)}`, {
            state: { dataImage }
        });
    };

    return (
        <div className="container mx-auto px-4 py-8">
            {/* Text container (transparent) */}
            <div className="ml-2 bg-transparent mb-2">
                <div className="flex justify-between items-center mb-6">
                    <h1 className={`text-xl md:text-2xl ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
                        怪物猎人：崛起/曙光 - 武器动作值
                    </h1>
                </div>
                <p className={`mb-12 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
                    这里是《怪物猎人：崛起/曙光》的武器动作值数据表。点击武器图标查看详细动作值。
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

export default riseWeaponMoves;