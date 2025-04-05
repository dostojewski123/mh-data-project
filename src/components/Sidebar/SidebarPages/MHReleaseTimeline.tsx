import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '../../UI/card';
// 封面图片导入
import mh2004Cover from '../../../assets/versions/monster_hunter_2004.webp';
import mhG2005Cover from '../../../assets/versions/monster_hunter_g_2005.webp';
import mh2dos2006Cover from '../../../assets/versions/monster_hunter_2_dos_2006.webp';
import mhFreedom22007Cover from '../../../assets/versions/monster_hunter_freedom_2_2007.webp';
import mhFreedomUnite2008Cover from '../../../assets/versions/monster_hunter_freedom_unite_2008.webp';
import mh3tri2009Cover from '../../../assets/versions/monster_hunter_3_tri_2009.webp';
import mhP3rd2010Cover from '../../../assets/versions/monster_hunter_portable_3rd_2010.webp';
import mh3G2011Cover from '../../../assets/versions/monster_hunter_3g_2011.webp';
import mh42013Cover from '../../../assets/versions/monster_hunter_4_2013.webp';
import mh4G2014Cover from '../../../assets/versions/monster_hunter_4g_2014.webp';
import mhX2015Cover from '../../../assets/versions/monster_hunter_x_2015.webp';
import mhXX2017Cover from '../../../assets/versions/monster_hunter_xx_2017.webp';
import mhWorld2018Cover from '../../../assets/versions/monster_hunter_world_2018.webp';
import mhIceborne2019Cover from '../../../assets/versions/monster_hunter_iceborne_2019.webp';
import mhRise2021Cover from '../../../assets/versions/monster_hunter_rise_2021.webp';
import mhSunbreak2022Cover from '../../../assets/versions/monster_hunter_sunbreak_2022.webp';

interface ReleaseTimelineProps {
    isDarkMode: boolean;
}

const MHReleaseTimeline: React.FC<ReleaseTimelineProps> = ({ isDarkMode }) => {
    // 怪物猎人系列发布时间数据
    const releases = [
        {
            year: 2004,
            title: '怪物猎人',
            platforms: ['PS2'],
            notableFeatures: [
                '系列首作',
                '开创了狩猎玩法',
                '4种近战武器+2种远程武器'
            ],
            cover: mh2004Cover
        },
        {
            year: 2005,
            title: '怪物猎人G',
            platforms: ['PS2', 'Wii'],
            notableFeatures: [
                '初代加强版',
                '新增G级任务',
                '新增双剑武器'
            ],
            cover: mhG2005Cover
        },
        {
            year: 2006,
            title: '怪物猎人2dos',
            platforms: ['PS2'],
            notableFeatures: [
                '新增昼夜气候系统',
                '武器种类扩充至12种'
            ],
            cover: mh2dos2006Cover
        },
        {
            year: 2007,
            title: '怪物猎人Freedom 2',
            platforms: ['PSP'],
            notableFeatures: [
                '掌机平台革新作',
                '继承PS2版核心内容'
            ],
            cover: mhFreedom22007Cover
        },
        {
            year: 2008,
            title: '怪物猎人Freedom Unite',
            platforms: ['PSP'],
            notableFeatures: [
                '系列首个"G"级难度',
                '新增随从猫系统'
            ],
            cover: mhFreedomUnite2008Cover
        },
        {
            year: 2009,
            title: '怪物猎人3',
            platforms: ['Wii'],
            notableFeatures: [
                '首次加入水战系统',
                '新增斩击斧武器'
            ],
            cover: mh3tri2009Cover
        },
        {
            year: 2010,
            title: '怪物猎人P3',
            platforms: ['PSP'],
            notableFeatures: [
                '和风主题革新',
                '新增怪物雷狼龙'
            ],
            cover: mhP3rd2010Cover
        },
        {
            year: 2011,
            title: '怪物猎人3G',
            platforms: ['3DS'],
            notableFeatures: [
                '首个3DS作品',
                '新增怪物碎龙'
            ],
            cover: mh3G2011Cover
        },
        {
            year: 2013,
            title: '怪物猎人4',
            platforms: ['3DS'],
            notableFeatures: [
                '立体化战斗场景',
                '新增操虫棍和盾斧'
            ],
            cover: mh42013Cover
        },
        {
            year: 2014,
            title: '怪物猎人4G',
            platforms: ['3DS'],
            notableFeatures: [
                '新增公会任务',
                '极限个体怪物'
            ],
            cover: mh4G2014Cover
        },
        {
            year: 2015,
            title: '怪物猎人X',
            platforms: ['3DS'],
            notableFeatures: [
                '狩技系统引入',
                '四大战斗风格'
            ],
            cover: mhX2015Cover
        },
        {
            year: 2017,
            title: '怪物猎人XX',
            platforms: ['3DS', 'Switch'],
            notableFeatures: [
                '跨平台存档支持',
                '新增勇气风格'
            ],
            cover: mhXX2017Cover
        },
        {
            year: 2018,
            title: '怪物猎人：世界',
            platforms: ['PS4', 'Xbox', 'PC'],
            notableFeatures: [
                '开放世界革新',
                '全高清生态系统'
            ],
            cover: mhWorld2018Cover
        },
        {
            year: 2019,
            title: '怪物猎人世界：冰原',
            platforms: ['PS4', 'Xbox', 'PC'],
            notableFeatures: [
                '飞翔爪机制',
                '大师等级任务'
            ],
            cover: mhIceborne2019Cover
        },
        {
            year: 2021,
            title: '怪物猎人崛起',
            platforms: ['Switch', 'PC'],
            notableFeatures: [
                '翔虫立体机动',
                '御龙战斗系统'
            ],
            cover: mhRise2021Cover
        },
        {
            year: 2022,
            title: '怪物猎人崛起：曙光',
            platforms: ['Switch', 'PC'],
            notableFeatures: [
                '快速技能切换',
                '大师等级装备'
            ],
            cover: mhSunbreak2022Cover
        }
    ].reverse(); // 反转数组实现从旧到新

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className={`p-6 min-h-screen ${isDarkMode ? 'bg-mh-starrystars text-gray-100' : 'bg-mh-parchment-1 text-gray-900'}`}
        >
            <div className="max-w-6xl mx-auto">
                <motion.h1
                    className="text-4xl font-bold mb-8 text-center"
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                >
                    <span className="inline-block mr-3">🗡️</span>
                    怪物猎人系列进化史
                    <span className="inline-block ml-3">🛡️</span>
                </motion.h1>

                <motion.div
                    initial={{ scale: 0.95, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                >
                    <Card className="p-6 mb-8" style={{
                        backgroundColor: isDarkMode ? '#2A2A2A' : '#FFFFFF',
                        borderLeft: '4px solid #3B82F6'
                    }}>
                        <p className="mb-4">
                            怪物猎人系列自2004年首次推出以来，已经发展成为卡普空最成功的游戏系列之一。
                            这个鱼骨图展示了系列从最初到最新作品的进化历程，以及每个版本的重要革新。
                        </p>
                        <p>
                            <span className="font-semibold text-blue-500">提示：</span>
                            部分数据和图片可能存在错误, 主要评述目前由AI生成, 之后更新会修改。
                        </p>
                    </Card>
                </motion.div>

                {/* 鱼骨图主体 */}
                <div className="relative py-4 md:py-6 lg:py-8">
                    {/* 桌面端中央脊椎 - 带有动画效果 */}
                    <motion.div
                        className="hidden md:block absolute left-1/2 w-1 h-full -ml-0.5 bg-blue-500"
                        initial={{ height: 0 }}
                        animate={{ height: '100%' }}
                        transition={{ duration: 1.5, delay: 0.6 }}
                    />

                    {/* 箭头元素 - 只在桌面端显示 */}
                    <motion.div
                        className="hidden md:block absolute left-1/2 top-0 -ml-3"
                        initial={{ y: -20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 1.8 }}
                    >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M12 4L12 20M12 20L18 14M12 20L6 14"
                                stroke="#F59E0B"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </motion.div>

                    {/* 移动端垂直布局 - 完全重构 */}
                    <div className="md:hidden space-y-4 pl-4">
                        {/* 时间轴线 */}
                        <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-blue-500 z-0" />

                        {releases.map((release, index) => (
                            <motion.div
                                key={release.year}
                                className="relative z-10"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.1 }}
                            >
                                {/* 时间节点标记 */}
                                <div className="absolute -left-5 top-5 w-3 h-3 rounded-full bg-blue-500 border-2 border-white" />

                                <div className={`ml-4 p-3 rounded-lg shadow ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
                                    {/* 整体布局分为左右两部分 */}
                                    <div className="flex flex-row">
                                        {/* 左侧文本内容 */}
                                        <div className="w-1/2 pr-4">
                                            {/* 标题行 */}
                                            <div className="flex items-start mb-2">
                                                <span className="px-2 py-1 rounded-full text-xs font-bold bg-blue-500 text-white mr-2">
                                                    {release.year}
                                                </span>
                                                <h3 className="text-lg font-bold text-blue-500 flex-1">
                                                    {release.title}
                                                </h3>
                                            </div>

                                            {/* 平台标签 - 横向滚动 */}
                                            <div className="mb-2 overflow-x-auto hide-scrollbar">
                                                <div className="flex gap-2 w-max">
                                                    {release.platforms.map(platform => (
                                                        <span
                                                            key={platform}
                                                            className="px-2 py-1 text-xs bg-indigo-500 text-white rounded whitespace-nowrap"
                                                        >
                                                            {platform}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>

                                            {/* 游戏特性列表 */}
                                            <ul className="space-y-3 text-sm pl-4 mb-3">
                                                {release.notableFeatures.map((feature, i) => (
                                                    <li key={i} className="relative before:content-['•'] before:absolute before:-left-3">
                                                        {feature}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        {/* 右侧封面图 */}
                                        <div className="w-1/2 flex justify-end">
                                            <img
                                                src={release.cover}
                                                alt={`${release.title}封面`}
                                                className="w-32 h-40 object-cover rounded-md border"
                                                onError={(e) => {
                                                    const target = e.target as HTMLImageElement;
                                                    target.src = 'https://via.placeholder.com/128x128?text=No+Cover';
                                                }}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* 桌面端鱼骨布局 - 保持不变 */}
                    <div className="hidden md:block space-y-8">
                        {releases.map((release, index) => {
                            const isLeft = index % 2 === 0;
                            const position = (index / (releases.length - 1)) * 100;

                            return (
                                <motion.div
                                    key={release.year}
                                    className={`relative flex ${isLeft ? 'justify-start' : 'justify-end'}`}
                                    style={{ top: `${position}%`, marginBottom: '1rem' }}
                                    initial={{ x: isLeft ? -100 : 100, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{
                                        delay: 0.8 + index * 0.1,
                                        type: 'spring',
                                        stiffness: 100,
                                        damping: 10
                                    }}
                                >
                                    {/* 连接线 */}
                                    <motion.div
                                        className={`absolute top-1/2 h-px ${isLeft ? 'left-[450px] right-1/2' : 'right-[450px] left-1/2'} bg-blue-500`}
                                        initial={{ scaleX: 0 }}
                                        animate={{ scaleX: 1 }}
                                        transition={{ delay: 0.9 + index * 0.1 }}
                                    />

                                    {/* 游戏版本卡片 */}
                                    <div className={`w-full max-w-md ${isLeft ? 'mr-auto' : 'ml-auto'}`}>
                                        <motion.div
                                            whileHover={{ scale: 1.03 }}
                                            className={`p-4 rounded-lg shadow-lg flex flex-col md:flex-row gap-8 ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}
                                            style={{
                                                borderTop: '3px solid #F59E0B'
                                            }}
                                        >
                                            <div className="flex-shrink-0 relative">
                                                <img
                                                    src={release.cover}
                                                    alt={`${release.title}封面`}
                                                    className="w-44 h-44 object-cover rounded-md shadow-sm"
                                                    onError={(e) => {
                                                        const target = e.target as HTMLImageElement;
                                                        target.src = 'https://via.placeholder.com/128x128?text=No+Cover';
                                                    }}
                                                />
                                                <div className="absolute -top-2 -left-2 px-2 py-1 rounded-full text-xs font-bold shadow-sm bg-blue-500 text-white">
                                                    {release.year}
                                                </div>
                                            </div>
                                            <div className="flex-1">
                                                <h3 className="text-xl font-bold mb-2 text-blue-500">
                                                    {release.title}
                                                </h3>
                                                <div className="flex flex-wrap gap-2 mb-3">
                                                    {release.platforms.map(platform => (
                                                        <span
                                                            key={platform}
                                                            className="px-2 py-1 rounded text-xs bg-indigo-500 text-white"
                                                        >
                                                            {platform}
                                                        </span>
                                                    ))}
                                                </div>
                                                <ul className="list-disc pl-5 space-y-1 text-sm">
                                                    {release.notableFeatures.map((feature, i) => (
                                                        <li key={i}>{feature}</li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </motion.div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>

                {/* 底部分析部分 */}
                <motion.div
                    className="mt-12"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 2.5 }}
                >
                    <h2
                        className="text-2xl font-bold mb-6 text-center text-yellow-500"
                    >
                        系列里程碑
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <motion.div
                            whileHover={{ y: -5 }}
                        >
                            <Card className="p-4 h-full" style={{
                                backgroundColor: isDarkMode ? '#2A2A2A' : '#FFFFFF',
                                borderBottom: '3px solid #3B82F6'
                            }}>
                                <h3 className="text-lg font-semibold mb-3 flex items-center">
                                    <span className="mr-2">📈</span> 销量里程碑
                                </h3>
                                <ul className="space-y-2">
                                    <li className="flex items-start">
                                        <span className="inline-block mr-2">•</span>
                                        <div>
                                            <strong>怪物猎人：世界</strong> - 系列销量最高，全球超过2000万份
                                        </div>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="inline-block mr-2">•</span>
                                        <div>
                                            <strong>怪物猎人：崛起</strong> - Switch平台最快达到400万销量的游戏
                                        </div>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="inline-block mr-2">•</span>
                                        <div>
                                            <strong>怪物猎人P3</strong> - PSP平台日本销量超过500万份
                                        </div>
                                    </li>
                                </ul>
                            </Card>
                        </motion.div>

                        <motion.div
                            whileHover={{ y: -5 }}
                        >
                            <Card className="p-4 h-full" style={{
                                backgroundColor: isDarkMode ? '#2A2A2A' : '#FFFFFF',
                                borderBottom: '3px solid #8B5CF6'
                            }}>
                                <h3 className="text-lg font-semibold mb-3 flex items-center">
                                    <span className="mr-2">🔄</span> 平台变迁
                                </h3>
                                <p className="mb-3">
                                    从PS2起步，经历了PSP的黄金时期，3DS的独占时代，
                                    到现在的多平台策略，特别是PC平台的重视。
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    <span className="px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded text-xs">PS2</span>
                                    <span className="px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded text-xs">PSP</span>
                                    <span className="px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded text-xs">3DS</span>
                                    <span className="px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded text-xs">Switch</span>
                                    <span className="px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded text-xs">PS4/Xbox</span>
                                    <span className="px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded text-xs">PC</span>
                                </div>
                            </Card>
                        </motion.div>

                        <motion.div
                            whileHover={{ y: -5 }}
                        >
                            <Card className="p-4 h-full" style={{
                                backgroundColor: isDarkMode ? '#2A2A2A' : '#FFFFFF',
                                borderBottom: '3px solid #F59E0B'
                            }}>
                                <h3 className="text-lg font-semibold mb-3 flex items-center">
                                    <span className="mr-2">⚔️</span> 战斗系统进化
                                </h3>
                                <ul className="space-y-2">
                                    <li className="flex items-start">
                                        <span className="inline-block mr-2">•</span>
                                        <div>
                                            <strong>水战系统</strong> (MH3) - 首次引入三维战斗空间
                                        </div>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="inline-block mr-2">•</span>
                                        <div>
                                            <strong>狩技系统</strong> (MHX) - 特殊技能和战斗风格
                                        </div>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="inline-block mr-2">•</span>
                                        <div>
                                            <strong>翔虫系统</strong> (MHRise) - 立体机动战斗
                                        </div>
                                    </li>
                                </ul>
                            </Card>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default MHReleaseTimeline;