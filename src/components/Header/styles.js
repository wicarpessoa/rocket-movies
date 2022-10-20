import styled from "styled-components";

export const Container = styled.header`
  grid-area: header;

  height: 116px;
  width: 100%;

  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: ${({ theme }) => theme.COLORS.GRAY_700};

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 123px;

  h1 {
    margin-right: 64px;
    white-space: nowrap;
    font-size: 24px;
    color: ${({ theme }) => theme.COLORS.PINK_500};
    font-weight: 700;
  }
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;

  margin-left: 64px;
  > img {
    width: 56px;
    height: 56px;
    border-radius: 50%;
  }

  > div {
    display: flex;
    flex-direction: column;
    margin-right: 16px;
    line-height: 24px;

    span {
      font-size: 14px;
      color: ${({ theme }) => theme.COLORS.GRAY_500};
      align-self: end;
    }
    strong {
      font-size: 14px;
      color: ${({ theme }) => theme.COLORS.GRAY_100};
    }
  }
`;
