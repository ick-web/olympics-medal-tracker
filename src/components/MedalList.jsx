import React from "react";

export const MedalList = ({ countries, setCountries }) => {
  const sortedCountries = [...countries].sort((a, b) => b.gold - a.gold); // 금메달 기준 내림차순 정렬

  //삭제
  const handleDeleteCountry = (id) => {
    const filteredCountry = countries.filter((selected) => selected.id !== id);
    setCountries(filteredCountry);
  };
  return (
    <div>
      <table className="medal-table">
        <thead>
          <tr>
            <th>국가명</th>
            <th>금메달</th>
            <th>은메달</th>
            <th>동메달</th>
            <th>액션</th>
          </tr>
        </thead>
        <tbody>
          {sortedCountries.map((item) => (
            <tr key={item.id}>
              <td>{item.country}</td>
              <td>{item.gold}</td>
              <td>{item.silver}</td>
              <td>{item.bronze}</td>
              <td>
                <button onClick={() => handleDeleteCountry(item.id)}>
                  삭제
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MedalList;
