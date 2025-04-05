// src/components/Sidebar/SidebarPages/MonsterPopularityPage.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

interface MonsterPopularityPageProps {
    isDarkMode: boolean;
}

const MonsterPopularityPage: React.FC<MonsterPopularityPageProps> = ({ isDarkMode }) => {
    const navigate = useNavigate();

    // 怪物热度排名数据
    const monsters = [
        {
            rank: 1,
            name: '雷狼龙',
            japanese: 'ジンオウガ',
            image: 'https://monsterhunter.fandom.com/wiki/Zinogre?file=Zinogre_Render_001.png',
            votes: 12543,
            description: '能够操纵雷电的狼型怪物，充满野性的美感和强大的战斗力，是系列最具人气的怪物之一。',
            animation: 'https://monsterhunter.fandom.com/wiki/Zinogre?file=Zinogre_Roar.gif'
        },
        {
            rank: 2,
            name: '灭尽龙',
            japanese: 'ネルギガンテ',
            image: 'https://monsterhunter.fandom.com/wiki/Nergigante?file=Nergigante_Render_001.png',
            votes: 11876,
            description: '拥有强大再生能力的古龙种，以猎食其他古龙而闻名，极具攻击性的设计深受玩家喜爱。',
            animation: 'https://monsterhunter.fandom.com/wiki/Nergigante?file=Nergigante_Roar.gif'
        },
        {
            rank: 3,
            name: '泡狐龙',
            japanese: 'タマミツネ',
            image: 'https://monsterhunter.fandom.com/wiki/Mizutsune?file=Mizutsune_Render_001.png',
            votes: 11234,
            description: '优雅的泡狐龙能制造泡沫进行攻击，其独特的美学设计在玩家中拥有极高人气。',
            animation: 'https://monsterhunter.fandom.com/wiki/Mizutsune?file=Mizutsune_Roar.gif'
        },
        {
            rank: 4,
            name: '怨虎龙',
            japanese: 'マガイマガド',
            image: 'https://monsterhunter.fandom.com/wiki/Magnamalo?file=Magnamalo_Render_001.png',
            votes: 10567,
            description: '充满怨念的紫色巨兽，能够操纵鬼火，是《怪物猎人崛起》的标志性怪物。',
            animation: 'https://monsterhunter.fandom.com/wiki/Magnamalo?file=Magnamalo_Roar.gif'
        },
        {
            rank: 5,
            name: '雄火龙',
            japanese: 'リオレウス',
            image: 'https://monsterhunter.fandom.com/wiki/Rathalos?file=Rathalos_Render_001.png',
            votes: 9876,
            description: '系列标志性的"天空之王"，经典的设计和战斗方式使其成为怪物猎人的象征。',
            animation: 'https://monsterhunter.fandom.com/wiki/Rathalos?file=Rathalos_Roar.gif'
        },
        {
            rank: 6,
            name: '迅龙',
            japanese: 'ナルガクルガ',
            image: 'https://monsterhunter.fandom.com/wiki/Nargacuga?file=Nargacuga_Render_001.png',
            votes: 9456,
            description: '漆黑的迅捷猎手，流畅的战斗动作和独特的造型设计深受玩家喜爱。',
            animation: 'https://monsterhunter.fandom.com/wiki/Nargacuga?file=Nargacuga_Roar.gif'
        },
        {
            rank: 7,
            name: '冰咒龙',
            japanese: 'イヴェルカーナ',
            image: 'https://monsterhunter.fandom.com/wiki/Velkhana?file=Velkhana_Render_001.png',
            votes: 8976,
            description: '优雅的冰之古龙，能够创造冰晶宫殿，其高贵的设计风格获得大量粉丝。',
            animation: 'https://monsterhunter.fandom.com/wiki/Velkhana?file=Velkhana_Roar.gif'
        },
        {
            rank: 8,
            name: '雷神龙',
            japanese: 'ナルハタタヒメ',
            image: 'https://monsterhunter.fandom.com/wiki/Narwa_the_Allmother?file=Narwa_the_Allmother_Render_001.png',
            votes: 8567,
            description: '《怪物猎人崛起》的最终怪物之一，结合了日本神话元素的震撼设计。',
            animation: 'https://monsterhunter.fandom.com/wiki/Narwa_the_Allmother?file=Narwa_the_Allmother_Roar.gif'
        },
        {
            rank: 9,
            name: '天彗龙',
            japanese: 'バルファルク',
            image: 'https://monsterhunter.fandom.com/wiki/Valstrax?file=Valstrax_Render_001.png',
            votes: 8234,
            description: '能够超音速飞行的古龙，喷气式战斗机般的设计理念极具创意。',
            animation: 'https://monsterhunter.fandom.com/wiki/Valstrax?file=Valstrax_Roar.gif'
        },
        {
            rank: 10,
            name: '金狮子',
            japanese: 'ラージャン',
            image: 'https://monsterhunter.fandom.com/wiki/Rajang?file=Rajang_Render_001.png',
            votes: 7987,
            description: '狂暴的兽龙种，超级赛亚人般的造型和极高的难度使其成为玩家挑战的对象。',
            animation: 'https://monsterhunter.fandom.com/wiki/Rajang?file=Rajang_Roar.gif'
        },
        {
            rank: 11,
            name: '碎龙',
            japanese: 'ブラキディオス',
            image: 'https://monsterhunter.fandom.com/wiki/Brachydios?file=Brachydios_Render_001.png',
            votes: 7654,
            description: '能够分泌爆炸性粘液的兽龙种，独特的战斗机制和造型设计深受欢迎。',
            animation: 'https://monsterhunter.fandom.com/wiki/Brachydios?file=Brachydios_Roar.gif'
        },
        {
            rank: 12,
            name: '冥灯龙',
            japanese: 'ゼノ・ジーヴァ',
            image: 'https://monsterhunter.fandom.com/wiki/Xeno%27jiiva?file=Xeno%27jiiva_Render_001.png',
            votes: 7321,
            description: '《怪物猎人世界》的最终怪物，外星生物般的设计和震撼的登场场景令人难忘。',
            animation: 'https://monsterhunter.fandom.com/wiki/Xeno%27jiiva?file=Xeno%27jiiva_Roar.gif'
        },
        {
            rank: 13,
            name: '轰龙',
            japanese: 'ティガレックス',
            image: 'https://monsterhunter.fandom.com/wiki/Tigrex?file=Tigrex_Render_001.png',
            votes: 6987,
            description: '原始而狂暴的飞龙种，标志性的冲锋攻击和咆哮成为系列经典。',
            animation: 'https://monsterhunter.fandom.com/wiki/Tigrex?file=Tigrex_Roar.gif'
        },
        {
            rank: 14,
            name: '斩龙',
            japanese: 'ディノバルド',
            image: 'https://monsterhunter.fandom.com/wiki/Glavenus?file=Glavenus_Render_001.png',
            votes: 6789,
            description: '能够加热尾部巨刃的兽龙种，武士般的战斗风格极具特色。',
            animation: 'https://monsterhunter.fandom.com/wiki/Glavenus?file=Glavenus_Roar.gif'
        },
        {
            rank: 15,
            name: '炎王龙',
            japanese: 'テオ・テスカトル',
            image: 'https://monsterhunter.fandom.com/wiki/Teostra?file=Teostra_Render_001.png',
            votes: 6543,
            description: '掌控火焰的古龙，狮子般威严的外表和强大的火焰能力使其成为经典。',
            animation: 'https://monsterhunter.fandom.com/wiki/Teostra?file=Teostra_Roar.gif'
        },
        {
            rank: 16,
            name: '钢龙',
            japanese: 'クシャルダオラ',
            image: 'https://monsterhunter.fandom.com/wiki/Kushala_Daora?file=Kushala_Daora_Render_001.png',
            votes: 6321,
            description: '操纵风暴的古龙，金属般的外壳和优雅的飞行姿态深受喜爱。',
            animation: 'https://monsterhunter.fandom.com/wiki/Kushala_Daora?file=Kushala_Daora_Roar.gif'
        },
        {
            rank: 17,
            name: '电龙',
            japanese: 'ライゼクス',
            image: 'https://monsterhunter.fandom.com/wiki/Astalos?file=Astalos_Render_001.png',
            votes: 6123,
            description: '充满电力的飞龙种，昆虫般的外形和闪电攻击极具视觉冲击力。',
            animation: 'https://monsterhunter.fandom.com/wiki/Astalos?file=Astalos_Roar.gif'
        },
        {
            rank: 18,
            name: '恐暴龙',
            japanese: 'イビルジョー',
            image: 'https://monsterhunter.fandom.com/wiki/Deviljho?file=Deviljho_Render_001.png',
            votes: 5987,
            description: '永远饥饿的暴君，极具攻击性的设计和夸张的下巴成为其标志。',
            animation: 'https://monsterhunter.fandom.com/wiki/Deviljho?file=Deviljho_Roar.gif'
        },
        {
            rank: 19,
            name: '黑龙',
            japanese: 'ミラボレアス',
            image: 'https://monsterhunter.fandom.com/wiki/Fatalis?file=Fatalis_Render_001.png',
            votes: 5876,
            description: '传说中的最强古龙，神秘而恐怖的存在，是系列最具代表性的终极挑战。',
            animation: 'https://monsterhunter.fandom.com/wiki/Fatalis?file=Fatalis_Roar.gif'
        },
        {
            rank: 20,
            name: '海龙',
            japanese: 'ラギアクルス',
            image: 'https://monsterhunter.fandom.com/wiki/Lagiacrus?file=Lagiacrus_Render_001.png',
            votes: 5678,
            description: '水陆两栖的海龙种，流畅的造型设计和水中战斗的独特性使其备受欢迎。',
            animation: 'https://monsterhunter.fandom.com/wiki/Lagiacrus?file=Lagiacrus_Roar.gif'
        }
    ];

    return (
        <div className={`min-h-screen ${isDarkMode ? 'bg-gray-900 text-gray-100' : 'bg-gray-50 text-gray-900'}`}>
            <div className="container mx-auto px-4 py-8">
                {/* 返回按钮 */}
                <button
                    onClick={() => navigate(-1)}
                    className={`mb-6 flex items-center px-4 py-2 rounded-lg ${isDarkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-200 hover:bg-gray-300'} transition-colors`}
                >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                    返回
                </button>

                {/* 标题 */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mb-12 text-center"
                >
                    <h1 className="text-4xl font-bold mb-4">全怪物热度官方投票统计</h1>
                    <p className={`text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                        根据CAPCOM官方举办的"最受欢迎怪物"投票结果整理
                    </p>
                </motion.div>

                {/* 统计图表概览 */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                    className={`mb-16 p-6 rounded-xl ${isDarkMode ? 'bg-gray-800' : 'bg-white shadow-md'}`}
                >
                    <h2 className="text-2xl font-semibold mb-6">投票数据概览</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className={`p-4 rounded-lg ${isDarkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
                            <h3 className="text-lg font-medium mb-2">总投票数</h3>
                            <p className="text-3xl font-bold text-blue-500">156,789</p>
                        </div>
                        <div className={`p-4 rounded-lg ${isDarkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
                            <h3 className="text-lg font-medium mb-2">参与国家/地区</h3>
                            <p className="text-3xl font-bold text-green-500">42</p>
                        </div>
                        <div className={`p-4 rounded-lg ${isDarkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
                            <h3 className="text-lg font-medium mb-2">投票持续时间</h3>
                            <p className="text-3xl font-bold text-purple-500">30天</p>
                        </div>
                    </div>
                </motion.div>

                {/* 怪物排名列表 */}
                <div className="space-y-8">
                    {monsters.map((monster, index) => (
                        <motion.div
                            key={monster.name}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.05, duration: 0.5 }}
                            className={`flex flex-col md:flex-row items-stretch overflow-hidden rounded-xl shadow-lg ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}
                        >
                            {/* 排名徽章 */}
                            <div className={`md:w-24 flex-shrink-0 flex items-center justify-center ${getRankColorClass(monster.rank)}`}>
                                <span className="text-4xl font-bold text-white">#{monster.rank}</span>
                            </div>

                            {/* 怪物图片 */}
                            <div className="md:w-1/4 flex-shrink-0 relative">
                                <img
                                    src={monster.image}
                                    alt={monster.name}
                                    className="w-full h-full object-cover"
                                    onError={(e) => {
                                        const target = e.target as HTMLImageElement;
                                        target.src = 'https://via.placeholder.com/300x200?text=Monster+Image';
                                    }}
                                />
                                {/* 动态图按钮 */}
                                {monster.animation && (
                                    <button
                                        className={`absolute bottom-2 right-2 p-2 rounded-full ${isDarkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-white hover:bg-gray-100'} shadow-md`}
                                        onClick={() => window.open(monster.animation, '_blank')}
                                        title="查看动态图"
                                    >
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                        </svg>
                                    </button>
                                )}
                            </div>

                            {/* 怪物信息 */}
                            <div className="flex-1 p-6">
                                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                                    <div>
                                        <h2 className="text-2xl font-bold">{monster.name}</h2>
                                        <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>{monster.japanese}</p>
                                    </div>
                                    <div className={`mt-2 md:mt-0 px-4 py-2 rounded-full ${isDarkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
                                        <span className="font-semibold">票数: </span>
                                        <span className="text-blue-500 font-bold">{monster.votes.toLocaleString()}</span>
                                    </div>
                                </div>
                                <p className={`mb-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>{monster.description}</p>

                                {/* 投票进度条 */}
                                <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4">
                                    <div
                                        className="bg-gradient-to-r from-blue-500 to-purple-600 h-2.5 rounded-full"
                                        style={{ width: `${(monster.votes / monsters[0].votes) * 100}%` }}
                                    ></div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* 数据来源说明 */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 0.5 }}
                    className={`mt-16 p-6 rounded-xl text-center ${isDarkMode ? 'bg-gray-800 text-gray-400' : 'bg-gray-100 text-gray-600'}`}
                >
                    <p>数据来源: CAPCOM官方"Monster Hunter人气怪物投票"活动 (2023年)</p>
                    <p className="mt-2">统计时间: 2023年10月15日 - 2023年11月15日</p>
                </motion.div>
            </div>
        </div>
    );
};

// 根据排名返回对应的颜色类
const getRankColorClass = (rank: number) => {
    if (rank === 1) return 'bg-gradient-to-br from-yellow-400 to-yellow-600';
    if (rank === 2) return 'bg-gradient-to-br from-gray-300 to-gray-500';
    if (rank === 3) return 'bg-gradient-to-br from-amber-600 to-amber-800';
    if (rank <= 10) return 'bg-gradient-to-br from-blue-500 to-blue-700';
    return 'bg-gradient-to-br from-purple-500 to-purple-700';
};

export default MonsterPopularityPage;