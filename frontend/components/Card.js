import React from "react";
import Figure from "./Figure";

import styled, { keyframes } from "styled-components";

const kf = keyframes`
50% {
    transform: scale(0.8);
  }

100% {
  transform: scale(1);
}
`;

const StyledCard = styled.div`
  padding: 10px;
  transform: scale(1.5);
  animation: ${kf} 0.2s ease-in-out forwards;

  &:hover {
    background-color: ${(pr) => pr.theme.tertiaryColor};
    h2 {
      color: ${(props) => props.theme.primaryColor};
      font-size: 2rem;
    }
  }
`;

export default function Card({ title, text, imageURL, date }) {
  return (
    <StyledCard className="card">
      <h2>{title}</h2>
      <p>{text}</p>
      <Figure imageURL={imageURL} caption={date} />
    </StyledCard>
  );
}
