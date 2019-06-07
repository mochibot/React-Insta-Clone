import styled from 'styled-components';

export const SearchBarDiv = styled.div`
  position: fixed;
  top: 0;
  max-width: 1000px;
  width: 100%;
  margin: 0 auto;
  z-index: 3;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid lightgray;
  background: white;
`; 

const FlexDiv = styled.div`
  display: flex;
`;

export const SearchLogo = styled(FlexDiv)`
  align-items: center;
      
  > :first-child {
    border-right: 1px solid lightgray;
    padding: 2px;
    width: 5rem;
  }

  > img {
    padding: 5px;
    width: 120px;
  }
`;

export const SearchForm = styled.form`
  position: relative;
  padding: 0;
  margin: 0;
  display: flex;
  align-items: center;

  > :first-child {
    position: absolute;
    margin-left: 30%;
    color: rgb(196, 196, 196);
  }

  > input {
    border-radius: 3px;
    line-height: 1.8rem;
    background: rgb(240, 240, 240);
    border: 1px solid rgb(196, 196, 196);
    color: rgb(196, 196, 196);
    text-align: center;
  }
`;

export const SearchIcons = styled(FlexDiv)`
  > * {
    margin-left: 2.5rem;
    color: darkgray;
    font-size: 2rem;
  }

  > :nth-child(3) {
    cursor: pointer;
  }
`;

export const LogOutDiv = styled.div`
  position: absolute;
  top: 43px;
  right: 0.5%
  background: white;
  z-index: 10;
  width: 80px;
  padding: 1rem 0;
  text-align: center;
  border: 1px solid lightgray;

  > button {
    border: none;
    background: white;
    margin: 0;
    padding: none;
    font-size: 1.6rem;
    outline: none;
    color: rgb(56, 151, 240);
    cursor: pointer;
  }
`;