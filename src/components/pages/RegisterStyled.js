import styled from 'styled-components';

export const FormWrap = styled.div`
  max-width: 500px;
  margin: 70px auto;
`;

export const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  span {
    font-size: 16px;
    font-weight: bold;
  }
  input {
    width: 300px;
    padding: 5px;
    font-size: 14px;
    border-radius: 8px;
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
      rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;

    &:focus {
      outline: 1px solid green;
    }
  }
  button {
    width: 100px;
    cursor: pointer;
    padding: 5px;
    font-size: 14px;
    border-radius: 10px;
    background-color: aquamarine;
    &:hover {
      background-color: lightgreen;
    }
    transition: background-color 0.5s;

    &:active {
      background-color: green;
      color: white;
    }
  }
`;
