import React, { useState, useRef, useEffect } from 'react';
import { BookOpen, MessageSquare, Clock, ChevronDown, ChevronUp } from 'lucide-react';

interface SiteLinksMenuProps {
    isDarkMode: boolean;
    showTitle?: boolean;
}

const SiteLinksMenu: React.FC<SiteLinksMenuProps> = ({ isDarkMode, showTitle = true }) => {
    // 默认所有部分都展开
    const [expandedSections, setExpandedSections] = useState({
        announcement: false,
        feedback: false,
        changelog: false
    });

    const contentRefs = {
        announcement: useRef<HTMLDivElement>(null),
        feedback: useRef<HTMLDivElement>(null),
        changelog: useRef<HTMLDivElement>(null)
    };

    const [contentHeights, setContentHeights] = useState({
        announcement: 'auto',
        feedback: 'auto',
        changelog: 'auto'
    });

    // 网站公告内容
    const announcements = [
        "2025-3-30：网站初版上线",
        "2025-3-30：数据筹备中",
        "2025-3-30：确定布局架构"
    ];

    // 更新日志内容
    const changelog = [
        "v1.0.0 - 重构全部代码以适应更好的扩展",
        "v0.0.9 - 追加侧边栏快捷链接模块",
        "v0.0.8 - 追加崛起和荒野的相关图例",
        "v0.0.7 - 追加侧边栏特殊数据查询入口",
        "v0.0.6 - 追加侧边栏快捷工具入口",
        "v0.0.5 - 完成移动端适配",
        "v0.0.4 - 优化侧边栏效果",
        "v0.0.3 - 添加主题黑暗与光明",
        "v0.0.2 - 添加图片展示",
        "v0.0.1 - 增加怪物猎人世界等三个主要板块"
    ];

    // 网站信息内容
    const siteInfo = [
        "数据来源：官方设定集及玩家实测",
        "维护团队：待定",
        "联系方式：待定"
    ];

    const toggleSection = (section: keyof typeof expandedSections) => {
        setExpandedSections(prev => ({
            ...prev,
            [section]: !prev[section]
        }));
    };

    // 计算内容高度
    useEffect(() => {
        const updateHeights = () => {
            setContentHeights({
                announcement: expandedSections.announcement
                    ? `${contentRefs.announcement.current?.scrollHeight}px`
                    : '0px',
                feedback: expandedSections.feedback
                    ? `${contentRefs.feedback.current?.scrollHeight}px`
                    : '0px',
                changelog: expandedSections.changelog
                    ? `${contentRefs.changelog.current?.scrollHeight}px`
                    : '0px'
            });
        };

        updateHeights();
        window.addEventListener('resize', updateHeights);
        return () => window.removeEventListener('resize', updateHeights);
    }, [expandedSections]);

    return (
        <div className="mb-6">
            {showTitle && <h3 className="text-sm font-semibold text-gray-500 uppercase">网站信息</h3>}
            <div className="mt-2 space-y-2">
                {/* 网站公告 */}
                <div>
                    <button
                        onClick={() => toggleSection('announcement')}
                        className={`w-full text-left px-4 py-2 rounded-lg flex items-center justify-between ${isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'
                            } transition-colors`}
                    >
                        <div className="flex items-center gap-2">
                            <BookOpen className="w-4 h-4" />
                            <span>网站公告</span>
                        </div>
                        {expandedSections.announcement ? (
                            <ChevronUp className="w-4 h-4 transition-transform " />
                        ) : (
                            <ChevronDown className="w-4 h-4 transition-transform" />
                        )}
                    </button>
                    <div
                        ref={contentRefs.announcement}
                        className={`overflow-hidden transition-all duration-300 ease-in-out ${isDarkMode ? 'bg-gray-700/50' : 'bg-gray-100'
                            } rounded-lg -ml-6`}
                        style={{ height: contentHeights.announcement }}
                    >
                        <div className="pl-8 pr-4 py-2">
                            <ul className="space-y-1 text-sm">
                                {announcements.map((item, index) => (
                                    <li key={index} className="list-disc list-inside">
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                {/* 反馈与建议 */}
                <div>
                    <button
                        onClick={() => toggleSection('feedback')}
                        className={`w-full text-left px-4 py-2 rounded-lg flex items-center justify-between ${isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'
                            } transition-colors`}
                    >
                        <div className="flex items-center gap-2">
                            <MessageSquare className="w-4 h-4" />
                            <span>反馈与建议</span>
                        </div>
                        {expandedSections.feedback ? (
                            <ChevronUp className="w-4 h-4 transition-transform" />
                        ) : (
                            <ChevronDown className="w-4 h-4 transition-transform" />
                        )}
                    </button>
                    <div
                        ref={contentRefs.feedback}
                        className={`overflow-hidden transition-all duration-300 ease-in-out ${isDarkMode ? 'bg-gray-700/50' : 'bg-gray-100'
                            } rounded-lg -ml-6`}
                        style={{ height: contentHeights.feedback }}
                    >
                        <div className="pl-8 pr-4 py-2">
                            <p className="text-sm mb-2">欢迎提供宝贵意见：</p>
                            <ul className="space-y-1 text-sm">
                                {siteInfo.map((item, index) => (
                                    <li key={index} className="list-disc list-inside">
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                {/* 更新日志 */}
                <div>
                    <button
                        onClick={() => toggleSection('changelog')}
                        className={`w-full text-left px-4 py-2 rounded-lg flex items-center justify-between ${isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'
                            } transition-colors`}
                    >
                        <div className="flex items-center gap-2">
                            <Clock className="w-4 h-4" />
                            <span>更新日志</span>
                        </div>
                        {expandedSections.changelog ? (
                            <ChevronUp className="w-4 h-4 transition-transform" />
                        ) : (
                            <ChevronDown className="w-4 h-4 transition-transform" />
                        )}
                    </button>
                    <div
                        ref={contentRefs.changelog}
                        className={`overflow-hidden transition-all duration-300 ease-in-out ${isDarkMode ? 'bg-gray-700/50' : 'bg-gray-100'
                            } rounded-lg -ml-6`}
                        style={{ height: contentHeights.changelog }}
                    >
                        <div className="pl-8 pr-4 py-2">
                            <ul className="space-y-1 text-sm">
                                {changelog.map((item, index) => (
                                    <li key={index} className="list-disc list-inside">
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SiteLinksMenu;