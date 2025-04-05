import { useEffect, useState } from 'react';
import mhWorldBg from '../../assets/default/mh-world-bg.webp';
import mhRiseBg from '../../assets/default/mh-rise-bg.webp';
import mhWildsBg from '../../assets/default/mh-wilds-bg.webp';

interface WelcomeBannerProps {
    selectedGame: 'world' | 'rise' | 'wilds';
    isDarkMode?: boolean; // 添加这行
}

export default function WelcomeBanner({ selectedGame }: WelcomeBannerProps) {
    const [backgroundImage, setBackgroundImage] = useState(mhWorldBg);
    const [gameTitle, setGameTitle] = useState('世界');

    useEffect(() => {
        // 预加载图片的更优方式
        const img1 = new Image(); img1.src = mhWorldBg;
        const img2 = new Image(); img2.src = mhRiseBg;
        const img3 = new Image(); img3.src = mhWildsBg;

        switch (selectedGame) {
            case 'world':
                setBackgroundImage(mhWorldBg);
                setGameTitle('世界');
                break;
            case 'rise':
                setBackgroundImage(mhRiseBg);
                setGameTitle('崛起');
                break;
            case 'wilds':
                setBackgroundImage(mhWildsBg);
                setGameTitle('荒野');
                break;
            default:
                setBackgroundImage(mhWorldBg);
                setGameTitle('世界');
        }
    }, [selectedGame]);

    return (
        <div
            className="relative h-[500px] w-full overflow-hidden
                      transition-all duration-500 ease-in-out"
            style={{
                backgroundImage: `url(${backgroundImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
            }}
        >
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                <div className="text-center p-6 max-w-3xl font-kai">
                    <h1 className="text-4xl font-bold text-white/86 mb-4 font-kai">
                        欢迎来到{gameTitle}资料库！
                    </h1>
                    <p className="text-2xl text-white/80 leading-[5]">
                        侧边栏可切换游戏版本
                    </p>
                </div>
            </div>
        </div>
    );
}