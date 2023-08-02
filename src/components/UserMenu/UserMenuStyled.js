import styled from 'styled-components';

export const UserMenuStyled = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-left: auto;
  font-size: 20px;
  color: navy;
  p {
    display: flex;
    align-items: center;
    margin: 0;
  }
  button {
    border-radius: 5px;
    cursor: pointer;
    padding: 10px;
    font-size: 20px;
    color: navy;
    cursor: pointer;
    background-color: aquamarine;
    &:hover{
        background-color: lightgreen;
    }
    transition: background-color 0.5s;
    box-shadow: 0px 0px 5px 2px rgba(0, 0, 0, 0.5);
  }
`;
