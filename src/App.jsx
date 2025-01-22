import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import React from "react";

export const App = () => {
  const [countries, setCountries] = useState([]); //전체 담을 배열

  const [country, setCountry] = useState("");
  const [gold, setGold] = useState(0);
  const [silver, setSilver] = useState(0);
  const [bronze, setBronze] = useState(0); // 입력값 담기

  const addMedalCounter = (e) => {
    // 새로운 국가 메달집계 추가
    e.preventDefault(); //새로고침 방지
    const newCountry = {
      country: country,
      gold: gold,
      silver: silver,
      bronze: bronze,
    };
    setCountries([...countries, newCountry]); // 배열에 새로운메달집계 추가
  };

  const sortedCountries = [...countries].sort((a, b) => b.gold - a.gold); // 금메달 기준 내림차순 정렬

  const subStyle = {
    padding: "10px",
    display: "flex",
    gap: "12px",
    textAlign: "center",
    alignContent: "center",
    justifyContent: "center",
  };

  const formStyle = {
    display: "flex",
    border: "1px solid #c3c3c3",
    borderRadius: "5px",
    alignContent: "center",
    justifyContent: "center",
    height: "40px",
  };

  const buttonStyle = {
    marginTop: "20px",
    color: "black",
    backgroundColor: "orange",
    height: "50px",
    width: "100px",
    borderRadius: "5px",
    border: "0px",
    boxShadow: "1px 1px 3px 0.5px",
  };

  return (
    <div className="main-container">
      <form>
        <h1>2024 파리 올림픽</h1>
        <div style={subStyle}>
          <div style={subStyle}>
            <div>
              국가명
              <input
                onChange={(e) => setCountry(e.target.value)}
                style={formStyle}
                type="text"
              />
            </div>
            <div>
              금메달
              <input
                onChange={(e) => setGold(Number(e.target.value))}
                value={gold}
                style={formStyle}
                type="number"
              />
            </div>
            <div>
              은메달
              <input
                onChange={(e) => setSilver(Number(e.target.value))}
                value={silver}
                style={formStyle}
                type="number"
              />
            </div>
            <div>
              동메달
              <input
                onChange={(e) => setBronze(Number(e.target.value))}
                value={bronze}
                style={formStyle}
                type="number"
              />
            </div>
          </div>
          <div style={subStyle}>
            <button onClick={addMedalCounter} type="button" style={buttonStyle}>
              국가 추가
            </button>
            <button style={buttonStyle}>업데이트</button>
          </div>
        </div>
      </form>
      {/* 테이블영역 */}
      <div>
        {countries.length > 0 && (
          <span>아직 추가된 국가가 없습니다. 메달을 추적하세요</span>
        )}
        <table>
          <thead>
            <tr>
              <th>국가명</th>
              <th>금메달</th>
              <th>은메달</th>
              <th>동메달</th>
            </tr>
          </thead>
          <tbody>
            {sortedCountries.map((item, index) => (
              <tr key={`${item.country} - ${index}`}>
                <td>{item.country}</td>
                <td>{item.gold}</td>
                <td>{item.silver}</td>
                <td>{item.bronze}</td>
                <td>
                  <button>삭제</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default App;
