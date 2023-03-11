import { authModalAtom } from '@/src/atoms/authModalAtom'
import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay
} from '@chakra-ui/react'
import { useAtom } from 'jotai/react'
import AuthInputs from './AuthInputs'

const AuthModal = () => {
  const [authModalState, setAuthModalState] = useAtom(authModalAtom)
  return (
    <>
      <Modal
        isOpen={authModalState.open}
        onClose={() => setAuthModalState(prev => ({ ...prev, open: false }))}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader textAlign="center">
            {authModalState.view === 'login' && 'Login'}
            {authModalState.view === 'signup' && 'Sign up'}
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody display="flex" alignItems="center" justifyContent="center">
            <AuthInputs />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}

export default AuthModal
