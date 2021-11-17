import react, { Component } from 'react';

function rollN(multiplier, d){
  if (d === 0) return;
  let result = Math.ceil(Math.random()*d);
  return result * multiplier;
}

export default rollN;