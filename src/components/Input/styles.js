import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_500};
  color: ${({ theme }) => theme.COLORS.GRAY_300};

  margin-bottom: 8px;
  border-radius: 10px;

  > input {
    height: 56px;
    width: 100%;

    padding: 24px;

    color: ${({ theme }) => theme.COLORS.WHITE};
    background-color: transparent;
    border: 0;

    font-size: 14px;
    &::placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_500};
    }
  }
`;
