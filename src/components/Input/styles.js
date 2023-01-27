import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_500};
  color: ${({ theme }) => theme.COLORS.GRAY_300};

  border-radius: 10px;

  > svg {
    margin-left: 16px;
  }

  > input:-webkit-autofill,
  input:-webkit-autofill:hover, 
  input:-webkit-autofill:focus, 
  input:-webkit-autofill:active{
  -webkit-box-shadow: 0 0 0 30px ${({ theme }) => theme.COLORS.BACKGROUND_500} inset !important;
  }
  > input:-webkit-autofill{
    -webkit-text-fill-color:${({ theme }) => theme.COLORS.WHITE} !important;
  }

  > input {
    height: 56px;
    width: 100%;

    padding: 20px 16px;

    color: ${({ theme }) => theme.COLORS.WHITE};
    background-color: transparent;
    border: 0;

    font-size: 16px;

  

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_500};
    }
  }
`;
