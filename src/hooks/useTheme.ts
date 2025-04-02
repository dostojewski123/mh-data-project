import { useState, useEffect } from 'react';

const useTheme = () => {
    const [theme, setTheme] = useState<'dark' | 'light'>(() => {
        // 1. 服务器端渲染时直接返回dark
        if (typeof window === 'undefined') return 'dark';

        // 2. 检查本地存储
        if (localStorage.theme === 'dark' || localStorage.theme === 'light') {
            return localStorage.theme;
        }

        // 3. 强制默认dark模式（修改关键点）
        return 'dark';

        // 原系统偏好检测已移除（如需要保留见下方替代方案）
    });

    const toggleTheme = () => {
        setTheme(prev => prev === 'dark' ? 'light' : 'dark');
    };

    useEffect(() => {
        const root = document.documentElement;

        // 清除所有可能冲突的类
        root.classList.remove('light', 'light-theme', 'dark');

        // 应用当前主题类
        const themeClass = theme === 'dark' ? 'dark' : 'light-theme';
        root.classList.add(themeClass);

        // 更新本地存储
        localStorage.theme = theme;

        // 调试日志（生产环境可移除）
        console.log('[Theme] Applied:', themeClass);
    }, [theme]);

    return {
        isDarkMode: theme === 'dark',
        theme,
        toggleTheme
    };
};

export default useTheme;