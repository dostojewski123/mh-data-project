import React from 'react';
import { Search } from 'lucide-react';

interface SearchBarProps {
    isDarkMode: boolean;
}

const SearchBar: React.FC<SearchBarProps> = ({ isDarkMode }) => {
    return (
        <div className="relative">
            <input
                type="text"
                placeholder="搜索..."
                className={`${isDarkMode ? 'bg-gray-700' : 'bg-slate-700'
                    } text-white px-4 py-1 rounded-full w-64 focus:outline-none focus:ring-2 focus:ring-blue-400`}
            />
            <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
        </div>
    );
};

export default SearchBar;