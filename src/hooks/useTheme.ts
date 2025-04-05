const applyTheme = (theme: 'dark' | 'light') => {
    const root = document.documentElement;
    root.classList.remove('light', 'light-theme', 'dark');
    const themeClass = theme === 'dark' ? 'dark' : 'light-theme';
    root.classList.add(themeClass);
    localStorage.theme = theme;
    console.log('[Theme] Applied:', themeClass);
};

export default applyTheme;