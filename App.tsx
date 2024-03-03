App.tsx

import { useState } from "react";
import "./App.css";

const phrases = [
  "No",
  "Munnchkinn are you sure?",
  "Last chance bolra hu!",
  "Veeyyyy no isnt an option ;(",
  "Meaaaniooonnn this isn't an option",
];

function App() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;

  function handleNoClick() {
    setNoCount(noCount + 1);
  }

  function getNoButtonText() {
    return phrases[Math.min(noCount, phrases.length - 1)];
  }

  return (
    <div className="valentine-container">
      {yesPressed ? (
        <>
          <img
            alt="HarryStyles"
            src="https://ih1.redbubble.net/image.2005303065.6909/st,small,507x507-pad,600x600,f8f8f8.jpg"
          />
          <div className="muahhh-bbg">Muahhh bbg</div>
        </>
      ) : (
        <>
          <img
            alt="Aesthetic Gif"
            src="https://media.giphy.com/media/11fIOE3vkIPdIY/giphy.gif"
          />
          <div>Will you be my Valentine boo?</div>
          <div>
            <button
              className="yesButton"
              style={{ fontSize: yesButtonSize }}
              onClick={() => setYesPressed(true)}
            >
              Yes
            </button>
            <button onClick={handleNoClick} className="noButton">
              {getNoButtonText()}
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
