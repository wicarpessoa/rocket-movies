import styled from "styled-components";

export const Container = styled.button`
  background: none;
  color: ${({ theme }) => theme.COLORS.PINK_500};

  display: flex;
  align-items: center;
  gap: 8px;

  border: none;
  font-size: 16px;
  svg {
    color: ${({ theme }) => theme.COLORS.PINK_500};
  }
`;
