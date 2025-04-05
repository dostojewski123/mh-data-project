import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import useTheme from './hooks/useTheme';
import WorldHome from './Pages/World/Home/Home';
import WorldWeaponMoves from './Pages/World/WeaponMoves/WeaponMoves';
import WorldWeaponData from './Pages/World/WeaponMoves/WeaponDataPage';
import RiseHome from './Pages/Rise/Home/Home';
import RiseWeaponMoves from './Pages/Rise/WeaponMoves/WeaponMoves';
import RiseWeaponData from './Pages/Rise/WeaponMoves/WeaponDataPage';
import WildsHome from './Pages/Wilds/Home/Home';
import WildsWeaponMoves from './Pages/Wilds/WeaponMoves/WeaponMoves';
import WildsWeaponData from './Pages/Wilds/WeaponMoves/WeaponDataPage';

const AnimatedRoutes = () => {
    const location = useLocation();
    const { isDarkMode } = useTheme();

    return (
        <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
                {/* World 路由 */}
                <Route path="/world" element={
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <WorldHome isDarkMode={isDarkMode} />
                    </motion.div>
                } />
                <Route path="/world/weapon-moves" element={
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -50 }}
                        transition={{ duration: 0.3 }}
                    >
                        <WorldWeaponMoves isDarkMode={isDarkMode} />
                    </motion.div>
                } />
                <Route path="/world/weapon-moves/:weaponName" element={
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                    >
                        <WorldWeaponData isDarkMode={isDarkMode} />
                    </motion.div>
                } />

                {/* Rise 路由 */}
                <Route path="/rise" element={
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <RiseHome isDarkMode={isDarkMode} />
                    </motion.div>
                } />
                <Route path="/rise/weapon-moves" element={
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -50 }}
                        transition={{ duration: 0.3 }}
                    >
                        <RiseWeaponMoves isDarkMode={isDarkMode} />
                    </motion.div>
                } />
                <Route path="/rise/weapon-moves/:weaponName" element={
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                    >
                        <RiseWeaponData isDarkMode={isDarkMode} />
                    </motion.div>
                } />

                {/* Wilds 路由 */}
                <Route path="/wilds" element={
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <WildsHome isDarkMode={isDarkMode} />
                    </motion.div>
                } />
                <Route path="/wilds/weapon-moves" element={
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -50 }}
                        transition={{ duration: 0.3 }}
                    >
                        <WildsWeaponMoves isDarkMode={isDarkMode} />
                    </motion.div>
                } />
                <Route path="/wilds/weapon-moves/:weaponName" element={
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                    >
                        <WildsWeaponData isDarkMode={isDarkMode} />
                    </motion.div>
                } />

                {/* 默认路由 */}
                <Route path="/" element={<Navigate to="/world" replace />} />
                <Route path="*" element={<Navigate to="/world" replace />} />
            </Routes>
        </AnimatePresence>
    );
};

export default AnimatedRoutes;