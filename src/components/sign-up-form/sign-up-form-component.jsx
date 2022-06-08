import { useState } from "react"
import { useDispatch } from "react-redux"

import FormInput from "../form-input/form-input.component"
import Button from "../button/button.component"
import { SignUpContainer } from "./sign-up-form.styles"

import { signUpStart } from "../../store/user/user.actions"

const defaultFormFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: '',
}

const SignUpForm = () => {

  const dispatch = useDispatch()
  
  const [formFields, setFormFields] = useState(defaultFormFields)
  const {displayName, email, password, confirmPassword} = formFields


  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (event) => {
    event.preventDefault()

    if (password !== confirmPassword) {
      alert(`Password do not match`)
      return;
    }

    try{

      dispatch(signUpStart(email, password, displayName))
      // // auth sign-up
      // const { user } = await createAuthUserWithEmailAndPassword(email, password)
      
      // // for storing user sign-up data in firestore
      // await createUserDocumentFromAuth(user, {displayName})
      resetFormFields();
    } catch(error) {
      if (error.code === 'auth/email-already-in-use') {
        alert('Cannot create user, email already in use');
      } else {
        console.log('user creation encountered an error', error);
      }
    }
  }

  const handleChange = (event) => {
    const {name, value} = event.target

    setFormFields({...formFields, [name]: value})
  }

  return (
    <SignUpContainer>
      <h2>Don't have an account?</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput 
          label='Display Name'
          type='text'
          required
          name='displayName'
          onChange={handleChange}
          value={displayName}
        />

        <FormInput 
          label='Email'
          type='email'
          required
          name='email'
          onChange={handleChange}
          value={email}
        />

        <FormInput 
          label='Password'
          type='password'
          required
          name='password'
          onChange={handleChange}
          value={password}
        />

        <FormInput 
          label='Confirm Password'
          type='password'
          required
          name='confirmPassword'
          onChange={handleChange}
          value={confirmPassword}
        />

        <Button type='submit'>Sign Up</Button>
      </form>
    </SignUpContainer>
  )
}

export default SignUpForm