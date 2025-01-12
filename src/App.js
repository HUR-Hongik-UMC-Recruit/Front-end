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
import AdminLoginPage from "./pages/admin/AdminLoginPage";

import { EmailProvider } from "./contexts/EmailContext";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/recruitment" element={<RecruitmentPage />} />
        <Route
          path="/apply"
          element={
            <EmailProvider>
              <ApplicationPage />
            </EmailProvider>
          }
        />
        <Route path="/join" element={<AdminJoinPage />} />
        <Route path="/login" element={<AdminLoginPage />} />
        {/* <Route path="/admin" element={} /> */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
