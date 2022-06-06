import { useEffect, useState } from 'react'
import axios from 'axios'
import formatQuiz from '../utils/formatQuiz'

export default function useGetQuiz(appState) {
  const { selectedQuiz, selectedCategory, selectedDifficulty, selectedQuantity } = appState
  const [quiz, setQuiz] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)

  const baseUrl = "https://the-trivia-api.com/api/questions?";

  function configUrl(category, difficulty, quantity) {
    let difficultyParam = '';
    let categoryParam = '';
    let quantityParam = '&limit=' + quantity;
    if (category !== 'Any') categoryParam = "&categories=" + category.toLowerCase().replaceAll('&', 'and').replaceAll(' ', '_')
    if (difficulty !== 'Any') difficultyParam = "&difficulty=" + difficulty.toLowerCase();
    return baseUrl + categoryParam + quantityParam + difficultyParam
  }

  useEffect(() => {
    if (selectedQuiz !== null) return setQuiz(selectedQuiz);
    else {
      setLoading(true)
      let url = configUrl(selectedCategory, selectedDifficulty, selectedQuantity)
      axios.get(url)
        .then(response => {
          let quiz = formatQuiz(response.data) //Format quiz
          setQuiz(quiz)
        })
        .catch(err => setError(err))
        .finally(() => setLoading(false))
    }
  }, [selectedQuiz, selectedCategory, selectedDifficulty, selectedQuantity])

  return { loading, error, quiz }
}

