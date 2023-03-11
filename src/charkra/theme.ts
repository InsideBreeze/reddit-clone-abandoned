import { extendTheme } from '@chakra-ui/react'
import { Button } from '../charkra/button'

const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: 'gray.200'
      }
    }
  },
  components: {
    Button
  }
})

export default theme
