import { Box, Button } from "@chakra-ui/react"
import { Form, Formik } from "formik"
import { withUrqlClient } from "next-urql"
import React, { useState } from "react"
import { Inputfield } from "../components/Inputfield"
import { Wrapper } from "../components/Wrapper"
import { useForgotPasswordMutation } from "../generated/graphql"
import { createUrqlClient } from "../utils/createUrqlClient"


const ForgotPassword: React.FC = ({ }) => {
  const [complete, setComplete] = useState(false)
  const [, forgotPassword] = useForgotPasswordMutation()
  return (
    <Wrapper>
      <Formik
        initialValues={{ email: "" }}
        onSubmit={async (values) => {
          await forgotPassword(values)
          setComplete(true)
        }}
      >
        {({ isSubmitting }) =>
          complete
            ? <Box textAlign='center'>A link to reset your password has been sent to your email</Box>
            : (
              <Form>
                <Box mt={4}>
                  <Inputfield
                    name="email"
                    placeholder="email"
                    label="Email"
                    type="email"
                  />
                </Box>
                <Button mt={4} type="submit" isLoading={isSubmitting} colorScheme="teal">forgot password</Button>
              </Form>
            )}
      </Formik>
    </Wrapper>
  )
}

export default withUrqlClient(createUrqlClient)(ForgotPassword)