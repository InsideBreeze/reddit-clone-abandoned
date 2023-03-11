import { Flex, Image } from '@chakra-ui/react'
import React from 'react'
import AuthModal from '../Modal/Auth'
import AuthButtons from './AuthButtons'
import SearchInput from './SearchInput'

const Navbar = () => {
  return (
    <Flex bg="white" alignItems="center">
      <Image
        src="/images/logo.svg"
        alt=""
        h="52px"
        w="52px"
        display={{ md: 'none' }}
      />
      <Image
        src="/images/logo_with_text.svg"
        alt=""
        h="52px"
        w="117px"
        display={{ base: 'none', md: 'unset' }}
      />
      <SearchInput />
      <AuthButtons />
    </Flex>
  )
}
export default Navbar
