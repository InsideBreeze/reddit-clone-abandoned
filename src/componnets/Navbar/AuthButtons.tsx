import { authModalAtom } from '@/src/atoms/authModalAtom'
import { Button, Flex } from '@chakra-ui/react'
import { useSetAtom } from 'jotai/react'

const AuthButtons = () => {
  const setAuthModal = useSetAtom(authModalAtom)
  return (
    <Flex alignItems="center">
      <Button
        variant="outline"
        height="28px"
        display={{ base: 'none', md: 'flex' }}
        width={{ base: '70px', md: '110px' }}
        mr={3}
        onClick={() =>
          setAuthModal({
            view: 'login',
            open: true
          })
        }
      >
        Login
      </Button>
      <Button
        height="28px"
        display={{ base: 'none', md: 'flex' }}
        width={{ base: '70px', md: '110px' }}
        mr={3}
        onClick={() =>
          setAuthModal({
            view: 'signup',
            open: true
          })
        }
      >
        Sign up
      </Button>
    </Flex>
  )
}
export default AuthButtons
