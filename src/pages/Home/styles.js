import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 116px auto;
  grid-template-areas: "header" "content";

  > main {
    padding: 40px 0;
    grid-area: content;
  }
`;

export const Content = styled.div`
  max-width: 1137px;
  margin: 0 auto;
  h1 {
    font-size: 36px;
    font-weight: 500;
    color: ${({ theme }) => theme.COLORS.GRAY_100};
  }

  .heading {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .tags {
    display: flex;
    gap: 8px;
  }
`;

export const MoviesNotes = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  max-height: 720px;

  padding: 20px 16px 32px 0;
  margin-top: 20px;

  overflow-y: auto;
  ::-webkit-scrollbar {
    width: 8px;
  }
  ::-webkit-scrollbar-track {
    background: transparent;
  }
  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.COLORS.PINK_500};
    border-radius: 8px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: ${({ theme }) => theme.COLORS.PINK_600};
  }
`;
