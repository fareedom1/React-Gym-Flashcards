import { useState } from 'react'
//import Flashcard from './Components/Flashcard'
import exercises from './data/exercises.json'
import './App.css'
import Flashcard from './components/Flashcard'

const App = () => {
  
  const deck = exercises;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => setIsFlipped(f => !f);

  const nextCard = () => {
    if (deck.length <= 2) { setIsFlipped(false); return; }
    let next = currentIndex;
    while (next === currentIndex) {
      next = Math.floor(Math.random() * (deck.length - 1)) + 1;
    }
    setCurrentIndex(next);
    setIsFlipped(false);
  };


  return (
    <>
      <div>
        <h1>Gym Exercise Quiz</h1>
        <h4>Do you know your exercies?</h4>
        <p>Number of cards: {deck.length-1} </p>
        <Flashcard 
          question = {deck[currentIndex].exercise} 
          answer = {deck[currentIndex].muscle} 
          isFlipped = {isFlipped}
          onFlip = {handleFlip}/>
        <button onClick={nextCard}>Next</button>
      </div>
    </>
  )
}

export default App;
