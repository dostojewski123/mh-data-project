import React, { useEffect, useRef, useCallback } from 'react';
import '../../lightning.css';

interface Welcome1Props {
    isDarkMode: boolean;
}

const generateRandomLightningPath = (width: number, height: number) => {
    const paths = [];
    const mainPoints = [];
    let x = Math.random() * width;
    let y = 0;

    mainPoints.push({ x, y });

    const segments = 4 + Math.floor(Math.random() * 3); // 4-6 segments
    for (let i = 0; i < segments; i++) {
        x += (Math.random() - 0.5) * width * 0.4;
        y = (height / segments) * (i + 1) + (Math.random() - 0.5) * height * 0.3;
        mainPoints.push({ x, y });
    }

    // 主路径
    let mainD = `M ${mainPoints[0].x},${mainPoints[0].y}`;
    for (let i = 1; i < mainPoints.length; i++) {
        const midX = (mainPoints[i - 1].x + mainPoints[i].x) / 2;
        const midY = (mainPoints[i - 1].y + mainPoints[i].y) / 2;
        mainD += ` Q ${midX},${midY} ${mainPoints[i].x},${mainPoints[i].y}`;
    }
    paths.push(mainD);

    // 随机生成0-2条分叉
    const forkCount = Math.floor(Math.random() * 2);
    for (let f = 0; f < forkCount; f++) {
        const forkStart = Math.floor(Math.random() * (mainPoints.length - 2)) + 1;
        let forkX = mainPoints[forkStart].x;
        let forkY = mainPoints[forkStart].y;
        let forkD = `M ${forkX},${forkY}`;

        const forkSegments = 2 + Math.floor(Math.random() * 2);
        for (let i = 0; i < forkSegments; i++) {
            forkX += (Math.random() - 0.5) * width * 0.2;
            forkY += Math.random() * height * 0.3;
            forkD += ` L ${forkX},${forkY}`;
        }
        paths.push(forkD);
    }

    return paths;
};

const Welcome1: React.FC<Welcome1Props> = ({ isDarkMode }) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const lightningRefs = useRef<(SVGSVGElement | null)[]>([]);
    const animationFrameRef = useRef<number>();
    const timeoutRef = useRef<number>();

    const updateLightning = useCallback(() => {
        if (!containerRef.current) return;

        const { width, height } = containerRef.current.getBoundingClientRect();
        const activeCount = Math.floor(Math.random() * 4); // 0-3条活跃闪电

        lightningRefs.current.forEach((svg, index) => {
            if (!svg) return;

            if (index < activeCount) {
                const paths = generateRandomLightningPath(width, height);
                const pathElements = svg.querySelectorAll('.lightning-path');

                pathElements.forEach((path, pathIndex) => {
                    const svgPath = path as SVGPathElement;
                    if (pathIndex < paths.length) {
                        svgPath.setAttribute('d', paths[pathIndex]);
                        svgPath.style.strokeWidth = `${1 + Math.random()}`;
                        svgPath.style.opacity = `${0.6 + Math.random() * 0.4}`;
                    } else {
                        svgPath.setAttribute('d', '');
                    }
                });

                svg.style.setProperty('--random-delay', Math.random().toString());
                svg.style.animationDuration = `${0.5 + Math.random() * 0.8}s`;
                svg.style.display = 'block';
            } else {
                svg.style.display = 'none';
            }
        });
    }, []);

    useEffect(() => {
        const animate = () => {
            updateLightning();
            timeoutRef.current = setTimeout(() => {
                animationFrameRef.current = requestAnimationFrame(animate);
            }, 2000 + Math.random() * 3000); // 2-5秒随机间隔
        };

        animate();

        return () => {
            if (animationFrameRef.current) {
                cancelAnimationFrame(animationFrameRef.current);
            }
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }
        };
    }, [updateLightning]);

    return (
        <div className="relative h-64 md:h-40 w-full bg-cover bg-center overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center px-4 relative z-10">
                    <h1 className="text-4xl md:text-6xl font-bold mb-3 text-white">
                        <span className="lightning-container">
                            <span className="lightning-text text-transparent bg-clip-text bg-gradient-to-r from-mh-rising-sun to-yellow-200">
                                怪物猎人：荒野
                            </span>
                        </span>
                    </h1>
                    <p className={`text-xl md:text-2xl drop-shadow-lg ${isDarkMode ? 'text-gray-200' : 'text-gray-800'}`}>
                        <span className="lightning-container">
                            <span className={`${isDarkMode ? 'text-shadow-glow animate-glow-slow' : 'text-shadow-md'}`}>
                                鏖战荒原，猎驭自然
                            </span>
                        </span>
                    </p>
                </div>
            </div>
            <div ref={containerRef} className="absolute inset-0 overflow-hidden">
                {Array.from({ length: 4 }).map((_, index) => (
                    <div
                        key={index}
                        className="lightning-overlay lightning-yellow"
                        style={{
                            top: `${Math.random() * 20 - 10}%`,
                            left: `${Math.random() * 20 - 10}%`,
                        }}
                    >
                        <svg
                            ref={(el) => (lightningRefs.current[index] = el)}
                            width="100%"
                            height="100%"
                            preserveAspectRatio="none"
                            style={{ display: 'none' }}
                        >
                            <path className="lightning-path" />
                            <path className="lightning-path" />
                        </svg>
                    </div>
                ))}
                <div className="absolute top-0 left-0 w-full h-1 bg-yellow-400 opacity-120 animate-light-streak"></div>
                <div className="absolute top-[98%] left-0 w-full h-1 bg-orange-400 opacity-60 animate-light-streak-delay"></div>
            </div>
        </div>
    );
};

export default Welcome1;