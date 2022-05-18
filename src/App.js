import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Header from "./components/Header.jsx";
import QuizzPage from "./pages/QuizzPage.jsx";
import HomePage from "./pages/HomePage.jsx";

export default function App() {
  const [difficulty, setDifficulty] = useState('Any');
  const [category, setCategory] = useState('Any');

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage {...{ difficulty, category, setDifficulty, setCategory }} />} />
        <Route path="/quizz" element={<QuizzPage {...{ difficulty, category }} />} />
      </Routes>
    </BrowserRouter>
  );
}