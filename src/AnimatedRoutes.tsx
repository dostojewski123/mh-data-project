import { useEffect, lazy, Suspense } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

// 一级页面（保持直接导入或也可以懒加载）
import WorldHome from './Pages/World/Home/Home';
import RiseHome from './Pages/Rise/Home/Home';
import WildsHome from './Pages/Wilds/Home/Home';

// 二级页面使用懒加载
const WorldWeaponMoves = lazy(() => import('./Pages/World/WeaponMoves/WeaponMoves'));
const WorldWeaponData = lazy(() => import('./Pages/World/WeaponMoves/WeaponDataPage'));
const RiseWeaponMoves = lazy(() => import('./Pages/Rise/WeaponMoves/WeaponMoves'));
const RiseWeaponData = lazy(() => import('./Pages/Rise/WeaponMoves/WeaponDataPage'));
const WildsWeaponMoves = lazy(() => import('./Pages/Wilds/WeaponMoves/WeaponMoves'));
const WildsWeaponData = lazy(() => import('./Pages/Wilds/WeaponMoves/WeaponDataPage'));
const GameTermsPage = lazy(() => import('./components/Sidebar/SidebarPages/GameTermsPage'));
const WeaponUsagePage = lazy(() => import('./components/Sidebar/SidebarPages/WeaponUsagePage'));
const MHReleaseTimeline = lazy(() => import('./components/Sidebar/SidebarPages/MHReleaseTimeline'));
const MonsterPopularityPage = lazy(() => import('./components/Sidebar/SidebarPages/MonsterPopularityPage'));

interface AnimatedRoutesProps {
    isDarkMode: boolean;
}

// 加载中的回退组件
const LoadingFallback = () => (
    <div className="flex justify-center items-center h-full">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
    </div>
);

const AnimatedRoutes = ({ isDarkMode }: AnimatedRoutesProps) => {
    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname]);

    return (
        <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
                {/* 全局路由 */}
                <Route
                    path="/game-terms"
                    element={
                        <Suspense fallback={<LoadingFallback />}>
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.3 }}
                            >
                                <GameTermsPage isDarkMode={isDarkMode} />
                            </motion.div>
                        </Suspense>
                    }
                />
                <Route
                    path="/weapon-usage"
                    element={
                        <Suspense fallback={<LoadingFallback />}>
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.3 }}
                            >
                                <WeaponUsagePage isDarkMode={isDarkMode} />
                            </motion.div>
                        </Suspense>
                    }
                />
                <Route
                    path="/mh-release-timeline"
                    element={
                        <Suspense fallback={<LoadingFallback />}>
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.3 }}
                            >
                                <MHReleaseTimeline isDarkMode={isDarkMode} />
                            </motion.div>
                        </Suspense>
                    }
                />

                <Route
                    path="/monster-popularity"
                    element={
                        <Suspense fallback={<LoadingFallback />}>
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.3 }}
                            >
                                <MonsterPopularityPage isDarkMode={isDarkMode} />
                            </motion.div>
                        </Suspense>
                    }
                />

                {/* World 路由 */}
                <Route
                    path="/world"
                    element={
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            <WorldHome isDarkMode={isDarkMode} />
                        </motion.div>
                    }
                />
                <Route
                    path="/world/weapon-moves"
                    element={
                        <Suspense fallback={<LoadingFallback />}>
                            <motion.div
                                initial={{ opacity: 0, translateX: '50px' }}
                                animate={{ opacity: 1, translateX: '0px' }}
                                exit={{ opacity: 0, translateX: '-50px' }}
                                transition={{ duration: 0.3 }}
                            >
                                <WorldWeaponMoves isDarkMode={isDarkMode} />
                            </motion.div>
                        </Suspense>
                    }
                />
                <Route
                    path="/world/weapon-moves/:weaponName"
                    element={
                        <Suspense fallback={<LoadingFallback />}>
                            <motion.div
                                initial={{ opacity: 0, translateY: '20px' }}
                                animate={{ opacity: 1, translateY: '0px' }}
                                exit={{ opacity: 0, translateY: '-20px' }}
                                transition={{ duration: 0.3 }}
                            >
                                <WorldWeaponData isDarkMode={isDarkMode} />
                            </motion.div>
                        </Suspense>
                    }
                />

                {/* Rise 路由 */}
                <Route
                    path="/rise"
                    element={
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            <RiseHome isDarkMode={isDarkMode} />
                        </motion.div>
                    }
                />
                <Route
                    path="/rise/weapon-moves"
                    element={
                        <Suspense fallback={<LoadingFallback />}>
                            <motion.div
                                initial={{ opacity: 0, translateX: '50px' }}
                                animate={{ opacity: 1, translateX: '0px' }}
                                exit={{ opacity: 0, translateX: '-50px' }}
                                transition={{ duration: 0.3 }}
                            >
                                <RiseWeaponMoves isDarkMode={isDarkMode} />
                            </motion.div>
                        </Suspense>
                    }
                />
                <Route
                    path="/rise/weapon-moves/:weaponName"
                    element={
                        <Suspense fallback={<LoadingFallback />}>
                            <motion.div
                                initial={{ opacity: 0, translateY: '20px' }}
                                animate={{ opacity: 1, translateY: '0px' }}
                                exit={{ opacity: 0, translateY: '-20px' }}
                                transition={{ duration: 0.3 }}
                            >
                                <RiseWeaponData isDarkMode={isDarkMode} />
                            </motion.div>
                        </Suspense>
                    }
                />

                {/* Wilds 路由 */}
                <Route
                    path="/wilds"
                    element={
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            <WildsHome isDarkMode={isDarkMode} />
                        </motion.div>
                    }
                />
                <Route
                    path="/wilds/weapon-moves"
                    element={
                        <Suspense fallback={<LoadingFallback />}>
                            <motion.div
                                initial={{ opacity: 0, translateX: '50px' }}
                                animate={{ opacity: 1, translateX: '0px' }}
                                exit={{ opacity: 0, translateX: '-50px' }}
                                transition={{ duration: 0.3 }}
                            >
                                <WildsWeaponMoves isDarkMode={isDarkMode} />
                            </motion.div>
                        </Suspense>
                    }
                />
                <Route
                    path="/wilds/weapon-moves/:weaponName"
                    element={
                        <Suspense fallback={<LoadingFallback />}>
                            <motion.div
                                initial={{ opacity: 0, translateY: '20px' }}
                                animate={{ opacity: 1, translateY: '0px' }}
                                exit={{ opacity: 0, translateY: '-20px' }}
                                transition={{ duration: 0.3 }}
                            >
                                <WildsWeaponData isDarkMode={isDarkMode} />
                            </motion.div>
                        </Suspense>
                    }
                />

                {/* 默认路由 */}
                <Route path="/" element={<Navigate to="/world" replace />} />
                <Route path="*" element={<Navigate to="/world" replace />} />
            </Routes>
        </AnimatePresence>
    );
};

export default AnimatedRoutes;