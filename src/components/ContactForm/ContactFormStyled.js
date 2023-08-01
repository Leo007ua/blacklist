import styled from 'styled-components';

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 30px;
  margin-bottom: 60px;

  .contactForm__field {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }

  label {
    font-weight: 700;
    text-transform: uppercase;
    color: var(--global-black-color);
  }

  input {
    padding-left: 10px;
    padding-right: 10px;
    width: 350px;
    height: 30px;
    border: none;
    border-radius: 5px;
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
        rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;;
    :focus {
      outline: 1px solid green;
    }
  }

  button {
    width: 100px;
    height: 30px;
    background-color: aqua;
    border: none;
    border-radius: 5px;
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
        rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;;
    cursor: pointer;
    &:active {
      background-color: green;
      color: white;
    }
    &:hover{
        background-color: lightgreen;
    }
    transition: background-color 0.5s;
  }
`;