import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Header from "./components/Header.jsx";
import Footer from './components/Footer.jsx';
import QuizPage from "./pages/QuizPage.jsx";
import HomePage from "./pages/HomePage.jsx";
import CreateQuizPage from "./pages/CreateQuizPage.jsx";
import mockQuiz from "./mockData/mockQuiz.js";

const initialState = {
  selectedCategory: 'Any',
  selectedDifficulty: 'Any',
  selectedQuantity: 10,
  customQuizzes: [mockQuiz],
  selectedQuiz: null,
}

export default function App() {
  const [appState, setAppState] = useState(initialState);

  useEffect(() => {
    let retrievedState = JSON.parse(window.localStorage.getItem("appState"));
    retrievedState && setAppState(retrievedState);
  }, []);

  useEffect(() => {
    window.localStorage.setItem("appState", JSON.stringify(appState));
  }, [appState]);

  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage {...{ appState, setAppState }} />} />
          <Route path="/quiz" element={<QuizPage {...{ appState, setAppState }} />} />
          <Route path="/create-quiz" element={<CreateQuizPage {...{ appState, setAppState }} />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}