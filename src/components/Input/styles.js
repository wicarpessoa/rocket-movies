import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_500};
  color: ${({ theme }) => theme.COLORS.GRAY_300};

  border-radius: 10px;

  > svg {
    margin-left: 16px;
  }

  > input {
    height: 56px;
    width: 100%;

    padding: 20px 16px;

    color: ${({ theme }) => theme.COLORS.WHITE};
    background-color: transparent;
    border: 0;

    font-size: 16px;
    &::placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_500};
    }
  }
`;
