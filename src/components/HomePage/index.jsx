function HomePage({ setHomePage }) {
  return (
    <>
      <h1>Torneio Tribruxo</h1>
      <h2>Clique no botão para encontrar os feiticeiros!</h2>
      <button
        onClick={() => {
          setHomePage(false);
        }}
      >
        Começar!
      </button>
    </>
  );
}
export default HomePage;
