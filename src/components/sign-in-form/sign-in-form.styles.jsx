import styled from 'styled-components';

export const SignInContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 380px;
  h2 {
    margin: 10px 0;
  }

  @media screen and (max-width: 800px) {
    width: 100%;

    button {
    min-width: 125px;
    font-size: 12px;
    padding: 10px 20px;
  }
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;