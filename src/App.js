import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header.jsx";
import QuizzPage from "./pages/QuizzPage.jsx";
import HomePage from "./pages/HomePage.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/quizz" element={<QuizzPage />} />
      </Routes>
    </BrowserRouter>
  );
}