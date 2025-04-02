import React from 'react';
import { X } from 'lucide-react';

interface CatalogModalProps {
    isDarkMode: boolean;
    content: any;
    onClose: () => void;
}

const CatalogModal: React.FC<CatalogModalProps> = ({ isDarkMode, content, onClose }) => {
    return (
        <div className={`fixed inset-0 z-50 ${isDarkMode ? 'bg-gray-900/95' : 'bg-white/95'} overflow-y-auto`}>
            <div className="container mx-auto px-4 py-8">
                <div className="flex justify-between items-center mb-6">
                    <h2 className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
                        {content.title}
                    </h2>
                    <button
                        onClick={onClose}
                        className={`p-2 rounded-full ${isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'}`}
                    >
                        <X className="w-6 h-6" />
                    </button>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {content.list.map((item: any, index: number) => (
                        <div
                            key={index}
                            className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow`}
                        >
                            <img
                                src={item.image}
                                alt={item.name}
                                className="w-full h-48 object-cover rounded-lg mb-4"
                            />
                            <h3 className={`text-lg font-semibold ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
                                {item.name}
                            </h3>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CatalogModal;