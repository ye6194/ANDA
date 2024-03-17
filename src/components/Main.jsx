import React from "react";

function Main({ children }) {
  const [isClicked, setIsClicked] = useState(false);
  const [expectingCount, setExpectingCount] = useState(0);

  const handleClick = () => {
    setIsClicked(!isClicked);
    setExpectingCount(isClicked ? expectingCount - 1 : expectingCount + 1);
  };

  return (
    <main>
      <p id="p1">안경을 벗고 싶다면?</p>
      <p id="p2">안다와 함께하세요!</p>
      <div>
        <button className={isClicked ? "clicked" : ""} onClick={handleClick}>
          <img
            id="heart"
            src={isClicked ? "/pc_heart_clicked.png" : "/pc_heart.png"}
          ></img>
          기대돼요
        </button>
      </div>
      <div id="expecting">{expectingCount}명이 기대하고 있어요!</div>
      {children}
    </main>
  );
}

export default Main;
