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
  VStack,
} from '@chakra-ui/react'
import { Field, Form, Formik } from 'formik'
import Link from 'next/link'
import React, { useState } from 'react'
import { useAuth } from '../contexts/AuthContext'

const Register: React.FC = () => {
  const { register } = useAuth()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  function validateEmail(value: any) {
    let error
    if (!value) {
      error = 'Email is required'
    }
    return error
  }

  function validateName(value: any) {
    let error
    if (!value) {
      error = 'Name is required'
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
  function validateConfirmPassword(password: any, value: any) {
    let error
    if (!value) {
      error = 'Confirm Password required'
    }
    if (password !== value) {
      error = 'Passwords do not match!s'
    }
    return error
  }

  return (
    <Flex
      m="auto"
      flexDir="column"
      h="100vh"
      w="100vw"
      align="center"
      justify="center"
      alignSelf="center"
    >
      <Flex
        borderRadius="md"
        maxW="600px"
        h="100%"
        w="100%"
        p="2rem"
        justifySelf="center"
        flexDir="column"
        justifyContent="center"
      >
        <Heading>Create account</Heading>

        <Box mt="1rem">
          <Formik
            initialValues={{
              email: '',
              password: '',
              confirmPassword: '',
              firstName: '',
              lastName: '',
              username: '',
            }}
            onSubmit={async values => {
              try {
                setError('')
                setLoading(true)

                await register({
                  email: values.email,
                  password: values.password,
                  firstName: values.firstName,
                  lastName: values.lastName,
                })
              } catch (error) {
                setError('Failed to create an account')
              }
            }}
          >
            {props => (
              <Form>
                {error ? (
                  <Alert status="error" fontSize="sm">
                    <AlertIcon />
                    <AlertTitle mr={2}>Failed to register</AlertTitle>
                    <AlertDescription>Something went wrong</AlertDescription>
                    <CloseButton
                      position="absolute"
                      right="8px"
                      top="8px"
                      onClick={() => setError('')}
                    />
                  </Alert>
                ) : null}

                <VStack spacing={4}>
                  <Field name="firstName" validate={validateName}>
                    {({ field, form }: any) => (
                      <FormControl isInvalid={form.errors.firstName && form.touched.firstName}>
                        <FormLabel htmlFor="firstname">First Name</FormLabel>
                        <Input {...field} id="firstName" placeholder="John" />
                        <FormErrorMessage>{form.errors.firstName}</FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>
                  <Field name="lastName" validate={validateName}>
                    {({ field, form }: any) => (
                      <FormControl isInvalid={form.errors.lastName && form.touched.lastName}>
                        <FormLabel htmlFor="lastName">Last Name</FormLabel>
                        <Input {...field} id="lastName" placeholder="Doe" />
                        <FormErrorMessage>{form.errors.lastName}</FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>
                  <Field name="username" validate={validateName}>
                    {({ field, form }: any) => (
                      <FormControl isInvalid={form.errors.username && form.touched.username}>
                        <FormLabel htmlFor="username">Username</FormLabel>
                        <Input {...field} id="username" placeholder="Doe" />
                        <FormErrorMessage>{form.errors.username}</FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>
                  <Field name="email" validate={validateEmail}>
                    {({ field, form }: any) => (
                      <FormControl isInvalid={form.errors.email && form.touched.email}>
                        <FormLabel htmlFor="email">Email</FormLabel>
                        <Input {...field} id="email" placeholder="email" />
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
                  <Field
                    name="confirmPassword"
                    validate={(value: any) => validateConfirmPassword(props.values.password, value)}
                  >
                    {({ field, form }: any) => (
                      <FormControl
                        isInvalid={form.errors.confirmPassword && form.touched.confirmPassword}
                      >
                        <FormLabel htmlFor="confirmPassword">Confirm Password</FormLabel>
                        <Input
                          {...field}
                          type="password"
                          id="confirmPassword"
                          placeholder="confirm password"
                        />
                        <FormErrorMessage>{form.errors.confirmPassword}</FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>
                  <Button
                    colorScheme="yellow"
                    isLoading={props.isSubmitting}
                    disabled={loading}
                    type="submit"
                  >
                    Submit
                  </Button>
                </VStack>
              </Form>
            )}
          </Formik>
        </Box>

        <Box mt="1rem">
          <Text fontSize="sm">
            Already have an account? <Link href="/login">Log in</Link>
          </Text>
        </Box>
      </Flex>
    </Flex>
  )
}

export default Register
