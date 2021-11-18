import react, { Component } from 'react';

function rollN(d) {
  if (d === 0) return;
  let result = Math.ceil(Math.random() * d);
  return result;
}

export default rollN;
//fix so doesn't always return even number
