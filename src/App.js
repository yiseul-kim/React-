/* eslint-disable */

import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let day = '8월 18일 발행';
  let [글제목, 글제목변경] = useState(['남자코트 추천', '강남 우동맛집', '파이썬독학']);
  let [좋아요, 좋아요변경] = useState(0);

  return (
    <div className="App">
      <div className="black-nav">
        <h4> ReactBLOG </h4>
      </div>

      <button onClick={()=>{
          let copy = [...글제목];
          copy[0]='여자코트 추천';
          글제목변경(copy);
        }}>글수정</button>

      <div className="list">
        <h4 >{ 글제목[0] } <br/>
        <p>
        <span onClick={ ()=>{
          좋아요변경(좋아요+1)
        }
         }>💕</span> {좋아요} </p></h4>
         
        <p>{day}</p>
      </div>

      <div className="list">
        <h4>{ 글제목[1] }</h4>
        <p>{day}</p>
      </div>

      <div className="list">
        <h4>{ 글제목[2] }</h4>
        <p>{day}</p>
      </div>
      
    </div>
  );
}

export default App;