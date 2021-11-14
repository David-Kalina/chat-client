import { useToast } from '@chakra-ui/react'

function ErrorMessage({ error }: { error: Error }) {
  const toast = useToast()
  return toast({
    title: error,
    description: 'Error performing action',
    status: 'error',
    duration: 1000,
    isClosable: true,
  })
}

export default ErrorMessage
