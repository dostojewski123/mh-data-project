import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiAlertOctagon, FiCalendar } from 'react-icons/fi';

interface LatestUpdatesProps {
    isDarkMode: boolean;
}

const LatestUpdates: React.FC<LatestUpdatesProps> = ({ isDarkMode }) => {
    const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

    const updates = [
        {
            title: "网站正式版1.0.0上线",
            date: "2025-4-1",
            description: "基础模块规划与架构搭建，前端代码将在之后开源。"
        },
        {
            title: "荒野动作值板块构建",
            date: "2025-4-5",
            description: "荒野动作值板块构建。"
        }
    ];

    return (
        <motion.div
            className={`rounded-xl p-6 ${isDarkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg border ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
        >
            <div className="flex items-center mb-6">
                <FiAlertOctagon className={`text-2xl mr-3 ${isDarkMode ? 'text-yellow-400' : 'text-[#2a475e]'}`} />
                <h2 className={`text-xl font-bold ${isDarkMode ? 'text-yellow-400' : 'text-[#2a475e]'}`}>最新更新</h2>
            </div>

            <div className="space-y-3">
                {updates.map((update, index) => (
                    <motion.div
                        key={index}
                        className={`rounded-lg p-4 cursor-pointer transition-all ${isDarkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-100 hover:bg-gray-200'}`}
                        whileHover={{ scale: 1.02 }}
                        onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                    >
                        <div className="flex items-center">
                            <div className={`w-2 h-2 rounded-full mr-3 ${isDarkMode ? 'bg-yellow-400' : 'bg-[#2a475e]'}`}></div>
                            <div className="flex-grow">
                                <h3 className={`font-bold ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
                                    {update.title}
                                </h3>
                                <div className={`flex items-center text-sm mt-1 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                                    <FiCalendar className="mr-1" />
                                    {update.date}
                                </div>
                            </div>
                        </div>

                        {expandedIndex === index && (
                            <motion.p
                                className={`mt-3 pl-5 text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                            >
                                {update.description}
                            </motion.p>
                        )}
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
};

export default LatestUpdates;