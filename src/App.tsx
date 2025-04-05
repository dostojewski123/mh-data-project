import { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import SubNavbar from './components/SubNavbar/SubNavbar';
import WelcomeBanner from './components/WelcomeBanner/WelcomeBanner';
import useTheme from './hooks/useTheme';
import { GameVersion } from './types';
import AnimatedRoutes from './AnimatedRoutes';

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
              <AnimatedRoutes />
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;