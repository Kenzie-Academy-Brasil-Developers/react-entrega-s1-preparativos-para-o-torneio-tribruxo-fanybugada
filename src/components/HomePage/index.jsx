import Students from "../Students";

function HomePage({ setHomePage, handleCards, filteredStudents }) {
  return (
    <>
      <h1>Torneio Tribruxo</h1>
      <h2>Clique no botão para encontrar os feiticeiros!</h2>
      <button
        onClick={() => {
          setHomePage(false);
          <Students
            filteredStudents={filteredStudents}
            handleCards={handleCards}
          ></Students>;
        }}
      >
        Começar!
      </button>
    </>
  );
}
export default HomePage;
