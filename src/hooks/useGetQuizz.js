import { useEffect, useState } from 'react'
import axios from 'axios'
import formatQuizz from '../utils/formatQuizz'

/**
 * Custom Hook to fetch a quizz from The Trivia API
 * @param   {string}  category    The required category
 * @param   {string}  difficulty  The required difficulty
 * @return  {Object}  The state for loading, quizz and error
 */
export default function useGetQuizz(category, difficulty) {
  const [quizz, setQuizz] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)

  const baseUrl = "https://the-trivia-api.com/api/questions?limit=10";

  useEffect(() => {
    setLoading(true)
    axios
      .get(baseUrl)
      .then(response => {
        let quizz = formatQuizz(response.data) //Format quizz
        setQuizz(quizz)
      })
      .catch(err => setError(err))
      .finally(() => setLoading(false))
  }, [category, difficulty])

  return { loading, quizz, error }
}