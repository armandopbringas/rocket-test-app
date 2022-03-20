import styled from 'styled-components';

export const BoxMessage = styled.div`
  border-radius: 2.5px;
  background-color: #ff63c3;

  .message-wrapp {
    padding: 1.5rem 0.5rem;
    display: flex;
  }

  .message-wrapp-contact {
    line-height: 2;
    padding: 1.5rem 0.5rem;
  }

  .message-wrapp-email,
  .message-wrapp-phone {
    display: flex;
  }
  
  p {
    margin: 0 0.2rem;
  }
`;

export const BoxButton = styled.div`
  width: 100%;
  margin-top: 1rem;
  display: flex;
  justify-content: flex-end;
  
  button {
    border: none;
    border-radius: 2.5px;
    padding: 0.5rem;
    background-color: #ff63c3;
  }
`;

export const StartBoxButton = styled.button`
  width: 100%;
  border: none;
  border-radius: 2.5px;
  padding: 1rem;
  margin-top: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ff63c3;
`;