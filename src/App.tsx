// App.tsx
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, useNavigate } from 'react-router-dom';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import SubNavbar from './components/SubNavbar/SubNavbar';
import applyTheme from './hooks/useTheme';
import { GameVersion } from './types';
import AnimatedRoutes from './AnimatedRoutes';
import Footer from './components/Footer/Footer';


function App() {
  const [theme, setTheme] = useState<'dark' | 'light'>(() => {
    if (typeof window === 'undefined') return 'dark';
    if (localStorage.theme === 'dark' || localStorage.theme === 'light') {
      return localStorage.theme;
    }
    return 'dark';
  });

  const isDarkMode = theme === 'dark';
  const toggleTheme = () => setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));

  useEffect(() => {
    applyTheme(theme);
  }, [theme]);

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [selectedGame, setSelectedGame] = useState<GameVersion>('world');
  const toggleSidebar = () => setIsSidebarOpen((prev) => !prev);

  // 修改 handleGameChange
  const navigate = useNavigate();
  const handleGameChange = (game: GameVersion) => {
    setSelectedGame(game);
    // 无论当前在哪个页面，切换版本时都跳转到版本主页
    navigate(`/${game}`);
  };

  return (
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
          <div className="mt-20 flex-1 overflow-auto stable-scrollbar">
            <AnimatedRoutes isDarkMode={isDarkMode} />
            <Footer isDarkMode={isDarkMode} />
          </div>
        </div>
      </div>
    </div>
  );
}

function AppWrapper() {
  return (
    <Router basename="/">
      <App />
    </Router>
  );
}

export default AppWrapper;