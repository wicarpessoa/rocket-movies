import styled from "styled-components";
import theme from "../../styles/theme";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};

  > header {
    width: 100%;
    height: 144px;

    background: ${({ theme }) => theme.COLORS.BACKGROUND_100};

    display: flex;
    align-items: center;

    padding: 0 124px;

    button {
      border:none;
      background-color: transparent;
    }

    svg {
      color: ${({ theme }) => theme.COLORS.GRAY_500};
      font-size: 20px;
    }
  }
`;

export const Form = styled.form`
  max-width: 340px;
  margin: 30px auto 0;

  div:not(:first-child):not(:nth-child(2)):not(:nth-child(4)) {
    margin-top: 8px;
  }

  div:nth-child(2) {
    margin-top: 64px;
  }

  div:nth-child(4) {
    margin-top: 24px;
  }

  > button {
    width: 100%;
    margin-top: 24px;
  }
`;
export const Avatar = styled.div`
  position: relative;
  margin: -124px auto 32px;

  width: 186px;
  height: 186px;

  > img {
    border-radius: 50%;
    width: 186px;
    height: 186px;
  }

  > label {
    width: 48px;
    height: 48px;

    background-color: ${({ theme }) => theme.COLORS.PINK_500};
    border-radius: 50%;

    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
    bottom: 7px;
    right: 7px;

    cursor: pointer;

    input {
      display: none;
    }
    svg {
      width: 20px;
      height: 20px;

      color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
    }
  }
`;
