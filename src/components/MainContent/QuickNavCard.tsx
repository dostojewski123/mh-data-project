import React from 'react';
import { ChevronRight } from 'lucide-react';

interface QuickNavCardProps {
    icon: React.ReactNode;
    title: string;
    image: string;
    description: string;
    onClick: () => void;
    isDarkMode: boolean;
}

const QuickNavCard: React.FC<QuickNavCardProps> = ({
    icon,
    title,
    image,
    description,
    onClick,
    isDarkMode
}) => {
    return (
        <div
            className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-md p-4 md:p-6 hover:shadow-lg transition-shadow cursor-pointer`}
            onClick={onClick}
        >
            <div className="flex items-center gap-3 mb-4">
                {icon}
                <h2 className={`text-lg md:text-xl font-bold ${isDarkMode ? 'text-white' : 'text-[#2a475e]'}`}>
                    {title}
                </h2>
            </div>
            <img
                src={image}
                alt={title}
                className="w-full h-32 md:h-40 object-cover rounded-lg mb-4"
            />
            <div className="flex justify-between items-center">
                <span className={`text-sm md:text-base ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    {description}
                </span>
                <ChevronRight className={`w-5 h-5 ${isDarkMode ? 'text-gray-400' : 'text-gray-400'}`} />
            </div>
        </div>
    );
};

export default QuickNavCard;