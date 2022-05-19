import { useEffect, useState } from 'react'
import axios from 'axios'

export default function useGetQuizz(category, difficulty) {
  const [quizz, setQuizz] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)

  const baseUrl = "https://opentdb.com/api.php?amount=10";

  useEffect(() => {
    setLoading(true)
    axios
      .get(baseUrl)
      .then(response => setQuizz(response.data.results))
      .catch(err => setError(err))
      .finally(() => setLoading(false))
  }, [category, difficulty])

  return { loading, quizz, error }
}