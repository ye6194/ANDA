import logo from './logo.svg';
import './App.css';
import { useState } from "react";

function Main() {
  return (
    <main>
      <p id="p1">안경을 벗고 싶다면?</p>
      <p id="p2">안다와 함께하세요!</p>
      <div><button><img id="heart" src="/pc_heart.png"></img>기대돼요</button></div>
      <div id="expecting">{ }명이 기대하고 있어요!</div>
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
    <img></img>
    <img></img>
    <img></img>
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
