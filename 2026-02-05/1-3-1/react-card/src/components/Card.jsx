import { useState } from "react";

function Card() {
  const [isFlipped, setIsFlipped] = useState(true);
  const [likeCount, setLikeCount] = useState(0);

  const handleCardClick = () => {
    setIsFlipped((prev) => !prev);
  };

  const handleLikeClick = (e) => {
    e.stopPropagation();
    setLikeCount((prev) => prev + 1);
  };

  const skills = ["HTML", "CSS", "JS", "React"];

  return (
    <div
      onClick={handleCardClick}
      style={{
        padding: 20,
        border: "5px solid #999",
        width: "200px",
        height: "200px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "start",
        backgroundColor: "coral",
        position: "relative",
        cursor: "pointer",
      }}
    >
      <p
        style={{
          margin: "0",
        }}
      >
        {isFlipped ? (
          <>
            <p
              style={{
                margin: "0",
                fontSize: "18px",
                fontWeight: "bold",
              }}
            >
              User Name
            </p>
            <p
              style={{
                margin: "10px 0 0 50px",
              }}
            >
              Frontend Dev
            </p>
          </>
        ) : (
          <>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                fontSize: "12px",
              }}
            >
              <p
                style={{
                  fontSize: "14px",
                  margin: "0",
                }}
              >
                SKILLS
              </p>

              <div
                style={{
                  display: "flex",
                  gap: "7px",
                }}
              >
                {skills.map((skill) => (
                  <p
                    key={skill}
                    style={{
                      padding: "2px 8px",
                      borderRadius: "6px",
                      border: "2px solid black",

                      marginTop: "5px",
                    }}
                  >
                    {skill}
                  </p>
                ))}
              </div>
            </div>
          </>
        )}
      </p>

      <button
        onClick={handleLikeClick}
        style={{
          width: "60px",
          height: "30px",
          border: "5px solid red",
          backgroundColor: "coral",
          display: "flex",
          textAlign: "center",
          position: "absolute",
          right: "10px",
          bottom: "10px",
          cursor: "pointer",
        }}
      >
        ❤️ {likeCount}
      </button>
    </div>
  );
}

export default Card;
