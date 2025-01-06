import "./App.css";
import GlobalStyle from "./GlobalStyles";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import HomePage from "./pages/home/HomePage";
import RecruitmentPage from "./pages/recruitment/RecruitmentPage";
import ApplicationPage from "./pages/application/ApplicationPage";
import NotFoundPage from "./pages/NotFoundPage";
import AdminJoinPage from "./pages/admin/AdminJoinPage";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/recruitment" element={<RecruitmentPage />} />
        <Route path="/apply" element={<ApplicationPage />} />
        <Route path="/join" element={<AdminJoinPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
