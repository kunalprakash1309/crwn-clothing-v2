import styled from 'styled-components';

export const CheckoutContainer = styled.div`
  width: 55%;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px auto 0;
  margin-bottom: 100px;

  @media screen and (max-width: 800px) {
    width: 90%;
    font-size: 14px;
  }
`;

export const CheckoutHeader = styled.div`
  width: 100%;
  padding: 10px 0;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid darkgrey;
`;

export const HeaderBlock = styled.div`
  text-transform: capitalize;
  width: 23%;
  &:last-child {
    width: 8%;
  }

  @media screen and (max-width: 800px) {
    width: 15%;

    ${'' /* &:last-child {
      width: 12%;
    } */}
  }
`;

export const Total = styled.span`
  margin-top: 30px;
  margin-left: auto;
  margin-bottom: 60px;
  font-size: 36px;

  @media screen and (max-width: 800px) {
   font-size: 24px; 
  }
`;

export const TestDataContainer = styled.div`
  color: red
`