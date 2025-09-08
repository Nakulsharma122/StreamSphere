import React from 'react';
import styled from 'styled-components';

const Button = ({ onClick }) => {
  return (
    <StyledWrapper>
      <button className="button" onClick={onClick}> Sign Out </button>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .button {
   --color: #00A97F;
   padding: 0.8em 1em;
   background-color: transparent;
   border-radius: .3em;
   position: relative;
   overflow: hidden;
   cursor: pointer;
   transition: .5s;
   font-weight: 400;
   font-size: 13px; 
   border: 1px solid;
   font-family: inherit;
   text-transform: uppercase;
   color: var(--color);
   z-index: 1;
   margin-top :14px;
  }

  .button::before, .button::after {
   content: '';
   display: block;
   width: 50px;
   height: 50px;
   transform: translate(-50%, -50%);
   position: absolute;
   border-radius: 50%;
   z-index: -1;
   background-color: var(--color);
   transition: 1s ease;
  }

  .button::before {
   top: -1em;
   left: -1em;
  }

  .button::after {
   left: calc(100% + 1em);
   top: calc(100% + 1em);
  }

  .button:hover::before, .button:hover::after {
   height: 410px;
   width: 410px;
  }

  .button:hover {
   color: rgb(10, 25, 30);
  }

  .button:active {
   filter: brightness(.8);
  }`;

export default Button;
