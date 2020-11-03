import React from 'react';
import styled from '@emotion/styled';

const Message = styled.p`
  background-color: rgb(127, 224, 237);
  margin-top: 2rem;
  padding: 1rem;
  text-align: center;
`;

const QuoteResult = styled.div`
  text-align: center;
  padding: 0.5rem;
  border: 1px solid #26c6da;
  background-color: rgb(217, 224, 237);
  margin-top: 1rem;
  position: relative;
`;

const QuoteText = styled.p`
  color: #00838f;
  padding: 1rem;
  text-transform: uppercase;
  font-weight: bold;
  margin: 0;
`;

const Result = ({ quote }) => {
  let toRender;

  if (!quote) {
    toRender = <Message>Elige año, marca, y tipo de seguro.</Message>;
  } else {
    toRender = (
      <QuoteResult>
        <QuoteText>El total es: ${quote}</QuoteText>
      </QuoteResult>
    );
  }

  return toRender;
}

export default Result;
