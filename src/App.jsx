import { useState } from "react";
import "./App.css";
import React from "react";
import MedalList from "./components/MedalList";
import MedalForm from "./components/MedalForm";

export const App = () => {
  const [countries, setCountries] = useState([]); //전체 담을 배열

  return (
    <div className="main-container">
      <MedalForm countries={countries} setCountries={setCountries}/>
      

      {countries.length === 0 ? (
          <h4> 아직 추가된 국가가 없습니다. 메달을 추적하세요!</h4>
        ) : (
          <MedalList countries={countries} setCountries={setCountries} />
        )}
      
    </div>
  );
};

export default App;
