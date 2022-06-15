import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useSelector } from "react-redux"

import { selectCurrentUser, selectError } from "../../store/user/user.selector"

import SignInForm from "../../components/sign-in-form/sign-in-form.component"
import SignUpForm from "../../components/sign-up-form/sign-up-form-component"

import { AuthenticationContainer } from "./authentication.styles"

const Authentication = () => {
  const navigate = useNavigate()
  const currentUser = useSelector(selectCurrentUser)
  const error = useSelector(selectError)

  useEffect(()=> {
    if(error) {
      switch (error.code) {
        case 'auth/wrong-password':
          alert('incorrect password for email');
          break;
        case 'auth/user-not-found':
          alert('no user associated with this email');
          break;
        case 'auth/email-already-in-use':
          alert('Cannot create user, email already in use');
          break;
        default:
          console.log(`Error in process: ${error}`);
      }
    }
  }, [error])

  useEffect(() => {
    if(currentUser){
      if(currentUser.displayName)
        alert(`Successfully Signed In ${currentUser.displayName}`)
      else
        alert("Account created and signed in")
      navigate('/')
    }
  }, [currentUser])

  return(
    
    <AuthenticationContainer>
      <SignInForm />
      <SignUpForm/>
    </AuthenticationContainer>
  )
}

export default Authentication