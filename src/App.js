import './App.css';
import GlobalStyle from './GlobalStyles';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RecruitmentPage from './pages/recruitment/RecruitmentPage';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Routes>
        <Route path="/recruitment" element={<RecruitmentPage />} />
      </Routes>
      <div></div>
    </Router>
  );
}

export default App;
