import { authModalAtom } from '@/src/atoms/authModalAtom'
import { Flex, Input, Button, HStack, Text } from '@chakra-ui/react'
import { useSetAtom } from 'jotai'
import React, { useState } from 'react'

export const SignUp = () => {
  const [fieldValues, setFieldValues] = useState({
    email: '',
    password: '',
    passwordConfirm: ''
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
      <Flex direction="column" w="320px" align="center">
        <Input
          required
          name="email"
          placeholder="email"
          mb={3}
          onChange={onChange}
        />
        <Input
          required
          type="password"
          name="password"
          placeholder="password"
          mb={3}
          _hover={{
            border: '1px solid',
            borderColor: 'blue.500'
          }}
          _focus={{
            outline: 'none',
            border: '1px solid',
            borderColor: 'blue.500'
          }}
          onChange={onChange}
        />
        <Input
          required
          type="password"
          name="passwordConfirm"
          placeholder="password confirm"
          mb={3}
          _hover={{
            border: '1px solid',
            borderColor: 'blue.500'
          }}
          _focus={{
            outline: 'none',
            border: '1px solid',
            borderColor: 'blue.500'
          }}
          onChange={onChange}
        />
        <Button w="full">Log in</Button>
        <HStack>
          <Text>Already a redditor?</Text>
          <Button
            variant="link"
            color="blue.500"
            fontWeight={700}
            textDecor="underline"
            onClick={() =>
              setAuthModalState(prev => ({
                ...prev,
                view: 'login'
              }))
            }
          >
            LOG IN
          </Button>
        </HStack>
      </Flex>
    </form>
  )
}
