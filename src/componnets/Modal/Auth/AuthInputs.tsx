import { authModalAtom } from '@/src/atoms/authModalAtom'
import { useAtomValue } from 'jotai'
import Login from './Login'
import { SignUp } from './SignUp'
const AuthInputs = () => {
  const authModalState = useAtomValue(authModalAtom)
  return (
    <>
      {authModalState.view === 'signup' && <SignUp />}
      {authModalState.view === 'login' && <Login />}
    </>
  )
}

export default AuthInputs
