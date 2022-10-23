import styled from "styled-components";

export const Container = styled.textarea`
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_500};
  color: ${({ theme }) => theme.COLORS.WHITE};

  border-radius: 10px;

  height: 274px;
  width: 100%;

  padding: 20px 16px;

  border: 0;

  resize: none;

  font-size: 14px;
  font-family: "Roboto", sans-serif;
  ::placeholder {
    color: ${({ theme }) => theme.COLORS.GRAY_500};
  }
`;
