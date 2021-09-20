import Students from "../Students";
import "./style.css";

function HomePage({ setHomePage, studentsList, homePage }) {
  return (
    <div className="homePageContainer">
      <h1>Torneio Tribruxo</h1>
      <h2>Clique no botão para encontrar os feiticeiros!</h2>
      <button
        className="buttonStart"
        onClick={() => {
          setHomePage(false);
          <Students studentsList={studentsList} homePage={homePage}></Students>;
        }}
      >
        Começar!
      </button>
    </div>
  );
}
export default HomePage;
