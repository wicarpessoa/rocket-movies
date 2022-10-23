import styled from "styled-components";

import backgroundImg from "../../assets/background.png";

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: stretch;
`;
export const Form = styled.form`
  padding: 0 160px 0 132px;

  display: flex;
  flex-direction: column;
  justify-content: center;

  div:nth-child(4) {
    margin-bottom: 8px;
  }
  div:nth-child(5) {
    margin-bottom: 8px;
  }

  button:nth-child(7) {
    width: 100%;
    margin-top: 16px;
  }

  > h1 {
    font-size: 48px;
    color: ${({ theme }) => theme.COLORS.PINK_500};
    text-align: center;
  }
  > h2 {
    font-size: 24px;
    margin: 48px 0;
    color: ${({ theme }) => theme.COLORS.GRAY_100};
  }
  > p {
    font-size: 14px;
    color: ${({ theme }) => theme.COLORS.GRAY_400};
  }
  > a {
    display: flex;
    align-items: center;
    justify-content: center;

    gap: 8px;

    margin-top: 42px;
    color: ${({ theme }) => theme.COLORS.PINK_500};
  }
`;

export const Background = styled.div`
  flex: 1;
  background: url(${backgroundImg}) no-repeat center center;
  background-size: cover;
`;
