import React from 'react';

interface FooterProps {
    isDarkMode: boolean;
}

const Footer: React.FC<FooterProps> = ({ isDarkMode }) => {
    return (
        <footer className={`${isDarkMode ? 'bg-gray-800' : 'bg-[#2a475e]'} text-white py-6`}>
            <div className="container mx-auto px-4 text-center">
                <p>Monster Hunter 猎人工坊数据资料库 © {new Date().getFullYear()}</p>
                <p className="text-sm text-slate-400 mt-2">本站内容仅供参考，著作权归CAPCOM所有</p>
                <div className="flex justify-center gap-4 mt-4">
                    <a
                        href="#"
                        className={`text-sm ${isDarkMode ? 'text-blue-300 hover:text-blue-200' : 'text-blue-200 hover:text-blue-100'} transition-colors`}
                    >
                        关于我们
                    </a>
                    <a
                        href="#"
                        className={`text-sm ${isDarkMode ? 'text-blue-300 hover:text-blue-200' : 'text-blue-200 hover:text-blue-100'} transition-colors`}
                    >
                        隐私政策
                    </a>
                    <a
                        href="#"
                        className={`text-sm ${isDarkMode ? 'text-blue-300 hover:text-blue-200' : 'text-blue-200 hover:text-blue-100'} transition-colors`}
                    >
                        使用条款
                    </a>
                    <a
                        href="#"
                        className={`text-sm ${isDarkMode ? 'text-blue-300 hover:text-blue-200' : 'text-blue-200 hover:text-blue-100'} transition-colors`}
                    >
                        联系我们
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;