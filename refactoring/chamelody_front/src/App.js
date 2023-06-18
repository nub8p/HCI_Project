import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './components/LandingPage/LandingPage';
import EmotionPage from './components/EmotionSelectionPage/EmotionSelectionPage';
import LoadingPage from './components/LoadingPage/LoadingPage';
import PlaylistPage from './components/PlaylistPage/PlaylistPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/emotionSelect" element={<EmotionPage />} />
        <Route path="/loading" element={<LoadingPage />} />
        <Route path="/playlist" element={<PlaylistPage />} />
      </Routes>
    </Router>
  );
};

export default App;
