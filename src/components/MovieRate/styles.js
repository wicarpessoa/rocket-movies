import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  gap: 4px;
  svg {
    color: ${({ theme }) => theme.COLORS.PINK_500};
  }
`;
