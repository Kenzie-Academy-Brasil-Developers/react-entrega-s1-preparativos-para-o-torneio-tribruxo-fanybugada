import "./style.css";
import CardStudents from "../CardStudents";

function Students({ filteredStudents, handleCards }) {
  return (
    <div>
      {filteredStudents.map((char, index) =>
        (<CardStudents key={index} char={char} />)(
          <button onClick={() => handleCards()}>Tentar Novamente</button>
        )
      )}
    </div>
  );
}
export default Students;
