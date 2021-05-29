import React from 'react'
import { Form, Formik } from 'formik'
import { Box, Button } from '@chakra-ui/react'
import { Wrapper } from '../components/Wrapper'
import { Inputfield } from '../components/Inputfield'
import { useRegisterMutation } from '../generated/graphql'
import { toErrorMap } from '../utils/toErrorMap'
import { useRouter } from 'next/router'
import { withUrqlClient } from 'next-urql'
import { createUrqlClient } from '../utils/createUrqlClient'

interface registerProps {

}

const Register: React.FC<registerProps> = ({ }) => {
  const [, register] = useRegisterMutation()
  const router = useRouter()

  return (
    <Wrapper>
      <Formik
        initialValues={{ email: "", username: "", password: "" }}
        onSubmit={async (values, { setErrors }) => {
          const response = await register({ options: values })
          if (response.data.register.errors) {
            setErrors(toErrorMap(response.data.register.errors))
          } else if (response.data.register.user) {
            //worked
            router.push("/")
          }
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <Inputfield
              name="username"
              placeholder="Username"
              label="Username"
            />
            <Box mt={4}>
              <Inputfield
                name="email"
                placeholder="Email"
                label="Email"
                type="email"
              />
            </Box>
            
            <Box mt={4}>
              <Inputfield
                name="password"
                placeholder="password"
                label="Password"
                type="password"
              />
            </Box>
            <Button mt={4} type="submit" isLoading={isSubmitting} colorScheme="teal">Register</Button>
          </Form>
        )}
      </Formik>
    </Wrapper>
  )
}

export default withUrqlClient(createUrqlClient)(Register)