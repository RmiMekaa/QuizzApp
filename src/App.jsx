import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Header from "./components/Header.jsx";
import Footer from './components/Footer.jsx';
import QuizPage from "./pages/QuizPage.jsx";
import HomePage from "./pages/HomePage.jsx";
import CreateQuizPage from "./pages/CreateQuizPage.jsx";
import artQuiz from "./data/mockQuiz.js";

const initialState = {
  selectedCategory: 'Any',
  selectedDifficulty: 'Any',
  selectedQuantity: 10,
  customQuizzes: [artQuiz],
  selectedQuiz: null,
}

export default function App() {
  const [appState, setAppState] = useState(initialState);

  useEffect(() => {
    let retrievedState = window.localStorage.getItem("appState");
    retrievedState && setAppState(JSON.parse(retrievedState));
  }, []);

  useEffect(() => {
    window.localStorage.setItem("appState", JSON.stringify(appState));
  }, [appState]);

  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route path="/QuizzApp/" element={<HomePage {...{ appState, setAppState }} />} />
          <Route path="/QuizzApp/quiz" element={<QuizPage {...{ appState, setAppState }} />} />
          <Route path="/QuizzApp/create-quiz/:method/:name" element={<CreateQuizPage {...{ appState, setAppState }} />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}