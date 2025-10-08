import { HashRouter, Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';
import './App.css';
import { Navbar } from './components/Navbar';
import { GamePage } from './pages/GamePage';
import { HomePage } from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import InstallPrompt from './components/InstallPrompt';
import { setupChunkErrorHandling } from './utils/chunkErrorHandler';

const App = () => {
  useEffect(() => {
    // Set up chunk error handling for GitHub Pages
    setupChunkErrorHandling();
  }, []);

  return (
    <HashRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/game/:gameSlug" element={<GamePage />} />
      </Routes>
      <InstallPrompt />
    </HashRouter>
  );
};

export default App;
