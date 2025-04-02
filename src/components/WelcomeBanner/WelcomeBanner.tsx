import { useEffect, useState } from 'react';
import mhWorldBg from '../../images/mh-world-bg.webp';
import mhRiseBg from '../../images/mh-rise-bg.webp';
import mhWildsBg from '../../images/mh-wilds-bg.webp';

interface WelcomeBannerProps {
    selectedGame: 'world' | 'rise' | 'wilds';
}

export default function WelcomeBanner({ selectedGame }: WelcomeBannerProps) {
    const [backgroundImage, setBackgroundImage] = useState(mhWorldBg);

    // 预加载所有背景图
    useEffect(() => {
        // 动态创建 <link> 标签进行预加载
        const preloadImages = [mhWorldBg, mhRiseBg, mhWildsBg];
        preloadImages.forEach((src) => {
            const link = document.createElement('link');
            link.rel = 'preload';
            link.as = 'image';
            link.href = src;
            document.head.appendChild(link);
        });

        // 根据 selectedGame 更新背景图
        switch (selectedGame) {
            case 'world':
                setBackgroundImage(mhWorldBg);
                break;
            case 'rise':
                setBackgroundImage(mhRiseBg);
                break;
            case 'wilds':
                setBackgroundImage(mhWildsBg);
                break;
            default:
                setBackgroundImage(mhWorldBg);
        }

        // 清理函数（可选，避免内存泄漏）
        return () => {
            preloadImages.forEach((src) => {
                const link = document.querySelector(`link[href="${src}"]`);
                if (link) document.head.removeChild(link);
            });
        };
    }, [selectedGame]);

    return (
        <div
            className="relative h-[500px] w-full overflow-hidden banner-transition mt-16"
            style={{
                backgroundImage: `url(${backgroundImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                <div className="text-center p-6 max-w-3xl">
                    <h1 className="text-4xl font-bold text-white/86 mb-4">欢迎来到怪物猎人资料库！</h1>
                    <p className="text-2xl text-white/80 leading-[5]">
                        侧边栏可切换游戏版本
                    </p>
                </div>
            </div>
        </div>
    );
}