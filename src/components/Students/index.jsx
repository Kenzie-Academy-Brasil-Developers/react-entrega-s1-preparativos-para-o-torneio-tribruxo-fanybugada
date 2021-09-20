import "./style.css";
import { useState, useEffect } from "react";

function Students({ studentsList, setHomePage }) {
  const [cardsNumber, setCardsNumber] = useState(0);
  const [randomCards, setRandomCards] = useState(
    Math.floor(Math.random() * 11)
  );
  const [studentsCards, setStudentsCard] = useState([
    studentsList[randomCards],
  ]);

  useEffect(() => {
    if (cardsNumber < 2) {
      filteredCards();
    }
  });

  const filteredCards = () => {
    setRandomCards(Math.floor(Math.random() * 11));

    if (
      studentsCards.every((card) => card.name !== studentsList[randomCards]) &&
      studentsCards.every(
        (card) => card.house !== studentsList[randomCards].house
      )
    ) {
      setStudentsCard([...studentsCards, studentsList[randomCards]]);
      setCardsNumber(cardsNumber + 1);
    }
  };
  console.log(studentsCards);
  return (
    <div className="allCardsContainer">
      <div className="studentsContainer">
        {studentsCards.map((card, index) => (
          <div key={index} className={card.house}>
            <img
              src={card.image}
              alt={card.name}
              width="100px"
              height="100px"
            />
            <p>{card.name}</p>
            <p className={card.house}>{card.house}</p>
          </div>
        ))}
      </div>
      <button onClick={() => setHomePage(true)}>Tentar Novamente</button>
    </div>
  );
}
export default Students;
