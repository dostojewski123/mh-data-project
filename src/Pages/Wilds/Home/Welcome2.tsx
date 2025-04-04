import React from 'react';

interface Welcome2Props {
    isDarkMode: boolean;
}

const Welcome2: React.FC<Welcome2Props> = ({ isDarkMode }) => {
    return (
        <div className="relative w-full overflow-hidden mb-8">
            <div className="p-6 md:p-8">
                <h2 className={`text-2xl md:text-3xl font-bold mb-4 ${isDarkMode ? 'text-yellow-400' : 'text-[#2a475e]'}`}>
                    欢迎来到天堑沙原！
                </h2>
                <div className={`text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    <p>这里是《怪物猎人：荒野》的详细数据资料站。</p>

                    <p className="indent-9 mt-4">我们开发这个网站的目的是希望：</p>

                    <ul className="list-disc list-inside pl-2 space-y-2 mt-2">
                        <li>补齐在怪猎WIKI中<span className={isDarkMode ? 'text-yellow-300' : 'text-blue-800'}>没有收录的数据</span>，并提供更直观的数据可视化;</li>
                        <li>寻找<span className={isDarkMode ? 'text-yellow-300' : 'text-blue-800'}>更加底层的数据</span>为深度玩家提供支持，进而建立中文社区最完整的怪物猎人资料库;</li>
                    </ul>
                </div>
            </div>
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-[98%] left-0 w-full h-1 bg-orange-200 opacity-50 animate-light-streak-delay-delay"></div>
            </div>
        </div>
    );
};

export default Welcome2;