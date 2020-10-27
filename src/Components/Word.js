import React, { useEffect, useState } from 'react'
import styled, { keyframes } from "styled-components";

const fadeInOpacity = keyframes`
0% {
  opacity: 0;
}
100% {
  opacity: 1;
}
`;

const WordStyle = styled.p`
  text-align: center;
  text-transform: uppercase;

  margin-block-start: 0em;
  margin-block-end: 0em;
  font-size: 3em;
  font-weight: bold;

  color: #548dd5;
  
  opacity: 1;
	animation-name: ${fadeInOpacity};
	animation-iteration-count: 1;
	animation-timing-function: ease-in;
	animation-duration: 3s;
`;

export default function Word({ symbol }) {
  const [symbolList, setSymbolList] = useState(symbol.split(''))

  useEffect(() => {
    setSymbolList(symbol.split(''));

  }, [symbol])

  return (
    <div>
      {symbolList.map((s, index) => <WordStyle key={index}>{s}</WordStyle>)}
    </div>
  )
}
