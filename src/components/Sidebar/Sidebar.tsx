import React, { useEffect, useRef, useState } from 'react';
import { X, Newspaper, Gamepad2, AlertCircle, Globe } from 'lucide-react';
import GameVersionMenu from './GameVersionMenu';
import OfficialNewsMenu from './OfficialNewsMenu';
import QuickToolsMenu from './QuickToolsMenu';
import DataQueryMenu from './DataQueryMenu';
import QuickLinksMenu from './QuickLinksMenu';
import SiteLinksMenu from './SiteLinksMenu';

interface SidebarProps {
    isDarkMode: boolean;
    isOpen: boolean;
    selectedGame: 'world' | 'rise' | 'wilds';
    setSelectedGame: (game: 'world' | 'rise' | 'wilds') => void;
    toggleSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({
    isDarkMode,
    isOpen,
    selectedGame,
    setSelectedGame,
    toggleSidebar
}) => {
    const sidebarRef = useRef<HTMLDivElement>(null);
    const overlayRef = useRef<HTMLDivElement>(null);
    const touchStartRef = useRef<{ x: number; y: number } | null>(null);
    const lastTapRef = useRef(0);
    const [showModal, setShowModal] = useState(false);

    const handleTouchStart = (e: React.TouchEvent) => {
        touchStartRef.current = {
            x: e.touches[0].clientX,
            y: e.touches[0].clientY
        };
    };

    const handleTouchMove = (e: React.TouchEvent) => {
        if (!touchStartRef.current || !sidebarRef.current) return;

        const touchX = e.touches[0].clientX;
        const touchY = e.touches[0].clientY;
        const deltaX = touchX - touchStartRef.current.x;
        const deltaY = touchY - touchStartRef.current.y;

        if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaY) < 50) {
            if (deltaX < -30 && isOpen) {
                toggleSidebar();
            }
        }
    };

    const handleImmediateToggle = () => {
        const now = Date.now();
        if (now - lastTapRef.current > 300) {
            toggleSidebar();
            lastTapRef.current = now;
        }
    };

    const handleOverlayClick = (e: React.MouseEvent) => {
        // 确保点击的是覆盖层本身，而不是它的子元素
        if (e.target === overlayRef.current) {
            handleImmediateToggle();
        }
    };

    useEffect(() => {
        const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

        if (isOpen && isMobile) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }

        return () => {
            document.body.style.overflow = '';
        };
    }, [isOpen]);

    return (
        <>
            <aside
                ref={sidebarRef}
                className={`fixed md:sticky z-40
                    ${isDarkMode ? 'bg-mh-dark' : 'bg-[#F0E6D2]'}
                    border-r ${isDarkMode ? 'border-gray-800' : 'border-gray-200'}
                    transition-transform duration-300 ease-in-out
                    md:translate-x-0 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}
                style={{
                    width: '12rem',
                    top: '3rem',
                    bottom: 0,
                }}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
            >
                <nav className={`h-full flex flex-col ${isDarkMode ? 'text-gray-100' : 'text-gray-800'}`}>
                    <div className={`ml-4 mr-4 md:hidden flex items-center justify-between p-2
                        ${isDarkMode ? 'bg-mh-dark border-b border-gray-500' : 'bg-[#F0E6D2] border-b border-gray-100'}`}>
                        <h3 className={`text-base font-semibold ${isDarkMode ? 'text-gray-100' : 'text-gray-800'}`}>
                            菜单
                        </h3>
                        <button
                            onClick={handleImmediateToggle}
                            className={`p-2 rounded-full ${isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'}`}
                            style={{
                                minWidth: '44px',
                                minHeight: '44px'
                            }}
                        >
                            <X className={`ml-2 w-5 h-6 ${isDarkMode ? 'text-gray-100' : 'text-gray-800'}`} />
                        </button>
                    </div>

                    <div className=" flex-1 overflow-y-auto">
                        <div className="p-4">
                            <div className={`pt-2 ${isDarkMode ? 'border-b border-gray-500' : 'border-b border-gray-500'}`}>
                                <h3 className={`flex items-center gap-2 mb-0 text-base font-semibold ${isDarkMode ? 'text-gray-100' : 'text-gray-800'}`}>
                                    <Gamepad2 className={`w-5 h-5 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`} />
                                    <span>游戏版本</span>
                                </h3>
                                <GameVersionMenu
                                    isDarkMode={isDarkMode}
                                    selectedGame={selectedGame}
                                    setSelectedGame={setSelectedGame}
                                    showTitle={false}
                                    toggleSidebar={handleImmediateToggle}
                                />
                            </div>


                            {/* 2. 官方公告  */}
                            <div className={`pt-6 pb-2 ${isDarkMode ? 'border-b border-gray-500' : 'border-b border-gray-200'}`}>
                                <h3 className={`flex items-center gap-2 mb-3 text-base font-semibold ${isDarkMode ? 'text-gray-100' : 'text-gray-800'}`}>
                                    <Newspaper className={`w-5 h-5 ${isDarkMode ? 'text-amber-400' : 'text-amber-600'}`} />
                                    <span>官方公告</span>
                                </h3>
                                <OfficialNewsMenu
                                    isDarkMode={isDarkMode}
                                    showTitle={false}
                                    toggleSidebar={handleImmediateToggle}
                                />
                            </div>

                            {/* 3. 快捷工具 */}
                            <div className={`pb-2 ${isDarkMode ? 'border-b border-gray-500' : 'border-b border-gray-200'}`}>
                                <QuickToolsMenu
                                    isDarkMode={isDarkMode}
                                    onToolClick={(toolName) => {
                                        // 只有没有path的工具才会触发弹窗
                                        if (toolName !== '游戏术语大全') {
                                            setShowModal(true);
                                        }
                                    }}
                                />
                            </div>

                            {/* 4. 新增-特殊数据查询 */}
                            <div className={`pt-4 pb-2 ${isDarkMode ? 'border-b border-gray-500' : 'border-b border-gray-200'}`}>
                                <DataQueryMenu
                                    isDarkMode={isDarkMode}
                                    onQueryClick={() => setShowModal(true)}
                                />
                            </div>

                            {/* 5. 快捷链接 */}
                            <div className={`pt-8 pb-2 ${isDarkMode ? 'border-b border-gray-500' : 'border-b border-gray-200'}`}>
                                <h3 className={`flex items-center gap-2 mb-3 text-base font-semibold ${isDarkMode ? 'text-gray-100' : 'text-gray-800'}`}>
                                    <span className="text-xl">🔗</span>
                                    <span>快捷链接</span>
                                </h3>
                                <QuickLinksMenu
                                    isDarkMode={isDarkMode}
                                />
                            </div>

                            {/* 6. 网站信息 */}
                            <div className={`pt-8 pb-2 ${isDarkMode ? 'border-b border-gray-500' : 'border-b border-gray-200'}`}>
                                <h3 className={`flex items-center gap-2 mb-3 text-base font-semibold ${isDarkMode ? 'text-gray-100' : 'text-gray-800'}`}>
                                    <Globe className={`w-5 h-5 ${isDarkMode ? 'text-green-400' : 'text-green-600'}`} />
                                    <span>网站信息</span>
                                </h3>
                                <SiteLinksMenu
                                    isDarkMode={isDarkMode}
                                    showTitle={false}
                                />
                            </div>

                        </div>
                    </div>
                </nav>
            </aside>

            {isOpen && (
                <div
                    ref={overlayRef}
                    className="fixed inset-0 bg-black/50 z-30 md:hidden"
                    onClick={handleOverlayClick}
                />
            )}

            {/* 全局弹窗 */}
            {showModal && (
                <div
                    className="fixed inset-0 flex items-center justify-center z-[999]"
                    onClick={() => setShowModal(false)}
                >
                    <div
                        className={`relative p-6 rounded-lg max-w-md w-full mx-4 ${isDarkMode ? 'bg-gray-800 border-amber-500' : 'bg-white border-amber-400'
                            } border-2 shadow-xl`}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            onClick={() => setShowModal(false)}
                            className="absolute top-3 right-3 p-1 rounded-full hover:bg-opacity-20 hover:bg-gray-500 transition-colors"
                        >
                            <X className={`w-6 h-6 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`} />
                        </button>
                        <div className="flex flex-col items-center text-center pt-2">
                            <AlertCircle className={`w-12 h-12 mb-4 ${isDarkMode ? 'text-amber-400' : 'text-amber-600'
                                }`} />
                            <h3 className={`text-xl font-semibold mb-2 ${isDarkMode ? 'text-gray-100' : 'text-gray-800'
                                }`}>
                                功能开发中
                            </h3>
                            <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'
                                }`}>
                                该功能正在全力开发中，敬请期待！
                            </p>
                        </div>
                    </div>
                </div>
            )}

        </>
    );
};

export default Sidebar;