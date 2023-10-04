import React from 'react'
import SignupCard from '../components/Signup'
import LoginCard from '../components/Login'
import authScreenAtom from '../atoms/authAtom'
import {useRecoilValue} from 'recoil'

const AuthPage = () => {

  const authScreenState = useRecoilValue(authScreenAtom)
  return (
    <>
    {authScreenState === 'login' ? <LoginCard/> : <SignupCard/>}

    </>
  )
}

export default AuthPage
