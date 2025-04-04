import React from 'react';
import monsterCard from '../../../assets/homepage/homerise1.webp';
import weaponCard from '../../../assets/homepage/homerise2.webp';
import taCard from '../../../assets/homepage/homerise3.webp';

interface FeatureCardsProps {
    isDarkMode: boolean;
}

const FeatureCards: React.FC<FeatureCardsProps> = ({ isDarkMode }) => {
    const features = [
        {
            title: "怪物攻略——从入门到猫车",
            description: "详细讨论鲜有记载的怪物特性与全武器打法，包括深度机制解读和各武器战斗策略。",
            image: monsterCard
        },
        {
            title: "武器机制——从入门到放弃",
            description: "十四种武器的详细数据，包括招式派生路线图、招式持续时间、招式收益期望计算。",
            image: weaponCard
        },
        {
            title: "竞速技巧——从入门到入土",
            description: "我们并不鼓励竞速行为，但乐意为竞速玩家提供一些入门级的技巧和常识来降低竞速门槛，部分特别复杂的技巧会给出相应的视频链接。",
            image: taCard
        }
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {features.map((feature, index) => (
                <div key={index} className={`rounded-lg overflow-hidden shadow-lg transform transition-all hover:scale-105 ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
                    <div className="h-48 bg-cover bg-center" style={{ backgroundImage: `url(${feature.image})` }}></div>
                    <div className="p-6">
                        <h3 className={`text-xl font-bold mb-2 ${isDarkMode ? 'text-yellow-400' : 'text-[#2a475e]'}`}>{feature.title}</h3>
                        <p className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>{feature.description}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default FeatureCards;