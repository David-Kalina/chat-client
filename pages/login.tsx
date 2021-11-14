import React, { useState } from 'react'
import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Box,
  Button,
  CloseButton,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Text,
} from '@chakra-ui/react'
import { Field, Form, Formik } from 'formik'
import Link from 'next/link'
import { useAuth } from '../contexts/AuthContext'

function Login() {
  const { login } = useAuth()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  function validateEmail(value: any) {
    let error
    if (!value) {
      error = 'Email is required'
    }
    return error
  }

  function validatePassword(value: any) {
    let error
    if (!value) {
      error = 'Password required'
    }
    if (value.length < 3) {
      error = 'Password must be at least 3 characters long'
    }
    return error
  }

  return (
    <Flex m="auto" flexDir="column" h="100vh" w="100vw" align="center" justify="center">
      <Box borderRadius="md" maxW="400px" w="100%" p="2rem">
        <Heading>Login</Heading>

        <Box mt="1rem">
          <Formik
            initialValues={{ email: '', password: '' }}
            onSubmit={async (values, actions) => {
              try {
                setError('')
                setLoading(true)
                await login({ email: values.email, password: values.password })

                setLoading(false)
              } catch (error) {
                setError('Failed to create an account')
                setLoading(false)
              }
            }}
          >
            {props => (
              <Form>
                {error ? (
                  <Alert status="error" fontSize="sm">
                    <AlertIcon />
                    <Flex flexDir="column">
                      <AlertTitle mr={2}>Failed to login</AlertTitle>
                      <AlertDescription>Email or password is incorrect</AlertDescription>
                    </Flex>
                    <CloseButton
                      position="absolute"
                      right="8px"
                      top="8px"
                      onClick={() => setError('')}
                    />
                  </Alert>
                ) : null}
                <Field name="email" validate={validateEmail}>
                  {({ field, form }: any) => (
                    <FormControl isInvalid={form.errors.email && form.touched.email}>
                      <FormLabel htmlFor="email">Email</FormLabel>
                      <Input {...field} type="email" id="email" placeholder="email" />
                      <FormErrorMessage>{form.errors.email}</FormErrorMessage>
                    </FormControl>
                  )}
                </Field>
                <Field name="password" validate={validatePassword}>
                  {({ field, form }: any) => (
                    <FormControl isInvalid={form.errors.password && form.touched.password}>
                      <FormLabel htmlFor="password">Password</FormLabel>
                      <Input {...field} type="password" id="password" placeholder="password" />
                      <FormErrorMessage>{form.errors.password}</FormErrorMessage>
                    </FormControl>
                  )}
                </Field>
                <Flex flexDir="column">
                  <Button
                    mt={4}
                    colorScheme="yellow"
                    isLoading={props.isSubmitting}
                    disabled={loading}
                    type="submit"
                  >
                    Submit
                  </Button>

                  <Button
                    onClick={() =>
                      props.setValues({
                        email: 'demo@account.com',
                        password: 'demoaccount',
                      })
                    }
                    mt={4}
                    colorScheme="yellow"
                    isLoading={props.isSubmitting}
                    disabled={loading}
                    type="submit"
                  >
                    Demo Login
                  </Button>
                </Flex>
              </Form>
            )}
          </Formik>
        </Box>

        <Box mt="1rem">
          <Text fontSize="sm">
            Don&apos;t yet have an account? <Link href="/register">Register</Link>
          </Text>
        </Box>
      </Box>
    </Flex>
  )
}

export default Login
