import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Sword, Shield, Skull, Shirt, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

interface GameTermsPageProps {
    isDarkMode: boolean;
}

// 定义分类图标类型
type CategoryIcons = {
    [key: string]: React.ReactNode;
};

// 图标映射
const categoryIcons: CategoryIcons = {
    '武器相关': <Sword className="w-5 h-5" />,
    '战斗相关': <Shield className="w-5 h-5" />,
    '装备相关': <Shirt className="w-5 h-5" />,
    '怪物相关': <Skull className="w-5 h-5" />,
    '游戏机制': <Zap className="w-5 h-5" />
};

// 定义术语类型
interface Term {
    term: string;
    explanation: string;
    example: string;
    animation: string;
}

// 定义分类类型
interface Category {
    category: string;
    terms: Term[];
}

const GameTermsPage: React.FC<GameTermsPageProps> = ({ isDarkMode }) => {
    const navigate = useNavigate();
    const [activeCategory, setActiveCategory] = useState<string | null>(null);
    const [searchTerm, setSearchTerm] = useState('');

    // 怪物猎人常见术语数据
    const termsData: Category[] = [
        {
            category: '武器相关',
            terms: [
                {
                    term: 'GP',
                    explanation: 'Guard Point(防御点)，指武器在特定动作中自动带有防御判定的帧数，如盾斧变形斩、太刀见切等',
                    example: '盾斧玩家常用GP来防御怪物攻击并反击',
                    animation: 'shield'
                },
                {
                    term: '见切',
                    explanation: '太刀的特殊回避反击技巧，正式名称为"看破斩"，成功回避攻击后可接大回旋斩开刃',
                    example: '见切成功时会有特殊的音效和特效',
                    animation: 'dodge'
                },
                {
                    term: '登龙',
                    explanation: '太刀的"飞翔踢"接"气刃兜割"的连招，因动作像龙腾空而得名',
                    example: '开红刃后登龙是太刀的主要输出手段',
                    animation: 'jump'
                },
                {
                    term: '真蓄',
                    explanation: '大剑的"真蓄力斩"的简称(来自日语"真溜め斬り")，是大剑最高伤害的单次攻击',
                    example: '预判怪物硬直打真蓄是大剑的核心技巧',
                    animation: 'charge'
                },
                {
                    term: '滑步',
                    explanation: '弓的蓄力射击后接回避的动作，可维持蓄力等级同时调整位置',
                    example: '滑步弓是冰原时期的主流玩法',
                    animation: 'slide'
                },
                {
                    term: 'JR',
                    explanation: '片手的Just Rush，官方名称为致命连击，是冰原中片手的一种连招，当闪烁红光时按下可以造成巨大伤害',
                    example: '找准时机使用JR是片手的必备技巧之一',
                    animation: 'move'
                },
                {
                    term: '搓背',
                    explanation: '双刀借助斜坡使用的特殊跳跃攻击，当命中怪物时会让猎人如同车轮一般滚过怪物的整条背部，并不断使用双刀劈砍滚过的位置',
                    example: '绚辉龙红温后背部肉质很好，可以通过搓背来打出高额伤害',
                    animation: 'move'
                }
            ]
        },
        {
            category: '战斗相关',
            terms: [
                {
                    term: '猫车',
                    explanation: '玩家被怪物击败后由艾露猫推车送回营地的动画，引申为死亡',
                    example: '这龙车太快了，我又猫车了',
                    animation: 'cart'
                },
                {
                    term: '龙车',
                    explanation: '指怪物直线冲撞的攻击方式，因多数飞龙种使用此招而得名',
                    example: '灭尽龙的龙车后经常接如来神掌',
                    animation: 'charge'
                },
                {
                    term: '粪招',
                    explanation: '指怪物难以处理、令人烦躁的攻击招式',
                    example: '金狮子的连续后跳粪招真的烦人',
                    animation: 'annoying'
                },
                {
                    term: '锁头',
                    explanation: '通过持续攻击怪物头部使其频繁硬直的控制技巧',
                    example: '锤子玩家擅长锁头让怪物一直倒地',
                    animation: 'stun'
                },
                {
                    term: '换区',
                    explanation: '怪物血量降低到一定程度后会离开当前区域的行为',
                    example: '等它换区后再捕获比较安全',
                    animation: 'move'
                },
                {
                    term: '肉质',
                    explanation: '怪物身上各个部位对不同武器种类（斩击，打击，弹吸收）的伤害吸收状况，肉质越好则武器造成的伤害越高',
                    example: '怪物的头部斩击肉质为85，推荐使用大剑多次对头部进行攻击',
                    animation: 'move'
                },
                {
                    term: '打点',
                    explanation: '指猎人抓住怪物的某一个部位不放，死追猛打的操作，通常为怪物肉质最好的部位，可以借此打出多次连续硬质帮助狩猎',
                    example: '对这个怪物，可以通过对头和手交替输出，造成两次连续的倒地硬直帮助狩猎',
                    animation: 'move'
                }
            ]
        },
        {
            category: '装备相关',
            terms: [
                {
                    term: '校服',
                    explanation: '当前版本公认的最强泛用配装，多数玩家会优先制作',
                    example: '冰原时期的黑龙套就是校服',
                    animation: 'best'
                },
                {
                    term: '珠子',
                    explanation: '装饰品的俗称，镶嵌在装备上提供技能点数',
                    example: '攻击珠2太稀有了',
                    animation: 'deco'
                },
                {
                    term: '混装',
                    explanation: '混合不同套装部件以获得最佳技能组合的配装方式',
                    example: '这套混装出了攻7看破7',
                    animation: 'mix'
                },
                {
                    term: '幻化',
                    explanation: '将装备外观改变为其他装备样式的功能，不影响实际属性',
                    example: '我幻化了公会十字套，好看又实用',
                    animation: 'transmog'
                }
            ]
        },
        {
            category: '怪物相关',
            terms: [
                {
                    term: '古龙',
                    explanation: '游戏中最强的怪物分类，拥有改变天象等特殊能力',
                    example: '炎王龙、钢龙、灭尽龙都是古龙',
                    animation: 'elder'
                },
                {
                    term: '二名',
                    explanation: '特殊个体怪物，拥有独特前缀名和强化招式',
                    example: '鏖魔角龙、青电主电龙',
                    animation: 'variant'
                },
                {
                    term: '亚种',
                    explanation: '与原种不同属性的变种怪物',
                    example: '红莲爆鳞龙是爆鳞龙的亚种',
                    animation: 'subspecies'
                },
                {
                    term: '特殊许可',
                    explanation: '特别强大的个体怪物，通常有独特前缀和增强能力',
                    example: '历战王、激昂金狮子等',
                    animation: 'tempered'
                },
                {
                    term: '封面怪',
                    explanation: '作为游戏封面和宣传主打的标志性怪物',
                    example: '世界的灭尽龙、崛起的怨虎龙',
                    animation: 'flagship'
                },
                {
                    term: '世界警察',
                    explanation: '一部分在所有地区都会出现且频繁乱入到猎人与其他怪物的战斗中的大型非古龙怪物',
                    example: '金狮子，恐暴龙，爆鳞龙等',
                    animation: 'move'
                }
            ]
        },
        {
            category: '游戏机制',
            terms: [
                {
                    term: '软化',
                    explanation: '冰原加入的机制，使用爪攻击可软化怪物部位，提高肉质和掉落素材',
                    example: '开局先软化头部再输出',
                    animation: 'tenderize'
                },
                {
                    term: '御龙',
                    explanation: '崛起加入的机制，可操控怪物攻击其他怪物',
                    example: '御龙撞墙可造成大量伤害',
                    animation: 'ride'
                },
                {
                    term: '鬼火鸟',
                    explanation: '崛起中收集后可提升HP、耐力等属性的环境生物',
                    example: '开局先吃鬼火鸟再战斗',
                    animation: 'bird'
                },
                {
                    term: '翔虫',
                    explanation: '崛起中的特殊机制，使用翔虫可进行快速移动和发动铁虫丝技',
                    example: '翔虫受身可以快速恢复战斗姿态',
                    animation: 'bug'
                },
                {
                    term: '环境互动',
                    explanation: '利用地图中的环境要素(落石、藤蔓等)辅助战斗',
                    example: '引爆酸池可以造成大量伤害',
                    animation: 'environment'
                },
                {
                    term: '斩味',
                    explanation: '指武器的锋利度，从低到高依次为红橙黄绿蓝白紫，斩味越高则所拥有的伤害补正越高，可以对怪物造成更高的伤害，需要磨刀来保持斩味',
                    example: '怪物换区了，可以趁机磨刀来保证战斗时可以造成最高伤害',
                    animation: 'move'
                }
            ]
        }
    ];

    // 过滤术语
    const filteredData = termsData.map(category => ({
        ...category,
        terms: category.terms.filter(term =>
            term.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
            term.explanation.toLowerCase().includes(searchTerm.toLowerCase())
        )
    })).filter(category => category.terms.length > 0);

    // 动画变体
    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
        hover: {
            scale: 1.03,
            boxShadow: isDarkMode
                ? '0 5px 15px rgba(251, 191, 36, 0.3)'
                : '0 5px 15px rgba(245, 158, 11, 0.3)'
        }
    };

    const categoryVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
    };

    return (
        <div className={`min-h-screen p-4 md:p-8 ${isDarkMode ? 'bg-mh-starrysky text-gray-100' : 'bg-mh-parchment-1 text-gray-800'}`} >
            <button
                onClick={() => navigate(-1)}
                className={`flex items-center gap-2 mb-6 p-2 rounded-lg transition-all ${isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-200'}`}
            >
                <ArrowLeft className="w-5 h-5" />
                <span>返回</span>
            </button>

            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mb-8"
            >
                <h1 className={`text-3xl md:text-4xl font-bold mb-4 ${isDarkMode ? 'text-amber-400' : 'text-amber-600'}`}>
                    怪物猎人术语词典
                </h1>
                <p className={`text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    探索怪物猎人世界的专业术语和猎人黑话，成为真正的老猎人！
                </p>
            </motion.div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="mb-8"
            >
                <div className={`p-4 rounded-lg ${isDarkMode ? 'bg-gray-800' : 'bg-white'} shadow-md`}>
                    <div className="flex flex-col md:flex-row md:items-center gap-4">
                        <div className="flex-1">
                            <input
                                type="text"
                                placeholder="搜索术语..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className={`w-full p-3 rounded-lg border ${isDarkMode ? 'bg-gray-700 border-gray-600 focus:border-amber-500' : 'bg-white border-gray-300 focus:border-amber-400'} focus:outline-none focus:ring-2 ${isDarkMode ? 'focus:ring-amber-500' : 'focus:ring-amber-400'} transition-all`}
                            />
                        </div>
                        <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0">
                            {termsData.map((category) => (
                                <button
                                    key={category.category}
                                    onClick={() => setActiveCategory(activeCategory === category.category ? null : category.category)}
                                    className={`flex items-center gap-2 px-4 py-2 rounded-full whitespace-nowrap transition-all ${activeCategory === category.category ? (isDarkMode ? 'bg-amber-600 text-white' : 'bg-amber-500 text-white') : (isDarkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-200 hover:bg-gray-300')}`}
                                >
                                    {categoryIcons[category.category as keyof CategoryIcons]}
                                    {category.category}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </motion.div>

            <div className="space-y-10">
                {filteredData.map((category) => (
                    <motion.div
                        key={category.category}
                        initial="hidden"
                        animate="visible"
                        variants={categoryVariants}
                        className={`${activeCategory && activeCategory !== category.category ? 'opacity-50' : ''} transition-opacity`}
                    >
                        <motion.h2
                            className={`text-2xl font-bold mb-6 flex items-center gap-3 ${isDarkMode ? 'text-amber-400' : 'text-amber-600'}`}
                            whileHover={{ x: 5 }}
                        >
                            {categoryIcons[category.category as keyof CategoryIcons]}
                            {category.category}
                        </motion.h2>

                        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                            {category.terms.map((term) => (
                                <motion.div
                                    key={term.term}
                                    variants={itemVariants}
                                    initial="hidden"
                                    animate="visible"
                                    whileHover="hover"
                                    className={`p-5 rounded-xl border ${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} shadow-sm cursor-default transition-all`}
                                >
                                    <div className="flex items-start gap-3 mb-3">
                                        <div className={`p-2 rounded-lg ${isDarkMode ? 'bg-amber-900/50' : 'bg-amber-100'} flex-shrink-0`}>
                                            {categoryIcons[category.category as keyof CategoryIcons]}
                                        </div>
                                        <div>
                                            <h3 className={`text-lg font-bold ${isDarkMode ? 'text-amber-400' : 'text-amber-600'}`}>
                                                {term.term}
                                            </h3>
                                            <div className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                                                {category.category}
                                            </div>
                                        </div>
                                    </div>

                                    <p className={`mb-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                                        {term.explanation}
                                    </p>

                                    {term.example && (
                                        <div className={`p-3 rounded-lg text-sm ${isDarkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-600'}`}>
                                            <span className={`font-medium ${isDarkMode ? 'text-amber-400' : 'text-amber-600'}`}>实战示例:</span> {term.example}
                                        </div>
                                    )}

                                    {/* 动画占位 - 实际项目中可以替换为真正的动画组件 */}
                                    <div className="mt-3 h-4">
                                        <div className={`text-xs italic ${isDarkMode ? 'text-gray-500' : 'text-gray-400'}`}>
                                            [动画: {term.animation}]
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>

            {filteredData.length === 0 && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className={`p-8 rounded-xl text-center ${isDarkMode ? 'bg-gray-800' : 'bg-white'} shadow-md`}
                >
                    <div className="text-5xl mb-4">🔍</div>
                    <h3 className={`text-xl font-bold mb-2 ${isDarkMode ? 'text-amber-400' : 'text-amber-600'}`}>
                        未找到相关术语
                    </h3>
                    <p className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>
                        尝试使用不同的关键词搜索，或浏览上面的分类
                    </p>
                </motion.div>
            )}

            <motion.footer
                className={`mt-16 py-6 border-t ${isDarkMode ? 'border-gray-800 text-gray-400' : 'border-gray-200 text-gray-500'} text-sm text-center`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
            >
                <p>数据基于《怪物猎人 世界:冰原》和《怪物猎人 崛起:曙光》</p>
                <p className="mt-1">术语解释可能有版本差异，欢迎指正补充</p>
            </motion.footer>
        </div>
    );
};

export default GameTermsPage;