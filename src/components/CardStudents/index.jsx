import "./style.css";

function CardStudents({ studentsList }) {
  return (
    <div className={studentsList.house}>
      <img
        src={studentsList.image}
        alt={studentsList.name}
        width="100px"
        height="100px"
      />
      <p>{studentsList.name}</p>
      <p className={studentsList.house}>{studentsList.house}</p>
    </div>
  );
}

export default CardStudents;
