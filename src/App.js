import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Header from "./components/Header.jsx";
import Footer from './components/Footer.jsx';
import QuizPage from "./pages/QuizPage.jsx";
import HomePage from "./pages/HomePage.jsx";
import CreateQuizPage from "./pages/CreateQuizPage.jsx";

export default function App() {
  const [selectedDifficulty, setDifficulty] = useState('Any');
  const [selectedCategory, setCategory] = useState('Any');
  const [selectedQuantity, setQuantity] = useState(10);
  const [customQuizes, setCustomQuizes] = useState([])

  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route
            path="/"
            element={
              <HomePage {...{
                selectedDifficulty,
                setDifficulty,
                selectedCategory,
                setCategory,
                selectedQuantity,
                setQuantity
              }}
              />}
          />
          <Route path="/quiz" element={<QuizPage {...{ selectedCategory, selectedDifficulty, selectedQuantity }} />} />
          <Route path="/create-quiz" element={<CreateQuizPage />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}