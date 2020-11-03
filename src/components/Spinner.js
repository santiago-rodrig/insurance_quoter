import React from 'react';
import styled from '@emotion/styled';

const SpinnerStyles = styled.div`
  margin-top: 2rem;
  margin-bottom: 2rem;

  .sk-chase {
    width: 40px;
    height: 40px;
    position: relative;
    animation: sk-chase 2.5s infinite linear both;
    margin: 0 auto;
  }

  .sk-chase-dot {
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0; 
    animation: sk-chase-dot 2.0s infinite ease-in-out both; 
  }

  .sk-chase-dot:before {
    content: '';
    display: block;
    width: 25%;
    height: 25%;
    background-color: #26c6da;
    border-radius: 100%;
    animation: sk-chase-dot-before 2.0s infinite ease-in-out both; 
  }

  .sk-chase-dot:nth-of-type(1) { animation-delay: -1.1s; }
  .sk-chase-dot:nth-of-type(2) { animation-delay: -1.0s; }
  .sk-chase-dot:nth-of-type(3) { animation-delay: -0.9s; }
  .sk-chase-dot:nth-of-type(4) { animation-delay: -0.8s; }
  .sk-chase-dot:nth-of-type(5) { animation-delay: -0.7s; }
  .sk-chase-dot:nth-of-type(6) { animation-delay: -0.6s; }
  .sk-chase-dot:nth-of-type(1):before { animation-delay: -1.1s; }
  .sk-chase-dot:nth-of-type(2):before { animation-delay: -1.0s; }
  .sk-chase-dot:nth-of-type(3):before { animation-delay: -0.9s; }
  .sk-chase-dot:nth-of-type(4):before { animation-delay: -0.8s; }
  .sk-chase-dot:nth-of-type(5):before { animation-delay: -0.7s; }
  .sk-chase-dot:nth-of-type(6):before { animation-delay: -0.6s; }

  @keyframes sk-chase {
    100% { transform: rotate(360deg); } 
  }

  @keyframes sk-chase-dot {
    80%, 100% { transform: rotate(360deg); } 
  }

  @keyframes sk-chase-dot-before {
    50% {
      transform: scale(0.4); 
    } 100%, 0% {
      transform: scale(1.0); 
    } 
  }
`;

const Spinner = () => {
  return (
    <SpinnerStyles>
      <div className="sk-chase">
        <div className="sk-chase-dot"></div>
        <div className="sk-chase-dot"></div>
        <div className="sk-chase-dot"></div>
        <div className="sk-chase-dot"></div>
        <div className="sk-chase-dot"></div>
        <div className="sk-chase-dot"></div>
      </div>
    </SpinnerStyles>
  );
}

export default Spinner;
