import Students from "../Students";

function HomePage({ setHomePage, studentsList, homePage }) {
  return (
    <>
      <h1>Torneio Tribruxo</h1>
      <h2>Clique no botão para encontrar os feiticeiros!</h2>
      <button
        onClick={() => {
          setHomePage(false);
          <Students studentsList={studentsList} homePage={homePage}></Students>;
        }}
      >
        Começar!
      </button>
    </>
  );
}
export default HomePage;
