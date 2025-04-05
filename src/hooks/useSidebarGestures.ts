import { useEffect, useRef } from 'react';

export const useSidebarGestures = (
    isOpen: boolean,
    isMobile: boolean,
    toggleSidebar: () => void,
    sidebarRef: React.RefObject<HTMLDivElement>
) => {
    const touchStartRef = useRef<{ x: number; y: number; time: number } | null>(null);
    const touchThreshold = useRef(50);
    const isAnimating = useRef(false);
    const horizontalSwipeRatio = useRef(2);

    const handleTouchStart = (e: React.TouchEvent) => {
        const target = e.target as HTMLElement;
        if (target.tagName === 'BUTTON' || target.closest('button')) {
            return;
        }

        touchStartRef.current = {
            x: e.touches[0].clientX,
            y: e.touches[0].clientY,
            time: Date.now()
        };
    };

    const handleTouchMove = (e: React.TouchEvent) => {
        if (!touchStartRef.current || isAnimating.current) return;

        const touchX = e.touches[0].clientX;
        const touchY = e.touches[0].clientY;
        const deltaX = touchX - touchStartRef.current.x;
        const deltaY = touchY - touchStartRef.current.y;

        if (Math.abs(deltaY) > Math.abs(deltaX)) {
            touchStartRef.current = null;
            return;
        }

        if (!isOpen && deltaX > touchThreshold.current) {
            isAnimating.current = true;
            toggleSidebar();
            setTimeout(() => isAnimating.current = false, 300);
            touchStartRef.current = null;
            return;
        }

        if (isOpen && deltaX < -touchThreshold.current) {
            isAnimating.current = true;
            toggleSidebar();
            setTimeout(() => isAnimating.current = false, 300);
            touchStartRef.current = null;
        }
    };

    const handleTouchEnd = () => {
        touchStartRef.current = null;
    };

    const handleImmediateToggle = (e?: React.MouseEvent | React.TouchEvent) => {
        if (e) {
            e.preventDefault();
            e.stopPropagation();
        }
        if (!isAnimating.current) {
            toggleSidebar();
        }
    };

    // 全局滑动检测
    useEffect(() => {
        if (!isMobile) return;

        let startX = 0;
        let startY = 0;
        let startTime = 0;
        let isSwiping = false;

        const handleTouchStart = (e: TouchEvent) => {
            if (isAnimating.current) return;
            startX = e.touches[0].clientX;
            startY = e.touches[0].clientY;
            startTime = Date.now();
            isSwiping = true;
        };

        const handleTouchMove = (e: TouchEvent) => {
            if (!isSwiping || isAnimating.current) return;

            const currentX = e.touches[0].clientX;
            const currentY = e.touches[0].clientY;
            const deltaX = currentX - startX;
            const deltaY = currentY - startY;

            if (Math.abs(deltaY) > Math.abs(deltaX)) {
                isSwiping = false;
                return;
            }

            if (!isOpen && deltaX > 0 && sidebarRef.current) {
                sidebarRef.current.style.transition = 'none';
                sidebarRef.current.style.transform = `translateX(${-200 + Math.min(deltaX, 200)}px)`;
            } else if (isOpen && deltaX < 0 && sidebarRef.current) {
                sidebarRef.current.style.transition = 'none';
                sidebarRef.current.style.transform = `translateX(${Math.max(deltaX, -200)}px)`;
            }
        };

        const handleTouchEnd = (e: TouchEvent) => {
            if (!isSwiping || isAnimating.current) {
                isSwiping = false;
                return;
            }

            const endX = e.changedTouches[0].clientX;
            const endY = e.changedTouches[0].clientY;
            const deltaX = endX - startX;
            const deltaY = endY - startY;
            const deltaTime = Date.now() - startTime;

            if (sidebarRef.current) {
                sidebarRef.current.style.transition = '';
                sidebarRef.current.style.transform = '';
            }

            if (Math.abs(deltaY) > Math.abs(deltaX) / horizontalSwipeRatio.current) {
                isSwiping = false;
                return;
            }

            if ((!isOpen && (deltaX > touchThreshold.current || (deltaTime < 300 && deltaX > 50))) ||
                (isOpen && (deltaX < -touchThreshold.current || (deltaTime < 300 && deltaX < -50)))) {
                isAnimating.current = true;
                toggleSidebar();
                setTimeout(() => isAnimating.current = false, 300);
            }

            isSwiping = false;
        };

        const options = { passive: false };
        document.addEventListener('touchstart', handleTouchStart, options);
        document.addEventListener('touchmove', handleTouchMove, options);
        document.addEventListener('touchend', handleTouchEnd, options);

        return () => {
            document.removeEventListener('touchstart', handleTouchStart);
            document.removeEventListener('touchmove', handleTouchMove);
            document.removeEventListener('touchend', handleTouchEnd);
        };
    }, [isOpen, isMobile, toggleSidebar]);

    return {
        handleTouchStart,
        handleTouchMove,
        handleTouchEnd,
        handleImmediateToggle
    };
};