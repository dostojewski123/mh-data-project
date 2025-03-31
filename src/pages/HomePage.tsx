import MhButton from '../components/UI/MhButton';
import { Sword, Skull } from 'lucide-react';

const HomePage = () => {
    return (
        <div className="min-h-screen p-6">
            <div className="max-w-6xl mx-auto">
                {/* 标题区 */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold mb-4">怪物猎人世界数据图鉴</h1>
                    <p className="text-lg opacity-90">猎人们的专属资料库</p>
                </div>

                {/* 功能卡片区 */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                    <div className="mh-card p-6">
                        <Skull className="w-10 h-10 text-rarity-6 mb-4 mx-auto" />
                        <h3 className="text-xl font-bold mb-3 text-center">怪物图鉴</h3>
                        <p className="mb-4 text-center">查看所有怪物属性和弱点</p>
                        <MhButton icon={<Skull className="w-4 h-4" />} className="mx-auto">
                            进入图鉴
                        </MhButton>
                    </div>

                    {/* 其他类似卡片... */}
                </div>

                {/* 搜索区 */}
                <div className="mh-card p-6 max-w-2xl mx-auto">
                    <h3 className="text-xl font-bold mb-4">武器数据查询</h3>
                    <div className="flex gap-3">
                        <input
                            type="text"
                            placeholder="输入武器名称..."
                            className="mh-input flex-1"
                        />
                        <MhButton icon={<Sword className="w-4 h-4" />}>
                            搜索
                        </MhButton>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePage;