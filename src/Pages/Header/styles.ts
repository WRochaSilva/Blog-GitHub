import styled from "styled-components";

export const HeaderContainer = styled.header`
  background: linear-gradient(to right, #0b1b2b, #1562af, #1562af);
  background-size: 200% 100%;
  animation: gradientNoise 5s infinite linear;
  @keyframes gradientNoise {
    0%,
    20%,
    50%,
    80%,
    100% {
      background-position: 0 0;
    }
    40% {
      background-position: 100% 0;
    }
    60% {
      background-position: 100% 100%;
    }
  }

  height: 200px;
`;
export const HeaderContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
