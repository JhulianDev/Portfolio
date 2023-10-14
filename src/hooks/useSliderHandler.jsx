import { useState } from "react"

const useSliderHandler = () => {
  const [CurrentCard, setCurrentCard] = useState(1);

  const moveRight = () => {
    setCurrentCard((currentCard) => (currentCard === 3 ? 1 : currentCard + 1));
  };

  const moveLeft = () => {
    setCurrentCard((currentCard) => (currentCard === 1 ? 3 : currentCard - 1));
  }

  const positionSlider = () => {
    let translateValue = -((CurrentCard - 1) * 100); 
    return `translateX(${translateValue}%)`
  }

  return { CurrentCard, moveRight, moveLeft, positionSlider }; 
}

export default useSliderHandler;