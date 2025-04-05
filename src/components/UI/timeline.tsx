// src/components/ui/timeline.tsx
import React from 'react';

interface TimelineProps {
    children: React.ReactNode;
}

export const Timeline: React.FC<TimelineProps> = ({ children }) => {
    return <div className="space-y-8">{children}</div>;
};

interface TimelineItemProps {
    children: React.ReactNode;
    side: 'left' | 'right';
    isDarkMode: boolean;
}

export const TimelineItem: React.FC<TimelineItemProps> = ({ children, side, isDarkMode }) => {
    return (
        <div className={`relative pl-8 md:pl-0 ${side === 'left' ? 'md:pr-8 md:text-right' : 'md:pl-8'}`}>
            <div className={`absolute top-4 -left-1 w-3 h-3 rounded-full ${isDarkMode ? 'bg-purple-400' : 'bg-purple-600'}`}></div>
            <div className={`md:max-w-[45%] ${side === 'left' ? 'md:mr-auto' : 'md:ml-auto'}`}>
                {children}
            </div>
        </div>
    );
};