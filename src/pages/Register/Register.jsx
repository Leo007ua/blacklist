import React from 'react';
import { FormStyled, FormWrap } from './RegisterStyled';
import { useDispatch, useSelector } from 'react-redux';
import { registerThunk } from 'redux/Thunks/authThunk';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { selectUserName } from 'redux/selectors';

import { HiMiniArrowDownOnSquare} from "react-icons/hi2";
import { iconsSize } from 'components/Icon/iconSize';

export const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userName = useSelector(selectUserName);

  useEffect(() => {
    if (!userName) return;
    navigate('/contacts', { replace: true });
  }, [userName, navigate]);

  const handleSubmit = evt => {
    evt.preventDefault();

    const children = evt.currentTarget.elements;
    const name = children.name.value;
    const email = children.email.value;
    const password = children.password.value;

    const userData = { name, email, password };

    dispatch(registerThunk(userData));
    evt.currentTarget.reset();
  };

  return (
    <FormWrap>
      <h3>Registration</h3>
      <FormStyled onSubmit={handleSubmit}>
        <span>Name:</span>
        <input type="text" name="name"  placeholder="Your name" required />
        <span>Email:</span>
        <input type="email" name="email" placeholder="Your email" required />
        <span>Password:</span>
        <input type="password" name="password" minLength={7} placeholder="Your password" required />
        <button type="submit"><HiMiniArrowDownOnSquare size={iconsSize.medium} /></button>
      </FormStyled>
    </FormWrap>
  );
};

export default Register;
