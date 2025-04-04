import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import SubNavbar from './components/SubNavbar/SubNavbar';
import WelcomeBanner from './components/WelcomeBanner/WelcomeBanner';
import useTheme from './hooks/useTheme';
import { GameVersion } from './types';
import WorldHome from './Pages/World/Home/Home';
import WorldWeaponMoves from './Pages/World/WeaponMoves/WeaponMoves';
import WorldWeaponData from './Pages/World/WeaponMoves/WeaponDataPage';
import RiseHome from './Pages/Rise/Home/Home';
import RiseWeaponMoves from './Pages/Rise/WeaponMoves/WeaponMoves';
import RiseWeaponData from './Pages/Rise/WeaponMoves/WeaponDataPage';
import WildsHome from './Pages/Wilds/Home';
import WildsWeaponMoves from './Pages/Wilds/WeaponMoves';


function App() {
  const { isDarkMode, toggleTheme } = useTheme();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [selectedGame, setSelectedGame] = useState<GameVersion>('world');
  const toggleSidebar = () => setIsSidebarOpen((prev) => !prev);
  const handleGameChange = (game: GameVersion) => setSelectedGame(game);

  return (
    <Router basename="/">
      <div className={`min-h-screen flex flex-col ${isDarkMode ? 'bg-mh-dark' : 'bg-[#F0E6D2]'}`}>
        <Header isDarkMode={isDarkMode} toggleDarkMode={toggleTheme} toggleSidebar={toggleSidebar} />
        <div className="flex flex-1 overflow-hidden">
          <div
            className={`flex-shrink-0 h-full transition-all duration-300 ease-in-out ${isSidebarOpen ? 'w-48' : 'w-0'
              } overflow-hidden ${isDarkMode ? 'bg-gray-800' : 'bg-white'} pt-12`}
          >
            <Sidebar
              isDarkMode={isDarkMode}
              isOpen={isSidebarOpen}
              selectedGame={selectedGame}
              setSelectedGame={handleGameChange}
              toggleSidebar={toggleSidebar}
            />
          </div>
          <div
            className={`flex-1 flex flex-col min-w-0 transition-all duration-300 ease-in-out ${isDarkMode ? 'bg-mh-starrysky' : 'bg-mh-parchment-1'
              }`}
          >
            <SubNavbar isDarkMode={isDarkMode} selectedGame={selectedGame} isSidebarOpen={isSidebarOpen} />
            <WelcomeBanner selectedGame={selectedGame} />
            <div className="flex-1 overflow-auto stable-scrollbar">
              <Routes>
                {/* World 路由 */}
                <Route path="/world" element={<WorldHome isDarkMode={isDarkMode} />} />
                <Route path="/world/weapon-moves" element={<WorldWeaponMoves isDarkMode={isDarkMode} />} />
                <Route path="/world/weapon-moves/:weaponName" element={<WorldWeaponData isDarkMode={isDarkMode} />} />

                {/* Rise 路由 */}
                <Route path="/rise" element={<RiseHome isDarkMode={isDarkMode} />} />
                <Route path="/rise/weapon-moves" element={<RiseWeaponMoves isDarkMode={isDarkMode} />} />
                <Route path="/rise/weapon-moves/:weaponName" element={<RiseWeaponData isDarkMode={isDarkMode} />} />

                {/* Wilds 路由 */}
                <Route path="/wilds" element={<WildsHome isDarkMode={isDarkMode} />} />
                <Route path="/wilds/weapon-moves" element={<WildsWeaponMoves isDarkMode={isDarkMode} />} />

                {/* 默认路由 */}
                <Route path="/" element={<Navigate to="/world" replace />} />
                <Route path="*" element={<Navigate to="/world" replace />} />
              </Routes>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;