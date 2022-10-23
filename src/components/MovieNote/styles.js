import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled(Link)`
  padding: 32px;

  border: none;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_100};
  border-radius: 16px;
`;

export const Content = styled.div`
  display: flex;

  flex-direction: column;
  align-items: flex-start;
  > h2 {
    font-size: 24px;
    font-weight: 700;
    color: ${({ theme }) => theme.COLORS.GRAY_100};
    margin-bottom: 8px;
  }
  > p {
    font-family: "Roboto", sans-serif;
    font-size: 16px;
    text-align: justify;
    color: #999591;
    margin: 16px 0;

    display: -webkit-box;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: normal;
    -webkit-line-clamp: 2;
  }
`;
