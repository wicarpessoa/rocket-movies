import styled from "styled-components";

export const Container = styled.span`
  padding: ${({ size }) => parseInt(`${size}`) + "px" + " " + 16 + "px"};
  font-size: 12px;
  font-family: "Roboto", sans-serif;

  border-radius: 8px;

  color: ${({ theme }) => theme.COLORS.GRAY_300};
  background-color: ${({ theme, noteTag }) =>
    noteTag ? theme.COLORS.GRAY_800 : theme.COLORS.BACKGROUND_600};
`;
