import FormLogin from "./FormLogin";
import React, { Fragment, Component, useState } from "react";
import { Radio, RadioGroup, Stack } from '@chakra-ui/react'

const Login = () => {
  const [radioValue, setRadioValue] = useState('1')
  const [email, setEmail] = useState('')
  const handleSubmit = (event) => {
    event.preventDefault()
    alert(`Item radio terpilih: ${radioValue}`)
    
  }
  return (
    <Fragment>
      <FormLogin handleSubmit={handleSubmit} radioHandler={[radioValue, setRadioValue]}/>
    </Fragment>
  )
}

export default Login;