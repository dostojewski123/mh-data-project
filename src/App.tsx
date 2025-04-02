import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import SubNavbar from './components/SubNavbar/SubNavbar';
import Footer from './components/Footer/Footer';
import WelcomeBanner from './components/WelcomeBanner/WelcomeBanner';
import { gameContent } from './data/gameContent';
import useTheme from './hooks/useTheme';
import { GameVersion, GameContent, ContentSection } from './types'; // 导入 ContentSection
import WeaponMovesPage from './pages/WeaponMovesPage/WeaponMovesPage';
import WeaponMoveDetailPage from './pages/WeaponMovesPage/WeaponMoveDetailPage';
import WeaponsPage from './pages/WeaponsPage';
import ArmorPage from './pages/ArmorPage';
import MonstersPage from './pages/MonstersPage';
import MonsterMovesPage from './pages/MonsterMovesPage';
import ContentGrid from './components/MainContent/ContentGrid';

function App() {
  const { isDarkMode, toggleTheme } = useTheme();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [selectedGame, setSelectedGame] = useState<GameVersion>('world');
  const [selectedSection, setSelectedSection] = useState<ContentSection>('' as ContentSection);

  const currentContent = gameContent[selectedGame] as unknown as GameContent;

  const toggleSidebar = () => setIsSidebarOpen((prev) => !prev);

  const handleGameChange = (game: GameVersion) => {
    setSelectedGame(game);
  };

  const handleSectionChange = (section: ContentSection) => { // 参数类型改为 ContentSection
    setSelectedSection(section);
  };

  return (
    <Router>
      <div className={`min-h-screen flex flex-col ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}>
        <Header isDarkMode={isDarkMode} toggleDarkMode={toggleTheme} toggleSidebar={toggleSidebar} />
        <div className="flex flex-1 overflow-hidden">
          <div
            className={`flex-shrink-0 h-full transition-all duration-300 ease-in-out ${isSidebarOpen ? 'w-64' : 'w-0'
              } overflow-hidden ${isDarkMode ? 'bg-gray-800' : 'bg-white'} pt-16`}
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
            className={`flex-1 flex flex-col min-w-0 transition-all duration-300 ease-in-out ${isDarkMode ? 'bg-gray-900' : 'bg-white'
              }`}
          >
            <SubNavbar isDarkMode={isDarkMode} selectedGame={selectedGame} />
            <WelcomeBanner selectedGame={selectedGame} />
            <div className="flex-1 overflow-auto">
              <Routes>
                <Route
                  path="/"
                  element={
                    <ContentGrid
                      isDarkMode={isDarkMode}
                      currentContent={{
                        monsters: {
                          title: currentContent.monsters.title,
                          image: currentContent.monsters.list[0].image,
                          description: currentContent.monsters.description
                        },
                        weapons: {
                          title: currentContent.weapons.title,
                          image: currentContent.weapons.list[0].image,
                          description: currentContent.weapons.description
                        },
                        armor: {
                          title: currentContent.armor.title,
                          image: currentContent.armor.list[0].image,
                          description: currentContent.armor.description
                        }
                      }}
                      setSelectedSection={handleSectionChange}
                      selectedSection={selectedSection}
                    />
                  }
                />
                <Route
                  path="/weapon-moves"
                  element={<WeaponMovesPage isDarkMode={isDarkMode} content={currentContent.weaponMoves} />}
                />
                <Route
                  path="/weapon-moves/:index"
                  element={<WeaponMoveDetailPage isDarkMode={isDarkMode} content={currentContent.weaponMoves} />}
                />
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
                  path="/monster-moves"
                  element={<MonsterMovesPage isDarkMode={isDarkMode} content={currentContent.monsterMoves} />}
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