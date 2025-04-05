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
                    explanation: 'Guard Point(防御点), 指武器在特定动作中自动带有防御判定的帧数, 如盾斧变形斩,后面指意上有扩展, 广义上的表示通过将某些很短的派生窗口与怪物的攻击重合来达到抵消怪物攻击目的的方式。',
                    example: '盾斧玩家常用GP来防御怪物攻击并反击',
                    animation: 'shield'
                },
                {
                    term: '见切',
                    explanation: '太刀的特殊回避反击技巧, 正式名称为“看破斩”, 成功回避攻击后可接气刃大回转斩开刃。',
                    example: '见切成功时会有特殊的音效和特效',
                    animation: 'dodge'
                },
                {
                    term: '登龙',
                    explanation: '太刀的招式：气刃兜割, 因动作像龙腾空而得名。',
                    example: '开红刃后登龙是世界太刀的主要输出手段',
                    animation: 'jump'
                },
                {
                    term: '切登, 居登',
                    explanation: '太刀的攻击连段, 切登指的是见切后不回砍立刻派生气刃突刺/飞翔踢, 而居登是指居合后立刻派生气刃突刺/飞翔踢。',
                    example: '居登是太刀输出的重要组成部分',
                    animation: 'slide'
                },
                {
                    term: '大地一击',
                    explanation: '大锤与狩猎笛横挥后前砸的动作。',
                    example: '大锤大地一击是其游走后主要输出手段',
                    animation: 'slide'
                },
                {
                    term: '拨浪鼓',
                    explanation: '冰原狩猎笛独有的响音攻击, 因攻击动作酷似玩拨浪鼓而闻名。',
                    example: '无',
                    animation: 'slide'
                },
                {
                    term: '下戳',
                    explanation: '操虫棍的攻击急袭突刺, 因动作为突然向大地俯冲戳去而得名。',
                    example: '下戳是冰原虫棍的主要输出手段',
                    animation: 'slide'
                },
                {
                    term: '直升机',
                    explanation: '操虫棍空中的舞踏连段, 因不断挥舞的操虫棍如同直升机的桨叶而得名。',
                    example: '直升机不失为一种简短的打怪方式',
                    animation: 'slide'
                },
                {
                    term: '电风扇',
                    explanation: '虫棍的攻击强化跳跃斩, 因为棍子在纵向旋转宛如风扇得名。',
                    example: '操虫棍可以用电风扇快速叠骑乘',
                    animation: 'slide'
                },
                {
                    term: '人车',
                    explanation: '长枪的招式“突进”, 因为其有着与怪物龙车相似的接触即会造成伤害的特性得名人车。',
                    example: '人车最高速度比炮还快',
                    animation: 'slide'
                },
                {
                    term: '开刃',
                    explanation: '太刀斩斧提升气刃等级/进入剑强化模式进行的操作的统称。',
                    example: '太刀第一要务就是开刃',
                    animation: 'slide'
                },
                {
                    term: '红盾, 红剑, 红斧, 电锯',
                    explanation: '分别为盾斧的属性强化状态, 剑强化状态, 斧强化状态的称呼, 因为其开启时对应的图标会变红得名, 而电锯则是斧强化形态的别称, 因为进入斧强化形态后斧模式攻击时盾斧的盾（也就是斧刃）会不断旋转宛如电锯得名。',
                    example: '开红盾是盾斧进入输出状态的第一要务',
                    animation: 'slide'
                },
                {
                    term: '真蓄',
                    explanation: '大剑的“真蓄力斩”的简称(来自日语"真溜め斬り"), 是大剑最高伤害的单次攻击。',
                    example: '预判怪物硬直打真蓄是大剑的核心技巧',
                    animation: 'charge'
                },
                {
                    term: '滑步',
                    explanation: '弓的蓄力射击后接回避的动作, 可维持蓄力等级同时调整位置。',
                    example: '滑步弓是冰原时期的主流玩法',
                    animation: 'slide'
                },
                {
                    term: 'xppg, xhpg, hpg',
                    explanation: '弓的蓄力连段, 由迅雷闪击, 蓄力步伐, 平射, 刚射四个部分组成, 取其拼音的首字母简写为：x（迅雷闪击）, h（蓄力步伐的俗称“滑步”）, p（平射）, g（刚射）, “xhpg”的意思的就是：迅雷闪击派生蓄力步伐派生平射派生刚射。',
                    example: '这招可以打一个xhpg',
                    animation: 'slide'
                },
                {
                    term: '打年糕',
                    explanation: '大锤的敲打攻击连段, 因为其动作酷似打年糕而得此外号。',
                    example: '大锤击晕倒地一般会打一套年糕',
                    animation: 'slide'
                },
                {
                    term: '本垒, 逆本垒',
                    explanation: '大锤的“压迫攻击”如回旋强压迫, 压迫等因为其攻击动作酷似棒球中的“本垒打”而得名, 而“逆本垒”则是反挥动作, 因为挥舞方向与压迫相反而得名。',
                    example: '大锤的本垒伤害很不错',
                    animation: 'slide'
                },
                {
                    term: '三连, 六连, 九连',
                    explanation: '双刀的鬼人连斩连段, 因为鬼人反手斩接鬼人二连斩一共三刀得名“三连”, 而六连则是由于鬼人二连斩后可派生鬼人六连斩, 则将整套反手斩—二连斩—六连斩连段合并称之为“六连”, 偶尔也有人称之为“九连”。',
                    example: '大锤击晕倒地一般会打一套年糕',
                    animation: 'slide'
                },
                {
                    term: '升龙',
                    explanation: '有两个含义, 一是双刀的回旋捞斩, 二是片手的对空飞翔爪, 因为动作酷似升龙拳而得名。',
                    example: '双刀升龙可以软化肉质',
                    animation: 'slide'
                },
                {
                    term: 'JR',
                    explanation: '片手的Just Rush, 官方名称为致命连击, 是冰原及其以后的作品中片手的一连招式, 当闪烁红光时按下可以拥有较高的伤害提升。',
                    example: '找准时机使用JR是片手的必备技巧之一',
                    animation: 'move'
                },
                {
                    term: '搓背',
                    explanation: '双刀借助斜坡使用的特殊跳跃攻击, 当命中怪物时会让猎人如同车轮一般滚过怪物的整条背部, 并不断使用双刀劈砍滚过的位置。',
                    example: '绚辉龙红温后背部肉质很好, 可以通过搓背来打出高额伤害',
                    animation: 'move'
                },
                {
                    term: '113, 123, 333',
                    explanation: '大剑的蓄力斩—强蓄力斩—真蓄力斩连段, 用简单的数字表示该等级下蓄力到的等级, 如“323”表示：蓄力斩三级派生强蓄力斩二级派生真蓄力斩三级, 而若中间的数字为0, 如“103”则表示使用强化射击（冰原独有）跳过强蓄力斩阶段直接打出真蓄力斩, 所以“103”表示拔刀斩—强化射击—真蓄力斩3级。特殊情况下（一般出现在冰原的讨论中）还有四个数字, 如“1233”, 最后一个数字表示利用翻滚冲撞攻击横拍强化射击快速派生的第二个真蓄力斩的蓄力等级',
                    example: '倒地大部分都来得及打323',
                    animation: 'move'
                },

            ]
        },
        {
            category: '战斗相关',
            terms: [
                {
                    term: '猫车',
                    explanation: '玩家被怪物击败后由艾露猫推车送回营地的动画, 引申为死亡。',
                    example: '这龙车太快了, 我又猫车了',
                    animation: 'cart'
                },
                {
                    term: '龙车',
                    explanation: '指怪物用全身奔跑冲撞的攻击方式, 因体型庞大的怪物冲撞如同快速行驶的车辆而得名。',
                    example: '冰呪龙的龙车可能衔接横扫吐息',
                    animation: 'charge'
                },
                {
                    term: '粪招',
                    explanation: '指怪物难以处理、令人烦躁的攻击招式。',
                    example: '金狮子的连续王八拳粪招真的烦人',
                    animation: 'annoying'
                },
                {
                    term: '锁头',
                    explanation: '持续攻击怪物头部而不攻击其他部位的打击方式。',
                    example: '锤子玩家擅长锁头让怪物一直倒地',
                    animation: 'stun'
                },
                {
                    term: '换区',
                    explanation: '怪物在一定情况下会离开当前区域前往其他区域的行为。',
                    example: '等它换区后再捕获比较安全',
                    animation: 'move'
                },
                {
                    term: '肉质',
                    explanation: '怪物身上各个部位对不同武器种类（斩击, 打击, 弹吸收）的伤害吸收状况, 肉质越好则武器造成的伤害越高。',
                    example: '怪物的头部斩击肉质为85, 推荐使用大剑多次对头部进行攻击',
                    animation: 'move'
                },
                {
                    term: '打点',
                    explanation: '指猎人攻击命中的部位, 一般能让攻击几乎命中一个部位称为“打点集中, 而能让攻击命中自己想要命中的部位称之为”打点好。',
                    example: '大剑是一把打点非常好的武器',
                    animation: 'move'
                }
            ]
        },
        {
            category: '装备相关',
            terms: [
                {
                    term: '校服',
                    explanation: '当前版本公认的最强泛用配装, 多数玩家会优先制作。',
                    example: '冰原时期的黑龙套就是校服',
                    animation: 'best'
                },
                {
                    term: '珠子',
                    explanation: '装饰品的俗称, 镶嵌在装备上提供技能。',
                    example: '攻击珠太稀有了',
                    animation: 'deco'
                },
                {
                    term: '幻化',
                    explanation: '将装备外观改变为其他装备样式的功能, 不影响实际属性。',
                    example: '我幻化了公会十字套, 好看又实用',
                    animation: 'transmog'
                }
            ]
        },
        {
            category: '怪物相关',
            terms: [
                {
                    term: '古龙',
                    explanation: '游戏中最强的怪物分类“古龙种”拥有改变天象等特殊能力。',
                    example: '炎王龙、钢龙、灭尽龙都是古龙',
                    animation: 'elder'
                },
                {
                    term: '二名',
                    explanation: '怪物猎人XX/GU中独有的类型, 拥有大量与原怪物的区别。',
                    example: '鏖魔角龙、青电主电龙',
                    animation: 'variant'
                },
                {
                    term: '亚种',
                    explanation: '与原种具有不同特征的变种怪物。',
                    example: '雷颚龙是蛮颚龙的亚种',
                    animation: 'subspecies'
                },
                {
                    term: '封面怪',
                    explanation: '作为游戏封面和宣传主打的标志性怪物。',
                    example: '世界的灭尽龙、崛起的怨虎龙',
                    animation: 'flagship'
                },
                {
                    term: '世界警察',
                    explanation: '一部分在几乎所有地区都会出现且频繁乱入到猎人与其他怪物的战斗中的大型非古龙怪物。',
                    example: '金狮子, 恐暴龙, 爆鳞龙等',
                    animation: 'move'
                }
            ]
        },
        {
            category: '游戏机制',
            terms: [
                {
                    term: '软化',
                    explanation: '冰原加入的机制, 使用爪攻击可软化怪物部位, 提高肉质和掉落素材。',
                    example: '开局先软化头部再输出',
                    animation: 'tenderize'
                },
                {
                    term: '御龙',
                    explanation: '崛起加入的机制, 可操控怪物攻击其他怪物。',
                    example: '御龙撞墙可造成大量伤害',
                    animation: 'ride'
                },
                {
                    term: '鬼火鸟',
                    explanation: '崛起中收集后可提升HP、耐力等属性的环境生物。',
                    example: '开局先吃鬼火鸟再战斗',
                    animation: 'bird'
                },
                {
                    term: '翔虫',
                    explanation: '崛起中的特殊机制, 使用翔虫可进行快速移动和发动铁虫丝技。',
                    example: '翔虫受身可以快速恢复战斗姿态',
                    animation: 'bug'
                },
                {
                    term: '环境互动',
                    explanation: '利用地图中的环境要素(落石、藤蔓等)辅助战斗。',
                    example: '引爆酸池可以造成大量伤害',
                    animation: 'environment'
                },
                {
                    term: '斩味',
                    explanation: '指武器的锋利度, 从低到高依次为红橙黄绿蓝白紫, 斩味越高则所拥有的伤害补正越高, 并越不容易弹刀, 可以对怪物造成更高的伤害, 需要磨刀来保持斩味。',
                    example: '怪物换区了, 可以趁机磨刀来保证战斗时可以造成最高伤害',
                    animation: 'move'
                }
            ]
        }
    ];

    // 过滤术语 - 现在同时考虑搜索词和选中的分类
    const filteredData = termsData
        .filter(category =>
            !activeCategory || category.category === activeCategory
        )
        .map(category => ({
            ...category,
            terms: category.terms.filter(term =>
                term.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
                term.explanation.toLowerCase().includes(searchTerm.toLowerCase())
            )
        }))
        .filter(category => category.terms.length > 0);

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

    // 清除筛选条件
    const clearFilters = () => {
        setActiveCategory(null);
        setSearchTerm('');
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
                    检索怪物猎人世界的专业术语和猎人黑话, 成为真正的老猎人！
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

                    {/* 显示当前筛选状态和清除按钮 */}
                    {(activeCategory || searchTerm) && (
                        <div className="mt-3 flex items-center justify-between">
                            <div className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                                当前筛选:
                                {activeCategory && <span className="ml-1 font-medium">{activeCategory}</span>}
                                {searchTerm && <span className="ml-1 font-medium">"{searchTerm}"</span>}
                            </div>
                            <button
                                onClick={clearFilters}
                                className={`text-sm px-3 py-1 rounded ${isDarkMode ? 'text-amber-400 hover:bg-gray-700' : 'text-amber-600 hover:bg-gray-100'}`}
                            >
                                清除筛选
                            </button>
                        </div>
                    )}
                </div>
            </motion.div>

            <div className="space-y-10">
                {filteredData.map((category) => (
                    <motion.div
                        key={category.category}
                        initial="hidden"
                        animate="visible"
                        variants={categoryVariants}
                    >
                        <motion.h2
                            className={`text-2xl font-bold mb-6 flex items-center gap-3 ${isDarkMode ? 'text-amber-400' : 'text-amber-600'}`}
                            whileHover={{ x: 5 }}
                        >
                            {categoryIcons[category.category as keyof CategoryIcons]}
                            {category.category}
                            <span className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                                ({category.terms.length}个术语)
                            </span>
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
                        尝试使用不同的关键词搜索, 或选择其他分类
                    </p>
                    <button
                        onClick={clearFilters}
                        className={`mt-4 px-4 py-2 rounded-lg ${isDarkMode ? 'bg-amber-600 hover:bg-amber-700' : 'bg-amber-500 hover:bg-amber-600'} text-white transition-colors`}
                    >
                        清除所有筛选条件
                    </button>
                </motion.div>
            )}

            <motion.footer
                className={`mt-16 py-6 border-t ${isDarkMode ? 'border-gray-800 text-gray-400' : 'border-gray-200 text-gray-500'} text-sm text-center`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
            >
                <p>数据基于《怪物猎人 世界:冰原》和《怪物猎人 崛起:曙光》</p>
                <p className="mt-1">术语解释可能有版本差异, 欢迎指正补充</p>
            </motion.footer>
        </div>
    );
};

export default GameTermsPage;