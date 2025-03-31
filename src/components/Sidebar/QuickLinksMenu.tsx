interface QuickLinksMenuProps {
    isDarkMode: boolean;
}

const QuickLinksMenu: React.FC<QuickLinksMenuProps> = ({
    isDarkMode
}) => {
    const links = [
        { name: '怪猎Wiki', url: 'https://monsterhunter.fandom.com/wiki', icon: '🌐' },
        { name: '怪猎Wiki中文站', url: 'https://mhw.huijiwiki.com', icon: '🀄' },
        { name: 'Kiranico', url: 'https://mhworld.kiranico.com', icon: '📊' },
        { name: '游民星空', url: 'https://www.gamersky.com', icon: '🌟' }
    ];

    return (
        <div className="-ml-2">  {/* 移除了 p-4，让间距由上级控制 */}
            <ul className="space-y-1">  {/* 从 space-y-2 改为 space-y-1 减少链接间行距 */}
                {links.map((link, index) => (
                    <li key={index}>
                        <a
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`w-full text-left pl-2 py-2 rounded-lg flex items-center gap-3 ${isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'
                                } transition-colors`}
                        >
                            <span className="text-lg w-6 text-center ml-1">{link.icon}</span>
                            <span className="flex-1 ml-1">{link.name}</span>
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default QuickLinksMenu;