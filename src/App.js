import "./App.css";
import { useState, useEffect } from "react";
import HomePage from "./components/HomePage";
import Students from "./components/Students";

function App() {
  const [studentsList, setStudentsList] = useState([]);
  const [homePage, setHomePage] = useState(true);
  const [filteredStudents, setFilteredStudents] = useState([]);

  useEffect(() => {
    fetch("https://hp-api.herokuapp.com/api/characters/students")
      .then((response) => response.json())
      .then((response) => {
        setStudentsList(response);
      })
      .catch((err) => console.log(err));
  }, []);

  const randomCard = (card) => {
    return card[Math.floor(Math.random() * card.length)];
  };

  const handleCards = () => {
    const cardOne = randomCard(studentsList);
    const cardTwo = studentsList.find((char) => char.house !== cardOne.house);
    const cardThree = studentsList.find(
      (char) => char.house !== cardOne.house && char.house !== cardTwo.house
    );

    setFilteredStudents([cardOne, cardTwo, cardThree]);
  };

  return (
    <div className="App">
      {homePage ? (
        <HomePage
          setHomePage={setHomePage}
          handleCards={handleCards}
          filteredStudents={filteredStudents}
        />
      ) : (
        <Students
          filteredStudents={filteredStudents}
          handleCards={handleCards}
        />
      )}
    </div>
  );
}

export default App;
