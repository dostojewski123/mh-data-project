import React from 'react';
import { Sword, Sun, Moon, Menu } from 'lucide-react';

interface HeaderProps {
    isDarkMode: boolean;
    toggleDarkMode: () => void;
    toggleSidebar: () => void;
}

const Header: React.FC<HeaderProps> = ({
    isDarkMode,
    toggleDarkMode,
    toggleSidebar
}) => {
    return (
        <header className="bg-mh-dark border-b border-mh-primary fixed top-0 left-0 right-0 z-50 h-12">
            <div className="container mx-auto px-4 h-full">
                <div className="flex items-center justify-between h-full">
                    <div className="flex items-center gap-3">
                        {/* 菜单按钮 - 始终显示 */}
                        <button
                            onClick={toggleSidebar}
                            className="p-1 rounded-md hover:bg-mh-primary hover:bg-opacity-20 transition-colors"
                            aria-label="Toggle sidebar"
                        >
                            <Menu className="w-6 h-6 text-mh-primary" />
                        </button>

                        {/* Logo部分 */}
                        <Sword className="w-6 h-6 text-mh-primary hidden md:block" />
                        <span className="px-2 text-xl font-mh-title text-mh-primary tracking-wider">
                            猎人工坊
                        </span>
                    </div>

                    {/* 黑暗模式切换按钮 */}
                    <button
                        onClick={toggleDarkMode}
                        className="mh-button flex items-center gap-2 text-sm"
                    >
                        {isDarkMode ? (
                            <>
                                <Sun className="w-4 h-4" /> 切换至光明
                            </>
                        ) : (
                            <>
                                <Moon className="w-4 h-4" /> 切换至黑暗
                            </>
                        )}
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;