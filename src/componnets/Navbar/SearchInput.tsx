import { SearchIcon } from '@chakra-ui/icons'
import { InputGroup, InputLeftElement, Input } from '@chakra-ui/react'
import React from 'react'

const SearchInput = () => {
  return (
    <InputGroup flexGrow={1} mx={2}>
      <InputLeftElement pointerEvents="none">
        <SearchIcon color="gray.300" mt={1} />
      </InputLeftElement>
      <Input
        fontSize="10pt"
        _placeholder={{ color: 'gray.500' }}
        placeholder="Search Reddit"
        _hover={{
          bg: 'white',
          border: '1px solid',
          borderColor: 'blue.500'
        }}
        _focus={{
          outline: 'none',
          border: '1px solid',
          borderColor: 'blue.500'
        }}
      />
    </InputGroup>
  )
}
export default SearchInput
