import { ComponentStyleConfig } from '@chakra-ui/react'

export const Button: ComponentStyleConfig = {
  baseStyle: {
    borderRadius: '60px',
    fontSize: '10pt',
    fontWeight: '700px',
    _focus: {
      boxShadow: 'none'
    }
  },
  variants: {
    outline: {
      color: 'blue.500',
      border: '1px solid',
      borderColor: 'blue.500'
    },
    solid: {
      bg: 'blue.500',
      color: 'white',
      _hover: {
        bg: 'blue.400'
      }
    }
  }
}
