import "./style.css";

function CardStudents({ char: { name, image, house } }) {
  return (
    <div className={house}>
      <img src={image} alt={name} width="100px" height="100px" />
      <p>{name}</p>
      <p className={house}>{house}</p>
    </div>
  );
}

export default CardStudents;
