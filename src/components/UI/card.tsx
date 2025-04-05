// src/components/UI/card.tsx
import React from 'react';
import { cn } from './utils';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    isDarkMode?: boolean;
    className?: string;
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
    ({ className, isDarkMode, ...props }, ref) => {
        const baseClasses = 'rounded-lg border shadow-sm';
        const lightClasses = 'bg-white border-gray-200';
        const darkClasses = 'bg-gray-800 border-gray-700';

        return (
            <div
                ref={ref}
                className={cn(
                    baseClasses,
                    isDarkMode ? darkClasses : lightClasses,
                    className
                )}
                {...props}
            />
        );
    }
);

interface CardHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
    className?: string;
}

const CardHeader = React.forwardRef<HTMLDivElement, CardHeaderProps>(
    ({ className, ...props }, ref) => (
        <div
            ref={ref}
            className={cn('flex flex-col space-y-1.5 p-6', className)}
            {...props}
        />
    )
);

interface CardTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
    className?: string;
}

const CardTitle = React.forwardRef<HTMLParagraphElement, CardTitleProps>(
    ({ className, ...props }, ref) => (
        <h3
            ref={ref}
            className={cn(
                'text-2xl font-semibold leading-none tracking-tight',
                className
            )}
            {...props}
        />
    )
);

interface CardDescriptionProps extends React.HTMLAttributes<HTMLParagraphElement> {
    className?: string;
}

const CardDescription = React.forwardRef<HTMLParagraphElement, CardDescriptionProps>(
    ({ className, ...props }, ref) => (
        <p
            ref={ref}
            className={cn('text-sm text-muted-foreground', className)}
            {...props}
        />
    )
);

interface CardContentProps extends React.HTMLAttributes<HTMLDivElement> {
    className?: string;
}

const CardContent = React.forwardRef<HTMLDivElement, CardContentProps>(
    ({ className, ...props }, ref) => (
        <div ref={ref} className={cn('p-6 pt-0', className)} {...props} />
    )
);

interface CardFooterProps extends React.HTMLAttributes<HTMLDivElement> {
    className?: string;
}

const CardFooter = React.forwardRef<HTMLDivElement, CardFooterProps>(
    ({ className, ...props }, ref) => (
        <div
            ref={ref}
            className={cn('flex items-center p-6 pt-0', className)}
            {...props}
        />
    )
);

export {
    Card,
    CardHeader,
    CardFooter,
    CardTitle,
    CardDescription,
    CardContent,
};