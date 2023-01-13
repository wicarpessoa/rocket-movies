import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 116px auto;
  grid-template-areas:
    "header"
    "content";
  > main {
    grid-area: content;
    overflow-y: auto;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;

  gap: 40px;

  max-width: 784px;
  margin: 40px auto;

  h1 {
    font-size: 36px;
    font-weight: 500;
    color: ${({ theme }) => theme.COLORS.GRAY_100};
    margin-top: 24px;
  }
  h3 {
    color: ${({ theme }) => theme.COLORS.GRAY_600};
    font-size: 20px;
    font-weight: 400;
    margin-bottom: 24px;
  }
  .inputs-and-buttons-container {
    display: flex;
    gap: 40px;

    button {
      width: 100%;
    }
    button:nth-child(1) {
      background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
      color: ${({ theme }) => theme.COLORS.PINK_500};
    }
  }
`;

export const MarkerContainer = styled.div`
  display: flex;

  flex-wrap: wrap;

  gap: 24px;

  width: 100%;

  border-radius: 8px;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
  padding: 16px;
`;
