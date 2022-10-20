import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 116px auto;
  grid-template-areas: "header" "content";
  > main {
    grid-area: content;
    padding: 40px 0;
  }
`;

export const Content = styled.div`
  max-width: 1137px;
  max-height: 581px;
  margin: 0 auto;

  display: flex;
  flex-direction: column;

  .scrollable {
    display: flex;
    flex-direction: column;

    padding: 0 24px 24px 0;
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

    .tags {
      display: flex;
      gap: 8px;
      margin: 40px 0;
    }

    .details {
      display: flex;
      align-items: center;
      gap: 8px;
      margin-top: 24px;

      svg {
        color: ${({ theme }) => theme.COLORS.PINK_500};
      }

      img {
        width: 16px;
        height: 16px;
        border-radius: 50%;
      }

      span {
        color: ${({ theme }) => theme.COLORS.GRAY_100};
        font-size: 16px;
        text-align: justify;
      }
    }
  }

  h1 {
    font-size: 36px;
    font-weight: 500;
    color: ${({ theme }) => theme.COLORS.GRAY_100};
    margin-top: 24px;
  }
  p {
    color: ${({ theme }) => theme.COLORS.GRAY_100};
    font-size: 16px;
    text-align: justify;
  }
`;
