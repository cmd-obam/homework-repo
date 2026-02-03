import "./Card.css";

function Card() {
  const name = "한찬우";
  const birthYear = 1992;
  const hobbies = ["코딩", "게임", "예능", "볼링"];
  const age = new Date().getFullYear() - birthYear;

  return (
    <>
      <div className="card">
        <p className="name">이름 :{name}</p>
        <p className="age">나이 : {age}세</p>
        <p className="hobby">취미 : {hobbies.join(", ")}</p>
      </div>
    </>
  );
}

export default Card;
