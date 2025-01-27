import styled from 'styled-components';

export const LoginDiv = styled.div`
  background: #fafafa;
  height: 100vh;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LoginForm = styled.form`
  width: 400px;
  border: 1px solid lightgray;
  background: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3rem;

  > :nth-child(1) {
    width: 220px;
  }

  > :nth-child(2) {
    width: 150px;
    margin: 1rem 0;
  }

  > input {
    margin: 1rem 0;
    width: 250px;
    font-family: 'Open Sans', sans-serif;
  }
`;

export const LoginButton = styled.button`
  border: none;
  background: #3897F0;
  color: white;
  font-family: 'Open Sans', sans-serif;
  width: 80px;
  padding: 0.8rem;
  margin: 1rem 0;
  border-radius: 5px;
  outline: none;
  cursor: pointer;

  &:hover {
    background: rgb(28, 96, 160);
  }
`

