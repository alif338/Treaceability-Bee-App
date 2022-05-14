import FormLogin from "./FormLogin";
import React, { Fragment, Component, useState } from "react";
import {useNavigate} from 'react-router-dom';
import { Navigate } from 'react-router-dom';

const Login = () => {
  const [radioValue, setRadioValue] = useState('1')
  const [email, setEmail] = useState('')
  const navigate = useNavigate()
  const handleSubmit = (event) => {
    event.preventDefault()
    if (radioValue === '1')
      navigate('/admin/dashboard');
    else
      navigate('/');
    
  }
  return (
    <Fragment>
      <FormLogin handleSubmit={handleSubmit} radioHandler={[radioValue, setRadioValue]}/>
    </Fragment>
  )
}

export default Login;