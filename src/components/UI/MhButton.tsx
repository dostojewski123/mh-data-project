import React from 'react';
import useTheme from '@/hooks/useTheme';

interface MhButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
    icon?: React.ReactNode;
    className?: string;
    variant?: 'primary' | 'secondary' | 'ghost' | 'themeToggle';
}

const MhButton: React.FC<MhButtonProps> = ({
    children,
    onClick,
    icon,
    className = '',
    variant = 'primary'
}) => {
    const { theme, toggleTheme } = useTheme(); // 获取切换方法

    // 基础样式类
    const baseClasses = 'flex items-center justify-center gap-2 rounded-md font-mh-title font-bold tracking-wider transition-all transform hover:scale-105';

    // 变体样式
    const variantClasses = {
        primary: theme === 'dark'
            ? 'bg-gradient-to-b from-mh-primary to-yellow-700 text-mh-dark border-2 border-yellow-600 hover:border-yellow-400 shadow-mh-button'
            : 'bg-gradient-to-b from-yellow-600 to-yellow-800 text-white border-2 border-yellow-700 hover:border-yellow-600 shadow-md',
        secondary: theme === 'dark'
            ? 'bg-gray-700 text-mh-primary border border-mh-primary hover:bg-gray-600'
            : 'bg-gray-200 text-yellow-800 border border-yellow-700 hover:bg-gray-300',
        ghost: theme === 'dark'
            ? 'text-mh-primary hover:bg-gray-700/50'
            : 'text-yellow-800 hover:bg-gray-200/50',
        themeToggle: theme === 'dark'
            ? 'bg-yellow-100 text-gray-900 hover:bg-yellow-200 px-4 py-2'
            : 'bg-gray-800 text-yellow-300 hover:bg-gray-700 px-4 py-2'
    };

    // 处理主题切换按钮的特殊逻辑
    const handleClick = variant === 'themeToggle' ? toggleTheme : onClick;

    return (
        <button
            onClick={handleClick}
            className={`${baseClasses} ${variantClasses[variant]} ${className}`}
            aria-label={variant === 'themeToggle' ?
                (theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode') : undefined}
        >
            {icon && <span className="flex-shrink-0">{icon}</span>}
            <span>{children}</span>
        </button>
    );
};

export default MhButton;