import React from 'react';

import { HiMiniArrowDownOnSquare} from "react-icons/hi2";
import { FormStyled, FormWrap } from './RegisterStyled';
import { useDispatch } from 'react-redux';
import { logInThunk } from 'redux/Thunks/authThunk';
import { iconsSize } from 'components/Icon/iconSize';

export const Login = () => {
  const dispatch = useDispatch();

  const handleOnSubmit = evt => {
    evt.preventDefault();

    const children = evt.currentTarget.elements;
    const email = children.email.value;
    const password = children.password.value;
    const logInUserData = { email: email, password: password };

    dispatch(logInThunk(logInUserData));
    evt.currentTarget.reset();
  };

  return (
    <FormWrap>
      <h3>Login</h3>
      <FormStyled onSubmit={handleOnSubmit}>
        <span>Email:</span>
        <input type="email" name="email" placeholder="Your e-mail" required />
        <span>Password:</span>
        <input type="password" name="password" placeholder="Your password" required />
        <button type="submit"><HiMiniArrowDownOnSquare size={iconsSize.medium} /></button>
      </FormStyled>
    </FormWrap>
  );
};

export default Login;

