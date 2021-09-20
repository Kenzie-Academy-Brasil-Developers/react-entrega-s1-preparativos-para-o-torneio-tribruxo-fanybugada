import "./App.css";
import { useState, useEffect } from "react";
import HomePage from "./components/HomePage";
import Students from "./components/Students";

function App() {
  const [studentsList, setStudentsList] = useState([]);
  const [homePage, setHomePage] = useState(true);

  useEffect(() => {
    fetch("https://hp-api.herokuapp.com/api/characters/students")
      .then((response) => response.json())
      .then((response) => {
        setStudentsList(response);
      })
      .catch((err) => console.log(err));
  }, [studentsList]);

  return (
    <div className="App">
      {homePage && (
        <HomePage
          homePage={homePage}
          setHomePage={setHomePage}
          studentsList={studentsList}
        />
      )}
      {!homePage && (
        <Students setHomePage={setHomePage} studentsList={studentsList} />
      )}
    </div>
  );
}

export default App;
