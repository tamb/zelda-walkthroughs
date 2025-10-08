import { HashRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Navbar } from './components/Navbar';
import { GamePage } from './pages/GamePage';
import { HomePage } from './pages/HomePage';

const App = () => {
  return (
    <HashRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/game/:gameSlug" element={<GamePage />} />
      </Routes>
    </HashRouter>
  );
};

export default App;
