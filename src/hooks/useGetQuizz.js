import { useEffect, useState } from 'react'
import axios from 'axios'
import formatQuizz from '../utils/formatQuizz'

export default function useGetQuizz(category = 'Any', difficulty = 'Any') {
  const [quizz, setQuizz] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)

  const baseUrl = "https://opentdb.com/api.php?amount=10";

  useEffect(() => {
    setLoading(true)
    axios
      .get(baseUrl)
      .then(response => {
        let quizz = formatQuizz(response.data.results)
        setQuizz(quizz)
      })
      .catch(err => setError(err))
      .finally(() => setLoading(false))
  }, [category, difficulty])

  return { loading, quizz, error }
}