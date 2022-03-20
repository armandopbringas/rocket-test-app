import styled from 'styled-components';

export const Header = styled.header`
  height: 8rem;
  padding: 2rem;
  background-color: #ff63c3;

  .header-title-wrapper {
    display: flex;
    justify-content: space-between;
  }

  .header-text-wrapper {
    gap: 5px;
    display: flex;
    align-items: center;
  }

  .clock-logo {
    width: 1rem;
    height: 1rem;
  }

  h3 {
    margin-top: 0;
  }
`;

export const FormWrapper = styled.div`
  gap: 1rem;
  margin: 2rem 0;
  display: flex;
  justify-content: center;

  .avatar-img {
    width: 4rem;
    height: 4rem;
    object-fit: cover;
    border-radius: 100%;
  }

  .form {
    width: 15rem;
    border-radius: 2.5px;
    display: flex;
    padding: 1.5rem;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    background-color: #f8f9fa;
  }

  input {
    width: 100%;
    margin: 0.25rem 0;
    border-radius: 2.5px;
    border-color: #e9ecef;
    padding: 1rem 0.25rem;
    background-color: #f8f9fa;
  }
`;