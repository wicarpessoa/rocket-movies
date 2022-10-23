import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  gap: 16px;
  height: 56px;
  padding: 16px;

  border-radius: 10px;

  color: ${({ theme }) => theme.COLORS.WHITE};
  background-color: ${({ isNew, theme }) =>
    isNew ? "transparent" : theme.COLORS.BACKGROUND_500};
  border: ${({ theme, isNew }) =>
    isNew ? `1px dashed ${theme.COLORS.GRAY_500} ` : "none"};

  > button {
    border: none;
    background: none;
  }

  > input {
    max-width: 150px;

    font-size: 16px;
    font-family: "Roboto", sans-serif;

    background-color: transparent;
    border: none;

    color: ${({ theme }) => theme.COLORS.WHITE};

    padding-left: 8px;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_500};
    }
  }
  > button {
    color: ${({ theme }) => theme.COLORS.PINK_500};
    size: 24px;
  }
`;
