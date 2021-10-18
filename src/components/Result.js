import React from "react";

const Error = ({ result }) => {
  if (Object.keys(result).length === 0) {
    return null;
  }
  console.log(result);
  
  return (
    <div>
      <h4>High today: {result.HIGHDAY}</h4>
      <h4>Low today: {result.LOWDAY}</h4>
      <h2>Current: {result.PRICE}</h2>
      
      <p>Last Update: {result.LASTUPDATE}</p>
      <img src={result.IMAGEURL} alt="" />
    </div>
  );
};

export default Error;
