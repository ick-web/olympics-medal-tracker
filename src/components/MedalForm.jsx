import React, { useState }  from 'react'

export const MedalForm = ({ countries, setCountries }) => {
    const [country, setCountry] = useState("");
    const [gold, setGold] = useState(0);
    const [silver, setSilver] = useState(0);
    const [bronze, setBronze] = useState(0); // 입력값 담기
    const existingCountry = countries.find((item) => item.country === country.trim()); //중복 찾기
  
    
     // 새로운 국가 메달집계 추가
    const addMedalCounter = (e) => {
      if(country === ''){
        return alert('국가를 입력해주세요')
      }else if(gold < 0 || silver < 0 || bronze < 0 ){
        return alert('0보다 작을 수 없습니다')
      }else if(existingCountry){
        return alert('이미 추가된 국가 입니다.')
      }else if(!isNaN(country)){
        return alert('국가를 입력해주세요.')
      }
      e.preventDefault(); //새로고침 방지
      const newCountry = {
        id: crypto.randomUUID(),
        country: country,
        gold: gold,
        silver: silver,
        bronze: bronze,
      };
      setCountries([...countries, newCountry]); // 배열에 새로운메달집계 추가
      setCountry("");
      setGold(0);
      setSilver(0);
      setBronze(0);
    };
    //업데이트
    const updateMedalList = () => {
      if(existingCountry){  //중복되는게 있으면
        const updatedCountries = countries.map((item) =>
          item.country === country.trim()
          ? { ...item, gold: item.gold+gold, silver: item.silver+silver, bronze: item.bronze+bronze }
          : item
        );
        setCountries(updatedCountries);
      } else {
        return alert("국가가 존재하지 않습니다. 먼저 추가하세요");
      }
  
      setCountry("");
      setGold(0);
      setSilver(0);
      setBronze(0);
    }

    const subStyle = {
        padding: "10px",
        display: "flex",
        gap: "12px",
        textAlign: "center",
        alignContent: "center",
        justifyContent: "center",
      };

  return (
    <>
    <form>
        <h1>2024 파리 올림픽</h1>
        <div style={subStyle}>
          <div className="input-container">
            <div>
              국가명
              <input onChange={(e) => setCountry(e.target.value)}
                value={country} type="text"/>
            </div>
            <div>
              금메달
              <input
                onChange={(e) => setGold(Number(e.target.value))}
                value={gold} type="number"/>
            </div>
            <div>
              은메달
              <input
                onChange={(e) => setSilver(Number(e.target.value))}
                value={silver} type="number"/>
            </div>
            <div>
              동메달
              <input
                onChange={(e) => setBronze(Number(e.target.value))}
                value={bronze} type="number"/>
            </div>
          </div>
          <div className="button-container">
            <button onClick={addMedalCounter} type="button">
              국가 추가
            </button>
            <button onClick={updateMedalList} type="button">업데이트</button>
          </div>
        </div>
      </form>
    </>
  )
}

export default MedalForm;
