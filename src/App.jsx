import { useState } from 'react'
//import Flashcard from './Components/Flashcard'
import exercises from './data/exercises.json'
import './App.css'
import Flashcard from './Components/Flashcard'

const App = () => {
  
  const deck = exercises;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [userInput, setUserInput] = useState('');
  const [isCorrect, setIsCorrect] = useState(null);
  const [shake, setShake] = useState(false);
  const handleFlip = () => setIsFlipped(f => !f);
  
  /* used to randomize and see new card
  const nextCard = () => {
    if (deck.length <= 2) { setIsFlipped(false); return; }
    let next = currentIndex;
    while (next === currentIndex) {
      next = Math.floor(Math.random() * (deck.length - 1)) + 1;
    }
    setCurrentIndex(next);
    setIsFlipped(false);
  };
  */

  const nextCard = () => {
    if(currentIndex < deck.length-1){
      setCurrentIndex(currentIndex+1)
      setIsFlipped(false);
      setIsCorrect(null);
    }
  }

  const prevCard = () => {
    if (currentIndex > 0){
      setCurrentIndex(currentIndex - 1);
      setIsFlipped(false);
      setIsCorrect(null);
    }
    
  }

  const checkAnswer = () => {
    setUserInput(userInput)
    if (userInput === deck[currentIndex].muscle){
      console.log("your guess was correct");
      setIsCorrect(true);
      setIsFlipped(true);
    }
    else{
      console.log("try again");
      setIsCorrect(false);
      setShake(true);
      setTimeout(() => setShake(false), 350);
    }
  }

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
          onFlip = {handleFlip}
          shake = {shake}
        />
        <form>
          <label>Make a Guess before flipping: </label>
          <input 
            className={`userInput${isCorrect == null ? '': isCorrect ? ' correct':' incorrect'}`}
            placeholder = "Make Your Guess" 
            type = "text" 
            value = {userInput} 
            onChange={(e)=>setUserInput(e.target.value)}/>
        </form>
  
        <button className={`button-${currentIndex > 0 ? 'available':'notavailable' }`} onClick={prevCard}>Back</button>
        <button className={`button-${currentIndex < deck.length-1 ? 'available':'notavailable' }`} onClick={nextCard}>Next</button>
        <button className='checkAnswer' onClick={checkAnswer}>Check Answer</button>
      </div>
    </>
  )
}

export default App;
