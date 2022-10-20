import styled from "styled-components";

export const Container = styled.button`
  padding: 16px 32px;
  background-color: ${({ theme }) => theme.COLORS.PINK_500};
  color: ${({ theme }) => theme.COLORS.BACKGROUND_700};

  border-radius: 8px;
  border: none;

  align-items: center;

  font-size: 16px;
`;
