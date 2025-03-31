import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import SubNavbar from './components/SubNavbar/SubNavbar';
import MainContent from './components/MainContent/ContentGrid';
import Footer from './components/Footer/Footer';
import { gameContent } from './data/gameContent';
import useTheme from './hooks/useTheme';
import WelcomeBanner from './components/WelcomeBanner/WelcomeBanner';
import { GameVersion, GameContent, ContentSection } from './types';
import WeaponsPage from './pages/WeaponsPage';
import ArmorPage from './pages/ArmorPage';
import MonstersPage from './pages/MonstersPage';
import WeaponMovesPage from './pages/WeaponMovesPage';
import MonsterMovesPage from './pages/MonsterMovesPage';

function App() {
  const { isDarkMode, toggleTheme } = useTheme();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [selectedGame, setSelectedGame] = useState<GameVersion>('world');
  const [selectedSection, setSelectedSection] = useState<ContentSection>(null);

  const currentContent = gameContent[selectedGame] as GameContent;

  const toggleSidebar = () => setIsSidebarOpen((prev) => !prev);

  const handleGameChange = (game: GameVersion) => {
    setSelectedGame(game);
  };

  return (
    <Router>
      <div className={`min-h-screen flex flex-col ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}>
        <Header
          isDarkMode={isDarkMode}
          toggleDarkMode={toggleTheme}
          toggleSidebar={toggleSidebar}
        />
        <div className="flex flex-1 overflow-hidden">
          <div
            className={`flex-shrink-0 h-full transition-all duration-300 ease-in-out
              ${isSidebarOpen ? 'w-64' : 'w-0'} 
              overflow-hidden ${isDarkMode ? 'bg-gray-800' : 'bg-white'} pt-16`}
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
            className={`flex-1 flex flex-col min-w-0 transition-all duration-300 ease-in-out
              ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}
          >
            <SubNavbar isDarkMode={isDarkMode} selectedGame={selectedGame} />
            <WelcomeBanner selectedGame={selectedGame} />
            <div className="flex-1 overflow-auto">
              <Routes>
                <Route
                  path="/weapons"
                  element={<WeaponsPage isDarkMode={isDarkMode} content={currentContent.weapons} />}
                />
                <Route
                  path="/armor"
                  element={<ArmorPage isDarkMode={isDarkMode} content={currentContent.armor} />}
                />
                <Route
                  path="/monsters"
                  element={<MonstersPage isDarkMode={isDarkMode} content={currentContent.monsters} />}
                />
                <Route
                  path="/weapon-moves"
                  element={<WeaponMovesPage isDarkMode={isDarkMode} content={currentContent.weaponMoves} />}
                />
                <Route
                  path="/monster-moves"
                  element={<MonsterMovesPage isDarkMode={isDarkMode} content={currentContent.monsterMoves} />}
                />
                <Route
                  path="/"
                  element={
                    <MainContent
                      isDarkMode={isDarkMode}
                      currentContent={currentContent}
                      selectedSection={selectedSection}
                      setSelectedSection={setSelectedSection}
                    />
                  }
                />
              </Routes>
            </div>
            <Footer isDarkMode={isDarkMode} />
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;