import logo from './logo.svg';
import './App.css';
import { useState } from "react";

function Main() {
  const [isClicked, setIsClicked] = useState(false);
  const [expectingCount, setExpectingCount] = useState(0);

  const handleClick = () => {
    setIsClicked(!isClicked);
    setExpectingCount(isClicked ? expectingCount - 1 : expectingCount + 1);
  }

  return (
    <main>
      <p id="p1">안경을 벗고 싶다면?</p>
      <p id="p2">안다와 함께하세요!</p>
      <div>
        <button className={isClicked ? "clicked" : ""} onClick={handleClick}>
          <img id="heart" src={isClicked ? "/pc_heart_clicked.png" : "/pc_heart.png"}></img>기대돼요
        </button>
      </div>
      <div id="expecting">{expectingCount}명이 기대하고 있어요!</div>
    </main>
  )
}

function Nav() {
  return (
    <nav>
      <div id="menu"></div>
      <img id="logo" src="/logo/logo.png" alt="logo"></img>
    </nav>
  )
}

function Img() {
  return (
    <div>
      <img></img>
      <img></img>
      <img></img>
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <Nav></Nav>
      <Main><Img></Img></Main>
    </div >
  );
}

export default App;
