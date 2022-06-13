import React from 'react'
import { useNavigate } from 'react-router-dom'
import formatQuiz from '../utils/formatQuiz';
import axios from 'axios';


export default function StartWindow({ appState, setAppState, setLoading, setError }) {
  const navigate = useNavigate();
  const baseUrl = "https://the-trivia-api.com/api/questions?";


  function configUrl(category, difficulty, quantity) {
    let difficultyParam = '';
    let categoryParam = '';
    let quantityParam = '&limit=' + quantity;
    if (category !== 'Any') categoryParam = "&categories=" + category.toLowerCase().replaceAll('&', 'and').replaceAll(' ', '_')
    if (difficulty !== 'Any') difficultyParam = "&difficulty=" + difficulty.toLowerCase();
    return baseUrl + categoryParam + quantityParam + difficultyParam
  }

  const handleClick = async () => {
    if (appState.selectedCategory !== 'custom') {
      setLoading(true);
      setAppState({ ...appState, selectedQuiz: null }); // reset selectedQuiz
      let url = configUrl(appState.selectedCategory, appState.selectedDifficulty, appState.selectedQuantity)
      try {
        const response = await axios(url);
        const quiz = formatQuiz(response.data);
        setAppState({ ...appState, selectedQuiz: quiz });
      } catch (err) {
        console.log(err.message);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    navigate('/quiz');
  };

  return (
    <div className='startWindow'>
      <div className='startWindow__content'>
        <img
          key={'backround__' + appState.selectedCategory} id='startWindow__image'
          src={require(`../images/categories/${appState.selectedCategory.toLowerCase()}.jpg`)}
          alt="category"
        />
        <div className='startWindow__content__resume'>
          <ul>
            <span>{appState.selectedCategory === 'Any' ? (" • " + appState.selectedCategory + " category") : (" • " + appState.selectedCategory)}</span>
            <span>{appState.selectedDifficulty === 'Any' ? (" • " + appState.selectedDifficulty + " difficulty") : (" • " + appState.selectedDifficulty)}</span>
            <span>{appState.selectedQuantity === 1 ? (" • " + appState.selectedQuantity + " question") : (" • " + appState.selectedQuantity + " questions")}</span>
          </ul>
          <button className='startButton' onClick={handleClick}>Start</button>
        </div>
      </div>
    </div>
  )
}

