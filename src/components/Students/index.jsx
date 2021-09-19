import "./style.css";
import CardStudents from "../CardStudents";

function Students({ filteredStudents }) {
  return (
    <div>
      {filteredStudents.length !== 0 ? (
        <>
          {filteredStudents.map((char, index) => (
            <CardStudents key={index} char={char} />
          ))}
        </>
      ) : null}
    </div>
  );
}
export default Students;
