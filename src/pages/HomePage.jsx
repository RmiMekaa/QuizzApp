import React, { useState } from 'react'
import CustomQuizzes from '../components/CustomQuizzes';
import { difficultyOptions, quantityOptions, categoryOptions } from '../data/options';
import OptionsDropdown from '../components/OptionsDropdown';
import StartWindow from '../components/StartWindow';

export default function HomePage({ appState, setAppState }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const details = document.querySelectorAll("details");
  details.forEach((targetDetail) => {
    targetDetail.addEventListener("click", () => {
      // Close all the details that are not targetDetail.
      details.forEach((detail) => {
        if (detail !== targetDetail) {
          detail.removeAttribute("open");
        }
      });
    });
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <section className='homePage'>
      <div className='homePage__options'>
        <OptionsDropdown
          options={categoryOptions}
          heading="Category"
          remotedState='selectedCategory'
          state={appState}
          updateState={setAppState}
        />
        <OptionsDropdown
          options={difficultyOptions}
          heading="Difficulty"
          remotedState='selectedDifficulty'
          state={appState}
          updateState={setAppState}
        />
        <OptionsDropdown
          options={quantityOptions}
          heading="Quantity"
          remotedState='selectedQuantity'
          state={appState}
          updateState={setAppState}
        />
      </div>

      <StartWindow {...{ appState, setAppState, setLoading, setError }} />

      <CustomQuizzes {...{ appState, setAppState }} />

    </section >
  )
}