import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Header from "./components/Header.jsx";
import Footer from './components/Footer.jsx';
import QuizzPage from "./pages/QuizzPage.jsx";
import HomePage from "./pages/HomePage.jsx";

export default function App() {
  const [selectedDifficulty, setDifficulty] = useState('Any');
  const [selectedCategory, setCategory] = useState('Any');
  const [selectedQuantity, setQuantity] = useState(10);

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
          <Route path="/quizz" element={<QuizzPage {...{ selectedCategory, selectedDifficulty, selectedQuantity }} />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}