import "./App.css";
import { useState, useEffect } from "react";
import HomePage from "./components/HomePage";
import Students from "./components/Students";

function App() {
  const [studentsList, setStudentsList] = useState([]);
  const [homePage, setHomePage] = useState(true);
  const [filteredStudents, setFilteredStudents] = useState([]);

  useEffect(() => {
    fetch("http://hp-api.herokuapp.com/api/characters/students")
      .then((response) => response.json())
      .then((response) => setStudentsList(response))
      .catch((err) => console.log(err));
  }, []);

  const randomCard = (card) => {
    return Math.floor(Math.random() * card);
  };

  const cardOne = studentsList[randomCard(studentsList.length)];
  const filterOne = studentsList.filter((char) => char.house !== cardOne.house);

  const cardTwo = filterOne[randomCard(filterOne.length)];
  const filterTwo = filterOne.filter((char) => char.house !== cardTwo.house);

  const cardThree = filterTwo[randomCard(filterTwo.length)];

  setFilteredStudents([cardOne, cardTwo, cardThree]);

  return (
    <div className="App">
      <HomePage homePage={homePage} setHomePage={setHomePage} />
      <Students filteredStudents={filteredStudents} />
    </div>
  );
}

export default App;
