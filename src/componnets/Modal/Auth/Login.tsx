import React, { useState } from 'react'
import { Button, Flex, HStack, Input, Text } from '@chakra-ui/react'
import { useSetAtom } from 'jotai'
import { authModalAtom } from '@/src/atoms/authModalAtom'

const Login = () => {
  const [fieldValues, setFieldValues] = useState({
    email: '',
    password: ''
  })

  const setAuthModalState = useSetAtom(authModalAtom)

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFieldValues({
      ...fieldValues,
      [e.target.name]: e.target.value
    })
  }
  return (
    <form>
      <Flex direction="column" w="320px" alignItems="center">
        <Input
          required
          name="email"
          placeholder="email"
          mb={3}
          onChange={onChange}
          _hover={{
            border: '1px solid',
            borderColor: 'blue.500'
          }}
          _focus={{
            outline: 'none',
            border: '1px solid',
            borderColor: 'blue.500'
          }}
        />
        <Input
          required
          type="password"
          name="password"
          placeholder="password"
          mb={3}
          onChange={onChange}
          _hover={{
            border: '1px solid',
            borderColor: 'blue.500'
          }}
          _focus={{
            outline: 'none',
            border: '1px solid',
            borderColor: 'blue.500'
          }}
        />
        <Button w="full">Log in</Button>
        <HStack>
          <Text>New here?</Text>
          <Button
            variant="link"
            color="blue.500"
            textDecor="underline"
            fontWeight={700}
            onClick={() =>
              setAuthModalState(prev => ({
                ...prev,
                view: 'signup'
              }))
            }
          >
            Sign Up
          </Button>
        </HStack>
      </Flex>
    </form>
  )
}

export default Login
