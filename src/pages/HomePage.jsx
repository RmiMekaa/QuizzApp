import React, { useState } from 'react'
import CustomQuizzes from '../components/CustomQuizzes';
import { difficultyOptions, quantityOptions, categoryOptions } from '../data/options';
import OptionsPicker from '../components/OptionsPicker';
import StartWindow from '../components/StartWindow';

export default function HomePage({ appState, setAppState }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <section className='homePage'>
      <OptionsPicker
        options={categoryOptions}
        heading="Select Category"
        remotedState='selectedCategory'
        state={appState}
        updateState={setAppState}
        direction='column'
      />

      <div className='centralColumn'>
        <StartWindow {...{ appState, setAppState, setLoading, setError }} />
        <div style={{ height: '20%', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          <OptionsPicker
            options={difficultyOptions}
            heading="Difficulty :"
            remotedState='selectedDifficulty'
            state={appState}
            updateState={setAppState}
            direction="row"
          />
          <OptionsPicker
            options={quantityOptions}
            heading="Quantity :"
            remotedState='selectedQuantity'
            state={appState}
            updateState={setAppState}
            direction="row"
          />
        </div>
      </div>

      <CustomQuizzes {...{ appState, setAppState }} />

    </section >
  )
}